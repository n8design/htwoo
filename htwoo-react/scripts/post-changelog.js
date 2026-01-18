#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Post-changelog processing script for htwoo-react
 * Handles tasks that need to happen after changelog generation
 */

class HtwooReactPostChangelogProcessor {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.repoRoot = path.resolve(this.projectRoot, '..');
    this.changelogPath = path.join(this.projectRoot, 'CHANGELOG.md');
  }

  /**
   * Get current version from package.json
   */
  getCurrentVersion() {
    try {
      const packagePath = path.join(this.projectRoot, 'package.json');
      const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      return packageData.version;
    } catch (error) {
      throw new Error(`Failed to get current version: ${error.message}`);
    }
  }

  /**
   * Update changelog header with version and date
   */
  updateChangelogHeader() {
    console.log('📝 Updating changelog header...');
    
    if (!fs.existsSync(this.changelogPath)) {
      console.warn('⚠️  Changelog file not found');
      return;
    }

    try {
      const content = fs.readFileSync(this.changelogPath, 'utf8');
      const currentVersion = this.getCurrentVersion();
      const currentDate = new Date().toISOString().split('T')[0];
      
      // Replace unreleased section with current version
      const updatedContent = content.replace(
        /## \\[Unreleased\\]/g,
        `## [${currentVersion}] - ${currentDate}`
      );

      fs.writeFileSync(this.changelogPath, updatedContent);
      console.log(`✅ Updated changelog header with version ${currentVersion}`);
      
    } catch (error) {
      console.error(`❌ Failed to update changelog header: ${error.message}`);
    }
  }

  /**
   * Add version comparison links
   */
  addVersionLinks() {
    console.log('🔗 Adding version comparison links...');
    
    if (!fs.existsSync(this.changelogPath)) {
      console.warn('⚠️  Changelog file not found');
      return;
    }

    try {
      const content = fs.readFileSync(this.changelogPath, 'utf8');
      const currentVersion = this.getCurrentVersion();
      
      // Get previous version from git tags
      const previousVersion = this.getPreviousVersion();
      
      if (previousVersion) {
        const repoUrl = 'https://github.com/n8design/htwoo';
        const compareLink = `\\n[${currentVersion}]: ${repoUrl}/compare/htwoo-react-v${previousVersion}...htwoo-react-v${currentVersion}\\n`;
        
        // Add comparison link at the end of the file
        const updatedContent = content + compareLink;
        fs.writeFileSync(this.changelogPath, updatedContent);
        
        console.log(`✅ Added version comparison link for ${currentVersion}`);
      }
      
    } catch (error) {
      console.error(`❌ Failed to add version links: ${error.message}`);
    }
  }

  /**
   * Get previous version from git tags
   */
  getPreviousVersion() {
    try {
      const result = execSync(
        'git tag -l "htwoo-react-v*" --sort=-version:refname',
        { 
          cwd: this.repoRoot,
          encoding: 'utf8' 
        }
      );
      
      const tags = result.trim().split('\\n').filter(Boolean);
      if (tags.length > 1) {
        // Return the second most recent tag (previous version)
        return tags[1].replace('htwoo-react-v', '');
      }
      return null;
    } catch (error) {
      console.warn('⚠️  Could not get previous version from git tags');
      return null;
    }
  }

  /**
   * Validate changelog format
   */
  validateChangelog() {
    console.log('🔍 Validating changelog format...');
    
    if (!fs.existsSync(this.changelogPath)) {
      console.warn('⚠️  Changelog file not found');
      return false;
    }

    try {
      const content = fs.readFileSync(this.changelogPath, 'utf8');
      const lines = content.split('\\n');
      
      let hasHeader = false;
      let hasVersion = false;
      let hasChanges = false;
      
      for (const line of lines) {
        if (line.startsWith('# ')) {
          hasHeader = true;
        } else if (line.match(/## \\[\\d+\\.\\d+\\.\\d+\\]/)) {
          hasVersion = true;
        } else if (line.startsWith('### ') || line.startsWith('- ')) {
          hasChanges = true;
        }
      }
      
      if (!hasHeader) {
        console.warn('⚠️  Changelog missing main header');
      }
      
      if (!hasVersion) {
        console.warn('⚠️  Changelog missing version header');
      }
      
      if (!hasChanges) {
        console.warn('⚠️  Changelog appears to have no changes listed');
      }
      
      const isValid = hasHeader && hasVersion;
      console.log(isValid ? '✅ Changelog format is valid' : '❌ Changelog format issues detected');
      
      return isValid;
      
    } catch (error) {
      console.error(`❌ Failed to validate changelog: ${error.message}`);
      return false;
    }
  }

  /**
   * Copy changelog to documentation folder
   */
  copyToDocsFolder() {
    console.log('📚 Copying changelog to docs folder...');
    
    try {
      const docsDir = path.join(this.repoRoot, 'docs', 'change-log');
      const targetFile = path.join(docsDir, 'htwoo-react.md');
      
      // Ensure docs directory exists
      if (!fs.existsSync(docsDir)) {
        fs.mkdirSync(docsDir, { recursive: true });
        console.log(`📁 Created docs directory: ${docsDir}`);
      }
      
      if (fs.existsSync(this.changelogPath)) {
        fs.copyFileSync(this.changelogPath, targetFile);
        console.log(`✅ Copied changelog to: ${path.relative(this.repoRoot, targetFile)}`);
      }
      
    } catch (error) {
      console.error(`❌ Failed to copy to docs folder: ${error.message}`);
    }
  }

  /**
   * Update package README with latest changes
   */
  updatePackageReadme() {
    console.log('📖 Updating package README...');
    
    try {
      const readmePath = path.join(this.projectRoot, 'README.md');
      const packagePath = path.join(this.repoRoot, 'packages', 'htwoo-react', 'README.md');
      
      if (fs.existsSync(readmePath) && fs.existsSync(packagePath)) {
        // Copy main README to package folder
        fs.copyFileSync(readmePath, packagePath);
        console.log('✅ Updated package README');
      }
      
    } catch (error) {
      console.error(`❌ Failed to update package README: ${error.message}`);
    }
  }

  /**
   * Generate release summary
   */
  generateReleaseSummary() {
    console.log('📊 Generating release summary...');
    
    try {
      const currentVersion = this.getCurrentVersion();
      const changelog = fs.readFileSync(this.changelogPath, 'utf8');
      
      // Extract current version changes
      const versionPattern = new RegExp(`## \\[${currentVersion.replace(/\\./g, '\\\\.')}\\]([\\s\\S]*?)(?=## \\[|$)`);
      const match = changelog.match(versionPattern);
      
      if (match) {
        const changes = match[1].trim();
        const lines = changes.split('\\n').filter(line => line.trim());
        
        const summary = {
          version: currentVersion,
          date: new Date().toISOString().split('T')[0],
          totalChanges: lines.filter(line => line.startsWith('- ')).length,
          features: lines.filter(line => line.includes('feat:')).length,
          fixes: lines.filter(line => line.includes('fix:')).length,
          docs: lines.filter(line => line.includes('docs:')).length,
          changes: lines.slice(0, 10) // First 10 changes for summary
        };
        
        console.log('\\n📋 Release Summary:');
        console.log(`   Version: ${summary.version}`);
        console.log(`   Date: ${summary.date}`);
        console.log(`   Total Changes: ${summary.totalChanges}`);
        console.log(`   Features: ${summary.features}`);
        console.log(`   Bug Fixes: ${summary.fixes}`);
        console.log(`   Documentation: ${summary.docs}`);
        
        if (summary.changes.length > 0) {
          console.log('\\n🔍 Recent Changes:');
          summary.changes.forEach(change => {
            if (change.startsWith('- ')) {
              console.log(`   ${change}`);
            }
          });
        }
        
        return summary;
      }
      
    } catch (error) {
      console.error(`❌ Failed to generate release summary: ${error.message}`);
    }
    
    return null;
  }

  /**
   * Run all post-changelog processing
   */
  processAll() {
    console.log('🔄 Running post-changelog processing for htwoo-react...\\n');
    
    try {
      // Update changelog header
      this.updateChangelogHeader();
      
      // Add version links
      this.addVersionLinks();
      
      // Validate changelog
      const isValid = this.validateChangelog();
      
      if (!isValid) {
        console.warn('⚠️  Changelog validation failed, but continuing...');
      }
      
      // Copy to docs
      this.copyToDocsFolder();
      
      // Update package README
      this.updatePackageReadme();
      
      // Generate release summary
      this.generateReleaseSummary();
      
      console.log('\\n✅ Post-changelog processing completed successfully!');
      
    } catch (error) {
      console.error('\\n❌ Post-changelog processing failed:', error.message);
      process.exit(1);
    }
  }
}

// CLI Interface
const processor = new HtwooReactPostChangelogProcessor();

const yargs = require('yargs');

const argv = yargs(process.argv.slice(2))
  .usage('Usage: $0 <command> [options]')
  .command('all', 'Run all post-changelog processing', {}, () => {
    processor.processAll();
  })
  .command('header', 'Update changelog header only', {}, () => {
    processor.updateChangelogHeader();
  })
  .command('links', 'Add version comparison links only', {}, () => {
    processor.addVersionLinks();
  })
  .command('validate', 'Validate changelog format only', {}, () => {
    const isValid = processor.validateChangelog();
    process.exit(isValid ? 0 : 1);
  })
  .command('docs', 'Copy to docs folder only', {}, () => {
    processor.copyToDocsFolder();
  })
  .command('summary', 'Generate release summary only', {}, () => {
    processor.generateReleaseSummary();
  })
  .demandCommand(1, 'You must specify a command')
  .example('$0 all', 'Run all post-changelog processing')
  .example('$0 header', 'Update changelog header')
  .example('$0 validate', 'Validate changelog format')
  .example('$0 summary', 'Generate release summary')
  .help()
  .alias('h', 'help')
  .argv;
