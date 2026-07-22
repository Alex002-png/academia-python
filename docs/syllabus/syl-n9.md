# SYL-N9 — Syllabus del Nivel 9 · Sistemas Distribuidos

## Control del documento (conforme a DOC-00 §15.4)

| Campo | Valor |
|---|---|
| **Document Key** | SYL-N9 · Tier T2 |
| **Versión / Estado** | **0.1.0-draft** · Paso 1 del flujo institucional (diseño del syllabus) — investigación real completa, arquitectura aprobada por el Director, entornos decididos; pendiente de construcción de contenido real (Paso 2 en adelante) |
| **Autoridad de origen** | DOC-10 §8 (interior de N9, ya aprobado) · DOC-01 (C-N9-01…04) · **candidato a DOC-09** (`docs/investigacion/n9-propuesta-doc09-arquitectura-columna-vertebral.md`, aprobado en visión por el Director 2026-07-21) |
| **Depende de** | DOC-10 v1.0.3 · DOC-00 · DOC-01 · DOC-02 · DOC-12 (íntegro — N9 es DOC-12 casi puro, ver §3.1) · `docs/investigacion/n9-propuesta-doc09-arquitectura-columna-vertebral.md` · `docs/investigacion/n9-decision-entornos-locales-vs-cloud.md` |
| **Produce / desarrolla** | La estructura docente completa de N9: fichas de laboratorio por tema, proyecto de nivel (infraestructura operando la Columna Vertebral), compuerta, y las Herencias Declaradas hacia SYL-N10 |
| **Estándar de calidad** | El mismo de SYL-N1/N2/N3: *"Si otro instructor excepcional impartiera este nivel utilizando únicamente el syllabus, ¿obtendría prácticamente la misma calidad formativa?"* |
| **Historial** | 0.1.0-draft (2026-07-21): Documento de Diseño. Precedido por dos documentos de investigación propios: la propuesta de arquitectura DOC-09 (capas L0-L4, puertos, ley de evolución por extensión — aprobada por el Director con 8 principios adicionales) y la decisión de entornos local/cloud por módulo (verificada por búsqueda dirigida: vLLM funciona en WSL2 con GPU passthrough automático sobre la RTX 5070; GPU dentro de `kind`/K8s es frágil y se declara fuera de alcance obligatorio con razón técnica citada — M1 y M2 se mantienen desacoplados a nivel de GPU, comunicados por red, arquitectónicamente correcto según DOC-09 L2). Bibliografía oficial de DOC-10 verificada por WebFetch/WebSearch real (Kleppmann DDIA 2nd ed., MLOps Zoomcamp de DataTalksClub, docs oficiales de Kubernetes y vLLM, incluido el `benchmarks/benchmark_serving.py` oficial del propio repo de vLLM para medición real de M2). · **0.2.0 (2026-07-22): Instrucción directa del Director — densidad redefinida y estándar de calidad elevado.** (a) Cada **módulo** completo (no cada laboratorio) es ahora un solo "tema" de **15-20 días** con **~25-40 ejercicios reales**, manteniendo el esquema técnico DOC-12 (`modalidad:"real"`, 13 secciones) pero con la unidad de contenido renombrada de "Laboratorio N" a "Día N" para reflejar la densidad exigida. (b) Estándar de calidad elevado explícitamente a nivel MIT/Stanford/CMU/Berkeley: cada tema exige investigación real previa (no solo documentación oficial — papers académicos, artículos de las propias autoridades de cada tecnología), una sección explícita de "cuándo NO usar esta herramienta" con alternativas reales y trade-offs, y al menos un ejercicio de análisis/comparación/justificación de arquitectura por día (no solo ejecución de comandos). **M1 (Orquestación a escala) reconstruido íntegramente bajo este estándar: 18 días, 40 ejercicios, verificado en su totalidad contra un clúster kind real** — ver §5. M2-M4 se construirán con el mismo modelo de densidad (15-20 días/módulo) cuando les llegue el turno. Sigue: construcción de M2. |

---

## 1. Tabla resumen

| Módulo | Días | Ejercicios | Competencias | Gran pregunta del módulo |
|---|---|---|---|---|
| M1 · Orquestación a escala | **18** ✅ construido | **40** | C-N9-01 | ¿Cómo mantiene un sistema su forma deseada cuando las máquinas y los procesos fallan constantemente? |
| M2 · Model serving | 15-20 (pendiente) | ~25-40 | C-N9-03 | ¿Qué separa "un LLM que responde" de "un LLM que sirve tráfico real de producción"? |
| M3 · Datos en movimiento | 15-20 (pendiente) | ~25-40 | C-N9-02 (parcial) | ¿Qué pasa cuando quien produce datos y quien los consume no pueden — o no deben — hablar directamente? |
| M4 · Observabilidad y escalabilidad | 15-20 (pendiente) | ~25-40 | C-N9-02, C-N9-04 | ¿Cómo sabes que un sistema está sano sin tener que preguntarle a un usuario si algo falló? |
| Proyecto de nivel | — | — | Todas | Integración: operar, con mediciones propias, la infraestructura completa de la Columna Vertebral |

*Densidad redefinida 2026-07-22 (instrucción directa del Director, ver Historial): cada MÓDULO completo es un solo "tema", de 15-20 días, no cada laboratorio individual. Sigue siendo DOC-12 (cada "día" es un objeto `modalidad:"real"` autocontenido de 13 secciones, ~90-140 min), pero renombrado de "Laboratorio N" a "Día N" para reflejar la densidad. M1 ya construido y verificado con esta densidad: 4 bloques (A: fundamentos, Días 1-4 · B: Deployments/Services/Ingress, Días 5-9 · C: configuración/estado/rollouts, Días 10-14 · D: autoescalado y cierre, Días 15-18).*

*Nota metodológica sobre las ~400h/~4 meses de DOC-10: incluyen, igual que N3 lo hizo explícito, el consumo real de la bibliografía externa citada (capítulos relevantes de Kleppmann Parte I-II, los módulos 3-5 de MLOps Zoomcamp) — el contenido que la Academia construye en el Campus andamia y verifica esas horas, no las sustituye.*

## 2. Identidad del nivel

Por referencia a DOC-10 §8: **N9 · Sistemas Distribuidos** no enseña a construir sistemas de IA nuevos — enseña a **operar** los que N7/N8 ya construyeron, con el rigor de infraestructura de producción real. Entrada: N8 Superado (cadena técnica real: N9 asume que existe algo desplegable con el contrato de DOC-09 §7, no conocimiento nuevo de N8 en sí). Salida: examen + proyecto + defensa (incluye diagnóstico de una arquitectura ajena, C-N9-04) → habilita N10 (IA Local), que reemplazará el `LLMProvider` de nube/GPU-remota por uno local optimizado, sin tocar nada de lo que N9 construyó.

Si N7 enseñó a razonar con datos y N8 a razonar con planes y herramientas, N9 enseña **la disciplina de que ese razonamiento siga funcionando cuando el tráfico crece, una máquina falla a las 3am, o un componente se degrada silenciosamente** — el tránsito de "funciona en mi laptop" a "funciona aunque yo no esté mirando".

## 3. Principios de ejecución

1. **Principio "100% DOC-12"** *(a diferencia de N3 — decisión arquitectónica explícita, no un descuido)*: aplicando el criterio de frontera de DOC-12 §5, N9 responde "sí sale del navegador" en los tres criterios — todo el nivel depende de terminal propia (WSL2), Docker, cuentas (ninguna de pago obligatoria), y estado persistente real. No hay contenido Pyodide en N9 más allá de menciones conceptuales acotadas si algún laboratorio lo justifica puntualmente.
2. **Arquitectura de referencia obligatoria**: todo laboratorio de N9 se diseña y se redacta en términos de las capas y puertos de DOC-09 (`docs/investigacion/n9-propuesta-doc09-arquitectura-columna-vertebral.md`) — M1/M3/M4 nunca tocan L0/L1, solo añaden implementaciones L2 e infraestructura L3/L4. Cada laboratorio de cierre de módulo declara explícitamente qué puerto conecta o sustituye (ver tabla DOC-09 §6).
3. **Diseño para el hardware real del estudiante** *(instrucción directa del Director)*: RTX 5070 (12GB VRAM) · Ryzen 5 9600X · 32GB DDR5. Ningún laboratorio se simplifica para "correr en cualquier PC" — se diseña para sacar partido real de este equipo (modelos cuantizados que llenan la VRAM disponible, clústeres `kind` multi-nodo reales, stack completo Prometheus+Grafana+Redpanda+K8s conviviendo en 32GB). Cuando una práctica exceda el equipo, se documenta la limitación y se propone la alternativa más cercana — nunca se reduce el nivel conceptual (ver `n9-decision-entornos-locales-vs-cloud.md`).
4. **GPU desacoplada de K8s, por razón técnica verificada, no por atajo**: M1 y M2 se comunican por red, nunca por planificación de GPU dentro de `kind` — hallazgo verificado por búsqueda dirigida (2026): la exposición de GPU como recurso planificable dentro de Kubernetes sobre Docker Desktop/WSL2 es frágil y requiere NVIDIA GPU Operator, declarado explícitamente Beyond the Curriculum. Este es, en sí mismo, un patrón real de producción (nodos GPU dedicados servidos aparte del clúster de aplicación), no una simplificación oculta.
5. **Error inducido en vivo, en todo laboratorio, sin excepción** (DOC-12 §2.5bis, no negociable): M1 mata un Pod y un nodo; M2 satura la cola de vLLM hasta ver degradación de latencia; M3 mata el broker líder de Redpanda; M4 induce una alerta real. Cada uno se conecta directamente a la tabla de diagnóstico de 5 columnas de su laboratorio (DOC-12 §2.8).
6. **Verificación empírica antes de fijar cualquier paso o comando** (guía maestra §9, aplicada a entorno real en vez de a `check()`): cada comando, cada resultado esperado y cada valor de referencia de N9 se ejecuta de verdad en WSL2/Docker/`kind` antes de escribirse en el laboratorio — nunca se documenta de memoria ni por analogía con otro proyecto.
7. **Integración progresiva y acumulativa**: el laboratorio de cierre de cada módulo conecta explícitamente con el/los módulo(s) anteriores — M2 se sirve como servicio externo al clúster de M1; M3 alimenta la ingesta que M1 ya orquesta; M4 observa M1+M2+M3 simultáneamente y cierra el nivel con el diagnóstico de una arquitectura ajena (C-N9-04) y el modelo de costes con datos propios (C-N9-02).
8. **Herencia entrante formal de N7/N8** (DOC-09 §7): un servicio L3 de un solo proceso, contrato `POST /query` / `POST /ingest` / `GET /health`, con telemetría ya emitida desde su primer pipeline funcional. Si esa versión real no existe al construir el proyecto de N9, se levanta un stub mínimo que cumple exactamente ese contrato — declarado explícitamente como supuesto de trabajo, sin bloquear el avance (mismo principio que ya autoriza `docs/mision-n9.md`).

## 4. Estructura y grafo local

Troncal: `M1 → M2 → M3 → M4`, con M2 y M3 pudiendo construirse en paralelo conceptual (ambos dependen solo de M1 — necesitan un clúster donde vivir la parte que sí es orquestable — y no dependen duramente entre sí), pero **la implementación en el Campus sigue una secuencia lineal fija M1→M2→M3→M4** (mismo principio de "recorrido lineal único" institucionalizado desde N3 §4, EVT-034): M2 antes que M3 porque servir el modelo es la pieza más visible/motivadora inmediatamente después de tener un clúster; M4 al final porque necesita M1+M2+M3 reales para observar algo genuino.

**Nota de alcance:** M1 y M2 no tienen dependencia dura entre sí a nivel de puerto (DOC-09 §6) — se enseñan en este orden por currículo, no porque M2 técnicamente requiera M1 terminado.

## 5. Fichas pedagógicas por laboratorio

*Plantilla adaptada de DOC-12 §1 (ficha de control) para nivel de planificación — el laboratorio completo (13 secciones) se escribe en el Paso 2, no aquí. Los 5 estándares narrativos de N1-N3 se adaptan a entorno real: **gran pregunta** (universal) · **el problema que se rompe sin esto** (equivalente DOC-12 de "el supuesto que destruye") · **la limitación humana que compensa** · **el error inducido en vivo** (reemplaza "quiebre de intuición" — en DOC-12 el quiebre no es conceptual sino operativo: el momento exacto en que algo falla de verdad frente al estudiante) · **el puerto DOC-09 que conecta o sustituye**.*

### M1 · Orquestación a escala (Kubernetes) — ✅ CONSTRUIDO Y VERIFICADO (18 días, 40 ejercicios)

> **Gran pregunta del módulo: ¿cómo mantiene un sistema su forma deseada cuando las máquinas y los procesos fallan constantemente?**

*Construido íntegramente en `index.html` (`LEVEL9`, ids `n9m1t1`…`n9m1t1r`), cada día verificado contra un clúster `kind` real antes de escribirse (guía maestra §9). Cada día incluye, sin excepción: cita académica/profesional real (no genérica), una sección "cuándo NO usar esta herramienta" con alternativas y trade-offs, y ≥1 ejercicio de comparar/justificar/decidir arquitectura, además del error inducido en vivo (DOC-12 §2.5bis).*

**Bloque A — Fundamentos (Días 1-4):** D1 *Del proceso único al clúster* (Borg/Kubernetes — Verma et al. 2015, Burns et al. CACM 2016; cuándo NO usar K8s — Nomad/ECS/Cloud Run/un solo servidor, con trade-offs reales; primer clúster `kind` multi-nodo) · D2 *Pods a fondo: ciclo de vida y las tres pruebas de salud* (readiness/liveness/startupProbe, verificadas en vivo; el fenómeno real de "flapping" y su mitigación) · D3 *El límite de un proceso: PID 1, namespaces y por qué SIGKILL no siempre mata* (verificado dos veces con timestamp exacto; cita primaria `man 7 pid_namespaces`; zombies y `tini` como solución profesional real) · D4 práctica integradora.

**Bloque B — Deployments/Services/Ingress (Días 5-9):** D5 *Declarar el estado deseado* (Deployment→ReplicaSet, con Deployment/StatefulSet/DaemonSet/Job comparados) · D6 *Self-healing cronometrado* (metodología formal de chaos engineering — Basiri et al./Netflix 2017 — con hipótesis, fallo inyectado y resultado medido) · D7 *Services* (kube-proxy/CoreDNS, los 4 tipos de Service comparados, cuándo un service mesh es necesario) · D8 *Exponer tráfico HTTP real: de Ingress a Gateway API* (hallazgo de actualidad verificado: `ingress-nginx` retirado oficialmente en marzo 2026; Gateway API como sucesor real, con controlador nginx real desplegado y enrutamiento por path verificado con `curl`) · D9 práctica integradora.

**Bloque C — Configuración y estado (Días 10-14):** D10 *ConfigMaps* (Twelve-Factor App Factor III, Wiggins/Heroku 2011) · D11 *Secrets: por qué "Secret" no significa "protegido"* (decodificación real verificada; CIS Benchmark; el matiz real de que External Secrets Operator NO resuelve el cifrado en reposo por sí solo) · D12 *Almacenamiento persistente* (PVC/StorageClass/WaitForFirstConsumer verificados; límite real de `local-path-provisioner` vs. CSI/Rook-Ceph en producción) · D13 *Rollouts y rollback* (rollout exitoso ~11s y roto+rollback ~1s, ambos cronometrados y verificados; RollingUpdate vs. Blue-Green vs. Canary, con Argo Rollouts como herramienta real) · D14 práctica integradora.

**Bloque D — Autoescalado y cierre (Días 15-18):** D15 *Autoescalado real: el HPA y la pieza que lo hace posible* (fórmula exacta del HPA; `metrics-server` con su fallo real de TLS en `kind` diagnosticado y corregido; KEDA como extensión real para scaling por eventos) · D16 *Construye el servicio de referencia* (contrato DOC-09 §7 implementado en código real, verificado local y cargado a `kind`) · D17 *Mide de verdad* (experimento controlado real: 1 réplica → 4.35 req/s, 5 réplicas → 12.75 req/s — 2.93× no 5×, explicado con la Universal Scalability Law de Gunther, con cálculo real de α a partir de los propios datos) · D18 *Cierre de M1* — sistema completo integrado + defensa escrita completa.

**Puerto DOC-09:** M1 no toca L0/L1 en ningún día — el Día 18 lo demuestra explícitamente desplegando el servicio de referencia (contrato L3) sin ninguna modificación a su lógica interna.

### M2 · Model serving (vLLM, Ray)

> **Gran pregunta del módulo: ¿qué separa "un LLM que responde" de "un LLM que sirve tráfico real de producción"?**

**N9.M2.Lab1 · El problema real detrás de servir un LLM**
- Objetivo: explica por qué una llamada ingenua a un modelo no escala (batching perdido, KV cache recalculado), instala vLLM en WSL2, y sirve tu primer modelo real sobre la RTX 5070.
- Entorno objetivo: WSL2 (no `kind` — ver §3.4/DOC-09 §8).
- Prerrequisitos: M1.Lab1 (Docker/WSL2 ya validados).
- Competencias: C-N9-03.
- El problema que se rompe sin esto: sin batching/paginación de KV cache, cada petición nueva recalcula lo que ya se calculó — el costo crece con cada usuario simultáneo, no se comparte.
- Puerto DOC-09: primera implementación real de `LLMProvider` fuera de una API de nube — `VLLMProvider`.

**N9.M2.Lab2 · Medir de verdad**
- Objetivo: usa `benchmarks/benchmark_serving.py` (oficial del repo de vLLM) para medir throughput y latencia (p50/p95/p99) bajo carga real, y compara cuantitativamente vLLM contra un adaptador ingenuo (pipeline directo de Hugging Face) — con tus propios números.
- Prerrequisitos: Lab1.
- Competencias: C-N9-03.
- El problema que se rompe sin esto: sin medir, "más rápido" es una opinión, no una ingeniería — DOC-10 exige explícitamente mediciones propias, no leídas.
- Error inducido en vivo: satura el servidor con más concurrencia de la que soporta y observa la degradación real de p99 antes de que falle.

**N9.M2.Lab3 · VLLMProvider entra a la Columna Vertebral** *(cierre de módulo, integrador)*
- Objetivo: sirve réplicas con Ray Serve, conecta el `VLLMProvider` real como servicio externo al clúster de M1 (arquitectura desacoplada de §3.4), y mide degradación bajo carga concurrente de múltiples "agentes" simulados.
- Prerrequisitos: Lab1-2, M1.Lab4.
- Competencias: C-N9-03, C-N9-01 (integración).
- Puerto DOC-09: `LLMProvider`/`VLLMProvider` conectado en producción a la Columna Vertebral — primera vez que el sistema real (no un stub) sirve inferencia desde infraestructura propia.

### M3 · Datos en movimiento (colas, Kafka)

> **Gran pregunta del módulo: ¿qué pasa cuando quien produce datos y quien los consume no pueden — o no deben — hablar directamente?**

**N9.M3.Lab1 · Por qué una cola**
- Objetivo: explica qué se rompe cuando productor y consumidor están acoplados directamente, instala Redpanda en Docker, y publica/consume tu primer evento real.
- Entorno objetivo: contenedor (Docker Compose).
- Prerrequisitos: N2.M3 (async/concurrencia).
- Competencias: C-N9-02.
- El problema que se rompe sin esto: si el consumidor está caído, una llamada directa del productor simplemente falla — con una cola, el evento espera.
- Puerto DOC-09: primera implementación real de `EventBus` — `RedpandaEventBus`, sustituyendo `InProcessEventBus`.

**N9.M3.Lab2 · Particiones, orden y grupos de consumo**
- Objetivo: distribuye eventos en particiones para paralelismo real, y explica por qué el orden solo se garantiza dentro de una partición, nunca entre ellas.
- Prerrequisitos: Lab1.
- Competencias: C-N9-02.
- El problema que se rompe sin esto: sin entender particiones, un estudiante asume orden global donde no lo hay — bug de producción clásico y real, documentado en Kleppmann Cap. 11.

**N9.M3.Lab3 · Replicación y fallo real**
- Objetivo: levanta un clúster de 3 brokers Redpanda, y observa una elección de líder real al matar deliberadamente el broker líder.
- Prerrequisitos: Lab2.
- Competencias: C-N9-02.
- Error inducido en vivo: matas el proceso del broker líder en plena escritura y observas qué pasa con los mensajes en vuelo.
- Conexión bibliográfica: Kleppmann Cap. 5 (Replicación) — el mismo mecanismo (líder/seguidores, failover) que el estudiante ya vio conceptualmente en el libro, ahora ejecutado con sus manos.

**N9.M3.Lab4 · RedpandaEventBus entra a la Columna Vertebral** *(cierre de módulo, integrador)*
- Objetivo: convierte la ingesta de la Columna Vertebral (N7) de llamada directa a evento publicado, y mide throughput de ingesta antes/después.
- Prerrequisitos: Lab1-3, M1.Lab4.
- Competencias: C-N9-02, C-N9-01 (integración).
- Puerto DOC-09: `EventBus` conectado en producción — la ingesta ya no bloquea al productor.

### M4 · Observabilidad y escalabilidad

> **Gran pregunta del módulo: ¿cómo sabes que un sistema está sano sin tener que preguntarle a un usuario si algo falló?**

**N9.M4.Lab1 · De consola a colector real**
- Objetivo: sustituye `ConsoleTelemetrySink` por `PrometheusTelemetrySink` (mismo puerto, cero cambios en L0/L1 — la prueba en vivo de DOC-09 §3), y construye tu primer dashboard Grafana real sobre M1+M2+M3.
- Prerrequisitos: M1-M3 completos.
- Competencias: C-N9-02.
- Puerto DOC-09: `TelemetrySink` — segunda implementación real, ejercicio de sustituibilidad institucionalizado (DOC-09 §4).

**N9.M4.Lab2 · Alertas y SLOs**
- Objetivo: define qué significa "sano" con números concretos (SLOs), configura alertas reales, y diagnostica una degradación que tú mismo induces sin saber de antemano cuál será.
- Prerrequisitos: Lab1.
- Competencias: C-N9-02.
- Error inducido en vivo: un compañero de laboratorio (o el propio estudiante, con un script preparado por adelantado sin mirar) introduce una falla real entre M1-M3; el estudiante la diagnostica solo con lo que sus dashboards y alertas le muestran.

**N9.M4.Lab3 · El coste de operar tu propia infraestructura** *(cierre de módulo y de nivel)*
- Objetivo: construye un modelo de costeo FinOps real (utilización medida en tus propios laboratorios, extrapolada contra tablas de precios públicas vigentes de AWS/GCP) y produce un diagnóstico fundamentado de una arquitectura ajena de mediana escala (C-N9-04, insumo directo de la compuerta).
- Prerrequisitos: M1-M4.Lab1-2 completos.
- Competencias: C-N9-02, C-N9-04.
- Nota de honestidad metodológica: dado que N9 es 100% local/gratuito (§3.3), el "coste" es siempre proyectado a partir de utilización real, nunca gasto real — declarado explícitamente, nunca disfrazado de factura real.

## 6. Proyecto de nivel (capstone) — sketch

*Detalle completo en el Paso 4 del flujo institucional. Ficha preliminar:*

- **Objetivo:** operar, con mediciones propias de antes/después, la infraestructura completa de la Columna Vertebral heredada de N7/N8 — nunca "logró que funcionara", siempre "puede sostener, escalar y diagnosticar lo que construyó".
- **Hitos previstos (a refinar en Paso 4):** h1 el contrato DOC-09 §7 verificado sobre el sistema heredado (real o stub declarado) · h2 M1 — clúster + Columna Vertebral desplegada + HPA medido · h3 M2 — `VLLMProvider` real sirviendo con benchmark propio · h4 M3 — ingesta migrada a `RedpandaEventBus` con throughput medido · h5 M4 — dashboard completo + informe de costes + diagnóstico de una arquitectura ajena (C-N9-04, defensa).
- **Flujo de Git:** sí aplica (DOC-12, a diferencia de N3) — repositorio propio del proyecto, historia legible de cada hito.

## 7. Compuerta — sketch

Examen + proyecto + defensa, **incluye diagnóstico de una arquitectura ajena** (DOC-10 §8, C-N9-04) — a detallar en Paso 5, previendo un banco de 2-3 arquitecturas de referencia (anonimizadas o sintéticas) con fortalezas/riesgos reales identificables, no un caso de juguete sin ambigüedad.

## 8. Bibliografía — verificada por WebFetch/WebSearch real (2026-07-21)

| Fuente | Verificado | Relevancia directa para N9 |
|---|---|---|
| **Designing Data-Intensive Applications**, 2nd ed. (Kleppmann & Riccomini) | Estructura de capítulos confirmada: Parte I Fundamentos (modelos de datos, almacenamiento, codificación), Parte II Datos Distribuidos (Cap. 5 Replicación, Cap. 6 Particionamiento, Cap. 8 Problemas de sistemas distribuidos, Cap. 9 Consistencia y consenso), Parte III Datos Derivados | M3 completo (Cap. 5-6 son literalmente el contenido de Lab2-3); M1/M4 (Cap. 8-9, fallos parciales, qué significa "sano" en un sistema distribuido) |
| **MLOps Zoomcamp** (DataTalksClub, [GitHub](https://github.com/DataTalksClub/mlops-zoomcamp)) | Gratuito y autogestionado confirmado ("self-paced study", sin cohorte en vivo 2026); 6 módulos verificados: Introducción, Experiment Tracking, **Orquestación**, **Despliegue**, **Monitoreo (Prometheus/Evidently/Grafana)**, Buenas Prácticas (testing/CI-CD/IaC) | Módulo 3 (orquestación) → M1; Módulo 4 (despliegue: web service/streaming/batch) → M2; **Módulo 5 (monitoreo con Prometheus+Grafana) es prácticamente un ancla 1:1 con M4** |
| **Kubernetes docs** ([kubernetes.io/docs/concepts](https://kubernetes.io/docs/concepts/)) | Taxonomía completa verificada: Overview, Cluster Architecture, Workloads, Services/Networking, Storage, Configuration, Scheduling | Recorre en el mismo orden que M1.Lab1-3 |
| **vLLM docs** ([docs.vllm.ai](https://docs.vllm.ai/en/latest/getting_started/quickstart.html)) | Quickstart verificado: instalación, inferencia offline, servidor compatible OpenAI (`vllm serve <modelo>`) — confirmado que el quickstart NO cubre medición de rendimiento | M2.Lab1 |
| **vLLM `benchmarks/benchmark_serving.py`** ([GitHub oficial](https://github.com/vllm-project/vllm/blob/main/benchmarks/benchmark_serving.py)) | Confirmado como la herramienta oficial del propio proyecto para medir throughput/latencia bajo carga — no un script de terceros | M2.Lab2, ancla directa de la exigencia de "mediciones propias" de DOC-10 |

**Fuentes adicionales verificadas para la decisión de entornos (no bibliografía oficial de DOC-10, sino respaldo técnico de §3 — mismo criterio de ampliación justificada que N3 usó con Seeing Theory):** InsiderLLM (guía WSL2 GPU 2026), Docker Docs (soporte GPU en Docker Desktop), Lune.dev (fallo de detección de GPU en K8s sobre WSL2), kind.sigs.k8s.io (clústeres multi-nodo).

**Bibliografía ampliada de M1 (2026-07-22, verificada por WebSearch real, citada por decisión del Director de elevar el estándar a nivel académico/profesional):** Verma et al., *"Large-scale cluster management at Google with Borg"* (EuroSys 2015) · Burns, Grant, Oppenheimer, Brewer, Wilkes, *"Borg, Omega, and Kubernetes"* (CACM 2016) · Linux man-pages, `pid_namespaces(7)` (man7.org) · `tini` (krallin/tini, GitHub) · Basiri et al., *"Principles of Chaos Engineering"* (Netflix, 2017, arXiv:1702.05843) · Wiggins, *The Twelve-Factor App*, Factor III (12factor.net) · CIS Kubernetes Benchmark (Center for Internet Security) · Google Open Source Blog, *"The End of an Era: Transitioning Away from Ingress NGINX"* (2026) — confirma el retiro oficial de `ingress-nginx` en marzo 2026 · Gateway API (gateway-api.sigs.k8s.io, sucesor oficial de Ingress) · Amdahl (1967) y Gunther, *Universal Scalability Law* (perfdynamics.com) · KEDA (keda.sh, CNCF) · Argo Rollouts (argoproj.github.io/rollouts).

## 9. Pendiente

Construcción real módulo por módulo en `index.html` (`LEVEL9`), harness de verificación (nota: N9 no tiene `check()` de Pyodide que verificar numéricamente — el equivalente aquí es la ejecución empírica real de cada comando antes de fijarlo, §3.6), `docs/investigacion/n9-m1-*.md` etc. por laboratorio (DOC-12 §0bis, investigación pedagógica específica por comando/flujo — distinta de esta investigación de bibliografía a nivel de syllabus), capstone detallado, compuerta con banco de arquitecturas, auditoría integral, Herencias Declaradas finales, auditoría adversarial, v1.0.0.
