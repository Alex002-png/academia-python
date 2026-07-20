# N1.M1.T7 — Iteradores y generadores

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n1-m1-t7-iteradores-generadores.md`](../../investigacion/n1-m1-t7-iteradores-generadores.md) — construida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial).
>
> Motor de ejecución: **Pyodide (Python real en el navegador)**.

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N1.M1.T7 |
| **Gran pregunta del módulo (M1)** | ¿Cómo organizamos programas para que sigan siendo comprensibles cuando crecen? |
| **Gran pregunta de esta lección** | Si un `for` ya sabe recorrer una lista, ¿qué hay realmente "debajo" de esa capacidad — y qué pasa cuando los datos no caben en memoria de una sola vez? |
| **Prerrequisitos** | N1.M1.T2 (recorrido con `for`), N1.M1.T4 (comprehensions — la expresión generadora es su prima directa) |
| **Competencias** | C-N1-01, C-N1-06 |
| **Duración** | Heurística. Escalera densa (7 categorías) + laboratorio con medición real de memoria + desafío final. |
| **Conexión con N1.M1.T2** | El `for x in lista:` que T2 enseñó es, por dentro, exactamente el protocolo que hoy se revela — nunca fue magia, siempre fue `__iter__`/`__next__` funcionando en silencio. |
| **Conexión con N1.M1.T4** | La expresión generadora usa la MISMA sintaxis que una comprehension, con paréntesis en vez de corchetes — generaliza directamente lo ya practicado. |
| **Conexión con N1.M1.T8 (Ficheros)** | T8 exige T7 como prerrequisito explícito ("iterar líneas"): leer un archivo línea por línea ES iterar de forma perezosa, sin cargarlo entero en memoria — hoy se siembra el mecanismo exacto que T8 va a usar. |

## Bloque 0 — Preparación del Tutor

**Recuperación (T5):** 1) ¿Por qué una excepción no atrapada sigue subiendo por la cadena de llamadas? 2) ¿Qué diferencia EAFP de LBYL?

**Diagnóstico relámpago:** *"Cuando escribes 'for x in lista:', ¿qué crees que hace Python exactamente para saber cuál es el 'siguiente' elemento cada vez? ¿Y si la lista tuviera mil millones de elementos y no cupiera en la memoria de tu computadora?"*

**Problema motivador:** *"Quiero procesar una secuencia de un millón de números, uno por uno, sin construir la lista completa en memoria primero."* No resoluble con lo de T2-T4: toda colección vista hasta ahora existe completa en memoria antes de poder recorrerla.

**Errores deliberados a inyectar:**
1. Consumir un generador dos veces (recorrerlo con un `for`, y luego intentar recorrerlo de nuevo) → la segunda vez no produce NADA, silenciosamente, sin error. Clase: **un generador agotado no se puede "reiniciar" — hay que crear uno nuevo**.
2. Confundir `return` con `yield` dentro de una función: `return` **termina** la función; `yield` la **pausa y la reanuda**, recordando exactamente dónde se quedó.

## Bloque 1 — Intuición, analogía e historia

**Hook:** *"Cada vez que escribes 'for x in lista', confías en un mecanismo que nunca viste por dentro. Hoy lo ves — y descubres una segunda forma de recorrer que no necesita tener todo listo de antemano."*

**Analogía (ficha SYL-N1, verificada como predictiva):** un generador es un **grifo, no un cubo**. Un cubo (una lista) ya tiene TODA el agua adentro, lista, ocupando espacio, antes de que uses una sola gota. Un grifo (un generador) produce agua bajo demanda, una gota a la vez, y "recuerda" el caudal sin necesitar un tanque lleno esperando. **Prueba de que es predictiva:** un estudiante que recuerde esta imagen predice correctamente que pedirle al grifo "una gota más" (`next()`) después de haber pedido varias ya, continúa exactamente donde se quedó — no empieza de cero, porque nunca hubo un cubo que "reiniciar".

**Historia (costo real, verificable):** `yield` se agregó a Python en la versión 2.2 (2001, PEP 255) precisamente para poder escribir iteradores con la sintaxis simple de una función, en vez de tener que implementar manualmente una clase completa con `__iter__` y `__next__` (el protocolo formal que la documentación oficial describe). Antes de `yield`, cada "grifo" personalizado exigía escribir una clase entera solo para recordar por dónde iba.

## Bloque 2 — Conflicto cognitivo

```python
def contar_hasta(n):
    for i in range(1, n+1):
        yield i

gen = contar_hasta(3)
print(next(gen))
print(next(gen))
for x in gen:
    print(x)
```

**Predicción esperada:** ¿qué imprime cada línea? ¿El `for` final empieza desde 1 otra vez?

La sorpresa: el `for` final **NO** reinicia desde 1 — continúa exactamente donde el generador se había quedado después de los dos `next()` manuales, imprimiendo solo `3`. El generador "recuerda por dónde iba" — el modelo mental de la ficha, en acción.

## Bloque 3 — Explicación rigurosa

**El protocolo (Python docs, 9.8 Iterators):** un iterable tiene un método `__iter__()` que devuelve un **iterador**; un iterador tiene un método `__next__()` que devuelve el siguiente valor, o lanza `StopIteration` cuando se agota. El `for` ya hace todo esto por ti, automáticamente, cada vez que lo usaste desde T2.

**`yield` — la forma corta de escribir un iterador (9.9 Generators):** una función con `yield` es un **generador**. Cada `yield` **pausa** la función (no la termina, a diferencia de `return`) y recuerda exactamente dónde se quedó, hasta la siguiente llamada a `next()`.

```python
def contar_hasta(n):
    for i in range(1, n+1):
        yield i    # pausa aqui, recuerda el valor de i

# equivalente MANUAL con el protocolo completo (mucho mas codigo)
class ContarHasta:
    def __init__(self, n): self.n = n; self.i = 0
    def __iter__(self): return self
    def __next__(self):
        self.i += 1
        if self.i > self.n: raise StopIteration
        return self.i
```

**Expresión generadora (9.10) — misma sintaxis que una comprehension, con paréntesis:**
```python
cuadrados_lista = [x**2 for x in range(5)]   # T4: construye TODO ya
cuadrados_gen = (x**2 for x in range(5))      # hoy: no construye nada hasta consumirse
```

**Un generador agotado queda vacío para siempre** — una vez lanzado `StopIteration`, no hay forma de "reiniciarlo"; hay que llamar de nuevo a la función que lo crea.

## Bloque 4 — Escalera de práctica

*Nota de densidad (DOC-11 v2.0.1): siete categorías.*

**Predecir:**
1. El conflicto del Bloque 2.
2. Intentar iterar un generador YA agotado por segunda vez — ¿error, o simplemente nada?
3. `[x**2 for x in range(3)]` frente a `(x**2 for x in range(3))` impresos directos (sin `list()`) — ¿se ven igual?

**Leer código:**
```python
def procesar(datos):
    for d in datos:
        if d > 0:
            yield d * 2
```
Sin ejecutar: ¿qué produce `list(procesar([3, -1, 4, -2]))`, y en qué orden?

**Investigar / trazar:** medir con `sys.getsizeof()` una lista de 50,000 elementos contra un generador equivalente — estimar antes de medir, y comparar la estimación con el resultado real.

**Modificar:** una función que construye una lista completa con `.append()` y la retorna → convertirla a un generador con `yield`, con el mismo resultado al recorrerla con `list(...)`.

**Refactorizar:** una comprehension usada solo para recorrerse una vez y descartarse → una expresión generadora — ahorra memoria sin cambiar el comportamiento observable.

**Escribir:** generador `multiplos(n)` que produce los múltiplos de `n`, **indefinidamente** (infinito) — algo que una lista jamás podría representar completa.

**Depurar (tres ejercicios, dificultad creciente):**
1. Consumir un generador agotado esperando que "reinicie" solo (Bloque 0).
2. Confundir `return` con `yield` — una función que debía ser generador usa `return` y nunca produce nada iterable útil.
3. *(compuesto)* Un generador se pasa por accidente a `list()` dos veces distintas esperando el mismo resultado ambas veces — diagnosticar por qué la segunda sale vacía y corregirlo creando un generador nuevo para cada uso.

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Integración real (con T2/T4):** el laboratorio reutiliza el patrón de filtrado de T4 (comprehensions), ahora expresado como generador para no materializar resultados intermedios.

**El proyecto — Procesador de flujo de líneas:** dada una lista de líneas de texto (simulando lo que en T8 será un archivo real), un generador `lineas_con_error(lineas)` que produce, una por una, solo las líneas que contienen la palabra `"ERROR"` — sin construir ninguna lista intermedia. El programa principal imprime cada línea que el generador produce, y al final cuenta el total reutilizando el mismo generador (creado de nuevo, no el mismo objeto agotado).

**Trade-off explícito:** ¿cuándo vale la pena la complejidad extra de un generador sobre una lista simple? Con pocas líneas, casi nunca — la diferencia se vuelve real con datos que no caben en memoria (la razón de ser de esta lección).

**Argumento de corrección:** ¿el generador se puede recorrer completo y de forma consistente si no hay ninguna línea con `"ERROR"`? (debe producir cero líneas, sin error).

**Confrontación de soluciones:** comparar resolverlo con una list comprehension filtrada (`[l for l in lineas if "ERROR" in l]`) contra el generador — ¿en qué momento exacto construye sus datos cada una?

**Fase 2 — transferencia sin instrucciones repetidas:** medir con `sys.getsizeof()` la lista-comprehension-equivalente contra el generador del laboratorio — se infiere, del patrón ya practicado en el Bloque 4, que la comparación es la misma.

## Bloque 6 — Consolidación

**Defensa socrática:**
1. ¿Por qué el `for` del Bloque 2 no reinicia desde 1?
2. ¿Qué diferencia real hay entre `return` y `yield` dentro de una función?
3. *(inédita)* Si tuvieras que explicarle a alguien la diferencia entre una lista y un generador usando solo la idea de una receta de cocina, ¿qué dirías?

**Seis preguntas de excelencia:**
1. ¿Qué aprendí? Que un generador produce valores bajo demanda y recuerda su propio estado, en vez de tener todo construido de antemano.
2. ¿Por qué existe este concepto? Porque los datos reales no siempre caben en memoria, y `yield` permite escribir esa lógica con la sintaxis simple de una función.
3. ¿Qué problema resuelve? Permite procesar secuencias enormes — o incluso infinitas — con memoria constante.
4. ¿Cómo lo usan los profesionales? Procesan archivos y respuestas de red línea por línea o fragmento por fragmento, sin cargar todo de una vez — lo que viene en T8 y M6.
5. ¿Cómo se conecta con lo anterior? El `for` de T2 y la comprehension de T4 usaban este mecanismo todo el tiempo, sin mostrarlo — hoy se revela.
6. ¿Qué pasaría si no existiera? Cada secuencia grande exigiría construirse completa en memoria antes de poder usarse — imposible para datos que no caben, e ineficiente incluso cuando sí caben.

**Reflexión metacognitiva:**
- ¿En qué ejercicio esperaste que un generador "se comportara como una lista", y qué te hizo notar que no era así?
- ¿Cómo se conecta la expresión generadora de hoy con las comprehensions de T4?
- ¿En qué proyecto propio (fuera de esta lección) usarías un generador en vez de una lista?

**Desafío final inédito:** dos generadores creados a partir de la misma función, ¿comparten estado o son independientes?
```python
def contador():
    n = 0
    while n < 3:
        yield n
        n += 1

g1 = contador()
g2 = contador()
print(next(g1))
print(next(g1))
print(next(g2))
```
Predecir, ANTES de ejecutar, qué imprime la última línea — ¿continúa donde `g1` se quedó, o empieza de cero? Explicar por qué: cada llamada a `contador()` crea un objeto generador **independiente**, con su propio estado — el "por dónde iba" vive en el objeto, no en la función.

**Lectura dirigida:** [CS50P — Week 9, Et Cetera](https://cs50.harvard.edu/python/weeks/9/) · [Python docs — 9.8 Iterators, 9.9 Generators, 9.10 Generator Expressions](https://docs.python.org/3/tutorial/classes.html#iterators).

**Beyond the Curriculum:** *"Lo que hoy construiste a mano (un generador que filtra líneas) es exactamente el mecanismo que usarás en T8 para leer archivos gigantes línea por línea, y en M6 para procesar respuestas de red que llegan por partes ('streaming') — incluidas las respuestas de un LLM como este mismo tutor, que 'escribe' su respuesta token por token en vez de esperar a tener el texto completo."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados |
| 4 | Corregir | Bloque 4, "depurar" (3, incluido el caso compuesto de generador reusado) |
| 5 | Modificar | Bloque 4, "modificar" (lista→generador) + "refactorizar" |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (independencia de estado entre instancias) |
| 7 | Usar en un proyecto | Bloque 5, procesador de flujo de líneas con medición real de memoria |

**Instrumento DOC-02:** RM-03 + TD-01. Evidencia observable: dado un procesamiento sobre un archivo enorme hipotético, elige generador y estima el ahorro; predice el comportamiento de un generador agotado (evidencia de dominio ya declarada en SYL-N1).

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [Python docs — 9.8 Iterators](https://docs.python.org/3/tutorial/classes.html#iterators) | Python Software Foundation | EN | ~10 min | Introductorio | Fuente oficial exacta del protocolo `__iter__`/`__next__` que el `for` usa por dentro | 🟢 Antes de estudiar |
| [Python docs — 9.9 Generators](https://docs.python.org/3/tutorial/classes.html#generators) | Python Software Foundation | EN | ~10 min | Introductorio | Referencia oficial exacta de `yield`, presentada justo después del protocolo | 🔵 Durante la lección |
| [Python docs — 9.10 Generator Expressions](https://docs.python.org/3/tutorial/classes.html#generator-expressions) | Python Software Foundation | EN | ~5 min | Introductorio | Referencia oficial exacta de la sintaxis que generaliza las comprehensions de T4 | 🔵 Durante la lección |
| [CS50P — Week 9, Et Cetera](https://cs50.harvard.edu/python/weeks/9/) | Harvard (CS50) | EN | ~1h | Intermedio | Presenta generadores explícitamente como protección contra quedarse sin memoria | 🟣 Después de terminar |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
