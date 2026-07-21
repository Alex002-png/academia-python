# DOC-10 — Plan Maestro del Currículo (PMC)

## Control del documento (conforme a DOC-00 §15.4)

| Campo | Valor |
|---|---|
| **Document Key** | DOC-10 · Tier T1 (incorporado al catálogo 15.3 por la MINOR 1.1.0; la clave DOC-04 permanece asignada al Contrato del Tutor IA) |
| **Versión / Estado** | **1.0.3** · ✅ **Aprobado** por el Director (2026-07-18; 2 PATCH el 2026-07-21) — **plan de estudios oficial de la Academia** |
| **Autoridad de origen** | DOC-00 §13 (ontología) y §14 (modelo temporal y tabla normativa de niveles) + DOC-01 (catálogo canónico de competencias) |
| **Depende de** | DOC-00 (§6 perfil, §13, §14, 16.5, 17.6 — ley) · DOC-01 (competencias, por referencia) · DOC-02 (instrumentos, por referencia) · DOC-03 (método, por referencia) |
| **Produce / desarrolla** | El plan de estudios oficial: desglose modular N0–N12, ruta de proyectos, capstones de etapa, bibliografía oficial y trazabilidad curricular. **Cada SYL-Nx futuro instancia su nivel tomando el interior de este documento** |
| **AC aplicables (9.7)** | AC-05 (todo alcanzable con hardware de consumo + nube gratuita) · AC-07/AC-14 (un solo autor-mantenedor: registro vivo mínimo) · AC-10 (progresión lingüística §18) · AC-12 · AC-15 (nada de este plan exige servicios externos no opcionales) |
| **Naturaleza** | **Documento de arquitectura curricular, no de planificación temporal** (principio rector del Director): describe la estructura permanente de la carrera; no describe clases ni secuencias didácticas — eso pertenece a los syllabus. Las duraciones citadas son estimaciones (14.2: el calendario estima, la compuerta decide) |
| **Historial** | 0.1.0-draft (2026-07-18): redacción conforme al ADR aprobado con sus 3 decisiones y la ampliación de alcance del Director (perfiles por etapa, mapa de dependencias, trazabilidad cuádruple, roadmap de evolución, capstones) · 0.2.0-draft (2026-07-18): Auditoría Curricular Extrema (comité, mandato de ruptura) — 6 correcciones imprescindibles: módulo de datos en N4 (NumPy/pandas/EDA); concurrencia y seguridad OWASP en N2.M1; fundamentos de SO en N1.M5; post-entrenamiento RLHF/DPO en N7.M3; jerarquía de memoria en N10.M3; regla de perennidad capacidades/herramientas en §1 · **1.0.0 (2026-07-18): aprobado por el Director como plan de estudios oficial. Decisión institucional asociada: la construcción institucional de la Academia queda definitivamente cerrada (EVT-021); todo desarrollo futuro de niveles, clases, laboratorios y proyectos sigue estrictamente este mapa; revisiones estructurales solo por evidencia objetiva de la enseñanza real** · **1.0.1 (2026-07-18): PATCH administrativo autorizado por el Director durante el diseño arquitectónico de SYL-N2** — el interior modular de N2 se refina de 4 a 5 módulos para que cada uno represente una transformación cognitiva propia (seguridad y concurrencia dejan de ser sub-temas de "Backend" y ganan módulo propio), y la calidad automática (testing) se redefine como hilo transversal desde el primer módulo — con un punto de consolidación formal propio —, en vez de módulo secuencial final. **El alcance temático de N2 no cambia**; solo su distribución interna, elevada y aprobada conforme a NNR-13/DP-15 · **1.0.2 (2026-07-21): PATCH administrativo autorizado por el Director durante el diseño arquitectónico de SYL-N3** — se añade **Seeing Theory** (seeing-theory.brown.edu, Daniel Kunin/Brown University) a la bibliografía oficial de N3 §6, verificada por fetch directo (6 capítulos: Basic Probability, Compound Probability, Probability Distributions, Frequentist Inference, Bayesian Inference, Regression Analysis). Hallazgo que motivó el PATCH: ni 3Blue1Brown ni Mathematics for ML (Deisenroth) tienen un curso estructurado de probabilidad/estadística equivalente a su cobertura de álgebra/cálculo — Khan Academy (declarada "refuerzo") quedaba como única fuente estructural real para M3, un desbalance no deseado dado que el resto de N3 se apoya en fuentes de intuición visual. Seeing Theory cierra ese hueco con el mismo espíritu (visualizaciones interactivas) que 3Blue1Brown, ahora para M3. El alcance temático de N3 no cambia; solo se completa su bibliografía · **1.0.3 (2026-07-21): PATCH administrativo autorizado por el Director tras el cierre de la construcción real de N3** — se corrige la "Carga estimada" de N3 §6, de "~3 meses · ~300h" a "~4,6 meses · ~20 semanas". Hallazgo que motivó el PATCH: la Auditoría Integral de N3 (`docs/informes/n3-auditoria-integral.md`) encontró que SYL-N3 §1/§3.8 ya había revisado honestamente esta cifra al construir el contenido real (la densidad ampliada de M1-M3 — 3 días/tema en vez de 2, justificada en investigación real de práctica distribuida, Rohrer & Taylor 2007; Rohrer, Dedrick & Stershic 2015 — sube la duración real un ~53% frente a la estimación original), pero ese ajuste nunca se propagó al documento madre. Se declaró explícitamente como hallazgo pendiente de decisión del Director en 3 de los 4 informes de auditoría (no autocorregido en el momento, por ser DOC-10 un documento Tier T1 ya sellado) — el Director autorizó el PATCH al ser consultado directamente. **El alcance temático de N3 no cambia; solo se corrige su duración estimada para reflejar la realidad ya construida y verificada** |

---

## 1. Principio rector y naturaleza

> **El PMC no es un documento de planificación temporal; es un documento de arquitectura curricular.** No describe clases individuales ni secuencias didácticas detalladas: describe la estructura permanente de la carrera. Los syllabus (SYL-Nx) desarrollan cada nivel con el grado de detalle pedagógico correspondiente, y DOC-03 dicta cómo se vive cada tema.

Reglas de consumo: **(a)** ningún syllabus puede contradecir este mapa — si un nivel necesita algo que el PMC no prevé, se eleva (NNR-13), no se improvisa; **(b)** todo lo citado de otros documentos es referencia, no copia (DP-07): las competencias viven en DOC-01, los instrumentos en DOC-02, el método en DOC-03, las identidades de nivel en §14; **(c)** bibliografía, cargas estimadas y anclas externas son **registro vivo** (patrón 14.7): se recalibran con la experiencia real sin re-aprobación; **(d) regla de perennidad** — los módulos enseñan **capacidades permanentes**; las herramientas concretas que citan (FastAPI, PyTorch, LangGraph, vLLM, Ollama…) son instancias vigentes de época, actualizables como registro vivo: cuando el ecosistema cambie, se sustituye la herramienta, jamás el módulo ni su capacidad (AC-13).

## 2. Visión curricular global: el argumento de titulación

La carrera responde una sola pregunta: **¿qué secuencia de experiencias convierte a un principiante absoluto en un ingeniero capaz de diseñar, desarrollar, desplegar y mantener sistemas de IA en entornos profesionales?** La respuesta tiene cinco movimientos, uno por etapa — cada uno transforma la *forma de pensar*, no solo el temario:

| Etapa | Movimiento | Transformación del pensamiento | El estudiante pasa de… a… |
|---|---|---|---|
| **ET1 · Fundamentos** (N0–N1) | Aprender a programar | De ejecutar instrucciones a **modelar problemas** en código | usuario → programador |
| **ET2 · Ingeniería** (N2–N3) | Aprender el oficio | De que funcione a **que funcione bien, para otros, en producción** — y adquirir el lenguaje matemático de la IA | programador → ingeniero de software |
| **ET3 · IA** (N4–N6) | Aprender la disciplina | De usar librerías a **implementar desde cero y explicar la matemática** de lo que implementa | ingeniero → ML engineer |
| **ET4 · Sistemas de IA** (N7–N10) | Aprender a construir con y para modelos | De entrenar modelos a **diseñar, operar y optimizar sistemas completos** alrededor de ellos | ML engineer → AI engineer |
| **ET5 · Maestría** (N11–N12) | Aprender a crear y a decidir | De consumir conocimiento a **producirlo (research) y a arquitecturar bajo restricciones reales** | AI engineer → **AI Systems Architect** |

**Roadmap de evolución del estudiante** (síntesis; el detalle en los bloques de etapa): principiante absoluto → *(N0)* valida vocación con su primer proyecto → *(N1)* piensa computacionalmente → *(N2–N3)* construye software profesional y lee matemática → *(N4–N6)* implementa la IA desde sus fundamentos → *(N7–N8)* construye sistemas LLM y agénticos reales → *(N9–N10)* los despliega, opera y hace soberanos → *(N11)* reproduce investigación y contribuye a open source → *(N12)* diseña arquitecturas completas, supera entrevistas internacionales y defiende el recorrido íntegro. La graduación es el umbral 6.6 del Blueprint: recorrido completo + evidencia total + defensa final + certificación.

## 3. Lectura curricular del perfil de egreso

Las 7 dimensiones del perfil (§6, desplegadas en las 64 competencias de DOC-01) se construyen así a lo largo de la carrera — dónde nace y dónde culmina cada una:

| Dimensión | Nace en | Columna vertebral en | Culmina en |
|---|---|---|---|
| D1 · Construir (código→sistemas) | N0 | N1–N2 (software) · N4–N6 (IA) · N7–N10 (sistemas) | N12 (sistema completo operativo) |
| D2 · Decidir y diseñar | N2 (justificar el backend) | N6–N9 (comparar, arquitecturar, medir) | N12 (system design en vivo) |
| D3 · Razonar y depurar | N0 (tracebacks) | N1 (descomposición) · N4 (diagnóstico de modelos) | N12 (calibración de certeza) |
| D4 · Oficio profesional | N0 (primer proyecto) | N1 (Git) · N2 (testing/CI) · N4 (gestión) | N11 (open source real) |
| D5 · Honestidad y seguridad | N4 (sesgos) | N7 (guardrails) · N8 (riesgos de agentes) | N11–N12 (reporte fiel, límites declarados) |
| D6 · Comunicar | N2 (documentar es) | N5 (dos audiencias) · N7 (inglés profesional) | N12 (entrevista internacional completa) |
| D7 · Aprender y investigar | N0 (inglés básico) | N3/N6 (leer papers) · N10 (evaluar ecosistema) | N11–N12 (frontera con autonomía, vigencia) |

**Perfil profesional esperado al cierre de cada etapa** *(ampliación del Director; equivalencias de mercado orientativas — el tribunal real son los validadores externos, 4.2)*:

| Cierre de | El estudiante es capaz de… | Equivalencia profesional |
|---|---|---|
| **ET1** | Construir software completo en Python con base CS (algoritmos, Git, Linux, SQL, redes), publicado y explicado | Junior Developer (trainee) |
| **ET2** | Entregar un backend desplegado con estándar de industria (testing, contenedores, CI/CD) y leer la matemática de la IA | Backend Developer Jr |
| **ET3** | Implementar ML/DL/transformers desde cero, entrenar con metodología rigurosa y leer papers fundacionales | ML/DL Engineer Jr |
| **ET4** | Construir, desplegar, operar y optimizar sistemas LLM/agénticos completos, en nube y en local | AI Engineer · MLOps/Inference Engineer |
| **ET5** | Reproducir investigación, contribuir a open source, arquitecturar sistemas de IA bajo restricciones y defenderlo todo en inglés | **AI Systems Architect / Research Engineer** |

## 4. Arquitectura del mapa y dependencias

**Jerarquía** (ontología §13): Academia → 5 etapas → 13 niveles → **módulos (este documento)** → temas/lecciones (syllabus). Direcciones estables `N#.M#`.

**Grafo de niveles** — cadena troncal con dos refuerzos transversales:

```
N0 → N1 → N2 → N3 → N4 → N5 → N6 → N7 → N8 → N9 → N10 → N11 → N12
      │         └────(N3 habilita la matemática de N4–N6)────┘
      └────(pistas S6: inglés · matemáticas · DSA · portafolio, continuas N0→N12)
```

Reglas del grafo: **(a)** cada nivel `requiere` el anterior Superado (NNR-01; la única puerta de entrada a N0 es el onboarding); **(b)** dentro de un nivel, los módulos declaran prerrequisitos locales en su ficha; **(c)** las pistas transversales avanzan por hitos de etapa (14.6), no por niveles; **(d)** sin ciclos, sin huérfanos (invariantes 13.7).

**Capstones de etapa** *(ampliación del Director)* — el proyecto que integra todo lo adquirido y cuya defensa cierra la etapa (coincide con el cierre de etapa 14.5.4 y su checkpoint de rumbo):

| Etapa | Capstone | Integra |
|---|---|---|
| ET1 | **Aplicación CS completa** (N1): API + SQL + Git + Linux, publicada | Toda la programación y base CS |
| ET2 | **Backend profesional desplegado** (N2) + informe matemático de N3 | El oficio completo de ingeniería |
| ET3 | **Transformer desde cero** (N6) con ensayo comparativo de arquitecturas | Matemática + ML + DL en una sola pieza |
| ET4 | **Proyecto columna vertebral operando EN LOCAL de extremo a extremo** (N10): RAG + agente + infraestructura + inferencia soberana | Los cuatro niveles de sistemas |
| ET5 | **Arquitectura completa + defensa final integradora** (N12) | La carrera entera (umbral 6.6) |

*El proyecto columna vertebral (13.5.2) atraviesa el mapa desde N1: cada nivel le aporta una pieza declarada en las fichas; sus versiones mayores son V1 (N7), V2 agéntica (N8), local (N10) y final (N12).*

---

## 5. ET1 · Fundamentos (N0–N1) — aprender a programar

### N0 · Validación *(interior ya instanciado: SYL-N0 v1.0.0 — este documento lo referencia, no lo reescribe)*

| Campo | Contenido |
|---|---|
| Objetivo | Identidad §14: primer contacto real; confirma vocación y método |
| Módulos | **N0.M1 · Fundamentos de programación** (T1–T8: primer programa, variables, tipos, operadores, strings, E/S, control de flujo, errores) — SYL-N0 |
| Ancla vocacional | ML Specialization (Ng) como material exploratorio no sumativo, recomendado tras la compuerta (SYL-N0 §1) |
| Competencias | C-N0-01…05 |
| Proyecto | Calculadora profesional — primer artefacto del portafolio (Git diferido a N1 por NNR-10) |
| Compuerta | Examen + proyecto + defensa TD-02 (SYL-N0 §4) |
| Bibliografía oficial | El campus (fuente primaria) · CS50P (Harvard) como referencia paralela · docs.python.org Tutorial |
| Carga estimada | 1–2 meses · ~35–55 h efectivas |

### N1 · Computer Science

| Campo | Contenido |
|---|---|
| Objetivo | La base de la disciplina: pensar computacionalmente (§14) |
| Módulos | **M1 · Python profesional** (funciones, colecciones, comprehensions, excepciones, módulos, entornos) · **M2 · POO** (clases, composición vs. herencia, dunder, diseño) · **M3 · Algoritmos y estructuras de datos I** (complejidad intuitiva, listas/pilas/colas/dicts/sets, búsqueda, ordenación, recursión) · **M4 · Git y GitHub** (historia legible, ramas, README profesional; *primer acto: publicar la calculadora de N0 como repo inaugural*) · **M5 · Linux, terminal y fundamentos de SO** (shell, scripts, permisos; procesos, memoria y sistema de archivos como modelos mentales del sistema operativo) · **M6 · Redes y APIs** (HTTP, DNS, TCP/IP, consumo de APIs con requests) · **M7 · SQL** (modelado básico, sentencias fundamentales desde Python) |
| Prerrequisitos locales | M1→M2→M3 en orden; M4–M5 en paralelo desde el inicio; M6–M7 tras M2 |
| Competencias | C-N1-01…07 |
| Proyecto (capstone ET1) | Aplicación CS completa: consume API + persiste en SQL + publicada en GitHub con README que un tercero puede seguir |
| Piezas a la columna vertebral | El esqueleto: repositorio, estructura, primeros módulos reutilizables |
| Compuerta | Examen + proyecto TP-01 (íntegra, ya con Git) + defensa TD-02 |
| Bibliografía oficial | CS50 (Harvard) · Missing Semester (MIT) · docs.python.org · Automate the Boring Stuff |
| Carga estimada | ~5 meses · ~500 h |

## 6. ET2 · Ingeniería (N2–N3) — aprender el oficio

### N2 · Software Engineering

| Campo | Contenido |
|---|---|
| Objetivo | El oficio profesional: software que otros pueden usar, mantener y desplegar |
| Módulos *(refinado en 1.0.1: 5 módulos, uno por transformación cognitiva — alcance temático idéntico al original)* | **M1 · El servicio** (FastAPI, REST, decoradores, Pydantic) · **M2 · La confianza** (auth JWT/OAuth2, OWASP Top 10, gestión de secretos) · **M3 · Muchos a la vez** (async/await, PostgreSQL como servidor, transacciones/aislamiento, Redis) · **M4 · La red de seguridad — calidad automática** (testing, TDD, clean code, patrones esenciales; hilo transversal desde M1, con consolidación formal propia) · **M5 · Entregar sin miedo** (Docker, CI/CD, migraciones, despliegue, AWS básico) |
| Prerrequisitos locales | M1→M2→M3 troncal; **M4 transversal desde M1** (patrón Git de N1: la red de seguridad corre en paralelo desde el día uno) con su propio punto de consolidación formal; M5 al final, como síntesis |
| Competencias | C-N2-01…07 |
| Proyecto (capstone ET2) | Backend escalable desplegado fuera de su máquina, con tests en CI, contenedores y documentación que un tercero levanta sin preguntar |
| Piezas a la columna vertebral | La API y la persistencia que luego servirán al sistema de IA |
| Compuerta | Examen + proyecto + defensa (con code review adversarial del rol Revisor) |
| Bibliografía oficial | Docs oficiales FastAPI/Docker/PostgreSQL · un texto de testing (TDD) · PEP 8 |
| Carga estimada | ~4 meses · ~400 h |

### N3 · Matemáticas para IA

| Campo | Contenido |
|---|---|
| Objetivo | Consolidación formal del goteo de la pista 🧮: el lenguaje matemático de la IA |
| Módulos | **M1 · Álgebra lineal computacional** (vectores, matrices, transformaciones — implementadas) · **M2 · Cálculo y optimización** (derivadas, gradientes, descenso de gradiente desde cero) · **M3 · Probabilidad y estadística** (distribuciones, esperanza, inferencia sobre datos reales) · **M4 · Lectura matemática** (notación de papers: qué expresa cada símbolo) |
| Competencias | C-N3-01…04 |
| Proyecto | Mini-librería propia de operaciones (numpy solo para verificar) + lectura comentada de un paper introductorio |
| Compuerta | Examen + proyecto + defensa (derivar y explicar en vivo) |
| Bibliografía oficial | 3Blue1Brown (esencia visual, M1/M2) · Mathematics for ML (Deisenroth) · **Seeing Theory (Brown University, esencia visual de M3 — probabilidad/estadística, añadida 2026-07-21)** · Khan Academy como refuerzo |
| Carga estimada | ~4,6 meses · ~20 semanas *(revisado 2026-07-21, PATCH 1.0.3 — cifra original ~3 meses/~300h; ver nota)* |

## 7. ET3 · IA (N4–N6) — aprender la disciplina

### N4 · Machine Learning

| Campo | Contenido |
|---|---|
| Módulos | **M1 · Datos: del dato crudo al dataset** (NumPy, pandas, EDA, visualización, calidad y limpieza — el 80 % del trabajo real de ML) · **M2 · Modelos desde cero** (regresiones y clasificadores con su matemática) · **M3 · ML clásico aplicado** (scikit-learn: árboles, SVM, ensembles, clustering) · **M4 · Metodología** (splits, métricas, overfitting, diagnóstico datos/features/capacidad) · **M5 · El proyecto gestionado** (experimentos registrados, sesgos reportados, entrega) |
| Competencias | C-N4-01…06 |
| Proyecto | Proyecto de ML de varias semanas sobre datos reales, con plan, experimentos y reporte honesto de limitaciones — primer **problema de largo aliento** de etapa (DOC-03 B6) |
| Compuerta | Examen + proyecto + defensa |
| Bibliografía oficial | ML Specialization (Ng) · Kaggle Learn · scikit-learn docs |
| Carga estimada | ~3–4 meses · ~300–400 h |

### N5 · Deep Learning

| Campo | Contenido |
|---|---|
| Módulos | **M1 · Redes desde cero** (perceptrón→MLP, backpropagation explicado gradiente a gradiente) · **M2 · PyTorch** (tensores, autograd, entrenamiento, GPU gratuita en nube) · **M3 · Arquitecturas** (CNN, RNN/LSTM, introducción a atención) · **M4 · Rigor experimental** (hipótesis, variables aisladas, reproducibilidad) |
| Competencias | C-N5-01…04 |
| Proyecto | Red entrenada end-to-end reproducible y documentada + explicación a audiencia técnica y no técnica |
| Compuerta | Examen + proyecto + defensa |
| Bibliografía oficial | DL Specialization (Ng) · Karpathy *Zero to Hero* · Fast.ai · PyTorch docs |
| Carga estimada | ~4 meses · ~400 h |

### N6 · Transformers

| Campo | Contenido |
|---|---|
| Módulos | **M1 · Atención y arquitectura** (self-attention, posiciones, el transformer completo desde cero) · **M2 · Tokenización y embeddings** · **M3 · Familias de modelos** (BERT/GPT/Llama/Qwen: comparación fundamentada) · **M4 · Papers fundacionales** (*Attention Is All You Need* y sucesores: contribución, método, supuestos, límites) |
| Competencias | C-N6-01…04 |
| Proyecto (capstone ET3) | Mini-GPT implementado desde cero y entrenado + ensayo comparativo de arquitecturas |
| Compuerta | Examen + proyecto + defensa (incluye defensa de lectura: sostener un paper ante repreguntas) |
| Bibliografía oficial | Karpathy (*GPT from scratch*) · CS224N (Stanford) · HF NLP Course · los papers de M4 |
| Carga estimada | ~4 meses · ~400 h |

## 8. ET4 · Sistemas de IA (N7–N10) — aprender a construir con y para modelos

### N7 · LLM Engineering

| Campo | Contenido |
|---|---|
| Módulos | **M1 · Inferencia y prompting** (APIs de modelos, streaming, structured output, costes) · **M2 · RAG completo** (ingesta, chunking, vector DBs, recuperación híbrida, generación) · **M3 · Fine-tuning y post-entrenamiento** (LoRA/QLoRA con recursos modestos y medición del efecto; RLHF/DPO — el porqué conceptual completo y práctica ligera con herramientas vigentes: el post-entrenamiento es hoy el corazón de la ingeniería de LLMs) · **M4 · Evals y seguridad** (evaluación de sistemas LLM, guardrails, riesgos) |
| Competencias | C-N7-01…05 |
| Proyecto | **Columna vertebral V1**: sistema RAG operativo de extremo a extremo, con design doc defendible y evaluación propia |
| Compuerta | Examen + proyecto + defensa del design doc |
| Bibliografía oficial | Cursos cortos DeepLearning.AI (RAG, Evals) · Hugging Face docs · documentación de proveedores |
| Carga estimada | ~4 meses · ~400 h |

### N8 · AI Systems

| Campo | Contenido |
|---|---|
| Módulos | **M1 · Agentes y tool calling** · **M2 · Orquestación** (LangGraph, MCP, protocolos multi-agente) · **M3 · Memoria y planning** · **M4 · Multimodalidad y voz** · **M5 · Fiabilidad** (modos de fallo de agentes: bucles, herramientas, costes; mitigaciones; riesgos de mal uso) |
| Competencias | C-N8-01…04 |
| Proyecto | **Columna vertebral V2**: sistema agéntico completo que resuelve tareas de varios pasos con fiabilidad medida; arquitectura documentada y defendida |
| Compuerta | Examen + proyecto + defensa de arquitectura (rol Arquitecto) |
| Bibliografía oficial | LangGraph docs · MCP (Anthropic) · cursos de agentes DL.AI |
| Carga estimada | ~5 meses · ~500 h |

### N9 · Sistemas Distribuidos

| Campo | Contenido |
|---|---|
| Módulos | **M1 · Orquestación a escala** (Kubernetes) · **M2 · Model serving** (vLLM, Ray; latencia y throughput medidos) · **M3 · Datos en movimiento** (colas, Kafka) · **M4 · Observabilidad y escalabilidad** (logs, métricas, alertas; trade-offs de coste con mediciones propias) |
| Competencias | C-N9-01…04 |
| Proyecto | La infraestructura de la columna vertebral: desplegada, observada y operada, con mejoras antes/después demostradas |
| Compuerta | Examen + proyecto + defensa (incluye diagnóstico de una arquitectura ajena) |
| Bibliografía oficial | *Designing Data-Intensive Applications* (Kleppmann) · MLOps Zoomcamp · docs K8s/vLLM |
| Carga estimada | ~4 meses · ~400 h |

### N10 · IA Local

| Campo | Contenido |
|---|---|
| Módulos | **M1 · Runtimes locales** (Ollama, llama.cpp, GGUF) · **M2 · Cuantización y optimización** (medición antes/después) · **M3 · GPU, CUDA básico y jerarquía de memoria** (el modelo mental del hardware: caches, ancho de banda, cómputo vs. memoria — por qué la GPU es rápida y cuándo deja de serlo) · **M4 · Juicio de ecosistema** (evaluar herramientas con prototipo y decisión fundamentada) |
| Competencias | C-N10-01…03 |
| Proyecto (capstone ET4) | **Columna vertebral operando EN LOCAL de extremo a extremo**, con los trade-offs frente a la nube documentados — la síntesis de N7+N8+N9+N10 |
| Compuerta | Examen + proyecto + defensa |
| Bibliografía oficial | llama.cpp/Ollama docs · CUDA Guide · GPU Mode |
| Carga estimada | ~4 meses · ~400 h |

## 9. ET5 · Maestría (N11–N12) — aprender a crear y a decidir

### N11 · Research Engineer

| Campo | Contenido |
|---|---|
| Módulos | **M1 · Lectura de frontera** (papers actuales con autonomía, matemática incluida) · **M2 · Reproducción** (reimplementar un paper y contrastar resultados) · **M3 · Informe científico** (reporte fiel aunque contradiga lo esperado; atribución y licencias) · **M4 · Open source** (issues, PRs, code review en proyectos reales) |
| Competencias | C-N11-01…05 |
| Proyecto | Reproducción publicada de un paper + contribuciones aceptadas en open source + defensa oral crítica |
| Compuerta | Proyecto + defensa (el examen aquí ES la reproducción y su defensa) |
| Bibliografía oficial | arXiv · Papers With Code · reproducibility challenges |
| Carga estimada | ~6 meses · ~600 h |

### N12 · AI Systems Architect

| Campo | Contenido |
|---|---|
| Módulos | **M1 · System design** (método y práctica en vivo bajo repreguntas) · **M2 · Arquitectura de sistemas de IA** (LLM + distribuida: escala, multi-GPU, costos, seguridad) · **M3 · Cloud aplicado** (AWS al servicio de la arquitectura) · **M4 · Preparación profesional** (proceso completo de entrevista internacional en inglés: coding, system design, conductual) · **M5 · Culminación** (columna vertebral final; vigencia autónoma: incorporar un avance reciente por decisión propia) |
| Competencias | C-N12-01…06 |
| Proyecto (capstone ET5 y de la carrera) | Arquitectura completa de un sistema de IA bajo restricciones, en design doc defendido + la columna vertebral culminada: sistema completo, desplegado, operativo |
| Compuerta | La **defensa final integradora** del recorrido completo (6.6, C-N12-06) + certificación institucional |
| Bibliografía oficial | *System Design Interview* (Xu) · casos de arquitectura de los mejores equipos · AWS SAA si aporta |
| Carga estimada | ~6 meses · ~600 h |

**Carga total nominal de la carrera:** ~53 meses (~4,5 años) · ~5.300–5.600 h a la dedicación pactada (5.4.1). *Estimación, jamás plazo: el calendario estima, la compuerta decide (14.2).*

## 10. Tabla de trazabilidad curricular

*Responde, para cada competencia del catálogo canónico (DOC-01): dónde se **enseña**, dónde se **practica**, dónde se **evalúa** y dónde se **demuestra**. Los instrumentos concretos de cada evaluación los fija la matriz canónica de DOC-02 (fila por competencia); aquí se traza la ubicación curricular. "CN" = compuerta del nivel N.*

| Competencia | Se enseña | Se practica | Se evalúa | Se demuestra |
|---|---|---|---|---|
| C-N0-01…05 | N0.M1 (T1–T8) | Ejercicios/retos del campus + calculadora | C0 (SYL-N0 §4) | Calculadora en el portafolio; defensas registradas |
| C-N1-01, 02, 06 | N1.M1–M3 | Escaleras de ejercicios + katas ⚔️ | C1 | Capstone ET1 + repos |
| C-N1-03 | N1.M4 | Todo proyecto desde N1 (pista 📦) | C1 | Repos públicos con historia legible |
| C-N1-04 | N1.M5 | Uso diario del entorno | C1 | Scripts y sesiones registradas |
| C-N1-05 | N1.M6–M7 | Capstone ET1 | C1 | Capstone ET1 |
| C-N1-07 | Pista 🇬🇧 + lecturas por tema | Documentación dosificada | C1 (hito ET1, 14.6) | Lecturas registradas |
| C-N2-01, 03 | N2.M1–M2, M4 | Labs de backend | C2 | Capstone ET2 desplegado |
| C-N2-02 | N2.M3 | Tests en todo proyecto desde N2 (📦) | C2 | CI verde en repos |
| C-N2-04 | N2.M3 | Documentar cada entrega | C2 | READMEs auditables |
| C-N2-05 | N2.M1–M4 (trade-offs DOC-03 A2) | Decisiones documentadas del capstone | C2 (defensa) | Registro de decisiones del proyecto |
| C-N2-06 | Pista 🇬🇧 | Docs oficiales como fuente primaria | C2 (hito ET2) | Trabajo diario sobre docs EN |
| C-N2-07 | N1.M3 + pista ⚔️ | Katas sostenidas | C2 | Historial de katas |
| C-N3-01…03 | N3.M1–M3 | Implementaciones + mini-librería | C3 | Mini-librería en el portafolio |
| C-N3-04 | N3.M4 | Lectura comentada | C3 | Informe de lectura |
| C-N4-01, 02 | N4.M1–M4 (datos, desde cero, aplicado, metodología) | Implementaciones desde cero sobre datos reales | C4 | Proyecto ML |
| C-N4-03, 04 | N4.M1, M4–M5 (la calidad del dato es la mitad del diagnóstico) | Diagnóstico en el proyecto | C4 (defensa) | Reporte honesto del proyecto |
| C-N4-05 | N4.M5 | El proyecto gestionado (B6) | C4 | Registro de experimentos |
| C-N4-06 | Pista ⚔️ | Problemas intermedios sostenidos | C4 (hito ET3 parcial) | Historial ⚔️ |
| C-N5-01…03 | N5.M1, M2, M4 | Redes desde cero + entrenamiento | C5 | Proyecto DL reproducible |
| C-N5-04 | N5 (defensas DOC-03 M13) | Explicación a dos audiencias | C5 (defensa) | Registro de defensa |
| C-N6-01 | N6.M1–M2 | Mini-GPT | C6 | Capstone ET3 |
| C-N6-02, 03 | N6.M4 + pista 🇬🇧 | Papers fundacionales | C6 (defensa de lectura; hito ET3) | Resúmenes/ensayo |
| C-N6-04 | N6.M3 | Ensayo comparativo | C6 | Ensayo del capstone |
| C-N7-01…03 | N7.M1–M4 | Columna vertebral V1 | C7 | V1 operativa + evals propias |
| C-N7-04 | N7.M2–M4 | Design doc de V1 | C7 (defensa) | Design doc en el repo |
| C-N7-05 | Pista 🇬🇧 (producción) | READMEs EN desde N7 | C7 (hito ET4 parcial) | Repos documentados en inglés |
| C-N8-01…04 | N8.M1–M5 | Columna vertebral V2 | C8 (defensa de arquitectura) | V2 + arquitectura documentada |
| C-N9-01…03 | N9.M1–M4 | Infraestructura de la columna vertebral | C9 | Sistema observado y medido |
| C-N9-04 | N9.M4 | Diagnóstico de arquitectura ajena | C9 | Informe de diagnóstico |
| C-N10-01…03 | N10.M1–M4 | Capstone ET4 (local) | C10 | Capstone ET4 + mediciones |
| C-N11-01…05 | N11.M1–M4 | Reproducción + open source | C11 (defensa crítica) | Reproducción publicada; PRs aceptados |
| C-N12-01, 02 | N12.M1–M2 | System design en vivo | C12 | Design doc final |
| C-N12-03 | N12.M4 + pista 🇬🇧 | Simulacros completos | C12 (hito ET5) | Mock interviews bajo rúbrica |
| C-N12-04, 05 | N12.M5 | Columna vertebral final | C12 | El sistema culminado |
| C-N12-06 | Toda la carrera | Defensas M13 acumuladas | **Defensa final integradora** | Acta de graduación |

*Cobertura verificada: las 64 competencias aparecen con las cuatro respuestas; ninguna se enseña sin practicarse, se practica sin evaluarse, ni se evalúa sin artefacto demostrable — la cadena enseñar→practicar→evaluar→demostrar es completa por construcción.*

## 11. Coherencia global verificada

1. **Competencias:** 64/64 del catálogo canónico ubicadas en el mapa (§10); 0 huérfanas; los 31/31 enunciados macro quedan servidos vía DOC-01 §3.3.
2. **Roadmap sellado:** los 13 niveles de §14.4 conservan identidad, resultado y etapa exactos; este documento solo añade el interior modular.
3. **Pistas transversales:** las cuatro (14.6) tienen portador curricular en cada etapa (visible en §10: filas 🇬🇧⚔️🧮📦) y sus culminaciones coinciden con los niveles de cierre de etapa conforme a §18.5.
4. **Proyecto columna vertebral:** pieza declarada en cada nivel desde N1; versiones mayores V1→V2→local→final; capstone de carrera en N12.
5. **Método y evaluación:** ningún módulo define cómo se enseña (DOC-03) ni cómo se evalúa (DOC-02): el PMC ubica, los especialistas dictan.
6. **AC-15:** todo el plan es completable con navegador + Internet + cuenta (los niveles que exigen entorno real — N1+ — usan la máquina del estudiante y capas gratuitas, AC-05; la transición navegador→entorno real es el hito previsto en 9.7).

## 12. Delegaciones y cierre

**Delegan de este documento:** SYL-N1…N12 (temas, lecciones, grafo fino de cada nivel — granularidad que este documento NO posee por diseño) · DOC-06 (operativa de pistas) · DOC-09 (especificación completa del proyecto columna vertebral, versiones y contratos entre niveles) · registro vivo propio: bibliografía, cargas y anclas (recalibrables con la experiencia, patrón 14.7).

**Cierre.** Con este documento, cualquier lector puede comprender la carrera completa de principio a fin: qué se aprende, en qué orden, por qué ese orden, qué proyectos lo demuestran y qué profesional emerge de cada etapa. Los syllabus ya no diseñan: instancian. La construcción institucional de la Academia queda, con la aprobación de este plan, **terminada** — lo que sigue es enseñarla.
