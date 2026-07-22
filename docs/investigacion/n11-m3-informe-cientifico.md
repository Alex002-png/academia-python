# Investigación Pedagógica de N11.M3 — Informe científico

*Construida bajo DOC-12 §0bis, fundamenta los 3 laboratorios de M3 (T1 Anatomía de un reporte honesto · T2 Reportar divergencias, atribución y licencias · T3 Escritura y revisión por pares). Investigación verificada con WebSearch real durante la sesión de construcción de este módulo (2026-07-21).*

## 1. Fuentes verificadas por tema

**T1 — Anatomía de un reporte honesto:** reutiliza, como instrumento de escritura (no de lectura, ya usado así en M1.T4), el NeurIPS Paper Checklist — https://neurips.cc/public/guides/PaperChecklist, y el linaje del checklist de reproducibilidad de Pineau et al. (ya citado en M2.T3). No se investiga una fuente nueva — la disciplina de "cada afirmación con su evidencia citable, cada limitación declarada" ya está verificada.

**T2 — Atribución y licencias:** comparación práctica de las tres licencias de código abierto más comunes, verificada por WebSearch con convergencia de múltiples fuentes (credativ.de, Medium, safeguard.sh — comparación consistente entre las tres, sin contradicción). Confirmado: **MIT/BSD** — permisivas, solo exigen mantener el aviso de copyright y la licencia original (atribución); **Apache-2.0** — igual que MIT más una concesión explícita de patentes y cláusula de retaliación de patentes; **GPL** — copyleft fuerte, cualquier trabajo derivado distribuido debe liberarse también bajo GPL ("viral"), incompatible en su versión 2 con el propio Apache-2.0 (la cláusula de patentes de Apache-2.0 no es aceptada por GPLv2, sí por GPLv3). Práctico para el estudiante: MIT permite reutilizar código en un proyecto propio de cualquier tipo con solo mantener el aviso; GPL exige liberar el proyecto propio completo si lo distribuye.

**T3 — Revisión por pares:** MIT Communication Lab, *"Peer Review – Best Practices"* — https://mitcommlab.mit.edu/broad/commkit/peer-review/ (verificado por WebSearch, fuente institucional real del MIT). Estructura confirmada para dar retroalimentación: Resumen → Decisión → Preocupaciones mayores → Preocupaciones menores; modelos complementarios confirmados por convergencia de fuentes: "criticism sandwich" (positivo→crítica→positivo) y modelo PCQ (Praise-Criticism-Questions). Para recibir retroalimentación: dejar pasar tiempo antes de responder, mantener mente abierta, hacer preguntas de seguimiento antes de descartar un comentario.

## 2. Errores de novato documentados

Confirmado por convergencia de fuentes de revisión por pares: los revisores novatos tienden a dar retroalimentación vaga o puramente negativa sin especificidad accionable — la investigación confirma que aumentar la especificidad y usar lenguaje constructivo mejora la utilidad percibida y la respuesta emocional del autor. Aplicado a M3.T3: la rúbrica de "revisión útil, no solo cortés" debe exigir especificidad concreta (línea/sección citada), no solo tono amable.

## 3. Síntesis y decisiones de diseño

**Por qué M3 no tiene una fase de "gran escala" separada (decisión ya tomada en SYL-N11 §3.1):** el informe del capstone ES la aplicación a escala real de lo que M3 enseña — M3 practica sobre las reproducciones pequeñas de M2, sin necesitar una versión aparte de mayor tamaño.

**Por qué T2 introduce licencias aquí y no antes:** M2.T1-T2 ya expusieron al estudiante a repositorios reales con licencias declaradas (parte del ML Code Completeness Checklist implícitamente, aunque no es uno de sus 5 ítems explícitos) — T2 de M3 es el primer lugar donde se le pide actuar sobre esa información, no solo notarla.

**Por qué la revisión por pares cierra M3, no abre M1:** la disciplina crítica ya se entrenó unidireccionalmente en M1.T4 (evaluar el paper de otro) — M3.T3 la cierra en su forma bidireccional (recibir revisión sobre el propio trabajo, y revisar el de otro con el mismo rigor), síntesis natural de fin de módulo.

## 4. Investigación adicional — pasada de profundización (2026-07-22)

*Añadida por instrucción explícita del Director de elevar el nivel a estándar comparable a MIT/Stanford/CMU/Berkeley.*

- **T1 — terminología precisa "Reproducido" vs. "Replicado":** ACM, *"Artifact Review and Badging"* — confirmado por WebSearch con cita textual de las definiciones oficiales (alineadas con el estándar NISO). Hallazgo relevante: el propio nivel usaba "reproducir" de forma coloquial hasta este punto — esta corrección eleva la precisión terminológica de todo M1-M2 retroactivamente (declarado en la ficha de M3.T1, no reescrito en M1-M2 para no alterar contenido ya auditado).
- **T2 — identificadores SPDX:** SPDX License List (Linux Foundation) — estándar real de la industria para SBOMs, confirmado por WebSearch como práctica establecida, no una convención inventada para este nivel.
- **T3 — sesgo de anclaje en revisión por pares:** *"Testing for Reviewer Anchoring in Peer Review: A Randomized Controlled Trial"* (arXiv:2307.05443, PLOS One) — confirmado por WebSearch con cita directa del hallazgo (sin evidencia significativa de anclaje en 108 revisores con doctorado en CS). Caso deliberadamente elegido para enseñar honestidad científica: una intuición plausible, verificada, sin el resultado esperado — evita presentar el anclaje como hecho comprobado cuando la mejor evidencia disponible en este dominio específico no lo sostiene.

## Clasificación y falsabilidad

**Evidencia sólida:** comparación de licencias (3 fuentes independientes convergentes, sin contradicción); estructura de retroalimentación de revisión por pares (fuente institucional MIT + convergencia con otras fuentes sobre especificidad como factor de utilidad); la distinción ACM/NISO Reproducido/Replicado (fuente oficial única, sin ambigüedad); el estudio de anclaje (RCT publicado en PLOS One, revisado por pares). **Ausencia declarada:** ninguna fuente única resuelve "cómo dar la mejor retroalimentación posible" de forma canónica — se declara la síntesis de varios modelos (sandwich, PCQ) como práctica convergente, no como un estándar único. **Falsabilidad:** si el registro de ejecución muestra que los estudiantes de N11 responden mejor a un modelo distinto de retroalimentación estructurada, se ajusta T3 en la próxima iteración; si estudios futuros SÍ encuentran anclaje en revisión de CS/ML específicamente, la nota de T3 sobre el RCT de 2023 debe actualizarse citando el hallazgo más reciente.
