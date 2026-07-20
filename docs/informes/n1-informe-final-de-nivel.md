# Informe Final de Nivel — N1 · Computer Science

*Memoria técnica de ingeniería, no repetición pedagógica. Primer nivel de la Academia construido bajo un modelo de flujo continuo (tras estabilizar DOC-07/DOC-12), auditado con un comité externo de 5 revisores independientes, y corregido en la causa antes de congelarse — no el ejercicio de aprobación que fue N0, sino la primera prueba real de que el sistema de auditorías de la Academia atrapa sus propios defectos antes de que se hereden.*

## 1. Objetivo global de N1

Llevar al estudiante de "sabe programar en un sandbox" a "puede construir, entregar y defender un producto real, propio, que integra siete competencias distintas bajo las condiciones genuinas del oficio: ambigüedad de diseño, trabajo sostenido durante semanas, y un cliente que cambia de opinión a mitad de camino." A diferencia de N0 (confirmar vocación y método), N1 confirma que el método sostiene peso real — el primer nivel donde "aprender a programar" se convierte en "aprender a construir software".

## 2. Competencias exactas desarrolladas

Las 7 competencias oficiales de N1 (C-N1-01 a 07, DOC-01), todas con cobertura verificada mediante matriz completa (introduce → practica → refuerza → domina) construida por auditoría independiente. 6 de 7 estaban sólidamente cubiertas desde la primera construcción; **C-N1-07 (lectura de documentación técnica en inglés)** tenía cobertura nula en fichas de tema pese a practicarse de hecho en M6.T2 — corregido declarándola explícitamente. Las 7 competencias tienen hoy, cada una, un instrumento real de introducción, práctica intermedia, refuerzo, y demostración de dominio verificable en el Capstone — no una mención nominal.

## 3. Habilidades técnicas

Python avanzado (funciones, colecciones, comprehensions, excepciones, iteradores/generadores, ficheros, módulos propios); POO con invariantes de estado reales; complejidad algorítmica y estructuras de datos (búsqueda, ordenación, pilas/colas, recursión, patrones de resolución); Git y GitHub como flujo de trabajo — no solo comandos aislados — con ramas, Pull Requests, y revisión de código; fundamentos de Linux/SO (procesos, señales, permisos, automatización con pipes y scripts); consumo robusto de APIs HTTP (validación de frontera, manejo de fallos, credenciales fuera del código); SQL y el modelo relacional (consultas declarativas, JOIN, transacciones, diseño de esquema, inyección SQL vivida y prevenida). Type hints incorporados como puente hacia N2 (Pydantic).

## 4. Habilidades profesionales

Higiene de commits y mensajes (reglas de Beams); documentación real de producto (README verificable por un tercero sin ver código); toma de decisiones documentada en formato trade-off (opciones→criterio→decisión→costo); diseño incremental bajo cambio de requisitos real, no simulado; autonomía de arquitectura (el estudiante decide la estructura de su propio proyecto, nadie se la entrega); y — corregido explícitamente durante la auditoría — **Git como hábito de entrega, no como técnica vista una vez**: desde la corrección de EVT-042, cada hito del Capstone se entrega por rama y Pull Request, el mismo flujo que un ingeniero real usa para cualquier cambio, por pequeño que sea.

## 5. Proyectos realizados

El largo aliento de cada módulo (B-M1 a B-M7, siete experiencias cognitivas distintas: descomposición, diseño incremental, depuración sistemática, refactorización, pruebas, decisiones de ingeniería, documentación técnica) y el **Capstone ET1**: una aplicación con usuario imaginable, elegida o propuesta por el estudiante, que consume una API real y persiste en un esquema SQL propio, construida en 5 hitos verificables (propuesta → esqueleto → integración de datos → cambio de requisitos real → cierre), con al menos una pasada de refactorización documentada y una defensa oral final. Auditado estructuralmente y confirmado: el Capstone no puede resolverse siguiendo instrucciones paso a paso — no tiene ningún campo de pasos, código de arranque, ni corrección automática, a diferencia de cualquier laboratorio normal.

## 6. Principios pedagógicos aplicados

Los heredados de N0 (comprensión profunda antes que sintaxis, práctica deliberada en escalera, conflicto cognitivo antes de la teoría, siete capacidades de dominio) más los que este nivel institucionalizó por primera vez:

- **DOC-12 · Estándar de Laboratorios de Entorno Real** — el molde hermano de DOC-11 para todo contenido que ocurre fuera del navegador (terminal, Git, Linux), con las mismas 13 secciones obligatorias y la misma disciplina de voz de instructor, congelado tras su propia auditoría UX (5 hallazgos bloqueantes corregidos antes de aprobarse).
- **Registro de modalidades del Campus (DOC-07)** — la plataforma aprendió a representar tres formas distintas de aprendizaje (ejercicio interactivo, laboratorio real, proyecto integrador) con un solo motor, sin duplicar infraestructura, y con el principio explícito de que la complejidad arquitectónica solo se acepta cuando mejora la experiencia del estudiante.
- **El principio del entorno** — M4 y M5 dejaron de vivir en el sandbox; el estudiante toca, por primera vez en la Academia, consecuencias reales (una instalación que puede fallar, una credencial que puede filtrarse, un commit que queda en su historia pública).
- **Auditoría antes de congelar, con mandato adversarial explícito** — por primera vez en la Academia, un nivel completo se sometió a un comité de 5 auditores independientes con instrucción de encontrar debilidades, no confirmarlas ausentes, antes de considerarse cerrado.

## 7. Riesgos pedagógicos que permanecen abiertos

- **Monotonía estructural en los primeros 10 días de M1** — la auditoría de experiencia del estudiante encontró que el mismo esqueleto de lección se repite 5 veces sin variedad antes de la primera ruptura de formato (los laboratorios de entorno real). No se corrigió como parte de las 8 críticas (no estaba entre ellas) — queda como hipótesis a validar con uso real, no como defecto confirmado.
- **Densidad de los laboratorios de entorno real "compactos"** (M4 completo, M5.T3-T5) — la auditoría encontró que declaran duraciones similares a M5.T1/T2 pese a tener una estructura más ligera. No se elevó su plantilla completa (hallazgo 🟡 importante, no de los 8 críticos aprobados) — queda registrado, no resuelto.
- **Ninguna disciplina de depuración real (traceback, `pdb`) sobrevive la salida del sandbox** — B-M3 entrena depuración solo en Pyodide. Hallazgo 🟡, no corregido en esta pasada — riesgo real de cara al Capstone y a N2.
- **El marco cognitivo explícito de H-06** ("¿quién eres? ¿cómo lo sé? ¿qué puedes?") no aparece nombrado verbatim en el contenido de M6.T2, aunque la mecánica práctica sí está bien cubierta — riesgo menor para el arranque de N2.M1 (autenticación real).

Ninguno de estos cuatro bloquea el arranque de N2 según la evidencia recogida — todos quedan como hipótesis o mejoras registradas, no como defectos que impidieran congelar N1.

## 8. Decisiones de diseño más importantes

- **Recorrido lineal único, sin bifurcaciones de navegación**, pese a que SYL-N1 describe M4/M5 como "en paralelo desde semana 1" — decisión explícita del Director: la Academia sirve a un estudiante individual, no a cohortes, y la complejidad de navegación paralela no se justificaba. La arquitectura permanece capaz de soportar recorridos paralelos si la evidencia futura lo exige.
- **Modalidad de contenido como registro extensible, no como parche por caso** — Pyodide, entorno real y proyecto conviven bajo el mismo contrato de tres funciones; la mayoría del contenido futuro (Docker, Cloud, SQL, Linux, GUI) cabe en la modalidad `real` ya generalizada, sin necesitar código nuevo del motor.
- **Cliente HTTP simulado en M6, declarado con honestidad técnica** — Pyodide no tiene red real configurada; en vez de fingir lo contrario o construir infraestructura de plataforma no solicitada, se declaró la limitación y se compensó con el Laboratorio 12 (llamada real, fuera del sandbox, antes del Capstone).
- **Auditoría con comité adversarial de 5 voces independientes, no autoevaluación** — la decisión metodológica más importante de este nivel. Dos hallazgos (ramas/PRs ausentes del Capstone) fueron encontrados por dos auditores distintos sin coordinarse — la señal de confianza más fuerte que este proceso puede producir.
- **Corregir la causa, no el síntoma** — cada una de las 8 correcciones críticas se resolvió restaurando consistencia de diseño (SYL↔implementación, densidad real de M6/M7, integración genuina) en vez de añadir excepciones o parches puntuales.

## 9. Lecciones aprendidas durante la construcción

**El ritmo de construcción es, en sí mismo, una señal de riesgo.** Los 8 hallazgos críticos de la auditoría se concentraron casi en su totalidad en el tramo construido más rápido (M6, M7, y el vínculo Git↔Capstone) — no es casualidad, es la evidencia empírica de que la velocidad de desarrollo y el rigor pedagógico compiten por el mismo recurso (atención del autor a cada decisión). **Aprendizaje institucional para N2-N12:** cuando un módulo se construya sensiblemente más rápido que los anteriores, se asumirá automáticamente que necesita una revisión más exigente antes de darse por terminado — no se esperará a una auditoría de cierre de nivel para sospechar.

**Auditar el propio trabajo con honestidad requiere ayuda externa.** Ninguno de los 8 hallazgos críticos se había detectado en la construcción original, incluida la propia verificación técnica (sintaxis, harnesses de Node, render en vivo) — todos esos controles confirmaban que el código *funcionaba*, no que el diseño era *suficientemente exigente o coherente*. Un comité adversarial, sin apego al trabajo ya hecho, encontró lo que la verificación técnica no podía encontrar por diseño.

**Un hallazgo confirmado por dos fuentes independientes pesa más que diez hallazgos de una sola fuente.** La convergencia espontánea de dos auditores en el mismo defecto (Git/PR ausente del Capstone) fue la señal más confiable de toda la auditoría — vale la pena preservar la práctica de auditorías paralelas e independientes, no secuenciales, para niveles futuros.

**Declarar una limitación técnica con honestidad es mejor que ocultarla o sobre-construir para evitarla.** El cliente HTTP simulado de M6 podría haberse disfrazado de "llamadas reales" o haber forzado una expansión de plataforma no solicitada — en cambio, se declaró la limitación, y se resolvió con un laboratorio de integración específico y barato (Laboratorio 12) en el momento correcto del currículo, no antes.

## 10. Recomendaciones para N2

1. **Aplicar la regla de "velocidad de construcción como señal de riesgo" desde el primer módulo de N2** — no esperar a una auditoría de cierre para revisar módulos construidos con prisa.
2. **Diseñar la disciplina de depuración real (traceback, `pdb` mínimo) explícitamente en algún punto temprano de N2**, dado que N1 dejó esta transferencia sin resolver y N2 va a exigir depuración en un entorno real de forma constante.
3. **Nombrar explícitamente el marco de H-06** ("¿quién eres? ¿cómo lo sé? ¿qué puedes?") en el contenido real de autenticación de N2.M1, no asumir que la mecánica práctica de M6.T2 lo dejó instalado como estructura cognitiva.
4. **Mantener Git como flujo de entrega desde el primer módulo de N2**, no reintroducirlo como tema — N1 ya lo dejó como hábito (post-corrección), y N2 debe asumir esa base, nunca volver a "enseñar" ramas o PRs desde cero.
5. **Considerar una auditoría de comité independiente a mitad de la construcción de N2**, no solo al cierre — hubiera podido atrapar los defectos de M6/M7 antes de que se acumularan en 6 módulos completos.
6. **Preservar la modalidad `proyecto` y su documento de diseño ligero como plantilla** para cualquier capstone futuro (N2-N12) — no reabrir el ciclo completo de arquitectura para cada nivel nuevo.

---

## Congelación de N1

**N1 · Computer Science queda congelado como versión de desarrollo v1.0 de contenido**, bajo DOC-11 (temas Pyodide), DOC-12 v1.0.0 (laboratorios de entorno real) y la modalidad `proyecto` (Capstone ET1) — los tres estándares ya estabilizados y auditados por separado antes de este cierre. Los 7 módulos regulares (M1-M7), el Capstone, y el Laboratorio 12 de integración forman el corpus congelado, verificado mediante: `node --check` limpio en todo momento; harnesses de Node con decenas de aserciones correcto/incorrecto sobre cada `check()` modificado; renderizado en vivo simulado sin fugas de datos; y la auditoría integral de 5 dimensiones técnicas + 5 dimensiones de experiencia, con sus 8 hallazgos críticos corregidos en la causa y re-verificados. Los 4 riesgos pedagógicos del punto 7 quedan registrados como pendientes de validación — ninguno bloquea N2. Toda modificación futura de N1 dependerá de evidencia real de ejecución del estudiante, nunca de una idea nueva aislada (mismo principio de no-reapertura que rige N0).

**Comienza la reconstrucción de N2 con el mismo estándar de excelencia.**
