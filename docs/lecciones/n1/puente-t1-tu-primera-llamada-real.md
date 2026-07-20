# N1 — Laboratorio 12 · Tu primera llamada real (puente hacia el Capstone)

*Construido bajo DOC-12 v1.0.0. No es un tema nuevo del syllabus — es la corrección de un hallazgo real de la auditoría integral de N1 (`docs/informes/n1-auditoria-integral.md`, hallazgo #6): M6 (APIs) y M7 (SQL) se enseñaron enteros en modalidad Pyodide simulada, y el estudiante nunca los toca en su propio entorno real antes de que el Capstone se lo exija todo de golpe. Este laboratorio es el ensayo de bajo riesgo antes del examen de alto riesgo — y, a la vez, la primera vez que Git deja de ser "algo que se aprendió una vez" y se convierte en cómo se entrega cualquier trabajo real, incluido este.*

**Gran pregunta:** ¿pueden convivir, en tu propia terminal, todo lo que hasta ahora solo viviste por separado — una llamada HTTP real, una credencial fuera del código, una tabla SQL de verdad, y una rama con su propio Pull Request?

**Entorno objetivo:** terminal local + repositorio propio de GitHub. **Fluencia asumida:** M4 completo (Laboratorios 5-8), M5 completo (Laboratorios 1-2, 9-11), M6 y M7 completos (conceptual, Pyodide). **Fuera de alcance:** ninguna herramienta nueva — esto es integración pura de lo ya aprendido.

**Duración desglosada:** contexto (10) + configurar credencial real (15) + llamada HTTP real + persistencia SQLite real (25) + entregar por rama y PR (20) + reflexión (10) → **~80 min**.

## Objetivo
Hacer, en tu propia terminal, una llamada HTTP real a una API pública; guardar su clave (si la API la exige) en un `.env` real excluido por un `.gitignore` real; guardar el resultado en una base de datos SQLite real; y entregar todo el trabajo mediante una rama propia y un Pull Request — el mismo flujo que vas a repetir, ahora como hábito, durante todo el Capstone.

## Contexto
En M6 aprendiste a consumir APIs y en M7 a persistir en SQL — pero ambos módulos corrieron en el simulador del Campus, con un cliente HTTP simulado y una base de datos en memoria, exactamente como se anunció en su momento. En M4 aprendiste Git, pero en un proyecto aislado, sin volver a tocarlo desde entonces. El Capstone va a exigirte las cuatro cosas a la vez, durante semanas, bajo presión de un proyecto real — y este es el único momento antes de eso donde puedes ensayarlas juntas, de bajo riesgo, con una tarea pequeña y acotada.

## Explicación conceptual
La diferencia entre el simulador de M6/M7 y hoy no es de sintaxis — es de consecuencias. `requests.get()` real depende de tu conexión, puede fallar de formas que el simulador no reproduce, y una clave real mal guardada es un riesgo real, no un ejercicio. Git, hoy, deja de ser "la herramienta del módulo 4" y se convierte en la forma en que entregas cualquier trabajo — una rama por tarea, un commit que explica qué y por qué, un Pull Request que documenta el cambio antes de darlo por terminado. Es exactamente el hábito que el Capstone va a exigir en sus cinco hitos, no solo al final.

## Pasos
1. **Crea un repositorio nuevo** para este laboratorio (ya sabes hacerlo — M4.T1). Instala `requests` en un entorno virtual propio (M1.T6/Laboratorio 4): `pip install requests`.
2. **Crea una rama** para este trabajo: `git checkout -b llamada-real` — desde ahora, todo lo que hagas en este laboratorio vive en esta rama, no en `main`.
3. **Haz una llamada HTTP real** contra una API pública sin autenticación (`https://jsonplaceholder.typicode.com/users/1` — la misma que usaste simulada en M6) con la librería `requests` real: `import requests; r = requests.get(url); print(r.status_code); print(r.json())`. Verifica el status code y los datos reales — esta vez, si tu conexión falla, lo vas a ver de verdad, no en una tabla de diagnóstico.
4. **Guarda una credencial de ejemplo fuera del código**: crea un archivo `.env` con una línea `API_KEY=ejemplo-no-real`, un `.gitignore` con la línea `.env`, y lee la clave con `os.environ.get` o la librería `python-dotenv` — confirma con `git status` que `.env` nunca aparece como archivo para commitear.
5. **Persiste el resultado en SQLite real**: crea una base de datos real (`sqlite3.connect("datos.db")`, no `:memory:`), una tabla, e inserta los datos que obtuviste de la API real.
6. **Confirma tu trabajo en commits atómicos**, siguiendo las reglas de Beams (M4.T1): un commit para el script de la llamada HTTP, otro para la persistencia SQL.
7. **Sube la rama y abre un Pull Request** (M4.T3) con una descripción real: qué hiciste, por qué, cómo se verifica. Fusiónalo tú mismo tras revisar tu propio diff.

## Error inducido en vivo
Antes de crear el `.env`, comprueba deliberadamente qué pasa si intentas leer `API_KEY` sin haberla configurado (`os.environ.get("API_KEY")` sin valor por defecto) — confirma que devuelve `None`, no un error, y explica por qué eso también es un riesgo (un programa que sigue corriendo con una clave ausente, en silencio, puede fallar de formas confusas más adelante).

## Comprensión
- ¿Qué pudo salir distinto entre la llamada HTTP simulada de M6 y esta llamada real?
- ¿Por qué `.env` vive fuera de tu código pero `.gitignore` sí se commitea?
- ¿Qué diferencia hay entre trabajar directo en `main` y abrir una rama para esta tarea, si de todas formas ibas a fusionarla tú mismo enseguida?

## Puntos de verificación
☐ Llamada HTTP real ejecutada, status code verificado · ☐ Credencial de ejemplo en `.env` real, excluida por `.gitignore` real · ☐ Datos persistidos en una base SQLite real (archivo `.db`, no `:memory:`) · ☐ Trabajo hecho en una rama propia, con commits atómicos · ☐ Pull Request abierto y fusionado tras revisión propia.

## Diagnóstico de errores
`requests.exceptions.ConnectionError` (sin conexión real, o la API está caída — a diferencia del simulador, esto puede pasar de verdad; verifica tu red antes de asumir un bug propio) · `.env` aparece en `git status` como archivo para commitear (falta la línea `.env` en `.gitignore`, o el `.gitignore` no se creó antes del primer `git add`) · `sqlite3.OperationalError: no such table` (la tabla no se creó antes del INSERT, o el nombre no coincide — mismo patrón de M7.T3) · PR sin nada que mostrar en "Files changed" (la rama no tiene commits nuevos respecto a `main` — confirma con `git log main..llamada-real`).

## Mini laboratorio
Repite el mismo flujo completo (rama → llamada real → persistencia → PR) contra un endpoint distinto de la misma API (`/users/2`, o `/posts/1`), de memoria, sin volver a mirar esta guía paso a paso.

## Desafío
Sin mirar la guía: diseña una segunda tabla SQL relacionada con la primera (por ejemplo, si guardaste usuarios, guarda también sus posts en una tabla aparte con clave foránea), consumiendo un segundo endpoint real, y entrega el trabajo completo en una rama y PR separados del primero.

## Buenas prácticas
Una rama por tarea, siempre — nunca commitear directo a `main` a partir de ahora · toda credencial, real o de ejemplo, vive en `.env`, nunca en el código · un PR, aunque te lo fusiones tú mismo, siempre lleva descripción real.

## Recursos
🔵 Durante — requests Quickstart (ya citado en M6.T2) · 🔵 Durante — docs.python.org sqlite3 (ya citado en M7.T3) · ⭐ Profundización — `python-dotenv` en PyPI, para gestión de variables de entorno más allá de `os.environ.get`.

## Evaluación
**Cierre:** M4, M5, M6 y M7 no son cuatro cursos distintos — son cuatro piezas del mismo flujo de trabajo, y hoy las usaste juntas por primera vez, de bajo riesgo, antes de que el Capstone te las exija todas a la vez. **Repetir sin guía:** repite el flujo completo (rama→llamada real→persistencia→PR) contra un endpoint nuevo, de memoria. **Metacognitiva:** ¿qué se sintió distinto entre hacer esto en el simulador (M6/M7) y hacerlo en tu propia terminal, con una rama y un PR de por medio?
