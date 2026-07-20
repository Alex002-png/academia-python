# N1.M5.T5 — Laboratorio 11 · Automatización: componer el sistema

*Construido bajo DOC-12 v1.0.0. Investigación: `docs/investigacion/n1-m5-t3-t4-t5-procesos-permisos-automatizacion.md`. Cierra M5.*

**Gran pregunta:** ¿cuánto tiempo debe robarte una tarea repetida antes de merecer automatización?

**Entorno objetivo:** terminal local. **Fluencia asumida:** Laboratorio 9+10. **Fuera de alcance:** ninguno nuevo — cierra M5 integrando lo anterior.

**Duración desglosada:** contexto (10) + explicación conceptual (10) + pasos guiados (25) + error en vivo (10) + mini laboratorio (15) + desafío (10) + evaluación (10) → **~90 min**.

## Objetivo
Componer comandos con pipes y redirección; escribir un script bash simple con manejo de errores; elegir entre bash y Python con criterio.

## Contexto
La filosofía Unix, atribuida a Doug McIlroy (creador del pipe), es: programas pequeños que hacen una cosa bien, conectados entre sí — la salida de uno es la entrada del siguiente. Lo que haces dos veces a mano, la tercera se automatiza: es el superpoder diario y silencioso de cualquier ingeniero.

## Explicación conceptual
Un **pipe** (`|`) conecta la salida de un comando con la entrada del siguiente, sin archivos intermedios. La **redirección** (`>`, `>>`) manda la salida a un archivo en vez de a la pantalla (`>` sobrescribe, `>>` añade). Un script bash es, simplemente, una secuencia de estos mismos comandos guardada en un archivo — con la ventaja de poder repetirla exactamente igual cada vez.

## Pasos
1. Compón un pipe real: `ls -la | grep .py` — lista archivos y filtra solo los `.py`.
2. Redirige la salida a un archivo: `ls -la > listado.txt`, luego `cat listado.txt`.
3. Crea `script.sh` con `#!/bin/bash` en la primera línea y dos o tres comandos reales tuyos, hazlo ejecutable (`chmod +x script.sh`) y ejecútalo (`./script.sh`).
4. Añade manejo de errores real: `set -euo pipefail` al inicio del script — detiene la ejecución ante cualquier error no manejado o variable no definida (convención muy usada en la industria, aunque no es una característica con nombre oficial de Bash — una convención de la comunidad, no de la documentación GNU).
5. Usa una variable en el script SIN comillas (`rm $archivo`) con un nombre que tenga un espacio, y observa qué pasa.

## Error inducido en vivo
Repite el paso 5 deliberadamente: crea una variable con un valor que contenga un espacio y úsala sin comillas en un comando — observa cómo bash la divide en dos palabras distintas sin que se lo pidieras.

## Comprensión
- ¿Qué diferencia hay entre `>` y `>>`?
- ¿Por qué una variable sin comillas puede romper un script cuando su valor tiene espacios?

## Puntos de verificación
☐ Compuse un pipe real con al menos dos comandos · ☐ Redirigí salida a un archivo con > · ☐ Escribí y ejecuté un script bash con chmod +x · ☐ Reproduje el error de variable sin comillas y entendí por qué pasa.

## Diagnóstico de errores
`command not found` dentro de un script (ruta o nombre mal escrito, o falta el shebang `#!/bin/bash` en la primera línea) · variable sin comillas rompe con espacios (confirmado por ShellCheck como error real y documentado — SC2086; solución: usar siempre `"$variable"` entre comillas) · script "silenciosamente" sigue tras un error (sin `set -e`, bash continúa ejecutando aunque un comando falle — puede encadenar daños; con `set -euo pipefail` se detiene de inmediato).

## Mini laboratorio
Escribe un script que combine al menos tres comandos con pipes/redirección para resolver una tarea real tuya (por ejemplo, contar cuántos archivos `.py` tienes y guardar la lista en un archivo), con `set -euo pipefail` desde la primera línea.

## Desafío
Sin mirar la guía: decide, para una tarea nueva que se te ocurra, si la resolverías en bash o en Python — y justifica el criterio (¿es solo componer comandos existentes, o necesitas lógica real?).

## Buenas prácticas
`set -euo pipefail` como hábito en todo script bash real · comillas siempre alrededor de variables · si la tarea necesita lógica compleja, bash deja de ser la herramienta correcta — ahí empieza Python.

## Recursos
🟢 Antes — Missing Semester, "Command-line Environment", EN, ~50 min · 🔵 Durante — ShellCheck, SC2086 (por qué citar variables), EN, ~10 min.

## Evaluación
**Cierre:** un pipe conecta programas pequeños en una tubería de datos; automatizar lo repetido es el hábito que distingue a un ingeniero. **Repetir sin guía:** escribe un script nuevo con pipes y manejo de errores de memoria. **Metacognitiva:** ¿qué tarea repetitiva tuya, de las últimas semanas, merecería haberse automatizado?
