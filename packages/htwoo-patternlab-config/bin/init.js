#!/usr/bin/env node

/**
 * hTWOo Pattern Lab Configuration Initializer
 * Sets up Ice Build, Ice Hotreloader, and custom plugin system
 */

const fs = require('fs-extra');
const path = require('path');

const cwd = process.cwd();
const packageRoot = path.join(__dirname, '..');

console.log('\n🎨 hTWOo Pattern Lab Configuration Setup\n');

// Check if this is a Pattern Lab project
const hasPatternLabConfig = fs.existsSync(path.join(cwd, 'patternlab-config.json'));
const hasPackageJson = fs.existsSync(path.join(cwd, 'package.json'));

if (!hasPackageJson) {
  console.error('❌ Error: No package.json found in current directory.');
  console.error('   Please run this command from your project root.\n');
  process.exit(1);
}

console.log('✓ Found package.json');

// Create configuration files
const steps = [];

// 1. Copy Pattern Lab config (if not exists or --force flag)
const forceFlag = process.argv.includes('--force');

if (!hasPatternLabConfig || forceFlag) {
  steps.push({
    name: 'patternlab-config.json',
    action: () => {
      fs.copySync(
        path.join(packageRoot, 'templates/patternlab-config.json'),
        path.join(cwd, 'patternlab-config.json')
      );
    }
  });
} else {
  console.log('⚠️  patternlab-config.json already exists (use --force to overwrite)');
}

// 2. Copy Ice Build config
steps.push({
  name: 'ice.config.js',
  action: () => {
    fs.copySync(
      path.join(packageRoot, 'templates/ice.config.js'),
      path.join(cwd, 'ice.config.js')
    );
  }
});

// 3. Copy plugin to helpers/node/plugin-design
steps.push({
  name: 'plugin-design',
  action: () => {
    const pluginDest = path.join(cwd, 'helpers/node/plugin-design');
    fs.ensureDirSync(path.dirname(pluginDest));
    fs.copySync(
      path.join(packageRoot, 'plugin'),
      pluginDest
    );
  }
});

// 4. Update package.json scripts
steps.push({
  name: 'package.json scripts',
  action: () => {
    const packageJsonPath = path.join(cwd, 'package.json');
    const packageJson = require(packageJsonPath);
    const newScripts = require(path.join(packageRoot, 'templates/package-scripts.json'));

    packageJson.scripts = {
      ...packageJson.scripts,
      ...newScripts
    };

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  }
});

// Execute steps
console.log('\n📦 Installing configuration files:\n');

steps.forEach(step => {
  try {
    step.action();
    console.log(`  ✓ ${step.name}`);
  } catch (error) {
    console.error(`  ❌ ${step.name}: ${error.message}`);
  }
});

// Check dependencies
console.log('\n📋 Checking dependencies:\n');

const packageJsonPath = path.join(cwd, 'package.json');
const packageJson = require(packageJsonPath);
const allDeps = {
  ...packageJson.dependencies,
  ...packageJson.devDependencies
};

const requiredDeps = {
  '@n8d/ice-build': 'CSS compilation',
  '@n8d/ice-hotreloader': 'Live CSS reload',
  '@pattern-lab/cli': 'Pattern Lab CLI',
  '@pattern-lab/core': 'Pattern Lab Core',
  '@pattern-lab/engine-handlebars': 'Handlebars engine',
  '@pattern-lab/uikit-workshop': 'Pattern Lab UI',
  'npm-run-all': 'Parallel script execution',
  'fs-extra': 'File utilities'
};

const missingDeps = [];

Object.keys(requiredDeps).forEach(dep => {
  if (allDeps[dep]) {
    console.log(`  ✓ ${dep} - ${requiredDeps[dep]}`);
  } else {
    console.log(`  ❌ ${dep} - ${requiredDeps[dep]} (missing)`);
    missingDeps.push(dep);
  }
});

if (missingDeps.length > 0) {
  console.log('\n⚠️  Missing dependencies detected. Install them with:\n');
  console.log(`   npm install --save-dev ${missingDeps.join(' ')}\n`);
} else {
  console.log('\n✅ All dependencies are installed!\n');
}

// Success message
console.log('🎉 Configuration setup complete!\n');
console.log('Next steps:\n');
console.log('  1. Review and customize patternlab-config.json');
console.log('  2. Review and customize ice.config.js');
console.log('  3. Customize the plugin in helpers/node/plugin-design/dist/');
console.log('  4. Start development: npm start\n');
console.log('For more information, visit: https://lab.n8d.studio/htwoo/\n');
