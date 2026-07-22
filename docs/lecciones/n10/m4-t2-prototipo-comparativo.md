# N10.M4.T2 — Prototipo comparativo con datos propios

*Construido bajo DOC-12 v1.0.0. Investigación pedagógica: `docs/investigacion/n10-m4-juicio-ecosistema.md`. Primer laboratorio del nivel donde un fallo del smoke test es un resultado tan válido como un éxito.*

**La gran pregunta de este laboratorio:** ¿vale la pena, para TU caso de uso y TU hardware, el esfuerzo real de instalar y correr vLLM — o el veredicto correcto es descartarlo con evidencia?

**Entorno objetivo:** terminal local; **WSL2 obligatorio para vLLM** (sin soporte nativo oficial en Windows, verificado), RTX 5070 como referencia.

**Fluencia de terminal asumida:** completa (M4.T1), más disposición a operar dentro de WSL2 (nuevo para el estudiante en este punto del currículo).

**Prerrequisitos técnicos:** M4.T1 completo; WSL2 instalado (`wsl --install` desde PowerShell como administrador); CUDA Toolkit configurado dentro de la distribución WSL2.

**Prerrequisitos conceptuales:** N1.M5.T4 (memoria virtual — la misma idea detrás de PagedAttention); M3.T4 (batching, throughput vs. latencia).

**Duración estimada — desglosada:** contexto (~15 min) + instalación en WSL2 (~25-35 min) + smoke test de compatibilidad (~15 min) + Ruta A: comparación de concurrencia (~30 min) O Ruta B: documentar el descarte (~20 min) + evaluación (~15 min) → **total realista: 110-135 min**, con margen adicional real por el riesgo de compatibilidad documentado.

**Nivel de dificultad:** intermedio-avanzado — primer laboratorio del nivel con resultado de instalación genuinamente incierto.

**Fuera de alcance de este laboratorio (y por qué):** la decisión final de adopción/descarte para el capstone se cubre en el Laboratorio 16 (M4.T3), que integra este prototipo con el resto del nivel.

**Conexión con el laboratorio anterior y el siguiente:** M4.T1 dio los criterios. Este laboratorio produce el prototipo real, con un resultado que puede ser éxito o fallo documentado — ambos válidos. Deja abierta la pregunta que el Laboratorio 16 resuelve: con esta evidencia (cualquiera que sea), ¿qué decides para tu capstone?

---

## 1. Objetivo

Al terminar vas a poder construir el mismo caso de uso con 2+ herramientas, medir con datos propios (o documentar honestamente un fallo de compatibilidad), y explicar la diferencia real entre el modelo de uso de Ollama/llama.cpp y vLLM.

## 2. Contexto

DOC-10 exige "evaluar herramientas con prototipo" — no una tabla leída, construir algo y medirlo. La investigación previa a este laboratorio encontró algo que cambia el diseño: la RTX 5070 tiene un **issue abierto y sin resolver** en el repositorio oficial de vLLM (arquitectura Blackwell, sm_120). Este laboratorio tiene, legítimamente, dos rutas posibles — ambas resultados válidos.

## 3. Requisitos

- M4.T1 completo.
- WSL2 instalado y funcional.
- CUDA Toolkit configurado DENTRO de WSL2 (no basta con tenerlo en Windows).
- Margen de tiempo real para fricción genuina de instalación.

☐ **Checkpoint 0 —** `wsl --status` confirma que WSL2 está instalado y funcional.

## 4. Explicación conceptual

⚠️ **Advertencia explícita:** a diferencia de todos los laboratorios anteriores, este tiene un resultado de instalación genuinamente incierto — no por falta de cuidado tuyo, sino porque el repositorio oficial de vLLM tiene un issue abierto específico de tu arquitectura de GPU (error típico: `CUDA error: no kernel image is available for execution on the device`).

**Modelo mental de hoy:** vLLM no es "otro Ollama". Su innovación central, PagedAttention, gestiona el KV cache en bloques no contiguos (la misma idea que la paginación de memoria virtual de N1.M5.T4) específicamente para servir MUCHAS solicitudes concurrentes con alta utilización de GPU — el mismo tipo de problema que N9 aborda en model serving. No está optimizado para un único usuario local, donde Ollama/llama.cpp brillan. `--gpu-memory-utilization` (default 0.9) es conceptualmente distinto de `-ngl`: vLLM asume el modelo completo en GPU y solo controla cuánta memoria adicional reservar para el cache.

## 5. Ejecución paso a paso

**Paso 1 — Instala vLLM dentro de WSL2**

```
# Dentro de tu terminal WSL2:
pip install vllm
nvidia-smi
nvcc --version
```

Usa un modelo pequeño en formato safetensors (NO el GGUF de tus laboratorios anteriores — el soporte GGUF de vLLM es "highly experimental").

**Paso 2 — Corre el smoke test ANTES de cualquier comparación**

```
vllm serve Qwen/Qwen2.5-0.5B-Instruct --max-model-len 2048
```

**RUTA A**: el servidor arranca — continúa al Paso 3. **RUTA B**: error de CUDA/kernel/compatibilidad — continúa al Paso 4.

**Paso 3 — [RUTA A] Compara concurrencia: 1 solicitud vs. varias simultáneas**

```python
import requests, time, threading

def una_solicitud_vllm():
    requests.post("http://localhost:8000/v1/completions",
        json={"model": "Qwen/Qwen2.5-0.5B-Instruct", "prompt": "Cuenta una historia corta.", "max_tokens": 100})

# Repite el patrón secuencial vs. paralelo de M3.T4 con 8 o 16 solicitudes,
# comparando contra tus resultados YA MEDIDOS de llama-server en M3.T4
```

**Paso 4 — [RUTA B] Documenta el descarte con evidencia**

```
# Copia el mensaje de error EXACTO
# Compara contra: github.com/vllm-project/vllm/issues (busca 'sm_120' o 'Blackwell')
# Confirma: ¿es el mismo problema documentado, o algo distinto?
```

## 6. Error inducido en vivo

```
vllm serve Qwen/Qwen2.5-0.5B-Instruct --max-model-len 2048 --gpu-memory-utilization 0.95
```

Independientemente de tu ruta: prueba un valor agresivo de `--gpu-memory-utilization`. Observa qué pasa.

## 7. Comprensión

- ¿Por qué este laboratorio declara que un fallo del smoke test es un resultado VÁLIDO, a diferencia de otros errores inducidos que siempre se esperaba que ocurrieran?
- Si tomaste la Ruta A: ¿por qué la ventaja de vLLM se hizo más evidente con MÁS solicitudes simultáneas?
- ¿Por qué `--gpu-memory-utilization` es conceptualmente distinto de `-ngl`, aunque ambos controlen "cuánta GPU usar"?

## 8. Puntos de verificación

☐ Intenté instalar vLLM en WSL2, con el resultado documentado.
☐ Ejecuté el smoke test antes de cualquier comparación de rendimiento.
☐ Completé la Ruta A o la Ruta B, con evidencia real.
☐ Reproduje el error inducido con `--gpu-memory-utilization 0.95`.

## 9. Diagnóstico de errores

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| `CUDA error: no kernel image is available` | Incompatibilidad conocida entre wheels oficiales y arquitectura Blackwell (sm_120). | Confirma contra el issue #35432 del repositorio oficial. | Busca si hay una build nightly de PyTorch con soporte sm_120. | Si no hay solución estable, documenta el descarte (Ruta B) — es un resultado completo. | Correr el smoke test ANTES de cualquier comparación de rendimiento. |
| `No available memory for the cache blocks` | vLLM reserva agresivamente VRAM al arrancar; en 12GB puede no quedar margen. | Revisa VRAM libre con `nvidia-smi` justo antes de arrancar. | Reduce `--gpu-memory-utilization` a 0.7-0.8 y reintenta. | Ajusta el parámetro o `--max-model-len`; si persiste, es evidencia para la Ruta B. | Empezar con un modelo deliberadamente pequeño para el smoke test. |
| WSL2 no detecta la GPU | Driver de WSL2 distinto de instalación Linux nativa. | Confirma que `nvidia-smi` funciona en Windows normal primero. | Verifica el driver de Windows más reciente compatible con WSL2 CUDA. | Actualiza el driver de Windows; NO instales un driver Linux separado dentro de WSL2. | Verificar `nvidia-smi` dentro de WSL2 como paso 0. |

## 10. Mini laboratorio

Repite el smoke test con un segundo modelo pequeño de otra familia — ¿el resultado es consistente entre modelos?

## 11. Desafío

Escribe un párrafo técnico explicando, con tu evidencia real, en qué escenario recomendarías vLLM sobre Ollama/llama.cpp para otro estudiante con tu mismo hardware — y en cuál lo desaconsejarías.

## 12. Buenas prácticas profesionales

- Corre siempre un smoke test con el modelo más pequeño posible antes de comprometerte a una comparación más grande.
- Un fallo de compatibilidad documentado con evidencia es un resultado de ingeniería tan válido como un éxito.
- No instales drivers duplicados entre Windows y WSL2.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [vLLM — Documentación oficial (instalación GPU)](https://docs.vllm.ai/en/latest/getting_started/installation/gpu.html) | vLLM Project | EN | ~20 min | Intermedio | Requisitos de entorno, ausencia de soporte nativo Windows. | 🟢 Antes |
| [vLLM vs. llama.cpp — comparación técnica](https://developers.redhat.com/articles/2026/06/15/llamacpp-vs-vllm-choosing-right-local-llm-inference-engine) | Red Hat Developer | EN | ~20 min | Intermedio | Benchmarks reales de concurrencia, fuente técnica seria. | 🔵 Durante |

## Evaluación

**Lo esencial en una frase:** un prototipo real puede terminar en adopción o en descarte, y ambos son resultados de ingeniería completos cuando están respaldados por evidencia.

**Las siete capacidades de dominio:** explicar (diferencia de diseño vLLM vs. Ollama/llama.cpp) · predecir (si el smoke test reduce confusión de causas de fallo) · detectar y corregir (los 3 errores documentados) · usar en un proyecto (el resultado es insumo directo de M4.T3 y el capstone).

**Repetir desde cero, sin guía:** diseña (sin ejecutar) el plan de un smoke test para una herramienta nueva, incluyendo qué harías en cada ruta posible.

**Pregunta metacognitiva de proceso:** ¿cómo te sentiste al enfrentar un laboratorio donde el "éxito" no estaba garantizado de antemano? ¿Cambió tu forma de acercarte a la instalación?
