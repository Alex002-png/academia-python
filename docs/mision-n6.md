# Ficha de Misión — N6 · Transformers

**Antes de nada:** lee completo `docs/guia-construccion-niveles.md` — este documento asume que ya lo hiciste. Aquí solo va lo específico de tu nivel.

**Tu carpeta:** `C:\Users\USER\academia-python-n6\` · **Tu rama:** `nivel/n6`. Confirma ambas (`git branch --show-current`) antes de escribir nada.

## Tu alcance — DOC-10 §7, ya aprobado (instáncialo, no lo rediseñes)

| Campo | Contenido |
|---|---|
| Módulos | **M1 · Atención y arquitectura** (self-attention, posiciones, el transformer completo desde cero) · **M2 · Tokenización y embeddings** · **M3 · Familias de modelos** (BERT/GPT/Llama/Qwen: comparación fundamentada) · **M4 · Papers fundacionales** (*Attention Is All You Need* y sucesores: contribución, método, supuestos, límites) |
| Competencias | C-N6-01…04 (ver DOC-01 para el texto exacto) |
| Proyecto (capstone ET3) | Mini-GPT implementado desde cero y entrenado + ensayo comparativo de arquitecturas |
| Compuerta | Examen + proyecto + defensa (incluye defensa de lectura: sostener un paper ante repreguntas) |
| Bibliografía oficial | Karpathy (*GPT from scratch*) · CS224N (Stanford) · HF NLP Course · los papers de M4 |
| Carga estimada | ~4 meses · ~400 h (cifra de DOC-10, no auditada — verifica contra tu propio diseño real antes de darla por buena) |

**Nota de posición:** tu nivel es el **capstone de ET3** (N4-N6 completa) — tu proyecto final no solo cierra N6, cierra la Etapa. Diseña el capstone con esa responsabilidad en mente, integrando explícitamente lo que N4 y N5 debieron dejar sembrado (ver Herencia entrante abajo).

## Riesgo técnico — mismo fork que N5, verifícalo tú también

El self-attention (M1) es, en su forma pedagógica mínima, **multiplicación de matrices + softmax** — perfectamente implementable en numpy puro dentro de Pyodide, y coherente con la disciplina de N3 (verificar contra numpy con tolerancia explícita). No necesitas un framework para enseñar "por qué cada token mira a todos los demás y con qué peso."

**Mapeo de modalidad recomendado, decide por tema, no por módulo:**
- **M1 (self-attention, transformer completo desde cero)** — candidato fuerte a **DOC-11/Pyodide puro**, en la misma línea que M1 de N5. Verifica empíricamente que Pyodide maneje con fluidez las multiplicaciones de matrices de un transformer de juguete (secuencias cortas, dimensiones pequeñas) antes de comprometer el diseño — es una escala mucho menor que un modelo real, debería ser viable, pero confírmalo, no lo asumas.
- **M2 (tokenización y embeddings)** — un tokenizador simple tipo BPE es implementable en Python puro (Pyodide); embeddings *preentrenados* reales (descargar pesos de un modelo real) probablemente requiere DOC-12.
- **M3 (familias de modelos: comparación fundamentada)** — mayormente lectura/análisis comparativo, no necesariamente código nuevo. Evalúa si esto vive mejor como contenido de lectura dirigida + defensa oral que como ejercicios de programación.
- **M4 (papers fundacionales)** — lectura dirigida, extiende directamente la disciplina que N3.M4 ya instaló (decodificar notación símbolo por símbolo, traducirla a código verificado). Si el estudiante ya pasó por N3.M4.T5 (lectura completa de un paper de clasificador binario), este módulo es la continuación natural a mayor escala.
- **Capstone (Mini-GPT "implementado desde cero **y entrenado**")** — la arquitectura se escribe y verifica en Pyodide con un dataset de juguete; "entrenado" a cualquier escala real de interés probablemente exige DOC-12 (Colab/GPU), igual que N5.M2. Decide y documenta la frontera exacta entre lo que vive en el Campus y lo que sale de él.

## Herencia entrante (borrador — N4 y N5 se construyen en paralelo, no asumas que ya congelaron)

Basado en el alcance ya aprobado de DOC-10: de N4, la disciplina de evaluación/metodología (splits, métricas, overfitting); de N5, redes desde cero + backpropagation (M1 de N5) y el primer contacto con PyTorch/GPU en la nube (M2 de N5) — tu M1 (atención) presupone que el estudiante ya entiende qué es una red, un gradiente, y cómo se entrena una, sin volver a enseñarlo. Declara esto explícitamente como "pendiente de confirmación cuando N4/N5 congelen" en tu syllabus.

## Documentos a leer además de la guía maestra

`docs/10-plan-maestro-curriculo.md` §7 (tu ficha completa) · `docs/01-perfil-egreso-marco-competencias.md` (C-N6-01…04) · `docs/syllabus/syl-n3.md` completo, con atención especial a M4 (Lectura matemática) — tu M4 es su continuación directa de espíritu · `docs/mision-n5.md` (tu predecesor inmediato, para entender qué asume de PyTorch/entorno real) · `docs/12-estandar-laboratorios-entorno-real.md` completo antes de diseñar cualquier parte de entorno real.

## Primer paso concreto

Verifica empíricamente qué tan grande puede ser un transformer de juguete corriendo en numpy puro dentro de Pyodide sin fricción de rendimiento — ese número concreto (secuencias de N tokens, embeddings de M dimensiones) determina el diseño real de M1. Solo después, empieza la investigación pedagógica real de la bibliografía oficial ya citada arriba.
