# Investigación Pedagógica de N1.M1.T8 — Ficheros y formatos (txt, CSV, JSON)

*Investigación + revisión crítica integradas. Construida bajo DOC-11 v2.0.1.*

## 1–2. Fuentes y evidencia

**CS50P dedica una semana completa al alcance exacto de esta lección** (Week 6, "File I/O"), cubriendo `open`, `with`, y CSV como caso de uso central — con una definición del "por qué" casi idéntica a la de la ficha de SYL-N1: los archivos existen para que un programa persista datos más allá de su propia ejecución. *(Fuente: [CS50P — Week 6, File I/O](https://cs50.harvard.edu/python/weeks/6/); [CS50P — Reading and Writing CSVs](https://cs50.harvard.edu/python/shorts/reading_and_writing_csvs/).)*

**La documentación oficial de Python separa CSV y JSON en módulos de biblioteca estándar propios**, cada uno con su propia página de referencia — confirmando, con la fuente más autorizada posible, que ambos formatos merecen tratamiento diferenciado, no una mención genérica de "archivos". *(Fuente: [Python docs — csv module](https://docs.python.org/3/library/csv.html); [Python docs — json module](https://docs.python.org/3/library/json.html).)*

**Honestidad metodológica — MIT 6.0001/6.0002:** no encontré una lección dedicada a lectura/escritura de archivos en ninguna de las dos ediciones verificadas — el temario de 14 lecciones de 6.0001 no le da tratamiento propio. Se declara la ausencia en vez de forzar una cita, igual que en T7.

## 3. Síntesis crítica

**Decisión:** el modelo mental de la ficha ("el archivo como frontera entre tu programa y el mundo: todo lo que cruza se valida y se convierte") se mantiene como eje — es una elevación directa del patrón ya sembrado en N0.T6 (validar entrada de `input()`), ahora aplicado a datos que cruzan una frontera distinta pero estructuralmente idéntica: fuera del programa, dentro del programa, con conversión y validación en el cruce.

**Autocrítica — ¿por qué exigir `with` desde el primer ejemplo, sin mostrar primero `open()`/`close()` manual?** La documentación oficial de CS50P y de Python presentan `with` como la forma estándar y recomendada, no como una mejora posterior — enseñar primero `open()`/`close()` manual (y el bug real de olvidar `close()`) como error deliberado, y `with` inmediatamente después como la solución, sigue el mismo patrón de conflicto-cognitivo-antes-de-explicación ya usado en toda la Academia, sin inventar un paso pedagógico nuevo.

**Nota técnica de plataforma, no de contenido:** Pyodide (el motor de N1) ejecuta sobre un sistema de archivos virtual en memoria del navegador — `open()`, `with`, y los módulos `csv`/`json` funcionan de forma genuinamente real (no simulada), pero cada archivo escrito vive solo dentro de esa sesión de ejecución. Se diseñan los ejercicios para que cada uno escriba y lea su propio archivo dentro del mismo script (nunca dependiendo de que un archivo sobreviva entre ejercicios distintos) — una decisión de ingeniería de la plataforma, no una limitación del contenido enseñado: el código que el estudiante escribe es Python real e idéntico al que correría contra un disco de verdad.

**Clasificación:** evidencia sólida para la secuencia y el alcance (CS50P + documentación oficial de dos módulos de biblioteca estándar). Ausencia declarada de MIT. **Falsabilidad:** se reconsideraría la decisión de "un archivo por ejercicio, nunca compartido entre ejercicios" si se confirma que el sistema de archivos virtual de Pyodide sí persiste de forma predecible entre ejecuciones dentro de la misma sesión del navegador.

## Estado
✅ Completa con revisión crítica. Ausencia de MIT declarada honestamente; 1 decisión de ingeniería de plataforma documentada. Cierra la investigación de M1 (T1–T8); T6 queda pendiente por su propia naturaleza de entorno real (EVT-031).
