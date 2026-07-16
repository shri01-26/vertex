const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..', 'data');
const sourcePath = path.join(root, 'pageContent.js');
const targetDir = path.join(root, 'pageContent');
const content = fs.readFileSync(sourcePath, 'utf8');
const prefix = 'export const pageContent = {';
const start = content.indexOf(prefix);
if (start === -1) {
  console.error('pageContent.js does not contain expected export');
  process.exit(1);
}
const body = content.slice(start + prefix.length);
let pos = 0;
let braceDepth = 0;
let inString = false;
let stringChar = '';
let escape = false;
let blocks = [];
let currentKey = null;
let currentBlockStart = null;

const flushBlock = (endPos) => {
  if (currentKey && currentBlockStart !== null) {
    blocks.push({
      key: currentKey,
      start: currentBlockStart,
      end: endPos
    });
  }
  currentKey = null;
  currentBlockStart = null;
};

while (pos < body.length) {
  const char = body[pos];
  if (escape) {
    escape = false;
  } else if (char === '\\') {
    escape = true;
  } else if (inString) {
    if (char === stringChar) {
      inString = false;
    }
  } else if (char === '"' || char === "'") {
    inString = true;
    stringChar = char;
  } else if (char === '{') {
    braceDepth += 1;
    if (braceDepth === 1) {
      const lineStart = body.lastIndexOf('\n', pos) + 1;
      const line = body.slice(lineStart, pos).trim();
      const m = line.match(/^['"]?([A-Za-z0-9_-]+)['"]?\s*:\s*$/);
      if (m) {
        currentKey = m[1];
        currentBlockStart = pos;
      }
    }
  } else if (char === '}') {
    if (braceDepth === 1) {
      flushBlock(pos + 1);
    }
    braceDepth -= 1;
  }
  pos += 1;
}

if (!blocks.length) {
  console.error('No top-level blocks found');
  process.exit(1);
}
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
const keys = [];
for (const block of blocks) {
  const key = block.key;
  const raw = body.slice(block.start, block.end);
  const safeKey = key.replace(/-/g, '_');
  const outPath = path.join(targetDir, `${safeKey}.jsx`);
  fs.writeFileSync(outPath, `export const ${safeKey} = ${raw};\n`);
  keys.push({ key, safeKey });
}

const indexPath = path.join(targetDir, 'index.jsx');
const imports = keys.map(k => `import { ${k.safeKey} } from './${k.safeKey}.jsx';`).join('\n');
const exportLines = [`export const pageContent = {`, ...keys.map(k => `  "${k.key}": ${k.safeKey},`), '};', '', 'export default pageContent;', ''];
fs.writeFileSync(indexPath, imports + '\n\n' + exportLines.join('\n'));

const compat = "export { pageContent } from './pageContent/index.jsx';\nexport default pageContent;\n";
fs.writeFileSync(path.join(root, 'pageContent.js'), compat);
console.log('Split into', blocks.length, 'files');
console.log('Created', targetDir);