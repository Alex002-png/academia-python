# DOC-01 — Perfil de Egreso y Marco de Competencias

## Control del documento (conforme a DOC-00 §15.4)

| Campo | Valor |
|---|---|
| **Document Key** | DOC-01 · Tier T1 |
| **Título** | Perfil de Egreso y Marco de Competencias |
| **Versión / Estado** | **1.0.0** · ✅ **Aprobado** por el Director (2026-07-18) |
| **Autoridad de origen** | DOC-00 §6 (6.1.4: descomposición delegada; 6.7.5: contrato de delegación) |
| **Depende de** | DOC-00: §6 (dimensiones, enunciados macro y estándar de evidencia — ley), §13 (ontología), §14 (identidades y resultados de nivel), §17 (estándar de dominio, por referencia), §18 (hitos lingüísticos) |
| **Produce / desarrolla** | La taxonomía de competencias de nivel que consumen los SYL-Nx (mapeo temas→competencias, 13.5.4) y DOC-02 (instrumentos por competencia, 6.7.1) |
| **AC aplicables (9.7)** | AC-05 (todo alcanzable con hardware de consumo + nube gratuita) · AC-08 (todo verificable por evidencia, sin acreditación) · AC-10 (progresión lingüística conforme a §18/14.6) · AC-12 (dimensionado para una sesión de revisión) · AC-14 (sin carga de mantenimiento propia: registro vivo mínimo) |
| **Identificadores que define** | `C-Nx-##` (competencia de nivel) — registro en §0.6 pendiente de la autorización del Director al aprobarse este documento (15.4.5, ajuste obligatorio 1 del ADR) |
| **Prueba piloto** | Este documento se desarrolla como prueba piloto de gobernanza del Blueprint; registro de fricciones en §5 |
| **Historial** | 0.1.0-draft (2026-07-18): redacción inicial conforme al ADR aprobado con sus 2 ajustes y 3 recomendaciones · **1.0.0 (2026-07-18): aprobado por el Director con 2 ajustes menores (canonicidad del catálogo; permanencia histórica de competencias retiradas) y 3 recomendaciones (estadísticas; recuadro 64 vs. estimación; nota para futuros autores)** |

---

## 1. Egresar: el umbral consumido

Este documento **no redefine** qué significa egresar: el umbral de graduación es el de DOC-00 §6.6 — recorrido completo, evidencia total, defensa final integradora y certificación institucional — y las dimensiones y enunciados del perfil son los de §6.3–6.5, intocables desde aquí (6.1.4).

Lo que este documento aporta es el eslabón que faltaba: **la suma de las competencias de nivel de este marco ES la "evidencia total" que 6.6.2 exige.** Cuando las competencias de todos los niveles estén demostradas, cada uno de los 31 enunciados macro tendrá su evidencia registrada — la matriz de cobertura de §3.3 lo hace verificable enunciado por enunciado.

```
   Perfil de egreso (§6: 7 dimensiones, 31 enunciados)
        ↓  descompone (este documento)
   Competencias de nivel (C-Nx-##)
        ↓  mapean (SYL-Nx, 13.5.4)
   Syllabus y temas (§13)
        ↓  instrumentan (DOC-02, 6.7.1)
   Instrumentos y rúbricas (§17)
        ↓  producen
   Evidencias [A][D][E] (6.4)  →  umbral 6.6  →  graduación
```

*(Diagrama descriptivo; la norma es la de DOC-00.)*

## 2. El marco: la competencia de nivel

> Una **competencia de nivel** es la porción de un enunciado macro (6.5) exigible al cierre de un nivel concreto: qué grado de esa capacidad debe estar demostrado en ese punto del recorrido.

**Formato** (todo heredado de DOC-00; nada nuevo): identificador `C-Nx-##` · enunciado en **verbos de desempeño** (6.1.2 — verbos de estado mental prohibidos) · **origen** (enunciado macro D#.#) · **evidencia** (clases 6.4) · superación del **test del examinador externo** (6.4.3).

**Política de identificadores** *(ajuste obligatorio 2 del ADR)*: la numeración `C-Nx-##` es secuencial dentro de cada nivel y **append-only**: jamás se reutiliza ni se renumera. **Una competencia retirada permanecerá documentada como histórica y no desaparecerá del registro**: conserva su identificador, su enunciado y la constancia de su retiro. Las incorporaciones futuras añaden números nuevos al final del nivel correspondiente. El prefijo está registrado en DOC-00 §0.6 (decisión A del Director, ejecutada con la aprobación de este documento).

**Nota para futuros autores:** la incorporación, modificación o retiro de competencias constituye una **modificación del catálogo canónico** y DEBE seguir el procedimiento de gobernanza correspondiente (aprobación del Director conforme a DOC-00 0.5/15.5); ninguna competencia se añade, edita ni retira de manera informal.

**Prerrequisitos implícitos** *(recomendación A)*: las competencias forman una progresión natural — `C-N4-01` presupone lo demostrado en N0–N3 — **sin que ello genere dependencia documental**: el orden lo garantizan las compuertas de nivel (NNR-01) y el grafo de temas (§13.4), no referencias entre competencias. Ninguna competencia necesita citar a sus precursoras; el nivel al que pertenece ya declara su posición en el recorrido. Esto mantiene el marco plano, legible y sin ciclos.

**Reglas de conformidad heredadas:** toda competencia de este catálogo DEBE ser alcanzable desde el perfil de entrada por el recorrido oficial (NNR-11), estar cubierta por instrumentos de DOC-02 (6.7.1) y ser servida por al menos un tema de los SYL (13.5.4, no-orfandad).

## 3. El catálogo de competencias

### 3.1 Convención de presentación y canonicidad

> **El catálogo de §3.2 constituye la única definición canónica de las competencias del sistema.** Toda cita de una competencia — en syllabus, instrumentos, registros o sesiones — referencia este catálogo por su identificador; ninguna copia ni reformulación en otro documento tiene autoridad (DP-07).

El catálogo se presenta **una sola vez, por nivel** (en el orden de §14, recomendación C); la vista por dimensión existe como **matriz de cobertura** (3.3) que indexa el mismo catálogo sin duplicarlo. Formato de fila: ID · enunciado · origen · evidencia.

### 3.2 Catálogo por nivel

#### N0 · Validación (ET1)

| ID | Competencia | Origen | Evidencia |
|---|---|---|---|
| C-N0-01 | Escribe y depura programas cortos en Python (variables, tipos, operadores, control de flujo, E/S), explicando línea a línea qué hace cada instrucción y por qué. | D1.1 | [A] [D] |
| C-N0-02 | Lee un traceback, localiza la causa del error y la corrige razonando el diagnóstico en voz alta. | D3.3 | [D] |
| C-N0-03 | Completa un primer proyecto pequeño de principio a fin y lo entrega funcionando contra una batería de pruebas. | D4.2 | [A] |
| C-N0-04 | Lee mensajes de error y vocabulario técnico básico en inglés sin traducción asistida. | D7.1 | [D] |
| C-N0-05 | Distingue y declara, al explicar su código, qué entiende con seguridad y qué todavía no. | D3.4 | [D] |

#### N1 · Computer Science (ET1)

| ID | Competencia | Origen | Evidencia |
|---|---|---|---|
| C-N1-01 | Escribe Python sólido — funciones, colecciones, POO básica, manejo de errores — en programas de varios módulos, legibles y organizados. | D1.1 | [A] [D] |
| C-N1-02 | Descompone un problema nuevo en subproblemas y los implementa eligiendo estructuras de datos adecuadas, con plan explícito. | D3.1 | [D] [A] |
| C-N1-03 | Usa Git con historia legible y publica repositorios con README que un tercero puede seguir. | D4.1 | [A] |
| C-N1-04 | Opera con soltura en terminal (Linux/shell): navegación, ejecución, scripts básicos. | D1.2 | [D] [A] |
| C-N1-05 | Consume una API HTTP y consulta una base de datos SQL con las sentencias fundamentales, desde código propio. | D1.2 | [A] [D] |
| C-N1-06 | Explica el porqué de las estructuras y algoritmos elementales que usa, incluida su eficiencia a nivel intuitivo. | D3.2 | [D] |
| C-N1-07 | Lee fragmentos de documentación técnica sencilla en inglés con apoyo puntual. | D7.1 | [D] |

#### N2 · Software Engineering (ET2)

| ID | Competencia | Origen | Evidencia |
|---|---|---|---|
| C-N2-01 | Construye un backend con API REST, persistencia y autenticación, que opera desplegado fuera de su máquina. | D1.2 | [A] |
| C-N2-02 | Escribe pruebas automatizadas para su código y las integra en un flujo de CI. | D4.1 | [A] |
| C-N2-03 | Empaqueta y ejecuta sus servicios en contenedores. | D1.2 | [A] |
| C-N2-04 | Documenta sus proyectos (español) de modo que un tercero los levante y entienda sin preguntarle. | D4.4, D6.2 | [A] [E] |
| C-N2-05 | Justifica las decisiones técnicas de su backend — framework, esquema, capas — con criterios explícitos y alternativas consideradas. | D2.2 | [D] [E] |
| C-N2-06 | Lee documentación técnica oficial en inglés con soltura, como fuente primaria de trabajo. | D7.1 | [D] |
| C-N2-07 | Resuelve de forma sostenida problemas de estructuras de datos y patrones de dificultad básica-media. | D3.1 | [D] [A] |

#### N3 · Matemáticas para IA (ET2)

| ID | Competencia | Origen | Evidencia |
|---|---|---|---|
| C-N3-01 | Opera computacionalmente con álgebra lineal — vectores, matrices, transformaciones — implementando las operaciones y explicando su significado. | D1.3 | [A] [D] |
| C-N3-02 | Deriva gradientes y explica e implementa la optimización por descenso de gradiente desde cero. | D1.3 | [A] [D] |
| C-N3-03 | Modela incertidumbre con probabilidad y estadística aplicadas (distribuciones, esperanza, inferencia básica) sobre problemas de datos reales. | D1.3 | [A] [D] |
| C-N3-04 | Lee la notación matemática de un paper introductorio identificando qué expresa cada símbolo y cada paso. | D7.2 | [D] [E] |

#### N4 · Machine Learning (ET3)

| ID | Competencia | Origen | Evidencia |
|---|---|---|---|
| C-N4-01 | Implementa desde cero regresiones y clasificadores clásicos, explicando su matemática mientras lo hace. | D1.3 | [A] [D] |
| C-N4-02 | Entrena, valida y evalúa modelos con metodología correcta: splits, métricas adecuadas, control de overfitting. | D1.3 | [A] [E] |
| C-N4-03 | Diagnostica por qué un modelo rinde mal — datos, features, capacidad — y aplica correcciones fundamentadas. | D3.2, D3.3 | [D] [A] |
| C-N4-04 | Identifica sesgos y limitaciones de sus datos y modelos, y los reporta honestamente en sus entregas. | D5.1 | [E] |
| C-N4-05 | Gestiona un proyecto de ML de varias semanas: plan, experimentos registrados, entrega y desvíos comunicados. | D4.2 | [A] [E] |
| C-N4-06 | Resuelve de forma sostenida problemas algorítmicos de dificultad intermedia. | D3.1 | [D] |

#### N5 · Deep Learning (ET3)

| ID | Competencia | Origen | Evidencia |
|---|---|---|---|
| C-N5-01 | Implementa redes neuronales y backpropagation desde cero, explicando cada paso del flujo de gradientes. | D1.3 | [A] [D] |
| C-N5-02 | Entrena arquitecturas (convolucionales, recurrentes) en PyTorch con hardware de consumo y nube gratuita, con resultados reproducibles y documentados. | D1.3 | [A] [E] |
| C-N5-03 | Experimenta con rigor: hipótesis explícitas, variables aisladas, comparaciones reproducibles entre configuraciones. | D7.5 | [A] [E] |
| C-N5-04 | Explica el funcionamiento de una red neuronal a una audiencia no técnica y a una técnica, ajustando el registro. | D6.1 | [D] |

#### N6 · Transformers (ET3)

| ID | Competencia | Origen | Evidencia |
|---|---|---|---|
| C-N6-01 | Implementa un transformer desde cero — atención, tokenización, embeddings, posiciones — explicando su matemática. | D1.3 | [A] [D] |
| C-N6-02 | Lee papers fundacionales del área identificando contribución, método, supuestos y límites. | D7.2 | [E] [D] |
| C-N6-03 | Consume video y charlas técnicas en inglés sin subtítulos, y resume papers en inglés con apoyo. | D7.1, D7.2 | [D] [E] |
| C-N6-04 | Compara arquitecturas y tamaños de modelo, y fundamenta cuál conviene a un caso dado. | D2.4 | [E] [D] |

#### N7 · LLM Engineering (ET4)

| ID | Competencia | Origen | Evidencia |
|---|---|---|---|
| C-N7-01 | Construye un sistema RAG completo — ingesta, recuperación, generación, evaluación — operativo de extremo a extremo. | D1.4 | [A] |
| C-N7-02 | Realiza fine-tuning ligero (LoRA/QLoRA) de un modelo con recursos modestos y mide su efecto con evaluación propia. | D1.4 | [A] [E] |
| C-N7-03 | Diseña evaluaciones para sistemas LLM y aplica prácticas de seguridad y guardrails como parte del diseño. | D1.4, D5.2 | [A] [E] |
| C-N7-04 | Documenta la arquitectura de la primera versión de su proyecto columna vertebral en un design doc defendible. | D2.1 | [E] [D] |
| C-N7-05 | Escribe la documentación principal de sus repositorios en inglés con calidad profesional. | D6.2 | [A] [E] |

#### N8 · AI Systems (ET4)

| ID | Competencia | Origen | Evidencia |
|---|---|---|---|
| C-N8-01 | Construye un sistema agéntico — herramientas, memoria, orquestación — que resuelve tareas de varios pasos de forma fiable. | D1.4 | [A] |
| C-N8-02 | Diseña la arquitectura completa de su sistema (componentes, interfaces, datos, fallos) y la defiende ante examen. | D2.1 | [E] [D] |
| C-N8-03 | Anticipa los modos de fallo característicos de los agentes — bucles, herramientas, costes — y los mitiga en su sistema. | D2.3 | [D] [A] |
| C-N8-04 | Evalúa los riesgos de mal uso de su sistema y declara sus límites e incertidumbre con honestidad. | D5.1, D5.3 | [E] |

#### N9 · Sistemas Distribuidos (ET4)

| ID | Competencia | Origen | Evidencia |
|---|---|---|---|
| C-N9-01 | Despliega y opera sus servicios con orquestación de contenedores y observabilidad (logs, métricas, alertas). | D1.2, D1.5 | [A] |
| C-N9-02 | Analiza trade-offs de escalabilidad — colas, réplicas, costes — y los justifica con mediciones propias. | D2.2 | [E] [D] |
| C-N9-03 | Sirve modelos midiendo latencia y throughput, con mejoras demostradas antes/después. | D1.5 | [A] [E] |
| C-N9-04 | Examina una arquitectura ajena de mediana escala y produce un diagnóstico fundamentado de fortalezas y riesgos. | D2.4 | [E] |

#### N10 · IA Local (ET4)

| ID | Competencia | Origen | Evidencia |
|---|---|---|---|
| C-N10-01 | Ejecuta y optimiza inferencia local: cuantización, aceleración, medición antes/después en hardware de consumo. | D1.5 | [A] [E] |
| C-N10-02 | Opera su proyecto columna vertebral en local, con los trade-offs frente a la nube documentados. | D1.4, D1.5 | [A] [E] |
| C-N10-03 | Evalúa herramientas del ecosistema local (runtimes, formatos) con prototipo, medición y juicio de adopción o descarte. | D7.4 | [A] [E] |

#### N11 · Research Engineer (ET5)

| ID | Competencia | Origen | Evidencia |
|---|---|---|---|
| C-N11-01 | Reproduce un paper publicado: reimplementa sus resultados y contrasta lo obtenido con lo reportado. | D7.3 | [A] [E] |
| C-N11-02 | Lee papers de frontera con autonomía, incluida su matemática, sin mediación. | D7.2 | [E] [D] |
| C-N11-03 | Contribuye a un proyecto open source real siguiendo sus convenciones: issues, pull requests, code review. | D4.3 | [A] |
| C-N11-04 | Reporta resultados fielmente aunque contradigan lo esperado; atribuye el trabajo ajeno y respeta licencias. | D5.4 | [A] [E] |
| C-N11-05 | Defiende sus reproducciones e implementaciones ante examen crítico oral, respondiendo repreguntas sin guion. | D6.3 | [D] |

#### N12 · AI Systems Architect (ET5)

| ID | Competencia | Origen | Evidencia |
|---|---|---|---|
| C-N12-01 | Diseña la arquitectura completa de un sistema de IA bajo restricciones dadas — componentes, datos, escala, costos — y la documenta en un design doc defendible. | D2.1 | [E] [D] |
| C-N12-02 | Resuelve ejercicios de system design en vivo, analizando trade-offs, modos de fallo y costes ante repreguntas. | D2.2, D2.3 | [D] |
| C-N12-03 | Se desenvuelve en el proceso completo de entrevista técnica internacional en inglés: coding, system design y conductual. | D6.4 | [D] |
| C-N12-04 | Culmina el proyecto columna vertebral: sistema completo, desplegado, operativo y defendido de extremo a extremo. | D1.4 | [A] [D] [E] |
| C-N12-05 | Demuestra vigencia autónoma: incorpora a su sistema un avance reciente del ecosistema, por decisión propia fundamentada. | D7.6 | [A] [E] |
| C-N12-06 | Sostiene la defensa final integradora del recorrido completo, calibrando qué sabe, qué infiere y qué ignora. | D3.4, D5.3 | [D] |

**Estadísticas del catálogo** *(registro vivo; se actualizan con toda modificación aprobada)*:

| Métrica | Valor |
|---|---|
| Competencias totales | 64 |
| Niveles cubiertos | 13 (N0–N12) |
| Cobertura de enunciados macro | 31/31 |
| Competencias huérfanas (sin origen) | 0 |
| Enunciados sin cobertura | 0 |
| Competencias retiradas (históricas) | 0 |

> **Nota de trazabilidad sobre la escala — leer junto al ADR de DOC-01:** el ADR estimó 80–120 competencias; el diseño real produjo **64**. No es una contradicción: la estimación suponía despliegue de cada enunciado en más niveles, y la descomposición real mostró que cada enunciado progresa solo en los niveles donde efectivamente se construye. Se prefirieron 64 competencias reales a 100 con relleno (DP-11). La cifra del ADR era estimación descriptiva; la de este catálogo es el hecho.

### 3.3 Matriz de cobertura (vista por dimensión)

Índice del mismo catálogo — verificación de que los **31/31 enunciados macro** tienen descomposición (sin duplicar contenido, DP-07):

| Enunciado macro | Competencias que lo despliegan |
|---|---|
| D1.1 | C-N0-01 · C-N1-01 |
| D1.2 | C-N1-04 · C-N1-05 · C-N2-01 · C-N2-03 · C-N9-01 |
| D1.3 | C-N3-01…04 · C-N4-01 · C-N4-02 · C-N5-01 · C-N5-02 · C-N6-01 |
| D1.4 | C-N7-01…03 · C-N8-01 · C-N10-02 · C-N12-04 |
| D1.5 | C-N9-01 · C-N9-03 · C-N10-01 · C-N10-02 |
| D2.1 | C-N7-04 · C-N8-02 · C-N12-01 |
| D2.2 | C-N2-05 · C-N9-02 · C-N12-02 |
| D2.3 | C-N8-03 · C-N12-02 |
| D2.4 | C-N6-04 · C-N9-04 |
| D3.1 | C-N1-02 · C-N2-07 · C-N4-06 |
| D3.2 | C-N1-06 · C-N4-03 |
| D3.3 | C-N0-02 · C-N4-03 |
| D3.4 | C-N0-05 · C-N12-06 |
| D4.1 | C-N1-03 · C-N2-02 |
| D4.2 | C-N0-03 · C-N4-05 |
| D4.3 | C-N11-03 |
| D4.4 | C-N2-04 |
| D5.1 | C-N4-04 · C-N8-04 |
| D5.2 | C-N7-03 |
| D5.3 | C-N8-04 · C-N12-06 |
| D5.4 | C-N11-04 |
| D6.1 | C-N5-04 |
| D6.2 | C-N2-04 (es) · C-N7-05 (en) |
| D6.3 | C-N11-05 |
| D6.4 | C-N12-03 |
| D7.1 | C-N0-04 · C-N1-07 · C-N2-06 · C-N6-03 |
| D7.2 | C-N3-04 · C-N6-02 · C-N6-03 · C-N11-02 |
| D7.3 | C-N11-01 |
| D7.4 | C-N10-03 |
| D7.5 | C-N5-03 |
| D7.6 | C-N12-05 |

**Cobertura: 31/31 enunciados con descomposición · 0 huérfanos en ambos sentidos** (toda competencia tiene origen; todo enunciado tiene competencias). La progresión lingüística (D6/D7.1) sigue los hitos de etapa de 14.6, con las culminaciones en los niveles de cierre de etapa conforme a la política de compuertas de §18.5.

## 4. Interfaz con el currículo y la evaluación

Dos reglas de consumo, ambas heredadas — este documento las instancia, no las crea:

1. **Hacia los syllabus (SYL-Nx):** todo tema DEBE declarar a qué competencia(s) `C-Nx-##` de su nivel contribuye (13.5.4); un tema sin competencia servida es contenido huérfano (NNR-11) y una competencia sin temas que la sirvan es una promesa vacía — ambos, defectos del syllabus.
2. **Hacia la evaluación (DOC-02):** toda competencia DEBE recibir instrumento(s) de las clases de evidencia que declara (6.7.1, catálogo 17.4); la compuerta de cada nivel (17.6) verifica las competencias de ese nivel. La matriz instrumento↔competencia pertenece a DOC-02.

## 5. Delegaciones, registro de fricciones y cierre

**Delegaciones:** rúbricas, instrumentos y umbrales → DOC-02 · temarios y grafo de temas → SYL-Nx · progresión operativa de pistas → DOC-05/DOC-06 · nada más queda delegado por este documento.

**Registro de fricciones de la prueba piloto** (clasificación quíntuple del Director):

| # | Fase | Observación | Clasificación |
|---|---|---|---|
| F-01 | ADR | La duda sobre acuñación y registro de identificadores estaba resuelta de antemano por 15.4.5 y el régimen 12.1.2. | **Ninguna** (el Blueprint funcionó) |
| F-02 | Redacción | La estructura del ADR preveía dos vistas (por dimensión y por nivel) que habrían duplicado las 64 entradas; DP-07 del propio Blueprint dictó la solución sin necesidad de reinterpretación: catálogo único por nivel + matriz de cobertura como índice. | **Ninguna** (el Blueprint resolvió su propia tensión) |
| F-03 | Redacción | La ubicación de las competencias lingüísticas por nivel se derivó íntegramente de 14.6 (estados por etapa) + 18.5 (bloqueo por etapa) sin decisión nueva. | **Ninguna** |

**Desviación registrada (no fricción):** escala real de 64 competencias frente a la estimación de 80–120 del ADR — refinamiento de estimación, resuelto con el criterio DP-11 heredado.

**Cierre.** Este documento desarrolla exactamente la delegación recibida de §6: descompone sin redefinir, mapea sin invadir y delega sin ambigüedad. Su aprobación activará: el registro del prefijo `C-Nx-##` en §0.6 (autorización ya emitida en el veredicto del ADR), la actualización del catálogo 15.3 (DOC-01 → Aprobado) y el informe final de la prueba piloto de gobernanza.
