# N1.M3.T3 — Ordenación

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n1-m3-t3-ordenacion.md`](../../investigacion/n1-m3-t3-ordenacion.md) — construida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial).
>
> Motor de ejecución: **Pyodide (Python real en el navegador)**.

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N1.M3.T3 |
| **Gran pregunta del módulo (M3)** | ¿Cómo elegimos soluciones que continúan siendo buenas cuando el problema escala? |
| **Gran pregunta de esta lección** | ¿Cuándo reimplementarías algo que la librería ya hace mejor — y qué te dice de un ingeniero que responde "nunca" o "siempre"? |
| **Prerrequisitos** | N1.M3.T1–T2 (Big-O, Búsqueda) |
| **Competencias** | C-N1-02, C-N1-06 |
| **Duración** | Heurística. Escalera densa (7 categorías) + laboratorio integrador + desafío final. |
| **Conexión con T2 (Búsqueda)** | La búsqueda binaria CREÓ la necesidad de datos ordenados — ordenar es el costo que se paga una vez para habilitarla. |
| **Conexión con N0.M3.T3 / N1.M1.T1** | `sorted(key=...)` ya se usó en N0 sin nombrarlo, y "funciones como valores" se nombró formalmente en Funciones a fondo — hoy es el tercer encuentro con la misma idea, en un caso de uso profesional real. |

## Bloque 0 — Preparación del Tutor

**Recuperación (T2):** 1) ¿Por qué la binaria del conflicto de Búsqueda no encuentra correctamente el 1 en una lista desordenada? 2) ¿Cuántas comparaciones hace binaria en una lista de un millón?

**Diagnóstico relámpago:** *"Si tuvieras que ordenar un mazo de cartas a mano, ¿cómo lo harías? ¿Y si tuvieras que ordenarlo mil veces al día?"*

**Problema motivador:** *"Tengo una lista de productos y quiero ordenarlos por precio, pero también por nombre en otro momento, y por stock en otro — sin escribir tres funciones de ordenación distintas."*

**Errores deliberados a inyectar:**
1. Reimplementar burbuja "a mano" en producción cuando `sorted()` ya existe y es mejor — código innecesariamente lento y propenso a bugs.
2. `key` mal entendida: pasar `key=funcion()` (llamando la función, con paréntesis) en vez de `key=funcion` (pasándola como valor) — `TypeError` real.

## Bloque 1 — Intuición, analogía e historia

**Hook:** *"Hasta ahora buscaste. Hoy aprendes por qué a veces vale la pena ordenar PRIMERO — y descubres que ya usaste, sin saberlo, una de las ideas más profundas de la programación: pasar una función como valor."*

**Analogía (ficha SYL-N1, verificada como predictiva):** ordenar es una **inversión que compra búsquedas baratas** — como alfabetizar una biblioteca completa. Ordenar todos los libros toma tiempo una vez, pero cada visita posterior para buscar un título es rápida. La inversión se paga sola si vas a buscar muchas veces; no vale la pena si solo vas a buscar una.

**Historia (costo real):** bubble sort es uno de los algoritmos de ordenación más antiguos y estudiados — célebre en cualquier curso de algoritmos del mundo como el ejemplo canónico de "fácil de escribir, malo para producción". Donald Knuth, figura seminal de la informática, analizó formalmente su ineficiencia ya en *The Art of Computer Programming* — no es un algoritmo "malo" por accidente: es simple precisamente porque no está optimizado, y esa es exactamente la lección que enseña.

## Bloque 2 — Conflicto cognitivo

```python
def por_precio(producto):
    return producto[1]

productos = [("pan", 5), ("leche", 12), ("huevos", 3)]
ordenado = sorted(productos, key=por_precio)
print(ordenado)
```

**Predicción esperada:** ¿qué hace exactamente `key=por_precio` — LLAMA a la función, o le PASA la función?

La respuesta: `por_precio` **sin paréntesis** es la función misma, como valor — exactamente igual que T1 (Funciones a fondo) enseñó. `sorted()` la va a **llamar internamente**, una vez por cada elemento, para decidir el orden. Si en cambio se escribe `key=por_precio()` (con paréntesis), Python intenta llamar a la función de inmediato, sin el argumento que necesita: `TypeError: por_precio() missing 1 required positional argument`.

## Bloque 3 — Explicación rigurosa

**Burbuja (bubble sort) — O(n²):**
```python
def burbuja(lista):
    lista = lista[:]              # copia -- no destructiva
    n = len(lista)
    for i in range(n):
        for j in range(0, n - i - 1):
            if lista[j] > lista[j+1]:
                lista[j], lista[j+1] = lista[j+1], lista[j]
    return lista
```
Recorre repetidamente, intercambiando elementos adyacentes fuera de orden, hasta que la lista queda ordenada.

**Inserción (insertion sort) — O(n²), eficiente en listas casi ordenadas:**
```python
def insercion(lista):
    lista = lista[:]
    for i in range(1, len(lista)):
        actual = lista[i]
        j = i - 1
        while j >= 0 and lista[j] > actual:
            lista[j+1] = lista[j]
            j -= 1
        lista[j+1] = actual
    return lista
```
Construye la parte ordenada de a un elemento, insertando cada nuevo elemento en su posición correcta.

**`sorted()` — la herramienta profesional real:** Python usa Timsort (una variante muy optimizada de merge sort) con O(n log n) garantizado — muy por encima de burbuja/inserción para listas grandes. `key=` acepta cualquier función que devuelva el criterio de orden. **"Implementar para entender, librería para producir"** (el criterio explícito de la ficha): hoy se implementan burbuja e inserción para ENTENDER el costo real de ordenar — nunca para usarlas en un programa serio.

## Bloque 4 — Escalera de práctica

*Nota de densidad (DOC-11 v2.0.1): siete categorías.*

**Predecir:**
1. El conflicto del Bloque 2.
2. Cuántas comparaciones hace burbuja en el PEOR caso (lista al revés) para 5 elementos.
3. Qué error exacto produce `key=por_precio()` (con paréntesis).

**Leer código:** la implementación de inserción — identificar en qué línea exacta se "inserta" el elemento nuevo en su posición correcta dentro de la parte ya ordenada.

**Investigar / trazar:** trazar burbuja paso a paso sobre `[5, 2, 8, 1]`, contando cuántas pasadas completas y cuántos intercambios necesita.

**Modificar:** código que reimplementa burbuja en producción para ordenar un catálogo de productos → reemplazarlo con `sorted(key=...)`.

**Refactorizar:** una función que ordena manualmente con múltiples `if`/`elif` comparando campos → `sorted()` con una función `key` apropiada.

**Escribir:** implementar burbuja E inserción **desde cero** — la evidencia de dominio explícita de la ficha.

**Depurar (tres ejercicios, dificultad creciente):**
1. `key=funcion()` en vez de `key=funcion` — `TypeError` real (Bloque 0).
2. Reimplementar burbuja en producción cuando `sorted()` ya resolvía el problema mejor (Bloque 0).
3. *(compuesto)* Una implementación de burbuja con el rango de comparación mal acotado (compara de más en cada pasada, sin aprovechar que el final ya quedó ordenado) — no incorrecta, pero innecesariamente lenta; diagnosticar y corregir el rango.

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Integración real (con M2):** el laboratorio ordena un catálogo de productos (el mismo tipo de dato de M2) por distintos criterios, usando SOLO `sorted(key=...)` — nunca reimplementando un algoritmo de ordenación a mano.

**El proyecto — Catálogo con tres criterios:** ordenar el mismo catálogo por nombre, por precio, y por stock, con tres funciones `key` nombradas distintas — sin ningún `for` que ordene manualmente.

**Trade-off explícito (la pregunta ingenieril de la ficha, textual):** ¿cuándo reimplementarías algo que la librería ya hace mejor — y qué te dice de un ingeniero que responde "nunca" o "siempre"? (Ninguno de los dos extremos es correcto: "nunca" ignora que a veces SÍ hay que optimizar para un caso específico que la librería no cubre; "siempre" ignora que la mayoría de las veces la librería ya es mejor que cualquier cosa escrita en una tarde.)

**Argumento de corrección (para la defensa socrática, evidencia de dominio textual):** explicar con las manos por qué inserción es O(n²) — sin código, con palabras.

**Confrontación de soluciones:** comparar el código de burbuja/inserción propio (Bloque 4) contra `sorted()` para el MISMO problema — ¿cuántas líneas cuesta cada uno, y cuál sería más lento en producción con datos reales grandes?

**Fase 2 — transferencia sin instrucciones repetidas:** ordenar por un criterio COMPUESTO (primero por categoría, luego por precio dentro de cada categoría) sin que se explique el patrón — se infiere que una función `key` puede devolver una **tupla** `(categoria, precio)`, y Python la usa para desempatar en orden.

## Bloque 6 — Consolidación

**Defensa socrática:**
1. ¿Qué hace exactamente `key=por_precio` (sin paréntesis)?
2. ¿Por qué inserción es O(n²)? Explícalo con las manos.
3. *(inédita, la pregunta ingenieril de la ficha, textual)* ¿Cuándo reimplementarías algo que la librería ya hace mejor — y qué te dice de un ingeniero que responde "nunca" o "siempre"?

**Seis preguntas de excelencia:**
1. ¿Qué aprendí? Que ordenar es una inversión con costo real, y que pasar una función como criterio de orden es la misma idea de "funciones como valores" aplicada a un caso profesional.
2. ¿Por qué existe este concepto? Porque ordenar es el laboratorio clásico para entender el costo real de un algoritmo, y crea la base que la búsqueda binaria necesita.
3. ¿Qué problema resuelve? Permite preguntar rápido (búsqueda binaria) muchas veces, a cambio de pagar el costo de ordenar una vez.
4. ¿Cómo lo usan los profesionales? Casi nunca implementan su propia ordenación — usan `sorted()`/`.sort()` con la función `key` correcta, y solo optimizan a mano en casos extremadamente específicos.
5. ¿Cómo se conecta con lo anterior? `key=funcion` reutiliza directamente "funciones como valores" de Funciones a fondo; el costo de ordenar conecta con Big-O (T1) y habilita la búsqueda binaria (T2).
6. ¿Qué pasaría si no existiera `sorted()`? Cada programa reimplementaría su propia ordenación, con su propio riesgo de bugs, en vez de confiar en una implementación probada por millones de usuarios.

**Reflexión metacognitiva:**
- ¿En qué ejercicio confundiste pasar una función como valor con llamarla?
- ¿Cómo se conecta el trade-off de "implementar vs. usar librería" de hoy con el criterio de diseño OOP de "cuándo sí y cuándo no" de M2?
- ¿En qué proyecto propio (fuera de esta lección) reimplementaste algo que una función de biblioteca estándar ya resolvía mejor?

**Desafío final inédito — la estabilidad de `sorted()`:**
```python
productos = [("A", 10), ("B", 5), ("C", 10), ("D", 5)]
def precio(p):
    return p[1]
print(sorted(productos, key=precio))
```
Predecir, ANTES de ejecutar, el orden EXACTO del resultado — cuando dos productos tienen el mismo precio (A y C con 10; B y D con 5), ¿cuál queda primero? Explicar por qué `sorted()` es **estable**: entre elementos con la misma clave, conserva el orden relativo que tenían en la lista original — B antes que D, A antes que C, exactamente como llegaron.

**Lectura dirigida:** [MIT 6.0001 — Lecture 12, Searching and Sorting](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-12-searching-and-sorting/) · [CS50x — Week 3, Algorithms](https://cs50.harvard.edu/x/weeks/3/).

**Beyond the Curriculum:** *"`sorted()` usa Timsort — un algoritmo diseñado específicamente para aprovechar el orden que YA existe parcialmente en datos del mundo real (que rara vez están completamente al azar). Nombrarlo hoy es suficiente; entender por qué es tan bueno es contenido de un curso de algoritmos completo, no de esta lección."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados |
| 4 | Corregir | Bloque 4, "depurar" (3, incluido el caso compuesto de rango mal acotado) |
| 5 | Modificar | Bloque 4, "modificar" (burbuja→sorted) + "refactorizar" |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (estabilidad de sorted()) |
| 7 | Usar en un proyecto | Bloque 5, catálogo con tres criterios de orden |

**Instrumento DOC-02:** RM-03 + TD-01. Evidencia observable: explica con las manos por qué inserción es O(n²), y resuelve casos reales con `sorted(key=...)` sin dudar — notando que usar `key` es usar una función como valor (evidencia de dominio ya declarada en SYL-N1, textual).

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [MIT 6.0001 — Lecture 12](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-12-searching-and-sorting/) | MIT OpenCourseWare | EN | ~50 min | Introductorio | Misma lección de T2, cubre bubble/selection/merge sort | 🟢 Antes de estudiar |
| [CS50x — Week 3, Algorithms](https://cs50.harvard.edu/x/weeks/3/) | Harvard (CS50x) | EN | ~1h | Introductorio | Mismo trío de algoritmos elementales, con complejidad exacta | 🔵 Durante la lección |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
