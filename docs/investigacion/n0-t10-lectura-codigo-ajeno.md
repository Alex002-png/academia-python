# Investigación Pedagógica de N0·T10 — Lectura y trazado de código ajeno

*Conforme a DOC-11 §0bis. Tema nuevo, añadido en la ronda de profundización de N1/N0 (excepción de reapertura, SYL-N0 v1.1.0), cerrando la habilidad que hasta ahora solo vivía como categoría de ejercicio dentro de otras lecciones ("lectura de código y refactorización", DOC-11 v2.0.1), nunca como tema propio con su propia escalera.*

## 1. Evidencia real de CS-Ed (Learning Sciences), verificada por fetch directo — no memoria

**National Centre for Computing Education / Raspberry Pi, "Pedagogy Quick Reads: Code tracing" (PDF leído directamente, no resumido de segunda mano).** Cita textual central: *"Novice programmers should be competent in code tracing before they can confidently write programs of their own."* El documento cita, con referencia académica completa, el hallazgo que ancla el diseño de este tema: **Lister, R. et al. (2004), "A multi-national study of reading and tracing skills in novice programmers", ACM SIGCSE Bulletin, 36(4), pp. 119-150** — *"learners who could trace effectively less than 50% of the time could also not explain it effectively."*

**Hertz, M. y Jump, M. (2013), "Trace-based teaching in early programming courses"** (citado en el mismo documento, referencia académica verificada): el modelo de "trace-based-teaching" encontró que comenzar una clase con 20-30 minutos de trazado **aumentó el rendimiento y redujo la tasa de abandono** — evidencia de impacto real, no solo de mecanismo.

**PRIMM (Predict, Run, Investigate, Modify, Make), citado con referencia completa en el mismo documento.** Su primer paso, Predict, exige explícitamente leer y trazar ANTES de ejecutar — el mismo patrón que este tema aplica en cada uno de sus 7 ejercicios de Parte 1 ("sin ejecutar primero").

**El concepto de "notional machine" (du Boulay, 1986), citado en el mismo documento.** Trazar código efectivamente requiere que el estudiante tenga un modelo mental de cómo la máquina procesa instrucciones — la razón por la que este tema pide explícitamente construir una "tabla mental" de variables, no solo adivinar el resultado.

## 2. Síntesis crítica

**Decisión de diseño: el tema usa código con nombres y estilo "de otro autor" en TODOS sus ejercicios, deliberadamente.** La literatura (Lister et al.) mide "reading and tracing skills" en código que el estudiante no escribió — replicar esa condición exacta (variables cortas, convenciones distintas a las propias) es lo que hace que la habilidad entrenada sea transferible a código real ajeno, no solo a releer el propio estilo ya familiar.

**El mecanismo de ejercicio (agregar UNA línea sin modificar la lógica existente) está diseñado para forzar el trazado real, no permitir adivinar.** Un estudiante que no traza correctamente no puede predecir qué imprimir — la única forma de acertar es seguir el valor de cada variable, línea por línea, como exige el propio documento de referencia ("Highlight all the expressions... Use arrows to show the order of execution... Follow the program and fill in the variables table").

**Los dos "bugs encontrados leyendo" (T9's `d10e5`, T10b's `d10e7`) son ejercicios de aplicación real de la habilidad, no solo de trazado pasivo.** Encontrar un error sin ejecutar primero es exactamente la aplicación práctica que el enfoque PRIMM (Investigate) exige tras el paso de Predict — cierra el ciclo de la investigación, no solo la cita.

## 3. Clasificación y falsabilidad

**Evidencia muy sólida:** el hallazgo de Lister et al. (2004) es un estudio multi-nacional publicado en ACM SIGCSE, con un umbral cuantitativo específico (50%) — no una intuición pedagógica genérica. Hertz y Jump (2013) aportan evidencia de impacto (rendimiento, abandono), no solo de mecanismo. **Ausencia declarada:** no se buscó comparación institucional específica (CS50/CMU/Berkeley) para "trazado de código" como tema propio — la evidencia usada es de investigación en Learning Sciences (CS-Ed), una fuente distinta pero igualmente rigurosa, declarada como tal. **Falsabilidad:** si la validación real con el estudiante muestra que trazar código con nombres ajenos genera más frustración que transferencia de habilidad, el tema debería rediseñarse para introducir el estilo ajeno gradualmente, no desde el primer ejercicio.

## Bibliografía citada
- National Centre for Computing Education / Raspberry Pi Foundation, *Pedagogy Quick Reads: Code tracing* (PDF, verificado por lectura directa)
- Lister, R., Adams, E.S., Fitzgerald, S., Fone, W., Hamer, J., Lindholm, M., McCartney, R., Moström, J.E., Sanders, K., Seppälä, O. y Simon, B. (2004). "A multi-national study of reading and tracing skills in novice programmers." *ACM SIGCSE Bulletin*, 36(4), 119-150.
- Hertz, M. y Jump, M. (2013). "Trace-based teaching in early programming courses." *Proceedings of the 44th ACM Technical Symposium on Computer Science Education*, 561-566.
- Du Boulay, B. (1986). "Some difficulties of learning to program." *Journal of Educational Computing Research*, 2(1), 57-73.

## Estado
✅ Completa. 2 temas (Parte 1 y 2), 7+2 ejercicios + laboratorio + desafío final, todos verificados con ejecución real de Python. Primera lección de la Academia anclada primariamente en evidencia de Learning Sciences (CS-Ed) verificada por lectura directa del documento primario, no en comparación institucional de syllabi.
