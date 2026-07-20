# Investigación Pedagógica de N0.T1 — Tu primer programa

*Primera investigación bajo DOC-11 v2.0.0 (Estándar de Excelencia Mundial). T1 nunca tuvo lección propia bajo DOC-11 — SYL-N0 solo formalizó su ficha, el contenido vivía únicamente en producción (`LEVEL0[0]`, `id:"d1"`). Esta investigación construye su primera versión completa, y la reconstruye al mismo nivel de exigencia que T2–T8.*

## 1. Cómo enseñan este concepto exacto las instituciones de referencia

**MIT 6.0001, Lecture 1:** un programa es una secuencia de definiciones y órdenes (*definitions and commands*); el intérprete evalúa las definiciones y ejecuta las órdenes, línea por línea, dentro de un shell. `print()` se presenta explícitamente como función de salida. Esto confirma, palabra por palabra, el modelo que T1 ya usaba en producción ("el intérprete lee tu código como texto y lo obedece, línea por línea") — no es una simplificación nuestra, es el modelo exacto de la primera clase de MIT. *(Fuente: [MIT OCW 6.0001, Lecture 1 slides](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/e921a690079369751bcce3e34da6c6ee_MIT6_0001F16_Lec1.pdf).)*

**UC Berkeley CS61A** — *nueva institución en la lista del Director, primera vez que aporta a N0*: la primerísima lección de CS61A no empieza por `print()` — empieza nombrando explícitamente la distinción **expresión vs. sentencia**: "una expresión describe un cómputo y se evalúa a un valor". Esto es precisamente el conflicto cognitivo que T1 ya tenía en producción (`print("2 + 3")` vs. `print(2 + 3)`) pero **sin nombrarlo con vocabulario técnico explícito** — la ficha original lo mostraba sin decir nunca la palabra "expresión". Berkeley confirma que ese vocabulario no es jerga prematura: es, en su currículo, el primer concepto que se nombra. *(Fuente: [CS61A, Berkeley](https://cs61a.org/) — estructura de la primera semana: expresiones, valores, operadores, entornos.)*

**CS50P (Harvard), Week 0:** cubre funciones, argumentos, efectos secundarios y **bugs** ya en la primera semana — no defiere el debugging a una unidad posterior. Esto respalda directamente el mandato de DOC-11 v2.0.0 de tratar el debugging como competencia con progresión desde la primera lección, no solo como un ejercicio aislado. *(Fuente: [CS50P, Week 0](https://cs50.harvard.edu/python/weeks/0/).)*

**CMU 15-112**, notas de la primera clase ("Getting Started"): introduce `print()` junto con variantes (`end=""`, separación por comas) antes de pasar a otros temas — confirma `print()` como función con argumentos desde el primer contacto, no como palabra clave mágica. *(Fuente: [CMU 15-112, Getting Started](https://www.kosbie.net/cmu/fall-21/15-112/notes/notes-getting-started.html).)*

**Honestidad metodológica — Cambridge:** el curso introductorio real de Cambridge (Computer Science Tripos, Part IA, *Foundations of Computer Science*) **no usa Python** — usa OCaml, explícitamente *"porque un programa con fallos no puede colapsar, y el sistema de tipos de OCaml detecta muchos fallos antes de ejecutar"*. No hay equivalente directo de "primer programa en Python" en el currículo de referencia de Cambridge — se declara la ausencia en vez de forzar una comparación que no existe. Pero el *razonamiento* de Cambridge es útil por contraste: si una universidad de referencia elige deliberadamente un lenguaje que no deja fallar al programa para proteger al principiante, eso es evidencia indirecta de que un lenguaje que sí deja fallar — como Python — exige más andamiaje explícito alrededor del error, no menos. *(Fuente: [Cambridge, Foundations of Computer Science, Part IA](https://www.cl.cam.ac.uk/teaching/2122/FoundsCS/).)*

**Honestidad metodológica — Oxford:** no se encontró material académico de Oxford (no comercial) específico de "primera lección de programación en Python" distinto del ya usado en N1.M1.T1 (OxRSE, orientado a investigadores, no a principiantes absolutos). Se declara la ausencia explícitamente para este concepto exacto.

## 2. Qué concluye la investigación en CS-Ed / Learning Sciences

**Notional machines (Sorva, 2013):** el modelo del intérprete como ejecutor debe ser un **objetivo de aprendizaje explícito**, enseñado directamente — no algo que se asume que el estudiante infiere solo. T1 ya lo hacía (Bloque de teoría "¿Qué pasa cuando ejecutas código?"); la investigación confirma que ese bloque no es opcional ni decorativo: es, según Sorva, la intervención pedagógica de mayor impacto en la primera exposición a un lenguaje. *(Fuente: [Sorva, "Notional Machines and Introductory Programming Education", ACM TOCE 2013](https://dl.acm.org/doi/10.1145/2483710.2483713).)*

**"All Syntax Errors Are Not Equal" (Denny, Luxton-Reilly, Tempero):** los errores de sintaxis no son una categoría uniforme — algunos (paréntesis/comillas sin cerrar) están documentados entre los más frecuentes y persistentes en programadores novatos, mientras otros son raros. Esto confirma que la elección de T1 de usar exactamente ese error (`print("hola"` sin cerrar) en su ejercicio de reparación no es arbitraria: es, según esta investigación, uno de los errores de mayor frecuencia documentada en CS1. *(Fuente: [Denny, Luxton-Reilly, Tempero, "All Syntax Errors Are Not Equal"](https://www.cs.auckland.ac.nz/courses/compsci747s2c/lectures/p75-denny.pdf).)*

**Mensajes de error de compilador/intérprete (Prather, Denny et al., "Compiler Error Messages Considered Unhelpful"):** está bien documentado que los mensajes de error son difíciles de usar eficazmente para novatos — no basta con decir "lee el error": la lectura de un traceback es una habilidad que debe enseñarse explícitamente, no una que se asume transferible desde la instrucción "ejecuta y lee". **Hallazgo real:** la ficha original de T1 (`d1e3`, "repara el código roto") pedía "ejecútalo, lee el error, repáralo" sin enseñar antes ninguna estructura mínima de cómo leer un mensaje de error de Python — daba por hecho una habilidad que la literatura dice que no es automática. *(Fuente: [Prather et al., "Compiler Error Messages Considered Unhelpful"](https://amirkamil.com/papers/iticse19.pdf).)*

## 3. Síntesis crítica

Ningún enfoque institucional se copia entero. Lo que se extrae, con mecanismo explícito:

- De **MIT**, el modelo mismo del intérprete secuencial — ya presente, ahora citado con respaldo institucional exacto en vez de solo "sentido común pedagógico".
- De **Berkeley**, el vocabulario técnico explícito "expresión" — nombrar lo que T1 ya mostraba sin nombrar. Se rechaza copiar la ruta completa de Berkeley (entornos de evaluación, `call expressions` con notación formal) porque es una vía orientada a estudiantes con más base matemática formal (CS61A es un curso más denso, con SICP de fondo) — nuestro estudiante es un principiante absoluto de 25h/semana, no un estudiante de EECS de Berkeley con cálculo simultáneo. Se adopta el nombre del concepto, se rechaza su aparato formal.
- De **CS50P**, la confirmación de que debugging desde el día 1 es una práctica de referencia, no una audacia de diseño propio.
- De **Cambridge**, únicamente el razonamiento indirecto sobre por qué un lenguaje que deja fallar (Python) exige más andamiaje de lectura de errores — se **rechaza** cualquier idea de adoptar un lenguaje distinto o diferir errores: la arquitectura ya sellada de la Academia (DOC-00, AC-06: todo ejercicio vive en el subconjunto del intérprete embebido) hace ese camino inviable, no solo indeseable — rechazo con traza concreta: cambiar de lenguaje rompería el Campus completo, no es una opción de diseño de lección.
- De **Prather/Denny**, el hallazgo real que produce el único ajuste estructural de esta investigación.

## Decisiones de diseño derivadas de la investigación

| Decisión | Adopta / Modifica / Rechaza | Por qué | Evidencia |
|---|---|---|---|
| Modelo del intérprete secuencial como contenido explícito de Bloque 3 | Adopta | Coincide exactamente con MIT 6.0001 L1 y es el objetivo de aprendizaje nº1 según Sorva | Muy sólida |
| Nombrar explícitamente "expresión" vs. "texto literal" en el conflicto cognitivo | Modifica (nuevo, v2.0.0) | Berkeley nombra el concepto desde su primera lección; la ficha original lo mostraba sin nombrarlo | Sólida |
| Añadir una explicación mínima de "anatomía de un error de Python" antes del ejercicio de reparación (d1e3) | Modifica (ajuste real) | Prather/Denny: leer un error no es una habilidad transferible por defecto; pedirlo sin enseñarlo antes es la carencia real encontrada | Sólida |
| Mantener el error de comillas/paréntesis sin cerrar como el bug deliberado de T1 | Adopta | Denny et al.: documentado entre los errores de sintaxis más frecuentes en CS1 | Muy sólida |
| Debugging como competencia con ≥2 ejercicios de dificultad creciente (mandato DOC-11 v2.0.0) | Adopta | CS50P trata bugs desde semana 0; DOC-11 v2.0.0 lo exige explícitamente | Decisión de diseño institucional, respaldada por práctica de referencia |
| Adoptar OCaml o diferir el primer error para proteger al principiante (enfoque Cambridge) | Rechaza | Incompatible con AC-06 (intérprete embebido en Python, ya sellado en DOC-00); el razonamiento de Cambridge se aprovecha, su solución técnica no aplica | Rechazo justificado con traza concreta |
| Copiar el aparato formal de entornos/`call expressions` de CS61A | Rechaza | Audiencia distinta — CS61A asume base matemática/formal que un principiante absoluto de la Academia aún no tiene; se adopta el vocabulario, no la formalización | Decisión de diseño |

**Falsabilidad:** la anatomía mínima del error se abandonaría si el registro de observaciones (§6) muestra que, aun con esa explicación, los estudiantes siguen sin poder aplicar la lectura del error al ejercicio `d1e3` — señal de que la enseñanza explícita del error debe ser más profunda o más tardía de lo que esta versión asume, no más superficial.

## Estado
✅ Completa con revisión crítica. Un ajuste estructural real (anatomía mínima de error de Python antes de exigir su lectura). No bloquea T2.
