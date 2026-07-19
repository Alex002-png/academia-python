# N0 · T8 — Errores y tracebacks

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n0-t8-errores-tracebacks.md`](../../investigacion/n0-t8-errores-tracebacks.md)

*Bloques 1, 3, 4 conservan el material de producción ("Día 8"), ahora con respaldo explícito de literatura consolidada (Prather & Denny) para la disciplina de lectura bottom-up.*

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N0.M1.T8 |
| **Gran pregunta** | ¿Cómo lee un ingeniero un error para que deje de ser un muro y se convierta en un mapa? |
| **Conexión con T7** | Los bucles e ifs mal calibrados (T7) producen exactamente los tipos de error que aquí se aprenden a leer. |
| **Conexión con el proyecto (calculadora)** | T8 cierra el módulo: todo lo acumulado (T1-T7) se pone a prueba en un artefacto real que debe sobrevivir a entradas hostiles. |

## Bloque 0

**Recuperación (T7):** 1) ¿Por qué la indentación es sintaxis? 2) ¿Qué evita un bucle infinito? 3) ¿Qué es un error de límite (fencepost) y cómo se distingue del bucle infinito?

**Diagnóstico relámpago:** `print(int("12.5"))` — ¿corre o explota? ¿Con qué tipo de error exactamente? (ya en producción como intuit).

**Problema motivador:** *"Tu programa debe dividir dos números que pide al usuario — pero si el divisor es 0, no puede simplemente explotar delante de quien lo use."* No resoluble sin anticipar el error.

**Errores deliberados (producción):** 1) `NameError` por error de dedo (`mensage` vs `mensaje`). 2) `TypeError` al sumar `input()` sin convertir. 3) `ZeroDivisionError` sin anticipar.

## Bloque 1

**Hook (producción):** *"Los programadores mediocres temen a los errores; los ingenieros los leen como mapas."*

## Bloque 2 — Conflicto cognitivo

`print(int("12.5"))` explota con `ValueError`, no con el tipo de error que muchos esperan (`TypeError`, por analogía con T3). El estudiante debe distinguir: `int()` no es que "no acepte decimales" en el sentido de mezclar tipos — es que su conversión específica no interpreta el punto. Se conecta con T3: `int(float("12.5"))` es el camino correcto.

## Bloque 3

**El traceback es tu amigo (producción, respaldado por Prather & Denny):** se lee de abajo hacia arriba — la última línea dice el TIPO y el mensaje; encima, archivo y línea. Los cuatro sospechosos: `NameError`, `TypeError`, `ValueError`, `ZeroDivisionError`.

**Dos familias de errores (producción):** `SyntaxError` se detecta ANTES de ejecutar; los errores de ejecución solo aparecen cuando esa línea corre — un programa puede funcionar 100 veces y explotar en la 101.

## Bloque 4

**Predecir:** el conflicto del Bloque 2. **Escribir/Depurar (producción, escalera simple→compleja per Prather & Denny):** caza el `NameError` (error de dedo) → caza el `TypeError` (input sin convertir) → anticipa el `ZeroDivisionError` con `if`.

## Bloque 5 — Laboratorio

**Reto (producción):** divisor robusto — división con 2 decimales, pero si el divisor es 0, mensaje sin explotar.

**Trade-off:** anticipar con `if` (única herramienta legítima en N0; `try/except` llega en N1) vs. dejar que explote — aquí la elección está forzada por el propio recorrido curricular, y eso mismo es la lección: a veces la herramienta "correcta" todavía no está disponible, y hay que resolver bien con lo que sí se tiene.

**Argumento de corrección:** ¿qué otros valores además de 0 podrían romper este programa? (negativos, texto no numérico — anticipa T8 hacia el proyecto).

## Bloque 6

**Defensa:** 1) ¿Por qué se lee un traceback de abajo hacia arriba y no al revés? 2) ¿Qué distingue un `SyntaxError` de los demás? 3) *(inédita)* Si un programa nunca ha fallado en cien ejecuciones, ¿eso significa que está libre de errores? ¿Por qué sí o por qué no?

**Beyond the Curriculum:** *"Los logs de errores de producción de cualquier empresa real son, literalmente, tracebacks acumulados durante meses. Diagnosticar rápido es lo que separa junior de senior — no cometer menos errores."*

## Evidencia e instrumento

Diagnostica el tipo exacto de error sin ejecutar; corrige los tres tipos de error sin pista; anticipa un cuarto no visto en clase (división por cero con otro valor). RM-03/RM-04 + TD-01.

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |

---

**Nota de cierre del módulo N0.M1:** con T1-T8 completos bajo DOC-11, el módulo converge en el proyecto ya validado en producción (calculadora profesional, días 8-9) y la compuerta de nivel (SYL-N0 §4) — ambos ya definidos en SYL-N0 v1.0.0 y no requieren rediseño; solo se conecta explícitamente cada tema con la pieza del proyecto que le corresponde en la auditoría integral de N0.
