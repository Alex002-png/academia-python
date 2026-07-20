# Informe Final de Nivel — N0 · Validación (v2 — post-reconstrucción DOC-11 v2.0.1)

*Memoria técnica de ingeniería, no repetición pedagógica. Segunda versión de este documento — la primera institucionalizó la práctica; esta la aplica de nuevo tras la reconstrucción completa de N0 bajo el Estándar de Excelencia Mundial, ordenada por el Director el 2026-07-19.*

**Qué cambió desde v1:** el Director ordenó elevar N0 al nivel de un curso introductorio de clase mundial — no un ajuste de contenido, una reconstrucción completa de las ocho lecciones bajo DOC-11 v2.0.1: siete capacidades de dominio explícitas por lección, laboratorios redefinidos como mini-proyectos que integran progresivamente todas las lecciones anteriores, lectura de código y refactorización como categorías propias de ejercicio, debugging con progresión propia, desafíos finales inéditos, reflexión metacognitiva, y una sección obligatoria de Recursos recomendados. Una quinta institución de referencia (UC Berkeley) se sumó a la investigación de cada tema, produciendo cuatro hallazgos reales nuevos (T1: vocabulario "expresión"; T5: técnica de slicing por cortes; T8: convención `DEBUG:`; T7: confirmación sin ángulo nuevo, declarada con honestidad). La Auditoría Integral v2 (`docs/informes/n0-auditoria-integral-v2.md`) encontró y corrigió un hallazgo real (cita incompleta de T2 en 4 laboratorios) antes de este cierre.

## 1. Objetivo global de N0

Sin cambios en la esencia, elevado en la meta: confirmar la vocación y el método de un principiante absoluto (Blueprint §14.4), llevándolo de cero absoluto a un primer proyecto completo — pero ahora con el objetivo explícito del Director de que el estudiante termine con una base "excepcionalmente sólida", capaz de afrontar N1 sin lagunas conceptuales importantes, no solo de "haber visto" los temas.

## 2. Competencias exactas desarrolladas

Sin cambios en el catálogo (C-N0-01 a 05), pero cada una ahora tiene, por lección, un instrumento explícito dentro de las siete capacidades de dominio (§4 de DOC-11 v2.0.1: explicar, predecir, detectar errores, corregir, modificar, aplicar en contexto nuevo, usar en un proyecto) — antes, la evidencia de dominio era una declaración por lección; ahora es una tabla verificable de siete filas por lección, 56 instrumentos en total a lo largo de N0.

## 3. Modelos mentales fundamentales que construye

Los siete de v1 se conservan sin cambios (etiquetas-no-cajas; el tipo es del objeto; strings inmutables; `input()` como frontera de confianza; el programa como grafo; el error como señal estructurada; la precedencia como regla fija) — **más un matiz real añadido en T2:** el modelo de "caja" no es incorrecto en general (evidencia real, Hermans & Swidan 2018), es insuficiente específicamente para el escenario de reasignación/múltiples referencias que N0 necesita que el estudiante domine. Es la primera vez que un modelo mental de N0 se presenta con su propio matiz de aplicabilidad, en vez de como una regla absoluta — más preciso, no más débil.

## 4. Errores frecuentes que N0 pretende eliminar de raíz

Los de v1 se conservan íntegros, más los que la reconstrucción añadió con respaldo real: nombrar una variable como una función incorporada (`list`, `str`...) sin que Python avise (T2, CMU); comparaciones encadenadas no reconocidas (`5 > 3 > 1`, T4); confundir `=` con `==` dentro de una condición (T7); errores en contexto denso, no solo aislado (T8, hallazgo de Prather et al. sobre carga cognitiva contextual). N0 v2 cubre no solo más errores, sino una variedad más realista de *dónde* aparecen (aislados vs. dentro de programas más largos).

## 5. Qué queda deliberadamente fuera de N0, y por qué

Sin cambios respecto a v1 (Git, `for`/listas/funciones/POO, `try`/`except` formal, IEEE 754, la analogía de la maleta) — la reconstrucción no adelantó ningún contenido de niveles posteriores, disciplina explícitamente verificada en cada investigación nueva (p. ej., T2 rechazó explícitamente adoptar el modelo caja/flecha de Berkeley por adelantar N1).

## 6. Dependencias que N0 crea para N1

Sin cambios en la sustancia de v1, reforzadas por la integración explícita: cada laboratorio de T3 en adelante ya construye, dentro de N0 mismo, el hábito de integrar conocimiento acumulado que N1 exigirá a otra escala — el "mini-proyecto que integra ≥2 lecciones previas" de DOC-11 v2.0.1 es, en sí mismo, un ensayo general de cómo se construye software real, no solo un formato de ejercicio.

## 7. Riesgos pedagógicos que permanecen abiertos

Los tres de v1 permanecen (brechas B-01/B-02, RISK-07, la apuesta de diseño T2↔T6) — **más uno nuevo, propio de esta reconstrucción:**

- **Riesgo de sobrecarga por densidad (nuevo).** N0 v2 es sustancialmente más denso que v1 (escaleras de 15-18 ejercicios reales por lección, laboratorios en dos fases, desafíos finales inéditos) — una decisión explícita y deseada por el Director ("que la duración se sienta real"), pero que introduce un riesgo real no presente en v1: que la carga total, sin haberse probado aún con un estudiante real completo de principio a fin bajo este formato, sea mayor de lo sostenible para 25h/semana. Este riesgo no se resuelve especulando — se resuelve con la primera validación real de una lección completa bajo v2.0.1, que queda como hipótesis nº1 del punto 8.

## 8. Hipótesis pendientes de validación con estudiantes reales

Las cinco de v1 permanecen abiertas, sin resolver (ninguna evidencia nueva las confirmó ni las refutó). Se añaden:

6. **(Prioritaria)** Que la densidad de N0 v2 (15-18 ejercicios por escalera, laboratorio en dos fases) es sostenible para Alex a 25h/semana sin producir fatiga que reduzca la calidad del aprendizaje por debajo de la de v1.
7. Que el matiz sobre el modelo de "caja" en T2 (ni dañino ni pleno, según el escenario) clarifica más de lo que podría confundir a un principiante absoluto.
8. Que los desafíos finales inéditos (uno por lección, explícitamente diseñados para ser irresolubles por imitación) son alcanzables sin frustración desproporcionada para un estudiante que recién domina el material previo del mismo bloque.

## 9. Decisiones de diseño más importantes tomadas durante la construcción de N0 v2

Las cinco de v1 permanecen válidas. Nuevas de esta reconstrucción:
- Distinguir explícitamente "elevar el estándar del contenido" (autorizado, v2.0.1) de "reabrir la metodología congelada" (RISK-07, prohibido) — declarado con una nota propia en DOC-11 v2.0.1 para que la distinción no dependa de la memoria del autor.
- Cuando la evidencia real es mixta (Hermans & Swidan sobre "caja" vs. "etiqueta"), preferir un matiz honesto sobre la decisión existente en vez de un rechazo dogmático o una adopción acrítica — el estándar de rigor no exige que cada decisión gane en todos los escenarios, exige declarar en cuáles gana y en cuáles no.
- Institucionalizar que el laboratorio de cada lección desde T3 en adelante cite, por dirección exacta, cada lección anterior que integra — no como formalismo, sino porque su ausencia (el hallazgo real de la auditoría v2 en T4-T7) es exactamente el tipo de inconsistencia silenciosa que una auditoría longitudinal existe para atrapar.

## 10. Qué aprendió la propia Academia al construir N0 v2

Que elevar un estándar ya bueno no es un ejercicio retórico si se hace con la misma disciplina de investigación real: la reconstrucción no fue "escribir más" sobre lo mismo — produjo cuatro hallazgos genuinamente nuevos (Berkeley), un matiz honesto que hace más precisa la decisión pedagógica central de todo N0 (T2), y una auto-corrección real detectada por la propia auditoría (la cita faltante de T2). Que la densidad y la rigurosidad no son lo mismo: es posible construir una lección mucho más densa sin volverla más críptica, si cada elemento nuevo tiene un mecanismo pedagógico declarado (DOC-11 v2.0.1, la regla de "nunca por artificio"). Y que la disciplina de declarar honestamente cuándo una institución de referencia *no* aporta nada distintivo (T4, T7 con Berkeley) es tan importante para la credibilidad del corpus como declarar cuándo sí aporta — la honestidad no se mide solo en lo que se encuentra, sino en lo que se admite no haber encontrado.

---

## Congelación de N0 v2

**N0 · Validación queda congelado como versión de desarrollo v2.0 de contenido (bajo DOC-11 v2.0.1, Estándar de Excelencia Mundial).** Las ocho lecciones (T1–T8) reconstruidas, sus investigaciones con addenda v2.0.1, la Auditoría Integral v2 y este informe forman el corpus congelado. El proyecto (calculadora) y la compuerta de nivel permanecen sin rediseño, conforme a SYL-N0 v1.0.0. Las ocho hipótesis del punto 8 (las cinco de v1 + tres nuevas) quedan registradas como pendientes de validación — ninguna bloquea N1. Toda modificación futura de N0 dependerá exclusivamente de evidencia obtenida durante la validación real (política de no reapertura, DOC-11 §6bis), nunca de una idea nueva por sí sola.

**N0 v2 se convierte, por mandato explícito del Director, en el referente de calidad de toda la Academia y el estándar de partida para el desarrollo de todos los niveles posteriores — incluyendo N1, ya iniciado bajo el estándar anterior, que deberá evaluarse contra este mismo nivel de exigencia en su propio cierre.**
