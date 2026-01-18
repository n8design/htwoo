// TypeScript test for overflow component
import { describe, test, expect, beforeEach } from 'vitest';

interface OverflowComponent {
  container: HTMLElement;
  content: HTMLElement;
  toggle: HTMLButtonElement;
}

describe('Overflow component', () => {
  // Mock the overflow initialization function
  function initOverflowElementsMock(): void {
    // Find all overflow containers
    const overflowContainers = document.querySelectorAll<HTMLElement>('.hoo-overflow');
    
    // Initialize each overflow container
    overflowContainers.forEach((container: HTMLElement) => {
      const content = container.querySelector('.hoo-overflow-content') as HTMLElement;
      const toggle = container.querySelector('.hoo-overflow-toggle') as HTMLButtonElement;
      
      // Add click handler to toggle
      if (toggle && content) {
        toggle.addEventListener('click', () => {
          const isExpanded = content.getAttribute('aria-expanded') === 'true';
          content.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
          toggle.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
          container.classList.toggle('hoo-overflow-expanded', !isExpanded);
        });
      }
    });
  }

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="hoo-overflow">
        <div class="hoo-overflow-content" aria-expanded="false">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div class="hoo-overflow-item">Item 4</div>
          <div class="hoo-overflow-item">Item 5</div>
        </div>
        <button class="hoo-overflow-toggle" aria-expanded="false">
          <span class="hoo-overflow-icon">More</span>
        </button>
      </div>
    `;
  });

  test('should initialize overflow component', () => {
    initOverflowElementsMock();
    const element = document.querySelector('.hoo-overflow') as HTMLElement;
    expect(element).toBeDefined();
    expect(element).toBeInstanceOf(HTMLElement);
  });

  test('should toggle overflow content when clicked', () => {
    initOverflowElementsMock();
    
    const container = document.querySelector('.hoo-overflow') as HTMLElement;
    const content = document.querySelector('.hoo-overflow-content') as HTMLElement;
    const toggle = document.querySelector('.hoo-overflow-toggle') as HTMLButtonElement;
    
    // Initially collapsed
    expect(content?.getAttribute('aria-expanded')).toBe('false');
    expect(toggle?.getAttribute('aria-expanded')).toBe('false');
    expect(container?.classList.contains('hoo-overflow-expanded')).toBe(false);
    
    // Click to expand
    toggle?.click();
    
    // Should be expanded
    expect(content?.getAttribute('aria-expanded')).toBe('true');
    expect(toggle?.getAttribute('aria-expanded')).toBe('true');
    expect(container?.classList.contains('hoo-overflow-expanded')).toBe(true);
    
    // Click to collapse
    toggle?.click();
    
    // Should be collapsed again
    expect(content?.getAttribute('aria-expanded')).toBe('false');
    expect(toggle?.getAttribute('aria-expanded')).toBe('false');
    expect(container?.classList.contains('hoo-overflow-expanded')).toBe(false);
  });
  
  test('should handle multiple overflow containers independently', () => {
    // Add a second overflow container
    document.body.innerHTML += `
      <div class="hoo-overflow" id="second-overflow">
        <div class="hoo-overflow-content" aria-expanded="false">
          <div>Item A</div>
          <div>Item B</div>
          <div class="hoo-overflow-item">Item C</div>
        </div>
        <button class="hoo-overflow-toggle" aria-expanded="false">
          <span class="hoo-overflow-icon">More</span>
        </button>
      </div>
    `;
    
    initOverflowElementsMock();
    
    const containers = document.querySelectorAll<HTMLElement>('.hoo-overflow');
    const firstContainer = containers[0];
    const secondContainer = containers[1];
    
    const firstToggle = firstContainer?.querySelector('.hoo-overflow-toggle') as HTMLButtonElement;
    const secondToggle = secondContainer?.querySelector('.hoo-overflow-toggle') as HTMLButtonElement;
    
    // Toggle first container
    firstToggle?.click();
    expect(firstContainer?.classList.contains('hoo-overflow-expanded')).toBe(true);
    expect(secondContainer?.classList.contains('hoo-overflow-expanded')).toBe(false);
    
    // Toggle second container
    secondToggle?.click();
    expect(firstContainer?.classList.contains('hoo-overflow-expanded')).toBe(true);
    expect(secondContainer?.classList.contains('hoo-overflow-expanded')).toBe(true);
    
    // Toggle first container again
    firstToggle?.click();
    expect(firstContainer?.classList.contains('hoo-overflow-expanded')).toBe(false);
    expect(secondContainer?.classList.contains('hoo-overflow-expanded')).toBe(true);
  });
});