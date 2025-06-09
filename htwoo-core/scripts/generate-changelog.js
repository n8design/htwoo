#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Enhanced changelog generator for htwoo-core
 * Filters commits that affect the htwoo-core folder specifically
 * Uses Nx task dependencies and modern tooling
 */

class ChangelogGenerator {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.repoRoot = path.resolve(this.projectRoot, '..');
    this.htwooCorePath = 'htwoo-core/';
    this.configPath = path.join(this.projectRoot, 'changelog.config.js');
  }

  /**
   * Get the last git tag for htwoo-core releases
   */
  getLastTag() {
    try {
      const result = execSync(
        'git tag -l "htwoo-core-v*" --sort=-version:refname',
        { 
          cwd: this.repoRoot,
          encoding: 'utf8' 
        }
      );
      const tags = result.trim().split('\n').filter(Boolean);
      return tags[0] || null;
    } catch (error) {
      console.warn('No previous tags found, generating changelog from beginning');
      return null;
    }
  }

  /**
   * Get commits that affected htwoo-core since last tag
   */
  getHtwooCoreCommits(since = null) {
    let gitCommand = `git log --oneline --pretty=format:"%H|%s|%an|%ad" --date=short`;
    
    if (since) {
      gitCommand += ` ${since}..HEAD`;
    }
    
    // Only include commits that touch the htwoo-core folder
    gitCommand += ` -- ${this.htwooCorePath}`;

    try {
      const result = execSync(gitCommand, {
        cwd: this.repoRoot,
        encoding: 'utf8'
      });

      return result.trim().split('\n')
        .filter(Boolean)
        .map(line => {
          const [hash, subject, author, date] = line.split('|');
          return { hash, subject, author, date };
        });
    } catch (error) {
      console.error('Error getting commits:', error.message);
      return [];
    }
  }

  /**
   * Check if commit follows conventional commit format
   */
  isConventionalCommit(subject) {
    const conventionalPattern = /^(feat|fix|docs|style|refactor|perf|test|chore)(\(.+\))?: .+/;
    return conventionalPattern.test(subject);
  }

  /**
   * Get affected files for validation
   */
  getAffectedFiles(commitHash) {
    try {
      const result = execSync(
        `git show --name-only --pretty=format: ${commitHash}`,
        { 
          cwd: this.repoRoot,
          encoding: 'utf8' 
        }
      );
      return result.trim().split('\n').filter(Boolean);
    } catch (error) {
      return [];
    }
  }

  /**
   * Generate changelog using conventional-changelog
   */
  async generateChangelog() {
    console.log('🔄 Generating changelog for htwoo-core...');
    
    const lastTag = this.getLastTag();
    const commits = this.getHtwooCoreCommits(lastTag);
    
    console.log(`📊 Found ${commits.length} commits affecting htwoo-core since ${lastTag || 'beginning'}`);
    
    // Validate conventional commits
    const conventionalCommits = commits.filter(commit => 
      this.isConventionalCommit(commit.subject)
    );
    
    const nonConventionalCommits = commits.filter(commit => 
      !this.isConventionalCommit(commit.subject)
    );

    if (nonConventionalCommits.length > 0) {
      console.warn(`⚠️  Found ${nonConventionalCommits.length} non-conventional commits:`);
      nonConventionalCommits.forEach(commit => {
        console.warn(`   ${commit.hash.substring(0, 7)}: ${commit.subject}`);
      });
    }

    // Generate changelog using conventional-changelog
    let command = `npx conventional-changelog -p angular -i CHANGELOG.md -s --config ./changelog.config.js`;

    try {
      execSync(command, {
        cwd: this.projectRoot,
        stdio: 'inherit'
      });
      
      console.log('✅ Changelog generated successfully!');
      console.log(`📁 Updated: ${path.join(this.projectRoot, 'CHANGELOG.md')}`);
      
      // Post-process changelog to ensure only htwoo-core commits are included
      await this.postProcessChangelog();
      
      // Copy to docs folder for documentation
      this.copyToDocsFolder();
      
    } catch (error) {
      console.error('❌ Error generating changelog:', error.message);
      process.exit(1);
    }
  }

  /**
   * Post-process changelog to ensure only htwoo-core commits are included
   */
  async postProcessChangelog() {
    const changelogPath = path.join(this.projectRoot, 'CHANGELOG.md');
    
    if (!fs.existsSync(changelogPath)) {
      console.warn('⚠️  Changelog file not found for post-processing');
      return;
    }

    try {
      const content = fs.readFileSync(changelogPath, 'utf8');
      const lines = content.split('\n');
      const filteredLines = [];
      let inEntry = false;
      let currentCommitHash = '';

      for (const line of lines) {
        // Check if this is a commit link
        const commitMatch = line.match(/\[([a-f0-9]{7,})\]\(.*\/commit\/([a-f0-9]{40})\)/);
        if (commitMatch) {
          currentCommitHash = commitMatch[2];
          
          // Check if this commit affects htwoo-core
          const affectedFiles = this.getAffectedFiles(currentCommitHash);
          const affectsHtwooCore = affectedFiles.some(file => file.startsWith('htwoo-core/'));
          
          if (affectsHtwooCore) {
            filteredLines.push(line);
            inEntry = true;
          } else {
            inEntry = false;
          }
        } else if (inEntry || !line.match(/^\* /)) {
          // Include the line if we're in a valid entry or it's not a bullet point
          filteredLines.push(line);
        }
      }

      fs.writeFileSync(changelogPath, filteredLines.join('\n'));
      console.log('📝 Post-processed changelog to include only htwoo-core commits');
      
    } catch (error) {
      console.warn(`⚠️  Failed to post-process changelog: ${error.message}`);
    }
  }

  /**
   * Copy changelog to docs folder for documentation site
   */
  copyToDocsFolder() {
    const sourceFile = path.join(this.projectRoot, 'CHANGELOG.md');
    const docsFolder = path.join(this.repoRoot, 'docs', 'change-log');
    const targetFile = path.join(docsFolder, 'htwoo-core.md');

    if (fs.existsSync(sourceFile)) {
      try {
        if (!fs.existsSync(docsFolder)) {
          fs.mkdirSync(docsFolder, { recursive: true });
        }
        fs.copyFileSync(sourceFile, targetFile);
        console.log(`📋 Copied changelog to docs: ${targetFile}`);
      } catch (error) {
        console.warn(`⚠️  Failed to copy to docs folder: ${error.message}`);
      }
    }
  }

  /**
   * Validate workspace dependencies
   */
  validateDependencies() {
    const requiredDeps = ['conventional-changelog-cli', 'standard-version'];
    const packageJson = JSON.parse(
      fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8')
    );
    
    const allDeps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies
    };

    const missing = requiredDeps.filter(dep => !allDeps[dep]);
    
    if (missing.length > 0) {
      console.error(`❌ Missing dependencies: ${missing.join(', ')}`);
      console.log('💡 Install with: npm install --save-dev conventional-changelog-cli');
      process.exit(1);
    }
  }

  /**
   * Main execution
   */
  async run() {
    console.log('🚀 Starting htwoo-core changelog generation...');
    
    this.validateDependencies();
    await this.generateChangelog();
    
    console.log('\n✨ Changelog generation complete!');
    console.log('\n📝 Next steps:');
    console.log('   • Review the generated CHANGELOG.md');
    console.log('   • Run `nx run htwoo-core:release:dry-run` to preview a release');
    console.log('   • Run `nx run htwoo-core:release` to create a new release');
  }
}

// Run if called directly
if (require.main === module) {
  const generator = new ChangelogGenerator();
  generator.run().catch(error => {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  });
}

module.exports = ChangelogGenerator;
