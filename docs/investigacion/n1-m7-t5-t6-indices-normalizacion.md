# Investigación Pedagógica de N1.M7.T5-T6 — Índices y Normalización avanzada

*Construida bajo DOC-11 v2.0.1. Temas nuevos añadidos por instrucción directa del Director, ronda de profundización de N1 (EVT-053) — último módulo de esta ronda. M7 pasa de 4 a 6 temas y cierra ahora con T6.*

## 1–2. Fuentes y evidencia

**SQLite Query Planner (sqlite.org/queryplanner.html), verificado por fetch directo.** Cita textual exacta sobre la ganancia real de un índice: *"the time required to look up the desired row is proportional to logN rather than being proportional to N... If the table contains 10 million elements, that means the query will be on the order of N/logN or about 1 million times faster."* — conexión directa y honesta con M3.T1 (Big-O) y M3.T7 (árboles, construidos en esta misma ronda de profundización): un índice SQL ES el mismo BST, aplicado dentro del motor.

**SQLite EXPLAIN QUERY PLAN (sqlite.org/eqp.html), verificado por fetch directo Y con ejecución real de `sqlite3` en Python** (no solo lectura de documentación): confirmado el formato exacto de salida — `"SCAN libros"` sin índice, `"SEARCH libros USING INDEX idx_autor_id (autor_id=?)"` con índice, `"SEARCH libros USING COVERING INDEX idx_cover (autor_id=?)"` con índice que cubre toda la consulta. Los tres formatos se confirmaron ejecutando SQLite real (vía el módulo `sqlite3` de Python), no asumidos de la documentación.

**CS50 Week 7 (SQL), ya identificado en la investigación de EVT-053, ahora instanciado explícitamente en la bibliografía de M7** — la auditoría integral de N1 (EVT-042) ya había encontrado que M7 no citaba CS50 pese a que su Semana 7 cubre exactamente SQL/joins/inyección — corregido en esta ronda.

**Hallazgo real, encontrado con ejecución de Python, no asumido:** SQLite tiene las claves foráneas DESACTIVADAS por defecto (`PRAGMA foreign_keys` empieza en `OFF`) — confirmado ejecutando el MISMO esquema con `ON DELETE CASCADE` dos veces: sin el PRAGMA, un autor borrado deja su libro huérfano intacto (`SELECT COUNT(*) FROM libros` = 1); con el PRAGMA activado antes del `DELETE`, el CASCADE funciona de verdad (`COUNT(*)` = 0). Este gotcha real, no documentado en la mayoría de tutoriales introductorios de SQLite, se convirtió directamente en el primer ejercicio de T6 (`n1m7t6e1`) y en el desafío final (`n1m7t6e7`).

## 3. Síntesis crítica

**T5 cierra un hilo que el propio M7.T2 ya había abierto sin resolver:** T2 (Consultas declarativas) menciona en su "por qué" que "alguien calcula el Big-O de M3 por ti" al hablar de JOIN — una promesa implícita de que Big-O sigue vigente dentro de SQL, sin darle tema propio. T5 la cumple explícitamente, con medición real (EXPLAIN QUERY PLAN), no solo la afirmación.

**T6 no repite T4, lo extiende con un tipo de violación distinto:** T4 (`auditar_diseno`) ya detecta columnas sin normalizar del tipo `autor_nombre` (dato duplicado que debería vivir en su propia tabla). T6 detecta un tipo DIFERENTE de violación (1NF: múltiples valores en una sola columna, ej. `"novela,clasico,realismo magico"`) — verificado releyendo el ejercicio existente de T4 antes de diseñar T6, para no duplicar el concepto.

**Decisión de diseño: el ejercicio del gotcha (`PRAGMA foreign_keys`) se enseña en DOS pasos consecutivos (e1 sin PRAGMA, e2 con PRAGMA), no en uno solo con explicación pasiva.** La razón pedagógica: el propio Informe Final de N1 (lección aprendida, EVT-042/051) ya estableció que "auditar el propio trabajo con honestidad requiere ejecución real, no solo lectura" — aplicar el mismo principio aquí significa que el estudiante ve el bug ANTES de ver la solución, con sus propios ojos, no que se le diga que existe.

## 4. Clasificación y falsabilidad

**Evidencia sólida:** las dos citas de sqlite.org verificadas por fetch directo, con los tres formatos de salida de EXPLAIN QUERY PLAN confirmados con ejecución real de `sqlite3`. El gotcha de `PRAGMA foreign_keys` confirmado empíricamente con dos ejecuciones comparadas (con y sin PRAGMA), no solo citado de la documentación. **Ausencia declarada:** Missing Semester no cubre SQL — no se fuerza esa conexión, CS50 Week 7 es la fuente suficiente y ya verificada. **Falsabilidad:** si SQLite cambiara el valor por defecto de `PRAGMA foreign_keys` en una versión futura (ya se ha discutido en su propia comunidad), el ejercicio `n1m7t6e1` debería revisarse — hoy el comportamiento por defecto está confirmado con la versión de SQLite empaquetada en Python 3 de este entorno.

## Estado
✅ Completa. 2 temas nuevos (T5, T6), 7 ejercicios cada Parte 1 + 2 ejercicios cada Parte 2 + laboratorio + desafío final cada uno, todos verificados con ejecución real de `sqlite3` antes de insertarse en `index.html`. M7 pasa de 4 a 6 temas (Días 45-56) y ahora cierra con T6 (antes cerraba con T4; se corrigió el título de `n1m7t4b` que aún decía "cierre de M7"). **Con esto se completa la ronda de profundización de los 5 módulos de N1 señalados por el Director (M2, M3, M4, M6, M7) — EVT-053 a EVT-058.**
