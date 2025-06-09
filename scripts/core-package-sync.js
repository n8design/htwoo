#!/usr/bin/env node

/**
 * hTWOo Core Package Synchronization Script
 * 
 * This script provides version coordination and build synchronization within the htwoo-core package.
 * It ensures that source and built versions remain synchronized and validates package consistency.
 * 
 * Note: htwoo-react is independently managed and does not participate in cross-package synchronization
 * as specified by the project maintainers.
 * 
 * Features:
 * - Source to build synchronization
 * - Package validation
 * - Git tag coordination
 * - Release branch management
 * 
 * Usage:
 *   node scripts/core-package-sync.js [command] [options]
 * 
 * Commands:
 *   sync-core     - Synchronize htwoo-core source and built versions
 *   check-sync    - Check synchronization status
 *   plan-sync     - Show what would be synchronized
 *   bump-core     - Bump htwoo-core version
 *   status        - Show current state of htwoo-core package
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const semver = require('semver');

// ANSI color codes for terminal output
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m'
};

// Helper functions for colored output
const log = {
    info: (msg) => console.log(`${colors.blue}ℹ️  ${msg}${colors.reset}`),
    success: (msg) => console.log(`${colors.green}✅ ${msg}${colors.reset}`),
    warning: (msg) => console.log(`${colors.yellow}⚠️  ${msg}${colors.reset}`),
    error: (msg) => console.log(`${colors.red}❌ ${msg}${colors.reset}`),
    title: (msg) => console.log(`${colors.cyan}${colors.bright}=== ${msg} ===${colors.reset}`),
    section: (msg) => console.log(`${colors.magenta}📋 ${msg}${colors.reset}`)
};

// Project paths
const WORKSPACE_ROOT = process.cwd();
const HTWOO_CORE_PATH = path.join(WORKSPACE_ROOT, 'htwoo-core');
const PACKAGES_CORE_PATH = path.join(WORKSPACE_ROOT, 'packages', 'htwoo-core');

/**
 * Read and parse package.json file
 */
function readPackageJson(packagePath) {
    try {
        const packageJsonPath = path.join(packagePath, 'package.json');
        const content = fs.readFileSync(packageJsonPath, 'utf8');
        return {
            path: packageJsonPath,
            data: JSON.parse(content)
        };
    } catch (error) {
        log.error(`Failed to read package.json from ${packagePath}: ${error.message}`);
        return null;
    }
}

/**
 * Write package.json file
 */
function writePackageJson(packagePath, data) {
    try {
        fs.writeFileSync(packagePath, JSON.stringify(data, null, 2) + '\n');
        return true;
    } catch (error) {
        log.error(`Failed to write package.json to ${packagePath}: ${error.message}`);
        return false;
    }
}

/**
 * Execute shell command with error handling
 */
function execCommand(command, options = {}) {
    try {
        const result = execSync(command, { 
            encoding: 'utf8', 
            stdio: options.silent ? 'pipe' : 'inherit',
            ...options 
        });
        return { success: true, output: result };
    } catch (error) {
        return { 
            success: false, 
            error: error.message,
            output: error.stdout || ''
        };
    }
}

/**
 * Get current git branch
 */
function getCurrentBranch() {
    const result = execCommand('git branch --show-current', { silent: true });
    return result.success ? result.output.trim() : 'unknown';
}

/**
 * Check if working directory is clean
 */
function isWorkingDirectoryClean() {
    const result = execCommand('git status --porcelain', { silent: true });
    return result.success && result.output.trim() === '';
}

/**
 * Get package information for htwoo-core
 */
function getPackageInfo() {
    const coreSource = readPackageJson(HTWOO_CORE_PATH);
    const coreBuilt = readPackageJson(PACKAGES_CORE_PATH);

    return {
        core: {
            source: coreSource,
            built: coreBuilt,
            version: coreSource?.data?.version || 'unknown'
        }
    };
}

/**
 * Show current status of htwoo-core package
 */
function showStatus() {
    log.title('hTWOo Core Package Status Report');
    
    const packages = getPackageInfo();
    const branch = getCurrentBranch();
    const isClean = isWorkingDirectoryClean();
    
    log.section('Git Status');
    console.log(`   Branch: ${branch}`);
    console.log(`   Working Directory: ${isClean ? 'Clean' : 'Has uncommitted changes'}`);
    console.log();
    
    log.section('Package Versions');
    console.log(`   htwoo-core (source):  ${packages.core.version}`);
    
    if (packages.core.built) {
        console.log(`   htwoo-core (built):   ${packages.core.built.data.version}`);
    }
    console.log();
    
    log.section('Synchronization Status');
    if (packages.core.built) {
        const versionsMatch = packages.core.version === packages.core.built.data.version;
        if (versionsMatch) {
            log.success('Source and built versions are synchronized');
        } else {
            log.warning('Source and built versions differ');
            console.log(`   Version difference: ${packages.core.version} (source) vs ${packages.core.built.data.version} (built)`);
        }
    } else {
        log.warning('Built package not found - run build first');
    }
    
    console.log();
}

/**
 * Check synchronization status of htwoo-core package
 */
function checkSync() {
    log.title('hTWOo Core Synchronization Check');
    
    const packages = getPackageInfo();
    const issues = [];
    
    // Built vs source comparison
    if (packages.core.built && packages.core.source.data.version !== packages.core.built.data.version) {
        issues.push({
            type: 'core_build_outdated',
            description: `Core built version (${packages.core.built.data.version}) differs from source (${packages.core.source.data.version})`
        });
    }
    
    if (!packages.core.built) {
        issues.push({
            type: 'missing_build',
            description: 'Built package not found - run build to generate packages/htwoo-core'
        });
    }
    
    if (issues.length === 0) {
        log.success('hTWOo Core package is properly synchronized');
        return true;
    } else {
        log.warning(`Found ${issues.length} synchronization issue(s):`);
        issues.forEach((issue, index) => {
            console.log(`   ${index + 1}. [${issue.type}] ${issue.description}`);
        });
        return false;
    }
}

/**
 * Plan synchronization changes for htwoo-core
 */
function planSync(targetVersion = null) {
    log.title('hTWOo Core Synchronization Plan');
    
    const packages = getPackageInfo();
    const currentCoreVersion = packages.core.version;
    
    // Determine target version
    if (!targetVersion) {
        targetVersion = currentCoreVersion;
    }
    
    log.section('Current State');
    console.log(`   Core source version: ${currentCoreVersion}`);
    if (packages.core.built) {
        console.log(`   Core built version:  ${packages.core.built.data.version}`);
    } else {
        console.log(`   Core built version:  Not found`);
    }
    console.log();
    
    log.section('Planned Changes');
    console.log(`   Target version: ${targetVersion}`);
    
    const changes = [];
    
    if (currentCoreVersion !== targetVersion) {
        changes.push(`Update htwoo-core source: ${currentCoreVersion} → ${targetVersion}`);
    }
    
    if (packages.core.built && packages.core.built.data.version !== targetVersion) {
        changes.push(`Rebuild required to sync built version`);
    }
    
    if (changes.length === 0) {
        log.success('No changes needed - package is already synchronized');
    } else {
        changes.forEach((change, index) => {
            console.log(`   ${index + 1}. ${change}`);
        });
    }
    
    console.log();
    return changes;
}

/**
 * Synchronize htwoo-core source to target version
 */
function syncCore(targetVersion = null) {
    log.title('Synchronizing hTWOo Core Package');
    
    const packages = getPackageInfo();
    
    if (!targetVersion) {
        targetVersion = packages.core.version;
        log.info(`Using current version as target: ${targetVersion}`);
    }
    
    // Validate target version
    if (!semver.valid(targetVersion)) {
        log.error(`Invalid target version: ${targetVersion}`);
        return false;
    }
    
    const changes = planSync(targetVersion);
    if (changes.length === 0) {
        log.success('Package is already at target version');
        return true;
    }
    
    log.info('Applying synchronization changes...');
    
    // Update htwoo-core if needed
    if (packages.core.version !== targetVersion) {
        log.info(`Updating htwoo-core to ${targetVersion}`);
        packages.core.source.data.version = targetVersion;
        if (!writePackageJson(packages.core.source.path, packages.core.source.data)) {
            return false;
        }
    }
    
    log.success('Synchronization completed successfully');
    
    // Suggest next steps
    log.section('Next Steps');
    console.log('   1. Run build: npm run build:core');
    console.log('   2. Run tests: npm run test');
    console.log('   3. Commit changes: git add . && git commit -m "chore: update htwoo-core version"');
    console.log(`   4. Create tag: git tag v${targetVersion}-core`);
    
    return true;
}

/**
 * Bump htwoo-core package version
 */
function bumpCore(releaseType = 'patch') {
    log.title(`Bumping hTWOo Core Package (${releaseType})`);
    
    const packages = getPackageInfo();
    const currentVersion = packages.core.version;
    
    // Calculate new version
    const newVersion = semver.inc(currentVersion, releaseType);
    if (!newVersion) {
        log.error(`Failed to calculate new ${releaseType} version from ${currentVersion}`);
        return false;
    }
    
    log.info(`Bumping from ${currentVersion} to ${newVersion}`);
    
    return syncCore(newVersion);
}

/**
 * Show help information
 */
function showHelp() {
    console.log(`
hTWOo Core Package Synchronization Script

USAGE:
    node scripts/core-package-sync.js [command] [options]

COMMANDS:
    status        Show current status of htwoo-core package
    check-sync    Check synchronization status
    plan-sync     Show what would be synchronized (dry run)
    sync-core     Synchronize htwoo-core source to target version
    bump-core     Bump htwoo-core version (patch|minor|major)

OPTIONS:
    --version=VERSION    Target version for synchronization
    --type=TYPE         Release type for bump-core (patch|minor|major)
    --help, -h          Show this help message

EXAMPLES:
    node scripts/core-package-sync.js status
    node scripts/core-package-sync.js check-sync
    node scripts/core-package-sync.js sync-core --version=2.8.0
    node scripts/core-package-sync.js bump-core --type=minor

WORKFLOW:
    1. Check current status: status
    2. Plan changes: plan-sync
    3. Apply synchronization: sync-core
    4. Verify: check-sync
`);
}

// Parse command line arguments
function parseArgs() {
    const args = process.argv.slice(2);
    const command = args[0];
    const options = {};
    
    for (let i = 1; i < args.length; i++) {
        const arg = args[i];
        if (arg.startsWith('--')) {
            const [key, value] = arg.split('=');
            const optionName = key.substring(2);
            options[optionName] = value || true;
        }
    }
    
    return { command, options };
}

// Main execution
function main() {
    const { command, options } = parseArgs();
    
    if (options.help || options.h || command === 'help') {
        showHelp();
        return;
    }
    
    switch (command) {
        case 'status':
            showStatus();
            break;
            
        case 'check-sync':
            const isSync = checkSync();
            process.exit(isSync ? 0 : 1);
            break;
            
        case 'plan-sync':
            planSync(options.version);
            break;
            
        case 'sync-core':
            const success = syncCore(options.version);
            process.exit(success ? 0 : 1);
            break;
            
        case 'bump-core':
            const releaseType = options.type || 'patch';
            if (!['patch', 'minor', 'major'].includes(releaseType)) {
                log.error(`Invalid release type: ${releaseType}`);
                process.exit(1);
            }
            const bumpSuccess = bumpCore(releaseType);
            process.exit(bumpSuccess ? 0 : 1);
            break;
            
        default:
            if (command) {
                log.error(`Unknown command: ${command}`);
            } else {
                log.error('No command specified');
            }
            showHelp();
            process.exit(1);
    }
}

// Run if called directly
if (require.main === module) {
    main();
}

module.exports = {
    getPackageInfo,
    showStatus,
    checkSync,
    planSync,
    syncCore,
    bumpCore
};
