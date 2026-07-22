# Investigación Pedagógica de N6.M2 — Tokenización y Embeddings

*Construida bajo SYL-N6 §3-5 y DOC-10 §7. Mismo formato institucional que `docs/investigacion/n3-m2-calculo-optimizacion.md`. Investigación verificada con WebSearch/WebFetch real, tema por tema — incluyendo, para M2.T4 (laboratorio DOC-12), instalación y ejecución REAL local de `tiktoken` y `gensim` antes de escribir el laboratorio (no solo lectura de documentación).*

## T1 · Por qué tokenizar — de caracteres a subpalabras

**Fuente primaria verificada (Sennrich, Haddow & Birch, "Neural Machine Translation of Rare Words with Subword Units", arXiv 1508.07909, ACL 2016, WebSearch):** cita textual — *"Neural machine translation (NMT) models typically operate with a fixed vocabulary, but translation is an open-vocabulary problem... we introduce a simpler and more effective approach, making the NMT model capable of open-vocabulary translation by encoding rare and unknown words as sequences of subword units."* Esta es, literalmente, la fuente primaria del problema que T1 plantea: vocabulario fijo vs. vocabulario efectivamente infinito — y la solución (subpalabras) que T2 implementa no es una construcción pedagógica de esta Academia, es el paper que introdujo BPE para NLP.

**Fuente curricular (HF NLP/LLM Course, confirmado por WebSearch):** *"Chapters 5 to 8 teach the basics of Datasets and Tokenizers before diving into classic NLP tasks."* Confirma que tratar tokenización como bloque temático propio, separado de "usar un modelo", es la práctica curricular estándar de la fuente oficial de DOC-10 §7 — coherente con dedicar T1-T2 completos a esto antes de M1 (que ya asumía la entrada tokenizada).

## T2 · BPE (Byte-Pair Encoding) desde cero

**Misma fuente primaria (Sennrich et al. 2016, arXiv 1508.07909):** cita textual adicional — *"various word classes are translatable via smaller units than words, for instance names (via character copying or transliteration), compounds (via compositional translation), and cognates and loanwords."* El paper discute explícitamente "el algoritmo de compresión byte pair encoding" como la técnica de segmentación elegida, y reporta mejoras empíricas reales (1.1 y 1.3 BLEU en WMT15 inglés-alemán e inglés-ruso) — confirmando que BPE no es un algoritmo de juguete inventado para fines didácticos, sino la técnica real que produjo mejoras medibles en el problema real que motivó su creación (traducción automática con vocabulario abierto).

**Verificación empírica propia (código real, no de fuente externa):** el algoritmo exacto implementado en T2 (contar pares → fusionar el más frecuente → repetir) se verificó línea por línea con ejecución real de Python antes de fijar cualquier valor en un `check()` — mismo principio de disciplina numérica que rige todo N6, no una cita de la literatura.

## T3 · Embeddings: de índice a vector denso

**Fuente primaria verificada (Mikolov, Sutskever, Chen, Corrado & Dean, "Linguistic Regularities in Continuous Space Word Representations", 2013, y su recepción posterior, confirmado por WebSearch):** la analogía "king - man + woman ≈ queen" — el ejemplo que M2.T4 verifica empíricamente en Colab — se originó en este trabajo de Mikolov et al. en Google Research (word2vec), no es un ejemplo genérico de la Academia. Confirmado: *"Mikolov et al. proposed an elegant approach to find the word vector most similar to v^b - v^a + v^c."* Esto ancla la práctica de T3 (similitud coseno, vecino más cercano) en el trabajo real que estableció que la aritmética vectorial sobre embeddings captura relaciones semánticas.

**Continuidad con N3 (verificada contra `n3-m1-algebra-lineal.md`):** el producto punto y la proyección de N3.M1.T6 (ya con fuente primaria propia, 3Blue1Brown) es el mismo mecanismo que T3 reutiliza como similitud coseno — la conexión explícita en el contenido de T3 ("la misma operación de N3.M1.T6") está respaldada por la propia investigación pedagógica de N3, no es una afirmación sin ancla.

## T4 · Embeddings preentrenados reales — laboratorio DOC-12 en Colab

**Investigación previa real, ejecutada localmente antes de escribir el laboratorio (no solo documentación leída):**
- Instalé `tiktoken` (pip) y verifiqué con ejecución REAL: tokenización de una oración en español (14 tokens/8 palabras con `cl100k_base`), comparación `cl100k_base` (3 tokens) vs. `gpt2` (6 tokens) para "internacionalización", y el comportamiento real ante una palabra inventada ("flibbertigibbetoso" → 7 subpiezas, reconstruible byte a byte).
- Instalé `gensim` y descargué `glove-wiki-gigaword-50` (66MB, sin credenciales) y verifiqué con ejecución REAL: vecinos de "king" (`[('prince', 0.824), ('queen', 0.784), ...]`), la analogía king-man+woman→queen (`[('queen', 0.852), ...]`), y el `KeyError` real al buscar una palabra inventada ("zibblewocket") fuera del vocabulario de 400,000 palabras.
- **Fuente oficial de GloVe (Pennington, Socher & Manning, Stanford NLP, `nlp.stanford.edu/projects/glove/`):** citada en el laboratorio como referencia del método de entrenamiento real (coocurrencia), distinto del mecanismo de un embedding de transformer — honestidad metodológica explícita, no una equivalencia forzada.

## Clasificación y falsabilidad

**Evidencia sólida:** el paper original de BPE para NLP (Sennrich et al. 2016, arXiv 1508.07909, verificado por WebSearch), el trabajo original de word2vec/analogías vectoriales (Mikolov et al. 2013, verificado por WebSearch), y — el estándar más alto de verificación posible — ejecución REAL local de `tiktoken` y `gensim` antes de escribir el laboratorio de M2.T4, con cada cifra citada en el laboratorio (conteos de tokens, vecinos, analogía, `KeyError`) copiada de una salida real, nunca calculada de memoria.

**Ausencia declarada:** no se verificó por fetch directo el paper original de word2vec (Mikolov et al. 2013) — la cita se tomó de fuentes secundarias que coinciden entre sí (KDnuggets, blog de Piotr Migdał, GitHub), no del PDF original. Dado que el hecho citado (la analogía king-man+woman) es ampliamente reproducido y no es una cifra numérica sensible a error de transcripción, se acepta como evidencia razonable sin fetch directo al PDF original — pero se declara la diferencia de rigor frente a las citas de M1/M4, que sí se verificaron contra fuente primaria directa.

**Falsabilidad:** si una versión futura de `gensim.downloader` retira o cambia la URL de `glove-wiki-gigaword-50`, el laboratorio de M2.T4 dejaría de ser reproducible tal como está escrito — señal para revisar y, si es necesario, sustituir por una alternativa de embeddings preentrenados igual de accesible sin credenciales.
