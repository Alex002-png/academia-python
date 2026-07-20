# Investigación Pedagógica de N1.M6 — Redes y APIs

*Construida bajo DOC-11 v2.0.1 (contenido Pyodide, no entorno real — a diferencia de M4/M5/T6). Investigación verificada con WebFetch real.*

## Fuentes verificadas

**MDN — HTTP Overview** (`developer.mozilla.org/en-US/docs/Web/HTTP/Overview`): confirma el modelo petición/respuesta y que HTTP corre sobre TCP. **MDN — Status codes**: confirma las 5 familias (1xx-5xx); 200 OK, 404 "el servidor no puede encontrar el recurso solicitado", 500 (genérico de servidor), 503 "el servidor no está listo para atender la petición" con recomendación del header `Retry-After`.

**requests Quickstart** (`requests.readthedocs.io/en/latest/user/quickstart/`): confirma GET/POST, `r.json()`, `raise_for_status()`. Cita textual sobre timeouts: *"Nearly all production code should use this parameter in nearly all requests. Failure to do so can cause your program to hang indefinitely."* Confirma excepciones: `ConnectionError`, `Timeout`, `HTTPError`.

**API real usada como fixture**: `jsonplaceholder.typicode.com` — verificada activa (fetch real a `/users/1`), sin autenticación, estructura JSON anidada real (objeto `address` con subobjeto `geo`, objeto `company`) — es la fuente de los datos simulados de este módulo, no una invención.

**Google SRE Book** (`sre.google/sre-book/addressing-cascading-failures/`): cita textual verificada — *"Always use randomized exponential backoff when scheduling retries"* — con justificación sobre el efecto de amplificación de reintentos sincronizados.

**GitHub Secret Scanning** (`docs.github.com`, oficial): confirma que credenciales commiteadas "se convierten en objetivos para acceso no autorizado" — respaldo oficial, no folclore, de por qué nunca meter una API key en el código.

**Librería `tenacity`** (GitHub, verificado tras fallo de PyPI): confirma `wait_exponential`/`wait_random_exponential` como implementación real de la recomendación de Google SRE.

## Comparación pedagógica institucional *(añadida por corrección de auditoría integral, 2026-07-20 — hallazgo real: la versión original de este documento solo citaba documentación técnica, nunca cómo instituciones de referencia enseñan estos temas)*

**CS50 de Harvard, Lecture 9 (Flask/HTTP/APIs)** (`cs50.harvard.edu/college/2024/fall/notes/9/`, verificado): no enseña HTTP de forma abstracta — lo introduce mostrando GET expuesto literalmente en la URL (`?name=...`), y motiva POST explicando que "la mayoría de usuarios no escribiría argumentos en la barra de direcciones". Usa la analogía del **"sobre virtual"**: POST hace que el servidor "mire más profundo dentro del sobre" en vez de revelar los datos en la URL — enseña por contraste práctico visible/oculto, no por especificación. Esta analogía y su ejercicio de contraste (visible en URL vs. oculto en el cuerpo) se incorporaron directamente a T2 (ejercicio "GET vs. POST").

**Berkeley CS168, "Layers of the Internet"** (`textbook.cs168.io/intro/layers.html`, verificado, libro de texto público del curso): la analogía completa de sistema postal — cartero (capa física) → conectar cada casa directamente con cada otra (sin escalar) → **"introducir una oficina de correos en cada red y solo conectar las oficinas entre sí"** en vez de conectar cada casa con cada casa. Los routers "no envían ni reciben su propio correo, solo ayudan a conectar otras casas". Esta analogía, con su argumento cuantitativo explícito (n\*(n-1)/2 conexiones sin oficina central vs. n con ella), se incorporó como ejercicio nuevo en T1.

**Ausencia declarada con honestidad:** no se encontró investigación de CS-Ed ampliamente citada (SIGCSE/ICER) específicamente sobre errores conceptuales de HTTP. El paper más cercano — Papastergiou (2005), *"Students' Mental Models of the Internet"*, Education and Information Technologies — solo se confirmó por búsqueda, no por fetch directo (paywall de Springer); su hallazgo más citado (estudiantes representan Internet como "una sola computadora central") se menciona aquí sin usarse como base de un ejercicio, precisamente por no estar verificado con el mismo rigor que el resto de esta investigación.

## Decisión técnica importante — cliente HTTP simulado, no llamadas reales

**Hallazgo real de esta construcción:** el motor de ejecución actual del Campus (`getPyodide()`) no tiene configurado ningún mecanismo de red real (no hay `pyfetch` ni el shim `pyodide-http` que la librería `requests` necesitaría para funcionar dentro del sandbox del navegador — confirmado por ausencia en el código, no supuesto). Añadir esa capacidad implicaría trabajo de plataforma nuevo (CORS, asincronía, no-determinismo de respuestas reales para un `check()` reproducible) que no es parte de este módulo de contenido.

**Decisión de diseño:** los ejercicios usan un **cliente HTTP simulado** (`api_get`), provisto como parte del código base de cada ejercicio, cuyas respuestas son fixtures fieles a la estructura REAL verificada de `jsonplaceholder.typicode.com` — no inventadas, solo no obtenidas en vivo. Se declara esto explícitamente al estudiante como una continuación directa del tema ya sembrado en M5.T1 ("esto es el simulador; la máquina real es distinta") — el mismo principio, aplicado ahora a la red en vez de al sistema de archivos. El laboratorio real con una API pública de verdad (SYL-N1 T2 lo pide explícitamente: "sin tutorial mascado") queda como recurso ⭐ de profundización para cuando el estudiante trabaje en su propia terminal (ya tiene M5.T1/T2 y M4 para hacerlo por su cuenta).

## Clasificación y falsabilidad

**Evidencia sólida:** todas las citas HTTP/requests/SRE/GitHub vienen de fetch directo verificado. **Decisión de diseño explícita, no evidencia externa:** el cliente simulado — está justificada por una limitación técnica real de la plataforma, declarada con la misma honestidad que rige toda esta Academia. **Falsabilidad:** si en el futuro se implementa `pyodide-http` en el motor del Campus, este módulo debería revisarse para ofrecer también la opción de llamadas reales, no solo simuladas.
