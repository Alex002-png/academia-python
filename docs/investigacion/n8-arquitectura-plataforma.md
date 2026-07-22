# Decisiones de Diseño Institucional — Arquitectura de Plataforma N6-N12 y Agnosticismo de Proveedor

**Estado:** decisiones confirmadas por el Director (2026-07-21), instanciadas en N8, con impacto declarado en N6, N7, N9-N12 (construidos en paralelo). Este documento existe para que el Director las propague a `docs/guia-construccion-niveles.md` / DOC-10 y a las demás ventanas — yo (ventana N8) no tengo autoridad para editar esos documentos T1 (§12 de la guía), solo para documentar el hallazgo/decisión y aplicarla dentro de mi propio alcance.

## 1. El proyecto principal nunca es una aplicación — es una plataforma reutilizable

**Decisión del Director, verbatim (resumida):** *"El proyecto principal de la Academia nunca representará una aplicación concreta; representará una plataforma reusable sobre la cual puedan construirse múltiples aplicaciones."* Se descarta explícitamente cualquier dominio vertical (asistente de código, chatbot, app cerrada) como forma del proyecto de columna vertebral.

**Consecuencia de diseño:** la "AI Systems Platform" que el estudiante construye de N6 a N12 no resuelve un caso de uso — provee **capacidades reutilizables** (modelos, memoria, RAG, planificación, agentes, tool calling, evaluación, observabilidad, seguridad, despliegue, integración de herramientas) detrás de interfaces estables. El dominio de negocio (si el estudiante decide aplicar la plataforma a un caso concreto para probarla) es siempre una capa superior desechable, nunca parte del núcleo evaluado.

### 1.1 Arquitectura de 7 capas, con interfaz estable por capa

| Capa | Interfaz estable (contrato) | Nivel que la siembra | Niveles que la extienden (adaptador nuevo, interfaz sin cambios) |
|---|---|---|---|
| 1. Modelos | `ModelProvider` — `complete()`, `stream()`, `embed()` | N6 | N8 (adaptador multimodal: imagen/audio) · N10 (adaptador de modelo local/GGUF) |
| 2. Herramientas | `ToolRegistry` — schema + ejecutor | N6 (1-2 tools locales) | N7 (más tools) · N8 (MCP real: servers/clients, descubrimiento dinámico) |
| 3. Memoria | `MemoryStore` — corto/largo plazo | N7 (RAG = memoria de largo plazo, V1) | N8 (memoria episódica + planning multi-sesión) |
| 4. Orquestación | `Graph` — nodes/edges/estado | N8 (grafo de estados real, V2) | N9 (orquestación a escala) · N12 (multiagente empresarial) |
| 5. Evaluación/Observabilidad | `Evaluator` + trazas | N7 (evals básicos) | N8 (métricas de fiabilidad: loops, coste) · N9 (observabilidad de producción) · N11 (benchmarking científico) |
| 6. Seguridad/Gobernanza | `GuardrailPolicy` | N7 (guardrails básicos) | N8 (mitigación de fallos agénticos) · N12 (gobernanza empresarial, multi-tenant) |
| 7. Despliegue | `ServiceEndpoint` | N9 (APIs/colas/microservicios reales) | N10 (variante on-prem/local) |

**Principio de extensión (Open/Closed, ya enseñado en N2 · C-N2 diseño OOP):** cada nivel implementa un **adaptador nuevo detrás de una interfaz existente** o **introduce una interfaz nueva para una capa que antes no existía** — nunca reescribe una interfaz ya sembrada por un nivel anterior. Cada nivel documenta su extensión como un **ADR (Architecture Decision Record)** que el estudiante escribe y defiende.

### 1.2 Por qué este dominio (justificación contra los 4 criterios exigidos por el Director)

1. **Por qué evoluciona N6→N12 sin rediseño:** cada nivel añade exactamente una o dos capas nuevas o adaptadores nuevos sobre capas existentes (tabla 1.1) — la progresión de capacidades del estudiante (N6 agente básico → N12 arquitecto de sistemas) mapea 1:1 a la progresión de capas de la plataforma, sin que ningún nivel necesite invalidar el trabajo de los anteriores.
2. **Limitaciones de las alternativas descartadas:** un dominio vertical (asistente de código, chatbot de soporte) fuerza *feature creep* artificial en niveles avanzados (¿por qué un chatbot de soporte necesita GPU local en N10 o gobernanza multi-tenant en N12?) o exige un rediseño de mitad de camino — exactamente el riesgo que el Director pidió evitar. Un dominio "de juguete" (datos sintéticos) no sostiene el peso real de una defensa de arquitectura en N8/N12.
3. **Cómo cada nivel añade sin romper:** por el principio Open/Closed aplicado vía interfaces estables (1.1) — un ADR por nivel documenta la extensión exacta; ninguna interfaz sembrada se modifica de forma incompatible en un nivel posterior (regla verificable en la auditoría de cierre de cada nivel).
4. **Por qué representa el trabajo real de un AI Engineer:** es el patrón que los equipos de plataforma de IA construyen en la industria — infraestructura agéntica reutilizable, no una app cerrada — coherente con que N12 es literalmente "AI Systems Architect" y con que el propio DOC-10 ya describe N7-N10 como una "columna vertebral" que se extiende (V1→V2→infraestructura→local), ahora generalizado hacia atrás (N6) y hacia adelante (N11-N12).

### 1.3 Alcance real del proyecto (no vive en `index.html`)

El proyecto vive en el **repositorio propio del estudiante**, fuera del Campus — mismo patrón que ya usan los capstones de modalidad `real`/DOC-12 en N1 (campo `flujoDeGit` del objeto capstone, §4 de la guía maestra). El Campus evalúa por defensa de arquitectura + checklist de hitos, nunca por código embebido en `LEVEL8`.

## 2. Agnosticismo de proveedor — principio institucional para N6-N12

**Decisión del Director, verbatim (resumida):** *"La Academia enseña arquitecturas, conceptos y patrones de ingeniería. Los proveedores son implementaciones intercambiables de esos conceptos."* Ningún nivel enseña una API propietaria como si fuera universal; el código importante permanece desacoplado del proveedor (cambiar de proveedor = cambiar un adaptador/configuración, no reescribir la aplicación).

**Aplicación concreta en N8:**
- M1 (tool calling) enseña el ciclo abstracto (definir schema → modelo pide ejecución → ejecutar → devolver resultado → continuar) con **Anthropic y OpenAI como dos implementaciones de referencia comparadas explícitamente** (ver `n8-bibliografia-oficial.md` §3) — nunca una sola API presentada como "la forma correcta".
- **Excepción única y justificada: MCP.** Es el protocolo de Anthropic pero se enseña como estándar de facto, no como una opción entre varias — justificación: (a) DOC-10 §8 ya lo cita como bibliografía oficial de N8 por nombre; (b) es, estructuralmente, la generalización a nivel de transporte del mismo patrón agnóstico de tool calling (§3 de la investigación) — enseñarlo no acopla al estudiante a Anthropic como proveedor de *modelo*, lo prepara para un estándar de *conectividad* que ya adoptan ambos cursos de referencia de DL.AI (ver bibliografía §4); (c) no existe, al momento de esta investigación, un estándar competidor de adopción comparable — declarar esto explícitamente en vez de fingir neutralidad donde no la hay.
- El `ModelProvider` (capa 1, §1.1) es la interfaz técnica que materializa el principio: el estudiante implementa al menos 2 adaptadores concretos (ej. Anthropic + OpenAI, o Anthropic + un modelo local vía Ollama) contra la misma interfaz, demostrando portabilidad real, no solo declarada.

**Propagación pendiente (acción del Director, no mía):** este principio debe incorporarse a `docs/guia-construccion-niveles.md` (posiblemente un §15 nuevo) y comunicarse a las ventanas de N6, N7, N9-N12 — ninguna de ellas puede saberlo por sí sola. Mientras eso no ocurra, lo documento aquí y lo aplico solo dentro de mi propio alcance (N8), tratando la herencia de N6/N7 y la proyección hacia N9-N12 como "borrador pendiente de confirmación", mismo principio ya usado para la V1 de N7 no congelada (§13 de la guía, Paso 6/7).
