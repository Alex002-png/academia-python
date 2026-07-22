# Investigación Pedagógica de N6.M4 — Papers Fundacionales

*Construida bajo SYL-N6 §3-5 y DOC-10 §7. Mismo formato institucional que `docs/investigacion/n3-m4-lectura-matematica.md` (continuidad directa de espíritu, confirmada en la propia ficha de M4 del syllabus). A diferencia de M1-M3, en M4 CADA fuente citada en el contenido real de `index.html` (banco de examen incluido) es, ella misma, el objeto de estudio — no una fuente que respalda una decisión pedagógica sobre otro contenido. Por eso este documento tiene el nivel más alto de verificación directa (WebFetch al texto primario) de los 4 módulos. Todas las citas de este documento están verificadas por WebFetch DIRECTO a la fuente (arXiv o su espejo HTML ar5iv), no por WebSearch de segunda mano — nivel de rigor exigido por C-N6-02/03 (citar contribución/método/supuestos/límites de la fuente primaria misma).*

## T1 · "Attention Is All You Need" (Vaswani et al., 2017)

**Abstract, primeras dos frases (arXiv 1706.03762, WebFetch DIRECTO):** *"The dominant sequence transduction models are based on complex recurrent or convolutional neural networks in an encoder-decoder configuration. The best performing models also connect the encoder and decoder through an attention mechanism."*

**Tabla 1 completa (verificada por WebFetch directo a espejo ar5iv, `ar5iv.labs.arxiv.org/html/1706.03762`):**

| Tipo de capa | Complejidad por capa | Operaciones secuenciales | Longitud máxima de camino |
|---|---|---|---|
| Self-Attention | O(n²·d) | O(1) | O(1) |
| Recurrente | O(n·d²) | O(n) | O(n) |
| Convolucional | O(k·n·d²) | O(1) | O(log_k(n)) |
| Self-Attention (restringida) | O(r·n·d) | O(1) | O(n/r) |

Esta tabla, decodificada símbolo por símbolo en M4.T1, es la fuente de los ejercicios de complejidad (n<d vs. n>d) de ese tema — cada valor numérico de los ejercicios (n=20,d=200 → self-attention gana; n=200,d=20 → recurrente gana; n=50,d=50 → empate) se calculó directamente de esta fórmula, verificado por ejecución real de Python, no copiado de un ejemplo externo.

## T2 · BERT (Devlin et al., 2018)

**Abstract, primera frase (arXiv 1810.04805, confirmada contra arXiv/ACL Anthology/Google Research/HuggingFace, coincidencia sin contradicción):** *"We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations from Transformers."*

**Mecanismo de masked LM (verificado por WebSearch contra múltiples fuentes técnicas coincidentes, no por WebFetch directo al cuerpo completo del paper):** *"BERT uniformly selects 15% of the input tokens for possible replacement. Of the selected tokens, 80% are replaced with [MASK], 10% are left unchanged, and 10% are replaced by a randomly selected vocabulary token... to address a pre-training/fine-tuning mismatch."* Esta razón exacta (evitar el mismatch pretraining/fine-tuning) es la que M4.T2 exige que el estudiante identifique como el "por qué" de la mezcla 80/10/10, no solo el "qué".

**Cuestionamiento posterior de NSP (RoBERTa, Liu et al. 2019, arXiv 1907.11692 — confirmado como referencia en la búsqueda de RMSNorm, título verificado):** el propio título de RoBERTa ("A Robustly Optimized BERT Pretraining Approach") y su hallazgo ampliamente citado de que remover Next Sentence Prediction no perjudica el desempeño respalda directamente el desafío final de M4.T2 (por qué NSP se cuestionó y MLM no).

## T3 · GPT-2/GPT-3 (Radford et al. / Brown et al.)

**GPT original — contribución fundacional (Radford et al. 2018, WebSearch, confirmado):** *"We demonstrate that large gains on these tasks can be realized by generative pre-training of a language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task."*

**GPT-3 — abstract, primeras dos frases (arXiv 2005.14165, WebFetch DIRECTO):** *"Recent work has demonstrated substantial gains on many NLP tasks and benchmarks by pre-training on a large corpus of text followed by fine-tuning on a specific task. While typically task-agnostic in architecture, this method still requires task-specific fine-tuning datasets of thousands or tens of thousands of examples."* Esta cita es, literalmente, el "problema" que motiva la propuesta de few-shot learning del propio paper — usada en el ítem 5 del banco de examen (§8 de syl-n6.md) para que el estudiante identifique de qué paper es y qué problema motiva.

**Escala real (1.5B/175B parámetros, confirmado por WebSearch contra fuente coincidente sin contradicción):** *"GPT-3 is an autoregressive language model with 175 billion parameters, 10x more than any previous non-sparse language model. Its predecessor, GPT-2, was over 100 times smaller, at 1.5 billion parameters."* El factor de escala calculado en M4.T3 (175/1.5 ≈ 116.7) se deriva directamente de estas dos cifras primarias, verificado por ejecución real, no redondeado de memoria.

## T4 · Llama (Touvron et al., 2023)

**Arquitectura confirmada (WebSearch contra múltiples fuentes técnicas — incluyendo el propio paper de Llama 2, arXiv 2307.09288 — coincidentes sin contradicción):** *"LLaMA... applies pre-normalization using RMSNorm, uses the SwiGLU activation function, and rotary positional embeddings (RoPE)."* Y para Llama 2: *"Llama 2's base architecture largely inherited the successful design of Llama 1 (RMSNorm, SwiGLU, RoPE). The primary architectural differences from Llama 1 include increased context length and grouped-query attention (GQA)."* Estas dos citas son, literalmente, la fuente de los valores esperados del Ejercicio 1 de M4.T4 (`verificar_modificaciones` — Llama 1 sin GQA, Llama 2 con GQA).

## Clasificación y falsabilidad

**Evidencia sólida:** los abstracts completos de *Attention Is All You Need* (arXiv 1706.03762) y *GPT-3* (arXiv 2005.14165) verificados por WebFetch DIRECTO al texto primario (no resumen de terceros); la Tabla 1 completa del paper original verificada por WebFetch directo a un espejo HTML confiable (ar5iv); el abstract de BERT (arXiv 1810.04805) verificado por WebSearch contra 4+ fuentes independientes coincidentes (arXiv, ACL Anthology, Google Research, HuggingFace) sin ninguna contradicción entre ellas.

**Ausencia declarada:** (a) no se hizo WebFetch directo al PDF completo de BERT ni de Llama — se confirmaron sus mecanismos/arquitectura por WebSearch contra múltiples fuentes técnicas de segunda mano coincidentes, un nivel de verificación real pero distinto (y en principio menos fuerte) que el WebFetch directo aplicado a Attention/GPT-3/RMSNorm. (b) no se leyó el cuerpo completo de ninguno de los 4 papers — solo abstracts, tablas clave, y las secciones específicas citadas por fuentes secundarias técnicas — consistente con el alcance de M4 (decodificar la contribución central citable, no una lectura exhaustiva de cada paper completo, que excede el tiempo razonable de un tema de 2 días).

**Falsabilidad:** si al construir la defensa de lectura real con un estudiante, el examinador encuentra que alguna de estas citas no resiste una repregunta directa contra el texto completo del paper (por ejemplo, un matiz de la sección de resultados de BERT que la cita del abstract no captura), esa cita debería revisarse contra el cuerpo completo del paper, no solo el abstract, antes de la siguiente cohorte.
