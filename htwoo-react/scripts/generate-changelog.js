#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Enhanced changelog generator for htwoo-react
 * Filters commits that affect the htwoo-react folder specifically
 * Uses Nx task dependencies and modern tooling
 */

class HtwooReactChangelogGenerator {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.repoRoot = path.resolve(this.projectRoot, '..');
    this.htwooReactPath = 'htwoo-react/';
    this.configPath = path.join(this.projectRoot, 'changelog.config.js');
  }

  /**
   * Get the last git tag for htwoo-react releases
   */
  getLastTag() {
    try {
      const result = execSync(
        'git tag -l "htwoo-react-v*" --sort=-version:refname',
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
   * Get commits that affected htwoo-react since last tag
   */
  getHtwooReactCommits(since = null) {
    let gitCommand = `git log --oneline --pretty=format:"%H|%s|%an|%ad" --date=short`;
    
    if (since) {
      gitCommand += ` ${since}..HEAD`;
    }
    
    // Only include commits that touch the htwoo-react folder
    gitCommand += ` -- ${this.htwooReactPath}`;

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
   * Create changelog configuration if it doesn't exist
   */
  ensureChangelogConfig() {
    if (!fs.existsSync(this.configPath)) {
      console.log('📝 Creating changelog configuration...');
      
      const config = `module.exports = {
  parserOpts: {
    headerPattern: /^(\\w*)(?:\\((.*)\\))?:?\\s(.*)$/,
    headerCorrespondence: ['type', 'scope', 'subject'],
    noteKeywords: ['BREAKING CHANGE'],
    revertPattern: /^(?:Revert|revert:)\\s"?([\\s\\S]*?)"?\\s*This reverts commit (\\w*)\\.$/,
    revertCorrespondence: ['header', 'hash']
  },
  writerOpts: {
    transform: (commit, context) => {
      const issues = [];

      commit.notes.forEach(note => {
        note.title = 'BREAKING CHANGES';
      });

      if (commit.type === 'feat') {
        commit.type = 'Features';
      } else if (commit.type === 'fix') {
        commit.type = 'Bug Fixes';
      } else if (commit.type === 'perf') {
        commit.type = 'Performance Improvements';
      } else if (commit.type === 'revert' || commit.revert) {
        commit.type = 'Reverts';
      } else if (commit.type === 'docs') {
        commit.type = 'Documentation';
      } else if (commit.type === 'style') {
        commit.type = 'Styles';
      } else if (commit.type === 'refactor') {
        commit.type = 'Code Refactoring';
      } else if (commit.type === 'test') {
        commit.type = 'Tests';
      } else if (commit.type === 'build') {
        commit.type = 'Build System';
      } else if (commit.type === 'ci') {
        commit.type = 'Continuous Integration';
      } else {
        return;
      }

      if (commit.scope === '*') {
        commit.scope = '';
      }

      if (typeof commit.hash === 'string') {
        commit.shortHash = commit.hash.substring(0, 7);
      }

      if (typeof commit.subject === 'string') {
        let url = context.repository
          ? \`\${context.host}/\${context.owner}/\${context.repository}\`
          : context.repoUrl;
        if (url) {
          url = \`\${url}/issues/\`;
          // Issue URLs.
          commit.subject = commit.subject.replace(/#([0-9]+)/g, (_, issue) => {
            issues.push(issue);
            return \`[\#\${issue}](\${url}\${issue})\`;
          });
        }
        if (context.host) {
          // User URLs.
          commit.subject = commit.subject.replace(/\\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/g, (_, username) => {
            if (username.includes('/')) {
              return \`@\${username}\`;
            }

            return \`[@\${username}](\${context.host}/\${username})\`;
          });
        }
      }

      // remove references that already appear in the subject
      commit.references = commit.references.filter(reference => {
        if (issues.indexOf(reference.issue) === -1) {
          return true;
        }

        return false;
      });

      return commit;
    },
    groupBy: 'type',
    commitGroupsSort: 'title',
    commitsSort: ['scope', 'subject'],
    noteGroupsSort: 'title',
    notesSort: 'text'
  }
};`;

      fs.writeFileSync(this.configPath, config);
      console.log(`✅ Created ${this.configPath}`);
    }
  }

  /**
   * Generate changelog using conventional-changelog
   */
  async generateChangelog() {
    console.log('🔄 Generating changelog for htwoo-react...');
    
    this.ensureChangelogConfig();
    
    const lastTag = this.getLastTag();
    const commits = this.getHtwooReactCommits(lastTag);
    
    console.log(`📊 Found ${commits.length} commits affecting htwoo-react since ${lastTag || 'beginning'}`);
    
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
      
      // Post-process changelog to ensure only htwoo-react commits are included
      await this.postProcessChangelog();
      
      // Update workspace-level React changelog
      this.updateWorkspaceChangelog();
      
    } catch (error) {
      console.error('❌ Error generating changelog:', error.message);
      process.exit(1);
    }
  }

  /**
   * Post-process changelog to ensure only htwoo-react commits are included
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
        const commitMatch = line.match(/\\[([a-f0-9]{7,})\\]\\(.*\\/commit\\/([a-f0-9]{40})\\)/);
        if (commitMatch) {
          currentCommitHash = commitMatch[2];
          
          // Check if this commit affects htwoo-react
          const affectedFiles = this.getAffectedFiles(currentCommitHash);
          const affectsHtwooReact = affectedFiles.some(file => file.startsWith('htwoo-react/'));
          
          if (affectsHtwooReact) {
            filteredLines.push(line);
            inEntry = true;
          } else {
            inEntry = false;
          }
        } else if (inEntry || !line.match(/^\\* /)) {
          // Include the line if we're in a valid entry or it's not a bullet point
          filteredLines.push(line);
        }
      }

      fs.writeFileSync(changelogPath, filteredLines.join('\n'));
      console.log('📝 Post-processed changelog to include only htwoo-react commits');
      
    } catch (error) {
      console.warn(`⚠️  Failed to post-process changelog: ${error.message}`);
    }
  }

  /**
   * Update workspace-level React changelog
   */
  updateWorkspaceChangelog() {
    const sourceFile = path.join(this.projectRoot, 'CHANGELOG.md');
    const targetFile = path.join(this.repoRoot, 'REACT-CHANGELOG.md');

    try {
      if (fs.existsSync(sourceFile)) {
        console.log('📄 Updating workspace-level React changelog...');
        
        // Read the new changelog content
        const newContent = fs.readFileSync(sourceFile, 'utf8');
        
        // Read existing workspace changelog
        let existingContent = '';
        if (fs.existsSync(targetFile)) {
          existingContent = fs.readFileSync(targetFile, 'utf8');
        }

        // Merge the changelogs (new content takes precedence)
        const mergedContent = this.mergeChangelogs(newContent, existingContent);
        
        fs.writeFileSync(targetFile, mergedContent);
        console.log(`✅ Updated workspace React changelog: ${path.relative(this.repoRoot, targetFile)}`);
      }
    } catch (error) {
      console.warn(`⚠️  Failed to update workspace changelog: ${error.message}`);
    }
  }

  /**
   * Merge new and existing changelog content
   */
  mergeChangelogs(newContent, existingContent) {
    if (!existingContent) {
      return newContent;
    }

    // Simple merge strategy: use new content for latest entries
    // More sophisticated merging could be implemented based on version headers
    const newLines = newContent.split('\n');
    const existingLines = existingContent.split('\n');

    // Find where to insert new content (after the header)
    let insertIndex = 0;
    for (let i = 0; i < existingLines.length; i++) {
      if (existingLines[i].match(/^#+ /) && insertIndex === 0) {
        insertIndex = i + 1;
        break;
      }
    }

    // Combine content
    const mergedLines = [
      ...existingLines.slice(0, insertIndex),
      '',
      ...newLines.slice(1), // Skip the header from new content
      '',
      ...existingLines.slice(insertIndex)
    ];

    return mergedLines.join('\n');
  }

  /**
   * Generate release notes for current version
   */
  generateReleaseNotes() {
    console.log('📝 Generating release notes...');
    
    const lastTag = this.getLastTag();
    const commits = this.getHtwooReactCommits(lastTag);
    
    const releaseNotes = [];
    releaseNotes.push('# Release Notes\n');
    
    if (commits.length === 0) {
      releaseNotes.push('No changes found since last release.\n');
      return releaseNotes.join('\n');
    }

    // Group commits by type
    const commitGroups = {
      feat: [],
      fix: [],
      docs: [],
      style: [],
      refactor: [],
      perf: [],
      test: [],
      chore: []
    };

    commits.forEach(commit => {
      const match = commit.subject.match(/^(\\w+)(\\(.+\\))?:?\\s(.+)$/);
      if (match) {
        const [, type, scope, description] = match;
        if (commitGroups[type]) {
          commitGroups[type].push({
            ...commit,
            scope: scope ? scope.slice(1, -1) : null,
            description
          });
        }
      }
    });

    // Add sections for each commit type
    if (commitGroups.feat.length > 0) {
      releaseNotes.push('## ✨ Features\n');
      commitGroups.feat.forEach(commit => {
        const scope = commit.scope ? `**${commit.scope}**: ` : '';
        releaseNotes.push(`- ${scope}${commit.description} ([${commit.hash.substring(0, 7)}](https://github.com/n8design/htwoo/commit/${commit.hash}))`);
      });
      releaseNotes.push('');
    }

    if (commitGroups.fix.length > 0) {
      releaseNotes.push('## 🐛 Bug Fixes\n');
      commitGroups.fix.forEach(commit => {
        const scope = commit.scope ? `**${commit.scope}**: ` : '';
        releaseNotes.push(`- ${scope}${commit.description} ([${commit.hash.substring(0, 7)}](https://github.com/n8design/htwoo/commit/${commit.hash}))`);
      });
      releaseNotes.push('');
    }

    if (commitGroups.docs.length > 0) {
      releaseNotes.push('## 📚 Documentation\n');
      commitGroups.docs.forEach(commit => {
        const scope = commit.scope ? `**${commit.scope}**: ` : '';
        releaseNotes.push(`- ${scope}${commit.description} ([${commit.hash.substring(0, 7)}](https://github.com/n8design/htwoo/commit/${commit.hash}))`);
      });
      releaseNotes.push('');
    }

    return releaseNotes.join('\n');
  }

  /**
   * Output current version information
   */
  showVersionInfo() {
    try {
      const packagePath = path.join(this.projectRoot, 'package.json');
      const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      console.log('📦 htwoo-react Version Information');
      console.log(`   Name: ${packageData.name}`);
      console.log(`   Version: ${packageData.version}`);
      
      const lastTag = this.getLastTag();
      if (lastTag) {
        console.log(`   Last Tag: ${lastTag}`);
      }
      
      const commits = this.getHtwooReactCommits(lastTag);
      console.log(`   Commits Since Last Release: ${commits.length}`);
      
    } catch (error) {
      console.error('❌ Failed to get version info:', error.message);
    }
  }
}

// CLI Interface
const generator = new HtwooReactChangelogGenerator();

const yargs = require('yargs');

const argv = yargs(process.argv.slice(2))
  .usage('Usage: $0 <command> [options]')
  .command('generate', 'Generate changelog', {}, async () => {
    try {
      await generator.generateChangelog();
      console.log('✅ Changelog generation completed');
    } catch (error) {
      console.error('❌ Changelog generation failed:', error.message);
      process.exit(1);
    }
  })
  .command('release-notes', 'Generate release notes for current version', {}, () => {
    try {
      const notes = generator.generateReleaseNotes();
      console.log(notes);
    } catch (error) {
      console.error('❌ Release notes generation failed:', error.message);
      process.exit(1);
    }
  })
  .command('version-info', 'Show version information', {}, () => {
    try {
      generator.showVersionInfo();
    } catch (error) {
      console.error('❌ Failed to show version info:', error.message);
      process.exit(1);
    }
  })
  .demandCommand(1, 'You must specify a command')
  .example('$0 generate', 'Generate changelog')
  .example('$0 release-notes', 'Generate release notes')
  .example('$0 version-info', 'Show version information')
  .help()
  .alias('h', 'help')
  .argv;
