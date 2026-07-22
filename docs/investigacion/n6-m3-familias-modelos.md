# Investigación Pedagógica de N6.M3 — Familias de Modelos

*Construida bajo SYL-N6 §3-5 y DOC-10 §7. Mismo formato institucional que `docs/investigacion/n3-m3-probabilidad-estadistica.md`. Investigación verificada con WebSearch/WebFetch real, tema por tema.*

## T1 · Encoder-only: BERT y el pretraining bidireccional

**Fuente primaria verificada (Devlin et al., "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", arXiv 1810.04805, WebSearch, cita confirmada contra múltiples fuentes coincidentes incluyendo arXiv/ACL/Google Research/HuggingFace):** cita textual — *"We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations from Transformers."* La propia primera frase del abstract confirma que la bidireccionalidad ES la contribución central del nombre mismo del modelo — no un detalle secundario de arquitectura, exactamente el énfasis que T1 le da (la máscara bidireccional como la pieza que define toda la familia).

**Verificación de los porcentajes exactos del objetivo de pretraining (WebSearch, múltiples fuentes técnicas coincidentes):** *"BERT uniformly selects 15% of the input tokens for possible replacement. Of the selected tokens, 80% are replaced with [MASK], 10% are left unchanged, and 10% are replaced by a randomly selected vocabulary token."* Esta cifra exacta (15%, 80/10/10) se verificó contra múltiples fuentes técnicas coincidentes antes de fijarse en M4.T2 — no se tomó de una sola fuente sin contraste.

## T2 · Decoder-only: GPT y el pretraining autorregresivo

**Fuente primaria verificada (Radford et al., "Improving Language Understanding by Generative Pre-Training" — GPT original, 2018, WebSearch):** cita textual — *"We demonstrate that large gains on these tasks can be realized by generative pre-training of a language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task."* Confirma, desde el paper original de la familia GPT, el principio de auto-supervisión que T2 enseña: el pretraining ocurre sobre texto SIN ETIQUETAR, y el mecanismo (generative — predicción autorregresiva) es, literalmente, la contribución nombrada en el título del paper.

**Contraste con la escala (GPT-2/GPT-3, ya verificado para M4.T3):** el mismo mecanismo de T2 (predicción del siguiente token) escala sin cambio arquitectónico de GPT-1 (2018) a GPT-2 (1.5B parámetros) a GPT-3 (175B parámetros) — la continuidad de mecanismo a través de 2 años y ~117x de escala es evidencia primaria de que "decoder-only autorregresivo" es un principio estable, no una fase transitoria de la arquitectura.

## T3 · La familia decoder-only moderna: RMSNorm, RoPE, SwiGLU, GQA

**RMSNorm (Zhang & Sennrich, "Root Mean Square Layer Normalization", arXiv 1910.07467, NeurIPS 2019, WebFetch directo al abstract):** cita textual exacta — *"RMSNorm achieves comparable performance against LayerNorm but reduces the running time by 7%~64% on different models."* Esta cifra (7%-64%, verificada por WebFetch directo, no por fuente secundaria) es la que M3.T3/M4.T4 citan — corrigiendo una cifra distinta (10-50%) tomada inicialmente de una fuente secundaria antes de esta verificación directa (ver historial de `syl-n6.md`, commit `333a859`).

**RoPE (Su et al., "RoFormer: Enhanced Transformer with Rotary Position Embedding", arXiv 2104.09864, WebSearch):** cita textual — *"[RoPE] encodes the absolute position with a rotation matrix and meanwhile incorporates the explicit relative position dependency in self-attention formulation... RoPE has valuable properties including sequence length flexibility, decaying inter-token dependency with increasing relative distances."* Confirma exactamente la razón de diseño que T3 explica: RoPE resuelve la limitación de generalización a secuencias más largas que el encoding senoidal absoluto de M1.T4.

**SwiGLU (Shazeer, "GLU Variants Improve Transformer", arXiv 2002.05202, WebSearch):** confirmado — el paper compara variantes de Gated Linear Units como reemplazo de ReLU en el feed-forward, con SwiGLU (Swish como función de compuerta) entre las de mejor perplejidad, y **"Google's PaLM and Meta's LLaMA use the SwiGLU variant"** — confirmación directa de que SwiGLU no es una mejora teórica sin adopción real, sino la elección de al menos dos familias de modelos de producción reales.

**GQA (Ainslie et al., "GQA: Training Generalized Multi-Query Transformer Models from Multi-Head Checkpoints", arXiv 2305.13245, EMNLP 2023, WebSearch):** cita/paráfrasis confirmada — *"grouped-query attention (GQA), a generalization of multi-query attention which uses an intermediate number of key-value heads... uptrained GQA achieves quality close to multi-head attention with comparable speed to MQA."* Confirma el trade-off exacto que T3 enseña: GQA es un punto intermedio entre MHA (calidad, más memoria) y MQA (velocidad, menos calidad) — no un reemplazo estricto de MHA, sino un balance deliberado.

**Llama como confirmación conjunta (Touvron et al. 2023, ya verificado para M4.T4):** los 4 papers de arriba (RMSNorm, RoPE, SwiGLU, GQA) son, cada uno, la fuente primaria de una pieza que Llama adopta conjuntamente — T3 enseña las piezas por separado con sus propias fuentes primarias; M4.T4 confirma que un modelo real las integra todas juntas.

## T4 · Comparación fundamentada de tamaños y familias

**Nota metodológica:** este tema no se ancla en un paper específico de "cómo comparar tamaños de modelo" — la disciplina de estimar parámetros (M3.T4) es una construcción propia de la Academia (fórmulas de conteo de parámetros de capas lineales/atención/feed-forward, ya verificadas por ejecución real en N6.M3.T4). Se consideró citar Kaplan et al. ("Scaling Laws for Neural Language Models", 2020) como fuente primaria de la relación entre tamaño/datos/cómputo y desempeño, pero se decidió NO incluirla como cita central de T4 — el tema de N6 es comparar tamaños/familias para una DECISIÓN DE INGENIERÍA (trade-off costo/tarea), no las leyes de escalado predictivas del desempeño en función de cómputo, que son un tema de investigación más profundo, correctamente fuera de alcance de N6 (posible Beyond the Curriculum para una revisión futura, no aplicado en esta pasada por no ser central al objetivo del tema).

## Clasificación y falsabilidad

**Evidencia sólida:** BERT (arXiv 1810.04805), GPT original (Radford et al. 2018), RMSNorm (arXiv 1910.07467, verificado por WebFetch DIRECTO al abstract, el nivel más alto de verificación de este documento), RoPE/RoFormer (arXiv 2104.09864), SwiGLU (arXiv 2002.05202) — 5 papers primarios verificados por WebSearch/WebFetch, con la cifra de RMSNorm corregida tras detectar una discrepancia real entre una fuente secundaria y el abstract primario.

**Ausencia declarada:** los porcentajes 15%/80-10-10 de BERT y la existencia de GQA en Llama 2 se verificaron por WebSearch (múltiples fuentes coincidentes), no por WebFetch directo al PDF/abstract original en todos los casos — un nivel de verificación real pero menos estricto que el aplicado a RMSNorm. No se encontró necesidad de reconciliar ninguna discrepancia en estos casos (las fuentes coincidieron sin contradicción).

**Falsabilidad:** si una arquitectura de producción futura ampliamente adoptada abandona alguna de las 4 modificaciones de T3 (por ejemplo, si GQA es reemplazada universalmente por una técnica distinta), la ficha de T3 debería actualizarse para reflejar el estado real de la práctica de la industria, en vez de mantener una lista que dejó de ser representativa.
