# Investigación Pedagógica de N1.M2.T3 — Composición vs. herencia

*Investigación + revisión crítica integradas. Construida bajo DOC-11 v2.0.1.*

## 1–2. Fuentes y evidencia

**MIT 6.0001 Lecture 9 (la misma de T1/T2) ya introduce herencia** (el título literal de la lección es *"Python Classes and Inheritance"*), dando la base sintáctica (`class Hija(Padre):`, `super()`) que esta lección necesita antes de poder comparar herencia con composición. *(Fuente: [MIT OCW, Lecture 9](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-9-python-classes-and-inheritance/).)*

**El principio "favor composition over inheritance" tiene un origen preciso y verificable: el libro *Design Patterns* de la "Gang of Four"** (Gamma, Helm, Johnson, Vlissides, 1994), que lo enuncia literalmente en su capítulo de introducción como *"Favor object composition over class inheritance"* — no es una opinión de esta Academia, es uno de los principios de diseño más citados de toda la ingeniería de software orientada a objetos. *(Fuente: [python-patterns.guide — The Composition Over Inheritance Principle](https://python-patterns.guide/gang-of-four/composition-over-inheritance/), guía de Brandon Rhodes con ejemplos reales en Python del mismo principio de GoF.)*

**Hallazgo real — el criterio "es-un" vs. "tiene-un" de la ficha coincide exactamente con la fuente:** python-patterns.guide usa la misma distinción, con el mismo vocabulario: herencia describe una relación **"is-a"** (una clase hija *es un* tipo de la clase padre), mientras que composición describe una relación **"has-a"** (un objeto *tiene* otro objeto como parte). La ficha de SYL-N1 ya declaraba este criterio antes de esta investigación — coincide de forma independiente con el vocabulario estándar de la industria, igual que la metáfora del "molde" coincidió con CS50P en T1.

## 3. Síntesis crítica

**Decisión:** el modelo mental de la ficha ("herencia = especialización de identidad; composición = ensamblaje de capacidades. La segunda es la herramienta por defecto del profesional") se mantiene íntegro y se refuerza con el ejemplo canónico de la fuente: un sistema de logging que necesita combinar filtros y destinos de salida de forma independiente — con herencia, cada combinación nueva exige una subclase nueva ("explosión de subclases"); con composición, las piezas se combinan libremente en tiempo de ejecución.

**Autocrítica — ¿alcanza con un ejemplo abstracto de logging, o hace falta uno propio de la Academia?** La fuente usa logging (files/consola × con-filtro/sin-filtro) — un dominio válido pero algo abstracto para un estudiante que recién lleva dos lecciones de POO. **Ajuste real:** se diseña un ejemplo isomorfo pero más concreto y verificable con las clases ya construidas en T1-T2 (Producto/Inventario) — un `ProductoConDescuento` que hereda de `Producto` (relación "es-un" razonable) frente a una necesidad real de combinar comportamientos independientes (con descuento Y con envío gratis Y con garantía extendida), que empuja hacia la misma "explosión de subclases" que la fuente describe, sin necesitar el dominio de logging.

**Clasificación:** evidencia muy sólida — el principio central tiene origen documentado y verificable (GoF), y el vocabulario "es-un"/"tiene-un" de la ficha coincide independientemente con la fuente estándar de la industria, no con una elección de esta Academia. **Falsabilidad:** se reconsideraría el ejemplo de "explosión de subclases" si el registro muestra que tres subclases no bastan para que el estudiante sienta el problema real — en ese caso se ampliaría a más combinaciones, no se cambiaría el principio.

## Estado
✅ Completa con revisión crítica. 1 hallazgo real (coincidencia independiente del criterio "es-un"/"tiene-un" con la fuente estándar de la industria) + 1 ajuste real (ejemplo propio de la Academia en vez del ejemplo de logging de la fuente). No bloquea T4.
