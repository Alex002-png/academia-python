# Ficha de Misión — N10 · IA Local

**Antes de nada:** lee completo `docs/guia-construccion-niveles.md` — este documento asume que ya lo hiciste. Aquí solo va lo específico de tu nivel. Nota especialmente su prioridad explícita de nivel/dificultad/profundidad (callout al inicio y §8) — aplica de lleno a tu nivel.

**Tu carpeta:** `C:\Users\USER\academia-python-n10\` · **Tu rama:** `nivel/n10`. Confirma ambas (`git branch --show-current`) antes de escribir nada.

## Tu alcance — DOC-10 §8, ya aprobado (instáncialo, no lo rediseñes)

| Campo | Contenido |
|---|---|
| Módulos | **M1 · Runtimes locales** (Ollama, llama.cpp, GGUF) · **M2 · Cuantización y optimización** (medición antes/después) · **M3 · GPU, CUDA básico y jerarquía de memoria** (el modelo mental del hardware: caches, ancho de banda, cómputo vs. memoria — por qué la GPU es rápida y cuándo deja de serlo) · **M4 · Juicio de ecosistema** (evaluar herramientas con prototipo y decisión fundamentada) |
| Competencias | C-N10-01…03 (ver DOC-01 para el texto exacto) |
| Proyecto (capstone ET4) | **Columna vertebral operando EN LOCAL de extremo a extremo**, con los trade-offs frente a la nube documentados — la síntesis de N7+N8+N9+N10 |
| Compuerta | Examen + proyecto + defensa |
| Bibliografía oficial | llama.cpp/Ollama docs · CUDA Guide · GPU Mode |
| Carga estimada | ~4 meses · ~400 h (cifra de DOC-10, no auditada — verifica contra tu propio diseño real) |

**Nota de posición — eres el capstone de ET4 completa (N7-N10):** tu proyecto final es explícitamente, por DOC-10, **"la síntesis de N7+N8+N9+N10"** — el mismo sistema que esos tres niveles construyeron y desplegaron en la nube, ahora operando en local, con los trade-offs documentados. Es la integración de mayor alcance de toda la Etapa. Como los otros tres se construyen en paralelo contigo, define una versión razonable de "lo que V1/V2/la infraestructura desplegada deberían ser" basada en el alcance ya aprobado de DOC-10 §8 para cada uno, decláralo como supuesto explícito, y no bloquees tu avance esperando que los tres congelen primero.

## Ventaja técnica real de tu nivel frente a N7-N9: sin costo de nube

A diferencia de N7-N9 (que dependen de proveedores cloud reales, con las advertencias de costo económico de DOC-12 §2.5/§3), tu contenido corre en la máquina LOCAL del estudiante — más parecido en espíritu a N1.M5 (Linux/SO) que a N9. Esto es una ventaja pedagógica real: sin facturación, sin cuentas externas obligatorias — pero sigue siendo DOC-12 (depende del sistema operativo, hardware, instalación local).

- **M1 (runtimes locales: Ollama, llama.cpp, GGUF)** — instalación real, DOC-12 estándar. Declara explícitamente divergencias Windows/macOS/Linux si existen (DOC-12 §1, campo "Entorno(s) objetivo").
- **M2 (cuantización y optimización, medición antes/después)** — exige medición REAL del estudiante (tamaño de modelo, velocidad de inferencia, uso de memoria antes/después de cuantizar) — no una tabla ya dada, mismo principio de verificación empírica que rige todo el proyecto.
- **M3 (GPU, CUDA básico, jerarquía de memoria)** — es el módulo más conceptual/hardware de toda la carrera hasta este punto. Considera qué porción puede enseñarse sin GPU real disponible (el estudiante puede no tener una) — un modelo mental correcto del hardware (caches, ancho de banda, cómputo vs. memoria) puede enseñarse con analogías rigurosas y mediciones en CPU que igual ilustren el principio, reservando CUDA real para quien tenga GPU disponible, con una ruta alternativa declarada explícitamente (DOC-12 exige declarar prerrequisitos técnicos verificables — no asumas que todo estudiante tiene GPU).
- **M4 (juicio de ecosistema: evaluar herramientas con prototipo)** — pide explícitamente un prototipo real + decisión fundamentada, no solo una comparación de tablas — diseña el ejercicio para que el estudiante construya algo pequeño con 2+ herramientas y compare con datos propios.

## Herencia entrante (borrador — N7/N8/N9 se construyen en paralelo, no asumas que ya congelaron)

La síntesis completa de ET4: sistema RAG (N7) + capacidad agéntica (N8) + infraestructura desplegada y observada (N9). Define una versión de trabajo razonable de cada una basada en DOC-10 si no puedes confirmar las reales, y decláralo explícitamente en tu syllabus.

## Documentos a leer además de la guía maestra

`docs/10-plan-maestro-curriculo.md` §8 (tu ficha completa) · `docs/01-perfil-egreso-marco-competencias.md` (C-N10-01…03) · `docs/12-estandar-laboratorios-entorno-real.md` completo · `docs/mision-n7.md`, `docs/mision-n8.md`, `docs/mision-n9.md` (para entender qué debes sintetizar).

## Primer paso concreto

Antes de escribir `docs/syllabus/syl-n10.md`, define qué versión de "columna vertebral" vas a sintetizar (basada en el alcance de DOC-10 para N7-N9) y qué ruta ofreces a un estudiante sin GPU real para M3. Después, investigación pedagógica real de la bibliografía oficial ya citada arriba.
