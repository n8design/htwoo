/**
 * HTWOO Core Package Validator
 * 
 * This script validates the integrity and correctness of the built package.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const packagePath = path.resolve(__dirname, '../packages/htwoo-core');
const requiredFiles = [
  'dist/css/htwoo.min.css',
  'dist/js/umd/htwoo.min.js',
  'dist/js/cjs/htwoo.min.js',
  'dist/js/amd/htwoo.min.js',
  'lib/js/main.d.ts',
  'index.js',
  'index.d.ts',
  'package.json'
];
const forbiddenPaths = [
  'lib/sass/00-base/fonts'
];

// Validation functions
function validateRequiredFiles() {
  console.log('Validating required files...');
  const missing = [];
  
  for (const file of requiredFiles) {
    const fullPath = path.join(packagePath, file);
    if (!fs.existsSync(fullPath)) {
      missing.push(file);
    }
  }
  
  if (missing.length > 0) {
    console.error('❌ Missing required files:');
    missing.forEach(file => console.error(`   - ${file}`));
    return false;
  }
  
  console.log('✅ All required files present');
  return true;
}

function validateForbiddenPaths() {
  console.log('Validating forbidden paths...');
  const found = [];
  
  for (const forbiddenPath of forbiddenPaths) {
    const fullPath = path.join(packagePath, forbiddenPath);
    if (fs.existsSync(fullPath)) {
      found.push(forbiddenPath);
    }
  }
  
  if (found.length > 0) {
    console.error('❌ Forbidden paths found:');
    found.forEach(file => console.error(`   - ${file}`));
    return false;
  }
  
  console.log('✅ No forbidden paths present');
  return true;
}

function validatePackageExports() {
  console.log('Validating package.json exports...');
  
  const packageJsonPath = path.join(packagePath, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    console.error('❌ package.json not found');
    return false;
  }
  
  const pkg = require(packageJsonPath);
  const invalidPaths = [];
  
  // Check main, module, types
  ['main', 'module', 'types'].forEach(field => {
    if (pkg[field]) {
      const fullPath = path.join(packagePath, pkg[field]);
      if (!fs.existsSync(fullPath)) {
        invalidPaths.push(`${field}: ${pkg[field]}`);
      }
    }
  });
  
  // Check exports
  if (pkg.exports) {
    function checkExportPath(exportPath) {
      if (typeof exportPath === 'string') {
        // Handle relative paths that start with ./
        const normalizedPath = exportPath.replace(/^\.\//, '');
        const fullPath = path.join(packagePath, normalizedPath);
        if (!fs.existsSync(fullPath)) {
          invalidPaths.push(exportPath);
        }
      } else if (typeof exportPath === 'object') {
        // Handle nested exports
        Object.values(exportPath).forEach(subPath => checkExportPath(subPath));
      }
    }
    
    Object.entries(pkg.exports).forEach(([key, value]) => {
      checkExportPath(value);
    });
  }
  
  if (invalidPaths.length > 0) {
    console.error('❌ Invalid paths in package.json:');
    invalidPaths.forEach(path => console.error(`   - ${path}`));
    return false;
  }
  
  console.log('✅ All package.json paths are valid');
  return true;
}

// Run validations
function runValidation() {
  console.log('🔍 Starting HTWOO Core package validation');
  console.log('----------------------------------------');
  
  const validFiles = validateRequiredFiles();
  const validPaths = validateForbiddenPaths();
  const validExports = validatePackageExports();
  
  console.log('----------------------------------------');
  if (validFiles && validPaths && validExports) {
    console.log('✅ Package validation successful!');
    return true;
  } else {
    console.error('❌ Package validation failed!');
    return false;
  }
}

// Execute validation if run directly
if (require.main === module) {
  const success = runValidation();
  process.exit(success ? 0 : 1);
}

module.exports = runValidation;
