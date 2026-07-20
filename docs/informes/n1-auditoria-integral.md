# Auditoría Integral de N1

*Realizada como comité externo — 5 auditores independientes, cada uno con instrucción explícita de buscar debilidades activamente, no confirmar calidad. Cada uno leyó los archivos reales del proyecto (syllabus, competencias, lecciones, investigación, y los datos vivos de `index.html`) sin coordinarse entre sí ni conocer los hallazgos de los demás. Dos hallazgos convergieron de forma independiente — la señal de confianza más fuerte que puede producir este proceso.*

## Veredicto anticipado

**N1 no está listo para congelarse todavía.** El armazón institucional es sólido (arquitectura de plataforma, estándares DOC-11/DOC-12, syllabus aprobado, capstone bien diseñado en su núcleo), pero la auditoría encontró **defectos reales y accionables**, concentrados sobre todo en el tramo construido más rápido (M6, M7, y los laboratorios de entorno real "compactos"). Ninguno es catastrófico; todos son corregibles sin rehacer arquitectura. El detalle completo sigue, organizado por las 10 dimensiones exactas que pediste.

---

## 1. Coherencia curricular

**🔴 Hallazgo A — referencia adelantada real.** `docs/lecciones/n1/m1-t6-laboratorio4-venvs-pip.md` (Laboratorio 4) menciona Git y `.gitignore` como conceptos ya conocidos ("nunca versionar `.venv/`... siempre en `.gitignore`"), pero en el orden real de entrega el estudiante todavía no ha tocado Git — eso ocurre recién en el Laboratorio 5 (`n1m4t1`). Es una dependencia oculta real, causada por la linealización de M1.T6/M4/M5 decidida durante la construcción. *Corrección: reescribir la mención sin asumir Git conocido, o mover la referencia a M4.T1.*

**🟡 Hallazgo B — documentación desincronizada con la arquitectura real.** SYL-N1 §4 sigue afirmando "M4 y M5 en paralelo desde semana 1", pero la implementación real es lineal (decisión explícita registrada en DOC-07/EVT-034) — SYL-N1 nunca se actualizó para reflejarlo. Un lector que solo consulte el syllabus (la propia "plantilla oficial" del proyecto) se formará un modelo incorrecto de cómo se vive el nivel. *Corrección: nota de implementación en SYL-N1 §4 remitiendo a DOC-07.*

Fuera de estos dos puntos, el resto de la secuencia (prerrequisitos entre Laboratorios 1-11, numeración sin huecos, campos "Fluencia asumida" calculados sobre el orden real, no el del syllabus) está correctamente resuelto — verificado, no asumido.

## 2. Cobertura de competencias

Matriz completa construida contra DOC-01. **6 de 7 competencias de N1 están sólidamente cubiertas** (4-13 apariciones cada una, bien distribuidas entre introducción/práctica/refuerzo/dominio verificable en el Capstone).

**🔴 Hallazgo — C-N1-07 (lectura de documentación técnica en inglés) tiene cobertura nula en fichas de tema.** Aparece solo en una tabla-resumen de SYL-N1, sin respaldo en ninguna de las 36 fichas de tema ni en la descripción detallada del Capstone. El mecanismo alternativo citado (un campo "recursos" por ficha) no existe en la plantilla aprobada. Es exactamente el defecto de "promesa vacía" que el propio DOC-01 tipifica como falla. *Corrección barata: `n1m6t2` ya practica esta competencia de hecho (exige leer documentación real en inglés sin tutorial mascado) — solo falta declararla en su campo Competencias.*

## 3. Densidad de aprendizaje

**🔴 Hallazgo — M6 y M7 tienen 40-80% menos ejercicios por tema que el estándar ya establecido en M1-M3 dentro del mismo N1.** M1/M2/M3: 5 ejercicios por tema, sin excepción. M6: 3 por tema. M7: 2-3, y `n1m7t4` tiene solo 1. Sin ninguna nota que justifique la reducción.

**🔴 Hallazgo — los 11 laboratorios "compactos" de entorno real (M1.T6 Lab 3/4, M4 completo, M5.T3-T5) son sustancialmente más delgados que M5.T1/T2** (3-5 pasos cortos vs. 13 secciones ricas; diagnóstico de errores de una línea vs. tabla causal de 6 columnas; 3 instrumentos de evaluación vs. 6), pero declaran duraciones casi idénticas (85-95 min) sin justificación caso por caso. Un estudiante comprometido completa varios de estos en 5-10 minutos reales, no en 20-30.

**🟡 Hallazgo — 4 "laboratorios" de cierre en M6/M7 entregan la solución completa como código de partida** (`n1m6t1r`, `n1m6t4r`, `n1m7t1r`, `n1m7t3r`) — el estudiante ejecuta y observa, no construye, mientras el 100% de los retos de M1-M3 parten de un stub real.

## 4. Nivel de exigencia

**🔴 Hallazgo — la investigación pedagógica de M6/M7 es un orden de magnitud más delgada que el estándar fijado en M1** (6-7 líneas por tema contra 38 líneas de M1.T1), y **abandona la comparación con instituciones de referencia** — solo cita documentación técnica (MDN, requests, OWASP), cero investigación de CS-Ed ni de cómo MIT/CMU/Berkeley enseñan estos temas pedagógicamente. El estándar que el propio Informe Final de N0 fijó como referente no se sostuvo aquí.

**🟡 Hallazgo — `n1m7t3x` ("desafío final inédito") se resuelve con un one-liner trivial** (`len(pasos)>1`), más fácil que los ejercicios regulares que lo preceden.

**🟢 Observación transversal (no exclusiva de M6/M7):** varios `hints` regalan la línea de código exacta, debilitando la exigencia real cuando el estudiante los abre — patrón a corregir especialmente en los `retoFinal`.

**Comparación honesta con CS50/MIT/Stanford/Berkeley:** N1 no alcanza su nivel en un eje central — los ejercicios Pyodide siempre dan la firma de función y verifican contra una cadena exacta, nunca exigen que el estudiante decida la descomposición del problema. Solo los laboratorios de entorno real y el Capstone se acercan a ese estándar — y son, paradójicamente, el contenido más recientemente construido bajo más presión de ritmo.

## 5. Integración

**🔴 Hallazgo principal — M6 y M7 nunca se practican en entorno real; el Capstone es el primer y único punto donde M4+M5+M6+M7 conviven de verdad.** Confirmado estructuralmente: 11 coincidencias de `modalidad:"real"` en todo `index.html`, todas concentradas en los Laboratorios 1-11 (~Día 14). Después de eso hay una brecha de ~38 lecciones (M2, M3, M6, M7 completos) sin volver a tocar terminal, Git ni una credencial real, hasta que el Capstone (~Día 53) lo exige todo de golpe, sin ensayo previo. El propio M6.T2 lo declara explícitamente: es un simulador, "en tu propia terminal, con `requests` real, estas mismas líneas funcionan contra la API de verdad" — pero el estudiante nunca lo hace antes del Capstone. *Corrección de costo bajo: un solo punto de contacto real (una llamada HTTP real con `requests`, una clave en un `.env` real excluido por un `.gitignore` real, subido a su propio repo) en M6.T2 o M7.T3, reusando M4/M5 ya adquiridos — no requiere convertir M6/M7 completos a modalidad real.*

## 6. Redundancias

**Ninguna encontrada tras búsqueda activa.** Se revisaron los solapamientos más probables (aliasing vs. invariantes de estado, comprehensions vs. SQL declarativo, manejo de errores M1 vs. M6) y en todos los casos el tema posterior se apoya explícitamente en el anterior como *callback* declarado, no lo re-enseña. Declarado explícitamente en vez de forzar un hallazgo — este es exactamente el tipo de "no problema" que vale la pena confirmar con el mismo rigor que un problema real.

## 7. Vacíos

**🔴 Hallazgo — anotaciones de tipo (type hints) están completamente ausentes en N1, pero SYL-N2 ya las presupone.** Búsqueda exhaustiva: cero coincidencias en todo N1. Pero SYL-N2 (N2.M1.T3, Pydantic) lista como error habitual "confundir type hints decorativos con validación real" — asumiendo que el estudiante ya sabe qué son. Sin esta base, N2.M1.T3 combina tres conceptos nuevos a la vez (anotaciones + decoradores + validación), violando el propio principio anti-sobrecarga cognitiva que este proyecto ya aplica en otros lados. **Ninguna de las 9 Herencias Declaradas de SYL-N1 cubre esto** — es un vacío no trazado, no solo no resuelto.

**🟡 Hallazgo — ninguna disciplina de depuración sobrevive la salida del sandbox.** "Depuración sistemática" es una de las 7 habilidades cognitivas declaradas del nivel (B-M3), pero se entrena solo con el depurador visual de Pyodide — ningún laboratorio de M5 (terminal, procesos, memoria) introduce lectura de traceback real ni disciplina mínima de depuración fuera del navegador, justo antes de que el Capstone la necesite sin red de seguridad.

## 8. Capstone

**Veredicto explícito, con evidencia estructural: el Capstone SÍ cumple el estándar "no resoluble solo con instrucciones paso a paso".** Verificado directamente en los datos: el objeto `n1et1` no tiene ningún campo `pasos`, `cmd`, `starter` ni `check` — a diferencia de cada laboratorio DOC-12 normal, que sí los tiene todos. Los 5 hitos son preguntas ("¿ya existe un repositorio real...?"), no recetas.

**🔴 Pero dos defectos reales, uno de ellos confirmado por DOS auditores independientes sin coordinarse:**
- **M1 y M3 no están obligados por ningún hito** — solo aparecen en el checklist final de evaluación, nunca como gate durante la construcción. Un estudiante podría completar los 5 hitos sin haber escrito una excepción propia ni justificado una estructura de datos por coste.
- **"Repositorio con ramas, PRs propios"** — prometido literalmente en SYL-N1 (§ síntesis del capstone) y en el propio DOC-07bis, **desapareció del checklist real** del objeto `n1et1`, que solo pide "historia que narra el proyecto". Un estudiante puede certificarse el Capstone sin haber abierto una sola rama ni un PR durante todo el proyecto — pese a que M4 se lo enseñó explícitamente. Este hallazgo lo encontraron, de forma independiente, tanto el auditor de Capstone/experiencia como el auditor de preparación para N2 — es el hallazgo con mayor respaldo de toda esta auditoría.

Debugging, documentación y autonomía sí están bien resueltos con instrumento real (bitácora de depuración, documento de esquema verificable por un tercero, el cambio de requisitos real como único mecanismo de presión genuina de todo N1) — no requieren cambio.

## 9. Experiencia del estudiante

El orden real (confirmado por grep, distinto del que asumiría cualquiera que solo lea el syllabus por módulos) es: M1 parte 1 (Días 1-10) → Laboratorios 1-11 de entorno real (~Día 14) → M1 parte 2 → M2 completo → M3 completo → M6 → M7 → Capstone. Es una decisión pedagógica intencional y bien documentada tema por tema, pero **el rótulo visible al estudiante no comunica el diseño** — "Día 10" seguido de "Laboratorio 1" sin ninguna señal de que va a volver a M1 después.

**Dónde se frustrará:** el Laboratorio 1 (fricción real de instalación, anticipada por el propio diseño), y la recursión en el Día 33 — dentro de un tramo ya largo de 12 días seguidos de DSA sin descanso temático, el punto clásico de fatiga combinada con dificultad conceptual real.

**Dónde perderá motivación:** los primeros 10 días repiten exactamente la misma forma estructural 5 veces antes de cualquier variedad; el tramo M6+M7 (16 días seguidos) llega sin ninguna entrega tangible intermedia de "algo mío que funciona" desde la calculadora de M4.

**Dónde se aburrirá:** la consistencia estructural de 26 pares de días con el mismo esqueleto es predecible desde el Día 5 — tensión no resuelta entre consistencia pedagógica (buena) y variedad experiencial (ausente).

**El mayor "aja":** Día 19 (M2.T3, composición vs. herencia — el problema real de explosión de subclases, con la cita de GoF 1994), y el Hito 4 del Capstone (cambio de requisitos real), el único momento de todo N1 sin red de seguridad ni resultado predefinido.

## 10. Preparación para N2 — la pregunta más importante, respondida con evidencia

**De las 9 Herencias Declaradas (H-01 a H-09), 7 están sanas y verificadas en el contenido real construido**, no solo en el papel:
- **H-01 (decoradores/closures excluidos):** cumple con evidencia fuerte — cero ocurrencias reales de `closure`/`decorador` funcional en todo N1; la única mención es un recurso bibliográfico que dice explícitamente "sin decoradores".
- **H-02 a H-05, H-07 (BD servidor, concurrencia, testing, migraciones, cachés):** sembradas correctamente como preguntas abiertas verificadas en el contenido (M5.T3, M7.T3).
- **H-08, H-09 (CI/CD, Docker):** sembradas correctamente.
- **H-06 (autenticación/confianza):** cumple parcialmente — la mecánica práctica está bien (status codes, credenciales fuera del código), pero el marco cognitivo explícito que SYL-N1 declara ("¿quién eres? / ¿cómo sé que eres tú? / ¿qué puedes hacer?") no aparece nombrado verbatim en el contenido construido.

**El único defecto real y accionable en esta dimensión es el mismo ya señalado en el Capstone:** "ramas, PRs propios" se prometió y no se instanció como criterio evaluable, y el entrenamiento real de Git es de una sola exposición (~95 min una vez cada uno), sin el patrón de práctica espaciada que sí existe para DSA. N2 asume autonomía de Git como hábito automático desde su primer módulo — este es exactamente el punto que pondría en riesgo el arranque de N2 si no se corrige ahora.

---

## Síntesis priorizada de correcciones (antes de congelar N1)

| # | Hallazgo | Severidad | Costo de corrección |
|---|---|---|---|
| 1 | Ramas/PRs prometidos pero ausentes del checklist real del Capstone (confirmado por 2 auditores independientes) | 🔴 Crítico | Bajo — editar `evalu.checklist` de `n1et1` + atar el Hito 4 a un flujo obligatorio de rama+PR |
| 2 | M6/M7: 40-80% menos ejercicios que M1-M3 | 🔴 Crítico | Medio — añadir 2 ejercicios por tema en M6/M7 |
| 3 | 4 "laboratorios" de M6/M7 con solución pre-resuelta | 🔴 Crítico | Medio — retirar el código ya resuelto, dejar solo el armazón |
| 4 | Investigación pedagógica de M6/M7 mucho más delgada, sin comparación institucional | 🔴 Crítico | Medio-alto — investigación adicional por tema |
| 5 | M1/M3 no gateados por ningún hito del Capstone | 🔴 Crítico | Bajo — añadir una pregunta puntual a un `evidenciaLabel` existente |
| 6 | M6/M7 nunca tocan entorno real; brecha de integración de ~38 lecciones | 🔴 Crítico | Bajo-medio — un solo punto de contacto real en M6.T2 o M7.T3 |
| 7 | C-N1-07 (inglés técnico) sin cobertura en fichas | 🔴 Crítico | Muy bajo — declarar la competencia donde ya se practica de hecho (M6.T2) |
| 8 | Type hints ausentes en N1 pese a que N2 los presupone | 🔴 Crítico | Bajo — cierre opcional de M1.T1 + nueva fila H-10 |
| 9 | `.gitignore`/Git mencionados en Laboratorio 4 antes de existir en el orden real | 🟡 Importante | Muy bajo — reescribir una frase |
| 10 | SYL-N1 §4 no refleja la linealización real de M4/M5 | 🟡 Importante | Muy bajo — nota de implementación |
| 11 | Depuración real ausente tras salir del sandbox | 🟡 Importante | Bajo — nota breve en M5.T2/T3 |
| 12 | Duraciones declaradas de 11 laboratorios compactos no justificadas caso por caso | 🟡 Importante | Medio — o elevar la plantilla, o ajustar la cifra declarada |
| 13 | `n1m7t3x` trivialmente resoluble; hints regalan la solución en varios `retoFinal` | 🟢 Menor | Bajo |
| 14 | Rótulo de navegación no comunica el diseño de retorno a M1 tras los laboratorios | 🟢 Menor | Bajo — indicador visual breve |

**No se encontraron redundancias que consolidar.**

## Respuesta directa a la pregunta de cierre

¿Puede afirmarse con confianza que el currículo es coherente, la progresión cognitiva es sólida, las competencias están completamente cubiertas, la dificultad es consistente con una academia de alto nivel, el Capstone demuestra dominio real, y un estudiante que complete N1 está verdaderamente preparado para N2?

**Hoy, no del todo.** El núcleo (M1-M5, la arquitectura de plataforma, el diseño del Capstone) sí sostiene esa afirmación. **M6, M7, y el vínculo Git↔Capstone son las tres áreas concretas que impiden decirlo con la confianza que exige el criterio de cierre** — y las tres son correcciones acotadas, no un rediseño. Recomiendo aplicar los 8 hallazgos críticos antes de escribir el Informe Final de Nivel como documento de cierre definitivo.
