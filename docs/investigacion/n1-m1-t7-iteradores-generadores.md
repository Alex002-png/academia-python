# Investigación Pedagógica de N1.M1.T7 — Iteradores y generadores

*Investigación + revisión crítica integradas. Construida bajo DOC-11 v2.0.1.*

## 1–2. Fuentes y evidencia

**CS50P dedica tratamiento propio al tema** (Week 9, "Et Cetera"), presentando generadores explícitamente como protección contra quedarse sin memoria — la misma idea central que la ficha de SYL-N1 ya declara ("los datos reales no caben siempre en memoria"). *(Fuente: [CS50P — Week 9, Et Cetera](https://cs50.harvard.edu/python/weeks/9/).)*

**La documentación oficial de Python dedica tres secciones consecutivas al alcance exacto de esta lección:** 9.8 Iterators, 9.9 Generators, 9.10 Generator Expressions — en ese orden: primero el protocolo general (`__iter__`/`__next__`), después la forma corta de implementarlo con `yield`, después la forma más corta aún (expresión generadora, análoga a una comprehension con paréntesis). Es el mismo orden pedagógico que esta Academia va a seguir: protocolo → `yield` → expresión generadora. *(Fuente: [Python docs — 9.8 Iterators](https://docs.python.org/3/tutorial/classes.html#iterators), [9.9 Generators](https://docs.python.org/3/tutorial/classes.html#generators), [9.10 Generator Expressions](https://docs.python.org/3/tutorial/classes.html#generator-expressions).)*

**Honestidad metodológica — MIT 6.0001/6.0002:** no encontré una lección dedicada a generadores en ninguna de las dos ediciones de MIT verificadas — el temario de 6.0001 (14 lecciones) no le da tratamiento propio. Se declara la ausencia en vez de forzar una cita.

## 3. Síntesis crítica

**Decisión:** el modelo mental de la ficha ("un generador es un grifo, no un cubo: produce bajo demanda y recuerda por dónde iba") se mantiene como eje — es exactamente la metáfora funcional del protocolo que la documentación oficial describe (estado guardado automáticamente entre llamadas a `__next__`, sin que el programador tenga que administrar ese estado a mano). La secuencia protocolo→yield→expresión generadora de la documentación oficial se adopta como estructura del Bloque 3.

**Autocrítica — ¿cómo hacer tangible "ahorra memoria" sin inventar un dato?** La ficha pide un "experimento de memoria (lista vs. generador, medido)" como práctica principal — no una afirmación de memoria, sino una medición real. `sys.getsizeof()` (biblioteca estándar de Python, sin dependencias externas) permite medir el tamaño en bytes de una lista construida contra un objeto generador equivalente, dentro del mismo entorno Pyodide — el estudiante mide con sus propios ojos, no memoriza una cifra de un libro. **Ajuste:** el laboratorio incluye esta medición real como parte obligatoria, no como dato citado.

**Clasificación:** evidencia sólida para la secuencia y el alcance (Python docs, tres secciones consecutivas + CS50P). Ausencia declarada de MIT. El argumento de memoria se resuelve con medición real en vez de cita externa — clasificación "verificable en vivo", la más fuerte posible. **Falsabilidad:** se reconsideraría la métrica de `sys.getsizeof()` si el registro muestra que Pyodide reporta tamaños que no reflejan de forma representativa el ahorro real (por overhead propio del entorno WASM).

## Estado
✅ Completa con revisión crítica. Ausencia de MIT declarada honestamente. No bloquea T8.
