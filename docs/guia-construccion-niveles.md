# Guía Maestra de Construcción de Niveles (N4–N12)

> **Si estás leyendo esto en una ventana/sesión nueva de Claude Code:** no tienes memoria de ninguna conversación previa sobre este proyecto. Este documento existe exactamente para eso — es el contexto completo que necesitas para construir tu nivel asignado con el mismo rigor que ya se aplicó a N0, N1, N2 y N3. Léelo COMPLETO antes de escribir una sola línea. Después lee tu ficha de misión específica (`docs/mision-nX.md`, donde X es tu nivel asignado) y los documentos que ambas te señalen.

> **Prioridad explícita del Director para N4-N12, por encima de la velocidad de entrega:** el nivel, la dificultad real y la calidad de enseñanza/aprendizaje priman sobre todo lo demás. En concreto — más teoría por día, días más sustanciosos, ejercicios más complejos e integradores que el estándar ya visto en N0-N3. Es coherente con la propia arquitectura: N4-N12 son etapas avanzadas y profesionales, deben exigir más, no lo mismo con números más grandes. Ver §8 para cómo aplicar esto sin caer en relleno artificial — la instrucción es "más sustancia real", nunca "más cifra prometida".

## 0. Quién eres en este proyecto y qué NO debes hacer todavía

Se te asignó construir **un nivel específico** (N5, N6, N7... — revisa tu ficha de misión para saber cuál). Estás trabajando **en paralelo** con otras 7-8 ventanas idénticas a esta, cada una construyendo un nivel distinto, más el Director trabajando en N4 y coordinando la fusión final. Todos comparten, en algún momento, el mismo `index.html` y la misma carpeta `docs/`.

**Antes de escribir nada, confirma en qué carpeta estás parado.** Ejecuta `git branch --show-current` y `pwd`/`cd` sin argumentos. Debes estar en:
- Una carpeta **propia**, hermana de `C:\Users\USER\academia-python` (ej. `C:\Users\USER\academia-python-n7`), y
- Una rama **propia**, llamada `nivel/nX` (ej. `nivel/n7`).

**Si NO es así — detente y avisa al usuario antes de escribir nada.** Trabajar sobre la carpeta compartida sin tu propia rama/worktree es exactamente el escenario que este documento existe para prevenir: ediciones concurrentes al mismo `index.html` desde varias ventanas pueden perderse en silencio, sin error, sin conflicto de git visible — simplemente la última escritura gana y las demás desaparecen. Ver §11 para el protocolo completo.

**Lo que NO haces tú, bajo ninguna circunstancia, aunque parezca trivial:**
- No tocas `const LEVELS=[...]` ni `const LEVEL_META=[...]` en `index.html` (líneas compartidas — las conecta el Director al fusionar, ver §11).
- No agregas entradas al log EVT de `docs/00-ACADEMY-BLUEPRINT.md` ni tocas su tabla de estadísticas (mismo motivo — punto de fusión único, ver §11).
- No declaras tu propio nivel como **v1.0.0**. Ver §12 — esa palabra la usa únicamente el Director.
- No fusionas tu propia rama a `main`. Terminas tu trabajo, lo commiteas en tu rama, y avisas — la fusión secuencial la hace el Director desde la ventana principal.

## 1. Qué es este proyecto

**Academia Python** — un currículo completo de programación e IA, autoguiado, gratuito, en un único archivo (`index.html`, servido por GitHub Pages en `alex002-png.github.io/academia-python`), sin backend. 13 niveles (N0-N12) organizados en 5 Etapas:

- **ET1** (N1-N2): Computer Science, Software Engineering.
- **ET2** (N3): Matemáticas para IA — recién congelado como v1.0.0-candidato.
- **ET3** (N4-N6): Machine Learning, Deep Learning, Transformers.
- **ET4** (N7-N10): LLM Engineering, AI Systems, Sistemas Distribuidos, IA Local.
- **ET5** (N11-N12): Research Engineer, AI Systems Architect.

El Director (el usuario, Alex) es simultáneamente el estudiante único de este currículo y la autoridad final que aprueba cada nivel. **Nada llega a "v1.0.0" sin su veredicto explícito.** El estándar que rige todo el contenido es **DOC-11** ("Estándar de Excelencia Mundial"): sin relleno, sin ejercicios decorativos, todo verificado con ejecución real antes de escribirse — la pregunta que gobierna cada campo de cada lección es *"¿podría esta lección formar parte de la experiencia educativa de una de las mejores universidades del mundo?"*, no "¿está suficientemente bien?".

## 2. Mapa de archivos — qué es cada cosa y qué autoridad tiene

| Archivo | Qué es | Tier | ¿Lo editas tú? |
|---|---|---|---|
| `index.html` | La app completa: motor de renderizado + TODO el contenido, incluidos los arrays `LEVEL0`...`LEVEL3` ya existentes | — | Solo para AGREGAR tu propio `const LEVELn=[...]` nuevo. Nunca el motor/engine, nunca `LEVELS`/`LEVEL_META` |
| `docs/00-ACADEMY-BLUEPRINT.md` | La constitución del proyecto. Gobierna todo. Tiene el Apéndice E (Architecture Evolution Timeline, EVT) — log de cada hito | T1 | Léelo. No lo edites — el Director agrega tu(s) EVT al fusionar |
| `docs/01-perfil-egreso-marco-competencias.md` (DOC-01) | Catálogo canónico de competencias (`C-N0-01`...`C-N12-0N`) | T1 | Solo lectura — tus competencias ya están definidas ahí, no las inventes |
| `docs/02-modelo-evaluacion-rubricas.md` (DOC-02) | Instrumentos de evaluación por competencia | T1 | Solo lectura |
| `docs/10-plan-maestro-curriculo.md` (DOC-10) | El plan maestro: el desglose de módulos de los 13 niveles ya está aprobado aquí | T1 | Solo lectura — es tu alcance ya aprobado, lo instancias en un syllabus, no lo rediseñas |
| `docs/11-estandar-autoria-lecciones.md` (DOC-11) | Estándar de autoría para contenido **Pyodide** (navegador) | T1 | Solo lectura — rige la forma de cada lección que escribas en esa modalidad |
| `docs/12-estandar-laboratorios-entorno-real.md` (DOC-12) | Estándar de autoría para laboratorios de **entorno real** (terminal/Docker/cloud/APIs) | T1 | Solo lectura — rige cualquier módulo tuyo que salga del navegador (muy probable en tu nivel, ver §6) |
| `docs/syllabus/syl-n3.md` | El syllabus más reciente y refinado — tu MEJOR ejemplo de referencia completo | T2 | Solo lectura — cópialo como plantilla estructural |
| `docs/syllabus/syl-nX.md` | El syllabus que TÚ vas a crear para tu nivel | T2 | Lo creas tú, en tu rama |
| `docs/investigacion/nX-mM-*.md` | Notas de investigación real (fuentes citables, WebFetch/WebSearch) por módulo | — | Las creas tú, en tu rama |
| `docs/informes/nX-auditoria-integral.md`, `nX-informe-final-de-nivel.md` | Reportes de cierre de nivel | — | Los creas tú, en tu rama, al cerrar |
| `docs/herramientas/extract-nivel.js`, `harness-nivel-template.js` | Scripts reusables de verificación (ver §9) | — | Los usas, no los edites (cópialos a tu propio scratchpad si necesitas variantes) |
| `docs/guia-construccion-niveles.md` | Este documento | — | Solo lectura |
| `docs/mision-nX.md` | Tu ficha de misión específica | — | Solo lectura |

## 3. El objeto "día" — esquema completo, verificado línea por línea contra el código real

Todo el contenido de un nivel vive dentro de un array `const LEVELn=[...]` (dentro de `index.html`) de objetos "día". Este es el esquema **exacto**, confirmado leyendo directamente `n3m1t1`/`n3m1t1b`/`n3m1t1c` de `LEVEL3` — no una reconstrucción de memoria:

```js
{
  id:"n4m1t1",           // <nivel><módulo><tema>, ej. n4m1t1 — GLOBALMENTE único en TODO el Campus (los 13 niveles), no solo el tuyo
  n:"Día 1",             // etiqueta de visualización
  t:"Título del tema — Parte 1: fundamentos",
  intro:"Texto narrativo de apertura. HTML permitido.",

  // intuit/mcq/ing/errores/mental van SOLO en el Día 1 de cada tema (el "gancho" del tema completo)
  intuit:{code:'...',py:true,
    q:"Pregunta de predicción, SIN ejecutar el código de arriba",
    req:["fragmento1","fragmento2"],  // fragmentos que DEBEN aparecer en la salida real (verificación laxa)
    out:"salida exacta esperada",
    e:"Explicación de por qué, aprovechada para instalar el modelo mental correcto"},
  mcq:[{q:"...",o:["opción0","opción1","opción2","opción3"],a:1,e:"por qué esa es la correcta"}],
  ing:"Párrafo de contexto de industria/aplicación real — por qué esto importa fuera del ejercicio",
  errores:["Error conceptual común 1","Error conceptual común 2","Error conceptual común 3"],
  mental:{jr:"cómo lo piensa mal un junior",sr:"cómo lo piensa correctamente un senior",err:"el error exacto que produce confundir ambos"},

  // theory/ex van en TODOS los días
  theory:[
    ["Título del bloque teórico", T('HTML explicativo, puede incluir <code>...</code> y <strong>...</strong>'),
     'codigo_python_opcional_de_ejemplo()'],   // el 3er elemento del sub-array es opcional
    // ...más bloques
  ],
  ex:[
    {id:"n4m1t1e1",py:true,t:"Ejercicio 1 · título corto",
     d:'Enunciado del ejercicio. HTML permitido con <code>...</code>.',
     starter:'def funcion(x):\n    pass\n\nprint(funcion(3))',   // "pass" es el blanco que el estudiante llena
     runs:[[]],   // SIEMPRE literal [[]] en el uso actual del Campus — no inventes otro valor
     check:(o,c)=>{const exp="6";return norm(o[0])===exp?true:"Esperaba: "+exp+"\nObtuve:\n"+norm(o[0])},
     hints:["Pista 1: SIEMPRE conceptual/socrática, NUNCA código (ver §10 — regla no negociable)",
            "Pista 2: puede acercarse más, incluso mostrar un fragmento pequeño",
            "Pista 3 (opcional): puede ser código completo, es el último recurso"]},
    // ...más ejercicios
  ],

  // reto/retoFinal van SOLO en el ÚLTIMO día de cada tema (el día "cierre")
  reto:{id:"n4m1t1r",py:true,t:"Laboratorio · ...", d:'...', starter:'...', runs:[[]], check:(o,c)=>{...}, hints:[...]},
  retoFinal:{id:"n4m1t1x",py:true,t:"Desafío final · inédito — ...", d:'Predice ANTES de ejecutar: ...',
             starter:'codigo_completo_sin_blanco_pass()',  // NO tiene blanco — es predicción, no implementación
             runs:[[]], check:(o,c)=>{...}, hints:["..."]}
}
```

**Patrón de 3 días por tema (procedimental — M1/M2/M3-tipo), verificado en N3:**
- **Día 1** ("fundamentos"): lleva `intuit+mcq+ing+errores+mental+theory+ex`. Este es el ÚNICO día del tema con esos 5 campos de apertura.
- **Día 2** ("práctica extendida"): solo `intro+theory+ex` (repite el patrón pero sin intuit/mcq/etc — ya se gastaron en el Día 1).
- **Día 3** ("laboratorio integrador y desafío — cierra TX"): `intro+reto+ex+retoFinal`. Normalmente SIN `theory` propio (ya no hay teoría nueva, es integración). El título y el `intro` deben decir explícitamente "cierra T*X*" — verifica que el módulo REAL al que pertenece sea el correcto (bug real encontrado en N3: un tema decía "cierra T4 y M2" cuando M2 en realidad seguía 7 días más).

**Patrón de 2 días por tema (lectura/traducción — tipo M4 de N3):** Día 1 (fundamentos) + Día 2 (integrador, sin día de "práctica extendida" intermedio) — úsalo solo cuando el tema es de lectura/interpretación, no de práctica procedimental repetida (ver §8 sobre cómo decidir cuál patrón aplica a tu nivel).

**Un dato de esquema que NO debes replicar:** al final de `index.html` existen estructuras `VIZ` y `EXTRA` (diagramas ASCII y bloques hook/hist/ej/chk/sin/recursos/defensa/metacog) — son artefactos específicos de N0, de una implementación anterior a que el esquema de "día" madurara con los campos `theory`/`mental`/`errores` inline. **No repliques VIZ/EXTRA** — el patrón vigente desde N1 es el que describe este §3, con todo integrado directamente en el objeto día.

## 4. El objeto capstone/proyecto — esquema completo

El capstone de tu nivel (el proyecto final antes de la compuerta) NO es un array separado — es el **último elemento** dentro de tu propio `const LEVELn=[...]`, con esta forma (confirmado leyendo el capstone real de N3, `n3et3`):

```js
{
  id:"n4et4", n:"Capstone ET3", t:"Título del capstone", modalidad:"proyecto",
  ex:[],                 // normalmente vacío — la estructura real vive en "hitos", no en ex
  nivelLabel:"Nivel 4 — Machine Learning", modCount:5,
  ficha:{granPregunta:"...",duracionTotal:"...",dificultad:"...",prerequisitos:"..."},
  objetivo:"Qué certifica el capstone — nunca 'da los números correctos', siempre 'puede sostener/explicar/derivar'",
  contexto:"Cómo cada módulo aportó una pieza, y qué exige el capstone que los una",
  fueraDeAlcance:"Qué NO se espera — delimitación honesta y explícita",
  flujoDeGit:"...",       // SOLO si tu nivel usa DOC-12/modalidad real (repos, ramas, PRs) — omítelo si tu nivel es 100% Pyodide, igual que hizo N3
  hitos:[
    {id:"h1",titulo:"...",pregunta:"¿ya...?",descripcion:"Qué debe existir, con detalle operativo real",evidenciaLabel:"Qué debe mostrar el estudiante"},
    // ...más hitos (N3 usó 5)
  ],
  evalu:{cierre:"Frase de cierre del veredicto",
         checklist:["ítem verificable 1","ítem verificable 2", "..."],
         defensa:["Pregunta de defensa 1","Pregunta de defensa 2","..."]}
}
```

El progreso del estudiante se guarda vía `S.ph[id]` (hitos como checkboxes autodeclarados + bitácora de texto libre), renderizado por `renderProyectoDay`, con desbloqueo secuencial (`prevOk = i===0 || p.hitos[hitos[i-1].id]`). No necesitas tocar el motor de renderizado — solo producir el objeto con esta forma.

## 5. Cómo se registra un nivel nuevo (y por qué tú NO haces este paso)

El wiring final, confirmado leyendo `index.html` línea por línea:

```js
const LEVELS=[LEVEL0,LEVEL1,LEVEL2,LEVEL3];   // <- tu LEVELn se agrega aquí
const LEVEL_META=[
  {id:"n0",label:"Nivel 0 — Fundamentos",approved:()=>levelApproved()},
  {id:"n1",label:"Nivel 1 — Computer Science",approved:()=>LEVEL1.every(d=>dayDone(d))},
  {id:"n2",label:"Nivel 2 — Software Engineering",approved:()=>LEVEL2.every(d=>dayDone(d))},
  {id:"n3",label:"Nivel 3 — Matemáticas para IA",approved:()=>LEVEL3.every(d=>dayDone(d))},
  // <- tu entrada se agrega aquí: {id:"nX",label:"Nivel X — <nombre>",approved:()=>LEVELX.every(d=>dayDone(d))}
];
```

**Esta es la razón exacta por la que nadie edita estas dos líneas en su propia rama:** las 9 ramas paralelas (N4-N12) agregarían, todas, una línea al MISMO array, en el MISMO lugar del archivo — la colisión de fusión más segura de todo este proyecto. Tú simplemente construyes tu `const LEVELn=[...]` completo y autocontenido en tu rama; el Director agrega la línea de wiring UNA VEZ, al fusionar, exactamente igual a como ya fusionó 8 ramas de agentes en paralelo esta misma sesión (0 conflictos, por diseño: cada rama tocaba rangos de líneas disjuntos).

## 6. Modalidades de contenido — DOC-11 (Pyodide) vs. DOC-12 (entorno real) vs. proyecto

Tu nivel probablemente NO es 100% Pyodide como N0/N3. **Verifica esto primero, antes de diseñar una sola lección** — es la decisión arquitectónica más importante y la que, si se descubre tarde, más trabajo desperdicia.

**Criterio de frontera exacto (DOC-12 §5, citado íntegro):**
1. ¿El estudiante ejecuta esto dentro de la página del Campus, sin instalar nada? → **DOC-11**.
2. ¿El resultado depende del sistema operativo del estudiante (rutas, permisos, terminal por defecto)? → **DOC-12**.
3. ¿El estudiante necesita una cuenta externa (GitHub, un proveedor cloud), una instalación previa, o acceso a su propio sistema de archivos persistente? → **DOC-12**.

Un módulo puede mezclar ambos — cada TEMA declara su documento gobernante, nunca se asume por el número de módulo.

**Alerta técnica crítica, verifica esto empíricamente antes de comprometerte con un diseño (mismo principio que ya obligó a N3 a verificar `numpy.linalg.inv()` en Pyodide real antes de escribir M1):**

**Pyodide (WASM) NO puede ejecutar PyTorch ni TensorFlow.** Estas librerías dependen de extensiones compiladas nativas (CUDA, C++) que no tienen build oficial para WASM — a diferencia de `numpy`/`pandas`/`scikit-learn`/`matplotlib`, que SÍ están en el catálogo de paquetes de Pyodide y ya se usan en N3/N4. Si tu nivel involucra PyTorch, TensorFlow, entrenamiento real de redes, GPU, o cualquier framework de deep learning:
- **Verifica primero** contra la lista de paquetes real de Pyodide (`pyodide.org/en/stable/usage/packages-in-pyodide.html` o la que corresponda a la versión fijada en `index.html`, ya confirmada `v0.26.4`) si la librería que necesitas está disponible.
- Si NO está (el caso esperado para PyTorch/TensorFlow), ese módulo es **DOC-12**, no DOC-11 — el estudiante sale del Campus hacia un entorno externo. DOC-10 mismo ya insinúa esto: la ficha de N5.M2 dice literalmente "PyTorch (tensores, autograd, entrenamiento, **GPU gratuita en nube**)" — "en la nube" es la pista de que el propio plan maestro ya asumía Google Colab (o equivalente), no Pyodide local.
- Esto NO significa que todo el nivel sea DOC-12 — un módulo de "redes desde cero" en NumPy puro (antes de introducir el framework) sigue siendo perfectamente Pyodide-compatible, igual que N3 entero. Decide módulo por módulo, no nivel por nivel.

**Guía orientativa por etapa (verifica cada caso, no la des por sentada):**
- **N4 (Machine Learning):** numpy/pandas/scikit-learn están en Pyodide — muy probablemente 100% DOC-11, como N3.
- **N5 (Deep Learning), N6 (Transformers):** división mixta esperable — "desde cero" en numpy puro = DOC-11; PyTorch/entrenamiento real = DOC-12 (Colab u otro entorno externo, con las 13 secciones de DOC-12: requisitos, cuentas, adverencias de costo si aplica, etc.).
- **N7-N10 (LLM Engineering, AI Systems, Sistemas Distribuidos, IA Local):** APIs reales, RAG con vector DBs, Kubernetes, vLLM, Kafka, Ollama/llama.cpp, CUDA — esto es DOC-12 dominante, mucho más parecido a N1.M4-M5 (Git/Linux) que a N0/N3. Espera escribir laboratorios de entorno real como práctica principal, no como excepción.
- **N11-N12 (Research Engineer, AI Systems Architect):** lectura/reproducción de papers, contribuciones open source, cloud, entrevistas — predominantemente DOC-12 y trabajo de synthesis/escritura, con poca o ninguna práctica Pyodide.

Cuando un módulo sea DOC-12, sigue las **13 secciones obligatorias** de `docs/12-estandar-laboratorios-entorno-real.md` (ficha de control con Entorno(s) objetivo/Fluencia de terminal asumida/duración desglosada/fuera de alcance → objetivo → contexto → requisitos → explicación conceptual → ejecución paso a paso EN VOZ DE INSTRUCTOR, nunca tabla de comandos → error inducido en vivo obligatorio → comprensión → puntos de verificación → diagnóstico de errores con 5 columnas → mini laboratorio → desafío → buenas prácticas → recursos → evaluación con cierre+repetición desde cero+pregunta metacognitiva) — no una lista de comandos. Léelo completo, es corto y cada sección tiene su condición de cumplimiento verificable.

## 7. DOC-11 operativo — lo que debes producir por cada lección Pyodide

`docs/11-estandar-autoria-lecciones.md` (v2.0.1) es el molde completo — léelo entero, es la autoridad real, esto es solo un resumen operativo de sus puntos más fáciles de olvidar:

- **7 capacidades de dominio**, cada una con al menos un instrumento real dentro de la lección: explicar, predecir, detectar errores, corregir, modificar, aplicar en contexto nuevo, usar en un proyecto. Una lección que ejercita 6 de 7 **no está terminada**.
- **6 categorías de práctica en la escalera** (Bloque 4): predecir, leer código (ajeno, con estilo distinto al enseñado), investigar/trazar, modificar, refactorizar, escribir, depurar (≥2 ejercicios de dificultad creciente: uno con error visible en el mensaje, otro con error silencioso de lógica).
- **Laboratorio = mini-proyecto** (Bloque 5), no un ejercicio de 5 minutos: integra obligatoriamente ≥2 lecciones previas citadas por dirección exacta, produce software funcional, con trade-off real (costo en ambas direcciones) + argumento de corrección.
- **Bloque 6**: defensa socrática (≥1 pregunta genuinamente inédita) + reflexión metacognitiva (2-3 preguntas sobre el propio proceso, no sobre el contenido) + desafío final inédito (irresoluble por imitación) + lectura dirigida + puerta Beyond the Curriculum.
- **§4bis — Recursos recomendados, [U] universal:** 2-5 recursos por tema, clasificados 🟢 antes / 🔵 durante /🟣 después / ⭐ profundización, cada uno con 7 campos (título, autor/canal, idioma, duración, nivel, motivo específico, URL verificada).

  **⚠️ Brecha detectada al preparar esta guía, sin resolver — decisión pendiente del Director, no la asumas resuelta:** DOC-11 §4bis exige esta sección visible **en la lección misma** (lo que el estudiante lee dentro del Campus). Verificado leyendo 6 días consecutivos reales de `LEVEL3` (M1.T1 y M1.T2 completos): **ninguno tiene un campo `recursos` inline** — la bibliografía de N3 vive solo en `syl-n3.md` §5 (fichas pedagógicas, "ancla externa"), nunca visible dentro de la app para el estudiante. Esto parece ser una brecha heredada de N1/N2/N3, no una decisión deliberada documentada. Hasta que el Director lo resuelva: **replica como mínimo la práctica de N3** (recursos citados en tu `syl-nX.md`, con fuentes reales verificadas por WebFetch/WebSearch, nunca inventadas) y **menciona esta ambigüedad explícitamente** en tu propia auditoría de cierre (§13, Paso 9b) en vez de decidir en silencio cualquiera de las dos direcciones.
- **Investigación pedagógica previa (§0bis)** — antes de diseñar una lección nueva: cómo enseñan este concepto EXACTO fuentes de referencia reales (MIT, CMU, Stanford, documentación oficial, etc.), con síntesis crítica (nunca colección), rechazo justificado con traza concreta cuando corresponda, honestidad metodológica si una fuente no aporta nada citable. Mismo principio que ya aplicaste (si ya construiste algo en este proyecto) o que verás aplicado en `docs/investigacion/n3-*.md` como ejemplo real.

## 8. Calibración de densidad — prioridad explícita: nivel alto, profundidad real, nunca relleno

**Instrucción directa del Director para N4-N12:** el nivel, la dificultad real y la calidad de enseñanza priman sobre la velocidad de construcción — más teoría, días más sustanciosos, ejercicios más complejos e integradores que el estándar ya visto en N0-N3. Es esperable, no opcional: N4-N12 son etapas avanzadas y profesionales (ET3 IA, ET4 Sistemas de IA, ET5 Maestría).

**Cómo aplicar esto sin repetir el error ya documentado de N3** (prometer "12-15 ejercicios/tema" en el syllabus y, verificado por auditoría, entregar 10 reales en la mayoría de temas): la vía correcta para elevar el nivel NUNCA es una cifra más grande prometida de antemano — es más SUSTANCIA real, verificable tema por tema, recién después escrita en el syllabus:

- **Más teoría por día:** no te conformes con un bloque teórico mínimo por concepto. Cada entrada de `theory:[...]` debería incluir, cuando el concepto lo amerite, el mecanismo interno completo (el "qué", el "por qué", y el "qué pasa si..."), al menos un ejemplo trabajado con números/código reales, y la conexión explícita con cómo se ve este mismo concepto en una fuente real (un paper, documentación oficial, un curso de referencia) — mismo principio que ya exige DOC-11 §0bis para la investigación pedagógica previa. Un día de N7 o N9 debería sentirse notablemente más denso en contenido que un día de N0 — no del mismo tamaño con números más grandes en las variables.
- **Días más largos, cuando el concepto real lo sostiene:** si un tema tiene suficiente profundidad conceptual para justificar un día adicional (o práctica intercalada extra), agrégalo — pero solo si cada día nuevo prueba algo que los anteriores no probaron (mismo principio anti-relleno de DOC-11 v2.0.1: "cada variación debe probar un caso que las anteriores no probaron"). No extiendas un tema por extenderlo.
- **Ejercicios más complejos — por profundidad, nunca por artificio** (cita directa de DOC-11 §0, principio que esta instrucción NO cambia): la dificultad se eleva por profundidad conceptual, práctica deliberada, problemas abiertos, integración de conceptos ya vistos, transferencia real a un contexto nuevo, y debugging real — nunca por preguntas confusas, trampas de redacción, o adelantar contenido fuera de su momento curricular. Un ejercicio "más difícil" que no pueda justificar su dificultad en uno de estos mecanismos no cumple el estándar, sin importar cuánto empuje esta instrucción hacia arriba.
- **Prioriza integración sobre aislamiento:** en niveles avanzados, el ejercicio de cierre de tema no debería ser solo "aplica la fórmula de hoy" sino "aplica la fórmula de hoy junto con al menos dos conceptos de temas/módulos anteriores, en un problema que se parezca a algo real" — mismo principio que ya rige el Bloque 5 de DOC-11 (laboratorio como mini-proyecto que integra ≥2 lecciones previas), con más ambición porque hay más nivel acumulado detrás para integrar.

**Heurística de partida** (ajústala hacia arriba si el tema concreto lo sostiene; nunca la infles en el syllabus antes de haberla verificado en contenido real):
- Temas de práctica procedimental pesada: 3 días/tema como mínimo — considera un 4º día si el tema tiene capas reales que lo justifiquen (matemática nueva + su implementación + su aplicación a un caso real, por ejemplo). Varios bloques de teoría sustanciosos por día, no uno solo; ejercicios que escalen genuinamente en dificultad dentro del mismo día.
- Temas de lectura/interpretación/diseño: 2-3 días/tema — más días que el estándar de N0-N3 si el volumen real de lectura/análisis lo justifica (papers más largos, más fuentes en comparación).
- Decide cuál aplica **por tema**, no por módulo entero — un módulo puede mezclar ambos patrones si mezcla tipos de habilidad.
- **Nunca escribas una cifra de "días" o "ejercicios/tema" en tu syllabus antes de haber construido al menos un tema completo y confirmado que la cifra es real** — el error exacto que cometió N3 al prometer 12-15 antes de construir nada.

## 9. Disciplina de verificación numérica — no negociable, la regla más importante de todas

**Nunca escribas el valor esperado de un `check()` de memoria o por cálculo mental.** El patrón institucional, verificado repetidas veces en N1/N2/N3 con bugs reales encontrados:

1. Escribes la solución de referencia del ejercicio.
2. La ejecutas de verdad — en un intérprete de Python real (`python archivo.py`), o en Pyodide real si la primitiva puede divergir entre ambos entornos (ver caso conocido abajo).
3. Copias la salida REAL, literal, al `check()` — nunca lo que "debería dar" según tu cálculo mental.
4. Tolerancia SIEMPRE explícita en comparaciones de punto flotante: `abs(a-b) < 1e-9`, nunca `==` exacto sobre floats.

**Casos reales de divergencia Pyodide-vs-Python-nativo ya encontrados en este proyecto (verifica CUALQUIER primitivo nuevo de numpy/random/etc. la primera vez que lo uses, en la build real, antes de comprometer un valor a un check()):**
- `numpy.linalg.inv()` sobre matriz singular: en Pyodide (WASM, sin excepciones de punto flotante) devuelve silenciosamente una matriz de `nan`; en Python nativo lanza `LinAlgError`. Un `try/except` que funciona en tu terminal puede fallar en el navegador real del estudiante.
- `numpy.var()` usa por defecto `ddof=0` (poblacional); `numpy.cov()` usa por defecto `ddof=1` (muestral) — misma librería, defaults distintos, fuente silenciosa de números que no coinciden si no declaras la convención explícitamente.
- Si tu nivel introduce una librería nueva al Campus (como N3 hizo con numpy) — confirma primero que `pyodide.loadPackage("...")` carga sin fricción en la build fijada (`v0.26.4` al momento de escribir esto, verifica la versión actual en `index.html`) antes de diseñar contenido que dependa de ella.
- **Tu Python local casi seguro NO tiene la misma versión de una librería que Pyodide** (confirmado al construir N4: Python local tenía `pandas 3.0.3`, la build real de Pyodide carga `pandas 2.2.0` — y ambas versiones difieren en salidas reales, ej. el `dtype` de una columna de texto es `'str'` en 3.0.3 pero `'object'` en 2.2.0). **Si tu librería nueva es algo más que numpy puro, verifica CUALQUIER valor sensible al formato/tipo directamente en Pyodide real** (instala `pyodide` como paquete de Node — `npm install pyodide@0.26.4`, o la versión fijada actual — y ejecuta ahí, nunca confíes en tu intérprete local para esos casos) antes de escribirlo en un `check()`.
- **Fix crítico de motor ya aplicado en `main` (2026-07-21, hallazgo real al construir N4.M1.T2):** importar `pandas`, `scikit-learn` o `matplotlib` por PRIMERA VEZ dentro del `sys.settrace()` que usa `__academia_run` para detectar bucles infinitos agota su límite de 300 000 pasos (el grafo de import de estos paquetes es demasiado profundo para trazarlo línea a línea) — y ese fallo deja el paquete a medio inicializar en `sys.modules`, rompiendo TODO import posterior del mismo paquete en la sesión del estudiante. Ya corregido en `runScriptedPy` (precalienta cada paquete grande con un import real fuera del trace antes de la primera ejecución). **Si tu rama usa alguno de estos tres paquetes (o cualquier otro con un grafo de import grande) y se creó ANTES de este fix, tráelo a tu rama:** `git fetch origin && git merge origin/main` — sin este fix, el primer ejercicio de tu estudiante con esa librería fallaría permanentemente con "el programa tardó demasiado".
- **Segundo fix crítico de motor, más profundo (2026-07-21, hallazgo real al construir N4.M3.T3):** "import sklearn" NO precalienta sus submódulos — cada uno (`tree`/`ensemble`/`svm`/`cluster`/`model_selection`/`pipeline`/`preprocessing`/`metrics`/`impute`) tiene su PROPIO costo de primera importación bajo trace. Verificado empíricamente: `sklearn.cluster` y `sklearn.impute` agotan por sí solos casi TODO el límite de 300 000 pasos; `sklearn.svm`/`model_selection`/`metrics` consumen 35-80%. Ya corregido en `main` (el warm de sklearn precalienta explícitamente cada submódulo). **Además, entrenar modelos con muchos estimadores (ej. `RandomForestClassifier(n_estimators=50)`) consume presupuesto real de pasos POR SÍ MISMO, incluso con todo precalentado** — verificado: cada árbol de un Random Forest cuesta ~35 000 pasos trazados, así que `n_estimators=50` agota el límite sin importar cuánto se precaliente. **Regla práctica para cualquier nivel que entrene ensembles dentro de Pyodide: usa `n_estimators` pequeño (2-5) y datasets pequeños (~20-30 filas) — la lección pedagógica (votación/diversidad) no necesita escala de producción para demostrarse, y GradientBoostingClassifier tolera bastante más estimadores (~20-50) que RandomForestClassifier antes de acercarse al límite.** Si tu rama entrena cualquier ensemble de scikit-learn, verifica el costo real en pasos antes de fijar los hiperparámetros de tus ejercicios (usa el patrón de `docs/herramientas/harness-nivel-template.js` con el mecanismo `__academia_run` real, no solo `execSync` de Python local, que no mide esto).

**El patrón de harness reusable** (`docs/herramientas/extract-nivel.js` + `docs/herramientas/harness-nivel-template.js`, ver instrucciones dentro de cada archivo): extrae tu `LEVELn` a un archivo aislado, evalúa el `check()` REAL de cada ejercicio (no una copia reescrita) contra la salida REAL de ejecutar la solución en Python, y reporta pass/fail con el detalle exacto del primer desacuerdo. Corre esto **antes de cerrar cada módulo**, no solo al final del nivel completo — cuanto antes se encuentra un bug, más barato es corregirlo.

**Verificaciones adicionales antes de cerrar cualquier módulo:**
- `node --check` sobre el bloque `<script>` completo de `index.html` (no solo tu array aislado) — sintaxis JS válida en el archivo real, no en una copia.
- Unicidad de `id` en **TODO** el Campus, no solo tu nivel — un id duplicado entre, por ejemplo, tu N7 y el N9 de otra ventana rompe silenciosamente el estado guardado de cualquier estudiante. Usa siempre el prefijo `nX` de tu nivel asignado en cada id, sin excepción — nunca reutilices `t1`, `e1`, etc. de otro nivel esperando que el prefijo baste; verifica de verdad.

## 10. La lección más repetida — pistas que NO regalan la solución

**Encontrado y corregido en N1, N2, y N3 — tres niveles consecutivos, la misma falla exacta:** la primera pista (`hints[0]`) de un ejercicio con blanco (`starter` con `pass`) era código completo o casi completo, regalando la solución en vez de guiar el razonamiento. En la auditoría de N3 esto afectaba entre 79-92% de ~285 ejercicios.

**Regla no negociable para tu nivel, desde el primer ejercicio que escribas:**
- `hints[0]` — **siempre conceptual/socrática.** Explica el razonamiento o el concepto que hace falta aplicar, nunca una línea de código copiable.
- `hints[1]` (si existe) — puede acercarse más, incluso un fragmento pequeño de sintaxis.
- `hints[2]` (si existe, último recurso) — puede ser código casi completo o completo.

Revisa esto tema por tema mientras escribes, no al final — es mucho más barato no cometer el error 285 veces que corregirlo después (la corrección en N3 requirió despachar 8 agentes en paralelo sobre worktrees git aislados).

## 11. Protocolo para que las ventanas paralelas NO choquen — instrucción explícita del Director

Esta sección existe porque el Director fue explícito: *"no quiero problemas que cada ventana trabaje por su lado, no quiero que choquen, no quiero bugs ni errores de eso."* El protocolo:

1. **Cada ventana trabaja en su propia carpeta física** (`git worktree`), hermana de `C:\Users\USER\academia-python` — nunca la misma carpeta que otra ventana o que el Director. Esto es distinto de solo usar una rama distinta: dos procesos escribiendo archivos en el MISMO directorio, aunque estén en ramas de git diferentes, pueden pisarse el uno al otro o corromper el estado de `.git` si ambos ejecutan comandos de git al mismo tiempo. Un worktree separado elimina el riesgo por completo — cada carpeta tiene su propio checkout de archivos, aunque comparten el mismo historial de git por debajo.
2. **Cada ventana trabaja solo en su propia rama** `nivel/nX`. Nunca en `main`, nunca en la rama de otro nivel.
3. **Cada ventana toca solo secciones nuevas y propias del archivo compartido**: tu `const LEVELn=[...]` completo, agregado como bloque nuevo antes de `const LEVELS=[...]` — nunca líneas que ya existían de otro nivel, nunca `LEVELS`/`LEVEL_META`, nunca el motor de renderizado.
4. **Nadie fusiona su propia rama a `main`.** Terminas tu trabajo (nivel completo, congelado, con su Informe Final), lo commiteas en tu rama, y avisas al usuario. El Director fusiona cada rama secuencialmente desde la ventana principal — exactamente el mismo patrón ya probado esta sesión con 8 ramas de agentes en paralelo sobre el mismo archivo, 0 conflictos, porque cada rama tocaba rangos de líneas disjuntos por diseño.
5. **Si en algún momento no estás seguro de en qué carpeta/rama estás** — para y confirma antes de escribir. `git branch --show-current` y verificar el path de tu terminal cuestan 5 segundos; recuperar trabajo perdido por una escritura concurrente puede costar horas.
6. **Documentos como `docs/investigacion/nX-*.md` y `docs/informes/nX-*.md`** son tuyos y de nadie más (nombre único por tu prefijo `nX`) — no hay colisión posible ahí, escribe con confianza.

## 12. Límites de autoridad — qué decides tú solo y qué requiere al Director

**Decides tú solo (autoridad delegada, ya establecida por el flujo de niveles anteriores):**
- El diseño concreto de temas/días/ejercicios dentro del alcance ya aprobado en DOC-10.
- Qué fuentes externas citar en tu investigación pedagógica (con criterio de rechazo justificado, DOC-11 §0bis).
- Ajustes de densidad tema por tema (§8).
- Qué módulos son DOC-11 vs. DOC-12 (§6) — es una decisión técnica verificable empíricamente, no de preferencia.

**Requiere decisión explícita del Director, nunca autodeclarada:**
- **La palabra "v1.0.0".** Tu syllabus y tu nivel llegan, como máximo, a "**candidato a v1.0.0**" — el sello final es exclusivamente del Director, mismo patrón que N0/N1/N2/N3.
- Redefinir el alcance que DOC-10 ya aprobó para tu nivel (módulos, proyecto, bibliografía oficial) — puedes *ampliar* la bibliografía con una fuente nueva bien justificada (como N3 hizo con Seeing Theory), nunca *redefinir* el alcance central sin señalarlo explícitamente como propuesta.
- Cualquier hallazgo que solo se pueda resolver tocando un documento Tier T1 ya aprobado (DOC-10, DOC-11, DOC-12, el Blueprint) — documéntalo como hallazgo/recomendación en tu propia auditoría de cierre, no lo edites tú mismo.
- La fusión de tu rama a `main` (§11).

## 13. El flujo institucional de 9 pasos — el mismo que ya usaron N0, N1, N2 y N3

1. **Diseño del syllabus** (`docs/syllabus/syl-nX.md`) — instancia el alcance ya aprobado de DOC-10 en fichas pedagógicas por tema (10 campos + condicionales, mismo formato que `syl-n3.md` §5: gran pregunta, gran idea, el supuesto que destruye, la limitación humana que compensa, el quiebre de intuición — o su ausencia declarada honestamente si de verdad no aplica, nunca forzada). Investigación real (WebFetch/WebSearch, nunca de memoria) de las fuentes que DOC-10 ya cita como bibliografía oficial de tu nivel, más cualquier fuente adicional que decidas verificar y sumar.
2. **Revisión módulo por módulo** — construyes el contenido real en `index.html` (tu `LEVELn`), un módulo a la vez, verificando cada valor numérico antes de escribirlo (§9), corriendo el harness al cerrar cada módulo, commiteando por módulo.
3. **Mejoras** — ajustes tras revisión propia o del Director sobre módulos ya construidos.
4. **Capstone** — el proyecto de cierre de nivel (§4), integrando los módulos.
5. **Compuertas** — revisión de cobertura de competencias (tabla módulo↔competencia) + banco de examen con variantes rotables (mismo patrón que el banco de 24 variantes de N3, NNR-02).
6. **Auditoría desde el nivel siguiente (Paso 9a)** — coherencia de las Herencias Declaradas que tu nivel hereda del anterior, y redacción de las Herencias Declaradas que tu nivel siembra hacia el siguiente.
7. **Herencias Declaradas** — el contrato explícito de qué asume el nivel siguiente que ya dominas, sin volver a enseñarlo.

   **Advertencia estructural, propia de construir en paralelo (no existía para N1→N2→N3, que se construyeron en estricta secuencia):** tu nivel predecesor directo (el que DOC-10 coloca justo antes del tuyo) probablemente **no esté todavía congelado** con sus Herencias Declaradas finales cuando llegues a este paso — otra ventana lo está construyendo al mismo tiempo que tú. Trata las Herencias entrantes que asumas de tu predecesor como un **borrador basado en el alcance ya aprobado de DOC-10** para ese nivel (no en una conversación o acuerdo que todavía no ocurrió), decláralo explícitamente como "pendiente de confirmación cuando el nivel predecesor congele" en tu propio syllabus, y no bloquees tu propio avance esperando esa confirmación — mismo principio de "el Desarrollo nunca espera a la Validación" que ya rige DOC-11 §0bis.
8. **Auditoría adversarial (Paso 9b)** — mandato explícito de intentar demostrar que tu nivel NO debería existir en su forma actual; idealmente con múltiples auditores independientes sin coordinación entre sí (el patrón de N1/N2/N3 usó 4), examinando: coherencia curricular, cobertura de competencias, densidad de aprendizaje, nivel de exigencia, integración, redundancias, vacíos, calidad del capstone, experiencia del estudiante, preparación para el nivel siguiente.
9. **v1.0.0** — nunca autodeclarada (§12). Preparas el Informe Final de Nivel (`docs/informes/nX-informe-final-de-nivel.md`, estructura de 10 secciones: objetivo global, competencias desarrolladas, modelos mentales fundamentales, errores que elimina, qué queda fuera y por qué, dependencias para el siguiente nivel, riesgos pedagógicos abiertos, hipótesis pendientes de validación, decisiones de diseño más importantes, qué aprendió la Academia al construirlo) y declaras tu nivel "candidato a v1.0.0" — el veredicto final es del Director.

**Disciplina de despliegue, por cada módulo cerrado:** commit descriptivo en tu rama → (cuando el Director fusione) push a `origin/main` → poll de `gh api repos/Alex002-png/academia-python/pages/builds/latest` hasta `built` → `curl` de la URL viva → diff contra tu copia local. **Falsa alarma conocida:** un byte-diff que muestra TODAS las líneas distintas con diferencia de bytes = diferencia de líneas casi siempre es CRLF (tu copia local en Windows) vs. LF (servido) — confirma con `diff -q --strip-trailing-cr` antes de asumir que el despliegue falló.

## 14. Checklist final antes de decir "mi módulo/nivel está listo"

☐ Cada valor de cada `check()` fue copiado de una ejecución REAL, no calculado de memoria (§9) · ☐ Ninguna comparación de floats usa `==` exacto · ☐ Cualquier primitivo nuevo de numpy/random/etc. fue verificado en Pyodide real si podía divergir · ☐ `hints[0]` es conceptual en el 100% de tus ejercicios, nunca código (§10) · ☐ Harness de Node corrido sobre tu módulo, 0 fallos, contra el `check()` REAL extraído del archivo (§9) · ☐ `node --check` limpio sobre el bloque `<script>` completo · ☐ ids únicos verificados contra TODO el Campus, no solo tu nivel · ☐ Los ids de tus ejercicios usan tu prefijo `nX` sin excepción · ☐ Decidiste explícitamente DOC-11 vs. DOC-12 por módulo, con verificación empírica si involucraba una librería no disponible en Pyodide (§6) · ☐ Los 5 estándares narrativos (o su ausencia justificada) están en tu syllabus Y son visibles en el contenido real del Campus, no solo en el documento de planificación (lección de la Reserva 2 de N3) · ☐ No tocaste `LEVELS`/`LEVEL_META`/el log EVT del Blueprint (§11) · ☐ No declaraste "v1.0.0" en ningún documento propio (§12) · ☐ Confirmaste que trabajas en tu propio worktree + tu propia rama antes de cada sesión de escritura (§11).

---

*Este documento se escribió el 2026-07-21, antes de que existiera contenido alguno de N4-N12, específicamente para permitir construcción paralela de 8+ niveles sin colisión. Si encuentras una imprecisión aquí (un campo de esquema que no coincide con lo que ves en `index.html`, una regla de DOC-11/DOC-12 mal resumida), confía en el documento fuente citado, no en este resumen — y avisa al usuario para que se corrija aquí también.*
