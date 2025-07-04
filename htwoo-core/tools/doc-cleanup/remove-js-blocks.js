#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Use project root relative to this script location
const projectRoot = path.resolve(__dirname, '../..');

// Find all markdown files
const markdownFiles = glob.sync(path.join(projectRoot, 'src/_patterns/**/*.md'));

let filesModified = 0;
let codeBlocksRemoved = 0;

markdownFiles.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;
    let modified = false;
    
    // Remove JavaScript code blocks (```javascript ... ```)
    const jsCodeBlockRegex = /```javascript[\s\S]*?```/g;
    const jsMatches = content.match(jsCodeBlockRegex);
    
    if (jsMatches) {
        jsMatches.forEach(match => {
            newContent = newContent.replace(match, '');
            codeBlocksRemoved++;
            modified = true;
        });
    }
    
    // Remove TypeScript code blocks (```typescript ... ```)
    const tsCodeBlockRegex = /```typescript[\s\S]*?```/g;
    const tsMatches = newContent.match(tsCodeBlockRegex);
    
    if (tsMatches) {
        tsMatches.forEach(match => {
            newContent = newContent.replace(match, '');
            codeBlocksRemoved++;
            modified = true;
        });
    }
    
    // Clean up any excessive empty lines left behind
    newContent = newContent.replace(/\n{3,}/g, '\n\n');
    
    if (modified) {
        fs.writeFileSync(filePath, newContent);
        filesModified++;
        console.log(`✅ Removed JavaScript/TypeScript code blocks from: ${filePath}`);
    }
});

console.log(`\n🎉 JavaScript/TypeScript cleanup complete!`);
console.log(`📊 Files modified: ${filesModified}`);
console.log(`🗑️ Code blocks removed: ${codeBlocksRemoved}`);

console.log(`\n💡 BETTER APPROACH:`);
console.log(`Instead of including JavaScript/TypeScript code in markdown:`);
console.log(`1. Reference Storybook for interactive code examples`);
console.log(`2. Use @n8d/htwoo-react package for React implementations`);
console.log(`3. Point to SPFx documentation for framework integration`);
console.log(`4. Keep markdown focused on component behavior and usage`);
