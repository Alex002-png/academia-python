# Investigación Pedagógica de N1.M1.T2 — Listas y tuplas

*Investigación + revisión crítica integradas.*

## 1–2. Fuentes y evidencia

**MIT dedica una lección completa y exacta a este tema:** 6.0001 Lecture 5 se llama literalmente *"Tuples, Lists, Aliasing, Mutability, and Cloning"* — coincidencia total con el alcance de esta lección, no una aproximación genérica. **CMU (15-110)** tiene diapositivas dedicadas a "Aliasing and Mutability" con objetivos de aprendizaje explícitos sobre reconocer cómo el aliasing afecta valores en variables mutables, y distinguir funciones destructivas de no destructivas. *(Fuentes: [MIT OCW, Lecture 5](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/lecture-videos/lecture-5-tuples-lists-aliasing-mutability-and-cloning/); [CMU 15-110, Aliasing and Mutability](https://www.cs.cmu.edu/~15110-s20/slides/week6-2-aliasing.pdf).)*

**Investigación empírica real, no solo descriptiva de principios:** un catálogo de antipatrones de estudiantes de CS1 en C y Python (166 estudiantes de ingeniería, 41 antipatrones catalogados de 95 misconceptions) confirma que el aliasing de estructuras mutables es una fuente documentada y medida de bugs reales, no una preocupación teórica. *(Fuente: ["Catalogs of C and Python Antipatterns by CS1 Students"](https://arxiv.org/pdf/2104.12542).)*

## 3. Síntesis y revisión crítica

**Decisión:** el conflicto cognitivo central es el aliasing con mutación (`b = a; a.append(x)` afecta a `b`) — ya estaba en la ficha aprobada de SYL-N1 como pregunta ingenieril de entrevista ("Meta"), y ahora tiene respaldo directo de MIT y CMU, no solo de una fuente de entrevistas técnicas. **Autocrítica:** ¿el ejemplo de la ficha original (`a=[1]; b=a; a.append(2)`) es el más claro posible? Comparado con el tratamiento de CMU (destructivo vs. no destructivo), se puede reforzar contrastando **explícitamente** una operación destructiva (`.append()`, modifica en el sitio) con una no destructiva (`+`, crea una lista nueva) en la misma lección — la ficha original no hacía este contraste directo. **Ajuste:** se añade el contraste destructivo/no-destructivo como parte formal del Bloque 3, no solo como mención de paso.

**Clasificación:** evidencia muy sólida (MIT dedica una lección entera a este alcance exacto; hay investigación empírica real, no solo descriptiva). **Falsabilidad:** se abandonaría el énfasis en destructivo/no-destructivo si el registro muestra que añade confusión en vez de claridad.

## Estado
✅ Completa. 1 ajuste real (contraste destructivo/no-destructivo explícito). No bloquea T3.
