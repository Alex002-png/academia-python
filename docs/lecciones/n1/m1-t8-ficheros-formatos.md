# N1.M1.T8 — Ficheros y formatos (txt, CSV, JSON)

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n1-m1-t8-ficheros-formatos.md`](../../investigacion/n1-m1-t8-ficheros-formatos.md) — construida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial). Cierra el largo aliento B-M1 (SYL-N1).
>
> Motor de ejecución: **Pyodide (Python real en el navegador, sobre un sistema de archivos virtual en memoria)**.

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N1.M1.T8 |
| **Gran pregunta del módulo (M1)** | ¿Cómo organizamos programas para que sigan siendo comprensibles cuando crecen? |
| **Gran pregunta de esta lección** | Todo lo que tu programa calculó hasta ahora desaparece en cuanto termina — ¿qué necesitarías para que esos datos SIGAN existiendo después? |
| **Prerrequisitos** | N1.M1.T5 (excepciones — `FileNotFoundError` es una excepción real), N1.M1.T7 (iterar líneas de un archivo usa el mismo protocolo de iteradores) |
| **Competencias** | C-N1-01, C-N1-02 |
| **Duración** | Heurística. Escalera densa (7 categorías) + laboratorio con datos sucios reales + desafío final. Cierre del largo aliento B-M1. |
| **Conexión con N1.M1.T5** | `open()` de un archivo que no existe lanza `FileNotFoundError` — una excepción real, no un caso especial — y el patrón EAFP/LBYL de T5 aplica igual aquí. |
| **Conexión con N1.M1.T7** | Iterar un archivo línea por línea (`for linea in f:`) usa exactamente el protocolo de iteradores de T7 — un archivo abierto ES, por dentro, un iterador que no carga todo en memoria de una vez. |
| **Conexión con N0.T6** | El modelo mental de la ficha ("el archivo como frontera: todo lo que cruza se valida y se convierte") es la elevación directa del patrón de validar `input()` que N0.T6 ya enseñó — misma disciplina, frontera distinta. |

## Bloque 0 — Preparación del Tutor

**Recuperación (T7):** 1) ¿Por qué el `for` del conflicto de Iteradores y generadores no reinicia desde 1? 2) ¿Qué diferencia real hay entre `return` y `yield`?

**Diagnóstico relámpago:** *"Todo lo que tu programa calculó hasta ahora vivía solo mientras el programa corría. ¿Qué necesitarías para que esos datos SIGAN existiendo después de que el programa termine?"*

**Problema motivador:** *"Quiero guardar una lista de tareas en un archivo, cerrar el programa, y que la próxima vez que lo abra, mis tareas sigan ahí."* No resoluble con nada de T1-T7: todo lo construido hasta hoy vive solo en memoria, y desaparece al terminar el programa.

**Errores deliberados a inyectar:**
1. Abrir un archivo con `open()` **sin** `with` ni `.close()` explícito — "funciona" casi siempre en la práctica, pero no hay garantía: si el programa se interrumpe antes de cerrar, el contenido puede quedarse en un buffer que nunca llega a escribirse físicamente.
2. Confundir el **texto** de un JSON (un string) con la **estructura Python** que representa (un dict/lista) — tratar lo leído de un archivo `.json` como si ya fuera un diccionario, sin pasarlo por `json.loads()`/`json.load()`.

## Bloque 1 — Intuición, analogía e historia

**Hook:** *"Todo lo que tu programa calculó hasta ahora vivía solo mientras el programa corría. Hoy escribes el primer programa que sobrevive a su propia ejecución."*

**Analogía (verificada como predictiva):** un archivo es una **libreta que dejas en un cajón**. Cuando te vas (el programa termina), la libreta se queda ahí; cuando vuelves (ejecutas el programa de nuevo), sigue teniendo lo que escribiste. Pero si te vas sin cerrar bien la libreta, lo último que escribiste podría no haberse "asentado" en la página todavía — la tinta necesita un momento para secar, y `with` garantiza que se seque antes de que te vayas. **Prueba de que es predictiva:** un estudiante que recuerde esta imagen predice correctamente que un programa que escribe con `with` y se interrumpe justo después de cerrar el bloque tiene sus datos seguros, mientras que uno que nunca cerró explícitamente no tiene esa garantía.

**Historia (costo real, con respaldo directo de la evolución del lenguaje):** el `with` statement se agregó a Python en la versión 2.5 (2006, PEP 343) precisamente para garantizar que un recurso (como un archivo) se cierre siempre, **incluso si ocurre una excepción a mitad del bloque** — antes de eso, había que escribir manualmente un `try/finally` (T5) cada vez que se abría un archivo, y era fácil de olvidar. `with` es, literalmente, un `try/finally` que el lenguaje escribe por ti.

## Bloque 2 — Conflicto cognitivo

```python
f = open("notas.txt", "w")
f.write("primera linea")
# el programa "termina" aqui sin f.close()
```

**Predicción esperada:** ¿está garantizado que `"notas.txt"` contiene `"primera linea"` después de esto?

La sorpresa: **no está garantizado**. Sin `close()` (o `with`), Python puede mantener el contenido en un buffer en memoria que nunca llega a escribirse físicamente si el programa termina de forma inesperada. En la práctica normal casi siempre "funciona" — pero "casi siempre" no es una garantía, y el costo de esa falta de garantía aparece justo cuando menos conviene (un corte, un crash).

## Bloque 3 — Explicación rigurosa

**Sintaxis esencial — `with` como garantía:**
```python
with open("notas.txt", "w", encoding="utf-8") as f:
    f.write("primera linea\n")
# aqui, al salir del bloque, f.close() ya se ejecuto SIEMPRE -- haya habido error o no
```
Modos: `"r"` (leer), `"w"` (escribir — **sobrescribe** todo si el archivo ya existía), `"a"` (agregar al final, sin borrar lo anterior). `encoding="utf-8"` explícito evita el error habitual de "asumir codificación" (la ficha).

**`csv` y `json` — dos módulos de biblioteca estándar, con tratamiento propio (Python docs):**
```python
import csv, json

# CSV: cada fila como diccionario, usando la primera fila como encabezados
with open("datos.csv", encoding="utf-8", newline="") as f:
    for fila in csv.DictReader(f):
        print(fila["nombre"])

# JSON: texto <-> estructura Python, en ambas direcciones
texto = json.dumps({"a": 1})       # estructura -> texto
datos = json.loads(texto)          # texto -> estructura
json.dump({"a": 1}, archivo)       # estructura -> directo a un archivo abierto
datos = json.load(archivo)         # directo desde un archivo abierto -> estructura
```

**El JSON-texto NO es la estructura Python (el error habitual central):** `json.dumps(...)` y `json.loads(...)` (con "s" de *string*) trabajan con **texto**; `json.dump(...)` y `json.load(...)` (sin "s") trabajan **directo con un archivo abierto**. Confundir el texto con la estructura es intentar usar `["clave"]` sobre algo que todavía es solo un string.

## Bloque 4 — Escalera de práctica

*Nota de densidad (DOC-11 v2.0.1): siete categorías.*

**Predecir:**
1. El conflicto del Bloque 2.
2. `open("no_existe.txt", "r")` sobre un archivo que no existe — ¿qué excepción exacta lanza?
3. Escribir con `"w"` dos veces seguidas al mismo archivo — ¿el contenido se acumula, o la segunda escritura borra la primera?

**Leer código:**
```python
with open("registro.txt", encoding="utf-8") as f:
    for linea in f:
        print(linea.strip())
```
Sin ejecutar: ¿por qué se puede iterar `f` directamente con `for`, sin llamar a ningún método antes? (conecta directo con el protocolo de T7 — un archivo abierto es un iterador).

**Investigar / trazar:** dado un string que contiene texto JSON (`'{"a": 1}'`), identificar en qué línea exacta deja de ser "solo texto" y se convierte en una estructura Python usable con `["a"]`.

**Modificar:** un `open()` sin `with` ni `.close()` (Bloque 0) → convertirlo a `with`.

**Refactorizar:** código que lee un archivo completo con `.read()` y luego separa manualmente con `.split("\n")` → iterarlo directamente línea por línea con `for linea in f:` (más simple, y no carga todo en memoria de una vez — conecta con T7).

**Escribir:** función que guarda una lista de diccionarios como JSON válido en un archivo, usando `json.dump`.

**Depurar (tres ejercicios, dificultad creciente):**
1. El `open()` sin `with`/`close()` (Bloque 0).
2. Confundir el texto JSON con la estructura Python (Bloque 0).
3. *(compuesto)* Código que asume que un CSV real siempre tiene todos los campos llenos — con un CSV real y sucio (un campo vacío, un campo con texto donde se esperaba un número), truena o produce datos corruptos. Diagnosticar y corregir combinando `try/except` (T5) con el valor por defecto correcto.

## Bloque 5 — Laboratorio: mini-proyecto integrador (cierre del largo aliento B-M1)

**Integración real (con T5/T7):** el laboratorio reutiliza manejo de errores (T5) y el mismo protocolo de iteración de archivos (T7), sobre datos reales y sucios — el cierre natural de M1.

**El proyecto — Procesador de CSV sucio a JSON limpio:** `procesar_csv(ruta_csv, ruta_json)` lee un CSV con encabezados `nombre,edad` usando `csv.DictReader`, convierte `"edad"` a entero (o `None` si el campo está vacío o no es un número válido — usando `try/except`, EAFP de T5), guarda el resultado como una lista de diccionarios en JSON válido con `json.dump`, y devuelve esa lista.

**Trade-off explícito:** ante un campo vacío o inválido, ¿omitir la fila entera, poner un valor por defecto, o marcarla explícitamente como inválida (`None`)? Cada decisión tiene un costo distinto para quien consuma los datos después.

**Argumento de corrección:** ¿el programa procesa un CSV con encabezados pero cero filas de datos, sin tronar?

**Confrontación de soluciones:** leer todo con `.read()` + `.split(",")` manual contra usar `csv.DictReader` — ¿cuál maneja mejor un campo que contiene una coma dentro de sí mismo (entre comillas)?

**Fase 2 — transferencia sin instrucciones repetidas:** agregar un campo calculado al resultado (por ejemplo, si la edad es mayor o igual a 18) sin que se explique el patrón — se infiere de la estructura ya practicada en el resto del laboratorio.

## Bloque 6 — Consolidación

**Defensa socrática:**
1. ¿Por qué el archivo del Bloque 2 no tiene garantizado el texto sin `close()`/`with`?
2. ¿Qué diferencia real hay entre el TEXTO de un JSON y la estructura Python que representa?
3. *(inédita)* Si tu programa se interrumpe A MITAD de escribir un archivo, ¿en qué estado quedan los datos — y cómo diseñarías para que la respuesta nunca importe?

**Seis preguntas de excelencia:**
1. ¿Qué aprendí? Que un archivo es la primera forma de que un programa sobreviva a su propia ejecución, y que `with` es la garantía real de que lo escrito se guarde.
2. ¿Por qué existe este concepto? Porque los programas útiles persisten y consumen datos — sin esto, cada ejecución empieza siempre desde cero.
3. ¿Qué problema resuelve? Permite que un programa lea datos del mundo real (CSV, JSON) y guarde resultados que otros programas (o el mismo, más tarde) puedan usar.
4. ¿Cómo lo usan los profesionales? Nunca asumen que un archivo externo está limpio — validan y convierten en la frontera, exactamente como el modelo mental de esta lección.
5. ¿Cómo se conecta con lo anterior? Reutiliza excepciones (T5) para archivos que no existen o datos corruptos, e iteradores (T7) para recorrer archivos sin cargarlos completos en memoria.
6. ¿Qué pasaría si no existiera? Cada programa sería una calculadora de un solo uso — ningún dato sobreviviría para la siguiente ejecución.

**Reflexión metacognitiva:**
- ¿En qué ejercicio asumiste que un archivo o un CSV estaba "limpio", y qué te hizo notar que no lo estaba?
- ¿Cómo se conecta el `with` de hoy con el `finally` de Excepciones?
- ¿Qué dato de tu propio proyecto (fuera de esta lección) valdría la pena persistir en un archivo?

**Desafío final inédito — la escritura seguro (responde directo la pregunta ingenieril de la ficha):**
```python
import os, json

def guardar_seguro(ruta, datos):
    temp = ruta + ".tmp"
    with open(temp, "w", encoding="utf-8") as f:
        json.dump(datos, f)
    os.replace(temp, ruta)

guardar_seguro("config.json", {"version": 1})
with open("config.json", encoding="utf-8") as f:
    print(json.load(f))
print(os.path.exists("config.json.tmp"))
```
Predecir, ANTES de ejecutar, qué imprime — y explicar por qué `guardar_seguro` nunca deja `"config.json"` corrupto, sin importar en qué momento se interrumpiera el programa. `os.replace()` es una operación **atómica**: o renombra el archivo completo, o no hace nada — nunca queda a medias. Si el programa se interrumpe ANTES del `os.replace()`, el archivo temporal puede quedar incompleto, pero `"config.json"` (el archivo real) nunca fue tocado hasta ese último paso instantáneo — sigue teniendo su versión anterior completa, o la nueva completa, nunca una mezcla rota.

**Lectura dirigida:** [CS50P — Week 6, File I/O](https://cs50.harvard.edu/python/weeks/6/) · [Python docs — csv module](https://docs.python.org/3/library/csv.html) · [Python docs — json module](https://docs.python.org/3/library/json.html).

**Beyond the Curriculum:** *"El problema que resolviste hoy con 'escritura segura' (nunca dejar un archivo a medias) es exactamente el problema que las bases de datos con transacciones resuelven de forma mucho más general — lo verás en M7 (SQL) de este mismo nivel, y otra vez, a mayor escala, en N2. La idea de 'todo o nada' no se inventó para bases de datos: es una idea de ingeniería que hoy aplicaste a mano, con un solo archivo."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados |
| 4 | Corregir | Bloque 4, "depurar" (3, incluido el caso compuesto de CSV sucio) |
| 5 | Modificar | Bloque 4, "modificar" (with) + "refactorizar" (iterar sin `.read()` completo) |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (escritura atómica con `os.replace`) |
| 7 | Usar en un proyecto | Bloque 5, procesador de CSV sucio a JSON limpio (cierre de B-M1) |

**Instrumento DOC-02:** RM-03 + TD-01. Evidencia observable: procesa un CSV sucio real (encoding, campos vacíos) sin ayuda y guarda resultados en JSON válido (evidencia de dominio ya declarada en SYL-N1).

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [CS50P — Week 6, File I/O](https://cs50.harvard.edu/python/weeks/6/) | Harvard (CS50) | EN | ~1h | Introductorio | Semana completa dedicada a `open`/`with`/CSV, con el mismo "por qué" de esta lección | 🟢 Antes de estudiar |
| [Python docs — csv module](https://docs.python.org/3/library/csv.html) | Python Software Foundation | EN | ~15 min | Introductorio | Referencia oficial exacta de `csv.DictReader`/`csv.writer` | 🔵 Durante la lección |
| [Python docs — json module](https://docs.python.org/3/library/json.html) | Python Software Foundation | EN | ~15 min | Introductorio | Referencia oficial exacta de `dump`/`dumps`/`load`/`loads` | 🔵 Durante la lección |
| [CS50P — Reading and Writing CSVs](https://cs50.harvard.edu/python/shorts/reading_and_writing_csvs/) | Harvard (CS50) | EN | ~10 min | Introductorio | Ejemplos prácticos cortos de lectura/escritura de CSV | 🟣 Después de terminar |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
