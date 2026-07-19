# DOC-03 — Modelo Pedagógico de la Academia
### (Especificación de Lección y Metodología Operativa)

## Control del documento (conforme a DOC-00 §15.4)

| Campo | Valor |
|---|---|
| **Document Key** | DOC-03 · Tier T1 (título del catálogo: "Especificación de Lección y Metodología Operativa"; título de uso: "Modelo Pedagógico de la Academia") |
| **Versión / Estado** | **1.1.0** · ✅ **Aprobado** por el Director (2026-07-19) — **referencia pedagógica definitiva de la Academia**, ampliada por validación ascendente (§8bis) |
| **Autoridad de origen** | DOC-00 §16.7 (plantillas, heurísticas, profundidades y checklist de conformidad delegadas) |
| **Depende de** | DOC-00 (§7 PED; §16 método — ley intocable; §17/§19/§20 por referencia) · DOC-01 (competencias) · DOC-02 (rúbricas y plantillas) |
| **Produce / desarrolla** | La especificación de sesión y tema que TODOS los syllabus futuros y el Tutor IA consumen; las heurísticas de tiempos (16.2.3); la checklist de conformidad (16.7); la ampliación del catálogo de modos del Tutor (19.5.3, registro vivo) |
| **AC aplicables (9.7)** | AC-05 · AC-09 (los sustitutos del grupo integrados por diseño) · AC-10 · AC-12 (denso, pero revisable por partes) · AC-14 |
| **Naturaleza** | El ADN de la enseñanza. Enriquece y especializa el método sellado (16.1.3: puede ampliar, jamás eliminar); nada de lo sellado se modifica |
| **Historial** | 0.1.0-draft (2026-07-18): redacción conforme al ADR aprobado + la elevación de ambición del Director (10 modelos transversales y principio rector) · 0.2.0-draft (2026-07-18): elevación final por orden del Director — auditoría "¿forma ingenieros o solo enseña a programar?"; 4 vacíos cerrados (razonamiento sobre la corrección A5; experimentación científica A6; escritura técnica A7; problema de largo aliento B6) + confrontación de soluciones en M12 · 0.3.0-draft (2026-07-18): auditoría extrema del comité (mandato de ruptura); 2 hallazgos que superan el triple filtro del Director — práctica intercalada (P12, en M10/escalera/checklist) y regla de dosificación con prioridad del núcleo (§5); el resto de ataques, resistidos (acta en la revisión) · **1.0.0 (2026-07-18): aprobado por el Director como estándar pedagógico definitivo. Decisión institucional asociada: el diseño pedagógico queda cerrado; toda mejora futura deberá provenir exclusivamente de evidencia obtenida en la ejecución real y tramitarse por gobernanza — no se rediseñará la pedagogía por hipótesis ni preferencias** · **1.1.0 (2026-07-19): ampliación por validación ascendente, autorizada por el Director tras la auditoría institucional del corpus completo (Blueprint+DOC-01/02/03/10+SYL-N0/N1/N2).** Se incorpora el nuevo §3.F (8 elementos permanentes de diseño por módulo — gran pregunta, Momento Fundacional, garantía adquirida, supuesto que destruye, limitación humana compensada, lo que deja de sorprender, coste de no enseñarlo, los tres niveles), nacidos y validados de forma independiente durante la construcción y auditoría de SYL-N1 y SYL-N2; y el nuevo §8bis, que registra formalmente el **principio de validación ascendente** como capacidad permanente de la arquitectura documental. Ningún principio previo de este documento se modifica — solo se completa con lo ya demostrado |

---

## 0. El principio rector

> La pregunta de esta academia no es *"¿qué debe saber el estudiante?"*.
> Es: **"¿Cómo piensa un ingeniero excepcional, y qué experiencias educativas necesita vivir una persona para empezar a pensar de esa manera?"**

Todo lo que sigue es la respuesta operativa a esa pregunta. El objetivo de cada sesión no es cubrir contenido: es provocar, una vez más, el tipo de experiencia — el problema que supera lo explicado, la predicción que falla, la defensa que obliga a pensar, el trade-off sin respuesta única — del que emerge esa forma de pensar. Python y la IA son el material; el producto es el ingeniero.

## 1. Fundamento: los principios extraídos

Síntesis del informe de investigación (aprobado por el Director), cada uno con su huella en este documento:

| # | Principio | Origen | Dónde vive aquí |
|---|---|---|---|
| P1 | El aprendizaje profundo ocurre en la distancia entre lo enseñado y lo exigido | MIT (psets) | Acto III.10, Nivel Avanzado/Elite |
| P2 | Evaluar el cómo: correcto ×2, diseñado ×2, escrito ×1 | CS50 | Triple vara (§3.C), feedback de toda práctica |
| P3 | Enseñar sobre un modelo explícito del pensamiento del estudiante; asistencia justo-a-tiempo | CMU | Momentos 2 y 5; conducción del Tutor (§5) |
| P4 | El proyecto es una unidad de ingeniería, no un ejercicio grande | Berkeley | Modelo de proyectos (§3.C) |
| P5 | La exigencia innegociable es respeto | ETH | Modelo de presión (§3.E) |
| P6 | Defender semanalmente ante un experto es el mecanismo de aprendizaje más profundo | Oxford | Momento 13; defensa como rutina |
| P7 | Leer y predecir antes de escribir; transferencia gradual de la propiedad del código | PRIMM | Actos III.7–10 |
| P8 | El compromiso explícito con una predicción antes de ver el resultado multiplica el aprendizaje | Peer Instruction (adaptado a AC-09) | Momento 7; toda ejecución |
| P9 | Intento breve antes de la teoría — con instrucción guiada inmediata (fracaso productivo dosificado; el descubrimiento puro está prohibido por 7.5.2) | Kapur + PED-08 | Momento 3 |
| P10 | El modelo mental de la máquina (notional machine) es la causa nº1 de confusión del novato | Investigación CS-ed | Momento 6; ejecución mental |
| P11 | Interactivo > Constructivo > Activo > Pasivo: cada minuto, lo más alto posible | ICAP (Chi) | Regla de conducción global |
| P12 | La práctica intercalada supera a la práctica en bloque: mezclar problemas de temas distintos obliga a *elegir* la herramienta, no solo a ejecutarla | Rohrer & Taylor; dificultades deseables (Bjork) | M10 y escalera B1 (regla de intercalado) |

Trazabilidad NNR-12: todos realizan PED-01…11; ningún mecanismo de este documento carece de fundamento.

## 2. La secuencia de sesión: 14 momentos en 5 actos

La realización operativa de las 9 fases selladas (16.2) al nivel de la sesión de estudio. Es **estructura, no calendario** (16.2.2): un tema pequeño recorre los actos en una sesión; uno grande, en varias — jamás incompleta. Los porcentajes son las heurísticas delegadas por 16.2.3.

### ACTO I — ACTIVAR *(≈10 % · realiza F1)*

**M1 · Recuperación activa.** 3–5 preguntas de temas anteriores, de memoria, sin material a la vista (PED-04). Incluye siempre ≥1 pregunta del mazo vivo del estudiante (20.5). *El tutor:* pregunta y calla; corrige solo lo esencial.
**M2 · Diagnóstico relámpago.** Una pregunta diseñada para exponer el modelo mental de partida sobre el tema nuevo (P3). No se corrige aún: se anota — es el mapa de la sesión.
**M3 · El problema antes que nada.** Un problema real, motivador, que el estudiante *todavía no puede* resolver. Intento breve (minutos, no frustración prolongada), en seguridad: fallar aquí es el plan (P9, PED-10). El problema regresa resoluble en M12. *Transversal activado: curiosidad científica — el problema abre con un "¿y si quisiéramos…?".*

### ACTO II — CONSTRUIR EL MODELO MENTAL *(≈20 % · realiza F2–F3)*

**M4 · Intuición, analogía e historia.** El modelo mental antes del formalismo (bloques I–II de 16.3), **siempre con su contexto histórico**: qué había antes, qué problema real hizo nacer este concepto, quién lo pagó caro por no tenerlo. La historia no es cultura general: es la *razón de existir* del concepto (transversal: historia y contexto).
**M5 · Conflicto cognitivo.** El caso donde la intuición ingenua FALLA — construido a partir del diagnóstico de M2 y de los errores clásicos del tema. El momento de máxima atención de la sesión: aquí se corrige el modelo, no el síntoma (P3, PED-10).
**M6 · Explicación rigurosa con la máquina a la vista.** La teoría completa (bloque II de 16.3) con la **máquina nocional explícita** (P10): qué hace el intérprete, línea a línea, variable a variable, en memoria (sección 8 de 16.3; el depurador visual del campus es su instrumento). Todo término nuevo definido antes de usarse (NNR-10).

### ACTO III — PRACTICAR EN ESCALERA *(≈40 % · realiza F4–F5; escalera 16.4.3 con los peldaños PRIMM)*

**M7 · Predecir.** Código ajeno: el estudiante **compromete su predicción por escrito antes de ejecutar** (P7, P8). Predicción fallada → tarjeta al mazo vivo (20.4).
**M8 · Investigar y reordenar.** Trazar código con la máquina nocional; Parsons problems (reordenar código desordenado) como peldaño entre leer y escribir. *Transversal: ingeniería inversa comienza aquí — "este código funciona: explica POR QUÉ".*
**M9 · Modificar.** Código funcionando + objetivo de cambio (PRIMM-M): la propiedad del código se transfiere gradualmente.
**M10 · Escribir.** Producción propia en dificultad creciente **hasta superar lo explicado** (P1): el último ejercicio del acto exige combinar lo nuevo con lo viejo de una forma no mostrada. **Regla de intercalado (P12):** del peldaño *normal* en adelante, los sets de práctica mezclan deliberadamente problemas de temas anteriores sin anunciar cuál es cuál — el ejercicio en bloque entrena a *ejecutar* la herramienta; el intercalado entrena a *elegirla*, que es lo que la realidad exige. La proporción crece con el nivel: en N0 una pizca; desde ET2, ningún set sumativo es puro.
**M11 · Depurar.** Bugs inyectados deliberadamente + los propios del camino, con la disciplina completa: síntoma → hipótesis → prueba mínima → causa raíz → corrección → *análisis estructurado del error* (transversal): ¿qué clase de error fue? ¿qué modelo mental lo produjo? ¿cómo lo prevengo como clase, no como caso?

### ACTO IV — INTEGRAR *(≈20 % · realiza F6)*

**M12 · Laboratorio.** El problema de M3, ahora resoluble — y algo más allá. Unidad pequeña de ingeniería, no ejercicio largo (P4): con decisión abierta, con la **triple vara** (¿funciona? ¿está bien diseñado? ¿está bien escrito? — P2) y con al menos un **trade-off explícito** que el estudiante debe decidir y justificar (transversal: decisiones técnicas). Cierra con dos ritos: el **argumento de corrección** (A5: "¿cómo sabes que funciona?" — casos enumerados antes de la ejecución final) y la **confrontación de soluciones**: el tutor presenta 1–2 soluciones alternativas al mismo problema y el estudiante las compara con la propia (¿cuál es más legible? ¿cuál escala? ¿qué paga cada una?) — así se forma el *criterio*, el gusto de ingeniería que distingue código correcto de código bueno. En los temas que lo ameritan, M12 es la pieza del proyecto columna vertebral (16.5).

### ACTO V — CONSOLIDAR *(≈10 % · realiza F7–F9)*

**M13 · Defensa socrática.** El tutorial de Oxford en miniatura, **rutina semanal** (P6): explicar lo construido, sostener repreguntas inéditas, justificar decisiones, declarar límites. Alimenta C-N0-05 y sus equivalentes; en compuertas, se formaliza como TD-01/TD-02 (DOC-02).
**M14 · Transferencia, reflexión y lectura.** Un problema en contexto nuevo (PED-07); las **seis preguntas de excelencia** como cierre metacognitivo (¿qué aprendí? ¿por qué existe? ¿qué problema resuelve? ¿cómo lo usan los profesionales? ¿cómo se conecta con lo anterior? **¿qué pasaría si no existiera?**); y la **lectura dirigida** asignada (modelo §3.D). El bloque de cierre sellado (16.4.7) es el artefacto de este momento.

## 3. Los modelos transversales

*Mandato del Director: integrados en la estructura de cada sesión, no como contenido aislado. La matriz de integración está en §4.*

### 3.A — Modelos del pensamiento

**A1 · Pensamiento de ingeniería.** El hábito que distingue al ingeniero del programador: **descomponer antes de codificar** (todo M10/M12 empieza con plan escrito de 3 líneas, no con código) · **estimar antes de medir** ("¿cuánto crees que tarda/ocupa/falla?" antes de comprobarlo) · **nombrar los supuestos** ("esto funciona SI…") · **diseñar para el cambio** (¿qué pasa cuando esto crezca ×100?). Actividad semanal: una *descomposición en frío* — un problema grande que NO se resuelve, solo se descompone y estima.

**A2 · Decisiones técnicas y trade-offs.** Desde N0, ninguna decisión es "porque sí": todo M12 contiene al menos una bifurcación real (¿lista o diccionario? ¿validar antes o preguntar perdón? ¿legible o veloz?) que el estudiante decide con el formato: **opciones consideradas → criterio → decisión → costo aceptado**. En niveles altos, esto madura hacia los design docs (D2). La pregunta del tutor: *"¿qué estás pagando por esta decisión?"*.

**A3 · Metacognición profunda.** Tres prácticas: la **calibración** antes de cada evaluación ("¿cuánto crees que sabes de esto, del 1 al 10?" — luego se contrasta con el resultado: la brecha ES la lección); el **diario de errores** (el mazo vivo enriquecido: no solo *qué* fallé sino *qué modelo mental* me hizo fallar); y la **autopsia de sesión** en M14 (¿qué me costó? ¿dónde me engañé? ¿qué haría distinto?). El estudiante aprende a observar su propio aprendizaje — la competencia D3.4 entrenada, no esperada.

**A4 · Curiosidad científica ("¿y si…?").** Cada tema siembra al menos dos preguntas abiertas sin respuesta en la sesión: *"¿Y si le pasas un número negativo? ¿Y si hay dos millones de elementos? ¿Y si dos programas lo hacen a la vez?"* — algunas se responden en niveles futuros (y se anota la promesa), otras invitan a experimentar en el playground. La regla: **el tutor premia la pregunta buena tanto como la respuesta buena.** Su motor operativo es A6.

**A5 · Razonamiento sobre la corrección.** La diferencia entre "me funciona" y "sé por qué funciona". Depurar es reaccionar al error; esto es lo contrario: *argumentar la corrección antes de ejecutar*. Tres prácticas, madurando por etapa: **(a) enumeración de casos** — antes de dar por terminado M10/M12, el estudiante responde el ritual *"¿cómo sabes que funciona?"* listando los casos que su código debe soportar (el normal, el borde, el vacío, el hostil) y mostrando que los cubrió; **(b) la prueba antes que el código** — desde N0 como hábito informal ("¿qué entradas usarás para comprobarlo?" se pregunta ANTES de escribir), formalizado como testing real cuando el temario lo alcanza; **(c) invariantes en lenguaje natural** — "¿qué es verdad en cada vuelta de este bucle?", "¿qué promete esta función y qué exige?" — el precursor conversacional de precondiciones y contratos. Regla: **ningún laboratorio se cierra sin que el estudiante haya argumentado su corrección; la ejecución confirma el argumento, no lo sustituye.**

**A6 · Experimentación científica estructurada.** La curiosidad de A4 convertida en método. Cuando una pregunta "¿y si…?" lo amerita, se tramita con el ciclo completo: **hipótesis escrita → predicción comprometida → experimento mínimo en el playground → resultado → conclusión ("mi modelo mental era correcto / estaba roto aquí")**. Al menos un experimento estructurado por tema; los que rompen el modelo mental van al diario de errores (A3) como los hallazgos más valiosos. El estudiante aprende que en ingeniería la duda no se discute: se experimenta — y que un experimento sin predicción previa comprometida no es un experimento, es mirar.

**A7 · Escritura técnica como pensamiento.** Escribir descubre las lagunas que hablar disimula. Práctica semanal innegociable: una **explicación escrita breve** (técnica Feynman: explicar el concepto de la semana como a un colega que no estuvo, sin mirar el material) que el tutor revisa con vara de precisión — cada término vago señalado es una laguna encontrada. Progresión por etapas: ET1 — explicaciones y análisis de errores escritos · ET2 — READMEs y decisiones documentadas del formato A2 · ET3 — mini design docs y resúmenes de papers (con el rol Editor científico) · ET4–5 — design docs completos y escritura de nivel profesional. La defensa oral (M13) y la escritura se auditan mutuamente: lo que no sobrevive por escrito, no estaba comprendido.

### 3.B — Modelos de la práctica

**B1 · Dificultad en 4 niveles** (sobre la escalera sellada 16.4.3):

| Nivel | Peldaños | Carácter | Obligatorio |
|---|---|---|---|
| **Base** | muy fácil → normal | Consolida el modelo mental | Sí |
| **Intermedio** | difícil | Exige combinar | Sí |
| **Avanzado** | empresa → entrevista | Contexto y presión reales | Sí (compuerta) |
| **Elite / MIT Challenge** | open source + problemas que exigen ideas no mostradas (P1) | Va más allá de la lección; puede requerir investigación propia | **Opcional, siempre disponible, jamás requerido para compuertas** |

**B2 · Taxonomía de preguntas (9 tipos + regla de proporción).** Recordar · comprender · aplicar · analizar · **depurar** · **predecir** · **diseñar** · **defender** · **transferir**. Regla ICAP (P11): en toda sesión, la mayoría del tiempo de pregunta vive en los cinco tipos finales; las dos primeras solo abren (M1) y calibran.

**B3 · Modelo de proyectos.** Un proyecto (a diferencia de un ejercicio) tiene: un *usuario* imaginable · *decisiones abiertas* (dos estudiantes producirían soluciones distintas) · *trade-offs* documentados (A2) · la *triple vara* (P2) · y la *checklist TP-01 como piso, no techo* (DOC-02). Desarrolla simultáneamente D1 (construir), D2 (decidir), D4 (oficio) y D6 (explicar). Calidad esperada: resistir el examen de un tercero sin contexto (6.4.3).

**B4 · Debugging y análisis estructurado de errores.** Competencia central con hilo curricular propio: **(a)** cada tema inyecta bugs característicos (sintaxis→lógica→estado→diseño, madurando por nivel); **(b)** la disciplina RM-04 se practica semanalmente, no solo se evalúa; **(c)** todo error significativo recibe el análisis de tres niveles: *síntoma* (qué se ve) → *causa* (qué línea/estado) → *clase* (qué patrón de error es y qué modelo mental lo produce); **(d)** el diario de errores (A3) acumula las clases — el estudiante termina con su propia taxonomía de cómo se equivoca, que es oro puro de ingeniería.

**B5 · Ingeniería inversa y lectura sistemática de código.** El ingeniero lee 10× más código del que escribe. Progresión por etapas: ET1 — trazar fragmentos ajenos y explicar *por qué* funcionan (M8) · ET2 — leer un módulo pequeño real y producir su mapa (qué hace, cómo, dónde está el riesgo) · ET3 — leer implementaciones de referencia (un modelo, una librería) antes de implementar la propia · ET4–5 — leer sistemas y papers como fuente primaria de diseño (D2.4, D7). Regla de sesión: **nunca se escribe un tipo de código que no se haya leído primero.**

**B6 · El problema de largo aliento.** Lo que ningún ejercicio de sesión puede enseñar: sostener un problema abierto durante días. Cada módulo incluye **un problema que deliberadamente no cabe en una sesión** (el espíritu del pset de MIT): se abre temprano, convive con los temas, admite atascos — y el atasco es parte del diseño, no un fallo. Reglas: el tutor NO lo destraba con pistas al ritmo de sesión (las pistas siguen §21, pero espaciadas: aquí se entrena volver con ojos frescos, no avanzar rápido); el estudiante registra sus intentos (qué probé, por qué no funcionó, qué intentaré) — ese registro es evidencia [D] de proceso; y cerrarlo requiere la triple vara + el argumento de corrección (A5). En N0 dura días; en niveles altos, semanas. La persistencia intelectual es una capacidad entrenable, y este es su gimnasio.

### 3.C — Modelos del contexto

**C1 · Historia y contexto de cada concepto.** Operativiza la sección 3 de 16.3: todo concepto se presenta con su línea *antes → problema → solución → evolución → hoy* (16.4.6) y con una **anécdota de costo real** cuando exista (el bug célebre, el sistema caído, la decisión que envejeció mal). El estudiante nunca aprende una herramienta: aprende la respuesta histórica a un problema.

**C2 · Lectura progresiva: de la documentación al paper.** Escalera por etapas, alineada con §18: ET1 — fragmentos de documentación oficial elegidos por el tutor (ES/EN según dosis) · ET2 — documentación oficial como fuente primaria de trabajo · ET3 — primeros papers con andamiaje (leer solo abstract+figuras primero; luego el método) · ET4 — papers aplicados y posts de ingeniería de los mejores equipos · ET5 — papers de frontera con autonomía (D7.2). Cada tema declara su lectura: **libro/capítulo · documentación oficial · artículo · paper (cuando corresponda)** — asignada tras la intuición (M14), jamás como sustituto de la clase (NNR-03).

**C3 · Beyond the Curriculum.** Cada tema cierra con una puerta señalizada hacia lo que el temario no cubre: el agujero de conejo de calidad (una lectura avanzada, un problema abierto, una conexión con investigación actual, un "así lo hace Google/DeepMind por dentro"). Reglas: es exploración pura — **no computa, no bloquea, no se evalúa** (NNR-03/05); el tutor la registra si el estudiante la recorre (señal de curiosidad para S4); y alimenta el nivel Elite cuando el estudiante quiere convertir curiosidad en reto.

### 3.D — El Tutor multi-rol

El contrato de §19 permanece invariante (la ley); lo que este modelo añade es **el repertorio de roles** con que el tutor conduce cada momento — propuesto como ampliación del catálogo de modos (19.5.3, registro vivo). Ningún rol altera obligaciones, prohibiciones ni estándares (19.5.2):

| Rol | Cuándo | Qué hace |
|---|---|---|
| **Profesor** | M4–M6 | Construye el modelo mental; explica con rigor y narrativa |
| **Entrenador socrático** | M1–M3, M7 | Pregunta, calla, exige predicción y compromiso |
| **Pair programmer** | M9–M10 | Piensa en voz alta al lado, sin tocar el teclado del estudiante |
| **Revisor de código** | M12 | Code review profesional: triple vara, qué bien/qué mejorar/cómo escalar |
| **Cliente** | Proyectos | Pide, cambia de opinión, no sabe de código: obliga a traducir (D6.1) |
| **Arquitecto** | M12 en niveles altos | Discute trade-offs de igual a igual; pide el design doc |
| **Entrevistador** | Simulacros (RM-08) y preguntas tipo entrevista del cierre | Presión realista de proceso de selección |
| **Examinador** | F7/F8 | Aplica instrumentos DOC-02 con neutralidad; documenta veredicto |
| **Editor científico** | ET3+ | Exige precisión en resúmenes de papers y reportes (D7, D5.4) |

La rotación de roles es, además, el principal **sustituto del grupo** que AC-09 exige: la diversidad de voces que una cohorte daría, la da el repertorio.

### 3.E — Presión académica y excelencia

La presión legítima tiene cuatro fuentes — y solo cuatro: problemas por encima de la lección (P1) · defensa regular ante repreguntas (P6) · estándar innegociable con criterios visibles (P5, P2) · ritmo sostenido con dedicación pactada (5.4.1). Está **prohibido** generarla con: ambigüedad de enunciados, volumen vacío, dificultad arbitraria o sorpresas de criterio (PED-08: la carga cognitiva se gasta en el problema, no en descifrar qué se pide). Y el termómetro es el borde de capacidad (PED-02): si nunca falla, es demasiado fácil; si falla sin poder progresar con pistas, está mal calibrado — ambos son señales para S4 (20.4).

### 3.F — Arquitectura de la transformación por módulo *(incorporado por validación ascendente, §8bis — nacido y validado durante SYL-N1/N2)*

Ocho elementos que todo módulo o unidad equivalente de un syllabus DEBE declarar en su diseño. **Naturaleza:** son instrumentos de diseño y de auditoría de coherencia, dirigidos a quien construye y revisa el syllabus — no un guion que el tutor recita en sesión ni una lista que el estudiante escucha enunciada. En el aula, estas ideas emergen como conclusiones que el propio estudiante articula durante la defensa (M13) y la reflexión (M14) — nunca como una lección declarada. Si alguna vez se sintieran como fórmula repetida, la falla sería de la sesión que las convirtió en libreto, no del criterio.

**E1 · La gran pregunta.** Cada módulo se abre con una única pregunta de ingeniería, muy visible — la brújula intelectual y emocional que explica por qué existe cada tema. Los módulos se definen por grandes preguntas, jamás por tecnologías; uno que no pueda resumirse en una gran pregunta no está suficientemente refinado.

**E2 · El Momento Fundacional.** Un único instante —no varios, no repartidos— donde cambia definitivamente la manera de pensar del estudiante respecto a la gran pregunta del módulo. Se declara con precisión quirúrgica: el segundo exacto, no el tema completo que lo contiene.

**E3 · La garantía adquirida.** Qué propiedad nueva sostiene el sistema —o la capacidad del estudiante— al cerrar el módulo. No qué tecnología aparece: qué se puede dar por sentado ahora que antes no se podía.

**E4 · El supuesto que se destruye.** Qué creencia anterior deja de ser válida. No solo qué enseña el módulo — qué idea previa, plausible pero falsa, dejó de sostenerse.

**E5 · La limitación humana que se compensa.** Ningún mecanismo de ingeniería se enseña "porque es buena práctica" en abstracto: existe porque compensa una limitación humana real — olvido, distracción, error, exceso de confianza, dificultad para razonar sobre lo simultáneo. Nombrarla conecta la técnica con su motivo profesional.

**E6 · Lo que deja de sorprender.** Qué aspecto de la realidad profesional reduce su distancia con la intuición del estudiante tras este módulo. La Academia no enseña únicamente conocimientos: reduce progresivamente la distancia entre la intuición del estudiante y la realidad de la ingeniería profesional.

**E7 · El coste de no enseñarlo.** Todo tema se justifica respondiendo: si se eliminara, ¿aparecería una carencia observable en el ingeniero formado? Si la ausencia no cambia significativamente el perfil de egreso, el tema sobra o debe integrarse en otro.

**E8 · Los tres niveles.** Ningún tema se queda en el primero: **operativo** (sabe usar la herramienta) · **ingenieril** (comprende por qué existe, qué resuelve, cuáles son sus límites) · **arquitectónico** (decide cuándo usarla, cuándo no, y qué consecuencias tiene esa decisión para un sistema completo).

*Trazabilidad de origen: E1–E8 nacieron durante la construcción de SYL-N1 (E1, E7, E8 y el precedente de "institución de la ingeniería" e "idea de diez años") y se completaron durante SYL-N2 (E2–E6), sobreviviendo en ambos casos a su auditoría adversarial de cierre y a la auditoría institucional del corpus completo (2026-07-19) — el primer caso registrado del principio de validación ascendente (§8bis).*

## 4. Matriz de integración transversal

*El mandato "transversal, no aislado", verificable de un vistazo:*

| Momento | Transversales que activa |
|---|---|
| M1–M2 | Metacognición (calibración) |
| M3 | Curiosidad ("¿y si…?"), pensamiento de ingeniería (intento de descomposición) |
| M4 | Historia y contexto |
| M5 | Metacognición (el modelo mental propio, expuesto) |
| M6 | Máquina nocional; lectura (docs oficiales del concepto) |
| M7–M8 | Ingeniería inversa; predicción comprometida |
| M9–M10 | Pensamiento de ingeniería (plan antes que código); corrección (casos y prueba pensados antes de escribir — A5) |
| M11 | Análisis estructurado de errores; diario de errores |
| M12 | Trade-offs y decisiones; triple vara; argumento de corrección; confrontación de soluciones; rol Cliente/Revisor/Arquitecto |
| M13 | Defensa (Oxford); comunicación técnica (D6) |
| M14 | Metacognición (autopsia); lectura dirigida; Beyond the Curriculum; experimento "¿y si…?" (A6); las 6 preguntas de excelencia |
| **Ritmo semanal** | Explicación escrita Feynman (A7); descomposición en frío (A1); defensa M13 |
| **Ritmo de módulo** | Problema de largo aliento (B6) abierto de principio a fin |

## 5. Heurísticas de tiempos y regla de dosificación (delegación 16.2.3, saldada)

Actos: I ≈10 % · II ≈20 % · III ≈40 % · IV ≈20 % · V ≈10 % — orientativos, jamás plazos (14.2). Por tamaño de tema (herencia CU-10, ahora aquí): pequeño 1–3 sesiones · mediano 3–8 · grande (Docker, PyTorch) 2–4 semanas de sesiones · enorme (ML, DL, LLMs) 1–3 meses. La regla que manda sobre toda heurística: **la compuerta decide, el calendario estima.**

**Regla de dosificación (prioridad del núcleo).** Este modelo acumula rituales valiosos — y un ritual que desplaza a la práctica deja de ser valioso (PED-08: la carga cognitiva pertenece al problema). Por eso: **(a)** el núcleo intocable de toda sesión es practicar y construir (Actos III–IV, ~60 %); si el tiempo obliga a recortar, se recortan rituales, jamás el núcleo; **(b)** los ritmos son los declarados y no se compactan — la escritura Feynman (A7), la descomposición en frío (A1) y la defensa (M13) son *semanales*, no por sesión; el experimento (A6) y la confrontación de soluciones son *por tema*, no por sesión; el problema de largo aliento (B6) es *por módulo*; **(c)** el tutor dosifica bajo este orden y registra en las Observaciones de ejecución cualquier ritual que en la práctica estorbe más de lo que forma — esa evidencia, y solo esa, justificará podarlo. El modelo prefiere pocos ritos vividos con seriedad a muchos cumplidos por trámite.

## 6. Checklist de conformidad (delegación 16.7, saldada)

Un tema es conforme cuando — verificación A1, cobertura del 100 % de los elementos normativos de §16 más los de este modelo:

☐ Las 19 secciones presentes (16.3) · ☐ ciclo F1–F9 completo materializado en unidades §13 (16.2) · ☐ regla 20/80 con interacción frecuente (16.4.1) · ☐ todo ejercicio en formato antes/durante/después (16.4.2) · ☐ escalera de ejercicios con los 4 niveles B1, incluido Elite disponible (16.4.3) · ☐ escalera de ejemplos (16.4.4) · ☐ tres profundidades 🟢🟡🔴 (16.4.5) · ☐ comparaciones + timeline (16.4.6) · ☐ bloque de cierre de 9 puntos (16.4.7) · ☐ contribución al proyecto columna vertebral declarada (16.5) · ☐ secuencia de 14 momentos ejecutable (§2) · ☐ conflicto cognitivo diseñado desde errores reales (M5) · ☐ máquina nocional explícita (M6) · ☐ peldaños predecir/investigar/modificar antes de escribir (M7–M9) · ☐ bugs inyectados con análisis de clase (M11) · ☐ ≥1 trade-off real en el laboratorio (M12) · ☐ argumento de corrección exigido antes de cerrar M10/M12 (A5) · ☐ confrontación de soluciones prevista en M12 · ☐ ≥1 experimento estructurado hipótesis→predicción→conclusión (A6) · ☐ intercalado de temas anteriores en los sets desde el peldaño normal (P12) · ☐ explicación escrita semanal en el ritmo del tema (A7) · ☐ problema de largo aliento del módulo conectado (B6) · ☐ defensa socrática prevista (M13) · ☐ transferencia + 6 preguntas de excelencia + lectura declarada (M14) · ☐ puerta Beyond the Curriculum (C3) · ☐ mapeo a competencias C-Nx-## (13.5.4) · ☐ evaluación conforme a la matriz DOC-02.

## 7. Aplicación inmediata: N0 sin reescritura

Este modelo no exige reescribir el contenido de N0 (SYL-N0 es retrofit aprobado): el contenido publicado ya cumple la mayor parte de la checklist (hooks, historia, escaleras, checkpoints, ejecución mental, síntesis). Lo que el modelo añade en N0 se añade **por conducción del Tutor, no por código**: los 5 actos como guion de sesión sobre el material existente, la defensa semanal M13, el diario de errores, los trade-offs verbales en los retos, el ritual "¿cómo sabes que funciona?" (A5), el experimento "¿y si…?" en el playground (A6), la explicación escrita semanal (A7), y Beyond the Curriculum como conversación. El **problema de largo aliento de N0.M1 ya existe**: es la calculadora — abierta desde temprano, conviviendo con los temas, cerrada con triple vara y argumento de corrección (B6 no exige crear nada nuevo en N0). La primera sesión bajo este modelo es la que ya está abierta: **T2, con el contador esperando** — y su `"10"` es, exactamente, el conflicto cognitivo M5 del próximo tema.

## 8bis. Validación ascendente del modelo pedagógico

*(Registrado por decisión del Director, 2026-07-19, tras la auditoría institucional del corpus completo — no es una excepción a la arquitectura documental: es una capacidad deliberada de ella.)*

El flujo normal de la Academia desciende: Blueprint fija, los documentos T1 desarrollan, los syllabus (T2) instancian (DOC-00 15.4–15.5, regla de flujo 12.6.6). Este modelo declara, para sí mismo, el complemento necesario de ese flujo: **también puede ascender.**

> Cuando un principio pedagógico nace de forma independiente durante la construcción de más de un syllabus, sobrevive a su propia auditoría de coherencia y a una auditoría adversarial con mandato de ruptura, y demuestra mejorar objetivamente el diseño del aprendizaje — deja de ser una decisión local de ese syllabus y se incorpora aquí, en DOC-03, como estándar permanente de la Academia.

Esto no relaja la jerarquía documental: es la vía por la que la experiencia real de **construir** la Academia corrige y completa su autoridad pedagógica — exactamente la misma exigencia de evidencia objetiva que la política de no reapertura impone a los syllabus, aplicada ahora en la dirección inversa. La evidencia que autoriza la reapertura de un SYL viene de un estudiante ejecutando el currículo; la evidencia que autoriza una ampliación de DOC-03 viene de la construcción y auditoría independiente de la propia arquitectura curricular — ambas objetivas, de naturaleza distinta.

**Condición de ascenso — las tres pruebas que un principio debe superar antes de incorporarse a este documento:**

1. **Recurrencia real.** El principio surgió de forma independiente, no planificada desde el inicio, durante la construcción de más de un syllabus — nunca a partir de un solo caso o de una preferencia de diseño.
2. **Supervivencia auditada.** Resistió tanto la revisión módulo por módulo como una auditoría adversarial con mandato de ruptura, sin ser refutado ni reducido.
3. **Mejora demostrable.** Su ausencia produciría una carencia observable en la calidad del diseño — el mismo criterio del coste de no enseñarlo (E7), aplicado ahora a la propia arquitectura pedagógica.

Los ocho elementos de §3.F son el primer caso registrado de esta vía: nacieron de forma independiente durante SYL-N1 y SYL-N2, sobrevivieron a las auditorías adversariales de cierre de ambos niveles y a la auditoría institucional del corpus completo, y demostraron mejorar el diseño en dos niveles construidos por separado. Este registro es el precedente que **autoriza y limita** todo ascenso futuro: nada se incorpora a DOC-03 por preferencia — solo por haber superado, con evidencia, exactamente estas tres pruebas.

## 9. Cierre

Los syllabus futuros se construyen sobre este documento sin volver a discutir cómo enseñar: SYL-Nx declara *qué* temas; DOC-03 dicta *cómo se vive* cada uno. Toda mejora futura de este modelo deberá nacer de las Observaciones de ejecución — de la evidencia de un estudiante real aprendiendo — o del principio de validación ascendente (§8bis), y tramitarse por su proceso correspondiente. El ADN está escrito; ahora se expresa enseñando.
