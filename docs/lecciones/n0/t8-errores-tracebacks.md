# N0 · T8 — Errores y tracebacks

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n0-t8-errores-tracebacks.md`](../../investigacion/n0-t8-errores-tracebacks.md), con addendum v2.0.1 (UC Berkeley — convención `"DEBUG: "` para prints de diagnóstico, cerrando el círculo con el `print()` de T1).
>
> **Reconstruida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial) — última lección de N0:** contenido original conservado íntegro; se añade densidad horizontal, lectura de código, refactorización, un laboratorio final que integra las ocho lecciones completas de N0, metacognición y desafío final inédito.

*Bloques 1, 3, 4 conservan el material de producción ("Día 8"), ahora con respaldo explícito de literatura consolidada (Prather & Denny) para la disciplina de lectura bottom-up.*

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N0.M1.T8 |
| **Gran pregunta** | ¿Cómo lee un ingeniero un error para que deje de ser un muro y se convierta en un mapa? |
| **Duración** | Heurística, no plazo. Bajo DOC-11 v2.0.1: siete categorías de escalera y un laboratorio final que integra las ocho lecciones completas de N0 — el cierre de mayor densidad de todo el nivel. |
| **Conexión con T7** | Los bucles e ifs mal calibrados (T7) producen exactamente los tipos de error que aquí se aprenden a leer. |
| **Conexión con el proyecto (calculadora)** | T8 cierra el módulo: todo lo acumulado (T1-T7) se pone a prueba en un artefacto real que debe sobrevivir a entradas hostiles. |

## Bloque 0

**Recuperación (T7):** 1) ¿Por qué la indentación es sintaxis? 2) ¿Qué evita un bucle infinito? 3) ¿Qué es un error de límite (fencepost) y cómo se distingue del bucle infinito?

**Diagnóstico relámpago:** `print(int("12.5"))` — ¿corre o explota? ¿Con qué tipo de error exactamente?

**Problema motivador:** *"Tu programa debe dividir dos números que pide al usuario — pero si el divisor es 0, no puede simplemente explotar delante de quien lo use."* No resoluble sin anticipar el error.

**Errores deliberados:**
1. `NameError` por error de dedo (`mensage` vs `mensaje`).
2. `TypeError` al sumar `input()` sin convertir.
3. `ZeroDivisionError` sin anticipar.
4. **Nuevo (v2.0.1):** un `IndexError` al acceder a una posición de string fuera de rango dentro de un programa más largo (no aislado como en T5) — el estudiante debe localizarlo dentro de más contexto, exactamente el escenario de "carga cognitiva contextual" que la investigación (Prather et al.) identifica como el punto donde la lectura de errores se vuelve más difícil, no solo el tipo de error en sí.

## Bloque 1

**Hook:** *"Los programadores mediocres temen a los errores; los ingenieros los leen como mapas."*

## Bloque 2 — Conflicto cognitivo

`print(int("12.5"))` explota con `ValueError`, no con el tipo de error que muchos esperan (`TypeError`, por analogía con T3). El estudiante debe distinguir: `int()` no es que "no acepte decimales" en el sentido de mezclar tipos — es que su conversión específica no interpreta el punto. Se conecta con T3: `int(float("12.5"))` es el camino correcto.

## Bloque 3

**El traceback es tu amigo (respaldado por Prather & Denny):** se lee de abajo hacia arriba — la última línea dice el TIPO y el mensaje; encima, archivo y línea. Los cuatro sospechosos habituales de N0: `NameError`, `TypeError`, `ValueError`, `ZeroDivisionError` — y ahora, sumado desde T5, `IndexError`.

**Dos familias de errores:** `SyntaxError` se detecta ANTES de ejecutar; los errores de ejecución solo aparecen cuando esa línea corre — un programa puede funcionar 100 veces y explotar en la 101.

**Convención profesional — `print()` de diagnóstico, marcado (v2.0.1, UC Berkeley):** cuando uses `print()` temporalmente para investigar un bug (la herramienta de depuración más básica, la misma de T1, mucho antes de que esta lección le pusiera nombre), prefija el texto con `"DEBUG: "` — `print("DEBUG: valor de x =", x)`. Permite distinguirlo a simple vista de la salida real del programa, y encontrarlo fácilmente para borrarlo antes de entregar el código. El círculo se cierra: el primer `print()` de T1 y la disciplina de depuración de T8 son, literalmente, la misma herramienta en dos momentos de madurez distintos.

## Bloque 4 — Escalera

*Nota de densidad (v2.0.1): siete categorías — última escalera de N0.*

**Predecir:**
1. El conflicto del Bloque 2.
2. Dado un fragmento con dos posibles errores visibles a simple vista (una variable mal escrita Y una operación de tipos mixtos en la misma línea), ¿cuál de los dos reporta Python primero? *(el intérprete se detiene en el primer error que encuentra al ejecutar, no reporta ambos — dato real sobre el modelo de ejecución secuencial de T1, aplicado aquí)*.
3. `resultado = 10 / (5 - 5)` — ¿qué tipo de error específico, y por qué NO es un `TypeError` a pesar de involucrar dos números? *(distingue error aritmético de error de tipo, una distinción que ningún bloque anterior forzó explícitamente)*.

**Leer código** *(categoría propia, v2.0.1)*:
```python
def calcular_promedio(notas):
    total = 0
    for nota in notas
        total = total + nota
    return total / len(notas)
```
Sin ejecutar: identificar el error (falta `:` al final del `for` — un `SyntaxError`, aunque `for` todavía no se haya enseñado formalmente, el estudiante debe reconocer el patrón de "algo antes de `:` está incompleto" ya practicado con `if`/`while` en T7) y explicar, usando la anatomía de errores de T1, exactamente qué línea señalaría Python.

**Investigar / trazar:** dado un programa de diez líneas con un error de tipo en la línea 7, trazar qué líneas SÍ llegaron a ejecutarse antes de que el programa se detuviera — conecta directamente con el modelo del intérprete secuencial de T1 (Bloque 3 de esa lección), ahora aplicado a diagnosticar un fallo real.

**Modificar:**
1. Dado un programa que divide sin anticipar el cero, modificarlo para anticiparlo con `if`.
2. Dado un programa con un error de dedo (`NameError`), corregirlo Y añadir un comentario explicando qué clase de error era — practica comunicar el diagnóstico, no solo resolverlo.

**Refactorizar** *(categoría propia, v2.0.1)*: se entrega un programa correcto pero lleno de `print()` de diagnóstico sin la convención `"DEBUG: "`, mezclados de forma indistinguible con la salida real. El estudiante refactoriza aplicando la convención del Bloque 3, y decide cuáles prints de diagnóstico ya no son necesarios y deben eliminarse por completo.

**Escribir/Depurar (escalera simple→compleja, Prather & Denny):** caza el `NameError` (error de dedo) → caza el `TypeError` (input sin convertir) → anticipa el `ZeroDivisionError` con `if` → *(nuevo)* caza el `IndexError` dentro de un programa más largo (Bloque 0, error 4).

## Bloque 5 — Laboratorio: cierre integral de N0 (T1–T8)

**Integración total (el laboratorio de mayor alcance de todo N0):** este laboratorio no introduce ningún concepto nuevo — exige **todo** N0 en un solo artefacto: formato de salida (T1), variables (T2), tipos (T3), operadores (T4), strings (T5), entrada de usuario (T6), control de flujo (T7), y ahora manejo defensivo de errores (T8).

**El proyecto — Divisor robusto con validación completa:** un programa que pide dos números al usuario con el **bucle de validación** (T6+T7) hasta obtener datos convertibles, calcula la división con 2 decimales de precisión, y si el divisor es 0, muestra un mensaje claro sin que el programa explote — todo presentado en el formato de recibo de T1, con los `print()` de diagnóstico usados durante el desarrollo marcados con `"DEBUG: "` y eliminados en la versión final entregada.

**Trade-off:** anticipar con `if` (única herramienta legítima en N0; `try/except` llega en N1) vs. dejar que explote — aquí la elección está forzada por el propio recorrido curricular, y eso mismo es la lección: a veces la herramienta "correcta" todavía no está disponible, y hay que resolver bien con lo que sí se tiene.

**Argumento de corrección:** ¿qué otros valores además de 0 podrían romper este programa? (negativos, texto no numérico, números con muchos decimales que afecten el redondeo).

**Confrontación de soluciones:** ¿verificar `divisor == 0` antes de dividir, o intentar dividir y prepararse para el resultado? — en N0, sin `try/except`, solo la primera opción es viable; se le pide al estudiante justificar por qué, anticipando ya el lenguaje de N1.

**Fase 2 — sin instrucciones repetidas, cierre real del nivel:** el estudiante recibe la descripción de un problema nuevo y completo (no provisto aquí para no anticiparlo fuera de sesión) que requiere, sin que se le liste, combinar las ocho lecciones de N0 de una forma que el propio laboratorio no mostró exactamente — la prueba final de que N0 se aprendió como una construcción progresiva única, no como ocho capítulos aislados (el principio explícito de DOC-11 §2, generalización más allá del código, aplicado aquí como cierre de nivel).

## Bloque 6 — Consolidación

**Defensa:** 1) ¿Por qué se lee un traceback de abajo hacia arriba y no al revés? 2) ¿Qué distingue un `SyntaxError` de los demás? 3) *(inédita)* Si un programa nunca ha fallado en cien ejecuciones, ¿eso significa que está libre de errores? ¿Por qué sí o por qué no?

**Seis preguntas de excelencia:** aprendí que un error es información estructurada, no un fracaso — tiene tipo, ubicación y mensaje, en ese orden; existe porque un programa que fallara en silencio sería mucho más peligroso que uno que avisa; resuelve la localización rápida de la causa raíz de un fallo; los profesionales lo usan constantemente — los logs de error de cualquier sistema real son tracebacks acumulados; se conecta con las ocho lecciones de N0 (cada tipo de error de esta lección tiene origen en un tema anterior específico); sin esto, cada fallo sería una caja negra sin pistas.

**Reflexión metacognitiva** *(v2.0.1 — cierre de nivel, preguntas orientadas a todo N0)*:
- De las ocho lecciones de N0, ¿cuál sientes hoy genuinamente dominada — capaz de explicar, predecir, corregir, modificar y usar en un proyecto sin ayuda — y cuál todavía te genera dudas?
- ¿Cómo cambió tu relación con los errores de Python entre T1 (donde un `SyntaxError` probablemente se sintió como un muro) y hoy?
- Si tuvieras que darle un consejo a alguien que empieza N0 mañana, basado en lo que a ti te costó más, ¿cuál sería?

**Desafío final inédito — cierre de nivel:** dado un programa de aproximadamente 15 líneas que integra variables, un bucle, una conversión de tipo y un string formateado — y que contiene **dos errores simultáneos, de clases distintas** (uno de sintaxis, detectable antes de ejecutar; uno de ejecución, que solo aparece al correr) — el estudiante debe diagnosticar y corregir ambos, en el orden correcto (el que Python reportaría primero), sin que se le indique cuántos errores hay ni de qué tipo son. Ningún ejercicio anterior de N0 combinó dos clases de error simultáneas en el mismo programa — la prueba final de lectura de errores como habilidad integrada, no aislada por tipo.

**Lectura:** [Python docs — Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html) · [CS61A, Debugging](https://inst.eecs.berkeley.edu/~cs61a/fa21/articles/debugging/).

**Beyond the Curriculum:** *"Los logs de errores de producción de cualquier empresa real son, literalmente, tracebacks acumulados durante meses. Diagnosticar rápido es lo que separa junior de senior — no cometer menos errores. Y `try/except`, la herramienta que hoy no tuviste, es exactamente lo primero que ganarás en N1."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3, incluido cuál error reporta Python primero) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados (4 clases, incluida una en contexto denso) |
| 4 | Corregir | Bloque 4, escalera simple→compleja (4 clases de error) |
| 5 | Modificar | Bloque 4, "modificar" (2) + "refactorizar" (convención `DEBUG:`) |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (dos errores simultáneos de clases distintas, nunca combinados antes) |
| 7 | Usar en un proyecto | Bloque 5, divisor robusto con validación completa, integrando las ocho lecciones de N0 |

**Instrumento:** RM-03/RM-04 + TD-01. Diagnostica el tipo exacto de error sin ejecutar; corrige los cuatro tipos de error sin pista; anticipa un caso no visto en clase; diagnostica dos errores simultáneos en el desafío final.

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [Python docs — Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html) | Python Software Foundation | EN | ~20 min lectura | Introductorio | Referencia oficial completa de las clases de error de esta lección | 🟢 Antes de estudiar |
| [CS61A — Debugging](https://inst.eecs.berkeley.edu/~cs61a/fa21/articles/debugging/) | UC Berkeley | EN | ~15 min lectura | Introductorio | Origen de la convención `"DEBUG: "` incorporada en el Bloque 3 | 🔵 Durante la lección |
| [Prather et al. — "On Novices' Interaction with Compiler Error Messages"](https://dl.acm.org/doi/abs/10.1145/3105726.3106169) | J. Prather et al., ICER 2017 | EN | ~30 min lectura | Avanzado | El estudio real detrás de la disciplina de lectura bottom-up y la escalera simple→compleja de esta lección | 🟣 Después de terminar |
| [Real Python — Python Exceptions: An Introduction](https://realpython.com/python-exceptions/) | Real Python | EN | ~25 min lectura | Intermedio | Puente natural hacia `try/except`, que N1 introducirá — profundización sin adelantar contenido | ⭐ Profundización opcional |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |

---

**Nota de cierre del módulo N0.M1:** con T1-T8 completos bajo DOC-11 v2.0.1, el módulo converge en el proyecto ya validado en producción (calculadora profesional, días 8-9) y la compuerta de nivel (SYL-N0 §4) — ambos ya definidos en SYL-N0 v1.0.0 y no requieren rediseño; solo se conecta explícitamente cada tema con la pieza del proyecto que le corresponde en la auditoría integral de N0 v2.
