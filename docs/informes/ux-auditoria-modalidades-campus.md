# Auditoría UX — Convivencia de modalidades en el Campus

*Solicitada explícitamente por el Director tras la implementación técnica (EVT-035), antes de congelar la arquitectura de DOC-07. Objetivo: validar experiencia de aprendizaje, no solo funcionamiento del código.*

## Metodología — honestidad sobre cómo se hizo esta auditoría

No existe herramienta de navegador en este entorno. En vez de conformarme con una lectura estática del código (lo que ya hice para la implementación), construí un arnés en Node.js que carga el `<script>` real de `index.html` dentro de un contexto `vm` con un DOM mínimo simulado, y **ejecuta las funciones reales de la aplicación** (`switchLevel`, `openDay`, `toggleCP`, `renderClases`) para capturar el HTML exacto que el navegador recibiría. Esto no es una prueba visual — no vi colores ni maquetación real — pero sí es una auditoría sobre el **DOM real generado**, no sobre mi intuición de lo que el código debería producir. Recorrido simulado: lista de temas de N1 → detalle del último tema Pyodide antes del laboratorio real (n1d5b) → detalle de M5.T1 vacío → M5.T1 con todos los checkpoints marcados → lista intermedia → detalle de M5.T2 vacío → M5.T2 completo → detalle del primer tema Pyodide después (n1d7).

**Advertencia metodológica, por la misma disciplina de honestidad que el Director pidió mantener:** para llegar a M5.T1 sin fricción, el arnés invocó `openDay()` directamente, sin haber completado antes los ejercicios de n1d5b — algo que un estudiante real **no puede hacer** (el botón de esa tarjeta ni siquiera tiene `onclick` cuando está bloqueada). Esto produjo un artefacto irreal en la captura (n1m5t1 apareciendo como `locked done` a la vez) que **no es un bug del producto** — es un atajo de la prueba. Se documenta aquí para no reportarlo como hallazgo falso. El resto de la cadena de desbloqueo (M5.T1 completo → M5.T2 se desbloquea) sí se verificó como alcanzable y correcta.

**Aún así recomiendo la verificación visual real en tu navegador** — esta auditoría reduce el riesgo de sorpresas, no lo elimina.

---

## Hallazgos por dimensión

### 1. Navegación
La cadena de desbloqueo funciona exactamente como se diseñó: completar los checkpoints de M5.T1 desbloquea M5.T2 en la lista, con el botón "Continuar →" citando el título correcto del siguiente tema. No se encontraron callejones sin salida ni pasos que exijan más clics que el flujo Pyodide equivalente. El único hallazgo real de esta dimensión es de **nomenclatura**, no de navegación funcional — ver Hallazgo F4.

### 2. Consistencia
El lenguaje de color ya establecido (dorado = contenido principal, cian = comprensión/reflexión, azul = nuevo en esta implementación, ámbar = advertencia, verde = logro) se reutilizó correctamente y sin inventar una paleta nueva — un estudiante reconocería el mismo "idioma visual" en ambas modalidades. El problema de consistencia real no es de color: es de **densidad**. Ver Hallazgo F2.

### 3. Identidad visual
La modalidad real no se siente como documentación incrustada — usa las mismas tarjetas, los mismos badges, la misma tipografía. Pero comete un desliz de honestidad visual real: usa la caja de "salida de terminal" (`.term`/`.termout`) para mostrar, en dos de los cuatro pasos de M5.T1, **texto que no es salida de terminal sino instrucciones del autor** — ver Hallazgo F1, el más serio de esta auditoría.

### 4. Ritmo
Aquí está la mayor discontinuidad de experiencia encontrada. Un tema Pyodide típico (n1d5b, n1d7) genera **4-5 tarjetas**. Un laboratorio real (M5.T1, M5.T2) genera **19-21 tarjetas** — una por cada una de las 13 secciones de DOC-12, sin agrupar ninguna. El estudiante que viene de una lección compacta de Pyodide entra a un laboratorio notablemente más largo de desplazar, sin ninguna transición que lo anticipe. Ver Hallazgo F2.

### 5. Carga cognitiva
La estructura de 13 secciones obligatorias de DOC-12 es correcta como *estándar de contenido* — no se está proponiendo recortarla. El problema es de **presentación**: 13 tarjetas separadas piden al cerebro "esto es un tema nuevo" trece veces seguidas, cuando varias de esas secciones (objetivo, contexto, requisitos, explicación conceptual) son, en realidad, una sola introducción continua que el estudiante lee de corrido antes de tocar la terminal. Agruparlas no pierde contenido — reduce el número de veces que la interfaz le pide al estudiante "cambia de marco mental".

### 6. Fricción
Dos fricciones pequeñas pero reales, ninguna bloqueante: (a) la sección "Diagnóstico de errores" no indica cuántos errores documentados contiene hasta que se despliega — un estudiante apurado podría no notar que hay tres, no uno; (b) nada distingue visualmente "esto es un consejo preventivo" de "te equivocaste" — ver Hallazgo F3.

### 7. Calidad percibida
Pregunta del Director, respondida con honestidad: **todavía no del todo.** El contenido y la rigurosidad pedagógica ya están al nivel que la Academia busca — eso no está en duda. Lo que impediría hoy que se sintiera 100% premium son, específicamente, dos cosas: el desliz de honestidad visual del Hallazgo F1 (un estudiante atento notaría la inconsistencia) y la densidad de tarjetas del Hallazgo F2 (se siente como "otro modo" del producto, no una extensión natural). Ambos son solucionables sin rediseñar nada — son ajustes de presentación, no de arquitectura.

---

## Tabla de hallazgos

| # | Hallazgo | Clasificación | Impacto en el estudiante | Prioridad | Propuesta de solución |
|---|---|---|---|---|---|
| F1 | El campo `resultado` de los Pasos 1 y 2 de M5.T1 mezcla salida real de terminal con instrucciones del autor ("cierra tu terminal y ábrela de nuevo"), pero ambas se muestran idénticas, dentro de la caja `.termout` que en el resto del Campus significa siempre "esto es lo que tu terminal mostrará". Rompe la propia regla de DOC-12 §2.5 ("resultado correcto exacto"). | **Crítico** | Un estudiante puede esperar ver literalmente ese texto en su propia terminal y confundirse cuando no aparece — exactamente la falta de confianza que DOC-12 existe para prevenir. | Alta — antes de construir más laboratorios reales, porque el patrón se replicaría en todos | Separar dos campos en el esquema de datos: `resultado` (solo salida real capturada, siempre en `.termout`) y `nota` (instrucciones/advertencias del autor, en un estilo visualmente distinto, p. ej. `💡` o `📌`). Revisar M5.T1/T2 con esta separación antes de replicar el patrón. |
| F2 | Un laboratorio real genera 19-21 tarjetas `.card` frente a las 4-5 de un tema Pyodide equivalente — cada una de las 13 secciones de DOC-12 se renderiza en su propia tarjeta sin agrupar ninguna. | **Importante** | Sensación de "modo distinto y más pesado del producto" al entrar a un laboratorio real; más scroll, más fricción de ritmo exactamente donde el Director pidió uniformidad. | Alta | Agrupar secciones afines en tarjetas compuestas con subtítulos internos en vez de tarjeta propia: (Objetivo+Contexto+Requisitos+Explicación conceptual) en una sola tarjeta de apertura; (Buenas prácticas+Recursos) en una tarjeta de cierre. Los Pasos, el error en vivo, los checkpoints, el diagnóstico y la evaluación se mantienen como bloques propios por ser las secciones de mayor interacción. Reduciría el conteo a ~10-12 tarjetas sin quitar una sola palabra de contenido. |
| F3 | La advertencia de instalación (Paso 2, "Add Python to PATH") se muestra con `.kobox` — la misma caja que en el resto del Campus significa "respuesta incorrecta". | **Importante** | Riesgo de leer una advertencia preventiva neutral como si fuera una señal de que algo salió mal, generando ansiedad innecesaria. | Media | Introducir una variante visual propia para advertencias informativas (ej. `.warnbox`, borde ámbar en vez de rojo/`--bad`) y reservar `.kobox` exclusivamente para retroalimentación de error real, como ya ocurre en el resto de la app. |
| F4 | Numeración "Día 10bis" / "Día 10ter" rompe la secuencia limpia "Día 9, 10, 11, 12..." usada en el resto del temario — se lee como un parche insertado, no como contenido integrado. | **Importante** | Pequeña fricción de "¿por qué el número se ve raro aquí?" justo en el momento en que el estudiante ya está procesando un cambio de modalidad — dos sorpresas a la vez. | Media | Abandonar el intento de encajar en la numeración "Día N" para temas de modalidad `real`: usar una etiqueta propia (ej. "Laboratorio 1", "Laboratorio 2") — más honesto, además, porque estos temas nunca fueron parte del conteo original de 8 días de M1. |
| F5 | El badge de modalidad (🐍 Ejercicio interactivo / 🖥️ Laboratorio de entorno real) se muestra en **todas** las tarjetas de la lista, incluidas las decenas que ya eran Pyodide antes de esta implementación. | **Importante** | Ruido visual repetitivo — la etiqueta por defecto se repite en casi cada tarjeta sin aportar información nueva, contradice el principio del Director de minimizar complejidad visible. | Media | Mostrar el badge solo cuando la modalidad NO es la por defecto (`pyodide`) — es decir, solo en laboratorios reales (y, a futuro, en cualquier otra modalidad no-default). El silencio visual en el caso común es más limpio que repetir la misma etiqueta cien veces. |
| F6 | Ningún indicio visual anima a completar las áreas de texto de evidencia (comprensión, mini laboratorio, desafío, repetición, metacognición) antes de pulsar "Continuar" — solo los checkpoints gatean el avance, por diseño (§4 de la arquitectura), pero nada lo comunica en el momento. | Mejora recomendada | Un estudiante de baja disciplina puede marcar los checkpoints y avanzar sin escribir una sola reflexión, perdiendo el valor real de esa evidencia para la defensa con el tutor. | Media-baja | Nudge no bloqueante: junto al botón "Continuar", una línea discreta tipo "Te faltan 3 reflexiones sin escribir — no bloquean tu avance, pero sí tu defensa" — informa sin fingir una corrección que el Campus no puede hacer. |
| F7 | La sección "Diagnóstico de errores" no indica cuántas entradas contiene hasta desplegarla. | Mejora recomendada | Un estudiante apurado podría no notar que hay más de un error documentado y quedarse solo con el primero que mira. | Baja | Añadir el conteo al título: "🔧 Diagnóstico de errores (3)". |
| F8 | No existe un indicador de posición por sección (equivalente al riel de fases F1-F7 de Pyodide) dentro de un laboratorio real — solo una barra agregada de % de checkpoints. | Mejora futura | Wayfinding ligeramente menos rico que en Pyodide dentro de una sesión larga (13 secciones). | Baja | Evaluar con uso real si hace falta — no construir especulativamente (mismo principio ya adoptado para `entrevista`/`proyecto`). |

---

## Fortalezas confirmadas (para no perderlas de vista al corregir)

- Cero fugas de datos (`undefined`, `[object Object]`, `NaN`) en ninguna de las ocho vistas capturadas.
- La cadena de desbloqueo (M5.T1 completo → M5.T2 se abre → botón cita el título correcto) funciona exactamente como se diseñó.
- El reuso de CSS existente (`.card`, `.chip`, `label.task`, `.codebox`/`.term`, `.mini`) logra que la modalidad real **no** se sienta como documentación pegada encima — la base visual ya es coherente, solo la densidad y dos desaciertos puntuales (F1, F3) la bajan de nivel.
- La transición de vuelta a Pyodide (n1d7) es perfectamente limpia — cero rastro de estilos o estado de la modalidad real.

## Veredicto

**La arquitectura no está lista para congelarse todavía**, por el propio criterio de cierre que fijó el Director: funciona y es internamente coherente, pero la experiencia real todavía no está a la altura del estándar — específicamente por F1 (honestidad visual) y F2 (ritmo/densidad), ambos clasificados como bloqueantes de facto aunque uno sea técnicamente "importante" y no "crítico" puro. F3, F4 y F5 son correcciones baratas que conviene resolver en la misma pasada, antes de que el patrón se replique en T6/T9, M4 y el resto de M5. F6-F8 no bloquean el cierre.

No se aplicó ninguna corrección todavía — este documento es, como se pidió, solo la auditoría.

---

## Verificación final tras correcciones (2026-07-20)

*Añadido tras la aprobación del Director de corregir F1-F5 (bloqueantes) y evaluar F6-F7 (aplicadas, aportan beneficio real al estudiante) y F8 (diferida — sin beneficio claro todavía). Mismo método: recorrido simulado completo re-ejecutado sobre el script real vía `vm`, no solo lectura de código.*

- **F1 — corregido.** `resultado` ya solo contiene salida/estado real; las instrucciones del autor ("cierra tu terminal y ábrela de nuevo") se movieron a un campo `nota` con estilo propio (`.notebox`), visualmente distinto de la caja de salida de terminal. Verificado: 0 instrucciones dentro de `.termout` en el recorrido re-ejecutado.
- **F2 — corregido.** Objetivo+Contexto+Requisitos+Explicación conceptual se unificaron en una sola tarjeta de apertura; Mini laboratorio+Desafío en una tarjeta de "Practica por tu cuenta"; Buenas prácticas+Recursos en una tarjeta de "Para seguir creciendo". Los pasos, el error en vivo, comprensión, checkpoints, diagnóstico y evaluación se mantuvieron como tarjetas propias por ser unidades de interacción real — mismo criterio que ya usa Pyodide con cada ejercicio. Resultado medido: M5.T1 pasó de 19 a 14 tarjetas, M5.T2 de 20-21 a 15-16 — una reducción real de ~25-30%, sin quitar una sola palabra de contenido.
- **F3 — corregido.** Nueva clase `.warnbox` (borde ámbar, distinta de `.kobox` que sigue significando exclusivamente "respuesta incorrecta" en el resto del Campus). Verificado: 0 usos de `.kobox` en contenido de laboratorios reales tras la corrección.
- **F4 — corregido.** "Día 10bis"/"Día 10ter" reemplazados por "Laboratorio 1"/"Laboratorio 2" — la numeración "Día N" del resto del temario queda intacta y sin discontinuidades. Verificado: 0 apariciones de "bis"/"ter" en el recorrido re-ejecutado.
- **F5 — corregido.** El badge de modalidad ahora solo aparece en tarjetas de modalidad no-default (`real`) — confirmado: en la lista completa de N1, el badge aparece exactamente 2 veces (las dos entradas reales), no en cada tarjeta Pyodide.
- **F6 — implementado** (pasó el criterio "¿mejora la experiencia del estudiante?"): aviso no bloqueante junto al botón "Continuar" cuando quedan reflexiones sin escribir, con conteo exacto — verificado mostrando "Te faltan 7 reflexiones sin escribir" en el estado de prueba (0 textos escritos, 7 campos de evidencia esperados).
- **F7 — implementado**: el título de "Diagnóstico de errores" ahora incluye el conteo, ej. "🔧 Diagnóstico de errores (3)".
- **F8 — diferido**, tal como decidió el Director: sin beneficio claro todavía frente a su coste, se reevaluará con uso real.

**Regresiones:** ninguna encontrada. Cero fugas de datos (`undefined`/`NaN`/`[object Object]`) en las ocho vistas re-capturadas; la cadena de desbloqueo M5.T1→M5.T2 sigue funcionando idéntica; la transición de vuelta a Pyodide (n1d7) sigue sin rastro de estilos de la modalidad real.

**Respuesta a la pregunta de cierre del Director — "¿se siente como otra plataforma o como la evolución natural de la misma plataforma?":** con las cinco correcciones aplicadas, la respuesta es la segunda. El mismo lenguaje visual, ahora con menos fragmentación y sin los dos deslices de honestidad/significado (F1, F3) que más la distanciaban del resto del Campus.

**Veredicto: los cuatro criterios de cierre del Director quedan satisfechos** — F1-F5 desaparecieron; la experiencia se siente uniforme; la modalidad DOC-12 ya no se percibe como producto aparte; no hay regresiones. **DOC-07 (pieza de arquitectura de modalidades) queda oficialmente congelada** — registrado como EVT-036.
