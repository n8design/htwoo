// TypeScript conversion of JavaScript test file
import { describe, test, expect, beforeEach } from 'vitest';

describe('Accessibility compliance', () => {
  beforeEach(() => {
    // Reset the DOM for each test
    document.body.innerHTML = '';
  });
  
  test('dialog component should have proper ARIA attributes', () => {
    document.body.innerHTML = `
      <button id="dialogOpener" aria-controls="testDialog" aria-haspopup="dialog">Open Dialog</button>
      <div id="testDialog" class="hoo-dialog" role="dialog" aria-hidden="true" aria-labelledby="dialogTitle">
        <div class="hoo-dialog-content">
          <button class="hoo-dialog-close" aria-label="Close">Close</button>
          <div class="hoo-dialog-header">
            <h2 id="dialogTitle">Dialog Title</h2>
          </div>
          <div class="hoo-dialog-body">Dialog content</div>
          <div class="hoo-dialog-footer">
            <button class="hoo-button-primary">OK</button>
          </div>
        </div>
      </div>
    `;
    
    const dialog = document.getElementById('testDialog');
    const opener = document.getElementById('dialogOpener');
    
    // Dialog should have proper ARIA attributes
    expect(dialog?.getAttribute('role')).toBe('dialog');
    expect(dialog?.hasAttribute('aria-hidden')).toBe(true);
    expect(dialog?.hasAttribute('aria-labelledby')).toBe(true);
    
    // Opener should have proper ARIA attributes
    expect(opener?.hasAttribute('aria-controls')).toBe(true);
    expect(opener?.hasAttribute('aria-haspopup')).toBe(true);
    
    // Close button should have aria-label
    const closeButton = dialog?.querySelector('.hoo-dialog-close');
    expect(closeButton?.hasAttribute('aria-label')).toBe(true);
  });
  
  test('pivot component should have proper ARIA attributes', () => {
    document.body.innerHTML = `
      <div class="hoo-pivot" role="tablist">
        <div class="hoo-pivot-links">
          <a href="#tab1" class="hoo-pivot-link" role="tab" aria-controls="tab1" aria-selected="true">Tab 1</a>
          <a href="#tab2" class="hoo-pivot-link" role="tab" aria-controls="tab2" aria-selected="false">Tab 2</a>
        </div>
        <div id="tab1" class="hoo-pivot-content" role="tabpanel" aria-labelledby="tab1" aria-hidden="false">
          Tab 1 content
        </div>
        <div id="tab2" class="hoo-pivot-content" role="tabpanel" aria-labelledby="tab2" aria-hidden="true">
          Tab 2 content
        </div>
      </div>
    `;
    
    const pivotContainer = document.querySelector('.hoo-pivot') as HTMLElement;
    const tabs = pivotContainer?.querySelectorAll('.hoo-pivot-link');
    const panels = pivotContainer?.querySelectorAll('.hoo-pivot-content');
    
    // Container should have role tablist
    expect(pivotContainer?.getAttribute('role')).toBe('tablist');
    
    // Tabs should have proper ARIA attributes
    tabs?.forEach((tab: Element) => {
      expect(tab.getAttribute('role')).toBe('tab');
      expect(tab.hasAttribute('aria-controls')).toBe(true);
      expect(tab.hasAttribute('aria-selected')).toBe(true);
    });
    
    // Panels should have proper ARIA attributes
    panels?.forEach((panel: Element) => {
      expect(panel.getAttribute('role')).toBe('tabpanel');
      expect(panel.hasAttribute('aria-labelledby')).toBe(true);
      expect(panel.hasAttribute('aria-hidden')).toBe(true);
    });
    
    // Selected tab should have aria-selected="true"
    expect(tabs?.[0]?.getAttribute('aria-selected')).toBe('true');
    expect(tabs?.[1]?.getAttribute('aria-selected')).toBe('false');
    
    // Selected panel should have aria-hidden="false"
    expect(panels?.[0]?.getAttribute('aria-hidden')).toBe('false');
    expect(panels?.[1]?.getAttribute('aria-hidden')).toBe('true');
  });
  
  test('select component should have proper ARIA attributes', () => {
    document.body.innerHTML = `
      <div class="hoo-select">
        <input type="text" class="hoo-select-input" readonly aria-haspopup="listbox" aria-expanded="false" />
        <div class="hoo-select-dropdown" role="listbox" aria-hidden="true">
          <div class="hoo-select-option" role="option" aria-selected="false">Option 1</div>
          <div class="hoo-select-option" role="option" aria-selected="true">Option 2</div>
        </div>
      </div>
    `;
    
    const select = document.querySelector('.hoo-select') as HTMLElement;
    const input = select?.querySelector('.hoo-select-input');
    const dropdown = select?.querySelector('.hoo-select-dropdown');
    const options = dropdown?.querySelectorAll('.hoo-select-option');
    
    // Input should have proper ARIA attributes
    expect(input?.hasAttribute('aria-haspopup')).toBe(true);
    expect(input?.hasAttribute('aria-expanded')).toBe(true);
    
    // Dropdown should have role and proper ARIA attributes
    expect(dropdown?.getAttribute('role')).toBe('listbox');
    expect(dropdown?.hasAttribute('aria-hidden')).toBe(true);
    
    // Options should have role and proper ARIA attributes
    options?.forEach((option: Element) => {
      expect(option.getAttribute('role')).toBe('option');
      expect(option.hasAttribute('aria-selected')).toBe(true);
    });
    
    // Selected option should have aria-selected="true"
    expect(options?.[0]?.getAttribute('aria-selected')).toBe('false');
    expect(options?.[1]?.getAttribute('aria-selected')).toBe('true');
  });
  
  test('table component should have proper ARIA attributes for sorting', () => {
    document.body.innerHTML = `
      <table class="hoo-table">
        <thead>
          <tr>
            <th class="hoo-table-sort hoo-table-sort-asc" aria-sort="ascending">Column 1</th>
            <th class="hoo-table-sort" aria-sort="none">Column 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>1</td>
          </tr>
          <tr>
            <td>B</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    `;
    
    const tableSortHeaders = document.querySelectorAll<HTMLElement>('.hoo-table-sort');
    
    // Sort headers should have aria-sort attribute
    tableSortHeaders?.forEach((header: HTMLElement) => {
      expect(header.hasAttribute('aria-sort')).toBe(true);
    });
    
    // Active sort column should have appropriate aria-sort value
    expect(tableSortHeaders?.[0]?.getAttribute('aria-sort')).toBe('ascending');
    expect(tableSortHeaders?.[1]?.getAttribute('aria-sort')).toBe('none');
  });
});
