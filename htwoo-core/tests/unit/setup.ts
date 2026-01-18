import { beforeAll, afterAll, afterEach, vi } from 'vitest';
import { JSDOM } from 'jsdom';

// Create a virtual DOM environment for tests
beforeAll(() => {
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
    url: 'http://localhost',
    pretendToBeVisual: true,
    // Enable running scripts in the JSDOM instance
    runScripts: 'dangerously'
  });

  // Make DOM elements globally available
  global.window = dom.window as any;
  global.document = dom.window.document as Document;
  global.navigator = dom.window.navigator as Navigator;
  global.HTMLElement = dom.window.HTMLElement as typeof HTMLElement;
  global.Element = dom.window.Element as typeof Element;
  global.Node = dom.window.Node as typeof Node;
  global.NodeList = dom.window.NodeList as typeof NodeList;
  global.MouseEvent = dom.window.MouseEvent as typeof MouseEvent;
  global.Event = dom.window.Event as typeof Event;
  global.CustomEvent = dom.window.CustomEvent as typeof CustomEvent;
  
  // Mock HTML Dialog Element API (not fully supported in JSDOM)
  if (!('HTMLDialogElement' in dom.window)) {
    // Create a mock dialog class
    class MockHTMLDialogElement extends (dom.window as any).HTMLElement {
      open: boolean = false;
      
      show() {
        this.open = true;
        this.setAttribute('open', '');
      }
      
      showModal() {
        this.open = true;
        this.setAttribute('open', '');
      }
      
      close() {
        this.open = false;
        this.removeAttribute('open');
      }
    }
    
    // Add the class to global and window
    global.HTMLDialogElement = MockHTMLDialogElement as any;
    (dom.window as any).HTMLDialogElement = MockHTMLDialogElement;
    
    // Override createElement to return our mock for dialog elements
    const originalCreateElement = document.createElement;
    document.createElement = function(tagName: string) {
      if (tagName.toLowerCase() === 'dialog') {
        return new MockHTMLDialogElement();
      }
      return originalCreateElement.call(document, tagName);
    };
    
    // Process any existing dialog elements in the DOM to add our mock methods
    const existingDialogs = document.querySelectorAll('dialog');
    existingDialogs.forEach(dialog => {
      dialog.show = MockHTMLDialogElement.prototype.show;
      dialog.showModal = MockHTMLDialogElement.prototype.showModal;
      dialog.close = MockHTMLDialogElement.prototype.close;
    });
  }
  
  // Mock browser APIs
  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn()
  })) as unknown as typeof ResizeObserver;
  
  global.MutationObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn()
  })) as unknown as typeof MutationObserver;
  
  // Mock console methods to keep test output clean
  global.console = {
    ...console,
    log: vi.fn(),
    debug: vi.fn(),
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn()
  };
});

// Clean up DOM after each test
afterEach(() => {
  document.body.innerHTML = '';
  vi.clearAllMocks();
});

// Clean up after all tests
afterAll(() => {
  // Additional cleanup if needed
});
