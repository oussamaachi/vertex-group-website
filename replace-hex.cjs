const fs = require('fs');
const path = require('path');

const directory = './src/pages';
const extensions = ['.jsx'];

const replacements = [
  { from: /rgba\(78,92,53/g, to: 'rgba(15,23,42' }, // moss -> navy
  { from: /#1A1A1A 0%,/g, to: '#0B1120 0%,' }, // charcoal -> navy-dark
  { from: /rgba\(26,26,26/g, to: 'rgba(15,23,42' }, // charcoal -> navy
  { from: /rgba\(138,154,85/g, to: 'rgba(148,163,184' }, // khaki -> concrete
  { from: /rgba\(204,88,51/g, to: 'rgba(234,88,12' }, // clay -> safety
  { from: /#CC5833/g, to: '#EA580C' } // clay -> safety
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
        console.log(`Updated hex in ${fullPath}`);
      }
    }
  }
}

processDirectory(directory);
