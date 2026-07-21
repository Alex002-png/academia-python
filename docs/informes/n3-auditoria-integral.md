# Auditoría Integral de N3

*Realizada como comité externo — 4 auditores independientes, cada uno con instrucción explícita de buscar debilidades activamente, no confirmar calidad, y cada uno con un lente adicional distinto (cobertura general; exactitud numérica/técnica con reejecución real de Python; narrativa pedagógica/experiencia del estudiante; completitud institucional/consistencia documental). Cada uno leyó los archivos reales del proyecto (syllabus, competencias, plan maestro, investigación pedagógica, y los datos vivos de `index.html`) sin coordinarse entre sí ni conocer los hallazgos de los demás — mismo método que ya se usó para N2. Este documento sintetiza los 4 informes independientes, aplica las correcciones adicionales que su convergencia justificó, y dejó pendiente lo que exige criterio del Director.*

## Veredicto anticipado

**N3 es la construcción más sólida de las tres auditadas hasta ahora en sus ejes estructurales y técnicos** — los 4 auditores, trabajando sin coordinación, reconciliaron de forma independiente y exacta los mismos conteos de ejercicios/ids que el propio historial de construcción declara (85/70/72/55 ejercicios; la secuencia de ids creciendo de 557 a 892-895), no encontraron ninguna competencia sin cobertura real (a diferencia de C-N1-07/C-N2-06), verificaron que los 3 hallazgos técnicos más presumidos del nivel (el `nan` silencioso de `numpy.linalg.inv()` en Pyodide, el `ddof` distinto entre `numpy.var`/`numpy.cov`, la colisión de significado de σ) están genuinamente entregados en el texto real de los ejercicios, y confirmaron —leyendo el objeto completo, no solo la narrativa— que el Capstone ET3 integra los 4 módulos de verdad y está limpio de cualquier lenguaje de Git/entorno real, tal como su diseño declara.

**Donde los 4 auditores convergieron, de forma independiente, en encontrar debilidades reales:** (1) un tema (M2.T4, descenso de gradiente) tenía 8 ejercicios contra 10 de sus hermanos — encontrado por los 4 auditores con números casi idénticos, ahora corregido añadiendo 2 ejercicios reales y verificados; (2) el patrón de `hints` que regalan la solución completa en vez de dar un empujón parcial — señalado como observación menor en N1, como hallazgo limitado en N2, y ahora encontrado por los 4 auditores de N3 como el patrón dominante de prácticamente todo el nivel (estimaciones entre 79% y 92% de los ~285 ejercicios regulares), un salto de escala real que se documenta aquí sin corregir de raíz (ver nota de alcance abajo); (3) un error factual real y aislado (`n3m2t4c` afirmaba "cierra T4 y M2" cuando M2 continúa 7 días más) — encontrado y corregido en el propio proceso de auditoría; (4) desincronización real entre el ritmo de construcción del contenido y el aparato institucional que lo documenta (Blueprint y encabezado del syllabus) — dos casos concretos, ya corregidos.

**Nota de alcance sobre el hallazgo #2 (hints):** a diferencia de los hallazgos #1, #3 y #4 (acotados, de bajo-medio costo, ya corregidos en esta misma pasada), una reescritura completa de ~285 pistas hacia un formato progresivo (conceptual→código) es, en palabras de uno de los auditores, una tarea de "revisión de autoría, no una edición mecánica" — equivalente en esfuerzo a reconstruir una fracción sustancial del nivel. Se decidió NO intentar esa reescritura bajo la presión de esta misma sesión de auditoría (el riesgo de introducir errores nuevos revisando 285 pistas rápidamente supera el beneficio de una corrección apresurada) y, en su lugar, documentarlo con máxima claridad como el hallazgo más importante y ya reincidente (tercera vez consecutiva, en su mayor escala) para que el Director decida si amerita una pasada dedicada antes de N4, o si se institucionaliza como regla de DOC-11 (estándar de autoría de lecciones) para que no vuelva a ocurrir en el diseño de contenido futuro.

---

## 1. Coherencia curricular

Verificado de forma independiente por los 4 auditores (grep directo, no confianza en la prosa): secuencia de "Día" 1→67 sin huecos ni traslapes, M1=Días 1-21, M2=22-39, M3=40-57, M4=58-67 — coincide exactamente con la densidad declarada. Ids sin colisiones (verificado también contra los otros 3 niveles: 895 ids totales del Campus, 0 duplicados reales).

**🟢 Menor (corregido en esta auditoría) — `n3m2t4c` afirmaba falsamente "cierra T4 y M2" en su título Y en su `intro`**, cuando M2 en realidad continúa con T5 (Días 34-36) y T6 (Días 37-39, el cierre real del módulo). Un estudiante que llegara al Día 33 habría leído que el módulo había terminado. Corregido en ambos campos (título por un auditor durante la propia auditoría; el residual en `intro` corregido en la síntesis).

**🟡 Importante (corregido en esta auditoría) — contradicción interna real entre §4 y §5 sobre la dependencia M3→M2.** §4 afirmaba "M3 no depende de M2 de forma dura", pero la propia ficha de M3.T6 (§5) exige como prerrequisito explícito "M2.T6 (regresión)" y construye su práctica principal integrándola. Corregido añadiendo la excepción explícita de T6 en §4.

**🟢 Menor (corregido en esta auditoría) — "el jacobiano" citado en §4 como razón de la dependencia M2→M1, pero nunca enseñado en ningún tema de M2** (que cubre gradiente — vector de derivadas parciales de una función escalar — pero no Jacobianos, matrices para funciones vectoriales). Corregido eliminando la mención inexacta.

**🟡 Importante (documentado, NO corregido — Tier T1, decisión del Director) — DOC-10 §6 no refleja la propia revisión honesta de duración de SYL-N3.** SYL-N3 §1 declara con transparencia que la densidad ampliada de M1-M3 sube la duración real de ~3 a ~4,6 meses (~20 semanas) — pero DOC-10 §6, el documento de mayor autoridad que un lector consultaría primero, sigue mostrando "~3 meses · ~300h" sin ninguna nota. Mismo patrón que un hallazgo ya señalado en la auditoría de N1 (SYL-N1 §4 no reflejaba una decisión ya tomada). **Se consideró corregir DOC-10 directamente y se decidió NO hacerlo**: es un documento Tier T1 ya sellado y aprobado por el Director (a diferencia de `syl-n3.md`, todavía en draft activo de esta misma construcción) — cualquier edición a un documento aprobado, incluso una nota aclaratoria de bajo riesgo, debe ser un acto del Director, no una autocorrección de quien construye el nivel subordinado. Queda como recomendación explícita para su revisión.

**🟢 Menor (pendiente) — nota al pie huérfana/duplicada en la tabla de §1** (dos notas comparten el mismo marcador de asterisco simple, con contenido parcialmente solapado). Bajo riesgo, requiere una decisión editorial menor sobre cuál conservar.

## 2. Cobertura de competencias

**Sin hallazgos de omisión — las 4 competencias (C-N3-01…04) mapean 1:1 con los 4 módulos**, con instrumento propio en examen (2 ítems del banco rotable c/u) y en el Capstone. A diferencia de C-N1-07 o C-N2-06/07, ningún auditor encontró una competencia con cobertura solo nominal.

**🟢 Menor (pendiente) — C-N3-04 acreditada parcialmente al hito 1 del Capstone (planificación/elección de paper), que no la ejercita directamente** — el ejercicio real de decodificación de notación ocurre en el hito 4, no el 1. Sobre-generosidad menor en la tabla de cobertura de §8, no una competencia realmente descubierta.

## 3. Densidad de aprendizaje

**Hallazgo convergente principal — verificado por los 4 auditores de forma independiente, con conteos casi idénticos, ahora corregido.** M2.T4 ("Optimización: descenso de gradiente desde cero", la competencia que la propia ficha declara que "mapea directo" a C-N3-02) tenía 8 ejercicios numerados contra 10 en cualquier otro tema de M1-M3 — el tema más delgado de todo el nivel, pese a ser, en palabras de su propio `intro`, "el algoritmo que entrena literalmente todos los modelos de IA desde N4 en adelante". **Corregido en esta síntesis:** se añadieron 2 ejercicios reales y verificados (`n3m2t4e9`: tasa de aprendizaje muy pequeña converge pero muy lento; `n3m2t4e10`: curvatura distinta por dimensión — una tasa estable para una dirección diverge en la otra, sembrando directamente la motivación real de las tasas de aprendizaje adaptativas que N4+ usará) — M2.T4 ahora tiene 10 ejercicios, a la par de sus 5 hermanos de módulo. Re-verificado: harness de M2 72/72 pass (antes 70/70), 895 ids en el Campus, 0 duplicados, sintaxis limpia.

**🟡 Importante (documentado, no corregido de raíz) — el estándar "12-15 ejercicios/tema" que SYL-N3 §3.8 declara para M1-M3 solo se cumple, según el conteo independiente de los 4 auditores, en 2 de 18 temas (M1.T1 y M1.T2 — los dos primeros construidos bajo EVT-066).** Los 16 temas restantes de M1-M3 entregan de forma consistente 10 ejercicios numerados (12 contando reto+retoFinal) — más denso que el estándar previo de N1/N2 (~9/tema), pero por debajo del rango que el propio documento usa para justificar alargar el nivel un ~53%. No se corrigió de raíz (añadir ejercicios reales a 16 temas para alcanzar "12-15" sería una tarea del mismo orden de magnitud que construir un módulo nuevo) — se recomienda que una futura revisión de §3.8 ajuste la cifra declarada a la realidad honesta (10-12), replicando el mismo principio de transparencia que ya corrigió la nota de duración de SYL-N3 §1.

**🟢 Menor (pendiente) — la tabla §1 declara M4 con "~9 ejercicios/tema" (cifra fijada en la fase de diseño, 0.2.0-draft, antes de construir el módulo); lo realmente construido, contado con la misma base que M1-M3 (ejercicios + reto + retoFinal), promedia 11/tema** — más cerca del estándar de M1-M3 de lo que la tabla implica. M4 sigue siendo, correctamente, el módulo menos denso del nivel, por diseño.

## 4. Nivel de exigencia

**Hallazgo convergente principal, encontrado por los 4 auditores de forma independiente (dos de ellos con análisis programático de los arrays `hints`) — las pistas de los ejercicios regulares (`ex`/`reto`, excluyendo `retoFinal`) regalan la solución completa o dicen "código ya completo, ejecútalo" en, según las tres estimaciones independientes, entre 79% y 92% de los ~285 ejercicios del nivel.** Esto es la misma familia de defecto que N1 marcó como "observación transversal, no exclusiva" y N2 marcó como "Importante (pendiente), pero limitado a 1 de 7 temas" — en N3, verificado por 4 lecturas independientes, es el patrón dominante de prácticamente todo el nivel, no una excepción contenida. **No se corrigió en esta pasada** (ver "Nota de alcance" en el Veredicto anticipado) — se deja documentado como el hallazgo más importante de esta auditoría, con recomendación explícita de elevarlo a regla verificable de DOC-11 antes de que N4 repita el mismo patrón por cuarta vez.

**Contraste positivo, verificado por 3 de los 4 auditores de forma independiente — los 24 `retoFinal` ("desafío final inédito") son estructuralmente distintos y genuinamente exigentes.** Presentan código ya completo (nunca `pass`) y piden predecir el resultado ANTES de ejecutar; sus pistas son conceptuales, nunca literales, porque no hay código que escribir. Ninguno de los 24 revisados por los distintos auditores resultó trivial. El rigor real de "derivar antes de ejecutar" que el nivel entero promete vive, verificablemente, en esta pieza del diseño — no en el cuerpo de ejercicios regulares.

**Fortalezas verificadas con ejecución real independiente (no solo lectura) — 39+ casos de código reejecutados con Python/numpy reales por un auditor, más verificación manual de las 24 variantes del banco de examen por otros dos: cero números incorrectos, cero comparaciones de flotantes por `==` exacta sin tolerancia, cero discrepancias entre lo que una pista explica y lo que el código produce realmente.**

**🟡 Importante (pendiente, de bajo costo) — un auditor señaló que los signos de autovectores de la mini-PCA de M1.T7 se verificaron contra numpy nativo en esta auditoría, sin evidencia visible en el propio artefacto de una re-verificación explícita contra la build de Pyodide real del Campus** — a diferencia del hallazgo de `numpy.linalg.inv()` de M1.T5, donde esa verificación cruzada SÍ se documentó explícitamente. Nota de contexto para el Director: según el registro de construcción de esta sesión, los valores de T7 SÍ se verificaron contra Pyodide real en su momento (confirmados byte-idénticos a numpy nativo) — pero esa verificación vive en scripts de sesión, no en el propio `index.html` ni en un EVT que la documente explícitamente, por lo que un auditor futuro (o este mismo comité) no puede confirmarlo sin volver a ejecutarla. Se recomienda, de bajo costo, volver a correr esos 2 ejercicios en Pyodide real y documentar el resultado en un EVT antes de v1.0.0, para que la verificación sea auditable por cualquiera, no solo recordada.

**🟡 Importante (pendiente) — una recomendación explícita de la propia auditoría de N2 nunca se ejecutó en N3.** `docs/informes/n2-auditoria-integral.md` pedía explícitamente "comparación institucional (MIT/CMU/Berkeley)... pendiente para la reconstrucción de N3 en adelante." Verificado por un auditor: ninguno de los 4 documentos de `docs/investigacion/n3-*.md` ni `syl-n3.md` contiene esa comparación — aunque, a diferencia del defecto original de N2, la ausencia SÍ se declara honestamente en cada documento de investigación (sección "Ausencia declarada"), en vez de ocultarse. Queda pendiente para N4.

## 5. Integración

**Sin hallazgos negativos — confirmado por los 4 auditores con evidencia directa, no solo narrativa.** M4 reutiliza literalmente nombres de función de M1-M3 (`capa_lineal`, `gradiente`, `esperanza`/`varianza`/`covarianza`, `sigmoide`) como callbacks explícitos y etiquetados (un ejercicio de M4 se titula literalmente "callback directo a M3.T1"). M3.T6 reutiliza la regresión de M2.T6 dentro del mismo proyecto EDA. El Capstone exige, en el propio texto de sus hitos (no solo en la síntesis de diseño), que la regresión del hito 3 y la fórmula del hito 4 usen las MISMAS funciones del hito 2 — evitando el defecto estructural que N1 tuvo (M6/M7 aislados hasta el Capstone). Ningún auditor encontró un módulo aislado o un capítulo de integración fingida.

## 6. Redundancias

**Ninguna redundancia real encontrada tras búsqueda activa de los 4 auditores**, igual que en N1 y N2.

**🟢 Menor (pendiente) — dos campos `ing` (M2.T4 y M2.T6) comparten casi la misma frase y armazón retórico** ("entrenar [cualquier modelo] — desde uno simple hasta uno con miles de millones de parámetros — es exactamente esta misma operación"), encontrado por un auditor. Bajo impacto: son temas pedagógicamente relacionados por diseño (T6 se apoya en T4), pero el eco textual específico no parece intencional.

## 7. Vacíos

**Confirmado por 3 de los 4 auditores, cada uno de forma independiente — los 3 hallazgos técnicos más presumidos del nivel están genuinamente entregados en el texto real de ejercicios, no solo prometidos en el log de construcción:** el `nan` silencioso de `numpy.linalg.inv()` en Pyodide (M1.T5, con prohibición explícita de `try/except` verificada por regex en el propio `check()`), el `ddof` distinto entre `numpy.var`/`numpy.cov` (M3.T3), y la colisión de significado de σ como cierre de todo el nivel (`n3m4t5x`, verificado numéricamente: 2.0 ≠ 0.5).

**🔴 Hallazgo específico de un auditor, con lente narrativo — los 5 "estándares" pedagógicos que `syl-n3.md` §5 diseña con prosa cuidada y específica para cada módulo (quiebre de intuición, supuesto que destruye, idea universal, lo que deja de sorprender, limitación humana que compensa) tienen 0 apariciones verificadas por grep exhaustivo en todo `index.html`** (ninguna variante textual ni de campo de datos). El auditor rastreó la causa hasta el propio código de renderizado: el campo `ficha`/`granPregunta` solo tiene ruta de renderizado en las modalidades `real` y `proyecto` (`renderRealDay`/`renderProyectoDay`) — los 24 temas de N3, modalidad Pyodide, se renderizan con una función sin ninguna ruta para estos campos. A diferencia de N2, que sí hizo visible su dispositivo equivalente ("Momento Fundacional") literalmente en títulos y etiquetas de dificultad de sus laboratorios de cierre, la adaptación de N3 ("el quiebre de intuición") nunca se materializó en ningún campo visible del estudiante — algunos temas (M3.T1, M4.T1/T5) sí lo mencionan dentro del texto libre de `intro` por hábito de redacción emergente a mitad de sesión, pero no como plantilla garantizada. **La sustancia pedagógica de cada quiebre SÍ está genuinamente presente y es sorprendente** (verificado leyendo el contenido completo de varios casos) — lo que falta es el señalamiento explícito, no el contenido mismo. No se corrigió (requiere una decisión de diseño real: ¿nuevo campo de datos estructurado, o disciplina sistemática de incluirlo en la prosa de `intro`?) — queda como el segundo hallazgo más importante de esta auditoría, junto con el de hints.

**Positivo, verificado — H-N4-03 declara honestamente su propio límite** ("falta enseñar por qué vectorizar importa a escala — Pyodide no lo demuestra limpiamente"), mismo estándar de transparencia que ya distinguió a N2.

## 8. Capstone

**Verificado limpio en el punto más crítico por 3 de los 4 auditores, de forma independiente — cero lenguaje de Git.** Grep exhaustivo sobre las ~2270 líneas de `LEVEL3` para "git", "rama", "branch", "commit", "Pull Request": cero coincidencias reales. El campo `flujoDeGit` (presente en `n1et1` y `n2et2`) está completamente ausente de `n3et3`, confirmado comparando los 3 objetos línea por línea — exactamente como declara SYL-N3 §8.

**Verificado como diseño de integración real, no solo declarado:** h3 exige explícitamente reutilizar las funciones de h2 ("no funciones sueltas copiadas"); h4 exige apoyarse en funciones de h2-h3 en vez de reimplementar. Evita el defecto estructural de N1 (M1/M3 sin gate real).

**🟡 Importante (pendiente, mismo tipo de limitación ya aceptada en N2) — el artefacto central del Capstone (la mini-librería) no tiene forma persistente ni importable.** El código vive como texto pegado en cajas de evidencia independientes por hito (`S.ph[id].texts`), sin ejecución real ni verificación automatizada de que el código del hito 4 realmente importe las funciones de los hitos 2-3 — la integración depende de la honestidad evaluada por el tutor, no de un `check()`. Es el mismo matiz que la propia auditoría de N2 ya reconoció para su capstone equivalente ("vive en la honestidad evaluada por el tutor") — aquí se hereda sin agravarse, pero un auditor señala un riesgo real y concreto para el diseño de SYL-N4: si N4 asume que el estudiante llega con un módulo Python real y reutilizable, esa asunción no sobrevive el mecanismo real con el que N3 persiste el Capstone.

**🟢 Menor (pendiente) — el hito 1 (elegir un paper propio) no da guía de dónde buscar uno**, a diferencia de M4.T5, que entrega un fragmento ya parafraseado y listo. Introduce variabilidad de dificultad real entre estudiantes, sin ser necesariamente indeseable (parte del punto es practicar la búsqueda misma).

## 9. Experiencia del estudiante

**Sin deriva de calidad de M1 a M4, confirmado por comparación directa línea por línea del primer tema (`n3m1t1`) contra el último (`n3m4t5`)** — ambos igualmente ricos en intro/intuit/mcq/ing/errores/mental/theory. Si acaso, M3/M4 muestran MÁS disciplina narrativa explícita ("la gran pregunta del módulo", verbatim) que M1/M2, un hábito que emergió a mitad de sesión, no que se perdió.

**🟢 Riesgo de monotonía estructural, mayor en términos brutos que el precedente de N1/N2 pero mitigado por variedad de contenido** — 19 temas de M1-M3 (57 días) siguen sin excepción el mismo esqueleto de 3 días. A diferencia de la monotonía de modalidad de N2 (92,8% "real", no declarada como intencional del mismo modo), la monotonía de N3 (100% Pyodide) es una decisión de diseño explícita y justificada en §3.1 — pero la repetición del ESQUELETO de 3 días, no de la modalidad, es un hallazgo genuino y más extenso que sus precedentes. Sin evidencia de que produzca fatiga real (no medible sin datos de uso).

**🟢 Menor (observación, no defecto confirmado) — M1.T7 (autovalores/autovectores), el tema que la propia investigación pedagógica cita como "el que muchos estudiantes encuentran particularmente poco intuitivo", llega al final de una racha de 21 días ya densa** — un paralelo real (aunque no tan grave, por el andamiaje previo genuinamente sólido de T3+T5+T6) al "Día 33" que la auditoría de N1 ya señaló como punto de fatiga combinada con dificultad.

**🟢 Menor (pendiente) — "la gran pregunta del módulo" aparece verbatim en M3/M4, ausente o distinta en M1/M2** — consistente con el mismo hábito de redacción emergente ya señalado en Dimensión 1/7.

## 10. Preparación para N4

**Las 5 Herencias Declaradas (H-N4-01…05) se sostienen contra el contenido REALMENTE construido, no solo contra el plan** — verificado por los 4 auditores, cada uno cruzando una porción distinta contra el código real de `index.html`.

**🟡 Importante (corregido en esta síntesis) — H-N4-04 describía N4.M3 como "clasificadores probabilísticos"; el texto real de DOC-10 §6 dice "ML clásico aplicado (scikit-learn: árboles, SVM, ensembles, clustering)"**, sin mención de clasificadores probabilísticos. Encontrado por un auditor mediante lectura directa y cruzada de ambos documentos. Corregido: H-N4-04 ahora describe la conexión real (N4.M4/métricas se apoya más directamente en el vocabulario de M3 que N4.M3/ML clásico, donde la conexión es más indirecta vía clustering), con nota explícita de la corrección aplicada.

**🟡 Importante (pendiente) — el mismo riesgo señalado en Dimensión 8 (mini-librería sin forma persistente) es, en el fondo, un riesgo de preparación para N4**, no solo del Capstone: si SYL-N4 asume una librería real e importable como punto de partida, esa asunción no se sostiene con el mecanismo actual.

---

## Síntesis priorizada

| # | Hallazgo | Severidad | Estado |
|---|---|---|---|
| 1 | M2.T4 (descenso de gradiente) tenía 8 ejercicios contra 10 de sus hermanos — convergencia de los 4 auditores | 🔴 Crítico/Importante (según auditor) | ✅ **Corregido** (2 ejercicios reales añadidos, verificados: harness M2 72/72, 0 duplicados) |
| 2 | Hints regalan la solución completa en 79-92% de ~285 ejercicios regulares — tercera vez consecutiva (N1→N2→N3), ahora a escala de nivel completo | 🔴 Crítico/Importante (según auditor) | ⏳ **Pendiente por decisión de alcance** — documentado como el hallazgo más importante sin resolver; se recomienda regla explícita en DOC-11 antes de N4 |
| 3 | Los 5 "estándares" narrativos de §5 (quiebre de intuición, etc.) nunca llegan a `index.html` — sin ruta de renderizado para modalidad Pyodide | 🟡 Importante | ⏳ Pendiente — requiere decisión de diseño (campo nuevo vs. disciplina de prosa) |
| 4 | `n3m2t4c` afirmaba falsamente "cierra T4 y M2" (título + intro) | 🟢 Menor | ✅ Corregido (ambos campos) |
| 5 | Contradicción §4/§5 sobre dependencia M3→M2 (T6 sí depende de M2.T6) | 🟡 Importante | ✅ Corregido |
| 6 | "El jacobiano" citado en §4 pero nunca enseñado | 🟢 Menor | ✅ Corregido |
| 7 | H-N4-04 describía N4.M3 incorrectamente ("clasificadores probabilísticos" vs. la descripción real de DOC-10) | 🟡 Importante | ✅ Corregido |
| 8 | Blueprint: "Hitos registrados" desactualizado (62/54/8 vs. 73/61/12 reales) | 🟡 Importante | ✅ Corregido |
| 9 | `syl-n3.md` §0: "pendiente: docs de investigación" sobrevivió a su propia resolución (EVT-073) | 🟡 Importante | ✅ Corregido |
| 10 | DOC-10 §6 no refleja la duración real (~4,6 meses) ya declarada honestamente en SYL-N3 §1 | 🟡 Importante | ⏳ Pendiente — documento Tier T1 sellado, requiere acto del Director, no autocorrección |
| 11 | Estándar "12-15 ejercicios/tema" de §3.8 solo se cumple en 2 de 18 temas de M1-M3 | 🟡 Importante | ⏳ Pendiente — ajustar la cifra declarada, o expandir 16 temas (alto costo) |
| 12 | Recomendación de la auditoría de N2 (comparación institucional MIT/CMU/Berkeley) nunca ejecutada en N3 | 🟡 Importante | ⏳ Pendiente para N4 |
| 13 | Mini-librería del Capstone sin forma persistente/importable — mismo tipo de límite ya aceptado en N2 | 🟡 Importante | ⏳ Pendiente — alto costo (infraestructura real) |
| 14 | Verificación de signos de autovectores (M1.T7) contra Pyodide real no documentada en un EVT auditable | 🟡 Importante | ⏳ Pendiente — bajo costo, recomendado antes de v1.0.0 |
| 15 | Tabla §1 declara M4 "~9 ejercicios/tema"; lo real promedia 11 con la misma base de cálculo que M1-M3 | 🟢 Menor | ⏳ Pendiente |
| 16 | Nota al pie huérfana/duplicada en tabla §1 | 🟢 Menor | ⏳ Pendiente |
| 17 | Dos campos `ing` (M2.T4/M2.T6) con frase casi idéntica | 🟢 Menor | ⏳ Pendiente |
| 18 | Hito 1 del Capstone sin guía de dónde buscar un paper propio | 🟢 Menor | ⏳ Pendiente |
| 19 | C-N3-04 acreditada parcialmente al hito 1 del Capstone (planificación, no ejecución) | 🟢 Menor | ⏳ Pendiente |
| 20 | Racha de 57 días con idéntico esqueleto de 3 días — mitigado por contenido rico, sin evidencia de fatiga | 🟢 Menor / observación | ⏳ Registrado, no bloqueante |
| 21 | M1.T7 (tema más difícil de M1) al final de una racha de 21 días | 🟢 Menor / observación | ⏳ Registrado, no bloqueante |
| 22 | "Gran pregunta del módulo" verbatim en M3/M4, ausente/distinta en M1/M2 | 🟢 Menor | ⏳ Pendiente |
| 23 | DOC-10 atribuye Coursera "Mathematics for ML" a "Deisenroth", no confirmado en el fetch directo de la propia investigación de N3 | 🟢 Menor | ⏳ Pendiente |

**No se encontraron redundancias sustanciales que consolidar.**

## Respuesta directa a la pregunta de cierre

¿Puede afirmarse con confianza que N3 es coherente, cubre sus competencias, tiene dificultad consistente, su Capstone demuestra dominio real, y un estudiante que lo complete está preparado para N4?

**Sí, con matices concretos y documentados, ninguno bloqueante para continuar el flujo institucional (Paso 9, auditoría adversarial, v1.0.0) — pero dos de ellos (hints y estándares narrativos ausentes) merecen la atención explícita del Director antes de congelar el nivel, por ser reincidentes o de alto valor pedagógico no capturado.** La coherencia curricular es sólida, verificada de forma independiente por los 4 auditores con conteos exactos, no con confianza en la prosa — los 6 defectos textuales reales que encontraron (numeración falsa, contradicciones internas, un jacobiano que no existe, una herencia mal descrita, estadísticas y marcadores desincronizados) ya están corregidos en esta misma pasada. Las 4 competencias se cubren de verdad, sin la laguna de cobertura que N1 y N2 tuvieron. El Capstone demuestra dominio real por diseño verificado (integración forzada entre hitos, cero lenguaje de Git sobrante, defensa con derivación en vivo) — con la salvedad, ya aceptada en N2, de que esa integración se evalúa por honestidad del tutor, no por verificación automatizada, y con un riesgo nuevo y concreto (la mini-librería sin forma persistente) para quien diseñe SYL-N4.

**La dificultad no es tan uniformemente consistente como el propio §3.8 afirma**, con un hallazgo ya corregido (M2.T4) y uno documentado pero no resuelto (el patrón de hints, ahora en su mayor escala tras tres niveles consecutivos). El rigor real y verificado de "derivar antes de ejecutar" vive en los 24 `retoFinal`, genuinamente exigentes y confirmados por múltiples lecturas independientes — no en el cuerpo de ~285 ejercicios regulares, donde la pista casi siempre es la respuesta.

Un estudiante que complete N3 está matemáticamente preparado para N4: las Herencias Declaradas se sostienen contra el contenido real, sin prerrequisitos ocultos encontrados por ningún auditor. Lo que esta auditoría no puede certificar sin la palabra del Director es si esas dos brechas reincidentes (hints, estándares narrativos) deben resolverse antes de v1.0.0, o quedar registradas como riesgo pendiente de validación — la misma decisión que N1 y N2 ya tuvieron que tomar, y que corresponde al Director, no a este comité.

---

**Correcciones aplicadas durante esta auditoría (6 en el propio proceso de los 4 auditores + 3 en la síntesis):** título e intro de `n3m2t4c`; contradicción §4/§5 sobre M3→M2; mención inexistente del jacobiano; estadísticas del Blueprint (Apéndice E); marcador "pendiente" obsoleto en `syl-n3.md` §0; 2 ejercicios nuevos verificados en M2.T4 (harness 72/72); H-N4-04 corregida contra la descripción real de DOC-10 §6.

**Verificación técnica de cierre de esta auditoría:** `node --check` limpio sobre el bloque `<script>` completo tras todas las correcciones; harness de M2 72/72 pass (antes 70/70); 895 ids en todo el Campus, 0 duplicados.

**Metodología completa:** 4 auditores independientes (Agent tool, subagent_type general-purpose), cada uno con lectura completa de `docs/syllabus/syl-n3.md`, `docs/01-perfil-egreso-marco-competencias.md`, `docs/10-plan-maestro-curriculo.md` §6, los 4 `docs/investigacion/n3-*.md`, `docs/00-ACADEMY-BLUEPRINT.md` (EVT-065…073), y lectura/grep/ejecución directa contra `index.html` — sin coordinación entre sí, siguiendo el mismo método que la auditoría de N2. Este documento fue sintetizado por el orquestador a partir de los 4 informes independientes completos.