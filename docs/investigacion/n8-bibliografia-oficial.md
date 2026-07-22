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

*Pendiente si se desea ampliar: verificar arxiv 2601.22290 y 2606.08162 por fetch directo antes de citarlos.*
