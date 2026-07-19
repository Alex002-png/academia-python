# Investigación Pedagógica de N1.M1.T1 — Decoradores y closures

*Investigación + revisión crítica integradas.*

## 1–2. Fuentes y evidencia

**Secuencia pedagógica consolidada, no de una sola fuente:** múltiples fuentes técnicas coinciden en el mismo orden de prerrequisitos conceptuales — funciones de primera clase (se pasan y devuelven como cualquier valor) → closures (una función interna recuerda el entorno de la externa) → decoradores (una closure que envuelve otra función). Este orden no es arbitrario: cada eslabón depende del anterior. **CS50P** cubre decoradores dentro de su unidad de POO. **Oxford** (OxRSE Training) tiene material propio y citable sobre *Higher-Order Functions* en Python — llena el hueco de Oxford que las investigaciones de N0 no pudieron llenar. *(Fuentes: [OxRSE Training, Higher-Order Functions](https://train.rse.ox.ac.uk/material/HPCu/software_architecture_and_design/functional/higher_order_functions_python); [CS50P — cobertura de decoradores en POO](https://cs50.harvard.edu/python/weeks/0/).)*

**Honestidad metodológica:** no encontré investigación de misconceptions específicamente documentada para decoradores/closures (a diferencia de tipos o strings en N0) — es un tema más reciente en la literatura de CS-ed formal. Sí hay consenso informal fuerte, repetido en múltiples fuentes técnicas independientes, de que decoradores "se sienten como magia" para quien no domina los tres eslabones previos — se declara como evidencia de opinión de práctica consolidada, no como estudio empírico.

## 3. Síntesis y revisión crítica

**Decisión:** conservar íntegra la ficha ya aprobada de SYL-N1 (modelo "caja que envuelve regalo", errores habituales, pregunta ingenieril) — está alineada con la secuencia consolidada (primero se muestra la función como valor, ya sembrada en N0.M3.T3 vía `sorted(key=)`, antes de envolver). **Autocrítica:** ¿el modelo de "caja que envuelve un regalo" es suficiente, o debería explicitar más la mecánica de closure (que la función interna "recuerda" el entorno)? La ficha actual no nombra closures explícitamente como paso intermedio — **hallazgo real:** por la secuencia consolidada de fuentes, el estudiante debería ver primero una función que *devuelve otra función* (closure simple, sin decorador) antes de saltar directo a `@decorador`. **Ajuste:** se añade un paso intermedio explícito (closure simple) entre "funciones como valores" (ya sembrado en N0) y el decorador completo — la ficha original saltaba directamente de N0 a decoradores, sin ese peldaño.

**Clasificación:** la secuencia funciones-de-primera-clase→closure→decorador es **evidencia sólida** (consenso técnico consolidado, verificable). El modelo "caja que envuelve regalo" es **decisión de diseño** (ya aprobado, coherente, sin estudio específico que lo respalde o contradiga). **Falsabilidad:** se reconsideraría el paso intermedio de closure si el registro muestra que los estudiantes lo encuentran redundante en vez de necesario.

## Estado
✅ Completa con revisión crítica. Un ajuste real (peldaño de closure intermedio). No bloquea el resto de M1.
