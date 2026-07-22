# Investigación Pedagógica — N7.M2: RAG Completo (Retrieval-Augmented Generation)

> **Fase del flujo DOC-11 §0bis / DOC-12 §0bis:** (1) Investigación pedagógica — este documento. Pendiente: (2) revisión crítica adversarial formal, (3) ajustes derivados, (4) aprobación, antes de iniciar la autoría de lecciones/laboratorios de M2.
> **Alcance:** cubre tanto la parte conceptual Pyodide-compatible (chunking/embeddings con numpy) como el pipeline de entorno real con vector DB persistente (DOC-12). Se distingue explícitamente qué evidencia aplica a cada modalidad.
> **Bibliografía de partida (DOC-10 ya aprobada):** curso corto de DeepLearning.AI sobre RAG, documentación de Hugging Face, documentación de proveedores relevantes. Esta investigación verifica esos tres pilares con fuentes reales y los complementa con lo estrictamente necesario para no dejar vacíos (chunking, hybrid retrieval, lost-in-the-middle, errores de novato).

---

## 1. Cómo enseñan este flujo exacto (RAG) — fuentes reales verificadas

### 1.1 DeepLearning.AI — dos cursos cortos distintos, no uno (hallazgo que corrige un supuesto inicial)

La investigación partía de la hipótesis de que existía **un** curso corto de DL.AI sobre RAG. La verificación (WebFetch directo a las páginas de curso) muestra que hay **dos**, con alcance distinto, y ambos son relevantes para M2:

- **"Building and Evaluating Advanced RAG"** — <https://www.deeplearning.ai/courses/building-evaluating-advanced-rag> (verificado también en <https://learn.deeplearning.ai/courses/building-evaluating-advanced-rag/information>). Instructores: **Jerry Liu** (co-fundador/CEO de LlamaIndex) y **Anupam Datta** (Snowflake/ex-TruEra). Duración 2h05, nivel principiante, 6 lecciones en video + 4 ejemplos de código + 1 evaluación. Temario verificado: Introducción → Pipeline RAG avanzado → **RAG Triad de métricas** (Context Relevance, Groundedness, Answer Relevance) → **Sentence-window retrieval** → **Auto-merging retrieval** → Conclusión. Este curso es específicamente sobre **técnicas avanzadas de recuperación y evaluación**, no sobre el pipeline básico.
- **"Retrieval Augmented Generation (RAG)"** — <https://www.deeplearning.ai/courses/retrieval-augmented-generation> (verificado también en <https://learn.deeplearning.ai/courses/retrieval-augmented-generation/lesson/rrngb/a-conversation-with-andrew-ng>). Instructor: **Zain Hasan** (Together AI, anteriormente Weaviate). Cinco módulos verificados: (1) RAG Overview — conceptos fundacionales y diseño de sistema; (2) Information Retrieval and Search Foundations; (3) Information Retrieval with Vector Databases — implementación práctica con Weaviate, cubre explícitamente "chunking, indexing, and retrieving documents"; (4) LLMs and Text Generation — diseño de prompts y generación; (5) RAG Systems in Production — despliegue, monitoreo, optimización. Este es el curso que cubre el **pipeline completo de punta a punta**, incluyendo BM25 e hybrid retrieval explícitamente.

**Corrección al enunciado de la tarea:** el título de trabajo sugerido ("Building and Evaluating Advanced RAG") existe y es real, pero **no es el curso introductorio de pipeline completo** — es el curso de técnicas avanzadas de recuperación y evaluación. Para M2, que necesita cubrir ingesta→chunking→embeddings→vector DB→hybrid retrieval→generación de principio a fin, la fuente estructuralmente más alineada es **"Retrieval Augmented Generation (RAG)" de Zain Hasan**, con **"Building and Evaluating Advanced RAG"** como fuente complementaria específica para la subsección de recuperación híbrida/reranking y para la futura conexión con M4 (evaluación).

### 1.2 Documentación oficial de bases de datos vectoriales — comparación de calidad pedagógica (2 verificadas a fondo + 2 de contraste)

*(DOC-12 §0bis punto 1 exige verificar cuáles tienen mejor documentación pedagógica, no solo enumerarlas.)*

| Vector DB | Qué se verificó (WebFetch directo) | Calidad pedagógica observada |
|---|---|---|
| **Qdrant** — <https://qdrant.tech/documentation/> | Abre con "What is Qdrant?" y "Understanding Vector Search in Qdrant" **antes** de cualquier comando — patrón concepto-antes-que-comando, igual al que DOC-12 §0.1 ya verificó para Pro Git/Missing Semester en otro dominio. Categoría dedicada "Basics" con tutoriales progresivos: *Semantic Search 101* → *Hybrid Search* → *Hybrid Search with Reranking*. Página específica de fusión híbrida (<https://qdrant.tech/documentation/concepts/hybrid-queries/>, verificada) explica **Reciprocal Rank Fusion (RRF)** y **Distribution-Based Score Fusion (DBSF)** con criterio explícito de cuándo usar cada una ("RRF como default seguro sin datos de evaluación; DBSF cuando los retrievers están bien calibrados"). | **La más fuerte de las dos verificadas a fondo** — progresión conceptual explícita, terminología consistente, y es la única que documenta la mecánica de fusión híbrida con ese nivel de detalle y con guía de decisión, no solo el "cómo". |
| **Chroma** — <https://docs.trychroma.com/docs/overview/getting-started> | Verificado directamente: el "Getting Started" **no explica qué es un embedding, qué es una base de datos vectorial, ni qué significa la distancia devuelta** (`'distances': [[1.04, 1.24]]` aparece sin explicación). La filosofía es "Chroma se encarga automáticamente" — reduce fricción de implementación al precio de no enseñar el concepto. | La más simple de instalar y de mostrar en 5 minutos, pero **la más débil pedagógicamente** de las cuatro — útil como ejemplo de "cómo NO enseñar el concepto de similitud" si se decide usarla en el laboratorio, no como fuente de la explicación conceptual. |
| **Pinecone** (contraste, no elegida como DB principal) — <https://www.pinecone.io/learn/retrieval-augmented-generation/> y <https://www.pinecone.io/learn/chunking-strategies/>, ambas verificadas | El "Learn" hub de Pinecone es el que mejor explica el **pipeline conceptual completo** (por qué RAG existe, qué falla sin él, ingesta→embedding→retrieval→augmentación) y la **página de chunking strategies es la más citable de todas las fuentes revisadas**: compara fixed-size, content-aware (recursive/sentence), document-structure-based, semantic y contextual chunking (técnica de Anthropic) con una tabla explícita de ventajas/desventajas y una recomendación operativa ("fixed-size es el mejor punto de partida en la mayoría de los casos; probar 128–256 tokens para información granular, 512–1024 para retención de contexto"). | Es contenido de **marketing técnico/blog**, no documentación de referencia de API en sentido estricto — se declara esto honestamente (DOC-12 §0bis principio 2). No se recomienda como vector DB principal del laboratorio (es SaaS de pago sin tier self-hosted), pero **sí como fuente de la explicación conceptual de chunking**, con la salvedad declarada de que es contenido producido por un proveedor con interés comercial en RAG. |
| **Weaviate** (contraste, hybrid retrieval) — <https://docs.weaviate.io/weaviate/search/hybrid>, verificada | Documenta el parámetro `alpha` (0 = BM25 puro, 1 = vectorial puro, 0.5 = default) y dos algoritmos de fusión (`relativeScoreFusion`, default desde v1.24; `rankedFusion`, legado) con claridad. | Buena referencia secundaria específicamente para la subsección (c) — no se propone como DB del laboratorio principal, ver §4. |

**Honestidad metodológica:** no se verificaron fuentes universitarias (MIT/CMU/Stanford/Harvard CS50) *específicas de RAG* — a diferencia de la investigación previa de DOC-12 §0.1 (terminal/Git), donde Missing Semester y Pro Git sí cubren ese dominio exacto, no se encontró un curso universitario de acceso abierto dedicado íntegramente a RAG con el mismo nivel de verificación directa que los cursos DL.AI. Esto es coherente con la naturaleza de RAG como práctica de industria relativamente reciente (post-2023), más documentada por proveedores y por DL.AI que por currículos universitarios introductorios de CS. Se declara la ausencia en vez de forzar una cita de relleno, conforme al principio 2 de DOC-11 §0bis.

### 1.3 Documentación de Hugging Face — embeddings y sentence-transformers

Verificado directamente en <https://sbert.net/> (documentación oficial de Sentence Transformers, proyecto alojado bajo el paraguas de Hugging Face — el propio repositorio vive en <https://github.com/huggingface/sentence-transformers>): estructura modular — cargar un modelo preentrenado → `model.encode()` → calcular similitud (ejemplos con salidas de tensor reales tipo `[1.0000, 0.6660, 0.1046]`, es decir sí enseña cosine similarity con números concretos, a diferencia de Chroma). Sección dedicada "Semantic Search" con la distinción **symmetric vs. asymmetric search** (relevante para RAG: una pregunta corta recuperando un párrafo largo es búsqueda asimétrica). Sección **"Retrieve & Re-Rank"** documenta explícitamente el patrón de dos etapas: **bi-encoder** (recuperación rápida, embeddings independientes) → **cross-encoder** (reranking preciso, codifica query+pasaje juntos) — este es el respaldo documental oficial directo para la subsección (c) de este documento.

Complementario: <https://huggingface.co/blog/mteb> (blog oficial de Hugging Face sobre el **MTEB — Massive Text Embedding Benchmark**, verificado) — explica que MTEB cubre 56 datasets en 8 categorías de tareas (incluida retrieval y reranking) y es la referencia estándar de facto para elegir qué modelo de embeddings usar. Relevante para que el estudiante entienda que "qué modelo de embeddings elegir" es una decisión medible, no arbitraria.

**Síntesis del punto 1:** las tres fuentes de DOC-10 (DL.AI, HF, documentación de proveedores) se verifican como reales, existentes y citables — pero con dos matices que corrigen el supuesto inicial: (a) DL.AI son *dos* cursos, con roles distintos en la secuencia; (b) "documentación de proveedores" no es uniforme en calidad pedagógica — Qdrant y sbert.net enseñan concepto antes de comando; Chroma no. Esta asimetría es evidencia directa, no una preferencia de diseño.

---

## 2. Errores de novato documentados específicamente para RAG

*(DOC-12 §0bis punto 2 exige errores reales, no una lista genérica de "cosas que pueden salir mal".)*

1. **Chunking mal dimensionado, y tratado como decisión trivial.** Verificado en <https://www.kapa.ai/blog/rag-gone-wrong-the-7-most-common-mistakes-and-how-to-avoid-them> (artículo "RAG Gone Wrong: The 7 Most Common Mistakes", fuente de práctica de industria, no académica — se declara así) y confirmado independientemente por la propia página de Pinecone sobre chunking (§1.2): el chunking arbitrario por conteo fijo de caracteres/tokens es "ciego a la estructura del documento" y corta oraciones, separa preguntas de sus respuestas, y aísla párrafos de sus encabezados — el error más citado en las fuentes de práctica revisadas, y el que la propia Pinecone identifica como la decisión de mayor impacto de todo el pipeline ("get this wrong and no amount of reranking or prompt engineering will save you").
2. **Mezclar embeddings de modelos distintos entre indexación y consulta.** Verificado en <https://medium.com/@mariem.jabloun/dont-break-your-rag-why-you-must-use-the-same-embedding-model-for-retrieval-and-indexing-7b0a3e536acd> (fuente de práctica, declarado como tal): cada modelo de embeddings define su propio espacio vectorial; comparar vectores de dos modelos distintos produce puntuaciones de similitud sin significado — la analogía citada ("es como usar un mapa de París para navegar Tokio") es útil pedagógicamente porque, igual que exige DOC-03 Bloque 1, sobrevive sin sintaxis. Este error es silencioso: el sistema no falla con una excepción, produce resultados plausibles pero degradados — el tipo de fallo más peligroso para enseñar debugging (DOC-03 M11).
3. **No probar la recuperación antes de optimizar el prompt de generación.** Verificado en <https://kili-technology.com/blog/rag-evaluation-guide-measuring-retrieval-and-generation-as-separate-problems> y corroborado por kapa.ai (mismo artículo del punto 1, mencionado explícitamente: "teams have spent weeks tweaking prompt templates when their real problem was chunk size") y por la propia página de evaluación de Pinecone (§1.2, "establish ground truth evaluation sets before deployment"). El patrón documentado de forma consistente en las tres fuentes es: separar la pregunta "¿recuperamos los documentos correctos?" de "¿el LLM usó bien lo recuperado?" — atribuir mal el fallo (tocar el prompt cuando el problema es el retriever) es un antipatrón repetido de forma independiente en fuentes distintas, la misma señal de convergencia que DOC-11 §0bis principio 3 exige aprovechar explícitamente.
4. **Saltar el reranking y confiar solo en similitud coseno de primera etapa.** Documentado en kapa.ai (mismo artículo) — "vector similarity search gets you to maybe 70% relevance; adding a reranker pushes that to 90%+" — y respaldado por documentación oficial: sbert.net documenta el patrón bi-encoder→cross-encoder precisamente porque la recuperación de una sola etapa prioriza recall sobre precisión.
5. **"Lost in the middle" — problema documentado formalmente, no solo anecdótico.** Fuente primaria verificada: Liu, Lin, Hewitt, Paranjape, Bevilacqua, Petroni, Liang — **"Lost in the Middle: How Language Models Use Long Contexts"**, arXiv:2307.03172 (<https://arxiv.org/abs/2307.03172>, verificado por WebFetch directo al abstract; publicado también en *Transactions of the ACL* 2024). Hallazgo central verificado: el rendimiento del modelo sigue una **curva en forma de U** — más alto cuando la información relevante está al inicio o al final del contexto, y degrada significativamente cuando está en el medio — incluso en modelos diseñados específicamente para contextos largos. Este es exactamente el error que un estudiante de RAG comete al asumir ingenuamente que "recuperar más contexto siempre ayuda": el propio pipeline puede enterrar la respuesta correcta en una posición donde el LLM la ignora, aunque la recuperación haya sido perfecta. Es un hallazgo con **paper primario citable**, no una afirmación de blog — la evidencia más sólida de todo este documento.
6. **Embedding rot / no reindexar cuando cambian los datos o el modelo.** Documentado en kapa.ai (mismo artículo, punto "Embedding Rot"): embeddings desactualizados de una base vectorial que no se reindexa producen degradación silenciosa; se recomienda reindexar cuando el modelo mejora o cuando 10-15% de los datos cambia. Relevante para introducir la idea de que un pipeline de RAG en entorno real no es un artefacto estático (conexión directa con DOC-12, no con Pyodide).

**Honestidad metodológica sobre el punto 2:** a diferencia del pedido original ("Computer Science Education / Learning Sciences específicamente sobre RAG"), no existe todavía literatura de *Learning Sciences* formal sobre cómo se enseña RAG a estudiantes — es un tema demasiado reciente. Los seis errores anteriores provienen de **evidencia de práctica de industria** (blogs técnicos, documentación oficial de troubleshooting, un paper de NLP primario para el punto 5), no de estudios pedagógicos con revisión por pares. Se declara esto explícitamente: la clasificación de evidencia del punto 3 refleja esta limitación real.

---

## 3. Síntesis crítica (nunca colección)

*Qué mecanismo pedagógico específico funciona y por qué — no "cada fuente hace X".*

**El mecanismo que realmente transfiere en las fuentes verificadas no es "mostrar el pipeline completo", es forzar al estudiante a diagnosticar en qué etapa está el fallo antes de tocar nada.** Esto se ve de tres formas convergentes e independientes: (a) el patrón bi-encoder→cross-encoder de sbert.net separa recall de precisión como dos problemas distintos con instrumentos distintos; (b) Kili Technology y kapa.ai, de forma independiente, documentan que el error más caro en producción es optimizar el componente equivocado por no haber separado la evaluación de retrieval de la de generación; (c) el propio paper de Lost in the Middle demuestra que "recuperación correcta" y "uso correcto de lo recuperado" son dos fallos con causas y síntomas distintos, aunque produzcan el mismo síntoma final (respuesta mala). Los tres apuntan al mismo principio pedagógico: **RAG no se enseña como una tubería lineal de una sola pieza — se enseña como una cadena de componentes con un punto de fallo verificable en cada eslabón**, exactamente el mismo principio que DOC-03 P10 (modelo mental de la máquina) exige para cualquier tema con estado interno complejo.

**Rechazo justificado (DOC-11 §0bis principio 1):** se rechaza explícitamente la estructura que Pinecone y varios cursos de terceros usan por defecto — presentar el pipeline completo (ingesta→chunking→embedding→retrieval→generación) de una sola vez, en una sola lección, con un único ejemplo end-to-end. Traza concreta del fallo: un estudiante que ve el pipeline completo de una vez no tiene forma de saber, cuando su propio RAG falla, si el problema fue el chunking, el modelo de embeddings, la ausencia de reranking, o el prompt final — exactamente el antipatrón documentado en el punto 2.3. Esto entra en conflicto directo con el principio ya institucionalizado en DOC-03/DOC-11 de que la práctica debe permitir diagnosticar causa raíz (Bloque 4, categoría "depurar"), no solo ejecutar con éxito. Se prefiere en su lugar la secuencia de la sección siguiente, donde cada etapa tiene su propio punto de verificación antes de avanzar a la siguiente — mismo patrón que DOC-12 §2.7 ("puntos de verificación") ya institucionaliza para laboratorios de entorno real.

**Límite frente a la identidad propia de la Academia:** ninguna de las fuentes verificadas (DL.AI, Qdrant, Pinecone, sbert.net) usa el vocabulario de escalera de DOC-03 (predecir/leer código/investigar/modificar/refactorizar/escribir/depurar) ni el modelo de conflicto cognitivo explícito — son cursos y documentación técnica, no diseño instruccional con esa profundidad. Esto es esperable y no invalida las fuentes: DOC-11/DOC-12 exigen usar la evidencia de *qué enseñar y en qué orden*, no la forma de enseñarlo — la forma ya está resuelta por DOC-03/DOC-11/DOC-12 y no se reabre aquí.

---

## 4. Estrategia propuesta para secuenciar M2 — con justificación

### (a) Ingesta y chunking

**Secuencia propuesta:** motivar con el problema de contexto limitado del LLM (por qué no se puede simplemente pegar todo el documento en el prompt) → chunking fixed-size con numpy/strings puros (Pyodide, sin librerías) → mostrar el fallo concreto (una oración cortada a la mitad, una pregunta separada de su respuesta) como conflicto cognitivo (DOC-03 Bloque 2) → introducir recursive chunking como respuesta directa a ese fallo, citando el patrón de separadores jerárquicos de `RecursiveCharacterTextSplitter` (<https://docs.langchain.com/oss/python/integrations/splitters>, verificado: recomendado como splitter por defecto, intenta mantener párrafos/oraciones intactos) → mencionar semantic chunking como evolución conceptual (usa embeddings para decidir el corte) sin exigir implementarlo en Pyodide — es computacionalmente caro y depende de un modelo de embeddings real, mejor situarlo como puente hacia (b).

**Justificación:** el error de novato #1 (§2) es exactamente "chunking tratado como decisión trivial" — la secuencia arriba lo convierte en el primer conflicto cognitivo del módulo en vez de un parámetro de configuración que se menciona de pasada. La tabla de trade-offs de Pinecone (fixed-size: simple/rápido pero ciego a estructura; recursive: mejor balance; semántico: mejor coherencia pero caro) es citable directamente como Recurso Recomendado 🔵.

### (b) Embeddings y bases de datos vectoriales

**Secuencia propuesta:** parte Pyodide — vectores de juguete con numpy, similitud coseno calculada a mano (`np.dot(a,b)/(norm(a)*norm(b))`) antes de usar cualquier librería, exactamente el patrón que sbert.net documenta (mostrar el número real, no solo el concepto) → parte DOC-12 (entorno real) — instalar una vector DB real, indexar, consultar. **Se recomienda Qdrant como vector DB principal del laboratorio de entorno real**, con esta justificación explícita:

| Criterio | Qdrant | Chroma | Pinecone |
|---|---|---|---|
| Self-hosted / gratis | Sí (Docker local, verificado en investigación previa de docs de terceros) | Sí | No — SaaS de pago con free tier limitado |
| Documentación concepto-antes-que-comando | Sí, verificado directamente (§1.2) | No, verificado directamente (§1.2) | Parcial (buena en "Learn", ausente en API reference) |
| Hybrid search + reranking documentado con guía de decisión | Sí, con RRF/DBSF explicados (§1.2) | No es su foco | Sí pero como feature de producto pago |
| Alineado con DOC-12 (entorno real, terminal propia, sin depender de una cuenta cloud de pago) | Sí | Sí | No — exige cuenta y credenciales reales para uso serio |

Chroma se mantiene como mención de contraste (más simple de instalar en 5 minutos) pero no como DB del laboratorio principal precisamente porque su documentación no enseña el concepto — usarla obligaría a la Academia a suplir esa explicación conceptual íntegramente por su cuenta, mientras que Qdrant ya la ofrece verificada y alineada.

### (c) Recuperación híbrida

**Secuencia propuesta:** motivar con un caso donde la búsqueda semántica pura falla (un acrónimo o nombre propio exacto que el embedding "difumina") → introducir BM25 como complemento léxico exacto, no como sustituto → combinar con el patrón bi-encoder→cross-encoder de sbert.net (recuperación amplia con embeddings + reranking preciso con cross-encoder) → cerrar con la mecánica de fusión de Qdrant (RRF como default seguro, DBSF cuando hay datos de evaluación) como el "cómo se combina en la práctica" en el laboratorio de entorno real.

**Justificación:** esta es la subsección donde más evidencia directa de documentación oficial existe (sbert.net Retrieve & Re-Rank, Qdrant hybrid-queries, Weaviate alpha parameter) — se prioriza documentación oficial sobre blogs de práctica, disponible aquí a diferencia de (b)/(d).

### (d) Generación aumentada

**Secuencia propuesta:** construcción del prompt final con el contexto recuperado (plantilla explícita: instrucción + contexto + pregunta) → introducir **lost-in-the-middle** (arXiv:2307.03172) como el conflicto cognitivo central de esta subsección: un estudiante que ya resolvió retrieval e hybrid search puede seguir fallando si ordena mal el contexto dentro del prompt → ejercicio de depuración real: dado un RAG con retrieval correcto pero respuesta mala, diagnosticar si el problema es de retrieval o de "contexto enterrado en el medio" (conecta directamente con el error de novato #3, §2, y sienta la base de la evaluación en M4).

### Cierre — mapa DOC-11 (Pyodide) vs DOC-12 (entorno real)

| Tema | Documento gobernante | Por qué |
|---|---|---|
| Chunking conceptual (fixed-size, recursive a mano) con strings puros | **DOC-11** | Ejecutable íntegro en Pyodide, sin instalar nada, entorno idéntico para todos (criterio §5 de DOC-12) |
| Embeddings de juguete + similitud coseno con numpy | **DOC-11** | Numpy corre en Pyodide; no depende de estado externo persistente |
| Pipeline con vector DB real (Qdrant), indexación persistente, consultas reales | **DOC-12** | Depende de instalación real, posiblemente Docker, estado que persiste fuera de la sesión del Campus — criterio 2/3 de DOC-12 §5 |
| Hybrid retrieval (BM25 + dense) con reranking real | **DOC-12** | Requiere la vector DB real del punto anterior; el fusion tuning con datos reales no tiene sentido en un sandbox de juguete |
| Generación aumentada con LLM real vía API | **DOC-12** | Requiere credenciales/API externa reales — mismo criterio que ya usa SYL-N1 para M6 (Redes y APIs) según DOC-12 §5 |
| Evaluación del propio RAG (recall/precision de retrieval, RAG triad) | **DOC-12**, con puente explícito a M4 | Requiere el pipeline real funcionando; es la puerta de entrada natural a la investigación pedagógica de M4 cuando se produzca |

**Propuesta concreta de temas/días para M2** (heurística orientativa, no cifra obligatoria — DOC-11 §0 v2.0.1):

1. **T1 — Por qué RAG y el problema del contexto limitado** (DOC-11): motivación, hook, primer chunking fixed-size a mano.
2. **T2 — Chunking real: recursive y sus trade-offs** (DOC-11): conflicto cognitivo del corte que rompe significado; tabla de Pinecone como recurso.
3. **T3 — Embeddings de juguete y similitud coseno** (DOC-11): numpy puro, sin librerías de embeddings reales todavía.
4. **T4 — Laboratorio: primera vector DB real con Qdrant** (DOC-12): instalación, indexación, consulta — mini-proyecto integrador con T1–T3.
5. **T5 — Recuperación híbrida: BM25 + dense + reranking** (DOC-12): conflicto del acrónimo/nombre propio; RRF/DBSF.
6. **T6 — Generación aumentada y lost-in-the-middle** (DOC-12): construcción del prompt final, diagnóstico de dónde falló un RAG dado.
7. **T7 — Mini-proyecto integrador final de M2** (DOC-12): pipeline completo propio, con al menos un error inducido en vivo (DOC-12 §2.5bis) y puente explícito hacia la evaluación de M4.

Esta secuencia sigue exactamente el patrón sugerido en el encargo original (conceptual Pyodide primero → pipeline real DOC-12 → híbrido → generación → evaluación) y cada paso queda justificado por una fuente verificada distinta, no repetida — evita la colección plana que DOC-11 §0bis prohíbe explícitamente.

---

## 5. Clasificación de evidencia (categorías de DOC-11 §0bis / DOC-12 auditoría)

- **Evidencia muy sólida:** el hallazgo de "lost in the middle" (paper primario, arXiv:2307.03172, TACL 2024) · el patrón bi-encoder→cross-encoder (documentación oficial sbert.net) · la existencia y contenido real de los dos cursos DL.AI (verificado por WebFetch directo a las páginas oficiales).
- **Evidencia sólida:** la superioridad pedagógica de la documentación de Qdrant frente a Chroma (verificado por WebFetch directo a ambas, comparación consistente) · la convergencia independiente de tres fuentes sobre "separar evaluación de retrieval y de generación" (Kili Technology, kapa.ai, Pinecone).
- **Evidencia limitada:** los seis errores de novato de kapa.ai — es una única fuente de blog de práctica, sin replicación en una segunda fuente independiente para cada punto individual (aunque el punto de "mezclar embeddings" y el de "no evaluar retrieval por separado" sí tienen segunda fuente independiente, ver arriba).
- **Decisión de diseño por ausencia de evidencia suficiente:** la secuencia exacta de 7 temas/días propuesta en §4 — ninguna fuente prescribe ese orden exacto; es la síntesis del equipo de la Academia sobre la evidencia disponible, no una plantilla copiada.

**Falsabilidad pedagógica (DOC-11 §0bis):** la decisión de usar Qdrant como vector DB principal se abandonaría si el registro de ejecución (§6 de DOC-11/DOC-12) muestra que la instalación local de Qdrant (Docker) introduce fricción de entorno desproporcionada frente al valor pedagógico ganado — en ese caso, Chroma sería la alternativa de menor fricción a costo de suplir su documentación conceptual ausente con contenido propio de la Academia. La decisión de tratar "lost in the middle" como el conflicto cognitivo central de (d) se abandonaría si la observación real muestra que los estudiantes de N7 no llegan a producir prompts con contexto suficientemente largo para que el efecto sea perceptible en la práctica del laboratorio.

---

## Decisiones de diseño derivadas de la investigación

*(Sección de cierre obligatoria, DOC-11 §0bis principio 5.)*

- **Se adopta:** la secuencia de 4 subsecciones (a)-(d) con verificación intermedia en cada una, en vez de un pipeline único de una sola pieza — respaldada por evidencia sólida de convergencia independiente (§3).
- **Se adopta:** Qdrant como vector DB del laboratorio principal de DOC-12 — respaldado por comparación directa verificada de documentación (§1.2, §4b).
- **Se adopta:** "lost in the middle" (arXiv:2307.03172) como el conflicto cognitivo formal de la subsección (d) — es la única pieza de evidencia con paper primario citable de todo este documento.
- **Se modifica:** el supuesto inicial de "un curso DL.AI" se corrige a dos cursos con roles distintos en la secuencia (§1.1) — ajuste documentado explícitamente, no silencioso.
- **Se rechaza:** enseñar el pipeline completo de RAG en una sola lección/laboratorio de una sola pieza — traza concreta del fallo documentada en §3.
- **Se rechaza (parcialmente, con matiz):** usar Pinecone como fuente de documentación de referencia técnica de la vector DB del laboratorio — se conserva únicamente como fuente de la explicación conceptual de chunking y del pipeline general (contenido de "Learn", no de API reference), declarando el conflicto de interés comercial de la fuente.
- **Pendiente de validación (no de desarrollo — regla de nomenclatura DOC-11 §0bis):** si el error inducido en vivo de T7 (DOC-12 §2.5bis) debe ser un fallo de chunking, de mezcla de modelos de embeddings, o de ausencia de reranking — las tres son candidatas igualmente válidas según la evidencia de §2; la elección final se hará al redactar T7 y se registrará aquí si la ejecución real revela que una produce mejor conflicto cognitivo que las otras.
