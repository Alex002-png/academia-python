# Ficha de Misión — N7 · LLM Engineering

**Antes de nada:** lee completo `docs/guia-construccion-niveles.md` — este documento asume que ya lo hiciste. Aquí solo va lo específico de tu nivel.

**Tu carpeta:** `C:\Users\USER\academia-python-n7\` · **Tu rama:** `nivel/n7`. Confirma ambas (`git branch --show-current`) antes de escribir nada.

## Tu alcance — DOC-10 §8, ya aprobado (instáncialo, no lo rediseñes)

| Campo | Contenido |
|---|---|
| Módulos | **M1 · Inferencia y prompting** (APIs de modelos, streaming, structured output, costes) · **M2 · RAG completo** (ingesta, chunking, vector DBs, recuperación híbrida, generación) · **M3 · Fine-tuning y post-entrenamiento** (LoRA/QLoRA con recursos modestos y medición del efecto; RLHF/DPO — el porqué conceptual completo y práctica ligera) · **M4 · Evals y seguridad** (evaluación de sistemas LLM, guardrails, riesgos) |
| Competencias | C-N7-01…05 (ver DOC-01 para el texto exacto) |
| Proyecto | **Columna vertebral V1**: sistema RAG operativo de extremo a extremo, con design doc defendible y evaluación propia |
| Compuerta | Examen + proyecto + defensa del design doc |
| Bibliografía oficial | Cursos cortos DeepLearning.AI (RAG, Evals) · Hugging Face docs · documentación de proveedores |
| Carga estimada | ~4 meses · ~400 h (cifra de DOC-10, no auditada — verifica contra tu propio diseño real) |

**Nota de posición:** eres el primer nivel de **ET4 (N7-N10, "Sistemas de IA")**. A partir de aquí el proyecto de nivel deja de ser un capstone aislado — DOC-10 lo llama explícitamente **"columna vertebral V1"**: el sistema que construyes en N7 es la BASE que N8, N9 y N10 van a extender (V2, infraestructura desplegada, versión local) hasta culminar en N12. Diséñalo pensando en que otro nivel (construido en paralelo, no secuencialmente) va a asumir que existe y lo va a extender — documenta su arquitectura con ese cuidado extra.

## Riesgo técnico principal: este nivel es DOC-12 dominante, no la excepción

A diferencia de N4-N6 (mayormente Pyodide con excepciones), aquí la mayoría del contenido real ocurre fuera del navegador — más parecido en espíritu a N1.M4-M5 (Git/Linux) que a N0/N3, pero como el módulo COMPLETO de un nivel entero, no una porción. Verifica módulo por módulo con el criterio de DOC-12 §5, pero espera que la mayoría resuelva "DOC-12":

- **M1 (inferencia y prompting: APIs de modelos)** — llamar a una API real de un proveedor de modelos requiere una API key. Este Campus no tiene backend ni almacenamiento seguro de secretos — **decide explícitamente y documenta** cómo se maneja esto pedagógicamente (¿el estudiante usa su propia key en su propio entorno, con las advertencias de costo real que exige DOC-12 §2.5/§3? ¿hay un modo de práctica sin key real, con respuestas simuladas, para la parte introductoria?). No lo dejes implícito.
- **M2 (RAG completo: vector DBs, recuperación híbrida)** — una base de datos vectorial real (Pinecone/Qdrant/Chroma/etc.) es estado persistente fuera del navegador → DOC-12. El chunking/embeddings conceptual con vectores de juguete podría enseñarse en Pyodide como introducción antes de saltar al pipeline real.
- **M3 (fine-tuning/LoRA/QLoRA/RLHF/DPO)** — necesita GPU real, casi con certeza DOC-12 (mismo patrón que N5.M2 — puede que incluso convenga reusar el mismo entorno externo que decidiste allá, revisa `docs/mision-n5.md` si ya existe cuando llegues a este punto).
- **M4 (evals y seguridad)** — evaluación de sistemas LLM y guardrails puede tener una porción conceptual/Pyodide (escribir un evaluador simple, una métrica), pero evaluar un sistema real con llamadas reales es DOC-12.

**Encuadre obligatorio de M4 (seguridad/guardrails/riesgos):** este contenido es defensivo y educativo por diseño — enseña a RECONOCER y MITIGAR modos de fallo y riesgos de mal uso de sistemas LLM, nunca a explotarlos o producir contenido dañino. Mantén ese encuadre explícito en cada lección de M4, igual que ya es la práctica esperada en todo el proyecto.

## Herencia entrante (borrador — N4-N6 se construyen en paralelo, no asumas que ya congelaron)

De N6 (Transformers): el estudiante ya entiende arquitectura, tokenización, y puede leer un paper de modelo de lenguaje con soltura — tu M1 presupone esto, no lo reintroduce. Declara esto explícitamente como "pendiente de confirmación cuando N6 congele" en tu syllabus.

## Documentos a leer además de la guía maestra

`docs/10-plan-maestro-curriculo.md` §8 (tu ficha completa) · `docs/01-perfil-egreso-marco-competencias.md` (C-N7-01…05) · `docs/12-estandar-laboratorios-entorno-real.md` completo — es tu documento gobernante principal, no la excepción · `docs/syllabus/syl-n1.md` (M4/M5, tu precedente más cercano en espíritu de "laboratorio de entorno real completo") si quieres un ejemplo ya construido del molde DOC-12 aplicado.

## Primer paso concreto

Antes de escribir `docs/syllabus/syl-n7.md`, decide y documenta explícitamente cómo se maneja el manejo de credenciales/API keys en M1 — es una decisión de diseño que afecta la forma de cada lección de este nivel, y del resto de ET4. Después, investigación pedagógica real de la bibliografía oficial ya citada arriba.
