# Investigación Pedagógica de N2.M4 — La Red de Seguridad

*Construida bajo DOC-12 (modalidad `real`, EVT-045), sobre el mismo servicio continuo de M1-M3. Investigación verificada con WebFetch real.*

## T1 · El hábito que ya tenías (auditoría de confianza)

**Fuente oficial verificada (`docs.pytest.org/en/stable/getting-started.html`, fetch directo):** confirma la convención de descubrimiento de pruebas (`test_*.py` o `*_test.py`) y el flag `-q`/`-v`, que este tema usa directamente para el inventario honesto (`pytest -v --collect-only`).

## T2 · TDD

**Misma fuente, reutilizada (DP-07):** pytest confirma la sintaxis `assert` simple y su "introspección avanzada de aserciones" que reporta valores intermedios — la base técnica exacta del ciclo rojo-verde-refactor enseñado aquí.

## T3 · Cobertura

**Fuente oficial verificada (`coverage.readthedocs.io`, fetch directo):** cita textual — *"Coverage.py monitors your program, noting which parts of the code have been executed, then analyzes the source to identify code that could have been executed but was not."* **Ausencia declarada:** la documentación fetched no incluyó una advertencia explícita sobre "alta cobertura no garantiza buenas pruebas" — esa idea (ya diseñada en SYL-N2 T3, "la cobertura como linterna, no como certificado") se presenta como criterio pedagógico de esta Academia, no como cita textual de la fuente.

## T4 · Clean code

**Sin fuente externa nueva:** la relación causal entre dificultad de prueba y calidad de diseño es demostrable directamente por experimento (medir la reducción de código de preparación/setup antes y después de un refactor real) — no requiere cita de autoridad externa.

## T5 · Integración continua (Momento Fundacional de M4)

**Fuente oficial verificada (`docs.github.com/en/actions/writing-workflows/quickstart`, fetch directo):** confirma la ubicación exacta (`​.github/workflows/`), el disparador `on: [push]`, y la estructura mínima de un workflow — usados sin modificación en el pipeline de este tema.

## Clasificación y falsabilidad

**Evidencia sólida:** las tres citas técnicas (pytest, coverage.py, GitHub Actions) verificadas por fetch directo a documentación oficial. **Decisión de diseño pedagógico:** el "cambio inocente" de T5 que rompe una prueba de un módulo distinto se construye deliberadamente por el propio estudiante (no está scripted por la Academia) — su función pedagógica depende de que el estudiante elija un cambio real en su propio sistema, no un ejemplo artificial. **Falsabilidad:** si el registro de ejecución muestra que los estudiantes eligen sistemáticamente cambios que nunca rompen nada (evitando sin querer el punto pedagógico), el tema debería reforzarse con una sugerencia más dirigida de qué tipo de cambio suele revelar el problema.
