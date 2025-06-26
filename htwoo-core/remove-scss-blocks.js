#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all markdown files
const markdownFiles = glob.sync('src/_patterns/**/*.md');

let filesModified = 0;
let codeBlocksRemoved = 0;

markdownFiles.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;
    let modified = false;
    
    // Remove SCSS code blocks (```scss ... ```)
    const scssCodeBlockRegex = /```scss[\s\S]*?```/g;
    const scssMatches = content.match(scssCodeBlockRegex);
    
    if (scssMatches) {
        scssMatches.forEach(match => {
            newContent = newContent.replace(match, '');
            codeBlocksRemoved++;
            modified = true;
        });
    }
    
    // Remove CSS code blocks (```css ... ```)
    const cssCodeBlockRegex = /```css[\s\S]*?```/g;
    const cssMatches = newContent.match(cssCodeBlockRegex);
    
    if (cssMatches) {
        cssMatches.forEach(match => {
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
        console.log(`✅ Removed SCSS/CSS code blocks from: ${filePath}`);
    }
});

console.log(`\n🎉 SCSS/CSS cleanup complete!`);
console.log(`📊 Files modified: ${filesModified}`);
console.log(`🗑️ Code blocks removed: ${codeBlocksRemoved}`);

console.log(`\n💡 BETTER APPROACH:`);
console.log(`Instead of including SCSS/CSS code in markdown:`);
console.log(`1. Reference actual SCSS file paths in "SCSS Files" sections`);
console.log(`2. Use Storybook for interactive styling examples`);
console.log(`3. Keep markdown focused on usage and behavior`);
console.log(`4. Let the actual SCSS files be the source of truth`);
