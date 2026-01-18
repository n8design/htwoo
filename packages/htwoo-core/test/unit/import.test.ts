// TypeScript conversion of JavaScript test file
import { describe, test, expect, vi } from 'vitest';
import fs from 'fs';
import path from 'path';

// Mock browser-specific features
vi.mock('../lib/js/_util.js', () => {
  return {
    pnpSelect: class extends Object {},
    customElement: {},
    addClass: vi.fn(),
    removeClass: vi.fn(),
    toggleClass: vi.fn()
  };
});

describe('Module structure', () => {
  test('should have correct index.js file', () => {
    const indexPath = path.resolve(__dirname, '../../index.js');
    expect(fs.existsSync(indexPath)).toBe(true);
    
    const content = fs.readFileSync(indexPath, 'utf-8');
    expect(content).toContain('require');
    expect(content).toContain('htwoo');
    expect(content).toContain('dialog');
    expect(content).toContain('nav');
    expect(content).toContain('overflow');
    expect(content).toContain('pivot');
    expect(content).toContain('select');
    expect(content).toContain('table');
  });

  test('should have all component source files', () => {
    const libJsPath = path.resolve(__dirname, '../../lib/js');
    
    // Check for existence of core component files
    const componentFiles = [
      'dialog.js',
      'nav.js',
      'table.js',
      'pivot.js',
      'select.js',
      'overflow.js'
    ];
    
    componentFiles.forEach(file => {
      expect(fs.existsSync(path.join(libJsPath, file))).toBe(true);
    });
  });
});
