# SYL-N7 — Syllabus del Nivel 7 · LLM Engineering

## Control del documento (conforme a DOC-00 §15.4)

| Campo | Valor |
|---|---|
| **Document Key** | SYL-N7 · Tier T2 |
| **Versión / Estado** | **0.1.0-draft** · Paso 1 del flujo institucional de 9 pasos (`docs/guia-construccion-niveles.md` §13): investigación pedagógica real completada (4 documentos, `docs/investigacion/n7-m1…m4-*.md`) + decisión de diseño de credenciales fijada (`docs/investigacion/n7-m1-manejo-credenciales.md`) + este syllabus. **Entregado para checkpoint del Director antes de iniciar construcción de contenido real en `index.html`** (decisión explícita: avance "paso a paso con checkpoint", no autónomo hasta el capstone) |
| **Autoridad de origen** | DOC-10 §8 (interior de N7) · DOC-00 14.8.3 · DOC-01 (C-N7-01…05) |
| **Depende de** | DOC-10 §8 (mapa, alcance ya aprobado) · DOC-00 (§13, §14, §16, 17.6) · DOC-01 · DOC-02 (instrumentos) · DOC-03 (método) · **DOC-12 (documento gobernante principal de este nivel — DOC-12 dominante, no la excepción, ver `docs/mision-n7.md`)** · DOC-11 (para las porciones conceptuales Pyodide de M2/M3/M4) · SYL-N1 §M4/M5 (precedente más cercano de espíritu DOC-12 completo) · SYL-N3 (plantilla estructural de ficha pedagógica) · **Herencia entrante borrador de SYL-N6 (no existe todavía como documento — N4-N6 se construyen en paralelo, ver §7.1)** |
| **Produce / desarrolla** | La estructura docente completa de N7: fichas pedagógicas por tema (M1-M4), diseño de la Columna vertebral V1 (proyecto de nivel — RAG operativo de extremo a extremo), y el borrador de Herencias Declaradas hacia SYL-N8 |
| **Estándar de calidad** | El mismo de SYL-N1/N2/N3: *"Si otro profesor excepcional impartiera este nivel utilizando únicamente el syllabus, ¿obtendría prácticamente la misma calidad formativa?"* |
| **Historial** | **0.1.0-draft (2026-07-21): Documento de Diseño.** Decisión de credenciales fijada por el Director (key propia del estudiante desde el día 1 de M1, sin modo simulado — `docs/investigacion/n7-m1-manejo-credenciales.md`). Investigación pedagógica real de los 4 módulos completada en paralelo (WebFetch/WebSearch verificado, ~60 fuentes primarias distintas entre los 4 documentos): M1 corrigió el supuesto de que existiera un único curso DL.AI de streaming/costes (no existe, declarado honestamente) y verificó la asimetría real de roles OpenAI/Anthropic como conflicto cognitivo central; M2 corrigió el supuesto de "un curso DL.AI de RAG" a dos cursos reales con roles distintos, y seleccionó Qdrant sobre Chroma/Pinecone por comparación directa de documentación; M3 verificó con precisión de GB (tabla oficial del notebook TRL) qué modelos caben en una T4 gratuita de Colab, y corrigió dos hipótesis iniciales (la regla "alpha=2r" de LoRA no está respaldada por la fuente que se iba a citar; el ejercicio oficial de DPO de HF no corre en Colab gratuito); M4 corrigió "un curso DL.AI de Evals" a tres cursos reales, confirmó RAGAS y el OWASP LLM Top 10 2025 como fuentes citables, y encontró evidencia con cifra concreta (53.8-58.5% de precisión, casi azar) de que un juez LLM sin validar no es confiable. Este documento instancia esas cuatro investigaciones en fichas pedagógicas por tema, siguiendo la plantilla de SYL-N1/SYL-N3 con un campo nuevo (**Modalidad**, DOC-11/DOC-12 explícita por tema, exigida por la ficha de misión de N7). **Pendiente:** revisión y aprobación del Director; tras aprobación, Paso 2 (construcción módulo por módulo en `index.html`, empezando por M1); el capstone detallado, las compuertas y el banco de examen se diseñan en los Pasos 4-5, después de tener contenido real construido — mismo orden que siguieron SYL-N1/N3, nunca al revés. |

---

## 1. Tabla resumen

| Módulo | Temas | Días/tema (estimación orientativa)* | Modalidad dominante | Competencias |
|---|---|---|---|---|
| M1 · Inferencia y prompting | 4 | ~2 (≈8 días) | DOC-12 desde T1 (credenciales propias día 1) | C-N7-01, C-N7-03 |
| M2 · RAG completo | 7 | 1–2 (≈9 días) | Mixta: T1-T3 DOC-11 (conceptual) → T4-T7 DOC-12 (pipeline real) | C-N7-01, C-N7-04 |
| M3 · Fine-tuning y post-entrenamiento | 2 (T1 LoRA/QLoRA, T2 RLHF/DPO) | 4 + 3 = 7 días | DOC-12 (GPU real, Colab T4), con introducción matemática DOC-11 en T1.Día1 | C-N7-02 |
| M4 · Evals y seguridad | 6 | 1–2 (≈12 días) | Mixta: introducción conceptual DOC-11 puntual → DOC-12 dominante (evalúa el RAG real de M2) | C-N7-03, C-N7-04 |
| Proyecto de nivel (Columna vertebral V1) | — | ~3 semanas (heurística, no cifra fija) | DOC-12 | Todas + C-N7-05 (inglés, READMEs) |

*\*Heurística de partida (guía maestra §8: "nunca escribas una cifra de días antes de haber construido al menos un tema completo y confirmado que la cifra es real") — estas cifras son un punto de partida para la construcción del Paso 2, no una promesa. Se ajustarán tema por tema conforme a la densidad real del contenido, con prioridad explícita del Director en N4-N12 hacia más sustancia, nunca hacia una cifra inflada de antemano.*

## 2. Identidad del nivel

Por referencia a DOC-10 §8: **N7 · LLM Engineering** es el primer nivel de **ET4 — Sistemas de IA (N7-N10)**, el punto donde el estudiante deja de entrenar modelos (ET3, N4-N6) y empieza a **construir sistemas alrededor de ellos**: llamar APIs reales con sus costes y límites reales, recuperar información de forma confiable, ajustar modelos con recursos modestos, y — de forma tan central como el resto — **defender con evidencia propia que lo que construyó funciona y es razonablemente seguro**, no solo que "parece funcionar".

**Nota de posición, con peso arquitectónico real (citada de `docs/mision-n7.md`, no reformulada):** el proyecto de N7 no es un capstone aislado que se cierra y se olvida — es la **Columna vertebral V1**, la base literal que N8 (agentes, V2), N9 (infraestructura desplegada) y N10 (versión local) van a extender, hasta culminar en N12. Esta es la primera vez en el mapa completo (N0-N12) que un proyecto de nivel se diseña sabiendo, desde el primer día, que otro nivel construido **en paralelo** va a asumir su existencia y su arquitectura documentada — de ahí que el design doc defendible (C-N7-04) tenga aquí un peso que no tuvo en ningún nivel anterior: no es solo evidencia de aprendizaje, es el contrato de interfaz hacia N8-N10.

Entrada: N6 Superado (herencia entrante, borrador — ver §7.1). Salida: examen + proyecto (columna vertebral V1 operativa) + defensa del design doc → habilita el resto de ET4 (N8-N10).

## 3. Principios de ejecución

1. **DOC-12 dominante, no la excepción** *(mandato explícito de `docs/mision-n7.md`, verificado módulo por módulo en la investigación real — ver tabla §1 "Modalidad dominante")*: a diferencia de N4-N6 (mayormente Pyodide), la mayoría del contenido real de N7 ocurre fuera del navegador — llamadas API reales, una base de datos vectorial persistente, entrenamiento en GPU real. Cada tema declara su documento gobernante explícito en su propia ficha (§5), nunca se asume por el número de módulo.

2. **Manejo de credenciales — decisión fijada, no implícita** (`docs/investigacion/n7-m1-manejo-credenciales.md`, decisión del Director 2026-07-21): el estudiante usa su propia API key desde M1.T1, sin modo simulado previo. M1.T1 es, en sí misma, un laboratorio de onboarding de credenciales (cuenta, key, variable de entorno, **límite de gasto configurado antes de la primera llamada real** — marcador ⚠️ obligatorio de DOC-12 §2.5/§3) antes de cualquier contenido de prompting. Este patrón de advertencia de costo real se hereda sin relajación en M2 (embeddings/generación), M3 (cómputo de GPU, si aplica algún proveedor de pago como alternativa a Colab gratuito) y M4 (llamadas reales de evaluación).

3. **Ninguna cifra de precio, versión de API, o límite de proveedor se hardcodea como verdad permanente** *(hallazgo directo de la investigación de M1, con evidencia concreta: el precio introductorio de Claude Sonnet 5 vence el 31 de agosto de 2026)*: todo laboratorio que dependa de un precio, un límite de rate, o una versión de API vigente declara la fecha de verificación explícita y remite al estudiante a comprobar la tarifa/versión vigente en el momento de ejecutar el laboratorio — se enseña el método de cálculo (tokens × tarifa vigente), nunca una cifra fija que DOC-12 §6 tendría que corregir cada pocos meses.

4. **Encuadre defensivo obligatorio en M4, sin excepción** *(mandato explícito de `docs/mision-n7.md`, reforzado por la propia investigación de M4)*: todo contenido de guardrails/riesgos/seguridad enseña a **reconocer y mitigar** modos de fallo, nunca a producir un ataque funcional contra un sistema ajeno. Cuando el laboratorio exige poner a prueba un guardrail, la prueba se hace exclusivamente contra el propio sistema del estudiante (su propio RAG de M2), con paráfrasis de casos ya identificados como fuera de política — nunca contra terceros, nunca produciendo contenido dañino real.

5. **LLM-as-judge nunca se enseña sin su propia validación en el mismo bloque** *(hallazgo más sólido de la investigación de M4, con evidencia académica y de industria convergente: un juez LLM sin validar alcanzó 53.8-58.5% de precisión distinguiendo alucinación — casi azar)*: todo ejercicio que construya un evaluador LLM construye, en el mismo laboratorio, el mini-dataset de acuerdo humano-juez que mide cuánto confiar en él — nunca como advertencia abstracta separada.

6. **Continuidad de entorno DOC-12 con niveles hermanos, declarada como pendiente, no asumida** *(mismo principio de `docs/mision-n7.md` §"Herencia entrante")*: N5.M2 y N9-N10 probablemente comparten el mismo patrón de GPU gratuita en la nube (Colab) que M3 de este nivel adopta — verificado que, a fecha de esta investigación, no existe todavía `docs/syllabus/syl-n5.md` ni decisión de entorno documentada en N5 (se comprobó directamente: `academia-python-n5` y `academia-python-n6` no tienen syllabus propio todavía). La decisión de M3 (Colab T4, notebook oficial de TRL) se toma de forma autónoma, con la nota explícita de que N5/N9/N10 deberán confirmar si reutilizan el mismo patrón cuando construyan su propio módulo de GPU.

7. **Triple justificación, Método DOC-03** — heredados sin cambio de N1-N3.

8. **Densidad de nivel avanzado** *(instrucción directa del Director para N4-N12, guía maestra §8)*: más teoría por día, ejercicios más complejos e integradores que el estándar N0-N3 — aplicado aquí no como cifra inflada, sino como profundidad real verificada en la investigación (ej.: M1.T4 no enseña "cómo calcular el precio" sino el método completo con el ejemplo oficial resuelto de Anthropic; M4.T3 no enseña "qué es LLM-as-judge" sino su construcción Y su validación empírica).

## 4. Estructura y grafo local

Troncal: `M1 → M2 → M3 → M4`. M2 depende realmente de M1 (la generación aumentada de M2.T6 reutiliza directamente el objeto de request/response, roles y gestión de costes que M1 ya enseñó — no se reintroduce la llamada a la API desde cero). M3 es relativamente independiente de M2 en contenido técnico (fine-tuning no requiere RAG), pero se posiciona después porque comparte la disciplina de credenciales/costes ya instalada en M1 y porque el orden narrativo del nivel (inferencia → recuperación → ajuste del modelo → evaluación de todo el sistema) sigue la propia secuencia de DOC-10 §8. M4 depende con fuerza de M2 (evalúa el RAG real construido ahí — T4 de M4 es, literalmente, "evalúa el sistema del hito 2") y débilmente de M3 (si el estudiante evalúa el efecto de su fine-tuning, reutiliza el arnés de evaluación antes/después de M3.T1.Día4 — pero M4 no exige que M3 exista para funcionar como módulo, a diferencia de la dependencia dura M4→M2).

**Nota de implementación** (mismo texto institucional de EVT-034, heredado sin cambio de SYL-N1/N3): el Campus presenta un recorrido lineal único, sin bifurcaciones de navegación. La secuencia real de construcción y de recorrido del estudiante es M1→M2→M3→M4, sin alternancia.

## 5. Fichas pedagógicas por tema

*Plantilla heredada de SYL-N1/SYL-N3 (10 campos + condicionales), con **un campo nuevo obligatorio para N7: Modalidad** (DOC-11/DOC-12, explícito por tema — exigido por `docs/mision-n7.md`: "verifica esto primero, antes de diseñar una sola lección"). Los condicionales de N3 (quiebre de intuición, supuesto que destruye, idea universal) se aplican donde el tema los sostenga genuinamente; no se fuerzan. Dado que este nivel es DOC-12 dominante, "Práctica principal" describe el laboratorio real (§2 de DOC-12) en vez de un ejercicio Pyodide — el detalle completo de las 13 secciones de DOC-12 se redacta en el Paso 2 (contenido real), no aquí.*

### M1 · Inferencia y prompting

> **La gran pregunta de este módulo: ¿qué contrato exacto exige un modelo de lenguaje para que su salida sea confiable y no solo probable?**

**N7.M1.T1 · Fundamentos de la API: requests, roles, parámetros**
- **Modalidad:** DOC-12 desde el primer minuto — es simultáneamente el laboratorio de onboarding de credenciales (§3.2) y el primer contacto con la API.
- **Objetivo:** obtiene y asegura su propia API key con límite de gasto configurado, y realiza llamadas reales a al menos dos proveedores distinguiendo correctamente sus contratos de roles y parámetros de sampling.
- **Prerrequisitos:** N6 Superado (arquitectura/tokenización de transformers, se presupone — herencia entrante §7.1); ninguno de infraestructura previo dentro de N7.
- **Competencias:** C-N7-01, C-N7-03.
- **Errores habituales:** tratar el rol `system` como si funcionara igual en todo proveedor (en OpenAI es un mensaje dentro de `messages`; en Anthropic es un parámetro top-level — no existe rol `system` dentro de `messages`, cita literal de la documentación oficial de Anthropic); commitear una key a git; no configurar límite de gasto antes de la primera llamada real.
- **Modelo mental:** la llamada a la API como **un contrato firmado por turno**: cada proveedor define su propio formato de firma (roles, campos obligatorios), y confundir contratos entre proveedores rompe silenciosamente, no con un error de sintaxis obvio.
- **Por qué:** existe porque todo sistema de N7-N10 empieza con una llamada real a un modelo / ahora porque el estudiante ya domina arquitectura de transformers (N6) y necesita el contrato de uso real / habilita streaming, structured output y gestión de costes, que reutilizan este mismo objeto de request/response.
- **Evidencia de dominio:** realiza la misma conversación multi-turno correctamente en dos proveedores distintos sin copiar la estructura de uno al otro; explica por qué `max_tokens` es obligatorio en Anthropic y no en todos los proveedores.
- **Práctica principal:** laboratorio DOC-12 de onboarding completo — cuenta, key, `.env`+`.gitignore`, primera llamada verificada, límite de gasto configurado (⚠️ obligatorio) — seguido de un laboratorio de contrastar el mismo prompt en ambos proveedores, con el conflicto cognitivo de roles como error inducido en vivo (DOC-12 §2.5bis).
- **Evaluación:** estándar DOC-12 (§2.13) — incluye diagnóstico de errores de credenciales (key inválida, filtrada, rate limit, límite de gasto alcanzado).
- **Pregunta ingenieril:** si tu aplicación necesita cambiar de proveedor de modelo mañana, ¿qué parte de tu código hoy asume, sin saberlo, el contrato de uno solo?
- **El quiebre de intuición:** el instante donde el estudiante, tras haber asumido que "system" funciona igual en todo proveedor por analogía con el primero que aprendió, ve su propio código fallar silenciosamente al cambiar de proveedor — no por un error de sintaxis, sino porque Anthropic no tiene rol `system` dentro de `messages`.

**N7.M1.T2 · Streaming de respuestas**
- **Modalidad:** DOC-12.
- **Objetivo:** consume respuestas en streaming (SSE) de ambos proveedores, reconstruye el mensaje completo evento a evento, y calcula el uso de tokens real sin el error de acumulación.
- **Prerrequisitos:** T1.
- **Competencias:** C-N7-01.
- **Errores habituales:** sumar el campo `usage` de cada evento `message_delta` como si fuera incremental cuando es acumulativo (Warning oficial de Anthropic); revisar solo el status code HTTP para detectar errores, cuando un error mid-stream llega como evento `error` después del 200 inicial; no manejar streams truncados que impiden leer el `finish_reason` real.
- **Modelo mental:** streaming como **la misma respuesta completa, entregada en fragmentos** — nunca un tipo de dato distinto, solo una forma distinta de recibir el mismo objeto.
- **Por qué:** existe porque la latencia percibida importa en producción (mostrar texto mientras se genera) / ahora porque T1 ya dio el objeto de respuesta completo que aquí se ve fragmentado / habilita T3 (los bloques de `tool_use` también llegan en fragmentos vía `input_json_delta`).
- **Evidencia de dominio:** reconstruye correctamente una respuesta completa a partir de sus eventos SSE; calcula el `usage` real de una sesión streamed sin caer en el error de acumulación.
- **Práctica principal:** laboratorio DOC-12 — primero la misma llamada sin streaming (objeto completo), después con `stream:true`, reconstrucción manual del mensaje. **Error inducido en vivo obligatorio (§2.5bis):** sumar manualmente el `usage` de cada `message_delta` y comparar contra el `usage` real — reproduce el Warning oficial documentado.
- **Evaluación:** estándar DOC-12.
- **Pregunta ingenieril:** ¿qué decisiones de tu interfaz de usuario cambian si asumes que un stream puede truncarse a mitad de una palabra — y cómo lo comprobarías sin esperar a que le pase a un usuario real?
- **Recursos recomendados:** streaming docs oficiales de ambos proveedores (fetcheadas en la investigación); sin curso DL.AI dedicado — ausencia declarada honestamente, no forzada.

**N7.M1.T3 · Structured output: JSON mode y tool/function calling**
- **Modalidad:** DOC-12.
- **Objetivo:** obtiene salida con esquema garantizado de un LLM mediante JSON mode/Structured Outputs y ejecuta el round-trip completo de tool use (definir tool → recibir `tool_use` → ejecutar → responder con `tool_result`).
- **Prerrequisitos:** T1 (roles), T2 (bloques de contenido en streaming, para `input_json_delta`).
- **Competencias:** C-N7-01.
- **Errores habituales:** confundir JSON mode (JSON válido) con Structured Outputs (JSON válido + esquema exacto); no comprobar refusals o truncamiento por límite de tokens antes de parsear; asumir que el modelo siempre pregunta ante un parámetro faltante (documentado oficialmente: Sonnet puede alucinar un valor razonable en vez de preguntar, a diferencia de Opus).
- **Modelo mental:** structured output como **una escalera de tres niveles de garantía** (texto libre → JSON válido → esquema exacto por restricción de decodificación), no tres features paralelas — cada nivel existe porque el anterior falla de una forma concreta.
- **Por qué:** existe porque un sistema real necesita que la salida del modelo se pueda parsear con certeza, no con suerte / ahora porque T1-T2 ya dieron el vocabulario de mensajes y streaming / habilita M2 (recuperación con parámetros estructurados) y M3/M4 (evaluación estructurada).
- **Evidencia de dominio:** implementa el round-trip completo de una tool real; explica por qué Structured Outputs con `strict:true` es más confiable que "pedir JSON en el prompt".
- **Práctica principal:** laboratorio DOC-12 — round-trip de tool use con Anthropic primero (flujo explícito), después JSON mode/Structured Outputs de OpenAI. Mini-laboratorio candidato: reproducir el caso documentado de Sonnet alucinando un parámetro faltante.
- **Evaluación:** estándar DOC-12.
- **Pregunta ingenieril:** si tu sistema depende de que el modelo siempre pregunte por un dato faltante en vez de inventarlo, ¿qué evidencia real tienes de que eso es cierto para el modelo específico que usas hoy?
- **Recursos recomendados:** "Function-calling and data extraction with LLMs" (DL.AI, Jiantao Jiao/Venkat Srinivasan) — patrón agnóstico de proveedor, útil como referencia conceptual, a traducir a la sintaxis exacta de cada API.

**N7.M1.T4 · Gestión de costes: tokens, pricing, control de gasto**
- **Modalidad:** DOC-12.
- **Objetivo:** calcula el coste real de una sesión de uso con y sin optimizaciones (caching, batch), y diagnostica sorpresas de coste comunes antes de que ocurran en producción.
- **Prerrequisitos:** T1-T3 (necesita tráfico real generado para leer su propio `usage` con contexto).
- **Competencias:** C-N7-01, C-N7-03.
- **Errores habituales:** reintentar sin backoff tras un 429 (cuenta contra el propio límite); asumir que una key nueva resetea el rate limit (Anthropic limita a nivel de organización, no de key); no contar el coste oculto del system prompt automático que añaden las `tools`; no truncar/resumir historial de conversación, reenviando todos los turnos previos como input en cada llamada nueva.
- **Modelo mental:** el coste de un sistema LLM como **una función del historial completo, no del mensaje nuevo** — cada turno reenvía todo lo anterior como tokens de entrada.
- **Por qué:** existe porque el nivel se llama "columna vertebral V1" y una columna vertebral que nadie puede costear no es viable / ahora porque hay tráfico real generado en T1-T3 que analizar / cierra M1 integrando los tres temas anteriores en una sola pregunta económica real.
- **Evidencia de dominio:** calcula el coste de una sesión real (ejemplo tipo el resuelto oficial de Anthropic: 1h, 50k input/15k output tokens) con y sin prompt caching, y explica el punto de equilibrio de la caché.
- **Práctica principal:** laboratorio DOC-12 integrador — cálculo de coste real de las sesiones generadas en T1-T3, con verificación de tarifa vigente en la documentación oficial en el momento del laboratorio (nunca una cifra hardcodeada, principio §3.3). Cierra con backoff exponencial ante rate limits reales.
- **Evaluación:** estándar DOC-12 + cierre del mini-proyecto integrador de M1 (T1-T4 combinados).
- **Pregunta ingenieril:** si tu aplicación tiene éxito y su tráfico se multiplica por cien, ¿qué parte de tu diseño actual de costes deja de ser sostenible primero?
- **El supuesto que destruye:** "el coste de una llamada depende solo del mensaje que el usuario acaba de escribir" — se destruye al ver el `usage` real de un turno 50 de una conversación larga.

### M2 · RAG completo

> **La gran pregunta de este módulo: ¿en qué eslabón exacto de la cadena recuperación→generación falló tu sistema, y cómo lo sabes sin adivinar?**

**N7.M2.T1 · Por qué RAG y el problema del contexto limitado**
- **Modalidad:** DOC-11 (Pyodide — motivación y primer chunking a mano, sin librerías).
- **Objetivo:** explica por qué no se puede simplemente pegar todo un corpus en el prompt, e implementa un primer chunking fixed-size con strings puros.
- **Prerrequisitos:** M1 completo (necesita el objeto request/response y el vocabulario de costes para entender por qué el contexto no es gratis).
- **Competencias:** C-N7-01.
- **Errores habituales:** tratar el chunking como una decisión trivial/parámetro de configuración; no notar cuando un chunk corta una oración a la mitad o separa una pregunta de su respuesta.
- **Modelo mental:** RAG como **una biblioteca con un bibliotecario que solo puede cargar unos pocos libros a la vez** — la pregunta no es "cuánto sabe el modelo", es "qué le diste para leer antes de responder".
- **Por qué:** existe porque ningún corpus real cabe en una ventana de contexto, y aunque cupiera, más contexto no es gratis (M1.T4) / ahora porque el estudiante ya sabe costear tokens / habilita T2 (chunking real) mostrando primero el fallo del enfoque ingenuo.
- **Evidencia de dominio:** dado un documento largo, identifica manualmente dónde un corte fixed-size rompería significado, antes de implementar la corrección en T2.
- **Práctica principal:** ejercicios Pyodide — chunking fixed-size con strings puros, mostrando el fallo concreto (oración cortada, pregunta separada de su respuesta) como conflicto cognitivo.
- **Evaluación:** estándar DOC-11.
- **Pregunta ingenieril:** ¿por qué "recuperar más contexto" no es siempre la respuesta correcta, incluso si el modelo pudiera procesarlo todo gratis?

**N7.M2.T2 · Chunking real: recursive y sus trade-offs**
- **Modalidad:** DOC-11.
- **Objetivo:** implementa chunking recursivo respetando estructura del documento (párrafos/oraciones) y argumenta la elección de estrategia de chunking con un trade-off explícito.
- **Prerrequisitos:** T1.
- **Competencias:** C-N7-01.
- **Errores habituales:** perseguir un tamaño de chunk "óptimo" universal en vez de decidir según el tipo de contenido; ignorar que el chunking es, según la evidencia de la investigación, la decisión de mayor impacto de todo el pipeline.
- **Modelo mental:** el chunking recursivo como **cortar por las costuras del documento**, no por una regla arbitraria de longitud.
- **Por qué:** existe porque el fallo mostrado en T1 tiene una respuesta directa en la jerarquía de separadores / ahora porque T1 ya instaló el conflicto cognitivo / habilita T3 (los chunks son la unidad que se embebe).
- **Evidencia de dominio:** dado un documento con estructura clara (encabezados, párrafos), elige y justifica una estrategia de chunking con el trade-off tamaño/coherencia explícito.
- **Práctica principal:** laboratorio Pyodide — chunking recursivo (separadores jerárquicos), comparación fixed-size vs. recursive sobre el mismo documento.
- **Evaluación:** estándar DOC-11.
- **Pregunta ingenieril:** si tu corpus mezcla contratos legales y transcripciones de chat, ¿usarías la misma estrategia de chunking para ambos? ¿Por qué sí o por qué no?
- **Recursos recomendados:** tabla de trade-offs de chunking de Pinecone Learn (fixed-size/content-aware/semantic/contextual), citada con la salvedad declarada de ser contenido de un proveedor con interés comercial.

**N7.M2.T3 · Embeddings de juguete y similitud coseno**
- **Modalidad:** DOC-11.
- **Objetivo:** calcula similitud coseno a mano con NumPy sobre vectores de juguete, y explica qué mide y qué no mide.
- **Prerrequisitos:** T2; N3.M1 (vectores, producto punto — herencia entrante formal desde N3, vía N4-N6).
- **Competencias:** C-N7-01.
- **Errores habituales:** tratar el embedding como una "caja negra" sin verificar el número real de similitud; mezclar mentalmente "similar en significado" con "similar en superficie textual".
- **Modelo mental:** el embedding como **coordenadas en un mapa de significado** — la similitud coseno mide qué tan cerca apuntan dos flechas en ese mapa, no si el texto se parece letra por letra.
- **Por qué:** existe porque antes de indexar en una base real hay que entender qué operación matemática ocurre por debajo / ahora porque N3.M1 ya dio producto punto y norma / habilita T4 (la misma operación, a escala, en una vector DB real).
- **Evidencia de dominio:** calcula similitud coseno a mano (`np.dot(a,b)/(norm(a)*norm(b))`) sobre 3+ vectores de juguete y ordena por relevancia, verificando el resultado numérico real.
- **Práctica principal:** ejercicios Pyodide con NumPy — similitud coseno a mano, sin librería de embeddings real todavía.
- **Evaluación:** estándar DOC-11.
- **Pregunta ingenieril:** si mezclas vectores generados por dos modelos de embeddings distintos en la misma búsqueda, ¿qué significa el número de similitud que obtienes?
- **El supuesto que destruye:** "dos textos son similares si comparten muchas palabras" — se destruye comparando dos frases con vocabulario distinto pero mismo significado, y viendo la similitud coseno alta de sus embeddings reales.

**N7.M2.T4 · Laboratorio: primera vector DB real con Qdrant**
- **Modalidad:** DOC-12 (primer tema de entorno real del módulo — instalación, estado persistente).
- **Objetivo:** instala, indexa y consulta una base de datos vectorial real (Qdrant), integrando el chunking (T1-T2) y los embeddings (T3) en un pipeline funcional.
- **Prerrequisitos:** T1-T3.
- **Competencias:** C-N7-01.
- **Errores habituales:** mezclar embeddings de modelos distintos entre indexación y consulta (produce resultados plausibles pero degradados, sin excepción visible); no reindexar cuando cambian los datos o el modelo ("embedding rot").
- **Modelo mental:** la vector DB como **el mapa de T3, pero indexado para búsqueda rápida a escala** — la misma operación matemática, con estructura de datos que evita comparar contra todo el corpus uno por uno.
- **Por qué:** existe porque un mapa de significado que no se puede consultar rápido a escala no sirve en producción / ahora porque T1-T3 ya dieron chunking y similitud / habilita T5 (recuperación híbrida real).
- **Evidencia de dominio:** indexa un corpus propio, consulta con una query real, y diagnostica si un resultado pobre viene de mal chunking, mal embedding, o mala consulta.
- **Práctica principal:** laboratorio DOC-12 completo — instalación (Docker local), indexación, consulta; mini-proyecto integrador con T1-T3.
- **Evaluación:** DOC-12 §2.13 completo.
- **Pregunta ingenieril:** ¿qué le pasa a tu sistema si cambias de modelo de embeddings pero no reindexas el corpus completo?
- **Recursos recomendados:** documentación oficial de Qdrant (concepto-antes-que-comando, verificada superior a Chroma en esta investigación).

**N7.M2.T5 · Recuperación híbrida: BM25 + dense + reranking**
- **Modalidad:** DOC-12.
- **Objetivo:** combina búsqueda léxica (BM25) con búsqueda semántica (dense) y aplica reranking, diagnosticando cuándo cada una falla sola.
- **Prerrequisitos:** T4.
- **Competencias:** C-N7-01.
- **Errores habituales:** saltar el reranking y confiar solo en similitud coseno de primera etapa (documentado: ~70% relevancia sola vs. 90%+ con reranker); no reconocer cuándo un acrónimo o nombre propio exacto necesita búsqueda léxica, no semántica.
- **Modelo mental:** recuperación híbrida como **dos bibliotecarios distintos**: uno busca por palabra exacta (BM25), otro por significado (dense) — combinarlos cubre los puntos ciegos del otro.
- **Por qué:** existe porque la búsqueda semántica pura "difumina" nombres propios y acrónimos exactos / ahora porque T4 ya dio una vector DB real donde probar esto / habilita T6 (el contexto recuperado, mejor filtrado, llega a generación).
- **Evidencia de dominio:** dado un caso donde la búsqueda semántica pura falla (acrónimo exacto), muestra que la búsqueda híbrida lo recupera y explica por qué.
- **Práctica principal:** laboratorio DOC-12 — BM25+dense con fusión (RRF como default, DBSF con datos de evaluación), patrón bi-encoder→cross-encoder para reranking.
- **Evaluación:** DOC-12 §2.13.
- **Pregunta ingenieril:** ¿en qué dominio de tu propio RAG esperarías que BM25 solo gane a dense solo, y en cuál al revés? ¿Cómo lo comprobarías con datos, no con intuición?
- **Recursos recomendados:** Qdrant hybrid-queries (RRF/DBSF con guía de decisión); sbert.net Retrieve & Re-Rank (bi-encoder/cross-encoder).

**N7.M2.T6 · Generación aumentada y lost-in-the-middle**
- **Modalidad:** DOC-12.
- **Objetivo:** construye el prompt final con contexto recuperado y diagnostica si un fallo de respuesta viene de mala recuperación o de mal uso del contexto recuperado.
- **Prerrequisitos:** T5; M1 completo (construcción de mensajes, roles).
- **Competencias:** C-N7-01.
- **Errores habituales:** no probar la recuperación antes de optimizar el prompt de generación (antipatrón documentado de forma independiente en tres fuentes: "teams have spent weeks tweaking prompt templates when their real problem was chunk size"); asumir que más contexto recuperado siempre mejora la respuesta.
- **Modelo mental:** el prompt de generación como **un informe que alguien más va a leer bajo presión de tiempo** — dónde coloca la información importa tanto como qué información incluye.
- **Por qué:** existe porque recuperar bien no garantiza usar bien lo recuperado — son dos fallos distintos con síntomas iguales / ahora porque T5 ya dio recuperación de calidad / cierra el pipeline técnico del módulo, antes del mini-proyecto integrador de T7.
- **Evidencia de dominio:** dado un RAG con retrieval correcto pero respuesta mala, diagnostica si el problema es de retrieval o de "contexto enterrado en el medio del prompt".
- **Práctica principal:** laboratorio DOC-12 — construcción de plantilla de prompt (instrucción+contexto+pregunta); ejercicio de depuración real con lost-in-the-middle como conflicto cognitivo central.
- **Evaluación:** DOC-12 §2.13.
- **Pregunta ingenieril:** si tu RAG recupera los 3 documentos correctos pero los ordena mal dentro del prompt, ¿qué evidencia verías que te permita distinguir esto de "recuperó los documentos incorrectos"?
- **Recursos recomendados:** Liu et al., "Lost in the Middle: How Language Models Use Long Contexts", arXiv:2307.03172 (TACL 2024) — paper primario, evidencia muy sólida.
- **El quiebre de intuición:** el instante donde un estudiante que ya resolvió recuperación e híbrido sigue obteniendo respuestas malas — y descubre que el contexto correcto estaba "enterrado" en el medio del prompt, no ausente.

**N7.M2.T7 · Mini-proyecto integrador final de M2**
- **Modalidad:** DOC-12.
- **Objetivo:** construye un pipeline RAG propio de extremo a extremo (ingesta→chunking→embeddings→vector DB→recuperación híbrida→generación), integrando T1-T6, y sobrevive a un error inducido en vivo.
- **Prerrequisitos:** T1-T6.
- **Competencias:** C-N7-01, C-N7-04 (siembra el design doc del capstone).
- **Errores habituales:** los seis errores de novato acumulados de T1-T6, ahora en un sistema propio en vez de un ejercicio aislado.
- **Modelo mental:** el pipeline completo como **una cadena de componentes con un punto de fallo verificable en cada eslabón** — nunca una tubería opaca de una sola pieza.
- **Por qué:** existe porque un RAG real no se aprende viendo sus partes por separado, se aprende construyendo el sistema completo una vez / ahora porque T1-T6 ya dieron cada eslabón por separado / habilita directamente la Columna vertebral V1 del capstone y la evaluación de M4.
- **Evidencia de dominio:** su propio corpus, indexado y consultable, produce respuestas correctas verificables, y puede señalar en qué eslabón falló cuando se le presenta un caso de fallo deliberado.
- **Práctica principal:** laboratorio integrador DOC-12 completo (mini-proyecto real, ≥2 lecciones previas citadas por dirección exacta) con al menos un error inducido en vivo (§2.5bis) — candidato: fallo de chunking, mezcla de modelos de embeddings, o ausencia de reranking (decisión final al redactar el contenido real).
- **Evaluación:** DOC-12 §2.13 completo, cierra con "repetir desde cero sin guía".
- **Pregunta ingenieril:** si tuvieras que explicarle a otro ingeniero, en 3 frases, por qué tu RAG específico falla más a menudo en un tipo de pregunta que en otro, ¿qué dirías?
- **Idea universal:** un sistema de recuperación y generación no es tan fuerte como su componente promedio — es tan fuerte como el eslabón más débil que nadie midió por separado.

### M3 · Fine-tuning y post-entrenamiento

> **La gran pregunta de este módulo: ¿qué mide realmente que un modelo "mejoró" tras ajustarlo, más allá de que las respuestas "se vean mejor"?**

**N7.M3.T1 · LoRA y QLoRA — fine-tuning eficiente con recursos modestos**
- **Modalidad:** Mixta — Día 1 introducción matemática **DOC-11** (descomposición de bajo rango con NumPy, matrices de juguete, sin GPU); Días 2-4 **DOC-12** (GPU real, Colab T4 gratuita).
- **Objetivo:** explica por qué LoRA reduce drásticamente los parámetros entrenables, ejecuta fine-tuning real (LoRA y QLoRA) de un modelo pequeño en una GPU gratuita, y mide su efecto con un arnés de evaluación propio antes/después.
- **Prerrequisitos:** N6 (arquitectura de transformers, pesos, attention); M1 (gestión de credenciales/entorno, transferible a cuentas de Colab/HF).
- **Competencias:** C-N7-02.
- **Errores habituales:** elegir el rango `r` sin criterio (la comunidad de mantenedores de PEFT recomienda barrer `r` dejando `alpha` en su default, no perseguir una fórmula fija); configurar mal la cuantización (`ValueError: Attempting to unscale FP16 gradients` es el error real más documentado); overfitting con datasets pequeños y rango alto; no tener baseline de evaluación antes/después (laguna real que ninguna fuente oficial cubre — la Academia debe construirla).
- **Modelo mental:** LoRA como **una nota adhesiva sobre un libro que no se puede escribir directamente** — el peso original (`W`) permanece congelado; solo se entrena un parche mucho más pequeño (`B·A`) que se combina con él en inferencia.
- **Por qué:** existe porque reentrenar un modelo completo es inviable con recursos modestos (el paper original: 10.000× menos parámetros, 3× menos memoria que fine-tuning completo de GPT-3) / ahora porque N6 ya dio la arquitectura que se va a ajustar / habilita T2 (DPO se combina directamente con LoRA vía `peft_config`).
- **Evidencia de dominio:** explica la descomposición `ΔW ≈ B·A` con matrices de juguete antes de tocar una GPU; ejecuta un fine-tuning real y produce una comparación verificable (mismos prompts, base vs. ajustado).
- **Práctica principal:** Día 1 — Pyodide, NumPy puro, matrices 8×8/16×16, sin PyTorch ni GPU. Día 2 — laboratorio DOC-12: LoRA real en Colab T4 sobre el notebook oficial de TRL adaptado (`ibm-granite/granite-4.0-micro` o `Llama-3.2-3B-Instruct`, ambos con margen amplio de VRAM verificado); error inducido en vivo candidato: `r` demasiado alto en dataset pequeño, señal de sobreajuste en pérdida de validación. Día 3 — QLoRA (cuantización + LoRA) sobre un modelo más grande en la misma T4. Día 4 — construcción del arnés de evaluación propio (5-10 prompts fijos, generación base vs. ajustado, comparación lado a lado — nunca solo "se ve mejor").
- **Evaluación:** DOC-12 §2.13 completo, con instrumento propio de "medir el efecto real" como pieza central no heredada de ningún notebook oficial.
- **Pregunta ingenieril:** si tu evaluación antes/después no muestra ninguna diferencia medible, ¿cómo decides si el problema fue el dataset, el rango `r`, o que la tarea no necesitaba fine-tuning?
- **Recursos recomendados:** PEFT — LoRA conceptual guide y Quantization guide (huggingface.co/docs/peft); notebook oficial `sft_trl_lora_qlora.ipynb` (TRL, Colab gratuito verificado); papers de LoRA (arXiv:2106.09685) y QLoRA (arXiv:2305.14314) como referencia conceptual.

**N7.M3.T2 · RLHF y DPO — post-entrenamiento por preferencias**
- **Modalidad:** Días 1-2 (RLHF conceptual) **DOC-11/lectura guiada, sin código de PPO**; Días 3-6 (DPO real) **DOC-12**.
- **Objetivo:** explica las tres etapas de RLHF y por qué SFT/pretraining solos no bastan, y ejecuta fine-tuning real por preferencias con DPO sobre el modelo ya ajustado en T1.
- **Prerrequisitos:** T1 (mismo modelo pequeño, para comparar tres versiones de sí mismo: base → LoRA/QLoRA → +DPO).
- **Competencias:** C-N7-02.
- **Errores habituales:** confundir RLHF con "simplemente dar feedback" (existe una etapa completa dedicada a convertir preferencias humanas en una función de recompensa reutilizable sin humanos presentes); tratar el par `chosen`/`rejected` como dos ejemplos independientes (como SFT duplicado) en vez de un par comparativo cuyo margen se optimiza junto.
- **Modelo mental:** RLHF/DPO como **la respuesta a una pregunta que el pretraining no puede programar a mano**: no existe una función de pérdida escribible para "qué respuesta prefiere un humano" — DPO es una reformulación matemática del mismo objetivo de RLHF que elimina la necesidad de un reward model separado y de muestreo inestable durante el entrenamiento.
- **Por qué:** existe porque next-token-prediction no captura "qué respuesta es mejor", solo "qué token es probable" / ahora porque T1 ya dejó un modelo ajustado con el que comparar / cierra M3 y alimenta la evaluación de M4 (comparar 3 versiones del mismo modelo con el arnés de T1.Día4).
- **Evidencia de dominio:** explica sin código las tres etapas de RLHF (LM preentrenado → modelo de recompensa entrenado con rankings → ajuste con penalización KL); ejecuta DPO real y compara las tres versiones del modelo (base/LoRA/+DPO) sobre los mismos prompts fijos.
- **Práctica principal:** Días 1-2 — lectura guiada del blog oficial de HF "Illustrating RLHF", con preguntas de comprensión que exigen razonamiento (nunca solo confirmación), sin código de PPO (inviable con recursos modestos, confirmado: incluso GRPO más liviano reporta OOM en GPUs de Colab). Días 3-5 — laboratorio DOC-12: dataset de preferencias real (formato prompt/chosen/rejected), `DPOTrainer` de TRL combinado con `peft_config=LoraConfig()` sobre el mismo modelo de T1. Día 6 — desafío inédito: aplicar el flujo completo a un dataset de preferencias distinto, no visto.
- **Evaluación:** DOC-12 §2.13 completo, incluye repetición desde cero sin guía y pregunta metacognitiva de proceso — cierre de todo M3.
- **Pregunta ingenieril:** ¿por qué DPO puede entrenarse en la misma T4 gratuita donde PPO clásico se queda sin memoria, si ambos persiguen el mismo objetivo de alineación por preferencias?
- **Recursos recomendados:** HF Blog "Illustrating Reinforcement Learning from Human Feedback"; TRL DPO Trainer docs; paper de DPO (arXiv:2305.18290) — "por qué la industria migró hacia DPO", cita directa disponible.
- **Fuera de alcance declarado (y por qué):** implementación de PPO en código — inestable, multi-modelo, no cabe con margen en recursos modestos; se cubre solo conceptualmente. RLHF con reward model entrenado desde cero — StackLLaMA citado como recurso ⭐ de profundización, no base del laboratorio.

### M4 · Evals y seguridad

> **La gran pregunta de este módulo: ¿cómo defiendes, con evidencia propia y no con una afirmación, que tu sistema funciona y es razonablemente seguro?**

**N7.M4.T1 · Riesgos documentados de sistemas LLM**
- **Modalidad:** Introducción conceptual **DOC-11** (casos de estudio en texto, sin llamadas reales) + cierre **DOC-12** (mapeo contra la arquitectura real del propio RAG del estudiante).
- **Objetivo:** identifica qué categorías del OWASP Top 10 for LLM Applications 2025 aplican a la arquitectura real de su propio RAG (M2), y cuáles no, con justificación.
- **Prerrequisitos:** M2 completo (necesita una arquitectura real contra la cual mapear riesgos, no un ejemplo abstracto).
- **Competencias:** C-N7-03.
- **Errores habituales:** tratar todos los riesgos de la lista como igualmente aplicables sin verificar contra la arquitectura propia; confundir inyección directa (usuario adversario) con indirecta (contenido de terceros como vector).
- **Modelo mental:** el mapa de riesgos como **una checklist de arquitecto, no una lista de terror genérica** — cada categoría se evalúa contra el sistema real, no se asume.
- **Por qué:** existe porque enseñar mitigación antes que el riesgo que mitiga produce el orden pedagógico menos efectivo (DOC-03 P9) / ahora porque M2 ya dio un sistema real contra el cual mapear / habilita T2-T5 (cada uno mitiga una porción de este mapa).
- **Evidencia de dominio:** para su propio RAG, señala qué categorías OWASP aplican (típicamente LLM01 prompt injection, LLM02 fuga de información, LLM08 vector/embedding weaknesses, LLM09 misinformation) y cuáles no, con justificación arquitectónica.
- **Práctica principal:** casos de estudio en texto (DOC-11, sin llamadas reales) de LLM01/LLM02/LLM08/LLM09, seguidos de un ejercicio DOC-12 de mapeo contra el propio sistema de M2.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** de las 10 categorías del OWASP LLM Top 10, ¿cuál es la que tu propia arquitectura de RAG hace estructuralmente más probable, y cuál hace casi imposible por diseño?
- **Recursos recomendados:** OWASP GenAI Security — páginas individuales verificadas LLM01, LLM04, LLM07 (genai.owasp.org); listado completo confirmado por fuente agregadora cruzada.

**N7.M4.T2 · Evaluación de sistemas LLM — métricas automáticas y sus límites**
- **Modalidad:** Introducción **DOC-11** (evaluador basado en reglas, datos de juguete) → **DOC-12** (aplicado contra llamadas reales).
- **Objetivo:** construye evaluaciones basadas en reglas (assertions) y explica sus límites frente a casos que requieren juicio semántico.
- **Prerrequisitos:** T1.
- **Competencias:** C-N7-03.
- **Errores habituales:** evaluar "a ojo" (vibe checks) sin criterios verificables; no versionar el dataset de evaluación.
- **Modelo mental:** el testing basado en reglas como **la primera línea de defensa, barata y determinista** — no resuelve todo, pero descarta la mayoría de fallos obvios antes de gastar en evaluación más cara.
- **Por qué:** existe porque no todo eval necesita una LLM evaluando a otra / ahora porque T1 ya dio el mapa de riesgos que estas evaluaciones empiezan a cubrir / habilita T3 (LLM-as-judge, para lo que las reglas no alcanzan).
- **Evidencia de dominio:** convierte un "vibe check" informal en al menos 3 aserciones verificables extraídas de casos reales de su propio RAG.
- **Práctica principal:** laboratorio DOC-11→DOC-12 — construcción de assertions sobre casos reales del sistema del estudiante, siguiendo el patrón "tratar cambios de prompt como cambios de código que requieren tests".
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿qué porcentaje de los fallos reales de tu RAG podrías detectar solo con reglas, sin necesitar nunca una LLM evaluadora?
- **Recursos recomendados:** "Automated Testing for LLMOps" (DL.AI, Rob Zuber/CircleCI); "Improving Accuracy of LLM Applications" (DL.AI).

**N7.M4.T3 · LLM-as-judge y su validación**
- **Modalidad:** DOC-12.
- **Objetivo:** construye un evaluador LLM-as-judge para su propio sistema, y mide con una cifra propia cuánto acuerdo tiene ese juez con criterio humano antes de confiar en él.
- **Prerrequisitos:** T2.
- **Competencias:** C-N7-03.
- **Errores habituales:** usar LLM-as-judge sin validarlo (evidencia documentada: 53.8-58.5% de precisión distinguiendo alucinación, casi azar); no saber que el sesgo de estilo (0.76-0.92) domina sobre el sesgo de posición (≤0.04) en jueces LLM — un juez premia cómo está escrita la respuesta, no si es correcta.
- **Modelo mental:** un juez LLM sin validar como **una segunda opinión rápida, nunca una medición objetiva por el solo hecho de ser automática** — su confiabilidad se demuestra, no se asume.
- **Por qué:** existe porque las reglas de T2 no capturan juicio semántico (¿esta respuesta realmente contesta la pregunta?) / ahora porque T2 ya estableció la base de evaluación / habilita T4 (RAGAS usa exactamente este patrón de juez validado, aplicado por componente).
- **Evidencia de dominio:** construye un juez LLM y, en el mismo laboratorio, un mini-dataset de acuerdo humano-juez que reporta una cifra real de confiabilidad — nunca despliega el juez sin ese número.
- **Práctica principal:** laboratorio DOC-12 obligatorio en dos partes inseparables: (1) construcción del juez sobre casos reales del RAG del estudiante; (2) validación con acuerdo humano, iterando el criterio del juez hasta una cifra de acuerdo razonable (patrón documentado: iteración de 68%→94% con revisión de stakeholders).
- **Evaluación:** DOC-12 §2.13, con la cifra de acuerdo humano-juez como evidencia obligatoria, no opcional.
- **Pregunta ingenieril:** si tu juez LLM y un evaluador humano difieren en un caso concreto, ¿cómo decides cuál de los dos está equivocado, en vez de asumir que el humano siempre tiene razón?
- **Recursos recomendados:** "Evaluating AI Agents" (DL.AI) — evaluación por componente; Eugene Yan, "Task-Specific LLM Evals that Do & Don't Work"; O'Reilly, "What We Learned from a Year of Building with LLMs".
- **El quiebre de intuición:** el instante donde el estudiante, tras confiar en su primer juez LLM por ser "automático y objetivo", mide su acuerdo real contra criterio humano y descubre que está cerca del azar en los casos más sutiles.

**N7.M4.T4 · Evaluación específica de RAG — faithfulness, context relevance, answer relevance**
- **Modalidad:** DOC-12.
- **Objetivo:** evalúa su propio sistema RAG de M2 con tres métricas separadas (patrón RAGAS) que distinguen fallo de recuperación de fallo de generación.
- **Prerrequisitos:** T3; M2.T7 (el sistema real a evaluar).
- **Competencias:** C-N7-01, C-N7-03.
- **Errores habituales:** medir solo "¿la respuesta final está bien?" sin poder diagnosticar si el fallo fue de recuperación o de generación — exactamente el antipatrón que motivó T2 de M2.
- **Modelo mental:** evaluar un RAG como **tres preguntas separadas, no una** — ¿lo recuperado es relevante? (context relevance), ¿la respuesta usa fielmente lo recuperado? (faithfulness), ¿la respuesta contesta la pregunta? (answer relevance) — cada una con instrumento propio.
- **Por qué:** existe porque un RAG sin esta separación es una caja negra que no se puede depurar, aunque falle visiblemente / ahora porque T3 ya dio un juez LLM validado / habilita T5-T6 (los guardrails y la síntesis final se apoyan en este diagnóstico).
- **Evidencia de dominio:** reporta las tres métricas de su propio RAG, y para al menos un caso de fallo real, diagnostica en cuál de las tres cayó el problema.
- **Práctica principal:** laboratorio DOC-12 — implementación de las tres métricas reference-free (RAGAS) contra el RAG real del estudiante; ejercicio de diagnóstico causal sobre casos reales.
- **Evaluación:** DOC-12 §2.13.
- **Pregunta ingenieril:** si tu context relevance es alto pero tu faithfulness es bajo, ¿qué te dice eso sobre dónde está el problema — y qué NO te dice?
- **Recursos recomendados:** Es et al., "RAGAS: Automated Evaluation of Retrieval Augmented Generation", arXiv:2309.15217 (paper académico primario, converge con DL.AI "Evaluating AI Agents").

**N7.M4.T5 · Guardrails de entrada y salida**
- **Modalidad:** DOC-12. **Encuadre defensivo estricto en todo el tema (§3.4), sin excepción.**
- **Objetivo:** implementa filtros de entrada y salida sobre su propio sistema, distinguiendo inyección directa de indirecta, y prueba su robustez contra reformulación simple de sus propios casos ya identificados — nunca contra terceros.
- **Prerrequisitos:** T1 (mapa de riesgos), T4 (evaluación ya establecida contra la cual medir el efecto del guardrail).
- **Competencias:** C-N7-03.
- **Errores habituales:** tratar inyección directa e indirecta como el mismo problema con la misma mitigación; colocar contenido de terceros no confiable directamente en el system prompt en vez de aislarlo en `tool_result` declarado explícitamente como no confiable.
- **Modelo mental:** el guardrail como **un filtro con un modelo de amenaza específico, no una barrera genérica** — distinto según si el adversario es el propio usuario (directa) o un tercero cuyo contenido el sistema procesa (indirecta).
- **Por qué:** existe porque T1 ya mapeó qué riesgos aplican a la arquitectura del estudiante / ahora porque T4 ya da una línea base de calidad contra la cual medir si el guardrail rompe algo legítimo / habilita T6 (síntesis final).
- **Evidencia de dominio:** implementa filtro de entrada y de salida distintos; prueba la robustez de su propio guardrail con paráfrasis de un caso ya identificado como fuera de política, sobre su propio sistema, y reporta si generalizó o no.
- **Práctica principal:** laboratorio DOC-12 — *harmlessness screen* de entrada, filtro de salida (moderation API), aislamiento de contenido de terceros no confiable; prueba de robustez defensiva estrictamente acotada al propio sistema.
- **Evaluación:** DOC-12 §2.13, con el encuadre defensivo verificado explícitamente como parte de la rúbrica.
- **Pregunta ingenieril:** ¿qué información legítima podría bloquear tu propio guardrail por error, y cómo lo comprobarías sin esperar a que un usuario real se queje?
- **Recursos recomendados:** Anthropic "Mitigate jailbreaks and prompt injections" y "Reduce hallucinations"; OpenAI "Safety best practices"; Unit 42, "Deceptive Delight" (patrón de evasión por camuflaje, citado únicamente como conocimiento defensivo).

**N7.M4.T6 · Síntesis integrada y cierre — puente al design doc del capstone**
- **Modalidad:** DOC-12.
- **Objetivo:** redacta la sección de evaluación y seguridad de su propio design doc, con evidencia propia generada en T1-T5, nunca con afirmaciones genéricas.
- **Prerrequisitos:** T1-T5.
- **Competencias:** C-N7-03, C-N7-04.
- **Errores habituales:** tratar evaluación y seguridad como un anexo del diseño, no como parte constitutiva de él (patrón "Cross-cutting concerns" documentado en la práctica real de design docs).
- **Modelo mental:** la sección de seguridad/evaluación de un design doc como **una defensa con evidencia adjunta**, no una declaración de intenciones — cada afirmación remite a un número o un caso real producido en M4.
- **Por qué:** existe porque cierra el nivel exigiendo que el estudiante conecte cuatro módulos en un solo argumento defendible, no cuatro entregas sueltas / ahora porque T1-T5 ya produjeron toda la evidencia necesaria / habilita directamente la defensa del capstone.
- **Evidencia de dominio:** puede defender, con su propia tabla de métricas y su propio acuerdo humano-juez, por qué su sistema es razonablemente seguro y evaluado — nunca con "funciona bien".
- **Práctica principal:** laboratorio de síntesis DOC-12 — redacción de la sección "Cross-cutting concerns" del design doc con los cinco elementos: métricas de RAG obtenidas, validación del propio juez, riesgos OWASP aplicables y por qué, guardrails implementados y su prueba de robustez, y qué queda fuera de alcance y por qué.
- **Evaluación:** DOC-12 §2.13 completo, cierra M4 y todo N7 con repetición desde cero sin guía + pregunta metacognitiva.
- **Pregunta ingenieril:** si un ingeniero senior leyera solo esta sección de tu design doc, sin ver tu código, ¿confiaría en que evaluaste tu sistema con rigor? ¿Qué le faltaría para confiar más?
- **Idea universal:** "mi sistema es seguro" no es una afirmación defendible — solo lo es "medí esto, con este método, y obtuve este resultado, y esto es lo que decidí dejar fuera".

## 6. Proyecto de nivel (Columna vertebral V1) — declaración de alcance, no diseño detallado

Por DOC-10 §8 y `docs/mision-n7.md`: **sistema RAG operativo de extremo a extremo** (el mismo sistema construido progresivamente en M2.T7, evaluado en M4, con fine-tuning opcional de M3 si el estudiante decide incorporarlo a su arquitectura), con **design doc defendible** (redactado progresivamente, cierre real en M4.T6) y **evaluación propia** (M4.T4). Compuerta: examen + proyecto + defensa del design doc.

**Diseño detallado del capstone (hitos, ficha completa, banco de examen) se produce en el Paso 4-5 del flujo de 9 pasos** (`docs/guia-construccion-niveles.md` §13), después de tener M1-M4 construidos como contenido real en `index.html` — mismo orden que siguieron SYL-N1 y SYL-N3 (el capstone de N3, por ejemplo, no tuvo diseño concreto hasta después de que los 24 temas existieran). Escribirlo antes sería diseñar hitos sobre un sistema que todavía no existe en el Campus.

**Nota de arquitectura para N8-N10 (peso especial de este nivel, §2):** el design doc de M4.T6 debe documentarse con el cuidado adicional de que otro nivel, construido en paralelo, va a asumir su existencia y extenderlo — este requisito se traduce en el Paso 4 a una sección explícita de "puntos de extensión previstos" dentro del propio design doc, no solo una descripción del sistema tal como está hoy.

## 7. Herencias — borrador (a consolidar formalmente en el Paso 6-7, tras construir contenido real)

### 7.1 Herencia entrante desde SYL-N6 (borrador — N6 no existe todavía como documento, misma situación que enfrentó SYL-N3 con SYL-N2 en su momento equivalente)

Citado de `docs/mision-n7.md`, tratado explícitamente como borrador pendiente de confirmación cuando N6 congele, no como acuerdo ya cerrado:

| # | N6 debería sembrar (según alcance ya aprobado de DOC-10, no confirmado aún contra contenido real) | N7 lo presupone en |
|---|---|---|
| H-N7-01 (borrador) | Arquitectura de transformers, tokenización, capacidad de leer un paper de modelo de lenguaje con soltura | M1.T1 (contrato de la API, no se reintroduce qué es un modelo) y M3.T1 (descomposición de bajo rango sobre pesos de atención) |

**Verificado explícitamente (2026-07-21):** `academia-python-n5` y `academia-python-n6` no tienen `docs/syllabus/syl-n5.md` ni `syl-n6.md` todavía — no hay contenido real contra el cual confirmar esta herencia; se trata como borrador basado en el alcance de DOC-10, sin bloquear el avance de N7, mismo principio de "el Desarrollo nunca espera a la Validación" (DOC-11 §0bis, heredado).

### 7.2 Borrador de Herencias hacia SYL-N8 (a consolidar formalmente en el Paso 6-7 de este mismo syllabus)

| # | N7 siembra | N8 deberá recoger |
|---|---|---|
| H-N8-01 (borrador) | Columna vertebral V1: RAG operativo completo, con arquitectura documentada en design doc con "puntos de extensión previstos" | N8 la extiende a V2 agéntica (agentes, tool calling, orquestación) — no se reconstruye desde cero |
| H-N8-02 (borrador) | Disciplina de evaluación con juez LLM validado (M4.T3) y evaluación por componente (M4.T4) | N8.M5 (Fiabilidad — modos de fallo de agentes) reutiliza el mismo principio de medir en vez de asumir, aplicado a bucles/herramientas/costes de agentes |
| H-N8-03 (borrador) | Encuadre defensivo de guardrails/riesgos (M4.T5, OWASP LLM Top 10) | N8.M5 (riesgos de mal uso de agentes) extiende el mismo mapa de amenazas a un sistema con más autonomía (LLM06 Excessive Agency, no central en N7, se vuelve central en N8) |
| H-N8-04 (borrador) | Disciplina de credenciales y control de costes reales (M1) | Todo N8-N10 hereda la misma disciplina de ⚠️ costo real explícito, sin relajación |

**Nota:** estas herencias se consolidan formalmente en el Paso 6-7, verificadas contra el contenido REAL de M1-M4 construido (no contra esta intención de diseño), exactamente como hizo SYL-N3 §9 con H-N4-01…06.

---

*Fin del Paso 1 (Diseño del syllabus). Entregado para checkpoint y aprobación del Director antes de iniciar el Paso 2 (construcción módulo por módulo en `index.html`, empezando por N7.M1).*
