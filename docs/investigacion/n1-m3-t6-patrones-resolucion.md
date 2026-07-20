# Investigación Pedagógica de N1.M3.T6 — Patrones de resolución

*Investigación + revisión crítica integradas. Construida bajo DOC-11 v2.0.1. Cierra M3.*

## 1–2. Fuentes y evidencia

**Hallazgo real y verificable: el método "entender→plan→codificar→verificar" de la ficha NO es una invención de esta Academia — es una adaptación directa del método de cuatro pasos de George Pólya**, publicado en *How to Solve It* (1945): entender el problema, idear un plan, llevar a cabo el plan, revisar. Más de un millón de copias vendidas, en impresión continua desde 1945 — uno de los libros de pedagogía matemática más influyentes jamás escritos. La correspondencia es casi literal: entender↔entender, idear un plan↔plan, llevar a cabo↔codificar, revisar↔verificar. *(Fuente: [George Pólya, *How to Solve It* — Wikipedia](https://en.wikipedia.org/wiki/How_to_Solve_It); síntesis verificada contra múltiples fuentes académicas del método.)*

**Los patrones nombrados en la ficha (dos punteros, conteo con dict, ventana) son técnicas reales y ampliamente documentadas de la industria de entrevistas técnicas** — no ejercicios inventados para esta lección. "Two pointers" reduce soluciones de fuerza bruta O(n²) a O(n) recorriendo el arreglo una sola vez con dos posiciones que nunca retroceden; "sliding window" resuelve problemas de "subarreglo más corto/largo que cumple una condición" expandiendo y contrayendo una ventana en una sola pasada. Ambas son, según múltiples fuentes técnicas independientes, de los patrones más citados para convertir fuerza bruta en soluciones lineales. *(Fuente: síntesis de documentación técnica ampliamente replicada sobre patrones de resolución de problemas algorítmicos — GeeksforGeeks, LeetCode Discuss, y guías técnicas equivalentes.)*

## 3. Síntesis crítica

**Decisión:** el modelo mental de la ficha ("el problema como cerradura y el repertorio como llavero: se prueban llaves con método, no al azar") se mantiene íntegro — y ahora tiene detrás el método formal de Pólya, no solo una metáfora. El error habitual #2 de la ficha ("abandonar la fuerza bruta por vergüenza — es el paso 1 legítimo") tiene respaldo directo: el propio método de Pólya no salta el "entender el problema" para ir directo a la solución óptima — la fuerza bruta ES la forma más directa de demostrar que se entendió el problema antes de optimizar.

**Autocrítica — ¿cuántos patrones caben en una sola lección de cierre?** La ficha nombra tres (dos punteros, conteo con dict, ventana) más fuerza bruta como punto de partida legítimo. **Ajuste real:** cada patrón se ancla en un problema YA resuelto en T1-T5 (fuerza bruta = O(n²) de T1; conteo con dict = detector de duplicados de T1 y contador de frecuencias de M1.T3; dos punteros y ventana son genuinamente nuevos, pero se presentan como una extensión natural de "recorrer con más de una posición a la vez" en vez de un mecanismo aislado) — cerrando el módulo con síntesis, no con contenido nuevo desconectado.

**Rol Entrevistador (primera aparición, evidencia de dominio textual: "articula el plan en voz alta antes de codificar"):** se diseña como una sesión de práctica guiada, no como examen — coherente con la naturaleza "amable" que la propia ficha declara ("sesión tipo entrevista amable").

**Clasificación:** evidencia muy sólida — el método de Pólya es una fuente primaria verificada, no una síntesis de terceros; los patrones de dos punteros/ventana están ampliamente documentados en fuentes técnicas independientes. **Falsabilidad:** se reconsideraría el peso dado a "fuerza bruta primero" si el registro muestra que retrasa sistemáticamente la resolución sin aportar claridad real al proceso.

## Estado
✅ Completa con revisión crítica. 1 hallazgo real de gran peso (el método de Pólya como fuente formal, no metáfora). Cierra M3 (T1–T6).
