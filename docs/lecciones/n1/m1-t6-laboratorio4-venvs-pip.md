# N1.M1.T6 — Laboratorio 4 · Entornos virtuales y pip

*Construido bajo DOC-12 v1.0.0. Investigación: `docs/investigacion/n1-m1-t6-modulos-paquetes-venvs.md`.*

**Gran pregunta:** si dos de tus proyectos necesitan versiones distintas de la misma librería, ¿qué se rompe sin aislamiento — y qué te da `venv` a cambio?

**Entorno objetivo:** terminal local · **Fluencia asumida:** Laboratorio 3 completo. · **Fuera de alcance:** publicar paquetes propios, `requirements.txt` avanzado con versiones fijadas (se toca lo mínimo funcional).

**Duración desglosada:** contexto (10) + explicación conceptual (10) + pasos guiados (25) + error en vivo (10) + mini laboratorio (15) + desafío (10) + evaluación (10) → **~90 min**.

## Objetivo
Crear y activar un entorno virtual; instalar un paquete con pip dentro de él; explicar por qué "instalar sin activar" es el error más común; generar y reproducir un entorno con `requirements.txt`.

## Contexto
Imagina que tu Proyecto A necesita `LibFoo` versión 1, y tu Proyecto B, el mismo día, necesita `LibFoo` versión 2. Si instalas todo en el mismo Python del sistema, uno de los dos proyectos se rompe — no hay forma de que las dos versiones convivan en el mismo lugar. `venv` resuelve esto creando una copia aislada de Python por proyecto, donde lo que instalas ahí **no** afecta a nada más de tu sistema.

## Explicación conceptual
Al activar un entorno virtual, tu terminal empieza a usar un Python y un `pip` que viven **dentro de esa carpeta del proyecto**, no los del sistema — verás el nombre del entorno entre paréntesis en tu prompt como señal visual de que está activo. Todo lo que instales mientras está activo va ahí, no al sistema. **El error más común y mejor documentado de este tema exacto es instalar sin haber activado** — pip sigue funcionando, pero instala en el lugar equivocado, y el síntoma aparece después, como un `ModuleNotFoundError` desconcertante en un paquete que "ya instalaste".

## Pasos
1. `python -m venv .venv` — crea la carpeta del entorno (no imprime casi nada si sale bien).
2. Activar: `.venv\Scripts\activate` (Windows) / `source .venv/bin/activate` (macOS/Linux) — el prompt cambia, mostrando `(.venv)` al inicio.
3. `pip install requests` — instala un paquete real dentro del entorno activo. Verifica con `pip list`.
4. `pip freeze > requirements.txt` — congela las dependencias exactas instaladas.
5. Desactivar (`deactivate`) y confirmar con `pip list` que `requests` ya no aparece fuera del entorno.

## Error inducido en vivo
Desactiva el entorno, instala algo, y luego intenta importarlo con el entorno vuelto a activar — verás que no está: la instalación fue al Python equivocado. Diagnóstico: `(.venv)` ausente del prompt en el momento de instalar.

## Comprensión
- ¿Qué significa exactamente el `(.venv)` en tu prompt?
- Si `pip list` muestra un paquete fuera del entorno, ¿qué evidencia usarías para confirmar que se instaló sin activar?

## Puntos de verificación
☐ Entorno creado y activado (prompt cambia) · ☐ `requests` instalado y visible en `pip list` dentro del entorno · ☐ `requirements.txt` generado · ☐ Reproduje el error de instalar sin activar y lo diagnostiqué.

## Diagnóstico de errores
`'venv' no reconocido` / entorno no se crea (Python mal instalado, ver M5.T1) · script de activación "no se puede cargar" en PowerShell (política de ejecución restringida — `Set-ExecutionPolicy -Scope Process RemoteSigned`, explicar qué hace antes de copiarlo) · paquete "instalado" pero `ModuleNotFoundError` (instalado sin activar — comprobar con `pip show <paquete>` dentro y fuera del entorno) · compartir o duplicar la carpeta `.venv/` completa con otra persona en vez de compartir solo `requirements.txt` (pesa mucho, no es portable entre sistemas, y nunca debería viajar junto al resto de tu proyecto — cuando en el próximo módulo aprendas a compartir proyectos con Git, vas a conocer la herramienta exacta para excluirla automáticamente).

## Mini laboratorio
Crea un entorno nuevo, instala dos paquetes distintos, genera `requirements.txt`, bórralo todo, y reconstrúyelo idéntico solo desde ese archivo (`pip install -r requirements.txt`).

## Desafío
Sin mirar la guía: demuestra con evidencia (capturas de `pip list`) que dos entornos virtuales distintos pueden tener versiones diferentes del mismo paquete sin chocar.

## Buenas prácticas
Un entorno por proyecto, nunca compartido · nunca compartir ni copiar la carpeta `.venv/` en sí — solo `requirements.txt` · `requirements.txt` es lo que se comparte, el entorno en sí nunca.

## Recursos
🟢 Antes — packaging.python.org, "Installing Packages" (escenario LibFoo v1/v2), EN, ~15 min · 🔵 Durante — docs.python.org, módulo `venv`, EN, ~15 min · ⭐ Profundización — MIT Missing Semester, "Packaging and Shipping Code" (incluye por qué la industria empieza a preferir `uv`), EN, ~40 min.

## Evaluación
**Cierre:** un entorno virtual es un Python aislado por proyecto; el `(.venv)` en tu prompt es la única señal de si estás instalando en el lugar correcto. **Repetir sin guía:** crea, activa, instala, congela y reconstruye un entorno de memoria. **Metacognitiva:** ¿en qué momento perdiste de vista si el entorno estaba activo, y cómo lo notaste?
