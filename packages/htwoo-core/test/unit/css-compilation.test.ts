// TypeScript conversion of JavaScript test file
import { describe, test, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('CSS compilation', () => {
  test('main CSS file should exist and have content', () => {
    const cssPath = path.resolve(__dirname, '../../dist/css/htwoo.min.css');
    
    // Check if file exists
    expect(fs.existsSync(cssPath)).toBe(true);
    
    // Check if file has content
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    expect(cssContent.length).toBeGreaterThan(0);
  });
  
  test('main CSS should include component styles', () => {
    const cssPath = path.resolve(__dirname, '../../dist/css/htwoo.min.css');
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    
    // Check for component-specific CSS classes
    const components = [
      '.hoo-dialog',
      '.hoo-pivot',
      '.hoo-table',
      '.hoo-select',
      '.hoo-overflow',
      '.hoo-nav'
    ];
    
    components.forEach(component => {
      // We're testing a minified file, so we'll be lenient in our matching
      // The class should be present in some form, possibly without spaces
      expect(cssContent.includes(component.replace(' ', '')) || 
             cssContent.includes(component)).toBe(true);
    });
  });
  
  test('SCSS source should be properly structured', () => {
    const sassDir = path.resolve(__dirname, '../../lib/sass');
    
    // Check if main SCSS file exists
    expect(fs.existsSync(path.join(sassDir, '_htwoo-core.scss'))).toBe(true);
    
    // Check for core directories
    expect(fs.existsSync(path.join(sassDir, '00-base'))).toBe(true);
    
    // Check that no font files are included
    expect(!fs.existsSync(path.join(sassDir, '00-base/fonts'))).toBe(true);
  });
  
  test('_htwoo-core.scss should not import fonts', () => {
    const mainScssPath = path.resolve(__dirname, '../../lib/sass/_htwoo-core.scss');
    const scssContent = fs.readFileSync(mainScssPath, 'utf8');
    
    // Should not contain font imports
    expect(scssContent.includes('@use "00-base/core"')).toBe(true);
    expect(scssContent.includes('@use "00-base/fonts/base-fonts"')).toBe(false);
  });
});
