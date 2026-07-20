# Investigación Pedagógica de N1.M3.T5 — Recursión

*Investigación + revisión crítica integradas. Construida bajo DOC-11 v2.0.1.*

## 1–2. Fuentes y evidencia

**MIT 6.0001 Lecture 6 (ya citada en M1.T3, "Recursion and Dictionaries") es la lección de recursión de MIT** — el propio título confirma que MIT trata recursión con nombre propio, no como mención de paso. *(Fuente: [MIT OCW, Lecture 6: Recursion and Dictionaries](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-6-recursion-and-dictionaries/).)*

**CS50x tiene un "short" dedicado exclusivamente a recursión**, con factorial como "problema de arranque perfecto" (`n!` = producto de todos los enteros hasta `n`) y Fibonacci como el problema clásico que permite discutir recursión-vs-iteración — y, más allá del alcance de esta lección, tiempo exponencial vs. recursión memoizada. *(Fuente: [CS50x — Recursion](https://cs50.harvard.edu/x/2023/shorts/recursion/).)*

**Conexión directa y honesta, ya declarada en la ficha:** "hay problemas naturalmente recursivos (árboles de archivos, JSON anidado — ¡ya los vio en M1.T8!)". Esta lección no presenta la recursión como una idea aislada — la ancla en un problema que el estudiante YA resolvió (leer JSON anidado en Ficheros y formatos), mostrando la estructura recursiva que siempre estuvo ahí.

## 3. Síntesis crítica

**Decisión:** el modelo mental de la ficha ("delegar en un clon más pequeño: resuelve el caso mínimo y confía en que el clon resuelve el resto — inducción hecha código") se mantiene íntegro — coincide con el tratamiento estándar de factorial en CS50x como "problema de arranque perfecto" para esta misma idea.

**Autocrítica — ¿memoización dentro de esta lección?** CS50x menciona memoización al hablar de Fibonacci recursivo (evitar recalcular los mismos subproblemas). La ficha de SYL-N1 NO la pide — su evidencia de dominio es "resuelve un recursivo nuevo sin plantilla y dibuja su pila de llamadas", no optimización de recursión. **Ajuste real:** se declara la memoización fuera de contenido evaluado — se menciona en Beyond the Curriculum como lo que resuelve el problema real de "Fibonacci recursivo ingenuo es sorprendentemente lento", sin enseñarla a fondo.

**El error habitual #2 de la ficha ("no confiar en la hipótesis recursiva — querer seguir todas las llamadas") tiene un ancla pedagógica real:** es la misma disciplina mental que separa a quien recién aprende recursión de quien ya la domina — confiar en que el caso más pequeño YA está resuelto (por la propia función, aplicada a una entrada menor) sin necesidad de trazar mentalmente cada nivel de profundidad. T4 (Pilas y colas) preparó el terreno visual exacto para esto: la pila de llamadas ya es una pila real, con la misma disciplina LIFO.

**Clasificación:** evidencia sólida — MIT dedica la lección con nombre propio; CS50x confirma factorial/Fibonacci como los ejemplos canónicos. **Falsabilidad:** se reconsideraría introducir memoización si el registro muestra que el estudiante llega a N2+ sin poder reconocer por qué un Fibonacci recursivo ingenuo es lento.

## Estado
✅ Completa con revisión crítica. 1 decisión de alcance explícita (memoización fuera de contenido evaluado). Cierra la construcción de T1-T5; T6 (Patrones de resolución) cierra M3.
