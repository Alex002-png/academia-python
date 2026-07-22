# Ficha de Misión — N5 · Deep Learning

**Antes de nada:** lee completo `docs/guia-construccion-niveles.md` — este documento asume que ya lo hiciste y no repite lo que ya está ahí (esquema de "día", disciplina de verificación, protocolo anti-colisión, los 9 pasos, límites de autoridad). Aquí solo va lo específico de tu nivel.

**Tu carpeta:** `C:\Users\USER\academia-python-n5\` · **Tu rama:** `nivel/n5`. Confirma ambas (`git branch --show-current`) antes de escribir nada.

## Tu alcance — DOC-10 §7, ya aprobado (instáncialo, no lo rediseñes)

| Campo | Contenido |
|---|---|
| Módulos | **M1 · Redes desde cero** (perceptrón→MLP, backpropagation explicado gradiente a gradiente) · **M2 · PyTorch** (tensores, autograd, entrenamiento, GPU gratuita en nube) · **M3 · Arquitecturas** (CNN, RNN/LSTM, introducción a atención) · **M4 · Rigor experimental** (hipótesis, variables aisladas, reproducibilidad) |
| Competencias | C-N5-01…04 (ver DOC-01 para el texto exacto) |
| Proyecto | Red entrenada end-to-end reproducible y documentada + explicación a audiencia técnica y no técnica |
| Compuerta | Examen + proyecto + defensa |
| Bibliografía oficial | DL Specialization (Ng) · Karpathy *Zero to Hero* · Fast.ai · PyTorch docs |
| Carga estimada | ~4 meses · ~400 h (cifra de DOC-10, no auditada todavía — N3 encontró que su propia cifra original estaba subestimada; no asumas esta correcta sin verificar contra tu propio diseño real, igual que hizo N3 en su §3.5/§3.7) |

## Riesgo técnico #1 — el más importante de tu nivel: PyTorch NO corre en Pyodide

Verifica esto tú mismo antes de diseñar una sola lección de M2 (ver guía §6 para el criterio completo). PyTorch depende de extensiones compiladas nativas sin build oficial para WASM — no está en el catálogo de paquetes de Pyodide, a diferencia de numpy/pandas/scikit-learn que N3/N4 ya usan sin problema. **DOC-10 mismo ya lo insinúa**: la ficha de M2 dice literalmente "GPU gratuita en nube" — la arquitectura prevista siempre fue que el estudiante salga del Campus hacia un entorno externo (Google Colab es el candidato natural: gratuito, con GPU, sin instalación local).

**Mapeo de modalidad recomendado, verifícalo tú, no lo des por sentado:**
- **M1 (redes desde cero)** — candidato fuerte a **DOC-11/Pyodide puro**. Perceptrón→MLP y backpropagation "gradiente a gradiente" en numpy/Python puro es una continuación DIRECTA de N3.M2 (descenso de gradiente ya construido a mano, verificado contra numpy con tolerancia explícita) — es, literalmente, la Herencia H-N4/H-N5 más natural de toda la carrera. No necesitas PyTorch para enseñar qué es un gradiente que fluye hacia atrás por una red — de hecho enseñarlo así PRIMERO es pedagógicamente más fuerte (ver Karpathy *Zero to Hero*, que hace exactamente esto con `micrograd` antes de tocar un framework real).
- **M2 (PyTorch)** — **DOC-12** casi con certeza. Diseña esto como laboratorio de entorno real: entorno objetivo = Google Colab (o el que decidas verificar como mejor opción gratuita), con las 13 secciones de DOC-12 (requisitos verificables, explicación conceptual antes del primer comando, error inducido en vivo, etc.) — no una lista de comandos de PyTorch.
- **M3 (CNN/RNN/LSTM/atención)** — mixto probable: el *forward pass* de una CNN o RNN simple es implementable en numpy puro (Pyodide) para enseñar el mecanismo; entrenarla de verdad a escala requiere M2/DOC-12. Decide por tema, no por módulo completo.
- **M4 (rigor experimental)** — probablemente conceptual/metodológico (hipótesis, variables aisladas, reproducibilidad vía semillas) — evalúa si necesita entorno real en absoluto o si es mayormente Pyodide + escritura.

## Herencia entrante (borrador — N4 se construye en paralelo, no asumas que ya congeló)

Basado en el alcance ya aprobado de DOC-10 para N4 (Machine Learning): manejo de datos con numpy/pandas, EDA, modelos "desde cero" con su matemática (regresiones/clasificadores), scikit-learn aplicado, metodología de evaluación (splits/métricas/overfitting). Trata esto como punto de partida razonable para tu propio M1, y decláralo explícitamente como "pendiente de confirmación cuando N4 congele" en tu syllabus — no bloquees tu avance esperando esa confirmación.

## Documentos a leer además de la guía maestra

`docs/10-plan-maestro-curriculo.md` §7 (tu ficha completa) · `docs/01-perfil-egreso-marco-competencias.md` (C-N5-01…04) · `docs/syllabus/syl-n3.md` completo (tu mejor plantilla estructural, especialmente §3 sobre principios de ejecución y cómo declaró su propia decisión "100% Campus" — tú vas a declarar la decisión contraria, mixta, y debes justificarla con el mismo nivel de rigor) · `docs/12-estandar-laboratorios-entorno-real.md` completo antes de diseñar M2/M3.

## Primer paso concreto

Verifica empíricamente la disponibilidad de PyTorch en Pyodide (confirma que de verdad no está, no lo asumas de este documento) y decide un entorno externo concreto para M2 antes de escribir `docs/syllabus/syl-n5.md`. Solo después de esa decisión arquitectónica, empieza la investigación pedagógica real (WebFetch/WebSearch) de la bibliografía oficial ya citada arriba.
