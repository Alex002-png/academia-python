# N10.M3.T1 — Por qué la GPU es rápida: paralelismo masivo frente a cómputo secuencial

*Construido bajo DOC-12 v1.0.0. Investigación pedagógica: `docs/investigacion/n10-m3-gpu-cuda-memoria.md`.*

**La gran pregunta de este laboratorio:** ¿por qué es la GPU más rápida para esto — y qué tipo exacto de trabajo es "esto"?

**Entorno objetivo:** terminal local; contenido conceptual enseñable sin GPU, con la RTX 5070 como ilustración real.

**Fluencia de terminal asumida:** completa (M1-M2).

**Prerrequisitos técnicos:** M1-M2 completos; Python con NumPy, y PyTorch con CUDA si está disponible (opcional).

**Prerrequisitos conceptuales:** M1.T3 y M2.T3 (brechas de velocidad GPU/CPU ya observadas sin explicación hasta ahora).

**Duración estimada — desglosada:** contexto (~20 min) + demostración medible CPU vs. GPU (~25 min) + conexión con M2.T3 (~15 min) + error inducido en vivo (~10 min) + mini laboratorio y desafío (~15 min) + evaluación (~10 min) → **total realista: 85-100 min.**

**Nivel de dificultad:** intermedio — primer tema puramente conceptual de hardware de la Academia.

**Fuera de alcance de este laboratorio (y por qué):** la jerarquía de memoria y por qué el ancho de banda es el cuello de botella real en inferencia se cubren en el Laboratorio 10 (M3.T2).

**Conexión con el laboratorio anterior y el siguiente:** M2 completo dejó al estudiante con datos reales de velocidad GPU vs. CPU sin explicación del mecanismo. Este laboratorio da esa explicación, con un matiz deliberadamente sin resolver: el paralelismo ayuda, pero no siempre igual. El Laboratorio 10 resuelve ese matiz.

---

## 1. Objetivo

Al terminar vas a poder explicar la diferencia arquitectónica real entre CPU y GPU, y por qué la inferencia de un LLM encaja en el modelo de paralelismo de la GPU, con una demostración medida en tu propio hardware.

## 2. Contexto

Ya viviste la diferencia de velocidad GPU vs. CPU-only dos veces (M1.T3, M2.T3) sin que nadie te explicara todavía POR QUÉ ocurre. Hoy cierras esa brecha con el modelo mental correcto — el mismo que la documentación oficial de NVIDIA usa para explicar por qué existe la arquitectura GPU.

## 3. Requisitos

- M1-M2 completos.
- Python con NumPy; PyTorch con CUDA opcional pero recomendado.

☐ **Checkpoint 0 —** tus tablas de tokens/segundo de M1.T3 y M2.T3 a mano.

## 4. Explicación conceptual

Cita textual de la CUDA Programming Guide de NVIDIA, verificada por fetch directo: *"The GPU is specialized for highly parallel computations and therefore designed such that more transistors are devoted to data processing rather than data caching and flow control."*

**Modelo mental de hoy:** la CPU es un puñado de expertos generalistas, cada uno resolviendo un problema complejo por su cuenta. La GPU es miles de trabajadores simples haciendo, todos a la vez, la misma operación simple sobre datos distintos. Multiplicar una matriz gigante — el corazón de la inferencia de un LLM — es exactamente ese segundo tipo de trabajo.

⚠️ Matiz sin resolver hoy: la ventaja de la GPU es paralelismo masivo, pero generar UN token a la vez en una conversación interactiva no siempre lo aprovecha tan bien como procesar el prompt inicial completo — el Laboratorio 10 resuelve esto.

## 5. Ejecución paso a paso

**Paso 1 — Mide la diferencia real en tu hardware**

```python
import numpy as np, time

A = np.random.rand(4000, 4000).astype(np.float32)
B = np.random.rand(4000, 4000).astype(np.float32)

inicio = time.time()
C = A @ B
print(f"CPU (NumPy): {time.time()-inicio:.3f}s")

# Si tienes PyTorch con CUDA:
# import torch
# A_gpu = torch.rand(4000,4000, device="cuda")
# B_gpu = torch.rand(4000,4000, device="cuda")
# torch.cuda.synchronize(); inicio = time.time()
# C_gpu = A_gpu @ B_gpu
# torch.cuda.synchronize(); print(f"GPU: {time.time()-inicio:.3f}s")
```

**Paso 2 — Conecta con M1.T3 y M2.T3**

Revisa tus tablas de tokens/segundo y relaciónalas con lo que acabas de medir: la inferencia es, en el fondo, una cadena larga de multiplicaciones de matrices como la del Paso 1.

## 6. Error inducido en vivo

```python
A = np.random.rand(10, 10).astype(np.float32)
B = np.random.rand(10, 10).astype(np.float32)
# repite la comparación CPU/GPU del Paso 1 con estas matrices pequeñas
```

Mide una sola multiplicación de matrices PEQUEÑAS en CPU vs. GPU. Observa cuál gana esta vez.

## 7. Comprensión

- ¿Por qué la GPU probablemente NO fue más rápida para la matriz pequeña?
- ¿Por qué un solo núcleo de GPU es más lento que uno de CPU, y aun así la GPU completa gana en el Paso 1?
- ¿Qué sacrifica la GPU al dedicar más transistores a procesar datos que a caché/control de flujo?

## 8. Puntos de verificación

☐ Medí la diferencia CPU vs. GPU (o razoné con datos de M1/M2 si no hay GPU en este entorno).
☐ Conecté la medición con mis tablas de M1.T3/M2.T3.
☐ Reproduje el error inducido y entendí por qué se invierte el resultado.

## 9. Diagnóstico de errores

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| GPU no fue más rápida ni en la matriz grande | No hay GPU/CUDA disponible, o fallback silencioso a CPU. | `torch.cuda.is_available()` antes de sospechar de la medición. | Si da False, es config, no concepto. | Razona sobre la brecha ya medida en M1.T3 si no hay GPU en este entorno. | Verificar disponibilidad ANTES de comparar. |
| GPU más lenta en la matriz pequeña (error inducido) | Costo fijo de transferir datos y lanzar el kernel pesa más que el cómputo mínimo. | Compara tamaños: 100 números vs. 16 millones. | Prueba tamaños intermedios, busca el punto de cruce. | No hay nada que arreglar — es el comportamiento esperado. | Nunca asumir que GPU siempre gana. |

## 10. Mini laboratorio

Repite la comparación con 4 tamaños de matriz (100, 500, 1000, 4000) y tabula — identifica el tamaño donde la GPU empieza a ganar en tu hardware.

## 11. Desafío

Predice qué pasaría al duplicar el tamaño una vez más (8000×8000) — ¿la ventaja de GPU crece, se mantiene o se reduce? Verifica si tu hardware lo permite.

## 12. Buenas prácticas profesionales

- Verifica siempre que tu código realmente usa la GPU antes de comparar rendimiento.
- No asumas que GPU siempre gana — depende del tamaño del problema.
- Conecta cada concepto nuevo con datos que ya produjiste tú mismo.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [CUDA C++ Programming Guide — Introduction](https://docs.nvidia.com/cuda/cuda-c-programming-guide/) | NVIDIA | EN | ~20 min | Intermedio | Fuente oficial de la cita usada hoy. | 🟢 Antes |
| [GPU MODE — lectures](https://github.com/gpu-mode/lectures) | GPU MODE | EN | Variable | Intermedio-avanzado | Comunidad especializada en GPU aplicada a ML/LLMs. | ⭐ Profundización |

## Evaluación

**Lo esencial en una frase:** la GPU es rápida específicamente para trabajo masivamente paralelo con suficiente volumen para amortizar su costo fijo de arranque — multiplicar matrices grandes encaja exactamente en ese perfil.

**Las siete capacidades de dominio:** explicar (diferencia CPU/GPU con la cita de NVIDIA) · predecir (qué se beneficia de CPU o GPU según tamaño) · detectar errores (comparación sesgada por no verificar uso real de GPU) · corregir (verificar `is_available()`) · modificar (repetir con distintos tamaños, mini laboratorio) · aplicar en contexto nuevo (predecir a un tamaño no medido) · usar en un proyecto (base de M3.T2 y siguientes).

**Repetir desde cero, sin guía:** mide CPU vs. GPU para dos tamaños distintos y explica el patrón de memoria.

**Pregunta metacognitiva de proceso:** ¿qué modelo mental tenías de "por qué la GPU es rápida" antes de hoy, y en qué se diferencia del actual?
