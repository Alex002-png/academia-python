# Investigación Pedagógica — Bibliografía Oficial de Nivel · N8 AI Systems

**Metodología** (DOC-11 §0bis / DOC-12 §0bis, sin modificación): WebFetch directo sobre dominios oficiales verificados (nunca blogs/agregadores SEO), WebSearch solo para ubicar la URL exacta cuando la estructura de la documentación cambió. Se registra explícitamente qué se rechazó y por qué — honestidad metodológica, nunca colección acrítica.

**Restricciones institucionales aplicadas** (decisión del Director, 2026-07-21, ver `docs/investigacion/n8-arquitectura-plataforma.md` §2): el currículo es **agnóstico de proveedor** — enseña principios generales con proveedores como implementaciones intercambiables — excepto **MCP**, tratado como estándar de facto (es literalmente de Anthropic y bibliografía oficial ya citada por DOC-10 §8).

---

## 1. MCP (Model Context Protocol)

**Fuentes oficiales verificadas:**
- [modelcontextprotocol.io](https://modelcontextprotocol.io/) — home oficial, metáfora "USB-C para aplicaciones de IA".
- [Architecture](https://modelcontextprotocol.io/docs/learn/architecture) — Host/Client/Server, data layer (JSON-RPC 2.0) vs. transport layer (stdio local / Streamable HTTP remoto), ejemplo real de `initialize` → negociación de capacidades → `tools/list` → `tools/call`.
- [Tools](https://modelcontextprotocol.io/docs/concepts/tools) — **"model-controlled"**, `inputSchema` (JSON Schema), `tools/call`, errores de protocolo vs. `isError:true`.
- [Resources](https://modelcontextprotocol.io/docs/concepts/resources) — **"application-driven"**, identificadas por URI, `resources/subscribe`.
- [Prompts](https://modelcontextprotocol.io/docs/concepts/prompts) — **"user-controlled"**, plantillas invocadas explícitamente (slash commands).

**Síntesis crítica:** el valor pedagógico central no es el protocolo en sí, sino la **taxonomía de control** que impone sobre quién decide disparar cada primitiva — tools=modelo, resources=aplicación, prompts=usuario. Es un problema de diseño de agentes generalizable, enseñable independientemente del proveedor. El patrón `tools/list`+`tools/call` con JSON Schema en `inputSchema` es estructuralmente idéntico al tool calling de Anthropic/OpenAI (§3) — MCP puede enseñarse como la generalización de ese patrón a nivel de transporte de red, dando coherencia curricular M1→M2.

**Rechazadas:** blogs de terceros (Medium, philschmid.de, codilime.com, webfuse.com); Wikipedia (solo contexto histórico, no autoridad técnica); `modelcontextprotocol.info` (dominio `.info` distinto al oficial `.io`, descartado explícitamente).

## 2. LangGraph

**Fuentes oficiales verificadas:**
- [Graph API](https://docs.langchain.com/oss/python/langgraph/graph-api) — `StateGraph` parametrizado con `State` (TypedDict/Pydantic), nodes como funciones que leen/escriben estado, edges fijos/condicionales, `.compile()`.
- [Persistence](https://docs.langchain.com/oss/python/langgraph/persistence) — checkpointers por `thread_id` (memoria corto plazo: continuidad, recuperación, time-travel); `InMemorySaver`/`SqliteSaver`/`PostgresSaver`; **Stores** para memoria de largo plazo cross-thread.
- [GRAPH_RECURSION_LIMIT](https://docs.langchain.com/oss/python/langgraph/errors/GRAPH_RECURSION_LIMIT) — `GraphRecursionError`, mitigación oficial `{"recursion_limit": N}`.
- [langgraph-supervisor](https://github.com/langchain-ai/langgraph-supervisor-py) — patrón jerárquico, `create_supervisor()`, handoffs vía tool calls, supervisores anidados.
- [langgraph-swarm](https://github.com/langchain-ai/langgraph-swarm-py) — patrón par-a-par, `create_handoff_tool`, objetos `Command`, recuerda agente activo.
- [interrupt() — blog oficial](https://www.langchain.com/blog/making-it-easier-to-build-human-in-the-loop-agents-with-interrupt) — pausa human-in-the-loop apoyada en el checkpoint persistido.

**Síntesis crítica:** el checkpointing **no es una feature añadida, es la base arquitectónica** — un solo mecanismo (`thread_id`+checkpointer) habilita memoria conversacional, recuperación ante fallos, HITL e interrupt/resume, cuatro problemas que frameworks más simples resuelven con mecanismos ad-hoc distintos. Excelente caso de estudio de diseño de sistemas para M2/M3. Supervisor vs. swarm mapea a un trade-off real documentado por los propios mantenedores: supervisor = trazabilidad/control centralizado (mejor para auditoría/guardrails, M5); swarm = flexibilidad sin punto único de control. `recursion_limit` es el ejemplo más citable de "circuit breaker" real en un framework de producción — base directa de M5.

**Rechazadas:** `langchain-ai.github.io/langgraph/reference/{supervisor,swarm}/` (URLs indexadas pero sin contenido cargable — reemplazadas por los README de GitHub de la misma organización); blogs de terceros (Medium, Augment Code, LaunchDarkly, dev.to) usados solo para ubicar URLs oficiales; issue de GitHub de bug de usuario (no documentación).

## 3. Tool/function calling — agnóstico de proveedor

**Fuentes oficiales verificadas:**
- [Tool use with Claude](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview) (Anthropic) — client tools vs. server tools, `input_schema`, bloques tipados `tool_use`/`tool_result` dentro de `content`, `tool_choice` (`auto`/`any`/`tool`/`none`), `strict:true`.
- [Function calling](https://developers.openai.com/api/docs/guides/function-calling) (OpenAI — dominio oficial vigente, confirmado por redirect 301 desde `platform.openai.com`) — `parameters` (JSON Schema), mensaje de rol dedicado `"tool"` con `tool_call_id`, streaming de deltas incrementales de `arguments`.

**Síntesis crítica:** ambos proveedores convergen en el **mismo esqueleto conceptual** (JSON Schema de parámetros, ciclo pedir→ejecutar→devolver→continuar) pero divergen en wire format — exactamente la diferencia que un currículo agnóstico debe hacer explícita: Anthropic inserta el resultado como bloque de contenido tipado dentro del mensaje; OpenAI usa un mensaje de rol `"tool"` separado. Ninguna es "la forma correcta" universal — es el principio agnóstico exacto que pide el Director. El streaming incremental de argumentos (JSON parcial reconstruido por deltas) es un patrón técnico común a ambos, enseñable como "parsing de JSON incompleto en tiempo real" más allá de cualquier API.

**Rechazadas:** help.openai.com, Vellum.ai, Mirascope.com (terceros); `platform.openai.com/docs/assistants/tools/function-calling` (API Assistants deprecated, se prefirió la guía vigente de Responses/Chat Completions).

## 4. Cursos DL.AI de agentes

**Fuentes oficiales verificadas:**
- [Agentic AI](https://www.deeplearning.ai/courses/agentic-ai/) (Andrew Ng) — 31 lecciones/9h55m. 5 módulos: (1) flujos agentic, grados de autonomía; (2) patrón de Reflexión; (3) Uso de Herramientas **con módulo explícito de MCP**; (4) evaluaciones sistemáticas, análisis de errores, coste/latencia; (5) planificación, multi-agentic, patrones de comunicación.
- [Design, Develop, and Deploy Multi-Agent Systems with CrewAI](https://www.deeplearning.ai/courses/design-develop-and-deploy-multi-agent-systems-with-crewai/) (João Moura, CEO CrewAI) — 38 lecciones/13h08m. 4 módulos incluyendo memoria/guardrails/hooks/**MCP** (M2) y "tactics for building reliable systems"+observabilidad+CI/CD (M3).
- [Multi AI Agent Systems with crewAI](https://www.deeplearning.ai/courses/multi-ai-agent-systems-with-crewai/) — curso original/gratuito, predecesor más básico (sin fiabilidad/observabilidad).

**Síntesis crítica:** ambos cursos vigentes de DL.AI documentan **MCP como contenido curricular explícito**, corroborando institucionalmente (desde fuente educativa independiente de Anthropic) la decisión de tratarlo como estándar de facto. La secuencia de Andrew Ng (reflexión → herramientas → planificación → multi-agente) valida la secuenciación M1-M3 ya planificada para N8. Dos cursos CrewAI no deben confundirse: el original (3h, sin fiabilidad) vs. el nuevo (13h, con módulo dedicado a "reliable systems" — relevante para M5).

**Rechazadas:** LinkedIn, foro community.deeplearning.ai, Medium ("mis notas de...") — comentario/marketing de terceros, usados solo para confirmar existencia del curso.

## 5. Fiabilidad / modos de fallo de agentes

**Fuentes oficiales y académicas verificadas:**
- [When Agents Do Not Stop: Uncovering Infinite Agentic Loops in LLM Agents](https://arxiv.org/abs/2607.01641) (arxiv, jul. 2026) — define **Infinite Agentic Loops (IAL)** como bucles no ordinarios emergentes de la interacción lógica-agente/framework/runtime/terminación, no bucles de programación simples. **IAL-SCAN**: análisis estático, Agentic Loop Dependence Graph, evaluado en 6,549 repos reales → 68 fallos IAL confirmados en 47 proyectos, 91.9% precisión.
- [Where LLM Agents Fail and How They Can Learn From Failures](https://arxiv.org/abs/2509.25370) (arxiv, sep. 2025) — **AgentErrorTaxonomy** (5 dimensiones: memoria, reflexión, planificación, acción, sistema), **AgentErrorBench** (dataset anotado sobre ALFWorld/GAIA/WebShop), **AgentDebug** (aislamiento de causa raíz) → +24% finalización correcta, +17% precisión de pasos intermedios, hasta +26% de mejora relativa.
- [GRAPH_RECURSION_LIMIT](https://docs.langchain.com/oss/python/langgraph/errors/GRAPH_RECURSION_LIMIT) (ya citado §2) — mitigación dinámica/reactiva en runtime.
- [interrupt() — blog oficial](https://www.langchain.com/blog/making-it-easier-to-build-human-in-the-loop-agents-with-interrupt) (ya citado §2) — 3 patrones: aprobar-tal-cual, rechazar-y-redirigir, editar-antes-de-ejecutar; middleware oficial con límites de tool-calls, retry, fallback, "TodoList planner".
- [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) (Anthropic, ensayo técnico) — distingue **workflows** (rutas de código predefinidas: prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer) de **agentes autónomos**; advierte explícitamente sobre coste y errores compuestos; salvaguardas: sandbox, guardrails, límites de iteraciones, checkpoints humanos, verificación de ground truth por paso.

**Síntesis crítica:** hallazgo más significativo del corpus completo — "When Agents Do Not Stop" da **nombre formal y evidencia cuantitativa** (68 casos reales) a un fenómeno enseñado hasta ahora solo anecdóticamente, permitiendo convertir M5 en un módulo con taxonomía citable, no una lista de advertencias genéricas. El contraste entre este paper (detección **estática**, preventiva, pre-deploy) y `recursion_limit` (detección **dinámica**, reactiva, runtime) enseña que la fiabilidad requiere **ambas capas de defensa** — ningún mecanismo aislado basta. "Building Effective Agents" es la fuente más citable para el mensaje central de M5 por venir de un proveedor de modelos pero formular la recomendación de forma agnóstica. AgentDebug aporta el dato empírico más fuerte para justificar enseñar debugging estructurado de agentes en vez de "prompt mejor" sin más.

**Rechazadas / no verificadas (honestidad metodológica):** arxiv 2601.22290 y arxiv 2606.08162 aparecieron en búsqueda inicial como potencialmente relevantes pero **no se verificaron por fetch directo** — se excluyen de la bibliografía consolidada hasta verificación futura, no se citan de memoria. Issue de GitHub de bug de usuario sobre `GRAPH_RECURSION_LIMIT` — descartado. Blogs de terceros sobre "circuit breaker en agentes" — usados solo para ubicar el blog oficial de LangChain.

---

## 6. Elevación académica (2026-07-22) — investigación adicional por instrucción directa del Director

**Contexto:** el Director exigió explícitamente un estándar comparable a MIT/Stanford/CMU/Berkeley/Harvard/Oxford/Cambridge/ETH Zürich/DeepLearning.AI/Fast.ai/Hugging Face/OpenAI/Anthropic — "por qué existe, cómo funciona internamente, cuándo falla, alternativas, trade-offs, uso profesional" en cada tema, no solo documentación de producto. Esta sección documenta la investigación real (WebSearch/WebFetch directo) que se integró en los 22 laboratorios para cumplir ese estándar, organizada por módulo.

**M1 — Agentes y tool calling:**
- **ReAct: Synergizing Reasoning and Acting in Language Models** (Yao, Zhao, Yu, Du, Shafran, Narasimhan, Cao — Princeton/Google, ICLR 2023, arxiv 2210.03629): genealogía académica real de la distinción workflow/agente — interleaving de razonamiento y acción, superando tanto al razonamiento puro como a la acción pura por separado.
- **Toolformer: Language Models Can Teach Themselves to Use Tools** (Schick et al., Meta AI, 2023, arxiv 2302.04761): mecanismo de entrenamiento autosupervisado que explica CÓMO un modelo aprende a decidir cuándo usar una herramienta. Limitación declarada por los propios autores: no supera consistentemente a un modelo base en todas las tareas.
- **Reflexion: Language Agents with Verbal Reinforcement Learning** (Shinn, Cassano, Gopinath, Narasimhan, Yao — NeurIPS 2023, arxiv 2303.11366): nombre formal del patrón LISTO/REINTENTAR — "refuerzo verbal" sin actualizar pesos, buffer de memoria episódica de auto-reflexiones. Límite real: depende de una señal de evaluación confiable.
- **OWASP Top 10 for Large Language Model Applications** (owasp.org/www-project-top-10-for-large-language-model-applications/): LLM07 "Insecure Plugin Design" y LLM08 "Excessive Agency", citados textualmente — el estándar de seguridad real de la industria para exactamente el problema de M1.T4.
- **Principios SOLID** (Robert C. Martin, Principio de Inversión de Dependencias): base formal de ingeniería de software del desacoplamiento de proveedor de M1.T3.

**M2 — Orquestación:**
- **Statecharts: A Visual Formalism for Complex Systems** (David Harel, Instituto Weizmann, 1987): teoría formal de Ciencias de la Computación detrás de StateGraph — la misma base de UML y sistemas de tiempo real crítico.
- **AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation** (Wu et al., Microsoft Research, 2023, arxiv 2308.08155): fuente académica de coordinación multi-agente vía conversación — supervisor mapea a su GroupChatManager, swarm a su modo two-agent extendido.
- **Distributed Snapshots: Determining Global States of Distributed Systems** (Chandy & Lamport, 1985): algoritmo fundacional de checkpoint/restart en sistemas distribuidos, base teórica de 40 años detrás del checkpointing de LangGraph.
- **JSON-RPC 2.0 Specification** (jsonrpc.org/specification): por qué MCP eligió método-en-cuerpo sobre un único endpoint en vez de REST — simplicidad, batch requests, transporte agnóstico.

**M3 — Memoria y planning (el módulo con el grounding más fuerte):**
- **MemGPT: Towards LLMs as Operating Systems** (Packer, Fang, Patil, Lin, Wooders, Gonzalez — UC Berkeley, 2023, arxiv 2310.08560): analogía sistema-operativo completa — virtual context management, jerarquía de memoria rápida/lenta.
- **Generative Agents: Interactive Simulacra of Human Behavior** (Park, O'Brien, Cai, Morris, Liang, Bernstein — Stanford, UIST 2023, arxiv 2304.03442): fórmula EXACTA de scoring de memoria — `score = α_recencia·recencia + α_relevancia·relevancia + α_importancia·importancia`, decaimiento exponencial γ=0,995/hora, relevancia por similitud coseno, importancia puntuada por el LLM. Mecanismo de "reflection" citado explícitamente.
- **STRIPS** (Fikes & Nilsson, 1971) y **PDDL** (estándar desde 1998): contraste real con planificación clásica de IA — garantías formales de completitud/optimalidad que el planning basado en LLM no tiene.
- **UC Berkeley CS188: Introduction to Artificial Intelligence** (contenido público del curso): referencia universitaria de planificación clásica.

**M4 — Multimodalidad y voz:**
- **Learning Transferable Visual Models From Natural Language Supervision (CLIP)** (Radford et al., OpenAI, 2021, arxiv 2103.00020): mecanismo real de tokenización de imagen en parches y embeddings compartidos imagen-texto — por qué el coste escala con resolución.
- **Robust Speech Recognition via Large-Scale Weak Supervision (Whisper)** (Radford et al., OpenAI, 2022, arxiv 2212.04356): limitaciones declaradas por los propios autores — alucinación de texto no hablado, texto repetitivo, variación de desempeño entre idiomas.

**M5 — Fiabilidad:**
- **Release It! Design and Deploy Production-Ready Software** (Michael T. Nygard, 2007, 2ª ed. 2018): origen real del patrón circuit breaker — casi 20 años de genealogía (Nygard → Fowler → Netflix Hystrix) detrás de `recursion_limit` y la detección de no-progreso.
- **AI Risk Management Framework (AI RMF 1.0), NIST AI 100-1** (nist.gov): estándar institucional real de una agencia gubernamental — 4 funciones GOVERN/MAP/MEASURE/MANAGE mapeadas explícitamente a los 4 pasos de auditoría de riesgos de M5.T4, más su extensión para sistemas agénticos.
- **Telerobotics, Automation, and Human Supervisory Control** (Thomas B. Sheridan, MIT Press, 1992): marco HITL/HOTL con décadas de investigación de factores humanos previa a los LLMs, aplicado a M5.T3.

**Honestidad metodológica:** 5 agentes de investigación en paralelo lanzados para esta fase fallaron por límite de sesión de la API (cuota agotada al spawnear 5 procesos pesados simultáneos) — la investigación se realizó secuencialmente en el hilo principal en su lugar, con el mismo rigor de WebFetch/WebSearch directo, solo con menor exhaustividad por fuente (2-3 búsquedas dirigidas por tema en vez de la exploración más amplia que se había encargado originalmente a los subagentes). Dos áreas quedaron con investigación más ligera que el resto por esta razón: no se profundizó en un curso universitario específico de multimodalidad más allá de CLIP/Whisper, y no se verificaron fuentes adicionales de multi-agent systems más allá de AutoGen (ej. MetaGPT, CAMEL, quedan como profundización futura si se desea ampliar M2).

## Bibliografía consolidada (para SYL-N8 y fichas por tema)

| Título | Autor/Organización | URL | Módulo |
|---|---|---|---|
| Architecture overview | MCP (Anthropic) | https://modelcontextprotocol.io/docs/learn/architecture | M2 |
| Tools / Resources / Prompts (concepts) | MCP (Anthropic) | https://modelcontextprotocol.io/docs/concepts/{tools,resources,prompts} | M2 |
| Graph API overview | LangChain/LangGraph | https://docs.langchain.com/oss/python/langgraph/graph-api | M2 |
| Persistence | LangChain/LangGraph | https://docs.langchain.com/oss/python/langgraph/persistence | M3 |
| GRAPH_RECURSION_LIMIT | LangChain/LangGraph | https://docs.langchain.com/oss/python/langgraph/errors/GRAPH_RECURSION_LIMIT | M5 |
| langgraph-supervisor / langgraph-swarm (README) | LangChain (langchain-ai) | https://github.com/langchain-ai/langgraph-{supervisor,swarm}-py | M2 |
| interrupt() — HITL | LangChain (blog oficial) | https://www.langchain.com/blog/making-it-easier-to-build-human-in-the-loop-agents-with-interrupt | M5 |
| Tool use with Claude | Anthropic | https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview | M1 |
| Function calling | OpenAI | https://developers.openai.com/api/docs/guides/function-calling | M1 |
| Building effective agents | Anthropic (engineering) | https://www.anthropic.com/engineering/building-effective-agents | M5 |
| Agentic AI (curso) | DeepLearning.AI / Andrew Ng | https://www.deeplearning.ai/courses/agentic-ai/ | M1-M3 (referencia) |
| Design, Develop, and Deploy Multi-Agent Systems with CrewAI | DeepLearning.AI / CrewAI | https://www.deeplearning.ai/courses/design-develop-and-deploy-multi-agent-systems-with-crewai/ | M2/M5 (referencia) |
| When Agents Do Not Stop (IAL) | arxiv 2607.01641 | https://arxiv.org/abs/2607.01641 | M5 |
| Where LLM Agents Fail (AgentErrorTaxonomy) | arxiv 2509.25370 | https://arxiv.org/abs/2509.25370 | M5 |
| ReAct: Synergizing Reasoning and Acting in Language Models | Yao et al. — Princeton/Google, ICLR 2023 | https://arxiv.org/abs/2210.03629 | M1 |
| Toolformer: Language Models Can Teach Themselves to Use Tools | Schick et al. — Meta AI, 2023 | https://arxiv.org/abs/2302.04761 | M1 |
| Reflexion: Language Agents with Verbal Reinforcement Learning | Shinn et al. — NeurIPS 2023 | https://arxiv.org/abs/2303.11366 | M1 |
| OWASP Top 10 for LLM Applications (LLM07, LLM08) | OWASP Foundation | https://owasp.org/www-project-top-10-for-large-language-model-applications/ | M1 |
| Statecharts: A Visual Formalism for Complex Systems | David Harel — Instituto Weizmann, 1987 | (libro/paper clásico, ver Science of Computer Programming 1987) | M2 |
| AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation | Wu et al. — Microsoft Research, 2023 | https://arxiv.org/abs/2308.08155 | M2 |
| Distributed Snapshots: Determining Global States of Distributed Systems | Chandy & Lamport, 1985 | (ACM TOCS, 1985) | M2 |
| JSON-RPC 2.0 Specification | JSON-RPC Working Group | https://www.jsonrpc.org/specification | M2 |
| MemGPT: Towards LLMs as Operating Systems | Packer et al. — UC Berkeley, 2023 | https://arxiv.org/abs/2310.08560 | M3 |
| Generative Agents: Interactive Simulacra of Human Behavior | Park et al. — Stanford, UIST 2023 | https://arxiv.org/abs/2304.03442 | M3 |
| STRIPS / PDDL (planificación clásica de IA) | Fikes & Nilsson 1971 / estándar PDDL 1998 | https://inst.eecs.berkeley.edu/~cs188/ (referencia de curso) | M3 |
| Learning Transferable Visual Models From Natural Language Supervision (CLIP) | Radford et al. — OpenAI, 2021 | https://arxiv.org/abs/2103.00020 | M4 |
| Robust Speech Recognition via Large-Scale Weak Supervision (Whisper) | Radford et al. — OpenAI, 2022 | https://arxiv.org/abs/2212.04356 | M4 |
| Release It! Design and Deploy Production-Ready Software | Michael T. Nygard, 2007/2018 | https://www.oreilly.com/library/view/release-it-2nd/9781680504552/ | M5 |
| AI Risk Management Framework (AI RMF 1.0) — NIST AI 100-1 | NIST, 2023 | https://www.nist.gov/itl/ai-risk-management-framework | M5 |
| Telerobotics, Automation, and Human Supervisory Control | Thomas B. Sheridan — MIT Press, 1992 | https://archive.org/details/teleroboticsauto0000sher | M5 |

*Pendiente si se desea ampliar: verificar arxiv 2601.22290 y 2606.08162 por fetch directo antes de citarlos; profundizar multi-agent systems más allá de AutoGen (MetaGPT, CAMEL) si se desea ampliar M2 más allá del estándar ya alcanzado.*
