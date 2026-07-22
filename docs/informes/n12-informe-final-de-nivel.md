# Informe Final de Nivel — N12 · AI Systems Architect

*Conforme a DOC-11 §6ter. Memoria técnica de ingeniería al cierre de la construcción real de N12 — no repetición pedagógica del syllabus. Con este informe, N12 se congela como versión de desarrollo: 5 módulos (20 temas, 120 días) + capstone completos en `index.html`, Auditoría Integral (4 auditores) y Auditoría Adversarial Final (2 comités, 6 ataques) ejecutadas sobre la versión corta original, con sus correcciones reales ya aplicadas. **Ronda de expansión de densidad (2026-07-22):** los 20 temas fueron expandidos de 1-2 días/tema a la profundidad honesta que cada uno sostiene (120 días totales), por instrucción explícita del propietario del proyecto de igualar el estándar de MIT/Stanford/CMU/Berkeley/DeepLearning.AI/OpenAI/Anthropic. Seguida de una **segunda ronda completa de auditoría** sobre el contenido expandido — Auditoría Integral (5 agentes paralelos, uno por módulo) y Auditoría Adversarial (2 agentes: exploits de `check()`/contradicciones, y gobernanza/estándar de calidad) — con todos los hallazgos reales corregidos directamente en `index.html`. Declarado **candidato a v1.0.0** — el veredicto definitivo es exclusivamente del Director (guía §12, nunca autodeclarado).*

## 1. Objetivo global del nivel

N12 cierra los 13 niveles de la Academia (N0-N12) y las 64 competencias del catálogo canónico (DOC-01). No enseña una disciplina técnica nueva — el estudiante llega habiendo ya construido, desplegado, operado y sintetizado en local sistemas de IA reales (N7-N10) y habiendo producido conocimiento nuevo con rigor (N11). Lo que N12 exige por primera vez es **decidir bajo restricciones nuevas y defender esa decisión ante repregunta real**, en el registro profesional y el idioma (inglés) que el mercado internacional exige, cerrando con la defensa final integradora del recorrido completo (DOC-10 6.6). El objetivo no es "sabe construir" — eso ya lo certificaron N7-N10 — es "puede arquitecturar, defender y seguir aprendiendo sin curación externa": el perfil completo de un AI Systems Architect.

## 2. Competencias exactas desarrolladas

Las 6 competencias de DOC-01 (C-N12-01…06), verificadas contra instrumentos DOC-02 reales, no auto-referenciales:

| Competencia | Instrumento | Dónde se sirve |
|---|---|---|
| C-N12-01 (design doc bajo restricciones) | RM-02+RM-05 / TD-01 | M2 completo + Capstone h2 |
| C-N12-02 (system design en vivo, trade-offs, repregunta) | RM-08 / TS-01 | M1 completo + Capstone h1, h4 |
| C-N12-03 (proceso de entrevista internacional completo, en inglés) | RM-08 / TS-01 | M4 completo + Capstone h4 |
| C-N12-04 (culmina la columna vertebral, desplegada y defendida) | RM-06+RM-05 / TP-01+TD-02 | M3 + M5 combinados + Capstone h3, h5 |
| C-N12-05 (vigencia autónoma, integración real de un avance) | RM-06 / TP-01 | M5 completo + Capstone h5 |
| C-N12-06 (defensa final integradora, calibración honesta) | RM-05 / TD-03 | Defensa de cierre del Capstone — única competencia servida por TODA la carrera, sin módulo propio |

Hallazgo declarado explícitamente (no oculto): a diferencia de N3 (4 competencias, 1:1 con 4 módulos), N12 tiene 6 competencias para 5 módulos porque C-N12-04 se sirve de dos módulos combinados y C-N12-06 no tiene módulo dedicado — es, por naturaleza, la competencia de cierre de toda la carrera.

## 3. Modelos mentales fundamentales que instala

- **El framework de 4 pasos como embudo, no checklist** (M1): cada paso restringe el espacio de solución del siguiente — requisitos antes que diseño, siempre.
- **Cada patrón de arquitectura de IA responde una pregunta distinta** (M2): RAG a "qué no sabe", fine-tuning a "cómo debería comportarse", agente a "qué debería poder hacer" — nunca "cuál es más sofisticado".
- **El costo real casi nunca lo domina lo que se asume primero** (M2/M3): egress y almacenamiento, no cómputo de inferencia, dominan con frecuencia el costo real de un sistema de IA — verificado, nunca asumido.
- **Cada servicio de cómputo cede control a cambio de conveniencia en un punto distinto** (M3): EC2/ECS/Lambda no compiten por "mejor" — la decisión depende de qué necesita el componente específico.
- **Una política de mínimo privilegio se verifica empíricamente, nunca se lee y se asume** (M3.T4): probar que falla sin el permiso y funciona con exactamente el declarado.
- **Narración técnica bajo presión, en un segundo idioma, es una habilidad distinta al dominio del contenido** (M4): comprensión y producción bajo presión no son la misma capacidad, aunque compartan el mismo conocimiento base.
- **Un Result sin evidencia verificable es una anécdota, no una prueba** (M4.T3): STAR exige poder responder "¿cómo lo sabes?" con un número o una decisión documentada.
- **Vigencia autónoma se demuestra integrando, nunca solo citando** (M5): la prueba de integración real es un antes/después medible del comportamiento del sistema, nunca la sola presencia de un avance en código o documentación.

## 4. Errores que elimina

- Proponer arquitectura antes de aclarar requisitos (la causa más común de que una respuesta de system design colapse ante repregunta).
- Tratar RAG y fine-tuning como mutuamente excluyentes, o construir un agente donde un pipeline simple basta (sobre-ingeniería).
- Modelar costo de un sistema de IA solo por cómputo de inferencia, ignorando egress/almacenamiento.
- Comparar administrado-vs-autogestionado solo por precio de cómputo, ignorando el costo de operación humana.
- Usar políticas IAM amplias "para no complicarse" sin reducirlas nunca antes de producción.
- Dar respuestas conductuales con Resultados vagos, no verificables ("salió bien").
- Elegir un avance reciente por popularidad en vez de relevancia al propio sistema.
- Confundir "está en el código/la documentación" con "cambió el comportamiento real del sistema".
- Confundir "pasó mi checklist de seguridad" con "es seguro" — toda checklist tiene alcance finito, y una lista vacía de riesgos detectados nunca es, por sí sola, evidencia de sistema seguro (M2.T4, reforzado en M3.T4).
- Presentar una correlación ("antes distinto de después") como si fuera evidencia de causalidad, sin declarar qué variables se mantuvieron constantes durante la medición (M5.T2).
- Dejar un permiso IAM más amplio de lo necesario "para que funcione la integración", en vez de identificar el permiso cruzado exacto que dos componentes bien diseñados por separado exigen al combinarse (M3.T4/T5).

## 5. Qué queda deliberadamente fuera, y por qué

- **Otros proveedores cloud (GCP, Azure) con la misma profundidad que AWS.** DOC-10 §9 cita "AWS SAA si aporta"; se verificó que sus 4 dominios de certificación mapean casi 1:1 con el alcance de M3. Cubrir 3 nubes con el mismo rigor DOC-12 habría roto la densidad calibrada del nivel. Mitigado (Auditoría Adversarial, Ataque 2): M3.T5 exige explícitamente un juicio de portabilidad sobre el propio diseño, para que el estudiante nunca confunda "AWS como instanciación" con "AWS como única opción correcta".
- **Aprovisionamiento real de GPU (P5/G6).** Cubierto como decisión (M3.T3, con precios reales verificados), no como práctica de aprovisionamiento — el costo real de una instancia GPU corriendo no se justifica para practicar la comparación administrado-vs-autogestionado. Extendido tras la Auditoría Adversarial (Ataque 5): si el componente crítico del capstone resulta ser GPU/SageMaker, existe una ruta alternativa explícita de capa gratuita.
- **Contenido técnico ya cubierto por N7-N11.** Ningún tema de N12 reintroduce RAG, agentes, Kubernetes, vLLM, o lectura crítica de papers — todos presuponen ese contenido y practican la decisión sobre él (principio §3.1 del syllabus, verificado activamente por 2 de los 4 auditores integrales sin encontrar reintroducción real).
- **Un nivel N13 que reciba Herencias Declaradas de N12.** N12 es hoja terminal del grafo troncal (DOC-10 §4) — lo que "siembra" no es contenido para un nivel siguiente, es la certificación institucional completa.

## 6. Dependencias creadas para el nivel siguiente

**No aplica.** N12 es el nodo terminal del grafo de DOC-10 (§4) — no existe SYL-N13. Verificado explícitamente en el Paso 9a de `syl-n12.md` §10, a diferencia de los 11 niveles anteriores que sí declaran Herencias salientes.

## 7. Riesgos pedagógicos abiertos

- **M4 fuerza el esquema DOC-12 (13 secciones, diseñado para laboratorios de terminal) sobre un simulacro oral sin comandos ni terminal** — hallazgo real de la Auditoría Adversarial (Ataque 4), con evidencia concreta (`cmd:null` en el 100% de los pasos de M4; el campo `entorno` no encaja en ninguna categoría cerrada de DOC-12 §1; DOC-12 §2.5bis exige el error inducido "en su propia terminal", inexistente en un simulacro). La construcción real declara esta inaplicabilidad honestamente en cada ficha, pero la fricción de fondo persiste. **No se corrige en esta rama** — requiere tocar DOC-12 (Tier T1 ya sellado), fuera de la autoridad delegada a este nivel (guía §12). Recomendación elevada al Director en `syl-n12.md` §11: añadir a DOC-12 §1 una categoría de "Entorno(s) objetivo: simulacro oral/conductual", o generalizar §2.5bis de "en su propia terminal" a "en su propio entorno de práctica" — mismo patrón de generalización que DOC-12 v1.0.0 ya aplicó a "SO contemplado"→"Entorno(s) objetivo".
- **La brecha de `recursos` inline en lecciones Pyodide (M1/M2/M5), heredada sin resolver desde N1-N3** (guía §7): N12 replica la práctica de N3 (bibliografía en el syllabus, no inline en `index.html` para temas Pyodide) — los días DOC-12 de M3/M4 SÍ llevan `recursos` inline (exigido por DOC-12 §2.12), pero M1/M2/M5 no. Misma ambigüedad no resuelta institucionalmente, mencionada aquí en vez de decidida en silencio.
- **La defensa final integradora (TD-03) depende de un mecanismo de preparación del Tutor ahora declarado (`syl-n12.md` §7, tras Ataque 6) pero nunca antes probado en la práctica real** — es una hipótesis de diseño razonada (resumen curado de 5-8 decisiones del portafolio), no una evidencia de ejecución real todavía, porque N12 es el primer nivel de la carrera que exige repregunta cruzada de este alcance.
- **La expansión de densidad multiplicó por ~6 el volumen total de contenido (20→120 días) sin una tercera ronda de auditoría independiente sobre las correcciones mismas** — las dos rondas de auditoría post-expansión (Integral + Adversarial) encontraron y corrigieron hallazgos reales, pero las correcciones fueron aplicadas por el mismo agente que hizo la expansión original, no verificadas por un auditor externo adicional. Riesgo real, acotado: el patrón de verificación numérica (Python real antes de cada `check()`) y de verificación de hechos técnicos (WebSearch contra documentación oficial) se mantuvo constante en todas las correcciones, pero no hubo una "Auditoría Integral 2" formal sobre el diff final. Recomendación: si se dispone de presupuesto de revisión adicional antes de v1.0.0 definitivo, una auditoría ligera dirigida específicamente a los commits de corrección (no al nivel completo de nuevo) cerraría este riesgo con costo bajo.

## 8. Hipótesis pendientes de validación

- Que un estudiante real, al llegar al Día 7 (M1.T4, primer simulacro), efectivamente sienta el salto cualitativo que M1.T1 anuncia desde el primer día — la Auditoría Integral (Auditor 4) observó que 6 de 7 días de M1 tienen la forma estructural de cualquier ejercicio Pyodide de N1-N11, y que la experiencia distintiva de N12 solo llega en los días `modalidad:"real"`. Es una hipótesis de scaffolding razonable (construir el contenido antes de exigir la performance), pendiente de confirmar con ejecución real, no con lectura del diseño.
- Que el criterio de "juicio aplicado" de M5 (rediseñado tras la Auditoría Integral con `check()` de rúbrica — verifica justificación real + veredicto válido, no una respuesta única) produzca, en la práctica, justificaciones genuinas y no un placeholder mínimamente más largo que el original para pasar el umbral de caracteres. **Parcialmente resuelta durante la ronda de expansión:** la Auditoría Adversarial (Ataque 1) encontró 7 ejercicios de rúbrica reales (no solo en M5) donde el `check()` verificaba longitud de comentario sin contenido semántico, explotable con texto de relleno — corregidos exigiendo menciones específicas del escenario (nombres reales, términos técnicos del tema) además de longitud mínima. La hipótesis de fondo (¿un estudiante deshonesto podría seguir pasando con relleno más sofisticado?) sigue sin poder descartarse por completo — ningún `check()` de texto puede verificar honestidad, solo elevar el costo de fingirla — pero el listón subió de forma medible.
- Que el menú de restricciones del capstone (escala/costo/aislamiento, §7 del syllabus) produzca, en la práctica real de distintos estudiantes, la variedad de decisiones arquitectónicas distintas que el diseño anticipa — verificado solo en el texto, no en ejecuciones reales todavía.

## 9. Decisiones de diseño más importantes

1. **M4 y M5 reutilizan instrumentos y esquemas ya existentes (RM-08/TS-01, modalidad `"real"` del motor) en vez de inventar formatos nuevos** — verificado contra DOC-02/DOC-03 antes de diseñar, no asumido. Es la decisión de mayor apalancamiento de todo el nivel: resolvió en una tarde lo que la ficha de misión presentaba como el mayor riesgo de diseño.
2. **El capstone rediseña la columna vertebral bajo restricciones NUEVAS, nunca repite el diseño de N10** — cada escenario del menú (escala/costo/aislamiento) fuerza al menos una decisión que N10 no tuvo que tomar, evitando que el capstone de cierre sea un ejercicio de copiar-pegar el trabajo ya hecho.
3. **AWS como instanciación representativa, declarada explícitamente como tal, con juicio de portabilidad obligatorio** — decisión original más su corrección tras la Auditoría Adversarial (Ataque 2), documentando el razonamiento completo en vez de solo el resultado.
4. **La densidad de N12 se recalibró explícitamente hacia arriba tras la construcción inicial** (de 2 días/tema dominante a 120 días totales en 20 temas, 8-18 según el tema), por instrucción directa del propietario del proyecto de igualar el estándar de universidades Top 20 y equipos de investigación de punta — con el principio anti-relleno de DOC-11 v2.0.1 aplicado explícitamente por encima de la cifra literal cuando ambos entraron en tensión (varios temas de síntesis/cierre quedaron deliberadamente por debajo de 15-20 días porque forzar más habría sido relleno, no profundidad real). Verificada por dos rondas de auditoría independientes (Integral + Adversarial) sobre el contenido ya expandido, que encontraron y corrigieron relleno real donde apareció (12 ejercicios "Transferencia" sin esfuerzo real exigido, 5 pares de ejercicios sin variación pedagógica genuina) en vez de confirmar la densidad sin cuestionarla.

## 10. Qué aprendió la Academia al construirlo

- **El principio de "verificar antes de inventar" (guía §7, DOC-02/DOC-03 antes de diseñar) se paga solo en niveles de síntesis.** Verificar contra DOC-02 antes de diseñar la representación de M4/M5 ahorró un rediseño completo y produjo una solución más coherente con el resto de la Academia que cualquier formato inventado desde cero.
- **La disciplina de verificación numérica (guía §9) se extiende, sin relajarse, a datos de mercado reales** — el hallazgo de M3.T3 (SageMaker 20-40% más caro que EC2, verificado por WebSearch antes de escribirse, con cifra de referencia real) es la misma disciplina que N3 aplicó a `numpy.linalg.inv()`, ahora aplicada a precios de un proveedor cloud real.
- **Ni la Auditoría Integral ni la Adversarial encontraron motivo para cuestionar la premisa arquitectónica del nivel** — las correcciones reales (M5, DOC-12 en M3/M4, hints[0], portabilidad AWS, presupuesto obligatorio, preparación del Tutor) fueron todas de instanciación, no de diseño fundamental. Esto sugiere que el proceso de verificación previa (leer DOC-02/DOC-03/DOC-10/DOC-12 antes de construir, no después) reduce genuinamente la tasa de hallazgos estructurales graves en la auditoría de cierre, frente al patrón de N1-N3 donde algunos hallazgos si tocaron el diseño mismo.
- **El límite de autoridad (§12 de la guía: no editar documentos T1 desde una rama de nivel) es una disciplina real, no solo una regla — se puso a prueba con el Ataque 4** y la respuesta correcta (documentar, no editar DOC-12 en silencio ni forzar una solución de nivel para un problema de plantilla) fue más honesta que cualquier alternativa que hubiera intentado resolverlo dentro de N12 solo.

---

**Estado final:** SYL-N12 y `LEVEL12` (`index.html`) quedan **candidato a v1.0.0, densidad de publicación** — Pasos 1-9 del flujo institucional completos sobre la versión corta original, Auditoría Integral (4 auditores) y Auditoría Adversarial (2 comités, 6 ataques) ejecutadas con sus correcciones reales aplicadas. Expansión de densidad completa (20 temas, 1-2 días → 120 días totales), seguida de una segunda ronda de auditoría independiente sobre el contenido expandido (Auditoría Integral, 5 agentes paralelos; Auditoría Adversarial, 2 agentes) con todos los hallazgos reales corregidos: errores técnicos (fórmula de memoria GPU, confusión de familia de GPU AWS, comando roto), ejercicios sin esfuerzo real exigido (12 en la primera ronda, 5 pares de padding en la segunda), exploits de `check()` (7 ejercicios de rúbrica), y una inconsistencia entre el estándar de honestidad epistémica que el propio nivel enseña (M2.T4, M5.T2) y una fórmula que no lo practicaba. 1 recomendación T1 (fricción DOC-12/M4) elevada al Director sin editar en silencio, sin cambios desde el informe original. El veredicto final — como en todo nivel anterior — es exclusivamente del Director.
