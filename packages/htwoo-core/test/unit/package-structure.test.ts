// TypeScript conversion of JavaScript test file
import { describe, test, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Package structure', () => {
  const packageRoot = path.resolve(__dirname, '../..');
  
  test('should have required distribution files', () => {
    // CSS files
    expect(fs.existsSync(path.join(packageRoot, 'dist/css/htwoo.min.css'))).toBe(true);
    
    // JS bundles
    expect(fs.existsSync(path.join(packageRoot, 'dist/js/umd/htwoo.js'))).toBe(true);
    expect(fs.existsSync(path.join(packageRoot, 'dist/js/umd/htwoo.min.js'))).toBe(true);
    expect(fs.existsSync(path.join(packageRoot, 'dist/js/cjs/htwoo.js'))).toBe(true);
    expect(fs.existsSync(path.join(packageRoot, 'dist/js/cjs/htwoo.min.js'))).toBe(true);
    expect(fs.existsSync(path.join(packageRoot, 'dist/js/amd/htwoo.js'))).toBe(true);
    expect(fs.existsSync(path.join(packageRoot, 'dist/js/amd/htwoo.min.js'))).toBe(true);
  });
  
  test('should have component bundle files', () => {
    // Check for component bundles (in UMD format as an example)
    const componentFiles = [
      'htwoo.dialog.js',
      'htwoo.dialog.min.js',
      'htwoo.nav.js',
      'htwoo.nav.min.js',
      'htwoo.overflow.js',
      'htwoo.overflow.min.js',
      'htwoo.pivot.js',
      'htwoo.pivot.min.js',
      'htwoo.select.js',
      'htwoo.select.min.js',
      'htwoo.table.js',
      'htwoo.table.min.js'
    ];
    
    componentFiles.forEach(file => {
      expect(fs.existsSync(path.join(packageRoot, 'dist/js/umd', file))).toBe(true);
    });
  });
  
  test('should have source files', () => {
    // Core source files
    expect(fs.existsSync(path.join(packageRoot, 'lib/js/main.js'))).toBe(true);
    expect(fs.existsSync(path.join(packageRoot, 'lib/js/dialog.js'))).toBe(true);
    expect(fs.existsSync(path.join(packageRoot, 'lib/js/nav.js'))).toBe(true);
    expect(fs.existsSync(path.join(packageRoot, 'lib/js/table.js'))).toBe(true);
    expect(fs.existsSync(path.join(packageRoot, 'lib/js/pivot.js'))).toBe(true);
    expect(fs.existsSync(path.join(packageRoot, 'lib/js/select.js'))).toBe(true);
    expect(fs.existsSync(path.join(packageRoot, 'lib/js/overflow.js'))).toBe(true);
    
    // SCSS source files
    expect(fs.existsSync(path.join(packageRoot, 'lib/sass/_htwoo-core.scss'))).toBe(true);
  });
  
  test('should have TypeScript declarations', () => {
    // Main declaration file
    expect(fs.existsSync(path.join(packageRoot, 'lib/js/main.d.ts'))).toBe(true);
    
    // Component declaration files
    expect(fs.existsSync(path.join(packageRoot, 'lib/js/dialog.d.ts'))).toBe(true);
    expect(fs.existsSync(path.join(packageRoot, 'lib/js/nav.d.ts'))).toBe(true);
    expect(fs.existsSync(path.join(packageRoot, 'lib/js/table.d.ts'))).toBe(true);
    expect(fs.existsSync(path.join(packageRoot, 'lib/js/pivot.d.ts'))).toBe(true);
    expect(fs.existsSync(path.join(packageRoot, 'lib/js/select.d.ts'))).toBe(true);
    expect(fs.existsSync(path.join(packageRoot, 'lib/js/overflow.d.ts'))).toBe(true);
    
    // Package root declaration file
    expect(fs.existsSync(path.join(packageRoot, 'index.d.ts'))).toBe(true);
  });
  
  test('should not have font files', () => {
    // Should not have fonts directory
    expect(!fs.existsSync(path.join(packageRoot, 'lib/sass/00-base/fonts'))).toBe(true);
  });
  
  test('should have required package metadata', () => {
    // Load and check package.json
    const packageJsonPath = path.join(packageRoot, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Check required fields
    expect(packageJson.name).toBe('@n8d/htwoo-core');
    expect(typeof packageJson.version).toBe('string');
    expect(packageJson.main).toBe('dist/js/cjs/htwoo.js');
    expect(packageJson.module).toBe('dist/js/amd/htwoo.js');
    expect(packageJson.types).toBe('lib/js/main.d.ts');
    
    // Check exports configuration
    expect(packageJson.exports).toHaveProperty('.');
    expect(packageJson.exports).toHaveProperty('./css');
    expect(packageJson.exports).toHaveProperty('./sass');
    
    // Check files array
    expect(packageJson.files).toContain('dist');
    expect(packageJson.files).toContain('lib');
  });
});
