# N10.M3.T4 — Medir tu propia GPU: VRAM, batching y saturación

*Construido bajo DOC-12 v1.0.0. Investigación pedagógica: `docs/investigacion/n10-m3-gpu-cuda-memoria.md`.*

**La gran pregunta de este laboratorio:** si de todos modos hay que mover los pesos desde VRAM para cada token, ¿qué pasa si sirves varias conversaciones a la vez?

**Entorno objetivo:** terminal local, RTX 5070 12GB como referencia principal; ruta CPU-only para batching, más limitada, documentada como comparación.

**Fluencia de terminal asumida:** completa (M3.T1-T3).

**Prerrequisitos técnicos:** M3.T1-T3 completos; llama.cpp compilado con CUDA, específicamente `llama-server`.

**Prerrequisitos conceptuales:** M3.T2 (jerarquía de memoria, la analogía de "compartir el viaje a la bodega").

**Duración estimada — desglosada:** contexto (~10 min) + monitoreo de VRAM en función del contexto (~25 min) + laboratorio de batching (~30 min) + comparación throughput vs. latencia (~20 min) + evaluación (~15 min) → **total realista: 100-115 min.**

**Nivel de dificultad:** intermedio.

**Fuera de alcance de este laboratorio (y por qué):** batching y serving a escala de producción con colas y balanceo pertenecen a N9 (model serving con vLLM/Ray) — aquí se mide el fenómeno en una sola máquina.

**Conexión con el laboratorio anterior y el siguiente:** el Laboratorio 11 abrió la capa de cómputo de CUDA. Este laboratorio conecta memoria y cómputo con un caso de uso real: servir a más de un usuario. Deja abierta la pregunta que el Laboratorio 13 resuelve: con todo lo aprendido en M3, ¿cómo diagnosticas el caso límite de un modelo que definitivamente no cabe?

---

## 1. Objetivo

Al terminar vas a poder medir el uso real de VRAM en función del contexto cargado, y observar el efecto de batching sobre throughput agregado y latencia individual.

## 2. Contexto

M3.T2 dio el argumento de por qué mover pesos desde VRAM domina el costo. Hoy conectas eso con un caso real: si hay que pagar ese costo para cada solicitud, ¿qué pasa si compartes ese costo entre varias solicitudes simultáneas? Es la base conceptual directa de por qué tu columna vertebral local podría atender más de una conversación a la vez.

## 3. Requisitos

- M3.T1-T3 completos.
- llama.cpp compilado con CUDA (M1.T3), específicamente `llama-server`.

☐ **Checkpoint 0 —** `llama-server` disponible en tu build.

## 4. Explicación conceptual

**Modelo mental de hoy:** batching es compartir el mismo viaje a la bodega entre varios pedidos. Si de todos modos hay que mover los pesos completos desde VRAM global para generar un token, procesar 4 solicitudes simultáneas amortiza ese costo fijo entre 4 veces más trabajo útil — el throughput agregado puede subir significativamente. El costo: cada solicitud individual puede tardar un poco más que si tuviera la GPU completa para ella sola.

## 5. Ejecución paso a paso

**Paso 1 — Monitorea VRAM en función del contexto**

```
nvidia-smi --query-gpu=memory.used --format=csv -l 2
```

Mantén una conversación creciente en otra terminal y observa cómo sube la memoria.

**Paso 2 — Levanta un servidor local**

```
./build/bin/llama-server -m ruta/al/modelo.gguf -ngl 999 -c 4096 --port 8080
```

**Paso 3 — Mide throughput secuencial (línea base)**

```python
import requests, time, threading

def una_solicitud():
    requests.post("http://localhost:8080/completion",
        json={"prompt": "Cuenta una historia corta sobre el espacio.", "n_predict": 100})

inicio = time.time()
for _ in range(4):
    una_solicitud()
print(f"4 solicitudes secuenciales: {time.time()-inicio:.2f}s total")
```

**Paso 4 — Mide throughput en paralelo**

```python
inicio = time.time()
hilos = [threading.Thread(target=una_solicitud) for _ in range(4)]
for h in hilos: h.start()
for h in hilos: h.join()
print(f"4 solicitudes en paralelo: {time.time()-inicio:.2f}s total")
```

## 6. Error inducido en vivo

```python
hilos = [threading.Thread(target=una_solicitud) for _ in range(16)]
# repite el patrón del Paso 4 con 16 en vez de 4
```

Repite con 16 solicitudes simultáneas. Observa si alguna falla o se degrada — hay un punto de saturación real.

## 7. Comprensión

- ¿Por qué el Paso 4 fue más rápido que el Paso 3, pero probablemente NO 4 veces más rápido?
- ¿Qué le pasó a la latencia individual al subir de 4 a 16 solicitudes?
- Si sirves a 3 usuarios simultáneos, ¿qué le pasa a la latencia de cada uno?

## 8. Puntos de verificación

☐ Medí VRAM en función del contexto acumulado.
☐ Servidor `llama-server` respondiendo.
☐ Medí throughput secuencial.
☐ Medí throughput en paralelo y comparé.
☐ Encontré (o me acerqué a) un punto de saturación con 16 solicitudes.

## 9. Diagnóstico de errores

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| Paralelo ≈ secuencial, sin mejora | El servidor puede no estar aprovechando batch real. | Revisa flags de batch size (`-b`) en la documentación. | Aumenta explícitamente el batch size y remide. | Ajusta configuración según documentación oficial. | Revisar configuración de batching ANTES de medir. |
| 16 solicitudes hacen fallar/congelar el servidor | Saturación de VRAM o de otro recurso. | Revisa `nvidia-smi` en el momento del fallo. | Reduce gradualmente (16→8→4) hasta que deje de fallar. | Opera bajo el punto de saturación, o reduce contexto por solicitud. | Conocer el punto de saturación antes de diseñar con cierta concurrencia asumida. |

## 10. Mini laboratorio

Repite con 2, 4, 8 y 16 solicitudes, tabulando throughput agregado y latencia promedio — identifica dónde tu hardware deja de mejorar.

## 11. Desafío

Con tu tabla completa: ¿qué límite máximo de solicitudes simultáneas fijarías para tu capstone, y qué trade-off aceptas con esa elección?

## 12. Buenas prácticas profesionales

- Mide throughput Y latencia individual por separado.
- Conoce el punto de saturación de tu hardware antes de diseñar con concurrencia asumida.
- Revisa la documentación de batching antes de asumir que el paralelismo funciona óptimamente por defecto.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [llama.cpp — tools/server README](https://github.com/ggml-org/llama.cpp/tree/master/tools/server) | ggml-org | EN | ~20 min | Intermedio | Flags de batch size de `llama-server`. | 🟢 Antes |

## Evaluación

**Lo esencial en una frase:** batching amortiza el costo fijo de mover pesos entre varias solicitudes, subiendo el throughput agregado, pero tiene un límite real de saturación y un costo de latencia individual — el mismo trade-off que reaparecerá en cualquier sistema de serving real, incluido N9.

**Las siete capacidades de dominio:** explicar (por qué batching amortiza el costo) · predecir (efecto sobre latencia al subir concurrencia) · detectar errores (servidor no aprovechando batch real) · corregir (ajustar configuración) · modificar (variar número de solicitudes, mini laboratorio) · aplicar en contexto nuevo (fijar un límite para el capstone) · usar en un proyecto (parámetro real de diseño del capstone).

**Repetir desde cero, sin guía:** mide throughput secuencial vs. paralelo con un número de solicitudes distinto.

**Pregunta metacognitiva de proceso:** ¿te sorprendió más el punto donde el batching dejó de ayudar, o que ayudara tanto al principio?
