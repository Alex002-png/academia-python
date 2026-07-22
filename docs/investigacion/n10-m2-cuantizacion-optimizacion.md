# Investigación Pedagógica — N10.M2 · Cuantización y optimización

*Conforme a DOC-12 §0bis. Documento independiente, aprobado antes de redactar los laboratorios de M2. Investigación real por fetch directo (WebFetch), 2026-07-21 — misma sesión de investigación citada en `docs/syllabus/syl-n10.md` §8 y en `docs/investigacion/n10-m1-runtimes-locales.md`.*

## 1. Cómo enseñan este concepto exacto las fuentes de referencia

**No existe curso universitario de referencia dedicado a "cuantización de LLMs en GGUF"** — misma ausencia honesta ya declarada en la investigación de M1: es un subcampo demasiado reciente para tener un lugar establecido en un syllabus de CS tradicional (MIT/CMU/Stanford). La fuente más autorizada disponible es la **tabla oficial de tipos de cuantización de Hugging Face** (`huggingface.co/docs/hub/en/gguf`), cruzada con el propio código/README de `tools/quantize` en el repositorio de llama.cpp.

Lo que sí se puede afirmar con evidencia real: la tabla de HF enseña cuantización por **comparación estructurada de familias** (legacy Q4_0/Q5_0/Q8_0 vs. K-quant Q2_K-Q6_K), con una cifra concreta de bits-por-peso (bpw) para cada una — un patrón de "dato cuantitativo antes que recomendación cualitativa" que vale la pena imitar: el estudiante debe ver el número real de bpw antes de que se le diga "Q4 es bueno para esto".

## 2. Errores de novato documentados específicamente para este flujo

1. **Tratar el número del quant type como una escala lineal de "mejor a peor"** — Q8 no es "el doble de bueno" que Q4; cada nivel es un punto distinto en una curva de rendimientos decrecientes, y a partir de cierto punto (Q6_K/Q8_0) la ganancia de calidad frente a Q5_K_M es marginal mientras el costo en tamaño/velocidad sigue creciendo linealmente.
2. **Comparar calidad de dos quant types con un solo prompt conversacional** — la degradación por cuantización no es uniforme entre tareas: suele notarse antes en razonamiento matemático/lógico estructurado y seguimiento estricto de formato que en conversación casual, donde puede pasar completamente desapercibida.
3. **Confundir "tamaño en disco" con "uso real de VRAM en inferencia"** — el archivo GGUF cuantizado es el punto de partida, pero el KV cache (que crece con el contexto usado, no con el tamaño del modelo) y el overhead del runtime se suman por encima, y ninguno de los dos está "cuantizado" de la misma forma que los pesos.
4. **Citar la cifra de "~75% menos tamaño, ~3.5% menos calidad" de Q4_K_M como un hecho medido**, cuando en realidad es una cifra de blogs/comunidad, no una medición oficial de llama.cpp ni de HuggingFace — honestidad metodológica ya aplicada en `syl-n10.md` §8 y heredada aquí sin relajación.

## 3. Síntesis crítica

El mecanismo real que distingue una buena explicación de cuantización de una mala no es la exhaustividad de tipos (hay más de una decena de variantes GGUF) — es **anclar cada decisión en un trade-off medible en tres ejes simultáneos** (tamaño, velocidad, calidad), nunca en uno solo. La tabla de HuggingFace hace bien el eje "tamaño" (bpw exactos) pero no mide "calidad" de forma cuantitativa — eso es exactamente el vacío que el Principio §3.3 del syllabus (verificación empírica, nunca cifras de catálogo) ya identificó, y que M2 resuelve exigiendo que el propio estudiante mida la diferencia de calidad con su propia batería de prompts, en vez de heredar la cifra de un blog.

**Limitación real de la fuente HF frente a lo que el estudiante necesita:** la tabla no dice nada sobre VRAM real en inferencia (solo bpw teóricos de almacenamiento) ni sobre tokens/segundo — ambos exigen medición directa en hardware real, que ninguna fuente externa puede proveer para la RTX 5070 específica del estudiante. Esto no es una carencia de la fuente, es exactamente la razón por la que M2.T3 existe como laboratorio de medición propia y no como lectura de una tabla ajena.

## 4. Estrategia propuesta para M2

- **T1 abre con el cálculo teórico de tamaño** (parámetros × bits ÷ 8) antes de tocar un modelo real — ancla el concepto en aritmética simple que el estudiante puede verificar él mismo, antes de la complejidad real de los quant types específicos.
- **T2 usa datos oficiales de HF (bpw exactos) para el eje "tamaño"**, pero declara explícitamente (honestidad metodológica) que la cifra de pérdida de calidad de la comunidad es no oficial, y diseña el laboratorio para que el estudiante mida su propia batería de prompts en vez de aceptar la cifra ajena — resuelve directamente el error de novato #2 (comparar con un solo prompt) exigiendo una batería deliberada, no una sola pregunta.
- **T3 separa explícitamente tamaño en disco de uso de VRAM en inferencia** (error de novato #3) — mide ambos por separado, nunca asume que son lo mismo.
- **T4 (integrador) exige justificar con los tres ejes juntos**, resolviendo el error de novato #1 (tratar el número como escala lineal) al forzar al estudiante a razonar sobre el punto de rendimientos decrecientes con sus propios datos de T3, no con una regla memorizada.

## Decisiones de diseño derivadas de la investigación

| Decisión | Evidencia que la respalda | Categoría de solidez |
|---|---|---|
| Usar los bpw oficiales de HuggingFace para el eje "tamaño" | Tabla oficial verificada por fetch directo | Evidencia muy sólida (fuente primaria oficial) |
| Nunca citar la cifra "~3.5% de pérdida de calidad" como medición de laboratorio | La cifra viene de blogs, no de HF/llama.cpp oficial (confirmado en la investigación) | Evidencia sólida (ausencia confirmada en fuentes oficiales, honestidad metodológica aplicada) |
| Exigir batería de prompts propia en vez de un solo prompt para comparar calidad | Error de novato #2, documentado por consistencia con cómo se reporta degradación por tarea en la literatura de cuantización | Decisión de diseño respaldada parcialmente (el patrón "la degradación varía por tarea" es observación repetida en fuentes técnicas, sin una única fuente canónica) |
| Separar medición de tamaño en disco y VRAM real en dos pasos distintos de T3 | Error de novato #3 — ninguna fuente cubre esta distinción para el caso específico de KV cache, decisión propia | Decisión de diseño por ausencia de evidencia externa aplicable directamente |

**Falsabilidad pedagógica:** si el registro de ejecución (DOC-12 §6) muestra que la batería de prompts propuesta en T2 no revela diferencias reales entre quant types en la práctica del estudiante, la estrategia de "medir calidad con prompts propios" se revisa — podría indicar que se necesita una batería más deliberadamente diseñada para estresar razonamiento, no una casual.
