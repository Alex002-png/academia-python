# Investigación Pedagógica de N0·T6 — Entrada y salida

*Investigación + revisión crítica integradas.*

## 1–2. Fuentes

El hecho central de esta lección (`input()` siempre devuelve `str`) es **semántica del lenguaje**, verificable en la documentación oficial de Python, no una elección pedagógica de ninguna universidad — honestidad metodológica: no forzaré una atribución a MIT/CS50/CMU que no le corresponde. Lo que sí es pedagógico es CÓMO se enseña esa frontera; ninguna institución de las buscadas tiene material distintivo citable más allá de mencionar la conversión — se declara la ausencia.

## 3. Síntesis y revisión crítica

**Hallazgo de mayor valor — no es de una universidad, es interno:** el error real de Alex en T2 (`contador = "10"`) y la trampa de esta lección (`input()` siempre `str`, causando `"21"+"21"="2121"`) son la **misma familia exacta de error**, en direcciones opuestas: en T2, Alex escribió comillas donde no debía; aquí, el estudiante necesita AÑADIR conversión donde `input()` ya puso comillas invisibles. Esta conexión es evidencia interna genuina (no hipótesis, a diferencia de T3) — el patrón se repite. **Clasificación: evidencia interna sólida** (dos observaciones de la misma familia, aunque solo una sea totalmente confirmada). **Autocrítica:** ¿estoy forzando la conexión para justificar la reutilización? No — la propia ficha de producción ya llama a esto "la trampa número 1 de todos los principiantes", coincidiendo con el patrón.

## Decisiones de diseño

| Decisión | Adopta | Evidencia |
|---|---|---|
| Conectar explícitamente con el error de Alex (T2) como la misma familia, no solo temáticamente similar | Nueva | Registro de T2 + coincidencia estructural real |
| No atribuir la "frontera de confianza" a ninguna universidad | Honestidad metodológica | Es semántica del lenguaje, no pedagogía de una institución |

**Falsabilidad:** se abandonaría la conexión T2↔T6 si Alex explica su error de T2 como algo sin relación (p. ej., un descuido puro sin creencia sobre tipos).

## Estado
✅ Completa. Pendiente de validación, no bloquea T7.

## Addendum v2.0.1 (2026-07-19)

**Hallazgo real (CS50P):** la librería propia de CS50 (`get_int()`, `get_float()`, etc.) no solo convierte el tipo — **vuelve a preguntar automáticamente si el usuario escribe algo inválido**, en un bucle, hasta obtener un valor correcto. Es una práctica de referencia real, no solo una idea de diseño propia. *(Fuente: CS50P, funciones de la librería `cs50`.)*

**Ajuste real:** T6 todavía no puede *implementar* este patrón (exige `while`, que T7 enseña) — pero se incorpora como puente explícito hacia T7 en el trade-off del Bloque 5 y en Beyond the Curriculum, con el nombre correcto ("bucle de validación"), en vez de dejar la idea de "validar la entrada" flotando sin destino concreto.

| Decisión | Adopta/Modifica | Evidencia |
|---|---|---|
| Nombrar explícitamente el "bucle de validación" (sin poder implementarlo aún) como puente a T7 | Modifica (ajuste real) | CS50P, práctica de referencia (librería `cs50`) |
