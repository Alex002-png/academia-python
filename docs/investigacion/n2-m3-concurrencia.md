# Investigación Pedagógica de N2.M3 — Muchos a la Vez

*Construida bajo DOC-12 (modalidad `real`, EVT-045), sobre el mismo servicio continuo de M1-M2. Investigación verificada con WebFetch real.*

## T1 · De uno a muchos: async/await

**Fuente oficial verificada (`fastapi.tiangolo.com/async/`, fetch directo):** confirma la regla exacta de cuándo usar `async def` vs `def` (`async def` cuando se usan librerías con soporte `await`; `def` normal es el default seguro si hay duda), y qué hace `await` literalmente: *"pause execution... allowing the server to handle other requests... then resumes when ready"*. **La analogía de las hamburguesas, tomada directamente de la fuente oficial, no inventada por esta Academia:** pedir una hamburguesa y sentarse a conversar mientras se prepara (concurrencia — recomendado para APIs web, mucha espera de E/S) vs. quedarse parado en el mostrador sin poder hacer nada más hasta que termine (paralelismo — mejor para cómputo intensivo, como Machine Learning). Esta analogía coincide, de fuente primaria, con el modelo mental ya diseñado en SYL-N2 T1 ("un solo cocinero que atiende varias mesas cediendo el turno").

## T2 · La notaría se convierte en servidor: PostgreSQL

**Fuente oficial verificada (`postgresql.org/docs/current/tutorial-arch.html`, fetch directo):** confirma el modelo cliente/servidor exacto — el proceso `postgres` (postmaster) permanece corriendo, esperando conexiones, y **hace fork de un proceso nuevo por cada conexión entrante**, cita textual: *"it starts ('forks') a new process for each connection. From that point on, the client and the new server process communicate without intervention by the original postgres process."* Esto ancla con precisión el modelo mental de SYL-N2 T2 ("la notaría se muda a un edificio propio, con muchas ventanillas abiertas a la vez").

## T3 · Cuando dos quieren lo mismo a la vez (Momento Fundacional de M3)

**Sin fuente externa nueva:** el fenómeno de condición de carrera (lost update) es una propiedad demostrable directamente mediante experimento reproducible (peticiones concurrentes reales contra un contador compartido en PostgreSQL) — no requiere cita de autoridad externa, la evidencia es el propio resultado incorrecto observado. Se apoya conceptualmente en la arquitectura de procesos concurrentes ya verificada en T2.

## T4 · Aislamiento: lo que la transacción promete y lo que no

**Reutilización deliberada (DP-07):** se apoya en `sqlite.org/transactional.html`, ya verificado en `docs/investigacion/n1-m7-sql.md` para N1.M7.T3 (modelo ACID), extendiendo el concepto de transacción "todo o nada" con el mecanismo de bloqueo que PostgreSQL aplica para prevenir la condición de carrera de T3.

## T5 · Invertir para no repetir: caché con Redis

**Fuente oficial verificada (`redis.io/docs/latest/develop/get-started/data-store/` y `redis.io/docs/latest/commands/expire/`, fetch directo):** Redis confirmado como "Remote Dictionary Server", con ejemplos reales de SET/GET vía `redis-py` (`r = redis.Redis(host="localhost", port=6379, db=0, decode_responses=True)`). El comando **EXPIRE** confirmado con su semántica exacta: *"Set a timeout on key. After the timeout has expired, the key will automatically be deleted."* — la base técnica exacta de la metáfora ya diseñada en SYL-N2 T5 ("una fotografía de un resultado, tomada en un instante... el problema no es tomarla, es saber cuándo tirarla").

## Clasificación y falsabilidad

**Evidencia sólida:** las cuatro citas técnicas (FastAPI async, PostgreSQL arquitectura cliente/servidor, Redis EXPIRE) verificadas por fetch directo a documentación oficial primaria. **Ausencia declarada:** no se buscó investigación de CS-Ed específica sobre cómo estudiantes aprenden condiciones de carrera — el fenómeno se enseña por experimento reproducible directo (T3), no por cita de literatura pedagógica externa. **Falsabilidad:** si el registro de ejecución muestra que el experimento de condición de carrera de T3 no se reproduce consistentemente en el hardware del estudiante (por variabilidad de timing), el diseño del experimento debe revisarse para forzar el entrelazado de forma más determinista (por ejemplo, con `time.sleep` deliberado entre lectura y escritura).
