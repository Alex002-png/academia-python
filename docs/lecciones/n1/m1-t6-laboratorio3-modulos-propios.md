# N1.M1.T6 — Laboratorio 3 · Módulos y paquetes propios

*Construido bajo DOC-12 v1.0.0. Investigación: `docs/investigacion/n1-m1-t6-modulos-paquetes-venvs.md`.*

**Gran pregunta:** ¿cómo dejas de escribir un solo archivo gigante y empiezas a construir un programa hecho de piezas que se importan entre sí?

**Entorno objetivo:** terminal local · **Fluencia de terminal asumida:** M5.T1+T2 completos. · **Fuera de alcance:** pip, entornos virtuales — eso es el Laboratorio 4.

**Duración desglosada:** contexto (10) + explicación conceptual (10) + pasos guiados (20) + error en vivo (10) + mini laboratorio (15) + desafío (10) + evaluación (10) → **~85 min**.

**Fuera de alcance:** instalar paquetes de terceros — este laboratorio es solo sobre código propio.

## Objetivo
Estructurar un programa en varios archivos `.py` que se importan entre sí; distinguir cuándo un archivo se ejecuta como script y cuándo se importa como módulo (`__name__ == "__main__"`); ejecutar un proyecto multi-archivo desde la terminal.

## Contexto
Hasta ahora, cada programa cupo en un solo archivo. Los programas reales no caben — se dividen en piezas con una responsabilidad cada una, igual que un proyecto de construcción se divide en planos separados por especialidad. Python permite que un archivo use código de otro con `import`, exactamente como ya importaste `sys` o `math` — la diferencia es que ahora el módulo lo escribiste tú.

## Explicación conceptual
Un **módulo** es, literalmente, cualquier archivo `.py` — el tuyo también lo es. `import nombre_archivo` (sin `.py`) ejecuta ese archivo una vez y te da acceso a lo que definió. La variable especial `__name__` vale `"__main__"` solo cuando el archivo se ejecuta directamente — nunca cuando se importa — y por eso `if __name__ == "__main__":` es el guardián estándar entre "esto es una librería" y "esto también se puede correr directo".

## Pasos
1. **Crea `saludo.py`** con una función `saludar(nombre)` y, debajo, `if __name__=="__main__": saludar("Mundo")`. Ejecútalo directo (`python saludo.py`) — corre el bloque `__main__`.
2. **Crea `main.py`** en la misma carpeta con `from saludo import saludar` y una llamada nueva. Ejecuta `python main.py` — nota que el bloque `__main__` de `saludo.py` **no** se ejecuta esta vez, porque se importó, no se corrió directo.
3. **Organiza en subcarpeta**: mueve `saludo.py` a una carpeta `utils/`, intenta el mismo import y observa el error — introduce el concepto de que Python busca módulos en rutas específicas (sin profundizar en paquetes con `__init__.py`, fuera de alcance aquí).

## Error inducido en vivo
Provoca un `ImportError` a propósito importando un archivo que no existe (`import noexiste`) y, por separado, un import circular real (dos archivos que se importan mutuamente) — ambos con diagnóstico honesto de qué mensaje exacto produce cada uno.

## Comprensión
- ¿Por qué el bloque `__main__` de `saludo.py` no corrió al importarlo desde `main.py`?
- ¿Qué diferencia hay entre "ejecutar un archivo" e "importarlo"?

## Puntos de verificación
☐ `saludo.py` corre directo y muestra su salida · ☐ `main.py` importa y usa `saludo` sin repetir el bloque `__main__` · ☐ Reproduje el error de import circular y lo entendí.

## Diagnóstico de errores
`ModuleNotFoundError: No module named 'X'` (nombre mal escrito o fuera del directorio actual) · `ImportError: cannot import name 'Y'` (el nombre no existe en ese módulo, comprobar con `dir(modulo)`) · import circular (`ImportError: cannot import name ... (most likely due to a circular import)` — dos módulos que se necesitan mutuamente en tiempo de carga; solución: reestructurar cuál depende de cuál, no solo "arreglar el mensaje").

## Mini laboratorio
Divide un programa tuyo de M1 anterior (≥15 líneas) en al menos dos archivos con responsabilidades distintas, e impórtalos correctamente.

## Desafío
Sin mirar la guía: crea tres archivos donde A importa de B y B importa de C, ejecuta A, y explica el orden exacto en que Python cargó los tres.

## Buenas prácticas
Un archivo, una responsabilidad clara · nombres de módulo en minúsculas sin espacios · todo script ejecutable lleva su guardián `if __name__=="__main__":`.

## Recursos
🟢 Antes — "The Python Tutorial: Modules", docs.python.org, EN, ~20 min · 🔵 Durante — "Packaging and Shipping Code", MIT Missing Semester, EN, ~40 min (cubre también estructura de proyecto).

## Evaluación
**Cierre:** cada archivo `.py` es un módulo; `__main__` distingue "correr" de "importar". **Repetir sin guía:** divide un programa nuevo en módulos, de memoria. **Metacognitiva:** ¿qué se sintió distinto de escribir todo en un solo archivo?
