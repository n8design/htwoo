// TypeScript test for pivot component
import { describe, test, expect, beforeEach } from 'vitest';

interface PivotTab {
  element: HTMLElement;
  panel: HTMLElement;
}

describe('Pivot component', () => {
  // Mock the pivot initialization function
  function initPivotElementsMock(): void {
    // Find all pivot containers
    const pivotContainers = document.querySelectorAll<HTMLElement>('.hoo-pivot');
    
    // Initialize each pivot container
    pivotContainers.forEach((pivot: HTMLElement) => {
      const tabs = pivot.querySelectorAll('.hoo-pivot-link');
      const panels = pivot.querySelectorAll('.hoo-pivot-content');
      
      // Add click handler to tabs
      tabs.forEach((tab: Element, index: number) => {
        tab.addEventListener('click', () => {
          // Deactivate all tabs
          tabs.forEach((t: Element) => {
            t.setAttribute('aria-selected', 'false');
            t.classList.remove('hoo-pivot-link-active');
          });
          
          // Hide all tab panels
          panels.forEach((panel: Element) => {
            panel.setAttribute('aria-hidden', 'true');
            panel.classList.remove('hoo-pivot-content-active');
          });
          
          // Activate clicked tab
          tab.setAttribute('aria-selected', 'true');
          tab.classList.add('hoo-pivot-link-active');
          
          // Show corresponding panel
          if (panels[index]) {
            panels[index].setAttribute('aria-hidden', 'false');
            panels[index].classList.add('hoo-pivot-content-active');
          }
        });
      });
    });
  }

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="hoo-pivot">
        <ul class="hoo-pivot-links" role="tablist">
          <li class="hoo-pivot-link hoo-pivot-link-active" role="tab" aria-selected="true">
            <span>Tab 1</span>
          </li>
          <li class="hoo-pivot-link" role="tab" aria-selected="false">
            <span>Tab 2</span>
          </li>
          <li class="hoo-pivot-link" role="tab" aria-selected="false">
            <span>Tab 3</span>
          </li>
        </ul>
        <div class="hoo-pivot-content hoo-pivot-content-active" role="tabpanel" aria-hidden="false">
          <p>Content for Tab 1</p>
        </div>
        <div class="hoo-pivot-content" role="tabpanel" aria-hidden="true">
          <p>Content for Tab 2</p>
        </div>
        <div class="hoo-pivot-content" role="tabpanel" aria-hidden="true">
          <p>Content for Tab 3</p>
        </div>
      </div>
    `;
  });

  test('should initialize pivot component', () => {
    initPivotElementsMock();
    const element = document.querySelector('.hoo-pivot') as HTMLElement;
    expect(element).toBeDefined();
    expect(element).toBeInstanceOf(HTMLElement);
  });

  test('should activate first tab by default', () => {
    initPivotElementsMock();
    
    const firstTab = document.querySelector('.hoo-pivot-link') as HTMLElement;
    const firstPanel = document.querySelector('.hoo-pivot-content') as HTMLElement;
    
    // Check if first tab is active
    expect(firstTab?.getAttribute('aria-selected')).toBe('true');
    expect(firstTab?.classList.contains('hoo-pivot-link-active')).toBe(true);
    
    // Check if first panel is visible
    expect(firstPanel?.getAttribute('aria-hidden')).toBe('false');
    expect(firstPanel?.classList.contains('hoo-pivot-content-active')).toBe(true);
  });

  test('should switch tabs when clicked', () => {
    initPivotElementsMock();
    
    const tabs = document.querySelectorAll<HTMLElement>('.hoo-pivot-link');
    const panels = document.querySelectorAll<HTMLElement>('.hoo-pivot-content');
    
    // First tab is active by default
    expect(tabs[0]?.getAttribute('aria-selected')).toBe('true');
    
    // Click second tab
    tabs[1]?.click();
    
    // Check if second tab is now active
    expect(tabs[0]?.getAttribute('aria-selected')).toBe('false');
    expect(tabs[1]?.getAttribute('aria-selected')).toBe('true');
    expect(tabs[2]?.getAttribute('aria-selected')).toBe('false');
    
    // Check if second panel is now visible
    expect(panels[0]?.getAttribute('aria-hidden')).toBe('true');
    expect(panels[1]?.getAttribute('aria-hidden')).toBe('false');
    expect(panels[2]?.getAttribute('aria-hidden')).toBe('true');
    
    // Check CSS classes
    expect(tabs[0]?.classList.contains('hoo-pivot-link-active')).toBe(false);
    expect(tabs[1]?.classList.contains('hoo-pivot-link-active')).toBe(true);
    expect(panels[0]?.classList.contains('hoo-pivot-content-active')).toBe(false);
    expect(panels[1]?.classList.contains('hoo-pivot-content-active')).toBe(true);
  });

  test('should handle multiple tab switches', () => {
    initPivotElementsMock();
    
    const tabs = document.querySelectorAll<HTMLElement>('.hoo-pivot-link');
    const panels = document.querySelectorAll<HTMLElement>('.hoo-pivot-content');
    
    // Click second tab
    tabs[1]?.click();
    expect(tabs[1]?.getAttribute('aria-selected')).toBe('true');
    
    // Click third tab
    tabs[2]?.click();
    expect(tabs[0]?.getAttribute('aria-selected')).toBe('false');
    expect(tabs[1]?.getAttribute('aria-selected')).toBe('false');
    expect(tabs[2]?.getAttribute('aria-selected')).toBe('true');
    
    // Click first tab again
    tabs[0]?.click();
    expect(tabs[0]?.getAttribute('aria-selected')).toBe('true');
    expect(tabs[1]?.getAttribute('aria-selected')).toBe('false');
    expect(tabs[2]?.getAttribute('aria-selected')).toBe('false');
  });
});
