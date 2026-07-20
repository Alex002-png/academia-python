# N1.M3.T5 — Recursión

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n1-m3-t5-recursion.md`](../../investigacion/n1-m3-t5-recursion.md) — construida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial).
>
> Motor de ejecución: **Pyodide (Python real en el navegador)**.

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N1.M3.T5 |
| **Gran pregunta del módulo (M3)** | ¿Cómo elegimos soluciones que continúan siendo buenas cuando el problema escala? |
| **Gran pregunta de esta lección** | ¿Qué problemas se vuelven más claros con recursión y cuáles la pagan en pila y legibilidad — y cómo lo decides antes de escribir la primera línea? |
| **Prerrequisitos** | N1.M1.T1 (pila de llamadas); N1.M3.T4 (pilas y colas) |
| **Competencias** | C-N1-02, C-N1-06 |
| **Duración** | Heurística. Escalera densa (7 categorías) + laboratorio integrador + desafío final. |
| **Conexión con N1.M1.T8 (Ficheros y formatos)** | Un JSON anidado (listas dentro de listas) ya se procesó en Ficheros — hoy se revela la estructura recursiva que siempre estuvo ahí. |
| **Conexión con N1.M3.T4 (Pilas y colas)** | La pila de llamadas es, literalmente, una pila — la misma disciplina LIFO que T4 ya nombró, ahora visible en cada llamada recursiva. |

## Bloque 0 — Preparación del Tutor

**Recuperación (T4):** 1) ¿Por qué `lista.pop(0)` es O(n) y no O(1)? 2) ¿Cómo se relaciona la pila de llamadas de Funciones a fondo con la pila de Pilas y colas?

**Diagnóstico relámpago:** *"Si tuvieras que sumar todos los números de 1 a n, ¿podrías definir 'sumar hasta n' en términos de 'sumar hasta n-1'?"*

**Problema motivador:** *"Tengo un JSON anidado con niveles desconocidos de profundidad (listas dentro de listas dentro de diccionarios...) y quiero sumar todos los números que encuentre, sin saber de antemano cuántos niveles hay."*

**Errores deliberados a inyectar:**
1. **Olvidar el caso base** — función recursiva sin condición de parada → `RecursionError` real (stack overflow).
2. **No confiar en la hipótesis recursiva** — intentar resolver todo el problema dentro de una sola llamada, en vez de confiar en que la llamada recursiva ya resuelve "el resto".

## Bloque 1 — Intuición, analogía e historia

**Hook:** *"Hasta ahora resolviste problemas de principio a fin, paso a paso. Hoy aprendes a resolver un problema delegando la mayor parte en una versión más pequeña de ti mismo."*

**Analogía (ficha SYL-N1, verificada como predictiva):** recursión es **delegar en un clon más pequeño**. Como un jefe que le pide a un empleado idéntico, pero con menos trabajo, que resuelva "el resto" del problema — confiando ciegamente en que lo hará bien. Ese empleado le pide lo mismo a otro clon aún más pequeño, hasta que alguien recibe un trabajo tan chico (el **caso base**) que lo resuelve directo, sin delegar más.

**Historia (costo real):** la recursión, como concepto, viene de la **inducción matemática** — demostrar que algo es cierto para el caso base, y que si es cierto para `n`, también lo es para `n+1`. "Inducción hecha código" (la ficha, textual) no es una metáfora vacía: es literalmente el mismo mecanismo formal que demuestra teoremas en matemáticas, aplicado a resolver problemas de programación.

## Bloque 2 — Conflicto cognitivo

```python
def suma_hasta(n):
    return n + suma_hasta(n - 1)

print(suma_hasta(5))
```

**Predicción esperada:** ¿qué imprime esto?

La sorpresa: **no imprime un número** — truena con `RecursionError: maximum recursion depth exceeded`. Falta el caso base: la función nunca "para" de delegar en un clon más pequeño, y el clon nunca deja de crear otro clon aún más pequeño, indefinidamente.

## Bloque 3 — Explicación rigurosa

**Caso base + paso recursivo:**
```python
def suma_hasta(n):
    if n == 0:                       # caso base -- el trabajo mas chico, sin delegar mas
        return 0
    return n + suma_hasta(n - 1)     # paso recursivo -- delega en un clon mas pequeño
```

**Confiar en la hipótesis recursiva:** no hace falta trazar mentalmente TODA la cadena de llamadas para escribir la función correctamente — solo hace falta confiar en que `suma_hasta(n - 1)` YA calcula correctamente la suma hasta `n-1`, y usar ese resultado sin cuestionarlo. Es la misma disciplina que la inducción matemática exige.

**Trazar la pila de llamadas (conecta directo con T4):** cada llamada recursiva se APILA — igual que en T4 — y se van "desapilando" (retornando) en orden inverso a como se apilaron: LIFO puro, la misma disciplina de siempre, ahora visible en el mecanismo mismo del lenguaje.

## Bloque 4 — Escalera de práctica

*Nota de densidad (DOC-11 v2.0.1): siete categorías.*

**Predecir:**
1. El conflicto del Bloque 2.
2. Qué imprime `suma_hasta(3)` en la versión corregida (con caso base).
3. Cuántas llamadas recursivas hace `factorial(5)` antes de llegar al caso base.

**Leer código:** una función recursiva que recorre un JSON anidado (lista de listas) — identificar el caso base y el paso recursivo, sin ejecutar.

**Investigar / trazar:** dibujar (en texto) la pila de llamadas de `factorial(4)` — qué hay apilado en el punto de máxima profundidad, y en qué orden se van resolviendo las llamadas al volver.

**Modificar:** la función `suma_hasta` del Bloque 2 (sin caso base) → agregar el caso base correcto.

**Refactorizar:** una función que suma los números de una lista con un `for` → convertirla a recursiva, delegando en la lista sin el primer elemento.

**Escribir:** implementar `factorial(n)` recursivo, **sin plantilla** — la evidencia de dominio explícita de la ficha.

**Depurar (tres ejercicios, dificultad creciente):**
1. Caso base olvidado — `RecursionError` (Bloque 0).
2. No confiar en la hipótesis recursiva — código que intenta "hacer todo" dentro de la función en vez de delegar de verdad.
3. *(compuesto)* El caso base EXISTE, pero el paso recursivo se ALEJA de él en vez de acercarse (`n + 1` en vez de `n - 1`) — `RecursionError` igual, pero por una razón más sutil y distinta a la del Bloque 0.

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Integración real (con M1.T8):** el laboratorio retoma explícitamente el JSON anidado de Ficheros y formatos, mostrando la estructura recursiva que siempre estuvo ahí.

**El proyecto — Sumar una estructura anidada:** `sumar_anidado(estructura)` recorre listas dentro de listas, con números mezclados en cualquier nivel de profundidad, y suma todos los números encontrados — sin saber de antemano cuántos niveles hay.

**Trade-off explícito (la pregunta ingenieril de la ficha, textual):** ¿qué problemas se vuelven más claros con recursión y cuáles la pagan en pila y legibilidad — y cómo lo decides antes de escribir la primera línea?

**Argumento de corrección:** ¿la función maneja correctamente una lista vacía (caso base trivial, suma 0) y una estructura sin ningún nivel de anidamiento?

**Confrontación de soluciones:** resolver "sumar anidado" con recursión contra intentarlo con bucles anidados de profundidad FIJA — el segundo enfoque se rompe en cuanto la estructura real tiene más niveles de los previstos; la recursión no necesita saber la profundidad de antemano.

**Fase 2 — transferencia sin instrucciones repetidas:** extender la función para también contar cuántos números encontró, sin que se explique el patrón paso a paso.

## Bloque 6 — Consolidación

**Defensa socrática:**
1. ¿Por qué `suma_hasta(5)` del conflicto truena en vez de dar un número?
2. ¿Qué significa "confiar en la hipótesis recursiva"?
3. *(inédita, la pregunta ingenieril de la ficha, textual)* ¿Qué problemas se vuelven más claros con recursión y cuáles la pagan en pila y legibilidad — y cómo lo decides antes de escribir la primera línea?

**Seis preguntas de excelencia:**
1. ¿Qué aprendí? Que resolver un problema puede significar delegar la mayor parte de él, confiando en que una versión más pequeña de la misma solución ya funciona.
2. ¿Por qué existe este concepto? Porque hay problemas naturalmente autosimilares (árboles de archivos, JSON anidado) donde expresar la solución en términos de sí misma es más claro que forzar un bucle.
3. ¿Qué problema resuelve? Permite procesar estructuras de profundidad desconocida sin necesitar bucles anidados de profundidad fija.
4. ¿Cómo lo usan los profesionales? Reconocen cuándo un problema es naturalmente recursivo (autosimilar) y cuándo un bucle simple ya bastaba, sin usar recursión "porque se ve elegante".
5. ¿Cómo se conecta con lo anterior? La pila de llamadas de Funciones a fondo y la disciplina LIFO de Pilas y colas se encuentran hoy en el mismo mecanismo, ahora visible.
6. ¿Qué pasaría si no existiera? Cada estructura anidada de profundidad desconocida (árboles de archivos, JSON, HTML) necesitaría código especial para cada nivel posible de anidamiento.

**Reflexión metacognitiva:**
- ¿En qué ejercicio quisiste trazar mentalmente TODA la cadena de llamadas en vez de confiar en la hipótesis recursiva?
- ¿Cómo se conecta la pila de llamadas de hoy con la disciplina LIFO de Pilas y colas?
- ¿Qué problema de un proyecto propio (fuera de esta lección) tiene una estructura naturalmente recursiva que no habías notado?

**Desafío final inédito — el argumento por defecto mutable en recursión:**
```python
def recolectar_pares(lista, resultado=[]):
    if not lista:
        return resultado
    if lista[0] % 2 == 0:
        resultado.append(lista[0])
    return recolectar_pares(lista[1:], resultado)

print(recolectar_pares([1, 2, 3, 4]))
print(recolectar_pares([5, 6, 7, 8]))
```
Predecir, ANTES de ejecutar, qué imprime la SEGUNDA llamada — ¿solo los pares de `[5, 6, 7, 8]`, o algo más? Explicar por qué: `resultado=[]` como valor por defecto se crea **una sola vez**, cuando Python define la función — no cada vez que se llama. Todas las llamadas a `recolectar_pares` que no pasan `resultado` explícitamente comparten la MISMA lista, incluso entre llamadas completamente separadas del programa — el mismo tipo de sorpresa que el aliasing de Listas y tuplas, ahora escondido en un valor por defecto de una función recursiva.

**Lectura dirigida:** [MIT 6.0001 — Lecture 6, Recursion and Dictionaries](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-6-recursion-and-dictionaries/) · [CS50x — Recursion](https://cs50.harvard.edu/x/2023/shorts/recursion/).

**Beyond the Curriculum:** *"Fibonacci recursivo ingenuo (`fib(n) = fib(n-1) + fib(n-2)`) es sorprendentemente lento — recalcula los mismos subproblemas una y otra vez. La técnica que lo resuelve se llama memoización (guardar resultados ya calculados) y es contenido de un curso de algoritmos más avanzado — hoy basta con saber que el problema existe y tiene nombre."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados |
| 4 | Corregir | Bloque 4, "depurar" (3, incluido el caso compuesto de paso recursivo que se aleja) |
| 5 | Modificar | Bloque 4, "modificar" (caso base) + "refactorizar" (bucle→recursión) |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (argumento por defecto mutable en recursión) |
| 7 | Usar en un proyecto | Bloque 5, sumar estructura anidada integrando Ficheros y formatos |

**Instrumento DOC-02:** RM-03 + TD-01. Evidencia observable: resuelve un recursivo nuevo sin plantilla y dibuja su pila de llamadas para una entrada pequeña (evidencia de dominio ya declarada en SYL-N1, textual).

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [MIT 6.0001 — Lecture 6](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-6-recursion-and-dictionaries/) | MIT OpenCourseWare | EN | ~50 min | Introductorio | Lección de MIT dedicada a recursión, con nombre propio en el título | 🟢 Antes de estudiar |
| [CS50x — Recursion](https://cs50.harvard.edu/x/2023/shorts/recursion/) | Harvard (CS50x) | EN | ~15 min | Introductorio | Factorial y Fibonacci como los ejemplos canónicos de recursión | 🔵 Durante la lección |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
