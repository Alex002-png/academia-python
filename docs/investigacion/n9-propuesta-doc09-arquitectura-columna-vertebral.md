# Propuesta de DOC-09 — Arquitectura de Referencia del Proyecto Columna Vertebral (N7–N12)

## Control del documento

| Campo | Valor |
|---|---|
| **Document Key** | Candidato a **DOC-09** (clave ya reservada por DOC-10 §12: "especificación completa del proyecto columna vertebral, versiones y contratos entre niveles" — nunca escrita hasta ahora) |
| **Versión / Estado** | **0.1.0-draft** · Aprobado en su **visión general** por el Director en conversación directa (2026-07-21), con 8 principios adicionales incorporados en esta misma versión. **No registrado todavía en el catálogo maestro DOC-00 §15.3** — ver §10 |
| **Origen** | Producido por la ventana de construcción de **N9** (`nivel/n9`), a solicitud explícita del Director, porque el proyecto de N9 ("operar la infraestructura de la columna vertebral de N7/N8") no podía diseñarse sin una visión arquitectónica previa que ninguna ventana había producido todavía |
| **Autoridad** | Instrucción directa del Director, 2026-07-21: *"Quiero definir primero la visión arquitectónica, porque ese proyecto será la columna vertebral de N7–N12 y cualquier decisión temprana condicionará todos los niveles posteriores."* |
| **Depende de** | DOC-10 §4 (grafo de niveles, V1/V2/local/final), DOC-10 §8-9 (módulos de N7-N12), DOC-01 (competencias C-N7…C-N12) |
| **Produce / desarrolla** | El contrato arquitectónico permanente que N7-N12 deben respetar al construir el proyecto columna vertebral — capas, puertos, ley de evolución |
| **Historial** | 0.1.0-draft (2026-07-21): primera redacción, con 8 principios del Director incorporados íntegros (independencia tecnológica de L0/L1, contratos explícitos para todo componente externo, observabilidad desde el día uno, sustituibilidad como criterio de calidad, evolución por extensión nunca por reemplazo, diseño para el hardware real de N9, reencuadre de visión: infraestructura reutilizable, no una aplicación concreta) |

## 0. Qué es esta plataforma y qué NO es

**Instrucción explícita del Director, verbatim, principio fundacional de todo lo que sigue:** *"El objetivo de esta plataforma no es construir un chatbot. Tampoco un asistente. Tampoco una aplicación concreta. El objetivo es construir una infraestructura reutilizable sobre la cual puedan desarrollarse múltiples sistemas inteligentes."*

Esto reencuadra cómo se lee cada "proyecto" de DOC-10 §8-9: el RAG de N7 y el sistema agéntico de N8 no son *el* entregable — son el **primer sistema de referencia** que valida que la plataforma (los puertos, las capas) funciona de verdad, del mismo modo que un framework web se valida construyendo una aplicación de ejemplo, sin que esa aplicación sea el producto. N9 no opera "un chatbot en producción" — opera **la plataforma**, usando ese sistema de referencia como carga de trabajo real para medir.

Nombre narrativo: se mantiene **"la Columna Vertebral"**, ya establecido en DOC-10. Nombre técnico sugerido para el paquete/repositorio (propuesta, no impuesta): `backbone`.

## 1. Principio rector: arquitectura hexagonal (Ports & Adapters)

Tres cosas que normalmente se mezclan se mantienen separadas desde el día uno:

1. **El vocabulario del dominio** (L0) — qué *es* un documento, una consulta, una acción de agente, un recuerdo.
2. **La lógica de aplicación** (L1) — qué *hace* el sistema, sin saber ni importarle con qué tecnología concreta.
3. **Los adaptadores** (L2) — cómo se conecta con el mundo real (un LLM, un vector store, una cola de eventos).

**Regla de independencia tecnológica (principios 1 y 2 del Director, ley sin excepciones):** L0 y L1 no importan, mencionan ni asumen ninguna tecnología concreta — ni FastAPI, LangGraph, MCP, Chroma, FAISS, PostgreSQL, Redis, Kafka, Docker, Kubernetes, Anthropic, OpenAI, Ollama, ni vLLM. L0 se escribe, idealmente, **solo con la biblioteca estándar del lenguaje** (en Python: `dataclasses`, `typing`) — si dentro de diez años el ecosistema de IA es irreconocible, L0 debe seguir siendo válido.

## 2. Las 5 capas

```
L4  Operación          │ colectores de observabilidad, alertas, HA, gobernanza, seguridad
L3  Servicio/Despliegue│ API HTTP → contenedores → orquestación → despliegue distribuido
L2  Adaptadores        │ implementaciones concretas de cada puerto (intercambiables)
L1  Núcleo de aplicación│ pipelines, agentes, memoria, evaluación — lógica pura, solo puertos
L0  Dominio             │ modelos de datos permanentes, cero dependencias externas
```

### L0 — Dominio (ejemplo ilustrativo, no exhaustivo ni definitivo)

```python
# L0 — cero imports externos, solo tipos del lenguaje.
@dataclass(frozen=True)
class Document:
    id: str; source: str; content: str; metadata: dict

@dataclass(frozen=True)
class Chunk:
    id: str; document_id: str; text: str; position: int
    embedding: list[float] | None   # el vector es un dato — no importa quién lo calculó

@dataclass(frozen=True)
class Query:
    id: str; text: str; trace_id: str   # toda operación es trazable: concepto permanente,
                                          # no atado a ninguna herramienta de tracing concreta
@dataclass(frozen=True)
class RankedChunk:
    chunk: Chunk; score: float

@dataclass(frozen=True)
class Message:
    role: str; content: str; trace_id: str   # "user"/"assistant"/"tool"/"system" — vocabulario
                                               # de negocio, no de un SDK de proveedor
@dataclass(frozen=True)
class ToolCall:
    name: str; arguments: dict

@dataclass(frozen=True)
class ToolResult:
    call: ToolCall; output: Any; error: str | None

@dataclass(frozen=True)
class Plan:
    steps: list[str]

@dataclass(frozen=True)
class MemoryItem:
    id: str; scope: str; content: str; trace_id: str  # scope: "episodica"/"semantica"/"trabajo"
                                                         # — categoría conceptual, no una tabla SQL
@dataclass(frozen=True)
class EvalCase:
    id: str; input: Query; expected: str | None; rubric: str | None

@dataclass(frozen=True)
class EvalResult:
    case_id: str; passed: bool; score: float; detail: str

@dataclass(frozen=True)
class DomainEvent:
    name: str; trace_id: str; payload: dict; timestamp: float
```

### L1 — Núcleo de aplicación: lógica + puertos (contratos)

**Principio 3 del Director, institucionalizado:** todo componente externo entra al sistema exclusivamente a través de una interfaz definida por el propio núcleo (`Protocol`/ABC en Python) — el núcleo declara *qué necesita*, nunca *de quién* lo obtiene.

```python
class LLMProvider(Protocol):
    def generate(self, messages: list[Message], **params) -> Message: ...
    def stream(self, messages: list[Message], **params) -> Iterator[str]: ...

class EmbeddingProvider(Protocol):
    def embed(self, texts: list[str]) -> list[list[float]]: ...

class VectorStore(Protocol):
    def upsert(self, chunks: list[Chunk]) -> None: ...
    def search(self, query_embedding: list[float], k: int) -> list[RankedChunk]: ...
    def delete(self, chunk_ids: list[str]) -> None: ...

class MemoryStore(Protocol):
    def remember(self, item: MemoryItem) -> None: ...
    def recall(self, scope: str, query: str, k: int) -> list[MemoryItem]: ...

class ToolExecutor(Protocol):
    def register(self, name: str, fn: Callable) -> None: ...
    def invoke(self, call: ToolCall) -> ToolResult: ...

class EventBus(Protocol):
    def publish(self, event: DomainEvent) -> None: ...
    def subscribe(self, event_name: str, handler: Callable) -> None: ...

class Orchestrator(Protocol):
    """Ejecuta un plan multi-paso. LangGraph es UNA implementación posible de
    este puerto (ver §7, N8) — nunca se importa fuera de su propio adaptador."""
    def run(self, plan: Plan, context: dict) -> list[Message]: ...

class TelemetrySink(Protocol):
    """Ver §4 — observabilidad desde el día uno."""
    def emit(self, event: DomainEvent) -> None: ...
    def timing(self, name: str, duration_ms: float, trace_id: str) -> None: ...
```

La lógica de L1 (`RAGPipeline`, `AgentExecutor`, `IngestionPipeline`, `Evaluator`, `MemoryManager`) se construye componiendo únicamente tipos de L0 y estos puertos — nunca un import de `langgraph`, `chromadb`, `anthropic`, `kafka`, etc. dentro de un archivo de L1.

### L2 — Adaptadores: implementaciones concretas, nombradas exactamente como pidió el Director

| Puerto | Implementaciones posibles (todas cumplen el mismo contrato) |
|---|---|
| `LLMProvider` | `AnthropicProvider` · `OpenAIProvider` · `OllamaProvider` · `VLLMProvider` |
| `VectorStore` | `ChromaVectorStore` · `QdrantVectorStore` |
| `MemoryStore` | `PostgresMemoryStore` · `RedisMemoryStore` |
| `EventBus` | `InProcessEventBus` (N7/N8) · `RedpandaEventBus`/`KafkaEventBus` (N9) |
| `Orchestrator` | `LangGraphOrchestrator` (default desde N8) · `HandRolledOrchestrator` (ejercicio de sustituibilidad) |
| `TelemetrySink` | `ConsoleTelemetrySink` (N7, JSON estructurado a stdout) · `PrometheusTelemetrySink` (N9) |

### L3 — Servicio/Despliegue

Una app (FastAPI u otro framework HTTP — nunca mencionado desde L0/L1) que **ensambla** objetos de L1 inyectándoles las implementaciones de L2 elegidas, y expone `/query`, `/ingest`, `/health`, `/metrics`. N9 puede descomponer esta app en servicios separados (ingesta ≠ query-serving) **solo donde el perfil de carga realmente lo justifique** — nunca descomponer por descomponer (mismo principio anti-relleno de DOC-11 §0 aplicado a arquitectura).

### L4 — Operación

Colectores que consumen lo que `TelemetrySink` ya emite desde N7; alertas; y, en N12, alta disponibilidad/seguridad/gobernanza sobre la misma L3 ya construida.

## 3. Observabilidad desde el día uno (principio 4)

N7 implementa y usa `ConsoleTelemetrySink` desde su primera línea de L1 — cada paso del pipeline (`RAGPipeline.retrieve`, `.generate`, cada `ToolCall`) emite un `DomainEvent` con `trace_id` y duración, aunque nadie lo consuma todavía más que la consola. N9.M4 no instrumenta nada retroactivamente: **sustituye** `ConsoleTelemetrySink` por `PrometheusTelemetrySink` (mismo puerto, otra implementación) y conecta Grafana encima. Esto es, en sí mismo, el primer ejercicio de sustituibilidad real que el estudiante ve funcionar en producción.

## 4. Sustituibilidad como criterio de calidad (principio 5)

**Regla institucionalizada:** ningún componente central del sistema depende de una tecnología concreta. Se declara *verificado*, no supuesto — mismo estándar de disciplina numérica que ya rige DOC-11/DOC-12 (§9 de la guía maestra): **todo puerto introducido en un nivel debe tener, antes de que ese nivel cierre, al menos dos implementaciones reales intercambiadas en caliente sin tocar una sola línea de L0/L1.** Ejemplos ya previstos en el mapa: `LLMProvider` nace con `AnthropicProvider` en N7, gana `OllamaProvider`/`VLLMProvider` en N9/N10 — swap verificado en vivo. `VectorStore` nace con `ChromaVectorStore`, N9 puede añadir `QdrantVectorStore` como mini-laboratorio de sustituibilidad si el tema de datos en movimiento lo justifica.

## 5. Ley de evolución: extender, nunca reiniciar (principio 6)

Cada nivel **añade** capacidades a L0-L4. Ninguno reinicia, reemplaza ni reconstruye desde cero lo que el nivel anterior ya validó. Protocolo cuando un nivel posterior encuentra que un puerto o modelo de L0/L1 real necesita cambiar:
1. Nunca se elimina ni se renombra un campo/método existente.
2. Se añade un campo opcional, o un puerto nuevo (`OrchestratorV2`) que convive con el anterior.
3. El cambio se documenta como decisión formal en el historial de este documento (mismo patrón que DOC-10 usa para sus PATCH — historial acumulativo, nunca borrado), citando qué nivel lo motivó y por qué.

## 6. Tabla de evolución por nivel

| Nivel | Qué añade | Capa | Puertos que introduce o extiende | Qué NO rompe |
|---|---|---|---|---|
| **N7** | `RAGPipeline` + `IngestionPipeline` a mano, tool calling básico, evals propias, memoria simple, expuesto por un servicio de un solo proceso | L0, L1, L2 (`AnthropicProvider`/`OpenAIProvider`, `ChromaVectorStore`, `ConsoleTelemetrySink`), L3 mínimo | `LLMProvider`, `EmbeddingProvider`, `VectorStore`, `ToolExecutor`, `TelemetrySink` | — (origen) |
| **N8** | `AgentExecutor` con planning multi-paso, coordinación multi-agente, multimodalidad; **LangGraph como adaptador de `Orchestrator`**, MCP como protocolo de `ToolExecutor` remoto | L1 (extiende), L2 (`LangGraphOrchestrator`) | `Orchestrator`, `MemoryStore` | El `RAGPipeline` de N7 se vuelve una herramienta más que el agente invoca vía `ToolExecutor` — no se reescribe |
| **N9** | Contenerización, descomposición en servicios donde aporte, `RedpandaEventBus` real para ingesta, `VLLMProvider` sirviendo sobre GPU real con latencia/throughput medidos, K8s local, `PrometheusTelemetrySink` | L3, L4 | `EventBus` (implementación real), `TelemetrySink` (implementación real) | L0/L1 sin tocar — el mismo pipeline de N7/N8, ahora operado |
| **N10** | `OllamaProvider`/adaptador local con cuantización medida se vuelve el backend de producción por defecto | L2 | `LLMProvider` (nueva implementación) | El resto del sistema no nota el cambio — eso es lo que un puerto debe garantizar |
| **N11** | Benchmarking y experimentación sistemática usando el sistema real como objeto de estudio | — | — (consume `Evaluator`) | — |
| **N12** | Multi-agente a escala empresarial, alta disponibilidad, seguridad/gobernanza | L3, L4 (maduros) | — (mismos puertos, implementaciones de nivel empresarial) | Sigue siendo el mismo L0/L1 del día 1 |

## 7. Herencia entrante formal que N9 exige de N7/N8

Como mínimo verificable, N7/N8 deben producir:
- L0/L1 según este documento, con al menos `AnthropicProvider` u `OpenAIProvider`, `ChromaVectorStore`, `ConsoleTelemetrySink` como implementaciones L2 reales.
- Un servicio L3 de un solo proceso con contrato estable: `POST /query`, `POST /ingest`, `GET /health`.
- Eventos de telemetría ya emitidos (aunque no consumidos) desde el primer pipeline funcional — condición de §3, no negociable.

Si al llegar a construir el proyecto de N9 esta versión real no existe todavía, se levanta un stub mínimo que cumpla exactamente este contrato (nunca la lógica completa) — laboratorio de infraestructura honesto, sin bloqueo.

## 8. Diseño para el hardware real de N9 (principio 7)

Objetivo: **RTX 5070 (12 GB VRAM) · Ryzen 5 9600X · 32 GB DDR5.**
- `VLLMProvider` (M2): modelo real cuantizado para caber en 12GB VRAM (p. ej. Qwen2.5-7B/14B o Llama 3.1-8B), throughput/latencia medidos bajo carga real (locust/vegeta) contra un adaptador ingenuo (HF pipeline directo) — antes/después con números propios.
- K8s (M1): `kind`/`minikube` local — gratis, usa CPU/RAM, cero riesgo económico.
- `RedpandaEventBus` (M3): Docker, compatible con protocolo Kafka real, huella mucho menor que Kafka+Zookeeper — cabe junto al resto del stack en 32GB RAM.
- Observabilidad (M4): Prometheus+Grafana en Docker, local, gratis.
- Cuando una práctica exceda el equipo (p. ej. servir dos modelos grandes simultáneamente): se documenta la limitación explícitamente y se propone la alternativa más cercana (modelo más pequeño, configuración reducida) — **nunca se reduce el nivel conceptual exigido**, condición explícita del Director.

## 9. Qué NO decide este documento

Nombres de dominio del sistema de referencia (qué "hace" el RAG/agente de N7/N8 concretamente), duración/densidad de cada módulo, contenido pedagógico específico — eso corresponde a cada `syl-nX.md`. Este documento fija el esqueleto técnico, no el temario.

## 10. Estado y pendiente de propagación — importante

Este documento vive, por ahora, **solo en el worktree `academia-python-n9` / rama `nivel/n9`**, por la misma disciplina de aislamiento que rige todo el proyecto (guía maestra §11): esta ventana no escribe en las carpetas de N7, N8, N10, N11 o N12. Para que sea efectivamente la referencia de esos niveles, el Director necesita:
1. Revisar y confirmar que esta redacción refleja fielmente lo acordado (ya aprobado en visión general; esta es su primera plasmación completa).
2. Copiarlo (o su ruta equivalente) a las ventanas de N7, N8, N10, N11, N12 — cada una lo necesita en su propio contexto, ya que ninguna tiene memoria de esta conversación.
3. Registrarlo formalmente como DOC-09 en el catálogo maestro (DOC-00 §15.3) cuando lo considere definitivo — hasta entonces, es una propuesta con aprobación de visión, no un documento Tier T1 sellado.

Mientras tanto, la ventana de N9 lo trata como su referencia de diseño vigente para todo el nivel.
