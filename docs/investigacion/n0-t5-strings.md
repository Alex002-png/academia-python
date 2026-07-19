# Investigación Pedagógica de N0·T5 — Strings a fondo

*Investigación + revisión crítica integradas (DOC-11 §0bis, ambas fases).*

## 1–2. Fuentes y evidencia

**CMU (15-110)** dedica diapositivas y práctica específicas a indexado/slicing/inmutabilidad — enfatiza explícitamente que `s[i] = x` falla porque los strings son inmutables. *(Fuente: [CMU 15-110, String Indexing/Slicing/Looping](https://www.cs.cmu.edu/~110/practice/unit1/strings.html).)* **CS50** tiene un recurso propio "String Slicing" con el mismo enfoque de límite-derecho-excluido. *(Fuente: [CS50, String Slicing](https://cs50.harvard.edu/python/shorts/string_slicing/).)* MIT/Stanford/Oxford/Cambridge: sin material distintivo citable para este micro-concepto — se declara la ausencia.

**Misconception documentada:** intentar mutar un string directamente (`s[0] = "x"`) es el error de novato más citado en este tema — más fundamental que "olvidar guardar el resultado de `.upper()`" (ya cubierto en producción), porque ataca la inmutabilidad en su forma más literal.

## 3. Síntesis y revisión crítica

**Decisión:** el conflicto cognitivo principal es el intento de mutación directa (`palabra[0] = "P"` → `TypeError: 'str' object does not support item assignment`) — no el ya cubierto en producción (`.upper()` sin guardar), que se conserva como error secundario. **Autocrítica:** ¿es esto solo "otra forma de decir inmutabilidad" sin aportar nada nuevo frente a lo ya sellado en T2? No — T2 estableció que la *etiqueta* se mueve; este conflicto muestra que el *objeto* al que apunta, si es un string, nunca cambia por dentro — es la extensión correcta, no una repetición. **Clasificación:** evidencia sólida (documentada, y coherente con T2 sin ser redundante). **Falsabilidad:** se abandonaría si el registro mostrara que los estudiantes ya generalizan la inmutabilidad sin necesitar este conflicto explícito.

## Decisiones de diseño

| Decisión | Adopta/Modifica | Evidencia |
|---|---|---|
| Conflicto cognitivo: intento de mutación directa | Nueva, priorizada sobre la ya existente | CMU, documentado; extiende T2 sin repetirlo |
| `.upper()` sin guardar | Se conserva como error secundario (ya en producción) | Evidencia interna ya validada |

## Estado

✅ Completa con revisión crítica integrada. Pendiente de validación (no bloquea T6).
