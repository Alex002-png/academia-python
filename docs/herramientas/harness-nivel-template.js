// PLANTILLA de harness de verificación — copia este archivo a tu propio scratchpad
// (nunca lo ejecutes desde aquí) y edita las 3 líneas marcadas "EDITA AQUÍ" antes de correrlo.
// Patrón exacto, probado en producción durante M1-M4 de N3 (encontró y permitió corregir
// 8+ bugs reales en checks() antes de comitear — ver historial de docs/syllabus/syl-n3.md).
//
// Qué hace: por cada ejercicio/reto/retoFinal de tu nivel (filtrado por prefijo de id),
// ejecuta la solución de referencia en Python REAL (no Pyodide, no mental) y la compara
// contra el check() REAL extraído de index.html — nunca contra un cálculo hecho a mano.
//
// Requisito previo: haber corrido extract-nivel.js para producir tu ln.js aislado.
//
// Uso:  node harness-nivel-template.js
// (los ejercicios cuyo `starter` tiene un `pass` en blanco necesitan su solución real
// en OVERRIDES — sin eso, el harness ejecutaría literalmente "pass" y fallaría siempre;
// eso es intencional: te obliga a escribir y pegar aquí la solución que SÍ verificaste)

const { execSync } = require('child_process');
const fs = require('fs');

const INDEX_HTML = 'C:\\Users\\USER\\academia-python\\index.html'; // ruta fija del repo, no cambia
const LEVEL_FILE = 'l4.js';   // EDITA AQUÍ: el archivo que produjo extract-nivel.js (ej. l5.js, l6.js...)
const PREFIX     = 'n4m1';    // EDITA AQUÍ: filtra por nivel+módulo (o solo "n4" para todo el nivel)

const html = fs.readFileSync(INDEX_HTML, 'utf8');
const apiMatch = html.match(/const API_PREAMBLE='(?:[^'\\]|\\.)*';/);
function T(s) { return s; } // stub — T() solo envuelve HTML de teoría, irrelevante para check()
const norm = s => s.split("\n").map(l => l.replace(/\s+$/, "")).join("\n").replace(/\n+$/, "");
eval(apiMatch[0].replace('const API_PREAMBLE', 'var API_PREAMBLE')); // helpers que los check() usan (norm, etc.)

eval(fs.readFileSync(LEVEL_FILE, 'utf8')); // define var LEVEL4 = [...] (o el número que corresponda) en este scope

// EDITA AQUÍ: la MISMA variable que acabas de eval() arriba (LEVEL4, LEVEL5, LEVEL6...)
const NIVEL = LEVEL4;

function findAll(levelArray, prefix) {
  const items = [];
  for (const d of levelArray) {
    for (const e of (d.ex || [])) items.push({ tema: d.id, id: e.id, check: e.check, starter: e.starter });
    if (d.reto) items.push({ tema: d.id, id: d.reto.id, check: d.reto.check, starter: d.reto.starter });
    if (d.retoFinal) items.push({ tema: d.id, id: d.retoFinal.id, check: d.retoFinal.check, starter: d.retoFinal.starter });
  }
  return items.filter(it => it.id.startsWith(prefix));
}

// Soluciones de referencia para ejercicios cuyo `starter` tiene un blanco `pass` —
// EDITA AQUÍ: pega la solución real que ya verificaste tú mismo con Python antes de escribir el check().
// Clave = id del ejercicio; valor = código Python COMPLETO que imprime exactamente lo que check() espera.
const OVERRIDES = {
  // n4m1t1e1: 'def mi_funcion(x):\n    return x * 2\n\nprint(mi_funcion(3))',
};

const items = findAll(NIVEL, PREFIX);
if (items.length === 0) {
  console.error(`0 items encontrados con prefijo "${PREFIX}" en ${LEVEL_FILE} — revisa NIVEL/PREFIX arriba.`);
  process.exit(1);
}

let pass = 0, fail = 0;
for (const item of items) {
  const code = OVERRIDES[item.id] || item.starter;
  let pyOut;
  try {
    fs.writeFileSync('_tmp_check.py', code);
    pyOut = execSync('python _tmp_check.py', { encoding: 'utf8', env: { ...process.env, PYTHONIOENCODING: 'utf-8' } });
  } catch (e) {
    console.log('FALLO PYTHON:', item.id, '\n', e.stdout, e.stderr);
    fail++;
    continue;
  }
  const result = item.check([pyOut], code);
  if (result === true) { pass++; }
  else { console.log('FAIL', item.id, '(' + item.tema + '):', result); fail++; }
}
console.log(`\n=== TOTAL (${PREFIX}):`, pass, 'pass /', fail, 'fail de', items.length, 'ejercicios ===');

// Nota sobre "PASS" falsos positivos: si un item está en OVERRIDES con código que TÚ
// escribiste sin verificar antes en un intérprete real, este harness solo confirma que
// check() acepta ESE código — no que el número es matemáticamente correcto. La disciplina
// real (§9 de la guía) es: primero ejecutas y confirmas el valor en un intérprete de Python
// de verdad (o Pyodide si la primitiva puede divergir — ver §6 de la guía), DESPUÉS lo
// pegas aquí y en el check(). El harness detecta inconsistencias entre check() y la solución
// real; no sustituye haber verificado la solución real en primer lugar.
