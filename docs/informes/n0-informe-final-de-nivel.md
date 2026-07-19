# Informe Final de Nivel — N0 · Validación

*Memoria técnica de ingeniería, no repetición pedagógica. Primer documento de su clase; institucionaliza la práctica de "Informe Final de Nivel" para N1 en adelante (DOC-11 §7).*

## 1. Objetivo global de N0

Confirmar la vocación y el método de un principiante absoluto (Blueprint §14.4): llevarlo de cero absoluto a un primer proyecto completo, terminado, y a la decisión informada de continuar. No es "aprender sintaxis" — es la primera prueba de que el estudiante puede sostener un método de estudio real.

## 2. Competencias exactas desarrolladas

C-N0-01 (escribe y depura programas cortos explicando línea a línea) — construida progresivamente en T1-T8. C-N0-02 (lee tracebacks, localiza causa, corrige razonando) — culmina formalmente en T8, sembrada desde T1. C-N0-03 (completa un proyecto de principio a fin) — la calculadora, ya definida en SYL-N0. C-N0-04 (lee errores/vocabulario técnico en inglés) — vía la marca de pista 🇬🇧 en T1/T8. C-N0-05 (distingue qué entiende con seguridad y qué no) — vía las defensas de cada lección (Bloque 6).

## 3. Modelos mentales fundamentales que construye

1. **Etiquetas, no cajas** (T2) — el más importante; todo lo demás se apoya en él.
2. **El tipo es del objeto, no de la etiqueta** (T3) — extensión directa de (1).
3. **Los strings son inmutables** (T5) — el objeto nunca cambia por dentro.
4. **`input()` es una frontera de confianza** (T6) — todo lo que entra es texto no confiable.
5. **El programa es un grafo de caminos** (T7) — `if` bifurca, `while` cicla.
6. **El error es una señal estructurada** (T8) — se lee de abajo hacia arriba, no se le teme.
7. **La precedencia es una regla fija** (T4) — nunca intención implícita del programador.

## 4. Errores frecuentes que N0 pretende eliminar de raíz

Confundir asignación con ecuación matemática; creer que reasignar "modifica" un valor existente; esperar conversión automática entre tipos; confundir `/` con `//`; intentar mutar un string directamente; olvidar que `input()` siempre devuelve texto; errores de indentación y de límite en bucles; leer tracebacks de arriba hacia abajo; tratar el error como fracaso en vez de como información.

## 5. Qué queda deliberadamente fuera de N0, y por qué

**Git** — diferido a N1 (NNR-10): exige el entorno real, que N0 no tiene por diseño (AC-06). **`for`/`range`, listas, funciones, POO** — N1: requieren el modelo etiqueta/objeto ya consolidado. **`try`/`except` formal** — N0 anticipa errores con `if` (única herramienta legítima); la disciplina formal de excepciones llega en N1. **Precisión matemática de floats (IEEE 754)** — señalada como Beyond the Curriculum, resuelta en N3. **La analogía de la maleta (Stanford)** — rechazada explícitamente con traza demostrable (Investigación N0·T3).

## 6. Dependencias que N0 crea para N1

El modelo etiqueta/objeto es prerrequisito directo de listas mutables. El manejo de tipos/conversiones prepara la validación de datos (Pydantic, N2). El hábito de leer tracebacks es la base del debugging más complejo. La calculadora ya existente es el artefacto que N1.M4.T1 publicará como primer repo. El patrón `input→procesar→print` es el precursor conceptual directo de APIs (N2) y sistemas conversacionales (N7+).

## 7. Riesgos pedagógicos que permanecen abiertos

- **Brechas B-01/B-02 de SYL-N0** (sello legado vs. NNR-07; examen con ítems fijos vs. NNR-02) — registradas desde la aprobación de SYL-N0, técnicas del campus, sin resolver; prioridad alta antes de que el estudiante llegue a la compuerta.
- **RISK-07 (meta-diseño consumiendo sesiones de estudio)** — vigente desde el Blueprint; esta misma construcción de N0 ocurrió en paralelo a que el estudiante siguiera esperando responder tres preguntas de recuperación.
- **La reutilización T2↔T6** (misma familia de error, en espejo) es una apuesta de diseño: si no resuena para un estudiante real como refuerzo, podría sentirse como repetición en vez de conexión.

## 8. Hipótesis pendientes de validación con estudiantes reales

1. La causa real del error de Alex (`"4 * 2"→"42"`, `contador = "10"`) — tres hipótesis alternativas sin confirmar (Investigación N0·T3, Hallazgo 5).
2. Que introducir el vocabulario técnico *después* del conflicto cognitivo (T3) produce mejor comprensión que antes — decisión de diseño, no evidencia específica.
3. Que el error de límite (fencepost) añadido en T7 es un problema real para estudiantes de esta Academia, no solo de la literatura general.
4. Que la analogía del envase/etiqueta de precio (T3) predice mejor el comportamiento real que la alternativa rechazada — demostrado lógicamente, no probado empíricamente todavía.
5. Que la conexión explícita T2↔T6 efectivamente refuerza el aprendizaje en vez de sentirse redundante.

## 9. Decisiones de diseño más importantes tomadas durante la construcción de N0

- Adoptar el flujo de 7 fases (investigación → revisión crítica → ajustes → redacción → validación → mejora continua) como estándar reproducible, en vez de diseñar cada lección de forma ad hoc.
- Rechazar una práctica de una institución de prestigio (Stanford) con una traza lógica demostrable, en vez de adoptarla por autoridad.
- Conservar y organizar el contenido ya validado en producción en vez de reescribirlo — coherente con DOC-03 §7.
- Usar la evidencia real del estudiante (el error de Alex) como eje del diseño pedagógico, en vez de ejemplos inventados.
- Separar **Desarrollo** de **Validación** como estados independientes (DOC-11 §6bis) — la decisión que permitió mantener rigor científico sin convertirlo en cuello de botella para completar la Academia.

## 10. Qué aprendió la propia Academia al construir N0

Que el proceso de investigación + revisión crítica no es teatro: encontró y corrigió errores reales de diseño en T3, T4, T5 y T7 antes de que llegaran a una sola sesión real. Que la evidencia interna (observaciones de un estudiante real) pesa tanto como la externa (literatura, universidades) — y que su convergencia, cuando es honesta y no forzada, es la señal más fuerte de que un patrón importa. Que declarar honestamente los huecos (ausencia de Oxford/Cambridge, una atribución a MIT no verificada) fortalece la credibilidad del corpus en vez de debilitarla. Y que separar "cuándo el desarrollo continúa" de "cuándo la evidencia real llega" es, probablemente, la decisión de ingeniería más importante de toda la Prioridad 2 hasta ahora.

---

## Congelación de N0

**N0 · Validación queda congelado como versión de desarrollo (v1.0 de contenido, bajo DOC-11).** Las ocho lecciones (T1–T8), el proyecto (calculadora) y la compuerta permanecen tal como están. Las cinco hipótesis del punto 8 quedan registradas como pendientes de validación — ninguna bloquea N1. Toda modificación futura de N0 dependerá exclusivamente de evidencia obtenida durante la validación con estudiantes reales (política de no reapertura, DOC-11 §6bis), nunca de una idea nueva por sí sola.

**Con este informe, comienza formalmente la Investigación Pedagógica de N1.**
