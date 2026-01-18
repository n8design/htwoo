#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Version synchronization script for htwoo-react ecosystem
 * Ensures both htwoo-react-styleguide and htwoo-react package have the same version
 * Creates tags in the format htwoo-react-v*
 */

class HtwooReactVersionSynchronizer {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.repoRoot = path.resolve(this.projectRoot, '..');
    
    // Paths to package.json files
    this.reactProjectPackagePath = path.join(this.projectRoot, 'package.json');
    this.reactPackagePath = path.join(this.repoRoot, 'packages', 'htwoo-react', 'package.json');
    
    console.log('🔄 Version Synchronizer for htwoo-react ecosystem');
    console.log(`📁 Project root: ${this.projectRoot}`);
    console.log(`📁 Repo root: ${this.repoRoot}`);
  }

  /**
   * Read and parse a package.json file
   */
  readPackageJson(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    } catch (error) {
      throw new Error(`Failed to read ${filePath}: ${error.message}`);
    }
  }

  /**
   * Write package.json file with proper formatting
   */
  writePackageJson(filePath, packageData) {
    try {
      const content = JSON.stringify(packageData, null, 2) + '\n';
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated ${path.relative(this.repoRoot, filePath)}`);
    } catch (error) {
      throw new Error(`Failed to write ${filePath}: ${error.message}`);
    }
  }

  /**
   * Get current versions from both packages
   */
  getCurrentVersions() {
    const reactProjectPackage = this.readPackageJson(this.reactProjectPackagePath);
    
    let reactPackage = null;
    if (fs.existsSync(this.reactPackagePath)) {
      reactPackage = this.readPackageJson(this.reactPackagePath);
    }

    return {
      project: {
        version: reactProjectPackage.version,
        name: reactProjectPackage.name,
        package: reactProjectPackage
      },
      publishedPackage: reactPackage ? {
        version: reactPackage.version,
        name: reactPackage.name,
        package: reactPackage
      } : null
    };
  }

  /**
   * Check if versions are synchronized
   */
  areVersionsSynced() {
    const versions = this.getCurrentVersions();
    
    console.log(`📦 React Project (${versions.project.name}): ${versions.project.version}`);
    
    if (versions.publishedPackage) {
      console.log(`📦 Published Package (${versions.publishedPackage.name}): ${versions.publishedPackage.version}`);
      const synced = versions.project.version === versions.publishedPackage.version;
      console.log(synced ? '✅ Versions are synchronized' : '❌ Versions are NOT synchronized');
      return synced;
    } else {
      console.log('📦 Published Package: Not yet created');
      console.log('ℹ️  Will be created during build process');
      return true; // Consider synced if package doesn't exist yet
    }
  }

  /**
   * Validate semantic version format
   */
  isValidSemver(version) {
    const semverRegex = /^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?$/;
    return semverRegex.test(version);
  }

  /**
   * Bump version using npm version command
   */
  bumpVersion(bumpType, commitMessage = null) {
    console.log(`📈 Bumping ${bumpType} version...`);

    if (!['patch', 'minor', 'major', 'prerelease'].includes(bumpType)) {
      throw new Error(`Invalid bump type: ${bumpType}. Must be patch, minor, major, or prerelease`);
    }

    try {
      // Bump version in project package.json
      const versionCommand = commitMessage 
        ? `npm version ${bumpType} -m "${commitMessage}"`
        : `npm version ${bumpType} --no-git-tag-version`;

      const result = execSync(versionCommand, {
        cwd: this.projectRoot,
        encoding: 'utf8'
      });

      const newVersion = result.trim().replace('v', '');
      console.log(`📦 New version: ${newVersion}`);

      // Update published package if it exists
      if (fs.existsSync(this.reactPackagePath)) {
        const publishedPackage = this.readPackageJson(this.reactPackagePath);
        publishedPackage.version = newVersion;
        this.writePackageJson(this.reactPackagePath, publishedPackage);
      }

      // Create git tag if commit message provided
      if (commitMessage) {
        this.createGitTag(newVersion, commitMessage);
      }

      console.log('✅ Version bumped successfully');
      return newVersion;

    } catch (error) {
      throw new Error(`Failed to bump version: ${error.message}`);
    }
  }

  /**
   * Set specific version
   */
  setVersion(version, commitMessage = null) {
    console.log(`📌 Setting version to ${version}...`);

    if (!this.isValidSemver(version)) {
      throw new Error(`Invalid semantic version: ${version}`);
    }

    try {
      // Update project package.json
      const projectPackage = this.readPackageJson(this.reactProjectPackagePath);
      projectPackage.version = version;
      this.writePackageJson(this.reactProjectPackagePath, projectPackage);

      // Update published package if it exists
      if (fs.existsSync(this.reactPackagePath)) {
        const publishedPackage = this.readPackageJson(this.reactPackagePath);
        publishedPackage.version = version;
        this.writePackageJson(this.reactPackagePath, publishedPackage);
      }

      // Create git tag if commit message provided
      if (commitMessage) {
        this.createGitTag(version, commitMessage);
      }

      console.log('✅ Version set successfully');
      return version;

    } catch (error) {
      throw new Error(`Failed to set version: ${error.message}`);
    }
  }

  /**
   * Synchronize versions between project and published package
   */
  syncVersions() {
    console.log('🔄 Synchronizing versions...');

    const versions = this.getCurrentVersions();

    if (!versions.publishedPackage) {
      console.log('ℹ️  Published package does not exist yet - will be created during build');
      return versions.project.version;
    }

    // Use project version as source of truth
    const targetVersion = versions.project.version;
    
    if (versions.publishedPackage.version !== targetVersion) {
      console.log(`🔄 Updating published package version to ${targetVersion}`);
      const publishedPackage = versions.publishedPackage.package;
      publishedPackage.version = targetVersion;
      this.writePackageJson(this.reactPackagePath, publishedPackage);
    }

    console.log('✅ Versions synchronized');
    return targetVersion;
  }

  /**
   * Create git tag for the release
   */
  createGitTag(version, message) {
    const tag = `htwoo-react-v${version}`;
    
    try {
      // Check if tag already exists
      try {
        execSync(`git rev-parse ${tag}`, {
          cwd: this.repoRoot,
          stdio: 'ignore'
        });
        console.log(`⚠️  Tag ${tag} already exists, skipping tag creation`);
        return;
      } catch (error) {
        // Tag doesn't exist, proceed with creation
      }

      console.log(`🏷️  Creating git tag: ${tag}`);
      
      // Stage version changes
      execSync(`git add ${this.reactProjectPackagePath}`, { cwd: this.repoRoot });
      
      if (fs.existsSync(this.reactPackagePath)) {
        execSync(`git add ${this.reactPackagePath}`, { cwd: this.repoRoot });
      }

      // Commit version changes
      execSync(`git commit -m "chore(htwoo-react): ${message || `release v${version}`}"`, {
        cwd: this.repoRoot
      });

      // Create annotated tag
      execSync(`git tag -a ${tag} -m "${message || `htwoo-react release v${version}`}"`, {
        cwd: this.repoRoot
      });

      console.log(`✅ Created tag: ${tag}`);

    } catch (error) {
      throw new Error(`Failed to create git tag: ${error.message}`);
    }
  }

  /**
   * Get latest version from git tags
   */
  getLatestVersionFromTags() {
    try {
      const result = execSync(
        'git tag -l "htwoo-react-v*" --sort=-version:refname',
        { 
          cwd: this.repoRoot,
          encoding: 'utf8' 
        }
      );
      
      const tags = result.trim().split('\n').filter(Boolean);
      if (tags.length > 0) {
        const latestTag = tags[0];
        const version = latestTag.replace('htwoo-react-v', '');
        return version;
      }
      return null;
    } catch (error) {
      console.warn('⚠️  Could not retrieve version from git tags');
      return null;
    }
  }

  /**
   * Check if current version exists on npm
   */
  checkNpmVersion() {
    const versions = this.getCurrentVersions();
    const currentVersion = versions.project.version;
    const packageName = versions.project.name;

    try {
      console.log(`🔍 Checking if ${packageName}@${currentVersion} exists on npm...`);
      
      execSync(`npm view ${packageName}@${currentVersion} version`, {
        stdio: 'ignore',
        cwd: this.projectRoot
      });
      
      console.log(`⚠️  Version ${currentVersion} already exists on npm`);
      return true;
    } catch (error) {
      console.log(`✅ Version ${currentVersion} is available for publishing`);
      return false;
    }
  }
}

// CLI Interface
const synchronizer = new HtwooReactVersionSynchronizer();

const yargs = require('yargs');

const argv = yargs(process.argv.slice(2))
  .usage('Usage: $0 <command> [options]')
  .command('check', 'Check version synchronization status', {}, () => {
    try {
      const synced = synchronizer.areVersionsSynced();
      process.exit(synced ? 0 : 1);
    } catch (error) {
      console.error('❌ Version check failed:', error.message);
      process.exit(1);
    }
  })
  .command('sync', 'Synchronize versions', {}, () => {
    try {
      synchronizer.syncVersions();
      console.log('✅ Versions synchronized successfully');
    } catch (error) {
      console.error('❌ Version sync failed:', error.message);
      process.exit(1);
    }
  })
  .command('bump <type>', 'Bump version', {
    type: {
      describe: 'Version bump type',
      choices: ['patch', 'minor', 'major', 'prerelease']
    },
    message: {
      alias: 'm',
      describe: 'Commit message',
      type: 'string'
    }
  }, (argv) => {
    try {
      const newVersion = synchronizer.bumpVersion(argv.type, argv.message);
      console.log(`✅ Version bumped to ${newVersion}`);
    } catch (error) {
      console.error('❌ Version bump failed:', error.message);
      process.exit(1);
    }
  })
  .command('set <version>', 'Set specific version', {
    version: {
      describe: 'Version to set (e.g., 2.8.0)',
      type: 'string'
    },
    message: {
      alias: 'm',
      describe: 'Commit message',
      type: 'string'
    }
  }, (argv) => {
    try {
      synchronizer.setVersion(argv.version, argv.message);
      console.log(`✅ Version set to ${argv.version}`);
    } catch (error) {
      console.error('❌ Set version failed:', error.message);
      process.exit(1);
    }
  })
  .command('npm-check', 'Check if current version exists on npm', {}, () => {
    try {
      const exists = synchronizer.checkNpmVersion();
      process.exit(exists ? 1 : 0);
    } catch (error) {
      console.error('❌ npm version check failed:', error.message);
      process.exit(1);
    }
  })
  .demandCommand(1, 'You must specify a command')
  .example('$0 check', 'Check if versions are synchronized')
  .example('$0 sync', 'Synchronize versions')
  .example('$0 bump patch', 'Bump patch version')
  .example('$0 bump minor -m "feat: new components"', 'Bump minor version with message')
  .example('$0 set 3.0.0 -m "major: breaking changes"', 'Set specific version')
  .example('$0 npm-check', 'Check if current version exists on npm')
  .help()
  .alias('h', 'help')
  .argv;
