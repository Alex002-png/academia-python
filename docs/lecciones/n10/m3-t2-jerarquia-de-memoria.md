# N10.M3.T2 — Jerarquía de memoria: por qué la inferencia de LLMs está limitada por ancho de banda, no por cómputo

*Construido bajo DOC-12 v1.0.0. Investigación pedagógica: `docs/investigacion/n10-m3-gpu-cuda-memoria.md`. El tema más denso conceptualmente de todo el nivel.*

**La gran pregunta de este laboratorio:** si tu GPU tiene miles de núcleos de cómputo disponibles, ¿por qué generar UN token puede sentirse lento de todos modos?

**Entorno objetivo:** terminal local; conceptual con analogías rigurosas + verificación empírica en RTX 5070.

**Fluencia de terminal asumida:** completa (M3.T1).

**Prerrequisitos técnicos:** M3.T1 completo.

**Prerrequisitos conceptuales:** tablas de datos de M2.T3 (tokens/segundo por quant type).

**Duración estimada — desglosada:** contexto (~20 min) + cálculo propio de bytes por token (~25 min) + contraste con ancho de banda real (~20 min) + error inducido en vivo (~10 min) + mini laboratorio y desafío (~20 min) + evaluación (~10 min) → **total realista: 95-110 min.**

**Nivel de dificultad:** intermedio-avanzado.

**Fuera de alcance de este laboratorio (y por qué):** cómo CUDA organiza el cómputo en sí (kernels, grids, threads) se cubre en el Laboratorio 11 (M3.T3).

**Conexión con el laboratorio anterior y el siguiente:** el Laboratorio 9 dejó un matiz sin resolver sobre paralelismo y generación token a token. Este laboratorio lo resuelve y explica, con el argumento correcto, por qué cuantizar acelera la inferencia. Deja abierta la pregunta que el Laboratorio 11 resuelve: ¿cómo organiza CUDA exactamente el cómputo que mueve esos bytes?

---

## 1. Objetivo

Al terminar vas a poder describir la jerarquía de memoria de una GPU moderna, y explicar —conectado con tus propios datos de M2.T3— por qué la generación token a token está típicamente limitada por ancho de banda de memoria, no por cómputo.

## 2. Contexto

El Laboratorio 9 te dejó con un matiz sin resolver. Hoy lo resuelves — y con él, explicas POR QUÉ cuantizar (M2) acelera la inferencia: no solo porque el modelo "pesa menos", sino porque hay literalmente menos bytes que mover desde la memoria de la GPU en cada token generado.

## 3. Requisitos

- M3.T1 completo.
- Tus tablas de M2.T3 a mano.

☐ **Checkpoint 0 —** tienes acceso a tus tablas de tokens/segundo por quant type de M2.T3.

## 4. Explicación conceptual

**Honestidad metodológica obligatoria antes de empezar:** el marco conceptual de hoy —el *roofline model* / *arithmetic intensity*— NO viene de la CUDA Programming Guide de NVIDIA (verificado: no aparece en su índice). Viene de literatura de arquitectura de computadoras (Williams et al., 2009) aplicada después, por la comunidad de ingeniería de inferencia, al caso específico de LLMs.

**Jerarquía de memoria de una GPU**, de más rápida/pequeña a más lenta/grande: registros (privados por hilo) → memoria compartida (por bloque, latencia ~L1) → memoria global/VRAM (accesible por todo el chip, tus "12GB") → memoria constante/textura (solo lectura).

**Modelo mental de hoy:** una serie de almacenes cada vez más grandes y más lentos — los registros son la mesa de trabajo inmediata, la VRAM global es la bodega completa. Generar UN token exige traer TODOS los pesos relevantes desde la bodega hasta la mesa — y ese viaje se repite, completo, por cada token nuevo.

Dato técnico citable (ingeniería de inferencia, no NVIDIA): la fase de *prefill* (procesar el prompt) es compute-bound; la fase de *decode* (generar cada token) es memory-bound, con cifras reportadas de utilización de cómputo tan bajas como ~0.6% en decode con lote de tamaño 1.

## 5. Ejecución paso a paso

**Paso 1 — Calcula bytes movidos por token**

```python
parametros = 3_000_000_000  # ej. llama3.2 (aprox.)
for bits, nombre in [(16,"FP16"), (8,"Q8"), (4,"Q4")]:
    bytes_por_token = parametros * bits / 8
    gb_por_token = bytes_por_token / (1024**3)
    print(f"{nombre}: ~{gb_por_token:.2f} GB movidos por CADA token generado")
```

**Paso 2 — Contrasta contra el ancho de banda real de tu RTX 5070**

```python
ancho_banda_gbs = 672  # GB/s -- verifica la cifra oficial exacta de TU RTX 5070
gb_por_token_q4 = 1.5  # del Paso 1, ajusta al valor real
tiempo_teorico_seg = gb_por_token_q4 / ancho_banda_gbs
print(f"Tiempo teórico mínimo por token: ~{tiempo_teorico_seg*1000:.2f} ms")
print(f"Tokens/segundo teóricos máximos: ~{1/tiempo_teorico_seg:.0f}")
```

**Paso 3 — Verifica la conexión con la cuantización**

Compara el techo teórico Q4 vs. Q8 vs. FP16 contra tu tabla REAL de M2.T3 — la proporción teórica debería aproximarse a la real.

## 6. Error inducido en vivo

```
nvidia-smi --query-gpu=utilization.gpu,memory.used --format=csv -l 1
```

Con llama.cpp generando activamente en otra terminal, observa GPU-Util — puede sorprenderte lo bajo que es.

## 7. Comprensión

- ¿Por qué GPU-Util puede ser bajo mientras el modelo SÍ genera texto y usa VRAM?
- ¿Por qué duplicar el ancho de banda aceleraría más la generación que duplicar los núcleos de cómputo?
- ¿Por qué prefill y decode son distintos en este sentido?

## 8. Puntos de verificación

☐ Calculé bytes movidos por token a 3 precisiones.
☐ Contrasté contra el ancho de banda real de mi RTX 5070.
☐ Verifiqué que la proporción teórica se aproxima a la real de M2.T3.
☐ Observé un GPU-Util bajo durante generación activa.

## 9. Diagnóstico de errores

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| Mi tiempo teórico difiere mucho del real de M2.T3 | El cálculo es un límite inferior idealizado, sin overhead real. | Compara orden de magnitud, no valor exacto (2-5x esperable). | Verifica ancho de banda real de TU GPU y conteo real de parámetros. | Ajusta cifras de entrada; el modelo simplificado nunca es exacto. | Tratar el roofline como estimación de orden de magnitud. |
| GPU-Util al 100% todo el tiempo, contradiciendo el ~0.6% citado | `nvidia-smi` reporta actividad agregada por intervalo, métrica menos granular que profiling especializado. | La cifra de ~0.6% viene de herramientas mucho más finas. | Es limitación de la herramienta, no contradicción del concepto. | Interpreta GPU-Util como señal aproximada, no exacta. | Conocer las limitaciones de tu herramienta de medición. |

## 10. Mini laboratorio

Predice tokens/segundo teóricos de un modelo nuevo ANTES de medirlo, luego mide con tu script de M2.T3 y compara.

## 11. Desafío

Explica, sin copiar el documento, por qué duplicar el ancho de banda beneficiaría más a un chatbot interactivo que a entrenamiento por lotes. Cita tu cálculo del Paso 1-2.

## 12. Buenas prácticas profesionales

- Declara siempre el origen real de un marco conceptual que uses.
- Trata cálculos teóricos de rendimiento como estimaciones de orden de magnitud.
- Conoce las limitaciones de tus herramientas de medición.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [CUDA C++ Programming Guide — Memory Hierarchy](https://docs.nvidia.com/cuda/cuda-c-programming-guide/) | NVIDIA | EN | ~20 min | Intermedio | Fuente oficial de la jerarquía de memoria. | 🟢 Antes |
| [Roofline: An Insightful Visual Performance Model](https://dl.acm.org/doi/10.1145/1498765.1498785) | Williams, Waterman, Patterson (UC Berkeley) | EN | ~40 min | Avanzado | Fuente académica original — la atribución correcta. | ⭐ Profundización |

## Evaluación

**Lo esencial en una frase:** la generación token a token está limitada por cuántos bytes puede mover la GPU (ancho de banda), no por cuántas operaciones puede hacer — la razón real de por qué cuantizar acelera la inferencia.

**Las siete capacidades de dominio:** explicar (jerarquía de memoria y prefill vs. decode) · predecir (efecto de ancho de banda vs. núcleos) · detectar errores (limitaciones de nvidia-smi básico) · corregir (interpretar correctamente GPU-Util) · modificar (predecir un modelo nuevo, mini laboratorio) · aplicar en contexto nuevo (desafío sobre chatbot vs. entrenamiento) · usar en un proyecto (base directa de M3.T3-T5).

**Repetir desde cero, sin guía:** explica por qué cuantizar acelera la inferencia con el argumento de bytes movidos, no "el archivo pesa menos".

**Pregunta metacognitiva de proceso:** ¿qué se sintió más difícil — la jerarquía de memoria en sí, o que tu GPU pueda estar "ocupada" sin estar "trabajando"?
