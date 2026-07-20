# Investigación Pedagógica de N0·T7 — Decisiones y repetición

*Investigación + revisión crítica integradas.*

## 1–2. Fuentes

**CS50** tiene un recurso dedicado "While Loops". **CMU 15-110** dedica diapositivas propias a while loops. *(Fuentes: [CS50 While Loops](https://cs50.harvard.edu/python/shorts/while_loops/); [CMU 15-110 While Loops slides](https://www.cs.cmu.edu/~15110-s22/slides/week3-3-while-loops.pdf).)* Ambas confirman los dos errores ya cubiertos en producción (indentación como sintaxis, variable de control sin actualizar → bucle infinito) — sin aportar un ángulo distintivo adicional sobre estos dos puntos.

## 3. Síntesis y revisión crítica

**Hallazgo real:** el material de producción ya cubre bien "bucle infinito" e "indentación", pero no cubre el error de límite (*fencepost/off-by-one*) — uno de los errores más documentados en toda la literatura general de educación en programación (usar `<` cuando se necesitaba `<=`, perdiendo la última iteración o sobrando una). **Autocrítica:** ¿es esto relevante para N0 o demasiado sutil tan temprano? Es precisamente temprano donde más vale prevenirlo — es la clase de error que persigue a un programador toda la carrera si no se nombra pronto. **Clasificación: evidencia sólida** (ampliamente documentado en la literatura general de CS-ed, aunque no encontrado específico de institución para este micro-caso). **Decisión:** se añade como segundo error deliberado, sin desplazar los dos ya validados en producción.

## Decisiones de diseño

| Decisión | Adopta | Evidencia |
|---|---|---|
| Bucle infinito + indentación como conflictos principales | Conserva (producción) | Ya validado |
| Error de límite (`<` vs `<=`) añadido como error deliberado adicional | Nueva | Literatura general de fencepost errors |

**Falsabilidad:** se retiraría si el registro muestra que los estudiantes de esta Academia no cometen este error específico en la práctica real.

## Estado
✅ Completa. Pendiente de validación.

## Addendum v2.0.1 (2026-07-19) — UC Berkeley

Verificado: CS61A (vía su libro *Composing Programs*, §1.5.5) confirma la misma regla ya central en esta lección — un `while` debe tener, dentro de su cuerpo, algo que eventualmente haga falsa la condición, o nunca se detiene. **Honestidad metodológica:** esta institución confirma el diseño ya adoptado, no aporta un ángulo distintivo nuevo — se declara así explícitamente en vez de forzar una diferencia donde no la hay. Ninguna decisión de diseño cambia.
