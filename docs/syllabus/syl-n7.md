# SYL-N7 — Syllabus del Nivel 7 · LLM Engineering

## Control del documento (conforme a DOC-00 §15.4)

| Campo | Valor |
|---|---|
| **Document Key** | SYL-N7 · Tier T2 |
| **Versión / Estado** | **1.0.0-candidato · reabierto para reconciliación (Paso 10)** · Flujo institucional de 9 pasos completo (`docs/guia-construccion-niveles.md` §13): investigación pedagógica + syllabus (Paso 1) → M1-M4 construidos en `index.html`, **201 objetos día/laboratorio reales** (Paso 2-3) → capstone `n7et4` + compuertas + banco de examen (Paso 4-5) → Paso 9a (auditoría de coherencia desde SYL-N8 real + Herencias Declaradas finales, §7) → auditoría integral con 4 auditores independientes (`docs/informes/n7-auditoria-integral.md`, 10 hallazgos: 5 aplicados, 2 retractadas por una revisión posterior que las encontró ya resueltas en código, 1 informativa cross-nivel activa, 2 nuevas) → Informe Final de Nivel (`docs/informes/n7-informe-final-de-nivel.md`, cifras de horas/objetos ahora desactualizadas, ver §6.6 ítem 4). **Reservas abiertas** (§6.6): (1) H-N8-05, redundancia de tool calling con N8, arbitraje cross-ventana; (2) reconciliación de horas/objetos de §6.5 debe rehacerse contra el conteo real de 201 objetos, no 31; (3) 82 de 404 `hints[0]` con código literal en vez de pista conceptual, pendientes de corrección mecánica. Ninguna bloquea que un estudiante complete N7 preparado para N8. A la espera del veredicto definitivo del Director. |
| **Autoridad de origen** | DOC-10 §8 (interior de N7) · DOC-00 14.8.3 · DOC-01 (C-N7-01…05) |
| **Depende de** | DOC-10 §8 (mapa, alcance ya aprobado) · DOC-00 (§13, §14, §16, 17.6) · DOC-01 · DOC-02 (instrumentos) · DOC-03 (método) · **DOC-12 (documento gobernante principal de este nivel — DOC-12 dominante, no la excepción, ver `docs/mision-n7.md`)** · DOC-11 (para las porciones conceptuales Pyodide de M2/M3/M4) · SYL-N1 §M4/M5 (precedente más cercano de espíritu DOC-12 completo) · SYL-N3 (plantilla estructural de ficha pedagógica) · **Herencia entrante borrador de SYL-N6 (no existe todavía como documento — N4-N6 se construyen en paralelo, ver §7.1)** |
| **Produce / desarrolla** | La estructura docente completa de N7: fichas pedagógicas por tema (M1-M4), diseño de la Columna vertebral V1 (proyecto de nivel — RAG operativo de extremo a extremo), y el borrador de Herencias Declaradas hacia SYL-N8 |
| **Estándar de calidad** | El mismo de SYL-N1/N2/N3: *"Si otro profesor excepcional impartiera este nivel utilizando únicamente el syllabus, ¿obtendría prácticamente la misma calidad formativa?"* |
| **Historial** | **0.1.0-draft (2026-07-21): Documento de Diseño.** Decisión de credenciales fijada por el Director (key propia del estudiante desde el día 1 de M1, sin modo simulado — `docs/investigacion/n7-m1-manejo-credenciales.md`). Investigación pedagógica real de los 4 módulos completada en paralelo (WebFetch/WebSearch verificado, ~60 fuentes primarias distintas entre los 4 documentos): M1 corrigió el supuesto de que existiera un único curso DL.AI de streaming/costes (no existe, declarado honestamente) y verificó la asimetría real de roles OpenAI/Anthropic como conflicto cognitivo central; M2 corrigió el supuesto de "un curso DL.AI de RAG" a dos cursos reales con roles distintos, y seleccionó Qdrant sobre Chroma/Pinecone por comparación directa de documentación; M3 verificó con precisión de GB (tabla oficial del notebook TRL) qué modelos caben en una T4 gratuita de Colab, y corrigió dos hipótesis iniciales (la regla "alpha=2r" de LoRA no está respaldada por la fuente que se iba a citar; el ejercicio oficial de DPO de HF no corre en Colab gratuito); M4 corrigió "un curso DL.AI de Evals" a tres cursos reales, confirmó RAGAS y el OWASP LLM Top 10 2025 como fuentes citables, y encontró evidencia con cifra concreta (53.8-58.5% de precisión, casi azar) de que un juez LLM sin validar no es confiable. Este documento instancia esas cuatro investigaciones en fichas pedagógicas por tema, siguiendo la plantilla de SYL-N1/SYL-N3 con un campo nuevo (**Modalidad**, DOC-11/DOC-12 explícita por tema, exigida por la ficha de misión de N7). **Pendiente:** revisión y aprobación del Director; tras aprobación, Paso 2 (construcción módulo por módulo en `index.html`, empezando por M1); el capstone detallado, las compuertas y el banco de examen se diseñan en los Pasos 4-5, después de tener contenido real construido — mismo orden que siguieron SYL-N1/N3, nunca al revés. · **0.2.0-draft (2026-07-21): Paso 1 aprobado por el Director, con criterios adicionales** (foco en profundidad de RAG/memoria/evaluación/tool calling sobre amplitud de herramientas; cada laboratorio construye sobre el anterior como un único sistema evolutivo — la "Columna vertebral V1"; toda decisión tecnológica justificada con alternativas explícitas en el propio contenido). **M1-M4 construidos en `index.html`** (Paso 2-3): M1 (7 laboratorios DOC-12, credenciales desde T1), M2 (10 días/laboratorios, DOC-11 T1-T3 → DOC-12 T4-T7, con un bug real de chunking encontrado y corregido durante la verificación — separar por ". " consume el punto final de cada oración), M3 (7 días/laboratorios, modelo mental de LoRA en Pyodide antes de GPU real, LoRA/QLoRA/DPO en Colab T4 con modelos verificados por VRAM real), M4 (6 laboratorios, OWASP LLM Top 10 → reglas → LLM-as-judge validado → RAGAS → guardrails → design doc). Cada módulo verificado con `node --check` limpio, validación estructural completa (encontró y corrigió 2 bugs reales: un día Pyodide sin `ex:[]`, un campo `comprensión` con tilde no reconocido por el renderer), e ids únicos contra todo el Campus — 57 ids `n7` sin colisión. **Capstone `n7et4` + compuertas + banco de examen construidos** (Paso 4-5, este documento): 5 hitos integrando M1-M4 con el hallazgo explícito de que M3 admite aplicación real o descarte justificado como resultados igualmente válidos; 8 ítems de examen (2 por competencia C-N7-01…04, C-N7-05 verificada por artefacto) con 3 variantes cada uno, los numéricos verificados por ejecución real de Python. Sigue: Paso 6-7 (Herencias Declaradas finales) y Paso 8-9 (auditorías + Informe Final) antes de v1.0.0. |

---

## 1. Tabla resumen

| Módulo | Temas | Días/laboratorios reales (verificado contra `index.html`) | Modalidad dominante | Competencias |
|---|---|---|---|---|
| M1 · Inferencia y prompting | 4 (T2 se implementó como 2 laboratorios, ver §5) | 7 laboratorios | DOC-12 desde T1 (credenciales propias día 1) | C-N7-01, C-N7-03 |
| M2 · RAG completo | 7 | 10 días/laboratorios (6 Pyodide T1-T3 + 4 DOC-12 T4-T7) | Mixta: T1-T3 DOC-11 (conceptual) → T4-T7 DOC-12 (pipeline real) | C-N7-01, C-N7-04 |
| M3 · Fine-tuning y post-entrenamiento | 2 (T1 LoRA/QLoRA, T2 RLHF/DPO) | 7 días/laboratorios (1 Pyodide + 6 DOC-12) | DOC-12 (GPU real, Colab T4), con introducción matemática DOC-11 en T1.Día1 | C-N7-02 |
| M4 · Evals y seguridad | 6 | 6 laboratorios | DOC-12 (evalúa el RAG real de M2; introducción conceptual embebida en los pasos de T1/T2, no como tema Pyodide separado) | C-N7-03, C-N7-04 |
| Proyecto de nivel (Columna vertebral V1) | — | ~3 semanas (heurística, no cifra fija) | DOC-12 | Todas + C-N7-05 (inglés, READMEs) |

**Total M1-M4: 30 días/laboratorios + 1 capstone = 31 objetos en `LEVEL7`.** *Cifras actualizadas post-construcción (Paso 2-3), reemplazando la estimación orientativa original de este documento — ver §6.5 para la reconciliación real de horas contra la carga estimada de DOC-10 (~400h).*

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

**N7.M1.T2 · Streaming de respuestas y memoria conversacional**
- **Modalidad:** DOC-12. Construido como DOS laboratorios reales (`n7m1t2` Laboratorio 3 + `n7m1t2b` Laboratorio 4) — ajuste real de alcance frente al diseño original de este documento, corrección aplicada tras la auditoría integral: el tema agrupa dos habilidades relacionadas (cómo llega una respuesta, y cómo se acumula una conversación) que comparten el mismo objeto de mensajes pero merecían cada una su propio laboratorio completo con su propio error inducido en vivo.
- **Objetivo:** consume respuestas en streaming (SSE) de ambos proveedores, reconstruye el mensaje completo evento a evento, y calcula el uso de tokens real sin el error de acumulación (Laboratorio 3); y gestiona el historial de una conversación real con una estrategia de truncamiento/resumen medida en tokens reales, entendiendo que un modelo no tiene memoria propia entre llamadas (Laboratorio 4).
- **Prerrequisitos:** T1.
- **Competencias:** C-N7-01.
- **Errores habituales:** sumar el campo `usage` de cada evento `message_delta` como si fuera incremental cuando es acumulativo (Warning oficial de Anthropic); revisar solo el status code HTTP para detectar errores, cuando un error mid-stream llega como evento `error` después del 200 inicial; no manejar streams truncados que impiden leer el `finish_reason` real; dejar crecer el historial de una conversación sin ningún límite, asumiendo implícitamente que el modelo "recuerda" en vez de que el programa reenvía todo cada vez.
- **Modelo mental:** streaming como **la misma respuesta completa, entregada en fragmentos** — nunca un tipo de dato distinto, solo una forma distinta de recibir el mismo objeto; la "memoria" de una conversación como **el propio programa reenviando el historial completo en cada llamada**, nunca un estado que el modelo retiene por sí mismo.
- **Por qué:** existe porque la latencia percibida importa en producción (mostrar texto mientras se genera) y porque un sistema conversacional real necesita decidir qué hacer con un historial que crece sin límite / ahora porque T1 ya dio el objeto de respuesta completo que aquí se ve fragmentado, y porque M1.T4 (costes) necesita que el estudiante ya entienda que el historial es la fuente silenciosa más común de coste inesperado / habilita T3 (los bloques de `tool_use` también llegan en fragmentos vía `input_json_delta`) y M2 (donde la "memoria" externa consultable — RAG — resuelve el problema que la memoria conversacional de un solo turno no puede).
- **Evidencia de dominio:** reconstruye correctamente una respuesta completa a partir de sus eventos SSE; calcula el `usage` real de una sesión streamed sin caer en el error de acumulación; implementa y mide, con tokens reales, una estrategia de gestión de historial.
- **Práctica principal:** Laboratorio 3 (streaming) — primero la misma llamada sin streaming (objeto completo), después con `stream:true`, reconstrucción manual del mensaje; **error inducido en vivo (§2.5bis):** sumar manualmente el `usage` de cada `message_delta` y comparar contra el `usage` real. Laboratorio 4 (memoria conversacional) — conversación real de 8+ turnos con historial creciente, medición de tokens de entrada turno a turno, implementación de truncamiento y de resumen con el propio modelo; **error inducido en vivo (§2.5bis):** preguntar por un detalle ya truncado del historial y observar si el modelo lo admite o lo inventa.
- **Evaluación:** estándar DOC-12 en ambos laboratorios.
- **Pregunta ingenieril:** ¿qué decisiones de tu interfaz de usuario cambian si asumes que un stream puede truncarse a mitad de una palabra — y cómo lo comprobarías sin esperar a que le pase a un usuario real? ¿Qué le cuesta a tu sistema, en tokens reales, que un usuario tenga una conversación de 50 turnos en vez de 5?
- **Recursos recomendados:** streaming docs oficiales de ambos proveedores (fetcheadas en la investigación; sin curso DL.AI dedicado a streaming, ausencia declarada honestamente); ejemplo oficial resuelto de coste de sesión de Anthropic (reutilizado para el laboratorio de memoria conversacional).

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

## 6. Proyecto de nivel (Columna vertebral V1) — Paso 4-5: capstone, compuertas y banco de examen

Por DOC-10 §8 y `docs/mision-n7.md`: **sistema RAG operativo de extremo a extremo** (el mismo sistema construido progresivamente en M2.T7, evaluado en M4, con fine-tuning aplicado o conscientemente descartado de M3), con **design doc defendible** (redactado progresivamente, cierre real en M4.T6) y **evaluación propia** (M4.T4). Compuerta: examen + proyecto + defensa del design doc.

**Este diseño se produce ahora, en el Paso 4-5 del flujo de 9 pasos** (`docs/guia-construccion-niveles.md` §13), con M1-M4 ya construidos como contenido real en `index.html` (30 días/laboratorios) — mismo orden que siguieron SYL-N1 y SYL-N3, nunca al revés.

### 6.1 El capstone — diseño de síntesis (`n7et4` en `index.html`)

**Nombre:** *"Columna vertebral V1 — el sistema que puedes defender con evidencia"*. **Por qué esta forma y no otra:** el riesgo, el mismo que las auditorías de N1/N2/N3 ya encontraron en sus propios capstones, es que el proyecto se convierta en cuatro entregas independientes ("aquí mi M1, aquí mi M2..."). La corrección, igual que en niveles anteriores: el hito 2 exige explícitamente que M1 (llamar_modelo) y M2 (RAG) operen COMO UN SOLO sistema, no dos piezas sueltas; el hito 4 exige que la evaluación de M4 se aplique sobre ESE sistema integrado (hitos 2-3), nunca sobre ejemplos aislados de laboratorio.

**Decisión de diseño explícita, no presente en N1/N2/N3 — el hito 3 (M3) admite dos resultados válidos:** aplicar fine-tuning real al sistema, o descartarlo conscientemente con la misma evidencia y rigor que aplicarlo exigiría. Justificación: DOC-10 §8 describe M3 como "LoRA/QLoRA... y medición del efecto" — la medición es obligatoria, la aplicación al sistema final no lo es, porque un ingeniero real a veces decide correctamente que el fine-tuning no aporta a un caso de uso específico, y esa decisión, bien evidenciada, es tan válida pedagógicamente como la aplicación misma. Lo único inaceptable es omitir la decisión sin documentarla.

**Diferencia estructural frente a N3 (100% Pyodide): capstone con `flujoDeGit` real**, igual que N1/N2 — a diferencia de N3, N7 es DOC-12 dominante desde M1.T1, así que el capstone vive en un repositorio real desde el primer commit, con la misma disciplina de `.env`/`.gitignore` de M1.T1 aplicada al proyecto completo, no solo a los laboratorios sueltos.

**Verificación de síntesis (criterio adversarial aplicado en este paso):** ¿podría un estudiante completar esto entregando las cuatro piezas por separado, sin integrarlas? No — el hito 2 exige que la generación aumentada de M2 use la MISMA función `llamar_modelo()` de M1 (no una reimplementación de la llamada a la API), el hito 4 exige que las métricas de M4 se midan sobre el sistema de los hitos 2-3 (no sobre ejemplos sueltos de los laboratorios de M4), y el hito 5 exige que el design doc documente decisiones ya tomadas en los hitos 1-4, no una descripción genérica escrita al final.

### 6.2 Revisión de las compuertas — cobertura de competencias

| Instrumento | Qué verifica | Norma |
|---|---|---|
| **Examen** (banco rotable ≥3 variantes/ítem, NNR-02 — ver banco completo abajo) | Conocimiento operativo y capacidad de diagnóstico sobre las competencias C-N7-01…04 | DOC-02 |
| **Capstone (Columna vertebral V1)** | Síntesis real: M1-M4 integrados en un sistema propio, con evidencia real de evaluación y seguridad | OBJ-05 |
| **Defensa oral del design doc** | Comprensión real de trade-offs tecnológicos, decisiones de arquitectura, y honestidad sobre qué queda fuera de alcance | RM-05 |

**Cobertura de competencias — verificación explícita:**

| Competencia | Verificada por |
|---|---|
| C-N7-01 (RAG completo, extremo a extremo) | M1 completo (4 temas) + M2 completo (7 temas) + ítems 1-2 del banco de examen + Capstone hito 2 |
| C-N7-02 (fine-tuning LoRA/QLoRA con evaluación propia) | M3 completo (2 temas) + ítems 3-4 del banco de examen + Capstone hito 3 |
| C-N7-03 (diseña evaluaciones, aplica guardrails) | M4 completo (6 temas) + ítems 5-6 del banco de examen + Capstone hito 4 |
| C-N7-04 (design doc defendible) | M4.T6 + ítems 7-8 del banco de examen + Capstone hito 5 (defensa oral) |
| C-N7-05 (inglés profesional en READMEs — pista transversal 🇬🇧, no instrumento propio de la compuerta de nivel) | Verificado como checklist del capstone (el repositorio y el design doc del hito 5 se escriben en inglés) — mismo patrón que SYL-N1 declaró para sus pistas transversales: vive en el artefacto, no en un ítem de examen dedicado |

**Hallazgo de esta revisión:** a diferencia de C-N2-07 en SYL-N2 (competencia transversal sin instrumento propio, por diseño ya documentado) y en paralelo con ese mismo patrón, C-N7-05 no tiene ítem de examen dedicado — se verifica como propiedad del artefacto final (el design doc y el repositorio en inglés), consistente con cómo DOC-10 la describe ("Pista 🇬🇧 producción... Repos documentados en inglés").

### 6.3 Banco de examen — ítems rotables (≥3 variantes por ítem, NNR-02)

*Formato oral, con diagnóstico o cálculo en vivo — el examinador elige UNA variante por ítem al azar en cada aplicación, nunca las tres a la vez. Los ítems de cálculo (2, 3) dan sus propias tarifas/parámetros de ejemplo EN EL ENUNCIADO — nunca piden al estudiante recordar un precio real de mercado, consistente con el principio de M1.T4 de no hardcodear precios que caducan.*

**Ítem 1 (C-N7-01 · contrato de proveedor).** "Dado este fragmento de código que llama a la API de un proveedor, identifica si asume el contrato de OpenAI o de Anthropic, y qué falla exactamente si se usa con el otro proveedor sin adaptar."
- Variante A: código con `{"role":"system",...}` dentro del array `messages` → asume OpenAI; en Anthropic falla con error de validación (rol `system` no permitido dentro de `messages`).
- Variante B: código sin `max_tokens` en la llamada → asume un proveedor con default implícito; en Anthropic falla porque `max_tokens` es obligatorio, sin valor por defecto.
- Variante C: código con `system` como parámetro top-level (fuera de `messages`) → asume Anthropic; en OpenAI ese parámetro no es reconocido y el prompt de sistema se pierde silenciosamente, sin error visible.

**Ítem 2 (C-N7-01 · coste real).** "Calcula el coste de esta sesión, usando EXACTAMENTE las tarifas dadas en el enunciado (no uses ninguna tarifa de memoria)."
- Variante A: 10.000 tokens de entrada, 3.000 de salida, tarifa $3/millón entrada y $15/millón salida → coste = **$0.075**.
- Variante B: 50.000 tokens de entrada, 15.000 de salida, tarifa $2/millón entrada y $10/millón salida, sin caché → coste = **$0.25**.
- Variante C: mismo caso que B, pero con el 80% de los tokens de entrada servidos desde caché a $0.2/millón (el 20% restante a tarifa normal $2/millón) → coste = **$0.178**.

**Ítem 3 (C-N7-02 · parámetros LoRA).** "Para una capa de tamaño m×n con rango r, calcula los parámetros de la matriz completa, los de LoRA, y la razón entre ambos."
- Variante A: m=n=2048, r=4 → completos=**4.194.304**, LoRA=**16.384**, razón=**256.0**.
- Variante B: m=n=1024, r=16 → completos=**1.048.576**, LoRA=**32.768**, razón=**32.0**.
- Variante C: m=n=8192, r=8 → completos=**67.108.864**, LoRA=**131.072**, razón=**512.0**.

**Ítem 4 (C-N7-02 · diagnóstico de fine-tuning).** "Dado este síntoma de un entrenamiento LoRA/QLoRA, diagnostica la causa más probable y cómo la confirmarías."
- Variante A: la pérdida de entrenamiento sigue bajando pero la de validación empieza a subir → sobreajuste, probablemente rango demasiado alto para el tamaño del dataset (M3.T1.Día2).
- Variante B: el entrenamiento con QLoRA es inestable o la pérdida no converge → probablemente se omitió `prepare_model_for_kbit_training()` antes de aplicar LoRA (M3.T1.Día3).
- Variante C: el adaptador entrenado produce resultados distintos tras recargarlo desde disco → probablemente se usó `get_peft_model()` para recargar en vez de `PeftModel.from_pretrained()` (M3.T1.Día2, PEFT Troubleshooting).

**Ítem 5 (C-N7-03 · diagnóstico de RAG con tres métricas).** "Dadas estas tres métricas (context relevance, faithfulness, answer relevance) para un caso de fallo, diagnostica en qué eslabón está el problema."
- Variante A: context relevance baja, faithfulness alta, answer relevance baja → problema de **recuperación** (el contexto correcto nunca llegó).
- Variante B: context relevance alta, faithfulness baja → problema de **generación** (el modelo ignoró o mal-usó el contexto correcto que sí recuperó).
- Variante C: context relevance alta, faithfulness alta, answer relevance baja → la respuesta es fiel al contexto pero **no contesta la pregunta hecha** — un tercer tipo de fallo, distinto de los dos anteriores.

**Ítem 6 (C-N7-03 · mapeo de riesgo OWASP).** "Dado este escenario, identifica la categoría del OWASP Top 10 for LLM Applications más relevante y por qué."
- Variante A: un chunk indexado en la base vectorial contiene una instrucción oculta que el modelo seguiría si no está aislada → **LLM01, inyección indirecta**.
- Variante B: un usuario logra que el modelo repita su propio prompt de sistema completo → **LLM07, System Prompt Leakage**.
- Variante C: el sistema afirma un dato falso con aparente seguridad, y otro proceso automatizado actúa sobre esa afirmación sin verificarla → **LLM09, Misinformation**.

**Ítem 7 (C-N7-04 · trade-off tecnológico defendible).** "Justifica una decisión tecnológica de tu propio sistema frente a la alternativa que descartaste, y describe el escenario donde elegirías la alternativa en su lugar."
- Variante A: Qdrant vs. Chroma para la vector DB principal.
- Variante B: sentence-transformers local vs. una API de embeddings de pago.
- Variante C: `target_modules` acotado a proyecciones de atención vs. una lista ampliada que incluya capas MLP en LoRA.

**Ítem 8 (C-N7-04 · defensa de arquitectura ante un cambio).** "Si [una condición del sistema cambiara], ¿qué parte de tu arquitectura actual lo soportaría sin cambios, y cuál necesitaría rediseño?"
- Variante A: el corpus de tu RAG se duplica en tamaño de la noche a la mañana.
- Variante B: tu proveedor de modelo principal sube su precio 5× de un día para otro.
- Variante C: N8 necesita que tu sistema soporte múltiples tools encadenadas en una sola conversación, no solo una tool por turno.

**Nota de diseño:** 8 ítems cubren C-N7-01…04 con 2 ítems cada una (C-N7-05 verificada por artefacto, §6.2), 3 variantes cada ítem (24 variantes totales) — los ítems numéricos (2, 3) verificados por ejecución real de Python antes de fijarse aquí, misma disciplina que rigió cada `check()` de M1-M4; los ítems de diagnóstico (1, 4, 5, 6) verificados contra los casos reales y las fuentes primarias ya citadas en las fichas de M1-M4, no inventados para el examen. El examinador puede generar variantes adicionales para los ítems numéricos cambiando los valores, siempre que re-verifique por ejecución real antes de usarlos.

### 6.4 Nota de arquitectura para N8-N10 (peso especial de este nivel, §2)

El design doc de M4.T6/Capstone hito 5 se documenta con el cuidado adicional de que otro nivel, construido en paralelo, va a asumir su existencia y extenderlo — de ahí la sección obligatoria de "puntos de extensión previstos" dentro del propio design doc (M4.T6, paso 3; Capstone hito 5), no solo una descripción del sistema tal como está hoy.

### 6.5 Reconciliación real de horas contra la carga estimada de DOC-10 (~400h/~4 meses)

*La ficha de misión de N7 pidió explícitamente verificar esta cifra "contra tu propio diseño real" — verificación que no se había hecho hasta la auditoría integral (`docs/informes/n7-auditoria-integral.md`). Se hace aquí, con números reales, en vez de dejarla pendiente en silencio.*

**Cálculo real, extraído directamente de los campos `duracionTotal` de `index.html`:** los 23 laboratorios `modalidad:"real"` de M1-M4 suman **2.275 minutos (~38 horas)** de tiempo guiado (contexto + ejecución + error inducido + mini laboratorio + desafío + evaluación, per DOC-12 §1 — no solo "tiempo de clase"). Los 7 días Pyodide (M2.T1-T3, M3.T1.Día1) no llevan campo `duracionTotal` explícito (no es un campo del esquema DOC-11); estimados por densidad de contenido real (teoría + 4-5 ejercicios + reto/retoFinal en días de cierre) en ~60-90 min cada uno, añaden **~8-9 horas**. **Subtotal de contenido guiado de M1-M4: ~46-47 horas.**

**Honestidad metodológica — esto NO es toda la carga real del nivel, y aquí está explícitamente lo que falta, no asumido en silencio:**
- **El proyecto de nivel (Capstone, §6.1) no está incluido** en las ~47h de arriba — a ~25h/semana (dedicación pactada del proyecto, ver CLAUDE.md), sus "~3 semanas" heurísticas representan **~75h adicionales**, la pieza más grande de la carga real de N7.
- **Consumo de bibliografía externa citada** (mismo principio que N3 §3.7 ya aplicó a su propia reconciliación): los recursos 🟢/🔵/🟣/⭐ citados en las 30 fichas de M1-M4 incluyen al menos 3 cursos cortos de DeepLearning.AI (~1-2h cada uno), 2 papers primarios completos (Lost in the Middle, DPO — ~30-45 min cada uno con las secciones clave), y documentación oficial extensa de Anthropic/OpenAI/PEFT/TRL/Qdrant/RAGAS — estimado en **~15-20 horas** de lectura real, no capturadas en `duracionTotal`.
- **Tiempo real de entrenamiento en GPU (M3)** — algunas fichas de M3 ya incluyen una franja de "entrenar" dentro de su propio `duracionTotal` (ej. "30-40 min" en `n7m3t1b`), pero el tiempo real de cola de GPU en Colab gratuito (variable, documentado explícitamente como tal en la propia ficha) puede exceder ese estimado sin que el estudiante pueda controlarlo.
- **Iteración y depuración real** — un ingeniero (o estudiante) reproduciendo estos laboratorios por primera vez normalmente necesita más de un intento por error real encontrado (los propios errores inducidos en vivo son solo la primera capa) — la práctica de la industria sugiere multiplicadores de 1.5-3× sobre el tiempo "guiado" para este tipo de trabajo, no capturados aquí por falta de datos propios de ejecución real (§6, registro de observaciones, pendiente hasta que el nivel se imparta con un estudiante real).

**Suma honesta con los componentes identificados:** ~47h (M1-M4 guiado) + ~75h (capstone) + ~15-20h (bibliografía) ≈ **~140h identificadas explícitamente** — todavía notablemente por debajo de las ~400h de DOC-10, incluso sumando los componentes reales que el cálculo de `duracionTotal` no captura. **Conclusión de esta reconciliación:** no se puede afirmar honestamente que las ~400h estén verificadas contra el diseño real. Se declara esto como una **reserva nombrada y acotada** (mismo patrón que SYL-N3 §10 usó para sus propias reservas) — no bloquea que un estudiante complete N7 y esté preparado para N8, pero merece decisión explícita del Director: (a) revisar la cifra de DOC-10 a la baja con evidencia real, (b) ampliar deliberadamente el contenido de algún módulo si se considera insuficiente para 400h de aprendizaje genuino, o (c) aceptar que la cifra de DOC-10 siempre incluyó un margen amplio de práctica no guiada/exploración propia del estudiante que ningún syllabus puede medir de antemano.

### 6.6 Otras reservas nombradas de esta revisión (auditoría integral, `docs/informes/n7-auditoria-integral.md`)

1. ~~Prompt engineering como disciplina propia... queda relegado a lectura opcional, nunca a ejercicio evaluado~~ — **retractada tras revisión independiente posterior (Paso 10, ventana de coherencia continua N5-N12).** Esta reserva ya no refleja el contenido real de `index.html`: `n7m1t1m` (Día 11, "Construye un bloque few-shot como estructura de datos") y `n7m1t1n` (Día 12, "Transforma un prompt para pedir chain-of-thought") son ejercicios dedicados y EVALUADOS (con `check()` y `hints`) sobre exactamente las dos técnicas que esta reserva declaraba ausentes. No queda claro si estos días se añadieron después de que la auditoría integral escribiera este hallazgo o si la auditoría simplemente no los alcanzó a ver — de cualquier forma, la reserva es hoy objetivamente falsa contra el código y se retracta, no se re-abre.
2. ~~M1.T1 no explora un proveedor sin tarjeta de crédito...~~ — **retractada por el mismo motivo.** `n7m1t1` (explicación + paso 2, "Ruta alternativa sin tarjeta de crédito") ya nombra explícitamente Google AI Studio y Groq como candidatos históricos sin método de pago, con instrucción explícita de verificar la vigencia real en el flujo de registro antes de confiar en la lista — exactamente la mitigación que esta reserva recomendaba. Se retracta.
3. **H-N8-05 (§7.2): redundancia real de tool calling entre N7.M1.T3 y N8.M1.T2**, no resuelta — pendiente de arbitraje del Director entre ventanas paralelas, no de N7 unilateralmente. Sigue abierta.
4. **[NUEVA, Paso 10] Reconciliación de horas/objetos de §6.5 necesita rehacerse desde cero.** Una revisión independiente posterior (no un auditor de N7) recalculó `LEVEL7` directamente contra el código (no contra el resumen de este documento) y encontró **201 objetos día/laboratorio reales, no 31** (~177 días Pyodide nunca contados en la cifra "7 días Pyodide, ~8-9h" de §6.5) — la conclusión de §6.5 ("~140h identificadas, notablemente por debajo de las ~400h de DOC-10") queda invalidada por un conteo de entrada equivocado, no por un argumento nuevo. La cifra real de horas es plausiblemente mucho más cercana a (o por encima de) las ~400h de DOC-10, pero no se recalcula aquí — se declara como reserva nueva y se pide al Director decidir si amerita recomputar §6.5 por completo antes del veredicto. Ver también el hallazgo relacionado de que el barrido automatizado de `hints[0]` que declaró "0 violaciones" (Hallazgo 1 de la auditoría integral) solo cubrió ~26 de los 404 arrays `hints` reales del nivel — 82 violaciones reales quedan pendientes de corrección.

---

*Paso 4-5 completo, con 3 reservas abiertas (§6.6, tras retractar 2 reservas obsoletas en el Paso 10) — mismo patrón que SYL-N3 usó antes de su propio veredicto. Ninguna bloquea que un estudiante complete N7 y esté preparado para N8.*

## 7. Paso 9a · Auditoría de coherencia desde SYL-N8 y Herencias Declaradas finales

*Análisis desde el nivel siguiente: ¿qué presupone la descripción real de N8 que todavía no existe en N7? A diferencia de cuando este documento se escribió (Paso 1), **SYL-N6 y SYL-N8 ya existen como documentos reales** (verificado 2026-07-21: `academia-python-n6/docs/syllabus/syl-n6.md`, candidato a v1.0.0 sin reservas; `academia-python-n8/docs/syllabus/syl-n8.md`, 0.3.0-draft) — este análisis se hace contra esos documentos reales, no contra el alcance abstracto de DOC-10 como en el Paso 1.*

### 7.1 Herencia entrante desde SYL-N6 (consolidada contra el documento final de N6, ya congelado)

N6 alcanzó v1.0.0-candidato con Herencias Declaradas finales explícitas hacia N7 (`syl-n6.md` §9, H-N7-01…06) — se adoptan aquí tal como N6 las declaró, verificadas contra el contenido REAL que N7 construyó (no contra la intención original de este documento):

| # | N6 sembró (verificado en el contenido real de N6, no en su intención de diseño) | Cómo lo usa N7 (verificado contra el M1-M4 real construido) |
|---|---|---|
| H-N7-01 | M1 de N6 completo: atención multi-cabeza, positional encoding, bloque transformer causal, implementados y verificados a mano | N7.M1 usa "modelo de lenguaje"/"transformer" como herramienta ya entendida — ningún laboratorio de M1 reexplica el mecanismo interno, todos van directo al contrato de la API (roles, streaming, tool calling, costes) |
| H-N7-02 | M2.T3-T4 de N6: similitud coseno, vecino más cercano, geometría real de embeddings (verificada con GloVe/tiktoken en Colab) | N7.M2.T3 reutiliza literalmente la misma similitud coseno como mecanismo central de recuperación semántica — verificado: el ficha de M2.T3 no reintroduce qué es un embedding, parte directo de vectores de juguete a similitud |
| H-N7-03 | M3.T4 + M2.T1/T4 de N6: estimador de parámetros, costo por token medido con tiktoken real | N7.M1.T4 (gestión de costes) presupone que el estudiante ya sabe razonar sobre el trade-off tamaño/costo — confirmado: M1.T4 enseña el MÉTODO de cálculo de costo de API (nuevo, correcto), no el concepto de que el costo depende del tamaño (ya instalado) |
| H-N7-04 | M4 de N6 completo: disciplina de lectura de los 4 papers fundacionales, contribución/método/supuestos/límites | N7.M3 (LoRA/QLoRA/DPO) presupone esta disciplina — verificado: M3.T1/T2 citan y piden leer papers primarios (Hu et al. 2021, Dettmers et al. 2023, Rafailov et al. 2023) sin ningún andamiaje adicional de "cómo leer un paper", asumiendo que N6.M4 ya lo instaló |
| H-N7-05 | Capstone de N6: frontera Pyodide/Colab declarada explícitamente desde el diseño (hito 1) | N7 presupone que el estudiante ya negoció "qué vive en el Campus y qué sale a un entorno real" — confirmado: M1.T1 (primer laboratorio DOC-12 de N7) no reexplica qué es un laboratorio de entorno real desde cero, asume la fluencia básica de N1.M5 y la experiencia de N6 |
| H-N7-06 | Capstone de N6, hito 3: entrenar en Colab, graficar pérdida, comparar antes/después de un modelo preentrenado real | N7.M3.T1.Día4 (evaluación propia antes/después) repite exactamente este flujo a mayor escala — confirmado como la MISMA disciplina, no una habilidad nueva; el laboratorio de N7 lo cita implícitamente pero podría citarlo explícitamente (mejora menor identificada, no aplicada por bajo impacto) |

**Prerrequisitos ocultos verificados — ninguno encontrado.** Las 6 herencias de N6 se confirman satisfechas por el contenido real de N7.M1-M4, sin ningún caso donde N7 asuma algo de N6 que N6 no haya construido de verdad.

### 7.2 Herencias Declaradas finales hacia SYL-N8 (consolidadas contra el M1-M4 real de N7, y contrastadas con el SYL-N8 real ya existente — no solo hacia adelante en el vacío)

| # | N7 siembra (verificado en el contenido real, M1-M4 + Capstone) | N8 deberá recoger |
|---|---|---|
| H-N8-01 | Columna vertebral V1: RAG operativo completo (M2, 10 días/laboratorios) + inferencia real (M1) + fine-tuning aplicado o descartado con evidencia (M3) + evaluación y guardrails con evidencia real (M4), documentado en el design doc con "puntos de extensión previstos" (M4.T6, Capstone hito 5) | N8 la extiende a V2 agéntica — confirmado contra `syl-n8.md` real: N8 §3.1 ya declara que hereda "RAG operativo... evaluación básica..." de N7, aunque con su propio vocabulario de "capas" (ver hallazgo 7.3.1 abajo) |
| H-N8-02 | Disciplina de evaluación con juez LLM validado (M4.T3, con cifra real de acuerdo humano-juez) y evaluación por componente (M4.T4, RAGAS) | N8.M5 (Fiabilidad) puede reutilizar el mismo principio de medir en vez de asumir, aplicado a bucles/herramientas/costes de agentes — no verificado explícitamente en `syl-n8.md` M5 (construido en paralelo, no confirmado) |
| H-N8-03 | Encuadre defensivo de guardrails/riesgos (M4.T1/T5, OWASP LLM Top 10, con LLM06 Excessive Agency ya mapeado aunque de bajo impacto en un sistema sin autonomía todavía) | Confirmado: `syl-n8.md` M5 declara el mismo encuadre defensivo explícito ("igual que N7.M4, mismo mandato explícito") — coherencia verificada, no solo asumida |
| H-N8-04 | Disciplina de credenciales y control de costes reales, desde M1.T1 (límite de gasto antes de la primera llamada) | Confirmado explícitamente en `syl-n8.md` §3 principio 4: "Manejo de credenciales — heredado de N7, no reintroducido" — coherencia real verificada, cita textual de N8 reconociendo la herencia |
| H-N8-05 *(nueva — hallazgo real de este Paso 9a, no anticipado en el diseño original de N7)* | **N7.M1.T3 ya cubre tool calling de extremo a extremo** (round-trip completo definir→tool_use→ejecutar→tool_result, con Anthropic y OpenAI, incluido el caso documentado de Sonnet alucinando un parámetro faltante) — una ampliación de este syllabus más allá de la frase literal de DOC-10 §8 ("APIs de modelos, streaming, structured output, costes"), justificada porque tool calling y structured output comparten mecanismo (bloques de contenido estructurado) y porque M2 lo reutiliza como interfaz de recuperación | **Hallazgo de posible redundancia real, no solo teórica:** `syl-n8.md` N8.M1.T2 ("Tool calling — el ciclo pedir→ejecutar→devolver") se redacta como introducción fresca del mecanismo, sin citar a N7.M1.T3 como precedente, y su propia sección de herencia entrante (§3.1) NO menciona tool calling entre lo que hereda de N7. Esto es una inconsistencia real entre dos documentos de la Academia, verificada por lectura directa de ambos, no una suposición — **recomendación explícita para el Director:** decidir si N8.M1.T2 se reescribe para reconocer y extender N7.M1.T3 (evitando repetición real del mismo ciclo pedir→ejecutar→devolver), o si se mantiene deliberadamente como refuerzo con valor añadido distinto (ID de correlación, generalización a interfaz `ModelProvider` multi-proveedor) — cualquiera de las dos es defendible, pero hoy es una omisión no decidida, no una decisión tomada |

### 7.3 Hallazgos adicionales de coherencia (verificados por lectura directa de SYL-N6 y SYL-N8 reales, no inferidos)

1. **N8 describe una "AI Systems Platform" de 7 capas (Modelos, Herramientas, Memoria, Orquestación, Evaluación/Observabilidad, Seguridad/Gobernanza, Despliegue) que afirma "N6 siembra y N9-N12 seguirán extendiendo"** (`syl-n8.md` §3, principio 2). **Verificado por lectura directa de `syl-n6.md` completo: N6 no menciona esta arquitectura de capas en ningún lugar** — ni el término "AI Systems Platform" ni "7 capas" aparecen en el documento de N6. DOC-10 (Tier T1, autoridad real) tampoco la menciona — su lenguaje canónico es "columna vertebral" con versiones V1(N7)/V2(N8)/local(N10)/final(N12), y DOC-09 (que DOC-10 cita como "especificación completa del proyecto columna vertebral, versiones y contratos entre niveles") **no existe todavía como documento** en este repositorio. **Conclusión de este hallazgo:** el marco de "7 capas" parece ser una elaboración propia de la ventana que construyó N8, no una arquitectura ya sembrada por N6 ni especificada por DOC-09 (inexistente). Esto NO bloquea a N7 — funcionalmente, lo que N8 llama "capa de Memoria ya sembrada como V1" y "capa de Evaluación ya sembrada" se corresponde 1:1 con M2 y M4 de N7 real — pero es una discrepancia de nomenclatura/arquitectura entre documentos hermanos que **el Director debería reconciliar** antes de que N9-N12 hereden un vocabulario ("capas") que ni DOC-10 ni N6 realmente definieron. Documentado aquí porque el Paso 9a de N7 fue el primer punto de la cadena donde esta lectura cruzada ocurrió — no se corrige unilateralmente desde N7, que no tiene autoridad sobre el contenido de N8.
2. **Verificado, sin hallazgo:** `syl-n8.md` confirma explícitamente (§3, principio 4, y §3.1) el manejo de credenciales de N7 (límite de gasto, API key como variable de entorno) y el encuadre defensivo de M4 — dos casos donde la coherencia entre documentos hermanos SÍ se verificó correcta, no solo asumida.

**Nota metodológica:** a diferencia del Paso 9a de N3 (que no tenía SYL-N4 real contra el cual verificar, y trabajó contra la intención de DOC-10), este Paso 9a de N7 tuvo la ventaja real de SYL-N6 congelado y SYL-N8 en 0.3.0-draft — permitiendo una verificación de coherencia cruzada genuina, con hallazgos reales (H-N8-05, hallazgo 7.3.1) en vez de solo herencias declaradas hacia el vacío. Este es el mismo principio de "el Desarrollo nunca espera a la Validación" aplicado en la otra dirección: la validación tampoco espera a que todo el mapa esté congelado para producir hallazgos útiles.

---

*Paso 9a completo. Sigue: Paso 9b (auditoría adversarial), Informe Final de Nivel, y v1.0.0.*
