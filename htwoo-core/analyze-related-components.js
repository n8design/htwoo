#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all markdown files
const markdownFiles = glob.sync('src/_patterns/**/*.md');

let relatedComponentsSections = [];

markdownFiles.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    let inRelatedSection = false;
    let relatedContent = [];
    let startLine = -1;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.match(/^## Related Components|^### Related Components/)) {
            inRelatedSection = true;
            startLine = i;
            relatedContent = [line];
            continue;
        }
        
        if (inRelatedSection) {
            // Check if we've hit another section
            if (line.match(/^##[^#]|^###[^#]/) && !line.match(/Related Components/)) {
                // End of related components section
                relatedComponentsSections.push({
                    file: filePath,
                    startLine: startLine + 1,
                    endLine: i,
                    content: relatedContent.join('\n')
                });
                inRelatedSection = false;
                relatedContent = [];
            } else {
                relatedContent.push(line);
            }
        }
    }
    
    // Handle case where Related Components is at the end of file
    if (inRelatedSection && relatedContent.length > 0) {
        relatedComponentsSections.push({
            file: filePath,
            startLine: startLine + 1,
            endLine: lines.length,
            content: relatedContent.join('\n')
        });
    }
});

// Analyze the content
console.log(`Found ${relatedComponentsSections.length} "Related Components" sections:\n`);

relatedComponentsSections.forEach((section, index) => {
    console.log(`${index + 1}. ${section.file} (lines ${section.startLine}-${section.endLine})`);
    console.log(section.content);
    console.log('---\n');
});

// Summary
console.log(`\nSUMMARY: Found ${relatedComponentsSections.length} Related Components sections`);
console.log(`These should be reviewed to determine if they are:`);
console.log(`- Redundant dependency information (should be removed)`);
console.log(`- Useful variant/alternative information (should be kept)`);
