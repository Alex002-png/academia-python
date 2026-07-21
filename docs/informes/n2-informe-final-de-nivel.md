# Informe Final de Nivel — N2 · Software Engineering

*Memoria técnica de ingeniería, no repetición pedagógica. Segundo nivel de la Academia auditado por un comité externo antes de su cierre — a diferencia de N1, construido desde el origen bajo el estándar de excelencia acordado tras su propia auditoría integral (EVT-044), no con el ciclo "construir rápido, corregir después".*

## 1. Objetivo global de N2

Llevar al estudiante de "construyó una aplicación que solo funciona para él, en su máquina" (cierre de N1) a "puede construir, entregar y sostener un sistema que otros usan, bajo presión real: contratos que cambian, adversarios que atacan, tráfico concurrente, calidad verificada automáticamente, y despliegue continuo sin interrumpir a nadie." Las cinco garantías del nivel —contrato, confianza, consistencia, calidad, continuidad— son la columna vertebral explícita de cada módulo, no una lista de temas sueltos.

## 2. Competencias exactas desarrolladas

Las 7 competencias oficiales de N2 (C-N2-01 a 07), con cobertura verificada mediante la matriz de §14 de SYL-N2, corregida en esta auditoría en 2 puntos: **C-N2-06** (inglés técnico) se declaraba "distribuida" y en realidad se practica en las 27 de 27 fichas del nivel (cada una cita al menos un recurso oficial en inglés, verificado por WebFetch real durante la construcción); **C-N2-05** (justificación de decisiones técnicas) omitía M3 en su fila-resumen pese a practicarse ahí en 3 temas. C-N2-07 (DSA) se mantiene correctamente fuera de la compuerta de nivel, por diseño ya declarado desde el propio syllabus.

## 3. Habilidades técnicas

FastAPI (servicios reales, no simulados, desde el primer laboratorio); Pydantic (validación de contratos); autenticación real (pwdlib/Argon2, PyJWT, autorización con `.get()` seguro); PostgreSQL como servidor (migrado desde diccionarios en memoria de M1, con el contrato de M1 sosteniéndose sin cambios); condiciones de carrera reproducidas y resueltas con `SELECT FOR UPDATE`; Redis como caché con invalidación consciente; TDD (rojo-verde-refactor), cobertura con `pytest-cov`, refactorización guiada por dificultad de testing; CI/CD real con GitHub Actions (`needs:` como puerta, no advertencia); Docker (empaquetado, dos contenedores coexistiendo); migraciones expandir-contraer sin interrumpir tráfico real; logging y decisión rollback-vs-fix-forward.

## 4. Habilidades profesionales

Auditoría honesta de la propia confianza (Laboratorio 29, antes de construir nada nuevo); disciplina de "la prueba antes que el código", no como ritual sino como hábito que revela el rojo real; decisiones de ingeniería documentadas (opciones→criterio→decisión→costo, exigidas en cada módulo); honestidad ante limitaciones de plataforma (el cliente HTTP simulado de M1.T1 declarado explícitamente, siguiendo el mismo principio de N1.M6); rama+PR como flujo de entrega heredado de N1, nunca reintroducido desde cero.

## 5. Proyectos realizados

El hilo continuo de Bitácora (consumidor simulado que llama al servicio del estudiante desde M1.T2 hasta el Capstone) y el **Capstone ET2**: un episodio integrador donde las cinco garantías se demuestran simultáneamente —no en cinco entregas separadas— sobre el mismo sistema construido a lo largo de N2, con arqueología completa de commits (corregida en esta auditoría para apuntar a M1.T2/Laboratorio 13, el primer punto real del repositorio, no a M1.T1 que vive en Pyodide sin estado), post-mortem honesto, y la pregunta de validación final ya institucionalizada desde el capstone de N1: ¿confiaría el examinador en el estudiante para mantener un sistema real?

## 6. Principios pedagógicos aplicados

Los heredados de N1 (DOC-11/DOC-12 ya estabilizados, modalidad `proyecto` reutilizada sin reabrir su arquitectura) más los que este nivel confirmó o añadió:

- **DP-17 (velocidad como señal de riesgo) aplicado desde el primer módulo**, no solo al cierre — cada EVT de cierre de módulo de N2 (046-050) incluye un chequeo explícito de ritmo contra el módulo anterior, ninguno lo disparó.
- **Honestidad de plataforma como principio ya maduro**: la decisión de mover M1-M5 a modalidad `real` (EVT-045) y de simular el cliente HTTP donde Pyodide no puede sostenerlo, ambas declaradas explícitamente al estudiante, no ocultas.
- **Corregir la causa, no el síntoma, también en la propia auditoría**: la promesa de SQLite en M1 (nunca construida) se corrigió alineando el texto con la realidad del código, no inventando una migración retroactiva innecesaria para un problema que era de documentación, no de arquitectura.

## 7. Riesgos pedagógicos que permanecen abiertos

- ~~M4 (Laboratorios 29-33) tiene menos pasos por tema que el resto del nivel (4 vs. 5.4-6.2 de promedio)~~ — **corregido (2026-07-21, EVT-062):** T1-T4 ganaron un paso real y su checkpoint correspondiente, quedando en 5/5, a la par de sus hermanos.
- **Cero comparación institucional (MIT/CMU/Berkeley) en la investigación de N2** — más honesto que el defecto equivalente de N1 (2 de 6 documentos declaran la ausencia explícitamente), pero el vacío persiste. Recomendado para N3 en adelante: declarar la ausencia en el 100% de los documentos de investigación, no en una fracción.
- **Bitácora es menos autónoma de lo que el syllabus narra** — el estudiante ejecuta el script manualmente, no un proceso en segundo plano real. Compromiso razonable para un curso autodidacta sin infraestructura de servidor propia, pero el lenguaje del syllabus debería ajustarse a lo que realmente ocurre, no al revés.
- **El puente narrativo N1→N2 promete continuidad del proyecto de dominio libre de N1 que no se cumple** — N2 arranca con un dominio y consumidor predefinidos. Ninguno de los cuatro riesgos bloquea la certificación de N2 — todos quedan registrados como hipótesis o mejoras, igual que ocurrió con los riesgos abiertos de N1.

## 8. Decisiones de diseño más importantes

- **Construir desde el origen bajo el estándar acordado tras N1 (EVT-044), en vez de repetir el ciclo "rápido primero, corregir después"** — la decisión institucional más importante de este nivel, y la que explica por qué esta auditoría encontró defectos reales pero corregibles dentro de la misma pasada, no una segunda ronda completa como exigió N1.
- **Modalidad `real` como default de N2**, con Pyodide reservado para drills aislados sin estado (EVT-045) — decisión de plataforma tomada ANTES de construir el primer tema, con verificación técnica directa (Pyodide real ejecutado en Node), no supuesta.
- **No reabrir la arquitectura de modalidades para el Capstone** — ET2 reutiliza el mismo contrato de tres funciones y el mismo renderizador que sirvió a N1, con solo dos campos nuevos (`nivelLabel`/`modCount`) para generalizar textos que estaban codificados de forma fija para N1 — un hallazgo real encontrado y corregido antes de escribir el capstone, no después.
- **Corregir documentación, no reconstruir código, cuando el defecto es de exactitud narrativa** — la promesa de SQLite en M1 se resolvió alineando el texto con lo que el código realmente hace, evitando el sobre-trabajo de retrofittear una capa de persistencia que el propio diseño de M1 excluyó deliberadamente (no combinar dos aprendizajes nuevos en el mismo módulo).

## 9. Lecciones aprendidas durante la construcción

**Un defecto de documentación puede propagarse más allá de donde se originó, si nadie lo verifica contra el código real.** La afirmación falsa de que M1 usaba SQLite no se quedó en un solo lugar — se coló hasta la justificación pedagógica de `n2m3t2` (un tema completo construido sobre esa premisa) y hasta el hito de arqueología del propio Capstone. Ninguna de las verificaciones técnicas habituales (`node --check`, harness de aserciones) la habría encontrado, porque no es un error de código — es un error de exactitud narrativa que solo un lector adversarial, comparando texto contra código real, puede atrapar.

**Construir bajo un estándar ya maduro no elimina la necesidad de auditoría — la cambia de naturaleza.** N1 necesitó encontrar y corregir 8 defectos estructurales grandes (densidad, integración, capstone incompleto). N2 necesitó encontrar defectos más pequeños y localizados (una frase falsa, una referencia a un tema equivocado, una tabla desactualizada) — evidencia de que el estándar acordado tras N1 sí elevó la calidad de base, sin volver innecesaria la auditoría en sí misma.

**Un hallazgo de auditoría puede resolverse corrigiendo la premisa, no reconstruyendo el sistema.** La tentación, ante "M1 debería tener SQLite pero no la tiene", habría sido construir esa capa retroactivamente. La opción correcta —confirmada por el propio hallazgo de que el Capstone no depende técnicamente de eso, dado que PostgreSQL llega de verdad en M3— fue corregir la narrativa para que dijera la verdad, preservando la decisión de diseño original de M1 (deliberada, no un descuido).

## 10. Recomendaciones para N3

1. **Verificar cada afirmación narrativa de "contenido previo usa X" contra el código real antes de construir sobre ella** — el mismo tipo de verificación que esta auditoría aplicó al hallazgo de SQLite, aplicado preventivamente durante la construcción, no solo al auditar después.
2. **Declarar la ausencia de comparación institucional en el 100% de los documentos de investigación, no en una fracción** — N2 ya lo hace mejor que N1, pero de forma inconsistente entre sus 6 documentos.
3. **Decidir explícitamente si Bitácora debe volverse más autónoma en niveles futuros (un proceso real en segundo plano) o si el syllabus debe ajustar su lenguaje a la simulación manual actual** — no dejar la brecha narrativa sin resolver indefinidamente.
4. **Añadir al menos una mención hacia adelante ("esto se profundiza en N3") en el cierre del nivel**, dado que N2 hizo el trabajo interno (Herencias Declaradas) pero nunca lo expone al estudiante — mismo patrón que corrigió N1 en algunos de sus cierres de módulo.
5. **Mantener la disciplina de "corregir documentación antes que reconstruir código" cuando el defecto es de exactitud, no de arquitectura** — la lección más barata y más replicable de este cierre.

---

## Congelación de N2

**N2 · Software Engineering queda congelado como versión de desarrollo v1.0 de contenido**, bajo DOC-11/DOC-12 ya estabilizados y la modalidad `proyecto` reutilizada del Capstone ET1 de N1. Los 5 módulos regulares (M1-M5, 28 temas) y el Capstone ET2 forman el corpus congelado, verificado mediante: `node --check` limpio en todo momento; harnesses de Node con decenas de aserciones correcto/incorrecto sobre cada `check()` modificado o nuevo; auditoría integral de 10 dimensiones con 6 hallazgos corregidos dentro de la misma pasada (M5, SQLite, C-N2-06, arqueología del Capstone, C-N2-05, Docker) y 8 riesgos menores registrados como pendientes de validación — ninguno bloquea N3. Toda modificación futura de N2 dependerá de evidencia real de ejecución del estudiante, nunca de una idea nueva aislada — mismo principio de no-reapertura que rige N0 y N1.

**Comienza la reconstrucción de N3, con el mismo estándar de excelencia y la misma disciplina de auditoría adversarial antes de congelar.**
