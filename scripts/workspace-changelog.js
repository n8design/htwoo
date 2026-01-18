#!/usr/bin/env node

/**
 * Workspace-level changelog coordination
 * Manages changelog generation across all projects with proper path filtering
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class WorkspaceChangelogCoordinator {
  constructor() {
    this.workspaceRoot = path.resolve(__dirname);
    this.projects = {
      'htwoo-core': {
        path: 'htwoo-core/',
        tagPrefix: 'htwoo-core-v',
        configFile: 'htwoo-core/changelog.config.js'
      },
      'htwoo-react': {
        path: 'htwoo-react/',
        tagPrefix: 'htwoo-react-v',
        configFile: 'htwoo-react/changelog.config.js'
      }
      // Add more projects as needed
    };
  }

  /**
   * Get commits affecting a specific project path
   */
  getProjectCommits(projectName, since = null) {
    const project = this.projects[projectName];
    if (!project) {
      throw new Error(`Unknown project: ${projectName}`);
    }

    let gitCommand = `git log --oneline --pretty=format:"%H|%s|%an|%ad" --date=short`;
    
    if (since) {
      gitCommand += ` ${since}..HEAD`;
    }
    
    gitCommand += ` -- ${project.path}`;

    try {
      const result = execSync(gitCommand, {
        cwd: this.workspaceRoot,
        encoding: 'utf8'
      });

      return result.trim().split('\n')
        .filter(Boolean)
        .map(line => {
          const [hash, subject, author, date] = line.split('|');
          return { hash, subject, author, date };
        });
    } catch (error) {
      console.error(`Error getting commits for ${projectName}:`, error.message);
      return [];
    }
  }

  /**
   * Generate changelog for specific project
   */
  generateProjectChangelog(projectName) {
    const project = this.projects[projectName];
    if (!project) {
      throw new Error(`Unknown project: ${projectName}`);
    }

    console.log(`🔄 Generating changelog for ${projectName}...`);

    // Use Nx to run the project's changelog target if it exists
    try {
      execSync(`nx run ${projectName}:changelog`, {
        cwd: this.workspaceRoot,
        stdio: 'inherit'
      });
    } catch (error) {
      // Fallback to direct script execution
      console.log(`ℹ️  Using fallback changelog generation for ${projectName}`);
      const projectDir = path.join(this.workspaceRoot, projectName);
      
      if (fs.existsSync(path.join(projectDir, 'scripts', 'generate-changelog.js'))) {
        execSync('node scripts/generate-changelog.js', {
          cwd: projectDir,
          stdio: 'inherit'
        });
      } else {
        console.warn(`⚠️  No changelog generation script found for ${projectName}`);
      }
    }
  }

  /**
   * Generate changelogs for all projects or specific ones
   */
  generateChangelogs(projectNames = null) {
    const targets = projectNames || Object.keys(this.projects);
    
    console.log('🚀 Starting workspace changelog generation...');
    console.log(`📋 Projects: ${targets.join(', ')}`);

    for (const projectName of targets) {
      try {
        this.generateProjectChangelog(projectName);
        console.log(`✅ ${projectName} changelog generated`);
      } catch (error) {
        console.error(`❌ Failed to generate changelog for ${projectName}:`, error.message);
      }
    }

    console.log('\n✨ Workspace changelog generation complete!');
  }

  /**
   * Check workspace health for changelog generation
   */
  checkWorkspaceHealth() {
    console.log('🔍 Checking workspace health...');
    
    // Check if we're in a git repository
    try {
      execSync('git rev-parse --git-dir', { cwd: this.workspaceRoot, stdio: 'pipe' });
    } catch (error) {
      console.error('❌ Not in a git repository');
      return false;
    }

    // Check for Nx workspace
    const nxJsonPath = path.join(this.workspaceRoot, 'nx.json');
    if (!fs.existsSync(nxJsonPath)) {
      console.warn('⚠️  nx.json not found - not an Nx workspace');
    }

    // Check project configurations
    for (const [projectName, project] of Object.entries(this.projects)) {
      const projectPath = path.join(this.workspaceRoot, projectName);
      const projectJsonPath = path.join(projectPath, 'project.json');
      
      if (!fs.existsSync(projectPath)) {
        console.warn(`⚠️  Project directory not found: ${projectName}`);
        continue;
      }

      if (!fs.existsSync(projectJsonPath)) {
        console.warn(`⚠️  project.json not found for: ${projectName}`);
      }

      console.log(`✅ ${projectName} configuration valid`);
    }

    return true;
  }

  /**
   * Show usage information
   */
  showUsage() {
    console.log(`
📋 Workspace Changelog Generator

Usage:
  node scripts/workspace-changelog.js [project...]

Examples:
  node scripts/workspace-changelog.js                 # Generate for all projects
  node scripts/workspace-changelog.js htwoo-core      # Generate for htwoo-core only
  node scripts/workspace-changelog.js htwoo-core htwoo-react  # Generate for specific projects

Available projects:
${Object.keys(this.projects).map(name => `  - ${name}`).join('\n')}

Nx Commands:
  nx run htwoo-core:changelog                         # Generate htwoo-core changelog
  nx run htwoo-core:changelog:preview                 # Preview changelog
  nx run htwoo-core:release                           # Create release
  nx run htwoo-core:release:dry-run                   # Preview release
    `);
  }
}

// Main execution
if (require.main === module) {
  const coordinator = new WorkspaceChangelogCoordinator();
  
  const args = process.argv.slice(2);
  
  if (args.includes('--help') || args.includes('-h')) {
    coordinator.showUsage();
    process.exit(0);
  }

  if (args.includes('--check')) {
    coordinator.checkWorkspaceHealth();
    process.exit(0);
  }

  const projectNames = args.length > 0 ? args : null;
  
  if (!coordinator.checkWorkspaceHealth()) {
    process.exit(1);
  }

  coordinator.generateChangelogs(projectNames);
}

module.exports = WorkspaceChangelogCoordinator;
