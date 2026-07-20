# N1.M3.T1 — Complejidad: Big-O intuitivo

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n1-m3-t1-complejidad-bigo.md`](../../investigacion/n1-m3-t1-complejidad-bigo.md) — construida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial). **Abre M3 (Algoritmos y Estructuras de Datos I).**
>
> Motor de ejecución: **Pyodide (Python real en el navegador)**. Nota de diseño: los ejercicios de esta lección miden crecimiento con **conteo de pasos**, no con reloj de pared — el tiempo real varía por hardware/entorno (justo el problema que Big-O existe para evitar); contar operaciones es determinista y reproducible en cualquier máquina.

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N1.M3.T1 |
| **Gran pregunta del módulo (M3)** | ¿Cómo elegimos soluciones que continúan siendo buenas cuando el problema escala? |
| **Gran pregunta de esta lección** | Si tu programa tarda un segundo con mil elementos, ¿qué necesitas saber antes de prometer cuánto tardará con un millón? |
| **Prerrequisitos** | M1 (bucles sobre colecciones) |
| **Competencias** | C-N1-06 |
| **Duración** | Heurística. Escalera densa (7 categorías) + laboratorio de medición + desafío final. |
| **Conexión con N1.M1.T3** | Diccionarios ya mostró, como comportamiento observable sin nombre formal, que buscar por clave "no se siente más lento" aunque el diccionario crezca — hoy ese comportamiento gana nombre: O(1). |
| **Conexión con el cierre de M3** | El error real citado en el cierre del módulo — "el O(n²) escondido en un bucle con `in` sobre lista" — se enseña aquí como primer caso concreto, antes de generalizarse en T2-T6. |

## Bloque 0 — Preparación del Tutor

**Recuperación (cierre de M2):** 1) ¿Por qué `ConversorTemperatura` "debía" ser una función? 2) ¿Cuáles son las señales reales de que SÍ conviene una clase?

**Diagnóstico relámpago:** *"Si buscar un nombre en una lista de 10 elementos tarda X, ¿cuánto tardará en una lista de 10,000? ¿Y en un diccionario de 10,000?"*

**Problema motivador:** *"Tengo dos formas de resolver el mismo problema. Quiero saber, SIN ejecutar las dos con un millón de datos, cuál se va a volver lenta primero."*

**Errores deliberados a inyectar:**
1. **Contar segundos en vez de crecimiento:** "mi código tardó 2 segundos, es rápido" — sin preguntar qué pasa si la entrada crece 1000 veces.
2. **Ignorar el caso peor:** medir con datos ya favorables (por ejemplo, el elemento buscado está al principio) y asumir que ese tiempo se mantiene siempre.

## Bloque 1 — Intuición, analogía e historia

**Hook:** *"Hasta ahora mediste 'funciona' o 'no funciona'. Hoy aprendes el idioma con el que cualquier ingeniero del mundo compara qué tan bien escala una solución, sin depender de qué computadora la corrió."*

**Analogía (ficha SYL-N1, verificada como predictiva):** Big-O es la **forma de la curva**, no un número. Dos corredores en una carrera: uno tarda 2 segundos en dar una vuelta **sin importar cuántas vueltas corra** (constante); otro tarda 2 segundos MÁS por cada vuelta adicional (lineal). A la vuelta 1, parecen iguales. A la vuelta 1000, uno ya terminó y el otro sigue corriendo. **Prueba de que es predictiva:** un estudiante que recuerde esta imagen predice correctamente que dos algoritmos que "se ven igual de rápidos" con 10 elementos pueden comportarse radicalmente distinto con 10 millones — la forma de la curva, no la medición puntual, es lo que importa.

**Historia (costo real, verificado):** el análisis asintótico nació porque medir en segundos dejó de tener sentido cuando cada máquina daba un número distinto — la informática necesitaba una forma **independiente del hardware** de comparar soluciones. No es una convención académica sin propósito: es la respuesta a un problema real de comparabilidad.

## Bloque 2 — Conflicto cognitivo

```python
def buscar_lineal(lista, objetivo):
    for x in lista:
        if x == objetivo:
            return True
    return False

lista_pequena = list(range(1_000))
lista_grande = list(range(1_000_000))
```

**Predicción esperada:** si buscar algo que NO está en `lista_pequena` (el peor caso) toma cierto número de pasos, ¿cuántos pasos tomará en `lista_grande`, que es 1000 veces más grande?

La sorpresa: no toma "un poquito más" — toma **proporcionalmente más**, en la misma proporción que creció la lista (1000 veces más grande → aproximadamente 1000 veces más pasos). Mientras que buscar por clave en un diccionario con la misma cantidad de datos toma prácticamente **el mismo número de pasos**, sin importar cuánto haya crecido.

## Bloque 3 — Explicación rigurosa

**Clases de crecimiento (Big-O como forma de la curva):**
- **O(1) — constante:** el mismo número de pasos, sin importar el tamaño de la entrada. Acceso por índice o por clave de diccionario.
- **O(log n) — logarítmica:** el trabajo crece mucho más lento que la entrada — la protagonista de T2 (búsqueda binaria).
- **O(n) — lineal:** el trabajo crece en proporción directa a la entrada — un bucle simple que recorre todo una vez.
- **O(n²) — cuadrática:** el trabajo crece con el CUADRADO de la entrada — típicamente, un bucle dentro de otro bucle, ambos sobre la misma entrada.

**Cómo estimar sin medir (regla práctica, no fórmula formal):** contar los bucles anidados que realmente recorren la entrada. Un bucle simple sobre `n` elementos → O(n). Un bucle dentro de otro, ambos sobre los mismos `n` elementos → O(n²). Acceso directo por índice o por clave → O(1). **Cuidado:** no todo bucle anidado es O(n²) — si el bucle interno siempre recorre un número FIJO de elementos (no proporcional a `n`), el resultado sigue siendo O(n) — el desafío final de esta lección lo pone a prueba.

**El O(n²) escondido — el error real del cierre de M3:**
```python
def tiene_duplicados_lento(lista):
    vistos = []
    for x in lista:
        if x in vistos:      # "in" sobre una LISTA es O(n) -- dentro de un bucle O(n) ya existente
            return True
        vistos.append(x)
    return False              # el total es O(n) x O(n) = O(n^2)
```
`x in vistos` sobre una lista parece "una línea inocente", pero es en sí misma O(n) — y como vive dentro de un bucle que ya es O(n), el programa completo termina siendo O(n²), sin que nadie haya escrito un segundo `for` explícito.

## Bloque 4 — Escalera de práctica

*Nota de densidad (DOC-11 v2.0.1): siete categorías.*

**Predecir:**
1. El conflicto del Bloque 2.
2. Clasificar (O(1)/O(n)/O(n²)) una función con un solo bucle simple sobre una lista.
3. Clasificar una función con dos bucles anidados, ambos recorriendo la misma lista completa.

**Leer código:** una función con `x in lista` dentro de un `for` — identificar que esto es O(n²) escondido, el patrón exacto del Bloque 3.

**Investigar / trazar:** contar cuántas comparaciones exactas hace `x in vistos` (lista) frente a `x in vistos` (set), para una lista de tamaño `n` sin duplicados — confirmando con números reales, no solo con la teoría, que uno crece con `n` y el otro se mantiene constante.

**Modificar:** `tiene_duplicados_lento` (Bloque 3, O(n²) escondido) → convertir `vistos` de lista a `set`, bajando el total a O(n).

**Refactorizar:** una función que recalcula `sum(lista)` DENTRO de un bucle sobre esa misma lista (O(n²) por recomputar el total en cada vuelta) → mover el cálculo del total FUERA del bucle, calculándolo una sola vez (O(n)).

**Escribir:** función que cuenta exactamente cuántas comparaciones hace un bucle anidado que compara cada elemento de una lista con cada otro elemento (incluido consigo mismo) — para `n` elementos, exactamente `n²` comparaciones.

**Depurar (tres ejercicios, dificultad creciente):**
1. Contar segundos en vez de crecimiento (Bloque 0).
2. Ignorar el caso peor (Bloque 0).
3. *(compuesto)* Código que "funciona rápido en las pruebas" (con datos pequeños) por tener un O(n²) escondido — predecir que se volverá lento con datos reales grandes, ANTES de medirlo.

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Integración real (con M1.T3):** el laboratorio retoma la ventaja de los sets/dicts ya vista en Diccionarios y sets, ahora con el vocabulario formal de Big-O.

**El proyecto — Detector de duplicados eficiente:** `encontrar_duplicados(lista)` devuelve la lista de valores que aparecen más de una vez (cada uno listado solo una vez, en el orden en que se detectó la repetición), usando un `set` internamente para que cada verificación de pertenencia sea O(1) — el total queda en O(n), no O(n²).

**Trade-off explícito ("estimar antes de medir", la práctica principal EXPLÍCITA de la ficha):** antes de programar, predecir cuántas veces más rápida será la versión O(n) frente a la O(n²) al DUPLICAR el tamaño de la entrada (aproximadamente el doble, no exponencialmente más) — luego confirmar contando comparaciones reales, no adivinando.

**Argumento de corrección:** ¿la versión eficiente encuentra exactamente los mismos duplicados que encontraría la versión lenta (Bloque 3), en el mismo orden?

**Confrontación de soluciones:** ¿la versión eficiente usa más memoria (el `set` adicional)? — un costo real en la dirección opuesta, no una ganancia sin contrapartida.

**Fase 2 — transferencia sin instrucciones repetidas:** aplicar el mismo criterio (evitar `in` sobre lista dentro de un bucle) a un problema nuevo sin que se explique paso a paso.

## Bloque 6 — Consolidación

**Defensa socrática:**
1. ¿Por qué buscar en `lista_grande` del conflicto no tarda "solo un poquito más" que en `lista_pequena`?
2. ¿Qué diferencia real hay entre O(n) y O(n²)?
3. *(inédita, la pregunta ingenieril de la ficha, textual)* Si tu programa tarda un segundo con mil elementos, ¿qué necesitas saber antes de prometer cuánto tardará con un millón — y por qué "probarlo" no siempre es posible?

**Seis preguntas de excelencia:**
1. ¿Qué aprendí? Que Big-O describe la FORMA en que crece el trabajo, no una medición puntual en una máquina concreta.
2. ¿Por qué existe este concepto? Porque medir en segundos dejó de tener sentido cuando cada máquina daba un número distinto.
3. ¿Qué problema resuelve? Permite comparar y predecir el comportamiento de un algoritmo con datos que aún no existen.
4. ¿Cómo lo usan los profesionales? Estiman ANTES de escribir código, y solo miden para confirmar o refutar esa estimación — nunca al revés.
5. ¿Cómo se conecta con lo anterior? Diccionarios y sets ya mostró O(1) como comportamiento observable, sin el nombre; hoy ese comportamiento se generaliza y se nombra.
6. ¿Qué pasaría si no existiera? Cada decisión de diseño se tomaría a ciegas, confiando en que "funcionó en mi máquina con mis datos de prueba" sin ninguna garantía sobre el futuro.

**Reflexión metacognitiva:**
- ¿En qué ejercicio asumiste que un bucle anidado era automáticamente O(n²), y qué te hizo reconsiderar?
- ¿Cómo se conecta el O(1) de los diccionarios con el O(1) de acceso por índice a una lista?
- ¿En qué parte de un proyecto propio (fuera de esta lección) sospechas que podría haber un O(n²) escondido?

**Desafío final inédito — no todo bucle anidado es O(n²):**
```python
def procesar(lista):
    resultado = []
    for x in lista:
        for i in range(3):        # SIEMPRE 3, sin importar el tamaño de lista
            resultado.append(x + i)
    return resultado
```
Predecir, ANTES de ejecutar, la complejidad real de esta función — ¿es O(n²) por tener dos bucles anidados? Explicar por qué NO lo es: el bucle interno siempre recorre exactamente 3 elementos, sin importar cuán grande sea `lista` — el trabajo total sigue siendo proporcional a `n` (multiplicado por una constante, 3), así que la complejidad real es O(n). Contar bucles no basta: hay que ver sobre QUÉ itera cada uno.

**Lectura dirigida:** [MIT 6.0001 — Lecture 10, Understanding Program Efficiency Part 1](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-10-understanding-program-efficiency-part-1/) · [CS50x — Week 3, Algorithms](https://cs50.harvard.edu/x/weeks/3/).

**Beyond the Curriculum:** *"CS50x también nombra Ω (cota inferior, el mejor caso) y Θ (cuando el mejor y el peor caso coinciden) — vocabulario más preciso que no necesitas todavía. Cuando lo veas en documentación real, ya sabrás que describe la misma idea de hoy, con más grados de detalle."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados |
| 4 | Corregir | Bloque 4, "depurar" (3, incluido el caso compuesto de O(n²) escondido) |
| 5 | Modificar | Bloque 4, "modificar" (lista→set) + "refactorizar" (hoisting fuera del bucle) |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (bucle anidado que NO es O(n²)) |
| 7 | Usar en un proyecto | Bloque 5, detector de duplicados con medición real de crecimiento |

**Instrumento DOC-02:** RM-03 + TD-01. Evidencia observable: clasifica código propio y ajeno (O(1)/O(n)/O(n²)/O(log n)) y predice cuál "muere" primero al escalar — luego lo mide (evidencia de dominio ya declarada en SYL-N1, textual: "estimar antes de medir").

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [MIT 6.0001 — Lecture 10](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-10-understanding-program-efficiency-part-1/) | MIT OpenCourseWare | EN | ~50 min | Introductorio | Lección dedicada exactamente al alcance de esta lección | 🟢 Antes de estudiar |
| [MIT 6.0001 — Lecture 11](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/lecture-videos/lecture-11-understanding-program-efficiency-part-2/) | MIT OpenCourseWare | EN | ~50 min | Introductorio | Continúa con las distintas clases de complejidad | 🔵 Durante la lección |
| [CS50x — Week 3, Algorithms](https://cs50.harvard.edu/x/weeks/3/) | Harvard (CS50x) | EN | ~1h | Introductorio | Mismo lenguaje intuitivo ("orden de", no fórmula) que esta lección adopta | 🔵 Durante la lección |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
