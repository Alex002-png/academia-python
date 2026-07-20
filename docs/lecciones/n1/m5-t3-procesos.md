# N1.M5.T3 — Laboratorio 9 · Procesos: los programas están vivos

*Construido bajo DOC-12 v1.0.0. Investigación: `docs/investigacion/n1-m5-t3-t4-t5-procesos-permisos-automatizacion.md`.*

**Gran pregunta:** ¿qué es, realmente, "ejecutar" un programa?

**Entorno objetivo:** terminal local. **Fluencia asumida:** M5.T1+T2. **Fuera de alcance:** memoria/permisos (Laboratorio 10).

**Duración desglosada:** contexto (10) + explicación conceptual (10) + pasos guiados (20) + error en vivo (10) + mini laboratorio (15) + desafío (10) + evaluación (10) → **~85 min**.

## Objetivo
Explicar qué es un proceso — un programa en ejecución con recursos propios —, observarlo (`ps`), gestionarlo (señales, `kill`), y distinguir con precisión programa de proceso.

## Contexto
Llevas semanas *creando procesos sin saberlo* — cada `python programa.py` que ejecutaste fue uno. Hoy, por fin, puedes observarlos. Un **programa** es un archivo inerte en disco; un **proceso** es ese programa vivo, corriendo, con memoria y recursos propios — la misma diferencia que hay entre una receta escrita y la comida real cociéndose.

## Explicación conceptual
Cuando ejecutas `python programa.py`, tu shell le pide al sistema operativo que cree un **proceso nuevo**: le asigna un identificador (PID), memoria propia, y empieza a ejecutar el intérprete de Python con tu archivo. Puedes tener el mismo programa corriendo dos veces — son dos procesos distintos, cada uno con su propio PID. Para comunicarte con un proceso ya corriendo (pedirle que pare, por ejemplo), el sistema operativo usa **señales** — `SIGTERM` es una petición educada de terminar ("por favor, cierra cuando puedas"); `SIGKILL` es una orden inapelable que ni el proceso puede ignorar ni capturar.

## Pasos
1. Ejecuta un script tuyo que tarde (`import time; time.sleep(30)`) en una terminal, y en otra: `ps aux | grep python` (macOS/Linux) — encuentra su PID.
2. Detén el proceso con Ctrl-C en su propia terminal — eso envía `SIGINT`.
3. Vuelve a ejecutarlo, y esta vez termínalo desde la otra terminal: `kill <PID>` (envía `SIGTERM` por defecto).
4. Repite, y esta vez usa `kill -9 <PID>` (`SIGKILL`) — nota que no hay forma de que el proceso lo ignore.

## Error inducido en vivo
Ejecuta `kill <PID-que-no-existe>` (inventa un número) y observa el mensaje real.

## Comprensión
- ¿Qué diferencia hay entre un programa y un proceso?
- ¿Por qué `SIGTERM` puede ignorarse pero `SIGKILL` no?

## Puntos de verificación
☐ Encontré el PID de mi propio proceso con ps · ☐ Detuve un proceso con Ctrl-C (SIGINT) · ☐ Detuve un proceso con kill (SIGTERM) · ☐ Detuve un proceso con kill -9 (SIGKILL) y until entendí la diferencia.

## Diagnóstico de errores
`kill: No such process` (el PID no existe, o el proceso ya terminó — verifica con ps de nuevo) · proceso "zombi" en `ps` con estado `Z` (terminó pero su padre no lo "recogió" — documentado en la propia man page de ps; en scripts propios simples no debería ocurrir, es señal de un bug en el programa que lo creó) · `kill` sin `sudo` en un proceso ajeno (permisos — no puedes matar procesos de otro usuario sin privilegios).

## Mini laboratorio
Ejecuta tres procesos de tu misma calculadora simultáneamente en tres terminales, encuentra los tres PIDs distintos con `ps`, y termina solo uno con `kill`.

## Desafío
Sin mirar la guía: narra la cadena completa que ocurre desde que escribes `python programa.py` y presionas Enter hasta que ves la primera salida — shell → proceso nuevo → intérprete → tu código.

## Buenas prácticas
Preferir `SIGTERM` (`kill` sin `-9`) antes que `SIGKILL` — deja que el proceso cierre limpio si puede · nunca matar procesos que no reconoces sin investigar primero qué son.

## Recursos
🟢 Antes — Missing Semester, "Command-line Environment", EN, ~50 min · 🔵 Durante — man7.org, signal(7), EN, ~15 min.

## Evaluación
**Cierre:** un proceso es un programa vivo con recursos propios; SIGTERM pide, SIGKILL ordena. **Repetir sin guía:** encuentra y termina un proceso propio de memoria. **Metacognitiva:** ¿qué tan real era tu idea de "ejecutar un programa" antes de ver los procesos con tus propios ojos?
