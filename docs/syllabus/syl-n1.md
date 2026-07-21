# SYL-N1 — Syllabus del Nivel 1 · Computer Science

## Control del documento (conforme a DOC-00 §15.4)

| Campo | Valor |
|---|---|
| **Document Key** | SYL-N1 · Tier T2 |
| **Versión / Estado** | **1.0.0** · ✅ **Aprobado** por el Director (2026-07-18) — **producto educativo oficial de la Academia y plantilla para todos los niveles posteriores.** Diseño arquitectónico cerrado: modificaciones solo si corrigen defecto objetivo, mejoran significativamente el aprendizaje, mantienen coherencia con DOC-03/DOC-10 y justifican el coste de tocar una versión estable; lo demás se documenta para futura revisión mayor |
| **Autoridad de origen** | DOC-10 (interior de N1) · DOC-00 14.8.3 · DOC-01 (C-N1-01…07) |
| **Depende de** | DOC-10 (mapa) · DOC-00 (§13, §14, §16, 17.6, AC-06, AC-15) · DOC-01 · DOC-02 (instrumentos) · DOC-03 (método — todo tema se imparte con su guion) |
| **Produce / desarrolla** | La estructura docente completa de N1: fichas pedagógicas por tema, problemas de largo aliento, capstone ET1, evaluaciones y recursos. **Primer syllabus de instanciación pura desde el PMC** y **plantilla oficial de ficha pedagógica para todos los SYL futuros** (decisión del Director, 2026-07-18) |
| **Estándar de calidad** | *"Si otro profesor excepcional impartiera este nivel utilizando únicamente el syllabus, ¿obtendría prácticamente la misma calidad formativa?"* — las fichas de §5 existen para que la respuesta sea sí |
| **Historial** | 0.1.0-draft (2026-07-18): redacción conforme al ADR aprobado con la mejora metodológica del Director (ficha estandarizada de 9 campos; principio del entorno; triple justificación por tema; 7 habilidades cognitivas distintas en los problemas de largo aliento) · 0.2.0-draft (2026-07-18): **M1 aprobado por el Director** con 2 mejoras incorporadas a la plantilla oficial (campo 10 "Pregunta ingenieril" por tema; cierre "Así se usa esto en el mundo real" por módulo) — retrofitadas en M1 y aplicadas a M2; M3–M7 las reciben al presentarse a revisión · 0.3.0-draft (2026-07-18): **M2, M3 y M4 aprobados por el Director**; plantilla ampliada (Evolución de la idea + Idea universal, condicionales; enseñanza en 4 niveles: herramienta/modelo mental/decisión/idea universal); M4 gana "arqueología del software" y "ética del historial"; **M5 rediseñado por expectativa del Director** — el modelo mental de la máquina como centro (T2 terminal-sin-intermediarios, T3 procesos, T4 memoria/archivos/permisos, T5 automatización), los comandos como instrumentos · 0.4.0-draft (2026-07-18): **M5 aprobado**; plantilla +2 condicionales ("Gran abstracción"; "¿Qué rompe esta abstracción?") y directriz de la gran idea por módulo (las de M1–M5 selladas en sus cierres); M6 rediseñado sobre la narrativa del Director — entenderse (T1 pila de acuerdos) · confiar (T2 contratos y confianza, HTTPS/credenciales) · intercambiar (T3 frontera) · recuperarse (T4 fallar bien) · 0.5.0-draft (2026-07-18): **M6 aprobado**; 4 elementos nuevos del estándar (mejoras 10–12: coste de la comunicación, estructura de la confianza, el fallo es información; + **la gran pregunta del módulo** como apertura visible obligatoria — M1–M7 la reciben); **M7 rediseñado** sobre la gran pregunta del Director (notaría de datos T1 · declaratividad T2 · transacciones/todo-o-nada T3 · memoria que perdura T4) · 0.6.0-draft (2026-07-18): **M7 aprobado — los 7 módulos completos**; mejoras 13–15 integradas (instituciones de la ingeniería en M4–M7; "¿y si no existiera?" en las 4 garantías; persistencia como responsabilidad); principio fundacional documentado en la plantilla (ideas permanentes, no herramientas); **capstone reforzado en revisión global (paso 8)**: integración API→SQL obligatoria, cambio de requisitos a mitad de proyecto, defensa con arqueología propia, post-mortem escrito · 0.7.0-draft (2026-07-18): **paso 8 aprobado** con mejoras 16–18 (defensa: predicción de preguntas, mejor decisión + evidencia, decisión que cambiaría); **paso 9 — auditoría final adversarial ejecutada**: 3 dependencias hacia N2 selladas con siembras mínimas (decoradores H-01, BD cliente-servidor H-02, métodos HTTP), sección **"Herencias declaradas a SYL-N2"** creada (H-01…H-09, contrato entre niveles), coherencia interna y redundancias verificadas — candidato a v1.0.0 · **1.0.0 (2026-07-18): aprobado por el Director. Decisiones institucionales asociadas: (a) las Herencias Declaradas son obligatorias en todo cierre de nivel N1–N11; (b) la auditoría desde el nivel siguiente ("¿qué presupone N+1 que aún no existe aquí?") se institucionaliza; (c) el flujo de 9 pasos (diseño → revisión módulo a módulo → mejoras → capstone → compuertas → auditoría desde N+1 → herencias → auditoría adversarial → v1.0.0) pasa a ser la metodología oficial de construcción curricular; (d) Fase I del desarrollo académico completada — el esfuerzo pasa al contenido** |

## 1. Tabla resumen

| Módulo | Temas | Semanas est.* | Competencias | Largo aliento (habilidad) |
|---|---|---|---|---|
| M1 · Python profesional | 8 | ~5 | C-N1-01 | Descomposición de problemas |
| M2 · POO | 7 | ~4 | C-N1-01, C-N1-02 | Diseño incremental |
| M3 · Algoritmos y ED I | 8 | ~5 | C-N1-02, C-N1-06 | Depuración sistemática |
| M4 · Git y GitHub | 4 | ~2 | C-N1-03 | Refactorización |
| M5 · Linux, terminal y SO | 5 | ~2,5 | C-N1-04 | Pruebas |
| M6 · Redes y APIs | 4 | ~2 | C-N1-05 | Decisiones de ingeniería |
| M7 · SQL | 4 | ~2 | C-N1-05 | Documentación técnica |
| Capstone ET1 | — | ~3 | Todas + C-N1-07 | Integración |

*\*~5 meses · ~500 h a dedicación pactada. El calendario estima, la compuerta decide (14.2).*

## 2. Identidad del nivel

Por referencia a §14/DOC-10: **N1 · Computer Science** — la base de la disciplina; el estudiante pasa de ejecutar instrucciones a **modelar problemas**. Entrada: N0 Superado (NNR-01). Salida: capstone ET1 + compuerta → perfil "Junior Developer (trainee)" y cierre de etapa con checkpoint de rumbo (14.5.4).

## 3. Principios de ejecución

1. **Modelo híbrido Campus → Entorno Real** (aprobado): lecciones, checkpoints y teoría en el campus (estándar editorial vigente); práctica en M1–M3 en el intérprete embebido donde AC-06 lo permita y en la máquina real donde no; desde M4–M5 (semana 1, en paralelo) todo proyecto vive en el entorno real con Git. Verificación objetiva local mediante baterías de pruebas descargables (AC-15: sin servicios externos).
2. **Principio del entorno** *(directiva del Director)*: **el entorno nunca debe convertirse en obstáculo para el aprendizaje.** Ante cualquier dificultad, el tutor distingue explícitamente si el estudiante está aprendiendo programación o resolviendo infraestructura (SO, Git, editor, configuración). Las fricciones de infraestructura: (a) se resuelven con más directividad que las conceptuales — aquí las pistas §21 pueden ser directas, porque configurar no es la competencia evaluada; (b) se registran en la **bitácora de entorno** (§10) para detectar patrones; (c) jamás se confunden con dificultad conceptual en diagnósticos ni veredictos.
3. **Triple justificación**: toda ficha responde *por qué existe el tema, por qué exactamente ahora, y qué problema real habilita que antes era imposible* (campo "Por qué"). Un tema que no pueda responderlas no pertenece al syllabus.
4. **Método**: cada tema se imparte con el guion completo de DOC-03 (14 momentos, escalera con Elite, intercalado, experimento, Feynman semanal). La ficha da el *qué* y el *para qué*; DOC-03 da el *cómo*.

## 4. Estructura y grafo local

Troncal `M1 → M2 → M3`; **M4 y M5 en paralelo desde la semana 1** *(diseño pedagógico — ver nota de implementación abajo)*; `M6, M7` tras M2 (pueden intercalarse con M3); capstone al final integra todo. Dentro de cada módulo los temas son secuenciales salvo indicación. Invariantes 13.7 verificados: sin ciclos, todo alcanzable, nada huérfano.

**Nota de implementación (corrección de auditoría integral, 2026-07-20):** el Campus presenta un recorrido lineal único, sin bifurcaciones de navegación (decisión del Director, registrada en DOC-07 §Adenda y EVT-034 — la Academia sirve a un estudiante individual, no a cohortes que necesiten avanzar a ritmos distintos). En la práctica, esto significa que M4 y M5 no se viven "a la vez" semana a semana: se insertan de forma lineal en el punto donde se vuelven prerrequisito real (los Laboratorios de M5.T1-T2 y M1.T6 antes de M1.T7; M4 completo inmediatamente después; el resto de M5 a continuación), todos antes de que M1 termine. "En paralelo desde semana 1" describe correctamente la intención pedagógica (ambos módulos viven en el entorno real desde el principio, no se posponen) — pero no una alternancia real de navegación, que esta nota aclara para que ningún lector futuro del syllabus infiera una estructura que la implementación no tiene.

## 5. Fichas pedagógicas por tema

*Plantilla oficial (mejoras del Director tras las revisiones de M1 y M3). **Todo módulo enseña simultáneamente en cuatro niveles: la herramienta · el modelo mental · la decisión de ingeniería · la idea universal que seguirá siendo válida dentro de veinte años.** Campos por ficha (10 + 2 condicionales): Objetivo · Prerrequisitos · Competencias · Errores habituales · Modelo mental · Por qué (existe / ahora / habilita) · Evidencia de dominio · Práctica principal · Evaluación · **Pregunta ingenieril** (abierta, de diseño y trade-offs — la que se queda en la cabeza al terminar la clase) · **Evolución de la idea** (condicional — solo cuando la historia del *pensamiento* aporte de verdad: qué límite intelectual hizo nacer la idea) · **Idea universal** (condicional — la frase de ingeniería que sobrevive al tema aunque se olvide la implementación) · **Gran abstracción** (condicional — qué gran abstracción de la informática está aprendiendo realmente: la historia de la disciplina es la historia de sus abstracciones) · **¿Qué rompe esta abstracción?** (condicional — dónde deja de funcionar el modelo mental; solo siembra curiosidad: los niveles posteriores responden). **Directriz de la gran idea:** cada módulo aspira a dejar UNA idea que el estudiante recuerde diez años después de olvidar la sintaxis — se declara al final de su cierre. **Directriz de la gran pregunta:** cada módulo abre con **una única gran pregunta de ingeniería, muy visible** — la brújula intelectual y emocional que explica por qué existe cada tema; un módulo que no puede resumirse en una gran pregunta no está suficientemente refinado. Los módulos se definen por grandes preguntas, jamás por tecnologías. **Elementos condicionales adicionales (mejoras 13–14):** **Institución de la ingeniería** (qué institución construye esta tecnología — qué propiedad mantiene incluso cuando los humanos se equivocan) y **¿Y si no existiera?** (el desastre que la garantía evita: las garantías se entienden imaginando el mundo sin ellas). **Principio documentado de la Academia** *(Director, 2026-07-18)*: **no enseñamos herramientas, lenguajes ni frameworks — enseñamos las grandes ideas permanentes de la Ingeniería de Software y las Ciencias de la Computación; las tecnologías son solo el contexto donde esas ideas se manifiestan.** Si dentro de veinte años las tecnologías cambian por completo, el estudiante seguirá reconociendo las mismas ideas. Salvo indicación, la evaluación de tema es: escalera de ejercicios + reto + TD-01 breve (RM-03; oral RM-05). **Cada módulo cierra con "Así se usa esto en el mundo real"** — el puente al oficio: dónde aparece profesionalmente, errores de principiante, por qué lo valoran las empresas, dónde reaparece en la Academia.*

### M1 · Python profesional

> **La gran pregunta de este módulo: ¿cómo organizamos programas para que sigan siendo comprensibles cuando crecen?**

**N1.M1.T1 · Funciones a fondo**
- **Objetivo:** diseña funciones con parámetros, retorno y ámbito correctos, y traza el flujo completo de una llamada.
- **Prerrequisitos:** N0 íntegro (variables, tipos, control de flujo).
- **Competencias:** C-N1-01.
- **Errores habituales:** confundir `print` con `return`; esperar que la función modifique variables externas; reutilizar nombres sin entender scope; olvidar el caso sin `return` (None).
- **Modelo mental:** la función como **contrato entrada→salida** con su propio espacio de nombres que nace y muere en cada llamada.
- **Por qué:** existe porque sin abstracción no hay programas grandes / ahora porque N0 agotó lo que cabe en un guion lineal / habilita reutilizar lógica y pensar en piezas — el primer paso de la descomposición.
- **Evidencia de dominio:** ante un problema nuevo, propone la división en funciones *antes* de codificar y predice la salida de código con ámbitos anidados sin ejecutarlo.
- **Práctica principal:** ejercicios en escalera + experimento de scope ("¿y si dos funciones usan el mismo nombre?").
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿cuándo dividir una función mejora el diseño y cuándo solo fragmenta innecesariamente el código?

**N1.M1.T2 · Listas y tuplas**
- **Objetivo:** opera colecciones ordenadas (indexado, slicing, mutación, recorrido) y elige entre lista y tupla con criterio.
- **Prerrequisitos:** T1; strings de N0 (el slicing transfiere).
- **Competencias:** C-N1-01.
- **Errores habituales:** aliasing (`b = a` no copia); mutar mientras se itera; off-by-one en slices; usar lista donde el dato es inmutable.
- **Modelo mental:** la lista como **secuencia de referencias**, no de valores — dos nombres pueden apuntar a la misma lista.
- **Por qué:** existe porque casi todo dato real es colección / ahora porque las funciones ya permiten procesarlas con sentido / habilita programas sobre *conjuntos* de datos, no valores sueltos.
- **Evidencia de dominio:** predice correctamente los efectos del aliasing y justifica lista vs. tupla en un caso dado.
- **Práctica principal:** ejercicios + experimento de aliasing en el depurador visual.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿cuándo elegirías deliberadamente una tupla sabiendo que te quita flexibilidad — qué te está comprando esa restricción?

**N1.M1.T3 · Diccionarios y sets**
- **Objetivo:** modela datos con pares clave→valor y conjuntos, y decide cuándo un dict expresa mejor el problema que una lista.
- **Prerrequisitos:** T2.
- **Competencias:** C-N1-01, C-N1-02.
- **Errores habituales:** buscar por valor en vez de por clave; KeyError sin `get`; asumir orden como propiedad esencial; ignorar que las claves deben ser inmutables (conecta con T2).
- **Modelo mental:** el diccionario como **índice de un libro**: del nombre al contenido en un salto, sin recorrer.
- **Por qué:** existe porque nombrar los datos es modelar / ahora porque ya se conocen las secuencias y se puede contrastar / habilita representar entidades reales (un usuario, un producto) — la antesala de los objetos.
- **Evidencia de dominio:** dado un enunciado, elige la estructura correcta y defiende el porqué con el coste de búsqueda como argumento.
- **Práctica principal:** ejercicios de modelado ("representa esto") + reto de conteo de frecuencias.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si mañana este programa tuviera un millón de registros, ¿seguirías utilizando la misma estructura?

**N1.M1.T4 · Comprehensions**
- **Objetivo:** transforma y filtra colecciones con comprehensions legibles, y reconoce cuándo NO usarlas.
- **Prerrequisitos:** T2–T3.
- **Competencias:** C-N1-01.
- **Errores habituales:** anidar hasta lo ilegible; efectos colaterales dentro de la expresión; usarlas como sustituto universal del bucle.
- **Modelo mental:** la comprehension como **transformación declarativa**: "qué quiero", no "cómo lo recorro".
- **Por qué:** existe porque transformar colecciones es el gesto más repetido del oficio / ahora porque el bucle explícito ya es sólido y puede comprimirse sin magia / habilita código profesional legible (y prepara el pensamiento map/filter de datos en N4).
- **Evidencia de dominio:** convierte bucles a comprehensions y viceversa, y explica cuál conviene en cada caso — incluida la decisión de legibilidad (primer trade-off recurrente).
- **Práctica principal:** ejercicios de traducción bidireccional + confrontación de soluciones.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿dónde está la frontera entre código conciso y código críptico — y quién debería decidirla: tú, o el próximo que lo lea a las 3 a.m.?

**N1.M1.T5 · Excepciones**
- **Objetivo:** maneja errores con try/except/finally con precisión, lanza excepciones propias y decide entre validar antes o capturar después.
- **Prerrequisitos:** T1; tracebacks de N0.T8.
- **Competencias:** C-N1-01; refuerza C-N0-02.
- **Errores habituales:** `except:` desnudo que traga todo; usar excepciones como control de flujo ordinario; capturar demasiado pronto y perder el contexto del error.
- **Modelo mental:** la excepción como **señal que sube por la pila de llamadas** hasta que alguien la atiende — conecta con el modelo de llamadas de T1.
- **Por qué:** existe porque el mundo real falla (archivos que no están, entradas corruptas) / ahora porque ya hay funciones cuyas fronteras definen dónde atender el fallo / habilita programas robustos que degradan con elegancia — imprescindible antes de tocar archivos (T8) y red (M6).
- **Evidencia de dominio:** ante un traceback multinivel, identifica dónde conviene capturar y dónde dejar subir, y lo argumenta.
- **Práctica principal:** laboratorio de robustez (entrada hostil, DOC-03 A5: el caso hostil).
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿qué errores debería atrapar tu programa y cuáles debería dejar que lo detengan — y qué pasa si eliges mal en cada dirección?

**N1.M1.T6 · Módulos, paquetes y entornos virtuales**
- **Objetivo:** organiza código en módulos propios, importa con criterio y aísla dependencias en entornos virtuales.
- **Prerrequisitos:** T1; M5.T1 (entorno real instalado).
- **Competencias:** C-N1-01, C-N1-04.
- **Errores habituales:** imports circulares; confundir script con módulo (`__main__`); instalar todo global; copiar código en vez de importarlo.
- **Modelo mental:** el programa como **ciudad de módulos**: cada archivo un barrio con responsabilidad propia; el entorno virtual como parcela aislada del sistema.
- **Por qué:** existe porque los programas de un archivo se agotaron / ahora porque hay entorno real donde los paquetes existen de verdad / habilita proyectos multi-archivo — condición del capstone y de todo lo que sigue.
- **Evidencia de dominio:** estructura un proyecto en ≥3 módulos coherentes y levanta un entorno desde cero con requirements.
- **Práctica principal:** laboratorio en entorno real (primer proyecto multi-archivo).
- **Evaluación:** estándar (verificación en máquina real).
- **Pregunta ingenieril:** si dos proyectos tuyos necesitan versiones distintas de la misma librería, ¿qué se rompe sin entornos aislados — y qué coste aceptas a cambio del aislamiento?

**N1.M1.T7 · Iteradores y generadores**
- **Objetivo:** explica el protocolo de iteración, escribe generadores con `yield` y razona sobre evaluación perezosa.
- **Prerrequisitos:** T2, T4.
- **Competencias:** C-N1-01, C-N1-06.
- **Errores habituales:** consumir un generador dos veces; materializar en lista lo que debía fluir; confundir `return` con `yield`.
- **Modelo mental:** el generador como **grifo, no como cubo**: produce bajo demanda y recuerda por dónde iba.
- **Por qué:** existe porque los datos reales no caben siempre en memoria / ahora porque el for ya es natural y puede revelarse su mecanismo interno / habilita procesar flujos grandes (archivos en T8, respuestas de red en M6) con memoria constante.
- **Evidencia de dominio:** dado un procesamiento sobre un archivo enorme hipotético, elige generador y estima el ahorro; predice el comportamiento de un generador agotado.
- **Práctica principal:** experimento de memoria (lista vs. generador, medido) — pensamiento "estimar antes de medir".
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿en qué situaciones aceptarías un código ligeramente más complejo a cambio de reducir drásticamente el consumo de memoria?

**N1.M1.T8 · Ficheros y formatos (txt, CSV, JSON)**
- **Objetivo:** lee y escribe archivos con context managers y procesa CSV y JSON como fronteras de datos reales.
- **Prerrequisitos:** T5 (errores), T7 (iterar líneas).
- **Competencias:** C-N1-01, C-N1-02.
- **Errores habituales:** no cerrar archivos (por qué existe `with`); asumir codificación; confundir el JSON-texto con la estructura Python; rutas absolutas frágiles.
- **Modelo mental:** el archivo como **frontera entre tu programa y el mundo**: todo lo que cruza se valida y se convierte (el patrón de N0.T6 elevado).
- **Por qué:** existe porque los programas útiles persisten y consumen datos / ahora porque excepciones + generadores permiten hacerlo con robustez y eficiencia / habilita el primer programa que sobrevive a su propia ejecución — y alimenta el largo aliento de M1.
- **Evidencia de dominio:** procesa un CSV sucio real (encoding, campos vacíos) sin ayuda y guarda resultados en JSON válido.
- **Práctica principal:** laboratorio con datos reales sucios.
- **Evaluación:** estándar + cierre del largo aliento B-M1.
- **Pregunta ingenieril:** si tu programa se interrumpe a mitad de escribir un archivo, ¿en qué estado quedan los datos — y cómo diseñarías para que la respuesta nunca importe?

**Así se usa esto en el mundo real (cierre de M1).** Este módulo ES el día a día del oficio: todo backend valida datos en sus fronteras (T5+T8 son literalmente lo que Pydantic hará en N2), todo pipeline de datos es leer→transformar→escribir colecciones (T2–T4 son el esqueleto mental de pandas en N4), y todo sistema serio procesa flujos que no caben en memoria (T7 es cómo se leen logs de gigabytes y respuestas en streaming de LLMs en N7). Errores típicos del principiante profesional: megafunciones de 200 líneas, bugs de aliasing que aparecen "aleatoriamente", `except:` que silencia catástrofes, y todo instalado global hasta que dos proyectos chocan. Las empresas pagan por esto porque el código que se lee y no se rompe es el que se puede mantener — y mantener es el 80 % del coste real del software. Reaparece: N2 (validación y decoradores sobre estas funciones), N4 (pandas sobre estas colecciones), N7 (streaming sobre estos generadores). **La idea que este módulo deja para siempre: la abstracción reduce la complejidad — pensar en piezas con contrato es lo que permite construir lo grande.**

### M2 · POO

> **La gran pregunta de este módulo: ¿cómo modelamos el mundo dentro del software?**

**N1.M2.T1 · Clases y objetos**
- **Objetivo:** define clases con `__init__`, crea instancias y explica qué es `self` sin recitarlo.
- **Prerrequisitos:** M1 completo (dicts: "un objeto es un dict con oficio").
- **Competencias:** C-N1-01.
- **Errores habituales:** confundir clase con instancia; atributos de clase vs. de instancia; olvidar `self`; clases como cajones de funciones sin estado.
- **Modelo mental:** la clase como **molde** y el objeto como pieza fundida: mismo plano, estado propio. `self` = "esta pieza en concreto".
- **Por qué:** existe porque los dicts de M1.T3 no imponen contrato ni comportamiento / ahora porque el estudiante ya modeló entidades y sintió el límite / habilita unir datos + comportamiento — el paradigma de casi toda librería que usará (PyTorch incluido).
- **Evidencia de dominio:** convierte un dict-entidad de M1 en clase y explica qué ganó y qué pagó (trade-off explícito).
- **Práctica principal:** refactor guiado dict→clase + ejercicios.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si un dict y una clase pueden representar lo mismo, ¿qué señales del problema te harían pagar el coste extra de la clase — y cuándo sería sobre-ingeniería?

**N1.M2.T2 · Atributos, métodos y estado**
- **Objetivo:** diseña el estado interno de un objeto y los métodos que lo protegen y transforman.
- **Prerrequisitos:** T1.
- **Competencias:** C-N1-01, C-N1-02.
- **Errores habituales:** estado mutado desde fuera sin control; métodos que reciben lo que ya tienen en `self`; getters/setters vacíos por ritual.
- **Modelo mental:** el objeto como **máquina con panel de mandos**: el estado dentro, los botones (métodos) definen qué transformaciones son legales.
- **Por qué:** existe porque el valor de la POO está en la disciplina del estado, no en la sintaxis / ahora porque T1 dio la forma y falta el criterio / habilita invariantes de objeto ("el saldo nunca es negativo") — semilla del razonamiento de corrección A5.
- **Evidencia de dominio:** enuncia el invariante de su clase y muestra qué método podría romperlo y cómo lo impide.
- **Práctica principal:** laboratorio de invariantes (cuenta bancaria / inventario).
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿quién debería poder cambiar el estado de un objeto — y qué se rompe en un sistema grande cuando la respuesta es "cualquiera, desde cualquier parte"?

**N1.M2.T3 · Composición vs. herencia**
- **Objetivo:** reutiliza mediante composición y herencia, y elige entre ambas con el criterio "es-un" vs. "tiene-un".
- **Prerrequisitos:** T2.
- **Competencias:** C-N1-02.
- **Errores habituales:** heredar para reutilizar dos métodos; jerarquías profundas frágiles; ignorar la composición por desconocimiento.
- **Modelo mental:** herencia = **especialización de identidad**; composición = **ensamblaje de capacidades**. La segunda es la herramienta por defecto del profesional.
- **Por qué:** existe porque la reutilización mal hecha es la deuda técnica más cara / ahora porque hay clases reales que relacionar / habilita leer el diseño de librerías reales (M8 de DOC-03: ingeniería inversa) y el diseño del propio capstone.
- **Evidencia de dominio:** ante dos diseños dados del mismo problema (uno heredado, uno compuesto), argumenta cuál escala mejor y por qué — confrontación de soluciones.
- **Práctica principal:** análisis comparativo + rediseño.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si heredar te ahorra veinte líneas hoy, ¿qué puede costarte dentro de seis meses cuando la clase padre cambie sin avisarte?

**N1.M2.T4 · Métodos dunder**
- **Objetivo:** hace objetos "pythónicos" implementando `__str__`, `__eq__`, `__len__`, `__iter__` según el caso.
- **Prerrequisitos:** T2; M1.T7 (protocolo de iteración).
- **Competencias:** C-N1-01, C-N1-06.
- **Errores habituales:** implementar dunder por moda sin necesidad; `__eq__` sin pensar qué significa igualdad para ese dominio.
- **Modelo mental:** los dunder como **enchufes estándar**: tu objeto se conecta a la maquinaria del lenguaje (`print`, `==`, `for`) implementando la interfaz que esa maquinaria espera.
- **Por qué:** existe porque revela cómo funciona Python por dentro (todo son protocolos) / ahora porque el estudiante ya usa esos protocolos sin saberlo / habilita entender por qué `len(lista)` y `len(mi_objeto)` pueden ser lo mismo — abstracción real.
- **Evidencia de dominio:** predice qué dunder invoca una expresión dada y hace iterable una clase propia.
- **Práctica principal:** ejercicios de predicción + implementación.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿cuánta "magia" es demasiada — cuándo un dunder hace tu objeto más claro y cuándo esconde lo que realmente ocurre a quien lee el código?

**N1.M2.T5 · Diseño orientado a objetos: cuándo sí y cuándo no**
- **Objetivo:** decide con criterio cuándo un problema merece clases y cuándo funciones + estructuras bastan.
- **Prerrequisitos:** T1–T4.
- **Competencias:** C-N1-02, C-N1-06.
- **Errores habituales:** clase para todo (sobre-ingeniería); ninguna clase jamás (subutilización); diseñar jerarquías antes de entender el problema.
- **Modelo mental:** la POO como **una herramienta del cinturón, no el cinturón**: se elige por el problema, no por doctrina.
- **Por qué:** existe porque el juicio importa más que la sintaxis / ahora porque cierra el módulo con criterio en vez de con más mecanismo / habilita las decisiones de diseño del largo aliento B-M2 y del capstone.
- **Evidencia de dominio:** ante tres problemas dados, elige paradigma para cada uno con argumento de coste/beneficio — y defiende la elección ante repreguntas.
- **Práctica principal:** defensa de diseño (rol Arquitecto en pequeño) + cierre del largo aliento B-M2.
- **Evaluación:** estándar + revisión B-M2.
- **Pregunta ingenieril:** ¿qué señales de un problema te harían elegir objetos desde el día uno, cuáles te dirían que unas funciones bastan — y qué cuesta equivocarse en cada dirección?

**N1.M2.T6 · Clases abstractas y protocolos**
- **Objetivo:** declara contratos entre clases con `abc.ABC`/`@abstractmethod` (herencia nominal) y `typing.Protocol` (tipado estructural), y distingue cuándo usar cada uno.
- **Prerrequisitos:** T1–T5.
- **Competencias:** C-N1-01, C-N1-02.
- **Errores habituales:** olvidar `@abstractmethod` y descubrir en producción que una subclase cumple el contrato a medias; asumir que `Protocol` con `@runtime_checkable` verifica la firma completa de un método (solo verifica que el nombre del atributo exista).
- **Modelo mental:** ABC como un contrato que Python hace cumplir al instanciar; Protocol como el mismo contrato, verificado por la forma del objeto, sin exigir herencia.
- **Por qué:** existe porque T5 enseñó CUÁNDO una clase merece existir, pero no cómo declarar formalmente qué debe poder hacer / ahora porque el estudiante ya diseña jerarquías propias (T3) y necesita hacerlas verificables / habilita leer el mismo instinto en Pydantic (N2.M1.T3) antes de llegar ahí.
- **Evidencia de dominio:** implementa un contrato con ABC y el mismo contrato con Protocol sobre una clase que no controla, y explica con un ejemplo real por qué `runtime_checkable` no sustituye una prueba real de comportamiento.
- **Práctica principal:** ejercicios progresivos (bloqueo de instanciación → implementación → polimorfismo garantizado → Protocol → combinación de ambos) + laboratorio de notificadores intercambiables.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si `isinstance` contra un Protocol dice que sí, pero el objeto en realidad no se comporta como promete, ¿qué mecanismo (además del tipo) necesitas para confiar en un contrato de verdad?

**N1.M2.T7 · Testing de clases con pytest**
- **Objetivo:** escribe pruebas automáticas (`assert`, patrón Arrange-Act-Assert) sobre el estado e invariantes de sus propias clases, sembrando el hábito que N2.M4 (TDD) formalizará.
- **Prerrequisitos:** T1–T6.
- **Competencias:** C-N1-01, C-N1-02.
- **Errores habituales:** probar solo el camino feliz y nunca el caso que debería fallar; un `assert` sin mensaje que no dice nada útil cuando falla; confiar en que una clase "funciona" porque se probó una vez a mano.
- **Modelo mental:** una prueba como Arrange (preparar el estado) → Act (ejecutar la acción) → Assert (verificar el resultado exacto, con mensaje).
- **Por qué:** existe porque T2/T5 dejaron invariantes de estado sin ningún mecanismo que los verifique automáticamente / ahora porque el estudiante ya tiene clases reales propias (`ValidadorLogin`, `MonitorSensor` de T5) sobre las que probar / habilita la disciplina exacta que N2.M4.T2 (TDD, rojo-verde-refactor) exige desde su primer laboratorio.
- **Evidencia de dominio:** escribe un test que revela un bug real no cubierto por las pruebas "obvias" de una clase dada (el mismo ejercicio del desafío final).
- **Práctica principal:** progresión de pruebas (valor simple → invariante bajo múltiples operaciones → mensaje de fallo útil → mini test-runner) + laboratorio de una clase con múltiples invariantes.
- **Evaluación:** estándar. **Nota de plataforma declarada honestamente:** el motor Pyodide de este Campus no tiene `pytest` instalado (sin mecanismo de instalación de paquetes en el motor) — se simula el patrón central (`test_*` + `assert` con mensaje) con Python nativo; en N2.M4 (terminal real), el mismo patrón se ejecuta con pytest de verdad.
- **Pregunta ingenieril:** si todos tus tests pasan, ¿qué es lo único que eso te garantiza — y qué NO te garantiza sobre los casos que nunca se te ocurrió probar?

**Así se usa esto en el mundo real (cierre de M2).** Prácticamente todo framework profesional te habla en clases: los modelos de Pydantic y los endpoints de FastAPI (N2), los `nn.Module` de PyTorch que heredarás para definir redes (N5), los agentes con estado y herramientas (N8) — saber POO es saber *leer* el ecosistema, no solo escribirlo. Errores típicos del principiante profesional: jerarquías de herencia de cinco pisos que nadie se atreve a tocar, "god objects" que lo saben todo, getters/setters rituales sin invariante que proteger, y clases sin estado que debieron ser funciones. Las empresas valoran este criterio porque el coste real del mal diseño OO no se paga al escribirlo — se paga cada vez que alguien intenta cambiarlo. Reaparece: N2 (modelos y capas del backend), N5 (herencia real en PyTorch), N8 (sistemas agénticos como objetos colaborando), N12 (el vocabulario de componentes del system design). **La idea que este módulo deja para siempre: el diseño consiste en tomar decisiones y pagar sus costes — no en aplicar paradigmas.**

### M3 · Algoritmos y estructuras de datos I

> **La gran pregunta de este módulo: ¿cómo elegimos soluciones que continúan siendo buenas cuando el problema escala?**

**N1.M3.T1 · Complejidad: Big-O intuitivo**
- **Objetivo:** estima cómo crece el coste de un algoritmo con el tamaño de la entrada y compara alternativas con ese lenguaje.
- **Prerrequisitos:** M1 (bucles sobre colecciones).
- **Competencias:** C-N1-06.
- **Errores habituales:** contar segundos en vez de crecimiento; ignorar el caso peor; creer que "el ordenador es rápido" resuelve todo.
- **Modelo mental:** Big-O como **forma de la curva**, no número: ¿qué pasa cuando la entrada crece ×1000?
- **Por qué:** existe porque es el idioma universal para comparar soluciones / ahora porque ya hay dos formas de resolver casi todo (lista vs. dict lo anticipó) / habilita justificar decisiones con argumento técnico — y es la primera pregunta de toda entrevista.
- **Evidencia de dominio:** clasifica código propio y ajeno (O(1)/O(n)/O(n²)/O(log n)) y predice cuál "muere" primero al escalar — luego lo mide (estimar antes de medir).
- **Práctica principal:** experimentos de medición sobre predicción comprometida.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si tu programa tarda un segundo con mil elementos, ¿qué necesitas saber antes de prometer cuánto tardará con un millón — y por qué "probarlo" no siempre es posible?
- **Evolución de la idea:** el análisis asintótico no nació para aprobar entrevistas: nació porque medir segundos dejó de tener sentido cuando cada máquina daba un número distinto — la informática necesitaba una forma **independiente del hardware** de comparar soluciones. Ese salto (del cronómetro a la forma de la curva) es de las ideas más liberadoras de la disciplina.
- **Idea universal:** antes de construir una solución, pregúntate cómo crecerá cuando el problema sea mil veces mayor.

**N1.M3.T2 · Búsqueda**
- **Objetivo:** implementa búsqueda lineal y binaria desde cero y explica por qué la binaria exige orden.
- **Prerrequisitos:** T1.
- **Competencias:** C-N1-02, C-N1-06.
- **Errores habituales:** off-by-one en los límites; aplicar binaria a datos desordenados; no ver que el dict ya era búsqueda O(1).
- **Modelo mental:** la búsqueda binaria como **descartar la mitad del problema en cada pregunta** — el patrón divide-y-vencerás en su forma más pura.
- **Por qué:** existe porque es el algoritmo no trivial más simple con impacto dramático / ahora porque Big-O permite *apreciar* la diferencia log vs. lineal / habilita el primer "¡esto que tardaba minutos tarda milisegundos!" — visceral, no teórico.
- **Evidencia de dominio:** implementa binaria sin plantilla al primer o segundo intento razonado, y enumera sus precondiciones (A5: qué exige).
- **Práctica principal:** implementación desde cero + katas ⚔️.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿qué estarías dispuesto a pagar (mantener orden, más memoria, más complejidad) para que buscar sea casi instantáneo — y en qué casos la búsqueda lineal "lenta" es la decisión correcta?
- **Evolución de la idea:** la binaria no es "un algoritmo": es el nacimiento de una manera de pensar — **aprovechar estructura previa para reducir trabajo** — que el estudiante reencontrará toda su vida profesional: índices de bases de datos, árboles B, búsqueda vectorial, particionamiento, sistemas distribuidos.
- **Idea universal:** la información que ya tienes sobre tus datos es trabajo que no tendrás que repetir.

**N1.M3.T3 · Ordenación**
- **Objetivo:** implementa ordenaciones elementales (burbuja/inserción), entiende conceptualmente las eficientes y usa `sorted` con `key` como herramienta profesional.
- **Prerrequisitos:** T1–T2.
- **Competencias:** C-N1-02, C-N1-06.
- **Errores habituales:** memorizar algoritmos sin el porqué de sus costes; reimplementar en producción lo que la librería hace mejor; `key` mal entendida.
- **Modelo mental:** ordenar como **inversión que compra búsquedas baratas**: pagas O(n log n) una vez para preguntar O(log n) muchas.
- **Por qué:** existe porque ordenación es el laboratorio clásico del análisis de algoritmos / ahora porque búsqueda binaria creó la *necesidad* de datos ordenados / habilita el criterio "implementar para entender, librería para producir".
- **Evidencia de dominio:** explica con las manos por qué inserción es O(n²), y resuelve casos reales con `sorted(key=...)` sin dudar — y nota qué acaba de hacer al pasar `key`: **usar una función como valor** (la semilla, declarada, de los decoradores que N2 abrirá).
- **Práctica principal:** implementar 2 elementales + katas con `sorted`.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿cuándo reimplementarías algo que la librería ya hace mejor — y qué te dice de un ingeniero que responde "nunca" o "siempre"?
- **Evolución de la idea:** lo que debe sobrevivir no es Bubble Sort — es la idea que la ordenación inaugura: **invertir trabajo una vez para ahorrar trabajo muchas veces**. El estudiante la reencontrará en cachés, índices, embeddings, compilación, vistas materializadas, preprocesamiento e inferencia optimizada.
- **Idea universal:** paga una vez lo que vas a aprovechar muchas veces — y sabe calcular cuándo la inversión no compensa.

**N1.M3.T4 · Pilas y colas**
- **Objetivo:** implementa pila y cola sobre estructuras existentes y reconoce problemas con forma LIFO/FIFO.
- **Prerrequisitos:** T1; M2 (implementarlas como clases).
- **Competencias:** C-N1-02.
- **Errores habituales:** usar lista como cola (O(n) por el frente); no *ver* la pila escondida en un problema (deshacer, paréntesis balanceados).
- **Modelo mental:** pila = **montón de platos**; cola = **fila del banco**. La estructura correcta hace trivial el problema; la incorrecta lo hace imposible.
- **Por qué:** existe porque son las disciplinas de acceso más simples y omnipresentes (la pila de llamadas de M1.T1 ¡era esto!) / ahora porque POO permite implementarlas con contrato / habilita reconocer estructura en los enunciados — el corazón de C-N1-02.
- **Evidencia de dominio:** ante un enunciado nuevo, nombra la estructura adecuada antes de codificar y justifica con la disciplina de acceso.
- **Práctica principal:** implementación como clases + katas de reconocimiento.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si eliges la estructura equivocada hoy, ¿el error aparecerá al escribir el código o cuando el sistema crezca — y cuál de los dos descubrimientos sale más caro?
- **Idea universal:** elegir la estructura correcta suele ser más importante que optimizar el algoritmo.

**N1.M3.T5 · Recursión**
- **Objetivo:** resuelve problemas recursivos identificando caso base y paso recursivo, y traza la pila de llamadas.
- **Prerrequisitos:** M1.T1 (pila de llamadas), T4.
- **Competencias:** C-N1-02, C-N1-06.
- **Errores habituales:** olvidar el caso base; no confiar en la hipótesis recursiva ("querer seguir todas las llamadas"); recursión donde un bucle era natural.
- **Modelo mental:** **delegar en un clon más pequeño**: resuelve el caso mínimo y confía en que el clon resuelve el resto — inducción hecha código.
- **Por qué:** existe porque hay problemas naturalmente recursivos (árboles de archivos, JSON anidado — ¡ya los vio en M1.T8!) / ahora porque la pila de T4 hace visible el mecanismo / habilita pensar en autosimilitud, imprescindible para árboles (N2+) y divide-y-vencerás.
- **Evidencia de dominio:** resuelve un recursivo nuevo sin plantilla y dibuja su pila de llamadas para una entrada pequeña.
- **Práctica principal:** escalera recursiva (suma→factorial→recorrer JSON anidado) + traza en depurador.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿qué problemas se vuelven más claros con recursión y cuáles la pagan en pila y legibilidad — y cómo lo decides antes de escribir la primera línea?
- **Evolución de la idea:** la recursión no es "otra forma de hacer bucles" — es **una manera distinta de modelar problemas**: expresarlos en términos de sí mismos. Esa diferencia cambia por completo la comprensión de árboles, grafos, compiladores y todo divide-y-vencerás.
- **Idea universal:** algunos problemas dejan de ser difíciles cuando se expresan de otra manera.

**N1.M3.T6 · Patrones de resolución**
- **Objetivo:** ataca problemas nuevos con un repertorio consciente: fuerza bruta primero, dos punteros, conteo con dict, ventana — y el método "entender→plan→codificar→verificar".
- **Prerrequisitos:** T1–T5.
- **Competencias:** C-N1-02, C-N1-06.
- **Errores habituales:** codificar antes de entender; abandonar la fuerza bruta por vergüenza (es el paso 1 legítimo); no verificar contra casos borde (A5).
- **Modelo mental:** el problema como **cerradura y el repertorio como llavero**: se prueban llaves con método, no al azar.
- **Por qué:** existe porque los algoritmos sueltos no hacen un resolutor / ahora porque cierra el módulo integrando todo bajo presión suave / habilita las katas sostenidas de la pista ⚔️ y el largo aliento B-M3.
- **Evidencia de dominio:** en katas cronometradas suaves, articula el plan en voz alta antes de codificar y enumera los casos de prueba antes de ejecutar.
- **Práctica principal:** sesión tipo entrevista amable (rol Entrevistador, primera aparición) + cierre B-M3.
- **Evaluación:** estándar + revisión B-M3.
- **Pregunta ingenieril:** ante un problema nuevo del que no sabes nada, ¿cuál es tu primer movimiento — y por qué "empezar a escribir código" casi nunca es la respuesta correcta?
- **Idea universal:** el método sobrevive al repertorio — entender antes de resolver, planear antes de escribir, verificar antes de confiar.

**N1.M3.T7 · Árboles y recorridos**
- **Objetivo:** construye e inserta en un Árbol Binario de Búsqueda (BST), y recorre árboles con in-order, pre-order y post-order, reconociendo cada uno como una aplicación directa de la recursión de T5.
- **Prerrequisitos:** T4 (pilas/colas), T5 (recursión).
- **Competencias:** C-N1-02, C-N1-06.
- **Errores habituales:** confundir un árbol binario cualquiera con un BST (la propiedad de orden no es automática); olvidar el caso base (`nodo is None`); no distinguir para qué sirve cada recorrido.
- **Modelo mental:** un árbol como estructura recursiva por naturaleza — cada nodo ES la raíz de su propio subárbol más pequeño.
- **Por qué:** existe porque T4 (lineal) y T5 (recursión sobre secuencias) dejan sin resolver cómo se procesa una estructura que se RAMIFICA / ahora porque el estudiante ya domina recursión y necesita una forma nueva donde aplicarla / habilita entender por qué los índices de SQL (M7, después) son variantes de árboles balanceados.
- **Evidencia de dominio:** implementa `insertar` y los tres recorridos sobre un BST propio, y explica por qué un BST desbalanceado (insertado en orden ya ordenado) degenera a una lista enlazada.
- **Práctica principal:** progresión de recorridos + inserción manteniendo orden + laboratorio de búsqueda dirigida (O(altura), no O(n)).
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si insertas datos ya ordenados en un BST sin balancear, ¿qué le pasa a su ventaja de O(log n) — y qué estructura ya conocida termina pareciéndose?

**N1.M3.T8 · Tablas hash y coste amortizado**
- **Objetivo:** implementa una tabla hash propia (función hash, encadenamiento para colisiones, insertar/buscar/eliminar) y explica por qué su O(1) es un promedio, no una garantía puntual.
- **Prerrequisitos:** T1 (Big-O), T2 (búsqueda), T7.
- **Competencias:** C-N1-02, C-N1-06.
- **Errores habituales:** asumir que una tabla hash nunca tiene colisiones; usar una tabla demasiado pequeña para sus datos (cada bucket se vuelve una lista larga, O(1) deja de cumplirse en la práctica); olvidar que buscar debe comparar la clave exacta dentro del bucket.
- **Modelo mental:** una función hash traduce una clave en un índice; las colisiones se resuelven guardando varias claves en el mismo bucket (encadenamiento); el coste amortizado reparte el gasto ocasional de un redimensionamiento sobre muchas operaciones baratas.
- **Por qué:** existe porque `dict` se usa desde M1 sin preguntar cómo logra O(1) por dentro / ahora porque el estudiante ya entiende Big-O (T1) y búsqueda (T2) lo suficiente para apreciar el mecanismo / habilita entender Redis (N2.M3) como la misma idea a escala de producción — cierra M3.
- **Evidencia de dominio:** mide (contando comparaciones reales, no solo prometiendo) la diferencia entre búsqueda lineal y búsqueda en tabla hash, y entre una tabla demasiado pequeña y una adecuada para sus datos.
- **Práctica principal:** construcción completa (hash → insertar → buscar → eliminar) + laboratorio de colisión real + medición de costo — cierre de B-M3.
- **Evaluación:** estándar + revisión B-M3.
- **Pregunta ingenieril:** si tu tabla hash es O(1) "en promedio", ¿qué tiene que ser verdad sobre el tamaño de la tabla en relación a tus datos para que esa promesa se sostenga en la práctica?

**Así se usa esto en el mundo real (cierre de M3).** Este módulo es el idioma silencioso de todo el oficio: cada índice de base de datos es búsqueda binaria trabajando para ti (N2, N7 con vectores), cada cola de mensajes de una infraestructura real es la FIFO de T4 a escala industrial (N9, Kafka), y cada recorrido de un JSON, un árbol de archivos o una jerarquía de agentes es la recursión de T5. Errores típicos del principiante profesional: el O(n²) escondido en un bucle con `in` sobre lista que "funcionaba en pruebas" y tumbó producción; optimizar prematuramente lo que no era el cuello de botella; no reconocer que su problema *era* una pila. Las empresas evalúan esto en entrevista no por tradición, sino porque es el predictor más barato de si alguien razona sobre costes antes de escribir. Reaparece: N2 (índices y consultas), N3 (crecimiento de funciones, ahora con matemática), N7 (búsqueda vectorial), N9 (colas y escalabilidad), y la pista ⚔️ completa hasta las entrevistas de N12. **La idea que este módulo deja para siempre: la eficiencia es una forma de pensar antes de programar — no una optimización posterior.**

### M4 · Git y GitHub *(en paralelo desde semana 1)*

> **La gran pregunta de este módulo: ¿cómo evoluciona un sistema sin perder su historia?**

**N1.M4.T1 · Fundamentos y primer repositorio**
- **Objetivo:** versiona un proyecto con commits atómicos y mensajes profesionales, y publica su primer repositorio.
- **Prerrequisitos:** M5.T1 (terminal instalada). Ninguno de programación.
- **Competencias:** C-N1-03.
- **Errores habituales:** commits gigantes "cambios"; miedo a romper algo (Git existe para lo contrario); confundir working directory/staging/commit.
- **Modelo mental:** Git como **máquina de fotografías del proyecto**: cada commit una foto etiquetada a la que siempre puedes volver.
- **Por qué:** existe porque trabajar sin versiones es amateurismo — NNR-10 lo exige aquí / ahora porque el capstone y todo lo posterior lo requieren desde el día uno / habilita **el acto inaugural: publicar la calculadora de N0** — el portafolio (OBJ-05) se vuelve público.
- **Evidencia de dominio:** su historia de commits cuenta una historia legible; recupera un estado anterior sin pánico.
- **Práctica principal:** laboratorio real: calculadora de N0 → repo público — **rito de iniciación del nivel**: el momento en que el estudiante deja de programar para sí mismo y empieza a construir su identidad profesional; el tutor lo marca y lo celebra como tal.
- **Evaluación:** estándar (revisión del repo contra criterios TP-01 parciales).
- **Pregunta ingenieril:** ¿qué te atreves a intentar cuando volver atrás no cuesta nada — y qué no intentarías jamás sin esa red de seguridad?
- **Evolución de la idea:** el control de versiones evolucionó con las necesidades del pensamiento colaborativo: de copias de carpetas y parches por correo, a servidores centrales con un único punto de verdad (CVS/SVN), a la idea radical de 2005 — **la historia completa en cada copia, colaboración sin autoridad central** (Git nació en tres semanas para salvar el desarrollo del kernel de Linux). Cada salto resolvió un límite real del anterior.
- **Idea universal:** la reversibilidad transforma el miedo en experimentación — una red de seguridad no cambia solo lo que haces: cambia lo que te atreves a pensar.
- **¿Y si no existiera?:** imagina seis meses de trabajo sin historial — un borrado accidental es definitivo, nadie sabe qué cambió ni por qué, y colaborar es pisarse. El mundo pre-Git existió; sus cicatrices explican cada pieza de la herramienta.

**N1.M4.T2 · Ramas y merge**
- **Objetivo:** desarrolla en ramas, fusiona y resuelve su primer conflicto sin miedo.
- **Prerrequisitos:** T1.
- **Competencias:** C-N1-03.
- **Errores habituales:** trabajar todo en main; pánico ante el conflicto (es texto, no catástrofe); ramas eternas sin fusionar.
- **Modelo mental:** la rama como **universo paralelo barato**: experimentas sin tocar la línea principal, y el merge reconcilia historias.
- **Por qué:** existe porque el desarrollo real es paralelo y experimental / ahora porque ya hay repos propios donde practicarlo sin riesgo / habilita atacar el largo aliento y el capstone con experimentos seguros.
- **Evidencia de dominio:** provoca y resuelve un conflicto deliberado explicando qué decidió conservar y por qué.
- **Práctica principal:** laboratorio de conflicto inducido.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿cuándo merece una idea su propia rama y cuándo la rama es pura burocracia — qué te dice el tamaño y el riesgo del experimento?
- **Idea universal:** aislar los experimentos abarata el riesgo — en el código y en cualquier sistema que no puedas permitirte romper.

**N1.M4.T3 · El flujo Pull Request**
- **Objetivo:** propone cambios vía PR con descripción profesional y revisa un PR ajeno con criterio.
- **Prerrequisitos:** T2.
- **Competencias:** C-N1-03; siembra C-N11-03.
- **Errores habituales:** PRs de 40 archivos; descripciones vacías; tomar la revisión como ataque personal.
- **Modelo mental:** el PR como **propuesta argumentada**: "esto cambio, por esto, así se verifica" — la conversación de ingeniería por escrito.
- **Por qué:** existe porque es el ritual central de la colaboración profesional y de open source / ahora porque hay ramas que proponer / habilita el flujo con el que trabajará hasta N11 (el tutor actúa como revisor del PR — rol Revisor).
- **Evidencia de dominio:** su PR se entiende sin abrir el diff; al revisar uno ajeno (preparado por el tutor), encuentra el defecto plantado.
- **Práctica principal:** PR real revisado por el tutor + revisión inversa.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿de qué tamaño debe ser un cambio para que otro pueda revisarlo *de verdad* — y qué le pasa a la calidad de la revisión cada vez que lo duplicas?
- **Evolución de la idea:** el PR es la industrialización de una práctica de la comunidad open source: los parches argumentados por correo con los que se construyó Linux. La herramienta cambió; la idea — **el cambio se propone, se explica y se defiende antes de integrarse** — es la misma.
- **Idea universal:** un cambio que no puedes explicar no puede ser revisado; comunicar el cambio es parte del cambio.

**N1.M4.T4 · README profesional e historia legible**
- **Objetivo:** escribe READMEs que un tercero sigue sin preguntar, y mantiene la historia del repo como documentación viva.
- **Prerrequisitos:** T1–T3.
- **Competencias:** C-N1-03; ejercita A7 (escritura).
- **Errores habituales:** README para uno mismo ("ya sé cómo se instala"); capturas en vez de instrucciones verificables; historia de commits inservible como narración.
- **Modelo mental:** el repo como **producto con manual**: el código es la mitad; que otro pueda usarlo y entenderlo es la otra mitad.
- **Por qué:** existe porque el test del examinador externo (6.4.3) juzga repos, no archivos / ahora porque cierra el módulo convirtiendo técnica en oficio / habilita el largo aliento B-M4 (refactorizar con historia legible) y el estándar de todos los repos futuros (pista 📦).
- **Evidencia de dominio:** una persona sin contexto (el tutor en rol Cliente) instala y usa su proyecto solo con el README.
- **Práctica principal:** cierre del largo aliento B-M4 + auditoría de README.
- **Evaluación:** estándar + revisión B-M4.
- **Pregunta ingenieril:** si alguien sin contexto abre tu repositorio dentro de un año, ¿qué necesita encontrar para confiar en él — y por qué esa persona, con altísima probabilidad, serás tú?
- **Idea universal:** el trabajo que no está documentado, a efectos del mundo, no existe.

**Así se usa esto en el mundo real (cierre de M4).** No hay software profesional fuera de Git: cada empresa, cada proyecto open source, cada paper con código vive en un repositorio, y **tu perfil de GitHub es el currículum que sí se lee**. Errores típicos del principiante profesional: commits "cambios finales v2 AHORA SÍ", trabajar todo en main hasta el desastre, PRs de cuarenta archivos imposibles de revisar, repos sin README que mueren solos. Las empresas valoran la historia legible porque es auditoría, arqueología y comunicación a la vez: quien escribe buenos commits piensa en quien viene después — y esa es la señal de seniority más barata de detectar. Reaparece: en cada nivel desde aquí (todo proyecto vive en repo, pista 📦), en N2 (el CI/CD se dispara sobre estos commits), y en N11 (contribuir a open source real es exactamente este flujo, con desconocidos exigentes al otro lado).

**Leer la historia de un proyecto — la arqueología del software (apartado de cierre de M4).** Un repositorio no solo guarda cambios: **conserva el razonamiento de quienes trabajaron antes**. El estudiante aprende a usar Git como herramienta de investigación: reconstruir por qué se tomó una decisión, qué problema intentaba resolver un commit, qué hipótesis se descartaron (las ramas muertas también hablan), cuándo apareció un bug (leer la historia hacia atrás) y qué cambió realmente entre dos versiones. Práctica: excavación guiada en un repositorio ajeno pequeño — responder tres preguntas sobre su pasado usando solo la historia. Esta habilidad se vuelve central en N11–N12, donde comprender proyectos complejos empieza siempre por leer su arqueología. *Principio explícito del módulo, presente en cada tema: Git es una herramienta psicológica antes que técnica — reduce el miedo, y un ingeniero sin miedo a experimentar aprende más rápido.*

**La ética del historial (reflexión de cierre de M4).** La historia de un repositorio es un documento técnico: **no se manipula para parecer mejor, no oculta errores relevantes, no se usa para engañar revisiones**. Un historial limpio no significa un historial falso — significa uno que comunica honestamente cómo evolucionó la solución, incluidos los intentos que fallaron. La honestidad intelectual (D5) también se expresa en el código y en su historia: quien maquilla su pasado técnico está entrenándose para engañarse a sí mismo.

**Institución de la ingeniería:** Git es la institución que **garantiza la historia** — la memoria del proyecto se mantiene aunque los humanos se equivoquen.

**La idea que este módulo deja para siempre: la reversibilidad hace posible experimentar — y experimentar es como se aprende y se construye.**

### M5 · Linux, terminal y fundamentos de SO *(en paralelo desde semana 1)*

> **La gran pregunta de este módulo: ¿qué ocurre realmente cuando un programa se ejecuta?**

**N1.M5.T1 · El entorno real**
- **Objetivo:** instala y configura Python, editor y terminal, y ejecuta su primer programa fuera del campus.
- **Prerrequisitos:** N0 Superado. Ninguno técnico.
- **Competencias:** C-N1-04.
- **Errores habituales:** PATH roto; múltiples Pythons en conflicto; miedo a la pantalla negra. *(Principio del entorno en máxima vigencia: aquí las pistas son directas — configurar no es la competencia evaluada.)*
- **Modelo mental:** el campus era **el simulador**; esto es **el avión**: mismos mandos, consecuencias reales.
- **Por qué:** existe porque el oficio ocurre en máquinas reales (AC-06 fija el techo del navegador en N0) / ahora porque retrasarlo acumularía dependencia del simulador / habilita todo lo demás: módulos reales (M1.T6), Git (M4), proyectos.
- **Evidencia de dominio:** ejecuta desde terminal un programa propio escrito en su editor, y explica qué hizo cada paso.
- **Práctica principal:** laboratorio de instalación guiada con verificación.
- **Evaluación:** verificación funcional (no rúbrica de código).
- **Pregunta ingenieril:** ¿qué diferencia hay entre un entorno que "te funciona" y un entorno que entiendes — y cuál de los dos te dejará tirado en el peor momento posible?
- **Idea universal:** un entorno que no comprendes es una deuda que cobra intereses justo cuando menos puedes pagarlos.

**N1.M5.T2 · La terminal: hablar con el sistema sin intermediarios**
- **Objetivo:** explica por qué existe la terminal y opera el sistema de archivos desde ella (rutas, navegación, manipulación) sabiendo qué le pide realmente cada orden al sistema operativo.
- **Prerrequisitos:** T1.
- **Competencias:** C-N1-04.
- **Errores habituales:** creer que la terminal es "lo antiguo"; ruta relativa vs. absoluta; espacios en nombres; borrar sin red de seguridad.
- **Modelo mental:** la interfaz gráfica como **fachada** y la terminal como **puerta de servicio**: el mismo edificio, pero hablando directamente con quien lo administra.
- **Por qué:** existe porque los servidores, contenedores y GPUs del futuro del estudiante no tienen escritorio / ahora porque el entorno real ya está vivo / habilita operar cualquier máquina — incluida la que no es suya.
- **Evidencia de dominio:** navega y manipula archivos con soltura y explica, para cada comando, qué le pidió al SO por debajo.
- **Práctica principal:** ejercicios + uso diario obligado desde hoy.
- **Evaluación:** estándar (práctico en terminal).
- **Pregunta ingenieril:** si la interfaz gráfica desapareciera mañana, ¿qué parte de tu trabajo seguirías pudiendo hacer — y qué te dice eso de dónde vive realmente tu competencia?
- **Evolución de la idea:** la terminal no es un vestigio: es la interfaz que lleva cincuenta años sobreviviendo a todas las ventanas, porque la idea Unix de los 70 — **programas pequeños que hacen una cosa bien y se componen** — resultó más poderosa que cualquier GUI.
- **Idea universal:** las interfaces cambian; el acceso directo al sistema permanece.

**N1.M5.T3 · Procesos: los programas están vivos**
- **Objetivo:** explica qué es un proceso — un programa en ejecución con recursos propios —, los observa (ps, htop), los gestiona (señales, planos) y distingue con precisión programa de proceso.
- **Prerrequisitos:** T2; M1.T1 (una llamada de función y un proceso son "vida" a escalas distintas).
- **Competencias:** C-N1-04, C-N1-06.
- **Errores habituales:** confundir programa (archivo inerte) con proceso (ejecución viva); creer que las aplicaciones corren "a la vez" sin coste; matar procesos al azar.
- **Modelo mental:** el proceso como **organismo vivo**: nace, consume CPU y memoria, duerme, muere o lo matan — y el SO como el ecosistema que los alberga y les raciona recursos.
- **Por qué:** existe porque el estudiante lleva semanas *creando procesos sin saberlo* (cada `python programa.py`) / ahora porque la terminal permite por fin observarlos / habilita comprender qué significa EJECUTAR — la base de servidores (N2), contenedores (procesos aislados, N2/N9) y todo el paralelismo futuro.
- **Evidencia de dominio:** narra la cadena completa al ejecutar su script (shell → proceso nuevo → intérprete → su código); diagnostica un proceso colgado real sin recetas.
- **Práctica principal:** laboratorio de observación (htop sobre sus propios programas) + averías preparadas.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si dos procesos tuyos escriben el mismo archivo a la vez, ¿quién decide qué ocurre — y qué diseñarías tú para que no termine mal?
- **Gran abstracción:** el proceso — no estamos enseñando "programas ejecutándose": estamos enseñando **aislamiento de responsabilidades**, la idea que reaparecerá en contenedores, servicios y agentes.
- **¿Qué rompe esta abstracción?:** ¿qué ocurre cuando cientos de procesos compiten por la CPU — quién espera, quién decide, y a qué coste? *(N2 lo tocará con async; N9 lo responderá a escala.)*
- **Idea universal:** todo lo que corre consume; saber qué vive en una máquina es la mitad de saber diagnosticarla.

**N1.M5.T4 · Memoria, archivos y permisos: el contrato de la máquina**
- **Objetivo:** explica cómo organiza el SO la memoria de un proceso (pila, montón, memoria virtual — conceptual) y el disco (sistema de archivos), y gestiona permisos como contratos de acceso.
- **Prerrequisitos:** T3; M1.T1 (la pila de llamadas VIVE en esta memoria — el círculo se cierra).
- **Competencias:** C-N1-04, C-N1-06.
- **Errores habituales:** "la RAM es donde se guardan mis archivos"; chmod 777 como solución universal; no distinguir memoria de proceso (volátil, privada) de disco (persistente, compartido).
- **Modelo mental:** el SO como **gerente de un hotel lleno**: habitaciones privadas (la memoria virtual de cada proceso), consigna común con llaves (archivos y permisos), y la ilusión — sostenida por el gerente — de que cada huésped tiene el hotel entero.
- **Por qué:** existe porque sin este modelo, contenedores (N2), serving (N9) y optimización (N10) son magia negra / ahora porque los procesos de T3 dan dónde colgar el modelo sobre experiencia vivida / habilita la línea directa a N10: la jerarquía de memoria decidirá la velocidad de su inferencia.
- **Evidencia de dominio:** explica dónde viven las variables de su programa y dónde sus archivos; diagnostica un "Permission denied" real; estima si un dataset hipotético cabe en RAM (conexión con M1.T7).
- **Práctica principal:** experimentos de observación (tamaño de procesos, permisos) + explicación Feynman escrita (A7) — este tema ES la explicación semanal.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿por qué el SO le miente a cada proceso haciéndole creer que la máquina entera es suya — y qué costaría decirle la verdad?
- **Evolución de la idea:** la memoria virtual es una de las grandes mentiras piadosas de la informática: en vez de que cada programa gestione la máquina real (el caos de los años 50–60), el SO regala a cada proceso una ilusión privada y simple. Esa jugada — **abstracción que compra seguridad y simplicidad a cambio de indirección** — la reencontrará en contenedores, máquinas virtuales y GPUs compartidas.
- **Gran abstracción:** dos a la vez — la memoria virtual (**la informática resuelve complejidad creando ilusiones útiles**) y el sistema de archivos (**organización persistente de la información**, no "carpetas").
- **¿Qué rompe esta abstracción?:** ¿qué pasa cuando la RAM deja de bastar — qué es el swapping y por qué la máquina "se arrastra" cuando la ilusión se paga en disco? ¿Y qué ocurre cuando dos personas modifican el mismo archivo a la vez? *(N10 y N2/N9 responderán.)*
- **¿Y si no existiera?:** imagina todos los programas compartiendo una sola memoria sin aislamiento — un bug de cualquiera corrompe a todos, un proceso hostil lee lo que quiera. Así era; por eso existe el gerente.
- **Idea universal:** las buenas abstracciones mienten con cuidado: simplifican el mundo a cambio de un coste que debes conocer.

**N1.M5.T5 · Automatización: componer el sistema**
- **Objetivo:** compone comandos con pipes y redirección, y escribe scripts bash que automatizan tareas reales — eligiendo entre bash y Python con criterio.
- **Prerrequisitos:** T2–T4.
- **Competencias:** C-N1-04.
- **Errores habituales:** scripts sin manejo de error; variables sin citar; escribir en bash lo que merecía Python (y viceversa).
- **Modelo mental:** la filosofía Unix como **tubería**: programas pequeños que hacen una cosa bien, conectados — la salida de uno es la entrada del siguiente.
- **Por qué:** existe porque la automatización pequeña es el superpoder diario del ingeniero / ahora porque entender procesos y archivos convierte los pipes de truco en lógica transparente / habilita el largo aliento B-M5 y el hábito permanente: lo que haces dos veces, se automatiza.
- **Evidencia de dominio:** resuelve una tarea real componiendo ≥3 comandos y narra el flujo de datos por la tubería; entrega el script del largo aliento con su batería de pruebas escrita antes.
- **Práctica principal:** cierre del largo aliento B-M5 (las pruebas antes que el script — A5 encarnado).
- **Evaluación:** estándar + revisión B-M5.
- **Pregunta ingenieril:** ¿cuánto tiempo debe robarte una tarea repetida antes de merecer automatización — y qué coste oculto tiene el script del que todos se olvidan hasta que falla?
- **Gran abstracción:** el pipe — no estamos enseñando comandos: estamos enseñando **composición de sistemas**, la idea con la que se arma todo lo grande.
- **¿Qué rompe esta abstracción?:** ¿qué pasa cuando las piezas que compones necesitan compartir estado o coordinarse en el tiempo — cuando la tubería ya no basta? *(La concurrencia de N2 y la orquestación de N8/N9 empiezan exactamente ahí.)*
- **Idea universal:** los sistemas grandes se construyen componiendo piezas pequeñas que hacen una cosa bien — en la shell, en el código y en la arquitectura.

**Así se usa esto en el mundo real (cierre de M5).** Todo lo que el estudiante desplegará en su carrera vivirá en un Linux sin pantalla: los contenedores de N2 *son* procesos con un sistema de archivos aislado (T3+T4 literalmente), los clústeres de N9 se operan enteros por terminal, y la optimización de inferencia de N10 es gestión de la jerarquía de memoria de T4. Errores típicos del principiante profesional: chmod 777 "para que funcione", kill -9 sin diagnóstico, el entorno que funciona por milagro y nadie se atreve a tocar, y el pánico ante una máquina remota sin GUI. Las empresas valoran esto porque producción, a las 3 a.m., es una terminal remota — y ahí se distingue quién entiende la máquina de quién solo memorizó comandos. Reaparece: N2 (Docker), N9 (todo el nivel), N10 (memoria y GPU), y cada día de trabajo real. **Institución de la ingeniería:** el sistema operativo es la institución que **garantiza aislamiento y reparto justo de recursos** — cada programa vive seguro aunque los demás fallen.

**La idea que este módulo deja para siempre: las grandes abstracciones simplifican el mundo ocultando cuidadosamente su complejidad.**

### M6 · Redes y APIs *(tras M2)*

> **La gran pregunta de este módulo: ¿cómo consiguen entenderse dos computadores separados por miles de kilómetros?**

**N1.M6.T1 · El acuerdo imposible: cómo se entienden dos máquinas distantes**
- **Objetivo:** traza el viaje completo de una petición (URL → DNS → TCP/IP → HTTP → respuesta) explicando qué problema resuelve cada capa y qué le promete a la siguiente.
- **Prerrequisitos:** M5.T3–T4 (procesos que escuchan; el SO como gestor de recursos).
- **Competencias:** C-N1-05, C-N1-06.
- **Errores habituales:** "Internet es el navegador"; confundir URL con servidor; ignorar que HTTP es texto legible; creer que la "conexión" existe como un cable.
- **Modelo mental:** la comunicación como **pila de acuerdos**: cada capa resuelve un problema imposible y le ofrece a la de arriba un mundo más simple — nombres que se vuelven direcciones (DNS), entrega fiable sobre un medio que pierde paquetes (TCP), significado sobre bytes (HTTP). La mentira piadosa de M5.T4, ahora estirada entre continentes.
- **Por qué:** existe porque todo lo que construirá vive en red / ahora porque el SO dio la mitad del modelo (procesos que escuchan puertos) / habilita entender qué falló cuando algo falla — sin este mapa, todo error de red es niebla.
- **Evidencia de dominio:** narra el viaje completo de una URL real y diagnostica en qué eslabón murió una petición rota (DNS vs. servidor caído vs. 404).
- **Práctica principal:** exploración guiada (curl, herramientas de red) + predicciones comprometidas.
- **Evaluación:** estándar (oral).
- **Pregunta ingenieril:** TCP promete entrega fiable sobre un medio que pierde paquetes constantemente — ¿qué está pagando para sostener esa promesa, y cuándo preferirías no pagarlo?
- **Evolución de la idea:** Internet nació de una pregunta de los años 60: ¿cómo construir una red que sobreviva a la pérdida de cualquiera de sus partes? La respuesta — **sin centro, con paquetes que encuentran su propio camino** — es la razón de que la red global funcione y de que su diseño parezca extraño hasta que conoces el problema que resolvía.
- **Gran abstracción:** **las capas** — la informática escala apilando acuerdos: cada nivel resuelve su problema y esconde su complejidad al siguiente.
- **¿Qué rompe esta abstracción?:** ¿por qué "la red va lenta" si TCP garantiza la entrega? ¿Qué pasa cuando la latencia importa más que la fiabilidad (juegos, streaming, trading)? *(N9 responderá.)*
- **Idea universal:** los sistemas complejos se entienden por capas: cada una resuelve un problema y esconde su complejidad a la siguiente.

**N1.M6.T2 · La conversación: APIs, contratos y confianza**
- **Objetivo:** consume APIs HTTP reales desde Python (peticiones con sus métodos — GET para leer, POST para crear —, parámetros, cabeceras, códigos de estado) leyendo la documentación como contrato, y gestiona identidad y confianza: HTTPS conceptual y claves de API fuera del código.
- **Prerrequisitos:** T1; M1.T8 (JSON).
- **Competencias:** C-N1-05; **C-N1-07** *(corrección de auditoría integral, 2026-07-20: esta ficha ya exigía "leer la documentación en inglés sin tutorial mascado" desde su versión original — la competencia se practicaba de hecho sin declararse; C-N1-07 no tenía cobertura en ninguna ficha de N1 hasta esta corrección)*.
- **Errores habituales:** ignorar el código de estado; **claves de API dentro del código** (el pecado que N2 formalizará); asumir que la documentación y la realidad coinciden siempre.
- **Modelo mental:** la API como **ventanilla con formulario y credencial**: pides con el formato exacto que el contrato define, te identificas, y la conversación viaja en **sobre lacrado** (HTTPS) — nadie la lee ni la altera por el camino.
- **Por qué:** existe porque consumir servicios es el gesto profesional más común / ahora porque T1 dio el mapa del viaje / habilita programas conectados al mundo — y siembra la pregunta de la confianza, que N2 responderá desde el otro lado de la ventanilla (auth).
- **Evidencia de dominio:** integra una API pública real leyendo su documentación en inglés (🇬🇧) sin tutorial mascado; guarda la credencial fuera del código y explica por qué.
- **Práctica principal:** laboratorio con API pública real elegida entre 2–3 (decisión propia documentada).
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿por qué confías en que la respuesta que recibes viene de quien dice venir — y qué harías distinto si no pudieras confiar?
- **La estructura de la confianza** *(reflexión permanente, mejora 11)*: no estamos enseñando seguridad — estamos enseñando **confianza**, y toda confianza en ingeniería responde tres preguntas: **¿quién eres? · ¿cómo sé que realmente eres tú? · ¿qué puedes hacer?** Esa estructura mental reaparecerá en autenticación, autorización, certificados, firmas, OAuth, JWT e identidades de agentes de IA. Aquí solo se siembra.
- **Gran abstracción:** **el contrato** — dos sistemas que no se conocen cooperan porque ambos obedecen un acuerdo publicado.
- **¿Qué rompe esta abstracción?:** ¿qué pasa cuando el proveedor cambia el contrato sin avisar? ¿Y cuando la credencial se filtra? *(Versionado y seguridad: N2.)*
- **¿Y si no existiera?:** imagina una red donde cualquiera puede hacerse pasar por tu banco y leer todo lo que envías. Esa red existió — se llamaba HTTP a secas — y el candado del navegador es la respuesta de la ingeniería a ese mundo.
- **Idea universal:** la cooperación entre desconocidos exige contratos explícitos — en las APIs y en la ingeniería entera.

**N1.M6.T3 · La frontera de datos**
- **Objetivo:** valida y transforma datos de APIs reales: estructuras anidadas, campos ausentes, tipos inesperados.
- **Prerrequisitos:** T2.
- **Competencias:** C-N1-05, C-N1-02.
- **Errores habituales:** encadenar accesos sin comprobar (`d["a"]["b"]["c"]`); confiar en que el ejemplo de la doc es la realidad; validar tarde.
- **Modelo mental:** el JSON ajeno como **paquete de aduana**: se inspecciona TODO en la frontera antes de dejarlo entrar al programa (el patrón de N0.T6 y M1.T8, elevado a datos ajenos).
- **Por qué:** existe porque los datos ajenos son hostiles por defecto / ahora porque ya consume APIs de verdad y el problema es real / habilita robustez profesional — y es el precedente directo de la validación de N2 (Pydantic).
- **Evidencia de dominio:** su cliente sobrevive a las 5 respuestas malformadas de la batería de pruebas sin crashear.
- **Práctica principal:** laboratorio contra batería hostil (A5: el caso hostil como rutina).
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿cuánta validación es suficiente — y en qué punto validar todo se convierte en desconfiar de todo y no entregar nunca?
- **Idea universal:** todo dato que cruza una frontera es hostil hasta que se demuestre lo contrario.

**N1.M6.T4 · Cuando la comunicación falla**
- **Objetivo:** maneja timeouts, reintentos con espera y errores de red con criterio, y decide qué hace su programa cuando el mundo falla.
- **Prerrequisitos:** T2–T3; M1.T5.
- **Competencias:** C-N1-05.
- **Errores habituales:** reintentar infinito sin espera; capturar y silenciar; no distinguir error propio (4xx) de ajeno (5xx).
- **Modelo mental:** la red como **servicio que fallará seguro**: la pregunta no es si fallará, sino qué harás tú cuando pase.
- **Por qué:** existe porque la diferencia entre script y herramienta es cómo muere / ahora porque cierra el módulo integrando excepciones + APIs bajo la pregunta "¿qué es fallar bien aquí?" / habilita el largo aliento B-M6 y el estándar de robustez del capstone.
- **Evidencia de dominio:** justifica su política de reintentos (cuántos, con qué espera, ante qué códigos) — trade-off documentado con el formato opciones→criterio→decisión→costo.
- **Práctica principal:** cierre del largo aliento B-M6 (decisiones de ingeniería).
- **Evaluación:** estándar + revisión B-M6.
- **El fallo es información** *(reflexión permanente, mejora 12)*: cuando un sistema falla, no solo deja de funcionar — **está diciendo algo**. Un timeout, un 404 y un 503 son pistas distintas: ¿qué parte respondió? ¿qué sí funcionó? ¿qué dejó de responder? ¿qué hipótesis puedo descartar? El tutor exige *leer* el fallo antes de reaccionar a él — así se forman ingenieros que diagnostican, no programadores que reaccionan.
- **Pregunta ingenieril:** si un servicio del que dependes falla una vez de cada cien, ¿tu programa debe ocultarlo, compensarlo o rendirse — y quién debería tomar esa decisión?
- **¿Qué rompe esta abstracción?:** ¿y si el fallo no es del otro sino tuyo — cómo lo distinguirías? ¿Y si tus reintentos empeoran la avería del servicio caído? *(Las tormentas de reintentos y los circuit breakers esperan en N9.)*
- **Idea universal:** los sistemas fiables no son los que nunca fallan — son los que fallan bien.

**Así se usa esto en el mundo real (cierre de M6).** Todo el software que el estudiante construirá desde N2 es esta conversación en ambas direcciones: en N2 pasa al otro lado de la ventanilla (construir la API en vez de consumirla), en N7 los LLMs se consumen exactamente así (contratos, streaming, claves, reintentos), y en N9 la pregunta "¿qué hago cuando el otro falla?" se convierte en disciplina de arquitectura. Errores típicos del principiante profesional: la clave de API subida a GitHub (clásico que cuesta dinero real), el cliente que asume respuesta feliz y muere en producción con el primer 503, el reintento infinito que tumba al servicio que intentaba usar. Las empresas valoran esto porque casi ningún sistema moderno está solo: integrar servicios ajenos con robustez ES el trabajo. Reaparece: N2 (el otro lado del contrato), N7 (APIs de modelos), N8 (agentes que llaman herramientas remotas), N9 (resiliencia a escala).

**Institución de la ingeniería:** HTTP/TLS es la institución que **garantiza acuerdos de comunicación** — desconocidos cooperan con reglas que ninguno puede romper unilateralmente.

**Toda comunicación tiene un coste** *(reflexión permanente de redes y sistemas, mejora 10 — reaparece en N7, N8, N9, N10 y N12)*: cada vez que dos sistemas hablan, la conversación debe justificarse — ¿qué gana el sistema comunicándose? ¿qué pierde? ¿qué coste introduce? ¿qué latencia añade? ¿qué dependencia crea? El estudiante aprende a **sospechar de toda comunicación innecesaria**, porque la gran diferencia entre el software pequeño y el sistema distribuido es que hablar deja de ser gratis.

**La idea que este módulo deja para siempre: dos sistemas que no comparten nada pueden cooperar — apilando acuerdos y diseñando para el fallo.**

### M7 · SQL *(tras M2)*

> **La gran pregunta de este módulo: ¿cómo conservamos conocimiento de forma que siga siendo correcto, consistente y útil cuando millones de datos cambian continuamente?**

**N1.M7.T1 · La memoria que garantiza: el modelo relacional**
- **Objetivo:** modela un dominio en tablas — entidades, claves primarias/foráneas, relaciones 1-N y N-M — entendiendo el esquema como contrato sobre los datos.
- **Prerrequisitos:** M2 (entidades como clases); M1.T8 (los límites de los archivos, ya sentidos).
- **Competencias:** C-N1-05, C-N1-02.
- **Errores habituales:** una tabla gigante para todo; listas dentro de celdas; claves ausentes; "lo guardo en un JSON y ya".
- **Modelo mental:** la base de datos como **notaría de los datos**: no un almacén, sino una institución que garantiza — cada dato con identidad (clave), cada relación declarada, cada regla imposible de violar. La tabla es la clase persistente; la foránea, la referencia entre objetos (puente directo desde M2).
- **Por qué:** existe porque los archivos de M1.T8 no garantizan nada — la pregunta sembrada en M5.T3 (¿dos procesos y un mismo archivo?) llevaba semanas sin buena respuesta / ahora porque POO dio el vocabulario de entidades / habilita datos que permanecen correctos aunque los programas que los usan cambien, fallen o mueran.
- **Evidencia de dominio:** convierte un dominio en esquema con relaciones correctas y explica qué se vuelve fácil, difícil o imposible con su diseño.
- **Práctica principal:** modelado sobre dominios reales.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿qué reglas de tu dominio deberían ser IMPOSIBLES de violar aunque el programa tenga bugs — y dónde deben vivir: en el código o en los datos?
- **Evolución de la idea:** en 1970, Codd propuso algo entonces herético: separar QUÉ son los datos de CÓMO se almacenan, con fundamento matemático. Medio siglo y mil "asesinos de SQL" después, el modelo relacional sigue custodiando los datos del mundo — cuando la abstracción es correcta, sobrevive a todas las modas.
- **Gran abstracción:** **el esquema** — el contrato sobre los datos: la verdad se declara una vez y se garantiza siempre.
- **Idea universal:** las reglas que no pueden violarse valen más que las reglas que se prometen cumplir.

**N1.M7.T2 · Preguntar sin recorrer: consultas declarativas**
- **Objetivo:** consulta con SELECT/WHERE/ORDER BY/agregaciones y une tablas con JOIN entendiendo qué produce cada unión.
- **Prerrequisitos:** T1.
- **Competencias:** C-N1-05.
- **Errores habituales:** JOIN como magia (no visualizar el producto de filas); filtrar en Python lo que la BD filtra mejor; GROUP BY a ciegas.
- **Modelo mental:** SQL como **lenguaje de deseos**: describes el resultado; el motor — que conoce sus índices y sus costes mejor que tú — decide el cómo. El contraste absoluto con todo lo imperativo aprendido (y el pariente serio de M1.T4).
- **Por qué:** existe porque preguntar a los datos es la operación más común del oficio / ahora porque hay esquemas propios que consultar / habilita responder en una línea preguntas que en Python serían páginas — y siembra el respeto por el optimizador: alguien calcula el Big-O de M3 por ti.
- **Evidencia de dominio:** traduce una pregunta de negocio en lenguaje natural a consulta con JOIN correcto al primer intento razonado.
- **Práctica principal:** ejercicios sobre dataset real precargado.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿cuándo filtrar en la base de datos y cuándo en Python — y qué le pasa a tu respuesta cuando los datos crecen ×1000?
- **Evolución de la idea:** la declaratividad — *di qué quieres, no cómo obtenerlo* — es una de las ideas más liberadoras de la informática. El estudiante la reencontrará en pandas (N4), en Kubernetes ("estado deseado", N9) y hasta en los prompts a un LLM (N7): delegar el cómo en quien tiene mejor información.
- **Gran abstracción:** **la declaratividad** — describir el resultado y dejar el cómo a quien sabe más que tú.
- **¿Qué rompe esta abstracción?:** ¿sigue siendo "gratis" el JOIN cuando los datos no caben en una sola máquina? *(N9 lo responderá — y la respuesta duele.)*
- **Idea universal:** a veces la mejor forma de resolver es describir el resultado — y dejar el cómo a quien sabe más.

**N1.M7.T3 · El programa conversa con la memoria: CRUD y transacciones**
- **Objetivo:** conecta Python con SQLite — insertar, consultar, actualizar, borrar — con parámetros seguros, y usa transacciones entendiendo el todo-o-nada.
- **Prerrequisitos:** T2; M1.T6.
- **Competencias:** C-N1-05.
- **Errores habituales:** concatenar SQL con f-strings (inyección); confirmar a ciegas; conexiones sin cerrar.
- **Modelo mental:** la transacción como **sobre cerrado**: o llega todo, o no llega nada — el mundo jamás ve medio contenido. Y la conversación con la BD, siempre con frases parametrizadas — nunca con tijera y pegamento.
- **Por qué:** existe porque el programa completo une lógica + memoria garantizada / ahora porque SQL ya se domina por separado / habilita el patrón programa↔BD de todo backend — y responde por fin la pregunta de M5.T3: ¿dos escritores a la vez? La transacción decide.
- **Evidencia de dominio:** ejecuta él mismo la inyección contra su versión insegura y explica por qué la parametrizada es inmune (experimento A6); muestra una transferencia interrumpida a la mitad… que no deja rastro.
- **Práctica principal:** laboratorio CRUD + experimento de inyección + experimento de transacción interrumpida.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si tu programa muere a mitad de una operación de tres pasos, ¿qué estado es aceptable dejar atrás — y quién debe garantizarlo: tu código o la base de datos?
- **Gran abstracción:** **la transacción** — la atomicidad como promesa: el mundo solo ve "antes" o "después", nunca "durante".
- **¿Qué rompe esta abstracción?:** ¿y cuando dos transacciones tocan lo mismo a la vez — quién espera, quién gana, quién se entera? ¿Y cuando la notaría debe atender a muchos programas a la vez, desde otras máquinas — qué pasa cuando deja de vivir en tu archivo y se convierte en un *servidor*? *(Aislamiento, concurrencia y la BD cliente-servidor: N2 y N9.)*
- **¿Y si no existiera?:** imagina un banco donde un corte de luz a mitad de transferencia deja el dinero salido de una cuenta y jamás llegado a la otra — y nadie puede saber cuánto se perdió. Sin transacciones, cada fallo del mundo es un dato corrupto para siempre.
- **Idea universal:** en los sistemas serios, "casi terminado" es peor que "no empezado" — diseña operaciones que sean todo o nada.

**N1.M7.T4 · Diseñar memoria que perdure**
- **Objetivo:** diseña e implementa el esquema completo de un dominio elegido, con decisiones documentadas.
- **Prerrequisitos:** T1–T3.
- **Competencias:** C-N1-05, C-N1-02; ejercita A7.
- **Errores habituales:** diseñar para el ejemplo y no para las consultas; documentar el qué sin el porqué.
- **Modelo mental:** el esquema como **contrato de largo plazo**: los programas pasan; el modelo de datos, si es bueno, queda — hoy diseñas lo que otros (y tu yo futuro) heredarán.
- **Por qué:** existe porque diseñar — no solo usar — es el salto de nivel / ahora porque cierra el módulo con síntesis y escritura / habilita el largo aliento B-M7: el documento de diseño que otro podría implementar sin hablar contigo.
- **Evidencia de dominio:** su documento de esquema permite al tutor (rol Cliente) verificar que soporta las consultas del negocio — sin ver una línea de código.
- **Práctica principal:** cierre del largo aliento B-M7 (documentación técnica).
- **Evaluación:** estándar + revisión B-M7.
- **Pregunta ingenieril:** si dentro de un año este dominio necesita un dato que hoy no existe, ¿qué diseño de hoy hace ese cambio trivial — y cuál lo convierte en pesadilla?
- **¿Qué rompe esta abstracción?:** ¿cómo se cambia un esquema que ya tiene millones de datos vivos dentro? *(Las migraciones esperan en N2.)*
- **Persistencia como responsabilidad** *(reflexión permanente, mejora 15)*: guardar no es escribir en disco — **persistir es asumir responsabilidad sobre el futuro**. Cada dato que decides almacenar responde: ¿cuánto tiempo vivirá? ¿quién podrá modificarlo? ¿quién podrá confiar en él? ¿cuándo dejará de ser válido? ¿cómo se recupera si algo falla? La persistencia es una decisión de ingeniería, no una operación técnica.
- **Idea universal:** diseña sabiendo que el modelo de datos sobrevivirá al código que lo rodea.

**Así se usa esto en el mundo real (cierre de M7).** La notaría de datos está debajo de todo lo que el estudiante construirá: el backend de N2 es exactamente este patrón con PostgreSQL en serio (más migraciones, índices y concurrencia), las consultas declarativas reaparecen como pandas en N4, las bases vectoriales de N7 son este mismo problema con embeddings en vez de filas, y N9 pregunta qué pasa cuando la notaría debe repartirse entre máquinas. Errores típicos del principiante profesional: la inyección SQL (décadas en el top de vulnerabilidades del mundo — y se previene con lo aprendido en T3), el problema N+1 (mil consultas donde bastaba un JOIN), usar JSON como base de datos "porque era más fácil", y el esquema diseñado para el ejemplo que muere con el primer requisito nuevo. Las empresas valoran esto porque los datos son el único componente del sistema que no se puede reescribir: el código malo se tira; los datos corruptos se lloran. Reaparece: N2 (persistencia de producción), N4 (datos para ML), N7 (vector DBs), N9 (datos distribuidos). **Institución de la ingeniería:** la base de datos es la institución que **garantiza consistencia** — la verdad de los datos se mantiene aunque los programas fallen y los humanos se equivoquen. *(El eje filosófico queda completo en N1: toda la ingeniería consiste en construir instituciones que mantienen propiedades importantes incluso cuando los humanos se equivocan — Git/historia, SO/aislamiento, HTTP/acuerdos, BD/consistencia.)*

**La idea que este módulo deja para siempre: los datos valen lo que valen sus garantías — el código se reescribe; la verdad corrompida no se recupera.**

## 6. Problemas de largo aliento y capstone

*Siete experiencias cognitivas distintas (condición del Director) — cada una entrena una habilidad diferente; todas cumplen B6 de DOC-03 (abiertas temprano, registro de intentos, cierre con triple vara + argumento de corrección):*

| # | Problema | Habilidad que entrena | Se abre / cierra |
|---|---|---|---|
| B-M1 | **El procesador de datos**: de un archivo de texto real y sucio (logs o export) a un informe con estadísticas | **Descomposición de problemas** — no cabe en la cabeza entero; obliga a partirlo | M1.T2 / M1.T8 |
| B-M2 | **El inventario que crece**: sistema pequeño cuyos requisitos cambian 3 veces (el tutor-Cliente los cambia de verdad) | **Diseño incremental** — diseñar para el cambio, no para el enunciado | M2.T1 / M2.T5 |
| B-M3 | **La librería averiada**: módulo ajeno con 8–10 bugs enterrados (sintaxis→lógica→diseño) que debe quedar operativo | **Depuración sistemática** — hipótesis→prueba mínima→causa raíz, en código que no escribiste | M3.T1 / M3.T6 |
| B-M4 | **La calculadora renace**: refactorizar la calculadora de N0 (funciones→módulos→quizá clases) con historia Git legible que narre cada paso | **Refactorización** — mejorar sin romper, commit a commit | M4.T1 / M4.T4 |
| B-M5 | **El organizador**: script que ordena/renombra/respalda archivos reales — con su batería de pruebas escrita ANTES | **Pruebas** — definir "correcto" antes de construir (A5 encarnado) | M5.T2 / M5.T5 |
| B-M6 | **El cliente del mundo real**: herramienta sobre una API pública elegida entre alternativas, con política de robustez decidida y justificada | **Decisiones de ingeniería** — elegir API, qué cachear, cómo fallar: opciones→criterio→costo | M6.T2 / M6.T4 |
| B-M7 | **El esquema que otro implementará**: documento de diseño de datos de un dominio real, verificable por un tercero | **Documentación técnica** — escribir es diseñar | M7.T1 / M7.T4 |

**Capstone ET1 · La aplicación completa** *(~3 semanas finales; el proyecto de síntesis del nivel)*:

- **Qué es:** una aplicación con **usuario imaginable** que **consume una API real y persiste lo consumido en SQL** — la integración es obligatoria: los datos de la API alimentan el esquema propio (M6→M7 encadenados, no dos características sueltas) —, organizada en módulos con POO donde aporte, ejecutada desde terminal, viva en GitHub con README ejemplar, historia legible y batería de pruebas propia.
- **Dominio:** el estudiante **elige o propone** (agencia real; el tutor valida alcance). Dominios de referencia calibrados: biblioteca personal + API de libros · monitor de precios + API financiera · tracker de hábitos + API de clima. Dos estudiantes producirían soluciones distintas — condición de proyecto (B3 de DOC-03).
- **Síntesis verificable de los 7 módulos:** M1 (colecciones, excepciones, ficheros/formatos en el flujo de datos) · M2 (entidades del dominio como clases con invariantes) · M3 (≥1 elección de estructura justificada por coste) · M4 (repo con ramas, PRs propios, historia que narra) · M5 (corre desde terminal; entorno reproducible) · M6 (consumo robusto: timeouts, reintentos justificados, validación de frontera) · M7 (esquema propio + transacciones donde el dominio lo exija).
- **Las 7 habilidades de largo aliento, presentes:** plan de descomposición inicial · **≥1 cambio de requisitos real a mitad de proyecto** (el tutor-Cliente lo introduce: diseño incremental bajo fuego) · bitácora de depuración · una pasada de refactorización documentada en la historia · pruebas antes de las piezas críticas · ≥2 trade-offs con formato opciones→criterio→decisión→costo · README + documento de esquema.
- **Cierre en tres actos:** (1) entrega contra la batería y la triple vara; (2) **defensa TD-02 con arqueología**: el estudiante recorre su propia historia de commits narrando decisiones, errores y correcciones (mejoras 6–7 aplicadas a sí mismo). **La defensa tiene tres momentos obligatorios** *(mejoras 16–18)*: **abre con una predicción** — "¿qué tres preguntas crees que un ingeniero senior te hará sobre este proyecto?", y las responde antes de que el tutor pregunte (anticipar críticas antes de recibirlas); **en el centro, la mejor decisión** — "¿cuál fue tu mejor decisión de ingeniería?" seguida de "¿qué evidencia tienes de que lo fue?" (la intuición sin evidencia no se acepta); **cierra con la madurez** — "si empezaras hoy desde cero, ¿qué decisión tomarías diferente y por qué?"; (3) **post-mortem escrito de una página** (A7): qué salió bien, qué salió mal, qué haría distinto, qué decisión repetiría y cuál evitaría — práctica que acompañará al estudiante durante toda la Academia.
- **Estatus:** proyecto de portafolio del nivel (TP-01 íntegra, ya con repositorio público) y **primera pieza formal del proyecto columna vertebral**.

## 7. Pistas transversales en N1

🧮 **Matemáticas** (goteo semanal, ~30 min): lógica, conjuntos (con T3 de M1), crecimiento de funciones (con Big-O), intuición visual 3B1B — prepara N3 sin examinarse aquí · ⚔️ **DSA**: 2–3 katas/semana desde M3, dificultad básica; registro de repertorio · 📦 **Portafolio**: repo de calculadora (M4.T1) + repo del capstone; estándar acumulativo 14.6 · 🇬🇧 **Inglés**: lectura dirigida de documentación oficial sencilla por tema (campo "recursos" de cada ficha en el desarrollo de contenido); hito ET1 verificado en compuerta.

## 8. Evaluación del nivel

**Compuerta de tema**: ejercicios + reto + TD-01 breve (RM-03/RM-05) · **Compuerta de módulo**: evaluación integradora + cierre del largo aliento (revisado contra su habilidad declarada) · **Compuerta de nivel (17.6)**: **examen** (banco rotable ≥3 variantes por ítem, NNR-02 — B-02 de N0 corregida por diseño) + **capstone contra TP-01 íntegra** + **defensa TD-02** (código, decisiones, y las 7 habilidades de largo aliento sondadas) → certificación por la Plataforma (NNR-07). Umbral: el vigente de 17.3.3. Veredicto trazable completo (17.2.4) en cada acto.

## 9. Bibliografía oficial del nivel *(registro vivo)*

| Módulo | Eje | Complementos |
|---|---|---|
| M1 | docs.python.org Tutorial (caps. 4–7) | Automate the Boring Stuff · CS50P |
| M2 | docs Tutorial cap. 9 | CS50P OOP |
| M3 | CS50 Week 3 (Algorithms, Big-O — T1-T2) · CS50 Week 5 (Data Structures: trees/hash tables — T7-T8) | visualizaciones de algoritmos |
| M4 | Pro Git (caps. 1–3, gratuito) | GitHub Docs |
| M5 | Missing Semester (MIT) | The Linux Command Line (caps. iniciales) |
| M6 | MDN "How the Web works" | requests docs |
| M7 | SQLite Tutorial · SQLBolt | docs sqlite3 (Python) |

## Herencias declaradas a SYL-N2 *(resultado de la auditoría final, paso 9)*

*El contrato entre niveles hecho explícito: lo que N1 siembra deliberadamente y N2 DEBE recoger. Todo autor de SYL-N2 (incluido yo) verificará esta lista antes de diseñar — una herencia no recogida es un defecto de SYL-N2:*

| # | N1 siembra | N2 debe recoger |
|---|---|---|
| H-01 | Funciones como valores (`sorted(key=...)`, M3.T3, declarado en ficha) | **Decoradores y closures — PRIMER tema de FastAPI**: N1 los excluyó deliberadamente porque aquí fallaba el "por qué ahora"; en N2 la necesidad es real e inmediata (`@app.get`) |
| H-02 | La BD como notaría + procesos que escuchan puertos (M5.T3) + contratos remotos (M6) | **PostgreSQL como servidor**: la notaría deja de vivir en un archivo y se convierte en un proceso remoto con contrato — síntesis de tres piezas ya sembradas (semilla explícita en M7.T3) |
| H-03 | "¿Quién espera cuando cientos compiten?" (M5.T3) + "¿dos transacciones a la vez?" (M7.T3) | **Concurrencia y async** (N2.M1): la necesidad está sembrada dos veces; N2 la responde |
| H-04 | Pruebas antes del código (B-M5, A5, baterías propias del capstone) + T7 de M2 (assert/invariantes de clases, añadido en la profundización de N1) | **Testing formal y TDD** (N2.M4): el hábito existe; N2 le da disciplina e infraestructura |
| H-05 | "¿Cómo se cambia un esquema con datos vivos?" (M7.T4) | **Migraciones** (N2.M2) |
| H-06 | La estructura de la confianza — ¿quién eres? ¿cómo lo sé? ¿qué puedes? (M6.T2) | **Auth real: JWT/OAuth2** (N2.M1): la estructura mental está instalada; N2 la implementa |
| H-07 | "Invertir una vez para ahorrar muchas" (M3.T3) | **Redis y cachés** (N2.M2): la idea ya tiene nombre propio en la cabeza del estudiante |
| H-08 | Commits que disparan cosas (M4 cierre) + scripts que automatizan (M5.T5) | **CI/CD** (N2.M4): automatización sobre la historia |
| H-09 | Procesos aislados + entorno reproducible (M5, M1.T6) | **Docker** (N2.M4): "un contenedor es un proceso con su propio sistema de archivos" será una frase comprensible, no mágica |
| H-10 *(añadida por corrección de auditoría integral, 2026-07-20 — vacío real detectado: N2.M1.T3 ya presuponía esto sin que N1 lo sembrara)* | Anotaciones de función (`def f(x: int) -> int`), cierre opcional de M1.T1 — sin tipado estático completo, sin `mypy`, solo la sintaxis y su propósito documental | **Pydantic y validación real** (N2.M1.T3): el estudiante ya reconoce la sintaxis de anotación antes de aprender que Pydantic la usa para validar de verdad — evita combinar tres conceptos nuevos (anotaciones + decoradores + validación) en una sola sesión |

## 10. Observaciones de ejecución

> Registro operativo, no normativo (decisión institucional de SYL-N0). Incluye la **bitácora de entorno** (principio del entorno, §3.2): toda fricción de infraestructura se registra aquí con su resolución, separada de las observaciones conceptuales.

| # | Fecha | Observación | Tipo |
|---|---|---|---|
| — | — | *(se inaugura con la ejecución real del nivel)* | — |

## 11. Cierre

36 temas con ficha pedagógica completa, 7 experiencias cognitivas distintas, un capstone integrador y la transición al entorno real como hito enseñado. Todo tema responde por qué existe, por qué ahora y qué habilita; todo módulo entrena una forma de pensar además de una técnica. **El estándar de este documento: que otro profesor excepcional, con solo estas páginas, formara casi igual.** Lo que sigue (Prioridad 2) es desarrollar el contenido de cada lección con el estándar editorial vigente — pero eso solo empezará cuando el estudiante lo alcance: N0 sigue en curso, y su T2 espera.
