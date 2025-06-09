#!/usr/bin/env node

/**
 * Post-changelog processing script
 * Handles additional tasks after changelog generation
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class PostChangelogProcessor {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.repoRoot = path.resolve(this.projectRoot, '..');
  }

  /**
   * Update package documentation
   */
  updatePackageJson() {
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    const packageData = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Update last changelog generation timestamp
    packageData.lastChangelogUpdate = new Date().toISOString();
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageData, null, 2) + '\n');
    console.log('📦 Updated package.json metadata');
  }

  /**
   * Sync changelog to docs and packages
   */
  syncChangelog() {
    const sourceFile = path.join(this.projectRoot, 'CHANGELOG.md');
    
    // Copy to docs folder
    const docsTarget = path.join(this.repoRoot, 'docs', 'change-log', 'htwoo-core.md');
    
    // Copy to packages folder (for npm distribution)
    const packageTarget = path.join(this.repoRoot, 'packages', 'htwoo-core', 'CHANGELOG.md');
    
    [docsTarget, packageTarget].forEach(target => {
      const targetDir = path.dirname(target);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      
      if (fs.existsSync(sourceFile)) {
        fs.copyFileSync(sourceFile, target);
        console.log(`📋 Synced changelog to: ${target}`);
      }
    });
  }

  /**
   * Validate changelog format
   */
  validateChangelog() {
    const changelogPath = path.join(this.projectRoot, 'CHANGELOG.md');
    
    if (!fs.existsSync(changelogPath)) {
      console.error('❌ CHANGELOG.md not found');
      return false;
    }

    const content = fs.readFileSync(changelogPath, 'utf8');
    
    // Basic validation
    const hasHeader = content.includes('# hTWOo Core - Changelog');
    const hasVersions = /##\s+\[?\d+\.\d+\.\d+/.test(content);
    
    if (!hasHeader || !hasVersions) {
      console.warn('⚠️  Changelog format validation failed');
      return false;
    }

    console.log('✅ Changelog format validated');
    return true;
  }

  /**
   * Generate change summary for CI/CD
   */
  generateChangeSummary() {
    const changelogPath = path.join(this.projectRoot, 'CHANGELOG.md');
    
    if (!fs.existsSync(changelogPath)) {
      return;
    }

    const content = fs.readFileSync(changelogPath, 'utf8');
    
    // Extract latest version changes
    const lines = content.split('\n');
    let latestChanges = [];
    let capturing = false;
    
    for (const line of lines) {
      if (line.match(/^##\s+\[?\d+\.\d+\.\d+/)) {
        if (capturing) break; // Stop at next version
        capturing = true;
        latestChanges.push(line);
      } else if (capturing && line.trim()) {
        latestChanges.push(line);
      } else if (capturing && !line.trim() && latestChanges.length > 1) {
        break; // Stop at empty line after content
      }
    }

    if (latestChanges.length > 0) {
      const summaryPath = path.join(this.projectRoot, 'LATEST-CHANGES.md');
      fs.writeFileSync(summaryPath, latestChanges.join('\n') + '\n');
      console.log('📄 Generated latest changes summary');
    }
  }

  /**
   * Run all post-processing tasks
   */
  run() {
    console.log('🔄 Running post-changelog processing...');
    
    this.validateChangelog();
    this.syncChangelog();
    this.updatePackageJson();
    this.generateChangeSummary();
    
    console.log('✅ Post-changelog processing complete!');
  }
}

// Run if called directly
if (require.main === module) {
  const processor = new PostChangelogProcessor();
  processor.run();
}

module.exports = PostChangelogProcessor;
