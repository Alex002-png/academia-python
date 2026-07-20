# Decisión de Arquitectura de N2 — Servicio real vs. Pyodide

*No es investigación pedagógica (no aplica el formato de los demás documentos de `docs/investigacion/`) — es el registro de verificación técnica que sostiene EVT-045.*

## La pregunta

SYL-N2 M1.T2 exige un servicio FastAPI que "permanece vivo, escuchando indefinidamente" y que Bitácora sigue llamando "entre sesiones reales", incluso cuando el estudiante no está mirando. ¿Puede el motor actual del Campus (Pyodide, un sandbox de Python en el navegador) sostener esto?

## Verificación realizada (no supuesta — ejecutada)

Se cargó Pyodide real (mismo motor del Campus) en un entorno Node headless, se instaló `fastapi`+`httpx` vía `micropip` (disponibles en Pyodide desde su versión 0.29.0, octubre 2025), y se probaron tres escenarios:

1. **Endpoint síncrono (`def`) con FastAPI real** → `RuntimeError: can't start new thread`. FastAPI/Starlette envían los handlers síncronos a un threadpool (`anyio.to_thread.run_sync`), que en Pyodide/WASM no tiene hilos de sistema operativo reales que abrir.
2. **`fastapi.testclient.TestClient` (el que SYL-N2 M1.T2 nombra explícitamente) con un endpoint `async def`** → el mismo error. `TestClient` puentea sync→async con un *thread portal* de `anyio` — exige exactamente el mismo recurso ausente.
3. **Endpoint `async def` + `httpx.AsyncClient(transport=httpx.ASGITransport(app=app))`, invocado con `await` dentro de una función async** → funciona de punta a punta: enrutamiento, inyección de dependencias, validación real de Pydantic v2 (`200` en el caso válido, `422` con `detail[0]["type"]=="float_parsing"` en el inválido).

**Conclusión técnica:** FastAPI + Pydantic v2 corren de verdad dentro de Pyodide — no hace falta simular nada a nivel de framework —, pero exclusivamente bajo el patrón `async def` + `httpx.AsyncClient`/`ASGITransport`, nunca `def` síncrono ni `TestClient`.

**El límite real, más profundo que la sintaxis:** ninguna de las tres variantes resuelve que un proceso dentro de una pestaña de navegador deja de existir en cuanto la pestaña se cierra o recarga. Bitácora "llamando entre sesiones reales, exista o no el estudiante para verlo" (M1.T2) requiere un proceso que sobreviva más allá de la sesión del Campus — algo que ninguna variante de Pyodide puede ofrecer, por ser frontera de plataforma, no un detalle de sintaxis resoluble.

## Decisión (Director, 2026-07-20)

M1–M5 de N2 —el bloque completo que extiende el servicio persistente y el hilo narrativo de Bitácora— se construyen en modalidad `real` (DOC-12), en la terminal propia del estudiante, exactamente como ya se validó en N1 (M4 Git, M5 procesos/terminal, Laboratorio 12). Pyodide se reserva para ejercicios aislados, sin estado, que no dependan de un proceso vivo entre sesiones (p. ej. escribir un decorador suelto en M1.T1 antes de tocar FastAPI, o codificar/decodificar un JWT en M2.T2 como drill previo a integrarlo en el servicio real).

## Falsabilidad

Si en el futuro el Campus incorporara un backend real (no solo el navegador) capaz de mantener procesos vivos entre sesiones del estudiante, esta decisión debería revisarse — el límite documentado aquí es de la plataforma actual, no un límite conceptual de Pyodide para siempre.
