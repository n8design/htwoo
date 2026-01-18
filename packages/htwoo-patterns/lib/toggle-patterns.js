#!/usr/bin/env node

/**
 * Toggle pattern visibility in PatternLab installation
 * This script works when @n8d/htwoo-patterns is installed as a dependency
 */

const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

// The user runs this from their PatternLab project root
const cwd = process.cwd();

// Check if PatternLab is installed
if (!fs.existsSync(path.join(cwd, 'patternlab-config.json'))) {
    console.error(`Pattern Lab is not installed in ${cwd}`);
    console.error('This script must be run from a PatternLab project.');
    console.error('Please run this command from the root of your PatternLab project.');
    process.exit(1);
}

// Read PatternLab config to find patterns directory
const plConfig = require(path.join(cwd, 'patternlab-config.json'));
const plSourcePath = plConfig.paths.source.root;

if (!plSourcePath) {
    console.error('Could not determine PatternLab source path from config.');
    process.exit(1);
}

// Construct the full path to the patterns directory
const patternsDir = path.join(cwd, plSourcePath, '_patterns');

if (!fs.existsSync(patternsDir)) {
    console.error(`Patterns directory not found: ${patternsDir}`);
    process.exit(1);
}

// Parse command line arguments
const args = process.argv.slice(2);
const action = args[0] || 'toggle';
const dryRun = args.includes('--dry-run');
const verbose = args.includes('--verbose') || args.includes('-v');

// Validate action
const validActions = ['toggle', 'hide', 'show'];
if (!validActions.includes(action)) {
    console.error(`Invalid action: ${action}`);
    console.error(`Valid actions: ${validActions.join(', ')}`);
    process.exit(1);
}

// Build the command
// Find pattern-export from the installed @n8d/htwoo-patterns package
const patternExportBin = require.resolve('@n8d/htwoo-pattern-export/dist/cli.js');
let command;

if (action === 'toggle') {
    command = `node "${patternExportBin}" toggle-hidden --source "${patternsDir}"`;
} else if (action === 'hide') {
    command = `node "${patternExportBin}" hide-all --source "${patternsDir}"`;
} else if (action === 'show') {
    command = `node "${patternExportBin}" show-all --source "${patternsDir}"`;
}

if (verbose) {
    command += ' --verbose';
}

if (dryRun) {
    command += ' --dry-run';
}

// Display what we're doing
console.log(`Action: ${action}`);
console.log(`Patterns directory: ${patternsDir}`);
if (dryRun) {
    console.log('Mode: Dry run (no files will be modified)');
}
console.log('');

// Execute the command
try {
    execSync(command, { stdio: 'inherit' });
} catch (error) {
    console.error('Failed to execute pattern-export command');
    process.exit(1);
}
