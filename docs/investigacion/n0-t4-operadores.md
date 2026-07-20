# Investigación Pedagógica de N0·T4 — Operadores

*Conforme a DOC-11 §0bis, con la revisión crítica (§0bis fase 2) ya integrada en el mismo documento para reducir el ciclo de aprobación, según la instrucción del Director de no convertir el rigor en cuello de botella.*

## 1. Cómo enseñan este concepto exacto las instituciones de referencia

**CMU (15-112).** Mantiene notas de clase dedicadas específicamente a "Data Types and Operators", tratando la precedencia como parte del modelo formal del lenguaje, no como una lista de reglas a memorizar — la enfatizan junto con el tipo de dato que cada operador produce. *(Fuente: [CMU 15-112, Class Notes: Data Types and Operators](https://www.cs.cmu.edu/~112-f22/notes/notes-data-and-operations.html).)*

**Harvard (CS50P).** Dedica un recurso propio a "Operators" con vocabulario técnico explícito (operadores aritméticos, de asignación) — mismo patrón de píldoras conceptuales ya observado en su material de tipos (Investigación N0·T3). *(Fuente: [CS50 Operators (PDF)](https://cs50.harvard.edu/ap/2020/assets/pdfs/operators.pdf).)*

**MIT, Stanford, Oxford, Cambridge.** Búsqueda sin material públicamente citable con tratamiento distintivo de precedencia/`//`/`%` para este micro-concepto exacto, más allá de listar la tabla de operadores. Se declara la ausencia explícitamente (DOC-11, principio 2) en vez de rellenarla.

## 2. Qué concluye la investigación en CS-Ed / Learning Sciences

**El error de precedencia por evaluación izquierda-a-derecha está documentado, no es anecdótico.** La literatura confirma un patrón predecible: estudiantes noveles tienden a evaluar expresiones de izquierda a derecha ignorando la jerarquía matemática — `2 + 3 * 4` se predice erróneamente como `20` en vez de `14`. Esto es evidencia **descriptiva** (documenta que el error ocurre), no prescriptiva sobre cómo prevenirlo — distinción que la revisión crítica de N0·T3 ya nos obligó a vigilar. *(Fuente: síntesis de literatura sobre modelos mentales de programadores; ver también [Systematic Literature Review sobre mental models de programadores](https://arxiv.org/pdf/2212.07763).)*

**Los paréntesis reducen la confusión — hallazgo consolidado, no aislado.** La literatura de referencia coincide en que usar paréntesis explícitos, incluso cuando la precedencia técnicamente los hace innecesarios, reduce el error de lectura — un hallazgo con más consenso que "cómo enseñar precedencia" en abstracto.

## 3. Síntesis crítica

| Institución | Qué es valioso | Limitación frente a nuestra identidad |
|---|---|---|
| CMU | Trata la precedencia como parte del modelo formal (junto con el tipo que cada operador produce) | Por sí solo no conecta con el error real ya observado en producción (`8 + 10 / 2 → 13.0`) |
| CS50 | Vocabulario técnico explícito para operadores | Formato en píldoras, ya adaptado en T3, se reutiliza aquí sin novedad |

**Decisión de síntesis:** se adopta el énfasis de CMU (precedencia + tipo resultante, no solo precedencia aislada), y se ancla el conflicto cognitivo en el error **ya validado en producción** (`promedio = 8 + 10 / 2` → `13.0`, marcado como "❌ Incorrecto" en el material existente) en vez de inventar un ejemplo nuevo — es evidencia interna ya existente, con el mismo peso que la externa (DOC-11, principio 3).

## 4. Revisión crítica (fase adversarial integrada)

**Autocrítica 1 — ¿el ejemplo `8 + 10 / 2` es el mejor conflicto posible, o el más cómodo por estar ya escrito?** Objeción real: es un ejemplo de precedencia entre `+` y `/`, pero T4 introduce también `//` y `%`, cuya combinación con `+`/`*` es donde ocurre la mayoría de los errores reales de paginación/reparto (el propio hook de producción usa paginación como ejemplo). El conflicto cognitivo debería, honestamente, involucrar `//` o `%` compitiendo con otro operador — no solo `/`. **Ajuste:** el conflicto cognitivo principal usa `7 + 10 // 3` (mezcla suma con división entera), más representativo de los errores reales de esta lección que `8 + 10 / 2`.

**Autocrítica 2 — ¿estoy asumiendo que "paréntesis explícitos" es la solución pedagógica correcta sin evidencia prescriptiva?** Sí — igual que en T3, la literatura describe el error, no prueba que "enseñar a usar paréntesis" lo previene mejor que otras estrategias (p. ej., practicar prediciendo antes de ejecutar, que es lo que DOC-03 P8 ya exige). Se reclasifica como decisión de diseño respaldada por un principio general ya validado (P8), no como intervención específicamente probada para precedencia.

**Autocrítica 3 — ¿el error de Python 2 (`7/2=3` silencioso) es tan central como lo presenta el material de producción?** Es un dato histórico verificable (Python 3 rompió compatibilidad explícitamente por esto) — evidencia muy sólida como anécdota histórica, no como estrategia pedagógica en sí misma; se conserva en el Bloque 1 (historia), no se usa como conflicto cognitivo.

### Clasificación de solidez de evidencia

| Decisión | Clasificación | Qué la haría abandonarse (falsabilidad) |
|---|---|---|
| Precedencia + tipo resultante juntos (CMU) | **Evidencia sólida** | Si el registro muestra que separar ambos conceptos reduce confusión en vez de aumentarla |
| Conflicto cognitivo con `//` en vez de solo `/` | **Decisión de diseño, ajustada tras autocrítica** | Si en la práctica real los estudiantes fallan más con `/` que con `//`, se revertiría |
| Predicción comprometida antes que "enseñar paréntesis" como estrategia | **Decisión de diseño (P8 ya validado), no evidencia específica nueva** | Si el registro muestra que enseñar paréntesis explícitamente reduce más el error que la predicción sola |
| Anécdota histórica de Python 2 (`7/2=3`) | **Evidencia muy sólida como hecho histórico** | No aplica — es un hecho verificable, no una hipótesis pedagógica |

## Decisiones de diseño derivadas de la investigación

| Decisión | Adopta/Modifica/Rechaza | Justificación | Evidencia |
|---|---|---|---|
| Precedencia enseñada junto al tipo que cada operador produce | Adopta (CMU) | Conecta con T3 (tipos) en vez de tratar precedencia aislada | CMU 15-112 |
| Conflicto cognitivo: `7 + 10 // 3` (no solo `8 + 10 / 2`) | Modifica (ajuste propio) | Más representativo de los errores reales del propio hook (paginación, reparto) | Autocrítica 1 |
| Predicción comprometida como estrategia principal, paréntesis como herramienta secundaria | Decisión de diseño | P8 (DOC-03) ya validado; sin evidencia específica adicional que lo pruebe superior para precedencia en particular | Autocrítica 2 |
| Historia de Python 2/3 conservada como anécdota, no como mecanismo pedagógico | Adopta, con precisión de alcance | Hecho histórico verificable, no estrategia | Autocrítica 3 |

## Bibliografía citada

- [CMU 15-112 — Class Notes: Data Types and Operators](https://www.cs.cmu.edu/~112-f22/notes/notes-data-and-operations.html)
- [CS50 — Operators (PDF)](https://cs50.harvard.edu/ap/2020/assets/pdfs/operators.pdf)
- [Systematic Literature Review — Programmers' Mental Models](https://arxiv.org/pdf/2212.07763)
- [Real Python — Python Modulo Operator](https://realpython.com/python-modulo-operator/)

## Estado

**Desarrollo:** ✅ Completa. **Revisión crítica:** ✅ Completa (3 autocríticas, 1 ajuste real de diseño). **Pendiente:** aprobación del Director. La validación con estudiantes reales queda, como corresponde, pendiente de validación — no bloquea la redacción de la lección ni el desarrollo de T5.

## Addendum v2.0.1 (2026-07-19) — UC Berkeley

Verificado para la institución añadida por el Director: CS61A no tiene un equivalente directo de "enseñar precedencia de operadores infijos" — su proyecto de intérprete usa notación prefija (estilo Scheme/Calculator), donde el propio diseño del lenguaje elimina el problema de precedencia en vez de enseñarlo (*"prefix notation naturally takes care of operator precedence"*). Se declara honestamente: no aporta un punto de comparación directo para este concepto exacto porque la elección de diseño de su lenguaje de estudio es distinta a la de Python (infijo). Es, en sí mismo, un dato interesante — confirma que la precedencia infija es un problema real y no trivial (una forma legítima de evitarlo es no usar notación infija), pero no cambia ninguna decisión de esta lección, que enseña Python tal como es. *(Fuente: [CS61A, Calculator/Scheme project materials](https://amirkamil.com/teaching/sp13/slides/33-Calculator_6pp.pdf).)*
