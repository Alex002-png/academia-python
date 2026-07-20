# Investigación Pedagógica de N1.M1.T6 — Módulos, paquetes y entornos virtuales

*Construida bajo DOC-12 §0bis. Fundamenta dos laboratorios distintos (Laboratorio 3 · Módulos y paquetes propios; Laboratorio 4 · Entornos virtuales y pip) — misma decisión de "una competencia por laboratorio" ya aplicada a M5.T1/T2, aplicada aquí sin reabrir el debate arquitectónico.*

## 1. Cómo enseñan este concepto exacto

**docs.python.org — módulo `venv`** (verificado): explica el aislamiento como modelo mental central — "un entorno virtual está aislado del entorno base, de modo que solo lo instalado explícitamente en él está disponible" — sin narrar un escenario de conflicto.

**packaging.python.org — tutorial oficial de instalación** (verificado, dos URLs: `/tutorials/installing-packages/` y `/guides/installing-using-pip-and-virtual-environments/`): a diferencia del módulo `venv`, **sí** abre con un escenario narrativo antes de cualquier comando — "imagina que tu app necesita LibFoo v1, pero otra app necesita LibFoo v2. ¿Cómo usas ambas?" — y advierte explícitamente que instalar todo global "fácilmente termina actualizando sin querer una app que no debía tocarse". Esta es la fuente que mejor respalda la filosofía "por qué antes que comando" de DOC-12 para este tema exacto.

**MIT Missing Semester — "Packaging and Shipping Code"** (verificado, `missing.csail.mit.edu/2026/shipping-code/`): existe, contrario a una suposición inicial de que Missing Semester no cubre gestión de dependencias de Python específicamente. Enseña `python -m venv venv`, el concepto de "dependency hell", lock files, y — dato relevante para "buenas prácticas profesionales" — recomienda herramientas modernas (`uv`) sobre pip puro por velocidad, aunque este laboratorio se mantiene en pip/venv puros por ser lo que la industria todavía usa de forma más universal y lo que el estándar de la Academia pide no adelantar sin necesidad real.

**pip.pypa.io — documentación oficial**: pip se define solo como "the package installer for Python", sin justificar el "por qué" — hallazgo de ausencia relevante (honestidad metodológica, DOC-12 §0.1). Los conflictos de versión sí están documentados con un ejemplo textual real ("dependency hell" entre paquetes ficticios con requisitos incompatibles). La propia página de investigación UX de pip (`pip.pypa.io/en/stable/ux-research-design/research-results/improving-pips-documentation/`) confirma como carencia reconocida por el propio equipo de pip que no existe hoy una sección oficial de errores de principiante — irónicamente, la ausencia de un buen §2.8 (Diagnóstico de errores) en la fuente oficial es evidencia directa de por qué ese bloque es obligatorio en DOC-12.

## 2. Evidencia de errores de novato específicos

**Instalar sin activar el entorno → `ModuleNotFoundError` tras una instalación "exitosa"**: no se pudo verificar en Stack Overflow (fetch bloqueado, honestidad declarada), pero sí se confirmó el caso real documentado en **GitHub `pypa/pip` issue #11154** — pip instalando en el `site-packages` global en vez del entorno activado, exactamente el síntoma que este laboratorio debe cubrir como error central.

## 3. Historia real — por qué existe `venv`

Cadena verificada con fuentes primarias, no una síntesis genérica: el blog original de Ian Bicking (2007) anuncia `virtualenv` como sucesor de su herramienta anterior "workingenv" (fràgil); **PEP 405** explica por qué se integró a la librería estándar como `venv` en Python 3.3, citando que `virtualenv` debía duplicar manualmente el módulo `site` en cada arranque — una solución externa remendando una necesidad que terminó siendo del lenguaje mismo. Es una historia real de evolución de herramienta, no una anécdota inventada.

## 4. Síntesis crítica y decisiones de diseño

**Decisión: separar en dos laboratorios**, aplicando el mismo principio ya aprobado para M5 ("una competencia por laboratorio, sin mezclar objetivos") — la ficha original de SYL-N1 M1.T6 bundlea "módulos propios" y "entornos virtuales" en un solo tema, pero son dos habilidades independientes: organizar código propio en varios archivos no requiere pip ni venv, y usar venv no requiere haber organizado nada en módulos. Mezclarlos en un solo laboratorio repetiría el error de sobrecarga cognitiva que DOC-03 (P9/PED-10) ya identifica.

**Decisión: usar la narrativa de packaging.python.org (el escenario LibFoo v1/v2), no la del módulo `venv`** — es la única fuente que ancla el "por qué" en un conflicto real y concreto antes de mostrar comandos, coherente con el §0.1 de DOC-12.

**Decisión: pip/venv puros, no `uv`** — aunque Missing Semester 2026 ya recomienda herramientas modernas, introducir una herramienta no estándar en el primer contacto del estudiante con gestión de paquetes sería adelantar contenido sin necesidad curricular real — el propio estándar DOC-11/DOC-12 prohíbe la dificultad por artificio. Se menciona `uv` como recurso de profundización (⭐), no como herramienta principal.

## Clasificación y falsabilidad

**Evidencia sólida:** el patrón "conflicto de versiones → aislamiento" (packaging.python.org, PEP 405, Missing Semester coinciden). **Evidencia puntual verificada, no genérica:** el error de instalar sin activar (GitHub issue real). **Ausencia declarada:** pip no documenta oficialmente errores de principiante — confirmado por su propia página de UX research, no supuesto. **Falsabilidad:** si el registro de ejecución muestra que el estudiante nunca comete el error de "instalar sin activar", se reconsideraría su peso como error central del laboratorio 4.
