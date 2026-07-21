# SYL-N2 — Syllabus del Nivel 2 · Software Engineering

## Control del documento (conforme a DOC-00 §15.4)

| Campo | Valor |
|---|---|
| **Document Key** | SYL-N2 · Tier T2 |
| **Versión / Estado** | **1.0.0** · ✅ **Aprobado** por el Director (2026-07-19) — segundo syllabus oficial de la Academia. Diseño arquitectónico cerrado: no se reabrirá salvo evidencia objetiva de la implementación real (patrones de dificultad inesperada, lagunas detectadas en niveles posteriores, cambios tecnológicos que invaliden objetivos formativos, datos consistentes de varias cohortes) |
| **Autoridad de origen** | DOC-10 v1.0.1 (interior de N2, refinado a 5 módulos) · DOC-00 14.8.3 · DOC-01 (C-N2-01…07) |
| **Depende de** | DOC-10 (mapa) · DOC-00 (§13, §14, §16, 17.6, AC-15) · DOC-01 · DOC-02 (instrumentos) · DOC-03 (método) · SYL-N1 (Herencias Declaradas H-01…H-09, precedente metodológico) |
| **Produce / desarrolla** | La estructura docente completa de N2: fichas pedagógicas por tema, problemas de largo aliento, capstone ET2, evaluaciones, recursos, y las Herencias Declaradas hacia SYL-N3 |
| **Metodología** | Flujo oficial de 9 pasos institucionalizado en SYL-N1 (EVT-022): diseño del syllabus → revisión módulo por módulo → mejoras → capstone → compuertas → auditoría desde el nivel siguiente → Herencias Declaradas → auditoría adversarial final → publicación v1.0.0 |
| **Historial** | 0.1.0-draft (2026-07-18): Documento de Diseño presentado por Claude, con 4 decisiones (D1–D4) para veredicto del Director · Auditoría Adversarial de la Arquitectura ejecutada (mandato de ruptura): D1 confirmado sin cambio de alcance; **hallazgo real** — Q4 (calidad) mal secuenciado como módulo 4o, corregido a hilo transversal desde el día 1 (precedente: Git en N1) — D1b · **Arquitectura aprobada por el Director** con ampliaciones: D2 con la identidad filosófica unificadora ("asumir responsabilidad"); D3 con el criterio de inevitabilidad de las herencias; dos estándares permanentes nuevos — "coste de no enseñarlo" y "tres niveles de aprendizaje" (operativo/ingenieril/arquitectónico) · 0.2.0-draft (2026-07-18): **Estándar de responsabilidad experimentada** incorporado (§7bis: irreversibilidad, tres preguntas de laboratorio, dificultad desde la responsabilidad, error como recurso pedagógico); **M1 · El Servicio diseñado completo** (6 temas, momento irreversible en T4, primera semilla del hilo M4 en T2, largo aliento B-M1 "el contrato que otros consumen a ciegas") — pendiente de revisión crítica · 0.3.0-draft (2026-07-19): refinamiento tras revisión del Director — **Momento Fundacional de N2** declarado explícitamente en T4 (eje emocional/cognitivo de todo el nivel); consumidor con identidad (**Bitácora**, persistente desde T2); dimensión temporal hecha experiencia (persistencia real entre sesiones, datos del pasado que colisionan con el contrato presente); responsabilidad de decir "no" (T5, negociación con Bitácora); orgullo profesional explícito en el cierre de B-M1; idea de cinco años cristalizada en el cierre del módulo · 0.4.0-draft (2026-07-19): **M1 · El Servicio aprobado oficialmente** — primer módulo oficial de SYL-N2. Dos estándares institucionalizados para todo N2: un único Momento Fundacional por módulo, y una única frase de diez años por módulo; continuidad de Bitácora aprobada con condición de justificación pedagógica no repetitiva. **M2 · La Confianza diseñado completo** (6 temas resolviendo H-06 en T1–T3; Momento Fundacional en T4 — control de acceso roto/IDOR, vía nuevo rol de Tutor "Atacante"; largo aliento B-M2 "la auditoría propia"; Bitácora se autentica en T6, evolución justificada) — pendiente de revisión crítica · 0.5.0-draft (2026-07-19): **M2 · La Confianza aprobado oficialmente** — segundo módulo oficial. Ampliación filosófica del Director incorporada (la confianza preserva garantías, no solo bloquea ataques) y retroactiva a M1; nuevo estándar permanente: **la garantía como pregunta de diseño** ("¿qué garantía nueva adquiere el sistema al finalizar este módulo?"), declarada ahora en M1 y M2 y obligatoria en adelante. **M3 · Muchos a la Vez diseñado completo** con el encuadre del Director (no enseñar concurrencia — enseñar que el mundo real no espera su turno): 5 temas resolviendo H-02/H-03/H-07 con inevitabilidad; Momento Fundacional en T3 (condición de carrera real, lost update, sin ninguna excepción lanzada); garantía adquirida: consistencia bajo concurrencia; largo aliento B-M3 "el conteo que no cuadra"; Bitácora crece y ese crecimiento es lo que rompe algo — pendiente de revisión crítica · 0.6.0-draft (2026-07-19): **M3 · Muchos a la Vez aprobado oficialmente** — tercer módulo oficial. Ampliación filosófica del Director incorporada en T3 (los múltiples observadores: no hay un único estado universal, hay perspectivas parciales simultáneas — puerta de entrada a sistemas distribuidos y agentes); frase de diez años reforzada (garantías que se sostienen bajo simultaneidad, no solo "todo pasa a la vez"); nuevo estándar permanente: **el supuesto que destruye cada módulo**, declarado ahora en M1, M2 y M3. **M4 · La Red de Seguridad diseñado completo** con el encuadre del Director (no un curso de testing — la calidad como propiedad del sistema, no de la memoria): 5 temas formalizando el hilo transversal sembrado en M1.T2; Momento Fundacional en T5 (CI atrapa una regresión que, sin el pipeline, habría roto a Bitácora); garantía adquirida: corrección verificable continuamente; largo aliento B-M4 "la red que no vi que necesitaba" — pendiente de revisión crítica · 0.7.0-draft (2026-07-19): **M4 · La Red de Seguridad aprobado oficialmente** — cuarto módulo oficial. Ampliación filosófica del Director incorporada (la ingeniería compensa limitaciones humanas —olvido, distracción, error—; la calidad como propiedad emergente del sistema, no fase ni departamento, y menos dependiente de una persona cuanto más grande es el sistema); nuevo estándar permanente: **la limitación humana que compensa cada módulo**, declarado ahora en M1-M4. **M5 · Entregar sin Miedo diseñado completo — último módulo de N2**, con el encuadre del Director (no Docker/CI/CD — responsabilidad completa del ciclo de vida; M1 contrato, M2 confianza, M3 consistencia, M4 calidad, M5 continuidad): 5 temas resolviendo H-05/H-08/H-09 con inevitabilidad; Momento Fundacional en T4 (migración expandir-contraer con Bitácora llamando sin pausa — la única vez en N2 que el arco de Bitácora no es una ruptura, sino la prueba medida de que nada se rompió); garantía adquirida: evolución segura sin interrumpir el servicio; largo aliento B-M5 "el sistema que nunca se detiene" — pendiente de revisión crítica. **Con M5 aprobado, quedarán completos los cinco módulos; siguen los pasos 8-9 del flujo institucional (capstone, compuertas, auditoría desde N3, Herencias Declaradas, auditoría adversarial final) antes de v1.0.0** · 0.8.0-draft (2026-07-19): **M5 aprobado oficialmente — quinto y último módulo; fase de diseño modular concluida.** Filosofía de evolución perpetua incorporada como eje explícito de M5 (nunca hay versión definitiva); último estándar permanente institucionalizado: **lo que deja de sorprender**, completando el conjunto de cinco preguntas obligatorias por módulo (Momento Fundacional, garantía, supuesto que destruye, limitación humana compensada, lo que deja de sorprender) — declaradas retroactivamente en M1-M5. **Paso 8 ejecutado:** Capstone ET2 diseñado ("El backend que puede vivir sin ti" — episodio integrador donde las 5 garantías se demuestran a la vez, no en secuencia, corrigiendo el riesgo de "suma de entregas" ya detectado por este mismo criterio en SYL-N1); compuertas revisadas con cobertura verificada de C-N2-01…07 (hallazgo documentado: C-N2-07 se evalúa en el hito de etapa 14.6, no en la compuerta de nivel — por diseño, no por omisión). Pendiente: paso 9 (auditoría desde SYL-N3 + Herencias Declaradas) y auditoría adversarial final · 0.9.0-draft (2026-07-19): **Paso 8 aprobado oficialmente** con la incorporación de la **pregunta de validación final** ("¿confiaría el examinador en este estudiante para mantener un sistema real?") como estándar permanente de todos los capstones de la Academia, añadida al cierre de la defensa TD-02 del capstone ET2. **Paso 9 ejecutado completo:** (9a) coherencia desde SYL-N3 — Herencias Declaradas hacia N3 consolidadas (H-N3-01…05, incluido un hallazgo nuevo: los múltiples observadores de M3 como fundamento de la intuición probabilística); 0 prerrequisitos ocultos encontrados; frontera N2↔N3 confirmada limpia. (9b) auditoría adversarial final con mandato de ruptura total — 6 ataques directos, 4 resistidos sin cambios, 2 hallazgos reales aplicados: aclaración de función del aparato de 5 categorías por módulo (instrumento de diseño/auditoría, no guion de sesión — nueva nota en §7bis) y mención Beyond the Curriculum de rate limiting en M2.T4 (sin nuevo tema). **Conclusión del comité: SYL-N2 candidato a v1.0.0 sin reservas, a la espera del veredicto definitivo del Director** · **1.0.0 (2026-07-19): aprobado por el Director — segundo syllabus oficial de la Academia. Decisión institucional asociada: ningún syllabus aprobado se reabrirá por ideas nuevas — solo por evidencia objetiva de la implementación real (dificultad inesperada recurrente, lagunas detectadas en niveles posteriores, cambios tecnológicos que invaliden objetivos, datos consistentes de varias cohortes). Con SYL-N1 y SYL-N2 completos, la Fase II de arquitectura curricular concluye; la prioridad pasa a la Prioridad 2 — el desarrollo del contenido real de las lecciones** |

---

## 0. Estado del documento

Este archivo contiene la **arquitectura intelectual completa y cerrada de N2** (secciones 1–8), aprobada por el Director. Los módulos con sus fichas pedagógicas, problemas de largo aliento y capstone se añadirán en las secciones siguientes conforme avance el flujo de 9 pasos — exactamente como ocurrió con SYL-N1. **No hay contenido de módulo aún**; lo que sigue es la brújula que gobernará su diseño.

## 1. La identidad de N2

**¿Qué tipo de ingeniero comienza a formarse aquí?** El ingeniero de software profesional — la persona cuyo código afecta a otros. Hasta N1, el estudiante escribió programas: artefactos que él ejecuta, para sí mismo, mientras mira. En N2 cruza la frontera que da identidad al nivel: **construye servicios** — software que otros usan, que permanece vivo cuando él cierra la terminal, y que sigue siendo su responsabilidad precisamente entonces.

**Identidad filosófica unificadora** *(ampliación del Director, D2)*: si N1 enseñó a **construir** software, **N2 enseña a asumir responsabilidad sobre software**. Esa responsabilidad no es una habilidad más entre otras: es la dimensión que atraviesa las cinco grandes preguntas del nivel, expresada de forma distinta en cada una:

| Módulo | La responsabilidad significa… |
|---|---|
| M1 · El servicio | Construir contratos estables — otros dependerán de que no cambien sin aviso |
| M2 · La confianza | Proteger a los usuarios y al sistema de quien quiera dañarlos |
| M3 · Muchos a la vez | Preservar la consistencia cuando muchas cosas ocurren simultáneamente |
| M4 · La red de seguridad | Garantizar continuamente que el sistema sigue siendo correcto |
| M5 · Entregar sin miedo | Evolucionar el sistema sin perjudicar a quienes ya dependen de él |

No son cinco habilidades aisladas: son **cinco dimensiones de una misma responsabilidad profesional**. Cada módulo, en el desarrollo detallado, deberá hacer audible esta identidad — el estudiante debe poder nombrar, al cerrar cualquier tema, de qué forma acaba de ejercer responsabilidad sobre un sistema ajeno.

**¿En qué cambia respecto a N1?** N1 respondió preguntas sobre el programa y su máquina. N2 introduce dos dimensiones que N1 deliberadamente no tenía: **el otro** (usuarios reales, desconocidos, atacantes, el futuro mantenedor) y **el tiempo** (el servicio corre a las 3 a.m., los datos viven años, el código se despliega el martes sin romper lo del lunes).

**Nuevas capacidades cognitivas:** diseño de contratos públicos · razonamiento sobre concurrencia (muchas cosas ciertas a la vez) · **pensamiento adversarial** (¿cómo rompería esto alguien que quiere romperlo?) · calidad como sistema, no como acto · pensamiento operacional (el software no solo se escribe: se opera).

**Nuevas responsabilidades:** cuando su software falle — y fallará — habrá usuarios al otro lado. El estudiante pasa de "mi programa no funciona" a "**mi servicio les falló**".

## 2. La gran narrativa del nivel *(revisada tras la auditoría adversarial — D1b)*

La historia arranca donde el capstone de N1 dejó al estudiante:

> *Tu aplicación funciona. Consume una API, guarda en SQL, tiene pruebas y vive en GitHub. Pero solo funciona para ti, en tu máquina, mientras tú la ejecutas. En N1 fuiste el cliente de las ventanillas de otros. ¿Qué hace falta para estar del otro lado?*

**Estructura narrativa: cuatro actos secuenciales + un hilo paralelo desde el primero.**

**Acto I — El servicio (M1):** convertir el programa en algo que otros usan revela que casi todo cambia: el proceso debe permanecer vivo, la interfaz debe prometerse (el contrato de N1.M6, ahora desde dentro), y la entrada ajena sigue siendo frontera hostil — pero ahora la aduana es responsabilidad nuestra.

**Hilo paralelo desde el Acto I — La red de seguridad (M4):** exactamente como Git corrió en paralelo desde la semana 1 de N1 (nunca "el último tema"), la disciplina de pruebas nace junto con el primer servicio, no después de que la complejidad exista. El estudiante construye M2 y M3 ya con una red de pruebas creciendo debajo — como un ingeniero de verdad, no como alguien que verifica al final.

**Acto II — La confianza (M2):** si cualquiera puede llamar a tu ventanilla, ¿quién es cada uno? Las tres preguntas sembradas en N1.M6.T2 dejan de ser filosofía y se vuelven código — y por primera vez el estudiante piensa como su atacante. El pensamiento adversarial, instalado aquí, **no se sella**: atraviesa M3 (¿cómo explotaría la concurrencia?) y M5 (¿el propio pipeline de entrega es superficie de ataque?).

**Acto III — Muchos a la vez (M3):** con usuarios reales llega el fenómeno que N1 solo pudo sembrar: la concurrencia, y con ella los datos compartidos — la notaría de N1 se convierte en servidor, las transacciones muestran su cara difícil (aislamiento), y la inversión de M3.T3-N1 reaparece con nombre propio (cachés). Es el momento en que se rompe el supuesto de "uno" que todo N1 dio por sentado — un usuario, un proceso, un escritor.

**Acto IV (síntesis) — Entregar sin miedo (M5):** el cierre integra todo lo anterior: empaquetar (el contenedor — "un proceso con su propio sistema de archivos", frase que N1.M5 dejó comprensible), automatizar el camino del commit a producción, y evolucionar el servicio — esquema incluido — sin interrumpir a quienes lo usan, **usando la red de pruebas ya madura, la autenticación ya construida y el diseño concurrente ya verificado**. No es un tema nuevo: es la prueba de que todo lo anterior funciona junto.

La narrativa es inevitable en ambas direcciones: cada acto resuelve la tensión del anterior, y el hilo paralelo dota a cada acto de la red que lo hace seguro de intentar.

## 3. Las grandes preguntas del nivel

| # | La gran pregunta | Módulo | Tecnologías (solo contexto) | Naturaleza |
|---|---|---|---|---|
| Q1 | **¿Cómo construimos software que otros usan — y que sigue funcionando cuando no estamos?** | M1 · El servicio | FastAPI, REST, Pydantic, decoradores | Secuencial, apertura |
| Q2 | **¿Cómo confía un servicio en desconocidos?** | M2 · La confianza | JWT/OAuth2, OWASP, secretos | Secuencial |
| Q3 | **¿Qué se rompe cuando "uno" se convierte en "muchos"?** | M3 · Muchos a la vez | async, PostgreSQL, aislamiento, Redis | Secuencial |
| Q4 | **¿Cómo sabemos, en todo momento, que el software sigue siendo correcto?** | M4 · La red de seguridad | pytest, TDD, clean code, patrones | **Transversal desde M1**, con consolidación formal propia |
| Q5 | **¿Cómo llega el software al mundo — y evoluciona sin interrumpir a nadie?** | M5 · Entregar sin miedo | Docker, CI/CD, migraciones, AWS básico | Secuencial, síntesis |

**Precisión del Director sobre Q4 (equilibrio transversal/formal):** que el pensamiento de calidad sea transversal desde el inicio no exime de un momento de consolidación sistemática — TDD, diseño de pruebas, cobertura, estrategias de testing e integración continua se estudiarán en profundidad en un punto formal propio del módulo, no solo "de pasada". La presencia continua construye el hábito; la consolidación formal construye la disciplina. Ambas son necesarias; ninguna sustituye a la otra.

## 4. La transformación cognitiva

| Antes (cierra N1 pensando…) | Después (cierra N2 pensando…) |
|---|---|
| "¿Funciona?" | "¿Funciona para otros, bajo carga, mañana, sin mí?" |
| El error es un traceback que leo | El fallo es un evento que alguien sufre — y mi diseño decidió cómo tratarlo |
| La entrada se valida | Todo lo que llega puede venir de un adversario — pienso como quien ataca |
| Las cosas pasan una detrás de otra | Muchas cosas son ciertas a la vez — razono sobre estados que se entrelazan |
| Pruebo lo que escribo | La calidad es un sistema automático — si no está verificado continuamente, está roto y aún no lo sé |
| Terminar = entregar el código | Terminar = el servicio opera, evoluciona y otro podría mantenerlo |

En términos de DOC-03: el pensamiento adversarial se integra a A5 (el "caso hostil" gana intención), los trade-offs (A2) ganan la dimensión operacional, y la pregunta rectora de la Academia da su paso de nivel: el ingeniero excepcional de N2 es el que **diseña para el otro y para el tiempo**.

## 5. Resolución de las Herencias Declaradas (H-01…H-09)

**Criterio de inevitabilidad** *(nuevo estándar permanente, D3)*: una herencia no debe limitarse a "resolverse" — debe **sentirse inevitable**. Cuando el estudiante llegue a cada una, no debe percibir que empieza un tema nuevo: debe pensar *"por fin entiendo aquello que quedó pendiente"*. Este criterio se verificará explícitamente en el diseño de cada tema que resuelva una herencia (campo "Por qué" de la ficha, con referencia directa a dónde se sembró en N1).

| Herencia | Resolución en N2 | Dónde se sembró (para la inevitabilidad) |
|---|---|---|
| H-01 Decoradores/closures | **Primer tema del nivel** (M1, antes de FastAPI) | N1.M3.T3: `sorted(key=)` — usar funciones como valores |
| H-02 BD cliente-servidor | M3: la notaría se convierte en proceso remoto | N1.M7.T3: "¿y cuando deja de vivir en tu archivo?" |
| H-03 Concurrencia/async | M1 la presenta (el servicio atiende a más de uno); M3 la resuelve a fondo | N1.M5.T3: "¿quién decide cuando cientos compiten?" |
| H-04 Testing formal | **M4**, como hilo transversal desde M1 + consolidación propia | N1 B-M5: pruebas antes que el script (A5) |
| H-05 Migraciones | M5: "¿cómo se cambia un esquema con datos vivos?" | N1.M7.T4, pregunta ingenieril final |
| H-06 Auth/confianza | M2: las tres preguntas de la confianza, implementadas | N1.M6.T2: quién eres/cómo lo sé/qué puedes |
| H-07 Cachés | M3: "invertir una vez para ahorrar muchas", con nombre | N1.M3.T3: la idea universal de la ordenación |
| H-08 CI/CD | M5: los commits que disparan cosas, realizados | N1.M4 cierre: arqueología y automatización |
| H-09 Docker | M5: "un proceso con su propio sistema de archivos" | N1.M5.T3–T4: procesos y aislamiento |

## 6. Herencias provisionales hacia N3 *(pensando desde N3 desde el primer borrador)*

N3 es Matemáticas para IA. Lista provisional — se consolidará en la auditoría del paso 9 de este mismo syllabus:

| # | N2 sembrará | N3 deberá recoger |
|---|---|---|
| HP-01 | Verificación contra referencia (M4: tests que comparan resultados) | Verificar implementaciones matemáticas propias contra numpy |
| HP-02 | Igualdad aproximada en tests numéricos (M4: por qué `0.1+0.2 != 0.3` exige tolerancias) | La aritmética de coma flotante formal |
| HP-03 | Medición de rendimiento (M3/M5: latencia, benchmark antes/después) | El coste computacional de las operaciones matemáticas |
| HP-04 | La columna vertebral queda como API sin inteligencia — un cuerpo esperando cerebro | La motivación de toda la ET3: las matemáticas son lo que falta para que ese cuerpo piense |

## 7. Conformidad y estándares de diseño para todos los módulos

**Herencia íntegra de N1 (sin excepción):** gran pregunta visible por módulo · ficha pedagógica de hasta 14 campos (objetivo, prerrequisitos, competencias, errores, modelo mental, por qué, evidencia, práctica, evaluación, pregunta ingenieril, evolución de la idea, idea universal, gran abstracción, ¿qué rompe esta abstracción?) · institución de la ingeniería · la gran idea de 10 años por módulo · "Así se usa esto en el mundo real" de cierre · 5 problemas de largo aliento con 5 habilidades cognitivas distintas (a proponer en el diseño modular) · capstone de síntesis con defensa de tres momentos (predicción de preguntas, mejor decisión + evidencia, decisión que cambiaría) + arqueología + post-mortem.

**Dos estándares nuevos, permanentes desde N2** *(Director, este cierre)*:

1. **"¿Qué coste tendría NO enseñar esto?"** — acompaña toda decisión curricular del nivel. No basta con que un tema sea importante: debe producir, en su ausencia, una carencia observable en el ingeniero formado. Si eliminarlo no cambia significativamente el perfil de egreso, el tema sobra o debe integrarse en otro. Este criterio se aplicará explícitamente al diseñar cada módulo, antes de aceptar cualquier tema en su interior.
2. **Los tres niveles de todo módulo:** ningún módulo puede quedarse en el primero.
   - **Operativo** — el estudiante sabe utilizar la herramienta.
   - **Ingenieril** — comprende por qué existe, qué problema resuelve, cuáles son sus límites.
   - **Arquitectónico** — decide cuándo usarla, cuándo no, y qué consecuencias tiene esa decisión para un sistema completo.

   Todo tema de N2, en su desarrollo, deberá poder señalar explícitamente dónde se alcanzan los tres niveles — no solo el primero.

**Sin negociación:** Blueprint 1.1.0 (AC-05, AC-15) · DOC-02 (compuertas con instrumentos canónicos, banco rotable) · DOC-03 íntegro (14 momentos, dosificación, multi-rol — N2 estrena de verdad los roles Cliente y Arquitecto) · DOC-10 v1.0.1 (alcance temático exacto; el único cambio autorizado fue la distribución interna, no el contenido).

## 7bis. Estándar de responsabilidad experimentada *(gobierna todo N2 — añadido tras la aprobación arquitectónica; no modifica la arquitectura, la fortalece)*

**El estudiante debe experimentar la responsabilidad, no solo comprenderla.** Cada módulo coloca al estudiante en situaciones donde una decisión tiene consecuencias observables — no dificultad artificial: responsabilidad auténtica. Al construir un endpoint, descubre qué ocurre cuando rompe un contrato público; al implementar autenticación, comprueba qué sucede si confía donde no debería; al trabajar con concurrencia, ve inconsistencias reales antes de aprender la solución; al escribir pruebas, comprueba cómo un cambio aparentemente inocente rompe funcionalidad existente; al desplegar, siente el coste de una mala entrega.

**Principio de irreversibilidad.** Cada módulo contiene, como mínimo, una experiencia tras la cual el estudiante no puede volver a pensar como antes — un cambio definitivo del modelo mental, no solo una técnica aprendida. Se declara explícitamente en el diseño de cada módulo (el "momento irreversible").

**Las tres preguntas de todo laboratorio.** ¿Qué estoy aprendiendo a hacer? ¿Por qué existe esta práctica en la ingeniería real? ¿Qué error profesional estoy aprendiendo a evitar? Un laboratorio que no responda las tres con claridad todavía no está suficientemente maduro.

**La dificultad nace de la responsabilidad, no de la tecnología.** La tecnología es el medio; el verdadero reto es tomar mejores decisiones bajo consecuencias crecientes.

**El error como recurso pedagógico deliberado.** Se diseñan situaciones donde una decisión aparentemente razonable produce consecuencias inesperadas — y esas consecuencias, no la explicación previa, construyen el concepto correcto. No se enseñan solo soluciones: se enseña por qué llegaron a existir.

**Énfasis reforzado en DOC-03 para todo N2:** recuperación activa constante · predicción antes de explicación · construcción progresiva del modelo mental · reflexión posterior sobre decisiones tomadas. No clases que transmiten información: experiencias que transforman la forma de pensar.

**Un momento fundacional por módulo** *(institucionalizado tras M1, 2026-07-19)*: cada módulo de N2 posee **un único** instante — no varios, no "momentos impactantes" repartidos — donde cambia definitivamente la manera de pensar del estudiante respecto a la gran pregunta de ese módulo. Se declara explícitamente en el diseño ("El Momento Fundacional de M#"), con su instante preciso, no el tema completo que lo contiene. M1 ya tiene el suyo (T4: "le rompí algo a alguien"); M2, M3, M4 y M5 deben producir el equivalente sobre su propia gran pregunta.

**Una frase que sobreviva diez años, por módulo** *(institucionalizado tras M1)*: cada módulo cierra con una única idea profesional —no una definición, no un resumen— que siga guiando decisiones mucho después de haber olvidado la tecnología concreta. Se declara en el cierre de cada módulo ("La idea que este módulo deja para siempre"). La de M1: *"cuando otras personas dependen de tu software, cada cambio deja de ser un acto privado y se convierte en una responsabilidad profesional."* Si un egresado recordara solo las cinco frases de N2 dentro de diez años, la Academia habría transformado su criterio profesional, no solo enseñado herramientas.

**La garantía como pregunta de diseño** *(institucionalizado tras M2, 2026-07-19)*: cada módulo debe responder explícitamente **¿qué garantía nueva adquiere el sistema al finalizar este módulo?** — no qué tecnología aparece, no qué herramienta se aprende: qué propiedad del sistema ahora se sostiene y antes no. Se declara en el cierre de cada módulo, junto a su Momento Fundacional y su frase de diez años. M1: *el sistema garantiza contratos públicos estables.* M2: *el sistema garantiza que cada acción respeta las autorizaciones definidas.* Pensar el currículo desde garantías, no desde tecnologías, es ahora criterio permanente de diseño para todo N2.

**La confianza como preservación de garantías, no solo como bloqueo de ataques** *(ampliación filosófica del Director sobre M2, extensiva a todo N2)*: la seguridad no existe únicamente para impedir a un atacante — existe para preservar las propiedades fundamentales que hacen posible confiar en un sistema: que cada usuario vea solo lo que le corresponde, que las acciones sean atribuibles, que nadie modifique lo que no le pertenece, que el sistema sostenga las promesas que hizo. Todo módulo de N2 que toque confianza o seguridad debe transmitir esta idea explícitamente, no solo "cómo impedir el ataque de turno".

**El supuesto que destruye** *(institucionalizado tras M3, 2026-07-19)*: cada módulo debe identificar explícitamente **qué creencia anterior deja de ser válida** — no solo qué enseña, qué supuesto rompe. Se declara junto a la garantía y el Momento Fundacional. M1 destruye la idea de que cambiar el propio código solo afecta a quien lo cambia. M2 destruye la idea de que identificar a un usuario basta para confiar en él. M3 destruye la idea de que la corrección local implica corrección global. Pensar cada módulo desde el supuesto que rompe fortalece la construcción progresiva del criterio ingenieril — es tan permanente como la garantía y la frase de diez años.

**Aclaración de función** *(hallazgo de la auditoría adversarial final, paso 9b)*: las cinco declaraciones que cierran cada módulo — Momento Fundacional, garantía, supuesto que destruye, limitación humana que compensa, lo que deja de sorprender — son **instrumentos de diseño y de auditoría de coherencia**, dirigidos a quien construye y revisa el syllabus. No son un guion que el tutor recita en sesión ni una lista que el estudiante debe escuchar enunciada. En el aula, estas ideas emergen como conclusiones que el propio estudiante articula durante la defensa y la reflexión (DOC-03, M13-M14) — nunca como una lección declarada. Si alguna vez se sintiera como fórmula repetida, la falla no sería del criterio: sería de la sesión que lo convirtió en libreto.

**Lo que deja de sorprender** *(institucionalizado tras M5, 2026-07-19 — último estándar permanente de esta fase)*: cada módulo debe reducir explícitamente la distancia entre la intuición del estudiante y la realidad profesional, respondiendo **¿qué aspecto de la realidad de la ingeniería deja de sorprender al estudiante después de este módulo?** M1: que otros dependan de sus decisiones. M2: que existan usuarios maliciosos o accesos indebidos. M3: que múltiples eventos ocurran simultáneamente. M4: que los sistemas detecten errores automáticamente. M5: que un sistema deba evolucionar continuamente sin detenerse. No enseñamos únicamente conocimientos — reducimos progresivamente la distancia entre la intuición y la realidad de la ingeniería profesional. Este criterio, junto con el Momento Fundacional, la garantía, el supuesto que destruye y la limitación humana que compensa, forma el conjunto completo de cinco preguntas que todo módulo de la Academia debe responder desde ahora.

**La limitación humana que compensa** *(institucionalizado tras M4, 2026-07-19)*: la ingeniería no asume ingenieros perfectos — asume que olvidan, se distraen, se equivocan, interpretan mal, cambian de opinión, se cansan. Cada mecanismo que N2 enseña existe para compensar una de esas limitaciones, no para "seguir buenas prácticas" en abstracto. Cada módulo debe responder explícitamente **¿qué limitación humana compensa?** M1 compensa la tendencia a modificar contratos sin pensar en los demás. M2 compensa la tendencia a confiar demasiado. M3 compensa la incapacidad de razonar intuitivamente sobre eventos simultáneos. M4 compensa la tendencia natural a cometer errores y olvidarlos. Diseñamos no solo para resolver problemas técnicos — diseñamos porque conocemos nuestras propias limitaciones.

**Continuidad narrativa de Bitácora** *(aprobada, con condición)*: Bitácora permanece como hilo del nivel siempre que su presencia tenga justificación pedagógica en cada módulo donde aparezca — nunca como recurso repetitivo. No debe sentirse como un personaje: debe sentirse como un sistema real que evoluciona junto con el estudiante (en M1 llama sin identificarse; en M2 debe aprender a identificarse; su evolución futura en M3/M5 se diseñará cuando corresponda, con la misma condición).

## 8. Próximo paso

Con la arquitectura cerrada, comienza el diseño modular detallado, en el orden narrativo del nivel: **M1 · El servicio** (abriendo con la herencia H-01: decoradores), seguido de la incorporación progresiva del hilo transversal de M4 desde ese mismo primer módulo. Cada módulo seguirá el flujo íntegro: diseño → revisión crítica del Director → refinamiento → aprobación → siguiente módulo.

---

## 9. M1 · El Servicio — diseño completo del módulo

> **La gran pregunta de este módulo: ¿cómo construimos software que otros usan — y que sigue funcionando cuando no estamos?**

### Nota de diseño (para revisión del Director)

**La historia que cuenta este módulo:** el capstone de N1 dejó al estudiante con una aplicación que solo funciona para él, en su máquina, mientras la mira. La tensión: convertirla en algo que otros usan revela que casi todo cambia. El módulo abre con la herencia pendiente — funciones como valores, sembrada en N1.M3.T3, cosechada aquí como decoradores (T1) —, levanta el primer servicio real que responde sin que el estudiante esté delante (T2), descubre que aceptar datos no basta: hay que **prometerlos** (T3, Pydantic), diseña la forma pública de esa promesa — recursos, verbos, códigos de estado (T4) — y ahí vive el **momento irreversible del módulo**: el estudiante rompe su propio contrato y ve, en un consumidor real que ya dependía de él, el coste exacto de haberlo hecho sin avisar. Cierra tratando los errores como parte del contrato, no como su fracaso (T5), y haciendo que el contrato se documente a sí mismo (T6) — un servicio vivo, pero todavía inseguro (sin auth, tensión que abre M2) y todavía solitario (sin datos compartidos reales, tensión que abre M3).

**El Momento Fundacional de N2** *(no solo de M1 — el eje emocional y cognitivo de todo el nivel; cada módulo posterior se construye sobre él)*: ocurre en un instante preciso dentro de T4 — no el tema entero, el segundo exacto en que el estudiante, tras cambiar su API de una forma que a él le pareció razonable, ve con sus propios ojos que **Bitácora** — la aplicación que ya dependía de su servicio — deja de funcionar. Antes de ese instante, el estudiante piensa "arreglé mi código"; después de él, piensa "le rompí algo a alguien". Es el momento exacto en que deja de pensar como quien escribe programas y empieza a pensar como quien es responsable de un servicio.

**Bitácora — el consumidor con identidad:** desde T2, el servicio tiene un consumidor concreto y nombrado, no abstracto: **Bitácora**, una pequeña aplicación externa (construida y operada por el tutor) que integra el servicio del estudiante desde el primer endpoint que existe. Bitácora no es una metáfora — hace llamadas reales, guarda lo que recibe, y **sigue llamando entre una sesión de estudio y la siguiente**, exista o no el estudiante para verlo. A partir de aquí, cuando N2 hable de "el otro", el otro tiene nombre.

**El tiempo como experiencia, no como explicación:** el servicio y sus datos **sobreviven entre sesiones reales** — no se reinicia nada entre T2 y T5 (persistencia mínima con SQLite, reutilizando N1.M7, sin adelantar el servidor de M3). Bitácora sigue llamando y guardando registros bajo el contrato vigente en cada momento. Cuando el estudiante cambia el contrato en T4/T5, no encuentra una advertencia teórica: encuentra **registros reales, guardados días atrás bajo la versión anterior del contrato**, que ya no encajan con la nueva. El pasado no se explica: se tropieza con él.

**La responsabilidad también incluye decir "no":** en T5, Bitácora (voz del tutor) solicita un cambio que suena razonable desde su lado — simplificar una validación, aceptar un formato más flexible — pero que, de concederse, rompería la estabilidad que otros consumidores ya dan por hecha. La respuesta correcta no es ceder: es **rechazar la petición con un error bien diseñado que explica por qué**, o proponer una alternativa que no comprometa el contrato.

**Orgullo profesional, no solo alivio:** el cierre de B-M1 está diseñado para producir algo distinto del simple alivio de "ya no está roto". Cuando Bitácora vuelve a integrarse correctamente — tras una evolución del contrato bien versionada, no tras deshacer el cambio —, el tutor lo nombra explícitamente como lo que es: un logro profesional. El estudiante acaba de hacer algo que antes no sabía hacer.

**Primera manifestación del hilo transversal M4 (calidad):** exactamente como Git corrió en paralelo desde la semana 1 de N1, aquí nace el hábito de prueba — no su forma madura (eso llega en el módulo M4 propiamente dicho), sino su primera semilla: en cuanto el primer endpoint existe (T2), se escribe una prueba automática mínima que lo verifica. El hilo crecerá en M2 y M3 antes de su consolidación formal.

**Forma de pensar que construye cada tema:**

| Tema | Capacidad cognitiva |
|---|---|
| T1 Decoradores | **Funciones como fábricas de comportamiento**: envolver sin modificar el original |
| T2 El primer servicio | **Pensar en ciclos, no en ejecuciones**: el servicio espera, no termina |
| T3 Contratos con Pydantic | **Prometer, no solo aceptar**: la validación mira hacia afuera, no solo hacia adentro |
| T4 Diseño de API REST | **Diseñar para el desconocido que ya depende de ti** — el momento irreversible |
| T5 Errores como contrato | **El fallo también se promete**: cómo se falla es parte de la interfaz |
| T6 Documentación viva | **El contrato se explica solo**: la documentación como propiedad del sistema, no tarea aparte |

**Carga cognitiva:** 6 temas / ~5 semanas (M1 es el módulo de apertura, con más extensión que los siguientes, como ocurrió con N1.M1). El pico conceptual es T4, con dos temas de aterrizaje concreto (T2, T3) antes y dos de consolidación (T5, T6) después. **Prueba del coste de no enseñarlo:** cada tema, si se eliminara, dejaría una carencia observable — sin T1 el estudiante no puede leer ni escribir una sola línea de FastAPI; sin T3 no distingue aceptar de prometer; sin T4 no tiene el momento irreversible que da identidad al módulo. Ninguno sobra.

**Omisión deliberada:** persistencia real (SQLite basta como placeholder, sin server ni concurrencia — esas son las preguntas de M3, no de M1: introducir PostgreSQL-servidor aquí adelantaría contenido sin necesidad sentida) y autenticación (M2 completo). El servicio de M1 es deliberadamente público y sin usuarios distinguibles — esa ausencia ES la tensión que abre M2.

### Fichas pedagógicas

**N2.M1.T1 · Decoradores y closures: funciones que fabrican comportamiento**
- **Objetivo:** escribe decoradores propios y explica cómo `@app.get(...)` transforma una función ordinaria en un endpoint.
- **Prerrequisitos:** N1.M3.T3 (`sorted(key=)` — funciones como valores); N1.M1.T1 (función como contrato).
- **Competencias:** C-N2-01, C-N2-06 (documentación oficial de FastAPI, en inglés).
- **Errores habituales:** creer que el decorador "se ejecuta cuando se llama la función" (se ejecuta al *definirla*); perder metadatos de la función original; anidar decoradores sin entender el orden de aplicación.
- **Modelo mental:** el decorador como **caja que envuelve un regalo sin abrirlo**: la función original sigue intacta adentro; lo que cambia es lo que ocurre alrededor cuando se usa.
- **Por qué:** existe porque N1 ya usó funciones como valores sin nombrarlo (`sorted(key=)`) / ahora porque FastAPI se escribe con decoradores desde su primera línea / habilita leer y escribir la sintaxis completa del framework sin que parezca magia. **Coste de no enseñarlo:** sin esto, cada `@app.get` sería memorizado como fórmula mágica, no comprendido — la carencia se notaría en cada línea del módulo.
- **Los tres niveles:** operativo — escribe un decorador que registra o valida; ingenieril — explica por qué Python permite esto (funciones de primera clase) y dónde se rompe (decoradores que ocultan mal la función original); arquitectónico — decide cuándo un decorador simplifica de verdad y cuándo esconde lógica que debería ser explícita.
- **Evidencia de dominio:** escribe un decorador propio (p. ej., uno que mide tiempo de ejecución) antes de usar el primero de FastAPI, y explica la equivalencia.
- **Práctica principal:** *(las tres preguntas del laboratorio)* ¿qué aprendo a hacer? — envolver funciones sin modificarlas; ¿por qué existe en la ingeniería real? — es el mecanismo detrás de casi todo framework serio (rutas, validación, permisos); ¿qué error evito? — tratar la sintaxis de FastAPI como arbitraria en vez de como consecuencia lógica del lenguaje.
- **Evaluación:** escalera de ejercicios + reto + TD-01 breve.
- **Pregunta ingenieril:** si un decorador puede ejecutar código antes Y después de la función que envuelve, ¿qué responsabilidades deberías ponerle — y cuáles jamás deberían esconderse ahí?
- **Idea universal:** puedes añadir comportamiento a algo sin tocar su interior — la envoltura es tan válida como la modificación.

**N2.M1.T2 · El primer servicio: FastAPI y el ciclo petición-respuesta**
- **Objetivo:** levanta un servicio FastAPI real, define rutas que responden a peticiones, y explica el ciclo completo desde que llega una petición hasta que sale la respuesta.
- **Prerrequisitos:** T1; N1.M6.T1 (el viaje de una petición — ahora desde el otro lado).
- **Competencias:** C-N2-01.
- **Errores habituales:** confundir "escribir la ruta" con "que el servidor esté escuchando" (falta uvicorn); no entender que el proceso permanece vivo esperando, no termina como un script de N1; probar solo "el camino feliz".
- **Modelo mental:** el servicio como **ventanilla que nunca cierra**: a diferencia de todo lo escrito hasta N1 —que corría, terminaba, y volvía a esperar tu orden—, este proceso queda vivo, escuchando, indefinidamente (el proceso de N1.M5.T3, ahora con un propósito: atender).
- **Por qué:** existe porque N1 consumió ventanillas ajenas; ahora construye la propia / ahora porque los decoradores ya son legibles / habilita ser, por primera vez en la Academia, el lado servidor. **Coste de no enseñarlo:** sin esto no hay módulo — es literalmente cruzar la frontera que da identidad a N2.
- **Los tres niveles:** operativo — levanta el servicio y responde a una petición; ingenieril — explica por qué el proceso no termina y qué significa "escuchar un puerto" (conexión directa con N1.M5.T3-T4); arquitectónico — decide qué debe vivir en una ruta y qué debería vivir en una función auxiliar, para que el servicio siga siendo legible cuando tenga cien rutas, no tres.
- **Evidencia de dominio:** explica, para su propio servicio corriendo, el camino completo de una petición real (con curl o el navegador) hasta la respuesta — incluyendo qué proceso la atendió y qué le pidió al sistema operativo.
- **Práctica principal:** laboratorio de primer servicio + **primera semilla del hilo M4**: escribe una prueba automática mínima (`TestClient`) que verifique que su primer endpoint responde — antes de seguir añadiendo rutas. *(¿qué aprendo? — que un servicio se puede verificar sin abrir el navegador; ¿por qué existe? — porque comprobar a mano no escala más allá de dos rutas; ¿qué error evito? — confiar en "lo probé a mano una vez" como garantía permanente.)* Aquí **Bitácora hace su primera llamada real** al servicio del estudiante (el tutor la opera) y el servicio empieza a recordar lo que recibe con persistencia mínima en SQLite (reutilización directa de N1.M7 — nada nuevo que aprender aquí, solo un propósito nuevo: ahora los datos existen para que alguien más vuelva a encontrarlos).
- **Evaluación:** estándar.
- **Pregunta ingenieril:** tu servicio va a recibir peticiones mientras tú no estás mirando — ¿qué necesitas saber que está pasando cuando eso ocurra, y cómo lo sabrías sin estar delante?
- **Institución de la ingeniería:** el servidor web es la institución que **garantiza disponibilidad** — sigue atendiendo aunque nadie lo esté observando.
- **¿Qué rompe esta abstracción?:** ¿qué pasa cuando dos peticiones llegan en el mismo instante? *(La pregunta queda sembrada, sin resolver — M3 la recogerá con nombre: concurrencia.)*

**N2.M1.T3 · Contratos con Pydantic: prometer, no solo aceptar**
- **Objetivo:** define modelos Pydantic que validan datos de entrada y garantizan la forma de los datos de salida, distinguiendo validar de prometer.
- **Prerrequisitos:** T2; N1.M6.T3 (validar en la frontera, ahora desde el lado que la construye).
- **Competencias:** C-N2-01, C-N2-05.
- **Errores habituales:** validar solo lo que entra y despreocuparse de lo que sale ("mi código ya lo hace bien, ¿para qué prometerlo?"); modelos tan laxos que no protegen nada; confundir "type hints" decorativos con validación real.
- **Modelo mental:** el modelo Pydantic como **doble aduana**: inspecciona lo que entra (como en N1.M6.T3) Y certifica lo que sale — el servicio deja de confiar en su propio código para garantizar la forma de su respuesta.
- **Por qué:** existe porque N1 validó datos ajenos como consumidor; aquí el estudiante es quien debe ofrecer esa garantía a otros / ahora porque el servicio ya acepta peticiones reales / habilita el paso siguiente: diseñar la forma pública completa del contrato (T4). **Coste de no enseñarlo:** sin esto, "aceptar" y "prometer" seguirían siendo la misma cosa en la cabeza del estudiante — la distinción es la base de todo diseño de API serio.
- **Los tres niveles:** operativo — define modelos de entrada y salida con Pydantic; ingenieril — explica qué garantiza cada uno y qué NO garantiza (Pydantic valida forma, no lógica de negocio); arquitectónico — decide cuándo un modelo de salida debe diferir del modelo interno de datos (y por qué exponer la estructura interna tal cual es, casi siempre, un error de diseño).
- **Evidencia de dominio:** ante un modelo de datos interno dado, diseña el modelo de salida que expondría — y explica qué decidió ocultar y por qué.
- **Práctica principal:** laboratorio de modelos entrada/salida + experimento: enviar datos deliberadamente malformados y observar qué rechaza Pydantic automáticamente vs. qué debe validar el propio código.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿debería tu API devolver exactamente tu modelo de datos interno, o algo diseñado deliberadamente para quien lo consume — y qué pierdes en cada elección?
- **Evolución de la idea:** la validación de esquemas con tipos explícitos —en vez de comentarios o documentación que nadie lee— es una idea que atravesó lenguajes: de los contratos de Eiffel en los 80 a TypeScript, pasando por Pydantic. La promesa siempre fue la misma: que el compilador (o la librería) sea quien vigile, no la memoria del programador.
- **Idea universal:** un sistema que valida su propia salida confía menos en sí mismo — y por eso es más confiable.

**N2.M1.T4 · Diseño de una API REST: el contrato que otros consumen a ciegas**
- **Objetivo:** diseña una API REST completa (recursos, verbos HTTP, códigos de estado coherentes) como un contrato público, y experimenta el coste real de romperlo sin avisar.
- **Prerrequisitos:** T2–T3; N1.M6.T2 (GET vs. POST, ya sembrado).
- **Competencias:** C-N2-01, C-N2-05.
- **Errores habituales:** verbos usados por costumbre sin pensar en su significado (POST para todo); códigos de estado genéricos (200 para todo, hasta los errores); cambiar la forma de una respuesta sin considerar quién ya la consume.
- **Modelo mental:** la API REST como **mapa de recursos, no de acciones**: no se diseñan verbos sueltos ("crear_usuario"), se diseñan sustantivos con verbos HTTP estándar aplicados ("POST /usuarios") — un vocabulario compartido por toda la industria, no una convención personal.
- **Por qué:** existe porque un servicio sin diseño consistente es difícil de consumir y peor de mantener / ahora porque ya hay contratos definidos (T3) que necesitan una forma pública coherente / habilita el momento central del módulo: sentir qué significa que otros dependan de esa forma. **Coste de no enseñarlo:** un ingeniero sin esto diseña APIs que cada equipo debe aprender de cero, en vez de reconocer un patrón universal — carencia visible en la primera entrevista técnica.
- **Los tres niveles:** operativo — diseña rutas con recursos, verbos y códigos de estado correctos; ingenieril — explica qué comunica cada código de estado y por qué existe esa convención (no es capricho: es un vocabulario que cualquier cliente HTTP del mundo entiende); arquitectónico — decide qué endpoints exponer, cuáles ocultar, y **cómo cambiar un contrato sin romper a quien ya depende de él** (versionado, campos opcionales, deprecación gradual).
- **Evidencia de dominio (el Momento Fundacional de N2):** **Bitácora** lleva sesiones enteras dependiendo del servicio del estudiante y guardando registros bajo su contrato vigente. El estudiante recibe un cambio "razonable" que aplicar — renombrar un campo, ajustar una forma de respuesta — y al hacerlo **observa en vivo que Bitácora deja de funcionar**, con datos reales de sesiones pasadas que ya no encajan en el nuevo contrato. Debe diagnosticar qué rompió y por qué, y proponer cómo debería haberlo hecho (versionar, mantener compatibilidad, avisar) — el instante exacto en que deja de pensar "arreglé mi código" y empieza a pensar "le rompí algo a alguien".
- **Práctica principal:** *(las tres preguntas)* ¿qué aprendo a hacer? — diseñar una API consistente con el estándar REST; ¿por qué existe esta práctica? — porque el software real vive del lado de quien no puede permitirse leer tu código para saber qué cambiaste; ¿qué error evito? — cambiar un contrato público asumiendo que "total, funciona en mi prueba".
- **Evaluación:** estándar + veredicto explícito sobre el diagnóstico del momento irreversible.
- **Pregunta ingenieril:** si mañana necesitas cambiar la forma de una respuesta que ya usan otros, ¿qué opciones tienes además de "cambiarla y avisar por si acaso" — y qué cuesta cada una?
- **Evolución de la idea:** REST no nació como estándar impuesto: Roy Fielding lo describió en el año 2000 observando qué hacía que la web *ya* escalara — recursos direccionables, operaciones uniformes, sin estado en el servidor. No se inventó una moda; se **nombró** un patrón que ya funcionaba.
- **Gran abstracción:** el recurso — el mundo se modela como cosas direccionables (URLs) sobre las que se aplican verbos uniformes, no como funciones remotas con nombres arbitrarios.
- **¿Qué rompe esta abstracción?:** ¿qué pasa cuando una operación no encaja limpiamente en un verbo HTTP (una acción compleja, un proceso de varios pasos)? *(Semilla para arquitecturas más allá de REST puro — RPC, GraphQL, colas de eventos — en niveles posteriores.)*
- **Idea universal:** diseña como si ya tuvieras usuarios, aunque todavía no los tengas — porque el día que los tengas, ya será tarde para empezar a diseñar bien.

**N2.M1.T5 · Errores como parte del contrato**
- **Objetivo:** maneja errores HTTP con `HTTPException` y códigos de estado coherentes, tratando el modo de fallar como parte de la promesa del servicio, no como su ausencia.
- **Prerrequisitos:** T4; N1.M1.T5 (excepciones); N1.M6.T4 (fallar bien).
- **Competencias:** C-N2-01.
- **Errores habituales:** devolver 200 con un mensaje de error dentro del cuerpo ("funcionó, pero no"); un único código de error genérico para todo; exponer detalles internos (trazas, rutas de archivo) en la respuesta de error.
- **Modelo mental:** el error del servicio como **la otra mitad del contrato**: un cliente bien diseñado necesita saber fallar con la misma claridad con la que necesita saber tener éxito — el código de estado ES el mensaje.
- **Por qué:** existe porque N1.M6.T4 enseñó a fallar bien como consumidor; aquí el estudiante debe ofrecer esa misma claridad como proveedor / ahora porque ya hay un contrato completo (T4) al que le falta su cara de fallo / habilita servicios que un tercero puede integrar sin adivinar. **Coste de no enseñarlo:** un servicio que "nunca falla explícitamente" traslada todo el diagnóstico a quien lo consume — la responsabilidad que N2 exige, incumplida.
- **Los tres niveles:** operativo — lanza `HTTPException` con el código y mensaje correctos; ingenieril — explica la taxonomía 4xx (culpa del cliente) vs. 5xx (culpa del servidor) y por qué esa distinción importa para quien depende del servicio; arquitectónico — decide qué información de un error es seguro exponer y cuál debe quedar solo en logs internos.
- **Evidencia de dominio:** dado un catálogo de fallos posibles de su servicio, asigna el código de estado correcto a cada uno y justifica los casos ambiguos. **Además — decir que no:** Bitácora (voz del tutor) solicita un cambio que suena razonable de su lado ("¿puedes aceptar el campo sin validarlo, así no tengo que arreglar mi formato?") pero que rompería la estabilidad que el contrato ya promete. El estudiante debe **rechazarlo con un error bien diseñado** (código correcto + mensaje que explica por qué) o proponer una alternativa que no comprometa el contrato — no ceder solo porque quien pide es quien depende de él.
- **Práctica principal:** laboratorio de catálogo de errores + batería de casos hostiles (eco de N1.M6.T3, ahora del lado servidor) + la negociación con Bitácora.
- **Evaluación:** estándar; el criterio para negarse con fundamento se evalúa explícitamente, no solo la implementación técnica.
- **Pregunta ingenieril:** ¿cuánta información sobre lo que salió mal deberías darle a quien consume tu API — y qué pasa si le das demasiado poca, o demasiada?
- **Idea universal:** un ingeniero responsable no solo protege lo que construye — también sabe negarse a construir lo que lo comprometería.

**N2.M1.T6 · El contrato se documenta a sí mismo**
- **Objetivo:** aprovecha la documentación automática de FastAPI (OpenAPI/Swagger) y la enriquece, entendiendo la documentación como propiedad viva del sistema, no como tarea aparte.
- **Prerrequisitos:** T1–T5.
- **Competencias:** C-N2-01, C-N2-04, C-N2-06.
- **Errores habituales:** ignorar la documentación autogenerada por creer que "ya escribió el código"; no enriquecerla con descripciones y ejemplos; tratarla como un adorno en vez de como el contrato mismo, legible por cualquiera.
- **Modelo mental:** el eco directo de N1.M4.T4 (el README que un tercero sigue sin preguntar) — aquí el "README" se genera solo, a partir de las promesas que el código ya hizo (T3, T4, T5); el trabajo del ingeniero es asegurarse de que esas promesas fueron declaradas con precisión, no escribirlas dos veces.
- **Por qué:** existe porque un contrato que nadie puede leer no sirve como contrato / ahora porque cierra el módulo mostrando que todo lo anterior —decoradores, modelos, verbos, errores— ya ES la documentación / habilita que un consumidor real (humano o programa) entienda el servicio sin preguntarle al autor. **Coste de no enseñarlo:** el estudiante seguiría viendo la documentación como carga extra, en vez de como consecuencia natural de haber diseñado bien.
- **Los tres niveles:** operativo — usa y enriquece `/docs` con descripciones y ejemplos; ingenieril — explica por qué la documentación generada del código nunca se desincroniza (a diferencia de un README aparte); arquitectónico — decide qué tanto detalle documentar para que sea útil sin ser ruido.
- **Evidencia de dominio:** una persona sin contexto (el tutor, rol Cliente) usa `/docs` para consumir el servicio del estudiante sin necesitar explicación adicional.
- **Práctica principal:** cierre del largo aliento B-M1 (documentación como verificación final del contrato).
- **Evaluación:** estándar + revisión B-M1.
- **Pregunta ingenieril:** si tu documentación y tu código pudieran desincronizarse, ¿qué perderías primero: la confianza de quien te consume, o la tuya propia la próxima vez que vuelvas a este proyecto?
- **Idea universal:** la mejor documentación no es la que se escribe aparte — es la que no puede mentir porque nace del propio contrato.

### Largo aliento del módulo: B-M1 — "El contrato que otros consumen a ciegas"

*Abierto en T2 (primer servicio vivo), atraviesa T3–T5, cierra en T6. Habilidad cognitiva: **diseño de contratos** — pensar en quién depende de una promesa antes de romperla, la primera de las cinco habilidades propias de N2 (una por módulo, siguiendo el patrón de N1).*

El estudiante construye un servicio pequeño con usuario imaginable (biblioteca personal, lista de tareas, o dominio propio — decisión suya, como en el capstone de N1). Desde T2, **Bitácora** lo integra y empieza a depender de él, llamando y guardando datos entre sesiones reales. A mitad de camino (T4), el estudiante recibe un cambio de requisito aparentemente inocente y lo aplica — **rompiendo en vivo a Bitácora**, con datos de sesiones pasadas que ya no encajan en el nuevo contrato: el Momento Fundacional de N2, formalizado como evento evaluable. En T5, Bitácora pide un cambio que el estudiante debe **rechazar con criterio**. Cierra con: **(a)** diagnóstico honesto de qué rompió y por qué, **(b)** propuesta de cómo debió hacerse (versionado, compatibilidad, aviso), **(c)** el servicio documentado (T6) de forma que un tercero lo consuma sin preguntar, **(d)** Bitácora integrada de nuevo, correctamente — momento que el tutor nombra explícitamente como logro profesional, no como simple alivio de "ya no está roto". Registro de intentos como evidencia [D] (patrón B6 de DOC-03).

### Cierre del módulo

**Institución de la ingeniería:** el servicio con contrato es la institución que **garantiza estabilidad de interfaz** — quienes dependen de él pueden construir sobre una promesa, no sobre una adivinanza.

**Así se usa esto en el mundo real.** Cada backend que el estudiante construirá desde hoy —y cada API que consumirá en N7 (modelos de lenguaje), N8 (herramientas de agentes)— es exactamente este patrón: decoradores que registran comportamiento, modelos que prometen forma, verbos que comunican intención, errores que informan en vez de esconder. Errores típicos del principiante profesional: endpoints con verbos incorrectos ("GET /borrarUsuario"), 200 para todo, contratos que cambian sin aviso y rompen a medio equipo. Las empresas pagan por esto porque una API mal diseñada es deuda técnica instantánea: **todo el que la consume hereda el error de diseño.**

**El supuesto que este módulo destruye:** que cambiar el propio código solo afecta a quien lo cambia.

**La limitación humana que compensa:** la tendencia a modificar contratos sin pensar en quien depende de ellos.

**Lo que deja de sorprender:** que otros dependan de sus decisiones.

**La garantía que el sistema adquiere al cerrar M1:** el sistema **garantiza contratos públicos estables** — quien depende de una promesa del servicio puede construir sobre ella sin adivinar.

**La idea que este módulo deja para siempre — la que sobrevive aunque en cinco años se olvide FastAPI por completo: cuando otras personas dependen de tu software, cada cambio deja de ser un acto privado y se convierte en una responsabilidad profesional.**

---

*M1 · El Servicio — ✅ **Aprobado oficialmente por el Director (2026-07-19)**, primer módulo oficial de SYL-N2.*

---

## 10. M2 · La Confianza — diseño completo del módulo

> **La gran pregunta de este módulo: ¿cómo confía un servicio en desconocidos?**

### Nota de diseño (para revisión del Director)

**La filosofía del módulo — confianza como garantía, no solo como bloqueo** *(ampliación del Director)*: este módulo no trata sobre impedir atacantes. Trata sobre **preservar las propiedades que hacen posible confiar en un sistema**: que cada usuario vea únicamente lo que le corresponde, que toda acción sea atribuible a quien la realizó, que nadie modifique lo que no le pertenece, que el sistema sostenga las promesas que ya hizo (M1). "Seguro" no significa "impenetrable" — significa "sus garantías se sostienen incluso frente a quien intenta romperlas". Esta idea debe quedar tan clara como la mecánica de autenticación misma.

**La historia que cuenta este módulo:** M1 dejó un servicio vivo, con contrato estable y hasta con una red de pruebas creciendo — pero deliberadamente abierto: cualquiera puede llamarlo, y el servicio no distingue a nadie. Bitácora lo consume sin identificarse. La tensión: un servicio que no sabe quién le habla no puede sostener ninguna garantía sobre quién ve qué, ni sobre quién hizo qué. La solución llega respondiendo, en orden, las tres preguntas que N1.M6.T2 sembró: **¿quién eres?** (T1, autenticación) → **¿cómo lo sé?** (T2, tokens verificables) → **¿qué puedes hacer?** (T3, autorización) — y ahí, justo cuando el estudiante cree que su servicio ya es seguro, llega el quiebre: alguien entra sin romper ninguna cerradura, porque el estudiante nunca cerró una puerta que no sabía que existía (T4, el Momento Fundacional de M2). El módulo cierra guardando los secretos que hacen posible todo lo anterior (T5) y haciendo que hasta Bitácora — a quien ya se confiaba — deba aprender a identificarse (T6).

**El Momento Fundacional de M2:** ocurre en T4, en el instante preciso en que el Tutor, en un rol nuevo — **Atacante** — accede a los datos de otro usuario sin robar ninguna contraseña ni romper ningún token: simplemente cambia un identificador en la URL de un endpoint que el estudiante ya protegió con autenticación (T1–T3). El servicio pregunta correctamente "¿quién eres?" — pero nunca pregunta "¿deberías ver ESTO?". Antes de este instante, el estudiante piensa "mi servicio está protegido"; después, piensa "protegido no es lo mismo que protegido en cada puerta". Es el momento exacto en que "confiar" deja de significar "verificar una vez, al entrar" y empieza a significar "verificar en cada petición, contra cada recurso".

*(Propuesta al registro vivo de modos del Tutor, 19.5.3: **rol Atacante** — quien intenta acceder, escalar o romper con la misma disciplina que un adversario real, nunca con trucos fuera del alcance del nivel. Extiende de forma natural el repertorio ya aprobado en DOC-03 §3.D.)*

**Bitácora en M2 (continuidad justificada):** hasta ahora Bitácora llamaba libremente. En T6, el nuevo modelo de confianza se aplica también a ella — un sistema real, no un capricho narrativo: si el servicio empieza a exigir identidad a todo el mundo, Bitácora, que ya dependía de él, **debe adaptarse o dejar de funcionar**. Su maintainer (voz del tutor, rol Cliente) necesita ahora una credencial de servicio. Este es exactamente el tipo de evolución que un sistema real atraviesa cuando su proveedor endurece la seguridad — no una repetición del chiste de M1, sino la misma entidad enfrentando una consecuencia nueva y genuina.

**Forma de pensar que construye cada tema:**

| Tema | Capacidad cognitiva |
|---|---|
| T1 ¿Quién eres? | **Identidad como afirmación que debe probarse**, no declararse |
| T2 ¿Cómo lo sé? | **Confiar en una firma, no en una promesa**: verificar sin volver a preguntar |
| T3 ¿Qué puedes hacer? | **Separar dos preguntas que se sienten como una**: identidad ≠ permiso |
| T4 Pensar como quien ataca | **Buscar la puerta que nadie cerró** — el Momento Fundacional |
| T5 Secretos que no se cuentan | **Lo que hace posible la confianza no puede ser público** |
| T6 Confiar entre sistemas | **La seguridad como propiedad del sistema completo**, no de un endpoint aislado |

**Carga cognitiva:** 6 temas / ~4 semanas; el pico (T4) llega después de que T1–T3 ya dieron al estudiante una falsa sensación de "terminado" — deliberado: la falsa seguridad es parte de la lección. **Prueba del coste de no enseñarlo:** sin T3 (autorización), el estudiante confundiría autenticación con seguridad completa — el error más común y más caro de la industria; sin T4, jamás pensaría como su propio adversario; sin T5, cada secreto acabaría en un commit de Git tarde o temprano.

**Omisión deliberada:** OAuth2 delegado (login con terceros) queda fuera del núcleo formal — el problema de fondo (confiar en una identidad verificada por firma) ya lo resuelve JWT propio; delegar en un proveedor externo es una variación de aplicación, no un concepto nuevo, y se ofrece como puerta Beyond the Curriculum (DOC-03 C3) al cierre. Criptografía de las firmas (RSA/HMAC en detalle matemático) tampoco se profundiza — se usa como servicio de librería, con su porqué conceptual, no se implementa desde cero (a diferencia de N3, donde si las matemáticas lo ameritan, podría revisitarse). **Limitación de tráfico (rate limiting)** — pregunta hermana de T4 (¿qué pasa cuando alguien, malicioso o descuidado, satura el servicio de peticiones?) — no amerita tema propio a esta escala (pertenece de lleno a N9), pero se menciona explícitamente al cierre de T4 como puerta Beyond the Curriculum: la misma disciplina de "pensar como quien ataca" se extiende, sin profundizar aquí, a "¿y quién ataca no robando datos, sino agotando el servicio?".

### Fichas pedagógicas

**N2.M2.T1 · ¿Quién eres? — Identidad y autenticación**
- **Objetivo:** implementa registro y login con contraseñas seguras (hash, nunca texto plano) y emite una prueba de identidad verificable.
- **Prerrequisitos:** N1.M6.T2 (la estructura de la confianza: quién eres/cómo lo sé/qué puedes); M1 completo (el servicio ya existe).
- **Competencias:** C-N2-01, C-N2-05.
- **Errores habituales:** guardar contraseñas en texto plano o con hash débil; comparar contraseñas con `==` en vez de con verificación de hash; creer que "pedir usuario y contraseña" ya es "autenticar".
- **Modelo mental:** la contraseña como **secreto que ni siquiera el propio servicio debe conocer** — solo guarda una huella (hash) que permite *verificar* sin *recordar*.
- **Por qué:** existe porque M1 dejó el servicio abierto a cualquiera / ahora porque ya hay un servicio real que merece la pena proteger / habilita distinguir, por primera vez, a un llamante de otro. **Coste de no enseñarlo:** un ingeniero que guarda contraseñas en claro no es un principiante torpe — es una noticia de filtración de datos esperando a ocurrir.
- **Los tres niveles:** operativo — implementa registro/login con hash de contraseñas; ingenieril — explica por qué un hash es unidireccional y por qué eso es exactamente lo que se necesita; arquitectónico — decide qué mínimo de información de identidad necesita realmente su sistema (¿email? ¿nombre? — el principio de mínima recolección).
- **Evidencia de dominio:** explica, sin mirar el código, por qué su servicio podría sufrir una filtración de base de datos completa y aun así las contraseñas seguirían siendo seguras.
- **Práctica principal:** laboratorio de registro/login con hash real (bcrypt/passlib). *(¿qué aprendo? — proteger un secreto sin necesitar conocerlo; ¿por qué existe? — porque las bases de datos se filtran, tarde o temprano, en algún lugar del mundo; ¿qué error evito? — el titular de noticias más repetido de la industria: "contraseñas expuestas en texto plano".)*
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si tu base de datos completa se filtrara mañana, ¿qué sabría exactamente quien la robó — y qué diseño de hoy decide esa respuesta?
- **Evolución de la idea:** el hashing de contraseñas nació de una lección aprendida por fracasos reales y masivos — décadas de filtraciones donde empresas enteras perdieron la confianza de sus usuarios por guardar lo que nunca debieron poder leer.
- **Idea universal:** protege lo que no necesitas conocer — verificar no exige recordar.

**N2.M2.T2 · ¿Cómo lo sé? — Tokens verificables (JWT)**
- **Objetivo:** emite y verifica JWT, explicando su estructura (header/payload/firma) y por qué deben expirar.
- **Prerrequisitos:** T1.
- **Competencias:** C-N2-01.
- **Errores habituales:** tratar el token como si fuera secreto en sí mismo (el payload es legible por cualquiera, solo la firma protege); tokens sin expiración; guardar información sensible dentro del payload.
- **Modelo mental:** el JWT como **carné de identidad sellado**: cualquiera puede leerlo, pero solo quien tiene el sello (la clave de firma) pudo haberlo emitido válidamente — igual que N1.M7.T1 enseñó que la clave no es el dato: es la garantía sobre el dato.
- **Por qué:** existe porque pedir contraseña en cada petición sería absurdo y peligroso / ahora porque ya existe una identidad verificada en T1 / habilita que el servicio confíe en una firma sin volver a preguntar en cada llamada. **Coste de no enseñarlo:** sin esto, cada endpoint tendría que reautenticar con contraseña — inviable y aún más inseguro.
- **Los tres niveles:** operativo — emite y valida JWT con expiración; ingenieril — explica qué garantiza la firma y qué NO garantiza (el payload no es secreto); arquitectónico — decide cuánto debe durar un token y qué pasa cuando expira mientras el usuario trabaja (refresco, re-login).
- **Evidencia de dominio:** modifica manualmente el payload de un JWT propio (sin la clave) y demuestra que el servicio lo rechaza — y explica por qué eso, y no el contenido del payload, es lo que lo hace confiable.
- **Práctica principal:** laboratorio de emisión/verificación + experimento de manipulación de token.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si un token robado sigue siendo válido durante horas, ¿qué le estás regalando a quien lo robó — y cuánto estarías dispuesto a incomodar al usuario legítimo para reducir ese regalo?
- **Gran abstracción:** la firma criptográfica — la confianza se traslada de "conozco a quien habla" a "puedo verificar que alguien autorizado lo certificó", sin tener que preguntar dos veces.
- **¿Qué rompe esta abstracción?:** ¿qué pasa si necesitas invalidar un token antes de que expire (el usuario cambió su contraseña, fue comprometido)? *(La revocación es más difícil de lo que parece — semilla para sistemas distribuidos, N9.)*
- **Idea universal:** confía en lo que puedes verificar matemáticamente, no en lo que alguien te asegura que es cierto.

**N2.M2.T3 · ¿Qué puedes hacer? — Autorización y permisos**
- **Objetivo:** distingue autenticación de autorización, e implementa control de acceso por roles/propiedad sobre los recursos.
- **Prerrequisitos:** T1–T2.
- **Competencias:** C-N2-01, C-N2-05.
- **Errores habituales:** el error central del módulo — creer que "el endpoint pide token" significa "el endpoint está protegido"; verificar identidad pero no verificar si ESA identidad puede tocar ESE recurso específico; roles copiados sin pensar el modelo de permisos real.
- **Modelo mental:** dos preguntas que se sienten como una y no lo son: **"¿sé quién eres?"** (autenticación, ya resuelta en T1–T2) y **"¿puedes hacer ESTO, sobre ESTE recurso?"** (autorización, todavía sin resolver). Un sistema puede responder perfectamente a la primera y fallar por completo en la segunda.
- **Por qué:** existe porque T1–T2 solo resolvieron media pregunta de confianza / ahora porque el servicio ya distingue usuarios y necesita distinguir sus permisos / habilita el terreno exacto donde el módulo va a quebrarse en T4 — deliberadamente, sin resolverlo del todo aquí. **Coste de no enseñarlo:** es, por evidencia de la industria (OWASP), la vulnerabilidad más común en servicios reales — "control de acceso roto" encabeza el ranking desde hace años.
- **Los tres niveles:** operativo — implementa verificación de permisos con dependencias de FastAPI; ingenieril — articula con precisión la diferencia autenticación/autorización y por qué se confunden tan a menudo; arquitectónico — decide el modelo de permisos (roles simples vs. propiedad por recurso) apropiado para su dominio.
- **Evidencia de dominio:** explica, ANTES de T4, si su propio servicio verifica que un usuario solo accede a SUS recursos — la mayoría, honestamente, no lo ha verificado todavía. *(Predicción comprometida antes del quiebre — DOC-03 P8.)*
- **Práctica principal:** implementación de roles/propiedad + auto-auditoría honesta.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** tu endpoint ya sabe quién eres — ¿sabe también, para cada recurso específico que pides, si TÚ deberías verlo?
- **Idea universal:** verificar identidad responde "quién eres"; verificar permiso responde "qué puedes tocar" — confundirlas dos es la falla de seguridad más común y más cara del oficio. *(Nota de diseño: la identidad verificada de T1–T2 también hace posible una tercera garantía, más allá del bloqueo — que toda acción quede atribuida a quien la realizó. Se menciona aquí como propiedad del sistema, sin convertirse en tema propio: la auditoría/logging formal pertenece a M9 en niveles de sistemas distribuidos.)*

**N2.M2.T4 · Pensar como quien ataca — el Momento Fundacional de M2**
- **Objetivo:** aplica el pensamiento adversarial (OWASP Top 10 conceptual: control de acceso roto, fallos de autenticación, inyección) para encontrar y corregir vulnerabilidades reales en su propio servicio.
- **Prerrequisitos:** T1–T3.
- **Competencias:** C-N2-01, C-N2-05.
- **Errores habituales:** revisar el propio código buscando "si funciona", no "cómo lo rompería alguien"; confiar en que "nadie pensaría en probar eso"; corregir el síntoma puntual sin revisar si el mismo patrón se repite en otros endpoints.
- **Modelo mental:** el atacante como **quien no sigue tu camino feliz** — no usa la aplicación como tú esperas que la usen: cambia valores, prueba límites, combina peticiones de formas que nunca probaste.
- **Por qué:** existe porque T1–T3 dieron al estudiante la sensación de "terminado" sin haberlo estado / ahora porque esa falsa sensación de seguridad ES el problema real de la industria / habilita el pensamiento adversarial como hábito permanente, no como módulo que se termina y se olvida. **Coste de no enseñarlo:** sin este quiebre, el estudiante seguiría creyendo que "pedir autenticación" es sinónimo de "estar protegido" — la creencia que produce la mayoría de las filtraciones reales del mundo.
- **Los tres niveles:** operativo — encuentra y corrige la vulnerabilidad concreta demostrada; ingenieril — explica el patrón general (no el bug puntual) y dónde más podría repetirse en su sistema; arquitectónico — decide qué disciplina de revisión adoptará para que este tipo de fallo no vuelva a colarse sin ser visto.
- **Evidencia de dominio (el Momento Fundacional de M2):** el Tutor, en **rol Atacante**, accede a datos de otro usuario cambiando un identificador en la URL de un endpoint que el estudiante ya protegió con autenticación — sin robar contraseña ni token. El servicio preguntó correctamente "¿quién eres?" y jamás preguntó "¿deberías ver esto?". El estudiante debe diagnosticar el patrón (no solo parchear el caso concreto), corregirlo, y verificar si el mismo hueco existe en otros endpoints que construyó.
- **Práctica principal:** *(las tres preguntas)* ¿qué aprendo a hacer? — auditar mi propio sistema como si fuera ajeno y hostil; ¿por qué existe en la ingeniería real? — porque el 90% de los atacantes no rompen criptografía: encuentran la puerta que nadie cerró; ¿qué error evito? — confundir "pedí autenticación" con "estoy protegido".
- **Evaluación:** estándar + veredicto explícito sobre el diagnóstico del patrón (no solo la corrección puntual).
- **Pregunta ingenieril:** si alguien tuviera diez minutos y solo pudiera cambiar valores en tus URLs — sin ninguna otra herramienta —, ¿qué encontraría?
- **Institución de la ingeniería:** la disciplina de seguridad (el pensamiento OWASP) es la institución que **garantiza que la confianza se verifique siempre, en cada puerta, no se asuma nunca.**
- **¿Qué rompe esta abstracción?:** ¿qué pasa cuando el propio código de verificación tiene un error (una comparación mal escrita, un caso borde olvidado)? *(La seguridad nunca es "completa"; es continuamente auditada — semilla para el hilo M4 aplicado a seguridad.)*
- **Idea universal:** la mayoría de los atacantes no rompen cerraduras — encuentran la puerta que nadie pensó en cerrar.
- **Beyond the Curriculum:** no todo ataque busca robar datos — algunos buscan agotar el servicio a fuerza de peticiones (legítimas o no). La limitación de tráfico (rate limiting) responde exactamente a esa pregunta hermana; aquí solo se señala — su profundidad pertenece a N9, cuando la escala real lo exija.

**N2.M2.T5 · Secretos que no se cuentan**
- **Objetivo:** gestiona secretos (claves de firma, credenciales) fuera del código fuente, con variables de entorno, y entiende la rotación como práctica necesaria.
- **Prerrequisitos:** T1–T2; N1.M6.T2 (credenciales fuera del código, ya sembrado).
- **Competencias:** C-N2-01.
- **Errores habituales:** la clave de firma de JWT hardcodeada "solo por ahora"; secretos en el historial de Git aunque se borren después (N1.M4: la historia no olvida — y aquí el coste de esa persistencia se vuelve doloroso); un único secreto compartido por todo el sistema, sin rotación posible.
- **Modelo mental:** el secreto como **lo único que hace real toda la confianza construida hasta ahora**: si la clave de firma se filtra, cualquiera puede fabricar tokens válidos — todo T1–T4 se derrumba desde un solo archivo mal guardado.
- **Por qué:** existe porque nada de lo construido en T1–T4 protege nada si su fundamento (la clave) es público / ahora porque el estudiante ya siente el peso de lo que está protegiendo / habilita que el servicio (y su historia de Git) sean seguros de compartir, incluso en público. **Coste de no enseñarlo:** un secreto en un commit público no se puede "deshacer" — N1.M4 ya enseñó que la historia de Git es permanente; aquí ese hecho se vuelve una amenaza real, no una curiosidad.
- **Los tres niveles:** operativo — usa variables de entorno para todo secreto; ingenieril — explica por qué un secreto en el código es un secreto ya filtrado, tenga o no repositorio público; arquitectónico — diseña una estrategia mínima de rotación (qué pasaría si este secreto se filtrara hoy, y qué tan rápido podría cambiarlo).
- **Evidencia de dominio:** audita su propio repositorio (incluida su historia, eco de N1: arqueología del software) buscando secretos filtrados, y explica qué haría si encontrara uno.
- **Práctica principal:** laboratorio de migración de secretos hardcodeados a variables de entorno + auditoría de historia propia.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si tu clave de firma se filtrara hoy, ¿cuánto tiempo tardarías en darte cuenta — y cuánto en invalidar todo lo que dependía de ella?
- **Idea universal:** toda la seguridad que construyes descansa, al final, en un único secreto bien guardado — trátalo con el peso que eso merece.

**N2.M2.T6 · Confiar entre sistemas — Bitácora se identifica**
- **Objetivo:** implementa un mecanismo de identidad para consumidores no humanos (API keys o credenciales de servicio), y entiende que la confianza entre sistemas exige el mismo rigor que la confianza con personas.
- **Prerrequisitos:** T1–T5.
- **Competencias:** C-N2-01, C-N2-05.
- **Errores habituales:** asumir que "es solo otro programa, no un usuario" y relajar la seguridad; una única clave compartida sin capacidad de revocarla para un solo consumidor; no distinguir permisos entre distintos sistemas que llaman.
- **Modelo mental:** un sistema que llama a otro sistema **es, para efectos de confianza, exactamente lo mismo que un usuario** — necesita identidad, verificación y permisos propios, no un pase libre "porque ya lo conocemos".
- **Por qué:** existe porque Bitácora ha llamado libremente desde M1 / ahora porque el servicio ya no confía en nadie sin verificar / habilita cerrar el módulo con el sistema completo, no solo con usuarios humanos — y demuestra que la disciplina de T1–T5 no fue solo para personas.
- **Los tres niveles:** operativo — emite y valida una credencial de servicio para Bitácora; ingenieril — explica por qué "es un programa de confianza" no es una categoría de seguridad válida; arquitectónico — decide qué permisos mínimos necesita realmente un consumidor automatizado (principio de mínimo privilegio).
- **Evidencia de dominio:** Bitácora (operada por el tutor) intenta llamar sin credencial tras el cambio — y es rechazada correctamente; luego se integra con su nueva credencial de servicio.
- **Práctica principal:** cierre del largo aliento B-M2 (auditoría de seguridad propia) + reintegración de Bitácora bajo el nuevo modelo de confianza.
- **Evaluación:** estándar + revisión B-M2.
- **Pregunta ingenieril:** si mañana confías en un nuevo sistema externo, ¿le darías la misma cantidad de acceso que a ti mismo — y si no, qué te dice eso sobre cuánto acceso le diste hasta ahora a Bitácora?
- **Idea universal:** la confianza no se gana por familiaridad — un sistema conocido de toda la vida necesita exactamente la misma verificación que uno desconocido.

### Largo aliento del módulo: B-M2 — "La auditoría propia"

*Abierto en T3 (cuando la falsa sensación de seguridad ya existe), atraviesa T4–T5, cierra en T6. Habilidad cognitiva: **auditoría de seguridad** — examinar el propio sistema con la misma disciplina sistemática con la que examinaría un sistema ajeno, la segunda de las cinco habilidades propias de N2.*

El estudiante, tras T3, cree que su servicio de M1 (con la capa de confianza recién construida) está protegido. En T4 descubre que no lo estaba — y a partir de ahí, debe **auditar sistemáticamente cada endpoint** que construyó (no solo el que falló en la demostración), aplicando la pregunta de T3 a todos ("¿verifica identidad Y permiso, sobre este recurso específico?"). Produce un **informe de auditoría corto** (A7): qué encontró, qué patrón lo causaba, cómo lo corrigió, y qué disciplina de revisión adoptará para prevenirlo. Cierra en T6 reintegrando a Bitácora bajo el modelo de confianza completo. Registro de intentos como evidencia [D].

### Cierre del módulo

**Así se usa esto en el mundo real.** Cada backend real que el estudiante construya desde ahora — y cada sistema de agentes de N8, donde un agente actúa "en nombre de" un usuario — vive de esta disciplina exacta: identidad verificable, permisos explícitos por recurso, secretos fuera del código. Errores típicos del principiante profesional: proteger el login pero no cada endpoint individual (el error de T4, el más común de la industria según OWASP), tokens eternos, claves hardcodeadas "solo mientras desarrollo". Las empresas pagan carísimo por esto porque una sola puerta sin cerrar vuelve irrelevantes las cien que sí se cerraron bien.

**El supuesto que este módulo destruye:** que identificar a un usuario basta para confiar en él.

**La limitación humana que compensa:** la tendencia a confiar demasiado — a asumir que quien ya pasó una puerta no necesita que se le verifique en la siguiente.

**Lo que deja de sorprender:** que existan usuarios maliciosos o accesos indebidos.

**La garantía que el sistema adquiere al cerrar M2:** el sistema **garantiza que cada acción respeta las autorizaciones definidas** — no solo que sabe quién habla, sino que sostiene, en cada petición, qué le corresponde a cada quien.

**La idea que este módulo deja para siempre — la que sobrevive aunque en cinco años se olvide JWT por completo: un sistema seguro no es el que nadie puede entrar sin permiso — es el que verifica el permiso en cada puerta, no solo en la de entrada.** *(Principio general que esta frase encarna: la confianza no se concede una sola vez — debe comprobarse allí donde una decisión puede afectar a otro.)*

---

*M2 · La Confianza — ✅ **Aprobado oficialmente por el Director (2026-07-19)**, segundo módulo oficial de SYL-N2.*

---

## 11. M3 · Muchos a la Vez — diseño completo del módulo

> **La gran pregunta de este módulo: ¿qué se rompe cuando "uno" se convierte en "muchos"?**

### Nota de diseño (para revisión del Director)

**El objetivo real de este módulo — antes de cualquier tecnología** *(encuadre explícito del Director)*: M3 no enseña concurrencia como tema técnico. Enseña que **el mundo real no espera su turno**. Desde N0, todo lo que el estudiante construyó asumía —sin decirlo nunca— que las cosas ocurren una detrás de otra: una línea, luego la siguiente; una petición, luego la respuesta; un usuario, luego el siguiente. Ese supuesto secuencial es exactamente lo que este módulo rompe. No es un módulo más difícil por su tecnología (async, PostgreSQL, Redis son, cada uno, más simples que lo que N1 ya domina): es el más difícil porque exige **abandonar un modelo mental sostenido durante tres niveles completos**.

**La historia que cuenta este módulo:** M1 construyó un servicio; M2 lo hizo confiable frente a desconocidos. Pero ambos, hasta ahora, se probaron con **un** llamante a la vez — Bitácora, sola, una petición detrás de otra. La tensión: Bitácora tuvo éxito. Ahora tiene sus propios usuarios, y les habla al servicio del estudiante **muchas veces, al mismo tiempo**, no en fila. El primer síntoma es de rendimiento (T1, el servicio se congela esperando): la solución es dejar de bloquear mientras se espera. Pero resolver eso solo *permite* que muchas cosas ocurran a la vez — y ahí aparece el problema real: cuando dos peticiones tocan el mismo dato al mismo tiempo, el resultado puede ser **incorrecto**, no solo lento (T2 introduce el servidor real donde esto puede observarse; T3 es donde se observa y quiebra: el Momento Fundacional). La respuesta llega con el aislamiento de transacciones (T4) — y el módulo cierra con la estrategia que evita repetir trabajo sin sacrificar esa consistencia recién ganada (T5, caché).

**El Momento Fundacional de M3:** ocurre en T3, en el instante preciso en que el estudiante observa el **resultado final incorrecto** de un experimento que él mismo diseñó: Bitácora (ahora con muchos usuarios propios) hace decenas de peticiones simultáneas que decrementan un mismo contador compartido (p. ej., el stock de un recurso). Cada petición individual, leída por separado, está perfectamente bien escrita — la misma lógica que llevaría escribiendo desde N1. Y aun así, **al final falta stock por descontar**: el número no cuadra. No hubo ningún error de sintaxis, ningún traceback, ninguna excepción — el código "funcionó" en cada llamada individual, y el sistema completo mintió. Antes de este instante, el estudiante piensa "si mi código no lanza errores, es correcto"; después, piensa "correcto en aislamiento no es correcto bajo concurrencia". Es el momento exacto en que el modelo mental secuencial de N0–N2.M2 deja de bastar.

**Bitácora en M3 (evolución justificada — crece, y ese crecimiento es lo que rompe algo):** en M1, Bitácora nace y llama sola; en M2, aprende a identificarse. En M3, Bitácora **tiene éxito** — consigue sus propios usuarios, y ahora hace, en nombre de ellos, muchas llamadas simultáneas al servicio del estudiante. El crecimiento de Bitácora no es un capricho narrativo: es exactamente cómo un sistema real revela sus condiciones de carrera — no en el desarrollo con un solo usuario de prueba, sino cuando alguien más empieza a depender de él a escala.

**Forma de pensar que construye cada tema:**

| Tema | Capacidad cognitiva |
|---|---|
| T1 De uno a muchos (async) | **Esperar sin bloquear**: ceder el turno en vez de quedarse plantado |
| T2 La notaría se hace servidor | **La memoria compartida deja de ser privada** — muchos la tocan a la vez |
| T3 Cuando dos quieren lo mismo | **Abandonar el supuesto secuencial** — el Momento Fundacional |
| T4 Aislamiento | **Diseñar "uno a la vez" donde importa**, sin renunciar a "muchos a la vez" donde no |
| T5 Invertir para no repetir | **Pagar una vez, con fecha de caducidad** — cachear sabiendo cuándo mentirá |

**Carga cognitiva:** 5 temas / ~4 semanas; el pico es T3, deliberadamente, y no se amortigua tanto como en M1/M2 — el propio Director señaló que este módulo es el más exigente de N2, y la dificultad debe sentirse (sin ser artificial: nace de abandonar un modelo mental, no de sintaxis oscura). **Prueba del coste de no enseñarlo:** sin T1, cada servicio con más de un usuario simultáneo se arrastraría; sin T3–T4, el estudiante escribiría sistemas que "funcionan en su prueba" y corrompen datos en producción — el tipo de bug más caro y más difícil de reproducir en la industria real.

**Omisión deliberada:** paralelismo real con hilos/procesos (GIL, multiprocessing) — async ya resuelve el problema de E/S concurrente que motiva este módulo; el paralelismo de cómputo pesado es un problema distinto, para N9/N10. Bases de datos distribuidas y consenso (Raft, etc.) quedan fuera — la pregunta "¿qué rompe esta abstracción?" de T4 la siembra, sin resolverla; N9 la recogerá.

### Fichas pedagógicas

**N2.M3.T1 · De uno a muchos: async/await**
- **Objetivo:** escribe rutas y funciones asíncronas con `async`/`await`, entendiendo que esperar un recurso lento no debería detener todo lo demás.
- **Prerrequisitos:** N1.M5.T3 (procesos); M1.T2 (el servicio que permanece vivo, ahora debe atender a más de uno).
- **Competencias:** C-N2-01.
- **Errores habituales:** poner `async def` sin ningún `await` adentro (cosmético, no cambia nada); bloquear con una operación síncrona pesada dentro de una función async (anula todo el beneficio); creer que async significa "más rápido" en vez de "no bloqueante".
- **Modelo mental:** un solo cocinero que atiende varias mesas **cediendo el turno** mientras algo hierve — no contrata más cocineros (eso sería paralelismo real); simplemente no se queda plantado mirando la olla.
- **Por qué:** existe porque Bitácora, al crecer, empieza a hacer varias peticiones que se solapan / ahora porque el servicio de M1–M2 ya soporta carga real por primera vez / habilita que muchas peticiones avancen sin que una lenta congele a todas las demás. **Coste de no enseñarlo:** un servicio síncrono con una sola petición lenta (una consulta, una llamada externa) deja esperando a todos los demás usuarios — la primera queja de rendimiento de cualquier backend real.
- **Los tres niveles:** operativo — escribe rutas async con `await` en las operaciones de E/S; ingenieril — explica qué hace `await` realmente (ceder el control, no crear un hilo) y por qué una operación bloqueante dentro rompe la promesa; arquitectónico — decide qué partes de su sistema se benefician de ser asíncronas y cuáles no (no todo lo necesita).
- **Evidencia de dominio:** mide (experimento, A6) el tiempo total de atender 20 peticiones con una versión síncrona vs. asíncrona cuando cada una espera un recurso lento, y explica la diferencia con el modelo del cocinero.
- **Práctica principal:** laboratorio de medición antes/después + refactor de una ruta síncrona a asíncrona.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si "esperar sin bloquear" es gratis en apariencia, ¿qué estás pagando realmente a cambio — y qué pasaría si TODO en tu sistema tuviera que ser async?
- **Evolución de la idea:** la programación asíncrona no es una moda de los frameworks modernos: Node.js la popularizó hace más de una década resolviendo exactamente este problema (un servidor, miles de conexiones lentas), y Python la adoptó después con `asyncio` — la misma idea, con años de diferencia, porque el problema —E/S lenta bloqueando todo lo demás— es el mismo en cualquier lenguaje.
- **Idea universal:** no bloquees lo que no necesita esperar contigo.

**N2.M3.T2 · La notaría se convierte en servidor: PostgreSQL**
- **Objetivo:** migra la persistencia del servicio de SQLite a PostgreSQL como servidor real, entendiendo la diferencia entre una base de datos embebida y una que atiende a muchos clientes a la vez.
- **Prerrequisitos:** N1.M7 completo (el modelo relacional, ya dominado); T1.
- **Competencias:** C-N2-01.
- **Errores habituales:** tratar la conexión a PostgreSQL como si fuera abrir un archivo (sin pool de conexiones); no manejar el caso de que el servidor de base de datos, al ser remoto, puede no responder; creer que "ya sé SQL" significa "ya sé operar una base de datos en producción".
- **Modelo mental:** la notaría de N1.M7.T1 —que vivía en un único archivo, abierta por un único programa— **se muda a un edificio propio, con muchas ventanillas abiertas a la vez**, atendiendo a cualquier proceso que la contacte por red — el mismo servicio de N1.M6 aplicado a los propios datos.
- **Por qué:** existe porque SQLite fue un buen punto de partida en M1, pero no soporta escritura concurrente real / ahora porque T1 ya prepara al servicio para atender a muchos a la vez / habilita el escenario donde el Momento Fundacional de T3 puede siquiera ocurrir. **Coste de no enseñarlo:** un servicio real con SQLite se corrompe o se bloquea en cuanto hay más de un escritor simultáneo — inservible en producción desde el primer usuario concurrente.
- **Los tres niveles:** operativo — conecta el servicio a PostgreSQL con un pool de conexiones; ingenieril — explica qué gana (concurrencia real, robustez ante fallos) y qué pierde (una dependencia externa que puede no estar disponible) frente a SQLite; arquitectónico — decide qué pasa con su servicio si la base de datos no responde (¿todo el servicio cae, o se degrada?).
- **Evidencia de dominio:** migra su servicio de M1–M2 de SQLite a PostgreSQL sin perder ninguna funcionalidad, y explica qué tuvo que cambiar y por qué.
- **Práctica principal:** laboratorio de migración real.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ahora que tu notaría de datos vive en otra máquina, ¿qué nuevas formas de fallo aparecieron que no existían cuando era solo un archivo tuyo?
- **Institución de la ingeniería:** el servidor de base de datos es la institución que **garantiza consistencia compartida** — muchos clientes, una sola verdad.
- **Idea universal:** cuando el dato deja de ser tuyo en exclusiva, la notaría que lo custodia también debe dejar de ser tuya en exclusiva.

**N2.M3.T3 · Cuando dos quieren lo mismo a la vez: condiciones de carrera — el Momento Fundacional de M3**
- **Objetivo:** provoca, observa y diagnostica una condición de carrera real (lost update), entendiendo por qué "leer, calcular, escribir" deja de ser una operación cuando hay muchos a la vez.
- **Prerrequisitos:** T1–T2.
- **Competencias:** C-N2-01, C-N2-05.
- **Errores habituales:** confiar en que "probé con una petición y funcionó" garantiza algo sobre muchas peticiones simultáneas; no distinguir "mi código no tiene bugs" de "mi sistema es correcto bajo concurrencia" — son afirmaciones distintas; intentar arreglarlo añadiendo `sleep()` en vez de entender el problema real.
- **Modelo mental:** dos personas mirando el mismo pizarrón, cada una hace su cuenta por separado (leer el número, calcular el nuevo valor) y escribe su resultado — **la última en escribir borra, sin saberlo, el trabajo de la otra**. Ninguna hizo nada mal; el problema es que ninguna sabía que la otra existía.
- **Por qué:** existe porque T1–T2 hicieron posible que muchas peticiones toquen el mismo dato a la vez, sin que nada impida que se pisen / ahora porque Bitácora, al crecer, genera exactamente esa situación de forma natural / habilita el resto del módulo: sin sentir el problema, T4 (aislamiento) sería solo una definición de manual. **Coste de no enseñarlo:** es el tipo de bug más caro de la industria — no falla en desarrollo, no lanza excepciones, y corrompe datos reales en producción silenciosamente durante meses antes de notarse.
- **Los tres niveles:** operativo — reproduce deliberadamente una condición de carrera y observa el resultado incorrecto con datos reales; ingenieril — explica exactamente qué secuencia de eventos entrelazados produjo el resultado erróneo; arquitectónico — identifica qué otras operaciones de su propio sistema (de M1 y M2) tienen el mismo patrón de riesgo, sin haberlo notado hasta ahora.
- **Evidencia de dominio (el Momento Fundacional de M3):** Bitácora, con sus propios usuarios ya multiplicados, dispara decenas de peticiones simultáneas contra un endpoint que decrementa un recurso compartido (stock, contador, saldo). El estudiante, que predijo el resultado antes de ejecutar (predicción comprometida, DOC-03 P8), observa que el número final **no cuadra** — sin ningún error, ninguna excepción, ningún traceback. Debe diagnosticar la secuencia exacta de lecturas y escrituras entrelazadas que produjo la pérdida.
- **Práctica principal:** *(las tres preguntas)* ¿qué aprendo a hacer? — reconocer y reproducir deliberadamente una condición de carrera; ¿por qué existe en la ingeniería real? — porque es la causa silenciosa de corrupción de datos más común y más difícil de reproducir bajo demanda; ¿qué error evito? — creer que "mi código no lanza errores" es lo mismo que "mi sistema es correcto".
- **Evaluación:** estándar + veredicto explícito sobre el diagnóstico de la secuencia entrelazada (no solo sobre "notar que algo falló").
- **Pregunta ingenieril:** si tu código nunca lanza una excepción pero el resultado final es incorrecto, ¿en qué se parece eso a un bug — y en qué es mucho peor?
- **Gran abstracción:** la atomicidad como propiedad que hay que **ganar deliberadamente**, no asumir — "leer, calcular, escribir" son tres pasos, y entre cualquiera de ellos el mundo puede cambiar sin avisar.
- **¿Qué rompe esta abstracción?:** ¿qué pasa cuando el recurso compartido no vive en una sola base de datos, sino repartido entre varias máquinas? *(Los sistemas distribuidos y el consenso — semilla pura para N9.)*
- **Idea universal:** correcto en aislamiento no es correcto bajo concurrencia — el mundo real no espera su turno para preguntarte si ya terminaste.
- **La revelación que sigue al diagnóstico** *(ampliación filosófica del Director — consecuencia natural de la experiencia, no teoría previa)*: al reconstruir la secuencia entrelazada que rompió el número, el estudiante descubre algo más profundo que "hubo una condición de carrera". Descubre que **no existía un único número verdadero esperando ser leído**: cada petición observó el pizarrón desde un instante distinto, con una porción parcial de la realidad — ninguna mintió, ninguna vio el todo. No hay un observador universal con la vista completa; hay muchos observadores parciales, actuando a la vez. Esta idea —que la realidad de un sistema no es un único estado ordenado, sino múltiples perspectivas simultáneas— es la puerta de entrada a los sistemas distribuidos, a las bases de datos, a los agentes de IA y a casi toda la ingeniería que el estudiante construirá desde aquí.

**N2.M3.T4 · Aislamiento: lo que la transacción promete y lo que no**
- **Objetivo:** aplica el mecanismo correcto (transacciones con bloqueo apropiado) para eliminar la condición de carrera de T3, y explica qué garantiza cada nivel de aislamiento.
- **Prerrequisitos:** T3; N1.M7.T3 (transacciones, todo-o-nada).
- **Competencias:** C-N2-01, C-N2-05.
- **Errores habituales:** creer que envolver el código en una transacción (N1.M7.T3) ya resuelve las condiciones de carrera —"todo o nada" no es lo mismo que "uno a la vez para este recurso"—; bloquear más de lo necesario y crear un nuevo problema (rendimiento, interbloqueos); no verificar que la corrección realmente se sostiene bajo carga real.
- **Modelo mental:** N1.M7.T3 enseñó que una transacción es un sobre cerrado —todo o nada—; este tema añade la pieza que faltaba: **el sobre también puede reservar el pizarrón mientras lo usa**, para que nadie más calcule sobre el mismo número al mismo tiempo.
- **Por qué:** existe porque T3 mostró el problema sin resolverlo — sentir la ruptura antes de la solución (DOC-03, conflicto cognitivo) / ahora porque el estudiante ya sabe exactamente qué secuencia debe impedirse / habilita cerrar el ciclo: de "vi el número mal" a "ahora sé por qué nunca más estará mal". **Coste de no enseñarlo:** el estudiante saldría de M3 sabiendo *diagnosticar* condiciones de carrera pero no *prevenirlas* — la mitad del problema, la parte inútil sin la otra.
- **Los tres niveles:** operativo — corrige la operación de T3 con el mecanismo de aislamiento correcto y verifica que el número ahora cuadra bajo la misma carga que antes lo rompía; ingenieril — explica qué garantiza el nivel de aislamiento elegido y qué NO garantiza (aislamiento no es lo mismo que rendimiento, ni que ausencia total de espera); arquitectónico — decide qué operaciones de un sistema real merecen este nivel de protección y cuáles no (proteger todo, siempre, tiene un costo de rendimiento real).
- **Evidencia de dominio:** repite el experimento de T3 tras su corrección y demuestra, con los mismos datos y la misma carga, que el número ahora es consistente.
- **Práctica principal:** laboratorio de corrección + repetición del experimento de T3 como verificación (el "antes/después" como evidencia, no como narrativa).
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si proteger una operación contra condiciones de carrera tiene un costo de rendimiento, ¿cómo decides qué partes de tu sistema merecen pagarlo y cuáles pueden vivir con el riesgo?
- **¿Qué rompe esta abstracción?:** ¿qué pasa cuando dos operaciones necesitan bloquear recursos en órdenes distintos? *(Semilla de interbloqueos — deadlocks —, para cuando el estudiante diseñe sistemas más grandes.)*
- **Idea universal:** la corrección bajo concurrencia no se verifica leyendo el código — se verifica sometiéndolo a la misma presión que lo rompió.

**N2.M3.T5 · Invertir para no repetir: caché con Redis**
- **Objetivo:** usa Redis para cachear resultados costosos de recalcular, y diseña una estrategia de invalidación consciente de que un dato cacheado puede mentir.
- **Prerrequisitos:** T2, T4 (ya existe consistencia real que proteger antes de decidir qué cachear).
- **Competencias:** C-N2-01, C-N2-05.
- **Errores habituales:** cachear datos que cambian con frecuencia sin estrategia de invalidación (sirviendo información obsoleta indefinidamente); cachear todo "porque es más rápido", incluyendo lo que ya era barato de calcular; olvidar que el caché es otra fuente de verdad que puede desincronizarse de la real.
- **Modelo mental:** la idea universal de N1.M3.T3 ("invertir una vez para ahorrar muchas"), con nombre propio y con un precio nuevo: el caché es **una fotografía de un resultado, tomada en un instante** — útil mientras el mundo no cambie demasiado desde esa foto; el problema no es tomarla, es saber cuándo tirarla.
- **Por qué:** existe porque T4 ya garantiza consistencia, pero verificarla en cada petición cuesta tiempo real / ahora porque el sistema soporta carga real (T1) que se beneficia de no recalcular lo mismo una y otra vez / habilita cerrar el módulo con la pregunta que resume todo lo anterior: ¿qué puedo permitirme no verificar cada vez? **Coste de no enseñarlo:** sin esto, cada sistema con carga real repite trabajo costoso innecesariamente, o —peor— cachea sin criterio y sirve datos incorrectos con total confianza.
- **Los tres niveles:** operativo — implementa un caché con Redis para una consulta costosa; ingenieril — explica exactamente cuándo y por qué ese dato cacheado puede quedar desactualizado; arquitectónico — decide, para cada dato de su sistema, si tolera estar un poco desactualizado (cachear) o si exige verificarse siempre (como el stock de T3–T4, que nunca debería cachearse ciegamente).
- **Evidencia de dominio:** identifica, en su propio servicio, qué datos son seguros de cachear y cuáles serían peligrosos de cachear —explicando la diferencia con el criterio de T3/T4, no por intuición.
- **Práctica principal:** laboratorio de caché + medición antes/después (tiempo de respuesta) + un experimento deliberado de dato cacheado obsoleto servido a un usuario.
- **Evaluación:** estándar + cierre del largo aliento B-M3.
- **Pregunta ingenieril:** si el precio de la velocidad es que a veces mientes un poco sobre lo actual que es un dato, ¿qué datos de tu sistema podrían permitirse esa mentira, y cuáles jamás?
- **Idea universal:** cachear es prometer una respuesta rápida a cambio de aceptar que, por un instante, podría no ser la verdad más reciente — la pregunta de ingeniería nunca es "¿cacheo o no?", es "¿cuánto de vieja puede estar esta mentira antes de que importe?".

### Largo aliento del módulo: B-M3 — "El conteo que no cuadra"

*Abierto en T2 (cuando el servidor real existe), atraviesa T3–T4, cierra en T5. Habilidad cognitiva: **diagnóstico de concurrencia** — razonar sobre secuencias de eventos entrelazados que nunca ocurren de la misma forma dos veces, la tercera de las cinco habilidades propias de N2.*

El estudiante construye un recurso compartido simple (inventario, contador de reservas) sobre PostgreSQL. Bitácora, ya crecida, lo somete a carga concurrente real. El estudiante predice el resultado, lo ve fallar (T3, Momento Fundacional), diagnostica la secuencia entrelazada exacta que lo rompió, lo corrige con el aislamiento correcto (T4), y **repite el mismo experimento como verificación** — el antes/después medido, no narrado, es la evidencia. Cierra decidiendo, con Redis (T5), qué parte de ese mismo sistema puede cachear sin poner en riesgo lo que acaba de proteger. Informe corto (A7): qué se rompió, por qué, cómo se verificó la corrección.

### Cierre del módulo

**Así se usa esto en el mundo real.** Toda infraestructura real de IA vive de esto: los sistemas de inferencia (N7, N10) atienden miles de peticiones simultáneas; los agentes (N8) pueden ejecutar herramientas en paralelo y necesitan coordinarse; cualquier backend con más de un usuario real enfrenta exactamente lo que Bitácora, al crecer, le mostró al estudiante aquí. Errores típicos del principiante profesional: código que "funciona siempre en mis pruebas" (con un solo usuario) y falla impredeciblemente en producción; soluciones parche con `sleep()` en vez de aislamiento real; cachear sin estrategia y servir información incorrecta con total confianza. Las empresas pagan carísimo por esto porque los bugs de concurrencia son, con frecuencia, imposibles de reproducir a voluntad — y sin embargo corrompen datos reales.

**El supuesto que este módulo destruye:** que la corrección local implica corrección global — que si cada petición individual está bien escrita, el sistema completo debe estarlo también.

**La limitación humana que compensa:** la incapacidad de razonar intuitivamente sobre múltiples eventos simultáneos — el cerebro humano piensa en secuencias, no en entrelazados.

**Lo que deja de sorprender:** que múltiples eventos ocurran simultáneamente.

**La garantía que el sistema adquiere al cerrar M3:** el sistema **garantiza consistencia bajo concurrencia** — el resultado es correcto sin importar cuántas peticiones lleguen a la vez ni en qué orden se entrelacen.

**La idea que este módulo deja para siempre — la que sobrevive aunque en cinco años se olvide PostgreSQL, Redis y hasta Python: el mundo real no espera su turno — la ingeniería no consiste en impedir que las cosas ocurran al mismo tiempo, consiste en construir sistemas que sigan siendo correctos cuando eso, inevitablemente, ocurra.**

---

*M3 · Muchos a la Vez — ✅ **Aprobado oficialmente por el Director (2026-07-19)**, tercer módulo oficial de SYL-N2.*

---

## 12. M4 · La Red de Seguridad — diseño completo del módulo

> **La gran pregunta de este módulo: ¿cómo sabemos, en todo momento, que el software sigue siendo correcto?**

### Nota de diseño (para revisión del Director)

**El objetivo real de este módulo — antes de cualquier tecnología** *(encuadre explícito del Director)*: M4 no es un curso de testing. Es el módulo donde la calidad **deja de depender de que alguien recuerde revisar** y se convierte en una propiedad que el sistema mismo sostiene. Hasta aquí, cada compuerta de tema y de módulo verificó al estudiante con TD-01/TD-02 — pero esa verificación vivía en la memoria y el juicio de quien revisaba, momento a momento. M4 consolida algo distinto: un mecanismo que sigue vigilando **incluso cuando nadie se acuerda de mirar**. Esta es también la formalización del hilo transversal que empezó en M1.T2 (la primera prueba mínima con `TestClient`) y acompañó, sin nombre propio, cada evaluación de M2 y M3: aquí ese hábito se convierte en disciplina e infraestructura.

**La historia que cuenta este módulo:** el estudiante llega a M4 con tres módulos construidos —M1, M2, M3— y una sensación acumulada de "creo que funciona". El módulo empieza mirando hacia atrás: ¿qué tan seguro está, en realidad, de que M1-M3 siguen funcionando todos a la vez? (T1). La respuesta honesta —"no tan seguro como pensaba"— motiva invertir el orden de trabajo: escribir la prueba antes que el código, para que la prueba defina qué significa "correcto" antes de que exista la tentación de adaptarla al resultado (T2). Pero escribir pruebas no basta si no se sabe qué NO se está probando — la cobertura revela puntos ciegos reales, no una cifra decorativa (T3). El código, además, solo es fácil de probar si está bien diseñado — probar mal código es una lucha constante contra su propia forma (T4, clean code). Y el cierre es el quiebre: un pipeline de integración continua que vigila sin que el estudiante se lo pida (T5, el Momento Fundacional) — la calidad deja de ser una promesa que él debe recordar y se convierte en un sistema que la sostiene por él.

**El Momento Fundacional de M4:** ocurre en T5, en el instante en que el estudiante hace un cambio que le parece completamente inocente —un pequeño ajuste en el código de M2 o M3, sin relación aparente con nada más— y, **antes de que el cambio llegue a ninguna parte**, el pipeline de integración continua lo detiene: una prueba de un módulo completamente distinto, que el estudiante había olvidado que existía, acaba de fallar. No hubo revisión manual. Nadie recordó revisar nada. El sistema lo supo solo. Y entonces llega la reflexión que cierra el círculo de todo N2: si este pipeline no hubiera existido, este mismo cambio habría llegado a Bitácora — exactamente como en el Momento Fundacional de M1, solo que esta vez **nadie tendría que enterarse de la manera difícil**. Antes de este instante, el estudiante piensa "la calidad depende de que yo recuerde revisar bien"; después, piensa "la calidad es una propiedad que el sistema sostiene, no una promesa que dependo de recordar".

**Bitácora en M4 (presencia como referencia, no como escena nueva):** Bitácora no protagoniza un nuevo evento en este módulo — aparece como **la razón por la que el pipeline importa**: el estudiante, al ver la prueba fallar en T5, reconoce que esa regresión concreta habría roto exactamente el mismo tipo de contrato que rompió a Bitácora en M1. La referencia cierra el arco del nivel sin repetir la escena — es la consecuencia evitada, no un evento nuevo.

**Forma de pensar que construye cada tema:**

| Tema | Capacidad cognitiva |
|---|---|
| T1 El hábito que ya tenías | **Auditar la propia confianza**: ¿qué tan seguro estoy, realmente? |
| T2 TDD | **Definir "correcto" antes de construir**, no adaptarlo después |
| T3 Cobertura | **Ver los propios puntos ciegos** — lo que nunca se ha ejecutado |
| T4 Clean code | **Diseñar para que probar sea fácil**, no una lucha constante |
| T5 Integración continua | **Delegar la memoria en el sistema** — el Momento Fundacional |

**Carga cognitiva:** 5 temas / ~4 semanas; a diferencia de M1-M3, este módulo no introduce un pico conceptual violento — su dificultad es de **disciplina sostenida**, no de un quiebre único de comprensión (coherente con ser, en parte, la formalización de un hábito que ya existía). **Prueba del coste de no enseñarlo:** sin T2-T3, el estudiante seguiría probando "lo que se le ocurre revisar" en vez de diseñar pruebas con criterio; sin T5, cada nivel posterior (N3-N12) acumularía regresiones silenciosas sin ningún mecanismo que las detenga.

**Omisión deliberada:** mocking avanzado y pruebas de contrato entre servicios — requieren más de un servicio real comunicándose (N7-N9 lo tendrán); testing de carga/rendimiento formal — pertenece a N9, cuando la escala lo amerite de verdad.

### Fichas pedagógicas

**N2.M4.T1 · El hábito que ya tenías: auditar la propia confianza**
- **Objetivo:** audita honestamente sus proyectos de M1-M3 preguntando, endpoint por endpoint, "¿cómo sé que esto sigue funcionando?" — y descubre cuánta de esa confianza era, en realidad, memoria y suerte.
- **Prerrequisitos:** M1-M3 completos (el hilo M4 sembrado desde M1.T2).
- **Competencias:** C-N2-02.
- **Errores habituales:** confundir "lo probé una vez cuando lo escribí" con "sé que funciona ahora"; sobreestimar cuánto de su propio sistema está realmente verificado; descubrir con sorpresa genuina cuánto dependía de recordar.
- **Modelo mental:** la diferencia entre **una fotografía tomada una vez** ("funcionó cuando lo probé") y **una cámara de seguridad que graba siempre** ("sé que sigue funcionando, ahora mismo, sin mirar").
- **Por qué:** existe porque M1.T2 sembró la primera prueba, pero el hábito se quedó pequeño frente a lo que M2-M3 ya construyeron / ahora porque hay tres módulos reales que auditar honestamente / habilita sentir la brecha entre "creo que funciona" y "sé que funciona", antes de cerrarla. **Coste de no enseñarlo:** el estudiante seguiría confundiendo su memoria con verificación real — la causa más común de que un cambio en un rincón olvidado del sistema rompa otro sin que nadie lo note.
- **Los tres niveles:** operativo — hace inventario de qué está probado y qué no en su propio sistema; ingenieril — explica por qué "lo escribí bien" no es lo mismo que "sé que sigue bien"; arquitectónico — decide qué partes de su sistema son más críticas de verificar primero.
- **Evidencia de dominio:** produce una lista honesta (no favorecida) de qué partes de M1-M3 tienen verificación real y cuáles dependen solo de su memoria.
- **Práctica principal:** auditoría propia sobre proyectos ya existentes (M1-M3), no código nuevo.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si no pudieras volver a mirar tu propio código nunca más, ¿cuánta confianza tendrías en que sigue funcionando dentro de seis meses?
- **Idea universal:** la memoria de que algo funcionó una vez no es lo mismo que la certeza de que sigue funcionando ahora.

**N2.M4.T2 · TDD: la prueba antes que el código**
- **Objetivo:** practica el ciclo rojo-verde-refactor, escribiendo la prueba antes de la implementación que la satisface.
- **Prerrequisitos:** T1.
- **Competencias:** C-N2-02.
- **Errores habituales:** escribir el código primero "por costumbre" y la prueba después, adaptándola a lo que el código ya hace (verificación circular, no verificación real); pruebas que verifican detalles de implementación en vez de comportamiento; abandonar el ciclo tras el primer verde sin refactorizar.
- **Modelo mental:** la prueba escrita antes como **el contrato de lo que "correcto" significa, firmado antes de empezar a construir** — invierte el orden habitual (código→verificación) para que la definición de éxito no pueda contaminarse por lo que el código termina haciendo.
- **Por qué:** existe porque T1 reveló que gran parte de la "confianza" era retroactiva y flexible / ahora porque el estudiante ya siente la diferencia entre saber y creer / habilita que cada pieza nueva de código nazca ya con su definición de correcto, no la reciba después. **Coste de no enseñarlo:** una prueba escrita después de que el código funciona tiende, sin que el estudiante lo note, a validar lo que el código YA hace en vez de lo que debería hacer.
- **Los tres niveles:** operativo — escribe una prueba que falla, luego el código mínimo que la hace pasar; ingenieril — explica por qué el orden importa y qué se pierde al invertirlo; arquitectónico — decide cuándo TDD estricto aporta valor real y cuándo sería ceremonia sin beneficio (no todo código lo necesita con el mismo rigor).
- **Evidencia de dominio:** implementa una funcionalidad nueva siguiendo el ciclo completo, mostrando el primer fallo (rojo) antes del código que lo resuelve.
- **Práctica principal:** laboratorio de TDD sobre una funcionalidad nueva de su propio sistema.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si escribes la prueba después del código, ¿qué estás realmente verificando: que el código hace lo correcto, o que el código hace lo que ya hace?
- **Evolución de la idea:** Kent Beck formalizó TDD a inicios de los 2000 redescubriendo una disciplina más antigua de la ingeniería: definir el criterio de éxito antes de construir, no negociarlo después con el resultado — la misma idea detrás de escribir especificaciones antes que código en cualquier disciplina de ingeniería seria.
- **Idea universal:** define qué significa "correcto" antes de tener un resultado que podría tentarte a redefinirlo.

**N2.M4.T3 · Cobertura: lo que tus pruebas no están viendo**
- **Objetivo:** mide cobertura de pruebas y la usa para encontrar puntos ciegos reales, entendiendo que un número alto no es el objetivo — es un mapa de lo que falta mirar.
- **Prerrequisitos:** T2.
- **Competencias:** C-N2-02.
- **Errores habituales:** perseguir el 100% de cobertura como trofeo, probando trivialidades solo para subir el número; ignorar que alta cobertura no significa buenas pruebas (se puede ejecutar una línea sin verificar nada útil sobre ella); no revisar los casos borde que la cobertura señala como no ejecutados.
- **Modelo mental:** la cobertura como **linterna, no como certificado** — no prueba que el código es correcto; señala qué zonas nunca se han iluminado, para que el estudiante decida si merece la pena mirarlas.
- **Por qué:** existe porque TDD (T2) no garantiza que se cubrió todo, solo que lo que se probó se probó bien / ahora porque el estudiante ya tiene una batería de pruebas real que medir / habilita encontrar, con datos y no con intuición, las partes de M1-M3 que nunca se ejecutaron bajo prueba. **Coste de no enseñarlo:** sin esto, "tengo pruebas" se confundiría con "probé todo lo importante" — dos afirmaciones muy distintas.
- **Los tres niveles:** operativo — genera un reporte de cobertura y lo interpreta; ingenieril — explica por qué cobertura alta no implica ausencia de bugs; arquitectónico — decide, con el reporte en mano, qué puntos ciegos merecen una prueba nueva y cuáles son aceptables de dejar sin cubrir.
- **Evidencia de dominio:** a partir del reporte de cobertura de su propio sistema (M1-M3), identifica al menos un caso borde real que nunca se había ejecutado bajo prueba, y lo prueba.
- **Práctica principal:** laboratorio de cobertura sobre el sistema acumulado.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si tu cobertura es del 95%, ¿qué te dice exactamente sobre el 5% restante — y por qué ese número, solo, no te dice si ese 5% importa?
- **Idea universal:** la cobertura no mide qué tan bien probaste tu código — mide qué tan bien conoces sus rincones sin luz.

**N2.M4.T4 · Clean code: el código que se lee es el código que se prueba**
- **Objetivo:** refactoriza código propio de M1-M3 aplicando principios de código limpio (nombres, funciones pequeñas y con una responsabilidad, bajo acoplamiento), y verifica cómo eso facilita —o dificulta— escribir pruebas.
- **Prerrequisitos:** T1-T3; N1.M2 (POO, diseño); B-M1 (refactorización, ya practicada en N1).
- **Competencias:** C-N2-01, C-N2-05.
- **Errores habituales:** funciones que hacen demasiadas cosas a la vez, imposibles de probar sin simular media aplicación; nombres que no comunican intención; código difícil de probar tratado como "así es el testing", en vez de como síntoma de mal diseño.
- **Modelo mental:** el código difícil de probar casi nunca revela un problema de las pruebas — revela un problema del propio diseño; probar bien y diseñar bien son, la mayoría de las veces, **la misma habilidad vista desde dos ángulos**.
- **Por qué:** existe porque T2-T3 hicieron evidente que cierto código de M1-M3 es incómodo de probar / ahora porque el estudiante puede diagnosticar exactamente por qué / habilita que el resto de N2 (M5) se construya sobre una base más fácil de mantener y verificar. **Coste de no enseñarlo:** sin esto, el estudiante seguiría culpando a "el testing es difícil" cuando el problema real es una función que hace demasiado.
- **Los tres niveles:** operativo — refactoriza una función difícil de probar en varias más pequeñas y testeables; ingenieril — explica la relación causal entre diseño y facilidad de prueba; arquitectónico — decide qué nivel de granularidad de funciones es el correcto para su sistema (exceso de fragmentación también tiene costo).
- **Evidencia de dominio:** toma una función propia difícil de probar (identificada en T1-T3) y la refactoriza, mostrando que las pruebas que antes eran torpes ahora son simples.
- **Práctica principal:** refactorización guiada por la dificultad real de probar código propio (no ejercicio artificial).
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si te cuesta mucho escribir una prueba para una función, ¿qué es más probable: que el testing sea difícil, o que la función esté haciendo demasiado?
- **Idea universal:** el código fácil de probar y el código bien diseñado casi siempre son el mismo código, visto desde dos preguntas distintas.

**N2.M4.T5 · Integración continua: el sistema avisa sin que preguntes — el Momento Fundacional de M4**
- **Objetivo:** configura un pipeline de integración continua que ejecuta la batería de pruebas automáticamente ante cada cambio, y experimenta el momento en que atrapa una regresión real sin intervención humana.
- **Prerrequisitos:** T1-T4 (una batería de pruebas real y código más testeable, ya existentes).
- **Competencias:** C-N2-02, C-N2-03 (integración con contenedores, semilla para M5).
- **Errores habituales:** configurar CI pero ignorar sus fallos "porque ya lo revisaré luego" (vacía el propósito del mecanismo); pipelines tan lentos que se evita ejecutarlos; no correr las pruebas en un entorno limpio y reproducible.
- **Modelo mental:** el pipeline como **vigilante que nunca se cansa ni se distrae** — hace exactamente la misma pregunta ("¿sigue funcionando todo?"), de la misma forma, cada vez, sin excepción y sin memoria selectiva.
- **Por qué:** existe porque T1-T4 dieron al estudiante pruebas de calidad, pero seguía siendo su responsabilidad recordar ejecutarlas / ahora porque hay una batería real que merece correr siempre, no solo cuando alguien se acuerda / habilita el cierre real del hilo transversal: la calidad deja de vivir en la memoria de una persona. **Coste de no enseñarlo:** sin esto, toda la disciplina de T1-T4 sigue dependiendo de que alguien, en algún momento de prisa, no se le olvide ejecutar las pruebas antes de continuar.
- **Los tres niveles:** operativo — configura un pipeline que corre pruebas automáticamente en cada cambio; ingenieril — explica qué garantiza el pipeline y qué no (que las pruebas existentes pasan, no que no faltan pruebas); arquitectónico — decide qué debe bloquear un cambio (fallos de pruebas, cobertura mínima) y qué solo debe advertir.
- **Evidencia de dominio (el Momento Fundacional de M4):** el estudiante hace un cambio que le parece inocente en una parte de M2 o M3, sin relación aparente con el resto — y **antes de que el cambio llegue a ninguna parte**, el pipeline detiene todo: una prueba de un módulo que había olvidado revisar acaba de fallar. Nadie recordó revisar nada; el sistema lo supo solo. El estudiante reconoce explícitamente: esta regresión, sin el pipeline, habría llegado a Bitácora — el mismo tipo de ruptura que en M1, solo que esta vez nadie tendría que enterarse de la manera difícil.
- **Práctica principal:** *(las tres preguntas)* ¿qué aprendo a hacer? — configurar un vigilante automático de calidad; ¿por qué existe en la ingeniería real? — porque ningún equipo puede confiar en que alguien recordará revisar todo, siempre, bajo presión; ¿qué error evito? — confundir "tengo pruebas" con "las estoy ejecutando siempre".
- **Evaluación:** estándar + veredicto explícito sobre la reflexión sobre lo que el pipeline evitó, no solo su configuración técnica.
- **Pregunta ingenieril:** si un cambio inocente puede romper algo que ya habías olvidado que existía, ¿en qué se diferencia realmente "recordar revisar todo" de "confiar en la suerte"?
- **Institución de la ingeniería:** el pipeline de integración continua es la institución que **garantiza vigilancia constante** — la calidad deja de ser un acto de memoria y se vuelve una propiedad sostenida por el sistema mismo.
- **¿Qué rompe esta abstracción?:** ¿qué pasa cuando el pipeline mismo tarda tanto que nadie quiere esperarlo, o cuando pasa aunque haya fallos "menores" que todos ignoran? *(La disciplina alrededor del mecanismo importa tanto como el mecanismo — semilla para el gobierno de calidad a escala, N9.)*
- **Idea universal:** la excelencia profesional no consiste en cometer menos errores — consiste en construir sistemas que detectan los errores antes de que lleguen a otras personas.

### Largo aliento del módulo: B-M4 — "La red que no vi que necesitaba"

*Abierto en T1 (la auditoría honesta de M1-M3), atraviesa T2-T4, cierra en T5. Habilidad cognitiva: **diseño de pruebas** — decidir deliberadamente qué verificar y por qué, no improvisarlo, la cuarta de las cinco habilidades propias de N2.*

El estudiante retoma su propio sistema acumulado de M1-M3, audita honestamente su verificación real (T1), formaliza una batería de pruebas siguiendo TDD para lo que construye de aquí en más (T2), usa cobertura para encontrar puntos ciegos reales en lo ya existente (T3), refactoriza lo que resulta más difícil de probar de lo que debería (T4), y configura un pipeline que vigila todo automáticamente (T5) — donde ocurre el Momento Fundacional. Cierra con un informe breve (A7): qué tan segura era su confianza al empezar el módulo, qué tan segura es ahora, y qué regresión concreta el pipeline evitó que llegara a Bitácora.

### Cierre del módulo

**Así se usa esto en el mundo real.** Ningún equipo de ingeniería serio confía en la memoria de sus miembros para sostener la calidad — por eso CI/CD es estándar universal, no una práctica de equipos "maduros": es la diferencia entre un sistema que se degrada silenciosamente y uno que se mantiene correcto mientras crece. Errores típicos del principiante profesional: pruebas escritas una sola vez y nunca vueltas a ejecutar; perseguir cobertura como métrica de vanidad; ignorar un pipeline en rojo "porque hay prisa". Las empresas pagan por esto porque el costo de un bug crece exponencialmente cuanto más tarda en detectarse — de segundos en CI, a horas en revisión, a incidentes en producción con usuarios reales afectados.

**El supuesto que este módulo destruye:** que la calidad depende de que alguien recuerde revisar las cosas.

**La limitación humana que compensa** *(filosofía central del módulo, ampliación del Director)*: los ingenieros olvidan, se distraen, se equivocan, interpretan mal, cambian de opinión, se cansan. La calidad profesional no nace de asumir que los ingenieros son perfectos — nace de aceptar que no lo son, y de construir mecanismos que sigan funcionando incluso cuando fallan. Las pruebas automáticas, la integración continua, la cobertura, la revisión: no son herramientas contra el software — son **herramientas contra nuestras propias limitaciones**.

**Lo que trasciende el testing:** la calidad no es una fase del desarrollo, ni un departamento, ni una revisión final — es una **propiedad emergente de un sistema bien diseñado**. Y cuanto más grande es un sistema, menos puede depender de la memoria, la disciplina o la buena voluntad de una persona concreta: debe depender de mecanismos que funcionen incluso cuando las personas fallan. Comprender esto es empezar a pensar como ingeniero de sistemas, no solo como desarrollador.

**Lo que deja de sorprender:** que los sistemas detecten errores automáticamente.

**La garantía que el sistema adquiere al cerrar M4:** el sistema **garantiza corrección verificable continuamente** — no en el momento en que alguien decide revisar, sino en todo momento, automáticamente.

**La idea que este módulo deja para siempre — la que sobrevive aunque en cinco años se olviden pytest y CI por completo: la excelencia profesional no consiste en cometer menos errores — consiste en construir sistemas que detectan los errores antes de que lleguen a otras personas.**

---

*M4 · La Red de Seguridad — ✅ **Aprobado oficialmente por el Director (2026-07-19)**, cuarto módulo oficial de SYL-N2.*

---

## 13. M5 · Entregar sin Miedo — diseño completo del módulo

> **La gran pregunta de este módulo: ¿cómo llega el software al mundo — y evoluciona sin interrumpir a nadie?**

### Nota de diseño (para revisión del Director)

**El objetivo real de este módulo — antes de cualquier tecnología** *(encuadre explícito del Director)*: M5 no es un módulo sobre Docker, CI/CD o despliegue. Es el momento en que el estudiante demuestra que puede **asumir la responsabilidad completa del ciclo de vida de un sistema real** — no como quien empuja código una vez y termina, sino como quien sostiene un sistema vivo a lo largo del tiempo. Si M1 enseñó a responder por un contrato, M2 por la confianza, M3 por la consistencia y M4 por la calidad, M5 responde por **la continuidad**: que todo lo anterior siga sosteniéndose mientras el sistema cambia, no solo mientras está quieto.

**La filosofía explícita del módulo — nunca hay versión definitiva** *(ampliación del Director; no es una conclusión al cierre, es el eje que atraviesa las cinco fichas)*: todo sistema seguirá cambiando. Nunca existe una versión final, un diseño terminado, un despliegue definitivo. La verdadera excelencia no consiste en llegar a un estado perfecto y detenerse — consiste en construir sistemas **preparados para seguir evolucionando sin perder aquello que los hace confiables**. Cada tema de M5 debe transmitir esta idea desde su primera línea, no reservarla para el final: empaquetar (T1), automatizar (T2), desplegar (T3) y migrar (T4) no son destinos — son la forma en que un sistema vivo sigue siendo él mismo mientras cambia.

**La historia que cuenta este módulo — el cierre del arco completo de N2:** el estudiante llega aquí con un sistema que tiene contrato estable (M1), confía correctamente en quien lo llama (M2), permanece consistente bajo carga concurrente (M3), y se verifica solo, continuamente (M4). Todo eso **funciona mientras el sistema está quieto**. La tensión final: un sistema real nunca está quieto — cambia, crece, se corrige, mientras alguien sigue dependiendo de él en ese mismo instante. El módulo empaqueta el sistema para que sea portable (T1), automatiza el camino completo del commit a producción sobre la puerta de calidad que M4 ya construyó (T2), aprende a sustituir una versión por otra sin apagar nada (T3), y llega al quiebre real: cambiar la estructura misma de los datos **mientras Bitácora sigue llamando, en ese instante, sin pausa** (T4, el Momento Fundacional). Cierra reconociendo que desplegar no fue un evento: es el principio de una responsabilidad que sigue (T5).

**El Momento Fundacional de M5:** ocurre en T4. El estudiante necesita cambiar la forma de sus datos —un cambio de esquema real, del tipo que en N1.M7.T4 ya se preguntó "¿cómo se hace esto con datos vivos?"—, y **Bitácora sigue llamando durante todo el proceso**, sin pausa, sin aviso previo de que algo está por cambiar. La primera intuición del estudiante —parar el servicio, cambiar el esquema, reiniciar— se predice (DOC-03 P8) contra el tráfico continuo de Bitácora, y la predicción confirma lo obvio: **eso la interrumpiría**, exactamente como en M1, pero ahora a nivel de infraestructura, no de contrato. El estudiante debe entonces diseñar la migración seguraen pasos que nunca rompen lo que ya funciona (expandir el esquema sin quitar nada → desplegar código que ya sabe usar lo nuevo → migrar los datos existentes → solo entonces retirar lo viejo) — y ejecutarla con Bitácora llamando en tiempo real durante todo el proceso, **sin que note un solo instante de interrupción**. Antes de este instante, el estudiante piensa "desplegar es un evento: subo el cambio y ya está"; después, piensa "evolucionar un sistema vivo es un proceso con pasos intermedios que también deben ser correctos — nunca un solo salto".

**Bitácora en M5 (el cierre del arco — por primera vez, la prueba es que NO se rompe):** en M1 Bitácora se rompió por un contrato descuidado; en M4 se evitó una ruptura gracias a CI. Aquí, en el cierre del nivel, Bitácora **llama sin pausa durante todo T3-T4**, y la evidencia de éxito no es un diagnóstico después de un quiebre — es la ausencia total de interrupción, medida y verificada, no asumida. Es la única vez en N2 donde el arco de Bitácora no gira alrededor de algo que se rompe: gira alrededor de todo lo aprendido sosteniéndose a la vez, bajo presión real.

**Forma de pensar que construye cada tema:**

| Tema | Capacidad cognitiva |
|---|---|
| T1 Empaquetar | **El sistema como unidad portable**, no como "lo que funciona en mi máquina" |
| T2 El pipeline completo | **La calidad como puerta**, no como paso opcional antes de desplegar |
| T3 Desplegar sin detener | **Sustituir en marcha**, nunca apagar para cambiar |
| T4 Migrar sin romper | **Evolucionar en pasos que nunca rompen lo que ya funciona** — el Momento Fundacional |
| T5 El ciclo completo | **La responsabilidad no termina al desplegar** — empieza a importar de verdad |

**Carga cognitiva:** 5 temas / ~4 semanas; el pico es T4, y a diferencia de M1-M3 no es un pico de comprensión nueva sino de **integración bajo presión real** — sostener M1+M2+M3+M4 funcionando a la vez, con tráfico real, es más exigente que aprender cualquier pieza suelta. **Prueba del coste de no enseñarlo:** sin T3-T4, todo lo construido en M1-M4 seguiría siendo correcto solo "en reposo" — inútil para un sistema real, que jamás deja de recibir tráfico mientras se le cambia.

**Omisión deliberada:** orquestación a escala (Kubernetes) — pertenece a N9, cuando la pregunta sea "muchas instancias", no "una que evoluciona"; observabilidad avanzada (métricas distribuidas, tracing) — semilla aquí (T5, básica), profundidad en N9.

### Fichas pedagógicas

**N2.M5.T1 · Empaquetar: el sistema como unidad portable**
- **Objetivo:** empaqueta su servicio completo (código, dependencias, configuración) en un contenedor Docker que corre igual en cualquier máquina.
- **Prerrequisitos:** N1.M5.T3-T4 (procesos y aislamiento — "un proceso con su propio sistema de archivos", ya comprensible, no mágico); N1.M1.T6 (entornos virtuales, ahora elevado a nivel de sistema completo).
- **Competencias:** C-N2-03.
- **Errores habituales:** "funciona en mi máquina" como criterio de éxito; imágenes de contenedor gigantes por incluir de más; configuración hardcodeada dentro de la imagen en vez de inyectada (eco de M2.T5: los secretos no van en el código, tampoco en la imagen).
- **Modelo mental:** el contenedor como **maleta que empaqueta todo lo que el servicio necesita para vivir**, sin depender de qué esté instalado en la máquina que la reciba — la respuesta definitiva a "en mi máquina funciona".
- **Por qué:** existe porque M1-M4 se construyeron y probaron en la máquina del estudiante / ahora porque un sistema real vive en máquinas que el estudiante nunca tocará directamente / habilita que el pipeline de M4 (T2) pueda desplegar exactamente lo mismo que se probó, sin sorpresas de entorno. **Coste de no enseñarlo:** sin esto, cada despliegue sería una apuesta sobre si el entorno de destino se parece lo suficiente al de desarrollo.
- **Los tres niveles:** operativo — escribe un Dockerfile y ejecuta su servicio en un contenedor; ingenieril — explica por qué el contenedor resuelve el problema de "funciona en mi máquina" (N1.M5.T3-T4, procesos aislados, aplicados aquí); arquitectónico — decide qué debe vivir dentro de la imagen y qué debe inyectarse desde afuera (configuración, secretos).
- **Evidencia de dominio:** ejecuta su servicio completo en un contenedor en una máquina "limpia" (o simulada como tal) y verifica que Bitácora puede seguir llamándolo sin notar diferencia.
- **Práctica principal:** laboratorio de contenerización de su propio sistema acumulado (M1-M4).
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si tu servicio "funciona en tu máquina" pero no defines exactamente qué necesita para funcionar, ¿qué estás realmente prometiendo a quien lo despliegue?
- **Idea universal:** un sistema que solo funciona en un lugar específico no está terminado — está atrapado.

**N2.M5.T2 · El pipeline completo: la calidad como puerta**
- **Objetivo:** extiende el pipeline de M4 (que verifica) para que también despliegue automáticamente — pero solo si todas las verificaciones de calidad pasan.
- **Prerrequisitos:** T1; M4.T5 (el pipeline de integración continua ya existe).
- **Competencias:** C-N2-01, C-N2-03.
- **Errores habituales:** desplegar manualmente "solo esta vez" saltándose el pipeline; un pipeline de despliegue que ignora los resultados del pipeline de calidad; no distinguir qué debe bloquear un despliegue de qué solo debe advertir.
- **Modelo mental:** el pipeline completo como **una sola cinta transportadora con un control de calidad integrado**: nada llega al final (producción) sin pasar por la verificación de M4 — la calidad deja de ser un paso previo opcional y se convierte en la puerta misma.
- **Por qué:** existe porque M4 construyó el vigilante, pero hasta ahora ese vigilante solo avisaba, no impedía / ahora porque hay un sistema empaquetado (T1) listo para viajar / habilita que ningún cambio llegue a Bitácora sin haber demostrado, automáticamente, que sigue siendo correcto. **Coste de no enseñarlo:** un pipeline de calidad que no bloquea el despliegue es una recomendación, no una garantía — exactamente el tipo de "casi" que este nivel entero ha intentado eliminar.
- **Los tres niveles:** operativo — configura CD para que despliegue automáticamente tras pasar CI; ingenieril — explica por qué separar "verificar" de "desplegar" en dos pasos manuales reintroduce el error humano que M4 eliminó; arquitectónico — decide qué condiciones son innegociables para desplegar y cuáles son solo advertencias.
- **Evidencia de dominio:** provoca un fallo deliberado de prueba y verifica que el pipeline **impide** el despliegue automáticamente, sin que el estudiante tenga que recordar detenerlo.
- **Práctica principal:** laboratorio de CD conectado al CI de M4 + experimento de bloqueo deliberado.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si tu pipeline de calidad puede saltarse "solo por esta vez", ¿qué tan real es la garantía que M4 construyó?
- **Idea universal:** una verificación que no puede bloquear no es una garantía — es una sugerencia.

**N2.M5.T3 · Desplegar sin detener**
- **Objetivo:** despliega una nueva versión de su servicio sin interrumpir las peticiones en curso, usando una estrategia de sustitución gradual (rolling) sobre una capa gratuita de nube.
- **Prerrequisitos:** T1-T2.
- **Competencias:** C-N2-03, C-N2-05.
- **Errores habituales:** apagar la versión vieja antes de que la nueva esté lista (ventana de caída innecesaria); no verificar que la nueva versión realmente funciona antes de retirar la anterior; asumir que "rápido" es lo mismo que "sin interrupción".
- **Modelo mental:** cambiar el motor de un avión en pleno vuelo — **se sustituye gradualmente, nunca se apaga todo para reemplazarlo**: siempre hay algo funcionando, atendiendo, mientras lo nuevo se verifica en paralelo.
- **Por qué:** existe porque T1-T2 ya permiten desplegar automáticamente, pero "desplegar" y "sin interrumpir a nadie" no son lo mismo / ahora porque Bitácora depende del servicio en tiempo real, no en una ventana de mantenimiento / habilita el escenario donde T4 puede exigir su prueba más dura: cambiar hasta los datos sin pausa. **Coste de no enseñarlo:** cualquier despliegue se convertiría en una interrupción anunciada — inaceptable para un sistema real con usuarios reales.
- **Los tres niveles:** operativo — despliega una nueva versión con estrategia gradual, sin ventana de caída; ingenieril — explica qué garantiza el despliegue gradual y qué riesgo nuevo introduce (dos versiones coexistiendo brevemente); arquitectónico — decide qué debe soportar su servicio para que esa coexistencia temporal de versiones no sea un problema (compatibilidad hacia atrás, otra vez el contrato de M1).
- **Evidencia de dominio:** despliega una nueva versión mientras Bitácora llama continuamente, y demuestra —midiendo, no asumiendo— que ninguna llamada se perdió.
- **Práctica principal:** laboratorio de despliegue gradual con tráfico continuo real de Bitácora durante el proceso.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** durante los segundos en que la versión vieja y la nueva conviven, ¿qué necesitas que sea cierto en ambas para que nadie note la diferencia?
- **Idea universal:** nunca hay un instante en que "no hay versión funcionando" — solo instantes de transición cuidadosamente diseñados.

**N2.M5.T4 · Migrar sin romper — el Momento Fundacional de M5**
- **Objetivo:** evoluciona el esquema de datos de un sistema vivo (patrón expandir-contraer) sin interrumpir a un consumidor que sigue llamando durante todo el proceso.
- **Prerrequisitos:** T3; N1.M7.T4 (la pregunta sembrada: "¿cómo se cambia un esquema con datos vivos?"); M3 completo (consistencia bajo concurrencia, ahora aplicada a la migración misma).
- **Competencias:** C-N2-01, C-N2-05.
- **Errores habituales:** la migración "big bang" — parar, cambiar el esquema entero, reiniciar (interrumpe por diseño); cambiar el esquema y el código que lo usa en el mismo paso (no deja margen de reversa); no probar la migración contra tráfico real antes de aplicarla en definitiva.
- **Modelo mental:** el patrón **expandir-contraer**: añadir lo nuevo sin quitar lo viejo todavía → desplegar código que ya sabe usar lo nuevo (con lo viejo aún presente, como red de seguridad) → migrar los datos existentes → solo entonces, con todo verificado, retirar lo viejo. Nunca un salto: una secuencia de pasos donde cada uno, por sí solo, es seguro.
- **Por qué:** existe porque N1.M7.T4 dejó la pregunta sin responder / ahora porque el estudiante tiene todo lo necesario para responderla de verdad (contrato estable de M1, consistencia de M3, calidad verificada de M4) / habilita la prueba de síntesis real del nivel completo. **Coste de no enseñarlo:** sin esto, cualquier cambio de esquema real —inevitable en la vida de cualquier sistema— exigiría una ventana de interrupción, contradiciendo todo lo que M1-M4 construyeron.
- **Los tres niveles:** operativo — ejecuta una migración expandir-contraer completa sobre datos reales; ingenieril — explica por qué cada paso del patrón es, por separado, seguro, y por qué el "big bang" no lo es; arquitectónico — decide, para un cambio de esquema dado, cuántos pasos intermedios necesita y en qué orden.
- **Evidencia de dominio (el Momento Fundacional de M5):** el estudiante predice (DOC-03 P8) qué pasaría con la migración "big bang" mientras Bitácora llama sin pausa — y confirma que la interrumpiría, exactamente como en M1 pero a nivel de infraestructura. Diseña entonces la migración segura y la ejecuta con **Bitácora llamando en tiempo real durante todo el proceso**, demostrando —medido, no asumido— cero interrupciones.
- **Práctica principal:** *(las tres preguntas)* ¿qué aprendo a hacer? — cambiar la estructura de datos de un sistema que nunca deja de operar; ¿por qué existe en la ingeniería real? — porque los sistemas reales no tienen ventanas de mantenimiento aceptables y sus datos nunca dejan de cambiar; ¿qué error evito? — tratar un cambio de esquema como un evento único e instantáneo.
- **Evaluación:** estándar + veredicto explícito sobre la verificación medida de cero interrupciones, no solo la ejecución técnica.
- **Pregunta ingenieril:** si tuvieras que cambiar la estructura de un sistema que nunca puede detenerse ni un segundo, ¿en cuántos pasos seguros dividirías un cambio que hoy piensas como uno solo?
- **Institución de la ingeniería:** el patrón de migración segura es la institución que **garantiza evolución sin interrupción** — el sistema cambia de forma, pero nunca dice de dejar de responder.
- **¿Qué rompe esta abstracción?:** ¿qué pasa cuando el cambio no es de esquema sino de comportamiento —una regla de negocio que cambia— y ambas versiones deben coexistir con lógica distinta? *(Feature flags y versionado de comportamiento — semilla para N7-N8, donde los modelos y agentes cambian aún más rápido.)*
- **Idea universal:** desplegar no es un evento — es un proceso con pasos intermedios, y cada uno de esos pasos también debe ser correcto.

**N2.M5.T5 · El ciclo completo: la responsabilidad no termina al desplegar**
- **Objetivo:** observa su sistema en producción (logs y métricas básicas) y decide, ante un fallo real, entre revertir (rollback) o corregir hacia adelante.
- **Prerrequisitos:** T1-T4.
- **Competencias:** C-N2-01, C-N2-05.
- **Errores habituales:** desplegar y "olvidarse" del sistema hasta que alguien reporte un problema; no tener forma de revertir rápido cuando algo sale mal; confundir "desplegado" con "terminado".
- **Modelo mental:** el despliegue no como línea de meta, sino como **el principio de una responsabilidad continua** — el sistema sigue siendo, desde ese instante, algo que alguien debe seguir observando y sosteniendo.
- **Por qué:** existe porque T1-T4 ya permiten desplegar y evolucionar sin interrumpir / ahora porque cierra la pregunta que abrió todo N2: ¿qué significa ser responsable de un sistema que otros usan? / habilita que el estudiante entienda, en carne propia, que esa responsabilidad no tiene fecha de cierre. **Coste de no enseñarlo:** el estudiante saldría de N2 pensando que "desplegar" es el final de la historia, cuando es exactamente donde la responsabilidad real empieza.
- **Los tres niveles:** operativo — configura observación básica (logs, métrica simple) y ejecuta un rollback ante un fallo simulado; ingenieril — explica cuándo revertir es la decisión correcta y cuándo corregir hacia adelante lo es; arquitectónico — decide qué señales de su sistema debería vigilar continuamente para saber, sin que alguien se lo reporte, que algo empezó a fallar.
- **Evidencia de dominio:** ante un fallo real introducido deliberadamente en producción (simulada), decide y ejecuta la respuesta correcta (rollback o fix forward) con criterio justificado, no por instinto.
- **Práctica principal:** laboratorio de incidente simulado + decisión bajo presión.
- **Evaluación:** estándar + cierre del largo aliento B-M5.
- **Pregunta ingenieril:** cuando tu sistema falla en producción a las 3 a.m., ¿qué información necesitarías tener ya preparada para decidir en minutos, no en horas?
- **Idea universal:** un sistema no se entrega una vez — se sostiene continuamente; la responsabilidad de un ingeniero no termina cuando el código llega a producción — ahí es exactamente cuando empieza a importar de verdad.

### Largo aliento del módulo: B-M5 — "El sistema que nunca se detiene"

*Abierto en T1, atraviesa T2-T4, cierra en T5. Habilidad cognitiva: **operación continua** — sostener un sistema vivo bajo cambio constante, la quinta y última de las cinco habilidades propias de N2.*

El estudiante toma su sistema completo de M1-M4 (contrato + confianza + consistencia + calidad) y lo lleva a través de todo el ciclo: lo empaqueta (T1), automatiza su camino a producción sobre la puerta de calidad de M4 (T2), lo despliega sin ventanas de caída (T3), le cambia la estructura de datos en vivo (T4, el Momento Fundacional, con Bitácora llamando sin pausa), y cierra observándolo y respondiendo a un incidente real (T5). Informe final (A7): qué se sostuvo, qué estuvo a punto de romperse, y qué decisión de operación tomó y por qué.

### Cierre del módulo

**Así se usa esto en el mundo real.** Ningún sistema de IA real —los LLMs de N7, los agentes de N8, la infraestructura de N9— se despliega una sola vez y se olvida: los modelos se actualizan, los esquemas cambian, las dependencias evolucionan, todo mientras usuarios reales dependen del servicio en ese mismo instante. Errores típicos del principiante profesional: desplegar con ventanas de mantenimiento innecesarias, migraciones "big bang" que interrumpen todo, sistemas sin capacidad de rollback rápido cuando algo sale mal. Las empresas pagan por esto porque el costo de una interrupción no planeada —en confianza, en usuarios, en dinero real— supera con creces el esfuerzo de aprender a evolucionar sin detenerse.

**El supuesto que este módulo destruye:** que desplegar es un evento único e instantáneo — que el cambio ocurre en un solo salto, no en un proceso con pasos intermedios que también deben ser correctos.

**La limitación humana que compensa:** la dificultad de evolucionar sistemas complejos sin introducir riesgo — la tentación humana de hacer el cambio de una vez, rápido, en vez de en pasos seguros y verificables.

**Lo que deja de sorprender:** que un sistema deba evolucionar continuamente sin detenerse.

**La garantía que el sistema adquiere al cerrar M5:** el sistema **garantiza evolución segura sin interrumpir el servicio** — puede cambiar, crecer y corregirse mientras sigue respondiendo a quien depende de él.

**La idea que este módulo deja para siempre — el cierre de todo el arco de N2: un sistema no se entrega una vez — se sostiene continuamente. La responsabilidad de un ingeniero no termina cuando el código llega a producción: ahí es exactamente cuando empieza a importar de verdad.**

**El cierre mira hacia adelante, no hacia atrás** *(encuadre del Director sobre el fin de N2)*: el estudiante no debería terminar M5 pensando *"ya sé backend"*. Debería terminar pensando *"ahora entiendo por qué construir software profesional exige mucho más que escribir código"*. N2 no entrega un técnico que domina herramientas — entrega una base suficientemente sólida para afrontar problemas mucho más grandes: sistemas de IA (N4-N10) que deberán sostener exactamente las mismas cinco garantías —contrato, confianza, consistencia, calidad, continuidad— a una escala que N2 todavía no imagina.

---

*M5 · Entregar sin Miedo — ✅ **Aprobado oficialmente por el Director (2026-07-19)**, quinto y último módulo oficial de SYL-N2. Con esto concluye la fase de diseño modular: los cinco módulos (M1-M5) están completos y no se modificarán individualmente salvo que una auditoría posterior encuentre una deficiencia objetiva. Siguen los pasos institucionales: revisión global del capstone ET2 y las compuertas (paso 8) → auditoría de coherencia desde SYL-N3 con sus Herencias Declaradas (paso 9) → auditoría adversarial final → publicación de SYL-N2 v1.0.0.*

---

## 14. Paso 8 · Revisión global del Capstone ET2 y las compuertas

### El capstone — diseño de síntesis (no existía contenido concreto antes de este paso, igual que en SYL-N1)

**Nombre:** *"El backend que puede vivir sin ti"* — la prueba de que las cinco garantías de N2 se sostienen **a la vez**, bajo presión real, no una por una en aislamiento.

**Por qué esta forma y no otra:** el riesgo — el mismo que la auditoría de SYL-N1 encontró y corrigió en su capstone — es que un proyecto final se convierta en una suma de cinco entregas independientes ("aquí está mi auth, aquí mis pruebas, aquí mi Docker"). Eso sería exactamente lo que el Director advirtió que no quería: módulos buenos de forma aislada, no un sistema coherente. La corrección: el capstone **no es un proyecto nuevo** — es el sistema que Bitácora ha usado desde M1, sometido a un único episodio integrador donde las cinco garantías se ponen a prueba simultáneamente, no en secuencia.

**El episodio integrador:** en una sola sesión evaluativa, el tutor orquesta a la vez: **(a)** un cambio de requisito nuevo, real (rol Cliente) que exige extender el contrato sin romperlo (M1) y requiere permisos nuevos para acceder a él (M2); **(b)** tráfico concurrente real de Bitácora, ya crecida, ejerciendo presión sobre el recurso compartido que la nueva función toca (M3); **(c)** el pipeline de M4 como puerta obligatoria — el cambio no se considera terminado hasta que pasa, automáticamente, todas las verificaciones; **(d)** el despliegue de ese cambio mediante migración expandir-contraer, con Bitácora llamando sin pausa durante todo el proceso (M5). Las cinco garantías se demuestran **en una sola operación de ingeniería real**, no en cinco demostraciones separadas.

**Defensa (TD-02, con los tres momentos institucionalizados desde el capstone de N1):** predicción de las tres preguntas que un ingeniero senior haría sobre el sistema completo; la mejor decisión de ingeniería tomada durante todo N2 y su evidencia; qué decisión, de las cinco garantías, cambiaría si empezara hoy. Se añade, propio de N2: **arqueología completa del sistema** — el estudiante recorre la historia de commits desde M1.T2 (Laboratorio 13, primer repositorio real del servicio — M1.T1 vive en Pyodide, sin estado ni commits) hasta M5.T5, narrando cómo cada garantía se construyó sobre la anterior. *(Corrección de la auditoría integral de N2: esta sección originalmente decía "M1.T1", una referencia incorrecta ya que ese tema no genera historia de commits — corregido a M1.T2/Laboratorio 13, el primer punto real del repositorio.)* Post-mortem escrito (A7): qué garantía fue más difícil de sostener bajo presión real, y por qué.

**Verificación de síntesis (criterio adversarial aplicado ya en este paso, no solo al final):** ¿podría un estudiante completar esto entregando las cinco piezas por separado, sin integrarlas? No — el episodio integrador exige que el contrato nuevo (M1) ya tenga permisos (M2) antes de poder probarse bajo carga (M3), que el pipeline (M4) bloquee el despliegue (M5) si cualquier pieza anterior falla. La dependencia entre garantías está construida en el propio diseño del capstone, no confiada a la buena fe del estudiante.

**La pregunta de validación final** *(nuevo estándar permanente del Director — para todos los capstones de la Academia, no solo N2)*: al cierre de todo capstone, una única pregunta actúa como validación del espíritu del nivel, no como rúbrica adicional: **¿confiaría el examinador en este estudiante para mantener un sistema que utilizan otras personas?** No se puntúa por criterios — se responde con honestidad, como lo haría un responsable técnico real evaluando a alguien para su equipo. "Todavía necesitaría mucha supervisión" señala que el capstone no cumplió su función, sin importar cuántos criterios técnicos aprobó; "sí, con acompañamiento razonable" confirma que N2 cumplió su propósito. Esta pregunta se añade al cierre de la defensa TD-02 del capstone ET2, después de los tres momentos ya institucionalizados (predicción, mejor decisión, decisión que cambiaría) y la arqueología completa.

### Revisión de las compuertas — cobertura de competencias

| Instrumento | Qué verifica | Norma |
|---|---|---|
| **Examen** (banco rotable, NNR-02) | Conocimiento y transferencia sobre las cinco garantías | DOC-02 |
| **Capstone contra TP-01** | Síntesis real bajo el episodio integrador | OBJ-05 |
| **Defensa TD-02 con arqueología completa** | Comprensión, decisiones, las cinco habilidades de largo aliento sondadas | RM-05 |

**Cobertura de competencias — verificación explícita:**

| Competencia | Verificada por |
|---|---|
| C-N2-01 (backend con API REST, persistencia, auth, desplegado) | Capstone completo — es, literalmente, la definición de la competencia |
| C-N2-02 (pruebas automatizadas + CI) | M4 + puerta obligatoria del capstone (M4→M5) |
| C-N2-03 (contenedores) | M5.T1-T2 + capstone desplegado en contenedor |
| C-N2-04 (documentación en español, un tercero la levanta) | M1.T6 (contrato autodocumentado) + informe final del capstone |
| C-N2-05 (justifica decisiones técnicas) | Presente en T4 de cada módulo (M1, M2, M4, M5) **y en M3 (T3, T4, T5)** + defensa del capstone *(corrección de la auditoría integral: la fila original omitía M3, donde la competencia sí se practica)* |
| C-N2-06 (lee documentación oficial en inglés) | Practicada en las 27 fichas de M1-M5 (recurso citado en inglés en cada una — FastAPI, Pydantic, pwdlib, PyJWT, OWASP, PostgreSQL, Redis, Docker, Martin Fowler, Python logging) *(corrección de la auditoría integral: la formulación original sugería cobertura "distribuida" cuando en realidad es universal — cada tema de M1-M5 cita al menos un recurso EN)* |
| C-N2-07 (DSA intermedio) | Pista ⚔️ transversal, no ligada a un módulo específico — verificada en el hito de cierre de etapa (14.6), no en la compuerta de nivel |

**Hallazgo de la revisión:** C-N2-07 no tiene instrumento propio dentro de la compuerta de N2 — es correcto por diseño (la pista DSA se evalúa en su propio hito de etapa, no en cada compuerta de nivel, según 14.6), pero se deja registrado explícitamente para que la auditoría del paso 9 no lo confunda con una omisión real.

---

*Paso 8 — ✅ **Aprobado oficialmente por el Director (2026-07-19)**, con la pregunta de validación final incorporada como estándar permanente de todos los capstones de la Academia.*

---

## 15. Paso 9a · Auditoría de coherencia desde SYL-N3 y Herencias Declaradas

*Análisis desde el nivel siguiente: ¿qué presupone SYL-N3 (Matemáticas para IA) que todavía no existe en N2? Consolidación de las herencias provisionales (HP-01…HP-04) registradas desde la arquitectura original, verificadas ahora contra el contenido real de M1-M5 — no contra la intención inicial.*

| # | N2 sembró (verificado contra contenido real) | N3 debe recoger |
|---|---|---|
| H-N3-01 | M4.T1/T3: comparar un resultado obtenido contra un resultado esperado como disciplina de verificación (auditoría de confianza, cobertura) | Verificar implementaciones matemáticas propias contra una referencia conocida (numpy) — "testing aplicado a las matemáticas" |
| H-N3-02 | M4 (implícito en toda comparación numérica de resultados: ningún assert de igualdad exacta sobre flotantes en las pruebas del propio sistema) | La aritmética de coma flotante formal — por qué `0.1 + 0.2 != 0.3`, y las tolerancias de comparación, ya usadas sin nombre en M4 |
| H-N3-03 | M3.T1 (medir antes/después con async) + M5.T3 (medir cero interrupciones) — el hábito de medir, no asumir, el rendimiento | El coste computacional de las operaciones matemáticas — el descenso de gradiente como algoritmo con precio real, no solo con fórmula |
| H-N3-04 | Todo N2: el sistema queda con contrato, confianza, consistencia, calidad y continuidad — un cuerpo completo, sin ninguna inteligencia todavía | La motivación explícita de toda ET3: las matemáticas son lo que falta para que ese cuerpo piense |
| H-N3-05 *(nueva — hallazgo de esta auditoría)* | M3.T3: la revelación de los múltiples observadores — no existe un único estado universal ordenado, existen perspectivas parciales simultáneas | El fundamento conceptual de la probabilidad como razonamiento bajo información incompleta — N3.M3 puede anclar la intuición probabilística en esta experiencia ya vivida, no partir de cero |

**Prerrequisitos ocultos verificados — ninguno encontrado:** N3 (álgebra lineal, cálculo, probabilidad, lectura matemática) no depende estructuralmente de ningún contenido de ingeniería de N2 (PostgreSQL, Docker, auth) — su cadena real es N1→N3, no N2→N3. N2 no introdujo, en ningún módulo, una dependencia matemática que N3 debiera resolver retroactivamente (verificado: async, concurrencia y transacciones se enseñaron con su modelo mental cualitativo, sin exigir cálculo o álgebra formal). El único nexo real entre N2 y N3 es motivacional (H-N3-04) y de hábito (H-N3-01…03, 05) — no de prerrequisito técnico duro. Esto confirma que la secuencia N2→N3 del PMC es correcta: N3 no espera nada de N2 que N2 no le dé.

---

## 16. Paso 9b · Auditoría Adversarial Final de SYL-N2 (mandato: demostrar que N2 no debería existir en su forma actual)

**Método:** comité con mandato de ruptura total — se ataca la arquitectura completa como si no hubiera sido aprobada nunca. No se buscan mejoras incrementales; se busca la razón por la que el diseño entero debería descartarse.

### Ataques que el diseño resistió

1. **¿Bitácora es un recurso narrativo demasiado conveniente — un solo consumidor no representa la diversidad real de usuarios de un sistema?** Objeción real, examinada a fondo. Pero la alternativa (múltiples consumidores anónimos) sacrificaría exactamente lo que el propio Director identificó como el mayor activo del diseño: la continuidad emocional y cognitiva que hace que la responsabilidad se sienta concreta. La narrativa nunca pretendió representar diversidad de tráfico — representa la relación entre un ingeniero y lo que depende de su trabajo, que es el objeto real de aprendizaje de N2. **Resiste.**
2. **¿La progresión de escala de Bitácora (sola → con identidad → con éxito propio) es técnicamente plausible para una "pequeña app externa"?** Se examinó como posible salto forzado. Pero está explícitamente narrado como crecimiento — el mismo fenómeno que cualquier sistema real atraviesa — y cada escalón tiene su propia justificación pedagógica declarada, no es un salto arbitrario de conveniencia. **Resiste.**
3. **¿Las cinco garantías (contrato, confianza, consistencia, calidad, continuidad) componen realmente una definición coherente de "sistema profesional", o son cinco temas convenientes?** Verificado por composición: un sistema con las cinco simultáneamente es, literalmente, la definición operativa de un backend listo para producción — ninguna sobra, ninguna es redundante con otra (cada una protege una superficie distinta: interfaz, identidad, datos compartidos, verificación, despliegue). **Resiste.**
4. **¿N2 debería fusionarse con N1 o con N3, en vez de existir como nivel propio?** Se examinó la frontera en ambos sentidos. N1→N2 tiene un quiebre de identidad real (programa→servicio, ya defendido en §1); N2→N3 no comparte prerrequisitos técnicos duros (confirmado en el paso 9a) — la frontera de N2 como nivel autónomo es limpia en ambos extremos. **Resiste.**
5. **¿El patrón de cinco categorías por módulo (Momento Fundacional, garantía, supuesto, limitación, sorpresa) es sobre-ingeniería documental?** Se examinó con severidad — y aquí el comité **encontró algo real** (hallazgo 1, abajo).
6. **¿Falta algo que un ingeniero de backend profesional necesitaría y que N2 no cubre?** Se examinó contra un currículo de referencia (rate limiting, observabilidad avanzada, mensajería asíncrona, GraphQL). La mayoría falla la prueba "coste de no enseñarlo AHORA" (pertenecen a escala, N9) — excepto un caso límite real (hallazgo 2, abajo).

### Hallazgos reales — aplicados

**Hallazgo 1 — el aparato de cinco categorías necesita una aclaración explícita, no una reducción.** El riesgo genuino: que las cinco declaraciones por módulo (Momento Fundacional, garantía, supuesto, limitación, sorpresa) se lean como un guion que el tutor debe *recitar* en cada módulo, convirtiendo la experiencia en fórmula repetitiva — exactamente lo que el Director advirtió que no quería desde el inicio de N2 ("no dificultad artificial"). La corrección no es eliminar el aparato — su valor documental y de coherencia es real y ya demostrado — sino **aclarar su función**: son instrumentos de diseño y auditoría, no un libreto de sesión. Aplicado en §7bis.

**Hallazgo 2 — falta una mención mínima de limitación de tráfico (rate limiting).** Un servicio con identidad (M2) y bajo carga concurrente real (M3) tiene, en la práctica profesional, una pregunta hermana que N2 no tocó ni siquiera de pasada: ¿qué pasa cuando alguien —malicioso o simplemente descuidado— satura el servicio con peticiones? No amerita tema propio (pertenece de lleno a N9, a escala), pero su ausencia total —ni siquiera como mención— deja una laguna reconocible. Aplicado como nota breve en M2, sin nuevo tema ni carga adicional.

### Aplicación de los hallazgos

Ambos hallazgos aplicados directamente al documento: la aclaración de función del aparato de cinco categorías (§7bis) y la mención Beyond the Curriculum de rate limiting (M2.T4, sin nuevo tema ni carga adicional).

### Conclusión formal del comité

Tras el intento deliberado de demostrar que N2 no debería existir en su forma actual: **la arquitectura resiste sin excepción en sus fronteras (con N1 y con N3), en su composición interna (las cinco garantías) y en su coherencia narrativa (Bitácora).** Los dos hallazgos reales no cuestionan la existencia ni el diseño del nivel — corrigen, con costo mínimo, una posible lectura errónea del aparato documental y una omisión menor y acotable. **Ninguna inconsistencia relevante sobrevive.** SYL-N2, con estas dos correcciones, queda declarado por este comité **candidato a v1.0.0 sin reservas**.

---

*Con el Paso 9 completo (coherencia desde N3 + Herencias Declaradas + auditoría adversarial final), SYL-N2 queda a la espera del veredicto definitivo del Director para su publicación como v1.0.0.*
