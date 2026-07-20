# N0 · T6 — Entrada y salida

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n0-t6-entrada-salida.md`](../../investigacion/n0-t6-entrada-salida.md), con addendum v2.0.1 (CS50P — patrón real de "bucle de validación", nombrado como puente explícito hacia T7).
>
> **Reconstruida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial):** contenido original conservado íntegro; se añade densidad horizontal, lectura de código, refactorización, laboratorio como mini-proyecto integrando T1–T6, metacognición y desafío final inédito.

*Bloques 1, 3, 4 conservan el material de producción ("Día 6").*

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N0.M1.T6 |
| **Gran pregunta** | Si tu programa va a escuchar al mundo exterior, ¿en qué forma exacta le llega lo que escucha? |
| **Duración** | Heurística, no plazo. Bajo DOC-11 v2.0.1: siete categorías de escalera y laboratorio en dos fases integrando T1–T6. |
| **Conexión con T2** | **La misma familia de error que el `contador = "10"` real de Alex** — allí escribió comillas de más; aquí `input()` las pone invisibles y hay que quitarlas con conversión. Direcciones opuestas, mismo problema de fondo: string vs. número. |
| **Conexión con T7 (Decisiones y repetición)** | Con datos de entrada ya confiables, T7 les da el poder de decidir y repetir sobre ellos — y hace posible, por fin, el "bucle de validación" que esta lección nombra pero no puede implementar todavía. |

## Bloque 0

**Recuperación (T5):** 1) ¿Por qué `palabra[0] = "x"` falla? 2) ¿Qué hace `.strip().upper()` encadenado? 3) ¿Por qué un string es "un documento notariado"?

**Diagnóstico relámpago:** *"El usuario escribe `21` en un `input()`. ¿Qué imprime `print(edad + edad)`?"* — expone si el estudiante ya generalizó "todo lo que entra por input es texto" o sigue asumiendo que Python "sabe" que es un número.

**Problema motivador:** *"Necesito que tu programa sume dos números que el usuario escribe — de verdad los sume, no los pegue."* No resoluble sin conversión.

**Errores deliberados:**
1. `edad = input("Edad: "); print(edad + edad)` con `21` → `"2121"` — clase: **input() sin convertir, la misma familia que el error real de Alex en T2**.
2. Convertir con `int()` cuando el dato puede traer decimales.
3. **Nuevo (v2.0.1):** `edad = input("Edad: ")` y el usuario escribe `"veinte"` (texto, no dígitos) → `int(edad)` lanza `ValueError`. Clase distinta de las dos anteriores: **el dato no solo necesita conversión, puede ser literalmente inconvertible** — el programa no puede simplemente "intentar de nuevo" todavía (eso exige el bucle de validación que T7 hará posible), pero sí puede fallar de forma controlada en vez de romperse en silencio.

## Bloque 1

**Hook:** *"Hasta hoy tus programas hablaban solos. Hoy aprenden a ESCUCHAR."*

## Bloque 2 — Conflicto cognitivo

`edad = input("Edad: ")` con el usuario escribiendo `21`; `print(edad + edad)` da `"2121"`, no `42`. **Se conecta explícitamente con T2:** *"¿Recuerdas cuando escribiste `contador = "10"` con comillas por accidente? Aquí Python pone esas comillas por ti, siempre, aunque el usuario escriba solo dígitos — la misma confusión, en la dirección contraria."*

## Bloque 3

**`input()` siempre devuelve str:** sin excepción. Todo número que entra por `input()` pasa por `int()` o `float()`.

```python
numero_1 = float(input("Primer número: "))
numero_2 = float(input("Segundo número: "))
print(f"Suma: {numero_1 + numero_2}")
```

**`print()` con opciones:** `sep` (separador, default espacio), `end` (default salto de línea).

**Modelo mental:** `input()` es una **frontera de confianza** — todo lo que cruza es `str` no confiable que se valida y convierte antes de tocar la lógica, igual que una API valida cada request (conexión directa con lo que N2 formalizará).

**El bucle de validación — nombrado, no implementable aún (v2.0.1)** *(ajuste real de la investigación — CS50P)*: la respuesta profesional completa a "¿y si el dato es inconvertible?" no es solo capturar el error una vez — es **volver a preguntar hasta obtener un dato válido**, en un bucle. Herramientas de referencia como la librería `cs50` de Harvard hacen exactamente esto. T6 no puede construirlo todavía (exige `while`, T7) — pero se nombra aquí, con el nombre correcto, para que cuando T7 lo haga posible, el estudiante reconozca el problema que ya conocía, no uno nuevo.

## Bloque 4 — Escalera

*Nota de densidad (v2.0.1): siete categorías.*

**Predecir:**
1. El conflicto del Bloque 2.
2. `nombre = input(); print("Hola " + nombre + "!")` con el usuario escribiendo `Alex` — ¿qué imprime exactamente, incluido el espacio? *(detalle de formato, no de tipo — categoría distinta de error a practicar)*.
3. `print("A", "B", "C", sep="-")` — ¿qué imprime? *(revisita `sep` en un contexto nuevo, no solo mencionado)*.

**Leer código** *(categoría propia, v2.0.1)*:
```python
entrada = input("Ingresa tu edad: ")
edad = int(entrada)
mensaje = "Tienes " + str(edad + 1) + " el próximo año"
print(mensaje)
```
Sin ejecutar: ¿por qué hay dos conversiones distintas en este fragmento (`int()` y `str()`) y qué pasaría si se omitiera cualquiera de las dos.

**Investigar / trazar:** dado un programa que pide tres números con `input()` y los suma, trazar qué pasaría si el segundo `input()` recibe un valor con espacios (`" 5 "`) — ¿`int(" 5 ")` falla o funciona? *(dato real no obvio: `int()` sí tolera espacios alrededor, a diferencia de lo que muchos estudiantes asumen)*.

**Modificar:**
1. Dado el programa de suma de dos números, modificarlo para que calcule el promedio de tres.
2. Dado el programa de edad, modificarlo para que en vez de sumar años, calcule en qué año nació la persona — mismo patrón de entrada/conversión, cálculo inverso.

**Refactorizar** *(categoría propia, v2.0.1)*: se entrega
```python
a = input("Primer número: ")
a = float(a)
b = input("Segundo número: ")
b = float(b)
print(a + b)
```
correcto pero repetitivo. El estudiante refactoriza a `a = float(input("Primer número: "))` en una sola línea por variable, y explica en qué caso (depuración) preferiría mantenerlo separado.

**Escribir:** saludo interactivo, la suma real (`4+8=12`, no `"48"`), calculadora de edad (año de nacimiento → edad en 2026).

**Depurar (tres ejercicios):**
1. Diagnosticar por qué una suma da `"48"` en vez de `12`.
2. `int(input("Edad: "))` con el usuario escribiendo `"20 años"` (texto extra, no solo dígitos) → `ValueError` — reparar reconociendo que `int()` no extrae números de un texto mixto, solo convierte texto que ES puramente un número.
3. *(nuevo)* Un programa que pide una nota y la convierte con `int()`, pero el usuario escribe `"15.5"` — mismo `ValueError` que el ejercicio 2 pero causa distinta (decimal, no texto) — reparar eligiendo `float()` en vez de `int()`, con justificación de por qué esa elección depende del dominio del dato, no de una regla fija.

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Integración real (T1–T6):** reutiliza el formato de recibo de T1, las variables de T2 (cada dato leído se etiqueta antes de usarse), conversión de T3, operadores de T4, métodos de string de T5, y ahora entrada real del usuario.

**El proyecto — Boleta de calificaciones interactiva:** pedir con `input()` el nombre y tres notas (0-20) de un estudiante, convertir y validar cada nota individualmente (sin bucle todavía — una sola oportunidad, con mensaje de error controlado si algo falla), calcular el promedio, y presentar el resultado en el formato de recibo de T1 con el nombre en mayúsculas (T5).

**Trade-off:** ¿validar el rango de la nota (0-20) ahora, con una sola oportunidad, o confiar en que el usuario escribe bien? — anticipa T8 (manejo de errores) y T7 (el bucle de validación real) sin resolverlos del todo aún; el costo de validar ahora es código adicional que todavía no puede "reintentar", solo "quejarse una vez".

**Argumento de corrección:** ¿qué pasa si el usuario escribe la nota con espacios de más? ¿Y si escribe un número fuera de 0-20 pero técnicamente convertible (`25`)?

**Confrontación de soluciones:** ¿construir el mensaje de error con `+` y `str()`, o con f-strings? — la misma confrontación ya practicada en T3, ahora aplicada a un contexto de validación real.

**Fase 2 — transferencia sin instrucciones repetidas:** extender el mismo programa a **dos estudiantes**, sin que se repita el procedimiento — obliga a decidir, sin instrucciones, si conviene repetir el bloque de `input()` a mano dos veces o buscar una forma de no duplicar código (sin loops todavía, el estudiante debe sentir la incomodidad de la repetición — el motivador real de T7, vivido antes de que T7 lo resuelva).

## Bloque 6 — Consolidación

**Defensa:** 1) ¿Por qué `input()` nunca devuelve directamente un número, ni siquiera si el usuario escribe solo dígitos? 2) Compara esto con tu propio error de T2 (`contador = "10"`): ¿en qué se parecen y en qué no? 3) *(inédita)* Si `input()` intentara "adivinar" el tipo automáticamente, ¿qué nuevo problema crearía?

**Seis preguntas de excelencia:** aprendí que todo dato externo llega como texto no confiable y debe convertirse explícitamente; existe porque el programa no puede "confiar" en la forma en que un humano escribe algo; resuelve la comunicación segura entre un programa y el mundo exterior; los profesionales lo usan en cada formulario, cada API, cada archivo leído; se conecta con T2 (el mismo error de tipo, en dirección opuesta) y anticipa T7/T8 (el bucle de validación, el manejo robusto de errores); sin esta frontera, cualquier dato mal escrito rompería el programa sin aviso.

**Reflexión metacognitiva** *(v2.0.1)*:
- ¿En qué se parece tu propio error de T2 (`contador = "10"`) a la trampa de esta lección? ¿Lograste verlo tú antes de que se te explicara?
- ¿Qué se siente saber que un problema (validar de verdad) tiene una solución que todavía no puedes construir? ¿Cómo manejaste esa incomodidad en la Fase 2 del laboratorio?
- Si tuvieras que explicarle a alguien qué es una "frontera de confianza" sin usar esa frase, ¿qué ejemplo de la vida real usarías?

**Desafío final inédito:** un programa recibe, en un solo `input()`, un nombre y una edad separados por una coma (`"Alex, 25"`). Sin haber visto un ejemplo de separar un `input()` en dos partes en toda la lección, el estudiante debe usar `.split(",")` — un método no enseñado explícitamente, solo nombrable por analogía con `.replace()` y `.strip()` ya conocidos (ambos de T5) — para extraer el nombre y la edad por separado, convertir la edad, e imprimir un saludo. Exige inferir la existencia de una herramienta a partir del patrón de otras ya conocidas, no recordarla.

**Lectura:** [Python docs — `input()`](https://docs.python.org/3/library/functions.html#input) · CS50P, funciones `get_int`/`get_float` de la librería `cs50` (para ver el patrón de bucle de validación en código real).

**Beyond the Curriculum:** *"`input→procesar→print` es el esqueleto de todo sistema conversacional — hasta un chatbot con IA. Y el 'bucle de validación' que hoy solo nombramos es, literalmente, lo primero que construirás en T7."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados (3 clases) |
| 4 | Corregir | Bloque 4, "depurar" (3, incluidas dos causas distintas de `ValueError`) |
| 5 | Modificar | Bloque 4, "modificar" (2) + "refactorizar" |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (`.split()`, inferido por analogía) |
| 7 | Usar en un proyecto | Bloque 5, boleta de calificaciones interactiva, integrando T1–T6 |

**Instrumento:** RM-03 + TD-01. Predice la trampa de concatenación antes de ejecutar; conecta explícitamente su propio error de T2 con esta lección en la defensa; corrige sin pista; distingue las causas de `ValueError`.

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [Python docs — `input()`](https://docs.python.org/3/library/functions.html#input) | Python Software Foundation | EN | ~5 min lectura | Introductorio | Referencia oficial exacta de la función central de esta lección | 🟢 Antes de estudiar |
| [CS50P — librería `cs50` (`get_int`, `get_float`)](https://cs50.readthedocs.io/libraries/cs50/python/) | Harvard (CS50) | EN | ~15 min lectura | Introductorio | Origen del patrón "bucle de validación" nombrado en el Bloque 3 — código real, no solo idea | 🔵 Durante la lección |
| [Real Python — Python's input() Function](https://realpython.com/python-input-output/) | Real Python | EN | ~25 min lectura | Introductorio-Intermedio | Profundiza el manejo de errores de conversión más allá de lo cubierto aquí, sin adelantar T8 | 🟣 Después de terminar |
| [Real Python — String split()](https://realpython.com/python-string-split-methods/) | Real Python | EN | ~15 min lectura | Intermedio | Para quien quiera ver `.split()` (usado en el desafío final) documentado a fondo, no solo inferido | ⭐ Profundización opcional |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
