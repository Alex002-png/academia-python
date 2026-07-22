# Investigación Pedagógica de N11.M4 — Open source (preparación del flujo)

*Construida bajo DOC-12 §0bis, fundamenta los 4 laboratorios de M4 (T1 Leer convenciones · T2 Encontrar y triar un issue · T3 Preparar y enviar una contribución · T4 Recibir feedback y responder). Investigación verificada con WebFetch/WebSearch real durante la construcción de este módulo (2026-07-21). Extiende directamente `docs/investigacion/n1-m4-git-github.md` (ya construido) — no repite esa investigación, solo cita lo reutilizado.*

## 1. Fuentes verificadas por tema

**T1 — Leer convenciones:** Open Source Guides, *"How to Contribute"* — https://opensource.guide/how-to-contribute/ (verificado por WebFetch directo). Confirmado textualmente: antes de contribuir, verificar LICENSE, CONTRIBUTING, CODE_OF_CONDUCT; evaluar salud del proyecto (frecuencia de commits, tiempo de respuesta a issues, si los PRs se cierran o quedan abandonados) y amabilidad de la comunidad (tono en discusiones, si se agradece a los contribuidores). Reutiliza directamente N1.M4.T1 (7 reglas de Beams para mensajes de commit) y N1.M4.T3 (Google eng-practices sobre tamaño de PR) — ya verificados, no reinvestigados.

**T2 — Encontrar y triar un issue:** mismo documento (opensource.guide), sección de búsqueda de primeras contribuciones — confirmado el endpoint real y verificable `github.com/<org>/<repo>/contribute` (ej. `github.com/facebook/react/contribute`) que GitHub expone nativamente para issues etiquetados como buenos para principiantes, más recursos curados externos (First Timers Only, CodeTriage, Up For Grabs) ya citados en la investigación previa del syllabus (goodfirstissue.dev, firstcontributions.github.io). **Hallazgo operativo verificado:** antes de empezar a trabajar, la guía oficial recomienda explícitamente comentar en el issue con contexto ("ya revisé la documentación y no encontré...") y esperar confirmación — no un trámite opcional, la causa documentada más común de trabajo desperdiciado.

**T3 — Preparar y enviar:** reutiliza N1.M4.T2-T3 (ramas, PR, mensajes de commit) sin reinvestigar — la única pieza nueva es el contexto de un tercero real sin obligación de paciencia, ya cubierto por T1 (leer las convenciones exactas del proyecto elegido, que pueden diferir del estándar genérico de Beams/Google).

**T4 — Recibir feedback y responder:** mismo documento (opensource.guide), sección de manejo de retroalimentación y rechazo — confirmado textualmente: ante cambios solicitados, responder con prontitud e investigar antes de pedir ayuda; si el trabajo se vuelve inmanejable, notificar al mantenedor para reasignar el issue; ante un rechazo, pedir retroalimentación constructiva, aceptar la decisión del mantenedor, y —como última instancia— la opción real de bifurcar (fork) el proyecto y mantener la propia versión si hay desacuerdo genuino.

## 2. Errores de novato documentados

Confirmado por la fuente oficial (opensource.guide): el error más citado es **empezar a programar antes de confirmar con los mantenedores** que el issue sigue vigente y que la solución propuesta es la esperada — trabajo real desperdiciado, documentado explícitamente como razón para "buscar issues existentes (abiertos y cerrados) antes de duplicar esfuerzo" y "abrir un issue primero para contribuciones sustanciales". Consistente con el error ya documentado en N1.M4 (PRs sin descripción, sin contexto) pero a mayor escala: aquí el lector no tiene ninguna obligación de paciencia con el estudiante, a diferencia del tutor de N1.

## 3. Síntesis y decisiones de diseño

**Por qué T1 y T3 no reinvestigan Git/PR desde cero:** N1.M4 ya construyó esa base (commits, ramas, PR, README) con investigación propia y verificada — M4 de N11 la extiende a un contexto de terceros reales, no la repite. Reinvestigar sería redundante y diluiría el principio de "una competencia por laboratorio".

**Por qué T2 usa el endpoint real `/contribute` de GitHub como instrumento, no solo las listas curadas externas:** es una función nativa de la plataforma, verificable en cualquier repositorio con etiquetas configuradas, y evita depender exclusivamente de agregadores externos que pueden quedar desactualizados (mismo principio de robustez que ya motivó el hallazgo de Papers With Code en M1).

**Por qué T4 declara explícitamente la opción de "fork y mantener tu propia versión":** es la opción real y honesta ante un rechazo genuino, documentada por la propia fuente oficial — omitirla dejaría al estudiante sin salida ante el escenario, ya documentado como riesgo real en SYL-N11 §6.4, de que la aceptación no dependa de él.

## Clasificación y falsabilidad

**Evidencia sólida:** toda la síntesis de este documento proviene de una única fuente oficial verificada por WebFetch directo (opensource.guide), sin necesidad de convergencia de múltiples fuentes porque es la fuente canónica del ecosistema (mantenida por GitHub) — mismo estatus de autoridad que la documentación oficial de Git ya usada en N1.M4. **Ausencia declarada:** ninguna fuente cuantifica cuánto tiempo real toma en promedio obtener respuesta de un mantenedor — se documenta esto como incertidumbre real en el propio SYL-N11 §3.3/§6.4, no se inventa una cifra. **Falsabilidad:** si el registro de ejecución muestra que los estudiantes de N11 encuentran con frecuencia proyectos donde el endpoint `/contribute` no está configurado, se ajusta T2 para priorizar las listas curadas externas como primera vía, no como respaldo.
