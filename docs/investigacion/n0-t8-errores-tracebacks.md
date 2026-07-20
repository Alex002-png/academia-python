# Investigación Pedagógica de N0·T8 — Errores y tracebacks

*Investigación + revisión crítica integradas.*

## 1–2. Fuentes

**Prather, Denny et al.** tienen una línea de investigación consolidada y bien citada sobre cómo los novatos interactúan con mensajes de error del compilador/intérprete — no una opinión aislada, sino un campo con múltiples estudios (2017, 2019, 2023). Hallazgo clave: en estudios *think-aloud*, la mayoría de los estudiantes SÍ leen los mensajes de error mejorados y hacen cambios efectivos — pero los efectos medidos son inconsistentes entre estudios, y una de las cinco razones propuestas es la **carga cognitiva del contexto**: un mensaje bien diseñado puede fallar si el estudiante lo encuentra dentro de un problema ya complejo. *(Fuentes: [Prather et al., "On Novices' Interaction with Compiler Error Messages"](https://dl.acm.org/doi/abs/10.1145/3105726.3106169); ["Compiler Error Messages Considered Unhelpful: The Landscape"](https://amirkamil.com/papers/iticse19.pdf).)*

## 3. Síntesis y revisión crítica

**Decisión respaldada por evidencia real, no solo por diseño previo:** el material de producción ya enseña a leer el traceback de abajo hacia arriba — esto coincide con recomendaciones consolidadas de la literatura, no es una intuición sin respaldo. **Hallazgo de la revisión:** la advertencia sobre carga cognitiva contextual sugiere que los primeros tracebacks que el estudiante lea deben ser **simples y aislados** (un solo error, un programa de 2 líneas) antes de pedirle diagnosticar errores dentro de un problema más grande — esto ya es, de hecho, cómo está construida la escalera de producción (d8e1/e2/e3 aumentan en complejidad gradualmente). **Clasificación: evidencia sólida** para la disciplina de lectura bottom-up; **decisión de diseño** (no evidencia específica) para el orden gradual, aunque coincide con el principio de carga cognitiva ya validado (PED-08).

## Decisiones de diseño

| Decisión | Adopta | Evidencia |
|---|---|---|
| Lectura del traceback de abajo hacia arriba | Conserva (producción), ahora con respaldo de literatura consolidada | Prather et al. |
| Escalera de tracebacks simples → complejos | Conserva (ya era así en producción) | Coincide con hallazgo de carga cognitiva contextual |

## Estado
✅ Completa. Pendiente de validación.

## Addendum v2.0.1 (2026-07-19) — UC Berkeley, hallazgo real aplicado

**Hallazgo:** el material propio de depuración de CS61A recomienda una práctica concreta y accionable: cuando se usa `print()` temporalmente para diagnosticar un problema (depuración manual, la herramienta más básica y universal, ya sembrada desde T1), prefijar ese texto con `"DEBUG: "` — para distinguirlo a simple vista de la salida real del programa, y para poder encontrarlo y eliminarlo fácilmente antes de entregar el código. Es una convención real de ingeniería, no una idea de diseño propia. *(Fuente: [CS61A, Debugging](https://inst.eecs.berkeley.edu/~cs61a/fa21/articles/debugging/).)*

**Ajuste real:** se incorpora esta convención en el Bloque 3, conectando explícitamente con el `print()` de T1 (la primera herramienta de depuración que la Academia enseñó, mucho antes de nombrar "depurar" como palabra) — cerrando el círculo del nivel completo.

| Decisión | Adopta/Modifica | Evidencia |
|---|---|---|
| Convención `"DEBUG: "` para prints de diagnóstico temporal | Modifica (ajuste real, nuevo) | CS61A, práctica de referencia real |
