const fs = require('fs');
const path = require('path');

const directory = './src';
const extensions = ['.jsx', '.js', '.css'];

const replacements = [
  { from: /\bmoss-dark\b/g, to: 'navy-dark' },
  { from: /\bmoss-mid\b/g, to: 'steel' },
  { from: /\bmoss\b/g, to: 'navy' },
  { from: /\bkhaki-light\b/g, to: 'concrete-light' },
  { from: /\bkhaki\b/g, to: 'concrete' },
  { from: /\bclay\b/g, to: 'safety' },
  { from: /\bcream-dark\b/g, to: 'paper-dark' },
  { from: /\bcream\b/g, to: 'paper' },
  { from: /\bfont-drama\b/g, to: 'font-heading' },
  { from: /\bfont-heading italic\b/g, to: 'font-heading font-medium tracking-tight' }, // fix italic where drama was replaced
  { from: /\bfont-drama italic\b/g, to: 'font-heading font-medium tracking-tight' }
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (extensions.includes(path.extname(fullPath))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let newContent = content;
      for (const { from, to } of replacements) {
        newContent = newContent.replace(from, to);
      }
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(directory);
