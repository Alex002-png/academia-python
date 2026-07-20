# Investigación Pedagógica de N1.M7 — SQL

*Construida bajo DOC-11 v2.0.1 (Pyodide, sqlite3 es parte de la librería estándar). Investigación verificada con WebFetch real.*

## Fuentes verificadas

**Historia real (T1):** Edgar F. Codd publicó "A Relational Model of Data for Large Shared Data Banks" en 1970, en IBM (San Jose Research Laboratory) — confirmado en Wikipedia con cita a la publicación original. **Ausencia honesta declarada:** no se encontró cita textual directa de Codd sobre "separar estructura lógica de almacenamiento físico" — se infiere del contexto histórico (IBM resistió implementarlo porque protegía ingresos de su sistema jerárquico IMS/DB), no se presenta como cita literal.

**Consultas declarativas (T2):** ninguna fuente adicional nueva verificada más allá de lo ya establecido en investigaciones previas de este proyecto (M1.T4 sobre comprehensions ya trató la declaratividad).

**Inyección SQL y parámetros seguros (T3):** **documentación oficial de Python sqlite3** (`docs.python.org/3/library/sqlite3.html`) advierte explícitamente contra construir SQL con formateo de strings, con ejemplo de ataque literal; cita textual: *"Always use placeholders instead of string formatting to bind Python values to SQL statements, to avoid SQL injection attacks."* **OWASP** (`owasp.org/www-community/attacks/SQL_Injection`) confirma los riesgos reales (bypass de autenticación, lectura/modificación/destrucción de datos) y recomienda consultas parametrizadas, descartando explícitamente el escape de caracteres como solución robusta. **Transacciones:** `sqlite.org/transactional.html` confirma textualmente el modelo ACID y que "todos los cambios dentro de una transacción ocurren completamente o no ocurren en absoluto, incluso ante un corte de energía".

**Problema N+1 (contexto para T2, mencionado como advertencia):** confirmado en documentación oficial de SQLAlchemy — *"for any N objects loaded, accessing their lazy-loaded attributes means there will be N+1 SELECT statements emitted"*. **Ausencia declarada:** no existe investigación de CS-Ed ampliamente citada sobre N+1 como fenómeno pedagógico — es terminología de ingeniería/ORM, no un "misconception" estudiado en SIGCSE/ICER.

## Comparación pedagógica institucional y CS-Ed *(añadida por corrección de auditoría integral, 2026-07-20 — la versión original de este documento solo citaba documentación técnica de SQLite/Python, nunca cómo instituciones de referencia enseñan SQL, ni investigación real de errores de estudiantes)*

**CS50 de Harvard, Problem Set 7 "Movies"** (`cs50.harvard.edu/x/2025/psets/7/movies/`, verificado): progresión de 13 consultas sobre un dataset real de IMDb (movies, people, ratings, stars, directors) — de SELECT/WHERE/COUNT/AVG simples (consultas 1-4) a LIKE/ORDER BY/JOIN (5-7) a subconsultas anidadas (8-13). El scaffolding es explícito pero no regala la solución: sugiere descomponer el problema ("encuentra primero el ID de Toy Story, luego empareja personas") y da el número de filas esperado por consulta para que el estudiante se autoverifique — sin dar la consulta completa. Esta progresión de "simple a complejo sobre el mismo dataset" ya coincide con el diseño de T2 (WHERE/ORDER BY → COUNT → JOIN → GROUP BY), confirmando que el orden elegido no fue arbitrario.

**Berkeley CS186 (Introduction to Database Systems)** (`dsf.berkeley.edu/dbcourse/notes.html`, verificado): confirma la estructura de referencia (Lecture 2 "The Relational Model", Lectures 12-14 "SQL I/II/III") — no dedica una lección exclusiva a JOINs, los integra dentro de la progresión general de SQL, igual que este módulo.

**Poulsen, Butler, Alawini & Herman, "Insights from Student Solutions to SQL Homework Problems"**, SIGCSE 2020 (verificado por WebFetch directo del PDF): categoriza errores reales de estudiantes con SQL — selección/referencia incorrecta de columnas, errores de JOIN, dificultad para traducir una necesidad conceptual a sintaxis SQL. Confirma que el patrón de error más común no es de sintaxis sino de traducción concepto→consulta — exactamente lo que T2 practica con sus ejercicios de "pregunta de negocio a SQL".

**Miedema, Aivaloglou & Fletcher, "Identifying SQL Misconceptions of Novices: Findings from a Think-Aloud Study"**, ICER 2021 (verificado por WebFetch, abstract vía research.tue.nl): estudio think-aloud real con estudiantes universitarios. Hallazgo directamente aplicable, documentado en fuentes secundarias: **estudiantes esperan que `NULL = NULL` empareje filas en un JOIN**, cuando en SQL eso nunca ocurre — un misconception real y específico, no una suposición del autor. Este hallazgo se incorporó directamente como ejercicio nuevo en T2 (LEFT JOIN con un autor sin libros, cuyo resultado es `NULL`, no una fila "emparejada" con otro `NULL`).

## Decisiones de diseño

**Cuatro temas siguiendo exactamente la ficha de SYL-N1** — modelo relacional → consultas → CRUD+transacciones → diseño de esquema, sin combinar competencias.

**T3 enseña la inyección SQL de forma experimental** (SYL-N1 lo pide explícitamente: "ejecuta él mismo la inyección... y explica por qué la parametrizada es inmune") — el estudiante ve el ataque funcionar contra código inseguro, y fallar contra código parametrizado, en el mismo laboratorio. Esto es más fuerte pedagógicamente que solo leer sobre el riesgo.

## Clasificación y falsabilidad

**Evidencia sólida:** todas las citas de documentación oficial (Python sqlite3, OWASP, SQLite ACID, SQLAlchemy) verificadas por fetch directo. **Ausencia declarada:** cita textual directa de Codd sobre la separación lógica/física — se usa el contexto histórico verificado, no una atribución textual inventada. **Falsabilidad:** si el registro de ejecución muestra que el experimento de inyección SQL genera más confusión que claridad, se reconsideraría su peso en la próxima revisión.
