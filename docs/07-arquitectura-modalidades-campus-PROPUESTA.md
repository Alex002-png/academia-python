# Propuesta de arquitectura — Modalidades de contenido en el Campus

> **Estado: ✅ Aprobada por el Director (2026-07-20), primera pieza real de DOC-07 · Especificación de la Plataforma.** Incorporada al catálogo 15.3 del Blueprint (EVT correspondiente registrado). La tensión de §6 (M5 paralelo vs. secuencial) quedó resuelta explícitamente por el Director — ver adenda al final del documento. No pretende agotar todo el alcance de DOC-07 (que también cubre infraestructura, S5, QAs de §21): cubre, específicamente, cómo el Campus representa múltiples modalidades de contenido de aprendizaje.

## Por qué este documento existe

DOC-12 resolvió qué es un buen laboratorio de entorno real. No resolvió, porque no era su trabajo, cómo ese laboratorio se convierte en una pantalla que un estudiante usa. Construir M5.T1/T2 como documentos `.md` lo demostró: son excelentes como contenido, pero hoy no tienen dónde vivir. El Campus (`index.html`), tal como existe, fue construido asumiendo un solo tipo de contenido — código que se ejecuta y se corrige automáticamente en Pyodide. Extender esa base sin diseño explícito produciría exactamente lo que el Director quiere evitar: condicionales improvisados que habría que revisar cada vez que aparezca una modalidad nueva.

## 0. Diagnóstico del estado actual (fundamento de la propuesta)

Investigación directa del código existente, no suposición:

- Cada tema es un objeto sin esquema declarado, dentro de un array plano (`LEVEL0`, `LEVEL1`). No existe hoy un campo que diga "qué tipo de contenido es este tema" — `renderClases()` es un único template gigante con ramas `if(d.intuit)`, `if(d.mcq)`, etc., que asume implícitamente que todo tema es Pyodide.
- El progreso vive en un único objeto `S` (una sola clave de `localStorage`), con `ex{}` (progreso por ejercicio) y `ph{}` (progreso por fase de tema). `dayDone(d)` decide si un tema está completo mirando directamente esos campos.
- **Ya existe, sin usarse a fondo, precedente de contenido que no depende de ejecutar código**: `intuit` (predicción de texto libre, con opción de "revelar" sin acertar y quedar registrado como debilidad), `EXTRA.chk` (checkpoint de un ítem, sin persistencia), y sobre todo `EXTRA.defensa`/`EXTRA.metacog` — listas de preguntas de solo lectura, **sin ningún botón de "lo hice"**. Ese hueco exacto es el que un checkpoint autodeclarado de DOC-12 llenaría — no es una idea nueva, es completar algo que el propio Campus ya insinuaba.
- Ya existe CSS reutilizable sin código nuevo: `.card` (contenedor universal), `.chip` (badges de estado), `label.task` (checkbox estilizado, **definido en el CSS pero sin ningún uso activo en el HTML generado hoy** — literalmente esperando este caso de uso).
- El motor multi-nivel (`LEVELS`/`LEVEL_META`) ya demuestra que el Campus puede generalizarse por capas cuando se le pide — es el precedente directo de que esta propuesta es viable sin reescribir la aplicación.

Esta propuesta no inventa sobre terreno vacío: identifica dónde el diseño actual ya apuntaba hacia esto, y formaliza el paso que faltaba.

---

## 1. Cómo convivirán los dos tipos de lecciones — el principio de diseño

**Un tema declara su modalidad explícitamente; el motor delega, nunca decide.**

Hoy `renderClases()` y `dayDone()` *asumen* Pyodide. La corrección arquitectónica no es "añadir un `if` más" — es invertir la dependencia: introducir un campo `modalidad` en cada tema, y un **registro de modalidades** (`MODALIDADES`) donde cada modalidad aporta su propio renderizador y su propia lógica de evaluación. El motor central (`renderClases`, `dayDone`, `dayUnlocked`, navegación, badges, nivel %) deja de saber qué es un `ex` o un `checkpoint` — solo sabe pedirle a la modalidad correspondiente: "renderízate" y "dime si estás completo". Esto es el patrón que en arquitectura de software se llama *strategy* o *adaptador de contenido*: el núcleo es agnóstico, cada modalidad es un plug-in autocontenido.

**Qué se comparte siempre (nunca se duplica):** el almacén de progreso (`S`, una sola clave de `localStorage`); el sistema de desbloqueo secuencial (`dayUnlocked`); la lista de temas con sus tarjetas (`daycard`); el selector de nivel; los primitivos visuales (`.card`, `.chip`, `label.task`); el mecanismo `EXTRA` para historia/recursos/defensa donde aplique.

**Qué es propio de cada modalidad:** el esquema de contenido (qué campos tiene un tema de esa modalidad); el renderizador de su cuerpo; la lógica de qué cuenta como "completo"; el tipo de checkpoint que expone.

Pyodide **deja de ser "el caso normal" y pasa a ser la primera modalidad registrada**, con exactamente el mismo estatus que la nueva. Esto es importante: no se trata a Pyodide como el sistema y a DOC-12 como el añadido — ambos son ciudadanos de primera clase del mismo registro. Es lo que garantiza que la tercera, cuarta y quinta modalidad se añadan igual de limpio que la segunda.

## 2. Cómo identifica el Campus qué debe renderizar — el registro de modalidades

Cada tema lleva un campo `modalidad` (string, obligatorio desde ahora en adelante; los temas existentes de N0/N1 se migran una sola vez a `modalidad:"pyodide"` sin cambiar su contenido). Un registro central asocia cada valor posible de `modalidad` con un **contrato de tres funciones**:

1. **Renderizar** — recibe el tema y el estado de progreso, devuelve el HTML de su cuerpo.
2. **Evaluar** — recibe el tema y el estado de progreso, devuelve si está completo (y, cuando aplique, un porcentaje parcial) — mismo contrato exacto que hoy cumple implícitamente `dayDone`, ahora explícito y por modalidad.
3. **Describir** — metadatos ligeros para la tarjeta de la lista (icono, etiqueta corta, ej. "🐍 Ejercicio interactivo" vs. "🖥️ Laboratorio de entorno real") — para que el estudiante sepa, antes de entrar, qué tipo de experiencia le espera.

Añadir una modalidad nueva en el futuro significa: escribir estas tres funciones para esa modalidad, registrarla, y no tocar ni una línea de las modalidades existentes ni del motor central. Esa es la propiedad que responde directamente al mandato del Director — extensible sin rediseño.

**Por qué esto realmente escala hasta Docker/Cloud/SQL/Linux/GUI sin explosión de modalidades:** DOC-12 ya se diseñó, en su propia auditoría, para generalizar "acción exacta" a comando, atajo de teclado, secuencia de clics o edición de archivo, y "entorno objetivo" a terminal local, contenedor, servidor remoto o consola cloud (§1, §2.5 de DOC-12 v1.0.0). Eso significa que Docker, SQL, Linux, SSH e incluso la mayoría del contenido tipo GUI **no necesitan una modalidad de Campus nueva** — son, todos, instancias de contenido de la misma modalidad `real`, con distinto texto dentro de los mismos campos. La modalidad es una propiedad de *cómo se estructura y se verifica el aprendizaje*, no de *qué herramienta se enseña*. Bajo este criterio, se anticipan solo dos modalidades genuinamente nuevas a futuro, y no antes de que exista contenido real que las necesite (no se construyen especulativamente):

- **`entrevista`** — sesión conversacional guiada por el Tutor IA, con una estructura de turnos, no de pasos secuenciales; se diseñará cuando N1+ lo requiera.
- **`proyecto`** — trabajo de varias sesiones con hitos y rúbrica, no un checkpoint por sesión; se diseñará para el primer capstone real que lo exija.

## 3. La experiencia del estudiante — el flujo completo

**Entrada.** El estudiante ve la misma lista de tarjetas (`daycard`) de siempre. Cada tarjeta ahora lleva, además de su título y estado (bloqueado/en curso/hecho), un **badge de modalidad** visible antes de entrar — coherente con el sistema `.chip` ya existente, sin inventar un componente nuevo. No hay sorpresas: el estudiante sabe si va a programar o si va a salir a su propia terminal antes de hacer clic.

**Apertura de un laboratorio real.** La cabecera muestra la ficha de control de DOC-12 (entorno objetivo, duración desglosada, dificultad, fuera de alcance) como una variante del mismo patrón de tarjeta de "ficha" que otras partes del Campus ya usan — no texto corrido, información escaneable de un vistazo.

**Cuerpo.** Las 13 secciones de DOC-12 se presentan como bloques secuenciales dentro de la misma superficie de tarjeta (`.card`) que ya usa el Campus, con tratamiento visual distinto por tipo de contenido: los pasos de ejecución (§2.5) se ven como una consola — tipografía monoespaciada, fondo oscuro, el comando resaltado y separado de la explicación en prosa; la tabla de diagnóstico de errores (§2.8) se presenta como una tabla plegable, consultable, no como párrafos; el contexto y la explicación conceptual (§2.2, §2.4) se presentan como prosa normal, con la voz de instructor que DOC-12 ya exige. Un indicador de posición (una franja o serie de puntos, no un componente nuevo complejo) muestra en qué sección de las 13 está el estudiante — no reemplaza el scroll natural, lo acompaña.

**Checkpoints.** En cada punto de verificación (§2.7) y en el error inducido en vivo (§2.5bis), aparece exactamente el patrón `label.task` que el CSS ya define pero nunca usa: una casilla que el estudiante marca cuando, en su propia terminal, obtuvo el resultado esperado. Ver §4 para el detalle de qué significa esa marca.

**Navegación y regreso.** Exactamente el mismo sistema de siempre — la tarjeta cambia a estado "en curso" al abrir, a "hecho" cuando `evaluar()` de esa modalidad lo determina, y el estudiante puede salir y volver cuando quiera: el progreso granular por sección (no solo por tema completo) se guarda igual que hoy se guarda por ejercicio, así que reabrir un laboratorio a medias lo devuelve donde lo dejó, no lo reinicia.

## 4. Checkpoints en laboratorios reales — qué valida, qué registra, qué es autoevaluación, qué es evidencia

Esta es la pregunta más delicada, y merece una respuesta sin ambigüedad, porque toca la honestidad del propio registro de progreso de la Academia (el mismo principio de no-fabricación que gobierna las investigaciones pedagógicas).

**Lo que el Campus puede verificar automáticamente (como en Pyodide) es exactamente nada, en un laboratorio real** — el Campus no tiene forma de saber si el estudiante realmente ejecutó `git init` en su propia terminal. Fingir que sí sería falsificar evidencia institucional, algo que este proyecto ya prohibió explícitamente para el estado "Validada" de una lección (DOC-11 §6bis: *"un estado 'Validada' sin evidencia real... es, por definición, un dato institucional falso"*). La arquitectura tiene que ser honesta sobre este límite, no ocultarlo.

Por eso se proponen **tres categorías distintas, visualmente distinguibles, nunca mezcladas**:

1. **Autodeclaración de checkpoint (§2.7 de DOC-12)** — el estudiante marca una casilla afirmando que obtuvo el resultado esperado. El Campus registra el hecho (marcado, con fecha) exactamente con el mismo peso que hoy tiene "revelar" un `intuit` sin acertar: **progreso de avance, no certificación de corrección**. Visualmente lleva un token distinto al de un ejercicio Pyodide corregido (por ejemplo, un check gris "autodeclarado" frente al check verde "verificado" que ya usa el sistema) — la interfaz nunca debe sugerir un nivel de certeza que no tiene.
2. **Evidencia de aprendizaje (comprensión, desafío, reflexión metacognitiva, §2.6/§2.10/§2.13)** — texto libre que el estudiante escribe dentro del Campus. No se corrige automáticamente (no hay forma de corregir "por qué crees que apareció este error" con una regex, y no se pretende). Se **guarda como artefacto**, igual que hoy se guardan las respuestas de `intuit`, y queda disponible como material real para la defensa con el Tutor IA — que es, precisamente, el componente ya diseñado en la arquitectura general (DOC-00 AC-01/AC-13) para conducir evaluación conversacional real. El Campus registra evidencia; el Tutor IA la evalúa. Esta división de responsabilidades no es nueva — ya está en la arquitectura desde el Blueprint (Tutor IA como acompañamiento externo, Campus enfocado en contenido).
3. **Verificación funcional real, cuando exista (excepcional, no el caso general)** — algunos laboratorios futuros podrían pedir al estudiante pegar una salida real de su terminal para un chequeo de formato mínimo (ej.: que el texto pegado contenga `Initialized empty Git repository`) — un chequeo *más honesto que nada, pero nunca* con la fuerza de un `check()` de Pyodide, porque el estudiante siempre podría pegar cualquier texto. Se propone **no construir esto en la primera versión**: añade complejidad real por un beneficio de verificación marginal y potencialmente engañoso (falsa sensación de rigor). Categoría 1 + 2 ya cubren honestamente lo que un laboratorio real puede certificar; esto queda anotado como extensión futura posible, a evaluar solo si la evidencia de uso real lo pide.

## 5. Un único sistema de progreso — nunca dos

No se crea un segundo almacén. `S` (la misma clave de `localStorage`) se extiende con una forma de registro por sección que ya es estructuralmente idéntica a lo que existe (`ph{}`, progreso por fase) — un laboratorio real simplemente tiene más "fases" (sus 13 secciones) que un tema Pyodide (intuit/mcq/ejercicios). `dayDone(d)` dejar de tener lógica propia y pasa a **delegar siempre** en `evaluar()` de la modalidad del tema — la única función central que sabe orquestar la delegación, nunca sabe los detalles de ninguna modalidad. Esto garantiza que todo lo que ya depende de `dayDone` (el desbloqueo secuencial, el % del nivel, los badges, la vista de ruta) **sigue funcionando sin cambios** para ambas modalidades, porque nunca les importó cómo se calculaba `dayDone` por dentro — solo su resultado. Es el punto de apalancamiento más importante de toda esta propuesta: un solo punto de indirección resuelve la unificación completa.

## 6. Escalabilidad N0–N12

Tres decisiones de esta propuesta están pensadas explícitamente para sostenerse doce niveles hacia adelante, no solo para Git:

1. **El registro de modalidades es aditivo por diseño** — cada nivel futuro puede necesitar contenido nuevo (N2 Docker, N9 Kubernetes, N7 streaming) sin que ninguno de ellos obligue a tocar el motor central ni las modalidades ya construidas, siempre que quepan en `pyodide` o `real` (la gran mayoría, según el análisis de §2) o en una de las dos modalidades futuras ya anticipadas (`entrevista`, `proyecto`).
2. **El contrato de tres funciones por modalidad es estable** — no cambia aunque cambie drásticamente el contenido interno de cada modalidad (DOC-12 puede evolucionar a v1.1, v2.0, etc., y mientras sus tres funciones sigan cumpliendo el contrato, el motor central no se entera).
3. **Ningún nivel queda atado a una modalidad** — N0 puede ser 100% `pyodide`; N1 mezcla `pyodide` y `real`; un nivel futuro centrado en sistemas podría ser mayormente `real`; ninguno de estos casos exige tratamiento especial en el motor.

**Tensión abierta que esta propuesta señala en vez de resolver en silencio:** SYL-N1 declara M5 "en paralelo desde semana 1" con M1 — es decir, pedagógicamente, un estudiante avanza M1 y M5 a la vez, no M1 completo y luego M5. El motor actual (`LEVEL1` como array plano con desbloqueo secuencial estricto) no tiene hoy manera de representar dos pistas avanzando en paralelo — es una limitación preexistente al problema de modalidades, no creada por esta propuesta, pero esta propuesta es el momento correcto para nombrarla: cuando se construya el orden real de inserción de M5.T1/T2 dentro de `LEVEL1`, hay que decidir si se intercalan físicamente entre temas de M1 (rompiendo la lectura "M1 completo, luego M2") o si se acepta que el array sea secuencial por construcción aunque el syllabus diga "paralelo" (el estudiante real, al ser un solo usuario sin cohortes, simplemente los completaría en el orden que el array proponga). Se recomienda la segunda opción por simplicidad, dejando "paralelo" como una nota pedagógica de diseño curricular, no como una exigencia de la interfaz — pero es una decisión del Director, no algo que esta propuesta deba fijar unilateralmente.

## 7. Experiencia premium — principios, no pixeles

Sin escribir CSS todavía, los principios que deberían gobernar la implementación cuando se apruebe:

- **Identidad visual propia por modalidad, dentro del mismo lenguaje de diseño** — un laboratorio real debe sentirse evidentemente distinto de un ejercicio de código (icono, cabecera de ficha, tratamiento tipo consola para los comandos) sin introducir una paleta de colores nueva ni romper la coherencia del Campus. Coherencia, no uniformidad.
- **Nunca un volcado de Markdown.** Cada una de las 13 secciones de DOC-12 tiene su propio tratamiento visual con intención (consola para pasos, tabla plegable para diagnóstico, tarjeta destacada para el desafío) — el contenido ya escrito en los `.md` de `docs/lecciones/n1/` es la fuente, pero la presentación en el Campus es su propio diseño, no un render literal del archivo.
- **El checkpoint autodeclarado se siente como un logro, no como un trámite** — mismo espíritu que ya tiene el Campus con sus badges y chips: una casilla marcada da retroalimentación visual inmediata (color, micro-animación si ya existe el patrón en el CSS actual), consistente con cómo se siente hoy resolver un ejercicio Pyodide, aunque la naturaleza de la verificación sea distinta y esa distinción quede honestamente señalada (§4).
- **La ficha de control (duración, entorno, dificultad) se lee en cinco segundos**, con los mismos `.chip` que ya usa el resto del Campus — nunca un párrafo que haya que leer para saber cuánto va a durar el laboratorio.

## Síntesis de la decisión propuesta

| Pregunta del Director | Resolución propuesta |
|---|---|
| Convivencia de dos tipos de lección | Campo `modalidad` explícito + registro de modalidades con contrato de 3 funciones (renderizar/evaluar/describir); Pyodide se re-trata como la primera modalidad registrada, no como el caso base |
| Identificación de tipo de contenido | El registro `MODALIDADES`, extensible por entradas nuevas, sin tocar el motor central ni las modalidades existentes |
| Experiencia del estudiante | Mismo flujo de tarjetas → detalle → progreso de siempre; cuerpo de laboratorio real con tratamiento visual propio por sección (consola/tabla/tarjeta), badge de modalidad visible antes de entrar |
| Checkpoints | Tres categorías honestas y visualmente distintas: autodeclaración (avance), evidencia de texto (para el Tutor IA), verificación funcional real (pospuesta, no descartada) |
| Sistema de progreso | Un único `S`/`localStorage`; `dayDone` delega siempre en `evaluar()` de la modalidad — un solo punto de indirección unifica todo lo que depende de él |
| Escalabilidad N0–N12 | La mayoría del contenido futuro (Docker/Cloud/SQL/Linux/GUI) cabe en la modalidad `real` ya generalizada por DOC-12; solo `entrevista` y `proyecto` se anticipan como modalidades genuinamente nuevas, a diseñar cuando haga falta, no antes |
| Experiencia premium | Identidad visual propia por modalidad dentro del lenguaje de diseño existente; nunca un volcado de Markdown; honestidad visual entre lo autodeclarado y lo verificado |

## Qué NO decide este documento (deliberadamente)

- El detalle exacto de nombres de funciones/campos en el código — eso es implementación, posterior a la aprobación.
- Si M5.T1/T2 se insertan físicamente entre los temas de M1 en `LEVEL1`, o después de M4 — la tensión de §6 queda señalada, no resuelta aquí.
- El diseño de `entrevista` y `proyecto` — deliberadamente no se diseñan todavía, para no construir sobre necesidades hipotéticas.
- Si la verificación funcional real (categoría 3 de §4) se construye alguna vez — queda como extensión evaluable con evidencia futura, no como decisión tomada.

**Cuando se apruebe esta arquitectura**, los siguientes pasos naturales son: (1) registrar formalmente esta propuesta como el primer contenido real de DOC-07 en el catálogo del Blueprint, con su EVT correspondiente; (2) implementar el registro de modalidades y migrar `pyodide` como primera entrada (sin tocar contenido existente); (3) implementar la modalidad `real` y conectar M5.T1/T2 como su primer caso real; (4) recién entonces, retomar la construcción del resto de laboratorios DOC-12 (T6/T9, M4, resto de M5) sobre una base de interfaz ya resuelta.

## Adenda — decisión del Director sobre la tensión de §6 (2026-07-20)

**M5 no se mostrará como pista paralela.** Aunque SYL-N1 describe M5 como ejecutable "en paralelo desde semana 1", el Director resuelve que la interfaz del Campus presenta un **recorrido lineal único** — en todo momento existe una sola "siguiente lección", sin bifurcaciones de navegación. Si un tema de M5 es prerrequisito de un tema posterior, simplemente ocupa su posición en la secuencia lineal, en el punto exacto donde ese prerrequisito se vuelve necesario — no se modela como una "pista" separada corriendo a la vez que M1.

**Justificación del Director, registrada como principio de diseño permanente de esta Academia:** *"La complejidad arquitectónica solo se acepta cuando aporta una mejora clara a la experiencia de aprendizaje. Si una característica únicamente aumenta la flexibilidad técnica pero hace la plataforma más difícil de comprender o mantener, prefiero descartarla."* La Academia está diseñada para un solo estudiante, no para cohortes — la navegación paralela resolvería un problema (coordinar múltiples estudiantes avanzando a ritmos distintos) que aquí no existe.

**La arquitectura permanece preparada para soportar recorridos paralelos en el futuro** — nada en el registro de modalidades ni en el contrato de tres funciones (§1-§2) impide añadir una noción de "pista" más adelante si la evidencia real algún día lo justifica. Simplemente, la primera implementación no la construye: **producto simple para el estudiante, arquitectura flexible por debajo** — el mismo principio que gobierna, desde ahora, toda decisión futura de esta naturaleza.

**Consecuencia concreta para la implementación:** N1.M5.T1 y N1.M5.T2 se insertan como entradas normales dentro del array lineal `LEVEL1`, en la posición donde son prerrequisito real — inmediatamente antes de M1.T6/T9 (entornos virtuales), que ya los declaraba como dependencia. No se introduce ningún campo de "pista" ni bifurcación de navegación en esta primera implementación.
