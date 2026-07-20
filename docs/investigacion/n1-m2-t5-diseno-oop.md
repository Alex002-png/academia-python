# Investigación Pedagógica de N1.M2.T5 — Diseño orientado a objetos: cuándo sí y cuándo no

*Investigación + revisión crítica integradas. Construida bajo DOC-11 v2.0.1.*

## 1–2. Fuentes y evidencia

**"Stop Writing Classes" (Jack Diederich, PyCon 2012) es la fuente real y verificable del error habitual central de la ficha** ("clase para todo — sobre-ingeniería"). La charla, hoy una referencia clásica de la comunidad Python, da una heurística concreta y memorable: *si tu clase tiene dos métodos y uno de ellos es `__init__`, probablemente querías escribir una función.* Con ejemplos reales de código de producción, muestra una API refactorizada de 20 clases en 22 módulos a una sola función de 3 líneas, sin perder funcionalidad. *(Fuente: [PyCon US 2012 — Stop Writing Classes, Jack Diederich](https://us.pycon.org/2012/schedule/presentation/352/); grabación en [pyvideo.org](https://pyvideo.org/pycon-us-2012/stop-writing-classes.html).)*

**La biblioteca estándar de Python es evidencia empírica real del mismo principio, citada en la propia charla:** un espacio de nombres relativamente plano, con muy pocas clases de excepción (165 en 200,000 líneas) — prueba de que hasta el propio lenguaje, en su implementación de referencia, no recurre a clases por defecto para todo.

**Conexión honesta con T3 (Composición vs. herencia):** esta lección no introduce un principio nuevo aislado — generaliza la misma disciplina de T3 ("no reutilices con el mecanismo equivocado") un nivel más arriba: T3 preguntaba "¿herencia o composición?"; T5 pregunta "¿clase, o ni siquiera eso?". Es el mismo tipo de juicio, aplicado un paso antes en el proceso de diseño.

## 3. Síntesis crítica

**Decisión:** el modelo mental de la ficha ("la POO como una herramienta del cinturón, no el cinturón: se elige por el problema, no por doctrina") se mantiene íntegro, y ahora tiene una heurística operacional real detrás — la regla de Diederich (dos métodos, uno `__init__` → probablemente debía ser función) es concreta, aplicable y verificable en el propio código del estudiante, no una intuición vaga de "no uses tantas clases".

**Autocrítica — ¿cómo se evalúa "juicio" con ejercicios auto-corregidos?** A diferencia de T1-T4 (sintaxis verificable con un resultado único), esta lección evalúa una decisión de diseño — dos implementaciones distintas del mismo problema pueden ser ambas "correctas" en el sentido funcional. **Ajuste real de diseño de evaluación:** los ejercicios de código verifican SOLO corrección funcional (el resultado, no la forma), dejando la evaluación del PARADIGMA elegido para la defensa socrática (Bloque 6) y el laboratorio de confrontación (Bloque 5, evidencia de dominio ya declarada en la ficha: "ante tres problemas dados, elige paradigma... y defiende la elección"). Es la primera lección de la Academia donde el checker deliberadamente NO impone una forma de solución — una decisión de diseño instruccional coherente con el propio contenido que enseña.

**Clasificación:** evidencia sólida y verificable (charla real, con ejemplos de código real, cita empírica de la stdlib). **Falsabilidad:** se reconsideraría la heurística de "dos métodos, uno __init__" si el registro muestra que produce falsos positivos frecuentes (casos donde una clase pequeña sí se justificaba pese a cumplir la regla).

## Estado
✅ Completa con revisión crítica. 1 ajuste real de diseño de evaluación (checkers que no imponen paradigma, coherente con el contenido). Cierra M2 (T1–T5).
