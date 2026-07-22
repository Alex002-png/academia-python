# Auditoría Integral de N5 · Deep Learning

*Mismo método institucional que N1/N2/N3: auditores independientes, sin coordinación entre sí, con mandato adversarial explícito ("intenta demostrar que este nivel NO debería existir en su forma actual"). N5 usó 3 auditores (Agent tool, `subagent_type: general-purpose`), cada uno con un ángulo disjunto, ejecutados en paralelo el 2026-07-21 sobre el contenido real ya construido (M1-M4, capstone, compuertas — commit previo a esta auditoría).*

## Ángulos de auditoría y metodología

- **Auditor A** — coherencia curricular, cobertura de competencias, integración entre módulos, banco de examen. Leyó `guia-construccion-niveles.md`, `mision-n5.md`, DOC-01 (C-N5-01…04), DOC-10 §7, `syl-n5.md` completo, y el bloque `LEVEL5` real de `index.html`. Recalculó independientemente las 24 variantes del banco de examen.
- **Auditor B** — disciplina de verificación numérica (§9), pistas no reveladoras (§10), densidad/exigencia (§8), cumplimiento DOC-11/DOC-12. Ejecutó con Python real 31 ejercicios distintos de M1/M3/M4 más las 24 variantes del banco de examen, comparando byte a byte contra `check()`. Revisó >100 `hints[0]` de los 123 ejercicios del nivel.
- **Auditor C** — calidad del capstone, experiencia del estudiante, redundancias/vacíos, preparación para N6. Leyó el capstone (`n5et3`) completo y temas completos de los 4 módulos, evaluando el recorrido como lo viviría un estudiante real.

## Hallazgo convergente principal — encontrado independientemente por 2 de 3 auditores

**Bug de rotulado en `n5m1t3c` (Día 9):** el título decía *"cierra T1... y M1"* cuando el tema que efectivamente cierra ese día es **T3** (Backpropagation) — T1 ya había cerrado en el Día 3, y M1 continúa 3 días más (T4). Auditor A lo calificó severidad MEDIA, Auditor B severidad ALTA; ambos lo identificaron de forma completamente independiente y ambos lo relacionaron explícitamente con el mismo tipo de bug que `guia-construccion-niveles.md` §3 cita como ya ocurrido en N3 ("un tema decía 'cierra T4 y M2' cuando M2 seguía 7 días más"). **Corregido**: título e `intro` de `n5m1t3c` ajustados para decir "cierra T3" y aclarar explícitamente que M1 continúa con T4.

## Hallazgos aplicados (corregidos en este commit)

| # | Auditor(es) | Hallazgo | Severidad | Corrección aplicada |
|---|---|---|---|---|
| 1 | A + B (convergente) | `n5m1t3c`: rotulado incorrecto de qué tema/módulo cierra | Media/Alta | Título e intro corregidos en `index.html` |
| 2 | B | `hints[0]` de `n5m4t2e3` y `n5m1t3e6` contenían código Python literal copiable, violando §10 | Media | Reescritos como conceptuales; el código se movió a `hints[1]`/mantiene en niveles posteriores |
| 3 | B | Patrón difuso de `hints[0]` con fórmula exacta y nombres de variable reales en `n5m1t3e7`, `n5m1t3e8`, `n5m1t3e9`, `n5m3t3e6` (construcción del motor de autograd) | Media | Reescritos a 3 niveles genuinos: concepto → acercamiento → código, en vez de 2 niveles donde el primero ya era código |
| 4 | C | Capstone (`n5et3`) ofrecía RNN/LSTM como ruta válida (hito 2), pero la clase `Valor` de M1.T3 nunca se extendió con `tanh`/sigmoide — sin scaffolding para esa ruta específica | Media-alta | Hito 2, `fueraDeAlcance`, checklist y pregunta 1 de defensa reescritos: para la ruta RNN/LSTM, la verificación equivalente es la celda manual de M3.T3 (`math.tanh`/`grad_local_tanh`) contra `nn.LSTM`/`nn.RNN` de M3.T4, no una extensión de `Valor` |
| 5 | C | Capstone exige ≥6 corridas en Colab sin mencionar el riesgo de cuota de GPU (ya anticipado en M2.T1) | Baja-media | Nota de cuota agregada a `fueraDeAlcance` del capstone |
| 6 | C | El principio §3.8 y la tabla de cobertura §8 de `syl-n5.md` afirmaban que C-N5-04 se practica "de forma distribuida desde M1" — verificado contra el contenido real, la práctica con `check()` propio está concentrada en M4.T3+capstone, con solo una pregunta reflexiva (sin `check()`) en M3.T2 | Media | Ambas secciones de `syl-n5.md` corregidas para declarar la concentración real, en vez de mantener la afirmación de diseño original sin verificar |
| 7 | A | Ítem 6 del banco de examen no declaraba la convención de varianza (poblacional, `ddof=0`) — mismo riesgo de ambigüedad silenciosa que §9 advierte explícitamente (caso real ya documentado en N3.M3.T3) | Baja | Convención declarada explícitamente en `syl-n5.md`, banco de examen Ítem 6 |
| 8 | A + C (convergente) | Fast.ai, una de las 4 fuentes de bibliografía oficial de DOC-10 §7, fue investigada en el diseño (Historial 0.1.0-draft) pero nunca citada en ningún campo `recursos:` real del contenido entregado | Baja | Agregada como recurso real en `n5m3t2` (CNN, Laboratorio 10) — el punto de contraste pedagógico más natural (enfoque top-down de Fast.ai vs. bottom-up de N5), con URL verificada |
| 9 | A | `docs/mision-n5.md` instruye explícitamente auditar la cifra de carga horaria de DOC-10 (~400h/~4 meses) contra el diseño real, siguiendo el precedente de `syl-n3.md` §3.5/§3.7 — nunca se hizo | Media | Principio §3.9 nuevo agregado a `syl-n5.md`: estimación propia (~185-215h incluyendo bibliografía externa) contra las ~400h originales — a diferencia de N3 (subestimado), aquí DOC-10 parece haber SOBREestimado; declarado como hallazgo pendiente de decisión del Director, sin editar DOC-10 (Tier T1 sellado) |

## Hallazgos documentados, NO corregidos unilateralmente (decisión explícita, con justificación)

| # | Auditor | Hallazgo | Por qué no se corrige aquí |
|---|---|---|---|
| 10 | B | Ausencia sistémica de 5 de los 6 elementos del Bloque 6 de DOC-11 (recursos recomendados, defensa socrática, seis preguntas de excelencia, reflexión metacognitiva, lectura dirigida, Beyond the Curriculum) en ~20 de los 27 días Pyodide del nivel — presentes solo en los 6 laboratorios DOC-12 y el capstone | **Mismo patrón heredado que N3** (verificado por el propio Auditor B contra `LEVEL3`) — `guia-construccion-niveles.md` §7 identifica esta ambigüedad como "brecha heredada, no resuelta" y ordena explícitamente *"menciona esta ambigüedad explícitamente en tu propia auditoría de cierre... en vez de decidir en silencio cualquiera de las dos direcciones"* — exactamente lo que este documento hace. Retrofit completo de 6 campos nuevos en 20 días excede el alcance de una corrección de auditoría y requeriría decisión explícita del Director sobre si aplica también retroactivamente a N3. **Declarado aquí como hallazgo pendiente de decisión institucional, no como defecto a corregir en silencio.** |
| 11 | A | Discrepancia entre la tabla de mapeo de competencias de DOC-10 §Apéndice (que omite M3 para C-N5-01…03) y la tabla de cobertura real de `syl-n5.md` §8 (que sí atribuye correctamente parte de esas competencias a M3.T1-T4) | DOC-10 es Tier T1 ya sellado — no editable desde este nivel (mismo principio que rigió N3 con hallazgos similares contra DOC-10). El syllabus construido es la interpretación correcta verificada contra el texto literal de las competencias; la tabla resumen de DOC-10 parece desactualizada. **Declarado aquí como recomendación para el Director, no autocorregido.** |
| 12 | B | `n5m1t2e10`/`n5m1t2e11` (mismo MLP evaluado en otra entrada) aportan poca novedad incremental — variación débil bajo el criterio anti-relleno de §8 | Severidad BAJA, comparable a variaciones menores ya aceptadas en N3 sin bloquear su aprobación; no justifica una reescritura completa del tema por una variación de bajo impacto en un ejercicio ya verificado y funcional. |
| 13 | B | Cifras de aceleración/no-determinismo de GPU del Laboratorio 9 (M2.T4) no verificables por el auditor sin acceso a GPU real | Ya generadas con CUDA real disponible en el entorno de construcción (documentado explícitamente en `docs/investigacion/n5-m2-pytorch.md` §10-12) — la imposibilidad de reverificación del auditor es una limitación de su propio entorno, no evidencia de un valor incorrecto. Sin acción. |

## Hallazgos positivos confirmados (los 3 auditores, independientemente)

- **Disciplina de verificación numérica (§9): 0 discrepancias** en 31 ejercicios + 24 variantes de examen re-ejecutados por Auditor B con Python real, incluyendo los casos más delicados del nivel (backprop manual, motor de autograd con nodo reutilizado, LSTM simplificada, self-attention con escalado, "n=1 miente").
- **Integración real entre módulos, no cosmética** (Auditor A y C, independientemente): verificaron leyendo código real que M2.T2 reproduce literalmente los mismos valores de M1.T3 (comparación número por número), que el capstone fuerza re-verificación sobre el proyecto propio (no el ejemplo genérico), y que las citas cruzadas entre temas están respaldadas por código ejecutable, no solo prosa.
- **Preparación para N6 sólida y verificada** (Auditor C): el `retoFinal` de `n5m3t5c` demuestra con ejecución real (no solo se afirma) la limitación exacta de la atención pura que motiva positional encoding — las Herencias Declaradas H-N6-01…06 de `syl-n5.md` §7.2 citan artefactos reales, no promesas vacías.
- **Cumplimiento DOC-12 alto** (Auditor B, laboratorios revisados completos): las 13 secciones presentes con contenido real, voz de instructor genuina, diagnóstico de 5 columnas, error inducido en vivo reproducible.
- **Sin competencias huérfanas, sin vacíos de cobertura frente al alcance de DOC-10 §7** (los 3 auditores).

## Verificación tras aplicar correcciones

`node --check` limpio sobre el bloque `<script>` completo; harnesses re-ejecutados sobre los temas modificados (`n5m1t1`, `n5m1t2`, `n5m1t3`, `n5m3t3`, `n5m4t2`) — 0 regresiones; 157 ids `n5` en total, 0 duplicados (sin cambio, solo ediciones de contenido existente, no ids nuevos/eliminados).

## Siguiente paso

Con esta auditoría integral aplicada, sigue el Paso 9 del flujo institucional: Herencias Declaradas finales (§9a, confirmando H-N6-01…06 contra el estado real de N5 ya auditado) y Auditoría Adversarial Final (§9b, mandato de demostrar que N5 no debería existir en su forma actual, síntesis de esta auditoría integral más una revisión final) — ambas dentro de `docs/syllabus/syl-n5.md`, seguidas del Informe Final de Nivel.
