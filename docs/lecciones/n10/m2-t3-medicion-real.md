# N10.M2.T3 — Medición real en tu hardware: tamaño, VRAM, velocidad, antes/después

*Construido bajo DOC-12 v1.0.0. Investigación pedagógica: `docs/investigacion/n10-m2-cuantizacion-optimizacion.md`.*

**La gran pregunta de este laboratorio:** ¿cómo mides, con metodología real y no con una sola corrida, el efecto genuino de cuantizar sobre tu propia RTX 5070?

**Entorno objetivo:** terminal local, RTX 5070 12GB como referencia principal; ruta CPU-only obligatoria como comparación.

**Fluencia de terminal asumida:** completa (M1 + M2.T1-T2).

**Prerrequisitos técnicos:** M2.T1-T2 completos, con los 3 quant types ya descargados; `nvidia-smi` disponible.

**Prerrequisitos conceptuales:** M1.T2 (cliente Python) y M1.T3 (control de `-ngl`).

**Duración estimada — desglosada:** contexto (~10 min) + script de benchmarking propio (~25 min) + medición de VRAM (~20 min) + comparación GPU vs. CPU sistemática (~25 min) + error inducido en vivo, OOM medido (~15 min) + evaluación (~10 min) → **total realista: 105-120 min.**

**Nivel de dificultad:** intermedio.

**Fuera de alcance de este laboratorio (y por qué):** por qué la GPU es más rápida a nivel de hardware (arithmetic intensity, ancho de banda) se cubre en M3 completo, que retoma estas mediciones para explicarlas a fondo.

**Conexión con el laboratorio anterior y el siguiente:** M2.T1-T2 dieron modelo mental y criterio cualitativo. Este laboratorio produce la evidencia cuantitativa que exige DOC-10 para este módulo. Deja abierta la pregunta que M3 resuelve: ¿por qué exactamente estos números salieron así — qué hay en el hardware que explica la brecha GPU/CPU que acabas de medir?

---

## 1. Objetivo

Al terminar vas a poder medir, con metodología controlada, el efecto de la cuantización sobre tamaño en disco, VRAM pico usada y velocidad de inferencia — antes y después de cuantizar, en tu propio hardware.

## 2. Contexto

Hoy produces la evidencia cuantitativa real que exige DOC-10 para este módulo: "medición antes/después", no una tabla ya dada — el mismo principio de disciplina numérica que rige todo este proyecto, aplicado ahora a rendimiento de sistemas.

## 3. Requisitos

- M2.T1-T2 completos, con los 3 quant types del Laboratorio 6 ya descargados.
- `nvidia-smi` disponible.

☐ **Checkpoint 0 —** `nvidia-smi` responde y muestra tu RTX 5070.

## 4. Explicación conceptual

**Modelo mental de hoy:** medir rendimiento es un experimento controlado, no una anécdota — mismo prompt, mismo hardware, múltiples corridas, promedio y varianza reportados. Vas a medir tres cosas distintas sin confundirlas: **tamaño en disco** (estático, ya visto), **VRAM pico usada** (crece con el modelo cargado MÁS el KV cache del contexto activo — no es fijo por modelo), y **velocidad de inferencia** (tokens/segundo).

## 5. Ejecución paso a paso

**Paso 1 — Script de benchmarking propio**

```python
import requests, time

def medir(modelo, prompt, repeticiones=3):
    tiempos = []
    for _ in range(repeticiones):
        inicio = time.time()
        r = requests.post("http://localhost:11434/api/generate",
            json={"model": modelo, "prompt": prompt, "stream": False})
        tiempos.append(time.time() - inicio)
    return sum(tiempos)/len(tiempos), tiempos

promedio, corridas = medir("llama3.2:q4_K_M", "Explica la fotosíntesis en 3 frases.")
print(f"Promedio: {promedio:.2f}s — corridas individuales: {corridas}")
```

**Paso 2 — Mide VRAM pico en reposo y con contexto**

```
nvidia-smi --query-gpu=memory.used,memory.total --format=csv
```

Mide justo después de cargar el modelo (conversación corta) y de nuevo tras una conversación larga.

**Paso 3 — Compara los 3 quant types**

```python
for modelo in ["llama3.2:q4_K_M", "llama3.2:q5_K_M", "llama3.2:q8_0"]:
    prom, _ = medir(modelo, "Explica la fotosíntesis en 3 frases.")
    print(f"{modelo}: {prom:.2f}s promedio")
```

**Paso 4 — Repite en modo CPU-only**

```
./build/bin/llama-cli -m ruta/al/modelo_q4_K_M.gguf -p "Explica la fotosíntesis en 3 frases." -ngl 0 -t 6
```

## 6. Error inducido en vivo

```
./build/bin/llama-cli -m ruta/al/modelo_q8_0.gguf -ngl 999 -c 32768
```

Carga Q8_0 con un contexto deliberadamente alto y `-ngl 999` — busca provocar un `CUDA out of memory` real y anota exactamente en qué `-c` empieza a fallar.

## 7. Comprensión

- ¿Por qué ninguna de las 3 repeticiones del Paso 1 dio exactamente el mismo tiempo?
- ¿Por qué la VRAM del Paso 2 fue mayor con conversación larga, si el archivo del modelo no cambió?
- ¿A qué `-c` empezó a fallar Q8_0, y por qué Q4_K_M probablemente aguantaría más?

## 8. Puntos de verificación

☐ Script de benchmarking con múltiples repeticiones.
☐ VRAM medida en al menos dos momentos distintos.
☐ Tabla propia de tokens/segundo para los 3 quant types en GPU.
☐ Comparación repetida en CPU-only.
☐ Punto exacto de OOM medido.

## 9. Diagnóstico de errores

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| Mediciones varían más del 20-30% entre corridas | Otro proceso compite por CPU/GPU, o la primera corrida incluye costo de carga. | Revisa qué más corría; compara primera corrida vs. siguientes. | Descarta la primera corrida y cierra aplicaciones pesadas, remide. | Repite en entorno controlado. | Protocolo fijo de medición antes de tomar cualquier cifra como válida. |
| `nvidia-smi` no refleja el pico real | Snapshot puntual, no captura el instante de mayor uso durante generación activa. | Compara lectura en reposo vs. durante generación. | Usa `nvidia-smi -l 1` mientras generas en otra terminal. | Monitoreo continuo en vez de lectura puntual. | Nunca confiar en una sola lectura como máximo. |
| El OOM no aparece incluso con `-c` alto | El modelo/contexto siguen cabiendo en 12GB — no es un fallo del laboratorio. | Revisa VRAM libre según `nvidia-smi`. | Aumenta `-c` progresivamente o usa un modelo más grande. | Sigue subiendo hasta encontrar el límite real. | No asumir que todo error en vivo falla al primer intento. |

## 10. Mini laboratorio

Repite la medición variando el TAMAÑO del prompt de entrada (corto vs. largo) — ¿el tiempo de arrancar a generar escala igual que el tiempo total?

## 11. Desafío

Arma una tabla única de 3 quant types × 2 hardware (GPU/CPU) — 6 filas 100% propias — y señala el mejor punto de equilibrio para uso interactivo cotidiano.

## 12. Buenas prácticas profesionales

- Nunca reportes una cifra de rendimiento de una sola corrida.
- Cierra aplicaciones que compitan por GPU/CPU antes de medir.
- Guarda tus scripts de benchmarking — se reutilizan en M3 y en el cierre de M2.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [Ollama API Documentation](https://github.com/ollama/ollama/blob/main/docs/api.md) | Ollama | EN | ~10 min | Intermedio | Estadísticas de duración internas de la API — referencia cruzada de tu medición manual. | 🔵 Durante |

## Evaluación

**Lo esencial en una frase:** medir rendimiento es un experimento controlado, nunca una cifra de una sola ejecución ni una cifra ajena sin verificar.

**Las siete capacidades de dominio:** explicar (por qué una sola medición no basta) · predecir (qué quant type debería ser más rápido) · detectar errores (medición contaminada por otros procesos) · corregir (protocolo de medición controlado) · modificar (variar tamaño de prompt, mini laboratorio) · aplicar en contexto nuevo (tabla completa del desafío) · usar en un proyecto (insumo directo del cierre de M2).

**Repetir desde cero, sin guía:** escribe un script de benchmarking desde cero y mide tokens/segundo con al menos 3 repeticiones.

**Pregunta metacognitiva de proceso:** ¿en qué momento una cifra que esperabas resultó distinta a lo medido, y qué te enseñó sobre confiar en intuición frente a medición?
