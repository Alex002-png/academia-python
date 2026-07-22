# Auditoría Adversarial (Paso 9b) — Nivel 8 · AI Systems

**Nota (2026-07-22, post-cierre):** esta auditoría precede la expansión de práctica del nivel (`practicaExtendida`, 550 ejercicios nuevos, PATCH DOC-10 1.0.5 — ver `docs/syllabus/syl-n8.md` §10 y `docs/informes/n8-informe-final-de-nivel.md`, addendum). El Ataque 4 (carga estimada) y su hallazgo de "~170h" citado abajo quedaron superados por esa expansión; el resto de hallazgos (contenido teórico, arquitectura, reservas de verificación empírica) sigue vigente sin cambios.

**Mandato:** 2 revisores independientes, sin coordinación entre sí, cada uno con instrucción explícita de intentar demostrar que N8 NO debería aprobarse en su forma actual — mismo patrón que el comité adversarial de N3 (6 ataques examinados). Aquí: 8 ataques en total (4 por revisor), sobre el contenido ya corregido por la auditoría integral (`n8-auditoria-integral.md`).

**Resultado: 5 de 8 ataques con fundamento real, 3 sin fundamento (la arquitectura resiste).** Ningún ataque invalida el nivel. Se aplicaron correcciones a los 5 con fundamento; el más serio (Reservas #1 y #2 abajo) queda documentado con honestidad en vez de resuelto por completo, porque su resolución total excede mi autoridad o mi capacidad de verificación real.

---

## Ataques sin fundamento (la arquitectura resiste)

**¿N8 debería fusionarse con N7 o N9?** No — dependencia cronológica real verificada (M5 de N8, taxonomía de fallos de agentes, es imposible de enseñar en N7 porque N7 nunca construye un agente que pueda fallar de esa forma), fronteras activamente declaradas (no asumidas en silencio), tres disciplinas de ingeniería genuinamente distintas.

**¿El aparato de ADRs es burocracia disfrazada de rigor?** No — respaldado por RM-05 (rúbrica maestra institucional de defensa oral, DOC-02), con capacidad de rechazo real y anclas verificables ("recita sin comprender; las repreguntas lo desarman" = insuficiente). No es aprobación automática por formato.

**¿Los `diagnostico` regalan la solución (mismo patrón que N1-N3)?** No — categoría distinta: N1-N3 regalaban código de un ejercicio con blanco evaluado; N8 no tiene ejercicios con blanco, y `diagnostico` es una tabla de referencia post-error-vivido que el propio DOC-12 §2.5bis espera que explique la resolución. 18 entradas revisadas en 6 laboratorios distintos, ninguna da código copiable literal.

---

## Ataques con fundamento — corregidos

**1. Vacío del patrón de Reflexión.** La bibliografía oficial de N8 cita el curso "Agentic AI" de Ng como referencia comparada explícita, y su módulo 2 (Reflexión — generar/criticar/regenerar) nunca se nombró ni se citó en ningún laboratorio, pese a citarse los módulos 1, 3, 4 y 5. **Corregido:** M1.T1 (`explicacion`) ahora nombra formalmente el patrón, lo conecta con el mecanismo LISTO/REINTENTAR ya construido, generaliza a otros dominios (código, SQL); `comprension` ganó una pregunta sobre el criterio de crítica explícito; el recurso de DL.AI se actualizó para citar específicamente el módulo 2.

**2. Tres de seis capas de la plataforma nunca se nombraban explícitamente.** El proyecto (hito 1) pide razonar sobre las 6 capas de la AI Systems Platform, pero Herramientas, Evaluación/Observabilidad y Seguridad/Gobernanza nunca se mencionaban por nombre en ningún laboratorio (0 ocurrencias verificadas por grep), a diferencia de Modelos/Orquestación/Memoria (cada una con su propio ADR). **Corregido:** M2.T3 (`evalu.cierre`) nombra la extensión de la capa de Herramientas; M5.T1 (`evalu.cierre`) nombra la siembra de la capa de Evaluación/Observabilidad; M5.T3 gana un **quinto ADR** (`adr-005-seguridad-gobernanza.md`, paso 5 extendido + checkpoint actualizado) para la capa de Seguridad/Gobernanza — ahora las 6 capas que el proyecto exige razonar en el hito 1 tienen, todas, al menos un punto de práctica nombrada con código real antes de esa exigencia.

**3. Tensión formal sobre andamiaje Pyodide (bajo costo).** El principio "ningún tema es 100% Pyodide" (`syl-n8.md` §3.1) se aplicaba como regla categórica de nivel sin reconocer que varios laboratorios ya incluyen tramos de diseño sin coste (ej. M2.T1 paso 1, modelar en prosa antes de instalar LangGraph). **Corregido:** matiz añadido a §3.1 reconociendo estos tramos como cumplimiento real del andamiaje barato, sin necesidad de fragmentarlos en objetos DOC-11 separados (decisión deliberada de cohesión narrativa, DOC-12 §3).

**4. La cifra de "~500h" de DOC-10 §8 no se sostiene contra el contenido real.** Cálculo directo: 22 laboratorios suman 39.9-48.1h; el proyecto (`~5 semanas`, sin cifra explícita) añade, en el escenario más generoso, ≤125h. Total auditable: ~90-170h, incluso añadiendo el doble de fricción de entorno no capturada explícitamente: ~150-250h. Frente a ~500h declaradas — un factor de 2-5x de sobreestimación, en la dirección opuesta al error ya conocido de N3 (que fue subestimado). **No corregido por mí — Tier T1, fuera de mi autoridad** (§12 de la guía maestra: no edito DOC-10). Documentado aquí como hallazgo formal, con el mismo mecanismo de resolución ya usado para N3 (PATCH administrativo 1.0.3, autorizado por el Director) como precedente directo aplicable. **Recomendación explícita: el Director debería aplicar un PATCH equivalente a DOC-10 §8 corrigiendo la carga estimada de N8 antes o inmediatamente después de sellar v1.0.0.**

**5. ~36% de los `errorVivo` (8/22, concentrados en M4) dependen de comportamiento de LLM no verificado empíricamente.** DOC-12 §2.5bis exige reproducibilidad "verificada empíricamente por el autor, no supuesta" — y estos 22 laboratorios se construyeron contrastando código contra documentación oficial de APIs (Anthropic, OpenAI, LangGraph, MCP), nunca ejecutando llamadas reales con costo real, porque esta sesión de construcción no tuvo acceso a credenciales de API propias del estudiante ni presupuesto para gastarlas. **Corrección parcial aplicada:** los 8 casos identificados (M1.T1, M1.T4, M1.T5, M3.T4, M4.T1, M4.T2, M4.T3, M5.T1) ganaron una nota honesta explícita reconociendo que el desenlace exacto no está garantizado, reencuadrando el valor pedagógico en el proceso de observación empírica del propio estudiante en vez de en un resultado idéntico predicho — mismo principio de honestidad metodológica que DOC-12 §0bis exige en general. **No resuelto por completo — declarado como reserva abierta:** la verificación empírica real y completa de estos 8 casos (ejecutarlos de verdad, con costo real, y confirmar o corregir el resultado esperado) requiere que alguien con credenciales propias y presupuesto lo haga antes de v1.0.0 sin reservas — no es algo que yo pueda completar de forma honesta en esta sesión de construcción.

---

## Reservas abiertas hacia v1.0.0 (nombradas, no resueltas por completo)

Siguiendo el mismo patrón que N3 (que llegó a "candidato a v1.0.0 CON 2 reservas nombradas y acotadas" antes de que el Director las resolviera), N8 llega a este punto con **2 reservas reales**:

1. **La carga estimada de DOC-10 §8 (~500h) no refleja el contenido construido (~90-250h calculado).** Requiere PATCH administrativo del Director sobre un documento Tier T1, mismo mecanismo ya usado para N3.
2. **8 de 22 `errorVivo` (36%, concentrados en M4) tienen su desenlace exacto pendiente de verificación empírica real con costo real** — mitigado con honestidad explícita en el contenido, pero no resuelto de raíz. Requiere que alguien ejecute los 8 casos con credenciales y presupuesto reales antes de considerar el nivel sin reservas.

**Ninguna de las dos reservas bloquea que un estudiante complete N8 preparado para N9** — ambas son de honestidad de metadatos/verificación, no de sustancia curricular ausente o incorrecta. Mismo criterio que N3 usó para declararse "candidato a v1.0.0 con reservas" en vez de bloquearse.

---

## Verificación tras las correcciones de este paso

`node --check` limpio sobre el bloque `<script>` completo; los 22 laboratorios conservan sus 20 campos obligatorios; 1231 ids en todo el Campus, 0 duplicados. `LEVELS`/`LEVEL_META` sin tocar. Commit registrado tras este informe.
