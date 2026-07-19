# N0 · T3 — Tipos de datos

> **Estado (3 independientes, DOC-11 §6bis):** **Desarrollo:** ✅ **Completado — la lección está terminada como documento; no bloquea T4 ni el resto de la Academia.** **Validación:** ⏳ Pendiente de validación *(nunca "pendiente de desarrollo" — DOC-11, regla de nomenclatura)*: la hipótesis del Bloque 0 sobre la causa real del error de Alex espera evidencia real, sin detener nada. **Mejora continua:** 0 observaciones (aún sin sesión real). **Investigación pedagógica:** ✅ aprobada — [`docs/investigacion/n0-t3-tipos-de-datos.md`](../../investigacion/n0-t3-tipos-de-datos.md), con revisión crítica y 2 ajustes ya incorporados abajo.

*El contenido de los Bloques 1, 3 (parcial) y 4 conserva y organiza el material ya publicado y validado en producción (campus, "Día 3"): hook, historia real, intuición `"3"+"4"` vs `3+4`, checkpoint, síntesis, y los tres ejercicios + reto ya escritos. DOC-03 §7 establece que N0 no se reescribe.*

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N0.M1.T3 |
| **Título** | Tipos de datos |
| **La gran pregunta de la lección** | ¿Por qué el mismo símbolo `+` a veces suma y a veces pega texto — y cómo evito que esa doble vida me traicione? |
| **Prerrequisitos** | N0.M1.T2 (variables: la etiqueta apunta a un objeto — aquí se nombra la propiedad más importante de ese objeto: su tipo) |
| **Competencias servidas** | C-N0-01 |
| **Duración estimada** | 3–5 h (registro vivo, SYL-N0 §1) |
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

**Predecir (intuición ya en producción):**
```python
print("3" + "4")
print(3 + 4)
```
¿Qué imprime cada línea? — *el operador `+` tiene doble vida: con strings pega (`"34"`), con números suma (`7`). El tipo del dato decide cuál de las dos ocurre — la misma regla que, aplicada a tipos mixtos, produce el error del Bloque 2.*

**Investigar:** trazar `type()` sobre los cuatro valores primitivos (Ejercicio 1 — Inspector de tipos, ya en producción): `42`, `3.14`, `"hola"`, `True`, en ese orden.

**Modificar / Escribir:**
- *Ejercicio 2 — Rescata el número (ya en producción):* `edad_texto = "25"` llega como string; convertir a entero, sumar 5, imprimir `30`.
- *Reto del bloque anterior resuelto parcialmente:* aplicar lo mismo al problema del Bloque 0 (edad hasta cumplir 100).

**Depurar (ya en producción, d3e3):** `print("Tengo " + 25 + " años")` — leer el traceback, diagnosticar la mezcla de tipos, reparar por **dos caminos válidos** (conversión con `str(25)`, o f-string) para que imprima exactamente `Tengo 25 años`. Disciplina completa: síntoma (`TypeError`) → hipótesis → causa raíz (mezcla str/int en `+`) → corrección → clase (la misma del Bloque 2, ahora nombrada con precisión).

## Bloque 5 — Laboratorio

**El problema, ahora resoluble (reto ya en producción):** *"El precio llega como texto y hay un descuento. Imprime exactamente `Pagas: 120` — pero el 120 debe salir de un cálculo real (prohibido escribir 120 directamente)."* `precio_texto = "150"`, `descuento = 30`.

**Trade-off explícito:** convertir con `int()` (si el precio siempre es entero) vs. `float()` (si algún día trae decimales) — cuesta pensar en el futuro del dato para decidir hoy con qué tipo trabajar; equivocarse en esta elección puede producir un resultado técnicamente correcto pero con precisión equivocada más adelante.

**Argumento de corrección:** el estudiante enumera qué pasaría si `precio_texto` viniera con espacios (`" 150"`) o con decimales (`"150.50"`) antes de dar la solución por terminada — ¿su conversión sigue funcionando?

**Confrontación de soluciones (aquí sí aplica — hay libertad de diseño genuina, a diferencia de T2):** el ejercicio de depuración (d3e3) admite dos caminos igualmente válidos — `str(25)` explícito, o f-string. Se le pide al estudiante comparar ambos: ¿cuál escala mejor si la frase tuviera cinco valores distintos que insertar, no uno? ¿Cuál es más legible?

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

**Lectura dirigida:** docs.python.org, Tutorial §3.1.1–3.1.2 · CS50P, Lecture 1 (Data Types).

**Puerta Beyond the Curriculum:** *"¿Por qué `0.1 + 0.2` no da exactamente `0.3`? La respuesta completa vive en cómo se representan los decimales en binario (IEEE 754) — la profundidad matemática real de esto espera en N3."*

---

## Evidencia de dominio e instrumento

**Evidencia observable:** el estudiante predice correctamente el resultado de operaciones con tipos iguales y distintos sin ejecutar antes, diagnostica un `TypeError` de mezcla de tipos sin pista previa, y explica con sus palabras la diferencia entre "dinámico" y "fuerte" en la defensa. **Instrumento (DOC-02):** escalera + reto autocorregidos (RM-03) + defensa breve TD-01 (RM-05) — compuerta de tema conforme a SYL-N0 §4.

## Checklist de conformidad (DOC-11 §5)

☑ Ficha de control · ☑ Recuperación activa (3 preguntas de T2) · ☑ Diagnóstico relámpago rediseñado para probar, no asumir, la causa real · ☑ Problema motivador no resoluble aún · ☑ Errores deliberados con clase declarada (2, ambos ya en producción) · ☑ Hook + analogía verificada (extensión de T2, no la de Stanford) + historia con anécdota real · ☑ Conflicto cognitivo conectado explícitamente al error real de Alex · ☑ Modelo mental + vocabulario técnico introducido después del conflicto (ajuste de la revisión crítica) · ☐ 4 niveles B1 — **no aplica** (aún sin masa crítica para Avanzado/Elite en N0) · ☐ Intercalado P12 — **no aplica** (solo T1–T2 existen antes) · ☑ Laboratorio con trade-off + argumento de corrección · ☑ Confrontación de soluciones (aplica — libertad de diseño genuina en d3e3) · ☑ Defensa con pregunta inédita · ☑ Seis preguntas de excelencia · ☑ Lectura dirigida con referencia exacta · ☑ Puerta Beyond the Curriculum concreta (conecta con N3) · ☑ Evidencia de dominio + instrumento declarados · ☑ Conexión con T2 y T4 explícita · ☑ Checklist de DOC-03 §6 satisfecho.

## Registro de observaciones de ejecución *(DOC-11 §6 — pendiente de la sesión real)*

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |

*Primer dato esperado: la respuesta de Alex al diagnóstico relámpago del Bloque 0 — decidirá cuál de las tres hipótesis de la investigación era la real, y podrá actualizar el documento vivo de investigación.*
