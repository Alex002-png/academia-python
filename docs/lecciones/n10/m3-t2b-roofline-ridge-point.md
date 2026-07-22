# N10.M3.T2b — El roofline model aplicado a tu propia RTX 5070: calcula tu ridge point real

*Construido bajo DOC-12 v1.0.0, estándar de excelencia elevado. Investigación pedagógica adenda en `docs/investigacion/n10-m3-gpu-cuda-memoria.md`.*

**La gran pregunta de este laboratorio:** ¿en qué punto exacto, medido en operaciones por byte, tu RTX 5070 deja de estar limitada por ancho de banda y empieza a estar limitada por cómputo — y dónde cae la inferencia de un LLM en ese mapa?

**Entorno objetivo:** terminal local + cálculo Python con las specs reales de tu RTX 5070.

**Fluencia de terminal asumida:** completa (M3.T2).

**Prerrequisitos técnicos:** M3.T2 completo; Python.

**Prerrequisitos conceptuales:** M3.T2 (decode memory-bound, prefill compute-bound, cualitativamente).

**Duración estimada — desglosada:** contexto (~20 min) + lectura del paper original (~20 min) + cálculo del ridge point real (~25 min) + ubicar inferencia en el roofline (~20 min) + error inducido en vivo (~15 min) + evaluación (~10 min) → **total realista: 90-110 min.**

**Nivel de dificultad:** avanzado — aplicación cuantitativa de un modelo académico real a tu propio hardware.

**Fuera de alcance de este laboratorio (y por qué):** medir el roofline empíricamente con un profiler real excede el alcance de este nivel; aquí se calcula analíticamente con specs publicadas.

**Conexión con el laboratorio anterior y el siguiente:** M3.T2 dio el concepto cualitativo. Este laboratorio lo formaliza cuantitativamente con tu propio hardware. Deja abierta la pregunta que M3.T3 resuelve: ya sabes CUÁNTO limita el ancho de banda — ¿qué hace exactamente CUDA a nivel de kernel para explotar el paralelismo que sí está disponible?

---

## 1. Objetivo

Al terminar vas a poder calcular el ridge point real de tu RTX 5070, ubicar la intensidad aritmética real de decode y prefill en ese mapa, y explicar por qué la cifra de marketing de "TOPS" no es directamente utilizable para este cálculo.

## 2. Contexto

M3.T2 te dio el concepto de que decode es memory-bound y prefill es compute-bound. Hoy formalizas esa intuición con el modelo académico real que la sustenta — el roofline model — aplicado con cifras reales de tu propia GPU.

## 3. Requisitos

- M3.T2 completo.
- Python para los cálculos.
- Acceso a internet para leer el paper original.

☐ **Checkpoint 0 —** dispuesto a leer el paper original, no un resumen.

## 4. Explicación conceptual

El **roofline model** (Williams, Waterman, Patterson, 2009, Communications of the ACM) grafica el techo de cómputo pico contra el techo de ancho de banda en función de la **intensidad operacional** (FLOPs por byte movido desde memoria — el paper original usa este término con precisión técnica). El **ridge point** = TFLOPS pico ÷ ancho de banda pico: por debajo, memory-bound; por encima, compute-bound.

**Cifras reales de tu RTX 5070** (Blackwell GB205): ancho de banda 672 GB/s (GDDR7, bus 192 bits), cómputo CUDA-core FP16 30.9 TFLOPS, cómputo Tensor Core FP16 denso ~123.5 TFLOPS (de agregadores técnicos, no de la página oficial de NVIDIA).

**Dato real que ubica LLMs en este mapa:** un estudio que aplica roofline a Llama-2-7B (arXiv 2402.16363) encontró que en DECODE la intensidad es ~1.0 OPs/byte — profundamente memory-bound. En PREFILL, sube a 1024-1215 OPs/byte — claramente compute-bound.

⚠️ **La trampa de marketing:** NVIDIA publica "988 AI TOPS" para la RTX 5070 — mezcla precisiones reducidas (probablemente FP4/INT8 con sparsity) y NO es comparable al FLOPS que este cálculo necesita.

## 5. Ejecución paso a paso

**Paso 1 — Lee la definición precisa de intensidad operacional**

Identifica en el paper original la fórmula exacta y la distinción entre tráfico procesador-caché y caché-DRAM.

**Paso 2 — Calcula el ridge point con ambas cifras de cómputo**

```python
ancho_banda_gbs = 672
tflops_cuda = 30.9
tflops_tensor = 123.5  # agregadores, no oficial NVIDIA

ridge_point_cuda = (tflops_cuda * 1000) / ancho_banda_gbs
ridge_point_tensor = (tflops_tensor * 1000) / ancho_banda_gbs
print(f"Ridge point (CUDA cores): {ridge_point_cuda:.1f} FLOPs/byte")
print(f"Ridge point (Tensor Cores): {ridge_point_tensor:.1f} FLOPs/byte")
```

**Paso 3 — Ubica decode y prefill en tu propio roofline**

```python
intensidad_decode = 1.0
intensidad_prefill = 1100

for nombre, intensidad in [("decode", intensidad_decode), ("prefill", intensidad_prefill)]:
    estado_cuda = "memory-bound" if intensidad < ridge_point_cuda else "compute-bound"
    estado_tensor = "memory-bound" if intensidad < ridge_point_tensor else "compute-bound"
    print(f"{nombre} ({intensidad} OPs/byte): {estado_cuda} (vs CUDA), {estado_tensor} (vs Tensor)")
```

## 6. Error inducido en vivo

```python
tops_marketing = 988
ridge_point_falso = (tops_marketing * 1000) / ancho_banda_gbs
print(f"Ridge point con cifra de marketing: {ridge_point_falso:.1f} FLOPs/byte")
```

Compara contra los ~46-184 calculados en el Paso 2.

## 7. Comprensión

- ¿Por qué el ridge point con 988 TOPS es tan distinto del calculado con TFLOPS reales?
- ¿Por qué tu GPU tiene DOS ridge points válidos, no uno?
- Si decode está tan por debajo del ridge point, ¿mejoraría comprar una GPU con más TFLOPS pero el mismo ancho de banda?

## 8. Puntos de verificación

☐ Leí la definición precisa de intensidad operacional.
☐ Calculé mis dos ridge points reales.
☐ Ubiqué decode y prefill en mi propio roofline.
☐ Reproduje el error de la cifra de marketing.

## 9. Diagnóstico de errores

*Checklist de categorías revisada: ninguna de las 7 categorías aplica de forma directa — es aritmética en Python puro, independiente de versión de librería, SO o red. Las cifras de TFLOPS/ancho de banda usadas sí dependen de qué GPU tiene el estudiante (RTX 5070 de referencia), pero eso es una entrada declarada del cálculo, no un error de configuración del sistema.*

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| Ridge point con 988 TOPS da un número absurdo | Mezcla precisiones reducidas no comparables al FLOPS de precisión estándar. | Compara el orden de magnitud contra los 123.5 TFLOPS reales. | Busca si NVIDIA asume sparsity estructurada sin decirlo en el titular. | Usa siempre TFLOPS de precisión densa estándar. | Tratar cifras de marketing con el mismo escepticismo que cifras económicas de M1.T1b. |
| Dos ridge points distintos, no sé cuál usar | Ambos son correctos, miden hardware distinto. | Revisa qué operación domina la inferencia (multiplicación de matrices → Tensor Cores). | — | Usa el de Tensor Cores para LLMs, declarando cuál usaste. | Nunca reportar "el" ridge point sin especificar contra qué unidad se calculó. |

## 10. Mini laboratorio

Calcula el ridge point de una GPU distinta (busca specs reales de otra GPU) y compara la tendencia.

## 11. Desafío

Calcula cuantitativamente cuánto se movería tu ridge point si el ancho de banda se duplicara (1344 GB/s), y qué le pasaría a la clasificación de decode.

## 12. Buenas prácticas profesionales

- Verifica qué precisión y sparsity asume una cifra de rendimiento antes de usarla en un cálculo.
- Calcula el ridge point relevante para el tipo de operación que te importa.
- Declara la fuente y confianza de cualquier especificación que no puedas verificar oficialmente.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [Roofline (ACM)](https://dl.acm.org/doi/abs/10.1145/1498765.1498785) | Williams, Waterman, Patterson, 2009 | EN | ~30 min | Avanzado | Paper original, fuente primaria. | 🟢 Antes |
| [LLM Inference Unveiled](https://arxiv.org/html/2402.16363v4) | arXiv 2402.16363 | EN | ~25 min | Avanzado | Cifras reales de intensidad decode/prefill en Llama-2-7B. | 🔵 Durante |

## Evaluación

**Lo esencial en una frase:** el roofline model convierte "la GPU es rápida para esto" en un cálculo verificable — el ridge point de tu RTX 5070 confirma matemáticamente por qué decode está limitado por ancho de banda.

**Las siete capacidades de dominio:** explicar (definición de intensidad operacional) · predecir (efecto de duplicar ancho de banda) · detectar errores (cifra de marketing no comparable) · corregir (sustituir por TFLOPS densos) · modificar (calcular ridge point de otra GPU, mini laboratorio) · aplicar en contexto nuevo (cálculo cuantitativo del desafío) · usar en un proyecto (argumento cuantitativo para decisiones de hardware del capstone).

**Repetir desde cero, sin guía:** calcula el ridge point de tu GPU con sus specs reales, sin copiar números.

**Pregunta metacognitiva de proceso:** ¿cambió este laboratorio tu confianza en las cifras de "TOPS" de marketing?
