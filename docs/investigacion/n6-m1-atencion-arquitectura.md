# Investigación Pedagógica de N6.M1 — Atención y Arquitectura

*Construida bajo SYL-N6 §3-5 y DOC-10 §7 (bibliografía oficial de N6: Karpathy *GPT from scratch*, CS224N, HF NLP Course, los papers de M4). Documento producido después de construir M1 en `index.html` — declarado honestamente: la investigación real (WebSearch/WebFetch) se hizo DURANTE la construcción de cada tema, no antes en un documento separado; este archivo la consolida por trazabilidad, siguiendo el formato institucional de `docs/investigacion/n3-m1-algebra-lineal.md`. Investigación verificada con WebSearch/WebFetch real, tema por tema.*

## T1 · El cuello de botella que la atención resuelve

**Fuente primaria verificada (arXiv 1706.03762, abstract, WebFetch directo):** cita textual — *"The dominant sequence transduction models are based on complex recurrent or convolutional neural networks in an encoder-decoder configuration. The best performing models also connect the encoder and decoder through an attention mechanism."* La propia primera frase del paper fundacional confirma el punto de partida de T1: la atención nace como un mecanismo ADICIONAL sobre arquitecturas recurrentes/convolucionales, y solo después el paper elimina la recurrencia por completo ("Attention Is All You Need" — el título mismo es la tesis). Esto respalda la secuencia pedagógica de T1: primero establecer qué hacían RNN/LSTM (ya construidas en N5.M3) y su cuello de botella, antes de presentar la atención como sustituto completo.

**Fuente secundaria de contexto (Karpathy, "Let's build GPT: from scratch, in code, spelled out", ene-2023, verificado por WebSearch):** el video construye el Transformer "siguiendo el paper Attention Is All You Need en el escenario de modelado de lenguaje", confirmando que la ruta pedagógica de referencia de la Academia (Karpathy, bibliografía oficial de DOC-10 §7) también empieza motivando el mecanismo antes de la implementación completa, no al revés.

## T2 · Self-attention: Q, K, V y el producto punto escalado

**Fuente primaria verificada (Tabla 1 de arXiv 1706.03762, confirmada vía espejo ar5iv, WebFetch directo):** la propia tabla del paper compara self-attention/recurrente/convolucional en tres ejes (complejidad por capa, operaciones secuenciales, longitud máxima de camino) — el andamiaje cuantitativo exacto que T1/M4.T1 decodifican. Esta tabla es la evidencia primaria de que "self-attention conecta todas las posiciones con un número constante de operaciones secuencialmente ejecutadas" (paráfrasis directa del paper), la propiedad O(1) que T1 ya estableció como motivación.

**Fuente de referencia curricular (Stanford CS224N, Lecture "Self-Attention and Transformers", confirmado por WebSearch — slides `cs224n-2025-lecture08-transformers.pdf`):** la existencia de una lectura completa dedicada específicamente a "Self-Attention and Transformers" en un curso de referencia de Stanford confirma que el tratamiento de self-attention como tema autónomo (no un detalle de implementación de un tema más grande) es la práctica curricular estándar — coherente con dedicar un tema propio (T2) a Q/K/V, separado de multi-head (T3).

## T3 · Multi-head attention

**Fuente de referencia curricular (mismo Assignment 4 de CS224N, "Self-Attention, Transformers, and Pretraining", confirmado por WebSearch):** el hecho de que el mismo assignment cubra self-attention Y pretraining juntos, con multi-head como parte integral del bloque, confirma la secuencia T2→T3→T5 (mecanismo base → multiplicidad de cabezas → bloque completo) como la progresión estándar de la literatura de referencia, no una invención de esta Academia.

**Nota metodológica:** no se encontró una fuente primaria que enfatice específicamente "por qué multiplicidad de cabezas" de forma aislada del paper original — el propio arXiv 1706.03762 (§3.2.2) introduce multi-head como una elección de diseño ya integrada al mecanismo, sin una motivación previa separada. Esto se refleja honestamente en T3: la motivación ("cada cabeza como un lector distinto") es una interpretación pedagógica de esta Academia, no una cita textual del paper — declarado así en la ficha (T3, mental model), no presentado como hallazgo del paper mismo.

## T4 · Por qué la atención no sabe de orden — positional encoding

**Fuente primaria verificada (RoFormer/RoPE, arXiv 2104.09864, WebSearch):** cita textual — *"Position encoding has recently been shown to be effective in the transformer architecture, enabling valuable supervision for dependency modeling between elements at different positions of the sequence."* Esta fuente (usada también para M3.T3) confirma, desde una fuente posterior y crítica del encoding original, que el problema que el positional encoding resuelve (dar supervisión sobre la posición relativa entre elementos) es real y reconocido en la literatura, no una invención pedagógica — y motiva por qué T4 demuestra PRIMERO la invarianza a permutación (el problema) antes de presentar la solución.

**Verificación empírica propia (no de fuente externa):** la demostración de invarianza a permutación de T4 (ejercicios 1-3, `verificar_permutacion`) y su ruptura al atar la posición por slot (retoFinal) se diseñaron y verificaron con ejecución real de Python — no existe una fuente externa citable para "cómo se demuestra esto paso a paso", es una construcción pedagógica propia de esta Academia, declarada como tal.

## T5 · El bloque transformer completo — cierra M1

**Fuente primaria verificada (pre-norm vs. post-norm, confirmado por WebSearch sobre el paper de GPT-2 y análisis posteriores):** cita/paráfrasis confirmada — *"Layer normalization was moved to the input of each sub-block, similar to a pre-activation residual network... GPT-1 and the original transformer used post-normalization, applying LayerNorm after the residual connection. GPT-2 switched to pre-normalization."* Esto confirma un hallazgo real que T5 declara explícitamente en su ejercicio 2 (evidencia de dominio): el paper original (M4.T1) usa POST-norm, mientras que la convención pre-norm que M1.T5 enseña (y que domina en LLM modernos) es una evolución posterior, no la elección original de 2017 — una distinción que T5 no oculta ni presenta como si el paper original ya lo hubiera hecho así.

**Fuente de la Tabla 1 (arXiv 1706.03762, ya verificada en T2/M4.T1):** confirma que el bloque completo con máscara causal, apilado N veces, es exactamente el diseño "decoder-only" que T5 construye — el mismo artefacto que M3.T2 (GPT) usa en producción.

## Clasificación y falsabilidad

**Evidencia sólida:** el abstract y la Tabla 1 de *Attention Is All You Need* (arXiv 1706.03762, verificado por WebFetch/espejo ar5iv), el paper de RoFormer/RoPE (arXiv 2104.09864), y el análisis confirmado de la transición post-norm→pre-norm entre el transformer original y GPT-2 — todos verificados por WebSearch/WebFetch directo, no de memoria. La existencia y contenido de la lectura de CS224N sobre "Self-Attention and Transformers" confirmada por WebSearch (slides reales localizados).

**Ausencia declarada:** (a) no se encontró una fuente primaria que motive multi-head attention de forma aislada, independiente del propio paper original que ya la integra sin justificación previa separada — la motivación pedagógica de T3 ("cada cabeza como lector distinto") es interpretación propia, declarada como tal, no una cita. (b) no se verificó por fetch directo el contenido completo del video de Karpathy (solo su descripción/metadata por WebSearch) — se cita como contexto curricular, no como fuente de citas textuales línea por línea.

**Falsabilidad:** si el registro de ejecución muestra que separar self-attention (T2) de multi-head (T3) en dos temas distintos, en vez de presentarlos juntos como hace el propio paper original, introduce fricción real (el estudiante no entiende T2 sin ya saber que se generalizará a múltiples cabezas), se reconsideraría fusionar ambos temas en una futura revisión de N6.
