# Investigación Pedagógica de N1.M3.T1 — Complejidad: Big-O intuitivo

*Investigación + revisión crítica integradas. Construida bajo DOC-11 v2.0.1. Abre M3.*

## 1–2. Fuentes y evidencia

**MIT dedica DOS lecciones completas al alcance exacto de esta lección:** 6.0001 Lecture 10 y 11, *"Understanding Program Efficiency, Parts 1 y 2"*, tratan la complejidad algorítmica como medida de eficiencia y la notación Big-O con sus distintas clases (constante, logarítmica, lineal, polinomial, exponencial) — el mismo alcance, en el mismo orden, que esta lección necesita. *(Fuente: [MIT OCW, Lecture 10](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-10-understanding-program-efficiency-part-1/), [Lecture 11](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/lecture-videos/lecture-11-understanding-program-efficiency-part-2/).)*

**CS50x (Harvard, Week 3 — "Algorithms") trata Big-O como el idioma para describir tiempos de ejecución, no como una fórmula matemática que memorizar:** define O(1) como "un número constante de pasos, sin importar el tamaño del problema", y O(n) como "en el orden de n" — el mismo lenguaje intuitivo, no formalista, que la ficha de SYL-N1 ya pide ("Big-O como forma de la curva, no número"). CS50x también introduce Ω (cota inferior) y Θ (cuando ambas coinciden) — vocabulario más avanzado que esta lección NO necesita todavía, y que se declara explícitamente fuera de alcance. *(Fuente: [CS50x — Week 3, Algorithms](https://cs50.harvard.edu/x/weeks/3/); [CS50x, Notes Lecture 3](https://cs50.harvard.edu/x/notes/3/).)*

**Hallazgo útil: la misma semana de CS50x cubre búsqueda Y ordenación junto con Big-O** — confirmando el orden de la propia SYL-N1 (T1 Big-O → T2 Búsqueda → T3 Ordenación): Big-O es el idioma que se necesita ANTES de poder apreciar por qué binaria le gana a lineal, o por qué ordenar "vale la pena" antes de buscar muchas veces.

## 3. Síntesis crítica

**Decisión:** el modelo mental de la ficha ("Big-O como forma de la curva, no número: ¿qué pasa cuando la entrada crece ×1000?") se mantiene íntegro — es exactamente el enfoque de CS50x ("no es un número exacto de milisegundos, es una forma de transmitir la idea del crecimiento") y el propósito histórico real de MIT L10-11.

**Autocrítica — ¿se necesita notación Ω/Θ en N1?** No — la ficha pide clasificar O(1)/O(n)/O(n²)/O(log n), sin mencionar cota inferior ni caso mejor formalmente. CS50x sí los cubre, pero para un público con más base matemática acumulada (Week 3 de un semestre completo, no una introducción aislada). **Ajuste real:** se declara explícitamente fuera de alcance Ω/Θ — el vocabulario de "peor caso" (lo que Big-O ya captura) es suficiente para N1; Ω/Θ quedan como mención de "esto existe" en Beyond the Curriculum, no como contenido evaluado.

**"Estimar antes de medir" (evidencia de dominio de la ficha, textual) tiene respaldo directo en la historia real:** el análisis asintótico nació precisamente porque medir en segundos dejó de tener sentido cuando cada máquina daba un número distinto — la ficha ya lo declara en su "Evolución de la idea", y esta investigación lo confirma como motivación histórica real, no una narrativa inventada para hacer la lección más interesante.

**Clasificación:** evidencia muy sólida — dos lecciones completas de MIT dedicadas al alcance exacto, más una semana completa de CS50x con el mismo lenguaje intuitivo. **Falsabilidad:** se reconsideraría introducir Ω/Θ si el registro muestra que los estudiantes los encuentran leyendo documentación real y los necesitan antes de tiempo.

## Estado
✅ Completa con revisión crítica. 1 decisión de alcance explícita (Ω/Θ fuera de contenido evaluado). Abre M3.
