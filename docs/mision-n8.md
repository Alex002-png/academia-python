# Ficha de Misión — N8 · AI Systems

**Antes de nada:** lee completo `docs/guia-construccion-niveles.md` — este documento asume que ya lo hiciste. Aquí solo va lo específico de tu nivel.

**Tu carpeta:** `C:\Users\USER\academia-python-n8\` · **Tu rama:** `nivel/n8`. Confirma ambas (`git branch --show-current`) antes de escribir nada.

## Tu alcance — DOC-10 §8, ya aprobado (instáncialo, no lo rediseñes)

| Campo | Contenido |
|---|---|
| Módulos | **M1 · Agentes y tool calling** · **M2 · Orquestación** (LangGraph, MCP, protocolos multi-agente) · **M3 · Memoria y planning** · **M4 · Multimodalidad y voz** · **M5 · Fiabilidad** (modos de fallo de agentes: bucles, herramientas, costes; mitigaciones; riesgos de mal uso) |
| Competencias | C-N8-01…04 (ver DOC-01 para el texto exacto) |
| Proyecto | **Columna vertebral V2**: sistema agéntico completo que resuelve tareas de varios pasos con fiabilidad medida; arquitectura documentada y defendida |
| Compuerta | Examen + proyecto + defensa de arquitectura (rol Arquitecto) |
| Bibliografía oficial | LangGraph docs · MCP (Anthropic) · cursos de agentes DL.AI |
| Carga estimada | ~5 meses · ~500 h (cifra de DOC-10, no auditada — verifica contra tu propio diseño real) |

**Nota de posición:** tu proyecto es la **"columna vertebral V2"** — extiende la V1 que N7 construyó (un sistema RAG) hacia un sistema agéntico completo. Como N7 se construye en paralelo (no tienes su versión congelada todavía), diseña tu V2 basándote en lo que DOC-10 §8 ya dice que V1 debe ser (un RAG operativo end-to-end con design doc), y decláralo explícitamente como dependencia pendiente de confirmación — no bloquees tu propio avance esperando el freeze real de N7.

## Riesgo técnico: nivel 100% DOC-12, con librerías reales de orquestación

Todo tu contenido (LangGraph, MCP, protocolos multi-agente, tool calling, memoria/planning, multimodalidad/voz) requiere entorno real — instalación de librerías, llamadas a modelos reales, ejecución de procesos con estado. Verifica cada módulo contra el criterio de DOC-12 §5, pero no esperes encontrar contenido Pyodide-viable más allá de, quizás, alguna introducción conceptual muy acotada (ej. simular manualmente en Python puro qué es un grafo de estados antes de usar LangGraph de verdad).

- **M1 (agentes y tool calling)** — requiere una API de modelo real con function/tool calling. Mismo problema de manejo de credenciales que N7.M1 — si N7 ya decidió un patrón para esto (revisa `docs/mision-n7.md` y, si ya existe, `docs/syllabus/syl-n7.md`), reutilízalo por consistencia curricular en vez de inventar uno distinto.
- **M2 (orquestación: LangGraph, MCP)** — instalación real de librerías, estado persistente entre pasos del grafo. DOC-12 puro.
- **M3 (memoria y planning)** — probablemente requiere una base de datos o almacenamiento real para memoria persistente entre sesiones del agente → DOC-12.
- **M4 (multimodalidad y voz)** — APIs de audio/imagen reales, probablemente con costos asociados → aplica la advertencia obligatoria de DOC-12 §2.5/§3 sobre acciones con costo económico real desde el diseño, no como añadido posterior.
- **M5 (fiabilidad: modos de fallo, mitigaciones, riesgos de mal uso)** — **encuadre obligatorio, igual que N7.M4**: contenido defensivo y educativo — enseña a reconocer y mitigar bucles infinitos, costes descontrolados, fallos de herramientas y riesgos de mal uso de sistemas agénticos, nunca a construir agentes dañinos o evadir controles de seguridad. Este módulo es, de hecho, el lugar natural para ejercicios de "encuentra y corrige el bug de fiabilidad" — depuración real de un agente que falla, no solo teoría.

## Herencia entrante (borrador — N7 se construye en paralelo, no asumes que ya congeló)

De N7: manejo de APIs de modelos, RAG operativo, evaluación de sistemas LLM. Tu M1 (agentes y tool calling) presupone que el estudiante ya sabe llamar a un modelo real y evaluar su output — no reintroduzcas eso, constrúyelo encima.

## Documentos a leer además de la guía maestra

`docs/10-plan-maestro-curriculo.md` §8 (tu ficha completa) · `docs/01-perfil-egreso-marco-competencias.md` (C-N8-01…04) · `docs/12-estandar-laboratorios-entorno-real.md` completo · `docs/mision-n7.md` (tu predecesor inmediato — revisa especialmente su decisión sobre manejo de credenciales, para mantener consistencia).

## Primer paso concreto

Antes de escribir `docs/syllabus/syl-n8.md`, define el diseño de la "columna vertebral V2" en términos concretos (qué tarea de varios pasos resuelve, cómo se mide "fiabilidad" de forma verificable) — DOC-10 exige que sea defendible en un rol de Arquitecto, así que el proyecto necesita esa profundidad de diseño desde el principio, no como ocurrencia tardía. Después, investigación pedagógica real de la bibliografía oficial ya citada arriba.
