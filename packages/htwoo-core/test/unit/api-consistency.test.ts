// TypeScript conversion of JavaScript test file
import { describe, test, expect, vi } from 'vitest';
import fs from 'fs';
import path from 'path';

// Mock modules to avoid browser-specific APIs
vi.mock('../lib/js/_util.js', () => ({
  addClass: vi.fn(),
  removeClass: vi.fn(),
  toggleClass: vi.fn(),
  pnpSelect: class {},
  customElement: {}
}));

describe('API consistency', () => {
  test('should have correct index.js structure', () => {
    // Instead of importing, read the file content directly
    const indexPath = path.resolve(__dirname, '../../index.js');
    expect(fs.existsSync(indexPath)).toBe(true);
    
    const content = fs.readFileSync(indexPath, 'utf-8');
    
    // Check if the index.js has the expected content structure
    expect(content.includes('htwoo')).toBe(true);
    expect(content.includes('dialog')).toBe(true);
    expect(content.includes('nav')).toBe(true);
    expect(content.includes('overflow')).toBe(true);
    expect(content.includes('pivot')).toBe(true);
    expect(content.includes('select')).toBe(true);
    expect(content.includes('table')).toBe(true);
  });

  test('index.d.ts should match the structure of index.js', () => {
    // Read the index.d.ts file
    const dtsContent = fs.readFileSync(
      path.resolve(__dirname, '../../index.d.ts'), 
      'utf8'
    );
    
    // Check for key module exports
    expect(dtsContent).toMatch(/import\s+\*\s+as\s+htwoo/);
    expect(dtsContent).toMatch(/import\s+\*\s+as\s+dialog/);
    expect(dtsContent).toMatch(/import\s+\*\s+as\s+nav/);
    expect(dtsContent).toMatch(/import\s+\*\s+as\s+table/);
    expect(dtsContent).toMatch(/import\s+\*\s+as\s+pivot/);
    expect(dtsContent).toMatch(/import\s+\*\s+as\s+select/);
    expect(dtsContent).toMatch(/import\s+\*\s+as\s+overflow/);
    
    // Check for export statement
    expect(dtsContent).toMatch(/export\s+\{\s+htwoo,\s+dialog,\s+nav,\s+overflow,\s+pivot,\s+select,\s+table/);
  });
  
  test('each component should have both JS and declaration files', () => {
    const libJsPath = path.resolve(__dirname, '../../lib/js');
    
    // List of core components that should have both .js and .d.ts files
    const components = [
      'main',
      'dialog',
      'nav',
      'table',
      'pivot',
      'select',
      'overflow',
      '_util'
    ];
    
    for (const component of components) {
      const jsExists = fs.existsSync(path.join(libJsPath, `${component}.js`));
      const dtsExists = fs.existsSync(path.join(libJsPath, `${component}.d.ts`));
      
      expect(jsExists).toBe(true);
      expect(dtsExists).toBe(true);
    }
  });
  
  test('module exports should match declaration exports', () => {
    // Check main.js against main.d.ts
    const mainJs = fs.readFileSync(
      path.resolve(__dirname, '../../lib/js/main.js'),
      'utf8'
    );
    
    const mainDts = fs.readFileSync(
      path.resolve(__dirname, '../../lib/js/main.d.ts'),
      'utf8'
    );
    
    // If main.js imports dialog, then main.d.ts should also import dialog
    if (mainJs.includes('import') && mainJs.includes('dialog.js')) {
      expect(mainDts).toMatch(/dialog/);
    }
    
    // If main.js imports nav, then main.d.ts should also import nav
    if (mainJs.includes('import') && mainJs.includes('nav.js')) {
      expect(mainDts).toMatch(/nav/);
    }
  });
});
