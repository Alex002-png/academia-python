# N0 · T5 — Strings a fondo

> **Estado:** Desarrollo ✅ Completado · Validación ⏳ Pendiente · Investigación ✅ [`n0-t5-strings.md`](../../investigacion/n0-t5-strings.md), con addendum v2.0.1 (UC Berkeley — técnica "contar cortes, no caracteres" para slicing).
>
> **Reconstruida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial):** contenido original conservado íntegro; se añade densidad horizontal, lectura de código, refactorización, laboratorio como mini-proyecto integrando T1–T5, metacognición y desafío final inédito.

*Bloques 1, 3, 4 conservan el material de producción ("Día 5").*

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N0.M1.T5 |
| **Gran pregunta** | Si una variable es una etiqueta que apunta a un objeto, ¿qué significa "modificar" un string — y por qué a veces no puedes? |
| **Prerrequisitos** | T2 (etiquetas, no cajas); T3 (tipos) |
| **Duración** | Heurística, no plazo. Bajo DOC-11 v2.0.1: siete categorías de escalera y laboratorio en dos fases integrando T1–T5. |
| **Conexión con T2** | Extiende directamente el modelo etiqueta/objeto: aquí se ve que el objeto string, una vez creado, nunca cambia por dentro — solo se crean objetos nuevos. |
| **Conexión con T6 (Entrada y salida)** | `input()` siempre devuelve `str` — todo lo aprendido aquí (índices, slicing, métodos) se aplicará de inmediato a datos que vienen del usuario. |

## Bloque 0

**Recuperación (T4):** 1) ¿Qué imprime `2 + 3 * 4`? 2) ¿Por qué `7 + 10 // 3` no da `5`? 3) ¿Qué historia real llevó a separar `/` de `//` en Python 3?

**Diagnóstico relámpago:** *"Si `palabra = "gato"`, ¿qué crees que pasa si escribo `palabra[0] = "p"`?"* — expone si el estudiante ya generalizó la inmutabilidad de T2 o todavía piensa en "caja modificable".

**Problema motivador:** *"Un correo llega sucio de un formulario — con mayúsculas y espacios de más. Necesito que tu programa lo entregue limpio."* No resoluble aún sin métodos de string.

**Errores deliberados:**
1. `palabra[0] = "P"` → `TypeError: 'str' object does not support item assignment` — clase: **intento de mutación directa** (el conflicto cognitivo principal).
2. `texto.upper()` sin guardar el resultado — clase: **olvidar que los métodos devuelven, no modifican**.
3. **Nuevo (v2.0.1):** `palabra[10]` sobre un string de 4 caracteres → `IndexError: string index out of range` — clase distinta a las dos anteriores: **error de rango**, no de mutabilidad ni de retorno — el estudiante debe distinguir las tres familias entre sí, no tratarlas como "un error de strings" genérico.

## Bloque 1

**Hook:** *"El 85% de los datos del mundo real son texto sucio... hoy aprendes cirugía de strings."*

**Analogía:** un string es un documento notariado — puedes sacar una fotocopia editada (`.upper()` devuelve una nueva), pero el original nunca se raya.

## Bloque 2 — Conflicto cognitivo

`palabra = "gato"; palabra[0] = "p"` → `TypeError`. El estudiante que aún piensa "caja" espera poder cambiar una letra como quien borra y reescribe. Pero el string es inmutable: no hay forma de cambiarlo por dentro — solo de construir uno nuevo (`"p" + palabra[1:]`).

## Bloque 3

**Índices y rebanadas:** `palabra[0]` primero, `palabra[-1]` último; `palabra[a:b]` corta desde `a` hasta ANTES de `b`; `len()` cuenta todo, espacios incluidos.

**Técnica de slicing: contar cortes, no caracteres** *(ajuste real v2.0.1 — UC Berkeley)*: la fuente más común de error de slicing es contar los caracteres en vez de los espacios **entre** ellos. Para `"python"`:
```
 p   y   t   h   o   n
0   1   2   3   4   5   6
```
Cada número marca un **corte**, no una letra — `palabra[1:4]` no significa "de la letra 1 a la letra 4": significa "desde el corte 1 hasta el corte 4", que captura `"yth"`. Este diagrama, no una regla memorizada, es lo que hay que trazar mentalmente cada vez.

**Métodos y f-strings:** `.upper()`, `.lower()`, `.strip()`, `.replace(a,b)` — cada uno devuelve un string nuevo. F-strings: `f"Hola, {nombre.upper()}"`, con formato `{valor:.2f}`.

## Bloque 4 — Escalera

*Nota de densidad (v2.0.1): siete categorías.*

**Predecir:**
1. `palabra[1]` y `palabra[-2]` de `"python"`, usando el diagrama de cortes.
2. `"python"[2:2]` — ¿qué imprime un slice donde el inicio y el fin son el mismo corte? *(caso límite real: string vacío, no error — pone a prueba si el modelo de cortes se generalizó de verdad)*.
3. `"python"[10:20]` — ¿por qué esto NO lanza `IndexError` como `palabra[10]` sí lo hace? *(distinción real entre indexar un solo carácter y hacer slicing fuera de rango — slicing nunca falla por rango, indexar sí)*.

**Leer código** *(categoría propia, v2.0.1)*:
```python
nombre = "  Alex Guerra  "
limpio = nombre.strip()
iniciales = limpio[0] + limpio[limpio.index(" ") + 1]
```
Sin ejecutar: ¿qué valor tiene `iniciales`? Exige combinar `.strip()`, indexado y un método no visto antes en la lección (`.index()`) — el estudiante debe inferir su comportamiento por el nombre y el contexto, no por haberlo memorizado.

**Investigar / trazar:** dado `s = "academia"`, trazar el resultado de `s[:3]`, `s[3:]`, `s[::2]` *(stride, mencionado por primera vez aquí, mínimamente, sin profundizar — profundidad reservada para cuando aparezca de nuevo)* y `s[::-1]` — el último caso invierte el string completo, una consecuencia del modelo de cortes que ningún ejemplo anterior mostró directamente.

**Modificar:**
1. Dado un programa que limpia un correo con `.strip().lower()`, modificarlo para que además reemplace cualquier espacio interno por un punto.
2. Dado `nombre_completo = "Alex Guerra"`, extraer y mostrar por separado el nombre y el apellido usando slicing e `.index()`, sin asumir que siempre tienen la misma longitud.

**Refactorizar** *(categoría propia, v2.0.1)*: se entrega
```python
texto = "  HOLA  "
texto2 = texto.strip()
texto3 = texto2.lower()
print(texto3)
```
correcto pero con variables intermedias innecesarias. El estudiante refactoriza a una cadena de métodos (`texto.strip().lower()`) y explica cuándo preferiría, aun así, mantener los pasos separados (por ejemplo, para depurar cuál paso falla).

**Escribir:** cortes precisos (3 primeros/últimos caracteres), limpieza encadenada (`.strip().upper()`), presentación con f-string.

**Depurar (tres ejercicios):**
1. El `TypeError` de mutación directa — reparar reconstruyendo el string con slicing y concatenación.
2. `texto.upper()` sin guardar el resultado — el programa "funciona" (no hay error) pero el resultado no refleja el cambio esperado; el estudiante debe reconocer que la ausencia de error no significa ausencia de bug.
3. *(nuevo)* `palabra[10]` sobre un string corto → `IndexError` — reparar verificando `len()` antes de indexar, conectando explícitamente con la distinción de "predecir" #3 (indexar vs. slicing).

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Integración real (T1–T5):** el laboratorio reutiliza el formato de recibo de T1, la conversión de tipos de T3, los operadores de T4, y ahora el catálogo completo de strings de T5.

**El proyecto — Normalizador de contactos:** dada una lista simulada de tres entradas de texto sucias (nombre con mayúsculas/espacios inconsistentes, correo con espacios, número de teléfono con guiones), limpiar cada campo con los métodos de esta lección y presentar los tres contactos en el formato de recibo de T1, con las iniciales de cada nombre calculadas por slicing (no escritas a mano).

**Trade-off:** `.strip().lower()` en una línea vs. dos variables intermedias — legibilidad vs. brevedad.

**Argumento de corrección:** ¿la limpieza funciona igual si el nombre viene con un solo espacio interno que si viene con dos? ¿Y si el correo ya viene limpio?

**Confrontación de soluciones:** encadenar métodos vs. asignar a variables intermedias — ¿cuál es más fácil de depurar si algo sale mal?

**Fase 2 — transferencia sin instrucciones repetidas:** aplicar el mismo normalizador a un cuarto contacto con un caso no visto antes (un nombre con un solo componente, sin espacio interno) — obliga a decidir qué hacer cuando `.index(" ")` no encuentra nada, sin que se le indique la solución.

## Bloque 6 — Consolidación

**Defensa:** 1) ¿Por qué `.upper()` no cambia la variable original si no guardas el resultado? 2) ¿Qué relación tiene la inmutabilidad de los strings con el modelo de "etiquetas, no cajas" de T2? 3) *(inédita)* ¿Por qué crees que Python decidió hacer los strings inmutables en vez de mutables, como las listas serán en N1?

**Seis preguntas de excelencia:** aprendí que un string nunca cambia por dentro, solo se crean strings nuevos; existe porque la inmutabilidad simplifica el razonamiento sobre el código (nadie más puede "robarte" cambios inesperados); resuelve la limpieza y transformación segura de texto; los profesionales lo usan constantemente (todo dato de entrada llega como texto sucio); se conecta con T2 (la etiqueta se mueve, el objeto no cambia) y T3 (el tipo `str` es, específicamente, inmutable); sin inmutabilidad, cualquier función podría alterar un string compartido sin avisar.

**Reflexión metacognitiva** *(v2.0.1)*:
- ¿En qué ejercicio el diagrama de "cortes, no caracteres" te salvó de un error que ibas a cometer?
- ¿Qué tan distinto se sintió razonar sobre `IndexError` frente al `TypeError` de mutación — a pesar de que ambos son "errores de strings"?
- Si tuvieras que enseñarle a alguien por qué `palabra[0] = "p"` falla, ¿usarías la palabra "inmutable" o evitarías la jerga? ¿Por qué?

**Desafío final inédito:** dado un string `frase = "Python es genial"`, escribir una expresión que produzca la primera letra de cada palabra unidas (`"Peg"`) **sin usar ningún método que no haya aparecido en esta lección** y sin saber de antemano cuántas palabras tiene la frase. Ningún ejercicio anterior combinó slicing con búsqueda de espacios de forma genérica (no para un caso de dos palabras fijas) — el estudiante debe generalizar el patrón del laboratorio (buscar `" "` con `.index()`) a un número desconocido de palabras, un salto real de transferencia.

**Lectura:** [CMU 15-110, String Indexing/Slicing/Looping](https://www.cs.cmu.edu/~110/practice/unit1/strings.html) · [CS50, String Slicing](https://cs50.harvard.edu/python/shorts/string_slicing/).

**Beyond the Curriculum:** *"La inmutabilidad hace que los strings sean seguros para usarse como claves de diccionario — lo verás en N1."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia 1–2 |
| 2 | Predecir | Bloque 4, "predecir" (3, incluidos dos casos límite de slicing) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados (3 clases distintas) |
| 4 | Corregir | Bloque 4, "depurar" (3, tres clases de error distintas) |
| 5 | Modificar | Bloque 4, "modificar" (2) + "refactorizar" |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (iniciales de N palabras desconocidas) |
| 7 | Usar en un proyecto | Bloque 5, normalizador de contactos, integrando T1–T5 |

**Instrumento:** RM-03 + TD-01. Predice slicing sin ejecutar (incluidos casos límite); explica por qué la mutación directa falla conectándolo con T2; distingue `IndexError` de `TypeError`; defiende con la pregunta inédita.

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [CMU 15-110 — String Indexing/Slicing/Looping](https://www.cs.cmu.edu/~110/practice/unit1/strings.html) | Carnegie Mellon | EN | ~20 min lectura + práctica | Introductorio | Fuente directa del énfasis en inmutabilidad que esta lección adopta | 🟢 Antes de estudiar |
| [CS50 — String Slicing](https://cs50.harvard.edu/python/shorts/string_slicing/) | Harvard (CS50) | EN | ~10 min video | Introductorio | Mismo enfoque de límite-derecho-excluido, segunda fuente de referencia | 🔵 Durante la lección |
| [Python docs — Text Sequence Type str](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str) | Python Software Foundation | EN | referencia | Introductorio-Intermedio | Catálogo oficial completo de métodos de string, más allá de los cuatro usados en esta lección | 🟣 Después de terminar |
| [CS61A — material de slicing (técnica de cortes)](https://cs61a.org/) | UC Berkeley | EN | ~15 min lectura | Introductorio | Origen de la técnica visual "contar cortes, no caracteres" incorporada en el Bloque 3 | ⭐ Profundización opcional |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
