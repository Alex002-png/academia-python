# Informe Final de Nivel — N2 (pasada SCA v1.0)

*Rama: `nivel/n2-scav1`. Nivel: backend de servicios (FastAPI, Pydantic, auth/JWT, async, PostgreSQL, transacciones, Redis, testing/TDD, CI, Docker, deploy). Auditoría por subagente lector + verificación por razonamiento sobre el comportamiento real de las herramientas (los labs son `modalidad:"real"`, no ejecutables en Pyodide).*

## 1. Veredicto

**El contenido de N2 es sólido y la estructura completa (los 29 objetos son completables), pero enseñaba cuatro cosas técnicamente ROTAS o INSEGURAS como si fueran correctas.** Corregir eso era obligatorio: un nivel que enseña un patrón de concurrencia que se deadlockea, o que manda contraseñas en la URL, no es "nivel mundial top" por muy buena que sea su narrativa. La parte de prosa/conceptos y los 2 días Pyodide (decoradores) están bien: la auditoría verificó cada `check()` y no halló valores esperados incorrectos.

## 2. Correcciones P0 aplicadas (código/prácticas rotas o inseguras)

1. **P0-A · Lab 27 (`n2m3t4`) — la "solución" de concurrencia se deadlockea.** El código enseñado usaba `async def` + `psycopg` síncrono + `SELECT … FOR UPDATE` sosteniendo el lock a través de un `await asyncio.sleep(0.05)`. Bajo el event loop de un solo worker (`fastapi dev`), la 2.ª petición bloquea el loop entero esperando el lock de la 1.ª, que ya no puede despertar → **deadlock**; el `stock = 0` que el paso prometía es imposible. **Fix:** ruta `def` (FastAPI la corre en un threadpool → no bloquea el loop) sin `await` dentro del lock, + nota de la alternativa idiomática y superior: `UPDATE inventario SET stock = stock - 1 … RETURNING stock` (atómica; Postgres serializa la fila).
2. **P0-D · Lab 16 (`n2m1t5`) — un handler global que miente sobre el campo que falló.** `@app.exception_handler(RequestValidationError)` devolvía un mensaje hardcodeado "El campo precio debe ser numerico" para CUALQUIER error de validación de toda la app (un `nombre` faltante también culparía a `precio`). **Fix:** construir el mensaje desde `exc.errors()` → nombra el campo real; restaura la lección del Lab 14.
3. **P0-B · Labs 18-19 (`n2m2t1`, `n2m2t2`) — credenciales y tokens en la URL.** Login recibía `nombre`/`contrasena` como parámetros de query (→ contraseña en texto plano en el log de acceso, historial y proxies — lo contrario de la tesis del módulo), y los tokens viajaban como `?token=…`. **Fix:** Lab 18 login recibe un modelo Pydantic (cuerpo JSON) + verificación con hash dummy para igualar el TIEMPO de respuesta (cierra la enumeración de usuarios por timing, no solo por mensaje). Lab 19 adopta el patrón canónico de FastAPI: `OAuth2PasswordBearer` + `Depends` → el token viaja en la cabecera `Authorization: Bearer` (RFC 6750), y `Depends(usuario_actual)` queda como pieza reutilizable.

## 3. Recomendaciones sistémicas pendientes (documentadas, no bloqueantes)

Estas son mejoras reales para llevar N2 al tope; no son código roto, así que se registran aquí con el patrón de corrección exacto en vez de reescribir ~10 labs en esta pasada:

- **P0-C · sync-en-async a lo largo de M3.** Varios labs (25 en adelante) ponen llamadas `psycopg` SÍNCRONAS dentro de `async def`, el mismo antipatrón que el propio Lab 24 refuta ("time.sleep bloquea TODO"). *Fix recomendado:* rutas de BD como `def` (threadpool) — como ya se aplicó en el Lab 27 — o migrar a un driver async (`psycopg` async con `await aconn.execute`). El Lab 27 ya lleva la nota que lo explica.
- **Token-en-URL en Labs 20-23.** El patrón correcto (`Depends(usuario_actual)` + cabecera) ya se enseña en el Lab 19; los labs siguientes deben usar `headers={"Authorization": f"Bearer {token}"}` en sus pruebas y `Depends(usuario_actual)` en sus rutas, en vez de `params={"token": …}`.
- **Conexiones sin pool ni cierre.** `get_conexion()` abre una conexión por petición y nunca la cierra. *Fix:* un pool (`psycopg_pool.ConnectionPool`) inicializado en el `lifespan`.
- **`@app.on_event("startup")` está deprecado** (Lab 25) → migrar a handlers `lifespan` (FastAPI ≥0.93).

## 4. Huecos de cobertura de nivel mundial (top, para futura expansión)

Priorizados; el #1 es el más flagrante para un módulo de seguridad:

1. **Inyección SQL / consultas parametrizadas — AUSENTE como tema.** El código usa `%s` (seguro) en todas partes, pero la inyección (OWASP A03) nunca se nombra ni se demuestra; el lab de "mentalidad de atacante" (`n2m2t4`) solo cubre IDOR. Falta un lab que muestre el ataque con concatenación de strings y la defensa con parámetros.
2. **Connection pooling — ausente** (raíz también del problema del event loop).
3. **Niveles de aislamiento de transacción — presente pero fino / mal etiquetado.** El Lab 27 se titula "Aislamiento" pero no enseña READ COMMITTED / REPEATABLE READ / SERIALIZABLE ni la concurrencia optimista; solo `FOR UPDATE` (pesimista).
4. **Rate limiting / anti-fuerza-bruta en login — ausente** (diferido a N9; notable en un módulo de auth).
5. **N+1 queries, índices para la API y paginación — ausentes.**
6. **Idempotency keys — ausentes** (relevantes con los reintentos de Bitácora y los deploys graduales).
7. **Observabilidad (logs estructurados, correlation IDs, tracing) — fina.**
8. **HTTPS/TLS y revocación de JWT (logout/denylist) — no tratados.**

## 5. Veredicto de avance

**Con las 4 correcciones P0, N2 deja de enseñar código que se rompe o credenciales inseguras — su defecto más grave contra el estándar "mundial top".** El resto (P0-C, cascada de tokens, huecos de cobertura) queda documentado con su patrón de corrección exacto para una expansión posterior. La base conceptual, la narrativa de servicio continuo y los días de decoradores son sólidos. **Procede el avance, con la deuda técnica registrada arriba.**
