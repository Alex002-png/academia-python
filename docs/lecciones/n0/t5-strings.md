# N0 · T5 — Strings a fondo

> **Estado:** Desarrollo ✅ Completado · Validación ⏳ Pendiente · Investigación ✅ [`n0-t5-strings.md`](../../investigacion/n0-t5-strings.md)

*Bloques 1, 3, 4 conservan el material de producción ("Día 5").*

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N0.M1.T5 |
| **Gran pregunta** | Si una variable es una etiqueta que apunta a un objeto, ¿qué significa "modificar" un string — y por qué a veces no puedes? |
| **Prerrequisitos** | T2 (etiquetas, no cajas); T3 (tipos) |
| **Conexión con T2** | Extiende directamente el modelo etiqueta/objeto: aquí se ve que el objeto string, una vez creado, nunca cambia por dentro — solo se crean objetos nuevos. |
| **Conexión con T6 (Entrada y salida)** | `input()` siempre devuelve `str` — todo lo aprendido aquí (índices, slicing, métodos) se aplicará de inmediato a datos que vienen del usuario. |

## Bloque 0

**Recuperación (T4):** 1) ¿Qué imprime `2 + 3 * 4`? 2) ¿Por qué `7 + 10 // 3` no da `5`? 3) ¿Qué historia real llevó a separar `/` de `//` en Python 3?

**Diagnóstico relámpago:** *"Si `palabra = "gato"`, ¿qué crees que pasa si escribo `palabra[0] = "p"`?"* — expone si el estudiante ya generalizó la inmutabilidad de T2 o todavía piensa en "caja modificable".

**Problema motivador:** *"Un correo llega sucio de un formulario — con mayúsculas y espacios de más. Necesito que tu programa lo entregue limpio."* No resoluble aún sin métodos de string.

**Errores deliberados:** 1) `palabra[0] = "P"` → `TypeError: 'str' object does not support item assignment` — clase: **intento de mutación directa** (el conflicto cognitivo principal). 2) `texto.upper()` sin guardar el resultado (ya en producción) — clase: **olvidar que los métodos devuelven, no modifican**.

## Bloque 1

**Hook (producción):** *"El 85% de los datos del mundo real son texto sucio... hoy aprendes cirugía de strings."*

**Analogía:** un string es un documento notariado — puedes sacar una fotocopia editada (`.upper()` devuelve una nueva), pero el original nunca se raya.

## Bloque 2 — Conflicto cognitivo

`palabra = "gato"; palabra[0] = "p"` → `TypeError`. El estudiante que aún piensa "caja" espera poder cambiar una letra como quien borra y reescribe. Pero el string es inmutable: no hay forma de cambiarlo por dentro — solo de construir uno nuevo (`"p" + palabra[1:]`).

## Bloque 3

**Índices y rebanadas (producción):** `palabra[0]` primero, `palabra[-1]` último; `palabra[a:b]` corta desde `a` hasta ANTES de `b`; `len()` cuenta todo, espacios incluidos.

**Métodos y f-strings (producción):** `.upper()`, `.lower()`, `.strip()`, `.replace(a,b)` — cada uno devuelve un string nuevo. F-strings: `f"Hola, {nombre.upper()}"`, con formato `{valor:.2f}`.

## Bloque 4

**Predecir (producción):** `palabra[1]` y `palabra[-2]` de `"python"`. **Escribir (producción):** cortes precisos (3 primeros/últimos), limpieza encadenada (`.strip().upper()`), presentación con f-string. **Depurar:** el `TypeError` de mutación directa — reparar reconstruyendo el string con slicing y concatenación.

## Bloque 5 — Laboratorio

**Reto (producción):** `correo = "  ALEX@GMAIL.COM  "` → `alex@gmail.com`, con métodos encadenados, no a mano.

**Trade-off:** `.strip().lower()` en una línea vs. dos variables intermedias — legibilidad vs. brevedad.

**Confrontación de soluciones:** encadenar métodos vs. asignar a variables intermedias — ¿cuál es más fácil de depurar si algo sale mal?

## Bloque 6

**Defensa:** 1) ¿Por qué `.upper()` no cambia la variable original si no guardas el resultado? 2) ¿Qué relación tiene la inmutabilidad de los strings con el modelo de "etiquetas, no cajas" de T2? 3) *(inédita)* ¿Por qué crees que Python decidió hacer los strings inmutables en vez de mutables, como las listas serán en N1?

**Beyond the Curriculum:** *"La inmutabilidad hace que los strings sean seguros para usarse como claves de diccionario — lo verás en N1."*

## Evidencia e instrumento

Predice slicing sin ejecutar; explica por qué la mutación directa falla conectándolo con T2; defiende con la pregunta inédita. RM-03 + TD-01.

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
