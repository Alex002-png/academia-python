# N1.M3.T2 — Búsqueda

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n1-m3-t2-busqueda.md`](../../investigacion/n1-m3-t2-busqueda.md) — construida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial).
>
> Motor de ejecución: **Pyodide (Python real en el navegador)**. Igual que en T1, los ejercicios miden con conteo de pasos, no con reloj de pared.

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N1.M3.T2 |
| **Gran pregunta del módulo (M3)** | ¿Cómo elegimos soluciones que continúan siendo buenas cuando el problema escala? |
| **Gran pregunta de esta lección** | ¿Qué estarías dispuesto a pagar (mantener orden, más memoria, más complejidad) para que buscar sea casi instantáneo — y en qué casos la búsqueda lineal "lenta" es la decisión correcta? |
| **Prerrequisitos** | N1.M3.T1 (Big-O intuitivo) |
| **Competencias** | C-N1-02, C-N1-06 |
| **Duración** | Heurística. Escalera densa (7 categorías) + laboratorio comparativo + desafío final. |
| **Conexión con N1.M1.T3 (Diccionarios y sets)** | El error habitual de la ficha ("no ver que el dict ya era búsqueda O(1)") se resuelve hoy comparando explícitamente las tres velocidades de búsqueda ya vistas o construidas en la Academia: lineal O(n), binaria O(log n), hash (dict) O(1). |

## Bloque 0 — Preparación del Tutor

**Recuperación (T1):** 1) ¿Por qué buscar en una lista 1000 veces más grande no tarda "solo un poquito más"? 2) ¿Qué diferencia real hay entre O(n) y O(n²)?

**Diagnóstico relámpago:** *"Si tuvieras un diccionario físico (de papel) y buscaras una palabra, ¿la buscarías de la primera página a la última, o abrirías por la mitad?"*

**Problema motivador:** *"Tengo una lista ORDENADA de un millón de números y quiero encontrar uno específico sin revisar el millón, uno por uno."*

**Errores deliberados a inyectar:**
1. **Off-by-one en los límites** (`izquierda`/`derecha`) — el error clásico y real de la búsqueda binaria.
2. **Aplicar binaria a datos DESORDENADOS** — no da un resultado "un poco peor": da un resultado **incorrecto y silencioso** (puede decir "no está" cuando sí está), sin ningún error visible que avise.

## Bloque 1 — Intuición, analogía e historia

**Hook:** *"Hasta ahora buscaste revisando uno por uno. Hoy aprendes a descartar la mitad del problema con una sola pregunta — y por qué esa velocidad tiene un precio."*

**Analogía (ficha SYL-N1, verificada como predictiva y coincidente con CS50x):** la búsqueda binaria es como buscar una palabra en un **diccionario físico**. No lees de la primera página a la última: abres por la mitad, ves si tu palabra viene antes o después alfabéticamente, y descartas la mitad que no te sirve. Cada "pregunta" (abrir por la mitad) elimina la mitad de lo que queda. **Prueba de que es predictiva:** un estudiante que recuerde esta imagen predice correctamente que buscar en una lista de un millón de elementos ordenados toma aproximadamente 20 pasos, no un millón — cada paso descarta la mitad de lo que quedaba.

**Historia (costo real):** la búsqueda binaria es uno de los algoritmos más antiguos y estudiados de la informática — y también uno de los más citados como advertencia: la primera implementación completamente libre de bugs de límites publicada no llegó hasta 1962, años después de formalizarse la idea. Un algoritmo "simple" en concepto, y notoriamente fácil de romper en los detalles — exactamente el error habitual central de esta lección.

## Bloque 2 — Conflicto cognitivo

```python
def busqueda_binaria(lista, objetivo):
    izq, der = 0, len(lista) - 1
    while izq <= der:
        medio = (izq + der) // 2
        if lista[medio] == objetivo:
            return medio
        elif lista[medio] < objetivo:
            izq = medio + 1
        else:
            der = medio - 1
    return -1

lista_desordenada = [5, 2, 8, 1, 9, 3]
print(busqueda_binaria(lista_desordenada, 1))
```

**Predicción esperada:** el `1` SÍ está en `lista_desordenada` — ¿la búsqueda binaria lo encuentra?

La sorpresa: **no** — devuelve `-1` (no encontrado), aunque el `1` esté ahí, en la posición 3. Sin ningún error, sin ninguna advertencia. La precondición de orden no es opcional: es lo que hace que "descartar la mitad" sea una decisión **válida** en primer lugar.

## Bloque 3 — Explicación rigurosa

**Implementación completa:**
```python
def busqueda_binaria(lista, objetivo):
    izq, der = 0, len(lista) - 1
    while izq <= der:
        medio = (izq + der) // 2
        if lista[medio] == objetivo:
            return medio
        elif lista[medio] < objetivo:
            izq = medio + 1     # el objetivo está a la derecha de medio
        else:
            der = medio - 1     # el objetivo está a la izquierda de medio
    return -1
```

**Por qué exige orden:** descartar la mitad basándose en "es mayor o menor que el del medio" solo es una decisión válida si TODO lo que queda a la izquierda es menor y TODO lo que queda a la derecha es mayor — eso es exactamente lo que significa estar ordenado. Sin esa garantía, descartar una mitad puede estar descartando el propio objetivo.

**Comparación de las tres velocidades de búsqueda (integra T1 + M1.T3):**
- **Lineal, O(n):** sin ninguna precondición — funciona sobre cualquier colección, en cualquier orden.
- **Binaria, O(log n):** exige que los datos estén ORDENADOS de antemano.
- **Hash (diccionario), O(1):** exige espacio extra (la estructura hash) y solo responde "¿está esta clave exacta?" — no puede responder "¿cuál es el más cercano a X?", algo que una lista ordenada sí puede.

## Bloque 4 — Escalera de práctica

*Nota de densidad (DOC-11 v2.0.1): siete categorías.*

**Predecir:**
1. El conflicto del Bloque 2.
2. Cuántas comparaciones, aproximadamente, hace binaria en una lista de 1,000,000 de elementos ordenados (≈20) contra lineal (hasta 1,000,000).
3. Qué devuelve la binaria cuando `lista` está vacía (`izq=0, der=-1` de entrada) — caso borde.

**Leer código:** una implementación con `der = len(lista)` (en vez de `len(lista) - 1`) — identificar el caso borde exacto donde falla (buscar cerca del final).

**Investigar / trazar:** trazar paso a paso (`izq`, `der`, `medio`) la búsqueda binaria de un valor concreto en una lista concreta, contando cuántas iteraciones toma hasta encontrarlo o descartar todo.

**Modificar:** la búsqueda binaria del Bloque 2 aplicada a datos desordenados → ordenar la lista primero con `sorted()` (sembrando T3) antes de buscar.

**Refactorizar:** código que usa `x in lista` (lineal, implícito) repetidamente sobre una lista que YA está ordenada → convertir a búsqueda binaria explícita.

**Escribir:** implementar búsqueda binaria **desde cero, sin plantilla** — la evidencia de dominio explícita de la ficha.

**Depurar (tres ejercicios, dificultad creciente):**
1. Off-by-one en los límites — `der = len(lista)` en vez de `len(lista) - 1`, `IndexError` real (Bloque 0).
2. Aplicar binaria a datos desordenados — resultado incorrecto y silencioso (Bloque 0).
3. *(compuesto)* `while izq < der` (en vez de `izq <= der`) — rompe exactamente el caso donde queda **un solo candidato** (`izq == der`): el bucle nunca llega a revisarlo, y la búsqueda falla incluso cuando el objetivo es el único elemento posible restante.

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Integración real (con T1 y M1.T3):** el laboratorio compara, con las mismas herramientas de conteo de pasos de T1, las tres búsquedas sobre el mismo conjunto de datos.

**El proyecto — Comparación de las tres velocidades:** contar cuántos pasos toma encontrar el mismo elemento (el peor caso: el último elemento) con búsqueda lineal, binaria, y acceso a diccionario, sobre una lista/dict de 1000 elementos.

**Trade-off explícito (la pregunta ingenieril de la ficha, textual):** ¿qué estarías dispuesto a pagar (mantener orden, más memoria, más complejidad) para que buscar sea casi instantáneo — y en qué casos la búsqueda lineal "lenta" es la decisión correcta? (Por ejemplo: una lista que cambia constantemente y se busca una sola vez — mantenerla ordenada costaría más de lo que ahorraría.)

**Argumento de corrección (evidencia de dominio, DOC-03 A5, textual):** enumerar explícitamente las precondiciones de la búsqueda binaria — qué exige para funcionar correctamente, no solo cómo funciona.

**Confrontación de soluciones:** comparar el número exacto de pasos de las tres búsquedas para el mismo tamaño de datos — la diferencia entre 1000, 10 y 1 pasos, medida, no supuesta.

**Fase 2 — transferencia sin instrucciones repetidas:** aplicar la lógica de búsqueda binaria a un problema ligeramente distinto (encontrar la posición donde un valor nuevo debería insertarse para mantener el orden) sin que se explique paso a paso.

## Bloque 6 — Consolidación

**Defensa socrática:**
1. ¿Por qué la binaria del conflicto no encuentra correctamente el `1` en una lista desordenada?
2. ¿Cuántas comparaciones, aproximadamente, hace binaria en una lista de un millón de elementos?
3. *(inédita, la pregunta ingenieril de la ficha, textual)* ¿Qué estarías dispuesto a pagar (mantener orden, más memoria, más complejidad) para que buscar sea casi instantáneo — y en qué casos la búsqueda lineal "lenta" es la decisión correcta?

**Seis preguntas de excelencia:**
1. ¿Qué aprendí? Que la velocidad de una búsqueda no es gratis — cada forma más rápida exige algo a cambio (orden, memoria, o ambos).
2. ¿Por qué existe este concepto? Porque revisar un elemento a la vez deja de ser viable mucho antes de lo que parece cuando los datos crecen.
3. ¿Qué problema resuelve? Reduce drásticamente el trabajo de búsqueda, aprovechando estructura que ya existe en los datos (el orden).
4. ¿Cómo lo usan los profesionales? Ya usan binaria todos los días sin saberlo — es el mecanismo detrás de los índices de bases de datos.
5. ¿Cómo se conecta con lo anterior? Usa el vocabulario de Big-O (T1) para comparar tres soluciones reales al mismo problema, con evidencia y no solo intuición.
6. ¿Qué pasaría si no existiera? Cada búsqueda en datos grandes sería lineal, sin ninguna forma de aprovechar el orden ya presente.

**Reflexión metacognitiva:**
- ¿En qué ejercicio el off-by-one te costó más encontrar, y qué patrón usarás para evitarlo la próxima vez?
- ¿Cómo se conecta la precondición de orden de la binaria con el concepto de invariante de Atributos, métodos y estado?
- ¿En qué proyecto propio (fuera de esta lección) tienes datos que ya están ordenados y podrías estar buscando linealmente sin necesidad?

**Desafío final inédito:** un bug real de límites que rompe exactamente el caso de un solo candidato:
```python
def busqueda_binaria_bug(lista, objetivo):
    izq, der = 0, len(lista) - 1
    while izq < der:              # BUG: deberia ser <=
        medio = (izq + der) // 2
        if lista[medio] == objetivo:
            return medio
        elif lista[medio] < objetivo:
            izq = medio + 1
        else:
            der = medio - 1
    return -1

print(busqueda_binaria_bug([5], 5))
```
Predecir, ANTES de ejecutar, qué devuelve — ¿encuentra el `5`, siendo el único elemento de la lista? Explicar por qué `izq < der` (en vez de `izq <= der`) rompe exactamente el caso donde `izq == der`: con un solo elemento, `izq` y `der` empiezan iguales, la condición `izq < der` es `False` desde el principio, y el bucle nunca llega a revisar ese único candidato — la búsqueda falla incluso cuando el objetivo es lo único posible.

**Lectura dirigida:** [MIT 6.0001 — Lecture 12, Searching and Sorting](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-12-searching-and-sorting/) · [CS50x — Week 3, Algorithms](https://cs50.harvard.edu/x/weeks/3/).

**Beyond the Curriculum:** *"Cada índice de una base de datos real (lo verás con SQL en M7, y otra vez en N2) es, en esencia, esta misma idea trabajando por ti: mantener los datos organizados de antemano para que buscar después sea casi instantáneo. La búsqueda binaria que implementaste a mano hoy es el corazón conceptual de una tecnología que mueve toda la industria."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados |
| 4 | Corregir | Bloque 4, "depurar" (3, incluido el caso compuesto de `<` vs `<=`) |
| 5 | Modificar | Bloque 4, "modificar" (ordenar antes de buscar) + "refactorizar" |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (bug de límites con un solo candidato) |
| 7 | Usar en un proyecto | Bloque 5, comparación medida de las tres velocidades de búsqueda |

**Instrumento DOC-02:** RM-03 + TD-01. Evidencia observable: implementa binaria sin plantilla al primer o segundo intento razonado, y enumera sus precondiciones (evidencia de dominio ya declarada en SYL-N1, textual: "A5: qué exige").

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [MIT 6.0001 — Lecture 12](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-12-searching-and-sorting/) | MIT OpenCourseWare | EN | ~50 min | Introductorio | Lección dedicada exactamente a búsqueda lineal y bisección | 🟢 Antes de estudiar |
| [CS50x — Week 3, Algorithms](https://cs50.harvard.edu/x/weeks/3/) | Harvard (CS50x) | EN | ~1h | Introductorio | Misma metáfora de "descartar la mitad" para la búsqueda binaria | 🔵 Durante la lección |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
