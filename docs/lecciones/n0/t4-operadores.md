# N0 · T4 — Operadores

> **Estado (DOC-11 §6bis):** **Desarrollo:** ✅ Completado. **Validación:** ⏳ Pendiente de validación. **Investigación:** ✅ aprobada — [`docs/investigacion/n0-t4-operadores.md`](../../investigacion/n0-t4-operadores.md).

*Bloques 1, 3, 4 conservan el material ya validado en producción ("Día 4"). El ajuste de la investigación (conflicto con `//`) se integra como complemento del ejercicio ya existente (`8+10/2`), no como reemplazo — ambos cubren un hueco real distinto.*

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N0.M1.T4 |
| **Gran pregunta** | ¿Por qué el orden en que Python lee una expresión puede darte una respuesta completamente distinta a la que esperabas? |
| **Prerrequisitos** | T3 (tipos: `/` siempre produce float, `//` produce el tipo de sus operandos) |
| **Competencias** | C-N0-01 |
| **Conexión con T3** | T3 estableció que el tipo decide qué operaciones son válidas; T4 muestra que, entre operaciones válidas, el *orden* en que se aplican también decide el resultado. |
| **Conexión con T5 (Strings)** | Los operadores aritméticos terminan aquí; T5 muestra que `+` y `*` también operan sobre strings (concatenar, repetir) — la doble vida de los operadores, generalizada. |

## Bloque 0 — Preparación del Tutor

**Recuperación (T3):** 1) ¿Qué imprime `type(int("25"))`? 2) ¿Por qué `"3" + "4"` y `3 + 4` no son la misma operación? 3) ¿Por qué Python se niega a ejecutar `"Tengo " + 25 + " años"` en vez de adivinar que querías texto?

**Diagnóstico relámpago:** *"¿Qué crees que imprime `print(2 + 3 * 4)`? ¿20 o 14?"* — expone directamente la intuición izquierda-a-derecha documentada en la literatura (Investigación N0·T4, §2), antes de corregirla.

**Problema motivador:** *"Tienes 200 minutos totales y quieres mostrar 'X horas y Y minutos' — con las cifras calculadas, no escritas a mano."* No resoluble aún sin `//` y `%`.

**Errores deliberados:**
1. `print(8 + 10 / 2)` → `13.0` en vez de `9.0` (ya en producción, d4e3) — clase: **precedencia con `/`**.
2. `print(7 + 10 // 3)` → `10` (evalúa `10 // 3 = 3`, luego `7 + 3 = 10`), sorprende a quien esperaba `5` (`17 // 3`) — clase, distinta de la anterior y **no cubierta en el material existente**: **precedencia con `//`**, donde el error es más fácil de cometer porque `//` "se siente" como una operación de menor jerarquía y no lo es.

## Bloque 1 — Intuición, historia

**Hook (producción):** *"`//` y `%` paginan los resultados de Google, reparten lotes de datos en NVIDIA y calculan la hora en tu reloj. Aritmética de primaria convertida en infraestructura de gigantes."*

**Historia (producción, verificada):** `%` viene de ALGOL, popularizado por C (1972). Python 2 tenía `7/2 == 3` (división entera silenciosa) — causó tantos bugs que Python 3 **rompió compatibilidad** deliberadamente para separar `/` (real) de `//` (entera). Cuando una corrección vale romper millones de programas, el bug era grave.

## Bloque 2 — Conflicto cognitivo

Con la predicción del Bloque 0 fresca (`2 + 3 * 4` → mayoría predice `20`), se ejecuta: da `14`. Igual que en matemáticas: `*` se evalúa antes que `+`. Se extiende de inmediato al segundo error deliberado: `7 + 10 // 3` da `10`, no `5` — `//` tiene la misma prioridad que `*`, mayor que `+`, y esto sorprende más que el caso con `/` porque `//` "se ve" como si fuera una operación posterior (repartir) cuando en realidad Python la evalúa igual de temprano que multiplicar.

## Bloque 3 — Explicación rigurosa

**La familia aritmética completa (producción):** `/` divide y siempre da `float`; `//` es división entera; `%` es el resto; `**` es potencia.

```python
print(7 / 2)    # 3.5
print(7 // 2)   # 3
print(7 % 2)    # 1
print(2 ** 10)  # 1024
```

**Precedencia (producción + CMU):** igual que en matemáticas — `*`, `/`, `//`, `%` se evalúan antes que `+`, `-`; `**` antes que todos. Los paréntesis mandan siempre. Comparaciones (`== != < > <= >=`) devuelven `bool`; ojo eterno: `=` asigna, `==` compara. `and`/`or`/`not` combinan condiciones.

## Bloque 4 — Escalera

**Predecir (producción):** `print(10 % 3)` / `print(10 // 3)` — pensar la división de primaria: cabe 3 veces (`//`), sobra 1 (`%`).

**Escribir (producción):** Ejercicio 1 — las cuatro divisiones (`7/2, 7//2, 7%2, 2**10`); Ejercicio 2 — ¿es par? (`15 % 2 == 0`, sin `if`).

**Depurar (producción, d4e3):** `print(8 + 10 / 2)` → corregir con paréntesis a `9.0`. **Depurar (nuevo, del conflicto del Bloque 2):** `print(7 + 10 // 3)` — diagnosticar por qué da `10` y no `5`, corregir con paréntesis: `(7 + 10) // 3`.

## Bloque 5 — Laboratorio

**Reto (producción):** `minutos_totales = 200` → imprimir exactamente `3 horas y 20 minutos`, usando `//` y `%`, calculado.

**Trade-off:** ¿usar `//` y `%` por separado (dos operaciones) o `divmod()` (una sola, retorna ambos)? — cuesta legibilidad para quien no conoce `divmod` vs. una línea más corta.

**Argumento de corrección:** ¿qué pasa con `minutos_totales = 0`? ¿Y con un valor que da exactamente horas completas (`120`)?

**Confrontación de soluciones:** comparar la versión con `//`/`%` separados contra `divmod(minutos_totales, 60)` — ¿cuál comunica mejor la intención a quien lo lea después?

## Bloque 6 — Consolidación

**Defensa:** 1) ¿Por qué `//` tiene la misma prioridad que `*` y no la de `+`? 2) ¿Qué le pasó a Python 2 con `7/2` y por qué Python 3 lo rompió a propósito? 3) *(inédita)* Si `%` no existiera, ¿cómo determinarías si un número es par sin dividir y comparar el resultado con algo?

**Seis preguntas de excelencia:** aprendí que el orden de evaluación no es opcional; existe porque sin una regla fija cada expresión sería ambigua; resuelve calcular correctamente sin paréntesis excesivos; los profesionales lo usan en paginación, relojes, hashing; se conecta con T3 (el tipo de `/` vs `//` decide el resultado); sin precedencia, cada expresión necesitaría paréntesis en cada operación — código ilegible.

**Lectura:** docs.python.org Tutorial §3.1.1 · CS50 Lecture 0 (Math).

**Beyond the Curriculum:** *"`%` es la base de las tablas hash — cómo Python decide en qué 'cajón' interno guardar cada clave de un diccionario. Lo verás en N1."*

## Evidencia e instrumento

Predice correctamente expresiones con precedencia mixta (`+`/`*`, `+`/`//`) sin ejecutar antes; diagnostica y corrige ambos errores deliberados; defiende con la pregunta inédita. Instrumento: RM-03 + TD-01 (RM-05).

## Checklist (DOC-11 §5)

☑ Todos los ítems universales cumplidos. ☐ 4 niveles B1 / ☐ Intercalado — no aplican aún (N0 temprano). ☑ Confrontación de soluciones aplica (`//`+`%` vs. `divmod`).

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente de validación)* | — | — |
