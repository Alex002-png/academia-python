# N0 · T3 — Tipos de datos

> **Estado (3 independientes, DOC-11 §6bis):** **Desarrollo:** ✅ **Completado — la lección está terminada como documento; no bloquea T4 ni el resto de la Academia.** **Validación:** ⏳ Pendiente de validación *(nunca "pendiente de desarrollo" — DOC-11, regla de nomenclatura)*: la hipótesis del Bloque 0 sobre la causa real del error de Alex espera evidencia real, sin detener nada. **Mejora continua:** 0 observaciones (aún sin sesión real). **Investigación pedagógica:** ✅ aprobada — [`docs/investigacion/n0-t3-tipos-de-datos.md`](../../investigacion/n0-t3-tipos-de-datos.md), con revisión crítica, 2 ajustes y un addendum v2.0.1 (UC Berkeley, quinta institución independiente que confirma la mezcla de tipos como tema propio).
>
> **Reconstruida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial):** el contenido pedagógico original (ya de muy alta exigencia) se conserva íntegro — esta versión añade densidad horizontal (más ejercicios reales por categoría), lectura de código, refactorización, un laboratorio en dos fases que integra T1+T2+T3, reflexión metacognitiva y desafío final inédito.

*El contenido de los Bloques 1, 3 (parcial) y 4 conserva y organiza el material ya publicado y validado en producción (campus, "Día 3"): hook, historia real, intuición `"3"+"4"` vs `3+4`, checkpoint, síntesis, y los tres ejercicios + reto ya escritos. DOC-03 §7 establece que N0 no se reescribe.*

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N0.M1.T3 |
| **Título** | Tipos de datos |
| **La gran pregunta de la lección** | ¿Por qué el mismo símbolo `+` a veces suma y a veces pega texto — y cómo evito que esa doble vida me traicione? |
| **Prerrequisitos** | N0.M1.T2 (variables: la etiqueta apunta a un objeto — aquí se nombra la propiedad más importante de ese objeto: su tipo) |
| **Competencias servidas** | C-N0-01 |
| **Duración** | Heurística, no plazo (14.2). Bajo DOC-11 v2.0.1: siete categorías de escalera + laboratorio en dos fases integrando T1+T2+T3 — se siente como varias sesiones reales, no una tarde. |
| **Conexión con la lección anterior** | T2 estableció que la etiqueta apunta a un objeto, sin nombrar todavía la propiedad más importante de ese objeto. Dejó además, sin resolver, el error real de Alex (`contador = "10"`) — la pregunta pendiente de esta misma sesión. |
| **Conexión con la siguiente lección (T4, Operadores)** | T3 enseña qué *es* un tipo y por qué `+` se comporta distinto según el tipo de sus operandos. T4 generaliza la pregunta a *todos* los operadores (`//`, `%`, comparaciones) — la misma pregunta rectora, aplicada a un catálogo completo. |

---

## Bloque 0 — Preparación del Tutor

**Preguntas de recuperación activa (de T2):**
1. `precio = 100; precio_final = precio; precio = 200`. ¿Cuánto vale `precio_final`? — *esperada: 100, la etiqueta se movió, el objeto no cambió.*
2. ¿Por qué `x = x + 1` no es una contradicción matemática? — *esperada: primero se evalúa la derecha, luego la etiqueta se mueve al resultado.*
3. Con tus palabras: ¿cuál es la diferencia entre pensar una variable como "caja" y pensarla como "etiqueta"? — *esperada: la caja implica que el valor vive dentro y se modifica; la etiqueta implica que apunta a un objeto y puede moverse a otro distinto.*

**Diagnóstico relámpago — rediseñado tras la revisión crítica de la investigación (no se asume la causa del error de Alex, se prueba):** esta es, literalmente, la pregunta que quedó pendiente al cierre de T2 y que ahora se retoma como diagnóstico formal de apertura de T3: *"Explícame cómo llegaste a `42` cuando te pregunté qué imprime `print("4 * 2")`. ¿Qué le pasó, en tu razonamiento, al asterisco y a los espacios?"* La respuesta debe distinguir entre tres hipótesis igualmente plausibles antes de esta pregunta (Investigación N0·T3, Hallazgo 5): **(a)** creía que el contenido entre comillas igual se evalúa como operación; **(b)** fue un despiste de lectura, sin peso conceptual; **(c)** imitó sin razonar un patrón de un ejercicio anterior. La respuesta real de Alex decide cuál de las tres es, y ese dato se registra en §6 antes de continuar.

**El problema antes que nada:** *"Tu programa va a recibir la edad de alguien escrita como texto — así llega siempre que se lee del teclado — y tiene que calcular en cuántos años esa persona cumplirá 100. No puedes hacerlo todavía con lo que sabes de T1–T2: si sumas el texto directamente con un número, algo va a explotar."*

**Errores deliberados a inyectar:**
1. **`print("Tengo " + 25 + " años")`** (ya en producción, d3e3) → `TypeError: can only concatenate str (not "int") to str`. Clase de error: **mezclar tipos incompatibles en una operación que solo tiene sentido entre iguales.**
2. **`int("3.5")`** → `ValueError: invalid literal for int() with base 10: '3.5'`. Clase de error, distinta de la anterior: **conversión inválida** — `int()` no interpreta el punto decimal; el camino correcto es `int(float("3.5"))`.

## Bloque 1 — Intuición, analogía e historia

**Hook (ya en producción):** *"Confundir tipos destruyó el cohete Ariane 5 (370 millones de dólares en 37 segundos) y corrompió miles de papers científicos cuando Excel convirtió genes en fechas. Las empresas pagan por ingenieros que NO cometen ese error. Hoy te vuelves uno."*

**Historia real (ya en producción, verificada):** los bits no dicen qué son — `01000001` es el número 65 o la letra A según el manual de lectura. FORTRAN (1957) fijó tipos declarados; Lisp (1958) probó tipos dinámicos. Python eligió lo mejor de ambos: **dinámico** (no declaras el tipo) pero **fuerte** (jamás mezcla tipos a escondidas) — prefiere explotar a mentirte.

**Analogía (extensión directa de la de T2 — nunca la maleta de Stanford, rechazada por la investigación con traza demostrada):** el tipo es el **envase original de un producto**, no la etiqueta de precio que le pegas encima. Una lata de conservas dice "CONSERVAS" de fábrica —el tipo, propiedad del objeto, fijo desde que existe—; la etiqueta de precio (tu variable) puede despegarse y pegarse sobre una caja de cereal distinta, pero eso nunca convierte a la lata en caja ni viceversa. Cuando preguntas `type(x)`, estás preguntando qué envase es el producto sobre el que *ahora mismo* está pegada la etiqueta `x` — no una propiedad de la etiqueta misma.

## Bloque 2 — Conflicto cognitivo

Con el intento del Bloque 0 fresco, se presenta el fallo real:

```python
print("Tengo " + 25 + " años")
```
```
TypeError: can only concatenate str (not "int") to str
```

El estudiante, con el modelo "envase" recién construido pero aún sin la regla completa, predice que Python "hará algo razonable" con `+` aquí — igual que lo hizo con `"3" + "4"` (que pega) o con `3 + 4` (que suma). Pero `+` **no tiene una tercera regla para tipos mixtos**: Python se niega, en vez de adivinar qué querías decir. Este es el momento de máxima atención: la sorpresa no es que haya un error — es que Python, pudiendo "adivinar" razonablemente que querías texto, se niega a hacerlo. **Se conecta explícitamente con el error real de Alex** (`contador = "10"`): ambos casos son la misma familia — el momento en que dos tipos se encuentran y el estudiante todavía no sabe qué regla aplica.

## Bloque 3 — Explicación rigurosa con la máquina a la vista

**Los cuatro tipos primitivos (ya en producción):** `int` (enteros), `float` (decimales), `str` (texto), `bool` (`True`/`False`). El tipo determina qué operaciones son válidas: `3 + 5` suma, `"3" + "5"` pega texto (`"35"`), y `"3" + 5` explota con `TypeError` — la traza exacta del Bloque 2. Se pregunta el tipo de cualquier cosa con `type()`.

```python
print(type(42))       # <class 'int'>
print(type(3.14))     # <class 'float'>
print(type("hola"))   # <class 'str'>
print(type(True))     # <class 'bool'>
```

**Vocabulario técnico — introducido ahora, DESPUÉS del conflicto, nunca antes (ajuste de la revisión crítica, Hallazgo 3):** ahora que el estudiante ya sintió la sorpresa del Bloque 2, se nombra con precisión: Python es **dinámico** (nunca declaras de antemano el tipo de una variable — por eso `x` pudo apuntar primero a un `int` y luego a un `str` en T2) **y fuerte** (nunca mezcla tipos automáticamente — por eso `"Tengo " + 25` explota en vez de convertir en silencio). Son dos ejes distintos: *dinámico* responde "¿declaro el tipo?"; *fuerte* responde "¿el lenguaje mezcla tipos sin que yo se lo pida?". Confundirlos —creer que "dinámico" significa "todo vale"— es exactamente el error que este bloque previene, no solo describe.

**Conversiones y una verdad incómoda (ya en producción):** `int("25")`, `float("3.5")`, `str(42)` convierten entre tipos — pero `int("3.5")` falla (`ValueError`): `int()` no interpreta el punto; el camino correcto es `int(float("3.5"))`. Y una verdad del hardware, no un bug de Python: `0.1 + 0.2 == 0.3` es `False`, porque los decimales se guardan en binario y `0.1` no tiene representación binaria exacta.

## Bloque 4 — Práctica en escalera

*Nota de densidad (DOC-11 v2.0.1): siete categorías, ejercicios reales añadidos sobre la base ya sólida en producción.*

**Predecir (intuición ya en producción, más 2 nuevas):**
1. ```python
   print("3" + "4")
   print(3 + 4)
   ```
   ¿Qué imprime cada línea? — *el operador `+` tiene doble vida: con strings pega (`"34"`), con números suma (`7`).*
2. ¿Qué imprime `print(type(3 + 4))` comparado con `print(type("3" + "4"))`? *(nuevo — obliga a predecir el tipo del resultado, no solo el valor, generalizando el hábito de verificación de CMU antes de que aparezca como herramienta explícita)*.
3. ¿Qué imprime `print(type(3 / 1))`? *(nuevo — caso límite real de Python: la división `/` siempre devuelve `float`, incluso entre enteros exactos — sorpresa menor pero real que anticipa T4)*.

**Leer código** *(categoría propia, v2.0.1)*:
```python
edad = "20"
edad_en_5 = edad + 5
```
El estudiante debe explicar, sin ejecutar, exactamente qué falla y por qué — y además identificar cuál de las dos variables tiene el tipo "equivocado para la operación", distinguiendo esto de un error de sintaxis (no lo es).

**Investigar:** trazar `type()` sobre los cuatro valores primitivos (Ejercicio 1 — Inspector de tipos, ya en producción): `42`, `3.14`, `"hola"`, `True`, en ese orden.

**Modificar / Escribir:**
- *Ejercicio 2 — Rescata el número (ya en producción):* `edad_texto = "25"` llega como string; convertir a entero, sumar 5, imprimir `30`.
- *Reto del bloque anterior resuelto parcialmente:* aplicar lo mismo al problema del Bloque 0 (edad hasta cumplir 100).
- *Nuevo — modificar la dirección del problema:* dado un programa que convierte texto a número, modificarlo para que en vez de sumar, calcule cuántos años **faltan** para una edad objetivo dada por otra variable — mismo mecanismo de conversión, objetivo distinto.

**Refactorizar** *(categoría propia, v2.0.1)*: se entrega
```python
edad_texto = "17"
edad_numero = int(edad_texto)
edad_numero_mas_uno = edad_numero + 1
print(edad_numero_mas_uno)
```
correcto pero con una variable intermedia que no aporta claridad real. El estudiante debe decidir, con justificación, si conviene consolidar en menos líneas o si la variable intermedia mejora la legibilidad — a diferencia de T1/T2, aquí la respuesta "correcta" no es obvia: es un juicio de ingeniería real, no una regla mecánica.

**Depurar (dos ejercicios, ampliado desde el original ya en producción):**
1. `print("Tengo " + 25 + " años")` — leer el traceback, diagnosticar la mezcla de tipos, reparar por **dos caminos válidos** (conversión con `str(25)`, o f-string) para que imprima exactamente `Tengo 25 años`.
2. *(nuevo)* `int("3.5")` → `ValueError` — el estudiante debe distinguir esta clase de error (**conversión inválida**) de la del ejercicio 1 (**mezcla de tipos incompatibles**) antes de repararla con `int(float("3.5"))` — dos clases de error de tipo, en la misma lección, que no deben confundirse entre sí.

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Integración real (DOC-11 v2.0.1 — primera lección de N0 con suficientes lecciones previas para cumplir el mandato sin excepción):** el laboratorio integra explícitamente T1 (formato de salida con `print()`), T2 (variables como etiquetas) y T3 (conversión de tipos) en un solo artefacto.

**El proyecto — Calculadora de vuelto:** un programa que recibe, como texto (tal como llegaría de un formulario real), el precio de un producto y el monto pagado por el cliente; debe convertir ambos, calcular el vuelto, y **imprimir un recibo con el formato de bordes ya construido en el laboratorio de T1** (integración directa y citable) mostrando producto, precio, monto pagado y vuelto — reutilizando además el patrón de nombrado de variables de T2 (`snake_case`, sin sombrear built-ins).

**Trade-off explícito:** convertir con `int()` (si el precio siempre es entero) vs. `float()` (si algún día trae decimales) — cuesta pensar en el futuro del dato para decidir hoy con qué tipo trabajar; equivocarse en esta elección puede producir un resultado técnicamente correcto pero con precisión equivocada más adelante.

**Argumento de corrección:** el estudiante enumera qué pasaría si el monto viniera con espacios (`" 150"`) o con decimales (`"150.50"`) antes de dar la solución por terminada — ¿su conversión sigue funcionando?

**Confrontación de soluciones (aplica — hay libertad de diseño genuina):** el ejercicio de depuración (d3e3) admite dos caminos igualmente válidos — `str(25)` explícito, o f-string. Se le pide al estudiante comparar ambos: ¿cuál escala mejor si la frase tuviera cinco valores distintos que insertar, no uno? ¿Cuál es más legible? Se extiende la misma confrontación al propio recibo del laboratorio: ¿construir el string del recibo con `+` y `str()` explícitos, o con f-strings?

**Fase 2 — transferencia sin instrucciones repetidas:** el mismo programa, sin que se repita el procedimiento, debe adaptarse para calcular el vuelto de **dos productos comprados juntos**, no uno — obliga a decidir, sin que se le diga, en qué punto conviene sumar antes de convertir o convertir antes de sumar, y por qué el orden sí importa cuando hay conversión de por medio.

## Bloque 6 — Consolidación

**Defensa socrática:**
1. Explica por qué `"3" + "4"` y `3 + 4` no son la misma operación, aunque usen el mismo símbolo.
2. ¿Qué significa que Python sea "fuerte" — y por qué eso es distinto de estar "tipado estáticamente"?
3. *(inédita)* Si Python permitiera que `"3" + 4` se convirtiera automáticamente en `"34"`, ¿qué tipo de error dejaría de verse a tiempo, y por qué eso sería peor que el `TypeError` actual?

**Las seis preguntas de excelencia:**
- ¿Qué aprendí? Que cada objeto tiene un tipo fijo, y que las operaciones válidas dependen de ese tipo, no de lo que "parece" el valor.
- ¿Por qué existe este concepto? Porque sin tipos, el lenguaje tendría que adivinar qué significa cada operación — y adivinar mal, en silencio, es la fuente de bugs más cara de la industria.
- ¿Qué problema resuelve? Evitar que un dato se use de una forma que no tiene sentido para lo que realmente es.
- ¿Cómo lo usan los profesionales? Todo dato que entra a un sistema (de un formulario, de una API, del teclado) llega como texto y se convierte en la frontera — el patrón exacto de esta lección.
- ¿Cómo se conecta con lo anterior? T2 dijo que la etiqueta apunta a un objeto; T3 nombra la propiedad más importante de ese objeto.
- ¿Qué pasaría si no existiera? Cada operación tendría que adivinar qué querías decir — exactamente el desastre que costó 370 millones de dólares en el Ariane 5.

**Reflexión metacognitiva** *(v2.0.1)*:
- ¿En qué ejercicio de esta lección confundiste "no funciona" con "no tiene sentido matemáticamente" — y en qué momento distinguiste una cosa de la otra?
- Si el error de Alex en T2 (`contador = "10"`) te hubiera pasado a ti, ¿lo habrías detectado antes o después de esta lección?
- ¿Qué parte de "dinámico y fuerte" te costó más mantener separada en tu cabeza?

**Desafío final inédito:** dado
```python
resultado = "10" * 3
print(resultado)
```
predecir el resultado **antes de ejecutar**, sabiendo que `*` con dos strings sería un error (como `+`) — pero aquí uno de los operandos es un `int`. Ningún ejercicio anterior de esta lección mostró `*` entre un string y un número: el estudiante debe usar el modelo de "el tipo decide qué opera válidamente" para razonar, no para recordar, que Python define esta combinación específica como repetición (`"101010"`) — un tercer comportamiento de un operador, ni suma ni concatenación por pares, que ni siquiera el Bloque 3 mencionó. Si se equivoca, debe poder explicar después por qué su predicción fallaba de forma coherente con lo que sí sabía, no solo aceptar la respuesta.

**Lectura dirigida:** docs.python.org, Tutorial §3.1.1–3.1.2 · CS50P, Lecture 1 (Data Types).

**Puerta Beyond the Curriculum:** *"¿Por qué `0.1 + 0.2` no da exactamente `0.3`? La respuesta completa vive en cómo se representan los decimales en binario (IEEE 754) — la profundidad matemática real de esto espera en N3."*

---

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia 1–2 |
| 2 | Predecir | Bloque 4, "predecir" (3) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados (2 clases) |
| 4 | Corregir | Bloque 4, "depurar" (2, dos clases distintas de error de tipo) |
| 5 | Modificar | Bloque 4, "modificar" (2) + "refactorizar" |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (`"10" * 3`, un tercer comportamiento de operador nunca mencionado) |
| 7 | Usar en un proyecto | Bloque 5, mini-proyecto de la calculadora de vuelto, integrando T1+T2+T3 |

**Instrumento DOC-02:** escalera + reto autocorregidos (RM-03) + defensa breve TD-01 (RM-05) — compuerta de tema conforme a SYL-N0 §4. **Evidencia observable:** el estudiante predice correctamente el resultado de operaciones con tipos iguales y distintos sin ejecutar antes, diagnostica un `TypeError` de mezcla de tipos sin pista previa, distingue conversión inválida de mezcla de tipos, y explica con sus palabras la diferencia entre "dinámico" y "fuerte" en la defensa.

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [CS50 — Data Types (PDF)](https://cs50.harvard.edu/ap/2020/assets/pdfs/data_types.pdf) | Harvard (CS50) | EN | ~15 min lectura | Introductorio | Vocabulario técnico exacto (estático/dinámico vs. fuerte/débil) que esta lección adopta explícitamente | 🟢 Antes de estudiar |
| [Python docs — Built-in Types](https://docs.python.org/3/library/stdtypes.html) | Python Software Foundation | EN | referencia | Introductorio-Intermedio | Fuente oficial exacta de cada tipo y conversión usados en esta lección | 🔵 Durante la lección |
| [CS61A — Type Coercion (Lecture 18)](http://www.infocobuild.com/education/audio-video-courses/computer-science/CS61A-Spring2015-Berkeley/lecture-18.html) | UC Berkeley | EN | ~50 min video | Intermedio | Quinta institución de referencia que confirma la mezcla/conversión de tipos como tema con entidad propia, no un detalle menor | 🟣 Después de terminar |
| [Sorva — "Notional Machines and Introductory Programming Education"](https://dl.acm.org/doi/10.1145/2483710.2483713) | J. Sorva, ACM TOCE 2013 | EN | ~40 min lectura | Avanzado | El chequeo de tipos del intérprete como "notional machine" invisible — la teoría detrás de por qué esta lección lo hace explícito | ⭐ Profundización opcional |

## Checklist de conformidad (DOC-11 §5)

☑ Ficha de control · ☑ Recuperación activa (3 preguntas de T2) · ☑ Diagnóstico relámpago rediseñado para probar, no asumir, la causa real · ☑ Problema motivador no resoluble aún · ☑ Errores deliberados con clase declarada (2, ambos ya en producción) · ☑ Hook + analogía verificada (extensión de T2, no la de Stanford) + historia con anécdota real · ☑ Conflicto cognitivo conectado explícitamente al error real de Alex · ☑ Modelo mental + vocabulario técnico introducido después del conflicto (ajuste de la revisión crítica) · ☐ 4 niveles B1 — **no aplica** (aún sin masa crítica para Avanzado/Elite en N0) · ☐ Intercalado P12 — **no aplica** (solo T1–T2 existen antes) · ☑ Escalera con 7 categorías, lectura de código y refactorización incluidas (v2.0.1) · ☑ Laboratorio como mini-proyecto integrando T1+T2+T3, en dos fases (v2.0.1) · ☑ Trade-off + argumento de corrección · ☑ Confrontación de soluciones (aplica — libertad de diseño genuina en d3e3, extendida al recibo) · ☑ Defensa con pregunta inédita · ☑ Seis preguntas de excelencia · ☑ Reflexión metacognitiva (v2.0.1) · ☑ Desafío final inédito — `"10" * 3` (v2.0.1) · ☑ Lectura dirigida con referencia exacta · ☑ Puerta Beyond the Curriculum concreta (conecta con N3) · ☑ Recursos recomendados, 4 fuentes clasificadas (v2.0.1) · ☑ Siete capacidades de dominio con instrumento (v2.0.1) · ☑ Evidencia de dominio + instrumento declarados · ☑ Conexión con T2 y T4 explícita · ☑ Checklist de DOC-03 §6 satisfecho.

## Registro de observaciones de ejecución *(DOC-11 §6 — pendiente de la sesión real)*

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |

*Primer dato esperado: la respuesta de Alex al diagnóstico relámpago del Bloque 0 — decidirá cuál de las tres hipótesis de la investigación era la real, y podrá actualizar el documento vivo de investigación.*
