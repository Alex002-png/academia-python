# N10.M3.T3 — CUDA básico: qué es un kernel y cómo lo usan las herramientas que ya conoces

*Construido bajo DOC-12 v1.0.0. Investigación pedagógica: `docs/investigacion/n10-m3-gpu-cuda-memoria.md`.*

**La gran pregunta de este laboratorio:** has usado CUDA indirectamente en cada laboratorio desde M1.T3 sin verla nunca directamente — ¿qué hay realmente ahí debajo?

**Entorno objetivo:** terminal local; RTX 5070 con CUDA Toolkit instalado (M1.T3) como referencia principal.

⚠️ **Ruta sin GPU disponible:** los Pasos 2-3 (lectura y predicción del kernel de ejemplo) son enteramente conceptuales y no requieren GPU. Si no tienes una, sustituye el Paso 1 por releer tus propias estadísticas GPU-vs-CPU ya medidas en M1.T3, y el error inducido en vivo por razonar en papel qué esperarías ver en `nvidia-smi` en cada caso, en vez de observarlo directamente.

**Fluencia de terminal asumida:** completa (M3.T1-T2).

**Prerrequisitos técnicos:** M3.T1-T2 completos; CUDA Toolkit ya instalado.

**Prerrequisitos conceptuales:** M1.T3 (compilación con `-DGGML_CUDA=ON`).

**Duración estimada — desglosada:** contexto (~15 min) + verificación real de uso de CUDA (~20 min) + lectura guiada de un kernel de ejemplo (~25 min) + error inducido en vivo (~15 min) + mini laboratorio y desafío (~15 min) + evaluación (~10 min) → **total realista: 90-105 min.**

**Nivel de dificultad:** intermedio.

**Fuera de alcance de este laboratorio (y por qué):** escribir kernels CUDA propios — fuera del alcance de este nivel; el objetivo es el modelo mental operativo, no ser desarrollador de kernels (delimitación explícita de DOC-10 §8).

**Conexión con el laboratorio anterior y el siguiente:** el Laboratorio 10 dio el argumento de memoria. Este laboratorio abre la capa de cómputo que organiza cómo se mueven y procesan esos bytes. Deja abierta la pregunta que el Laboratorio 12 resuelve: ¿qué pasa cuando compartes ese trabajo entre varias solicitudes a la vez?

---

## 1. Objetivo

Al terminar vas a poder explicar el modelo de programación CUDA (kernel, grid, block, thread) sin escribir CUDA C real, e identificar dónde las herramientas que ya usaste invocan CUDA por debajo.

## 2. Contexto

Desde M1.T3 compilaste llama.cpp con soporte CUDA — pero nunca viste qué hace CUDA exactamente por debajo de ese flag. Hoy abres esa capa, no para que escribas kernels propios, sino para que entiendas el modelo de programación que hace posible todo lo que ya usaste.

## 3. Requisitos

- M3.T1-T2 completos.
- CUDA Toolkit ya instalado (M1.T3).

☐ **Checkpoint 0 —** `nvcc --version` responde.

## 4. Explicación conceptual

Para el 99% de los casos reales —incluida toda tu inferencia de M1-M2— nadie escribe kernels desde cero: se usan bibliotecas ya optimizadas. Pero entender el modelo ayuda a diagnosticar cuándo algo no usa la GPU correctamente.

**Modelo mental de hoy:** un **kernel** es la misma instrucción, repetida por miles de threads simultáneos, cada uno con su identificador para saber qué porción de datos le toca. Los threads se organizan en **blocks** (co-programados en un Streaming Multiprocessor), y los blocks en un **grid** que cubre el problema completo. La unidad mínima real de ejecución es el **warp** — 32 threads en lockstep, confirmado en la CUDA Guide oficial.

## 5. Ejecución paso a paso

**Paso 1 — Verifica que llama.cpp REALMENTE invoca CUDA**

```
# Terminal 1:
./build/bin/llama-cli -m ruta/al/modelo.gguf -p "Escribe un párrafo largo sobre el universo" -ngl 999

# Terminal 2, mientras corre:
nvidia-smi --query-gpu=utilization.gpu,utilization.memory --format=csv -l 1
```

**Paso 2 — Lee un kernel mínimo, predice antes de leer la explicación**

```c
__global__ void sumar(float* a, float* b, float* resultado, int n) {
    int i = blockIdx.x * blockDim.x + threadIdx.x;
    if (i < n) {
        resultado[i] = a[i] + b[i];
    }
}
```

¿Qué crees que calcula `i`? ¿Por qué existe el `if`?

**Paso 3 — Verifica tu predicción**

`i` calcula el índice único y global del thread, combinando su block (`blockIdx.x`), el tamaño de cada block (`blockDim.x`) y su posición dentro de su block (`threadIdx.x`). El `if` existe porque el número de threads lanzados no siempre coincide exactamente con el tamaño de los datos.

## 6. Error inducido en vivo

```
cmake -B build-sin-cuda
cmake --build build-sin-cuda --config Release
./build-sin-cuda/bin/llama-cli -m ruta/al/modelo.gguf -p "..." -ngl 999
```

Compila SIN `-DGGML_CUDA=ON` deliberadamente y corre la misma inferencia con `-ngl 999`. Confirma con `nvidia-smi` que la GPU permanece en 0%, sin ningún error visible.

## 7. Comprensión

- ¿Por qué el binario sin CUDA no dio error, aunque nunca tocó la GPU?
- ¿Qué pasaría si el `if` no existiera y lanzaras más threads que elementos?
- ¿Cómo se relaciona el "warp" con el beneficio de paralelismo del Laboratorio 9?

## 8. Puntos de verificación

☐ Confirmé actividad real de GPU (no solo memoria) con `nvidia-smi`.
☐ Predije el propósito de `i` y del `if` antes de leer la explicación.
☐ Reproduje el binario sin CUDA y confirmé 0% de actividad.

## 9. Diagnóstico de errores

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| 0% de cómputo incluso con binario CUDA correcto | Puede ser el fenómeno memory-bound de M3.T2, o el binario no usa CUDA realmente. | Distingue: memoria sube pero cómputo bajo (M3.T2) vs. ninguno de los dos sube (no usa CUDA). | Compara contra el binario deliberadamente sin CUDA. | Si se comportan igual, recompila verificando la salida de cmake. | Verificar actividad real, nunca confiar solo en el flag de compilación. |
| No entiendo blockIdx/blockDim/threadIdx | Tres conceptos distintos que se combinan, fácil de confundir la primera vez. | threadIdx = posición en tu block; blockDim = tamaño de cada block; blockIdx = en qué block estás. | Dibuja una fila de blocks del mismo tamaño. | Repite la lectura con el dibujo mental. | No memorizar la fórmula sin la imagen geométrica. |

## 10. Mini laboratorio

Busca en la documentación/código de llama.cpp al menos una mención real de "block"/"thread"/"warp" y explica qué operación crees que paraleliza.

## 11. Desafío

Describe cómo cambiaría el cálculo de `i` para sumar matrices 2D (1000×1000) en vez de un vector — ¿qué necesitarías además de blockIdx/blockDim/threadIdx?

## 12. Buenas prácticas profesionales

- Verifica actividad real de GPU antes de asumir que una herramienta usa CUDA correctamente.
- No necesitas escribir CUDA para diagnosticar problemas de configuración.
- Dibuja mentalmente la organización de blocks/threads antes de leer la fórmula del índice.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [CUDA C++ Programming Guide — Programming Model](https://docs.nvidia.com/cuda/cuda-c-programming-guide/) | NVIDIA | EN | ~30 min | Intermedio | Sección exacta de kernels/grids/blocks/threads/warps. | 🟢 Antes |
| [GPU MODE — lectures](https://github.com/gpu-mode/lectures) | GPU MODE | EN | Variable | Intermedio-avanzado | Puente natural hacia escribir kernels reales, fuera de este nivel. | ⭐ Profundización |

## Evaluación

**Lo esencial en una frase:** un kernel CUDA es la misma instrucción repetida por miles de threads organizados en blocks dentro de un grid — el mecanismo exacto detrás de cada laboratorio de M1-M3 que ya usaste.

**Las siete capacidades de dominio:** explicar (kernel/grid/block/thread con modelo geométrico) · predecir (propósito de cada término del índice) · detectar errores (confirmar uso real de CUDA vs. flag de compilación) · corregir (comparación con binario sin CUDA) · modificar (nada nuevo, reutiliza M1.T3) · aplicar en contexto nuevo (extender a 2D, desafío) · usar en un proyecto (diagnóstico de configuración real).

**Repetir desde cero, sin guía:** explica qué calcula `i = blockIdx.x * blockDim.x + threadIdx.x` con un dibujo mental, sin copiar la explicación.

**Pregunta metacognitiva de proceso:** ¿qué tan distinto se siente usar `-ngl` ahora, sabiendo lo que pasa por debajo, comparado con M1.T3 cuando era una caja negra?
