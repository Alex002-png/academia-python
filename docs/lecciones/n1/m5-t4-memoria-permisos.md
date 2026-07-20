# N1.M5.T4 — Laboratorio 10 · Memoria, archivos y permisos: el contrato de la máquina

*Construido bajo DOC-12 v1.0.0. Investigación: `docs/investigacion/n1-m5-t3-t4-t5-procesos-permisos-automatizacion.md`.*

**Gran pregunta:** ¿por qué el sistema operativo le miente a cada proceso haciéndole creer que la máquina entera es suya?

**Entorno objetivo:** terminal local. **Fluencia asumida:** Laboratorio 9. **Fuera de alcance:** automatización/scripts (Laboratorio 11).

**Duración desglosada:** contexto (10) + explicación conceptual (10) + pasos guiados (20) + error en vivo (10) + mini laboratorio (15) + desafío (10) + evaluación (10) → **~85 min**.

## Objetivo
Explicar el modelo conceptual de memoria de un proceso (aislada, privada), distinguirla del disco (persistente, compartido), y gestionar permisos de archivo como contratos de acceso.

## Contexto
Imagina que cientos de programas compartieran una sola memoria sin aislamiento: un bug de cualquiera corrompería a todos, un proceso hostil leería lo que quisiera. Así funcionaba antes; por eso el sistema operativo actúa como un **gerente de hotel lleno** — le da a cada huésped (proceso) una habitación privada (memoria virtual) y sostiene, con esfuerzo, la ilusión de que tiene el hotel entero. Los archivos, en cambio, son la consigna común del hotel — compartida, con llaves (permisos) que deciden quién entra.

## Explicación conceptual
La memoria de un proceso es **volátil y privada** — desaparece cuando el proceso termina, y ningún otro proceso puede leerla directamente. El disco es **persistente y compartido** — sobrevive al proceso y varios pueden acceder al mismo archivo. Los **permisos** (`rwx` — lectura, escritura, ejecución) son el contrato que decide quién puede hacer qué con cada archivo, para el dueño, el grupo, y todos los demás — la documentación oficial de `chmod` confirma la notación octal exacta: un modo numérico de hasta cuatro dígitos, sumando los valores 4 (lectura), 2 (escritura) y 1 (ejecución).

## Pasos
1. `ls -l` en cualquier carpeta — observa la columna de permisos (ej. `-rw-r--r--`) y quién es el dueño.
2. Crea un archivo y quítale todos los permisos: `chmod 000 archivo.txt`, luego intenta leerlo (`cat archivo.txt`).
3. Devuélvele permiso de lectura al dueño: `chmod 600 archivo.txt`, confirma que ahora sí puedes leerlo.
4. Intenta ejecutar un script `.py` directamente (`./script.py`) sin permiso de ejecución, y luego con `chmod +x script.py`.

## Error inducido en vivo
Con el archivo en `chmod 000`, intenta abrirlo con tu editor de código además de con `cat` — observa el mensaje exacto de "Permission denied" en ambos casos.

## Comprensión
- ¿Por qué la memoria de un proceso desaparece al terminar, pero un archivo en disco no?
- ¿Qué significan los tres grupos de `rwx` en `-rw-r--r--`?

## Puntos de verificación
☐ Interpreté una línea completa de ls -l · ☐ Provoqué y vi un Permission denied real · ☐ Devolví permisos y confirmé el acceso · ☐ Hice un script ejecutable con chmod +x.

## Diagnóstico de errores
`Permission denied` al leer/escribir (permisos insuficientes — revisa con ls -l antes de nada más) · `Permission denied` al ejecutar un script (falta el bit de ejecución — chmod +x, no reescribir el archivo) · usar `chmod 777` como "solución" (da permiso total a absolutamente cualquiera — funciona, pero es una práctica ampliamente desaconsejada por la comunidad, no una solución real: da el permiso mínimo necesario, no el máximo posible).

## Mini laboratorio
Crea tres archivos con permisos distintos (solo lectura para ti, lectura y escritura, sin permisos), y documenta qué comando funciona y cuál falla en cada uno.

## Desafío
Sin mirar la guía: explica dónde vive una variable de tu programa mientras corre, y dónde vive un archivo que ese mismo programa guardó — y qué le pasa a cada uno cuando el programa termina.

## Buenas prácticas
Dar el permiso mínimo necesario, nunca `777` por comodidad · verificar `ls -l` antes de asumir por qué algo falla · nunca hacer ejecutable un archivo que no deberías poder correr.

## Recursos
🟢 Antes — man7.org, chmod(1), EN, ~15 min · 🔵 Durante — man7.org, ps(1) (estados de proceso, incluida la memoria asociada), EN, ~10 min.

## Evaluación
**Cierre:** la memoria de un proceso es privada y volátil; el disco es compartido y persistente; los permisos son el contrato entre ambos mundos. **Repetir sin guía:** provoca y resuelve un Permission denied de memoria. **Metacognitiva:** ¿qué modelo tenías de "dónde viven mis datos" antes de este laboratorio, y qué tan equivocado estaba?
