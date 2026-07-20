# N1.M4.T4 — Laboratorio 8 · README profesional e historia legible

*Construido bajo DOC-12 v1.0.0. Investigación: `docs/investigacion/n1-m4-git-github.md`. Cierra M4 y el largo aliento B-M4.*

**Gran pregunta:** si alguien sin contexto abre tu repositorio dentro de un año, ¿qué necesita encontrar para confiar en él?

**Entorno objetivo:** terminal local + GitHub. **Fluencia asumida:** Laboratorio 5-7. **Fuera de alcance:** ninguno nuevo — cierra el módulo integrando lo anterior.

**Duración desglosada:** contexto (10) + explicación conceptual (10) + pasos guiados (20) + revisión con "cliente" (15) + mini laboratorio (15) + desafío (10) + evaluación (10) → **~90 min**.

## Objetivo
Escribir un README que un tercero sigue sin preguntar; revisar y mejorar la historia de commits de un repositorio propio como documentación viva.

## Contexto
El código es la mitad del trabajo — que otro pueda usarlo y entenderlo es la otra mitad. Un README escrito para ti mismo ("ya sé cómo se instala") no sirve a nadie más, incluido tú mismo dentro de seis meses. La cita que mejor resume esto: "tu trabajo no es 'vender' tu proyecto — es permitir que alguien lo evalúe objetivamente" (Art of README).

## Explicación conceptual
Piensa en tu repositorio como un **producto con manual**. La estructura mínima que coinciden en recomendar tanto GitHub oficial como Art of README: qué hace el proyecto, por qué es útil, cómo instalarlo, un ejemplo de uso ejecutable (no solo descrito), y quién lo mantiene. Un ejemplo de uso que el lector no puede copiar y ejecutar tal cual no cumple su función — capturas de pantalla no reemplazan instrucciones verificables.

## Pasos
1. Elige uno de tus repositorios ya publicados (calculadora de N0, o cualquiera de M4).
2. Escribe un `README.md` con: nombre y descripción de una línea, instalación paso a paso, un ejemplo de uso que se pueda copiar y ejecutar literalmente, y una sección de licencia o autoría.
3. Revisa tu historia de commits (`git log --oneline`) — ¿cuenta una historia legible, o es una lista de "cambios varios"?
4. Si encuentras commits ilegibles, no los reescribas (fuera de alcance reescribir historia publicada) — documenta en el README lo que la historia no explica por sí sola.

## Prueba con "cliente"
El tutor, en rol Cliente sin contexto previo del proyecto, intenta instalar y usar tu programa **solo con el README** — sin preguntarte nada. Si se atasca en algún paso, ese paso está incompleto.

## Comprensión
- ¿Qué diferencia hay entre describir cómo se instala algo y darlo como instrucciones copiables y ejecutables?
- ¿Por qué "ya sé cómo funciona" es la trampa más común al escribir tu propio README?

## Puntos de verificación
☐ README con las 5 secciones mínimas (qué/por qué/instalación/uso ejecutable/autoría) · ☐ Revisé mi historia de commits con git log --oneline · ☐ Un tercero (o el tutor en rol Cliente) instaló y usó mi proyecto solo con el README.

## Diagnóstico de errores
Instrucciones que asumen contexto no explicado ("solo corre el script" sin decir con qué comando) · ejemplo de uso que no es copiable tal cual (con `<tu-nombre>` sin explicar que hay que reemplazarlo) · README desactualizado tras cambios posteriores del código — revisarlo cada vez que cambie la forma de usar el proyecto, no solo al principio.

## Mini laboratorio
Escribe el README de un segundo repositorio tuyo, aplicando lo aprendido sin repetir literalmente la estructura del primero palabra por palabra.

## Desafío
Sin mirar la guía: entrégale tu README (sin explicación verbal adicional) a alguien que nunca vio tu proyecto — real o simulado por el tutor — y anota exactamente en qué paso se atascó, si alguno.

## Buenas prácticas
Ejemplo de uso siempre ejecutable, nunca solo descrito · README actualizado cada vez que cambie cómo se usa el proyecto · nunca asumir que "obvio para mí" es obvio para otro.

## Recursos
🟢 Antes — Art of README (github.com/noffle/art-of-readme), EN, ~15 min · 🔵 Durante — GitHub Docs, "About READMEs", EN, ~10 min.

## Evaluación
**Cierre:** el código no documentado, a efectos del mundo, no existe — el README es la mitad del trabajo que hace visible la otra mitad. **Repetir sin guía:** escribe el README de un proyecto nuevo de memoria. **Metacognitiva:** ¿qué diste por obvio en tu primer intento que en realidad no lo era?
