# N0 · T7 — Decisiones y repetición

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n0-t7-decisiones-repeticion.md`](../../investigacion/n0-t7-decisiones-repeticion.md)

*Bloques 1, 3, 4 conservan el material de producción ("Día 7"), con un error deliberado adicional (límite `<` vs. `<=`) que la producción no cubría.*

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N0.M1.T7 |
| **Gran pregunta** | ¿Cómo hace un programa para dejar de ser una lista de pasos y empezar a decidir y repetir por sí mismo? |
| **Conexión con T6** | Con datos de entrada ya confiables (convertidos), T7 les da el poder de bifurcar (`if`) y ciclar (`while`) sobre ellos. |
| **Conexión con T8 (Errores)** | Los bucles e ifs mal calibrados producen exactamente los errores que T8 enseña a leer y anticipar. |

## Bloque 0

**Recuperación (T6):** 1) ¿Por qué `input()` siempre devuelve `str`? 2) ¿Cómo se relaciona esto con tu propio error en T2? 3) ¿Qué hace `sep="-"` en `print()`?

**Diagnóstico relámpago:** `n=4; while n>2: print(n); n=n-1` — ¿qué imprime y por qué se detiene ahí? (ya en producción como intuit).

**Problema motivador:** *"Necesito que tu programa repita una pregunta hasta que el usuario responda algo válido — sin saber de antemano cuántas veces hará falta preguntar."* No resoluble sin `while`.

**Errores deliberados:** 1) indentación desigual (producción). 2) variable de control sin actualizar → bucle infinito (producción). 3) **Nuevo:** `while n < 5: print(n); n += 1` empezando en `n=1`, esperando que imprima hasta el 5 pero se detiene en el 4 — clase: **error de límite (fencepost)**, no cubierto en el material existente.

## Bloque 1

**Hook (producción):** *"Éste es el día más importante del nivel. if y while convierten tus guiones lineales en programas que DECIDEN y PERSISTEN."*

## Bloque 2 — Conflicto cognitivo

El intuit ya en producción (`while n>2`, se detiene en 3, no imprime 2) muestra que la condición se revisa ANTES de cada vuelta. Se extiende con el error de límite: un estudiante que quiere "del 1 al 5" y escribe `while n < 5` (en vez de `<=5`) descubre que su bucle "se comió" el último número — el mismo principio (la condición se evalúa exactamente como está escrita, sin intención implícita) aplicado a un error distinto y más sutil.

## Bloque 3

**if/elif/else (producción):** la indentación es sintaxis, no estética — moverla cambia la lógica. **while (producción):** repite mientras la condición sea verdadera; algo DENTRO debe poder cambiarla o el bucle es infinito.

```python
nota = 15
if nota >= 18:
    print("Excelente")
elif nota >= 11:
    print("Aprobado")
else:
    print("Desaprobado")
```

**Modelo mental (producción, sr):** el programa es un grafo de caminos posibles — cada `if` bifurca, cada `while` cicla. Diseñar es razonar TODOS los caminos, no solo el feliz.

## Bloque 4

**Predecir:** el intuit del bucle que se detiene en 3. **Escribir (producción):** par/impar, cuenta regresiva con while, insistir hasta opción válida. **Depurar:** el bucle infinito por variable sin actualizar, **y** el nuevo error de límite (`<` vs `<=`).

## Bloque 5 — Laboratorio

**Reto (producción):** FizzBuzz parcial — del 1 al n, pero múltiplos de 3 imprimen `fizz`.

**Trade-off:** ¿usar `while` con contador manual, o pensar ya en `for` (que llega en N1)? — se declara la limitación deliberada: `for` con `range()` no está enseñado aún (NNR-10), así que `while` es la única herramienta legítima aquí, aunque sea más verbosa.

**Confrontación de soluciones:** dos formas de estructurar la condición del `while` (contador ascendente vs. descendente) — ¿cuál comunica mejor la intención "hasta n"?

## Bloque 6

**Defensa:** 1) ¿Por qué la indentación es sintaxis y no estética en Python? 2) ¿Qué asegura que un `while` no sea infinito? 3) *(inédita)* Si tuvieras que explicar el error de límite (`<` vs `<=`) a alguien que nunca programó, ¿qué ejemplo cotidiano usarías?

**Beyond the Curriculum:** *"El corazón de un agente de IA es literalmente `while` no haya respuesta final → pensar, actuar, evaluar. Lo verás en N8."*

## Evidencia e instrumento

Predice el punto exacto de corte de un bucle sin ejecutar; diagnostica bucle infinito y error de límite; defiende con la pregunta inédita. RM-03 + TD-01.

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
