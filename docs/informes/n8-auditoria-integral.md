# Auditoría Integral — Nivel 8 · AI Systems

**Nota (2026-07-22, post-cierre):** esta auditoría precede la expansión de práctica del nivel (`practicaExtendida`, 550 ejercicios nuevos, PATCH DOC-10 1.0.5 — ver `docs/syllabus/syl-n8.md` §10 y `docs/informes/n8-informe-final-de-nivel.md`, addendum). Sus hallazgos sobre contenido teórico y arquitectura siguen vigentes — esa expansión no tocó fichas, `explicacion` ni bibliografía —, pero cualquier cifra de carga estimada citada abajo (ej. "~170h") está superada.

**Método:** 4 auditores independientes, sin coordinación entre sí (mismo patrón institucional que N1/N2/N3), cada uno con un mandato de examinar 3 dimensiones específicas del contenido REAL de `LEVEL8` en `index.html` (22 laboratorios DOC-12 + proyecto de nivel), contrastado contra los documentos gobernantes (DOC-10 §8, DOC-01, DOC-12, `syl-n8.md`, la investigación pedagógica y de arquitectura ya producidas). Mandato explícito de cada auditor: intentar demostrar que el nivel NO debería aprobarse en su forma actual si hay motivo real, no validar automáticamente.

**Resultado global: ningún hallazgo crítico.** 3 hallazgos moderados reales (todos corregidos), varios menores (todos corregidos salvo uno declarado explícitamente como fuera de control del diseño de N8).

---

## Auditor 1 — Coherencia curricular, cobertura de competencias, preparación para N9

**Coherencia curricular: severidad ninguna.** El grafo M1→M5 declarado en `syl-n8.md` §4 se sostiene con dependencias técnicas verificables (mismos objetos de código reutilizados entre laboratorios, no solo narrativa) en cada frontera de módulo revisada.

**Cobertura de competencias: severidad moderada, corregido.** C-N8-01/02/03 tienen cobertura profunda repartida en múltiples laboratorios distintos; C-N8-04 dependía casi enteramente de un solo laboratorio (M5.T4), con solo una aplicación posterior en el proyecto — un refuerzo formalmente válido pero de profundidad menor que sus competencias hermanas. **Corrección aplicada:** M1.T4 (paso 5 y `evalu.cierre`, ver commit) ahora siembra explícitamente C-N8-04 — declarar honestamente qué no garantiza una validación de frontera — mucho antes de que M5.T4 le dé nombre formal.

**Preparación para N9: severidad moderada, corregido.** El proyecto declara correctamente su frontera con N9 (`fueraDeAlcance`), pero ningún laboratorio advertía que `SqliteSaver` (el backend de persistencia usado en todo M2-M5) no escala horizontalmente — una brecha real que N9.M1 (Kubernetes, múltiples réplicas) iba a descubrir sin aviso. **Corrección aplicada:** nota de herencia saliente añadida al `evalu.cierre` de M2.T2, simétrica a la sección "Herencia entrante" que N8 ya tenía para lo que recibe de N7.

---

## Auditor 2 — Densidad, exigencia, integración

**Densidad: severidad ninguna (positivo), con una nota menor.** Las 13 secciones DOC-12 tienen sustancia real y específica en toda la muestra revisada (16 de 22 laboratorios), sin relleno. Nota menor: el campo `pasos` consolida "qué esperar antes"/"errores frecuentes" a nivel de sección completa (`errorVivo`/`diagnostico`) en vez de por paso individual — desviación de forma frente a la letra literal de DOC-12 §2.5, cumpliendo la misma función pedagógica por otra vía. **No requiere corrección de contenido** — es una nota de conformidad de forma que el Director puede resolver enmendando DOC-12 §2.5 si lo considera necesario; no bloquea la aprobación.

**Exigencia: severidad ninguna (positivo).** Los desafíos comparados (4, de módulos distintos) elevan dificultad por ambigüedad real, integración de mecanismos o casos abiertos genuinos — nunca por redacción confusa.

**Integración: severidad menor, corregido.** Los 5 laboratorios integradores de módulo y el proyecto integran genuinamente piezas previas con evidencia verificable. Único señalamiento: el título de M5.T5 ("cierra M5 y el nivel") prometía más integración mecánica de M1-M4 de la que sus pasos ejercitaban directamente. **Corrección aplicada:** título ajustado ("cierra M5 — la integración de nivel completo se certifica en el proyecto") y paso 5 extendido para exigir citar el ADR afectado por dirección exacta si el bug tocaba una decisión de arquitectura previa.

---

## Auditor 3 — Redundancias, vacíos, capstone

**Redundancias: severidad ninguna.** El catálogo de herramientas y el "agente investigador" reaparecen por diseño acumulativo explícito (cada laboratorio declara qué extiende, con checkpoints/diagnósticos nuevos), no por repetición sin justificar.

**Vacíos: severidad moderada, corregido.** Hallazgo más serio de toda la auditoría: DOC-10 §8 exige "protocolos multi-agente" (plural) en M2, y el nivel entrega MCP (protocolo de herramientas, no de agentes) más patrones de coordinación intra-proceso (supervisor/swarm) — sin declarar la frontera explícitamente. Peor aún: el array `NIVELES` de `index.html` (línea 9569, badge de preview del selector de niveles, **no `LEVEL_META`** — verificado que es un array de roadmap distinto, pre-existente antes de esta construcción) anunciaba "CrewAI" y "A2A" como contenido de N8 sin que existiera un solo artefacto curricular que los respaldara. **Correcciones aplicadas:** (a) `n8m2t4.ficha.fuera` ahora declara explícitamente que supervisor/swarm son coordinación intra-proceso, no protocolos de interoperabilidad entre organizaciones (tipo A2A), y que ese nivel de interoperabilidad queda fuera de alcance — mismo patrón de excepción declarada ya usado para MCP; (b) el badge de N8 en `NIVELES` corregido para reflejar contenido real ("Supervisor/Swarm" en vez de "CrewAI · A2A"), tocando únicamente la fila propia de N8 (verificado con Node que las otras 12 filas no cambiaron).

Hallazgo menor adicional: `n8m3t3.diagnostico` tenía una referencia colgante a "contenido de M4/M5 sobre structured output" que no existe como tema propio. **Corregido** — reemplazada por una conexión real ya construida (frontera de confianza de M1.T4).

**Calidad del capstone: severidad ninguna (positivo, en algunos aspectos por encima de `n1et1`).** Hitos con evidencia falsable (h3: continuidad verificable entre sesiones; h4: métricas cuantitativas reales), checklist mapeado explícitamente a competencias (7/8 ítems citan `C-N8-0X`), defensa que exige evidencia y no solo opinión. Único matiz menor (fuera del control del diseño de N8): el ítem del checklist que ancla multimodalidad a C-N8-01 no tiene correspondencia literal en el texto de esa competencia en DOC-01 — es una limitación del catálogo de competencias, no del proyecto; se declara aquí explícitamente en vez de forzar un cambio fuera de mi autoridad (§12 de la guía maestra: no edito DOC-01).

---

## Auditor 4 — Voz narrativa, rigor técnico del código, disciplina de verificación empírica

**Voz narrativa: severidad ninguna, con una nota menor corregida.** Voz de instructor en segunda persona/tiempo presente consistente en los 9 laboratorios leídos íntegros. Único defecto: markdown `**texto**` sin convertir a `<strong>` en `n8m5t4.contexto` (única ocurrencia en las 22 fichas). **Corregido.**

**Rigor técnico del código: severidad ninguna, con un hallazgo moderado corregido.** Código contrastado contra las APIs oficiales reales (Anthropic Messages API, OpenAI Chat Completions, LangGraph StateGraph/checkpointing/interrupt, MCP SDK oficial) — sintácticamente correcto y consistente en los ~10 fragmentos auditados en profundidad. Único hallazgo: en M4.T2, el método `stream_to_file` del SDK de OpenAI TTS no llevaba el mismo hedge de "verifica la versión vigente" que sí se aplicaba a `model`/`voice` en el mismo paso — inconsistencia de aplicación de la propia disciplina del laboratorio. **Corregido** — añadido el hedge explícito al método de guardado, no solo a los parámetros del modelo.

**Disciplina de verificación empírica: severidad ninguna (la dimensión mejor resuelta del nivel).** El placeholder `"<vigente>"` para nombres de modelo/voz aparece de forma sistemática (9 ocurrencias verificadas, 4 módulos distintos) — ningún fragmento de código de todo el nivel hardcodea un nombre de modelo específico. Honestidad metodológica activa documentada en múltiples laboratorios (ej. declaración explícita de que Anthropic no expone API de voz nativa "al momento de esta investigación").

---

## Resumen de correcciones aplicadas (commit posterior a este informe)

1. M1.T4 — siembra explícita de C-N8-04 en paso 5 y `evalu.cierre`.
2. M2.T2 — nota de herencia saliente hacia N9 sobre los límites de escalado horizontal de `SqliteSaver`.
3. M2.T4 — excepción declarada explícitamente: supervisor/swarm no son protocolos de interoperabilidad agente-a-agente entre organizaciones (tipo A2A); ese alcance queda fuera de N8, declarado, no en silencio.
4. M3.T3 — referencia colgante a "M4/M5 structured output" corregida, reemplazada por una conexión real.
5. M4.T2 — hedge de "versión vigente" extendido al método de guardado de audio, no solo a `model`/`voice`.
6. M5.T4 — markdown `**` convertido a `<strong>` HTML.
7. M5.T5 — título ajustado para no sobreprometer integración mecánica de M1-M4; paso 5 extendido para exigir cita de ADR afectado por dirección exacta.
8. `NIVELES` (línea 9569, array de preview del selector de niveles — no `LEVEL_META`) — badge de N8 corregido para reflejar contenido real, tocando únicamente la fila propia de N8.

**Verificado tras las 8 correcciones:** `node --check` limpio sobre el bloque `<script>` completo; los 22 laboratorios `real` conservan sus 20 campos obligatorios; `NIVELES` conserva sus 13 filas (N0-N12) con solo la fila de N8 modificada; 1231 ids en todo el Campus, 0 duplicados. `LEVELS`/`LEVEL_META` sin tocar en ningún momento de esta auditoría.

**Hallazgos declarados sin corrección, con justificación:**
- Auditor 2, nota de forma sobre `pasos` (desglose por paso vs. consolidado en sección) — decisión de diseño consistente en las 22 fichas, cumple la función pedagógica por vía distinta a la letra literal de DOC-12 §2.5; se recomienda al Director decidir si enmienda DOC-12 o lo acepta como interpretación válida, no es una corrección que me corresponda decidir unilateralmente (Tier T1).
- Auditor 3, ítem de checklist del proyecto que ancla multimodalidad a C-N8-01 sin correspondencia literal en el texto de DOC-01 — limitación del catálogo de competencias (Tier T1), no del diseño de N8; documentado como hallazgo/recomendación, no editado (§12 de la guía maestra).
