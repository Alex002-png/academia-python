# Investigación Pedagógica — N10.M1.T1 (expansión) · Panorama económico y ecosistema de modelos

*Adenda a `docs/investigacion/n10-m1-runtimes-locales.md`, conforme a DOC-12 §0bis, motivada por la directiva explícita del Director (2026-07-22) de elevar el nivel al estándar de MIT/Stanford/CMU/Berkeley — "no quiero contenido correcto, quiero contenido excelente", con investigación real obligatoria antes de escribir. Investigación por WebSearch/WebFetch, 2026-07-22.*

## 1. Economía real de inferencia local vs. cloud

**Fuente sólida #1 — a16z, "LLMflation"** (Guido Appenzeller, 2024-11-12, `a16z.com/llmflation-llm-inference-cost`): metodología explícita — empareja modelos por score de MMLU y rastrea precio histórico por millón de tokens. Hallazgo verificado: para capacidad equivalente a GPT-3 (MMLU ~42), el precio cayó de $60/millón de tokens (nov. 2021) a $0.06/millón (Llama 3.2 3B) — caída de 1000x en 3 años (~10x/año). Para nivel GPT-4 (MMLU ~83), caída de ~62x desde marzo 2023.

**Fuente sólida #2 — paper arXiv 2606.11690**, "Beyond Per-Token Pricing: A Concurrency-Aware Methodology for LLM Infrastructure Cost Estimation": modela el costo efectivo de self-hosting como función de la utilización REAL (Little's Law), no la utilización pico teórica. Resultado: el costo efectivo varía entre $0.21 y $15.25 por millón de tokens de salida según la carga — una "penalización por subutilización" de 2.5x a 24x en cargas empresariales bajas-moderadas.

**Honestidad metodológica obligatoria (hallazgo central de esta investigación):** NO existe consenso técnico real sobre un "punto de equilibrio" en tokens/mes para migrar de API a self-hosted. La mayoría de cifras que circulan (6.8M, 50-200M, 500M, 11,000M tokens/mes) provienen de un clúster de blogs sin autor identificado, sin metodología publicada, mutuamente contradictorias — contenido generado para SEO, exactamente lo que el Director exige descartar explícitamente ("nunca aceptes información solo porque aparece en un blog"). Lo que SÍ sostiene evidencia real: el break-even no es un número de tokens fijo, es función de la utilización sostenida del hardware.

**Factores más allá del costo por token** (BentoML, TechTarget — fuentes de infraestructura neutrales, no marketing): las APIs serverless abstraen escasez de GPU/cuotas/aprovisionamiento; el self-hosting se justifica por modelos no soportados por proveedores, auditabilidad, o control fino del stack. El costo de ingeniería domina sobre el costo de GPU: un ML engineer senior cuesta $200,000+/año, y mantener vLLM/llama.cpp en producción exige monitoreo continuo de drift, gestión de incidentes, migraciones — trabajo invisible en la factura del hardware. No existe un case study público y auditable de una migración real documentada punto por punto — declarado como ausencia real, no rellenado.

## 2. Panorama del ecosistema de modelos — licencias y benchmarks

**Licencias reales verificadas en fuente oficial:**
- **Llama (Meta)** — Community License, **NO aprobada por OSI** (Open Source Initiative lo declaró explícitamente, `opensource.org/blog/metas-llama-license-is-still-not-open-source`, feb. 2025: viola Freedom 0, discrimina por región, restringe campos de uso). Límite de 700M usuarios activos mensuales que obliga a licencia especial.
- **Qwen (Alibaba)** — mixto: 0.5B-32B y la mayoría de Coder bajo Apache 2.0 (sí OSI); Qwen2.5-72B y 3B bajo "Qwen License" propia con cláusula comercial a partir de 100M usuarios activos mensuales.
- **Mistral** — histórico mixto; desde Mistral 3 (2025-12-02, comunicado oficial `mistral.ai/news/mistral-3`) toda la familia bajo Apache 2.0 sin restricciones.
- **Gemma (Google)** — "Gemma Terms of Use" propia, NO OSI. Permite uso comercial pero con Prohibited Use Policy y derecho unilateral de Google a restringir acceso.
- **Phi (Microsoft)** — MIT confirmada en model cards oficiales de HuggingFace, sí OSI, sin restricciones de escala.

**Crítica seria a benchmarks públicos:**
- MMLU-CF (arXiv 2412.15194): al descontaminar MMLU (reformulación, mezcla de opciones, "ninguna de las anteriores"), el rendimiento cae de >90% a 68-77%; GPT-4o pasa de 88.0% a 73.4%. Johns Hopkins/NAACL 2024: 29.1% de ítems de MMLU muestran contaminación.
- "The Leaderboard Illusion" (Kapoor et al., arXiv 2504.20879, mayo 2025, coautor del libro "AI Snake Oil" — top 10 de Nature 2024): Meta testeó 27 variantes privadas de Llama antes de publicar, eligiendo el mejor resultado; Google+OpenAI recibieron ~40% de los datos de Chatbot Arena combinados, contra ~30% para 83 modelos abiertos juntos — gaming documentado, no progreso real.

**Cómo eligen modelo equipos de ingeniería reales** (fuentes primarias, blogs técnicos de empresa, no marketing): GitHub (Copilot) usa >4,000 tests offline propios, ~100 repos con bugs deliberados, LLM-as-judge sobre >1,000 preguntas técnicas, pruebas canary internas antes de lanzamiento público. Ramp y Zapier construyen benchmarks propios atados a su carga de trabajo real, rechazando explícitamente el leaderboard público como criterio suficiente.

## 3. Decisiones de diseño derivadas

| Decisión | Evidencia | Solidez |
|---|---|---|
| Enseñar que "no hay consenso de break-even" como hallazgo central, no ocultarlo | Verificado por ausencia real en fuentes serias + presencia de un clúster SEO contradictorio | Evidencia muy sólida (ausencia confirmada activamente, no pereza de búsqueda) |
| Usar LLMflation + el paper de concurrencia como las dos anclas cuantitativas reales | Ambas con metodología explícita, publicadas, citables | Evidencia muy sólida |
| Enseñar licencias reales de cada familia de modelo, no "son todos open source" | Verificado licencia por licencia contra fuente oficial (OSI, model cards, comunicados) | Evidencia muy sólida |
| Enseñar la crítica a benchmarks (contaminación, gaming de leaderboard) como parte central, no nota al margen | Dos papers peer-reviewed/arXiv serios, con cifras verificables | Evidencia muy sólida |
| Enseñar el patrón "construye tu propio arnés de evaluación" con casos reales (GitHub/Ramp/Zapier) | 3 fuentes primarias independientes con el mismo patrón | Evidencia sólida (convergencia real, no una sola fuente) |

**Falsabilidad pedagógica:** si en el futuro emerge un análisis de break-even con metodología pública y verificable (no un blog SEO), esta lección se actualiza para citarlo — la ausencia actual es un estado del conocimiento, no una afirmación permanente.
