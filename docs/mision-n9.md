# Ficha de Misión — N9 · Sistemas Distribuidos

**Antes de nada:** lee completo `docs/guia-construccion-niveles.md` — este documento asume que ya lo hiciste. Aquí solo va lo específico de tu nivel. Nota especialmente su prioridad explícita de nivel/dificultad/profundidad (callout al inicio y §8) — aplica de lleno a tu nivel.

**Tu carpeta:** `C:\Users\USER\academia-python-n9\` · **Tu rama:** `nivel/n9`. Confirma ambas (`git branch --show-current`) antes de escribir nada.

## Tu alcance — DOC-10 §8, ya aprobado (instáncialo, no lo rediseñes)

| Campo | Contenido |
|---|---|
| Módulos | **M1 · Orquestación a escala** (Kubernetes) · **M2 · Model serving** (vLLM, Ray; latencia y throughput medidos) · **M3 · Datos en movimiento** (colas, Kafka) · **M4 · Observabilidad y escalabilidad** (logs, métricas, alertas; trade-offs de coste con mediciones propias) |
| Competencias | C-N9-01…04 (ver DOC-01 para el texto exacto) |
| Proyecto | La infraestructura de la columna vertebral: desplegada, observada y operada, con mejoras antes/después demostradas |
| Compuerta | Examen + proyecto + defensa (incluye diagnóstico de una arquitectura ajena) |
| Bibliografía oficial | *Designing Data-Intensive Applications* (Kleppmann) · MLOps Zoomcamp · docs K8s/vLLM |
| Carga estimada | ~4 meses · ~400 h (cifra de DOC-10, no auditada — verifica contra tu propio diseño real) |

**Nota de posición:** tu proyecto no es un sistema nuevo — es **desplegar, observar y operar la infraestructura de la columna vertebral que N7/N8 ya construyeron** (conceptualmente, según el alcance ya aprobado de DOC-10, aunque esas ventanas trabajen en paralelo y no tengas su versión congelada). Diseña tu proyecto sobre una arquitectura razonable que TÚ definas como "la columna vertebral hasta este punto" si la real de N7/N8 no está disponible cuando la necesites, y decláralo explícitamente como supuesto de trabajo.

## Riesgo técnico y de diseño: infraestructura real con posible costo económico real

Kubernetes/vLLM/Ray/Kafka en su forma de producción típicamente corren en un proveedor cloud real y facturable. **DOC-12 §2.5/§3 exige advertencia ⚠️ explícita antes de cualquier acción con costo económico real — no como nota al pie, como parte del diseño desde el principio.** Antes de comprometer el diseño de cada módulo:

- **Prioriza alternativas gratuitas/locales cuando sean pedagógicamente equivalentes** (mismo principio que DOC-12 §2.5 ya recomienda: `minikube`/`kind` en vez de un cluster cloud real para M1; Kafka/Redpanda en Docker local para M3). Reserva el cloud real facturable para donde de verdad no haya alternativa razonable, y documenta esa decisión explícitamente.
- **M2 (model serving: vLLM, latencia/throughput medidos)** — esto exige medición REAL (no estimada) de latencia/throughput bajo carga. Diseña el laboratorio para que el estudiante mida de verdad con herramientas reales, no que lea números ya calculados — es el mismo principio de verificación empírica que rige todo el proyecto, aplicado aquí a rendimiento de sistemas en vez de a matemática.
- **M4 (observabilidad: logs, métricas, alertas; trade-offs de coste)** — "con mediciones propias" en DOC-10 es explícito: el estudiante compara configuraciones antes/después con números reales que él mismo produjo, no una tabla ya dada.
- Todo este nivel es **DOC-12** — no esperes contenido Pyodide más allá de alguna introducción conceptual muy acotada.

## Herencia entrante (borrador — N7/N8 se construyen en paralelo, no asumas que ya congelaron)

De N7: un sistema RAG operativo (V1). De N8: ese mismo sistema extendido a agéntico (V2), con fiabilidad medida. Tu nivel presupone que existe ALGO desplegable — si no puedes confirmar la forma exacta de V1/V2, define tú una versión razonable basada en el alcance de DOC-10 §8 para N7/N8, decláralo como supuesto, y sigue adelante sin bloquearte.

## Documentos a leer además de la guía maestra

`docs/10-plan-maestro-curriculo.md` §8 (tu ficha completa) · `docs/01-perfil-egreso-marco-competencias.md` (C-N9-01…04) · `docs/12-estandar-laboratorios-entorno-real.md` completo, con atención especial a §2.5 (advertencias de costo real) y §1 (duración desglosada por componente — mide de verdad cuánto toma cada laboratorio de infraestructura, no lo estimes de un tirón).

## Primer paso concreto

Antes de escribir `docs/syllabus/syl-n9.md`, decide y documenta qué porción de cada módulo puede enseñarse con herramientas locales/gratuitas (minikube, Docker Compose, Redpanda) frente a lo que de verdad requiere un proveedor cloud real — esa decisión determina la ficha de control completa de cada laboratorio (DOC-12 §1: Entorno(s) objetivo, prerrequisitos, advertencias). Después, investigación pedagógica real de la bibliografía oficial ya citada arriba.
