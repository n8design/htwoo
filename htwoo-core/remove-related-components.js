#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all markdown files
const markdownFiles = glob.sync('src/_patterns/**/*.md');

let filesModified = 0;
let sectionsRemoved = 0;

markdownFiles.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    let newLines = [];
    let inRelatedSection = false;
    let sectionRemoved = false;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Check if we're starting a Related Components section
        if (line.match(/^## Related Components|^### Related Components/)) {
            inRelatedSection = true;
            sectionRemoved = true;
            continue; // Skip this line
        }
        
        // If we're in a Related Components section
        if (inRelatedSection) {
            // Check if we've hit another section (end of Related Components)
            if (line.match(/^##[^#]|^###[^#]/) && !line.match(/Related Components/)) {
                // We've reached the next section, stop skipping
                inRelatedSection = false;
                newLines.push(line);
            }
            // Otherwise, skip this line (it's part of Related Components)
            continue;
        }
        
        // If we're not in a Related Components section, keep the line
        newLines.push(line);
    }
    
    // If we modified this file, write it back
    if (sectionRemoved) {
        // Clean up any trailing empty lines before writing
        while (newLines.length > 0 && newLines[newLines.length - 1].trim() === '') {
            newLines.pop();
        }
        
        const newContent = newLines.join('\n') + '\n';
        fs.writeFileSync(filePath, newContent);
        
        filesModified++;
        sectionsRemoved++;
        console.log(`✅ Removed Related Components section from: ${filePath}`);
    }
});

console.log(`\n🎉 Cleanup complete!`);
console.log(`📊 Files modified: ${filesModified}`);
console.log(`🗑️ Related Components sections removed: ${sectionsRemoved}`);
