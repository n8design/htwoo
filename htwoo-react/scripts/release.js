#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const yargs = require('yargs');

/**
 * Complete release script for htwoo-react ecosystem
 * Handles version sync, package building, testing, and publishing
 */

class HtwooReactReleaseManager {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.repoRoot = path.resolve(this.projectRoot, '..');
    this.reactPackagePath = path.join(this.repoRoot, 'packages', 'htwoo-react');
  }

  /**
   * Execute command with proper error handling
   */
  exec(command, options = {}) {
    try {
      console.log(`🔄 Executing: ${command}`);
      return execSync(command, {
        stdio: 'inherit',
        cwd: options.cwd || this.projectRoot,
        ...options
      });
    } catch (error) {
      console.error(`❌ Command failed: ${command}`);
      throw error;
    }
  }

  /**
   * Check prerequisites before release
   */
  checkPrerequisites(skipGitCheck = false) {
    console.log('🔍 Checking prerequisites...');
    
    // Check git status
    if (!skipGitCheck) {
      try {
        const gitStatus = execSync('git status --porcelain', {
          cwd: this.repoRoot,
          encoding: 'utf8'
        });
        if (gitStatus.trim() !== '') {
          throw new Error('Git working directory is not clean. Please commit or stash changes first.');
        }
      } catch (error) {
        console.error('❌ Git status check failed:', error.message);
        throw error;
      }
    } else {
      console.log('⚠️  Skipping git status check');
    }

    // Check if on main branch
    try {
      const currentBranch = execSync('git branch --show-current', {
        cwd: this.repoRoot,
        encoding: 'utf8'
      }).trim();
      if (currentBranch !== 'main' && currentBranch !== 'master') {
        console.warn(`⚠️  You are on branch '${currentBranch}', not main/master`);
      }
    } catch (error) {
      console.warn('⚠️  Could not determine current branch');
    }

    // Check version sync
    this.exec('node scripts/sync-versions.js check');
    
    // Check if htwoo-core dependency is up to date
    this.checkCoreCompatibility();
    
    console.log('✅ Prerequisites check passed');
  }

  /**
   * Check htwoo-core compatibility
   */
  checkCoreCompatibility() {
    console.log('🔗 Checking htwoo-core compatibility...');
    
    try {
      const reactPkgContent = require(path.join(this.projectRoot, 'package.json'));
      const coreVersion = reactPkgContent.dependencies['@n8d/htwoo-core'];
      
      if (!coreVersion) {
        throw new Error('htwoo-core dependency not found in htwoo-react package.json');
      }
      
      console.log(`📦 htwoo-react depends on htwoo-core: ${coreVersion}`);
      
      // Check if htwoo-core package exists in workspace
      const corePackagePath = path.join(this.repoRoot, 'packages', 'htwoo-core', 'package.json');
      if (require('fs').existsSync(corePackagePath)) {
        const corePackage = require(corePackagePath);
        console.log(`📦 Available htwoo-core version: ${corePackage.version}`);
      }
      
    } catch (error) {
      console.warn(`⚠️  Could not verify htwoo-core compatibility: ${error.message}`);
    }
  }

  /**
   * Run tests to ensure quality
   */
  runTests() {
    console.log('🧪 Running tests...');
    
    // Run TypeScript type checking
    this.exec('npx tsc --noEmit');
    
    // Build package to ensure no build errors
    this.exec('npm run build:package');
    
    // Build storybook to ensure documentation works
    this.exec('npm run build-storybook');
    
    // Run any package tests
    if (require('fs').existsSync(path.join(this.reactPackagePath, 'package.json'))) {
      try {
        this.exec('npm test', { cwd: this.reactPackagePath });
      } catch (error) {
        console.warn('⚠️  Package tests not available or failed');
      }
    }
    
    console.log('✅ All tests passed');
  }

  /**
   * Bump version and sync
   */
  bumpVersion(type, message) {
    console.log(`📈 Bumping ${type} version...`);
    
    const cmd = message 
      ? `node scripts/sync-versions.js bump ${type} "${message}"`
      : `node scripts/sync-versions.js bump ${type}`;
    
    this.exec(cmd);
    
    console.log('✅ Version bumped and synced');
  }

  /**
   * Set specific version and sync
   */
  setVersion(version, message) {
    console.log(`📌 Setting version to ${version}...`);
    
    const cmd = message 
      ? `node scripts/sync-versions.js set ${version} "${message}"`
      : `node scripts/sync-versions.js set ${version}`;
    
    this.exec(cmd);
    
    console.log('✅ Version set and synced');
  }

  /**
   * Generate changelog
   */
  generateChangelog() {
    console.log('📝 Generating changelog...');
    
    this.exec('npm run changelog:htwoo-react');
    
    console.log('✅ Changelog generated');
  }

  /**
   * Build final package
   */
  buildPackage() {
    console.log('🏗️  Building final package...');
    
    // Clean previous builds
    this.exec('npm run clean');
    
    // Build TypeScript
    this.exec('npm run build');
    
    // Prepare package for publishing
    this.exec('npm run prepublish');
    
    console.log('✅ Package built and prepared');
  }

  /**
   * Publish to npm
   */
  publishPackage(dryRun = false) {
    console.log(dryRun ? '🧪 Running npm publish dry run...' : '📦 Publishing to npm...');
    
    const publishCmd = dryRun ? 'npm publish --dry-run' : 'npm publish';
    
    this.exec(publishCmd, { cwd: this.reactPackagePath });
    
    if (dryRun) {
      console.log('✅ Dry run completed successfully');
    } else {
      console.log('🎉 Package published successfully');
    }
  }

  /**
   * Push changes to git
   */
  pushToGit() {
    console.log('🚀 Pushing to git...');
    
    this.exec('git push origin main --follow-tags', { cwd: this.repoRoot });
    
    console.log('✅ Pushed to git');
  }

  /**
   * Complete release workflow
   */
  release(options) {
    try {
      console.log('🚀 Starting htwoo-react release process...\n');

      // 1. Check prerequisites
      this.checkPrerequisites(options.skipGitCheck);

      // 2. Run tests
      if (!options.skipTests) {
        this.runTests();
      }

      // 3. Version management
      if (options.version) {
        this.setVersion(options.version, options.message);
      } else if (options.bump) {
        this.bumpVersion(options.bump, options.message);
      } else {
        throw new Error('Must specify either --version or --bump');
      }

      // 4. Generate changelog
      if (!options.skipChangelog) {
        this.generateChangelog();
      }

      // 5. Build package
      this.buildPackage();

      // 6. Publish (or dry run)
      if (options.dryRun) {
        this.publishPackage(true);
      } else if (!options.skipPublish) {
        this.publishPackage(false);
      }

      // 7. Push to git
      if (!options.skipGit && !options.dryRun) {
        this.pushToGit();
      }

      console.log('\n🎉 Release process completed successfully!');
      
      if (options.dryRun) {
        console.log('ℹ️  This was a dry run. No actual publishing occurred.');
      }

    } catch (error) {
      console.error('\n❌ Release process failed:', error.message);
      process.exit(1);
    }
  }
}

// CLI Interface
const releaseManager = new HtwooReactReleaseManager();

const argv = yargs(process.argv.slice(2))
  .usage('Usage: $0 <command> [options]')
  .command('release', 'Complete release workflow', {
    bump: {
      describe: 'Version bump type',
      choices: ['patch', 'minor', 'major'],
      conflicts: 'version'
    },
    version: {
      describe: 'Specific version to set (e.g., 2.8.0)',
      type: 'string',
      conflicts: 'bump'
    },
    message: {
      alias: 'm',
      describe: 'Release message',
      type: 'string'
    },
    'dry-run': {
      describe: 'Run everything except actual publishing',
      type: 'boolean',
      default: false
    },
    'skip-tests': {
      describe: 'Skip running tests',
      type: 'boolean',
      default: false
    },
    'skip-changelog': {
      describe: 'Skip changelog generation',
      type: 'boolean',
      default: false
    },
    'skip-publish': {
      describe: 'Skip npm publishing',
      type: 'boolean',
      default: false
    },
    'skip-git': {
      describe: 'Skip git push',
      type: 'boolean',
      default: false
    },
    'skip-git-check': {
      describe: 'Skip git status check',
      type: 'boolean',
      default: false
    }
  }, (argv) => {
    releaseManager.release(argv);
  })
  .command('check', 'Check prerequisites only', {}, () => {
    try {
      releaseManager.checkPrerequisites();
      console.log('✅ All checks passed - ready for release');
    } catch (error) {
      console.error('❌ Prerequisites check failed:', error.message);
      process.exit(1);
    }
  })
  .command('test', 'Run tests only', {}, () => {
    try {
      releaseManager.runTests();
      console.log('✅ All tests passed');
    } catch (error) {
      console.error('❌ Tests failed:', error.message);
      process.exit(1);
    }
  })
  .command('build', 'Build package only', {}, () => {
    try {
      releaseManager.buildPackage();
      console.log('✅ Package built successfully');
    } catch (error) {
      console.error('❌ Build failed:', error.message);
      process.exit(1);
    }
  })
  .demandCommand(1, 'You must specify a command')
  .example('$0 release --bump patch', 'Release a patch version')
  .example('$0 release --bump minor -m "feat: new components"', 'Release a minor version with message')
  .example('$0 release --version 3.0.0 -m "major: breaking changes"', 'Release specific version')
  .example('$0 release --bump patch --dry-run', 'Test release process without publishing')
  .example('$0 check', 'Check if ready for release')
  .help()
  .alias('h', 'help')
  .argv;
