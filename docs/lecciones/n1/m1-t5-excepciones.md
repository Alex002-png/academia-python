# N1.M1.T5 — Excepciones

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n1-m1-t5-excepciones.md`](../../investigacion/n1-m1-t5-excepciones.md) — construida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial).
>
> Motor de ejecución: **Pyodide (Python real en el navegador)**.

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N1.M1.T5 |
| **Gran pregunta del módulo (M1)** | ¿Cómo organizamos programas para que sigan siendo comprensibles cuando crecen? |
| **Gran pregunta de esta lección** | Si tu programa puede fallar de mil formas distintas, ¿cómo decides qué errores debe sobrevivir tu programa y cuáles deberían detenerlo? |
| **Prerrequisitos** | N1.M1.T1 (modelo de llamadas — el mecanismo por el que una excepción "sube"); N0.T8 (leer tracebacks) |
| **Competencias** | C-N1-01; refuerza C-N0-02 |
| **Duración** | Heurística. Escalera densa (7 categorías) + laboratorio de robustez + desafío final. |
| **Conexión con N0** | N0.T8 enseñó a **leer** un traceback como información, no como fracaso. Hoy se aprende a **actuar** sobre ese error antes de que llegue a detener el programa. |
| **Conexión con N1.M1.T1** | El modelo de "entorno que nace y muere en cada llamada" (la pila de llamadas) es exactamente el mecanismo por el que una excepción no atrapada sigue subiendo, función tras función, hasta que alguien la atiende. |
| **Conexión con N1.M1.T8 (Ficheros)** | T8 exige T5 como prerrequisito explícito: los archivos fallan constantemente (no existen, no hay permisos) — hoy se siembra el manejo de errores que T8 va a necesitar sin excepción. |

## Bloque 0 — Preparación del Tutor

**Recuperación (T4):** 1) ¿Por qué el resultado de una comprehension con `if` no tiene el mismo tamaño que la colección original? 2) ¿Cuándo conviene usar un `for` explícito en vez de una comprehension?

**Diagnóstico relámpago:** *"En N0 aprendiste a LEER un traceback. Si pudieras 'atajar' ese error antes de que tumbe tu programa, ¿qué crees que necesitarías decirle a Python que hiciera en su lugar?"*

**Problema motivador:** *"Quiero pedirle un número al usuario, pero si escribe 'abc' en vez de un número, no quiero que mi programa se caiga — quiero pedírselo de nuevo."* No resoluble sin una forma de interceptar el error antes de que detenga el programa.

**Errores deliberados a inyectar:**
1. `except:` **desnudo** (sin especificar el tipo) que atrapa TODO, incluso errores que el programador nunca imaginó — silencia bugs reales junto con los esperados.
2. Capturar el error demasiado pronto y perder el contexto (`except Exception: print("error")`, sin decir NADA de qué pasó ni dónde). Clase: **capturar no es lo mismo que resolver — si no sabes qué hacer con el error, probablemente no deberías atraparlo ahí**.

## Bloque 1 — Intuición, analogía e historia

**Hook:** *"En N0 aprendiste a leer un traceback como información. Hoy aprendes a interceptarlo antes de que tumbe tu programa — y a decidir, con criterio, cuándo NO deberías hacerlo."*

**Analogía (verificada como predictiva):** una excepción es una **alarma que sube por una cadena de mando**. Si quien la recibe no sabe qué hacer con ella, la deja subir a su superior, y así sucesivamente hasta que alguien la atiende — o, si nadie la atiende, llega hasta arriba de todo y detiene la operación completa. **Prueba de que es predictiva:** un estudiante que recuerde esta imagen predice correctamente que una excepción no atrapada DENTRO de una función sigue subiendo a quien la llamó, y de ahí a quien llamó a esa — el mismo camino, en reversa, que las llamadas de T1 bajaron para llegar ahí.

**Historia (costo real):** antes de las excepciones (el enfoque de lenguajes como C), una función que podía fallar devolvía un código de error, y quien la llamaba tenía que acordarse de revisar ese código manualmente, cada vez, en cada llamada — olvidar un solo chequeo significaba que un error pasaba inadvertido. Las excepciones resuelven ese problema estructural: un error no atendido no puede pasar en silencio, sube solo hasta que alguien lo atiende o el programa se detiene.

## Bloque 2 — Conflicto cognitivo

```python
def dividir(a, b):
    return a / b

def calcular():
    return dividir(10, 0)

print("antes")
resultado = calcular()
print("después")
```

**Predicción esperada:** ¿el error aparece "en" `dividir()`, en `calcular()`, o en el programa principal? ¿Se imprime "después"?

La sorpresa: el error **ocurre** dentro de `dividir()`, pero como nadie lo atrapa ni ahí ni en `calcular()`, sigue subiendo hasta el programa principal — dos niveles de función de distancia de donde realmente se originó. `"después"` nunca se imprime: el programa se detiene en el punto exacto donde nadie atendió la alarma.

## Bloque 3 — Explicación rigurosa

**Sintaxis esencial:**
```python
try:
    numero = int(input("Numero: "))
except ValueError:
    print("Eso no es un numero")
else:
    print("Recibido:", numero)
finally:
    print("Fin del intento")
```
`except` específico (`ValueError`) atrapa solo ese tipo de error — nunca `except:` desnudo (Bloque 0). `else` corre solo si NO hubo error. `finally` corre **siempre**, haya habido error o no.

**EAFP vs. LBYL — el hallazgo de la investigación, con nombre oficial del lenguaje:** la documentación de Python nombra formalmente dos estilos para la misma decisión de la ficha ("¿validar antes o capturar después?"):
```python
# LBYL -- "Look Before You Leap": verificar antes
if "clave" in d:
    valor = d["clave"]
else:
    valor = None

# EAFP -- "Easier to Ask Forgiveness than Permission": intentar y capturar
try:
    valor = d["clave"]
except KeyError:
    valor = None
```
Ninguno es "el correcto" de forma absoluta — Python favorece EAFP quando el caso de fallo es la excepción, no la regla (por eso el nombre del lenguaje coincide con el del mecanismo). LBYL comunica mejor la intención cuando hay varios caminos posibles y cada uno necesita su propia lógica clara, no solo un `None` de repuesto.

## Bloque 4 — Escalera de práctica

*Nota de densidad (DOC-11 v2.0.1): siete categorías.*

**Predecir:**
1. El conflicto del Bloque 2.
2. Un `try/except/else` cuando NO hay error — ¿qué bloque corre, el `except` o el `else`?
3. Un `try/finally` (sin `except`) cuando SÍ hay un error — ¿corre el `finally` antes de que el error siga subiendo, o el error lo salta?

**Leer código:**
```python
def procesar(texto):
    try:
        return 100 / int(texto)
    except ValueError:
        return "no es un numero"
    except ZeroDivisionError:
        return "no se puede dividir entre cero"
```
Sin ejecutar: ¿qué devuelve `procesar("0")`? ¿Y `procesar("abc")`? ¿Y `procesar("5")`?

**Investigar / trazar:** dado un traceback con tres funciones anidadas (`main()` llama a `procesar()`, que llama a `validar()`), identificar en qué función se ORIGINÓ el error y en cuál (si alguna) se atrapó — igual que trazar un traceback real de N0.T8, ahora con la pieza de "quién lo atrapó" añadida.

**Modificar:** un `except:` desnudo que atrapa todo (Bloque 0) → especificar el tipo exacto de excepción que realmente se espera (`ValueError`, no todo).

**Refactorizar:** código con `if` repetidos verificando condiciones antes de cada operación (LBYL verboso) → una versión con `try/except` (EAFP) donde resulte más simple de leer.

**Escribir:** función `dividir_seguro(a, b)` que devuelve el resultado de la división, o un mensaje de error si `b` es `0` — sin usar ningún `if` para verificar `b == 0` antes (EAFP puro).

**Depurar (tres ejercicios, dificultad creciente):**
1. El `except:` desnudo que traga un bug real (Bloque 0).
2. Capturar demasiado pronto y perder el contexto del error (Bloque 0).
3. *(compuesto)* Una función usa `except Exception:` (demasiado genérico) ANTES que un `except ValueError:` más específico que nunca se alcanza a ejecutar — Python nunca llega al segundo `except` porque el primero ya atrapó todo. Diagnosticar y corregir el ORDEN (los `except` específicos van primero).

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Integración real (con T1):** el laboratorio reutiliza funciones con contrato claro (T1), ahora con manejo de errores como parte explícita de ese contrato.

**El proyecto — Validador de entrada robusta (DOC-03 A5, el caso hostil):** dada una lista de entradas de texto (algunas números válidos, algunas texto, algunas vacías, alguna cero), procesar cada una calculando `100 / valor` y reportar el resultado o un mensaje de error específico según el tipo de fallo — el programa **nunca** debe detenerse sin importar la entrada. Ninguna función debe usar `print()` internamente.

**Trade-off explícito:** ¿validar todo con `if` antes (LBYL) o intentar y capturar con `try/except` (EAFP)? Ambos son válidos aquí — ¿cuál se lee mejor con tres tipos distintos de entrada hostil?

**Argumento de corrección:** ¿el validador maneja CADA tipo de entrada mala sin tronar nunca — incluida una cadena vacía?

**Confrontación de soluciones:** comparar una versión con `except Exception` genérico contra una con `except ValueError` / `except ZeroDivisionError` específicos — ¿cuál le dice más al usuario sobre qué salió mal exactamente?

**Fase 2 — transferencia sin instrucciones repetidas:** agregar el manejo de un tipo de entrada hostil nuevo (un espacio en blanco `" "`) sin que se explique el patrón — se infiere, de los casos ya practicados, que el mismo `except ValueError` ya lo cubre.

## Bloque 6 — Consolidación

**Defensa socrática:**
1. ¿Por qué el error de `dividir()` en el Bloque 2 "aparece" en el programa principal aunque se originó dos niveles más adentro?
2. ¿Cuál es la diferencia real entre `except:` (desnudo) y `except Exception:`?
3. *(inédita)* Si un `except` captura un error, lo "arregla" mal, y el programa sigue con datos corruptos sin decir nada — ¿es eso mejor o peor que dejar que el programa se detenga?

**Seis preguntas de excelencia:**
1. ¿Qué aprendí? Que una excepción no atrapada sube por la misma cadena de llamadas por la que bajó, y que atraparla es una decisión, no un reflejo.
2. ¿Por qué existe este concepto? Porque el mundo real falla (archivos que no existen, entradas corruptas), y un mecanismo que "sube solo" evita que un error pase inadvertido.
3. ¿Qué problema resuelve? Permite decidir, en el lugar correcto del programa, dónde atender cada tipo de fallo, sin revisar manualmente cada llamada.
4. ¿Cómo lo usan los profesionales? Distinguen EAFP de LBYL como una decisión de diseño real, y nunca usan `except:` desnudo en código serio.
5. ¿Cómo se conecta con lo anterior? Usa directamente el modelo de pila de llamadas de T1 — el camino que sube es el mismo que bajó.
6. ¿Qué pasaría si no existiera? Cada llamada a una función que pudiera fallar necesitaría revisión manual de un código de error, y olvidar una sola revisión dejaría pasar el fallo en silencio.

**Reflexión metacognitiva:**
- ¿En qué ejercicio capturaste un error de forma demasiado genérica, y qué información perdiste al hacerlo?
- ¿Cómo se conecta la idea de "la excepción sube por la pila" con el modelo de entornos que nacen y mueren de Funciones a fondo?
- ¿Cuándo preferirías EAFP y cuándo LBYL, en tus propias palabras, sin repetir la definición?

**Desafío final inédito:** un `finally` con su propio `return` esconde una excepción que estaba subiendo:
```python
def riesgoso():
    try:
        raise ValueError("algo fallo")
        return "del try"
    finally:
        return "del finally"

print(riesgoso())
```
Predecir, ANTES de ejecutar, qué imprime — ¿se propaga el `ValueError`, o gana el `return` del `finally`? Explicar por qué este comportamiento (documentado, pero muy poco intuitivo) es una razón real para evitar `return` dentro de un `finally` en código serio.

**Lectura dirigida:** [MIT 6.0001 — Lecture 7, Testing, Debugging, Exceptions, and Assertions](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-7-testing-debugging-exceptions-and-assertions/) · [Python docs — Glossary: EAFP](https://docs.python.org/3/glossary.html#term-EAFP).

**Beyond the Curriculum:** *"La documentación de Python da una razón técnica adicional para preferir EAFP: en código que corre en paralelo (varios 'hilos' a la vez, fuera del alcance de N1), el estilo LBYL puede fallar si algo cambia justo entre 'mirar' y 'actuar' — una condición de carrera. EAFP no tiene esa ventana de riesgo. Lo verás con nombre propio más adelante; hoy basta con saber que la preferencia del lenguaje por EAFP no es solo estética."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados |
| 4 | Corregir | Bloque 4, "depurar" (3, incluido el caso compuesto de orden de except) |
| 5 | Modificar | Bloque 4, "modificar" (except desnudo) + "refactorizar" (LBYL→EAFP) |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (finally con return esconde una excepción) |
| 7 | Usar en un proyecto | Bloque 5, validador de entrada robusta (DOC-03 A5) |

**Instrumento DOC-02:** RM-03 + TD-01. Evidencia observable: ante un traceback multinivel, identifica dónde conviene capturar y dónde dejar subir, y lo argumenta (evidencia de dominio ya declarada en SYL-N1).

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [MIT 6.0001 — Lecture 7](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-7-testing-debugging-exceptions-and-assertions/) | MIT OpenCourseWare | EN | ~50 min | Introductorio | Trata excepciones junto a debugging — refuerza la conexión con los tracebacks de N0.T8 | 🟢 Antes de estudiar |
| [CS50P — Week 3, Exceptions](https://cs50.harvard.edu/python/weeks/3/) | Harvard (CS50) | EN | ~1h | Introductorio | Semana completa dedicada exclusivamente a excepciones, con validación de entrada como caso central | 🔵 Durante la lección |
| [Python docs — Glossary: EAFP / LBYL](https://docs.python.org/3/glossary.html#term-EAFP) | Python Software Foundation | EN | ~5 min | Introductorio | Fuente oficial exacta del vocabulario EAFP/LBYL usado en esta lección | 🔵 Durante la lección |
| [CS50P — Handling Exceptions](https://cs50.harvard.edu/python/shorts/handling_exceptions/) | Harvard (CS50) | EN | ~10 min | Introductorio | Ejemplos prácticos cortos de try/except validando entrada de usuario | 🟣 Después de terminar |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
