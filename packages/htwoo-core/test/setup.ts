// Test setup file for Vitest
import { beforeEach, afterEach, vi } from 'vitest';

// Setup global DOM environment
beforeEach(() => {
  // Mock any browser APIs that might be missing in JSDOM
  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));
  
  // Mock custom elements define if it doesn't exist
  if (!window.customElements) {
    (window as any).customElements = {
      define: vi.fn(),
      get: vi.fn(),
      getName: vi.fn(),
      upgrade: vi.fn(),
      whenDefined: vi.fn(() => Promise.resolve(class {} as CustomElementConstructor))
    };
  }
});

afterEach(() => {
  // Clean up after each test
  document.body.innerHTML = '';
  vi.resetAllMocks();
});
