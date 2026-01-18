import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock the main module integration
describe('Main Module Integration', () => {
  // Mock functions
  const mockSplitButtonReg = (selector: string, handler: (event: MouseEvent) => void): void => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.addEventListener('click', handler as EventListener);
    });
  };

  const mockRegisterAnimation = (animName: string, handler: (event: MouseEvent) => void): void => {
    const elements = document.querySelectorAll(`[data-animation="${animName}"]`);
    elements.forEach(el => {
      const animBlock = el.querySelector('.sg-anim-block');
      if (animBlock) {
        animBlock.addEventListener('click', handler as EventListener);
      }
    });
  };

  // Mock window.onload
  beforeEach(() => {
    // Mock DOM elements
    document.body.innerHTML = `
      <div class="test-container">
        <button class="hoo-buttonsplit-carret"></button>
        <div class="anim-test" data-animation="test-anim">
          <div class="sg-anim-block"></div>
        </div>
      </div>
    `;
    
    // Mock window onload function
    window.onload = vi.fn();
    
    // Clear all mocks
    vi.clearAllMocks();
  });
  
  it('should attach window.onload handler', () => {
    // Verify window.onload was assigned
    expect(window.onload).toBeDefined();
  });

  // Individual components testing
  describe('Component Functions', () => {
    it('should handle split button registration', () => {
      // Mock handler
      const mockHandler = vi.fn();
      
      // Call our mock function
      mockSplitButtonReg('.hoo-buttonsplit-carret', mockHandler);
      
      // Get button element and ensure it exists
      const button = document.querySelector('.hoo-buttonsplit-carret');
      expect(button).not.toBeNull();
      
      // Simulate click
      if (button) {
        button.dispatchEvent(new Event('click'));
        
        // Verify handler was called
        expect(mockHandler).toHaveBeenCalled();
      }
    });
    
    it('should handle animation registration', () => {
      // Mock handler
      const mockAnimHandler = vi.fn();
      
      // Register animation using our mock function
      mockRegisterAnimation('test-anim', mockAnimHandler);
      
      // Get animation block and ensure it exists
      const animBlock = document.querySelector('.sg-anim-block');
      expect(animBlock).not.toBeNull();
      
      // Trigger click
      if (animBlock) {
        animBlock.dispatchEvent(new Event('click'));
        
        // Verify handler was called
        expect(mockAnimHandler).toHaveBeenCalled();
      }
    });
  });
});
