#!/usr/bin/env node

/**
 * Documentation Cleanup Script
 * 
 * This script runs all document cleanup utilities in sequence to clean up markdown files.
 */

const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Starting documentation cleanup process...');
console.log('===========================================');

// Get the directory where this script is located
const scriptDir = __dirname;

// Define the cleanup scripts to run
const cleanupScripts = [
  'remove-js-blocks.js',
  'remove-scss-blocks.js',
  'remove-related-components.js'
];

// Run each script in sequence
cleanupScripts.forEach(script => {
  const scriptPath = path.join(scriptDir, script);
  console.log(`\n📋 Running ${script}...`);
  console.log('-------------------------------------------');
  
  try {
    execSync(`node "${scriptPath}"`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`❌ Error running ${script}:`);
    console.error(error.message);
  }
});

console.log('\n✨ All documentation cleanup tasks completed!');
