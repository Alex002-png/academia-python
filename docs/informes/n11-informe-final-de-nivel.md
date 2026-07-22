# Informe Final de Nivel — N11 · Research Engineer

*Cierra el flujo institucional de 9 pasos para N11 (`docs/guia-construccion-niveles.md` §13). Estructura de 10 secciones, mismo estándar exigido a N0-N3. Rama `nivel/n11`, no fusionada a `main` — la fusión y el veredicto de v1.0.0 son exclusivos del Director.*

*Actualizado el 2026-07-22 tras una pasada de profundización (instrucción explícita del Director: elevar el nivel a estándar comparable a MIT/Stanford/CMU/Berkeley) y una segunda ronda de auditoría adversarial (2 auditores, específica sobre el contenido nuevo — ver `syl-n11.md` §11bis). La versión original de este informe (previa a ambas) describía un nivel más delgado; este documento refleja el estado real final.*

## 1. Objetivo global

Que el estudiante deje de ser alguien que domina herramientas y sistemas ya dados (el registro de N0-N10) y se convierta en alguien capaz de producir conocimiento nuevo con honestidad verificable: elegir un paper real con criterio, reproducir una pieza de su resultado central, contribuir a un proyecto de terceros siguiendo sus reglas, reportar lo que encontró —coincida o no con lo esperado— y defender cada decisión ante repreguntas sin guion. N11 no enseña una herramienta ni un framework: enseña el oficio completo de investigador junior, con sus fricciones reales (entorno, calendario, terceros) incluidas a propósito, no eliminadas por diseño.

## 2. Competencias desarrolladas

Las 5 de DOC-01 (C-N11-01…05), cada una con módulo propio y evidencia verificable en el contenido real (tabla completa en `syl-n11.md` §7): C-N11-01 (reproduce un paper, M2 + capstone hitos 1-2), C-N11-02 (lee papers de frontera con autonomía, M1), C-N11-03 (contribuye a open source real, M4 + capstone hito 3), C-N11-04 (reporta fielmente, atribución y licencias, M3 + capstone hito 4), C-N11-05 (defiende ante examen crítico oral, sembrada en M1.T5/M3.T3, consolidada en capstone hito 5). Ninguna quedó huérfana; verificado dos veces (diseño en el Paso 5, y de nuevo contra el contenido real en la auditoría adversarial del Paso 9b).

## 3. Modelos mentales fundamentales

- **Leer en capas, no de corrido** (M1, método de las tres pasadas de Keshav): decidir cuánto invertir antes de invertirlo.
- **La tolerancia se declara antes de calcular, nunca se ajusta después de ver el resultado** (M1.T3, M2.T3, repetido en el capstone) — el mismo principio de honestidad numérica de la guía maestra §9, aplicado ahora a investigación real, no solo a `check()`.
- **Una divergencia es información, no un fracaso** (M2.T5): el objetivo nunca fue el número exacto, fue el método de averiguar honestamente por qué el número es el que es.
- **La arqueología del software se hace con una pregunta, no leyendo de corrido** (extensión de N1.M4.T4 a código de investigación real, M2.T2).
- **Un proyecto open source real tiene su propia cultura escrita, y esa cultura manda** (M4.T1): la convención local del proyecto elegido siempre gana sobre la convención genérica que el estudiante ya conoce.
- **El PR real es la misma "propuesta argumentada" de N1, pero ahora el lector no tiene ninguna obligación de paciencia** (M4.T3-T4).
- **Una sola corrida nunca es una verificación cuando hay componente aleatorio** (M1.T3/M2.T4, Henderson et al. 2018): el ruido de semilla puede disfrazarse de mejora real; se practica con múltiples semillas, nunca con un solo número.
- **La causa raíz está varios "por qué" más abajo que la primera explicación** (M2.T5, 5 Whys): detenerse en el primer "por qué" produce una explicación superficial, no accionable.
- **Verificar la fuente vigente vale más que memorizar un término** (M3.T1): el propio nivel encontró, al construirse, que ACM invirtió el significado de "Reproducido"/"Replicado" en 2020 — la lección enseña a verificar, no a memorizar, precisamente por ese hallazgo real durante su construcción.

## 4. Errores que elimina

Aceptar una cifra reportada sin verificarla uno mismo; confundir "no pude verificarlo con mis recursos" con "está verificado"; leer un paper de corrido sin decidir explícitamente cuánto invertir; asumir que un símbolo matemático conocido significa lo mismo en cualquier paper; empezar a programar una contribución open source antes de confirmar con los mantenedores; enviar un PR sin haber leído las convenciones específicas del proyecto; escribir un reporte con lenguaje ambiguo que oculta si un resultado coincidió o no; aceptar sin escrutinio un resultado que "funcionó" a la primera.

## 5. Qué queda fuera y por qué

- **Reproducción a escala de producción/paper completo dentro de los módulos** — decisión explícita de diseño (§3.1 del syllabus, aprobada por el Director): la escala completa vive únicamente en el capstone; los módulos preparan el método con piezas reales pero acotadas.
- **Un banco de examen rotable (NNR-02)** — DOC-10 §9 declara explícitamente que el examen de N11 ES la reproducción y su defensa; no hay compuerta separada de ítems.
- **Garantía de aceptación de la contribución open source** — fuera del control curricular por diseño; mitigado, no eliminado, en el hito 3 del capstone (§6.4).
- **Cobertura exhaustiva de todas las subáreas de IA en los papers elegibles** — el estudiante elige su propio paper; el nivel enseña el método, no un temario cerrado de temas de investigación.

## 6. Dependencias para el siguiente nivel (N12 · AI Systems Architect)

Herencias declaradas en `syl-n11.md` §9 (borrador, no bloqueante — N12 no existe todavía como documento): lectura crítica autónoma de fuentes primarias, honestidad metodológica bajo presión de resultado, contribución real a un proyecto de terceros con sus propias reglas, y defensa oral crítica sin guion. Las cuatro se practican en N11 con evidencia real verificable (no solo teoría), y N12 las reutiliza a mayor escala en su capstone final (defensa integradora de la carrera).

## 7. Riesgos pedagógicos abiertos

1. **Riesgo de calendario del capstone** (§3.3 del syllabus): la reproducción y la contribución dependen de factores fuera del control del estudiante (viabilidad real del paper, tiempo de respuesta de mantenedores). No es un defecto de diseño — es una propiedad real de la investigación — pero puede extender el capstone más allá de la estimación de DOC-10 (~600h, ya marcada "no auditada"). La profundización aumentó las duraciones declaradas por laboratorio; el riesgo de calendario es, si acaso, mayor que en la versión original, no menor.
2. **Determinismo parcial de 2 laboratorios de M1** (hallazgo de la primera auditoría adversarial): el error inducido en vivo de M1.T1/T2 depende en parte del paper que el propio estudiante elige. Mitigado parcialmente (M1.T2 ancla a un caso garantizado interno), no eliminado del todo.
3. **Fuente de Keshav — resuelto.** El PDF original sí se pudo fetchear directamente (mirror de Stanford CS114) durante la profundización; ya no depende de una fuente secundaria.
4. *(Nuevo, tras la segunda auditoría)* **La distinción ACM "Reproducido"/"Replicado" no se resolvió con una correspondencia específica citable de memoria** — se verificó que el propio término es ambiguo entre versiones históricas de la política de ACM (invertido en 2020), y las herramientas de esta sesión no lograron un fetch directo confirmatorio de la versión vigente (bloqueado dos veces). La lección se diseñó para enseñar a verificar la fuente en el momento de uso en vez de resolver la ambigüedad con una afirmación no sostenida por evidencia suficiente — es una limitación real de esta sesión de construcción, no del estudiante futuro, y queda abierta para quien pueda confirmar la definición vigente con acceso directo a `acm.org`.

## 8. Hipótesis pendientes de validación (falsables con la ejecución real)

- Que 17 laboratorios de preparación + 1 capstone de ~2-3 meses son la proporción correcta de andamiaje antes del salto de escala — se valida solo con estudiantes reales completando el nivel.
- Que la mitigación de §6.4 (PR + ronda de revisión real cuenta como evidencia si la demora es del mantenedor) es suficientemente estricta para no diluir C-N11-03 en la práctica, no solo en el texto.
- Que el criterio propio de 3 ejes de M2.T1 (código auditable, cómputo accesible, claim acotado) filtra candidatos de forma efectiva — MLRC no publica un criterio de referencia contra el cual contrastarlo.

## 9. Decisiones de diseño más importantes

1. **Preparación acotada en los módulos, ejecución de gran escala solo en el capstone** (§3.1) — la decisión estructural que condicionó todo lo demás, aprobada explícitamente por el Director antes de instanciar una sola ficha.
2. **Modalidad `real` (DOC-12, hitos/checkpoints) para prácticamente todo el nivel, en vez de forzar el esquema `pyodide` de días/`ex[]`** — verificado contra el mecanismo técnico real de `index.html` antes de comprometerse, no supuesto.
3. **Documentar riesgos reales para el Director en vez de resolverlos en silencio** (§3.3 calendario, §6.4 aceptación externa) — aplicado dos veces: en el diseño original y de nuevo, con una corrección real, tras la auditoría adversarial.

## 10. Qué aprendió la Academia al construirlo

Que una fuente de bibliografía puede quedar obsoleta entre que se cita y que se construye el contenido (Papers With Code, discontinuado por Meta en julio de 2025, descubierto y corregido durante la propia construcción de este nivel) — refuerza que la verificación real (WebFetch/WebSearch, no memoria) no es un paso ceremonial. Que una auditoría adversarial con múltiples auditores independientes encuentra defectos reales incluso en contenido ya verificado con cuidado (la cita fabricada "N1.M1.T7" sobrevivió a la redacción del syllabus y del contenido real sin que el propio autor la notara, hasta que un auditor sin ese punto ciego la señaló). Que declarar honestamente una limitación (la brecha DOC-11 §4bis, el determinismo parcial de un error inducido, la dependencia de terceros en open source) es más valioso institucionalmente que forzar una solución artificial que oculte el problema real.

**Añadido tras la pasada de profundización y su propia auditoría:** que elevar el estándar de un nivel ya construido introduce su propia superficie de error — cada fuente nueva citada es una nueva oportunidad de imprecisión, y en efecto la segunda ronda encontró 6 defectos reales (un enlace equivocado, dos duraciones mal sumadas, una atribución cruzada entre ICLR/NeurIPS, una población de estudio simplificada, y un eje conceptual — ACM Reproducido/Replicado — que el propio autor no pudo verificar con confianza suficiente incluso después de intentarlo dos veces). El hallazgo más valioso no fue ninguno de los defectos en sí, sino la decisión que produjeron: ante una afirmación que dos búsquedas independientes contradecían entre sí, la respuesta correcta no era elegir una y esperar tener razón — era rediseñar la lección para enseñar la verificación como disciplina, en vez de la respuesta como hecho. Es la misma honestidad metodológica que C-N11-04 exige del estudiante, aplicada por el propio proceso de construcción del nivel sobre sí mismo.

---

## Veredicto de este documento

**N11 · Research Engineer queda declarado por su autor candidato a v1.0.0.** No es v1.0.0 — esa palabra es exclusiva del Director (guía maestra §12). El nivel está completo (syllabus + 17 laboratorios + capstone, profundizados a estándar comparable a MIT/Stanford/CMU/Berkeley por instrucción explícita del Director, todos verificados en 4 capas técnicas — sintaxis, esquema, lógica de ejecución simulada, render real en navegador), pasó por **dos** rondas de auditoría adversarial real (4 auditores sobre el contenido original + 2 auditores sobre la profundización) con la totalidad de los hallazgos reales corregidos, y sus riesgos conocidos están documentados explícitamente en vez de ocultos. Queda en la rama `nivel/n11`, sin fusionar a `main`, a la espera del veredicto del Director.
