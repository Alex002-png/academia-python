# SYL-N12 — Syllabus del Nivel 12 · AI Systems Architect

## Control del documento (conforme a DOC-00 §15.4)

| Campo | Valor |
|---|---|
| **Document Key** | SYL-N12 · Tier T2 |
| **Versión / Estado** | **1.0.0-candidato** · Flujo institucional de 9 pasos completo: diseño (Paso 1) + M1-M5 (20 temas) + Capstone ET5 (Paso 4) + Paso 8 (compuertas + banco de examen) + Paso 9a (herencias finales, N12 confirmado hoja terminal) + Auditoría Integral (4 auditores independientes, correcciones aplicadas: M5 rediseñado, DOC-12 §2.5/§2.8/§2.12 corregido en 9 objetos de M3+M4, 8 `hints[0]` reescritos, consistent hashing añadido, cruce DDIA declarado, repregunta cruzada en capstone) + Paso 9b Auditoría Adversarial Final (2 comités independientes, 6 ataques — 3 con mérito real corregidos: portabilidad AWS, presupuesto AWS obligatorio + fallback GPU, mecanismo de preparación del Tutor para TD-03; 1 elevado como recomendación T1 sin editar DOC-12 en silencio) + Informe Final de Nivel (`docs/informes/n12-informe-final-de-nivel.md`) completos. **Candidato a v1.0.0 con 1 reserva nombrada y acotada** (Ataque 4: M4 fuerza el esquema DOC-12 de terminal sobre un simulacro oral — no bloquea que un estudiante complete N12, requiere decisión del Director sobre DOC-12 Tier T1) — pendiente del veredicto definitivo del Director, nunca autodeclarado (guía §12) |
| **Autoridad de origen** | DOC-10 §9 (interior de N12) · DOC-00 14.8.3 · DOC-01 (C-N12-01…06) · DOC-02 (matriz de instrumentos — ver §3bis) |
| **Depende de** | DOC-10 v1.0.3 (mapa, §9 y §10) · DOC-00 (§13, §14, §16, 17.6) · DOC-01 · DOC-02 (RM-01…08, TD-01…03, TS-01, TP-01 — instrumentos ya aprobados que este documento instancia, no inventa) · DOC-03 (método, 14 momentos, roles del Tutor — en particular el rol **Entrevistador**, ya definido en §3.D) · DOC-11 (para la porción, si la hay, de contenido ejecutable en Pyodide) · DOC-12 (para M2/M3, dominante) · **Herencias entrantes de SYL-N7…N11 §7.2 (borrador — ninguno de los 5 niveles predecesores está congelado a la fecha de este documento, misma situación que ya enfrentó SYL-N9→SYL-N12 en su propio Paso 9a; ver §7)** |
| **Produce / desarrolla** | La estructura docente completa de N12: fichas pedagógicas por tema, definición concreta del capstone de carrera, y el registro explícito de las 2 decisiones de representación que la ficha de misión exigía resolver antes de escribir cualquier lección |
| **Estándar de calidad** | El mismo de SYL-N1…N3: *"Si otro profesor excepcional impartiera este nivel utilizando únicamente el syllabus, ¿obtendría prácticamente la misma calidad formativa?"* — elevado aquí a su prueba más exigente: este es el nivel de cierre de los 13, y su syllabus es lo último que un lector recorrería para entender qué produce la Academia en su punto más alto. |
| **Historial** | 0.1.0-draft (2026-07-21): Documento de Diseño. Leídos íntegros: guía de construcción de niveles, ficha de misión N12, DOC-10 (mapa completo + §9/§10), DOC-01 (C-N12-01…06 y matriz de cobertura), DOC-02 (rúbricas RM-01…08 y matriz canónica — hallazgo clave: **RM-08/TS-01 y TD-03 ya existían, pre-aprobados, exactamente para M4 y C-N12-06** — no fue necesario inventar el formato, solo instanciarlo), DOC-03 (14 momentos, 8 elementos de §3.F, rol Entrevistador ya definido en §3.D), DOC-11 y DOC-12 completos, y las 5 fichas de misión N7-N11 para tener el panorama completo de lo que este nivel sintetiza. Investigación real verificada por WebSearch (no de memoria): *System Design Interview* Vol. 1 (Xu, tabla de contenidos confirmada — 16 capítulos, marco de 4 pasos), *Machine Learning System Design Interview* (Aminian & Xu) y *Generative AI System Design Interview* (Aminian & Sheng, ByteByteGo) confirmados como títulos reales con tablas de contenido verificadas, AWS SAA-C03 (4 dominios confirmados: Seguridad 30%/Resiliencia 26%/Rendimiento 24%/Costos 20%, AWS Skill Builder como ruta gratuita oficial), *The Ultra-Scale Playbook* (Hugging Face, paralelismo de datos/tensor/pipeline/contexto, ~4000 experimentos reales en hasta 512 GPUs), *Cracking the Coding Interview* (McDowell, sección conductual con método STAR confirmada), y los blogs de ingeniería reales de OpenAI (`openai.com/news/engineering`) y Anthropic (`anthropic.com/engineering`) verificados como fuentes vivas y activas — ver §6 para el detalle completo con motivo de cada fuente. |

---

## 1. Tabla resumen

| Módulo | Temas | Días/tema | Competencias | Modalidad dominante | Quiebre de intuición |
|---|---|---|---|---|---|
| M1 · System design | 4 | 2 | C-N12-02 | Método + simulacro (RM-08/TS-01) | T1: no existe "la" arquitectura correcta — existe la que mejor paga las restricciones dadas, y un candidato se evalúa por cómo razona bajo repregunta, no por la primera respuesta |
| M2 · Arquitectura de sistemas de IA | 5 | 2-3 | C-N12-01 | Diseño/decisión (DOC-11-lite + escrito) | T2: la razón para paralelizar nunca es "tener más GPUs" — es que un solo modelo o un solo lote ya no caben en la memoria o el tiempo de una sola GPU, y cada forma de partirlo paga un costo de comunicación distinto |
| M3 · Cloud aplicado (AWS) | 5 | 2 | (sirve a C-N12-01, práctica DOC-12) | DOC-12 dominante | T3: el costo real de un sistema de IA en producción casi nunca lo domina el cómputo de inferencia — lo domina lo que el estudiante nunca midió antes (egress, almacenamiento de vectores, llamadas redundantes) |
| M4 · Preparación profesional | 4 | 2 | C-N12-03 | Simulacro (RM-08/TS-01), en inglés | T3: una respuesta conductual "correcta" sin evidencia verificable (números, decisiones, consecuencias reales) no pasa una entrevista real — STAR sin "R" medible es una anécdota, no una prueba |
| M5 · Culminación | 2 + capstone | — | C-N12-04, C-N12-05, C-N12-06 | Rúbrica de criterio (RM-06) + capstone | Único: la "vigencia autónoma" no se demuestra citando el avance más reciente posible — se demuestra integrándolo de verdad, con una justificación que sobreviviría a la pregunta "¿por qué éste y no otro?" |
| Proyecto de nivel (capstone de carrera) | — | — | Todas (C-N12-01…06) | Proyecto (`modalidad:"proyecto"`) + defensa final integradora (TD-03) | La culminación: el sistema completo, bajo restricciones nuevas y reales, defendido ante repregunta, con calibración honesta de qué se sabe/infiere/ignora — el umbral 6.6 del Blueprint |

*Densidad calibrada por naturaleza del nivel, no por fórmula fija (guía §8): N12 no introduce disciplina procedimental nueva de gran volumen — sintetiza y decide sobre lo que N7-N11 ya construyeron (mismo principio que la ficha de misión declara explícitamente: "tu trabajo es la síntesis y la decisión, no la introducción"). Por eso 2 días/tema es el patrón dominante (perfil "diseño/lectura/decisión" de la guía §8, no "práctica procedimental pesada"), con M2 escalando a 2-3 cuando el tema lo sostiene (T2 multi-GPU y T5 laboratorio integrador son genuinamente más densos). 20 temas + capstone es una cifra real derivada de instanciar DOC-10 §9 tema por tema, no una promesa previa — ver §3 sobre por qué esto no es "menos nivel" sino el perfil de exigencia correcto para un nivel de síntesis.*

## 2. Identidad del nivel

Por referencia a DOC-10 §9: **N12 · AI Systems Architect** no es "un módulo más de contenido técnico" — es el cierre de los 13 niveles y de las 64 competencias del catálogo (DOC-01 §3.2). El estudiante no llega a aprender una disciplina nueva: llega habiendo ya construido, desplegado, operado y sintetizado en local sistemas de IA reales (ET4 completa, N7-N10) y habiendo aprendido a producir conocimiento nuevo con rigor (N11). Lo que N12 exige que el estudiante haga por primera vez no es *construir* — es **decidir bajo restricciones y defender esa decisión ante repregunta real**, en el registro exacto (inglés profesional, formato de industria) que el mercado internacional exige.

Entrada: N11 Superado (NNR-01). Salida: **la defensa final integradora del recorrido completo** (DOC-10 6.6, C-N12-06) + certificación institucional — no hay nivel siguiente que reciba Herencias Declaradas de N12 (§7.2 de este documento no existe; N12 es hoja terminal del grafo, DOC-10 §4). Si N7-N10 enseñaron a construir sistemas y N11 a producir conocimiento, N12 enseña **a sostener, en tiempo real y ante un examinador que no conoce el contexto previo, por qué este sistema es correcto bajo estas restricciones y no otras** — la habilidad exacta que separa a un ingeniero que ejecuta de un arquitecto que decide.

## 3. Principios de ejecución

1. **Perfil del nivel: síntesis y decisión, no introducción** *(citado directamente de la ficha de misión)*: M1-M2 presuponen la totalidad de N7-N11 sin volver a enseñarla. Ningún tema de N12 reintroduce RAG, agentes, Kubernetes, vLLM, cuantización o reproducción de papers — los usa como vocabulario ya adquirido para practicar la pregunta nueva: *dadas estas restricciones, ¿cuál de las piezas que ya sé construir es la correcta, y qué pago por elegirla?*. Riesgo de alcance explícito, verificado tema por tema durante el diseño: ningún tema de M2/M3 de este documento re-enseña una tecnología de N7-N10 — cada uno la presupone y practica la decisión.
2. **Modalidad dominante: DOC-12 y escrito/oral, no Pyodide** *(criterio de frontera DOC-12 §5, verificado módulo por módulo, no asumido)*: M1 es mayormente simulacro oral/escrito (framework + práctica bajo repregunta — ninguna de las tres preguntas de frontera de DOC-12 §5 aplica de forma central, así que M1 no es DOC-12 en sentido estricto, pero tampoco es Pyodide: es el mismo caso que N11 ya declaró para su M1-M3, escritura/lectura/simulacro sin ejecución de código como evidencia principal). M2 mezcla decisión escrita/oral (DOC-11-lite cuando ilustra un cálculo puntual, ej. estimación de capacidad o costo, verificable con un script corto) con relato de arquitectura real. M3 es DOC-12 dominante y explícito (AWS real, con las advertencias de costo de DOC-12 §2.5/§3 desde el diseño, mismo patrón que N9). M4 es simulacro puro (TS-01). M5 es rúbrica de criterio + el capstone. **Ningún tema de N12 depende de que Pyodide ejecute PyTorch/TensorFlow ni de ninguna primitiva no verificada** — no aplica el riesgo técnico de la guía §6 sobre librerías no disponibles en Pyodide, porque N12 no entrena nada: decide y despliega.
3. **Registro lingüístico dual, declarado explícitamente por tema** *(hallazgo de diseño propio, no anticipado por la guía con este detalle)*: la Academia enseña en español (M1-M3, M5) pero C-N12-03 exige explícitamente el proceso completo de entrevista **en inglés** (D6.4). Cada tema de M4 declara su idioma de trabajo real en su ficha — no es una traducción decorativa del contenido de M1: es la misma habilidad de M1 (método de system design) más las habilidades de coding y conductual, ahora bajo presión de un segundo idioma y un registro profesional distinto, con sus propios errores de novato (traducir literalmente del español, perder el hilo del razonamiento por el esfuerzo del idioma) documentados en la ficha correspondiente.
4. **El Tutor como Entrevistador, no como profesor, en M1.T4 y todo M4** *(instanciación directa de DOC-03 §3.D, que ya define el rol "Entrevistador: Simulacros (RM-08) y preguntas tipo entrevista del cierre — presión realista de proceso de selección")*: estos temas no se conducen con el rol Profesor/Pair programmer que domina el resto de la Academia — el Tutor rota explícitamente al rol Entrevistador, con la presión y el registro que ese rol exige por diseño institucional, no como una libertad de este nivel.
5. **Verificación numérica, heredada sin relajación**: todo cálculo de capacidad, costo o rendimiento que aparezca en un ejercicio de M1-M3 (estimación de QPS, cálculo de costo mensual de un endpoint, comparación de latencia local-vs-cloud) se calcula primero con un script real antes de fijarse en cualquier ficha o `check()` futuro — mismo principio de la guía §9, sin excepción por ser un nivel de síntesis.
6. **Densidad calibrada, no inflada** (guía §8): ver nota de §1. La heurística de partida (2 días/tema, escalando a 2-3 cuando el tema lo sostiene) se declara explícita y honestamente aquí, ANTES de construir contenido real — exactamente la disciplina que la guía exige para no repetir el error de N3 (prometer una cifra y entregar otra). Se ajustará hacia arriba en la construcción real (Paso 2) solo si un tema concreto lo sostiene, nunca al revés.
7. **Triple justificación** y **Método DOC-03** — heredados sin cambio de N1-N11.

## 3bis. Dos decisiones de diseño obligatorias — resueltas antes de escribir cualquier lección

*(La ficha de misión exige explícitamente decidir y documentar esto como "la decisión de diseño más importante de tu nivel" antes de escribir el syllabus. Se resuelve aquí, con su razonamiento completo, no en silencio.)*

### Representación de M4 (preparación profesional: proceso completo de entrevista internacional en inglés)

**La pregunta que la ficha de misión plantea:** M4 no es código verificable con `check()` — es simulacro de entrevista con componente oral/conductual, en un idioma distinto al de instrucción del resto de la Academia. ¿Guión estructurado? ¿rúbrica de autoevaluación? ¿compañero de estudio simulado?

**Hallazgo que cambia la pregunta:** al leer DOC-02 completo (paso previo obligatorio antes de diseñar cualquier instrumento nuevo — nunca inventar sin verificar primero si ya existe), se confirma que **este problema ya estaba resuelto institucionalmente antes de que N12 se diseñara**: la matriz canónica de DOC-02 §4 ya mapea `C-N12-02` (system design en vivo) y `C-N12-03` (proceso de entrevista completo en inglés) contra el instrumento **RM-08 · Simulacro de entrevista** y la plantilla **TS-01 · Simulacro de entrevista**, con sus anclas I/U/S ya redactadas ("completa el proceso comunicando su razonamiento en voz alta, gestiona el tiempo y responde al nivel que el rol exige — en inglés cuando la competencia lo requiere" para el nivel Umbral). El rol de Tutor "Entrevistador" también ya existe en DOC-03 §3.D. **La decisión de diseño real de N12 no es inventar un formato — es no reinventar uno que ya está aprobado**, y documentar cómo se instancia en el contenido real.

**Decisión adoptada:** M4 se representa con el objeto "día" estándar de `index.html` (mismo esquema de la guía §3) pero sus `ex[]` **no llevan `check()` de comparación determinista de texto** — llevan un **guión de simulacro** con: contexto realista (empresa/rol ficticios pero verosímiles, en inglés), el problema o pregunta exacta que el Tutor-Entrevistador plantea, una checklist de comportamientos esperados derivada directamente de las anclas I/U/S de RM-08 (no inventada de nuevo por tema), y un espacio de autoevaluación estructurada + bitácora — mismo patrón de registro libre que ya usan los capstones de `modalidad:"proyecto"` vía `S.ph`. La solución de referencia de cada simulacro se verifica igual de rigurosamente que cualquier `check()` (guía §9): no comparando strings, sino verificando que la checklist de comportamientos es exhaustiva y no ambigua, y que el escenario es genuinamente resoluble por un estudiante que domina M1-M3, no una trampa de redacción. **El campo JS exacto que sustituye a `check()` (nombre, forma) se fija en la construcción real de M4 — Paso 2 — no aquí; lo que se fija ahora es el principio de diseño y su fuente institucional (RM-08/TS-01), no la sintaxis.**

### Representación de M5 (culminación — vigencia autónoma, sin respuesta única)

**La pregunta que la ficha de misión plantea:** M5 es, por diseño, abierto y autodirigido — no hay un "avance reciente" fijo que todo estudiante deba incorporar. No puede existir un `check()` con una respuesta correcta única.

**Mismo patrón de hallazgo:** DOC-02 §4 ya resuelve esto también — `C-N12-04` y `C-N12-05` mapean contra **RM-06 · Proyecto** (evidencia [A][E], anclas de criterio: funciona de extremo a extremo / resiste el examen de un tercero / demuestra criterio de ingeniería más allá de lo pedido — nunca comparación de salida exacta) y plantilla **TP-01**. Esto confirma lo que la ficha de misión ya intuía: M5 no es una serie de lecciones con ejercicios propios en el sentido de M1-M4 — es, estructuralmente, **la antesala directa del capstone**, con solo 2 temas de guía real (§5, M5) que enseñan el criterio de selección/justificación de un avance, y cuyo grueso de evidencia vive en los hitos del proyecto de nivel (§6), no en `ex[]` de M5.

**Decisión adoptada:** M5.T1-T2 se construyen con el objeto "día" estándar, `theory` sustancial (criterios de qué hace a un avance "genuinamente reciente y relevante", cómo distinguir integración real de cosmética, con ejemplos reales trazables a fuentes verificadas — nunca inventados) y `ex[]` como ejercicios de **juicio aplicado** (dado un caso descrito, argumentar si la integración propuesta es real o cosmética, contra una rúbrica explícita, no contra una respuesta única) — mismo patrón conceptual que un ejercicio de "detectar errores" de DOC-11 Bloque 4, aplicado a criterio de diseño en vez de a código. El hito final del capstone (§6, h5) es donde la evidencia real de C-N12-05 se produce y se evalúa contra RM-06, no en M5.T1-T2, que son preparación, no la prueba misma.

## 4. Estructura y grafo local

Troncal: `M1 → M2 → M3 → M4 → M5`. M1 (método de system design) es prerrequisito real de M2 (aplicar el método a sistemas de IA) y de M4.T2 (system design interview — reutiliza el mismo framework, ahora en inglés y bajo presión de tiempo real). M2 y M3 están acopladas de forma bidireccional débil: M2 diseña, M3 despliega parte de lo diseñado — el laboratorio de cierre de M2 (T5) produce el primer borrador de arquitectura que M3.T5 lleva a AWS real; no hay contenido nuevo de M3 que M2 presuponga técnicamente, pero el orden narrativo (diseñar antes de desplegar) es intencional. M4 depende de M1 (T2) y del vocabulario acumulado de N7-N11 (T1, T3), pero es independiente de M2/M3 en contenido — se secuencia después de ambos porque el simulacro de M4.T2 usa el propio sistema del estudiante (ya arquitecturado en M2, ya parcialmente desplegado en M3) como material de práctica, no un caso genérico. M5 cierra: depende de tener un sistema real que "culminar" (M2+M3) y de haber practicado defenderlo (M4).

**Nota de implementación** (mismo texto institucional que rige todo SYL-Nx desde EVT-034): el Campus presenta un recorrido lineal único, sin bifurcaciones de navegación — la implementación resuelve siempre a M1→M2→M3→M4→M5, decidida antes de construir el contenido.

## 5. Fichas pedagógicas por tema

*Plantilla heredada de SYL-N1…N3 (10 campos + condicionales), con la generalización de DOC-11 §2 ("más allá del código": en temas sin código, predecir/investigar/modificar/escribir/depurar se traducen a razonamiento/derivación/diseño) y la instanciación de DOC-03 §3.F donde el tema lo sostiene. Los 5 campos de cierre de módulo (quiebre de intuición, supuesto que destruye, idea universal, limitación humana que compensa, lo que deja de sorprender) se declaran en el último tema de cada módulo, mismo patrón que SYL-N3 §5.*

### M1 · System design

> **La gran pregunta de este módulo: ¿cómo estructuras, en voz alta y bajo repregunta, una respuesta a "diseña X" cuando X puede significar casi cualquier cosa?**

**N12.M1.T1 · El framework de 4 pasos bajo presión — requisitos, estimación, diseño de alto nivel, profundización**
- **Objetivo:** aplica un framework repetible (aclarar requisitos funcionales/no funcionales → estimación de capacidad → diseño de alto nivel → profundizar en 2-3 componentes bajo repregunta) a un problema de system design genérico, sin quedarse en blanco ante el tamaño del espacio de solución.
- **Prerrequisitos:** N11 Superado; haber diseñado al menos un sistema real de principio a fin (N7-N10).
- **Competencias:** C-N12-02.
- **Errores habituales:** empezar a dibujar componentes antes de aclarar requisitos (la causa nº1 de respuestas que se desmoronan ante la primera repregunta); tratar la estimación como un trámite en vez de una herramienta que restringe el diseño; intentar cubrir todo el sistema al mismo nivel de detalle en vez de elegir dónde profundizar.
- **Modelo mental:** el framework como **un embudo, no una checklist** — cada paso reduce el espacio de diseño válido antes de comprometerse con el siguiente; saltarse un paso no ahorra tiempo, produce una arquitectura que no responde a los requisitos reales porque nunca se preguntaron.
- **Por qué:** existe porque toda entrevista real de system design (y toda decisión arquitectónica real bajo plazo) exige producir una respuesta estructurada sin conocer de antemano qué va a preguntar el examinador / ahora porque el estudiante ya diseñó sistemas reales (N7-N10) pero nunca bajo esta disciplina de comunicación en vivo / habilita M1.T2-T4 y todo M2.
- **Evidencia de dominio:** dado un enunciado ambiguo de una línea ("diseña un sistema de mensajería"), produce las preguntas de aclaración correctas antes de proponer cualquier componente.
- **Práctica principal:** aplicar el framework completo a 2-3 problemas clásicos no relacionados con IA (ej. acortador de URLs, rate limiter — Xu Cap. 3-4), verbalizado y registrado en bitácora, para fijar el método antes de cargarlo con la complejidad de sistemas de IA en M2.
- **Evaluación:** RM-08 (simulacro), ancla Umbral.
- **Pregunta ingenieril:** si dos candidatos proponen arquitecturas distintas para el mismo problema y ambas "funcionan", ¿qué distingue a la que un examinador calificaría como Sobresaliente de la que calificaría como Umbral?

**N12.M1.T2 · Estimación de capacidad — el cálculo que restringe el diseño antes de dibujarlo**
- **Objetivo:** produce estimaciones de orden de magnitud (usuarios, QPS, almacenamiento, ancho de banda) a partir de supuestos declarados explícitamente, y usa el resultado para descartar arquitecturas que no lo sostienen.
- **Prerrequisitos:** T1.
- **Competencias:** C-N12-02.
- **Errores habituales:** perseguir precisión falsa (calcular con 3 decimales sobre supuestos inventados) en vez de orden de magnitud correcto; no declarar los supuestos, haciendo el cálculo imposible de auditar; olvidar que la estimación debe *cambiar* el diseño, no ser un párrafo decorativo antes de él.
- **Modelo mental:** la estimación como **la prueba de humo del diseño** — si el número de escrituras por segundo estimado es 50,000 y la arquitectura propuesta usa una única instancia de base de datos relacional sin réplicas, el número ya reprobó el diseño antes de construirlo.
- **Por qué:** existe porque ningún diseño se sostiene sin saber, aunque sea aproximadamente, la escala real que debe soportar (Xu Cap. 2) / ahora porque T1 ya dio el lugar exacto del framework donde este paso vive / habilita M1.T3-T4 y el h1 del capstone.
- **Evidencia de dominio:** dado un escenario (ej. "10M usuarios activos diarios, cada uno sube 2 fotos"), produce QPS de lectura/escritura y almacenamiento anual en minutos, declarando cada supuesto.
- **Práctica principal:** 4-5 estimaciones de escenarios distintos, cada valor verificado por script real antes de fijarse en la ficha (guía §9) — incluye al menos un escenario de sistema de IA (ej. costo de tokens/mes de un chatbot con X usuarios) como puente directo a M2.
- **Evaluación:** RM-08.
- **Pregunta ingenieril:** si tu estimación de almacenamiento para 5 años es 1000× más grande de lo que puede caber en un único disco de tu proveedor cloud, ¿qué decisión de arquitectura (no de estimación) se vuelve obligatoria?

**N12.M1.T3 · Trade-offs arquitectónicos fundamentales — el vocabulario que sostiene toda profundización**
- **Objetivo:** nombra y aplica los trade-offs clásicos de sistemas distribuidos (consistencia vs. disponibilidad, síncrono vs. asíncrono, SQL vs. NoSQL, caching, sharding, colas) con el costo real de cada dirección, no solo su nombre.
- **Prerrequisitos:** T1-T2; N9 (colas, Kafka) y N2.M3 (PostgreSQL, async) como base técnica ya construida que aquí se practica como *decisión*, no se re-enseña.
- **Competencias:** C-N12-02.
- **Errores habituales:** nombrar un trade-off sin poder argumentar el costo de ambos lados (equivalente a no tener trade-off real, solo vocabulario); elegir NoSQL o caching "porque escala" sin decir qué se pierde; ignorar que casi ningún trade-off es binario — la mayoría de sistemas reales combinan ambos lados en componentes distintos.
- **Modelo mental:** cada trade-off como **una factura que alguien paga, en algún momento, en algún lugar del sistema** — la pregunta correcta nunca es "¿cuál es mejor?", es "¿quién paga qué, y puedo permitírmelo bajo estas restricciones?".
- **Por qué:** existe porque la profundización del framework (T1, paso 4) se hace, en la práctica, discutiendo trade-offs concretos ante repregunta — sin este vocabulario, la profundización se queda en generalidades / ahora porque T2 ya dio los números que hacen el trade-off real y no abstracto / habilita M1.T4 y todo M2.
- **Evidencia de dominio:** dado un componente y una restricción nueva (ej. "ahora debe tolerar la caída de una región entera"), identifica qué trade-off entra en juego y argumenta la dirección elegida con su costo.
- **Práctica principal:** análisis de trade-off escrito sobre 3-4 componentes de sistemas ya conocidos por el estudiante (su propio RAG de N7, su propio sistema agéntico de N8) — primera vez que N12 pide reinterpretar trabajo propio de niveles anteriores bajo esta lente nueva.
- **Evaluación:** RM-02 (escrito) + RM-08.
- **Pregunta ingenieril:** tu propio sistema RAG de N7 usó una base vectorial única sin réplicas — ¿qué trade-off implícito tomaste entonces sin nombrarlo, y lo tomarías igual ahora sabiendo lo que sabes de N9?

**N12.M1.T4 · Simulacro completo de system design bajo repregunta — cierra M1**
- **Objetivo:** ejecuta el framework completo (T1-T3 integrados) en un simulacro cronometrado con el Tutor en rol Entrevistador, sosteniendo repreguntas inéditas sin guion.
- **Prerrequisitos:** T1-T3.
- **Competencias:** C-N12-02.
- **Errores habituales:** los mismos de T1-T3, ahora bajo presión de tiempo real — la práctica muestra que un error ya corregido en ejercicio aislado reaparece la primera vez que se combina con presión de reloj y repregunta simultánea.
- **Modelo mental:** el simulacro como **la primera vez que las tres piezas (framework, estimación, trade-offs) tienen que sostenerse juntas, en vivo, sin poder pausar a repasar la ficha** — el mismo principio que ya usa toda defensa socrática de la Academia (M13, DOC-03), aplicado aquí en su forma de industria más pura.
- **Por qué:** existe porque ninguna de las tres piezas por separado prueba que el estudiante puede sostenerlas juntas bajo presión real — el modo de fallo que este tema existe para detectar antes de que ocurra en una entrevista real / ahora porque T1-T3 ya dieron cada pieza / habilita M2 completo (mismo framework, ahora cargado con sistemas de IA) y M4.T2.
- **Evidencia de dominio:** sostiene un simulacro completo (30-45 min) de un problema no visto, aplicando el framework sin que el Tutor tenga que recordárselo.
- **Práctica principal:** simulacro real bajo guión TS-01 (§3bis) — checklist de comportamientos derivada de las anclas RM-08, autoevaluación + bitácora.
- **Evaluación:** RM-08, ancla completa I/U/S.
- **Pregunta ingenieril:** —
- **El quiebre de intuición de M1:** el instante donde el estudiante nota que la primera repregunta del Tutor no busca "la respuesta correcta que faltaba" — busca ver cómo reacciona cuando su plan inicial resulta incompleto; no existe "la" arquitectura correcta, existe la que mejor paga las restricciones dadas y se defiende mejor bajo presión.
- **El supuesto que destruye:** "si preparo bien la respuesta inicial, la entrevista está ganada" — se destruye al ver que la repregunta, no la respuesta inicial, es donde realmente se evalúa.
- **Idea universal (cierre de M1):** system design no es una prueba de conocimiento de tecnologías — es una prueba de razonamiento estructurado bajo incertidumbre y restricción, comunicado en voz alta. Todo M2-M4 es esta misma prueba, cargada progresivamente con más contenido real.

### M2 · Arquitectura de sistemas de IA

> **La gran pregunta de este módulo: dado un sistema de IA real y unas restricciones de escala/costo/seguridad, ¿qué arquitectura lo sostiene, y qué paga cada alternativa?**

**N12.M2.T1 · Arquitectura de sistemas LLM en producción — cuándo cada patrón, no cómo construirlo**
- **Objetivo:** decide, dado un caso de uso y restricciones, entre los patrones arquitectónicos que N7-N9 ya construyeron por separado (RAG puro, fine-tuning, agente con herramientas, combinaciones), justificando la elección con trade-offs reales de costo/latencia/frescura de datos/control.
- **Prerrequisitos:** N7 (RAG), N8 (agentes), N9 (serving) Superados — presupuestos sin reintroducción, conforme al principio §3.1.
- **Competencias:** C-N12-01.
- **Errores habituales:** tratar RAG y fine-tuning como mutuamente excluyentes en vez de complementarios; elegir un agente cuando un pipeline determinista más simple resuelve el mismo problema con menos modos de fallo (sobre-ingeniería, el error opuesto al de "usar siempre lo más simple"); no distinguir "el modelo no sabe esto" (RAG) de "el modelo no se comporta así" (fine-tuning/post-entrenamiento).
- **Modelo mental:** cada patrón como **una respuesta a una pregunta distinta** — RAG responde "¿cómo le doy conocimiento fresco sin reentrenar?", fine-tuning responde "¿cómo cambio su comportamiento de forma estable?", un agente responde "¿cómo le doy la capacidad de actuar, no solo de responder?" — mezclar las preguntas produce arquitecturas que resuelven el problema equivocado.
- **Por qué:** existe porque en producción real casi nunca hay una única tecnología "correcta" — hay una decisión, con costos en ambas direcciones, que alguien con autoridad de arquitecto debe tomar y defender / ahora porque el estudiante ya construyó los tres patrones por separado (N7-N9) y puede comparar con conocimiento real, no teórico / habilita T2-T5.
- **Evidencia de dominio:** dado un caso de uso nuevo, elige y justifica un patrón (o combinación) citando qué de N7/N8/N9 reutiliza y qué de ese patrón NO le sirve aquí.
- **Práctica principal:** análisis comparativo escrito de 3 casos de uso reales distintos (ej. soporte al cliente con políticas que cambian semanalmente, un asistente de código con acceso a un repo privado, un buscador semántico de documentación legal) — cada uno exige un patrón distinto, verificable contra la propia justificación del estudiante.
- **Evaluación:** RM-02.
- **Pregunta ingenieril:** ¿en qué caso real construirías un agente con RAG como una de sus herramientas, en vez de RAG con un agente por encima? ¿Qué cambia arquitectónicamente entre ambos?

**N12.M2.T2 · Multi-GPU y estrategias de paralelismo — decisión, no reentrenamiento**
- **Objetivo:** explica y decide entre las estrategias de paralelismo (datos, tensor, pipeline) para entrenamiento/inferencia a escala, sin re-derivar backpropagation ni entrenar nada — la pregunta es cuándo cada una, no cómo implementarlas desde cero.
- **Prerrequisitos:** T1; N5 (redes desde cero, PyTorch) y N9 (model serving, vLLM/Ray) como base técnica presupuesta.
- **Competencias:** C-N12-01.
- **Errores habituales:** creer que "más GPUs" es en sí mismo una solución de escala, sin preguntar qué límite concreto (memoria de un modelo, tiempo de un lote, throughput de tokens) se está resolviendo; confundir paralelismo de datos (mismo modelo, lotes distintos) con paralelismo de modelo (el modelo mismo partido entre GPUs); ignorar el costo de comunicación entre GPUs como si fuera gratis.
- **Modelo mental:** la razón para paralelizar nunca es "tener más GPUs" — es que **un solo modelo o un solo lote ya no caben en la memoria o el tiempo de una sola GPU**, y cada forma de partirlo (datos/tensor/pipeline/contexto) paga un costo de comunicación distinto que puede anular la ganancia si se elige mal.
- **Por qué:** existe porque toda decisión real de infraestructura de IA a escala (entrenar un modelo grande, servir uno con throughput alto) exige elegir entre estas estrategias con criterio, no por defecto / ahora porque T1 ya fijó el vocabulario de decisión arquitectónica / habilita T3 (el costo de cada estrategia) y T5.
- **Evidencia de dominio:** dado un síntoma (ej. "el modelo no cabe en una GPU de 80GB" vs. "el modelo cabe pero el entrenamiento es demasiado lento"), identifica qué estrategia de paralelismo ataca ese síntoma específico y por qué las otras no.
- **Práctica principal:** estudio de caso real sobre *The Ultra-Scale Playbook* (Hugging Face, §6) — el estudiante reconstruye, sin código de entrenamiento real, el razonamiento de decisión de al menos 2 de los ~4000 experimentos documentados (por qué esa combinación de paralelismos, qué límite resolvía).
- **Evaluación:** RM-02.
- **Pregunta ingenieril:** si dos GPUs están conectadas por una red lenta (no NVLink) y decides usar tensor parallelism de todos modos, ¿qué le pasa a tu throughput real frente al teórico, y por qué el tipo de interconexión es, en sí mismo, una decisión arquitectónica?

**N12.M2.T3 · Modelado de costos de sistemas de IA en producción**
- **Objetivo:** construye un modelo de costo real (no estimado a ojo) de un sistema de IA en producción — inferencia, almacenamiento vectorial, ancho de banda, reentrenamiento periódico — y usa ese modelo para decidir entre alternativas arquitectónicas.
- **Prerrequisitos:** T1-T2; M1.T2 (estimación de capacidad).
- **Competencias:** C-N12-01.
- **Errores habituales:** modelar solo el costo de cómputo de inferencia e ignorar egress/almacenamiento (el hallazgo real más común en auditorías de costo de sistemas de IA, ver §6); comparar el costo de una alternativa "self-hosted" contra una "managed" sin incluir el costo de ingeniería/operación humana en la primera; optimizar el costo sin declarar qué se sacrifica (latencia, disponibilidad, calidad).
- **Modelo mental:** el costo real de un sistema de IA en producción **casi nunca lo domina el cómputo de inferencia** — lo domina lo que el estudiante nunca midió antes: egress de datos, almacenamiento y actualización de vectores, llamadas redundantes por caché mal diseñado, reentrenamiento innecesariamente frecuente.
- **Por qué:** existe porque toda decisión de arquitectura bajo restricción de costo (la restricción más común y más real de la industria) exige un modelo verificable, no una intuición / ahora porque T1-T2 ya dieron el vocabulario de patrones y de paralelismo que determinan qué se está pagando / habilita T4 y M3 completo (donde el costo se vuelve real, no modelado).
- **Evidencia de dominio:** dado un sistema descrito (arquitectura + volumen de uso), produce un desglose de costo mensual por componente, con los supuestos declarados, y señala el componente dominante.
- **Práctica principal:** modelo de costo real del propio sistema del estudiante (su columna vertebral de N7-N10), calculado con precios públicos reales de al menos 2 proveedores (verificado por fetch directo a páginas de precios oficiales antes de fijarse en ningún ejercicio, mismo principio de verificación empírica de la guía §9 aplicado a datos de mercado en vez de a código).
- **Evaluación:** RM-02.
- **Pregunta ingenieril:** si el 80% del costo mensual de tu sistema resulta ser almacenamiento y recuperación vectorial, no inferencia del LLM, ¿qué decisión de arquitectura (no de proveedor) atacarías primero?

**N12.M2.T4 · Seguridad arquitectónica de sistemas de IA a escala**
- **Objetivo:** identifica y mitiga riesgos de seguridad que operan a nivel de arquitectura de sistema (aislamiento multi-tenant, cadena de confianza de modelos/dependencias, superficie de ataque de un sistema con múltiples componentes), distintos de los guardrails de contenido ya cubiertos en N7.M4/N8.M5.
- **Prerrequisitos:** T1; N7.M4 (evals y guardrails) y N8.M5 (fiabilidad de agentes) como base ya construida, ahora elevada de "por sesión/por agente" a "por sistema completo con múltiples usuarios/tenants".
- **Competencias:** C-N12-01.
- **Errores habituales:** confundir seguridad de contenido (lo que N7/N8 ya cubrieron: qué dice el modelo) con seguridad de sistema (lo que este tema cubre: quién puede acceder a qué, con qué aislamiento, con qué cadena de confianza); asumir que un modelo de terceros o una dependencia de código abierto es segura porque es popular, sin verificar su cadena de procedencia; diseñar aislamiento multi-tenant como una característica añadida al final en vez de una decisión de arquitectura desde el inicio.
- **Modelo mental:** la seguridad arquitectónica como **la pregunta "qué pasa si un tenant/usuario/componente se comporta de forma maliciosa o simplemente falla", respondida ANTES de construir, no como un parche después de un incidente** — el mismo principio de A5 (DOC-03) aplicado a arquitectura de sistemas completos.
- **Por qué:** existe porque un sistema de IA en producción real sirve a múltiples usuarios/clientes simultáneamente, y el aislamiento entre ellos es una decisión arquitectónica con costo real (más infraestructura, más latencia) que compite contra la simplicidad / ahora porque T1-T3 ya dieron el sistema completo sobre el que razonar seguridad / habilita T5 y el capstone.
- **Evidencia de dominio:** dado un diseño de sistema multi-tenant, identifica al menos 2 vectores de fuga de aislamiento (ej. caché compartido entre tenants, prompts de un tenant visibles en logs accesibles a otro) y propone la mitigación con su costo.
- **Encuadre obligatorio** *(mismo mandato que N7.M4/N8.M5)*: este tema es defensivo y educativo por diseño — enseña a reconocer y mitigar riesgos arquitectónicos reales, nunca a explotarlos.
- **Práctica principal:** auditoría de seguridad arquitectónica (no de contenido) sobre el propio sistema del estudiante o un caso descrito, contra una checklist verificada de vectores reales (basada en fuentes citadas en §6, no inventada).
- **Evaluación:** RM-02.
- **Pregunta ingenieril:** si tu sistema usa un modelo open-weight descargado de un repositorio público, ¿qué verificarías en su cadena de procedencia antes de servirlo a usuarios reales, y qué pasa si esa verificación no es posible?

**N12.M2.T5 · Laboratorio integrador — primer borrador del design doc bajo restricciones — cierra M2**
- **Objetivo:** produce un primer borrador completo de design doc (framework M1 + patrón de T1 + paralelismo/costo de T2-T3 + seguridad de T4) para un sistema bajo restricciones concretas, listo para llevarse a AWS real en M3.
- **Prerrequisitos:** T1-T4.
- **Competencias:** C-N12-01.
- **Errores habituales:** los de T1-T4, ahora bajo el riesgo real de que decisiones tomadas en aislamiento (T1: patrón elegido; T3: costo modelado) resulten incompatibles entre sí cuando se combinan en un solo documento.
- **Modelo mental:** el design doc como **el artefacto que un tercero sin contexto previo debe poder auditar** — mismo criterio de "resistir el examen de un tercero" que ya rige todo capstone de la Academia desde N2 (RM-06), ahora aplicado a un documento de arquitectura, no a código.
- **Por qué:** existe porque ningún tema aislado de M2 prueba que el estudiante puede integrar patrón + escala + costo + seguridad en una sola decisión coherente y defendible / ahora porque T1-T4 dieron cada pieza por separado / habilita M3 (el despliegue real de este mismo diseño) y h2 del capstone directamente.
- **Evidencia de dominio:** produce un design doc real (2-4 páginas) con sección de restricciones dadas, patrón elegido y por qué, estimación de capacidad y costo, y riesgos de seguridad declarados.
- **Práctica principal:** laboratorio integrador — el design doc real del propio sistema del estudiante bajo un conjunto de restricciones asignado (mismo esquema que usará el capstone, §7, practicado aquí a menor escala primero).
- **Evaluación:** RM-02 + RM-05 (defensa breve).
- **Pregunta ingenieril:** —
- **El quiebre de intuición de M2:** el instante donde el estudiante nota que su primer borrador de design doc, escrito con las cuatro piezas "correctas" por separado, no se sostiene como un todo — un patrón elegido en T1 puede ser incompatible con el presupuesto modelado en T3, y solo se descubre al integrarlos, nunca revisando cada pieza en aislamiento.
- **El supuesto que destruye:** "si cada componente de mi arquitectura es individualmente correcto, el sistema completo lo es" — se destruye al ver que la coherencia entre componentes es, en sí misma, una decisión de arquitectura, no una consecuencia automática.
- **Idea universal (cierre de M2):** arquitecturar un sistema de IA real es resolver una restricción simultánea de patrón + escala + costo + seguridad — optimizar cualquiera de las cuatro en aislamiento, ignorando las otras tres, produce un diseño que no sobrevive a un tercero auditándolo.
- **La limitación humana que compensa M2:** la dificultad humana de sostener 4 restricciones simultáneas en la cabeza a la vez sin perder ninguna — el design doc escrito, no la memoria del arquitecto, es lo que garantiza que las cuatro se resolvieron juntas.

### M3 · Cloud aplicado (AWS al servicio de la arquitectura)

*Módulo DOC-12 dominante (guía §6: "N7-N10... APIs reales, RAG con vector DBs, Kubernetes, vLLM... esto es DOC-12 dominante" — mismo perfil aplicado ahora a AWS específicamente). Cada tema declara Entorno(s) objetivo (DOC-12 §1) explícitamente en su construcción real (Paso 2); aquí se fija el alcance y el principio de costo real.*

> **La gran pregunta de este módulo: ¿qué del diseño de M2 se sostiene cuando lo despliegas de verdad, con dinero real de por medio, y qué no?**

**N12.M3.T1 · Cómputo y redes en AWS para sistemas de IA**
- **Objetivo:** elige y configura, con criterio (no memorización de servicios), la combinación de cómputo (EC2 con GPU, ECS/Fargate, Lambda) y redes (VPC, subredes, security groups) que sostiene un componente real del sistema.
- **Prerrequisitos:** N2.M5 (Docker, AWS básico) y N9.M1 (Kubernetes) como base ya construida — este tema no reintroduce contenedores ni orquestación, decide cuándo usar el servicio administrado de AWS en vez de la infraestructura propia que N9 ya enseñó a construir.
- **Competencias:** sirve a C-N12-01 (práctica DOC-12).
- **Errores habituales:** elegir Lambda para una carga de inferencia con estado o de larga duración (límite real de tiempo de ejecución, no una limitación arbitraria); no declarar por qué EC2 con GPU y no un servicio administrado (o viceversa) para un caso concreto; configurar una VPC sin entender qué aísla y de qué.
- **Modelo mental:** cada servicio de cómputo de AWS como **una posición distinta en el espectro control-vs-conveniencia** — Lambda cede casi todo el control por conveniencia máxima, EC2 cede casi toda la conveniencia por control máximo, y la decisión correcta depende de qué necesita realmente el componente que se está desplegando, no de cuál es "más moderno".
- **Por qué:** existe porque M2 diseñó en abstracto qué necesita cada componente — este tema exige traducir esa necesidad a un servicio real de AWS con sus límites reales (D1.5, práctica local ya construida en N10 elevada ahora a nube real) / ahora porque el design doc de M2.T5 ya declaró qué se necesita / habilita T2-T5.
- **Evidencia de dominio:** dado un componente del sistema (ej. el endpoint de inferencia, el worker de ingesta de RAG), elige el servicio de cómputo correcto y justifica por qué los otros dos no sirven igual de bien.
- **Práctica principal:** laboratorio DOC-12 real — desplegar un componente pequeño y real en AWS (con las 13 secciones de DOC-12, advertencia de costo desde el diseño); alternativa gratuita explorada primero cuando exista equivalente razonable (mismo principio que N9 ya aplicó con minikube/kind).
- **Evaluación:** RM-03 (práctico).
- **Pregunta ingenieril:** —

**N12.M3.T2 · Datos y almacenamiento en AWS para sistemas de IA**
- **Objetivo:** elige entre las opciones de almacenamiento de AWS (S3, RDS/Aurora, opciones administradas de base vectorial) para las distintas necesidades de datos de un sistema de IA, con el trade-off de costo/latencia/consistencia de cada una.
- **Prerrequisitos:** T1; N2.M3 (PostgreSQL) y N7.M2 (vector DBs) como base técnica ya construida.
- **Competencias:** sirve a C-N12-01.
- **Errores habituales:** usar una base de datos relacional administrada para lo que en realidad es almacenamiento de objetos simple (S3), pagando por funcionalidad que no se usa; no considerar el costo de egress al mover datos entre servicios de almacenamiento y cómputo; elegir una base vectorial administrada sin comparar su costo real contra la self-hosted que N7 ya construyó.
- **Modelo mental:** el almacenamiento correcto como **la forma que más se parece a cómo se accede al dato, no a cómo se generó** — datos que se leen secuencialmente completos van a S3, datos que se consultan por relación van a una base relacional, datos que se consultan por similitud van a una base vectorial, sin importar de dónde vinieron.
- **Por qué:** existe porque el costo dominante de M2.T3 (frecuentemente almacenamiento, no cómputo) se vuelve una decisión concreta y medible aquí, con precios reales / ahora porque T1 ya dio el criterio de control-vs-conveniencia aplicado a cómputo / habilita T3-T5.
- **Evidencia de dominio:** dado el design doc propio de M2.T5, mapea cada necesidad de datos declarada a un servicio de almacenamiento de AWS específico, con su costo estimado.
- **Práctica principal:** laboratorio DOC-12 real — desplegar y medir (no estimar) el costo real de almacenar y consultar un volumen representativo de datos del propio sistema.
- **Evaluación:** RM-03.
- **Pregunta ingenieril:** —

**N12.M3.T3 · Serving de modelos en AWS — administrado vs. autogestionado, con costos reales comparados**
- **Objetivo:** compara, con medición real (no estimación), el costo y la latencia de servir un modelo vía un servicio administrado (SageMaker) frente a EC2 con GPU autogestionado, y decide cuál sostiene las restricciones del propio sistema.
- **Prerrequisitos:** T1-T2; N9.M2 (vLLM/Ray, latencia y throughput medidos) y N10 (inferencia local) como referencia de comparación directa — este tema es, explícitamente, la tercera pata de la comparación que N10 ya empezó (local vs. nube autogestionada vs. nube administrada).
- **Competencias:** sirve a C-N12-01.
- **Errores habituales:** comparar el precio por hora de cómputo sin incluir el costo de ingeniería/operación que un servicio autogestionado exige y uno administrado absorbe; asumir que "administrado" siempre significa "más caro" sin medirlo; no considerar el costo de arranque en frío (cold start) como parte real de la latencia.
- **Modelo mental:** la comparación administrado-vs-autogestionado como **pagar por transferir riesgo operativo, no solo por cómputo** — un servicio administrado cuesta más por hora de GPU casi siempre, pero ese sobreprecio compra menos superficie de fallo que el estudiante tiene que operar él mismo; la decisión correcta depende de si esa transferencia vale su costo bajo las restricciones dadas.
- **Por qué:** existe porque "qué tan rápido y barato sirves inferencia" es, con frecuencia, la restricción más dura de un sistema de IA real en producción, y la Academia ya construyó los tres extremos de esta comparación por separado (N9 nube autogestionada, N10 local) sin haberlos comparado nunca contra el tercero real (nube administrada) / ahora porque T1-T2 ya dieron cómputo y datos / habilita T4-T5 y directamente h3 del capstone.
- **Evidencia de dominio:** produce una tabla comparativa real (no estimada) de costo/latencia/throughput para servir el mismo modelo en al menos 2 de las 3 modalidades (local, autogestionado, administrado), con al menos una medición propia.
- **Práctica principal:** laboratorio DOC-12 real — medir latencia/throughput real de un endpoint desplegado, con advertencia de costo explícita (DOC-12 §2.5/§3) antes de cualquier acción facturable.
- **Evaluación:** RM-03.
- **Pregunta ingenieril:** —

**N12.M3.T4 · Seguridad e IAM aplicados al sistema real**
- **Objetivo:** aplica el principio de mínimo privilegio con IAM real de AWS (roles, políticas, gestión de secretos) al propio sistema desplegado, conectando la seguridad arquitectónica de M2.T4 con su implementación concreta.
- **Prerrequisitos:** T1-T3; M2.T4; N2.M2 (auth, gestión de secretos) como base técnica ya construida.
- **Competencias:** sirve a C-N12-01; cubre el dominio "Seguridad" de AWS SAA-C03 (30% del examen, el dominio de mayor peso — verificado por WebSearch, §6).
- **Errores habituales:** usar credenciales de administrador para todo por conveniencia durante el desarrollo, sin nunca reducir el alcance antes de producción; almacenar secretos en variables de entorno planas en vez de un gestor de secretos real; no auditar qué política de IAM concede realmente (vs. qué el nombre de la política sugiere que concede).
- **Modelo mental:** IAM como **la lista exhaustiva y auditable de "quién puede hacer qué"** — cada permiso concedido de más no es una conveniencia gratis, es superficie de ataque real que alguien, algún día, puede explotar.
- **Por qué:** existe porque M2.T4 identificó los riesgos en abstracto — este tema exige implementarlos con el mecanismo real que una cuenta de AWS de producción exige, cerrando el ciclo diseño→implementación de seguridad de todo el nivel / ahora porque T1-T3 ya dieron el sistema real donde aplicar IAM / habilita T5.
- **Evidencia de dominio:** dado un componente desplegado, produce la política IAM de mínimo privilegio real que necesita (ni más ni menos permisos que los que usa), verificada probando que el componente falla si se le quita un permiso necesario y funciona con exactamente los declarados.
- **Práctica principal:** laboratorio DOC-12 real — configurar IAM real para el propio sistema desplegado en T1-T3, con verificación empírica (no solo lectura de la política) de que el mínimo privilegio realmente se sostiene.
- **Evaluación:** RM-03.
- **Pregunta ingenieril:** —

**N12.M3.T5 · Laboratorio integrador — despliegue real bajo advertencia de costo — cierra M3**
- **Objetivo:** despliega en AWS real el componente crítico del design doc de M2.T5 (el que domina costo o riesgo), con medición real de costo y rendimiento, cerrando el ciclo diseño→despliegue de M2-M3.
- **Prerrequisitos:** T1-T4.
- **Competencias:** sirve a C-N12-01; primer material real para h3 del capstone.
- **Errores habituales:** los de T1-T4, ahora bajo el riesgo real de que el componente elegido en el design doc resulte, al desplegarse de verdad, más caro o más lento de lo que el modelo de costos de M2.T3 predijo — el mismo tipo de divergencia entre modelo y realidad que DOC-12 exige medir, nunca asumir.
- **Modelo mental:** el despliegue real como **la verificación empírica del design doc completo** — mismo principio de disciplina numérica de la guía §9 (nunca fiarse de un cálculo sin ejecutarlo) aplicado ahora a arquitectura de sistemas completos, no a un `check()` de ejercicio.
- **Por qué:** existe porque ningún tema de M2/M3 por separado prueba que el diseño completo sobrevive al contacto con AWS real, con dinero real de por medio / ahora porque T1-T4 dieron cada pieza de despliegue real por separado / habilita M4 (el sistema real como material del simulacro) y h3 del capstone directamente.
- **Evidencia de dominio:** despliega el componente elegido, mide su costo y rendimiento reales durante un periodo representativo, y compara esa medición contra la estimación de M2.T3, documentando la divergencia si existe.
- **Práctica principal:** laboratorio DOC-12 real, con advertencia de costo obligatoria desde el diseño (⚠️, DOC-12 §2.5/§3) y con al menos un error inducido en vivo (DOC-12 §2.5bis) propio de despliegue AWS (ej. un límite de servicio no anticipado, un permiso IAM insuficiente descubierto en producción, no en teoría).
- **Evaluación:** RM-03 + RM-05.
- **Pregunta ingenieril:** —

### M4 · Preparación profesional — proceso completo de entrevista internacional en inglés

*Modalidad: simulacro (RM-08/TS-01), decisión de representación documentada en §3bis. Idioma de trabajo: inglés en las 4 fichas, declarado explícitamente por instrucción de C-N12-03/D6.4.*

> **The big question of this module: can you perform — not just know — under the exact format, language, and pressure of a real international technical interview process?**

**N12.M4.T1 · Coding interview en inglés — método y práctica bajo formato real**
- **Objetivo:** aplica el método estándar de entrevista de código (clarify → approach → code → test → complexity) en inglés, verbalizando el razonamiento en voz alta durante todo el proceso, no solo al final.
- **Prerrequisitos:** N1.M3/N2.M3.T4 (DSA, pista ⚔️ sostenida por toda la carrera); N1.M6/N2.M6 (inglés profesional, progresión de la pista 🇬🇧 hasta su culminación en C-N12-03).
- **Competencias:** C-N12-03.
- **Errores habituales (English, as they occur in the simulated interview):** jumping to code before clarifying constraints or edge cases; going silent while thinking instead of verbalizing the reasoning (the single most common reason a technically correct solution still fails a real interview); translating literally from Spanish mid-sentence and losing the thread of the explanation instead of restarting the sentence in English.
- **Modelo mental:** the interview as **a recorded reasoning process, not a final answer** — the interviewer already knows whether the code works; what they are actually evaluating is whether they would trust this person's thinking on a team, which only the verbalized process can show.
- **Por qué:** existe porque C-N12-03 exige explícitamente el proceso completo de entrevista en inglés, y la habilidad de resolver un problema de código ya está construida (⚔️ desde N1) — lo que falta y este tema instala es sostenerla en el segundo idioma y en el formato exacto de la industria / ahora porque el estudiante ya domina DSA de nivel intermedio-avanzado (N4.M6, ⚔️) / habilita T4 (el simulacro completo).
- **Evidencia de dominio:** resuelve un problema de dificultad media verbalizando cada paso del método en inglés, sin quedarse en silencio más de unos segundos en ningún punto.
- **Práctica principal:** simulacro real bajo TS-01, Tutor en rol Entrevistador (DOC-03 §3.D), 3-4 problemas de dificultad creciente extraídos del mismo espíritu de *Cracking the Coding Interview* (§6) — nunca copiados literalmente (mismo límite explícito que DOC-12 §3 ya fija para todas las fuentes de referencia de la Academia).
- **Evaluación:** RM-08.
- **Pregunta ingenieril:** —

**N12.M4.T2 · System design interview en inglés — el mismo framework de M1, ahora en el idioma y la presión reales**
- **Objetivo:** aplica el framework completo de M1 en inglés, usando el propio sistema del estudiante (arquitecturado en M2, desplegado en M3) como material de práctica cuando el escenario lo permite.
- **Prerrequisitos:** M1 completo; M2-M3 (el sistema propio como material real); T1.
- **Competencias:** C-N12-02, C-N12-03.
- **Errores habituales:** reexplicar en inglés literalmente lo mismo que ya se practicó en español en M1 sin adaptarse al vocabulario técnico real que la industria usa en inglés (que a veces no es la traducción directa del término en español); perder la estructura del framework por el esfuerzo cognitivo adicional del idioma; no saber nombrar en inglés decisiones que sí sabe justificar en español.
- **Modelo mental:** el vocabulario técnico en inglés como **un segundo sistema de nombres para las mismas ideas ya dominadas** — el conocimiento no es nuevo, la fluidez para expresarlo bajo presión sí lo es, y ambas cosas se entrenan por separado.
- **Por qué:** existe porque una entrevista real de system design internacional no da la opción de pensar en español y traducir — exige la fluidez completa en inglés desde la primera pregunta de aclaración / ahora porque M1 ya dio el método y T1 ya dio la práctica de verbalizar razonamiento técnico en inglés / habilita T4.
- **Evidencia de dominio:** sostiene un simulacro de 30-45 min en inglés sobre su propio sistema (o uno asignado), aplicando el framework completo sin cambiar a español.
- **Práctica principal:** simulacro real TS-01, con vocabulario técnico en inglés verificado contra fuentes reales (documentación oficial de AWS en inglés, los propios libros de Xu/Aminian) antes de fijarse como "correcto" en cualquier checklist.
- **Evaluación:** RM-08.
- **Pregunta ingenieril:** —

**N12.M4.T3 · Behavioral interview en inglés — STAR con evidencia verificable, no anécdota**
- **Objetivo:** estructura respuestas a preguntas conductuales reales de la industria usando el método STAR (Situation, Task, Action, Result) con resultados verificables y específicos (números, decisiones documentadas, consecuencias reales de la propia carrera dentro de la Academia), no anécdotas vagas.
- **Prerrequisitos:** T1; el propio historial de decisiones documentadas desde N2.A2 (trade-offs) y los registros de proyectos de N4-N11 como material real de respuesta.
- **Competencias:** C-N12-03.
- **Errores habituales:** dar una "R" (Result) sin ningún número o evidencia verificable, convirtiendo la respuesta en una afirmación no comprobable; elegir una situación donde el propio candidato no tomó ninguna decisión real (todo lo hizo el equipo, sin su aporte diferenciado); preparar respuestas memorizadas palabra por palabra que se desmoronan ante la primera repregunta de seguimiento.
- **Modelo mental:** STAR sin "R" medible como **una anécdota, no una prueba** — una respuesta conductual real debe poder responder a la repregunta "¿cómo lo sabes?" con un número, una decisión documentada o una consecuencia verificable, exactamente el mismo estándar de evidencia que el argumento de corrección (A5, DOC-03) exige para código, ahora aplicado a una narrativa profesional.
- **Por qué:** existe porque el proceso de entrevista internacional real incluye, sin excepción, una ronda conductual, y ningún tema anterior de la Academia entrenó explícitamente estructurar la propia experiencia real como evidencia verbal verificable / ahora porque el estudiante ya tiene un historial real de decisiones documentadas (trade-offs desde N2, informes de proyecto desde N4) que sirve de material de primera mano, no inventado / habilita T4.
- **Evidencia de dominio:** produce y sostiene, ante repregunta de seguimiento, al menos 3 respuestas STAR construidas sobre decisiones reales y verificables de su propio recorrido en la Academia.
- **Práctica principal:** simulacro real TS-01 con preguntas conductuales reales de la industria (verificadas contra fuentes reales, §6), en inglés, con repregunta de seguimiento obligatoria sobre cada "Result".
- **Evaluación:** RM-08.
- **Pregunta ingenieril:** —

**N12.M4.T4 · Simulacro completo de proceso de entrevista internacional — cierra M4**
- **Objetivo:** sostiene, en una sola sesión extendida, el proceso completo de entrevista (coding + system design + behavioral) en inglés, tal como ocurre en un proceso de selección real de varias rondas.
- **Prerrequisitos:** T1-T3.
- **Competencias:** C-N12-03.
- **Errores habituales:** los de T1-T3, ahora bajo el riesgo real de fatiga acumulada entre rondas (el mismo fenómeno de un proceso de entrevista real de un día completo) — la práctica muestra que la ronda conductual, al final, es donde más se degrada la verbalización en inglés si las dos anteriores no se dosificaron bien.
- **Modelo mental:** el simulacro completo como **la única forma real de verificar que las tres piezas sobreviven juntas, en el mismo día, en el mismo idioma, con la misma persona sosteniéndolas** — ninguna ronda aislada, por bien resuelta que esté, prueba esto.
- **Por qué:** existe porque C-N12-03 exige explícitamente "el proceso completo", no sus partes por separado / ahora porque T1-T3 dieron cada ronda dominada de forma aislada / habilita M5 y h4 del capstone directamente.
- **Evidencia de dominio:** completa el proceso de 3 rondas en una sesión, con desempeño sostenido (no solo en la primera ronda) evaluado contra las anclas completas de RM-08.
- **Práctica principal:** simulacro TS-01 completo, con el propio proyecto de capstone (en construcción) como material de la ronda de system design — primer uso real del capstone como material de entrevista, anticipando h4.
- **Evaluación:** RM-08, ancla completa.
- **Pregunta ingenieril:** —
- **El quiebre de intuición de M4:** el instante donde el estudiante nota que su inglés técnico, ya sólido para leer documentación (progresión 🇬🇧 desde N0), no alcanza automáticamente para producirlo en tiempo real bajo presión — comprender y producir bajo presión son habilidades relacionadas pero distintas, y la Academia nunca antes exigió la segunda de forma sostenida.
- **El supuesto que destruye:** "si domino el contenido técnico, el idioma es solo un detalle de traducción" — se destruye al ver que sostener razonamiento técnico complejo en un segundo idioma, bajo presión de tiempo y repregunta, es una habilidad propia que no se deriva automáticamente del dominio técnico ni del inglés de lectura.
- **Idea universal (cierre de M4):** un proceso de entrevista internacional evalúa la misma competencia técnica que el resto de la carrera ya construyó, pero exige demostrarla en un formato, un idioma y una presión específicos que nunca se entrenaron hasta ahora — el contenido no es nuevo, la performance bajo esas condiciones sí lo es.

### M5 · Culminación

> **La gran pregunta de este módulo: ¿puedes demostrar que tu formación no terminó el día en que la Academia dejó de enseñarte algo nuevo?**

**N12.M5.T1 · Vigencia autónoma — criterio para elegir un avance genuinamente reciente y relevante**
- **Objetivo:** evalúa candidatos a "avance reciente del ecosistema" contra un criterio explícito (¿es genuinamente reciente? ¿es relevante al propio sistema, no una curiosidad aislada? ¿su adopción está justificada con evidencia, no solo con novedad?), sin necesitar que exista una respuesta única correcta.
- **Prerrequisitos:** N10.M4 (juicio de ecosistema — evaluar herramientas con prototipo y decisión fundamentada) como precedente directo, ahora sin un profesor que preseleccione las opciones a comparar.
- **Competencias:** C-N12-05.
- **Errores habituales:** elegir el avance más publicitado en vez del más relevante al propio sistema; confundir "reciente" con "no probado" (un avance genuinamente reciente puede carecer de evidencia suficiente para justificar su adopción — reconocer esa tensión es parte del criterio, no un obstáculo a ignorar); presentar la elección sin alternativas consideradas (mismo estándar de A2, DOC-03: opciones consideradas → criterio → decisión → costo aceptado).
- **Modelo mental:** la vigencia autónoma como **la prueba de que el estudiante puede seguir aprendiendo sin que nadie le diga qué aprender** — el criterio de selección, no el avance elegido en sí, es lo que realmente se evalúa; dos estudiantes pueden elegir avances distintos y ambos demostrar la misma competencia si el razonamiento de cada uno es sólido.
- **Por qué:** existe porque D7.6 (la dimensión que C-N12-05 sirve) exige explícitamente que el egresado pueda mantenerse vigente sin curación externa — y ningún tema anterior de la Academia entrenó elegir, sin que el temario ya lo hubiera preseleccionado / ahora porque N10.M4 ya dio el método de evaluar herramientas con prototipo, aplicado aquí a decidir primero qué evaluar / habilita T2 y h5 del capstone directamente.
- **Evidencia de dominio:** dados 3 candidatos a "avance reciente" (uno genuinamente relevante al sistema propio, uno publicitado pero irrelevante, uno relevante pero sin evidencia suficiente todavía), argumenta cuál elegiría y por qué, aplicando el criterio explícito.
- **Práctica principal:** ejercicio de juicio aplicado (no `check()`) — el estudiante evalúa 3-4 casos reales y verificados (nunca inventados) contra la rúbrica de criterio, con retroalimentación sobre la calidad del razonamiento, no sobre si "acertó" la elección.
- **Evaluación:** RM-06 (anclas de criterio, no de comparación exacta).
- **Pregunta ingenieril:** si el avance que elegiste hace 3 meses ya fue superado por uno más nuevo, ¿tu elección original fue un error, o es exactamente lo que "vigencia autónoma" debe esperar que ocurra?

**N12.M5.T2 · Integración real vs. cosmética — cierra M5 y prepara la defensa final**
- **Objetivo:** distingue, con criterio verificable, una integración real de un avance elegido (T1) de una integración cosmética (mencionarlo, envolver una llamada a una API nueva sin cambiar ningún comportamiento real del sistema), y prepara la evidencia que la defensa final (C-N12-06) exigirá.
- **Prerrequisitos:** T1; el capstone en construcción (§7) como material real, no hipotético.
- **Competencias:** C-N12-05, sienta las bases de C-N12-06.
- **Errores habituales:** medir la integración por la cantidad de código añadido en vez de por el cambio de comportamiento real del sistema; no poder responder "¿qué hacía el sistema antes de esto que no podía hacer, o hacía peor, sin ello?"; preparar la justificación de la elección (T1) pero no la evidencia de que efectivamente se integró (un salto real, no solo argumentado).
- **Modelo mental:** la integración cosmética como **una API nueva llamada desde un sistema que, en el fondo, se comporta exactamente igual que antes** — la prueba de integración real es siempre un antes/después medible o demostrable del propio sistema, nunca la sola presencia del avance en el código.
- **Por qué:** existe porque C-N12-05 exige "integración real, no cosmética" explícitamente (ficha de misión) — este tema es donde esa exigencia se convierte en criterio operativo antes de que el capstone la exija como evidencia final / ahora porque T1 ya dio el criterio de elección / habilita h5 del capstone y la defensa final integradora (C-N12-06, TD-03) directamente.
- **Evidencia de dominio:** dado el propio avance elegido en T1 ya integrado (o en integración), documenta el antes/después real y verificable del comportamiento del sistema.
- **Práctica principal:** preparación directa de la evidencia de h5 — no es un ejercicio separado del capstone, es su antesala explícita.
- **Evaluación:** RM-06.
- **Pregunta ingenieril:** —
- **Idea universal (cierre de M5 y de todo N12 anterior al capstone):** la Academia entera enseñó a construir, decidir y defender dentro de un temario dado — M5 es el único punto de todo el recorrido donde el temario deja de decir qué aprender, y la competencia que realmente se evalúa es si el estudiante sigue haciéndolo de todos modos.
- **Lo que deja de sorprender (cierre de N12 completo):** que un ingeniero senior real siga aprendiendo sin que nadie se lo asigne deja de sentirse como una virtud excepcional y pasa a sentirse como la continuación obvia de una disciplina que el estudiante ya practicó, con distintos nombres, en cada uno de los 12 niveles anteriores.

## 6. Bibliografía oficial e investigación real — fuentes verificadas por WebSearch

*Instancia DOC-10 §9 ("Bibliografía oficial: *System Design Interview* (Xu) · casos de arquitectura de los mejores equipos · AWS SAA si aporta") con investigación real, no de memoria — mismo principio de la guía §13 Paso 1 y de DOC-11/DOC-12 §0bis. Formato adaptado de DOC-11 §4bis (título · autor · idioma · nivel · motivo · fuente de verificación) — la Investigación Pedagógica formal completa (documento independiente, DOC-11/DOC-12 §0bis) se produce antes de M1, esta tabla es su anticipo verificado.*

| Fuente | Autor/canal | Verificado | Módulo | Motivo específico |
|---|---|---|---|---|
| *System Design Interview: An Insider's Guide, Vol. 1* | Alex Xu (ByteByteGo) | WebSearch: tabla de contenidos real confirmada — 16 capítulos, marco de framework (Cap. 3), estimación (Cap. 2), casos clásicos (Cap. 4-12) | M1 completo | Es la fuente oficial ya citada por DOC-10; el framework de 4 pasos que M1.T1 enseña es, literalmente, el Cap. 3 del libro — se cita como fuente del método, no se copia su estructura de capítulos (mismo límite explícito de DOC-12 §3) |
| *Machine Learning System Design Interview* | Ali Aminian & Alex Xu (ByteByteGo) | WebSearch: título y tabla de contenidos reales confirmados (7 pasos, 10 casos: búsqueda visual, recomendación de video, detección de contenido dañino, etc.) | M2.T1 | Extiende el framework de Xu Vol. 1 específicamente a sistemas de ML/IA — el puente exacto entre M1 (método genérico) y M2 (aplicado a IA) |
| *Generative AI System Design Interview* | Ali Aminian & Hao Sheng (ByteByteGo) | WebSearch: título y tabla de contenidos reales confirmados (RAG, generación de texto/imagen/video, chatbots — Cap. 4 y 6 en particular) | M2.T1, M2.T5 | La fuente más directamente aplicable a la columna vertebral del estudiante (RAG, chatbots) — publicada específicamente para el vacío que N7-N9 dejan y N12 sintetiza |
| *The Ultra-Scale Playbook: Training LLMs on GPU Clusters* | Hugging Face (equipo Nanotron) | WebSearch: contenido real confirmado — ~4000 experimentos, hasta 512 GPUs, paralelismo de datos/tensor/pipeline/contexto, ZeRO, fusión de kernels; recurso abierto y gratuito | M2.T2 | Única fuente real, verificada y gratuita con evidencia empírica a gran escala sobre paralelismo — evita que M2.T2 enseñe la decisión de paralelismo sin respaldo de datos reales de producción |
| AWS Certified Solutions Architect – Associate (SAA-C03) — guía de examen oficial + AWS Skill Builder | Amazon Web Services | WebSearch: 4 dominios confirmados con sus pesos reales (Seguridad 30% · Resiliencia 26% · Rendimiento 24% · Costos 20%); AWS Skill Builder confirmado como ruta de entrenamiento gratuita oficial con labs incluidos | M3 completo | DOC-10 la cita condicionalmente ("si aporta") — aporta: los 4 dominios del examen mapean casi 1:1 contra los 4 temas técnicos de M3 (T1-T2 rendimiento/resiliencia, T3 rendimiento/costos, T4 seguridad), confirmando que el alcance de M3 no es arbitrario sino que coincide con el estándar de industria ya certificado |
| *Cracking the Coding Interview*, 6ª ed. | Gayle Laakmann McDowell | WebSearch: contenido real confirmado — sección conductual con método STAR explícito, categorías de problemas de código estandarizadas en la industria desde 2015 | M4.T1, M4.T3 | El libro que, según la propia investigación, estandarizó el formato de entrevista técnica de toda la industria — fuente primaria del formato que M4 entrena, no una interpretación de segunda mano |
| Blog de ingeniería de OpenAI (`openai.com/news/engineering`) | OpenAI | WebSearch: blog activo confirmado, publicaciones reales verificadas (ej. "How OpenAI delivers low-latency voice AI at scale", "Supercomputer networking to accelerate large scale AI training") | M2.T1, M2.T2 | "Casos de arquitectura de los mejores equipos" (DOC-10) instanciado con una fuente primaria real y activa, no un caso de estudio de segunda mano — el estudiante lee decisiones de arquitectura reales de un equipo real, no un resumen |
| Blog de ingeniería de Anthropic (`anthropic.com/engineering`) | Anthropic | WebSearch: blog activo confirmado, publicaciones reales verificadas (ej. "How we contain Claude") | M2.T4 | Fuente primaria real y verificable para seguridad arquitectónica de sistemas de IA a escala — mismo motivo que la fuente anterior, ahora para el tema de seguridad de M2 |

**Honestidad metodológica** (DOC-11 §0bis, principio heredado sin modificación): no se encontró, en esta ronda de investigación, una fuente académica equivalente a MIT/CMU/Stanford para el contenido específico de M1-M4 — a diferencia de N0-N11, el contenido de N12 vive predominantemente en la práctica de industria (libros de formato de entrevista, blogs de ingeniería reales, documentación oficial de certificación), no en cursos universitarios. Se declara esto explícitamente en vez de forzar una cita universitaria que no aportaría nada real — mismo principio que ya aplicó DOC-12 §0.1 para Git/terminal. La investigación pedagógica formal completa (documento independiente antes de M1) profundizará esta tabla con los 4 puntos exigidos por DOC-11/DOC-12 §0bis (cómo enseña cada fuente el concepto exacto, qué errores de novato documenta, síntesis crítica, estrategia propuesta) — esta tabla es su verificación previa de que las fuentes son reales y aplicables, no su versión final.

## 7. Proyecto de nivel — capstone de ET5 y de la carrera completa

**Nombre de trabajo:** *"La arquitectura que puedes defender bajo restricciones que nunca viste"* — el capstone no reutiliza el sistema tal como quedó al final de N10: lo **rediseña bajo un conjunto de restricciones nuevas y concretas**, exactamente como exige DOC-10 §9 ("arquitectura completa de un sistema de IA bajo restricciones dadas").

### Qué significa "bajo restricciones" — definición concreta, no delegada al estudiante en blanco

El estudiante recibe (o elige, con justificación, de un menú de escenarios verificados) un conjunto de restricciones nuevas para su propia columna vertebral (RAG+agente+infraestructura+local, N7-N10), que **no puede resolverse reutilizando la arquitectura de N10 sin cambios reales** — cada escenario fuerza al menos una decisión de M1-M3 que N10 no tuvo que tomar:

- **Restricción de escala:** el sistema debe ahora sostener un orden de magnitud más de usuarios concurrentes que el diseño original, dentro de un presupuesto de latencia declarado (obliga a M1.T2 + M2.T2/T3).
- **Restricción de costo:** un techo de gasto mensual fijo y realista, que obliga a decisiones de compromiso explícitas entre calidad de modelo, caching y arquitectura de serving (obliga a M2.T3 + M3.T3).
- **Restricción de aislamiento/cumplimiento:** el sistema debe sostener múltiples tenants con aislamiento verificable, o parte de él debe operar con residencia de datos restringida (conexión directa con N10, "trade-offs frente a la nube documentados") — obliga a M2.T4 + M3.T4.
- **Restricción de vigencia (siempre presente, no opcional):** el sistema debe incorporar el avance reciente elegido en M5.T1, integrado de forma real (M5.T2) — nunca ausente del capstone, sin importar qué otras restricciones se elijan.

El menú concreto de escenarios (valores numéricos exactos de escala/presupuesto/latencia, verificados contra precios y límites reales de AWS antes de fijarse — mismo principio de la guía §9) se construye en el Paso 2/4 real (cuando el capstone se redacta con su ficha completa), no en este borrador — lo que se fija aquí es que **la restricción es siempre real, siempre obliga una decisión que N10 no exigió, y nunca es "diseña lo que ya tienes otra vez"**.

### Los 5 hitos — integración explícita, no 5 entregas aisladas

*(Mismo criterio adversarial que ya aplicaron N1/N2/N3 a sus propios capstones — verificado explícitamente: ¿podría un estudiante entregar las 5 piezas por separado sin integrarlas? No: h2 exige reutilizar literalmente el framework de h1; h3 exige desplegar exactamente lo que h2 diseñó, no una versión nueva; h4 exige usar el propio sistema de h2-h3 como material de entrevista; h5 exige que la defensa final cubra el recorrido completo, no solo el capstone.)*

| # | Hito | Módulo que integra | Qué debe existir | Evidencia |
|---|---|---|---|---|
| h1 | Propuesta bajo restricciones | M1 | Framework aplicado (requisitos, estimación de capacidad real) a las restricciones asignadas/elegidas, con las preguntas de aclaración que un examinador real haría, ya respondidas | Documento de estimación + supuestos declarados |
| h2 | Design doc de arquitectura | M2 | El design doc completo (patrón + paralelismo/escala + costo modelado + seguridad arquitectónica), construido reutilizando literalmente el framework de h1, nunca reiniciado desde cero | Design doc (2-4 páginas) |
| h3 | Despliegue real medido | M3 | El componente crítico del design doc de h2 desplegado en AWS real, con costo y rendimiento medidos (no estimados) y comparados contra la predicción de h2 | Sistema desplegado + tabla de medición real vs. predicción |
| h4 | Defensa como entrevista real | M4 | Simulacro completo (coding + system design + behavioral) en inglés, usando el propio sistema de h2-h3 como material de la ronda de system design | Registro del simulacro TS-01 + autoevaluación contra RM-08 |
| h5 | Culminación y vigencia | M5 | El avance reciente elegido (M5.T1) integrado de forma real y verificable (M5.T2) en el sistema de h2-h3; documento de antes/después | Sistema culminado + evidencia de integración real |

### Defensa — la defensa final integradora del recorrido completo (C-N12-06, TD-03)

*(No es la defensa de un capstone más — DOC-10 6.6/C-N12-06 la define explícitamente como el cierre del umbral de graduación de los 13 niveles.)* Cubre: recorrido de decisiones de los 5 hitos → repreguntas de arquitectura sobre h2-h3 → repregunta libre sobre cualquier competencia de C-N0-01 a C-N12-05 (el examinador puede, legítimamente, preguntar sobre cualquier punto del recorrido completo, no solo N12) → calibración honesta final: qué sabe con certeza, qué infiere razonablemente, qué ignora — el mismo criterio D3.4/C-N12-06 que ninguna defensa anterior exigió a esta escala.

**Mecanismo de preparación del Tutor — hallazgo de la Auditoría Adversarial (Paso 9b, Ataque 6), resuelto aquí explícitamente:** AC-11/OBJ-17 del Blueprint (`docs/00-ACADEMY-BLUEPRINT.md`) ya exigen que "todo conocimiento del proyecto viva en documentos y registros persistentes" — el Tutor (una sesión de IA con ventana de contexto finita) no sostiene 13 niveles completos en memoria conversacional, y no debería. Pero ese principio arquitectónico no estaba instanciado operativamente para el caso más exigente de toda la carrera. Se declara aquí: **antes de la sesión de defensa**, el Tutor recibe (o genera a partir del registro real del estudiante, `S.ph`/bitácoras acumuladas desde N0) un **resumen curado de 5-8 decisiones reales y verificables** del historial completo del estudiante — no la totalidad de los 13 niveles, un subconjunto representativo con evidencia real citable — como material de repregunta cruzada. Esto es exactamente lo que el ítem de `evalu.defensa` de `n12et5` en `index.html` ya ejemplifica ("por qué elegiste SQL o NoSQL en tu capstone de N2") — un punto real y anclado al portafolio, nunca una pregunta abstracta sobre "todo N0-N11" que ningún examinador (humano o IA) podría sostener con sustancia real.

**Compuerta:** examen (banco NNR-02, a construir en Paso 8 real) + proyecto (los 5 hitos) + defensa final integradora (TD-03) + certificación institucional — el cierre de DOC-10 6.6.

## 8. Herencias entrantes (borrador — N7-N11 se construyen en paralelo, no congeladas)

*N12 es hoja terminal del grafo de DOC-10 §4 — no existe SYL-N13 que reciba Herencias Declaradas de este documento. Esta sección declara únicamente lo que N12 recibe, en borrador, de sus 5 predecesores directos — mismo tratamiento que la ficha de misión exige ("borrador basado en el alcance ya aprobado de DOC-10... pendiente de confirmación cuando el nivel predecesor congele").*

| # | N12 presupone (de DOC-10 §8-9, borrador) | Dónde se ejercita en este syllabus |
|---|---|---|
| H-N12-01 | De N7: sistema RAG operativo de extremo a extremo, con design doc propio (V1 de la columna vertebral) | M2.T1 (comparación de patrones), M2.T5/M3.T5 (el propio sistema como material de diseño y despliegue) |
| H-N12-02 | De N8: el mismo sistema extendido a agéntico (V2), con fiabilidad medida y arquitectura defendida | M2.T1 (decisión agente vs. RAG puro), M2.T4 (seguridad arquitectónica, elevación de N8.M5) |
| H-N12-03 | De N9: la infraestructura de la columna vertebral desplegada, observada y operada, con trade-offs de escalabilidad medidos | M2.T2-T3 (paralelismo, costo), M3.T1-T3 (cómputo/datos/serving en AWS, comparación directa con lo ya medido en N9) |
| H-N12-04 | De N10: la columna vertebral operando en local de extremo a extremo, con trade-offs frente a la nube ya documentados — la síntesis de N7+N8+N9+N10 | Todo M2-M3 (la comparación local-vs-nube de N10 es el precedente directo de la comparación administrado-vs-autogestionado de M3.T3); el capstone entero parte de este sistema como punto de partida real, no hipotético |
| H-N12-05 | De N11: capacidad de leer/reproducir/contribuir a investigación real, con reporte fiel y defensa oral crítica ya practicada | M5.T1 (criterio de evaluación de fuentes/avances, mismo rigor que N11 exigió para papers), M2.T2 (lectura crítica de *The Ultra-Scale Playbook* como fuente primaria real) |

**Prerrequisitos ocultos — verificación preliminar, a confirmar formalmente cuando N7-N11 congelen:** ningún tema de este syllabus introduce contenido técnico nuevo que no esté ya cubierto por N7-N11 según el alcance de DOC-10 §8-9 — consistente con el principio §3.1 de este documento (síntesis y decisión, no introducción). La única dependencia real no verificable todavía es el contenido *exacto* de la columna vertebral real que cada estudiante trae de N7-N10 (no su alcance de diseño, ya confirmado, sino su forma final construida) — se declara honestamente como nota abierta, no oculta, sin bloquear el inicio de la construcción real de N12.

---

## 9. Paso 8 · Revisión global del Capstone ET5 y las compuertas

### El capstone — verificación de síntesis (mismo criterio adversarial que N1/N2/N3 aplicaron a los suyos)

**¿Podría un estudiante entregar los 5 hitos por separado, sin integrarlos?** No, verificado explícitamente en la construcción real (`index.html`, `n12et5`): h2 exige reutilizar literalmente el framework y la estimación de h1 (no reiniciarlos); h3 despliega exactamente el componente que h2 identificó como crítico, no uno elegido libremente; h4 usa el sistema real de h2-h3 como material del simulacro, no un escenario genérico; h5 integra el avance de M5 sobre ese mismo sistema, cerrando con la defensa final. La integración está en el diseño de los hitos, no confiada a la buena fe del estudiante.

**Diferencia estructural real frente a N3 (100% Pyodide) y más cercana a N1/N2 (DOC-12/real):** N12 SÍ incluye `flujoDeGit` en su capstone (ramas + Pull Request desde el hito 2) — a diferencia de N3, que lo omitió por ser 100% Pyodide. N12 es DOC-12 dominante desde M3 en adelante, con despliegue real en AWS (h3) como evidencia [A], consistente con el perfil de nivel declarado en §3.

**El riesgo de alcance que la ficha de misión advertía (M2/M3 "síntesis técnica más amplia de la carrera") — verificado en la construcción real:** ningún ejercicio de M2/M3 reintroduce Kubernetes, vLLM, RAG o agentes desde cero — todos presuponen N7-N10 y practican la DECISIÓN (qué patrón, qué estrategia de paralelismo, administrado vs. autogestionado), consistente con el principio §3.1 de este documento.

### Compuertas — cobertura de competencias

| Instrumento | Qué verifica | Instrumento DOC-02 | Plantilla |
|---|---|---|---|
| Examen (banco rotable ≥3 variantes/ítem, NNR-02 — ver abajo) | Conocimiento operativo sobre las 6 competencias, en el formato real de cada una (escrito para C-N12-01, simulacro para C-N12-02/03) | RM-02, RM-08 | — |
| Capstone (n12et5, 5 hitos) | Síntesis real: M1-M5 integrados en un sistema rediseñado, desplegado y defendido | RM-06 | TP-01 |
| Simulacro de entrevista completo (M4.T4 + h4 del capstone) | Desempeño bajo formato y presión de industria, en inglés | RM-08 | TS-01 |
| Defensa final integradora | Calibración honesta de qué sabe/infiere/ignora, sobre el recorrido completo de 13 niveles | RM-05 | TD-03 |

**Cobertura de competencias — verificación explícita:**

| Competencia | Verificada por |
|---|---|
| C-N12-01 (design doc de arquitectura bajo restricciones) | M2 completo (5 temas) + ítem 2 del banco + Capstone h2 |
| C-N12-02 (system design en vivo, trade-offs y repregunta) | M1 completo (4 temas) + ítem 1 del banco + Capstone h1, h4 |
| C-N12-03 (proceso de entrevista internacional completo en inglés) | M4 completo (4 temas) + ítem 3 del banco + Capstone h4 |
| C-N12-04 (culmina la columna vertebral, desplegada y defendida) | M3 completo (5 labs) + Capstone h3, h5 + defensa final |
| C-N12-05 (vigencia autónoma, integración real de un avance) | M5 completo (2 temas) + Capstone h5 |
| C-N12-06 (defensa final integradora, calibración honesta) | Defensa final del Capstone (evalu.defensa, última pregunta) — única competencia de toda la carrera cuyo instrumento es exclusivamente la defensa de cierre, sin examen ni proyecto propio, consistente con DOC-10 §10 ("toda la carrera" como lugar donde se enseña) |

**Hallazgo de la revisión:** a diferencia de N3 (4 competencias, 1:1 con 4 módulos), N12 tiene 6 competencias para 5 módulos — C-N12-04 se sirve de M3+M5 combinados (el despliegue real y la culminación son, por diseño de DOC-01, la misma competencia vista en dos momentos), y C-N12-06 no tiene un módulo propio: se sirve de TODA la carrera, verificada únicamente en la defensa de cierre. Esto no es una omisión — es la naturaleza real de una competencia de cierre de carrera (mismo patrón que N11 ya advirtió para su propio nivel de apertura de ET5), y se declara aquí explícitamente en vez de forzar un módulo dedicado que no aportaría nada real.

### Banco de examen — ítems rotables (≥3 variantes por ítem, NNR-02)

*Formato mixto, según el instrumento real de cada competencia (a diferencia de N3, íntegramente oral/numérico): ítems 1-2 son escritos con respuesta numérica verificada por ejecución real de Python antes de fijarse aquí (mismo principio de la guía §9); ítems 3-4 son escenarios de simulacro rotables sin respuesta única, evaluados contra las anclas I/U/S de RM-08/RM-02 — consistente con que N12 no es un nivel de respuesta cerrada.*

**Ítem 1 (C-N12-02 · estimación bajo el framework).** "Aplica el Paso 2 del framework: calcula QPS promedio y QPS pico (factor 3×) para este escenario, declarando tus supuestos."
- Variante A: 5,000,000 usuarios diarios, 3 peticiones cada uno → QPS promedio=**174**, pico=**521**.
- Variante B: 20,000,000 usuarios diarios, 1 petición cada uno → QPS promedio=**231**, pico=**694**.
- Variante C: 1,000,000 usuarios diarios, 10 peticiones cada uno → QPS promedio=**116**, pico=**347**.

**Ítem 2 (C-N12-01 · componente de costo dominante).** "Dado este desglose de costos mensuales por componente, identifica el componente dominante y el costo total — y argumenta, sin calcularlo, qué decisión de arquitectura atacarías primero."
- Variante A: cómputo=1200, almacenamiento=400, egress=5200, reentrenamiento=300 → dominante=**egress**, total=**7100**.
- Variante B: cómputo=3000, almacenamiento=2800, egress=150, reentrenamiento=100 → dominante=**cómputo**, total=**6050**.
- Variante C: cómputo=500, almacenamiento=500, egress=500, reentrenamiento=6000 → dominante=**reentrenamiento**, total=**7500**.

**Ítem 3 (C-N12-02/C-N12-01 · system design en vivo — escenario rotable).** El examinador elige UNA variante al azar y aplica el simulacro TS-01 completo (framework + estimación + trade-offs + repregunta), nunca las tres a la vez.
- Variante A: "Diseña un sistema de reservas de asientos para eventos en vivo, con protección contra sobreventa."
- Variante B: "Diseña un sistema de notificaciones push para una app con 50M de usuarios, con entrega garantizada."
- Variante C: "Diseña un sistema de detección de fraude en transacciones, con latencia de decisión menor a 200ms."

**Ítem 4 (C-N12-03 · behavioral en inglés — pregunta rotable).** El examinador elige UNA variante al azar; el estudiante responde con STAR y sostiene la repregunta "how do you know?" sobre su propio Result.
- Variante A: "Tell me about a time you had to make a technical decision with incomplete information."
- Variante B: "Tell me about a real mistake you made and what you verifiably changed afterward."
- Variante C: "Tell me about a time you had to defend a technical decision to someone who disagreed with you."

**Nota de diseño:** los 4 ítems cubren 4 de las 6 competencias con instrumento propio en el banco; C-N12-04 y C-N12-06 se evalúan exclusivamente por proyecto/defensa (tabla de cobertura arriba), consistente con su naturaleza de cierre — no se fuerzan a un ítem de banco que no representaría fielmente cómo se demuestran en la realidad. Todos los valores numéricos de los ítems 1-2 fueron verificados por ejecución real de Python antes de fijarse aquí, siguiendo la misma disciplina que rigió cada ejercicio de M1-M5.

---

*Paso 8 — pendiente de aprobación por el Director.*

---

## 10. Paso 9a · Herencias entrantes finales (N12 es hoja terminal — sin Herencias salientes)

*A diferencia de SYL-N1…N11, este paso no tiene "auditoría de coherencia desde el nivel siguiente" — no existe SYL-N13 (DOC-10 §4: N12 es hoja terminal del grafo troncal). Lo que este paso SÍ hace: consolidar las Herencias entrantes de §8 contra el contenido REAL de M1-M5 y el Capstone ya construidos, no contra la intención inicial de diseño — mismo principio que rigió el Paso 9a de SYL-N3.*

| # | N12 presupuso (borrador, §8) | Verificado contra el contenido REAL construido |
|---|---|---|
| H-N12-01 | RAG operativo de N7, con design doc propio | M2.T1 (comparación de patrones) y M2.T5/Capstone h2 lo confirman: el patrón RAG se usa como opción de decisión, nunca re-explicado desde cero — consistente |
| H-N12-02 | Sistema agéntico de N8 (V2), con fiabilidad medida | M2.T1 (decisión agente vs. RAG puro) y M2.T4 (seguridad, elevación explícita de N8.M5 de "por agente" a "por sistema multi-tenant") lo confirman — consistente |
| H-N12-03 | Infraestructura de N9, con trade-offs de escalabilidad medidos | M2.T2-T3 y M3.T1-T3 lo confirman — M3.T3 en particular exige comparación DIRECTA contra lo ya medido en N9 (vLLM/Ray), no una repetición — consistente |
| H-N12-04 | Columna vertebral local de N10, con trade-offs frente a la nube documentados | M3.T3 confirma esto como la "tercera pata" explícita de una comparación que N10 ya empezó (local vs. nube autogestionada vs. nube administrada) — consistente, y el propio Capstone (h1) parte de este sistema como punto de partida real declarado |
| H-N12-05 | Capacidad de lectura/reproducción crítica de N11 | M5.T1 (criterio de evaluación de fuentes) y M2.T2 (lectura crítica de *The Ultra-Scale Playbook* como fuente primaria) lo confirman — consistente |

**Prerrequisitos ocultos verificados — ninguno encontrado.** Ningún tema de M1-M5 introduce contenido técnico nuevo no cubierto por el alcance de DOC-10 §8-9 para N7-N11 — consistente con el principio §3.1 (síntesis y decisión, no introducción), verificado ahora contra el contenido real, no solo la intención de diseño.

**Herencias salientes: no aplica.** N12 es el nodo terminal del grafo troncal (DOC-10 §4) — no existe un nivel siguiente que reciba un contrato de Herencias Declaradas. Lo que N12 "siembra" no es contenido para un nivel posterior: es la certificación institucional completa (DOC-10 6.6) al final del recorrido. Se declara esto explícitamente, en vez de dejarlo implícito, porque es una diferencia estructural real frente a los 11 niveles anteriores, no un olvido.

---

## 11. Paso 9b · Auditoría Adversarial Final de SYL-N12

*Mandato: demostrar que N12 no debería existir en su forma actual. Ejecutado con 2 comités independientes (sin coordinación entre sí), 3 ataques cada uno — 6 ataques totales, mismo patrón de N1/N2/N3 (4 auditores) adaptado a la escala de este paso.*

**Veredicto general: ningún ataque logra invalidar la premisa arquitectónica de N12.** Los 6 ataques examinaron: (1) fusión/división con N11, (2) AWS como proveedor único, (3) genericidad de M4/M5, (4) reutilización forzada del esquema DOC-12 en M4, (5) exposición a costo real en el capstone (h3) frente a AC-05, (6) verificabilidad de la defensa final integradora (TD-03) sobre 13 niveles. Ataques 1 y 3 **resisten** sin cambio necesario. Ataques 2, 5 y 6 tenían mérito real parcial y **ya fueron corregidos** en la construcción real (`index.html`): 2 → juicio de portabilidad/lock-in obligatorio añadido a M3.T5 + honestidad metodológica en M3.T1; 5 → alerta de AWS Budgets obligatoria (no solo recomendada) + ruta alternativa de capa gratuita para componentes GPU/SageMaker en el hito 3; 6 → mecanismo de preparación del Tutor declarado explícitamente arriba (§7bis de facto, integrado en la sección de Defensa).

**Ataque 4 — hallazgo real, NO corregido aquí por decisión explícita, elevado como recomendación al Director:** M4 reutiliza el esquema completo de `modalidad:"real"` (DOC-12, 13 secciones diseñadas para laboratorios de terminal) para simulacros de entrevista oral sin terminal ni comandos — el comité adversarial encontró fricción real y verificable (el campo `entorno` no encaja en ninguna categoría cerrada de DOC-12 §1; `cmd:null` en el 100% de los pasos de M4; DOC-12 §2.5bis exige literalmente que el error inducido ocurra "en su propia terminal", inexistente en un simulacro oral). La construcción real ya declara esta inaplicabilidad explícitamente en cada ficha de M4 (adaptación honesta, no oculta) — pero la fricción de fondo es real, no cosmética. **Esto no se corrige en esta rama**, conforme al límite de autoridad de la guía §12: es un hallazgo que solo se resuelve tocando DOC-12 (Tier T1 ya sellado) — ya sea añadiendo una categoría de "Entorno(s) objetivo: simulacro oral/conductual" a §1, o generalizando §2.5bis de "en su propia terminal" a "en su propio entorno de práctica" (mismo patrón de generalización que DOC-12 v1.0.0 ya aplicó a "SO contemplado"→"Entorno(s) objetivo"). Se documenta aquí y en el Informe Final de Nivel como recomendación explícita, no se edita DOC-12 desde esta rama.

## 12. Cierre

Con el Paso 8 (compuertas + banco de examen), el Paso 9a (herencias finales) y el Paso 9b (auditoría adversarial, 6 ataques, 5 de 6 hallazgos con mérito ya corregidos, 1 elevado como recomendación T1) completos, y con la Auditoría Integral previa (4 auditores) y sus correcciones ya aplicadas, SYL-N12 queda **candidato a v1.0.0** — pendiente del Informe Final de Nivel (`docs/informes/n12-informe-final-de-nivel.md`) y, como siempre, del veredicto definitivo del Director (guía §12, nunca autodeclarado).
