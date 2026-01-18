#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Version synchronization script for htwoo-core ecosystem
 * Ensures both htwoo-core-styleguide and htwoo-core package have the same version
 * Creates tags in the format htwoo-core-v*
 */

class VersionSynchronizer {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.repoRoot = path.resolve(this.projectRoot, '..');
    
    // Paths to package.json files
    this.styleguidePackagePath = path.join(this.projectRoot, 'package.json');
    this.corePackagePath = path.join(this.repoRoot, 'packages', 'htwoo-core', 'package.json');
    
    console.log('🔄 Version Synchronizer for htwoo-core ecosystem');
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
    const styleguidePackage = this.readPackageJson(this.styleguidePackagePath);
    const corePackage = this.readPackageJson(this.corePackagePath);

    return {
      styleguide: {
        version: styleguidePackage.version,
        name: styleguidePackage.name,
        package: styleguidePackage
      },
      core: {
        version: corePackage.version,
        name: corePackage.name,
        package: corePackage
      }
    };
  }

  /**
   * Check if versions are synchronized
   */
  areVersionsSynced() {
    const versions = this.getCurrentVersions();
    const synced = versions.styleguide.version === versions.core.version;
    
    console.log(`📦 Styleguide (${versions.styleguide.name}): ${versions.styleguide.version}`);
    console.log(`📦 Core Package (${versions.core.name}): ${versions.core.version}`);
    
    if (synced) {
      console.log(`✅ Versions are synchronized: ${versions.styleguide.version}`);
    } else {
      console.log(`⚠️  Versions are not synchronized!`);
    }
    
    return { synced, versions };
  }

  /**
   * Synchronize versions to the specified version
   */
  syncVersions(targetVersion) {
    console.log(`\n🎯 Synchronizing to version: ${targetVersion}`);
    
    const versions = this.getCurrentVersions();
    
    // Update styleguide package.json
    versions.styleguide.package.version = targetVersion;
    this.writePackageJson(this.styleguidePackagePath, versions.styleguide.package);
    
    // Update core package.json
    versions.core.package.version = targetVersion;
    this.writePackageJson(this.corePackagePath, versions.core.package);
    
    console.log(`✅ Both packages synchronized to version ${targetVersion}`);
    return targetVersion;
  }

  /**
   * Create git tag in htwoo-core-v* format
   */
  createGitTag(version, message = null) {
    const tagName = `htwoo-core-v${version}`;
    const tagMessage = message || `Release htwoo-core v${version}`;
    
    try {
      // Check if tag already exists
      try {
        execSync(`git rev-parse ${tagName}`, { 
          cwd: this.repoRoot, 
          stdio: 'pipe' 
        });
        console.log(`⚠️  Tag ${tagName} already exists`);
        return tagName;
      } catch {
        // Tag doesn't exist, create it
      }
      
      // Create annotated tag
      execSync(`git tag -a "${tagName}" -m "${tagMessage}"`, {
        cwd: this.repoRoot,
        stdio: 'inherit'
      });
      
      console.log(`🏷️  Created tag: ${tagName}`);
      return tagName;
    } catch (error) {
      throw new Error(`Failed to create tag ${tagName}: ${error.message}`);
    }
  }

  /**
   * Get the next version based on increment type
   */
  getNextVersion(currentVersion, incrementType = 'patch') {
    const parts = currentVersion.split('.').map(Number);
    
    switch (incrementType) {
      case 'major':
        return `${parts[0] + 1}.0.0`;
      case 'minor':
        return `${parts[0]}.${parts[1] + 1}.0`;
      case 'patch':
      default:
        return `${parts[0]}.${parts[1]}.${parts[2] + 1}`;
    }
  }

  /**
   * Perform a version bump
   */
  bump(incrementType = 'patch', createTag = true, tagMessage = null, dryRun = false) {
    console.log(`\n🚀 Bumping version (${incrementType})`);
    
    const { versions } = this.areVersionsSynced();
    
    // Use styleguide version as the source of truth
    const currentVersion = versions.styleguide.version;
    const newVersion = this.getNextVersion(currentVersion, incrementType);
    
    console.log(`📈 ${currentVersion} → ${newVersion}`);
    
    if (dryRun) {
      console.log(`\n🧪 DRY RUN - No changes will be made`);
      console.log(`🎯 Would sync to version: ${newVersion}`);
      if (createTag) {
        console.log(`🏷️  Would create tag: htwoo-core-v${newVersion}`);
      }
      return newVersion;
    }
    
    // Sync versions
    this.syncVersions(newVersion);
    
    // Create tag if requested
    if (createTag) {
      this.createGitTag(newVersion, tagMessage);
    }
    
    return newVersion;
  }

  /**
   * Set specific version
   */
  setVersion(version, createTag = true, tagMessage = null, dryRun = false) {
    console.log(`\n🎯 Setting version to: ${version}`);
    
    // Validate version format
    if (!/^\d+\.\d+\.\d+/.test(version)) {
      throw new Error(`Invalid version format: ${version}. Expected: X.Y.Z`);
    }
    
    if (dryRun) {
      console.log(`\n🧪 DRY RUN - No changes will be made`);
      console.log(`🎯 Would sync to version: ${version}`);
      if (createTag) {
        console.log(`🏷️  Would create tag: htwoo-core-v${version}`);
      }
      return version;
    }
    
    // Sync versions
    this.syncVersions(version);
    
    // Create tag if requested
    if (createTag) {
      this.createGitTag(version, tagMessage);
    }
    
    return version;
  }

  /**
   * List existing htwoo-core tags
   */
  listTags() {
    try {
      const result = execSync(
        'git tag -l "htwoo-core-v*" --sort=-version:refname',
        { 
          cwd: this.repoRoot,
          encoding: 'utf8' 
        }
      );
      
      const tags = result.trim().split('\n').filter(Boolean);
      
      if (tags.length === 0) {
        console.log('📝 No htwoo-core tags found');
        return [];
      }
      
      console.log('📝 Existing htwoo-core tags:');
      tags.forEach(tag => console.log(`   ${tag}`));
      
      return tags;
    } catch (error) {
      console.error(`Error listing tags: ${error.message}`);
      return [];
    }
  }
}

// CLI Interface
function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  // Check for dry-run flag
  const dryRunIndex = args.indexOf('--dry-run');
  const isDryRun = dryRunIndex !== -1;
  if (isDryRun) {
    args.splice(dryRunIndex, 1); // Remove --dry-run from args
  }
  
  const synchronizer = new VersionSynchronizer();
  
  try {
    switch (command) {
      case 'check':
        synchronizer.areVersionsSynced();
        break;
        
      case 'sync':
        const targetVersion = args[1];
        if (!targetVersion) {
          throw new Error('Please provide target version: npm run sync-versions sync 2.7.1');
        }
        synchronizer.setVersion(targetVersion, false, null, isDryRun); // Don't create tag when syncing
        break;
        
      case 'bump':
        const incrementType = args[1] || 'patch';
        const tagMessage = args[2];
        synchronizer.bump(incrementType, true, tagMessage, isDryRun);
        break;
        
      case 'set':
        const version = args[1];
        const message = args[2];
        if (!version) {
          throw new Error('Please provide version: npm run sync-versions set 2.8.0');
        }
        synchronizer.setVersion(version, true, message, isDryRun);
        break;
        
      case 'tag':
        const { versions } = synchronizer.areVersionsSynced();
        const currentVersion = versions.styleguide.version;
        const customMessage = args[1];
        synchronizer.createGitTag(currentVersion, customMessage);
        break;
        
      case 'list-tags':
        synchronizer.listTags();
        break;
        
      default:
        console.log(`
🔄 htwoo-core Version Synchronizer

Usage:
  npm run sync-versions <command> [options]

Commands:
  check               Check if versions are synchronized
  sync <version>      Sync both packages to specific version (no tag)
  bump [type] [msg]   Bump version (patch|minor|major) and create tag
  set <version> [msg] Set specific version and create tag
  tag [message]       Create tag for current version
  list-tags          List existing htwoo-core tags

Options:
  --dry-run          Preview changes without making them (for bump, set, sync)

Examples:
  npm run sync-versions check
  npm run sync-versions bump minor "feat: new navigation component"
  npm run sync-versions bump patch --dry-run
  npm run sync-versions set 2.8.0 "major: breaking changes" --dry-run
  npm run sync-versions sync 2.7.1
  npm run sync-versions tag "release: stable version"
        `);
        break;
    }
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = VersionSynchronizer;
