# Ficha de Misión — N12 · AI Systems Architect

**Antes de nada:** lee completo `docs/guia-construccion-niveles.md` — este documento asume que ya lo hiciste. Aquí solo va lo específico de tu nivel. Nota especialmente su prioridad explícita de nivel/dificultad/profundidad (callout al inicio y §8) — eres el nivel de cierre de TODA la carrera; el estándar debe sostenerse en su punto más alto, no relajarse por ser el final.

**Tu carpeta:** `C:\Users\USER\academia-python-n12\` · **Tu rama:** `nivel/n12`. Confirma ambas (`git branch --show-current`) antes de escribir nada.

## Tu alcance — DOC-10 §9, ya aprobado (instáncialo, no lo rediseñes)

| Campo | Contenido |
|---|---|
| Módulos | **M1 · System design** (método y práctica en vivo bajo repreguntas) · **M2 · Arquitectura de sistemas de IA** (LLM + distribuida: escala, multi-GPU, costos, seguridad) · **M3 · Cloud aplicado** (AWS al servicio de la arquitectura) · **M4 · Preparación profesional** (proceso completo de entrevista internacional en inglés: coding, system design, conductual) · **M5 · Culminación** (columna vertebral final; vigencia autónoma: incorporar un avance reciente por decisión propia) |
| Competencias | C-N12-01…06 (ver DOC-01 para el texto exacto) |
| Proyecto (capstone ET5 y **de la carrera completa**) | Arquitectura completa de un sistema de IA bajo restricciones, en design doc defendido + la columna vertebral culminada: sistema completo, desplegado, operativo |
| Compuerta | **La defensa final integradora del recorrido completo** (DOC-10 6.6, C-N12-06) + certificación institucional |
| Bibliografía oficial | *System Design Interview* (Xu) · casos de arquitectura de los mejores equipos · AWS SAA si aporta |
| Carga estimada | ~6 meses · ~600 h (cifra de DOC-10, no auditada — verifica contra tu propio diseño real) |

**Nota de posición — eres el cierre de los 13 niveles.** Tu capstone no es solo el de N12 ni el de ET5: es **la culminación de la columna vertebral completa** que N7-N10 construyeron y desplegaron. La defensa final integra el recorrido entero de la carrera. Diseña con esa responsabilidad — el estándar de exigencia debe ser el más alto de todo el proyecto, no un cierre relajado.

## Dos módulos que no encajan en el esquema estándar — decide su representación antes de escribir

- **M4 (preparación profesional: proceso completo de entrevista internacional en inglés — coding, system design, conductual)** — esto es fundamentalmente distinto a todo el contenido anterior: no es código verificable con `check()`, es simulacro de entrevista, con componente oral/conductual y en un idioma que no es el de instrucción del resto de la Academia. Antes de forzarlo al esquema de ejercicios Pyodide, decide su representación real (¿guión de práctica estructurado? ¿rúbrica de autoevaluación tras grabarse? ¿un compañero de estudio simulado vía texto?) y documenta esa decisión explícitamente como hallazgo de diseño, no la ocultes dentro de un esquema que no le queda.
- **M5 (culminación — "vigencia autónoma: incorporar un avance reciente por decisión propia")** — es, por diseño, abierto y autodirigido: no hay un "avance reciente" fijo que todo estudiante deba incorporar, cada uno elige el suyo. Esto significa que no puedes escribir un `check()` con una respuesta única correcta para este módulo — la evidencia de dominio tiene que ser una rúbrica de criterio (¿el avance elegido es genuinamente reciente y relevante? ¿la justificación de por qué se eligió es sólida? ¿la integración a la columna vertebral es real, no cosmética?), no una comparación de salida exacta.

## Riesgo de alcance: M2/M3 son la síntesis técnica más amplia de la carrera

M2 (arquitectura de sistemas de IA: LLM + distribuida, multi-GPU, costos, seguridad) y M3 (cloud aplicado con AWS) integran, en teoría, todo lo que N7-N10 ya cubrieron por separado, ahora a nivel de decisión arquitectónica bajo restricciones — no se re-enseña Kubernetes o vLLM desde cero, se presupone y se practica la DECISIÓN de cuándo y cómo usarlos. Verifica que tus ejercicios de M2/M3 sean genuinamente de diseño/trade-off (varias arquitecturas posibles, cada una con costos y riesgos reales a comparar) y no una repetición de contenido ya cubierto en N7-N10.

## Herencia entrante (borrador — N7-N11 se construyen en paralelo, no asumas que ya congelaron)

Toda la carrera: sistemas de IA construidos, desplegados, operados, sintetizados en local (ET4), más la capacidad de leer/reproducir/contribuir a investigación real (N11). Tu M1-M2 presuponen la totalidad de esto sin volver a enseñarlo — tu trabajo es la síntesis y la decisión, no la introducción.

## Documentos a leer además de la guía maestra

`docs/10-plan-maestro-curriculo.md` §9 completo, y también su §10 (tabla de trazabilidad curricular — para entender cómo se supone que se demuestra C-N12-06, la defensa final integradora) · `docs/01-perfil-egreso-marco-competencias.md` (C-N12-01…06) · `docs/mision-n7.md` a `docs/mision-n11.md` (necesitas el panorama completo de lo que sintetizas, más que ningún otro nivel).

## Primer paso concreto

Antes de escribir `docs/syllabus/syl-n12.md`, decide y documenta explícitamente la representación de M4 y M5 (ver arriba) — es la decisión de diseño más importante de tu nivel. Después, define qué significa concretamente "arquitectura completa bajo restricciones" para tu proyecto de capstone (qué restricciones, qué se evalúa) antes de empezar la investigación pedagógica real de la bibliografía oficial ya citada arriba.
