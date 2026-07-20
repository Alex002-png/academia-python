# N0 · T7 — Decisiones y repetición

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n0-t7-decisiones-repeticion.md`](../../investigacion/n0-t7-decisiones-repeticion.md), con addendum v2.0.1 (UC Berkeley — confirma el diseño ya adoptado, sin ángulo nuevo, declarado con honestidad).
>
> **Reconstruida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial):** contenido original conservado íntegro; se añade densidad horizontal, lectura de código, refactorización, laboratorio como mini-proyecto integrando T1–T7, metacognición y desafío final inédito.

*Bloques 1, 3, 4 conservan el material de producción ("Día 7"), con un error deliberado adicional (límite `<` vs. `<=`) que la producción no cubría.*

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N0.M1.T7 |
| **Gran pregunta** | ¿Cómo hace un programa para dejar de ser una lista de pasos y empezar a decidir y repetir por sí mismo? |
| **Duración** | Heurística, no plazo. Bajo DOC-11 v2.0.1: siete categorías de escalera y laboratorio en dos fases integrando T1–T7 — este es, además, el tema de mayor densidad conceptual de todo N0. |
| **Conexión con T6** | Con datos de entrada ya confiables (convertidos), T7 les da el poder de bifurcar (`if`) y ciclar (`while`) sobre ellos — y hace por fin posible el "bucle de validación" que T6 nombró sin poder construir. |
| **Conexión con T8 (Errores)** | Los bucles e ifs mal calibrados producen exactamente los errores que T8 enseña a leer y anticipar. |

## Bloque 0

**Recuperación (T6):** 1) ¿Por qué `input()` siempre devuelve `str`? 2) ¿Cómo se relaciona esto con tu propio error en T2? 3) ¿Qué hace `sep="-"` en `print()`?

**Diagnóstico relámpago:** `n=4; while n>2: print(n); n=n-1` — ¿qué imprime y por qué se detiene ahí?

**Problema motivador:** *"Necesito que tu programa repita una pregunta hasta que el usuario responda algo válido — sin saber de antemano cuántas veces hará falta preguntar."* No resoluble sin `while`. Este es, literalmente, el bucle de validación que T6 dejó pendiente.

**Errores deliberados:**
1. Indentación desigual.
2. Variable de control sin actualizar → bucle infinito.
3. `while n < 5: print(n); n += 1` empezando en `n=1`, esperando que imprima hasta el 5 pero se detiene en el 4 — clase: **error de límite (fencepost)**.
4. **Nuevo (v2.0.1):** `if nota = 15:` en vez de `if nota == 15:` → `SyntaxError`. Clase distinta a las tres anteriores: **confundir asignación con comparación dentro de una condición** — un error de sintaxis, no de lógica, pero que revela la misma confusión conceptual (`=` vs `==`) que T2 ya advirtió, ahora en un contexto donde Python ni siquiera permite el error silencioso.

## Bloque 1

**Hook:** *"Éste es el día más importante del nivel. if y while convierten tus guiones lineales en programas que DECIDEN y PERSISTEN."*

## Bloque 2 — Conflicto cognitivo

El intuit (`while n>2`, se detiene en 3, no imprime 2) muestra que la condición se revisa ANTES de cada vuelta. Se extiende con el error de límite: un estudiante que quiere "del 1 al 5" y escribe `while n < 5` (en vez de `<=5`) descubre que su bucle "se comió" el último número — el mismo principio (la condición se evalúa exactamente como está escrita, sin intención implícita) aplicado a un error distinto y más sutil.

## Bloque 3

**if/elif/else:** la indentación es sintaxis, no estética — moverla cambia la lógica. **while:** repite mientras la condición sea verdadera; algo DENTRO debe poder cambiarla o el bucle es infinito.

```python
nota = 15
if nota >= 18:
    print("Excelente")
elif nota >= 11:
    print("Aprobado")
else:
    print("Desaprobado")
```

**Modelo mental:** el programa es un grafo de caminos posibles — cada `if` bifurca, cada `while` cicla. Diseñar es razonar TODOS los caminos, no solo el feliz.

## Bloque 4 — Escalera

*Nota de densidad (v2.0.1): siete categorías — el tema de mayor densidad conceptual de N0 recibe, en proporción, la escalera más extensa.*

**Predecir:**
1. El intuit del bucle que se detiene en 3.
2. `n = 1; while n <= 5: print(n); n += 1` — ¿hasta qué número imprime, y en qué se diferencia del error de límite del Bloque 2?
3. *(nuevo)* `edad = 17; if edad >= 18: print("mayor"); elif edad >= 13: print("adolescente"); else: print("niño")` — ¿qué imprime, y qué pasaría si las dos primeras líneas de condición se invirtieran de orden? *(pone a prueba si el estudiante entiende que `elif` solo se evalúa si el anterior fue falso, no independientemente)*.

**Leer código** *(categoría propia, v2.0.1)*:
```python
contador = 0
total = 0
while contador < 5:
    total = total + contador
    contador = contador + 1
print(total)
```
Sin ejecutar: trazar el valor de `total` y `contador` en cada vuelta hasta el final — un patrón (acumulador) que ningún ejemplo anterior de la lección mostró explícitamente, solo se infiere leyendo.

**Investigar / trazar:** dado un `while` con una condición compuesta (`while n > 0 and n < 100:`), trazar en qué condiciones exactas termina el bucle — combina control de flujo (T7) con operadores lógicos (T4).

**Modificar:**
1. Dado el conteo regresivo con `while`, modificarlo para que cuente de 2 en 2 en vez de 1 en 1.
2. Dado el ejemplo de `if/elif/else` de notas, añadir una cuarta categoría ("Sobresaliente", nota ≥ 19) sin romper las demás — exige insertar una condición en el orden correcto, no al final.

**Refactorizar** *(categoría propia, v2.0.1)*: se entrega
```python
if edad >= 18:
    es_mayor = True
else:
    es_mayor = False
```
correcto pero innecesariamente largo para lo que hace. El estudiante refactoriza a `es_mayor = edad >= 18` (la propia comparación ya es un valor booleano) — un patrón real de simplificación que conecta directamente con T3 (`bool` como tipo) y T4 (comparaciones).

**Escribir:** par/impar, cuenta regresiva con `while`, insistir hasta opción válida (una sola vez, sin bucle de validación completo todavía si el ejercicio no lo exige, o con él si ya se cubrió en Bloque 3).

**Depurar (cuatro ejercicios):**
1. El bucle infinito por variable sin actualizar.
2. El error de límite (`<` vs `<=`).
3. `if nota = 15:` → `SyntaxError` por confundir `=` con `==`.
4. *(nuevo)* Un `if/elif/else` donde el orden de las condiciones hace que una rama nunca se alcance (`if nota >= 11: ... elif nota >= 18: ...` — la segunda condición nunca se evalúa como cierta primero porque la primera ya capturó todos esos casos) — un bug silencioso, sin ningún error de Python, solo lógica incorrecta.

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Integración real (T1–T7):** reutiliza el formato de recibo de T1, las variables de T2 (contador y acumuladores con nombre propio, no números sueltos), tipos de T3, operadores de T4, strings de T5, entrada de T6, y ahora control de flujo de T7 — el laboratorio de mayor integración de todo N0 hasta ahora.

**El proyecto — FizzBuzz con entrada validada:** pedir al usuario, con el **bucle de validación completo** (por fin posible: repetir la pregunta hasta obtener un número entero positivo válido), hasta qué número quiere llegar; luego imprimir del 1 a ese número, con múltiplos de 3 mostrando `fizz`, múltiplos de 5 mostrando `buzz`, y múltiplos de ambos mostrando `fizzbuzz` — en el formato de recibo de T1 como resumen final ("Se procesaron N números").

**Trade-off:** ¿usar `while` con contador manual, o pensar ya en `for` (que llega en N1)? — se declara la limitación deliberada: `for` con `range()` no está enseñado aún (NNR-10), así que `while` es la única herramienta legítima aquí, aunque sea más verbosa.

**Argumento de corrección:** ¿el programa maneja correctamente el caso límite `n=1`? ¿Y un número que es múltiplo de 3 y de 5 a la vez (15, 30...) — se imprime `fizzbuzz` y no `fizz` seguido de `buzz` en líneas separadas?

**Confrontación de soluciones:** dos formas de estructurar la condición del `while` (contador ascendente vs. descendente) — ¿cuál comunica mejor la intención "hasta n"? Se extiende a la lógica de FizzBuzz: ¿verificar "múltiplo de 15" primero, o verificar 3 y 5 por separado con la condición compuesta en el orden correcto? Ambas son correctas — ¿cuál es más fácil de extender si mañana se agrega un cuarto múltiplo?

**Fase 2 — transferencia sin instrucciones repetidas:** adaptar el mismo programa para que, en vez de imprimir todos los números, cuente y muestre al final **cuántos** fueron `fizz`, `buzz`, `fizzbuzz` y "ninguno" — exige introducir acumuladores (el patrón ya visto en "leer código") sin que se le repita cómo hacerlo.

## Bloque 6 — Consolidación

**Defensa:** 1) ¿Por qué la indentación es sintaxis y no estética en Python? 2) ¿Qué asegura que un `while` no sea infinito? 3) *(inédita)* Si tuvieras que explicar el error de límite (`<` vs `<=`) a alguien que nunca programó, ¿qué ejemplo cotidiano usarías?

**Seis preguntas de excelencia:** aprendí que un programa puede decidir (`if`) y persistir (`while`), no solo ejecutar en línea recta; existe porque los problemas reales no tienen un solo camino ni una cantidad fija de pasos; resuelve la necesidad de repetir trabajo sin copiar código y de reaccionar distinto según el dato; los profesionales lo usan en cada validación, cada procesamiento por lotes, cada sistema que "espera" algo; se conecta con T6 (el bucle de validación, por fin posible) y con T4 (las condiciones son expresiones con operadores ya conocidos); sin esto, cada programa tendría una duración y un camino fijos, incapaz de reaccionar al mundo real.

**Reflexión metacognitiva** *(v2.0.1)*:
- ¿En qué momento de esta lección tuviste que "ejecutar el bucle con el dedo" (trazar a mano) para entender por qué se detenía donde se detenía?
- El error de límite (`<` vs `<=`) es sutil — ¿qué estrategia usarás en el futuro para prevenirlo antes de que ocurra, no solo para corregirlo después?
- De todo lo que integraste en el laboratorio (T1 a T7), ¿qué pieza sentiste más "tuya", ya dominada, y cuál todavía insegura?

**Desafío final inédito:** escribir un programa que, usando `while`, determine si un número dado es **primo** (divisible solo por 1 y por sí mismo) — sin que ningún ejemplo anterior de la lección haya mostrado el patrón "revisar divisibilidad contra un rango de números". El estudiante debe combinar `while`, `%` (T4) y una condición de corte temprano, un problema genuinamente nuevo que exige diseñar la lógica completa, no adaptar un ejemplo visto.

**Lectura:** [CS50, While Loops](https://cs50.harvard.edu/python/shorts/while_loops/) · [CMU 15-110, While Loops (slides)](https://www.cs.cmu.edu/~15110-s22/slides/week3-3-while-loops.pdf).

**Beyond the Curriculum:** *"El corazón de un agente de IA es literalmente `while` no haya respuesta final → pensar, actuar, evaluar. Lo verás en N8."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3, incluido el orden de `elif`) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados (4 clases) |
| 4 | Corregir | Bloque 4, "depurar" (4, incluida una rama de `elif` inalcanzable sin error visible) |
| 5 | Modificar | Bloque 4, "modificar" (2) + "refactorizar" |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (verificar números primos, patrón nunca mostrado) |
| 7 | Usar en un proyecto | Bloque 5, FizzBuzz con entrada validada, integrando T1–T7 |

**Instrumento:** RM-03 + TD-01. Predice el punto exacto de corte de un bucle sin ejecutar; diagnostica bucle infinito, error de límite y rama inalcanzable; defiende con la pregunta inédita.

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [CS50 — While Loops](https://cs50.harvard.edu/python/shorts/while_loops/) | Harvard (CS50) | EN | ~10 min video | Introductorio | Fuente directa ya usada en la investigación original de esta lección | 🟢 Antes de estudiar |
| [CMU 15-110 — While Loops (slides)](https://www.cs.cmu.edu/~15110-s22/slides/week3-3-while-loops.pdf) | Carnegie Mellon | EN | ~20 min lectura | Introductorio | Segunda fuente de referencia con tratamiento formal de la condición de parada | 🔵 Durante la lección |
| [Composing Programs §1.5.5 — Control](https://www.composingprograms.com/) | UC Berkeley (CS61A) | EN | ~20 min lectura | Introductorio-Intermedio | Confirma con una tercera institución independiente la regla central de esta lección | 🟣 Después de terminar |
| [Real Python — Python "while" Loops](https://realpython.com/python-while-loop/) | Real Python | EN | ~30 min lectura | Intermedio | Profundiza patrones de bucle (acumuladores, banderas) más allá de lo cubierto aquí | ⭐ Profundización opcional |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
