# Investigación Pedagógica de N1.M1.T1 — Funciones a fondo

*Primera investigación de N1 bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial). Corrige y reemplaza el intento anterior mal dirigido (Decoradores y closures, reubicado a `docs/reservado-n2/` — ver EVT-030). El M1.T1 real, según SYL-N1 v1.0.0 aprobado, es "Funciones a fondo": la ficha pedagógica ya aprobada (objetivo, prerrequisitos, errores habituales, modelo mental, por qué, evidencia de dominio, pregunta ingenieril) es el punto de partida — esta investigación la desarrolla hasta el texto real, no la rediseña.*

## 1. Cómo enseñan este concepto exacto las instituciones de referencia

**MIT 6.0001, Lecture 4 — "Decomposition, Abstraction, and Functions":** trata scope literalmente como **entorno** — "el scope de una función es un entorno completamente separado del entorno del programa principal". Al llamar una función, Python "sale" del programa principal, crea un conjunto de variables que solo existen en ese entorno, computa, y cuando encuentra `return`, toma el valor y sale del entorno de vuelta al programa. Esta lección dedica tiempo explícito a la distinción `return` vs. `print` como error de novato documentado, no como detalle menor. *(Fuente: [MIT OCW 6.0001, Lecture 4](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/6ba59859535f1566dd57a7279aeba5d1_MIT6_0001F16_Lec4.pdf).)*

**CMU 15-112, "Writing Functions":** tiene una sección **con ese nombre exacto — "Print versus Return"** — confirmando que esta distinción no es una elección pedagógica nuestra: es un punto de fricción tan documentado que una segunda institución de referencia le dedica una sección formal propia. *(Fuente: [CMU 15-112, Class Notes: Writing Functions](https://www.cs.cmu.edu/~rdriley/112/notes/notes-writing-functions.html).)*

**UC Berkeley, CS61A — diagramas de entorno (frames):** el modelo formal más riguroso encontrado hasta ahora en toda la Academia para trazar llamadas de función: cada llamada crea un **frame** (marco) con sus propias ligaduras nombre→valor, con un **padre** (el frame donde la función fue definida) — y ese frame desaparece cuando la función termina. Es la versión formal, con notación gráfica, exacta del "espacio de nombres que nace y muere en cada llamada" que la ficha de SYL-N1 ya declara como modelo mental. *(Fuente: [CS61A, Environment Diagrams](https://cs61a.org/study-guide/environments-hof/).)*

**Honestidad metodológica — Oxford y Cambridge:** igual que en las investigaciones de N0, ninguna de las dos tiene un curso de CS1 con Python públicamente documentado con el mismo nivel de detalle pedagógico para este micro-concepto. Se declara la ausencia en vez de forzarla.

## 2. Qué concluye la investigación en CS-Ed / Learning Sciences

**La confusión `print`/`return` está documentada, no es anecdótica.** La literatura confirma que los novatos confunden sistemáticamente la salida visible (`print`) con el valor que la función realmente produce (`return`) — un error que además se agrava con el error de tipo en parámetros y retorno ("confused about the use of return statement and data type of the parameter passing"). *(Fuente: síntesis de literatura sobre misconceptions de funciones — ver también el reporte de la comunidad Software Carpentry, [issue "print in functions causes confusion"](https://github.com/swcarpentry/python-novice-gapminder/issues/588), evidencia de que el problema aparece también fuera del contexto puramente académico.)*

**El scope como "entorno" necesita ser explícito, no asumido.** Igual que la investigación de N0 (Sorva 2013) mostró que el modelo del intérprete debe enseñarse como objetivo explícito, aquí la literatura y MIT coinciden: el scope de una función no es intuitivo por sí mismo — necesita una traza visual (frame/entorno) para instalarse correctamente, no solo una definición verbal.

## 3. Síntesis crítica

**Decisión:** el conflicto cognitivo central es la confusión `print` vs. `return` (ya declarada en la ficha de SYL-N1 como error habitual #1) — ahora con respaldo directo de MIT y CMU, no solo de intuición pedagógica. **Autocrítica:** ¿alcanza con explicar la diferencia, o hace falta una traza visual? La evidencia de Berkeley (frames con padre) sugiere que sí — se adopta una versión simplificada de la traza de entorno (sin la notación formal completa de CS61A, que asume una base más formal de la que tiene un estudiante recién llegado de N0) como parte del Bloque 3.

**Rechazo justificado:** se rechaza adoptar la notación gráfica completa de CS61A (frames dibujados con flechas y notación de "parent frame") porque exige una base de abstracción formal mayor que la que N0 entrega — adoptarla completa sería, otra vez, copiar el aparato de una institución con una audiencia distinta (estudiantes de EECS de Berkeley, no un principiante de 25h/semana recién graduado de N0). Se adopta el **concepto** (entorno propio que nace y muere) sin la notación gráfica formal.

## Decisiones de diseño derivadas de la investigación

| Decisión | Adopta / Modifica / Rechaza | Por qué | Evidencia |
|---|---|---|---|
| Conflicto cognitivo central: confusión `print` vs. `return` | Adopta (ya en ficha SYL-N1) | Respaldo directo de MIT L4 y de una sección dedicada de CMU con ese nombre exacto | Muy sólida |
| Scope como "entorno separado que nace y muere" (sin notación gráfica formal de frames) | Modifica — se adopta el concepto, se rechaza la notación completa de Berkeley | Berkeley asume una base de formalismo que un estudiante recién llegado de N0 no tiene todavía | Sólida (concepto), decisión de diseño (nivel de formalismo) |
| Mencionar la confusión de tipos en parámetros/retorno como error secundario, no central | Adopta, con prioridad menor | La literatura la documenta pero como error compuesto sobre la confusión print/return, no independiente | Sólida |

**Falsabilidad:** se reconsideraría el nivel de formalismo de la traza de entorno si el registro de observaciones muestra que la versión simplificada no previene el error de scope en la práctica real — en ese caso, se adoptaría más del aparato formal de Berkeley, no menos.

## Estado
✅ Completa con revisión crítica. Reemplaza y corrige el intento anterior mal dirigido. No bloquea el resto de M1.
