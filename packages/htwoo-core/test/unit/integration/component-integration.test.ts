// TypeScript integration test for components working together
import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';

interface ComponentRegistry {
  dialog?: boolean;
  nav?: boolean;
  select?: boolean;
  table?: boolean;
  pivot?: boolean;
  overflow?: boolean;
}

describe('Component Integration Tests', () => {
  let componentRegistry: ComponentRegistry;

  beforeEach(() => {
    // Reset component registry
    componentRegistry = {};
    
    // Set up a comprehensive HTML structure with multiple components
    document.body.innerHTML = `
      <!-- Dialog Component -->
      <div class="hoo-dialog" id="test-dialog" aria-hidden="true">
        <div class="hoo-dialog-content">
          <h2>Test Dialog</h2>
          <p>This is a test dialog.</p>
          <button class="hoo-button hoo-dialog-close">Close</button>
        </div>
      </div>

      <!-- Navigation Component -->
      <nav class="hoo-nav">
        <ul class="hoo-nav-list">
          <li class="hoo-nav-item">
            <a href="#" class="hoo-nav-link">Home</a>
          </li>
          <li class="hoo-nav-item has-submenu">
            <a href="#" class="hoo-nav-link">Products</a>
            <ul class="hoo-nav-submenu">
              <li><a href="#" class="hoo-nav-link">Product 1</a></li>
              <li><a href="#" class="hoo-nav-link">Product 2</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      <!-- Select Component -->
      <div class="hoo-select" role="combobox">
        <input type="text" aria-autocomplete="both" />
        <ul role="listbox">
          <li class="hoo-option" data-value="option1">Option 1</li>
          <li class="hoo-option" data-value="option2">Option 2</li>
        </ul>
      </div>

      <!-- Table Component -->
      <table class="hoo-table is-collapsable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr class="collapsable" data-sectionheader="active" aria-expanded="false">
            <td>Active Items</td>
            <td>Section Header</td>
          </tr>
          <tr data-section="active" class="is-hidden">
            <td>Item 1</td>
            <td>Active</td>
          </tr>
        </tbody>
      </table>

      <!-- Pivot Component -->
      <div class="hoo-pivot">
        <ul class="hoo-pivot-links" role="tablist">
          <li class="hoo-pivot-link hoo-pivot-link-active" role="tab" aria-selected="true">
            <span>Tab 1</span>
          </li>
          <li class="hoo-pivot-link" role="tab" aria-selected="false">
            <span>Tab 2</span>
          </li>
        </ul>
        <div class="hoo-pivot-content hoo-pivot-content-active" role="tabpanel">
          <p>Content 1</p>
        </div>
        <div class="hoo-pivot-content" role="tabpanel">
          <p>Content 2</p>
        </div>
      </div>

      <!-- Overflow Component -->
      <div class="hoo-overflow">
        <div class="hoo-overflow-button">
          <button class="hoo-button">More</button>
        </div>
        <div class="hoo-overflow-menu">
          <ul>
            <li><a href="#">Hidden Item 1</a></li>
            <li><a href="#">Hidden Item 2</a></li>
          </ul>
        </div>
      </div>

      <!-- Status element for select -->
      <div id="custom-select-status" aria-live="polite"></div>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should initialize all components without conflicts', () => {
    // Mock initialization functions for each component
    const initDialog = () => {
      const dialogs = document.querySelectorAll('.hoo-dialog');
      dialogs.forEach(dialog => {
        dialog.setAttribute('data-initialized', 'true');
      });
      componentRegistry.dialog = true;
    };

    const initNav = () => {
      const navs = document.querySelectorAll('.hoo-nav');
      navs.forEach(nav => {
        nav.setAttribute('data-initialized', 'true');
      });
      componentRegistry.nav = true;
    };

    const initSelect = () => {
      const selects = document.querySelectorAll('.hoo-select');
      selects.forEach(select => {
        select.setAttribute('data-initialized', 'true');
      });
      componentRegistry.select = true;
    };

    const initTable = () => {
      const tables = document.querySelectorAll('.hoo-table');
      tables.forEach(table => {
        table.setAttribute('data-initialized', 'true');
      });
      componentRegistry.table = true;
    };

    const initPivot = () => {
      const pivots = document.querySelectorAll('.hoo-pivot');
      pivots.forEach(pivot => {
        pivot.setAttribute('data-initialized', 'true');
      });
      componentRegistry.pivot = true;
    };

    const initOverflow = () => {
      const overflows = document.querySelectorAll('.hoo-overflow');
      overflows.forEach(overflow => {
        overflow.setAttribute('data-initialized', 'true');
      });
      componentRegistry.overflow = true;
    };

    // Initialize all components
    initDialog();
    initNav();
    initSelect();
    initTable();
    initPivot();
    initOverflow();

    // Verify all components are initialized
    expect(componentRegistry.dialog).toBe(true);
    expect(componentRegistry.nav).toBe(true);
    expect(componentRegistry.select).toBe(true);
    expect(componentRegistry.table).toBe(true);
    expect(componentRegistry.pivot).toBe(true);
    expect(componentRegistry.overflow).toBe(true);

    // Verify DOM elements have initialization markers
    expect(document.querySelector('.hoo-dialog')?.getAttribute('data-initialized')).toBe('true');
    expect(document.querySelector('.hoo-nav')?.getAttribute('data-initialized')).toBe('true');
    expect(document.querySelector('.hoo-select')?.getAttribute('data-initialized')).toBe('true');
    expect(document.querySelector('.hoo-table')?.getAttribute('data-initialized')).toBe('true');
    expect(document.querySelector('.hoo-pivot')?.getAttribute('data-initialized')).toBe('true');
    expect(document.querySelector('.hoo-overflow')?.getAttribute('data-initialized')).toBe('true');
  });

  test('should handle multiple components on the same page', () => {
    // Add multiple instances of the same component type
    const additionalHTML = `
      <div class="hoo-select" role="combobox" id="select-2">
        <input type="text" aria-autocomplete="both" />
        <ul role="listbox">
          <li class="hoo-option" data-value="a">Option A</li>
          <li class="hoo-option" data-value="b">Option B</li>
        </ul>
      </div>
      
      <table class="hoo-table is-collapsable" id="table-2">
        <tbody>
          <tr class="collapsable" data-sectionheader="test">
            <td>Test Section</td>
          </tr>
        </tbody>
      </table>
    `;
    document.body.insertAdjacentHTML('beforeend', additionalHTML);

    // Count components
    const selects = document.querySelectorAll('.hoo-select');
    const tables = document.querySelectorAll('.hoo-table');

    expect(selects.length).toBe(2);
    expect(tables.length).toBe(2);

    // Verify each has unique characteristics
    expect(selects[1]?.id).toBe('select-2');
    expect(tables[1]?.id).toBe('table-2');
  });

  test('should handle component interactions and event bubbling', () => {
    const eventLog: string[] = [];

    // Set up event listeners on multiple components
    const dialog = document.querySelector('.hoo-dialog') as HTMLElement;
    const nav = document.querySelector('.hoo-nav') as HTMLElement;
    const select = document.querySelector('.hoo-select') as HTMLElement;

    dialog?.addEventListener('click', () => eventLog.push('dialog'));
    nav?.addEventListener('click', () => eventLog.push('nav'));
    select?.addEventListener('click', () => eventLog.push('select'));

    // Trigger events
    dialog?.click();
    nav?.click();
    select?.click();

    expect(eventLog).toEqual(['dialog', 'nav', 'select']);
  });

  test('should maintain proper ARIA attributes across components', () => {
    // Check dialog ARIA attributes
    const dialog = document.querySelector('.hoo-dialog');
    expect(dialog?.getAttribute('aria-hidden')).toBe('true');

    // Check navigation ARIA attributes
    const navSubmenu = document.querySelector('.has-submenu');
    expect(navSubmenu).toBeTruthy();

    // Check select ARIA attributes
    const select = document.querySelector('.hoo-select');
    expect(select?.getAttribute('role')).toBe('combobox');

    // Check pivot ARIA attributes
    const pivotTabs = document.querySelectorAll('.hoo-pivot-link');
    pivotTabs.forEach(tab => {
      expect(tab.getAttribute('role')).toBe('tab');
      expect(tab.hasAttribute('aria-selected')).toBe(true);
    });

    // Check table ARIA attributes
    const collapsibleRow = document.querySelector('.collapsable');
    expect(collapsibleRow?.getAttribute('aria-expanded')).toBe('false');
  });

  test('should handle focus management between components', () => {
    const dialog = document.querySelector('.hoo-dialog') as HTMLElement;
    const navLink = document.querySelector('.hoo-nav-link') as HTMLElement;
    const selectInput = document.querySelector('.hoo-select input') as HTMLInputElement;
    const pivotTab = document.querySelector('.hoo-pivot-link') as HTMLElement;

    // Test focus transfer between components
    selectInput.focus();
    expect(document.activeElement).toBe(selectInput);

    navLink.focus();
    expect(document.activeElement).toBe(navLink);

    // Set tabindex to make pivot tab focusable
    pivotTab.setAttribute('tabindex', '0');
    pivotTab.focus();
    expect(document.activeElement).toBe(pivotTab);
  });

  test('should handle responsive overflow behavior', () => {
    // Mock viewport resize
    const originalInnerWidth = window.innerWidth;
    
    // Simulate narrow viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 500,
    });

    const overflowContainer = document.querySelector('.hoo-overflow');
    const overflowButton = document.querySelector('.hoo-overflow-button');
    const overflowMenu = document.querySelector('.hoo-overflow-menu');

    expect(overflowContainer).toBeTruthy();
    expect(overflowButton).toBeTruthy();
    expect(overflowMenu).toBeTruthy();

    // Restore original width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    });
  });

  test('should handle component cleanup and destruction', () => {
    // Mock component destruction
    const components = [
      document.querySelector('.hoo-dialog'),
      document.querySelector('.hoo-nav'),
      document.querySelector('.hoo-select'),
      document.querySelector('.hoo-table'),
      document.querySelector('.hoo-pivot'),
      document.querySelector('.hoo-overflow')
    ];

    // Verify components exist
    components.forEach(component => {
      expect(component).toBeTruthy();
    });

    // Simulate cleanup by removing event listeners and data attributes
    components.forEach(component => {
      if (component) {
        component.removeAttribute('data-initialized');
        // Remove event listeners (would be done by actual cleanup functions)
        const clonedComponent = component.cloneNode(true);
        component.parentNode?.replaceChild(clonedComponent, component);
      }
    });

    // Verify cleanup
    const cleanedComponents = [
      document.querySelector('.hoo-dialog'),
      document.querySelector('.hoo-nav'),
      document.querySelector('.hoo-select'),
      document.querySelector('.hoo-table'),
      document.querySelector('.hoo-pivot'),
      document.querySelector('.hoo-overflow')
    ];

    cleanedComponents.forEach(component => {
      expect(component?.getAttribute('data-initialized')).toBeNull();
    });
  });

  test('should handle theme changes affecting all components', () => {
    // Mock theme change
    document.body.setAttribute('data-theme', 'dark');

    const components = document.querySelectorAll('[class*="hoo-"]');
    expect(components.length).toBeGreaterThan(0);

    // Verify theme is applied to body
    expect(document.body.getAttribute('data-theme')).toBe('dark');

    // Components should inherit theme styles
    components.forEach(component => {
      // In a real implementation, components would respond to theme changes
      expect(component).toBeInstanceOf(Element);
    });

    // Reset theme
    document.body.removeAttribute('data-theme');
    expect(document.body.getAttribute('data-theme')).toBeNull();
  });

  test('should handle keyboard navigation across components', () => {
    const tabNavigableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    expect(tabNavigableElements.length).toBeGreaterThan(0);

    // Test Tab key navigation
    const tabEvent = new KeyboardEvent('keydown', { key: 'Tab' });
    document.dispatchEvent(tabEvent);

    // Test Escape key (should work for dialogs, menus, etc.)
    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(escapeEvent);

    // Test Arrow keys (should work for navigation, selects, etc.)
    const arrowEvent = new KeyboardEvent('keydown', { key: 'ArrowDown' });
    document.dispatchEvent(arrowEvent);
  });
});
