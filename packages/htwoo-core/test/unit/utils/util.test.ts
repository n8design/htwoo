import { describe, test, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

// Example of a TypeScript utility test
describe('Utility functions', () => {
  test('should have CSS files in dist directory', () => {
    const cssDistPath = path.resolve(__dirname, '../../../dist/css');
    expect(fs.existsSync(cssDistPath)).toBe(true);
    
    // Check for main CSS file
    const mainCssFile = path.join(cssDistPath, 'htwoo.min.css');
    expect(fs.existsSync(mainCssFile)).toBe(true);
  });
  
  test('should have correct file structure', () => {
    const indexPath = path.resolve(__dirname, '../../../index.js');
    expect(fs.existsSync(indexPath)).toBe(true);
    
    const content = fs.readFileSync(indexPath, 'utf-8');
    
    // Check if the index.js has the expected content structure
    expect(content.includes('htwoo')).toBe(true);
  });
  
  // Type-safe utility function testing example
  interface TestObject {
    id: string;
    value: number;
    metadata?: {
      created: Date;
      updated?: Date;
    };
  }
  
  test('example of TypeScript type checking in tests', () => {
    // This is just a demonstration of TypeScript usage in tests
    const testObj: TestObject = {
      id: 'test-123',
      value: 42,
      metadata: {
        created: new Date()
      }
    };
    
    expect(testObj.id).toBe('test-123');
    expect(testObj.value).toBe(42);
    expect(testObj.metadata?.created).toBeInstanceOf(Date);
  });
});
