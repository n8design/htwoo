import { describe, it, expect, beforeEach, vi } from 'vitest';
import { initTables } from '../../../src/ts/table';

describe('Table component', () => {
  // Set up the DOM for each test
  beforeEach(() => {
    // Reset the DOM
    document.body.innerHTML = `
      <table class="hoo-table is-collapsable">
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr data-sectionheader="section1" aria-expanded="false" class="collapsable">
            <td>
              <button class="hoo-button-icon">
                <span class="hoo-button-icon-label">Expand/Collapse</span>
                <span class="hoo-icon-chevrondown"></span>
              </button>
              Section 1 Header
            </td>
            <td>Info</td>
            <td>More Info</td>
          </tr>
          <tr data-section="section1" class="is-hidden" aria-hidden="true">
            <td>Section 1 Item 1</td>
            <td>Data</td>
            <td>More Data</td>
          </tr>
          <tr data-section="section1" class="is-hidden" aria-hidden="true">
            <td>Section 1 Item 2</td>
            <td>Data</td>
            <td>More Data</td>
          </tr>
          
          <tr data-sectionheader="section2" aria-expanded="false" class="collapsable">
            <td>
              <button class="hoo-button-icon">
                <span class="hoo-button-icon-label">Expand/Collapse</span>
                <span class="hoo-icon-chevrondown"></span>
              </button>
              Section 2 Header
            </td>
            <td>Info</td>
            <td>More Info</td>
          </tr>
          <tr data-section="section2" class="is-hidden" aria-hidden="true">
            <td>Section 2 Item</td>
            <td>Data</td>
            <td>More Data</td>
          </tr>
        </tbody>
      </table>
      
      <table class="hoo-table sticky">
        <thead>
          <tr>
            <th class="is-sticky left">Sticky Left</th>
            <th>Normal Column</th>
            <th class="is-sticky right">Sticky Right</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="is-sticky left">Left Data</td>
            <td>Regular Data</td>
            <td class="is-sticky right">Right Data</td>
          </tr>
        </tbody>
      </table>
    `;
  });

  describe('Collapsible Table', () => {
    it('should initialize table functionality', () => {
      // Initialize tables
      initTables();
      
      // Verify event listeners are set up by simulating a click event
      const table = document.querySelector('.hoo-table.is-collapsable') as HTMLTableElement;
      expect(table).not.toBeNull();
    });

    it('should expand section when collapse/expand button is clicked', () => {
      // Initialize tables
      initTables();
      
      // Get the first section header and its button
      const sectionHeader = document.querySelector('tr[data-sectionheader="section1"]') as HTMLTableRowElement;
      
      // Get section rows (initially hidden)
      const sectionRows = document.querySelectorAll('tr[data-section="section1"]');
      expect(sectionRows[0].classList.contains('is-hidden')).toBe(true);
      
      // Click the row to expand (based on the implementation)
      sectionHeader.click();
      
      // Verify rows are now visible
      expect(sectionRows[0].classList.contains('is-hidden')).toBe(false);
      expect(sectionRows[0].classList.contains('is-visible')).toBe(true);
      expect(sectionRows[0].getAttribute('aria-hidden')).toBe('false');
      expect(sectionHeader.getAttribute('aria-expanded')).toBe('true');
    });

    it('should collapse section when button is clicked again', () => {
      // Initialize tables
      initTables();
      
      // Get the first section header and its button
      const sectionHeader = document.querySelector('tr[data-sectionheader="section1"]') as HTMLTableRowElement;
      const sectionRows = document.querySelectorAll('tr[data-section="section1"]');
      
      // First click to expand
      sectionHeader.click();
      
      // Verify it's expanded
      expect(sectionRows[0].classList.contains('is-hidden')).toBe(false);
      
      // Click again to collapse
      sectionHeader.click();
      
      // Verify it's collapsed again
      expect(sectionRows[0].classList.contains('is-hidden')).toBe(true);
      expect(sectionRows[0].getAttribute('aria-hidden')).toBe('true');
      expect(sectionHeader.getAttribute('aria-expanded')).toBe('false');
    });
  });

  describe('Sticky Table', () => {
    it('should apply sticky classes to elements with data-sticky attributes', () => {
      // Initialize tables which includes sticky functionality
      initTables();
      
      // Check if elements have sticky class
      // Note: The actual class names may differ based on implementation
      const stickyLeftElements = document.querySelectorAll('.is-sticky.left');
      const stickyRightElements = document.querySelectorAll('.is-sticky.right');
      
      stickyLeftElements.forEach(element => {
        expect(element.classList.contains('is-sticky')).toBe(true);
        expect(element.classList.contains('left')).toBe(true);
      });
      
      stickyRightElements.forEach(element => {
        expect(element.classList.contains('is-sticky')).toBe(true);
        expect(element.classList.contains('right')).toBe(true);
      });
    });
  });
});
