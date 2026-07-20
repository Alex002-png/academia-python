# Investigación Pedagógica de N1.M1.T3 — Diccionarios y sets

*Investigación + revisión crítica integradas. Construida bajo DOC-11 v2.0.1.*

## 1–2. Fuentes y evidencia

**MIT dedica una lección al concepto exacto, aunque compartida con otro tema:** 6.0001 Lecture 6, *"Recursion and Dictionaries"*, introduce el diccionario como tipo de dato justo después de que Lecture 5 estableció listas/tuplas/aliasing — la misma secuencia que esta Academia ya siguió (T2 → T3). *(Fuente: [MIT OCW, Lecture 6: Recursion and Dictionaries](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-6-recursion-and-dictionaries/).)*

**CS50P tiene una unidad dedicada exclusivamente a diccionarios**, confirmando — igual que con "Print versus Return" en T1 — que el tema merece tratamiento propio, no una mención de paso dentro de otra lección. *(Fuente: [CS50P — Dictionaries](https://cs50.harvard.edu/python/shorts/dictionaries/).)*

**La documentación oficial de Python trata diccionarios y sets en la misma sección** ("5. Data Structures"), y ahí mismo está la regla exacta que la ficha de SYL-N1 ya declara como error habitual: las claves de un diccionario deben ser de un tipo inmutable — un string o un número siempre sirven; una tupla sirve si a su vez solo contiene elementos inmutables; **una lista nunca puede ser clave**. Esta regla no es una restricción arbitraria del lenguaje: es la consecuencia directa de lo que T2 ya enseñó (las listas son mutables, y una clave que pudiera cambiar por dentro rompería la estructura interna del diccionario). *(Fuente: [Python docs — 5. Data Structures](https://docs.python.org/3/tutorial/datastructures.html).)*

**Honestidad metodológica:** no encontré un estudio empírico de misconceptions específico para diccionarios (a diferencia del catálogo de antipatrones de aliasing citado en T2). La literatura general de misconceptions en programación introductoria (la revisión sistemática de ACM TOCE) confirma que las confusiones de novatos son un fenómeno real y bien documentado en general, pero no aporta un hallazgo específico sobre `KeyError` o búsqueda por valor — se declara la ausencia en vez de forzar la cita. *(Fuente general, no específica: ["Students' Misconceptions and Other Difficulties in Introductory Programming: A Literature Review", ACM TOCE Vol 18, 2018](https://dl.acm.org/doi/10.1145/3077618).)*

## 3. Síntesis crítica

**Decisión:** el conflicto cognitivo central es la elección estructural — buscar un dato en una lista revisando uno por uno, contra encontrarlo "de un salto" con una clave — ya está en la ficha aprobada de SYL-N1 (modelo mental "índice de un libro", pregunta ingenieril del millón de registros). MIT y CS50P respaldan que esta introducción (dict como alternativa a la lista para datos con identidad propia) es el enfoque estándar de la industria formativa, no una elección local.

**Autocrítica — ¿cuánto formalismo de "por qué es rápido" corresponde aquí?** La ficha pide defender la elección "con el coste de búsqueda como argumento" — pero N1.M3 (Algoritmos y Estructuras de Datos I) es donde el temario reserva explícitamente el análisis formal de complejidad (Big-O). Enseñar aquí la mecánica interna de las tablas hash sería adelantar contenido de M3 fuera de su lugar, y ninguna de las fuentes citadas (MIT L6, CS50P) lo hace a este nivel introductorio tampoco — ambas presentan el diccionario por su comportamiento observable (acceso por clave, no por posición), no por su implementación. **Ajuste:** el argumento de costo se enseña de forma estrictamentente empírica/observable ("buscar por clave no se vuelve más lento aunque el diccionario crezca; buscar en una lista sí, porque hay que revisar más elementos") — sin nombrar tablas hash ni notación Big-O, dejando ambas explícitamente para M3, con una mención explícita de que ahí se formalizará.

**Clasificación:** evidencia sólida para la secuencia y el alcance (MIT + CS50P + docs oficiales, los tres coinciden en presentar el diccionario por comportamiento, no por mecanismo interno). Sin evidencia empírica específica sobre misconceptions de diccionarios — declarado explícitamente. **Falsabilidad:** se reconsideraría posponer incluso la versión empírica/observable del argumento de costo si el registro muestra que confunde más de lo que aclara antes de tener M3 como base.

## Estado
✅ Completa con revisión crítica. 1 decisión de alcance explícita (el argumento de costo se mantiene observable, no mecanicista — se reserva para M3). No bloquea T4.
