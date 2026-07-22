# SYL-N8 — Syllabus del Nivel 8 · AI Systems

## Control del documento (conforme a DOC-00 §15.4)

| Campo | Valor |
|---|---|
| **Document Key** | SYL-N8 · Tier T2 |
| **Versión / Estado** | **0.1.0-draft** · Paso 1 del flujo institucional de 9 pasos (diseño de syllabus) completo — investigación real verificada (`docs/investigacion/n8-bibliografia-oficial.md`), decisiones de arquitectura documentadas (`docs/investigacion/n8-arquitectura-plataforma.md`), fichas pedagógicas de M1-M5 completas. Pendiente: revisión módulo por módulo del Director, construcción real en `index.html`, capstone, compuertas, auditorías, Herencias Declaradas finales, v1.0.0 |
| **Autoridad de origen** | DOC-10 §8 (interior de N8) · DOC-01 (C-N8-01…04) · decisiones institucionales del Director sobre arquitectura de plataforma y agnosticismo de proveedor (2026-07-21) |
| **Depende de** | DOC-10 §8 · DOC-00 · DOC-01 · DOC-02 · DOC-03 · DOC-12 v1.0.0 (documento gobernante principal — N8 es DOC-12-dominante) · **SYL-N7 (Herencias entrantes — borrador, N7 se construye en paralelo, no congelado, ver §3.1)** |
| **Produce / desarrolla** | La estructura docente completa de N8: fichas pedagógicas por tema (instanciadas como laboratorios DOC-12, no días Pyodide), proyecto de nivel (AI Systems Platform, V2 de la columna vertebral), compuerta, Herencias Declaradas hacia SYL-N9 |
| **Estándar de calidad** | El mismo de SYL-N1/N2/N3: *"Si otro profesor excepcional impartiera este nivel utilizando únicamente el syllabus, ¿obtendría prácticamente la misma calidad formativa?"* |
| **Historial** | 0.1.0-draft (2026-07-21): Documento de Diseño — investigación real verificada por WebFetch sobre dominios oficiales (MCP, LangGraph, tool use de Anthropic/OpenAI, cursos DL.AI, papers arxiv sobre fallos de agentes — ver bibliografía completa en `n8-bibliografia-oficial.md`); 2 decisiones institucionales del Director confirmadas y documentadas (arquitectura de plataforma reutilizable N6-N12 por capas con interfaces estables, en vez de una aplicación vertical; agnosticismo de proveedor para N6-N12 con excepción única justificada de MCP); 22 temas diseñados sobre 5 módulos, todos DOC-12 salvo introducciones conceptuales acotadas. |

---

## 1. Tabla resumen

| Módulo | Temas | Modalidad | Competencias | Quiebre de intuición |
|---|---|---|---|---|
| M1 · Agentes y tool calling | 5 | DOC-12 (T1 con intro conceptual breve) | C-N8-01 | T1: un "agente" no es una tecnología nueva — es un LLM al que se le da permiso de ejecutar un bucle, y ese permiso es la única diferencia real con un chatbot |
| M2 · Orquestación | 5 | DOC-12 | C-N8-01, C-N8-02 | T1: el checkpointing no es una feature de conveniencia — es la primitiva única de la que emergen memoria, recuperación y HITL simultáneamente |
| M3 · Memoria y planning | 4 | DOC-12 | C-N8-01 | T2: la memoria perfecta (recordar todo) es peor que la memoria diseñada — un agente que nunca olvida acumula contexto irrelevante hasta degradar sus propias decisiones |
| M4 · Multimodalidad y voz | 3 | DOC-12 | C-N8-01 | T3: la multimodalidad no añade "otro tipo de input" — colapsa la frontera entre "leer una instrucción" y "observar el mundo", y esa frontera es la que definía qué era un chatbot |
| M5 · Fiabilidad | 5 | DOC-12 | C-N8-03, C-N8-04 | T1: un bucle infinito de agente casi nunca es un bug de programación — es una consecuencia emergente de la interacción entre lógica del agente, framework y entorno, invisible mirando cualquier función por separado |
| Proyecto de nivel (V2) | — | DOC-12 (`flujoDeGit`) | Todas | Integración: extender la AI Systems Platform con orquestación, memoria, multimodalidad y fiabilidad medida sobre la V1 (RAG) de N7 |

**Densidad** *(instrucción directa del Director para N4-N12, §8 de la guía maestra — "más sustancia real, nunca cifra prometida")*: 22 temas frente a los ~24 de N3, pero cada tema es un **laboratorio DOC-12 completo de 13 secciones** (objetivo, contexto, requisitos, explicación conceptual, ejecución paso a paso con error inducido en vivo, comprensión, checkpoints, diagnóstico de errores de 5 columnas, mini-laboratorio, desafío, buenas prácticas, recursos, evaluación) — sustancialmente más denso por tema que un "día" Pyodide de N3, porque un laboratorio de entorno real integra en un solo objeto lo que en Pyodide se reparte en 3 días. La duración desglosada exacta se fija por laboratorio individual (DOC-12 §1), no como cifra global prometida de antemano — regla explícita de §8 de la guía, ya incumplida una vez por N3 y que este nivel no repite.

## 2. Identidad del nivel

Por referencia a DOC-10 §8: **N8 · AI Systems** es donde el estudiante deja de *usar* un LLM (N6-N7: inferencia, prompting, RAG) y empieza a *diseñar sistemas que actúan* — la distinción que Anthropic formaliza en "Building Effective Agents" (workflows de código predefinido vs. agentes que dirigen su propio proceso, ver bibliografía §5) es, de hecho, la columna vertebral conceptual de todo el nivel. Entrada: N7 Superado (API real, RAG operativo, evaluación de sistemas LLM — competencias que M1 presupone sin reintroducir, ver §3.1). Salida: examen + proyecto + defensa de arquitectura en rol de **Arquitecto** → habilita N9 (Sistemas Distribuidos, donde la orquestación de N8 se despliega a escala real).

Si N7 enseñó a construir un sistema que *responde* con conocimiento externo (RAG), N8 enseña a construir un sistema que *actúa* — ejecuta herramientas, coordina múltiples agentes, recuerda entre sesiones, procesa voz e imagen, y — la competencia que distingue a este nivel de un tutorial de LangGraph — **mide su propia fiabilidad y reconoce sus modos de fallo característicos** en vez de asumir que "funciona en la demo" es suficiente.

## 3. Principios de ejecución

1. **Principio "DOC-12 dominante"** *(igual que N7, a diferencia de N4-N6)*: aplicando el criterio de frontera de DOC-12 §5, los 22 temas de N8 responden "sí" a "¿el estudiante sale del navegador?" — instalación real de librerías (LangGraph, SDKs de MCP), llamadas a APIs reales con estado, procesos con memoria persistente entre pasos. La única excepción parcial es la introducción conceptual de M1.T1 (workflows vs. agentes como distinción, sin código todavía) y M5.T1 (taxonomía de fallos, lectura de papers antes de reproducir un fallo real) — ambas siguen viviendo dentro de un laboratorio DOC-12 (con sus 13 secciones), simplemente su "ejecución paso a paso" es más conceptual que las demás. Ningún tema de N8 es 100% Pyodide.

2. **Arquitectura de plataforma en capas, no aplicación vertical** *(decisión institucional del Director, documentada íntegra en `n8-arquitectura-plataforma.md`)*: el proyecto de nivel no resuelve un caso de uso — extiende la **AI Systems Platform** (7 capas con interfaces estables: Modelos, Herramientas, Memoria, Orquestación, Evaluación/Observabilidad, Seguridad/Gobernanza, Despliegue) que N6 siembra y N9-N12 seguirán extendiendo. N8 es responsable de madurar las capas de Orquestación (siembra: `Graph`) y Memoria (extensión: episódica+planning), extender Herramientas (MCP real) y Modelos (adaptador multimodal), y sembrar Seguridad/Gobernanza (mitigación de fallos agénticos medida). Cada laboratorio que toca una capa produce, además de su evidencia DOC-12 normal, un **ADR (Architecture Decision Record)** corto documentando qué interfaz se extendió y por qué no se rompió la anterior — instrumento nuevo de este nivel, sin equivalente en N0-N7, que sirve directamente a C-N8-02 (defensa de arquitectura).

3. **Agnosticismo de proveedor, con excepción única y declarada (MCP)** *(decisión institucional del Director)*: M1 y M2.T1/T4 enseñan cada mecanismo con **al menos 2 proveedores de referencia comparados explícitamente** (Anthropic y OpenAI para tool calling — ver bibliografía §3), nunca uno solo presentado como universal. La interfaz `ModelProvider` (capa 1) es el instrumento técnico de este principio: cada laboratorio que la toca exige implementar ≥2 adaptadores reales contra la misma interfaz. MCP (M2.T3) es la única excepción — se enseña como estándar de facto, no como opción entre varias, con la justificación completa en `n8-arquitectura-plataforma.md` §2.

4. **Manejo de credenciales — heredado de N7, no reintroducido** *(resuelve la pregunta que mi propia ficha de misión señalaba como abierta)*: N7.M1 ya presupone que el estudiante configuró su propia API key con las advertencias de coste real de DOC-12 §2.5/§3 (herencia entrante, ver §3.1 — tratada como borrador hasta que N7 congele). N8 no vuelve a enseñar "cómo obtener una API key" — cada laboratorio de N8 que llama a un modelo real asume esa fontanería ya resuelta y se concentra en el mecanismo nuevo (tool calling, orquestación, memoria). La única credencial nueva que N8 introduce es la de un **MCP server** (M2.T3) y, si aplica, la de un proveedor de voz/imagen (M4) — ambas declaradas con advertencia de coste explícita en su propia ficha de control DOC-12 §1, nunca implícitas.

5. **Verificación empírica antes de cada laboratorio** *(heredado sin cambio de DOC-12 §0bis y del principio de N1-N3 aplicado ahora a entorno real)*: todo comportamiento de LangGraph/MCP/APIs de proveedor que se vaya a enseñar como "así funciona" se verifica ejecutándolo de verdad antes de escribir el laboratorio — no se asume por la documentación. Ejemplo ya encontrado en la investigación: la URL de referencia `langchain-ai.github.io/langgraph/reference/supervisor/` no carga contenido real pese a aparecer indexada — cualquier ejemplo de código de M2 se prueba contra el paquete real instalado, no se copia de una página que podría estar desactualizada.

6. **Densidad de laboratorio, no de "días"** *(adaptación del principio de §8 de la guía a modalidad DOC-12)*: la palanca de densidad de N8 no es "más días por tema" (eso es un concepto de DOC-11/Pyodide) sino **más temas cuando el concepto real lo sostiene** — M1 y M2 (5 temas cada uno) llevan más peso porque presuposicionalmente son la base de todo lo demás (tool calling y orquestación son prerrequisito de memoria, multimodalidad y fiabilidad); M4 (multimodalidad) queda en 3 temas porque su alcance real, verificado contra DOC-10 §8, es más acotado que orquestación.

### 3.1 Herencia entrante (borrador — N7 se construye en paralelo, no congelado)

De N7 (según el alcance ya aprobado en DOC-10 §8, no una versión congelada real): manejo de API keys con advertencias de coste ya interiorizadas; llamadas a un modelo real (inferencia, streaming, structured output); RAG operativo de extremo a solución (capa de Memoria de largo plazo, ya sembrada como V1); evaluación básica de sistemas LLM (capa de Evaluación, ya sembrada). M1 de N8 presupone todo esto sin reintroducirlo — construye tool calling y el bucle de agente directamente encima. **Pendiente de confirmación cuando N7 congele**, mismo principio de "el Desarrollo nunca espera a la Validación" (DOC-11 §0bis) — no bloquea el avance de N8.

## 4. Estructura y grafo local

Troncal: `M1 → M2 → M3 → M4 → M5`. M2 depende realmente de M1 (orquestar múltiples llamadas con tools requiere entender primero una sola llamada con tools). M3 depende de M2 (memoria persistente entre pasos solo tiene sentido una vez que existe un grafo de pasos que la use — LangGraph resuelve ambas con la misma primitiva de checkpointing, ver bibliografía §2). M4 es débilmente dependiente (multimodalidad extiende la capa de Modelos, no la de Orquestación) pero se secuencia después de M2/M3 porque el proyecto de nivel necesita un agente orquestado con memoria antes de que darle voz/visión aporte algo real que depurar. M5 cierra el nivel por diseño — es imposible enseñar fiabilidad de agentes antes de que existan agentes reales con memoria y herramientas que puedan fallar de las formas que M5 enseña a reconocer.

**Nota de implementación** *(mismo texto institucional que rige todo SYL-Nx desde EVT-034):* el Campus presenta un recorrido lineal único sin bifurcaciones de navegación — la secuencia M1→M2→M3→M4→M5 es la única real, sin alternancia.

## 5. Fichas pedagógicas por tema

*Cada ficha instancia un laboratorio DOC-12 (§1-§2 de ese documento) — el 10º campo de la plantilla heredada de SYL-N1/N2/N3 se adapta: "práctica principal" señala directamente qué produce el laboratorio como evidencia operativa (no un ejercicio Pyodide), y "evaluación" remite a las 13 secciones DOC-12 en vez de RM-0X. Los 5 estándares narrativos de N1-N3 se aplican con la misma adaptación que syl-n3 §5: **el quiebre de intuición** (universal, uno por módulo, ver §1), **el supuesto que destruye**, **la limitación humana que compensa** y **lo que deja de sorprender** allí donde apliquen genuinamente — nunca forzados; **la garantía que el sistema adquiere** declarada presente en este nivel a diferencia de N3, porque la plataforma SÍ es un sistema persistente con contrato estable (ver capa por capa en `n8-arquitectura-plataforma.md`).*

### M1 · Agentes y tool calling

> **La gran pregunta de este módulo: ¿qué convierte a un modelo que solo genera texto en un sistema que puede actuar sobre el mundo?**

**N8.M1.T1 · El bucle del agente — de completions a acciones**
- **Objetivo:** distingue un *workflow* (código que orquesta llamadas a un LLM en una ruta predefinida) de un *agente* (el LLM dirige dinámicamente su propio proceso), y explica por qué esa distinción determina el coste y el riesgo de un sistema, no solo su arquitectura.
- **Prerrequisitos:** N7 completo (inferencia real, streaming) — ver Herencia §3.1.
- **Competencias:** C-N8-01.
- **Errores habituales:** llamar "agente" a cualquier sistema que use un LLM, incluidos workflows deterministas; asumir que "más autónomo" es siempre "mejor"; no anticipar que la autonomía agentic implica coste variable e impredecible por diseño, no un bug a corregir.
- **Modelo mental:** el agente como **un LLM al que se le da permiso de ejecutar un bucle** (observar → decidir → actuar → observar el resultado) — la única diferencia mecánica real con un chatbot de una sola respuesta.
- **Por qué:** existe porque toda la arquitectura de N8-N12 (orquestación, memoria, multiagente) es una elaboración de este bucle básico / ahora porque N7 ya dio inferencia y RAG, las piezas que el bucle va a coordinar / habilita T2-T5 y M2 completo.
- **Evidencia de dominio:** dado un sistema descrito (ej. "clasifica este email y muévelo a una carpeta" vs. "resuelve este ticket de soporte investigando lo que haga falta"), decide si es workflow o agente y justifica con el criterio de autonomía de decisión, no de complejidad aparente.
- **Práctica principal (laboratorio DOC-12 N8.M1.T1):** implementar el mismo problema dos veces — una vez como workflow con ruta fija (`if/elif` explícito sobre la salida del LLM) y otra como agente con bucle real (el LLM decide el siguiente paso) — y medir empíricamente la diferencia de coste (tokens) y de pasos entre ambos.
- **Evaluación:** las 13 secciones DOC-12, con énfasis en §2.4 (explicación conceptual, modelo mental predictivo) dado que este tema es la introducción conceptual del nivel.
- **Pregunta ingenieril:** si tu sistema en producción necesita un comportamiento 100% predecible y auditable, ¿por qué "usar un agente" sería la decisión de arquitectura equivocada, incluso si el agente es técnicamente más capaz?
- **El quiebre de intuición de M1:** el instante donde "agente" deja de sonar a una tecnología nueva y se vuelve, mecánicamente, "un chatbot con permiso de bucle" — construido viendo el mismo prompt y el mismo modelo producir un workflow o un agente según quién controla la siguiente acción, no según qué modelo se use.

**N8.M1.T2 · Tool calling — el ciclo pedir→ejecutar→devolver**
- **Objetivo:** define una herramienta con su schema JSON, implementa el ciclo completo (enviar tools → recibir petición de uso → ejecutar → devolver resultado → continuar) con un proveedor de referencia, e interpreta cada campo de la respuesta del modelo.
- **Prerrequisitos:** T1.
- **Competencias:** C-N8-01.
- **Errores habituales:** olvidar que el modelo *pide* ejecutar la herramienta pero nunca la ejecuta él mismo — quien la ejecuta es siempre el código del desarrollador; devolver el resultado sin el identificador de correlación correcto (`tool_use_id`/`tool_call_id`), rompiendo el hilo de la conversación; diseñar un schema ambiguo que el modelo interpreta de forma distinta a la intencionada.
- **Modelo mental:** la herramienta como **un contrato que el modelo puede invocar pero nunca ejecutar** — el modelo solo produce la intención estructurada (qué llamar, con qué argumentos); el desarrollador retiene el control total de la ejecución real.
- **Por qué:** existe porque es el mecanismo que rompe la frontera "el LLM solo genera texto" — le da al modelo una forma estructurada de pedir una acción del mundo real / ahora porque T1 ya estableció el bucle que este tema instancia con su primer paso concreto / habilita T3-T5 y toda la orquestación de M2.
- **Evidencia de dominio:** dado un schema de herramienta mal diseñado (ambiguo o incompleto), identifica qué mal uso del modelo va a producir antes de ejecutarlo.
- **Práctica principal (laboratorio N8.M1.T2, error inducido en vivo obligatorio DOC-12 §2.5bis):** implementar una herramienta real (ej. consulta a una API pública sin autenticación, o cálculo local) con el SDK de un proveedor de referencia (Anthropic); el error inducido: omitir deliberadamente el campo de correlación al devolver el resultado y presenciar el fallo real de la conversación.
- **Evaluación:** 13 secciones DOC-12; diagnóstico de errores (§2.8) centrado en errores de schema y de correlación.
- **Pregunta ingenieril:** si tu herramienta puede fallar de dos formas (error de red vs. "no encontré resultados"), ¿por qué devolverle al modelo la MISMA cadena de error en ambos casos es una decisión de diseño peligrosa?

**N8.M1.T3 · Tool calling agnóstico — dos proveedores, una interfaz**
- **Objetivo:** implementa la interfaz `ModelProvider` con dos adaptadores reales (Anthropic y OpenAI) para la misma herramienta, y documenta las diferencias de wire format sin que el código que usa la interfaz necesite saber cuál proveedor está detrás.
- **Prerrequisitos:** T2.
- **Competencias:** C-N8-01, C-N8-02 (primera evidencia real de arquitectura desacoplada).
- **Errores habituales:** filtrar detalles específicos de un proveedor (ej. la forma exacta de un bloque `tool_use`) fuera del adaptador, acoplando el resto del sistema a una API concreta; asumir que ambos proveedores devuelven el resultado de la misma forma (uno usa bloques de contenido tipados, el otro un mensaje de rol `tool` separado).
- **Modelo mental:** el adaptador como **un traductor de un solo sentido** — el resto del sistema habla siempre el mismo idioma (`ModelProvider`); el adaptador es el único código que sabe que existe Anthropic u OpenAI.
- **Por qué:** existe porque es la materialización técnica del principio agnóstico institucional (§3.3) — sin este tema, "agnóstico de proveedor" sería una declaración sin evidencia / ahora porque T2 ya dio un tool calling funcional con un proveedor, este lo generaliza / habilita el resto de la plataforma (cualquier capa que llame a un modelo pasa por esta interfaz desde ahora).
- **Evidencia de dominio:** dado un tercer proveedor no visto (ej. un modelo local vía Ollama, adelanto de N10), predice qué método de la interfaz `ModelProvider` necesitaría implementar y qué NO debería cambiar en el resto del sistema.
- **Práctica principal (laboratorio N8.M1.T3):** implementar `ModelProvider` con 2 adaptadores reales contra la misma herramienta de T2, con un test que ejecuta el mismo caso de uso intercambiando el adaptador por configuración (sin tocar el código de la aplicación) — primer ADR del nivel.
- **Evaluación:** 13 secciones DOC-12; buenas prácticas (§2.11) centrado en el principio de inversión de dependencias.
- **Pregunta ingenieril:** si en 2028 aparece un tercer proveedor dominante que ninguno de los dos adaptadores actuales soporta, ¿qué parte exacta de tu sistema necesitarías tocar, y por qué esa superficie de cambio pequeña es la prueba real de que la arquitectura funciona?

**N8.M1.T4 · Ejecución segura de herramientas**
- **Objetivo:** valida los argumentos que el modelo propone antes de ejecutarlos, maneja errores de ejecución de forma que el modelo pueda recuperarse, y reconoce cuándo una herramienta requiere aprobación humana antes de ejecutarse.
- **Prerrequisitos:** T2, T3.
- **Competencias:** C-N8-01, C-N8-03 (primera siembra de fiabilidad, madurada en M5).
- **Errores habituales:** confiar ciegamente en que los argumentos del modelo son válidos porque "el schema ya los restringe" (el schema restringe la forma, no la seguridad del valor — ej. una ruta de archivo sintácticamente válida puede seguir siendo peligrosa); dejar que una excepción de la herramienta tumbe todo el proceso del agente en vez de devolvérsela al modelo como resultado de error recuperable.
- **Modelo mental:** la herramienta como **una frontera de confianza** — todo lo que cruza desde el modelo hacia el mundo real (argumentos) y desde el mundo real hacia el modelo (resultados/errores) se valida en esa frontera, nunca se asume seguro.
- **Por qué:** existe porque el modelo puede alucinar argumentos plausibles pero incorrectos, y una herramienta con efectos reales (escribir un archivo, hacer una petición HTTP) no perdona ese error como perdonaría texto generado / ahora porque T2-T3 ya dieron el ciclo funcional que aquí se hace seguro / habilita M2 (orquestar múltiples herramientas exige que cada una sea segura individualmente) y siembra M5.
- **Evidencia de dominio:** dado un log real de una llamada a herramienta con un argumento sospechoso, decide si el sistema debió bloquearla, ejecutarla con advertencia, o pedir aprobación humana — y justifica con el criterio de reversibilidad de la acción (mismo principio que DOC-12 §2.5 exige para ⚠️ en acciones irreversibles).
- **Práctica principal (laboratorio N8.M1.T4):** implementar una capa de validación (JSON Schema + reglas de negocio) delante de una herramienta con efecto real (ej. escribir en un archivo local dentro de un sandbox), con manejo de errores que el modelo puede leer y usar para reintentar con argumentos corregidos.
- **Evaluación:** 13 secciones DOC-12; checklist de categorías de error de §2.8 revisada explícitamente contra este laboratorio.
- **Pregunta ingenieril:** si le das a un agente una herramienta que puede borrar archivos, ¿qué tendría que ser verdad sobre tu validación para que confíes en dejarlo actuar sin aprobación humana en cada llamada?

**N8.M1.T5 · Laboratorio integrador — cierra M1**
- **Objetivo:** integra T1-T4 en un agente único con 3+ herramientas reales, intercambiable entre 2 proveedores, con validación y manejo de errores en cada herramienta.
- **Prerrequisitos:** T1-T4.
- **Competencias:** C-N8-01, C-N8-02, C-N8-03.
- **Práctica principal (laboratorio N8.M1.T5, mini-proyecto DOC-12 §2.9 + desafío §2.10):** un agente que resuelve una tarea real de varios pasos (ej. investigar un tema combinando una API de búsqueda + una de cálculo + escritura de un resumen a archivo) usando el `ModelProvider` de T3, con las herramientas de T2/T4; el desafío final: el mismo agente debe seguir funcionando cuando se cambia el proveedor por configuración, sin tocar la lógica del agente.
- **Evaluación:** 13 secciones DOC-12 completas; repetición desde cero sin guía (§2.13) obligatoria.
- **Idea universal (cierre de M1):** un agente no es una arquitectura mágica — es un bucle de decisión (T1) más un contrato de acción (T2) desacoplado del proveedor que lo interpreta (T3) y protegido en su frontera con el mundo real (T4). Todo lo que M2-M5 añaden es una forma de coordinar, recordar o vigilar múltiples instancias de este mismo bucle.
- **La limitación humana que compensa M1:** la imposibilidad de que un humano supervise cada decisión de una secuencia larga de pasos en tiempo real — el tool calling con validación automatizada (T4) permite que el sistema opere a una velocidad y escala que la supervisión manual no podría sostener, sin renunciar a la seguridad en los puntos que sí importan.

### M2 · Orquestación

> **La gran pregunta de este módulo: ¿cómo coordinas varios pasos (o varios agentes) sin perder el hilo de qué pasó y por qué?**

**N8.M2.T1 · Grafos de estado — StateGraph, nodes, edges**
- **Objetivo:** modela un proceso de varios pasos como un grafo de estados (LangGraph), define nodes como funciones que leen/escriben un estado compartido, y compila un grafo con edges fijos y condicionales.
- **Prerrequisitos:** M1 completo.
- **Competencias:** C-N8-01.
- **Errores habituales:** modelar el proceso como una secuencia de llamadas a función normal, sin aprovechar el estado compartido — perdiendo exactamente el beneficio de persistencia/inspección que el grafo aporta; olvidar que el grafo debe compilarse (`.compile()`) antes de invocarse, y que ese paso realiza verificaciones estructurales reales, no es un formalismo vacío.
- **Modelo mental:** el grafo de estados como **una máquina de pasos con memoria compartida visible** — cada node lee lo que dejaron los anteriores y escribe lo que los siguientes van a leer, en vez de pasar datos a ciegas de función en función.
- **Por qué:** existe porque coordinar más de un paso de decisión de un agente (o más de un agente) sin una estructura explícita produce código de control de flujo cada vez más frágil / ahora porque M1 ya dio el bucle de un solo agente, que aquí se convierte en un node reutilizable / habilita T2-T5 completos.
- **Evidencia de dominio:** dado un proceso descrito en prosa (ej. "investiga, luego resume, y si el resumen es muy largo, resume otra vez"), dibuja el grafo correspondiente (nodes y edges, incluida la condición) antes de escribir código.
- **Práctica principal (laboratorio N8.M2.T1):** implementar el proceso anterior como `StateGraph` real (LangGraph instalado, verificado empíricamente contra la versión fijada), con un edge condicional que decide si repetir un node.
- **Evaluación:** 13 secciones DOC-12; comprensión (§2.6) con preguntas sobre qué pasaría si dos nodes intentan escribir el mismo campo del estado.
- **Pregunta ingenieril:** si tu grafo tiene un ciclo real (un node que puede volver a ejecutarse a sí mismo indirectamente), ¿qué pregunta tendrías que responder ANTES de desplegarlo para no descubrir un bucle infinito en producción? (siembra directa hacia M5).
- **El quiebre de intuición de M2:** el instante donde el checkpointing (T2) deja de sentirse como "guardar el estado por si acaso" y se revela como la ÚNICA primitiva de la que emergen memoria conversacional, recuperación ante fallos y aprobación humana — construido mostrando las tres funcionando con el mismo mecanismo subyacente, no como tres features separadas.

**N8.M2.T2 · Persistencia y checkpointing**
- **Objetivo:** persiste el estado del grafo entre invocaciones usando un checkpointer real, recupera una ejecución interrumpida, y pausa el grafo para aprobación humana con `interrupt()`.
- **Prerrequisitos:** T1.
- **Competencias:** C-N8-01, C-N8-03.
- **Errores habituales:** usar el checkpointer en memoria (`InMemorySaver`) y sorprenderse de que el estado desaparece al reiniciar el proceso — confundir "el mecanismo existe" con "está persistido en disco/DB"; no usar el mismo `thread_id` entre invocaciones relacionadas, perdiendo la continuidad que el checkpointer existe para dar.
- **Modelo mental:** el checkpoint como **una fotografía completa del estado, tomada en cada paso** — recuperar una ejecución no es "adivinar dónde se quedó", es cargar la última fotografía y continuar desde ahí exactamente.
- **Por qué:** existe porque un sistema agéntico real se interrumpe (falla, se reinicia, espera aprobación humana) y sin persistencia real cada interrupción pierde todo el trabajo previo / ahora porque T1 ya dio el grafo cuyo estado se va a persistir / habilita M3 completo (memoria de largo plazo se construye sobre esta misma primitiva) y la aprobación humana de M5.
- **Evidencia de dominio:** dado un escenario de fallo a mitad de ejecución (ej. el proceso se cae en el paso 3 de 5), explica exactamente qué necesita el checkpointer para reanudar en el paso 3 sin repetir 1-2.
- **Práctica principal (laboratorio N8.M2.T2, error inducido en vivo):** migrar el grafo de T1 de `InMemorySaver` a `SqliteSaver` real, matar el proceso a mitad de una ejecución larga deliberadamente, y reanudarlo desde el checkpoint persistido; añadir un `interrupt()` antes de la herramienta más sensible del agente de M1.T5.
- **Evaluación:** 13 secciones DOC-12; puntos de verificación (§2.7) en cada transición de estado del checkpointer.
- **Pregunta ingenieril:** si dos usuarios distintos usan el mismo agente al mismo tiempo, ¿qué pasaría si ambos compartieran el mismo `thread_id` por error, y por qué el checkpointing por sí solo no resuelve el aislamiento entre usuarios?

**N8.M2.T3 · MCP — el protocolo de conexión a herramientas y datos**
- **Objetivo:** explica la arquitectura Host/Client/Server de MCP, la distinción entre tools (model-controlled), resources (application-driven) y prompts (user-controlled), y conecta un MCP server real a un agente.
- **Prerrequisitos:** M1 completo; T1.
- **Competencias:** C-N8-01, C-N8-02.
- **Errores habituales:** tratar MCP como "otra forma de definir tools" sin notar que también estandariza resources y prompts, con reglas de control distintas para cada una; asumir que un MCP server es intrínsecamente seguro por ser un estándar — la superficie de confianza sigue siendo del servidor concreto que se conecta, no del protocolo.
- **Modelo mental:** MCP como **un contrato de quién tiene autoridad para disparar qué** — no solo "cómo se pasan datos", sino si la decisión de usar algo la toma el modelo (tools), la aplicación (resources) o el usuario (prompts).
- **Por qué:** existe porque conectar un agente a herramientas y datos externos sin un estándar produce integraciones ad-hoc no reutilizables entre proyectos — MCP es, verificado en la investigación (bibliografía §1), la generalización a nivel de protocolo de red del mismo patrón de tool calling ya aprendido en M1 / ahora porque M1 ya dio la intuición de "el modelo pide, el código ejecuta" que MCP formaliza y estandariza / habilita T4 (multi-agente con herramientas compartidas vía MCP) y el proyecto de nivel.
- **Evidencia de dominio:** dado un caso nuevo (ej. "el usuario quiere insertar una plantilla de informe predefinida" vs. "el agente necesita consultar el inventario actual"), clasifica correctamente si corresponde a tool, resource o prompt de MCP y justifica con el criterio de autoridad de decisión.
- **Práctica principal (laboratorio N8.M2.T3):** conectar un MCP server real (ej. uno de los servers de referencia oficiales, o uno propio mínimo) al agente de M1, verificando el intercambio real `initialize` → negociación de capacidades → `tools/list` → `tools/call` con inspección del tráfico JSON-RPC real, no solo confiando en que "funcionó".
- **Evaluación:** 13 secciones DOC-12; explicación conceptual (§2.4) con el modelo mental de autoridad de decisión verificado por predicción antes de cada acción del server.
- **Pregunta ingenieril:** si conectas tu agente a un MCP server de un tercero que no controlas, ¿qué tendría que declarar ese server (y qué tendrías que verificar tú) antes de confiarle una tool con efectos reales?

**N8.M2.T4 · Patrones multi-agente — supervisor y swarm**
- **Objetivo:** implementa un sistema de al menos 2 agentes especializados coordinados con el patrón supervisor (jerárquico) y explica el trade-off frente al patrón swarm (par-a-par).
- **Prerrequisitos:** T1-T3.
- **Competencias:** C-N8-01, C-N8-02.
- **Errores habituales:** crear "múltiples agentes" que en realidad son un solo prompt dividido artificialmente en dos, sin que cada uno tenga responsabilidad y herramientas propias distintas; elegir swarm por "parece más avanzado" sin que el problema real tenga la naturaleza descentralizada que swarm supone.
- **Modelo mental:** supervisor como **una cadena de mando con un punto de auditoría único**; swarm como **un equipo de pares que se pasa el control directamente** — la elección es un trade-off de gobernanza (trazabilidad centralizada) contra flexibilidad (especialización dinámica sin cuello de botella), no una jerarquía de sofisticación.
- **Por qué:** existe porque tareas reales de varios pasos a menudo requieren especialización (un agente investigador, uno crítico, uno ejecutor) que un solo agente generalista maneja peor / ahora porque T1-T3 ya dieron grafo, persistencia y herramientas estandarizadas, las tres piezas que un sistema multi-agente necesita coordinar / habilita T5 y el proyecto de nivel completo.
- **Evidencia de dominio:** dado un problema real (ej. "investigar un tema, verificar cada afirmación contra una fuente, y escribir el informe final"), decide si conviene supervisor o swarm y justifica con el criterio de auditoría vs. flexibilidad, no con preferencia estética.
- **Práctica principal (laboratorio N8.M2.T4):** implementar el mismo sistema de 2-3 agentes especializados dos veces — una con `create_supervisor()` (patrón oficial LangGraph) y otra con handoffs estilo swarm — y comparar empíricamente trazabilidad y número de pasos.
- **Evaluación:** 13 secciones DOC-12; buenas prácticas (§2.11) centrado en cuándo la industria prefiere cada patrón (referencia real: mecanismos documentados oficialmente por LangChain, bibliografía §2).
- **Pregunta ingenieril:** si tu sistema swarm produce un resultado incorrecto, ¿qué información necesitarías reconstruir para auditar qué agente decidió qué, y por qué esa pregunta es estructuralmente más difícil de responder en swarm que en supervisor?

**N8.M2.T5 · Laboratorio integrador — cierra M2**
- **Objetivo:** integra T1-T4 en un sistema orquestado real con grafo de estados, persistencia, MCP y coordinación multi-agente.
- **Prerrequisitos:** T1-T4.
- **Competencias:** C-N8-01, C-N8-02.
- **Práctica principal (laboratorio N8.M2.T5, mini-proyecto + desafío):** extender el agente de M1.T5 a un sistema orquestado — grafo con checkpointing real, al menos una herramienta vía MCP, y coordinación supervisor entre 2 agentes especializados; desafío: inyectar una interrupción real (matar el proceso) a mitad de una ejecución multi-agente y demostrar recuperación completa desde el checkpoint.
- **Evaluación:** 13 secciones DOC-12 completas; segundo ADR del nivel (extensión de la capa Orquestación).
- **Idea universal (cierre de M2):** orquestar no es "llamar al LLM varias veces" — es dar a un proceso de varios pasos (o varios agentes) una memoria compartida explícita (T1), la capacidad de sobrevivir a su propia interrupción (T2), un estándar para conectar herramientas y datos (T3), y una topología de control deliberada (T4). Sin las cuatro piezas, "orquestación" es solo un bucle más grande y más frágil.
- **Lo que deja de sorprender (M2):** que un sistema multi-agente "recuerde" una conversación larga o "se recupere" de un fallo deja de sentirse como una capacidad emergente misteriosa — es, mecánicamente, la misma primitiva de checkpointing (T2) aplicada en cada punto donde el sistema necesita seguir sabiendo dónde estaba.

### M3 · Memoria y planning

> **La gran pregunta de este módulo: ¿qué debería recordar un agente entre pasos y entre sesiones, y qué debería, deliberadamente, olvidar?**

**N8.M3.T1 · Memoria de largo plazo — Stores y la extensión de RAG**
- **Objetivo:** implementa memoria persistente cross-thread (Stores de LangGraph) distinguiéndola de la memoria de corto plazo (checkpointing, M2.T2), y la conecta con el sistema RAG heredado de N7 (V1 de la columna vertebral).
- **Prerrequisitos:** M2 completo; RAG de N7 (herencia, §3.1).
- **Competencias:** C-N8-01.
- **Errores habituales:** confundir memoria de largo plazo (persiste entre conversaciones/usuarios distintos) con memoria de corto plazo (persiste dentro de un `thread_id`) — son mecanismos distintos en LangGraph, no el mismo con más duración; tratar el RAG de N7 como algo aparte de "la memoria del agente" en vez de reconocerlo como la instancia más madura que ya existe de memoria de largo plazo.
- **Modelo mental:** el Store como **la memoria que sobrevive a la conversación que la creó** — mientras el checkpoint recuerda "qué pasó en ESTE hilo", el Store recuerda "qué aprendió el sistema, disponible para cualquier hilo futuro".
- **Por qué:** existe porque un agente que reinicia su conocimiento en cada conversación no puede acumular contexto sobre un usuario o dominio a lo largo del tiempo — la diferencia entre una herramienta y un colaborador real / ahora porque M2 ya dio persistencia de corto plazo, este tema la extiende deliberadamente / habilita T2-T4.
- **Evidencia de dominio:** dado un caso (ej. "recuerda las preferencias del usuario entre sesiones" vs. "recuerda el resultado del paso 2 de esta tarea"), clasifica correctamente qué mecanismo de memoria corresponde.
- **Práctica principal (laboratorio N8.M3.T1):** conectar un Store real al agente de M2.T5, alimentándolo con el índice RAG heredado de N7, y verificar que la información persiste entre `thread_id` distintos (simulando dos conversaciones separadas del mismo usuario).
- **Evaluación:** 13 secciones DOC-12; comprensión (§2.6) contrastando explícitamente Store vs. checkpoint.
- **Pregunta ingenieril:** si tu Store crece indefinidamente con todo lo que el agente "aprende", ¿qué problema nuevo (no técnico de almacenamiento, sino de calidad de decisión) vas a tener en 6 meses de uso real?

**N8.M3.T2 · Memoria episódica — qué recordar, qué olvidar**
- **Objetivo:** diseña una política explícita de qué información se escribe en memoria de largo plazo, con qué prioridad se recupera, y cuándo se descarta o resume.
- **Prerrequisitos:** T1.
- **Competencias:** C-N8-01, C-N8-03.
- **Errores habituales:** escribir a memoria de largo plazo cada intercambio sin filtro ("memoria perfecta"), asumiendo que más memoria es siempre mejor; no distinguir entre memoria episódica (eventos concretos: "el usuario pidió X el martes") y memoria semántica (hechos consolidados: "al usuario le interesa X en general").
- **Modelo mental:** la memoria episódica como **un diario que hay que editar, no un log que solo crece** — la utilidad de recordar depende de poder recuperar lo relevante rápido, y eso exige decidir activamente qué NO vale la pena conservar.
- **Por qué:** existe porque la memoria ilimitada degrada, no mejora, las decisiones de un agente (contexto irrelevante compite por atención con el contexto que sí importa) — el quiebre de intuición central del módulo / ahora porque T1 ya dio el mecanismo técnico de persistir, este tema decide qué persistir / habilita T3 (planning necesita saber qué recordar del intento anterior) y M5 (memoria mal gestionada es, en sí, un modo de fallo).
- **Evidencia de dominio:** dado un historial largo de interacciones de un agente, decide qué 3 elementos merecen persistirse en memoria de largo plazo y cuáles deben descartarse, justificando con el criterio de relevancia futura, no de recencia.
- **Práctica principal (laboratorio N8.M3.T2):** implementar una política de resumen/consolidación que compacta el historial de un hilo largo en memoria semántica condensada antes de escribirla al Store, verificando empíricamente que el agente sigue tomando buenas decisiones con la versión resumida frente a la versión completa.
- **Evaluación:** 13 secciones DOC-12; desafío (§2.10) con un caso donde memoria excesiva degrada mensurablemente una decisión.
- **Pregunta ingenieril:** ¿por qué "el agente con más memoria siempre gana" es una intuición falsa, y qué medirías concretamente para demostrarlo en tu propio sistema?
- **El quiebre de intuición de M3:** el instante donde queda demostrado, con datos propios, que un agente con memoria resumida/curada toma una decisión mejor que la misma versión con memoria completa sin filtrar — la intuición de "recordar todo es más seguro" se rompe con evidencia, no con argumento.

**N8.M3.T3 · Planning — descomposición de tareas y replanning**
- **Objetivo:** descompone una tarea compleja en subtareas ordenadas antes de ejecutar, y ajusta el plan cuando un paso falla o revela información nueva (replanning).
- **Prerrequisitos:** T1, T2; M2 completo.
- **Competencias:** C-N8-01.
- **Errores habituales:** generar un plan y ejecutarlo ciegamente sin verificar cada paso contra el resultado real anterior (el plan asume un mundo que puede haber cambiado); no distinguir entre "el paso falló, hay que reintentarlo igual" y "el paso falló, hay que replanificar desde ese punto con información nueva".
- **Modelo mental:** el plan como **una hipótesis, no un contrato** — cada paso ejecutado es una oportunidad de confirmar o refutar el resto del plan, no solo de avanzar a ciegas.
- **Por qué:** existe porque tareas reales de varios pasos rara vez son predecibles de principio a fin — un sistema que no puede replanificar se rompe ante la primera sorpresa / ahora porque T1-T2 ya dieron memoria para saber qué pasó antes / habilita T4 y es la pieza central que el proyecto de nivel debe demostrar con fiabilidad medida.
- **Evidencia de dominio:** dado un plan de 5 pasos donde el paso 3 falla de una forma inesperada, decide si el sistema debería reintentar, saltar, o replanificar desde cero, y justifica con el criterio de si la falla invalida las suposiciones de los pasos 4-5.
- **Práctica principal (laboratorio N8.M3.T3):** implementar un node de planning explícito (LLM genera plan estructurado) seguido de ejecución paso a paso con verificación de resultado contra expectativa, con replanning real disparado por un fallo deliberadamente inducido en un paso intermedio.
- **Evaluación:** 13 secciones DOC-12; error inducido en vivo (§2.5bis) con un fallo real de un paso que fuerza replanning observable.
- **Pregunta ingenieril:** si tu agente replanifica cada vez que un paso no sale exactamente como esperaba, ¿qué mecanismo de M5 necesitarías para evitar que "replanificar" se convierta en un bucle que nunca termina?

**N8.M3.T4 · Laboratorio integrador — cierra M3**
- **Objetivo:** integra T1-T3 en un agente con memoria persistente curada y planning con replanning real.
- **Prerrequisitos:** T1-T3.
- **Competencias:** C-N8-01, C-N8-03.
- **Práctica principal (laboratorio N8.M3.T4, mini-proyecto + desafío):** extender el sistema de M2.T5 con memoria de largo plazo curada (T1-T2) y un planner con replanning (T3) sobre una tarea real de varios pasos con incertidumbre genuina (ej. investigación donde no se sabe de antemano cuántas fuentes hará falta consultar); desafío: el sistema debe recordar, en una segunda sesión días después (simulada), decisiones relevantes de la primera sin haber conservado el historial completo.
- **Evaluación:** 13 secciones DOC-12 completas; tercer ADR del nivel (extensión de la capa Memoria).
- **La garantía que el sistema adquiere (M3):** a partir de este punto, la plataforma garantiza que ninguna decisión relevante se pierde entre sesiones sin haber sido deliberadamente descartada — un contrato distinto y más fuerte que "el sistema tiene memoria", verificable inspeccionando qué sobrevive y qué no tras una reinicialización completa.

### M4 · Multimodalidad y voz

> **La gran pregunta de este módulo: ¿qué cambia realmente cuando un agente deja de recibir solo texto?**

**N8.M4.T1 · Visión — modelos multimodales**
- **Objetivo:** extiende el adaptador `ModelProvider` (M1.T3) para aceptar imagen como input, y diseña una herramienta cuyo argumento es visual (ej. "describe qué ves" antes de decidir la siguiente acción).
- **Prerrequisitos:** M1.T3 (interfaz `ModelProvider`); M3 completo.
- **Competencias:** C-N8-01.
- **Errores habituales:** tratar la imagen como "otro parámetro más" sin considerar el coste real (tokens de imagen suelen ser sustancialmente más caros que texto equivalente) — advertencia obligatoria DOC-12 §2.5/§3; asumir que el modelo "ve" la imagen igual que un humano, sin verificar empíricamente sus errores característicos (ej. lectura de texto pequeño en la imagen, conteo preciso de objetos).
- **Modelo mental:** la imagen como **un input que el modelo interpreta, no percibe** — su "visión" es una traducción a texto/embeddings con errores sistemáticos propios, no una cámara con comprensión humana.
- **Por qué:** existe porque muchas tareas reales de varios pasos requieren observar el mundo, no solo leer descripciones de él (ej. verificar visualmente el resultado de una acción) / ahora porque M1-M3 ya dieron el bucle, la orquestación y la memoria que un input visual va a alimentar / habilita T2-T3.
- **Evidencia de dominio:** dado un caso de uso real, decide si conviene dar al agente input visual directo o pedirle al humano que describa la imagen en texto, justificando con el trade-off de coste/precisión verificado empíricamente en el laboratorio.
- **Práctica principal (laboratorio N8.M4.T1, con advertencia de coste real obligatoria en su ficha de control):** extender el adaptador de un proveedor de referencia para aceptar imagen, medir el coste real en tokens de 3 casos (imagen simple, imagen con texto pequeño, imagen con múltiples objetos), y usar el resultado como input a una decisión del agente de M3.T4.
- **Evaluación:** 13 secciones DOC-12; requisitos (§2.3) con advertencia de coste verificable antes de ejecutar.
- **Pregunta ingenieril:** si tu agente usa visión para verificar que una acción anterior tuvo el efecto esperado, ¿qué pasa con la fiabilidad de todo el sistema si el modelo tiene un error sistemático no detectado en ese tipo específico de imagen?

**N8.M4.T2 · Voz — STT/TTS**
- **Objetivo:** integra transcripción de voz a texto (STT) y síntesis de texto a voz (TTS) reales como input/output del agente, con medición explícita de latencia y coste.
- **Prerrequisitos:** T1.
- **Competencias:** C-N8-01.
- **Errores habituales:** no anticipar que STT introduce errores de transcripción que se propagan silenciosamente al resto del pipeline (el agente razona sobre una transcripción incorrecta sin saberlo); tratar la latencia de voz como un detalle de UX en vez de una restricción de arquitectura real (un agente con planning multi-paso de M3 puede ser demasiado lento para una interacción de voz en tiempo real).
- **Modelo mental:** la voz como **dos traducciones con pérdida, una a cada lado** — STT pierde precisión al convertir sonido en texto, TTS pierde matiz al convertir texto en sonido; el agente nunca opera sobre la señal original.
- **Por qué:** existe porque la voz es el modo de interacción donde la latencia y el error de transcripción tienen consecuencias directas en la experiencia (a diferencia de texto, donde un pequeño retraso es invisible) / ahora porque T1 ya estableció el patrón de extender el adaptador a un modo nuevo / habilita T3.
- **Evidencia de dominio:** dado un log real de una transcripción STT con un error (ej. una palabra mal transcrita que cambia el significado de la instrucción), explica qué mecanismo de M1.T4 (validación en la frontera) debería haber capturado el problema antes de que el agente actuara sobre él.
- **Práctica principal (laboratorio N8.M4.T2, con advertencia de coste real obligatoria):** integrar STT+TTS reales con el agente de M3.T4, midiendo latencia extremo a extremo (voz→transcripción→decisión del agente→síntesis→audio) y documentando en qué punto del pipeline se concentra el retraso.
- **Evaluación:** 13 secciones DOC-12; diagnóstico de errores (§2.8) con al menos un error real de transcripción reproducido y su propagación explicada.
- **Pregunta ingenieril:** si tu agente de voz tarda 8 segundos en responder por culpa del planning de M3, ¿qué decisión de arquitectura (no de "usar un modelo más rápido") tomarías para que la interacción se sienta responsiva de todos modos?

**N8.M4.T3 · Laboratorio integrador multimodal — cierra M4**
- **Objetivo:** integra visión y voz en el sistema agéntico de M3.T4, manteniendo la interfaz `ModelProvider` desacoplada del proveedor concreto.
- **Prerrequisitos:** T1-T2.
- **Competencias:** C-N8-01, C-N8-02.
- **Práctica principal (laboratorio N8.M4.T3, mini-proyecto + desafío):** el sistema completo (agente + orquestación + memoria + planning de M1-M3) acepta ahora input de voz o imagen indistintamente, con las advertencias de coste ya medidas en T1-T2 documentadas en el ADR correspondiente; desafío: manejar un caso donde la instrucción de voz y una imagen adjunta se contradicen, y el agente debe decidir cómo resolverlo (o pedir aclaración) en vez de fallar en silencio.
- **Evaluación:** 13 secciones DOC-12 completas; cuarto ADR del nivel (extensión de la capa Modelos a multimodal).
- **El quiebre de intuición de M4:** el instante donde queda claro que "dar visión o voz a un agente" no es agregar un input más — es difuminar la frontera entre "leer una instrucción" y "observar el mundo", y esa frontera es, mecánicamente, la misma que separaba un chatbot de un agente en M1.T1: quién tiene permiso de actuar sobre qué representación de la realidad.

### M5 · Fiabilidad

> **La gran pregunta de este módulo: ¿cómo sabes, con evidencia y no con confianza, que tu sistema agéntico es fiable?**

**N8.M5.T1 · Taxonomía de fallos de agentes**
- **Objetivo:** clasifica un fallo real de un sistema agéntico según una taxonomía formal (memoria, reflexión, planificación, acción, sistema — AgentErrorTaxonomy) y reconoce un bucle agéntico infinito (IAL) como fenómeno emergente, no como bug de programación simple.
- **Prerrequisitos:** M1-M4 completos.
- **Competencias:** C-N8-03.
- **Errores habituales:** tratar cualquier fallo de agente como "el prompt está mal", sin diagnosticar en qué dimensión ocurrió realmente (¿fue un fallo de memoria, de planificación, o de ejecución de la herramienta?); asumir que un bucle infinito de agente es "como cualquier bucle infinito de programación" y buscar la causa en una sola función, cuando la evidencia real (arxiv 2607.01641, bibliografía §5) muestra que emerge de la interacción entre lógica del agente, framework y entorno.
- **Modelo mental:** el fallo de agente como **un síntoma que hay que localizar en una de 5 dimensiones antes de intentar arreglarlo** — parchear sin diagnóstico correcto tiende a mover el síntoma, no a resolver la causa.
- **Por qué:** existe porque M1-M4 dieron al estudiante un sistema real que SÍ puede fallar de estas formas — sin este tema, M5 sería teoría abstracta en vez de diagnóstico sobre el propio sistema construido / habilita T2-T5.
- **Evidencia de dominio:** dado el log de una ejecución fallida real del sistema construido en M1-M4, clasifica el fallo en su dimensión correcta de la taxonomía y distingue si es un caso de bucle agéntico (IAL) o un fallo puntual de un paso.
- **Práctica principal (laboratorio N8.M5.T1):** ejecutar deliberadamente el sistema del proyecto en un escenario diseñado para fallar (ej. una herramienta que devuelve un resultado ambiguo repetidamente), capturar el log real, y clasificarlo contra la taxonomía de AgentErrorBench.
- **Evaluación:** 13 secciones DOC-12; explicación conceptual (§2.4) citando directamente los 2 papers de la bibliografía §5.
- **Pregunta ingenieril:** si tu sistema en producción falla de una forma que nunca viste en desarrollo, ¿qué evidencia (no intuición) necesitarías capturar en el momento del fallo para poder clasificarlo después con esta misma taxonomía?
- **El quiebre de intuición de M5:** el instante donde un bucle infinito real del propio sistema del estudiante (provocado deliberadamente) deja de sentirse como "until until until, olvidé una condición de parada" y se revela como una consecuencia de cómo el agente, el framework y el entorno interactúan — el mismo bucle no habría ocurrido cambiando solo una de las tres piezas.

**N8.M5.T2 · Mitigaciones en runtime — límites duros y circuit breakers**
- **Objetivo:** implementa límites de recursión, detección de "no progreso" (mismo tool call repetido) y un circuit breaker que detiene el agente antes de que el coste se descontrole.
- **Prerrequisitos:** T1.
- **Competencias:** C-N8-03.
- **Errores habituales:** confiar solo en que "el modelo sabrá cuándo parar" sin ningún límite duro externo — la causa raíz documentada (bibliografía §5) de la mayoría de incidentes reales de coste descontrolado; poner un límite de pasos tan alto que en la práctica nunca se dispara, dando una falsa sensación de seguridad.
- **Modelo mental:** el límite duro como **un cinturón de seguridad, no un indicador de mal diseño** — un sistema bien diseñado igual necesita el límite, de la misma forma que un coche bien conducido igual lleva cinturón.
- **Por qué:** existe porque T1 ya demostró, con el propio sistema del estudiante, que los fallos de agente son reales y no hipotéticos — este tema da las herramientas concretas para contenerlos / habilita T3 y el proyecto de nivel (que exige fiabilidad MEDIDA, no solo declarada).
- **Evidencia de dominio:** dado un agente con un `recursion_limit` fijado, explica exactamente qué pasa (a nivel de estado y de excepción) cuando lo alcanza, y por qué eso es preferible a que el proceso simplemente nunca termine.
- **Práctica principal (laboratorio N8.M5.T2, error inducido en vivo):** fijar `recursion_limit` en el grafo del proyecto y forzar deliberadamente que se dispare (`GraphRecursionError` real, no simulado); implementar detección de no-progreso (hash del último tool call, comparado contra una ventana reciente) como capa adicional independiente del límite de LangGraph.
- **Evaluación:** 13 secciones DOC-12; diagnóstico de errores (§2.8) centrado en `GraphRecursionError` con sus 5 columnas completas.
- **Pregunta ingenieril:** si tu sistema tiene tanto un `recursion_limit` como detección de no-progreso, ¿en qué escenario real cada uno atraparía un fallo que el otro dejaría pasar?

**N8.M5.T3 · Human-in-the-loop — aprobar, rechazar, editar**
- **Objetivo:** implementa los 3 patrones documentados de intervención humana (aprobar-tal-cual, rechazar-y-redirigir, editar-antes-de-ejecutar) usando `interrupt()` sobre una acción de riesgo real del sistema del proyecto.
- **Prerrequisitos:** T2; M2.T2 (`interrupt()` ya introducido ahí para persistencia; aquí se usa para gobernanza).
- **Competencias:** C-N8-03, C-N8-04.
- **Errores habituales:** poner aprobación humana en TODAS las acciones (elimina el valor de la autonomía, el estudiante vuelve a un workflow manual disfrazado de agente) o en NINGUNA (pierde la salvaguarda exacta que este tema enseña) — el criterio correcto es la reversibilidad e impacto de la acción, no una regla uniforme.
- **Modelo mental:** el punto de aprobación humana como **una frontera de irreversibilidad**, no una frontera de desconfianza general hacia el agente — se coloca donde una acción no se puede deshacer fácilmente, no en todas partes por igual.
- **Por qué:** existe porque M1.T4 ya sembró la idea de "frontera de confianza" para herramientas individuales — este tema la eleva a nivel de sistema completo, con los 3 patrones reales que la industria documenta (bibliografía §5) / habilita T4 (la gobernanza de riesgos de mal uso se apoya en estos mismos puntos de control).
- **Evidencia de dominio:** dado un catálogo de acciones del sistema del proyecto (ej. "leer un archivo", "enviar una notificación", "modificar un registro persistente"), clasifica cuáles requieren aprobación humana y con qué patrón (aprobar/rechazar/editar), justificando por reversibilidad.
- **Práctica principal (laboratorio N8.M5.T3):** identificar la acción de mayor riesgo real del sistema del proyecto (construido en M1-M4) y envolverla con `interrupt()` implementando los 3 patrones, verificados con una ejecución real de cada uno.
- **Evaluación:** 13 secciones DOC-12; mini-laboratorio (§2.9) no resoluble copiando el ejemplo (acción de riesgo distinta a la usada en la explicación).
- **Pregunta ingenieril:** si tu punto de aprobación humana se activa 200 veces al día, ¿en qué momento ese volumen convierte la "salvaguarda" en un cuello de botella que un operador humano empieza a aprobar sin leer — y qué tendría que cambiar en el diseño para evitarlo?

**N8.M5.T4 · Riesgos de mal uso — encuadre defensivo y gobernanza**
- **Objetivo:** identifica los riesgos de mal uso característicos de un sistema agéntico propio (no genéricos de "la IA en general"), y declara explícitamente sus límites e incertidumbre.
- **Prerrequisitos:** T1-T3.
- **Competencias:** C-N8-04.
- **Encuadre obligatorio** *(igual que N7.M4, mismo mandato explícito de la guía maestra)*: contenido defensivo y educativo — enseña a RECONOCER y MITIGAR riesgos de mal uso de sistemas agénticos propios, nunca a construir agentes dañinos ni a evadir controles de seguridad de ningún proveedor.
- **Errores habituales:** declarar "mi sistema es seguro" sin evidencia (ausencia de incidentes en la demo no es lo mismo que ausencia de riesgo); no distinguir entre un riesgo que el sistema mitiga activamente (con un mecanismo verificable de T2-T3) y uno que simplemente no se ha observado todavía.
- **Modelo mental:** los límites del sistema como **una lista honesta de lo que NO garantiza**, no una lista de disculpas — un arquitecto que dice "esto puede fallar así, y así es como lo detectamos" es más confiable que uno que dice "no debería fallar".
- **Por qué:** existe porque C-N8-04 exige exactamente esto — evaluar riesgos y declarar límites con honestidad, la competencia que distingue a un sistema desplegable de un prototipo de demo / ahora porque T1-T3 ya dieron el vocabulario y los mecanismos de mitigación que este tema exige usar concretamente, no en abstracto / habilita T5 y es evaluado directamente en la defensa de arquitectura del capstone.
- **Evidencia de dominio:** para el sistema propio del proyecto, produce una lista real de 3-5 riesgos de mal uso específicos (no genéricos), cada uno con su mecanismo de mitigación existente (o su ausencia declarada honestamente si no se mitigó).
- **Práctica principal (laboratorio N8.M5.T4):** auditoría de riesgos del sistema propio construido en M1-M4, contrastada con la checklist de salvaguardas de "Building Effective Agents" (bibliografía §5) — sandbox, guardrails, límites de iteración, checkpoints humanos, verificación de ground truth — declarando explícitamente cuáles aplica el sistema propio y cuáles no.
- **Evaluación:** 13 secciones DOC-12; cierre "lo esencial en una frase" (§2.13) formulado como la declaración de límites que el estudiante defenderá en la compuerta.
- **Pregunta ingenieril:** si tuvieras que dar acceso a tu sistema a un usuario que no controlas, ¿qué mecanismo de T2-T3 confiarías para contener un mal uso, y qué riesgo seguiría abierto pase lo que pase?

**N8.M5.T5 · Laboratorio integrador — depurar un agente real que falla — cierra M5**
- **Objetivo:** diagnostica y corrige un fallo de fiabilidad real e inédito en un sistema agéntico, aplicando la taxonomía (T1), los límites duros (T2), HITL (T3) y la auditoría de riesgos (T4).
- **Prerrequisitos:** T1-T4.
- **Competencias:** C-N8-03, C-N8-04.
- **Práctica principal (laboratorio N8.M5.T5, mini-proyecto + desafío final inédito):** se entrega al estudiante un sistema agéntico con un bug de fiabilidad real no explicado de antemano (ej. un bucle de no-progreso disfrazado de reintentos legítimos); debe diagnosticarlo con la taxonomía de T1, aplicar la mitigación correcta de T2/T3, y documentar el riesgo residual con el criterio de T4 — mismo espíritu que DOC-11 Bloque 6 ("irresoluble por imitación").
- **Evaluación:** 13 secciones DOC-12 completas; repetición desde cero sin guía (§2.13) sobre un segundo bug distinto al primero.
- **Idea universal (cierre de M5 y del nivel):** la fiabilidad de un sistema agéntico no es una propiedad que se declara — es una propiedad que se mide, con una taxonomía para diagnosticar (T1), límites duros que no dependen del buen juicio del modelo (T2), puntos de control humano donde la irreversibilidad lo exige (T3), y una declaración honesta de lo que sigue sin garantía (T4). Un sistema "fiable" no es uno que nunca falla — es uno cuyos fallos son detectables, contenidos y explicables.
- **La limitación humana que compensa M5:** la imposibilidad de anticipar cada modo de fallo posible de un sistema suficientemente complejo antes de que ocurra en producción — la disciplina de detección/contención (T2-T3) permite operar con seguridad razonable sin exigir la omnisciencia de diseño que ningún arquitecto humano tiene realmente.

## 6. Proyecto de nivel — AI Systems Platform (V2 de la columna vertebral)

*Desarrollo completo del capstone (ficha, hitos, `flujoDeGit`, defensa de arquitectura) pendiente como siguiente entrega — este syllabus fija su diseño arquitectónico en `docs/investigacion/n8-arquitectura-plataforma.md` y su integración de competencias (C-N8-01…04, cada una evaluada en al menos un módulo, ver mapeo en §5). El capstone extiende la V1 (RAG, heredada de N7 en borrador) con las capas de Orquestación, Memoria episódica/planning, Multimodalidad y Seguridad/Gobernanza sembradas en M1-M5, cerrando con defensa de arquitectura en rol Arquitecto sobre los 4 ADRs producidos en M1.T3, M2.T5, M3.T4 y M4.T3.*

## 7. Siguiente paso

Revisión del Director sobre este diseño de syllabus (arquitectura de plataforma, agnosticismo de proveedor, 22 temas de M1-M5) antes de iniciar la construcción real en `index.html` — mismo checkpoint que ya se usó para aprobar la dirección arquitectónica. Tras la aprobación (o los ajustes que correspondan), Paso 2 del flujo institucional: construcción módulo por módulo, empezando por M1, con verificación empírica de cada laboratorio antes de cerrarlo y commit por módulo.
