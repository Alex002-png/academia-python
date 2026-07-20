# N1.M1.T4 — Comprehensions

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n1-m1-t4-comprehensions.md`](../../investigacion/n1-m1-t4-comprehensions.md) — construida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial).
>
> Motor de ejecución: **Pyodide (Python real en el navegador)**.

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N1.M1.T4 |
| **Gran pregunta del módulo (M1)** | ¿Cómo organizamos programas para que sigan siendo comprensibles cuando crecen? |
| **Gran pregunta de esta lección** | Si ya sabes construir una lista nueva con un `for`, ¿qué se gana comprimiéndolo en una sola línea — y qué se pierde si se hace mal? |
| **Prerrequisitos** | N1.M1.T2 (recorrido con `for`), N1.M1.T3 (diccionarios y sets) |
| **Competencias** | C-N1-01 |
| **Duración** | Heurística. Escalera densa (7 categorías) + laboratorio integrador + desafío final. |
| **Conexión con N0** | Ninguna directa — esta es la primera vez que se comprime un patrón ya dominado en vez de aprender uno nuevo desde cero. |
| **Conexión con N1.M1.T2/T3** | El patrón `lista_nueva = []; for x in lista: lista_nueva.append(transformar(x))` de T2, y `frecuencias.get(palabra, 0)` de T3, son exactamente lo que hoy se comprime — la comprehension no es magia, es el mismo código, dicho distinto. |
| **Conexión con N1.M1.T5 (Excepciones)** | El error habitual "efectos colaterales dentro de la expresión" es la misma disciplina que T5 exigirá con el manejo de errores: una comprehension debe ser una transformación pura, sin sorpresas escondidas. |

## Bloque 0 — Preparación del Tutor

**Recuperación (T3):** 1) ¿Por qué asignar a una clave que ya existe actualiza el valor en vez de duplicar la entrada? 2) ¿Qué tipos pueden ser clave de un diccionario?

**Diagnóstico relámpago:** *"¿Cómo escribirías, con un `for`, una lista con el cuadrado de cada número de otra lista? Ahora imagina decir exactamente esa misma idea en una sola línea — ¿qué información mínima necesitarías conservar?"*

**Problema motivador:** *"Tengo cuatro líneas de código que solo recorren una lista, transforman cada elemento, y lo agregan a una lista nueva. Quiero decir esa misma idea en un lenguaje que diga 'qué quiero', no 'cómo lo recorro'."*

**Errores deliberados a inyectar:**
1. Una comprehension anidada de tres niveles con lógica compleja adentro — mostrarla y preguntar: ¿la entiendes en menos de 5 segundos? Clase: **anidar hasta lo ilegible es posible, y el lenguaje no te lo va a impedir**.
2. Una comprehension usada solo por su efecto colateral (`[registro.append(x) for x in datos if x > 0]`, ignorando el valor que "construye") — funciona, pero traiciona la idea de transformación pura. Clase: **una comprehension que no se usa para construir una colección nueva es una comprehension mal elegida**.

## Bloque 1 — Intuición, analogía e historia

**Hook:** *"Cada vez que escribes 'recorre esto, transforma cada uno, y guárdalo allá', repites un patrón que ya escribiste muchas veces desde Listas y tuplas. Hoy aprendes a decirlo en una sola línea — si sabes cuándo parar."*

**Analogía (verificada como predictiva):** una comprehension es una **receta corta**. En vez de instrucciones paso a paso ("toma cada ingrediente de la lista, uno por uno, aplícale la transformación, y ponlo en el bowl nuevo"), dices directamente **"un bowl con [la versión transformada de cada ingrediente, si cumple la condición]"** — la misma idea exacta, pero descrita como el resultado final, no como una serie de pasos. **Prueba de que es predictiva:** un estudiante que recuerde esta imagen predice correctamente que una comprehension con `if` **filtra primero, transforma después** — igual que una receta descarta los ingredientes en mal estado antes de cocinarlos, no después.

**Historia (costo real, con respaldo directo de la documentación oficial):** las comprehensions vienen de la notación de conjuntos de las matemáticas ({x² : x ∈ S}) y de lenguajes de programación funcional. Python las adoptó desde el año 2000 (Python 2.0) precisamente porque el patrón "bucle que construye una lista nueva" era tan común que merecía su propia sintaxis — no es una idea nueva: es la compresión de un patrón universal que tú ya dominas.

## Bloque 2 — Conflicto cognitivo

```python
numeros = [1, 2, 3, 4, 5]
cuadrados = [n**2 for n in numeros if n % 2 == 0]
print(cuadrados)
```

**Predicción esperada:** ¿cuántos elementos tiene `cuadrados`, y cuáles son?

La sorpresa (para quien no ha visto el patrón): **no son 5 elementos** con la condición aplicada después, ni hay "huecos" para los que no cumplen. El `if` **filtra antes de transformar** — solo entran los números pares (2 y 4), y el resultado es `[4, 16]`.

## Bloque 3 — Explicación rigurosa

**Sintaxis:** `[expresión for elemento in iterable if condición]` se lee de derecha a izquierda: "para cada elemento en iterable, si condición, calcula expresión, y ponlo en la lista".

**Equivalencia exacta con el `for` (el modelo mental de la ficha: transformación declarativa):**
```python
# con for explícito
cuadrados = []
for n in numeros:
    if n % 2 == 0:
        cuadrados.append(n**2)

# la misma idea, comprimida
cuadrados = [n**2 for n in numeros if n % 2 == 0]
```

**Dict y set comprehension — generalizan T3:**
```python
codigos = {"PE": "Peru", "MX": "Mexico"}
invertido = {nombre: codigo for codigo, nombre in codigos.items()}   # dict comprehension
print(invertido)   # {'Peru': 'PE', 'Mexico': 'MX'}

palabras = ["sol", "luna", "sol", "estrella"]
largas = {p for p in palabras if len(p) > 3}                          # set comprehension
print(sorted(largas))   # ['estrella', 'luna']
```

**Cuándo NO usarlas (el error habitual central de la ficha):** si hace falta más de un `for`/`if` anidado, o si el cuerpo tiene efectos colaterales (imprimir, modificar otra variable, llamar algo con consecuencias), un `for` explícito comunica mejor la intención. Una comprehension debe ser una **transformación pura**: entra una colección, sale una colección nueva — sin ensuciar nada más por el camino.

## Bloque 4 — Escalera de práctica

*Nota de densidad (DOC-11 v2.0.1): siete categorías.*

**Predecir:**
1. El conflicto del Bloque 2.
2. `[x for x in range(5)]` — ¿qué lista exacta produce?
3. `{x: x*2 for x in range(3)}` — ¿qué diccionario exacto produce?

**Leer código:**
```python
matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
aplanada = [n for fila in matriz for n in fila]
```
Sin ejecutar: ¿qué produce esta comprehension con dos `for`? (una comprehension anidada de dos niveles — se lee en el MISMO orden en que se escribirían los `for` anidados explícitos).

**Investigar / trazar:** `[n for n in numeros if n > 0 if n < 10]` (dos `if` consecutivos) frente a `[n for n in numeros if n > 0 and n < 10]` (un solo `if` con `and`) — ¿son equivalentes? Trazar ambos con la misma lista de entrada para confirmarlo.

**Modificar:** una comprehension usada solo por su efecto colateral (`[registro.append(x) for x in datos if x > 0]`, Bloque 0) — convertirla a un `for` explícito, porque no está construyendo ninguna colección útil con su resultado.

**Refactorizar:** un `for` de cuatro líneas que filtra y transforma una lista → una sola comprehension equivalente.

**Escribir:** dict comprehension que invierte un diccionario (clave↔valor).

**Depurar (tres ejercicios, dificultad creciente):**
1. El filtro-antes-de-transformar del Bloque 2.
2. Una comprehension con el `if` y la expresión en el orden equivocado (error de sintaxis real y común al empezar).
3. *(compuesto)* Convertir un `for` anidado de dos niveles (aplanar una lista de listas) a una comprehension de dos `for`, sin perder ni el orden ni la lógica original — combina el Bloque 4 "leer código" con producción activa.

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Integración real (con T2/T3):** el laboratorio reutiliza tuplas `(nombre, nota)` (T2) y construcción de diccionarios (T3), ahora expresadas con comprehensions.

**El proyecto — Reporte de notas:** dada una lista de tuplas `(nombre, nota)`, construir con comprehensions: 1) la lista de nombres de quienes aprobaron (nota ≥ 11), 2) un diccionario nombre→nota SOLO de quienes aprobaron, 3) el promedio de las notas aprobadas (usando `sum()`/`len()`, ya conocidos). Ninguna función debe usar `print()` internamente.

**Trade-off explícito:** ¿en qué punto una comprehension de una línea empieza a ser más difícil de leer que tres líneas con un `for`? No hay una regla numérica oficial (verificado: ni PEP 8 ni el Zen de Python dan un límite exacto) — es un juicio de legibilidad real, el mismo que se toma en cualquier equipo de ingeniería.

**Argumento de corrección:** ¿el reporte funciona si nadie aprobó? (la lista y el diccionario deben quedar vacíos, y el promedio no debe explotar con una división entre cero).

**Confrontación de soluciones:** Python también ofrece `filter()` y `map()` para transformar/filtrar colecciones — mencionarlas y notar que la comunidad Python prefiere comprehensions por legibilidad en la gran mayoría de los casos (una nota cultural del lenguaje, no una regla absoluta).

**Fase 2 — transferencia sin instrucciones repetidas:** el promedio debe calcularse reutilizando una comprehension para extraer solo las notas aprobadas antes de promediar — se infiere del patrón ya practicado en el resto del laboratorio.

## Bloque 6 — Consolidación

**Defensa socrática:**
1. ¿Por qué el resultado de `[n**2 for n in numeros if n % 2 == 0]` no tiene el mismo tamaño que `numeros`?
2. ¿Qué hace que una comprehension deje de ser "legible" y se vuelva "críptica"?
3. *(inédita)* Si tuvieras que darle a alguien UNA sola razón para preferir un `for` explícito sobre una comprehension, ¿cuál sería?

**Seis preguntas de excelencia:**
1. ¿Qué aprendí? Que una comprehension es el mismo patrón de `for` + `append()` que ya dominaba, dicho de otra forma — no un concepto nuevo desde cero.
2. ¿Por qué existe este concepto? Porque transformar y filtrar colecciones es el gesto más repetido del oficio, y mereció su propia sintaxis.
3. ¿Qué problema resuelve? Reduce cuatro líneas mecánicas a una, sin perder claridad, cuando la transformación es simple.
4. ¿Cómo lo usan los profesionales? Las usan para lo simple, y vuelven a un `for` explícito en cuanto la lógica deja de caber en una lectura clara — la elección es una decisión de diseño, no una regla fija.
5. ¿Cómo se conecta con lo anterior? Generaliza el recorrido de T2 y la construcción de diccionarios de T3 a una sola sintaxis compartida.
6. ¿Qué pasaría si no existiera? Cada transformación de colección necesitaría siempre 3-4 líneas de bucle explícito, incluso para las transformaciones más triviales.

**Reflexión metacognitiva:**
- ¿En qué ejercicio una comprehension te resultó más confusa que el `for` equivalente, y por qué crees que pasó?
- ¿Cómo decidiste, en el laboratorio, cuándo una comprehension seguía siendo legible?
- ¿Qué le dirías a alguien que solo usa comprehensions "porque se ven más profesionales", sin pensar en quién lo va a leer después?

**Desafío final inédito:** un programa usa una comprehension solo por su efecto colateral, ignorando lo que "construye":
```python
datos = [3, -1, 4, -5, 9, -2]
registro = []
resultado = [registro.append(x) for x in datos if x > 0]
print(registro)
print(resultado)
```
Predecir, ANTES de ejecutar, qué contienen `registro` y `resultado` — y explicar por qué `resultado` es una lista "inútil" aunque el código funcione sin errores. Conecta con la pregunta ingenieril de la ficha: ¿dónde está la frontera entre código conciso y código críptico?

**Lectura dirigida:** [CS50P — Week 2, Loops](https://cs50.harvard.edu/python/weeks/2/) · [Python docs — 5.1.3 List Comprehensions](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions).

**Beyond the Curriculum:** *"pandas (que verás en N4, la etapa de Machine Learning) empuja esta misma idea mucho más lejos: en vez de recorrer filas de datos con un bucle, describes QUÉ transformación quieres sobre la tabla completa, y la librería decide cómo hacerlo — el mismo salto mental de 'cómo lo recorro' a 'qué quiero' que hoy diste con comprehensions, a una escala mucho mayor."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados |
| 4 | Corregir | Bloque 4, "depurar" (3, incluido el caso compuesto de aplanado anidado) |
| 5 | Modificar | Bloque 4, "modificar" (efecto colateral) + "refactorizar" |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (comprehension usada solo por efecto colateral) |
| 7 | Usar en un proyecto | Bloque 5, reporte de notas integrando T2/T3 |

**Instrumento DOC-02:** RM-03 + TD-01. Evidencia observable: convierte bucles a comprehensions y viceversa, y explica cuál conviene en cada caso — incluida la decisión de legibilidad (evidencia de dominio ya declarada en SYL-N1).

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [CS50P — Week 2, Loops](https://cs50.harvard.edu/python/weeks/2/) | Harvard (CS50) | EN | ~1h | Introductorio | Trata comprehensions junto a los bucles, y de nuevo más adelante como decisión de estilo — el mismo doble tratamiento de esta lección | 🟢 Antes de estudiar |
| [Python docs — 5.1.3 List Comprehensions](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions) | Python Software Foundation | EN | ~10 min | Introductorio | Referencia oficial exacta de la sintaxis, presentada justo después del for — el mismo orden de esta lección | 🔵 Durante la lección |
| [PEP 20 — The Zen of Python](https://peps.python.org/pep-0020/) | Python Software Foundation | EN | ~5 min | Introductorio | La filosofía oficial del lenguaje ("Readability counts") detrás del criterio de cuándo NO usar una comprehension | 🔵 Durante la lección |
| [PEP 8 — Style Guide for Python Code](https://peps.python.org/pep-0008/) | Python Software Foundation | EN | ~30 min | Intermedio | Verificado directamente: no da una regla numérica sobre comprehensions — útil para constatar que la legibilidad es un juicio, no una fórmula | ⭐ Profundización opcional |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
