// Extrae `const LEVELn=[...]` de index.html a un archivo aislado `ln.js`,
// convirtiendo "const" en "var" (necesario para que harness-nivel.js pueda
// leer la variable vía eval() de nivel superior — ver docs/guia-construccion-niveles.md §9).
//
// Uso:  node extract-nivel.js <N>
// Ej.:  node extract-nivel.js 4      -> produce l4.js a partir de "const LEVEL4="
//
// Requisito: LEVELn ya debe existir en index.html (créala primero, aunque sea
// con un solo día de contenido) — este script no genera contenido, solo aísla
// lo que ya escribiste para poder verificarlo con Node + Python real.

const fs = require('fs');

const N = process.argv[2];
if (!N) {
  console.error('Uso: node extract-nivel.js <N>   (ej: node extract-nivel.js 4)');
  process.exit(1);
}

const INDEX_HTML = 'C:\\Users\\USER\\academia-python\\index.html';
const html = fs.readFileSync(INDEX_HTML, 'utf8');
const marker = `const LEVEL${N}=`;
const start = html.indexOf(marker);

if (start === -1) {
  console.error(`No se encontró "${marker}" en index.html — ¿ya declaraste "const LEVEL${N}=[" en tu rama?`);
  process.exit(1);
}

const rest = html.slice(start);
const endMatch = rest.search(/\nconst LEVEL\d+=|\nconst LEVELS=/);
const sliced = endMatch === -1 ? rest : rest.slice(0, endMatch);
const out = sliced.replace(marker, `var LEVEL${N}=`);

fs.writeFileSync(`l${N}.js`, out);
console.log(`Extraído: ${out.length} caracteres -> l${N}.js`);
