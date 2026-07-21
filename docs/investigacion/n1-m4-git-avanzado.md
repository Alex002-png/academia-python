# Investigación Pedagógica de N1.M4 — Git avanzado (rebase, stash, blame, bisect)

*Construida bajo DOC-12 v1.0.0. Profundización dentro de los 4 laboratorios ya existentes (Laboratorio 5-8), no un laboratorio nuevo — decisión explícita del Director en la ronda de profundización (EVT-053) para no tocar el contador "Laboratorio N" compartido con N2.*

## 1–2. Fuentes y evidencia

**Missing Semester (MIT), lección "Version Control (git)", verificada por WebFetch directo (missing.csail.mit.edu/2020/version-control/ y su edición 2026).** Confirmado que la MISMA clase cubre, sin separación entre "básico" y "avanzado": modelo de datos de Git (snapshots, DAG de commits), staging area, CLI básico, branching y merge, remotos, y una sección explícita **"Advanced Git"**: rebase (incluido rebase interactivo), blame, stash, bisect, `.gitignore`, undo (amend/reset). Esta estructura real —una sola clase, no una serie— es la justificación pedagógica directa de la decisión del Director: profundizar Laboratorio 6/8 en vez de crear un Laboratorio nuevo replica fielmente cómo la fuente de referencia organiza el mismo contenido.

**Los cuatro comandos (rebase -i, stash, blame, bisect) fueron verificados con ejecución REAL de Git, en un repositorio de prueba, no solo con la documentación:**
- `git rebase -i HEAD~2` con `GIT_SEQUENCE_EDITOR` marcando la segunda entrada como `squash`: combinó 2 commits en 1, confirmado con `git log --oneline` antes/después.
- `git stash` / `git stash pop`: confirmado que el árbol de trabajo queda limpio tras el stash (`git status --short` vacío) y que el cambio se restaura exactamente igual al hacer pop.
- `git blame archivo.txt`: confirmado el formato real de salida (hash abreviado, autor, fecha, número de línea) por línea.
- `git bisect start` + `git bisect bad`/`good` + `git bisect run ./script.sh`: se construyó un historial real de 8 commits con un "bug" (una línea `BUG_AQUI`) insertado deliberadamente en un commit intermedio, y se confirmó que `git bisect run` con un script de detección automática encuentra exactamente el commit correcto (`"<hash> is the first bad commit"`), sin intervención manual.

## 3. Síntesis crítica

**Decisión de diseño: rebase y stash en el Laboratorio 6 (ramas), blame y bisect en el Laboratorio 8 (README/historia) — no los cuatro juntos en un solo lugar.** La razón es temática, no arbitraria: rebase/stash son operaciones sobre el TRABAJO EN CURSO de una rama (encajan naturalmente donde ya se enseña crear, cambiar y fusionar ramas); blame/bisect son operaciones de INVESTIGACIÓN sobre historia ya existente (encajan donde el Laboratorio 8 ya tenía, en prosa, un apartado de "arqueología del software" sin herramientas concretas asociadas — ahora las tiene).

**Hallazgo real en el propio SYL-N1, corregido durante esta profundización:** el apartado de cierre de M4 ("Leer la historia de un proyecto — la arqueología del software") ya mencionaba textualmente "cuándo apareció un bug (leer la historia hacia atrás)" — una descripción casi literal de lo que `git bisect` hace, sin nombrarlo. Se corrigió para citar la herramienta real (`git bisect`) en vez de solo describir la actividad en abstracto — el mismo tipo de corrección de "promesa sin instrumento" que la auditoría integral de N1 ya encontró en otros lugares (C-N1-07).

**Regla de seguridad explícita, no opcional:** tanto Missing Semester como Pro Git son categóricos — rebase NUNCA debe aplicarse sobre commits ya compartidos con otros. Esta regla se declaró como error habitual explícito en la ficha de T2 y como entrada de diagnóstico propia en `n1m4t2`, no como una nota al margen.

## 4. Clasificación y falsabilidad

**Evidencia sólida:** Missing Semester verificado por WebFetch directo, y los 4 comandos verificados con ejecución real de Git (no solo lectura de documentación) antes de escribir la lección — incluida la construcción de un caso de bisect real con un bug insertado a propósito. **Ausencia declarada:** CS50 no cubre Git en absoluto (su curso de control de versiones vive fuera del temario semanal principal) — no se fuerza esa conexión, la fuente única y suficiente para M4 avanzado es Missing Semester. **Falsabilidad:** si en una futura auditoría de N1 se determina que combinar rebase/stash/blame/bisect dentro de labs ya existentes (en vez de un laboratorio dedicado) resultó insuficiente en la práctica del estudiante, la Opción B ya diseñada (laboratorio nuevo, con su propio protocolo de renumeración) queda disponible como decisión aislada posterior — no descartada, solo diferida.

## Estado
✅ Completa. Laboratorio 6 (`n1m4t2`): +2 pasos (rebase interactivo, stash), +2 checkpoints, +1 diagnóstico, +1 recurso (Missing Semester). Laboratorio 8 (`n1m4t4`): +2 pasos (blame, bisect), +2 checkpoints, +1 diagnóstico, +1 recurso (Missing Semester). Sin cambio en el conteo de "Laboratorio N" — cero riesgo de renumeración sobre N1 o N2.
