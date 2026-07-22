# Informe Final de Nivel — N8 · AI Systems

**Actualización de cierre (2026-07-22):** el Director revisó este informe y fijó los criterios de cierre directamente. Veredicto: **N8 candidato a v1.0.0, sin reservas bloqueantes.** Las 2 reservas originales quedaron resueltas en su disposición institucional (no en su sustancia técnica, que permanece declarada con honestidad):

1. **Carga estimada** — corregida vía PATCH administrativo DOC-10 1.0.4 (de "~5 meses·~500h" a "~6-7 semanas·~170h", verificado por suma real de los 22 `duracionTotal` de `LEVEL8`). Instrucción explícita del Director: no inflar la cifra para sostener una expectativa histórica no auditada — si el contenido real justifica una duración distinta, la documentación se actualiza para reflejarla.
2. **Verificación empírica real de 8/22 `errorVivo` dependientes de comportamiento de LLM** — permanece **explícitamente registrada como limitación conocida**, no resuelta de raíz ni bloqueante. Instrucción explícita del Director: preferir una limitación declarada con transparencia antes que una verificación ficticia; la comprobación real se realizará más adelante sobre el entorno definitivo.
3. **Propagación de las decisiones institucionales** (plataforma-no-aplicación, agnosticismo de proveedor) — el Director confirmó explícitamente que no corresponde resolverse desde la ventana de N8, por afectar a varios niveles simultáneamente; queda para el documento maestro o la ventana coordinadora.

El sello final de "v1.0.0" y la fusión a `main` siguen siendo actos exclusivos del Director desde la ventana coordinadora (§11, §12 de `docs/guia-construccion-niveles.md`) — este informe documenta el cierre institucional, no lo ejecuta.

---

**Estado histórico de este informe antes del cierre (referencia):** candidato a v1.0.0, con 2 reservas nombradas y acotadas — texto original de las secciones 1-10 sin modificar debajo, salvo las notas de cierre en §7 y en la solicitud final.

---

## 1. Objetivo global

N8 enseña a diseñar y construir **sistemas que actúan**, no solo sistemas que responden — la transición desde N7 (inferencia, RAG, evaluación de un sistema pasivo) hacia agentes que dirigen su propio bucle de decisión, coordinan herramientas y otros agentes, recuerdan entre sesiones, procesan voz e imagen, y — la competencia que distingue este nivel de un tutorial de LangGraph — **miden su propia fiabilidad en vez de asumirla**. El proyecto de nivel (AI Systems Platform, V2 de la columna vertebral) no es una aplicación cerrada: es una plataforma reutilizable de 7 capas con interfaces estables, que el estudiante extiende, no reescribe, y que N9-N12 seguirán extendiendo después.

## 2. Competencias desarrolladas

C-N8-01…04 (texto exacto en DOC-01), cada una con cobertura verificada en ≥2 instrumentos distintos (tabla completa en `syl-n8.md` §7.1). Refuerzo especial aplicado tras la auditoría integral: C-N8-04 (evaluar riesgos, declarar límites con honestidad) se sembró explícitamente en M1.T4, no solo en M5.T4, corrigiendo una asimetría de profundidad real que el Auditor 1 encontró frente a sus competencias hermanas.

## 3. Modelos mentales fundamentales

- **El agente es un chatbot con permiso de bucle** (M1.T1) — la única diferencia mecánica real entre generar texto y actuar es quién controla el siguiente paso.
- **El checkpointing es una primitiva única, no tres features** (M2.T1-T2) — memoria conversacional, recuperación ante fallos y aprobación humana emergen del mismo mecanismo de `thread_id`+checkpoint.
- **Una herramienta es una frontera de confianza en dos direcciones** (M1.T4) — lo que entra se valida contra reglas de negocio, no solo contra un schema; lo que sale se traduce a algo que el modelo puede usar para recuperarse.
- **La memoria perfecta es peor que la memoria diseñada** (M3.T2) — demostrado con datos propios, no solo argumentado: contexto irrelevante compite por atención con el contexto que sí importa.
- **La fiabilidad se mide, no se declara** (M5 completo) — una taxonomía formal para diagnosticar, límites duros que no dependen del buen juicio del modelo, puntos de control humano donde la irreversibilidad lo exige, y una declaración honesta de lo que sigue sin garantía.
- **Los proveedores son implementaciones intercambiables de un concepto, nunca el concepto mismo** (M1.T3, principio institucional transversal) — materializado técnicamente en la interfaz `ModelProvider`, no solo declarado.

## 4. Errores que elimina

Que un estudiante que complete N8 ya NO cometa: confundir "más autónomo" con "mejor" sin medir el coste (M1.T1); asumir que un schema JSON válido garantiza argumentos seguros de ejecutar (M1.T4); tratar `try/except` como suficiente para memoria/estado sin persistencia real (M2.T2); acumular memoria sin política de consolidación (M3.T2); confundir reintentar con replanificar ante un fallo (M3.T3); dar visión/voz a un sistema sin medir su coste real antes de comprometerse a la arquitectura (M4); confiar en que un agente puede autodiagnosticar sus propios fallos sin verificación externa (M5.T1); y — el error más caro de prevenir tarde — declarar "mi sistema es seguro" sin evidencia verificada (M5.T4).

## 5. Qué queda fuera y por qué

- **Despliegue en infraestructura real** (Kubernetes, colas, observabilidad de producción) — explícitamente de N9, que extiende esta misma plataforma (declarado en `n8proyecto.fueraDeAlcance`).
- **Protocolos de interoperabilidad agente-a-agente entre organizaciones** (tipo A2A) — declarado explícitamente fuera de alcance en M2.T4 tras el hallazgo de la auditoría integral (el badge público del selector de niveles lo anunciaba sin sustento; corregido). Queda como hallazgo abierto para quien diseñe el nivel donde corresponda — probablemente N12.
- **Gobernanza multiagente a escala empresarial y multi-tenant** — de N12.
- **Verificación empírica completa con costo real de 8 `errorVivo`** — ver §7, reserva abierta.

## 6. Dependencias para el siguiente nivel (Herencias Declaradas)

H-N9-01…06 completas en `syl-n8.md` §8.2. Las dos más importantes por ser brechas *declaradas explícitamente* en vez de asumidas: (a) el estudiante orquesta estado persistente solo de **un único proceso** (`SqliteSaver`) — N9.M1 (Kubernetes, múltiples réplicas) debe enseñar estado distribuido desde cero, con la ventaja de que el estudiante ya sabe POR QUÉ hace falta; (b) los mecanismos de contención de N8 son de **aplicación**, no de infraestructura — N9 introduce un nivel complementario, no redundante.

## 7. Riesgos pedagógicos abiertos

1. **[CERRADO institucionalmente el 2026-07-22, sustancia técnica sin resolver por decisión explícita del Director] Verificación empírica incompleta de 8 `errorVivo` (36% del total, concentrados en M4).** Construidos contra documentación oficial verificada, nunca ejecutados con costo real durante esta sesión (sin credenciales propias ni presupuesto disponible). Mitigado con honestidad explícita en el contenido; no resuelto de raíz. El Director revisó este riesgo y decidió explícitamente **mantenerlo como limitación conocida y transparente** en vez de forzar una verificación ficticia — la comprobación real queda diferida al entorno definitivo, y esta decisión, no la verificación en sí, es lo que cierra el riesgo a nivel institucional. **Riesgo técnico igual de real que antes:** un estudiante real podría no reproducir exactamente el desenlace descrito — el contenido ya lo anticipa y reencuadra el valor pedagógico en la observación propia.
2. **[RESUELTO el 2026-07-22, PATCH DOC-10 1.0.4] Carga estimada de DOC-10 §8 (~500h) no verificada contra el contenido construido** — corregida a ~170h (suma real de los 22 `duracionTotal` + estimación del proyecto a dedicación pactada de 25h/semana), por instrucción directa del Director, con el criterio explícito de no inflar la cifra para sostener una expectativa histórica. Mismo patrón de placeholder no auditado que afectó a N3 antes de su PATCH 1.0.3 — aquí en dirección de sobreestimación, no subestimación.

## 8. Hipótesis pendientes de validación

- Que el estudiante real, al llegar al hito 1 del proyecto, pueda razonar sobre las 6 capas de la plataforma sin fricción — mitigado tras la auditoría adversarial (las 6 capas ahora tienen práctica nombrada con código real antes del proyecto, no solo 3 de 6), pero no probado con un estudiante real todavía.
- Que el principio de agnosticismo de proveedor (Anthropic + OpenAI como referencia dual) siga siendo pedagógicamente sostenible si uno de los dos proveedores cambia significativamente su API antes de que el nivel se use en producción — mitigado con el patrón `"<vigente>"` sistemático (9 ocurrencias verificadas), pero la hipótesis de que ese patrón es suficiente guía para un estudiante real, sin acompañamiento, no está probada.

## 9. Decisiones de diseño más importantes

1. **El proyecto de nivel es una plataforma reutilizable de 7 capas, nunca una aplicación vertical** — decisión institucional del Director, instanciada aquí por primera vez, con impacto declarado hacia N6-N12 (documentado en `n8-arquitectura-plataforma.md`, pendiente de propagación formal a la guía maestra por el Director).
2. **Agnosticismo de proveedor con excepción única justificada (MCP)** — mismo documento, mismo estatus de propagación pendiente.
3. **22 temas sobre 5 módulos en vez de "días" Pyodide** — la unidad de densidad de un nivel DOC-12-dominante es el laboratorio completo (13 secciones), no el día; decisión de §8 de `syl-n8.md`.
4. **Cinco ADRs como instrumento nuevo de evaluación de arquitectura**, uno por capa extendida (Modelos, Herramientas, Orquestación, Memoria, Seguridad/Gobernanza — más multimodal como extensión de Modelos), sin equivalente en N0-N7 — nacido de la necesidad real de que C-N8-02 (defensa de arquitectura) tenga evidencia verificable, no solo declarativa.

## 10. Qué aprendió la Academia al construir N8

- **Un currículo DOC-12-dominante puede auditarse con el mismo rigor de verificación empírica que uno Pyodide, pero el mecanismo de verificación cambia**: donde N1-N3 corren un harness de Node contra `check()` reales, N8 no tiene código auto-evaluado — su disciplina de verificación vive en contrastar cada fragmento de código contra documentación oficial verificada (bibliografía dedicada, `n8-bibliografia-oficial.md`) y, donde eso no basta (comportamiento de un LLM en vivo), en declarar honestamente la falta de verificación real en vez de fingirla. Este es un patrón nuevo que niveles DOC-12-dominantes futuros (N9, N10) probablemente necesiten replicar explícitamente.
- **El patrón de auditoría de 4+2 auditores independientes escala bien a niveles no matemáticos.** A diferencia de N1-N3 (donde los auditores verificaban principalmente corrección numérica), los auditores de N8 verificaron corrección de API real, coherencia arquitectónica y fidelidad frente a un currículo de referencia externo (DL.AI) — encontrando hallazgos reales (el vacío de Reflexión, el badge de NIVELES con contenido inexistente) que un solo revisor, o el propio constructor, difícilmente habría encontrado por sí solo.
- **Una decisión institucional nueva (plataforma-no-aplicación) necesita practicarse con código real antes de exigirse en el proyecto** — la auditoría adversarial encontró que 3 de 6 capas nunca se nombraban explícitamente pese a exigirse en el hito 1; la lección para niveles futuros que construyan sobre esta misma plataforma (N9-N12) es nombrar cada capa que tocan, con su propio ADR, en el momento en que la tocan — no asumir que el vocabulario arquitectónico se transmite solo por ósmosis.

---

## Resumen de trazabilidad

| Documento | Contenido |
|---|---|
| `docs/syllabus/syl-n8.md` | Syllabus completo, 22 fichas pedagógicas, compuertas, Herencias Declaradas |
| `docs/investigacion/n8-bibliografia-oficial.md` | Investigación pedagógica verificada (MCP, LangGraph, tool use, DL.AI, papers de fiabilidad) |
| `docs/investigacion/n8-arquitectura-plataforma.md` | Decisiones institucionales (plataforma de 7 capas, agnosticismo de proveedor) |
| `docs/informes/n8-auditoria-integral.md` | 4 auditores independientes, 8 correcciones aplicadas |
| `docs/informes/n8-auditoria-adversarial.md` | 2 revisores adversariales, 5 correcciones + 2 reservas nombradas |
| `docs/informes/n8-informe-final-de-nivel.md` | Este documento |
| `index.html` (`LEVEL8`) | 22 laboratorios DOC-12 + proyecto de nivel, verificado en cada commit |

**Commits de la rama `nivel/n8`** (orden cronológico): syllabus → M1 → M2 → M3 → M4 → M5 → proyecto → compuertas → auditoría integral+correcciones → Herencias Declaradas → auditoría adversarial+correcciones → este informe → PATCH DOC-10 1.0.4 + cierre institucional.

**Resolución de la solicitud original (2026-07-22, instrucción directa del Director):**
1. ~~Veredicto sobre "candidato a v1.0.0"~~ → **Resuelto: candidato a v1.0.0, sin reservas bloqueantes.**
2. ~~PATCH administrativo de la carga estimada~~ → **Resuelto: DOC-10 1.0.4 aplicado, ~170h.**
3. ~~Propagación de las 2 decisiones institucionales~~ → **Confirmado explícitamente por el Director: no corresponde a la ventana de N8** — queda para el documento maestro/ventana coordinadora, sin fecha comprometida por esta ventana.
4. ~~Decisión sobre la reserva de verificación empírica~~ → **Resuelto: queda como limitación conocida, declarada con transparencia, diferida al entorno definitivo — decisión explícita del Director, no autoconcedida por esta ventana.**

**Pendiente real, fuera de esta ventana:** fusión de `nivel/n8` a `main` y sello formal de v1.0.0 en el Blueprint (Apéndice E, EVT) — actos exclusivos de la ventana coordinadora.
