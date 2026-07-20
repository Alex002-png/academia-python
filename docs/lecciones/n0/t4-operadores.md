# N0 · T4 — Operadores

> **Estado (DOC-11 §6bis):** **Desarrollo:** ✅ Completado. **Validación:** ⏳ Pendiente de validación. **Investigación:** ✅ aprobada — [`docs/investigacion/n0-t4-operadores.md`](../../investigacion/n0-t4-operadores.md), con addendum v2.0.1 (UC Berkeley — declarada ausencia honesta: su lenguaje de estudio usa notación prefija, elimina el problema de precedencia en vez de enseñarlo).
>
> **Reconstruida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial):** contenido original conservado íntegro; se añade densidad horizontal, lectura de código, refactorización, laboratorio como mini-proyecto integrando T1–T4, metacognición y desafío final inédito.

*Bloques 1, 3, 4 conservan el material ya validado en producción ("Día 4"). El ajuste de la investigación (conflicto con `//`) se integra como complemento del ejercicio ya existente (`8+10/2`), no como reemplazo — ambos cubren un hueco real distinto.*

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N0.M1.T4 |
| **Gran pregunta** | ¿Por qué el orden en que Python lee una expresión puede darte una respuesta completamente distinta a la que esperabas? |
| **Prerrequisitos** | T3 (tipos: `/` siempre produce float, `//` produce el tipo de sus operandos) |
| **Competencias** | C-N0-01 |
| **Duración** | Heurística, no plazo (14.2). Bajo DOC-11 v2.0.1: siete categorías de escalera y un laboratorio de dos fases que integra T1–T4 — varias sesiones reales. |
| **Conexión con T3** | T3 estableció que el tipo decide qué operaciones son válidas; T4 muestra que, entre operaciones válidas, el *orden* en que se aplican también decide el resultado. |
| **Conexión con T5 (Strings)** | Los operadores aritméticos terminan aquí; T5 muestra que `+` y `*` también operan sobre strings (concatenar, repetir) — la doble vida de los operadores, generalizada. |

## Bloque 0 — Preparación del Tutor

**Recuperación (T3):** 1) ¿Qué imprime `type(int("25"))`? 2) ¿Por qué `"3" + "4"` y `3 + 4` no son la misma operación? 3) ¿Por qué Python se niega a ejecutar `"Tengo " + 25 + " años"` en vez de adivinar que querías texto?

**Diagnóstico relámpago:** *"¿Qué crees que imprime `print(2 + 3 * 4)`? ¿20 o 14?"* — expone directamente la intuición izquierda-a-derecha documentada en la literatura, antes de corregirla.

**Problema motivador:** *"Tienes 200 minutos totales y quieres mostrar 'X horas y Y minutos' — con las cifras calculadas, no escritas a mano."* No resoluble aún sin `//` y `%`.

**Errores deliberados:**
1. `print(8 + 10 / 2)` → `13.0` en vez de `9.0` — clase: **precedencia con `/`**.
2. `print(7 + 10 // 3)` → `10` (evalúa `10 // 3 = 3`, luego `7 + 3 = 10`), sorprende a quien esperaba `5` (`17 // 3`) — clase distinta: **precedencia con `//`**, donde el error es más fácil de cometer porque `//` "se siente" como una operación de menor jerarquía y no lo es.
3. **Nuevo (v2.0.1):** `print(5 > 3 > 1)` → `True` — no produce error, pero sorprende: Python encadena comparaciones (`5 > 3 and 3 > 1`), un comportamiento que ni siquiera existe en la mayoría de los otros lenguajes que el estudiante pueda conocer de oídas. Clase: **comportamiento válido pero no intuitivo, sin error que lo señale**.

## Bloque 1 — Intuición, historia

**Hook:** *"`//` y `%` paginan los resultados de Google, reparten lotes de datos en NVIDIA y calculan la hora en tu reloj. Aritmética de primaria convertida en infraestructura de gigantes."*

**Historia (verificada):** `%` viene de ALGOL, popularizado por C (1972). Python 2 tenía `7/2 == 3` (división entera silenciosa) — causó tantos bugs que Python 3 **rompió compatibilidad** deliberadamente para separar `/` (real) de `//` (entera). Cuando una corrección vale romper millones de programas, el bug era grave.

## Bloque 2 — Conflicto cognitivo

Con la predicción del Bloque 0 fresca (`2 + 3 * 4` → mayoría predice `20`), se ejecuta: da `14`. Igual que en matemáticas: `*` se evalúa antes que `+`. Se extiende de inmediato al segundo error deliberado: `7 + 10 // 3` da `10`, no `5` — `//` tiene la misma prioridad que `*`, mayor que `+`, y esto sorprende más que el caso con `/` porque `//` "se ve" como si fuera una operación posterior (repartir) cuando en realidad Python la evalúa igual de temprano que multiplicar.

## Bloque 3 — Explicación rigurosa

**La familia aritmética completa:** `/` divide y siempre da `float`; `//` es división entera; `%` es el resto; `**` es potencia.

```python
print(7 / 2)    # 3.5
print(7 // 2)   # 3
print(7 % 2)    # 1
print(2 ** 10)  # 1024
```

**Precedencia (producción + CMU):** igual que en matemáticas — `*`, `/`, `//`, `%` se evalúan antes que `+`, `-`; `**` antes que todos. Los paréntesis mandan siempre. Comparaciones (`== != < > <= >=`) devuelven `bool`; ojo eterno: `=` asigna, `==` compara. `and`/`or`/`not` combinan condiciones.

**Comparaciones encadenadas (v2.0.1, del error deliberado 3):** Python permite `5 > 3 > 1` y lo evalúa como `5 > 3 and 3 > 1` — una comodidad real del lenguaje, no un capricho, pero solo útil si se reconoce explícitamente; usada sin saber que existe, produce resultados que "por casualidad" son correctos hasta que dejan de serlo.

## Bloque 4 — Escalera

*Nota de densidad (v2.0.1): siete categorías.*

**Predecir:**
1. `print(10 % 3)` / `print(10 // 3)` — pensar la división de primaria: cabe 3 veces (`//`), sobra 1 (`%`).
2. `print(2 + 3 * 4)` (el conflicto ya vivido, repetido aquí como consolidación del compromiso escrito).
3. *(nuevo)* `print(2 ** 3 ** 2)` — ¿es `(2**3)**2 = 64` o `2**(3**2) = 512`? Python asocia `**` de derecha a izquierda, el único operador aritmético con esa dirección — un caso límite real que ni siquiera el Bloque 3 explicó, invita a experimentar.

**Leer código** *(categoría propia, v2.0.1)*:
```python
descuento = precio * 0.20
precio_final = precio - descuento
es_caro = precio_final > 100 and descuento > 20
```
Sin ejecutar: ¿qué tipo tiene cada variable? ¿Qué determina el valor de `es_caro`? — obliga a leer una cadena de tres operadores distintos (aritmético, aritmético, lógico) como una secuencia coherente, no como líneas aisladas.

**Investigar / trazar:** dado `resultado = 7 + 10 // 3 * 2 - 1`, trazar el orden exacto de evaluación paso a paso (qué se calcula primero, segundo, tercero...) antes de dar un valor final.

**Modificar:**
1. Dado un programa que calcula el promedio de dos números con el bug de precedencia (`8 + 10 / 2`), corregirlo.
2. Modificar el problema de minutos del Bloque 0 para que además calcule cuántos **segundos** sobran de una cantidad total de segundos, reutilizando el mismo patrón `//`/`%` en un tercer nivel (horas, minutos, segundos) — exige encadenar el patrón dos veces, no solo una.

**Refactorizar** *(categoría propia, v2.0.1)*: se entrega
```python
resultado = ((8 + 10) / 2)
```
con paréntesis redundantes que no cambian el resultado pero tampoco aportan claridad real frente a `(8 + 10) / 2`. El estudiante decide, con justificación, cuáles paréntesis son necesarios para la corrección (Bloque 2) y cuáles son ruido visual — un juicio real, no una regla mecánica.

**Escribir:** las cuatro divisiones (`7/2, 7//2, 7%2, 2**10`); ¿es par? (`15 % 2 == 0`, sin `if`).

**Depurar (tres ejercicios):**
1. `print(8 + 10 / 2)` → corregir con paréntesis a `9.0`.
2. `print(7 + 10 // 3)` — diagnosticar por qué da `10` y no `5`, corregir con paréntesis: `(7 + 10) // 3`.
3. *(nuevo)* `print(1 < 2 < 0)` — no lanza error, pero un estudiante que no conozca las comparaciones encadenadas (Bloque 3) podría "arreglar" algo que no está roto, o no entender por qué da `False`. El ejercicio es reconocer que aquí no hay nada que corregir — solo algo que explicar correctamente, distinguiendo "error" de "comportamiento sorprendente pero válido".

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Integración real (T1–T4):** el laboratorio reutiliza el formato de recibo de T1, las variables de T2 (el total y las personas se nombran y se reasignan, no se escriben a mano), la conversión de tipos de T3, y ahora exige el catálogo completo de operadores de T4.

**El proyecto — Divisor de cuenta de restaurante:** dado el total de una cuenta (como texto, como llegaría de un sistema real) y el número de personas, calcular cuánto paga cada persona **si se divide exacto**, y cuánto sobra (en centavos) **si no se divide exacto** — usando `//` y `%` sobre el total en centavos (para evitar los problemas de precisión de floats ya vistos en T3), e imprimir el resultado en el formato de recibo de T1.

**Trade-off:** ¿usar `//` y `%` por separado (dos operaciones) o `divmod()` (una sola, retorna ambos)? — cuesta legibilidad para quien no conoce `divmod` vs. una línea más corta.

**Argumento de corrección:** ¿qué pasa con un total que se divide exacto (sobra `0`)? ¿Y con un número de personas igual a `1`?

**Confrontación de soluciones:** comparar la versión con `//`/`%` separados contra `divmod(total_centavos, personas)` — ¿cuál comunica mejor la intención a quien lo lea después?

**Fase 2 — transferencia sin instrucciones repetidas:** adaptar el mismo programa para repartir **propina** además del total, calculada como un porcentaje (operador `*`), antes de dividir entre las personas — obliga a decidir, sin que se le diga, en qué orden componer los cuatro operadores para que el resultado sea correcto.

## Bloque 6 — Consolidación

**Defensa:** 1) ¿Por qué `//` tiene la misma prioridad que `*` y no la de `+`? 2) ¿Qué le pasó a Python 2 con `7/2` y por qué Python 3 lo rompió a propósito? 3) *(inédita)* Si `%` no existiera, ¿cómo determinarías si un número es par sin dividir y comparar el resultado con algo?

**Seis preguntas de excelencia:** aprendí que el orden de evaluación no es opcional; existe porque sin una regla fija cada expresión sería ambigua; resuelve calcular correctamente sin paréntesis excesivos; los profesionales lo usan en paginación, relojes, hashing; se conecta con T3 (el tipo de `/` vs `//` decide el resultado); sin precedencia, cada expresión necesitaría paréntesis en cada operación — código ilegible.

**Reflexión metacognitiva** *(v2.0.1)*:
- ¿Qué operador de esta lección te resultó más contraintuitivo, y por qué crees que lo era?
- Cuando fallaste una predicción de precedencia, ¿confiaste en tu intuición matemática o en lo que acababas de estudiar — y cuál ganó?
- Si tuvieras que memorizar solo una regla de esta lección para no olvidarla nunca, ¿cuál sería y por qué esa y no otra?

**Desafío final inédito:** dado
```python
x = 10
resultado = x > 5 and x < 20 or x == 100
```
predecir el valor de `resultado` **antes de ejecutar**, combinando comparación, dos operadores lógicos con distinta precedencia (`and` se evalúa antes que `or`, un dato que ningún bloque anterior mencionó explícitamente) y razonar qué pasaría si se agregaran paréntesis en distintos lugares para cambiar el resultado sin cambiar los valores de `x`.

**Lectura:** [docs.python.org, Tutorial §3.1.1 y tabla de precedencia](https://docs.python.org/3/reference/expressions.html#operator-precedence) · CS50 Lecture 0 (Math).

**Beyond the Curriculum:** *"`%` es la base de las tablas hash — cómo Python decide en qué 'cajón' interno guardar cada clave de un diccionario. Lo verás en N1."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + preguntas de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3, incluida la asociatividad de `**`) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados (3 clases) |
| 4 | Corregir | Bloque 4, "depurar" (3, incluido un caso sin error real que corregir) |
| 5 | Modificar | Bloque 4, "modificar" (2) + "refactorizar" |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (`and`/`or` combinados, precedencia nunca explicada) |
| 7 | Usar en un proyecto | Bloque 5, divisor de cuenta con propina, integrando T1+T3+T4 |

**Instrumento:** RM-03 + TD-01 (RM-05). Predice correctamente expresiones con precedencia mixta (`+`/`*`, `+`/`//`, `and`/`or`) sin ejecutar antes; diagnostica y corrige los tres errores deliberados; defiende con la pregunta inédita.

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [CMU 15-112 — Data Types and Operators](https://www.cs.cmu.edu/~112-f22/notes/notes-data-and-operations.html) | Carnegie Mellon | EN | ~15 min lectura | Introductorio | Trata precedencia junto al tipo resultante — el enfoque exacto que adopta esta lección | 🟢 Antes de estudiar |
| [Python docs — Operator precedence (tabla oficial)](https://docs.python.org/3/reference/expressions.html#operator-precedence) | Python Software Foundation | EN | referencia | Introductorio-Intermedio | La tabla completa y oficial, incluida la asociatividad de `**` usada en el desafío final | 🔵 Durante la lección |
| [CS50 — Operators (PDF)](https://cs50.harvard.edu/ap/2020/assets/pdfs/operators.pdf) | Harvard (CS50) | EN | ~15 min lectura | Introductorio | Segunda fuente de referencia con vocabulario técnico explícito de operadores | 🟣 Después de terminar |
| [Real Python — The Python Modulo Operator](https://realpython.com/python-modulo-operator/) | Real Python | EN | ~20 min lectura | Intermedio | Profundiza usos reales de `%` más allá de "el resto" — prepara el puente a hashing que Beyond the Curriculum menciona | ⭐ Profundización opcional |

## Checklist (DOC-11 §5)

☑ Todos los ítems universales cumplidos. ☐ 4 niveles B1 / ☐ Intercalado — no aplican aún (N0 temprano, sin masa crítica). ☑ Escalera con 7 categorías (v2.0.1) · ☑ Laboratorio como mini-proyecto integrando T1+T3+T4, en dos fases (v2.0.1) · ☑ Confrontación de soluciones aplica (`//`+`%` vs. `divmod`) · ☑ Reflexión metacognitiva (v2.0.1) · ☑ Desafío final inédito (v2.0.1) · ☑ Recursos recomendados, 4 fuentes (v2.0.1) · ☑ Siete capacidades de dominio (v2.0.1).

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente de validación)* | — | — |
