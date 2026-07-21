# SYL-N0 — Syllabus del Nivel 0 · Validación

## Control del documento (conforme a DOC-00 §15.4)

| Campo | Valor |
|---|---|
| **Document Key** | SYL-N0 · Tier T2 |
| **Versión / Estado** | **1.1.0** · ✅ **Aprobado** por el Director (2026-07-18; MINOR 2026-07-20) |
| **Autoridad de origen** | DOC-00 14.8.3 (interiores de nivel) · DOC-01 (competencias C-N0-01…05) |
| **Depende de** | DOC-00 (§13 ontología; 14.4 identidad de N0; §16 método; 17.6 compuertas; AC-06 intérprete) · DOC-01 (catálogo canónico) · DOC-02 (matriz canónica, rúbricas RM, plantillas TD/TP/TR) |
| **Produce / desarrolla** | La estructura formal del contenido del Nivel 0 — temas con dirección, grafo local, mapeo a competencias y evaluaciones — que S5 ejecuta y el Tutor imparte |
| **AC aplicables (9.7)** | AC-05 (todo ejecutable en el navegador y PC del estudiante) · **AC-06** (los ejercicios viven dentro del subconjunto del intérprete del campus — este syllabus es el caso canónico de esa restricción) · AC-10 (español vehicular; inglés en dosis de ET1) · AC-12 |
| **Naturaleza** | **Formalización del contenido existente en producción** (retrofit aprobado en el ADR): estructura sin reescribir; el estudiante en curso conserva íntegro su progreso (14.2.3) |
| **Historial** | 0.1.0-draft (2026-07-18): redacción conforme al ADR aprobado con su ajuste (Observaciones de ejecución) y 3 recomendaciones · **1.0.0 (2026-07-18): aprobado por el Director sin modificaciones. Decisión institucional asociada: todo syllabus futuro incluirá Observaciones de ejecución (criterio operativo de la Era; institucionalización en el Blueprint diferida hasta validarse en N0–N2)** · **1.1.0 (2026-07-20): excepción explícita de reapertura otorgada por el Director** (mismo patrón que exigió la política de no-reapertura del Informe Final de N0 v2 — "toda modificación futura de N0 dependerá exclusivamente de evidencia obtenida durante la validación real, nunca de una idea nueva por sí sola") **tras revisar el desglose real de horas de N1 y considerar que el nivel resultaba corto para un estudiante que empieza de cero.** Se añaden **T9 · Funciones básicas** y **T10 · Lectura de código ajeno** (Días 9-10 de la tabla, Días 17-20 reales en `index.html`) — cierran un gap estructural real verificado (N0 nunca introducía `def`/`return` antes de que N1.M1.T1 lo exigiera de golpe), no una densificación de T1-T8 ya construidos (evita agravar la Hipótesis #6 de sobrecarga, todavía sin validar, del Informe Final v2). Proyecto y Compuerta renumerados en consecuencia. Esta excepción NO valida ni resuelve la Hipótesis #6 — queda registrada como pendiente, sin cambio. |

## Tabla resumen *(recomendación A)*

| Tema | Origen (app) | Competencias | Evaluación sumativa | Tiempo est.* |
|---|---|---|---|---|
| N0.M1.T1 · Tu primer programa | Día 1 | C-N0-01, C-N0-04 | Ejercicios + reto + TD-01 breve | 2–4 h |
| N0.M1.T2 · Variables | Día 2 | C-N0-01 | Ejercicios + reto + TD-01 breve | 3–5 h |
| N0.M1.T3 · Tipos de datos | Día 3 | C-N0-01 | Ejercicios + reto + TD-01 breve | 3–5 h |
| N0.M1.T4 · Operadores | Día 4 | C-N0-01 | Ejercicios + reto + TD-01 breve | 3–5 h |
| N0.M1.T5 · Strings | Día 5 | C-N0-01 | Ejercicios + reto + TD-01 breve | 4–6 h |
| N0.M1.T6 · Entrada y salida | Día 6 | C-N0-01 | Ejercicios + reto + TD-01 breve | 3–5 h |
| N0.M1.T7 · Control de flujo | Día 7 | C-N0-01 | Ejercicios + reto + TD-01 breve | 5–8 h |
| N0.M1.T8 · Errores y debugging | Día 8 | C-N0-02, C-N0-04 | Ejercicios + reto (RM-04) + TD-01 breve | 3–5 h |
| N0.M1.T9 · Funciones básicas *(añadido, profundización EVT-05x)* | Día 9 | C-N0-01 | Ejercicios + reto + TD-01 breve | 3–5 h |
| N0.M1.T10 · Lectura de código ajeno *(añadido, profundización EVT-05x)* | Día 10 | C-N0-01, C-N0-02 | Ejercicios + reto + TD-01 breve | 3–5 h |
| Proyecto de nivel · Calculadora | Días 10–11 | C-N0-03 | TP-01 (adaptada, ver §4) contra RM-06 | 6–10 h |
| Compuerta de nivel | Día 12 | Todas + C-N0-05 | Examen + proyecto + defensa TD-02 | 2–4 h |

*\*Tiempos de referencia, no obligación (recomendación B; el calendario estima, la compuerta decide — 14.2). Total estimado del nivel: ~41–65 h de estudio efectivo (revisado tras añadir T9-T10; ver historial).*

## 1. Identidad del nivel

Por referencia a DOC-00 14.4: **N0 · Validación** — primer contacto real con la programación; confirma la vocación y el método. Resultado: primer proyecto completo terminado, decisión informada de continuar, hábitos de estudio instalados. **Compuerta de entrada:** el onboarding completado (14.4, para N0). Estados institucionales: No iniciado / En curso / Superado — el estudiante fundador está **En curso**.

*Nota sobre el ancla externa:* el registro 14.7 asocia a N0 el curso de ML de referencia (validación vocacional del lado IA). Ninguna competencia C-N0 lo exige (DOC-01), y verlo no computa (NNR-03): queda como **material exploratorio no sumativo** al servicio de la "decisión informada de continuar" — se recomienda tras la compuerta de nivel, no antes.

## 2. Estructura: un módulo, diez temas

`N0.M1 · Fundamentos de programación` (sin submódulos, DP-11). Cada tema formaliza el contenido ya publicado del día correspondiente — que ya cumple el estándar editorial del método (hook de propósito, contexto histórico, escalera de ejemplos, checkpoint, ejecución mental, síntesis profesional; conformidad plena verificable en auditoría A1 futura):

- **T1 · Tu primer programa** — el intérprete, print, strings vs. expresiones. Marca de pista 🇬🇧 (los errores se leen en original desde aquí).
- **T2 · Variables** — etiquetas, no cajas; asignación y reasignación; el modelo mental correcto.
- **T3 · Tipos de datos** — int/float/str/bool; conversiones; el porqué de los tipos.
- **T4 · Operadores** — aritméticos, comparación, lógicos; precedencia.
- **T5 · Strings a fondo** — indexación, slicing, métodos, f-strings.
- **T6 · Entrada y salida** — input, conversión de entrada, formateo.
- **T7 · Decisiones y repetición** — if/elif/else, while, break/continue.
- **T8 · Errores y tracebacks** — leer, diagnosticar, corregir; debugging como método. Marca de pista 🇬🇧.
- **T9 · Funciones básicas** *(añadido en la ronda de profundización de N1/N0, EVT-05x)* — `def`/parámetros/`return`, distinguir devolver de imprimir. Cierra el salto de dificultad real detectado entre N0 (nunca introduce funciones) y N1.M1.T1 ("Funciones a fondo"), cuyo primer ejemplo ya exige entender `return` sin que el estudiante haya escrito una función antes.
- **T10 · Lectura de código ajeno** *(añadido, misma ronda)* — trazar variable por variable código con estilo/nombres distintos al propio, sin ejecutar primero; encontrar un bug leyendo antes de correr el programa. La habilidad que antes solo vivía como categoría de ejercicio dentro de otras lecciones, ahora con su propia escalera.

**Mapeo a competencias (13.5.4 — sin huérfanos):** C-N0-01 ← T1–T7, T9, T10 · C-N0-02 ← T8, T10 (parcial: encontrar un bug leyendo) · C-N0-03 ← proyecto · C-N0-04 ← marcas de pista T1/T8 + exposición transversal · C-N0-05 ← checkpoints de predicción y defensas TD-01/TD-02. Contribución al proyecto columna vertebral (13.5.2): las competencias de N0 son el sustrato de toda pieza futura; la contribución directa comienza formalmente en N1 (DP-04, conforme al roadmap sellado).

## 3. Grafo local

Cadena lineal de `requiere`: `T1 → T2 → T3 → T4 → T5 → T6 → T7 → T8 → T9 → T10 → Proyecto → Compuerta de nivel`. Sin co-requisitos ni relaciones `recomienda` en este nivel (el primer nivel es deliberadamente secuencial: PED-08, carga cognitiva mínima). T9 y T10 se insertan tras T8 y antes del Proyecto — el proyecto (calculadora) se beneficia de tener funciones ya disponibles, y de la disciplina de lectura de código propia antes de depurar el suyo. Invariantes 13.7 verificados: sin ciclos, todo alcanzable desde el perfil de entrada (es el primer contenido tras el onboarding), nada huérfano.

## 4. Evaluación del nivel (conforme a DOC-02)

**Clasificación de las mecánicas existentes (17.5):**

| Mecánica de la app | Clasificación | Rúbrica |
|---|---|---|
| Predicciones de intuición y checkpoints MCQ | **Formativa** — calibra, no computa | RM-01 |
| Ejercicios autocorregidos + reto final de tema | **Sumativa de tema** (código) | RM-03 (T8: RM-04) |
| Defensa breve de tema con el Tutor (en chat) | **Sumativa de tema** (oral) — completa el multi-formato de 17.6 | RM-05 · TD-01 |
| Examen final del nivel | **Sumativa de nivel** | RM-02/RM-03 |
| Proyecto calculadora | **Sumativa de nivel** | RM-06 · TP-01 |
| Defensa de nivel con el Tutor | **Sumativa de nivel** | RM-05 · TD-02 |

**Compuerta de tema** (17.6): ejercicios + reto aprobados en la app **+ defensa TD-01 breve con el Tutor** — la parte oral que la app no puede aplicar la conduce el Tutor en sesión, produciendo el veredicto trazable.

**Compuerta de nivel** (17.6): examen + proyecto + defensa TD-02 → certificación emitida por la Plataforma (NNR-06/07).

**Proyecto · Calculadora profesional** — **primer artefacto oficial del portafolio del estudiante** *(recomendación C)*: aquí empieza la evidencia [A] que llegará hasta la graduación. Checklist TP-01 con **adaptación mandada por la propia arquitectura**: los ítems "repositorio público" y "despliegue" se difieren a N1 — exigir Git en N0 violaría la Regla de Calibración (NNR-10: Git se enseña en N1, C-N1-03); al aprenderlo, el primer acto será publicar esta calculadora como repo inaugural. El resto de la checklist aplica íntegro (funciona end-to-end contra batería de pruebas, decisiones explicables, código legible).

## 5. Acta de brechas campus ↔ arquitectura

*Registradas sin resolver (decisión del ADR): la corrección es del campus, por órdenes separadas del Director, priorizada por impacto en el aprendizaje → evaluación → técnico. No bloquean este syllabus.*

| # | Brecha | Norma afectada | Prioridad propuesta |
|---|---|---|---|
| B-01 | El sello legado ("código del tutor") contradice la certificación por Plataforma | NNR-07 | **Evaluación — alta** (afecta la compuerta de nivel inminente) |
| B-02 | El examen del nivel usa ítems fijos, sin rotación ni inéditos garantizados | NNR-02; DOC-02 §5.2 | **Evaluación — alta** |
| B-03 | La app no produce los seis campos del veredicto trazable | 17.2.4 | Evaluación — media (el Tutor puede suplirlo documentando en sesión mientras tanto) |
| B-04 | Nombre del estudiante incrustado en ejercicios | DP-09 | Técnico — baja (no afecta el aprendizaje del estudiante actual) |

## 6. Observaciones de ejecución

> **Registro operativo, no normativo** *(ajuste obligatorio del Director)*: evidencia empírica de la ejecución real del nivel. No modifica el Blueprint, DOC-01 ni DOC-02; alimenta mejoras futuras por sus procesos. Se actualiza durante todo el ciclo de vida del nivel.

| # | Fecha | Observación | Tipo |
|---|---|---|---|
| O-01 | 2026-07 | Confusión detectada en la frontera T2/T3: asignar `"10"` (string) esperando un entero — exactamente el error que el modelo mental de tipos debe prevenir. Señal para reforzar la transición variables→tipos y material del mazo vivo. | Concepto con mayor confusión |
| O-02 | 2026-07 | El tramo de meta-diseño del proyecto consumió múltiples sesiones sin avance de estudio (señal RISK-07 ya registrada institucionalmente). El estudiante retoma en T2 con fases pendientes. | Ritmo de ejecución |
| O-03 | 2026-07 | Los checkpoints de predicción funcionan: el estudiante aprobó las fases de intuición de T1–T2 al primer intento — la mecánica formativa calibra sin frustrar. | Evaluación bien calibrada |

## 7. Cierre

SYL-N0 formaliza un nivel vivo sin interrumpirlo: mismas lecciones, mismas mecánicas, ahora con direcciones §13, competencias DOC-01, instrumentos DOC-02 y brechas declaradas. Lo que sigue no es un documento: es que el estudiante termine T2.
