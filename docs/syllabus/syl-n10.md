# SYL-N10 — Syllabus del Nivel 10 · IA Local

## Control del documento (conforme a DOC-00 §15.4)

| Campo | Valor |
|---|---|
| **Document Key** | SYL-N10 · Tier T2 |
| **Versión / Estado** | **1.0.0-candidato** · Flujo institucional de 9 pasos completo: syllabus, M1-M4 (27 laboratorios reales en `index.html` tras expansión de calidad, §5bis), capstone ET4 (`n10et4`), compuertas + banco de examen (18 variantes, §10), auditoría adversarial (3 auditores independientes, hallazgos corregidos), Herencias Declaradas finales (§7), Informe Final de Nivel (`docs/informes/n10-informe-final-de-nivel.md`) — **candidato a v1.0.0 sin reservas abiertas de contenido, con 3 riesgos pedagógicos declarados explícitamente (informe final §7)**, pendiente del veredicto definitivo del Director, no autodeclarado |
| **Autoridad de origen** | DOC-10 §8 (interior de N10) · DOC-01 (C-N10-01…03) · `docs/mision-n10.md` |
| **Depende de** | DOC-10 (mapa, alcance ya aprobado — este documento lo instancia, no lo rediseña) · DOC-12 v1.0.0 (estándar de laboratorios de entorno real — documento gobernante casi absoluto de este nivel) · DOC-01 · DOC-02 · DOC-03 · **Herencias entrantes de N7/N8/N9 (borrador — construidos en paralelo, no congelados; ver §2.1)** |
| **Produce / desarrolla** | La estructura docente completa de N10: fichas pedagógicas por tema (27 laboratorios en 4 módulos, §5 + §5bis), el diseño del capstone ET4 (columna vertebral local), la compuerta, y las Herencias Declaradas hacia SYL-N11 |
| **Estándar de calidad** | El mismo de SYL-N1/N2/N3: *"Si otro profesor excepcional impartiera este nivel utilizando únicamente el syllabus, ¿obtendría prácticamente la misma calidad formativa?"* |
| **Historial** | 0.1.0-draft (2026-07-21): Documento de Diseño. Decisión de hardware confirmada explícitamente por el Director: RTX 5070 (12GB VRAM) / Ryzen 5 9600X / 32GB RAM como referencia principal de todas las mediciones reales del nivel, con ruta CPU-only documentada en cada laboratorio como comparación, nunca como camino principal (ver §3.2). Supuestos de trabajo sobre la columna vertebral V1(N7)+V2(N8)+infra(N9) declarados explícitamente en §2.1, al no existir todavía contenido congelado en las ramas paralelas (`nivel/n7`, `nivel/n8`, `nivel/n9` verificadas vacías de syllabus/investigación a esta fecha). 16 laboratorios diseñados en 4 módulos (M1:4, M2:4, M3:5, M4:3) · 0.2.0-draft (2026-07-21): **Investigación pedagógica real completada** (§8) — fetch directo verificado a las 4 fuentes oficiales de DOC-10 §8 (docs de Ollama, repo de llama.cpp, spec de GGUF en el repo `ggml` —corrección aplicada: no vive en el repo de llama.cpp—, CUDA Programming Guide de NVIDIA, GPU Mode) más HuggingFace (tabla oficial de quant types GGUF) para llenar el vacío de cuantización que ninguna de las 4 cubre sola. Hallazgo metodológico aplicado a M3.T2: el roofline model/arithmetic intensity que explica por qué el *decode* autoregresivo es memory-bound NO viene de la CUDA Guide de NVIDIA (no lo cubre) sino de literatura de arquitectura de computadoras aplicada por la comunidad de inferencia LLM — declarado explícitamente en la ficha, nunca presentado como documentación oficial de NVIDIA. Errores de novato reales incorporados a las fichas de M1-M3 (WSL2/driver, `ollama ps` como diagnóstico, `--mlock` empeorando OOM, `-c`/`-ngl` como palancas de memoria) · 0.5.0-draft: M1-M4 completos (16 laboratorios), capstone `n10et4`, compuertas + banco de examen de 18 variantes (§10, todas verificadas por ejecución real) · 0.6.0-draft (2026-07-22): **Paso 9a completo** — auditoría de coherencia desde `docs/mision-n11.md`, Herencias Declaradas finales (§7); corregida una herencia sobreclamada del borrador (H-N11-04 sobre "columna vertebral completa" hacia N11, cuando esa cadena en realidad salta a N12) · 0.7.0-draft: **Paso 9b completo** — auditoría adversarial con 3 auditores independientes sin coordinación entre sí (coherencia curricular, corrección técnica/factual, experiencia del estudiante/DOC-12). Hallazgos reales corregidos: contradicción interna de cobertura de C-N10-02 (ninguna ficha la tenía etiquetada pese a que §10 afirmaba que sí — corregido retagueando M1.T1/M3.T4/M3.T5/M4.T3 con justificación); tags de Ollama inexistentes en M2.T2-T3 (`llama3.2:q4_K_M` no existe, el real lleva prefijo de tamaño); ausencia de ruta sin GPU en M3.T3/T5 pese a exigencia explícita de `mision-n10.md`; `errorVivo` no genuinamente reproducible en 3 labs de M4 (tareas de lectura con `cmd:null` en vez de comandos reales); inconsistencia GB/GiB en M2.T1; checklist de categorías de error (DOC-12 §2.8) y las 7 capacidades de dominio completas (DOC-12 §2.13), ausentes o incompletas en la mayoría de los 16 laboratorios base — corregidas todas · 0.8.0-draft (2026-07-22): **directiva del Director de elevar el estándar a nivel MIT/Stanford/CMU/Berkeley** (nunca "correcto", "excelente"; 4 preguntas de aceptación obligatorias — guardada como memoria permanente del proyecto). Expansión de calidad completa (§5bis): 16 temas base → 27 laboratorios, cada uno nuevo con investigación real verificada por fetch directo (LLMflation, arXiv 2606.11690, OSI sobre licencia Llama, MMLU-CF, The Leaderboard Illusion, SRE Book de Google, Release It!, issues reales de Ollama, GGML README, convert_hf_to_gguf.py, IEEE 754/BF16, GPTQ/AWQ papers, roofline model de Williams et al. aplicado con specs reales de la RTX 5070, L2 cache real, Architecture Decision Records de Nygard con adopción verificada en Backstage/Cosmos SDK, PagedAttention/SOSP2023) · 0.9.0-draft: §1 y §5bis sincronizados contra el contenido real expandido · 0.9.1-draft (2026-07-22): **segunda ronda de auditoría adversarial completa** sobre los 11 laboratorios nuevos de la expansión (3 auditores independientes: coherencia/densidad, cumplimiento DOC-12, corrección técnica), cerrando el riesgo pedagógico declarado en el Informe Final §7. Hallazgos corregidos: cita de Denil et al. mal enlazada (M2.T1b), ejemplo FP16/BF16 que no divergía (M2.T1b), cifra "88%" de PagedAttention no verificable en el paper (M4.T2b, retirada), inconsistencia de prosa "unos pocos MB" vs. 256MB calculados (M3.T4b), recurso faltante en M4.T2b (DOC-12 §2.12), swap de capacidades en M3.T4b, y 6 `errorVivo` no genuinamente reproducibles (DOC-12 §2.5bis) rediseñados como comandos reales verificados por ejecución. Detalle en el commit `d0d7e66` de `nivel/n10`. |

---

## 1. Tabla resumen

| Módulo | Temas base | Laboratorios reales (tras expansión, §5bis) | Modalidad | Competencias | Ruta hardware |
|---|---|---|---|---|---|
| M1 · Runtimes locales | 4 | 9 (T1: 3, T2: 2, T3: 2, T4: 2) | DOC-12 completo | C-N10-01, C-N10-02 | Cualquier CPU + descarga; GPU opcional desde T1c |
| M2 · Cuantización y optimización | 4 | 6 (T1: 2, T2: 2, T3: 1, T4: 1) | DOC-12 completo, medición real obligatoria | C-N10-01 | RTX 5070 como referencia; ruta CPU-only documentada |
| M3 · GPU, CUDA básico y jerarquía de memoria | 5 | 7 (T1: 1, T2: 2, T3: 1, T4: 2, T5: 1) | DOC-12 completo, con introducción conceptual reforzada | C-N10-01, C-N10-02 | RTX 5070 como referencia; ruta sin GPU explícita y obligatoria (§3.2) |
| M4 · Juicio de ecosistema | 3 | 5 (T1: 2, T2: 2, T3: 1) | DOC-12 completo, prototipo comparativo | C-N10-02, C-N10-03 | RTX 5070 para el prototipo; herramientas evaluadas declaran su propio requisito |
| Capstone ET4 | — | 1 proyecto (5 hitos) | DOC-12 (proyecto) | C-N10-01…03 (síntesis) | RTX 5070 |

**Total: 16 temas base → 27 laboratorios reales + capstone.** Expansión aplicada tras directiva explícita del Director (2026-07-22): profundidad real de nivel MIT/Stanford/CMU/Berkeley por tema, nunca relleno artificial — cada laboratorio nuevo aporta al menos un hallazgo verificado por fetch directo que el laboratorio base no cubría (ver §5bis para el registro completo con fuentes).

*16 laboratorios totales (M1:4 + M2:4 + M3:5 + M4:3) — más que el estándar de N1 (9 laboratorios en M4+M5 combinados: 4+5) por la instrucción explícita de §8 de la guía maestra: más profundidad real en un nivel avanzado de ET4, nunca relleno. Cada laboratorio se dimensiona por lo que su propio contenido sostiene (§3.3), no por una cuota fija.*

## 2. Identidad del nivel

Por referencia a DOC-10 §8: **N10 · IA Local** no es "aprender a instalar programas" — es la competencia de **ejecutar, optimizar y razonar sobre inferencia de modelos de lenguaje en hardware que el propio estudiante posee y controla**, sin depender de un proveedor cloud, y de **evaluar con criterio propio** las herramientas de un ecosistema que cambia constantemente. Es, además, el nivel que cierra ET4 (Sistemas de IA, N7-N10): el estudiante llega habiendo construido (en teoría, según DOC-10 §8, ya que N7-N9 se construyen en paralelo) un sistema RAG operativo, extendido a agéntico, y desplegado como infraestructura observada — y en N10 aprende a hacer que ese mismo tipo de sistema funcione enteramente en su propia máquina, entendiendo con precisión qué se gana (soberanía, costo cero de inferencia, privacidad) y qué se pierde (elasticidad, modelos más grandes, mantenimiento delegado) frente a la nube.

Entrada: N9 Superado (cadena de dependencia técnica real: el estudiante ya opera infraestructura desplegada — Docker/K8s/observabilidad — y ahora la reduce deliberadamente a una sola máquina, entendiendo la diferencia como decisión de ingeniería, no como regresión). Salida: examen + proyecto (capstone ET4) + defensa → habilita ET5 completa (N11-N12, Research Engineer / AI Systems Architect). Si N7 enseñó a construir un sistema que razona sobre documentos, N8 a que ese sistema actúe con fiabilidad medida, y N9 a operarlo a escala, **N10 enseña los límites y las ventajas reales del hardware que tienes delante — el conocimiento que separa a quien despliega infraestructura ajena de quien entiende, hasta el byte de VRAM, qué está corriendo y por qué.**

### 2.1 Supuestos de trabajo sobre la columna vertebral (N7/N8/N9 en paralelo — declarado explícitamente, no oculto)

A la fecha de este documento, las ramas `nivel/n7`, `nivel/n8` y `nivel/n9` no contienen todavía syllabus ni investigación (verificado con `git ls-tree` sobre las tres ramas). Siguiendo la instrucción explícita de `docs/mision-n10.md` ("define una versión razonable... basada en el alcance ya aprobado de DOC-10 §8... y no bloquees tu propio avance"), este syllabus adopta como **supuesto de trabajo, pendiente de confirmación cuando N7/N8/N9 congelen**, la siguiente forma concreta de la columna vertebral heredada — instanciando literalmente DOC-10 §2 ("Proyecto columna vertebral... RAG + agente + infraestructura + inferencia soberana"):

- **De N7 (V1, asumido):** un sistema RAG operativo de extremo a extremo — ingesta de una base de conocimiento propia (documentos técnicos), chunking, embeddings, una base de datos vectorial, recuperación (posiblemente híbrida), generación vía API de un proveedor de modelos, con evaluación propia (métricas de recuperación/generación) y un design doc.
- **De N8 (V2, asumido):** el mismo sistema extendido con capacidad agéntica — tool calling, un grafo de orquestación (tipo LangGraph), memoria/planning para tareas de varios pasos, y fiabilidad medida (tasa de éxito, manejo de fallos de herramientas).
- **De N9 (infraestructura, asumido):** ese sistema desplegado como servicio real — contenedores orquestados (Kubernetes o su equivalente local minikube/kind, según lo que N9 finalmente decida), model serving con métricas de latencia/throughput (vLLM/Ray), una cola de datos si aplica (Kafka/Redpanda), observabilidad (logs/métricas/alertas) con mediciones antes/después.

**Lo que N10 asume que puede construir sin bloquearse:** el estudiante llega a N10 con ESTE tipo de sistema ya operativo en la nube — un asistente que responde preguntas sobre una base de conocimiento propia usando RAG, puede ejecutar acciones de varios pasos con herramientas, y está desplegado y observado. N10 no necesita el código exacto de N7/N8/N9 para diseñar sus propios laboratorios (que enseñan runtimes/cuantización/GPU/ecosistema, temas independientes de la implementación exacta de la columna vertebral) — sí lo necesita, de forma directa, para el **capstone** (§6, a diseñar en el Paso 4 del flujo, cuando ya no se puede seguir postergando esa definición). Se declara aquí, explícitamente, como haría cualquier otra ventana de esta construcción paralela.

**Riesgo declarado:** si la forma real de V1/V2/infraestructura diverge sustancialmente de este supuesto cuando N7/N8/N9 congelen (por ejemplo, si el vector store elegido por N7 no tiene ningún camino de portabilidad a un entorno local, o si N9 termina asumiendo un proveedor cloud sin alternativa local), el capstone de N10 (§6) necesitará una revisión dirigida — no el resto del nivel, que es independiente de esa forma exacta.

## 3. Principios de ejecución

1. **Principio "DOC-12 dominante, sin excepción real"**: aplicando el criterio de frontera de DOC-12 §5, los 16 laboratorios de N10 dependen del sistema operativo del estudiante, requieren instalación real de software (Ollama, llama.cpp, drivers CUDA), y tocan estado persistente (modelos descargados, archivos GGUF en disco) — ninguno de los tres criterios de DOC-11 se cumple en ningún tema. A diferencia de N3 (100% Pyodide) o incluso N7 (mezcla), N10 es tan DOC-12-dominante como N9, con la ventaja pedagógica real (§ ficha de misión) de no depender de ningún proveedor cloud facturable: todo corre en la máquina del estudiante, sin las advertencias de costo de DOC-12 §2.5/§3 que sí rigen en N7-N9.
2. **Hardware de referencia — decisión explícita del Director, no un supuesto genérico (2026-07-21):** todas las mediciones reales de M2, M3 y el Capstone se anclan en el hardware real del estudiante — **NVIDIA GeForce RTX 5070 (12GB VRAM), Ryzen 5 9600X, 32GB RAM DDR5, Windows**. Esto es una decisión de diseño deliberada, no una limitación: el Director rechazó explícitamente diseñar para GPU de centro de datos o rebajar el nivel de exigencia por "compatibilidad universal" — esta Academia tiene un solo estudiante. Cada laboratorio de M2/M3/M4 que mida rendimiento documenta, además, una **ruta CPU-only explícita** — no como camino principal, sino como referencia reproducible y punto de comparación pedagógico (la diferencia CPU/GPU es, en sí misma, contenido de M3). Cuando un modelo exceda los 12GB de VRAM disponibles, el laboratorio correspondiente explica exactamente por qué (tamaño de los pesos cuantizados + KV cache + overhead de contexto no caben en la VRAM disponible) y guía al estudiante hacia la mejor alternativa práctica (modelo más pequeño, cuantización más agresiva, offload parcial CPU/GPU) — nunca evitando el caso límite, que es precisamente donde más se aprende sobre la jerarquía de memoria (M3).
3. **Verificación empírica de rendimiento, nunca cifras de catálogo:** siguiendo el mismo principio de disciplina numérica que rige todo el proyecto (guía maestra §9, aplicado aquí a benchmarking de sistemas en vez de a `check()` de ejercicios Pyodide), ningún laboratorio de M2/M3 presenta una cifra de velocidad de inferencia, uso de VRAM o tamaño de modelo sin que haya sido medida realmente antes de escribirse — nunca tomada de un README de terceros o estimada. Las cifras concretas de cada laboratorio se producen ejecutando el propio procedimiento del laboratorio en el hardware de referencia antes de fijarlas como "resultado esperado".
4. **Errores de novato específicos del ecosistema local, no genéricos:** Ollama/llama.cpp/CUDA tienen un catálogo propio y bien documentado de errores de instalación/configuración (drivers desactualizados, `CUDA out of memory`, un modelo que corre en CPU sin que el estudiante note que nunca tocó la GPU, versiones de CUDA Toolkit incompatibles con el build de la herramienta) — cada laboratorio de M1-M3 los reproduce deliberadamente (DOC-12 §2.5bis) en vez de solo documentarlos.
5. **M3 no presupone GPU disponible como requisito universal de la Academia** (aunque SÍ la use como referencia principal en este caso concreto, §3.2): cada laboratorio de M3 declara explícitamente, en su ficha de control, qué porción es enseñable con analogías rigurosas y mediciones en CPU (el modelo mental de jerarquía de memoria, ancho de banda vs. cómputo) y qué porción exige GPU real — nunca fusionando ambas sin avisar.
6. **Densidad ampliada frente al estándar de N1** *(instrucción directa de la guía maestra §8 para N4-N12 — "más teoría, días más sustanciosos, ejercicios más integradores")*: 16 laboratorios frente a los 9 combinados de N1.M4+M5 (7 módulos, 36 temas en total, pero M4/M5 solas — el precedente DOC-12 más cercano — suman 4+5=9), con foco explícito en profundidad conceptual (M3, el módulo de hardware, es deliberadamente el más extenso: 5 laboratorios para sostener un modelo mental correcto de por qué la GPU es rápida y cuándo deja de serlo) y no en volumen artificial.

## 4. Estructura y grafo local

Troncal: `M1 → M2 → M3 → M4`. M2 (cuantización) depende técnicamente de M1 (no se puede cuantizar ni medir el efecto de cuantizar sin ya saber correr un modelo con Ollama/llama.cpp). M3 (GPU/CUDA/memoria) es conceptualmente independiente de M1/M2 en su primera mitad (T1-T2, el modelo mental del hardware puede enseñarse sin haber tocado GGUF todavía) pero se apoya en M1/M2 desde T3 en adelante, cuando mide el efecto real de la cuantización sobre el uso de VRAM — de ahí su posición secuencial: enseñar la jerarquía de memoria ANTES de M2 sería prematuro (sin un modelo cuantizado real que medir, el contenido de M3.T4 quedaría abstracto), pero enseñarla completamente después pierde la oportunidad de que M2 ya ancle "por qué cuantizar reduce el uso de VRAM" en un modelo mental correcto del hardware. **Decisión de diseño confirmada:** M3 se coloca después de M2 pero sus dos primeros temas (el modelo mental puro) podrían enseñarse antes sin romper nada — se mantiene el orden secuencial único (mismo principio que SYL-N3 §4: el Campus no bifurca navegación) por simplicidad de implementación, con una nota explícita en M3.T1 reconociendo que el estudiante ya ha usado cuantización en la práctica (M2) antes de entender por qué funciona a nivel de hardware. M4 (juicio de ecosistema) cierra el nivel de forma deliberada: evaluar herramientas del ecosistema local con criterio (Ollama vs. llama.cpp puro vs. otras alternativas) solo tiene sentido una vez que el estudiante entiende runtimes (M1), cuantización (M2) y hardware (M3) — los tres ejes reales sobre los que cualquier herramienta del ecosistema local compite.

## 5. Fichas pedagógicas por tema

*Plantilla adaptada de SYL-N1 (precedente DOC-12 más cercano: M4/M5) y SYL-N3 (10 campos + condicionales). Para laboratorios DOC-12, el campo "Práctica principal" se entiende como el cuerpo del laboratorio real (§2 de DOC-12, no un ejercicio Pyodide), y cada ficha declara explícitamente su **Entorno objetivo** y **hardware de referencia** cuando aplique — la ficha del syllabus resume el laboratorio; la autoría completa de las 13 secciones de DOC-12 se produce en `docs/lecciones/n10/` al construir el módulo (Paso 2 del flujo), no aquí.*

### M1 · Runtimes locales

> **La gran pregunta de este módulo: ¿qué hace falta, realmente, para que un modelo de lenguaje piense dentro de tu propia máquina, sin tocar la red?**

**N10.M1.T1 · Por qué correr un LLM en local — panorama y primer modelo vivo**
- **Objetivo:** explica las razones reales (costo, privacidad, latencia, disponibilidad offline, control) para correr inferencia local frente a una API cloud; instala Ollama y ejecuta su primer modelo, observando qué ocurrió realmente (descarga, carga en memoria, primer token).
- **Prerrequisitos:** N9 Superado (el estudiante ya operó infraestructura real); N7.M1 (ya llamó a una API de modelo cloud — el contraste es directo).
- **Competencias:** C-N10-01, C-N10-02 *(primera introducción real de los ejes de trade-off frente a la nube — costo/privacidad/latencia — que C-N10-02 exige documentar; corrección aplicada en el Paso 9b tras hallazgo de auditoría adversarial: ver §10)*.
- **Entorno objetivo:** terminal local (Windows/macOS/Linux, divergencias declaradas donde existan — Ollama tiene instaladores nativos en los tres).
- **Errores habituales:** confundir "descargar un modelo" con "instalar el runtime" (son pasos distintos); asumir que el primer modelo que se prueba usa la GPU sin haberlo verificado nunca; no entender por qué el primer prompt tarda mucho más que el segundo (carga en memoria vs. inferencia).
- **Modelo mental:** Ollama como **el gestor de paquetes de los modelos** — el mismo tipo de capa de conveniencia que `pip` sobre Python, pero para pesos de un modelo de varios gigabytes en vez de código.
- **Por qué:** existe porque ET4 completa hasta ahora asumió inferencia vía API remota (N7.M1) — este es el primer momento del currículo donde "modelo" deja de ser una URL con una clave y pasa a ser un archivo real en el disco propio del estudiante / ahora porque el estudiante ya sabe operar infraestructura (N9) y puede apreciar la diferencia / habilita todo M1-M4.
- **Evidencia de dominio:** explica, con sus propias palabras, qué diferencia real hay entre "llamar a la API de un proveedor" y "correr el modelo en tu máquina" — no solo en costo, también en control, latencia y las garantías que se pierden (soporte, actualizaciones automáticas, escalado elástico).
- **Práctica principal:** instalación guiada de Ollama con verificación (`ollama --version`, `ollama list`); primer `ollama run` con un modelo pequeño; observación deliberada de la primera vs. segunda ejecución (carga vs. inferencia); error inducido en vivo (intentar correr un modelo antes de descargarlo / con Ollama detenido).
- **Fuera de alcance (y por qué):** Modelfile, API REST, parámetros de generación — T2. Cómo funciona llama.cpp por debajo — T3.
- **Evaluación:** estándar DOC-12 (§2.13).
- **Pregunta ingenieril:** si tu API de N7 costaba $0.002 por 1000 tokens y tu modelo local no cuesta nada por token pero sí costó $600 de GPU y consume electricidad corriendo, ¿a partir de qué volumen de uso "gana" la inferencia local? ¿Qué otras variables, además del costo puro, entran en esa decisión?

**N10.M1.T2 · Ollama a fondo — Modelfile, API REST local y parámetros de generación**
- **Objetivo:** define un Modelfile propio (system prompt, parámetros), controla un modelo vía la API REST local de Ollama desde Python (no solo desde la CLI), y explica el efecto real de `temperature`, `top_p`, `num_ctx` sobre la salida.
- **Prerrequisitos:** T1.
- **Competencias:** C-N10-01.
- **Entorno objetivo:** terminal local + un script Python que habla con `http://localhost:11434`.
- **Errores habituales:** cambiar `temperature` y no notar el efecto porque el prompt de prueba es demasiado corto/determinista para revelarlo; asumir que `num_ctx` es ilimitado y descubrir tarde que el modelo "olvida" el principio de una conversación larga; confundir el Modelfile con un archivo de configuración pasivo cuando en realidad reconstruye el modelo (`ollama create`).
- **Modelo mental:** la API REST local de Ollama como **el mismo contrato que ya usaste en N7.M1, apuntando a `localhost` en vez de a un proveedor** — la forma de hablarle a un modelo no cambió; lo que cambió es dónde vive.
- **Por qué:** existe porque el estudiante necesita integrar el modelo local en software propio (el capstone lo exige), no solo usarlo desde una terminal interactiva / ahora porque T1 ya dio el runtime funcionando / habilita el resto de M1-M4, donde todo laboratorio de medición necesita control programático, no manual.
- **Evidencia de dominio:** escribe un script Python que envía un prompt a la API local, recibe la respuesta con streaming, y explica qué parámetro cambiaría para hacer la salida más determinista o más creativa, con justificación.
- **Práctica principal:** Modelfile propio con system prompt + parámetros; cliente Python contra la API REST (`/api/generate`, `/api/chat`) con y sin streaming; comparación deliberada de la misma pregunta con `temperature` 0 vs. 1 (medición real: ¿cuántas de 5 ejecuciones dan la misma respuesta exacta?).
- **Fuera de alcance (y por qué):** qué hace Ollama por debajo con llama.cpp — T3. Medición de rendimiento — M2.
- **Evaluación:** estándar DOC-12.
- **Pregunta ingenieril:** si tu columna vertebral (N7-N9) necesita respuestas reproducibles para sus evaluaciones automáticas, ¿qué configuración de parámetros elegirías, y qué sacrificas al elegirla?

**N10.M1.T3 · Qué hay debajo de Ollama — llama.cpp**
- **Objetivo:** explica la relación real entre Ollama y llama.cpp (Ollama empaqueta y gestiona; llama.cpp es el motor de inferencia), compila o instala llama.cpp directamente, y ejecuta el mismo modelo con control explícito de threads, capas descargadas a GPU (`n_gpu_layers`) y tamaño de contexto.
- **Prerrequisitos:** T2.
- **Competencias:** C-N10-01.
- **Entorno objetivo:** terminal local; compilación con soporte CUDA si el sistema lo permite (RTX 5070 — verificar toolkit).
- **Errores habituales:** compilar sin soporte CUDA y no entender por qué la GPU nunca se usa (falta un flag de build); asumir que "más `n_gpu_layers` siempre es mejor" sin verificar que caben en VRAM; confundir threads de CPU con paralelismo de GPU (son dos ejes de configuración independientes).
- **Modelo mental:** llama.cpp como **el motor bajo el capó** — Ollama es el coche completo con llave automática; llama.cpp es abrir el capó y tocar el motor directamente, con más control y más responsabilidad.
- **Por qué:** existe porque entender la herramienta real detrás de la conveniencia es el mismo principio de M5 de N1 (terminal vs. GUI) aplicado aquí a runtimes de IA — quien solo sabe usar Ollama no puede diagnosticar un problema de rendimiento real / ahora porque T1-T2 ya dieron el vocabulario de modelos y parámetros / habilita M2 (cuantización, que se controla directamente vía flags de llama.cpp) y M3 (GPU, donde `n_gpu_layers` es la palanca central).
- **Evidencia de dominio:** ejecuta el mismo modelo con Ollama y con llama.cpp puro, y explica, con evidencia (no solo intuición), en qué se diferencian las dos ejecuciones.
- **Práctica principal:** build/instalación de llama.cpp con soporte CUDA (verificado contra la RTX 5070); ejecución con `llama-cli`/`llama-server` variando threads y `n_gpu_layers`; error inducido en vivo (pedir más capas en GPU de las que caben en VRAM, observar el fallo o el fallback).
- **Fuera de alcance (y por qué):** el formato GGUF en detalle — T4. Medición sistemática de rendimiento — M2/M3.
- **Evaluación:** estándar DOC-12.
- **Pregunta ingenieril:** si Ollama ya te da todo esto con un solo comando, ¿qué justifica aprender llama.cpp directamente? ¿En qué escenario real la capa de conveniencia se convierte en un obstáculo?

**N10.M1.T4 · El formato GGUF**
- **Objetivo:** explica qué es GGUF, por qué reemplazó a GGML, qué metadata contiene (arquitectura, tokenizador, tipo de cuantización) y cómo inspeccionar un archivo GGUF real sin cargarlo completo en memoria.
- **Prerrequisitos:** T3.
- **Competencias:** C-N10-01.
- **Entorno objetivo:** terminal local.
- **Errores habituales:** tratar un `.gguf` como "un modelo genérico" sin notar que la metadata declara una arquitectura y tokenizador específicos (usar el archivo con el motor equivocado falla o produce basura); no distinguir el nombre del archivo (a menudo indica el quant type) de su contenido real verificable.
- **Modelo mental:** GGUF como **un contenedor autodescriptivo** — a diferencia de un simple volcado de pesos, el archivo trae consigo todo lo necesario para cargarse correctamente (arquitectura, vocabulario, hiperparámetros), diseñado para portabilidad entre máquinas y herramientas del ecosistema llama.cpp.
- **Por qué:** existe porque portar un modelo cuantizado entre máquinas (la tuya, un servidor, otro estudiante) sin este formato exigiría reconstruir manualmente toda la configuración / ahora porque T3 ya dio el motor que consume estos archivos / habilita M2 completo (cuantizar ES, en la práctica, producir un GGUF con un quant type distinto).
- **Evidencia de dominio:** dado un archivo GGUF real, extrae y explica su metadata (arquitectura, tipo de cuantización, tamaño de contexto entrenado) usando herramientas de inspección, sin cargarlo completo.
- **Práctica principal:** inspección de metadata GGUF con las herramientas del propio repo de llama.cpp; laboratorio integrador de cierre de M1 (mini-laboratorio + desafío): pipeline propio en Python que, dado un GGUF, reporta su metadata relevante y decide programáticamente si es compatible con el hardware disponible (VRAM detectada vs. tamaño estimado del modelo).
- **Fuera de alcance (y por qué):** los distintos quant types y su trade-off tamaño/calidad — M2 completo.
- **Evaluación:** estándar DOC-12 + mini-laboratorio de cierre de módulo (integra T1-T4).
- **Pregunta ingenieril:** si tu columna vertebral local necesita decidir automáticamente, al arrancar, qué modelo cargar según el hardware disponible, ¿qué información de la metadata GGUF usarías para tomar esa decisión sin intervención humana?
- **Idea universal (cierre de M1):** un runtime local no es "una API sin internet" — es una pieza completa de infraestructura (formato de archivo, motor de inferencia, capa de gestión) que el estudiante ahora entiende de punta a punta, en vez de asumir como una caja negra.

### M2 · Cuantización y optimización

> **La gran pregunta de este módulo: ¿cuánto puedes reducir un modelo antes de que deje de ser útil — y cómo lo sabes con certeza, no por intuición?**

**N10.M2.T1 · Qué es cuantizar — de FP16/FP32 a enteros de baja precisión**
- **Objetivo:** explica qué representa cuantizar los pesos de un modelo (reducir la precisión numérica de cada parámetro), por qué funciona sin destruir el modelo (redundancia en la representación de pesos entrenados), y qué se pierde exactamente al hacerlo.
- **Prerrequisitos:** M1 completo.
- **Competencias:** C-N10-01.
- **Entorno objetivo:** terminal local; scripts Python para ilustrar el concepto numérico antes de tocar un modelo real.
- **Errores habituales:** creer que cuantizar es "redondear números" sin más (ignora que reduce el propio espacio de representación); asumir que toda cuantización pierde la misma calidad sin importar el método; no entender que el tamaño en disco y el uso de VRAM en inferencia no son idénticos (KV cache, buffers de activación).
- **Modelo mental:** cuantizar como **comprimir una fotografía** — FP16 es la imagen sin comprimir; INT4 es un JPEG agresivo: mucho más liviano, visiblemente distinto si se mira con lupa, pero perfectamente reconocible para el uso real.
- **Por qué:** existe porque un modelo de 7000 millones de parámetros en FP16 pesa ~14GB — no cabe cómodo en los 12GB de VRAM del hardware de referencia sin cuantizar / ahora porque M1 ya dio el vocabulario de runtimes y GGUF / habilita T2-T4.
- **Evidencia de dominio:** calcula, dado un conteo de parámetros y una precisión, el tamaño aproximado en memoria del modelo — y explica por qué cuantizar a la mitad de bits no reduce el tamaño exactamente a la mitad (overhead de metadata, algunos tensores sin cuantizar).
- **Práctica principal:** script Python que calcula tamaño teórico de un modelo a distintas precisiones; comparación real (no teórica) descargando el MISMO modelo en dos quant types distintos y verificando el tamaño real en disco.
- **Fuera de alcance (y por qué):** los quant types específicos de GGUF (Q4_K_M, Q5_K_M, etc.) y cuándo elegir cada uno — T2.
- **Evaluación:** estándar DOC-12.
- **Pregunta ingenieril:** si cuantizar siempre pierde algo de precisión, ¿por qué la industria entera lo usa en producción en vez de aceptar el costo de correr todo en FP16?

**N10.M2.T2 · Tipos de cuantización en el ecosistema GGUF y cómo elegir**
- **Objetivo:** distingue los principales quant types de GGUF (Q4_K_M, Q5_K_M, Q6_K, Q8_0, entre otros que la investigación pedagógica confirme como relevantes), explica el criterio de elección (tamaño disponible vs. calidad necesaria vs. velocidad), y mide la diferencia real de calidad entre dos quant types del mismo modelo con un caso de prueba propio.
- **Prerrequisitos:** T1.
- **Competencias:** C-N10-01.
- **Entorno objetivo:** terminal local + RTX 5070 (referencia principal) con ruta CPU-only documentada.
- **Errores habituales:** asumir que un número más alto (Q8 vs Q4) es "objetivamente mejor" sin considerar que puede no caber en la VRAM disponible; comparar calidad de dos quant types con un solo prompt (no es evidencia suficiente); no saber leer el propio nombre del archivo como fuente de información real.
- **Modelo mental:** la familia de quant types como **un menú de compromisos, no una escala de mejor a peor** — cada nivel es la respuesta correcta para una restricción distinta (VRAM disponible, tolerancia a degradación, necesidad de velocidad).
- **Por qué:** existe porque "cuantizar" (T1) es el concepto; elegir CÓMO cuantizar es la decisión de ingeniería real que el estudiante enfrentará en cada proyecto futuro / ahora porque T1 ya dio el modelo mental general / habilita T3 (medición sistemática).
- **Evidencia de dominio:** dado un caso de uso descrito (ej. "asistente de código en una GPU de 12GB" vs. "chatbot de baja latencia"), justifica qué quant type elegiría y por qué, citando el trade-off explícito.
- **Práctica principal:** descarga de un mismo modelo base en 3 quant types distintos; batería de prompts de prueba propia (no solo "hola, ¿cómo estás?") diseñada para revelar diferencias de calidad (razonamiento matemático simple, seguimiento de instrucciones con formato estricto); comparación cualitativa documentada con evidencia real, no impresión.
- **Fuera de alcance (y por qué):** medición cuantitativa de velocidad/VRAM — T3. Métodos de cuantización más allá del ecosistema GGUF (AWQ/GPTQ) — mención breve como Beyond the Curriculum si la investigación pedagógica confirma que aportan algo distintivo, sin profundizar (fuera del alcance de DOC-10 §8 para este nivel).
- **Evaluación:** estándar DOC-12.
- **Pregunta ingenieril:** ¿cómo diseñarías un experimento que midiera objetivamente "cuánta calidad se pierde" al bajar de Q8 a Q4, en vez de confiar en tu impresión subjetiva leyendo las respuestas?

**N10.M2.T3 · Medición real en tu hardware — tamaño, VRAM, velocidad, antes/después**
- **Objetivo:** mide, con herramientas reales y en su propio hardware, el efecto de la cuantización sobre tamaño en disco, uso de VRAM al cargar, y velocidad de inferencia (tokens/segundo, tiempo al primer token) — antes y después de cuantizar el mismo modelo.
- **Prerrequisitos:** T2.
- **Competencias:** C-N10-01.
- **Entorno objetivo:** terminal local, RTX 5070 12GB como referencia principal; ruta CPU-only obligatoria como comparación (§3.2).
- **Errores habituales:** medir velocidad con una sola ejecución (varianza real entre corridas, hay que promediar); no separar tiempo de carga del modelo de tiempo de inferencia real; medir VRAM con una herramienta que no refleja el pico real de uso (KV cache crece con la conversación).
- **Modelo mental:** la medición de rendimiento como **un experimento controlado, no una anécdota** — mismo prompt, mismo hardware, múltiples corridas, promedio y varianza reportados, exactamente el principio de disciplina numérica que rige todo el proyecto (guía maestra §9) aplicado ahora a sistemas en vez de a un `check()`.
- **Por qué:** existe porque DOC-10 §8 exige explícitamente "medición antes/después" para este módulo, no una tabla ya dada / ahora porque T1-T2 ya dieron el vocabulario y el criterio de elección / habilita el laboratorio de cierre de M2 y todo M3 (que reutiliza estas mediciones para razonar sobre la jerarquía de memoria).
- **Evidencia de dominio:** produce una tabla propia (no copiada) con tamaño en disco, VRAM pico observada, y tokens/segundo para al menos 3 quant types del mismo modelo, medidos en su propia RTX 5070, con metodología explícita (cuántas corridas, cómo se promedió).
- **Práctica principal:** script de benchmarking propio (Python, cronometrando tokens generados) contra `nvidia-smi`/herramienta equivalente para VRAM; ejecución de la MISMA batería en modo CPU-only (forzando `n_gpu_layers=0`) para tener la comparación real GPU vs. CPU en el propio hardware, no en cifras ajenas; error inducido en vivo (`CUDA out of memory` al forzar más capas de las que caben, con su diagnóstico real).
- **Fuera de alcance (y por qué):** por qué la GPU es más rápida a nivel de hardware (arithmetic intensity, ancho de banda) — M3 completo, que retoma estas mismas mediciones para explicarlas.
- **Evaluación:** estándar DOC-12.
- **Pregunta ingenieril:** si tu columna vertebral local necesita responder en menos de 2 segundos por interacción, ¿qué combinación de quant type y hardware, de las que mediste, cumple esa restricción — y qué calidad sacrificaste para lograrlo?

**N10.M2.T4 · Laboratorio integrador — elegir y justificar, cierra M2**
- **Objetivo:** dado un caso de uso con restricciones explícitas (VRAM disponible, latencia máxima, calidad mínima aceptable), elige un quant type, lo justifica con datos propios producidos en T1-T3, y diagnostica el caso límite de un modelo que NO cabe en los 12GB de la RTX 5070.
- **Prerrequisitos:** T1-T3.
- **Competencias:** C-N10-01.
- **Entorno objetivo:** terminal local, RTX 5070.
- **Errores habituales:** elegir por intuición en vez de por los datos ya producidos en T3; no considerar el contexto (KV cache) al calcular si algo "cabe" — un modelo cuantizado que cabe solo, puede no caber con una conversación larga cargada.
- **Modelo mental:** el ingeniero de inferencia local como **quien negocia, con datos, entre tres fuerzas que compiten:** tamaño, velocidad y calidad — nunca hay una respuesta universalmente correcta, solo la mejor respuesta para una restricción dada.
- **Por qué:** existe porque integrar M1 (runtime) + M2 (cuantización) en una decisión real, defendible con evidencia, es exactamente la competencia C-N10-01 completa, no sus partes sueltas.
- **Evidencia de dominio:** produce un informe corto (formato libre, con datos y justificación) recomendando un quant type para 2 casos de uso distintos con restricciones diferentes, y diagnostica correctamente por qué un modelo de referencia (deliberadamente elegido para exceder 12GB incluso cuantizado agresivamente) no es viable en el hardware de referencia, proponiendo la mejor alternativa práctica.
- **Práctica principal:** mini-proyecto que integra M1.T1-T4 y M2.T1-T3 citados por dirección exacta; desafío final inédito: un modelo nuevo, no usado en ningún laboratorio anterior, con una restricción de hardware distinta a las ya vistas.
- **Evaluación:** estándar DOC-12 + mini-laboratorio de cierre de módulo.
- **Pregunta ingenieril:** tu columna vertebral local (capstone) va a necesitar tomar exactamente esta decisión una vez, en serio — ¿qué modelo y quant type es tu candidato de partida, y qué tendrías que medir todavía para confirmarlo?
- **Idea universal (cierre de M2):** cuantizar no es "hacer el modelo peor para que quepa" — es una decisión de ingeniería con un trade-off medible en tres ejes, y el ingeniero que la toma bien es el que midió, no el que adivinó.

### M3 · GPU, CUDA básico y jerarquía de memoria

> **La gran pregunta de este módulo: ¿por qué es la GPU más rápida para esto — y en qué momento exacto deja de serlo?**

**N10.M3.T1 · Por qué la GPU es rápida — paralelismo masivo frente a cómputo secuencial**
- **Objetivo:** explica la diferencia arquitectónica real entre CPU y GPU (pocos núcleos complejos y flexibles vs. miles de núcleos simples y paralelos), y por qué la inferencia de un LLM (multiplicaciones de matrices masivas y repetitivas) encaja exactamente en el segundo modelo.
- **Prerrequisitos:** M2 completo (el estudiante ya usó la GPU en la práctica en M2.T3 sin haber entendido todavía por qué era más rápida).
- **Competencias:** C-N10-01.
- **Entorno objetivo:** terminal local; el contenido conceptual de este tema es enseñable sin GPU (§3.5), con la RTX 5070 como ilustración real cuando aplique.
- **Errores habituales:** creer que la GPU es "una CPU más rápida" en vez de una arquitectura distinta para un tipo distinto de problema; no entender por qué un solo hilo en GPU es, de hecho, más lento que un solo hilo en CPU (la ventaja es la cantidad masiva, no la velocidad individual).
- **Modelo mental:** la CPU como **unos pocos expertos generalistas que resuelven un problema complejo cada uno**; la GPU como **miles de trabajadores simples que hacen, todos a la vez, la misma operación simple sobre datos distintos** — multiplicar una matriz gigante es exactamente ese segundo tipo de trabajo.
- **Por qué:** existe porque el estudiante ya vivió la diferencia de velocidad en M2.T3 sin explicación — este es el momento de dar el modelo mental correcto / ahora porque M1-M2 ya dieron la experiencia concreta que este tema explica / habilita T2-T5.
- **Evidencia de dominio:** dado un problema de cómputo descrito, predice si se beneficiaría más de arquitectura CPU o GPU, y justifica con el criterio de paralelismo (¿es la misma operación repetida sobre muchos datos independientes, o un cómputo secuencial con dependencias?).
- **Práctica principal:** demostración medible en el propio hardware — multiplicación de matrices grandes en Python puro/NumPy en CPU vs. la misma operación en GPU (PyTorch con CUDA o equivalente), midiendo el tiempo real y la brecha, conectándolo explícitamente con la brecha ya medida en M2.T3 para inferencia de LLM.
- **Fuera de alcance (y por qué):** la jerarquía de memoria y por qué el ancho de banda es el cuello de botella real en inferencia autoregresiva — T2.
- **Evaluación:** estándar DOC-12.
- **Pregunta ingenieril:** si la ventaja de la GPU es paralelismo masivo, ¿por qué generar UN token a la vez en un chat (inferencia autoregresiva) no aprovecha esa ventaja tan bien como entrenar un modelo (donde se procesan lotes completos)?

**N10.M3.T2 · Jerarquía de memoria — por qué la inferencia de LLMs está limitada por ancho de banda, no por cómputo**
- **Objetivo:** describe la jerarquía de memoria de una GPU moderna (registros, memoria compartida, caché L2, VRAM global) con sus órdenes de magnitud de velocidad y tamaño, y explica por qué la generación de texto token a token está típicamente limitada por ancho de banda de memoria (mover los pesos), no por capacidad de cómputo — el concepto de "arithmetic intensity"/roofline aplicado, a nivel introductorio, al caso concreto de decodificación autoregresiva.
- **Prerrequisitos:** T1.
- **Competencias:** C-N10-01.
- **Entorno objetivo:** terminal local; conceptual con analogías rigurosas + verificación empírica en RTX 5070.
- **Errores habituales:** asumir que "más núcleos CUDA" es la única variable que importa para velocidad de inferencia (ignora ancho de banda de memoria, a menudo el cuello de botella real); confundir VRAM (capacidad) con ancho de banda de memoria (velocidad de acceso) — son ejes distintos del mismo hardware.
- **Modelo mental:** la jerarquía de memoria como **una serie de almacenes cada vez más grandes y cada vez más lentos** — los registros son la mesa de trabajo (minúscula, instantánea), la VRAM global es la bodega completa (enorme, pero cada viaje hasta ahí cuesta caro); generar un token exige traer TODOS los pesos relevantes desde la bodega, una y otra vez, por cada token nuevo.
- **Por qué:** existe porque esta es LA explicación real de por qué cuantizar (M2) acelera la inferencia — no solo porque el modelo "pesa menos", sino porque hay menos bytes que mover desde la VRAM global en cada token / ahora porque T1 ya dio el paralelismo como ventaja general / habilita T3-T4, donde esto se mide directamente.
- **Honestidad metodológica sobre la fuente del marco conceptual (§8):** el roofline model / arithmetic intensity que este tema usa para explicar por qué el *decode* autoregresivo es memory-bound NO viene de la CUDA Programming Guide de NVIDIA (que no lo cubre) — viene de literatura de arquitectura de computadoras (Williams et al.) aplicada por la comunidad de inferencia LLM. Se enseña citando su origen real, nunca como si fuera parte de la documentación oficial de NVIDIA.
- **Evidencia de dominio:** explica, conectando explícitamente con M2, por qué un modelo cuantizado a Q4 genera tokens más rápido que el mismo modelo en FP16, en términos de bytes movidos por token — no solo "porque es más chico".
- **Práctica principal:** cálculo propio (script Python) de bytes que deben moverse desde VRAM para generar un token, a distintas precisiones, contrastado contra el ancho de banda de memoria real de la RTX 5070 (dato de especificación pública, verificado) — estimación del techo teórico de velocidad, comparado contra la velocidad real medida en M2.T3.
- **Fuera de alcance (y por qué):** cómo CUDA organiza el cómputo en sí (kernels, grids, threads) — T3.
- **Evaluación:** estándar DOC-12.
- **Pregunta ingenieril:** si duplicaras el número de núcleos CUDA de tu GPU sin cambiar el ancho de banda de memoria, ¿cuánto más rápida sería la generación de texto token a token? ¿Y si duplicaras el ancho de banda sin cambiar los núcleos?

**N10.M3.T3 · CUDA básico — qué es un kernel y cómo lo usan las herramientas que ya conoces**
- **Objetivo:** explica el modelo de programación CUDA a nivel de modelo mental (kernel, grid, block, thread) sin necesitar escribir CUDA C real, e identifica dónde y cómo llama.cpp/PyTorch usan CUDA por debajo de las herramientas que el estudiante ya operó en M1-M2.
- **Prerrequisitos:** T2.
- **Competencias:** C-N10-01.
- **Entorno objetivo:** terminal local; RTX 5070 con CUDA Toolkit instalado (verificación de versión).
- **Errores habituales:** creer que "usar CUDA" significa escribir kernels propios (para el 99% de los casos reales, incluida toda la inferencia de LLMs, se usan bibliotecas ya optimizadas); no saber diagnosticar si una herramienta realmente está usando CUDA o cayó silenciosamente a CPU.
- **Modelo mental:** un kernel CUDA como **la misma instrucción, repetida por miles de trabajadores simultáneos, cada uno con su propio identificador (thread) para saber qué porción de datos le toca** — organizados en grupos (blocks) dentro de una cuadrícula (grid).
- **Por qué:** existe porque el estudiante ya usó CUDA indirectamente en cada laboratorio de M1-M3 sin ver nunca la capa que lo hace posible / ahora porque T1-T2 ya dieron el modelo mental de paralelismo y memoria / habilita T4 (medición directa con herramientas de monitoreo de GPU).
- **Evidencia de dominio:** dado un fragmento simple de código CUDA (kernel de ejemplo, ilustrativo, sin exigir escribirlo desde cero), explica qué hace cada thread y cómo se relaciona con el problema de multiplicar matrices de T1.
- **Práctica principal:** verificación real de que las herramientas instaladas (llama.cpp compilado en T3 de M1, PyTorch si se usa) efectivamente invocan CUDA (con `nvidia-smi` mostrando utilización real durante inferencia, no solo memoria reservada); lectura guiada de un kernel de ejemplo mínimo (predicción antes de leer la explicación); error inducido en vivo (build sin soporte CUDA corriendo silenciosamente en CPU — diagnóstico de por qué "funciona" pero es lento).
- **Fuera de alcance (y por qué):** escribir kernels CUDA propios — fuera del alcance de DOC-10 §8 para este nivel (el objetivo es el modelo mental operativo, no ser desarrollador de kernels).
- **Evaluación:** estándar DOC-12.
- **Pregunta ingenieril:** si `nvidia-smi` muestra que tu GPU tiene memoria reservada pero 0% de utilización de cómputo durante una inferencia, ¿qué te dice eso sobre dónde está realmente el cuello de botella en ese momento?

**N10.M3.T4 · Medir tu propia GPU — VRAM, batching y saturación**
- **Objetivo:** mide, con `nvidia-smi`/herramientas equivalentes, el uso real de VRAM al cargar distintos modelos/cuantizaciones (conectando con M2), y observa el efecto de procesar varias solicitudes en paralelo (batching) sobre throughput y latencia individual.
- **Prerrequisitos:** T3.
- **Competencias:** C-N10-01, C-N10-02 *(operar la columna vertebral local con más de un usuario simultáneo, y medir el trade-off real de latencia que eso impone, es exactamente lo que C-N10-02 exige — corrección de cobertura del Paso 9b)*.
- **Entorno objetivo:** terminal local, RTX 5070 12GB como referencia principal; ruta CPU-only para batching (más limitada, documentada como comparación).
- **Errores habituales:** medir VRAM justo después de cargar el modelo, sin conversación activa, y sorprenderse cuando una conversación larga hace fallar la inferencia (KV cache crece con el contexto); asumir que batching siempre mejora todo (mejora throughput agregado, pero puede empeorar la latencia de una solicitud individual).
- **Modelo mental:** batching como **compartir el mismo viaje a la bodega (T2) entre varios pedidos** — si de todos modos hay que mover los pesos desde VRAM global, procesar varias solicitudes a la vez amortiza ese costo fijo entre más trabajo útil.
- **Por qué:** existe porque esta es la medición que conecta T2 (por qué el ancho de banda importa) con un caso de uso real (una columna vertebral local que sirve más de una solicitud) / ahora porque T3 ya dio las herramientas de verificación / habilita T5 (el laboratorio de cierre, que usa estas mediciones para diagnosticar el caso límite).
- **Evidencia de dominio:** produce mediciones propias de VRAM en función del tamaño de contexto cargado, y de throughput/latencia en función del tamaño de lote, con al menos 3 puntos de datos reales en cada caso — no una sola medición.
- **Práctica principal:** script propio de monitoreo de VRAM durante una conversación creciente; laboratorio de batching (varias solicitudes simultáneas a un servidor local de llama.cpp/Ollama) midiendo throughput agregado vs. latencia por solicitud, con y sin batching.
- **Fuera de alcance (y por qué):** batching y serving a escala de producción con colas y balanceo — eso pertenece al alcance de N9 (model serving con vLLM/Ray), no de N10, que mide el fenómeno en una sola máquina.
- **Evaluación:** estándar DOC-12.
- **Pregunta ingenieril:** si tu columna vertebral local necesita servir a 3 usuarios simultáneos, ¿qué le pasa a la latencia que percibe cada uno frente a servir a 1 solo? ¿Ese trade-off cambia tu elección de quant type de M2?

**N10.M3.T5 · Laboratorio integrador — diagnosticar el límite de 12GB, cierra M3**
- **Objetivo:** dado un modelo que NO cabe en los 12GB de VRAM de la RTX 5070 (ni siquiera cuantizado agresivamente), diagnostica exactamente por qué, con los conceptos de T1-T4 (tamaño de pesos + KV cache + overhead), y propone y VERIFICA la mejor alternativa práctica.
- **Prerrequisitos:** T1-T4.
- **Competencias:** C-N10-01, C-N10-02 *(operar con los límites reales del hardware, y la alternativa práctica verificada, es la pieza central de "opera su columna vertebral en local" — corrección de cobertura del Paso 9b)*.
- **Entorno objetivo:** terminal local, RTX 5070.
- **Errores habituales:** proponer una solución sin verificarla realmente (ej. "usar un modelo más chico" sin confirmar que el modelo elegido sí cabe con margen para el contexto real que se necesita); no considerar el offload parcial CPU/GPU como alternativa válida (más lento, pero funcional) frente a directamente descartar el modelo.
- **Modelo mental:** diagnosticar un fallo de memoria como **un presupuesto que no cierra** — cada componente (pesos cuantizados, KV cache, overhead de runtime) es una línea de gasto contra un total fijo de 12GB; la solución siempre pasa por reducir una de esas líneas o aumentar el total disponible (offload a RAM del sistema, más lento pero real).
- **Por qué:** existe porque el caso límite (mission-n10.md lo pide explícitamente: "cuando un modelo exceda las capacidades de una RTX 5070 de 12GB, explica claramente por qué ocurre y propone la mejor alternativa práctica") es donde el modelo mental completo de M3 se pone a prueba de verdad, integrado con M1-M2.
- **Evidencia de dominio:** ante un modelo real elegido deliberadamente para no caber (verificado por el propio estudiante, no asumido), produce un diagnóstico correcto citando la línea de presupuesto que falla, y una alternativa verificada funcionando (no solo propuesta en teoría).
- **Práctica principal:** mini-proyecto que integra M1 (runtime) + M2 (cuantización) + M3.T1-T4 (hardware) citados por dirección exacta; desafío final inédito: un segundo modelo, con una restricción de memoria distinta (ej. dejando VRAM ocupada por otro proceso simulado), que exige repetir el diagnóstico sin la misma ruta exacta ya vista.
- **Evaluación:** estándar DOC-12 + mini-laboratorio de cierre de módulo.
- **Pregunta ingenieril:** ¿qué le dirías a alguien que concluye "mi GPU no es suficientemente buena para IA local" tras este único fallo — qué le falta entender que tú ya entiendes después de M3?
- **Idea universal (cierre de M3):** la GPU no es mágicamente rápida — es rápida para un tipo específico de trabajo (paralelo, con datos que caben cerca), y sus límites (VRAM, ancho de banda) son tan predecibles y calculables como sus ventajas. Entender ambos es lo que separa a quien "prueba a ver si corre" de quien diseña con el hardware que tiene.
- **La limitación humana que compensa M3:** la dificultad de razonar intuitivamente sobre operaciones que ocurren miles de millones de veces por segundo en paralelo — la jerarquía de memoria y el modelo de roofline permiten calcular, sin poder "ver" el paralelismo directamente, qué determina la velocidad real de un sistema.

### M4 · Juicio de ecosistema

> **La gran pregunta de este módulo: ¿cómo decides, con evidencia propia y no con la opinión de un foro, qué herramienta usar?**

**N10.M4.T1 · Criterios de evaluación de herramientas del ecosistema local**
- **Objetivo:** define un conjunto explícito de criterios (rendimiento medible, facilidad de integración, madurez/mantenimiento del proyecto, licencia, comunidad) para evaluar una herramienta del ecosistema de IA local, y los aplica a un primer barrido comparativo superficial (sin prototipo aún) de al menos 3 alternativas reales del ecosistema (Ollama, llama.cpp puro, y una tercera — LM Studio, vLLM en modo local, text-generation-webui, u otra vigente al momento de escribir, confirmada por investigación pedagógica real).
- **Prerrequisitos:** M1-M3 completos.
- **Competencias:** C-N10-03.
- **Entorno objetivo:** terminal local + investigación de documentación/repositorios reales.
- **Errores habituales:** evaluar herramientas solo por popularidad (estrellas de GitHub) sin verificar mantenimiento activo real; confundir "tiene más funciones" con "es mejor para mi caso de uso"; no declarar los criterios ANTES de comparar (sesgo de racionalizar después la herramienta que ya se prefería).
- **Modelo mental:** evaluar herramientas como **un comité de contratación, no una encuesta de popularidad** — criterios declarados de antemano, evidencia contra cada uno, decisión justificada, no vibra.
- **Por qué:** existe porque el ecosistema de IA local cambia constantemente (nuevas herramientas, nuevas versiones) — enseñar "usa X" envejece mal; enseñar "así se evalúa cualquier X" no / ahora porque el estudiante ya tiene experiencia real operando M1-M3 y puede evaluar con criterio informado, no de oídas / habilita T2 (el prototipo real).
- **Evidencia de dominio:** produce una tabla de criterios propia, aplicada a 3 herramientas reales, con evidencia citada (no solo impresión) para cada celda.
- **Práctica principal:** investigación real de documentación/repositorios de 3 herramientas del ecosistema; tabla comparativa propia con criterios declarados antes de investigar.
- **Fuera de alcance (y por qué):** medición de rendimiento real de cada herramienta — T2 (el prototipo).
- **Evaluación:** estándar DOC-12.
- **Pregunta ingenieril:** si una herramienta tiene mejor rendimiento medido pero peor comunidad/mantenimiento, ¿en qué escenario real elegirías la más lenta de todos modos?

**N10.M4.T2 · Prototipo comparativo con datos propios**
- **Objetivo:** construye el MISMO caso de uso pequeño (ej. servir un modelo y medir latencia/throughput de una tarea concreta) con al menos 2 herramientas distintas del ecosistema local, y las compara con mediciones propias, no con benchmarks de terceros.
- **Prerrequisitos:** T1.
- **Competencias:** C-N10-03.
- **Entorno objetivo:** terminal local, RTX 5070 como referencia.
- **Errores habituales:** comparar dos herramientas con configuraciones no equivalentes (distinto quant type, distinto modelo) e invalidar la comparación sin notarlo; medir una sola vez y sacar conclusiones (mismo error de rigor que M2.T3, ahora aplicado a comparar herramientas en vez de quant types).
- **Modelo mental:** el prototipo comparativo como **el mismo experimento controlado de M2.T3, con la herramienta como la única variable que cambia** — todo lo demás (modelo, quant type, hardware, prompt) se mantiene idéntico entre las dos corridas.
- **Por qué:** existe porque DOC-10 §8 exige explícitamente "evaluar herramientas con prototipo" — no una comparación de tablas leídas, sino construir algo pequeño y medirlo con datos propios / ahora porque T1 ya dio los criterios / habilita T3 (la decisión final).
- **Evidencia de dominio:** produce mediciones reales (no copiadas) del mismo caso de uso en 2+ herramientas, con metodología controlada explícita.
- **Práctica principal:** mini-proyecto: mismo modelo/quant type servido con 2 herramientas distintas, mismo batería de prompts de prueba (reutilizada de M2.T2 cuando aplique), medición de latencia/throughput/facilidad de integración real (líneas de código necesarias, tiempo de setup).
- **Fuera de alcance (y por qué):** la decisión final fundamentada — T3, que cierra el módulo.
- **Evaluación:** estándar DOC-12.
- **Pregunta ingenieril:** ¿qué mediría tu prototipo que un blog post comparativo de terceros probablemente no midió con el mismo rigor — y por qué esa diferencia importa para TU decisión, no la de un tercero?

**N10.M4.T3 · Decisión fundamentada — laboratorio integrador, cierra M4 y el nivel**
- **Objetivo:** produce un informe de adopción o descarte de una herramienta del ecosistema local para el caso de uso de su propia columna vertebral (capstone), integrando M1-M4 completos, con evidencia propia citada por dirección exacta.
- **Prerrequisitos:** M1-M4.T1-T2.
- **Competencias:** C-N10-01, C-N10-02, C-N10-03 *(la decisión de stack completo del Paso 2 de este laboratorio integra explícitamente trade-offs frente a la nube — corrección de cobertura del Paso 9b)*.
- **Entorno objetivo:** terminal local, RTX 5070.
- **Errores habituales:** producir un informe sin integrar realmente M1-M3 (repetir solo lo de M4.T1-T2 sin citar las mediciones de runtimes/cuantización/GPU ya hechas); no declarar qué NO se evaluó y por qué (honestidad de alcance, mismo principio que rige toda la Academia).
- **Modelo mental:** el juicio de ecosistema como **la competencia que sobrevive a cualquier herramienta específica** — Ollama, llama.cpp o cualquier alternativa de hoy pueden quedar obsoletas; el método para evaluar la siguiente herramienta, no.
- **Por qué:** existe porque C-N10-03 exige explícitamente "evalúa herramientas del ecosistema local... con prototipo, medición y juicio de adopción o descarte" — este es el instrumento que produce esa evidencia de forma completa e integrada.
- **Evidencia de dominio:** informe real que cita, por dirección exacta, mediciones de M1-M4, con una recomendación de adopción/descarte defendible.
- **Práctica principal:** mini-proyecto integrador final del nivel (previo al capstone): informe de decisión para el stack de runtime + herramientas que alimentará el capstone ET4; desafío final inédito: una herramienta nueva del ecosistema, no evaluada en T1-T2, que el estudiante debe evaluar con el mismo método de forma autónoma.
- **Evaluación:** estándar DOC-12 + mini-laboratorio de cierre de módulo (integra M1-M4 completos).
- **Pregunta ingenieril:** dentro de 12 meses, cuando el ecosistema haya cambiado (nuevas herramientas, versiones), ¿qué de lo que aprendiste en M4 sigue siendo válido y qué tendrás que volver a verificar desde cero?
- **Idea universal (cierre de M4 y del nivel):** en un ecosistema que cambia constantemente, la competencia real no es "saber cuál herramienta es la mejor hoy" — es saber, con método propio, evaluar cualquier herramienta nueva que aparezca mañana.

## 5bis. Registro de expansión — laboratorios adicionales (directiva de calidad del Director, 2026-07-22)

*Cada tema del §5 se expandió de 1 laboratorio a una secuencia de 2-3, calibrada por profundidad real disponible en cada tema, no por una cuota fija (§8, principio anti-relleno ya vigente en el nivel). Cada laboratorio nuevo tiene su propia ficha completa en `index.html` (objeto JS) y su lección espejo en `docs/lecciones/n10/`, con investigación pedagógica verificada por fetch directo antes de escribirse — no se listan las 13 secciones completas aquí para no duplicar el contenido real; este registro es un índice con la fuente principal de cada laboratorio nuevo, para auditoría rápida de cobertura.*

### M1 · Runtimes locales (4 → 9)

| Lab | Título | Fuente principal verificada |
|---|---|---|
| `n10m1t1` (a) | Por qué correr un LLM en local — panorama y primer modelo vivo | Ollama docs (ya en §8) |
| `n10m1t1b` | La economía real de correr un LLM en local | LLMflation (a16z), arXiv 2606.11690 (costo por concurrencia) |
| `n10m1t1c` | El panorama de modelos abiertos — licencias, benchmarks y criterio | OSI (licencia Llama), arXiv 2412.15194 (MMLU-CF), arXiv 2504.20879 (Leaderboard Illusion), GitHub Engineering |
| `n10m1t2` | Ollama a fondo — Modelfile, API REST | Ollama API docs (ya en §8) |
| `n10m1t2b` | Construir un cliente robusto — timeouts/reintentos/circuit breaker | Google SRE Book cap. 21-22, Release It! (Nygard), issues reales de Ollama (#8274, #6380, #9209) |
| `n10m1t3` (a) | Qué hay debajo de Ollama — llama.cpp | llama.cpp README (ya en §8) |
| `n10m1t3b` | Arquitectura interna — GGML | GGML README, Ollama development.md, ggml-org discussion #141 |
| `n10m1t4` (a) | El formato GGUF — cierra M1 | GGUF spec (ya en §8) |
| `n10m1t4b` | Convertir un modelo de HuggingFace a GGUF | convert_hf_to_gguf.py (código fuente real) |

### M2 · Cuantización y optimización (4 → 6)

| Lab | Título | Fuente principal verificada |
|---|---|---|
| `n10m2t1` (a) | Qué es cuantizar | HF GGUF docs (ya en §8) |
| `n10m2t1b` | Fundamentos numéricos — IEEE 754 | arXiv 1905.12322 (BF16), Denil et al. NeurIPS 2013, arXiv 2309.10975 |
| `n10m2t2` (a) | Tipos de cuantización GGUF | HF GGUF docs (ya en §8) |
| `n10m2t2b` | AWQ y GPTQ vs. GGUF | arXiv 2210.17323 (GPTQ), arXiv 2306.00978 (AWQ), oobabooga (perplejidad real medida) |
| `n10m2t3` | Medición real en hardware | (sin cambio de fuente, ya sólido) |
| `n10m2t4` | Laboratorio integrador | (sin cambio de fuente, ya sólido) |

### M3 · GPU, CUDA básico y jerarquía de memoria (5 → 7)

| Lab | Título | Fuente principal verificada |
|---|---|---|
| `n10m3t1` | Por qué la GPU es rápida | CUDA Programming Guide (ya en §8) |
| `n10m3t2` (a) | Jerarquía de memoria | CUDA Programming Guide (ya en §8) |
| `n10m3t2b` | Roofline model — ridge point real de la RTX 5070 | Williams et al. 2009 (ACM), arXiv 2402.16363, specs oficiales NVIDIA |
| `n10m3t3` | CUDA básico | CUDA Programming Guide (ya en §8) |
| `n10m3t4` (a) | Medir tu propia GPU | (sin cambio de fuente) |
| `n10m3t4b` | L2 cache y por qué el KV cache no vive ahí | arXiv 2503.08311, Chips and Cheese (crecimiento real de L2 en Blackwell) |
| `n10m3t5` | Laboratorio integrador | (sin cambio de fuente, ya sólido) |

### M4 · Juicio de ecosistema (3 → 5)

| Lab | Título | Fuente principal verificada |
|---|---|---|
| `n10m4t1` (a) | Criterios de evaluación | (ya sólido) |
| `n10m4t1b` | Architecture Decision Records | Nygard 2011 (Cognitect), Backstage/Cosmos SDK (adopción real verificada) |
| `n10m4t2` (a) | Prototipo comparativo (vLLM) | vLLM docs, issue Blackwell #35432 (ya en investigación de M4) |
| `n10m4t2b` | PagedAttention en profundidad | Kwon et al. SOSP 2023, arXiv 2309.06180 |
| `n10m4t3` | Decisión fundamentada | (sin cambio de fuente, ya sólido) |

**Corrección de competencias aplicada durante la expansión:** M1.T1 y M4.T3 ganaron C-N10-02 como competencia secundaria (ya reflejado en sus fichas de §5) — la profundización económica de M1.T1b y la síntesis de M4.T3 refuerzan, no diluyen, esa cobertura ya corregida en el Paso 9b.

## 6. Proyecto de nivel (capstone ET4) — diseño completo (Paso 4, construido en `index.html` como `n10et4`)

**Nombre:** *"La columna vertebral, en tu propia máquina"* — la prueba de que M1-M4 se sostienen juntos migrando el componente más crítico (inferencia) de un sistema real ya construido (N7-N9), no reconstruyendo ese sistema desde cero.

**Por qué esta forma y no otra:** el riesgo, igual que en N1/N2/N3, es que el capstone se convierta en 4 entregas sueltas ("aquí mi runtime, aquí mi cuantización, aquí mi hardware, aquí mi herramienta de serving"). La corrección, por diseño: el Hito 3 (capacidad agéntica) depende explícitamente de que el Hito 2 (núcleo RAG local) ya funcione — no son piezas paralelas independientes; el Hito 4 mide exactamente lo que los Hitos 2-3 construyeron, no un experimento nuevo aislado. **Decisión de diseño central, distinta de N1/N2/N3:** el capstone de N10 NO parte de un dominio libre elegido por el estudiante — parte explícitamente de la columna vertebral YA construida en N7-N9 (los `componentesSupuestos` declarados en el objeto, idénticos a los supuestos de trabajo de §2.1), porque DOC-10 define este capstone como "la síntesis de N7+N8+N9+N10", no como un proyecto nuevo. El objeto incluye una cuarta entrada en `componentesSupuestos` para el caso honesto de que N7/N8/N9 no estén disponibles al momento real de este proyecto (construcción paralela) — mismo principio de "Desarrollo nunca espera a Validación" ya aplicado en §2.1.

**Diferencia estructural frente a N3 (declarada honestamente):** N3 es 100% Pyodide y omite `flujoDeGit` en su capstone. N10 es DOC-12 dominante — el capstone incluye `flujoDeGit`, con una diferencia de tono deliberada frente a N1 (donde Git todavía se explicaba paso a paso): a esta altura de la Academia, Git "ya no se explica — se practica", y el capstone es explícitamente una rama de evolución de un repositorio YA existente (la columna vertebral de N7-N9), no un repositorio nuevo — otra consecuencia directa de que este capstone migra un sistema real en vez de construir uno desde cero.

**Los 4 ejes de trade-off del Hito 4** (costo, latencia, calidad, privacidad/disponibilidad offline) instancian directamente DOC-10 §8 ("los trade-offs frente a la nube documentados") con la misma disciplina de medición real que rige M2.T3/M3.T4 — ningún eje se acepta sin dato propio.

**Verificación de síntesis (criterio adversarial aplicado en este paso, no solo al final):** ¿podría un estudiante completar esto entregando las 4 piezas por separado, sin integrarlas? No — el Hito 3 no puede completarse sin que el Hito 2 ya esté funcionando (la capa agéntica necesita el núcleo RAG local operativo primero), y el Hito 4 exige medir exactamente los componentes construidos en 2-3, no datos genéricos. La checklist de evaluación (en el objeto `n10et4.evalu.checklist`) mapea explícitamente cada módulo M1-M4 a un hito concreto, sin dejar ninguno como mención de pasada.

**Defensa (mismo estándar que N1/N2/N3):** derivar en vivo el cálculo de presupuesto de VRAM del Hito 3 (no leerlo, explicarlo); justificar cuál de los 4 ejes de trade-off sorprendió más al medirlo; y la **pregunta de validación final** (estándar permanente de todos los capstones de la Academia desde N2, adaptada aquí): ¿confiarías tú mismo en que esta versión local está lista para ser la que usas de verdad, en vez de la de N7-N9? — con la salvedad explícita, coherente con el encuadre de "adopción o descarte" de M4, de que una conclusión honesta de "no vale la pena todavía" es una respuesta tan válida como "sí vale la pena".

## 7. Paso 9a · Auditoría de coherencia desde SYL-N11 y Herencias Declaradas finales

### 7.1 Herencia entrante consolidada desde N7/N8/N9 (ver §2.1 — sigue pendiente de confirmación cuando esas ramas congelen; sin cambios frente al borrador, verificado contra el capstone real `n10et4`)

Sistema RAG operativo (N7) extendido a agéntico con fiabilidad medida (N8), desplegado y observado como infraestructura (N9) — N10 asume que existe, en la forma descrita en §2.1, y no lo reintroduce. Confirmado contra el contenido real: los `componentesSupuestos` del capstone (`n10et4`) instancian exactamente esta herencia, con el fallback honesto ya declarado si N7-N9 no están disponibles al momento real del proyecto.

### 7.2 Auditoría de coherencia desde `docs/mision-n11.md` y DOC-01 (C-N11-01…05) — verificado contra el contenido real de M1-M4 y el capstone, no contra el plan

*Leído `docs/mision-n11.md` completo antes de consolidar esta tabla. Hallazgo relevante para la coherencia: N11 es predominantemente lectura crítica/reproducción de papers/open source — no continúa el proyecto columna vertebral de forma directa (esa cadena, según DOC-10 línea 86, salta de N10 a N12). Esto corrige un error real del borrador anterior de este mismo documento, que declaraba una herencia H-N11-04 sobre "la columna vertebral completa" hacia N11 — encontrado y corregido en esta auditoría, antes de que el Director la señalara.*

| # | N10 siembra | N11 deberá recoger |
|---|---|---|
| H-N11-01 | Disciplina de medición real bajo restricciones de hardware (M2.T3, M3.T4-T5): mínimo 3 corridas, promedio y varianza reportados, nunca una cifra de una sola ejecución | N11.M2 (Reproducción de un paper) exige reimplementar y "contrastar resultados obtenidos con lo reportado" (C-N11-01) — la misma disciplina de nunca aceptar una cifra sin medirla, ahora aplicada a resultados de investigación en vez de rendimiento de sistemas |
| H-N11-02 | Honestidad metodológica explícita cuando una fuente no cubre lo que se necesita (declarada y aplicada en cada investigación pedagógica de N10 — el caso más claro: el roofline model no viene de NVIDIA, M3.T2) | C-N11-04 ("reporta resultados fielmente aunque contradigan lo esperado; atribuye el trabajo ajeno") es, literalmente, la misma disciplina de honestidad de fuente ya practicada 4 veces en N10, ahora exigida como competencia central del nivel siguiente |
| H-N11-03 | Juicio de ecosistema — criterios declarados antes de investigar, evidencia citada, veredicto de adopción o descarte igualmente válidos (M4 completo) | El ecosistema de investigación de frontera (N11.M1, "papers actuales con autonomía") cambia tan rápido como el de herramientas locales; el mismo método de evaluación con criterio propio, sin guía, aplica directamente |
| H-N11-04 | Competencia operativa real de instalar/diagnosticar/documentar fallos de compatibilidad de software de frontera (M4.T2, el caso vLLM/RTX 5070) | N11.M4 (Open source: issues, PRs, code review en proyectos reales) exige exactamente este tipo de fricción real con software ajeno, fuera del control del propio diseño — N10 ya lo practicó una vez con un caso real y documentado |

**Prerrequisitos ocultos verificados (preliminar, sujeto a confirmación cuando N11 module por completo):** ninguno encontrado — N11.M1-M4 son, según su propia ficha de misión, mayoritariamente lectura/escritura/colaboración externa, sin dependencia técnica directa de M1-M4 de N10 más allá del vocabulario y la disciplina de las 4 herencias de arriba. Consistente con el grafo de DOC-10 (N10 no aparece como prerrequisito técnico explícito de N11 más allá de la etapa ET4 completa).

**Nota declarada explícitamente para la ventana de N11:** `docs/mision-n11.md` advierte que su propio nivel "no encaja bien en el esquema estándar de día/tema" (M2 es un proyecto de varias semanas tipo hitos, M3 usa rúbricas de escritura en vez de `check()`, M4 depende de terceros reales) — esto no es una herencia que N10 deba resolver, pero se documenta aquí para que la auditoría de N11 no lo redescubra como sorpresa.

## 8. Bibliografía oficial del nivel *(registro vivo)*

*Investigación pedagógica verificada por fetch directo (2026-07-21) a las 4 fuentes oficiales que DOC-10 §8 ya cita, más cruces necesarios para llenar vacíos honestos que ninguna de las 4 cubre por sí sola. Síntesis crítica, no colección — ver también la nota de honestidad metodológica al cierre de esta sección.*

**Ollama** (`docs.ollama.com`, `github.com/ollama/ollama/blob/main/docs/api.md`) — servidor HTTP + gestión de modelos construido sobre el motor de llama.cpp (CGo binding `llamarunner`, más un runner propio en Go para arquitecturas nuevas). API en `localhost:11434`: `/api/generate`, `/api/chat`, `/api/pull`, `/api/create`, `/api/show`, `/api/ps`, `/api/embed`; `keep_alive` controla cuánto tiempo un modelo queda cargado en memoria (default 5 min). Modelfile: 7 instrucciones (`FROM`, `PARAMETER`, `TEMPLATE`, `SYSTEM`, `ADAPTER`, `LICENSE`, `MESSAGE`); se puede construir directo desde un GGUF local con `FROM ./modelo.gguf`. **Errores de novato documentados, candidatos directos a M1.T1-T2 y M2.T3:** GPU no detectada por driver faltante, WSL2 mal configurado (el driver de Windows se proyecta como `libcuda.so` dentro de WSL2; instalar un driver Linux encima lo rompe), `CUDA_VISIBLE_DEVICES=-1` puesto sin querer, o el flag `--gpus` olvidado en Docker; diagnóstico correcto con `ollama ps` ("100% CPU" = GPU no usada; "offloaded 20/32 layers to GPU" = el modelo no cabe entero, mezcla que degrada mucho la velocidad — caso directo para M3.T4/T5); `OLLAMA_NUM_PARALLEL × OLLAMA_CONTEXT_LENGTH` determina la memoria requerida.

**llama.cpp** (`github.com/ggml-org/llama.cpp`, README + `tools/server/README.md` + `tools/cli/README.md`) — objetivo declarado del proyecto, cita textual: *"enable LLM inference with minimal setup and state-of-the-art performance on a wide range of hardware — locally and in the cloud."* Cuantización de 1.5 a 8 bits enteros; aceleración específica por hardware (CUDA propio para NVIDIA, más ARM NEON/Metal/HIP/AVX según plataforma); soporta **hybrid CPU+GPU processing** para modelos que exceden la VRAM disponible — el escenario exacto de M3.T5 en una RTX 5070 de 12GB. Parámetros clave: `-t/--threads` (recomendado = núcleos físicos), `-c/--ctx-size` (contexto, default 4096), `-ngl/--n-gpu-layers` (capas a GPU; acepta número, `auto` o `all`); usa `mmap` por defecto (cargas subsecuentes del mismo archivo casi instantáneas; `--no-mmap` lo desactiva — dato directo para M1.T3). **Errores de novato:** fallo de carga por GGUF corrupto/truncado, arquitectura no soportada por el build, o memoria contigua insuficiente; fix estándar para OOM es reducir `-c` a la mitad (ahorra ~2GB en un 7B pasando de 4096→2048), reducir `-ngl`, o forzar CPU-only — **nunca usar `--mlock` con poca RAM** (fija el modelo completo en memoria, puede empeorar el OOM en vez de resolverlo); `gguf-dump` (paquete `gguf` de pip) valida un archivo sin arrancar inferencia.

**Formato GGUF** — la especificación oficial vive en `github.com/ggml-org/ggml/blob/master/docs/gguf.md` (**no en el repo de llama.cpp**, aunque este lo implementa — corrección aplicada a M1.T4). Motivo real del reemplazo de GGML/GGMF/GGJT: los formatos anteriores carecían de versionado y de forma de identificar la arquitectura del modelo; añadir un hiperparámetro nuevo rompía compatibilidad sin que los lectores pudieran detectarlo. Innovación clave: metadatos clave-valor tipados (no una lista posicional sin tipo), lo que permite extender el formato sin romper modelos existentes. Estructura real: header (número mágico "GGUF", versión, conteo de tensores, metadatos) → info de tensores (nombres/dimensiones/tipos/offsets) → padding de alineación (mínimo múltiplos de 8, default 32 bytes) → datos binarios. Creado por ggerganov (mismo autor de llama.cpp), confirmado en `huggingface.co/docs/hub/en/gguf`.

**Cuantización — quant types GGUF** (`huggingface.co/docs/hub/en/gguf`, tabla oficial, cruzada con `tools/quantize` de llama.cpp): dos familias — tipos "legacy" (Q4_0, Q4_1, Q5_0, Q5_1, Q8_0, HF los marca ya como "not used widely as of today") y la familia **K-quant** más reciente (Q2_K a Q6_K, super-bloques con escalas/mínimos de mayor precisión). Bits-por-peso oficiales: Q4_K ≈ 4.5 bpw, Q5_K ≈ 5.5 bpw, Q6_K ≈ 6.5625 bpw, Q2_K ≈ 2.625 bpw. Q4_K_M reserva Q6_K (más precisión) para los tensores que más impactan calidad (`attention.wv`, `feed_forward.w2`) y Q4_K para el resto; Q5_K_M preserva mejor rendimiento que Q4 en código/razonamiento; K_M reserva más bits a capas de atención críticas frente a K_S. GGUF (formato) vs. AWQ/GPTQ (algoritmos de cuantización, no formatos, típicamente fuera del ecosistema llama.cpp): GGUF gana en portabilidad CPU/GPU mixta — la elección correcta y coherente para el hardware del estudiante (RTX 5070 12GB, uso local mixto); AWQ/GPTQ ganan en throughput puro en GPU de servidor dedicada, fuera del alcance de este nivel. **Honestidad metodológica aplicada en M2.T2:** la cifra circulante de "~75% menos tamaño, ~3.5% menos calidad" para Q4_K_M frente a FP16 viene de fuentes secundarias (blogs), no de una medición oficial — coherente con el Principio §3.3 de este syllabus, M2 exige que el estudiante la mida en su propio hardware en vez de citarla como verdad de laboratorio.

**CUDA Programming Guide** (`docs.nvidia.com/cuda/.../cuda-c-programming-guide`, verificado v12.3 y v13.3): estructura real — Parte 1 (modelo de programación, agnóstico al lenguaje), Parte 2 (kernels SIMT, memoria, NVCC), Parte 3 (multi-GPU), Parte 4 (Unified Memory, CUDA Graphs), Parte 5 (apéndices de compute capabilities). Cita textual usada como ancla del modelo mental de M3.T1: *"The GPU is specialized for highly parallel computations and therefore designed such that more transistors are devoted to data processing rather than data caching and flow control."* Jerarquía de memoria confirmada para M3.T2: registros (privados por thread) → shared memory (por bloque, latencia ~L1) → global memory (accesible por todos los threads, persiste entre kernels) → memoria constante/textura (solo lectura). Modelo de ejecución: GPU organizada en Streaming Multiprocessors (SMs); bloques de hasta 1024 threads se co-programan en un SM; unidad mínima de ejecución es el warp de 32 threads en lockstep (SIMT).

**GPU Mode** (`github.com/gpu-mode`, `gpumode.com`, Discord `discord.gg/gpumode`) — confirmado real y activo. Fundada por **Mark Saroufim** y **Andreas Köpf**, Discord creado 2023-12-27, originalmente bajo el nombre "CUDA Mode" (el invite antiguo `discord.com/invite/cudamode` sigue redirigiendo a la comunidad renombrada). Repos educativos: `lectures` (Jupyter Notebooks, grabaciones semanales también en YouTube `@GPUMODE`), `resource-stream` (noticias/enlaces curados), `awesomeMLSys` (onboarding en sistemas de ML). Enfoque: GPU programming aplicado (CUDA, Triton) orientado a ML/LLMs, con competencias de optimización de kernels — coherente como recurso 🟣 *después*/⭐ *profundización* de M3, no como documentación de referencia (ese rol lo cumple la CUDA Guide).

**Hallazgo que condiciona el diseño de M3 (honestidad metodológica obligatoria, DOC-11 §0bis / DOC-12 §0bis):** el *roofline model* / *arithmetic intensity* — el concepto que M3.T2 necesita para explicar por qué la fase de *decode* autoregresiva está limitada por ancho de banda de memoria, no por cómputo — **no aparece en la CUDA Programming Guide oficial de NVIDIA.** Viene de literatura académica de arquitectura de computadoras (Williams et al., *"Roofline: An Insightful Visual Performance Model"*) aplicada después, por la comunidad de ingeniería de inferencia (no por NVIDIA), al caso concreto de LLMs — confirmado con fuentes técnicas (arXiv 2402.16363 y análisis de práctica real, con la cifra citada de ~0.6% de utilización de cómputo de GPU en decode con batch=1, ilustrativa de cuánto domina el cuello de botella de memoria). **Decisión de diseño aplicada:** M3.T2 declara esto explícitamente al estudiante — el roofline model se enseña como marco conceptual de la literatura de sistemas, con crédito a su origen académico real, nunca presentado como si viniera de la documentación oficial de NVIDIA citada en DOC-10.

**Limitación de la investigación declarada honestamente:** `gpumode.com` no pudo renderizarse completo por WebFetch (sitio con JS pesado); la caracterización de la comunidad se apoya en su organización pública de GitHub y búsquedas cruzadas, no en fetch directo de la home — sólido pero no de primera mano en ese punto específico.

## 9. Observaciones de ejecución

*(Registro vivo, práctica institucional desde SYL-N0 — se completa cuando existan sesiones reales del estudiante en este nivel.)*

Ninguna todavía — el nivel no ha comenzado a impartirse.

## 10. Paso 8 · Compuertas — cobertura de competencias y banco de examen

### Revisión de las compuertas

| Instrumento | Qué verifica | Norma |
|---|---|---|
| **Examen** (banco rotable ≥3 variantes/ítem, NNR-02 — ver banco completo abajo) | Conocimiento operativo: cálculo de presupuestos de hardware, decisiones de cuantización, juicio de adopción/descarte, sobre las 3 competencias | DOC-02 |
| **Capstone (`n10et4`, "La columna vertebral, en tu propia máquina")** | Síntesis real: M1-M4 integrados migrando un sistema real (N7-N9) a inferencia local, con trade-offs medidos | OBJ-05 |
| **Defensa oral** (derivación en vivo del presupuesto de VRAM del Hito 3, justificación de los 4 ejes de trade-off del Hito 4) | Comprensión real, no memorización — mismo estándar que N1/N2/N3 | RM-05 |

**Cobertura de competencias — verificación explícita:**

| Competencia | Verificada por |
|---|---|
| C-N10-01 (ejecuta y optimiza inferencia local: cuantización, aceleración, medición antes/después) | M1 completo (4 labs) + M2 completo (4 labs) + M3.T1-T3 + ítems 1-2, 6 del banco de examen + Capstone Hitos 1-2 |
| C-N10-02 (opera su columna vertebral en local, con trade-offs frente a la nube documentados) | M1.T1 (motivación, ejes de trade-off) + M3.T4-T5 (operar con límites reales de hardware, latencia bajo concurrencia) + M4.T3 (síntesis de stack) + ítems 3-4 del banco de examen + Capstone Hitos 1, 3-4 |
| C-N10-03 (evalúa herramientas del ecosistema local con prototipo, medición y juicio de adopción o descarte) | M4 completo (3 labs) + ítems 5-6 del banco de examen + Capstone Hito 1 (evolución del informe de M4.T3) |

**Corrección aplicada tras la auditoría adversarial (Paso 9b):** la versión anterior de esta tabla afirmaba que C-N10-02 se verificaba con "M3 completo (5 labs)", pero ningún laboratorio del syllabus tenía realmente esa competencia etiquetada en su ficha (§5) — contradicción interna real, encontrada por un auditor independiente, no autodetectada. Corregido en dos frentes: (1) se re-etiquetaron con C-N10-02, con justificación explícita en su propia ficha, los 4 laboratorios donde el contenido genuinamente la sirve (M1.T1, M3.T4, M3.T5, M4.T3) — no todo M3, porque M3.T1-T3 son sobre el hardware en sí, no sobre operar la columna vertebral con trade-offs frente a la nube; (2) esta tabla ahora cita esos labs exactos en vez de "M3 completo". **Hallazgo de diseño que se mantiene, ya verificado como intencional:** N10 tiene 3 competencias para 4 módulos — M3 no tiene una competencia dedicada en solitario, sirve como fundamento instrumental de C-N10-01 (T1-T3) y de C-N10-02 (T4-T5) simultáneamente. Coherente con DOC-01, no una omisión.

### Banco de examen — ítems rotables (≥3 variantes por ítem, NNR-02)

*Formato oral con cálculo en vivo — el examinador elige UNA variante por ítem al azar en cada aplicación, nunca las tres a la vez. Todos los valores numéricos verificados por ejecución real (Node.js) antes de fijarse aquí — nunca calculados de memoria, mismo principio que rige cada ejercicio de M1-M4.*

**Ítem 1 (C-N10-01 · tamaño de modelo vs. presupuesto de VRAM).** "Un modelo tiene P mil millones de parámetros, cuantizado a B bits por parámetro. Calcula su tamaño en GB. Si tienes V GB de VRAM y necesitas reservar R GB para KV cache/overhead, ¿cabe el modelo? Si no cabe, ¿cuál es el déficit exacto?"
- Variante A: P=8, B=8 (Q8), V=12, R=2 → tamaño=**7.45GB**, disponible=10GB, **cabe** (margen 2.55GB).
- Variante B: P=13, B=4 (Q4), V=12, R=1.5 → tamaño=**6.05GB**, disponible=10.5GB, **cabe** (margen 4.45GB).
- Variante C: P=32, B=4 (Q4), V=12, R=1 → tamaño=**14.90GB**, disponible=11GB, **NO cabe** (déficit 3.90GB).

**Ítem 2 (C-N10-01 · reducción por cuantización).** "Un modelo de P mil millones de parámetros se cuantiza de A bits-por-peso (bpw) a B bpw. Calcula el tamaño antes, el tamaño después, y el porcentaje de reducción."
- Variante A: P=7, A=8 (Q8_0), B=4.5 (Q4_K) → antes=**6.52GB**, después=**3.67GB**, reducción=**43.8%**.
- Variante B: P=13, A=16 (FP16), B=5.5 (Q5_K) → antes=**24.21GB**, después=**8.32GB**, reducción=**65.6%**.
- Variante C: P=3, A=6.5625 (Q6_K), B=2.625 (Q2_K) → antes=**2.29GB**, después=**0.92GB**, reducción=**60.0%**.

**Ítem 3 (C-N10-02 · punto de equilibrio de costo cloud vs. local).** "Una API cloud cobra C dólares por cada 1000 tokens. Tu hardware local costó H dólares. ¿A partir de cuántos tokens generados el costo local (ya hundido) resulta más barato que seguir pagando por token en la nube?"
- Variante A: C=$0.002, H=$600 → punto de equilibrio=**300,000,000 tokens**.
- Variante B: C=$0.01, H=$1200 → punto de equilibrio=**120,000,000 tokens**.
- Variante C: C=$0.0005, H=$600 → punto de equilibrio=**1,200,000,000 tokens**.

**Ítem 4 (C-N10-02 · presupuesto de VRAM en tres líneas para un caso agéntico).** "Dado el tamaño de los pesos cuantizados, el KV cache estimado para el contexto de una tarea agéntica, el overhead del runtime, y la VRAM disponible: calcula el margen (o déficit) total, y decide si el sistema cabe."
- Variante A: pesos=6GB, KV=2GB, overhead=1GB, VRAM=12GB → total=9GB, margen=**+3.0GB**, **cabe**.
- Variante B: pesos=8GB, KV=3GB, overhead=1.5GB, VRAM=12GB → total=12.5GB, margen=**-0.5GB**, **NO cabe**.
- Variante C: pesos=4GB, KV=1GB, overhead=1GB, VRAM=12GB → total=6GB, margen=**+6.0GB**, **cabe**.

**Ítem 5 (C-N10-03 · juicio de adopción o descarte).** "Evalúa el siguiente escenario de evaluación de una herramienta del ecosistema local y decide: ¿adoptas o descartas, y por qué? Justifica con la evidencia dada, no con preferencia."
- Variante A: el smoke test de compatibilidad pasó sin problemas, y mides 3× más throughput con 8 solicitudes simultáneas — pero tu columna vertebral sirve, hoy, a un solo usuario. *Respuesta esperada: descarte condicional/diferido — la ventaja medida no aplica al caso de uso actual; se declara explícitamente qué cambiaría la decisión (pasar a multi-usuario), no un descarte definitivo ni una adopción sin justificación real.*
- Variante B: el smoke test falla con un error de incompatibilidad de arquitectura de GPU, documentado como issue abierto y sin solución en el repositorio oficial del proyecto. *Respuesta esperada: descarte con evidencia (número de issue, mensaje exacto), con fecha de revisión futura declarada — mismo patrón que M4.T2/T3, nunca un descarte sin registro de por qué ni cuándo reconsiderarlo.*
- Variante C: la herramienta pasa el smoke test, mide 40% de mejora en latencia incluso con un solo usuario, comunidad activa — pero exige migrar de formato de modelo (costo de migración no trivial). *Respuesta esperada: adopción condicionada a que la mejora medida justifique el costo de migración, con un criterio explícito de cuánto esfuerzo es aceptable — ninguna respuesta que ignore el costo de migración cuenta como completa.*

**Ítem 6 (C-N10-03 · roofline aplicado a una decisión de configuración).** "Dado el ancho de banda de memoria de una GPU (GB/s) y el tamaño en GB que hay que mover por token (a una precisión dada), calcula los tokens/segundo teóricos máximos, y úsalo para decidir si esa configuración cumple una restricción de latencia dada."
- Variante A: ancho de banda=672GB/s, GB/token=1.397 (modelo 3B a Q4) → **~481 tokens/s teóricos** — cumple holgadamente una restricción de ≥50 tokens/s.
- Variante B: ancho de banda=672GB/s, GB/token=6.519 (modelo 7B a Q8) → **~103 tokens/s teóricos** — cumple una restricción de ≥50 tokens/s, con menos margen que la Variante A.
- Variante C: ancho de banda=450GB/s, GB/token=5.588 (modelo 3B a FP16, GPU distinta) → **~81 tokens/s teóricos** — cumple una restricción de ≥50 tokens/s, pero evidencia por qué el ancho de banda importa tanto como la precisión elegida.

**Nota de diseño:** los 6 ítems cubren las 3 competencias con 2 ítems cada una, 3 variantes cada ítem (18 variantes totales) — todos los valores numéricos verificados por ejecución real (Node.js) antes de fijarse aquí. El examinador puede generar variantes adicionales cambiando los valores numéricos sin cambiar la estructura del ítem, siempre que re-verifique el resultado por ejecución real antes de usarlo — nunca a mano, mismo principio que rigió cada ejercicio de M1-M4.

---

*Paso 8 — pendiente de aprobación por el Director.*

---
