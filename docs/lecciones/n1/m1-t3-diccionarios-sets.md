# N1.M1.T3 — Diccionarios y sets

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n1-m1-t3-diccionarios-sets.md`](../../investigacion/n1-m1-t3-diccionarios-sets.md) — construida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial).
>
> Motor de ejecución: **Pyodide (Python real en el navegador)**.

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N1.M1.T3 |
| **Gran pregunta del módulo (M1)** | ¿Cómo organizamos programas para que sigan siendo comprensibles cuando crecen? |
| **Gran pregunta de esta lección** | Si ya sabes buscar algo en una lista revisando uno por uno, ¿por qué necesitarías una estructura que busque "de un salto"? |
| **Prerrequisitos** | N1.M1.T2 (listas y tuplas — la inmutabilidad de las claves conecta directo) |
| **Competencias** | C-N1-01, C-N1-02 |
| **Duración** | Heurística. Escalera densa (7 categorías) + laboratorio integrador + desafío final. |
| **Conexión con N0** | N0 nunca tuvo una colección con identidad propia — cada dato se nombraba por posición (índice) o vivía solo. Hoy, por primera vez, un dato se nombra por lo que ES (una clave), no por dónde está. |
| **Conexión con N1.M1.T2** | El error habitual "las claves deben ser inmutables" conecta directo con T2: una tupla puede ser clave, una lista nunca — la misma distinción mutable/inmutable de ayer, ahora con una consecuencia nueva. |
| **Conexión con N1.M1.T4 (Comprehensions)** | Diccionarios y sets tendrán su propia sintaxis de comprehension, generalizando lo que T4 enseña sobre listas. |

## Bloque 0 — Preparación del Tutor

**Recuperación (T2):** 1) ¿Por qué `b = a` seguido de `a.append(x)` también cambia lo que ves al imprimir `b`? 2) ¿Qué diferencia una operación destructiva de una no destructiva?

**Diagnóstico relámpago:** *"Si tuvieras 10,000 estudiantes y quisieras encontrar las notas de 'Alex' por su nombre, ¿preferirías una lista larga que revisas uno por uno, o algo que te lleve directo a su nota?"*

**Problema motivador:** *"Quiero guardar el precio de cada producto de una tienda y encontrar el precio de 'pan' sin revisar producto por producto."* Con dos listas paralelas (nombres y precios, sincronizadas por posición) es frágil y lento — hace falta una estructura que busque por lo que el dato ES, no por dónde está.

**Errores deliberados a inyectar:**
1. Buscar por VALOR en vez de por CLAVE (`for clave in inventario: if inventario[clave] == 5: ...` cuando el objetivo real era `inventario["pan"]` directo) — funciona, pero traiciona la razón de ser de un diccionario.
2. `inventario["queso"]` cuando `"queso"` no es una clave existente → `KeyError` sin manejar. Clase: **un diccionario no perdona una clave que no existe, a menos que se lo pidas explícitamente con `.get()`**.

## Bloque 1 — Intuición, analogía e historia

**Hook:** *"Hasta ahora, para encontrar algo en una colección tenías que revisarla de principio a fin. Hoy usas una estructura que te lleva directo a lo que buscas, sin revisar nada más."*

**Analogía (ficha SYL-N1, verificada como predictiva):** un diccionario es el **índice de un libro** — "fotosíntesis → página 214". No lees el libro entero buscando "fotosíntesis": saltas directo a la página. **Prueba de que es predictiva:** un estudiante que recuerde solo esta imagen predice correctamente que buscar en un diccionario de 10 elementos o de 10,000 "se siente" igual de rápido — el índice no se vuelve más lento porque el libro tenga más páginas, siempre y cuando sepas el nombre exacto que buscas.

**Historia (costo real, alcance deliberadamente acotado):** los diccionarios de Python están construidos, desde el origen del lenguaje, sobre una estructura pensada para que buscar por clave sea prácticamente instantáneo sin importar cuántos elementos tenga — a diferencia de una lista, donde buscar un valor exige, en el peor caso, revisar cada elemento uno por uno. *Cómo* logran esa velocidad (el mecanismo interno) es contenido de N1.M3 (Algoritmos y Estructuras de Datos) — aquí basta con el comportamiento observable: buscar por clave no se siente más lento aunque el diccionario crezca.

## Bloque 2 — Conflicto cognitivo

```python
inventario = {"pan": 5, "leche": 12}
inventario["pan"] = 8
print(inventario)
```

**Predicción esperada:** ¿el resultado tiene 2 entradas o 3? ¿Qué pasó con el "pan": 5 original?

La sorpresa: **sigue teniendo 2 entradas**. Una clave nunca se repite dentro de un diccionario — asignar a una clave que ya existe **actualiza** su valor, no agrega una entrada nueva. `inventario["pan"]` ahora vale `8`, y el `5` original ya no existe en ningún lado.

## Bloque 3 — Explicación rigurosa

**El modelo (ficha SYL-N1):** el diccionario como **índice de un libro** — de una clave a un valor, en un salto, sin recorrer.

**Sintaxis esencial:**
```python
inventario = {"pan": 5, "leche": 12}
print(inventario["pan"])           # 5 -- acceso directo por clave
inventario["huevos"] = 8            # agrega una clave nueva
inventario["pan"] = 6               # actualiza una clave existente (Bloque 2)
print("pan" in inventario)          # True -- pertenencia, sin buscar el valor
del inventario["leche"]             # elimina una clave
print(inventario.get("queso", 0))   # 0 -- sin KeyError, con valor por defecto
for clave in inventario:
    print(clave, inventario[clave])
for clave, valor in inventario.items():
    print(clave, valor)
```

**`KeyError` vs. `.get()`:** acceder con corchetes a una clave que no existe (`inventario["queso"]`) lanza `KeyError` — un diccionario no asume nada por ti. `.get(clave, default)` pide el valor y, si la clave no está, devuelve el `default` en vez de tronar. Elegir entre ambos es una decisión: usa corchetes cuando la clave DEBE existir (y si no existe, es un bug real que quieres ver); usa `.get()` cuando la ausencia es un caso válido y esperado.

**Sets — colecciones de valores únicos, sin clave ni orden:**
```python
vistos = {"ana", "luis", "ana", "eva"}
print(vistos)          # {'ana', 'luis', 'eva'} -- el duplicado desaparece solo
print("ana" in vistos) # True -- pertenencia, igual de directa que en un dict
```
Un set responde una sola pregunta — "¿esto ya está aquí?" — igual de rápido que un dict responde "¿cuál es el valor de esta clave?", porque comparten el mismo mecanismo interno por debajo (de nuevo: el mecanismo formal es contenido de M3).

**Claves inmutables — conecta directo con T2:** una clave de diccionario (o un valor dentro de un set) debe ser de un tipo inmutable. Un string o un número siempre sirven; una tupla sirve si a su vez solo contiene elementos inmutables; **una lista nunca puede ser clave** — intentarlo lanza `TypeError: unhashable type`. No es una restricción arbitraria: una clave que pudiera cambiar por dentro (como una lista) rompería la estructura interna que hace posible la búsqueda instantánea.

## Bloque 4 — Escalera de práctica

*Nota de densidad (DOC-11 v2.0.1): siete categorías.*

**Predecir:**
1. El conflicto del Bloque 2.
2. `inventario.get("queso")` sin default, cuando `"queso"` no es clave — ¿qué valor exacto devuelve?
3. `"pan" in inventario` — ¿esto busca por clave o por valor?

**Leer código:**
```python
def contar_frecuencias(palabras):
    frecuencias = {}
    for palabra in palabras:
        frecuencias[palabra] = frecuencias.get(palabra, 0) + 1
    return frecuencias
```
Sin ejecutar: ¿qué hace `frecuencias.get(palabra, 0)` la primera vez que aparece una palabra nueva, y qué hace la segunda vez que esa misma palabra vuelve a aparecer?

**Investigar / trazar:** dado un programa que hace `precios["pan"]` sin haber verificado antes que `"pan"` es una clave existente, trazar en qué línea exacta explota si `"pan"` no está, y qué tipo de error es.

**Modificar:**
1. Una función que busca un producto recorriendo una lista de tuplas `(nombre, precio)` con un `for` — convertirla para que use un diccionario y busque directo por clave, sin ningún `for`.
2. Dos listas paralelas (`nombres`, `precios`) sincronizadas por posición — convertirlas en un solo diccionario `nombre → precio`.

**Refactorizar:** una función que revisa `if clave in dict: valor = dict[clave] else: valor = 0` (dos líneas, dos accesos al diccionario) → una sola línea con `dict.get(clave, 0)`.

**Escribir:** función `contar_frecuencias(lista)` que devuelve un diccionario palabra → cantidad de apariciones (Bloque 4, "leer código", ahora escrita desde cero).

**Depurar (tres ejercicios, dificultad creciente):**
1. `KeyError` sin manejar (Bloque 0).
2. Buscar por valor con un `for` cuando el objetivo real era buscar por clave, directo.
3. *(compuesto)* Un programa intenta usar una lista como clave de un diccionario (`cache[[2, 3]] = "resultado"`) para "cachear" un resultado según dos números — el estudiante debe diagnosticar el `TypeError: unhashable type` y corregirlo usando una **tupla** en vez de una lista, conectando directamente con la inmutabilidad de T2.

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Integración real (con T2):** el laboratorio reutiliza `.split()` sobre strings (transferible de N0) y el patrón de recorrido de T2, ahora construyendo un diccionario en vez de una lista nueva.

**El proyecto — Contador de palabras:** dado un texto, contar cuántas veces aparece cada palabra usando un diccionario, y reportar la palabra más frecuente. `contar(texto)` y `mas_frecuente(frecuencias)` no deben usar `print()` — el programa principal es el único que imprime, exactamente:
```
Frecuencias: {diccionario completo}
Mas frecuente: palabra
```

**Trade-off explícito:** ¿usar `frecuencias.get(palabra, 0) + 1` o verificar primero `if palabra in frecuencias` y ramificar? Ambos son correctos — ¿cuál comunica mejor la intención con menos líneas?

**Argumento de corrección:** ¿el reporte funciona con un texto de una sola palabra? (`mas_frecuente` debería devolver esa única palabra, sin caso especial adicional).

**Confrontación de soluciones:** comparar contar frecuencias con un diccionario contra hacerlo con dos listas paralelas (palabras únicas + sus conteos) — ¿cuál escala mejor si el texto tuviera un millón de palabras? Conecta directo con la pregunta ingenieril de la ficha.

**Fase 2 — transferencia sin instrucciones repetidas:** `mas_frecuente` debe usar `max(frecuencias, key=frecuencias.get)` — se infiere, del patrón ya practicado de pasar una función/método como criterio (sembrado en N0 con `sorted(key=)` y nombrado en T1), que `max()` acepta el mismo tipo de argumento.

## Bloque 6 — Consolidación

**Defensa socrática:**
1. ¿Por qué asignar a una clave que ya existe actualiza el valor en vez de duplicar la entrada?
2. ¿Qué diferencia, en la forma de buscar, a `inventario["pan"]` de recorrer el diccionario con un `for` comparando valores?
3. *(inédita)* Si tuvieras que explicarle un diccionario de Python a alguien usando solo la idea de la lista de contactos de un celular, ¿qué dirías?

**Seis preguntas de excelencia:**
1. ¿Qué aprendí? Que una estructura puede buscar por lo que un dato ES (su clave), no por dónde está, y que eso no se vuelve más lento aunque la estructura crezca.
2. ¿Por qué existe este concepto? Porque nombrar los datos por identidad, no por posición, es más cercano a cómo pensamos el mundo real (un producto, un usuario, una palabra).
3. ¿Qué problema resuelve? Evita recorrer colecciones completas para encontrar un dato que ya sabes cómo se llama.
4. ¿Cómo lo usan los profesionales? Modelan entidades reales (un usuario, un producto) como pares clave→valor antes incluso de llegar a clases y objetos — la antesala directa de T2.M2.
5. ¿Cómo se conecta con lo anterior? Reutiliza directamente la regla de inmutabilidad de T2 — solo lo inmutable puede ser clave.
6. ¿Qué pasaría si no existiera? Cada búsqueda por identidad exigiría recorrer listas completas, y el costo crecería con cada dato nuevo, sin límite.

**Reflexión metacognitiva:**
- ¿En qué ejercicio buscaste por valor cuando debiste buscar por clave, y qué te hizo darte cuenta?
- ¿Cómo se conecta la regla "las claves deben ser inmutables" con lo que aprendiste sobre aliasing en T2?
- ¿Qué escenario real (fuera de esta lección) modelarías con un diccionario en vez de con una lista?

**Desafío final inédito:** un programa usa dos tuplas creadas por separado, con los mismos valores, como clave del mismo diccionario:
```python
cache = {}
cache[(1, 2)] = "primero"
cache[(1, 2)] = "segundo"
print(cache)
print(len(cache))
```
Predecir, ANTES de ejecutar, si el diccionario termina con 1 o 2 entradas — y explicar por qué dos tuplas construidas por separado, en dos líneas distintas, cuentan como "la misma" clave. Conecta con la idea de que la igualdad de una clave se decide por su **valor**, no por si son literalmente el mismo objeto en memoria — un matiz nuevo sobre la inmutabilidad que T2 no necesitó explicitar.

**Lectura dirigida:** [MIT 6.0001 — Lecture 6, Recursion and Dictionaries](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-6-recursion-and-dictionaries/) · [CS50P — Dictionaries](https://cs50.harvard.edu/python/shorts/dictionaries/).

**Beyond the Curriculum:** *"Un diccionario de Python es, casi literalmente, lo que una base de datos NoSQL como MongoDB guarda en disco a gran escala — y el formato JSON que casi todas las APIs devuelven (lo verás en M6) es, en la práctica, un diccionario de Python serializado como texto. Lo que hoy aprendes en memoria, en unos meses lo verás cruzar la red y persistir en disco."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados |
| 4 | Corregir | Bloque 4, "depurar" (3, incluido el caso compuesto de clave inmutable) |
| 5 | Modificar | Bloque 4, "modificar" (2) + "refactorizar" |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (igualdad de clave por valor, no por identidad) |
| 7 | Usar en un proyecto | Bloque 5, contador de palabras integrando recorrido de T2 |

**Instrumento DOC-02:** RM-03 + TD-01. Evidencia observable: dado un enunciado, elige la estructura correcta y defiende el porqué con el coste de búsqueda como argumento (evidencia de dominio ya declarada en SYL-N1).

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [MIT 6.0001 — Lecture 6](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-6-recursion-and-dictionaries/) | MIT OpenCourseWare | EN | ~50 min | Introductorio | Introduce el diccionario justo después de listas/tuplas, la misma secuencia que esta Academia sigue | 🟢 Antes de estudiar |
| [CS50P — Dictionaries](https://cs50.harvard.edu/python/shorts/dictionaries/) | Harvard (CS50) | EN | ~10 min | Introductorio | Unidad dedicada exclusivamente a diccionarios, confirmando que el tema merece tratamiento propio | 🔵 Durante la lección |
| [Python docs — 5. Data Structures](https://docs.python.org/3/tutorial/datastructures.html) | Python Software Foundation | EN | ~20 min | Introductorio | Referencia oficial de diccionarios y sets, incluida la regla exacta de claves inmutables | 🔵 Durante la lección |
| [Students' Misconceptions and Other Difficulties in Introductory Programming: A Literature Review](https://dl.acm.org/doi/10.1145/3077618) | Qian & Lehman, ACM TOCE 2018 | EN | ~40 min | Avanzado | Revisión general de la literatura de misconceptions — no específica de diccionarios, pero confirma que estas confusiones son un fenómeno real y estudiado, no anecdótico | ⭐ Profundización opcional |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
