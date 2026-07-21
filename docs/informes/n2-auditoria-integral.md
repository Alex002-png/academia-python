# Auditoría Integral de N2

*Realizada como comité externo — 4 auditores independientes, cada uno con instrucción explícita de buscar debilidades activamente, no confirmar calidad. Cada uno leyó los archivos reales del proyecto (syllabus, competencias, investigación, y los datos vivos de `index.html`) sin coordinarse entre sí ni conocer los hallazgos de los demás.*

## Veredicto anticipado

**N2 está más cerca de poder congelarse que N1 lo estuvo en su propio cierre** — construido desde el origen bajo el estándar de excelencia acordado tras N1 (EVT-044), sin el ciclo "construir rápido, corregir después" que produjo los 8 hallazgos críticos de N1. Aun así, la auditoría encontró **defectos reales**, ninguno catastrófico: una promesa de persistencia nunca construida que se filtró hasta la documentación de un tema posterior y hasta el propio Capstone; una densidad desigual en M4-M5; y una brecha entre lo que el syllabus promete narrativamente (continuidad del proyecto de N1, autonomía total de Bitácora) y lo que el contenido real entrega. El detalle completo sigue, organizado por las 10 dimensiones del criterio de auditoría ya establecido en N1.

---

## 1. Coherencia curricular

El orden de entrega real coincide exactamente con lo prometido (verificado por grep): 27 temas + capstone en orden M1→M2→M3→M4→M5→ET2, sin excepción; la numeración "Laboratorio" es continua desde N1 (Laboratorio 12→13, sin huecos); el hilo transversal de M4 (pruebas desde M1.T2) aparece exactamente en los temas que el syllabus declara.

**🟢 Menor — mención condicionada de Docker antes de su tema formal** (ya corregido en esta auditoría: `n2m3t2` ahora aclara "lo verás formalmente en M5").

## 2. Cobertura de competencias

**🔴 Importante (ya corregido) — C-N2-06 (inglés técnico) tenía cobertura nominal mucho más estrecha que su práctica real.** SYL-N2 §14 la declaraba "distribuida en fichas de M1-M5", pero se practica de hecho en las **27 de 27** fichas (cada una cita al menos un recurso en inglés — FastAPI, Pydantic, OWASP, PostgreSQL, Redis, Docker, Martin Fowler, Python logging, todos verificados por WebFetch real durante la construcción). Corregido en la tabla de §14.

**🟢 Menor (ya corregido) — la tabla-resumen de §14 subdescribía C-N2-05**, omitiendo M3 (que sí la practica en T3, T4, T5).

**C-N2-07 (DSA) — verificado, no es un hallazgo.** El propio SYL-N2 ya registra explícitamente que se evalúa en el hito de etapa 14.6, no en la compuerta de nivel — por diseño, no por omisión.

## 3. Densidad de aprendizaje

**🔴 Crítico (ya corregido) — M5 tenía un promedio de 1.40 entradas de `diagnostico` por tema, frente a 2.6-2.83 de M1-M3.** `n2m5t2` (Laboratorio 35) y `n2m5t3` (Laboratorio 36) tenían solo 1 entrada cada uno, pese a tener `pasos`/`checkpoints` comparables al resto del nivel. Llevados a 3 cada uno, con diagnósticos anclados en contenido ya presente en el propio tema (la reflexión de `errorVivo`, el `desafio` de diseñar reversión), no inventados.

**🟡 Importante (pendiente, no corregido en esta pasada) — M4.T1-T4 tienen consistentemente menos `pasos` (4 cada uno) que el promedio de M1-M3 (5.4-6.2).** Cuatro temas seguidos con la mitad de pasos que el módulo de referencia es un patrón, no ruido — queda registrado como riesgo pendiente de validación, no bloqueante.

**🟢 No encontrado — laboratorios con solución pre-resuelta.** A diferencia de N1, N2 no reutiliza ese patrón (solo `n2m1t1r` tiene `reto`, con armazón genuino).

## 4. Nivel de exigencia

**🟡 Importante (pendiente) — los 8 `hints` de `n2m1t1`/`n2m1t1b` (el único bloque Pyodide de N2) regalan la solución completa, no un empujón parcial.** Contraste real: el `retoFinal` de ese mismo tema sí usa hints socráticos sin código — el patrón contrario sería deseable en el resto. Queda registrado, no corregido (bajo impacto: es un solo bloque de 7 temas del nivel).

**🟡 Importante (pendiente) — cero comparación institucional (MIT/CMU/Berkeley) en la investigación de N2**, aunque las fuentes primarias citadas sí son reales y verificadas por WebFetch. Más honesto que el defecto equivalente de N1 (que no declaraba el vacío): 2 de 6 documentos de investigación de N2 sí declaran la ausencia explícitamente; el resto ni siquiera la plantea. Queda como mejora pendiente para la reconstrucción de N3 en adelante.

**🟢 No encontrado — `retoFinal` trivial.** `n2m1t1x` exige predecir pérdida de `__name__` en decoradores anidados — más exigente que lo que precede, no más fácil.

## 5. Integración

**Hallazgo positivo, verificado con evidencia — el problema de N1 (M6/M7 aislados hasta el Capstone) no se repite.** Los 26 temas de M1-M5 encadenan de verdad: mismo `main.py`, misma variable `productos_db`, mismo `usuarios` reutilizados de tema en tema (verificado línea por línea). El hilo de calidad (H-04) es real, no solo narrado: pasos concretos con `pytest`/`TestClient`/`assert` desde M1.T2 hasta M2.T3.

**🟡 Importante — Bitácora es menos autónoma de lo que el syllabus la describe.** SYL-N2 insiste en que "sigue llamando entre sesiones... exista o no el estudiante para verlo", pero en el contenido real es un script (`bitacora_cliente.py`) que **el propio estudiante ejecuta manualmente**. Compromiso razonable para un curso autodidacta, pero el lenguaje narrativo sobrevende la autonomía temporal. Queda registrado, no corregido — cambiarlo exigiría infraestructura real (un proceso en segundo plano) que excede el alcance de "corrección", no una edición de texto.

## 6. Redundancias

**Ninguna encontrada tras búsqueda activa.** Decoradores/closures de M1.T1 vs. N1 (cero ocurrencias previas de "closure", coherente con H-01); Pydantic (M1.T3) vs. N1.M6.T3; auth/JWT (M2) vs. cualquier tema previo; PostgreSQL (M3.T2) vs. SQL de N1.M7; TDD/cobertura (M4) vs. la primera prueba sembrada en M1.T2 — en todos los casos el tema posterior se apoya como callback declarado, nunca re-enseña desde cero.

## 7. Vacíos

**🔴 Crítico (ya corregido) — la persistencia SQLite prometida en el diseño de M1 nunca se construyó, y un tema posterior lo afirmaba falsamente.** M1 usa exclusivamente diccionarios en memoria (`productos_db = {}`); `n2m3t2` afirmaba en su propio `contexto`: *"SQLite (usado desde N1.M7 y M1 de este nivel)..."* — una premisa falsa. Corregida para reflejar la realidad (diccionarios en memoria, decisión deliberada para no combinar dos aprendizajes nuevos en M1) sin alterar los pasos de migración, que ya eran honestos y correctos.

**Resuelto (a favor de N2, confirmado en esta auditoría) — el hallazgo de N1 "ninguna disciplina de depuración sobrevive la salida del sandbox" sí se resolvió en N2:** los 26 temas reales tienen bloque `errorVivo` con diagnóstico de errores reales, práctica distribuida en vez de un tema dedicado.

**🟡 Importante — el cierre de N2 no hace ningún gesto hacia N3.** Grep de "N3"/"Nivel 3" sobre todo `LEVEL2`: cero ocurrencias. SYL-N2 sí tiene Herencias Declaradas (H-N3-01…05) internamente, pero nunca llegan al contenido que el estudiante lee. Queda pendiente, no bloqueante — mismo tipo de mejora de bajo costo que se podría añadir en el cierre del Capstone.

## 8. Capstone

**🟡 Importante (ya corregido) — la "arqueología completa" apuntaba al tema equivocado.** El hito 4 y el checklist del capstone (y el propio SYL-N2 §14) decían "recorre la historia de commits desde M1.T1" — pero M1.T1 (`n2m1t1`, decoradores) vive en Pyodide, sin estado ni repositorio; el primer commit real ocurre en M1.T2 (Laboratorio 13). Corregido en las 3 ubicaciones (hito, checklist, SYL-N2).

**Lo que sí funciona (verificado, no asumido):** a diferencia del bug de N1 (M1/M3 sin gate real en el Capstone), aquí M1 y M3 sí están gateados explícitamente en el checklist como condición del hito 3. La "pregunta de validación final" y la "arqueología completa" están presentes, tal como exige el syllabus. La dependencia entre las 5 garantías está descrita explícitamente, aunque —igual que en N1— vive en la honestidad evaluada por el tutor, no en un `check()` automatizado (el capstone entero tiene `ex:[]`).

## 9. Experiencia del estudiante

**🟡 Importante — el puente narrativo N1→N2 promete continuidad que el contenido real no entrega.** SYL-N2 §2 sugiere que N2 continúa el proyecto de dominio libre de N1 (Biblioteca personal, Monitor de precios, etc.), pero `n2m1t2` arranca de cero con un consumidor fijo (Bitácora) que el estudiante no eligió — el proyecto de N1 nunca reaparece. Mismo tipo de brecha "narrativa vs. contenido construido" que N1 ya tuvo en otros puntos.

**🟢 Menor — doble numeración confusa en la transición N1→N2.** "Día" termina N1 en 56, se reinicia a 1-2 en N2.M1.T1 (Pyodide) y luego salta permanentemente a "Laboratorio" (que sí continúa sin reinicio desde N1). El cambio de convención no está señalizado en ningún lado visible al estudiante.

**🟢 Menor — monotonía de formato:** 26 de 28 temas de N2 (92.8%) son modalidad "real" sin variedad Pyodide desde el Día 2 hasta el Capstone. Probablemente intencional (inmersión profesional), mitigado por contenido rico por tema — no hay evidencia de que produzca fatiga, a diferencia de la monotonía estructural que N1 sí documentó como riesgo real.

**No encontrado — ninguna racha larga sin entregable intermedio.** A diferencia de M6/M7 de N1, cada Laboratorio de N2 es modalidad real con checkpoints verificables — el sistema acumulado siempre es tangible al cerrar cada módulo.

## 10. Preparación para N3

No existe `docs/syllabus/syl-n3.md` todavía. SYL-N2 sí hace el trabajo interno (H-N3-01…05, auditoría de coherencia con "cero prerrequisitos ocultos" ya declarada en su propio paso 9). El hallazgo real es el mismo del punto 7: ese trabajo nunca llega al estudiante dentro del Campus.

---

## Síntesis priorizada de correcciones

| # | Hallazgo | Severidad | Estado |
|---|---|---|---|
| 1 | M5 con diagnóstico muy delgado (1.40 vs 2.6-2.83 del resto) | 🔴 Crítico | ✅ Corregido (`n2m5t2`/`n2m5t3` a 3 c/u) |
| 2 | Persistencia SQLite prometida en M1, nunca construida, afirmada falsamente en `n2m3t2` | 🔴 Crítico | ✅ Corregido (texto alineado con la realidad, sin tocar los pasos ya honestos) |
| 3 | C-N2-06 declarada "distribuida" cuando es universal (27/27 fichas) | 🔴 Importante | ✅ Corregido (SYL-N2 §14) |
| 4 | Arqueología del Capstone apunta a M1.T1 en vez de M1.T2/Laboratorio 13 | 🟡 Importante | ✅ Corregido (3 ubicaciones) |
| 5 | C-N2-05 subdescrita en §14 (omite M3) | 🟢 Menor | ✅ Corregido |
| 6 | Docker mencionado antes de su tema formal (M5) sin calificar | 🟢 Menor | ✅ Corregido |
| 7 | M4.T1-T4 con menos pasos que el promedio del nivel | 🟡 Importante | ⏳ Pendiente — registrado, no bloqueante |
| 8 | Hints de `n2m1t1`/`n2m1t1b` regalan la solución completa | 🟡 Importante | ⏳ Pendiente — bajo impacto (1 de 7 temas) |
| 9 | Cero comparación institucional en la investigación de N2 | 🟡 Importante | ⏳ Pendiente — mejorar desde N3 en adelante |
| 10 | Bitácora menos autónoma de lo que el syllabus narra | 🟡 Importante | ⏳ Pendiente — exigiría infraestructura real, no solo texto |
| 11 | Cierre de N2 sin ningún gesto hacia N3 en el contenido | 🟡 Importante | ⏳ Pendiente — bajo costo, se puede añadir con la reconstrucción de N3 |
| 12 | Puente narrativo N1→N2 promete continuidad de proyecto que no ocurre | 🟡 Importante | ⏳ Pendiente — decisión de diseño a revisar, no un bug simple |
| 13 | Numeración Día/Laboratorio confusa en la transición N1→N2 | 🟢 Menor | ⏳ Pendiente |
| 14 | Monotonía de modalidad (92.8% real) | 🟢 Menor | ⏳ Pendiente — sin evidencia de que cause fatiga |

**No se encontraron redundancias que consolidar.**

## Respuesta directa a la pregunta de cierre

¿Puede afirmarse con confianza que el currículo es coherente, la progresión cognitiva es sólida, las competencias están completamente cubiertas, la dificultad es consistente con una academia de alto nivel, el Capstone demuestra dominio real, y un estudiante que complete N2 está preparado para N3?

**Sí, con 4 correcciones críticas/importantes ya aplicadas en esta misma pasada** (M5, SQLite, C-N2-06, arqueología del Capstone) y **8 hallazgos menores registrados como riesgos pendientes, ninguno bloqueante.** A diferencia de N1, que necesitó una segunda pasada completa de correcciones antes del Informe Final, N2 llega a este punto con defectos ya corregidos dentro de la propia auditoría — la evidencia más fuerte de que construir desde el origen bajo el estándar acordado (EVT-044) funcionó como se pretendía.
