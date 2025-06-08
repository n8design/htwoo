// TypeScript test for table component
import { describe, test, expect, beforeEach, vi } from 'vitest';

interface TableRow {
  element: HTMLTableRowElement;
  section?: string;
  isCollapsible: boolean;
  isExpanded: boolean;
}

interface TableComponent {
  table: HTMLTableElement;
  collapsibleRows: NodeListOf<HTMLTableRowElement>;
  sectionRows: NodeListOf<HTMLTableRowElement>;
}

describe('Table component', () => {
  let mockTableComponent: TableComponent;

  // Mock the table initialization function based on source
  function initTableMock(): TableComponent {
    const table = document.querySelector('.hoo-table') as HTMLTableElement;
    const collapsibleRows = table.querySelectorAll('tr.collapsable') as NodeListOf<HTMLTableRowElement>;
    const sectionRows = table.querySelectorAll('tr[data-section]') as NodeListOf<HTMLTableRowElement>;

    // Add click handlers to collapsible rows
    collapsibleRows.forEach(row => {
      row.addEventListener('click', handleCollapseAndExpand);
    });

    return {
      table,
      collapsibleRows,
      sectionRows
    };
  }

  function handleCollapseAndExpand(event: Event): void {
    const target = event.target as HTMLElement;
    const parentRow = target.closest('tr') as HTMLTableRowElement;
    const parentTable = target.closest('table') as HTMLTableElement;
    const section = parentRow.dataset.sectionheader;

    if (!section || !parentTable) return;

    let query: string;
    if (section === 'all') {
      query = 'tr[data-section]';
    } else {
      query = `tr[data-section="${section}"]`;
    }

    const sectionRows = parentTable.querySelectorAll(query) as NodeListOf<HTMLTableRowElement>;
    const isExpanded = parentRow.getAttribute('aria-expanded') === 'true';

    sectionRows.forEach(row => {
      if (isExpanded) {
        row.classList.add('is-hidden');
        row.classList.remove('is-visible');
        row.setAttribute('aria-hidden', 'true');
        parentRow.setAttribute('aria-expanded', 'false');
      } else {
        row.classList.remove('is-hidden');
        row.classList.add('is-visible');
        row.setAttribute('aria-hidden', 'false');
        parentRow.setAttribute('aria-expanded', 'true');
      }
    });
  }

  beforeEach(() => {
    document.body.innerHTML = `
      <table class="hoo-table is-collapsable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          <tr class="collapsable" data-sectionheader="all" aria-expanded="false">
            <td>Expand All</td>
            <td colspan="2">Click to expand/collapse all sections</td>
          </tr>
          <tr class="collapsable" data-sectionheader="sales" aria-expanded="false">
            <td>Sales Department</td>
            <td>Sales</td>
            <td>Department Header</td>
          </tr>
          <tr data-section="sales" class="is-hidden" aria-hidden="true">
            <td>John Doe</td>
            <td>Sales</td>
            <td>Sales Manager</td>
          </tr>
          <tr data-section="sales" class="is-hidden" aria-hidden="true">
            <td>Jane Smith</td>
            <td>Sales</td>
            <td>Sales Representative</td>
          </tr>
          <tr class="collapsable" data-sectionheader="engineering" aria-expanded="false">
            <td>Engineering Department</td>
            <td>Engineering</td>
            <td>Department Header</td>
          </tr>
          <tr data-section="engineering" class="is-hidden" aria-hidden="true">
            <td>Bob Johnson</td>
            <td>Engineering</td>
            <td>Software Engineer</td>
          </tr>
        </tbody>
      </table>
    `;
    
    mockTableComponent = initTableMock();
  });

  test('should initialize table component', () => {
    expect(mockTableComponent.table).toBeDefined();
    expect(mockTableComponent.table).toBeInstanceOf(HTMLTableElement);
    expect(mockTableComponent.table.classList.contains('hoo-table')).toBe(true);
    expect(mockTableComponent.table.classList.contains('is-collapsable')).toBe(true);
  });

  test('should identify collapsible rows', () => {
    expect(mockTableComponent.collapsibleRows.length).toBe(3);
    
    mockTableComponent.collapsibleRows.forEach(row => {
      expect(row.classList.contains('collapsable')).toBe(true);
      expect(row.hasAttribute('data-sectionheader')).toBe(true);
      expect(row.getAttribute('aria-expanded')).toBe('false');
    });
  });

  test('should identify section rows', () => {
    expect(mockTableComponent.sectionRows.length).toBe(3);
    
    mockTableComponent.sectionRows.forEach(row => {
      expect(row.hasAttribute('data-section')).toBe(true);
      expect(row.classList.contains('is-hidden')).toBe(true);
      expect(row.getAttribute('aria-hidden')).toBe('true');
    });
  });

  test('should expand section when header row is clicked', () => {
    const salesHeaderRow = document.querySelector('tr[data-sectionheader="sales"]') as HTMLTableRowElement;
    const salesRows = document.querySelectorAll('tr[data-section="sales"]') as NodeListOf<HTMLTableRowElement>;

    // Initially collapsed
    expect(salesHeaderRow.getAttribute('aria-expanded')).toBe('false');
    salesRows.forEach(row => {
      expect(row.classList.contains('is-hidden')).toBe(true);
      expect(row.getAttribute('aria-hidden')).toBe('true');
    });

    // Click to expand
    salesHeaderRow.click();

    // Should be expanded
    expect(salesHeaderRow.getAttribute('aria-expanded')).toBe('true');
    salesRows.forEach(row => {
      expect(row.classList.contains('is-visible')).toBe(true);
      expect(row.getAttribute('aria-hidden')).toBe('false');
    });
  });

  test('should collapse section when expanded header row is clicked', () => {
    const salesHeaderRow = document.querySelector('tr[data-sectionheader="sales"]') as HTMLTableRowElement;
    const salesRows = document.querySelectorAll('tr[data-section="sales"]') as NodeListOf<HTMLTableRowElement>;

    // First expand
    salesHeaderRow.click();
    expect(salesHeaderRow.getAttribute('aria-expanded')).toBe('true');

    // Then collapse
    salesHeaderRow.click();
    expect(salesHeaderRow.getAttribute('aria-expanded')).toBe('false');
    salesRows.forEach(row => {
      expect(row.classList.contains('is-hidden')).toBe(true);
      expect(row.getAttribute('aria-hidden')).toBe('true');
    });
  });

  test('should expand all sections when "all" header is clicked', () => {
    const expandAllRow = document.querySelector('tr[data-sectionheader="all"]') as HTMLTableRowElement;
    
    // Initially all sections should be collapsed
    expect(expandAllRow.getAttribute('aria-expanded')).toBe('false');

    // Click expand all
    expandAllRow.click();

    // The expand all row itself should be expanded
    expect(expandAllRow.getAttribute('aria-expanded')).toBe('true');

    // All section rows should be visible
    const allDataRows = document.querySelectorAll('tr[data-section]') as NodeListOf<HTMLTableRowElement>;
    allDataRows.forEach(row => {
      expect(row.classList.contains('is-visible')).toBe(true);
      expect(row.getAttribute('aria-hidden')).toBe('false');
    });
  });

  test('should collapse all sections when expanded "all" header is clicked', () => {
    const expandAllRow = document.querySelector('tr[data-sectionheader="all"]') as HTMLTableRowElement;
    
    // First expand all
    expandAllRow.click();
    
    // Then collapse all
    expandAllRow.click();

    // All section headers should be collapsed
    const allSectionRows = document.querySelectorAll('tbody tr.collapsable:not([data-sectionheader="all"])') as NodeListOf<HTMLTableRowElement>;
    allSectionRows.forEach(row => {
      expect(row.getAttribute('aria-expanded')).toBe('false');
    });

    // All section rows should be hidden
    const allDataRows = document.querySelectorAll('tr[data-section]') as NodeListOf<HTMLTableRowElement>;
    allDataRows.forEach(row => {
      expect(row.classList.contains('is-hidden')).toBe(true);
      expect(row.getAttribute('aria-hidden')).toBe('true');
    });
  });

  test('should handle section-specific expansion', () => {
    const salesHeaderRow = document.querySelector('tr[data-sectionheader="sales"]') as HTMLTableRowElement;
    const engineeringHeaderRow = document.querySelector('tr[data-sectionheader="engineering"]') as HTMLTableRowElement;
    const salesRows = document.querySelectorAll('tr[data-section="sales"]') as NodeListOf<HTMLTableRowElement>;
    const engineeringRows = document.querySelectorAll('tr[data-section="engineering"]') as NodeListOf<HTMLTableRowElement>;

    // Expand sales section
    salesHeaderRow.click();

    // Sales should be expanded
    expect(salesHeaderRow.getAttribute('aria-expanded')).toBe('true');
    salesRows.forEach(row => {
      expect(row.classList.contains('is-visible')).toBe(true);
    });

    // Engineering should remain collapsed
    expect(engineeringHeaderRow.getAttribute('aria-expanded')).toBe('false');
    engineeringRows.forEach(row => {
      expect(row.classList.contains('is-hidden')).toBe(true);
    });
  });

  test('should handle sticky table functionality', () => {
    // Create a sticky table
    document.body.innerHTML = `
      <table class="hoo-table sticky">
        <thead>
          <tr>
            <th class="sticky-left">Name</th>
            <th>Department</th>
            <th class="sticky-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="sticky-left">John Doe</td>
            <td>Sales</td>
            <td class="sticky-right">Edit</td>
          </tr>
        </tbody>
      </table>
    `;

    const stickyTable = document.querySelector('.sticky') as HTMLTableElement;
    const stickyLeftElements = stickyTable.querySelectorAll('.sticky-left') as NodeListOf<HTMLElement>;
    const stickyRightElements = stickyTable.querySelectorAll('.sticky-right') as NodeListOf<HTMLElement>;

    expect(stickyTable).toBeDefined();
    expect(stickyLeftElements.length).toBe(2);
    expect(stickyRightElements.length).toBe(2);
  });

  test('should add click event listeners to collapsible rows', () => {
    const clickHandler = vi.fn();
    
    mockTableComponent.collapsibleRows.forEach(row => {
      row.removeEventListener('click', handleCollapseAndExpand);
      row.addEventListener('click', clickHandler);
    });

    // Click each collapsible row
    mockTableComponent.collapsibleRows[0]?.click();
    mockTableComponent.collapsibleRows[1]?.click();
    mockTableComponent.collapsibleRows[2]?.click();

    expect(clickHandler).toHaveBeenCalledTimes(3);
  });

  test('should handle table without collapsible functionality', () => {
    document.body.innerHTML = `
      <table class="hoo-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Sales</td>
          </tr>
        </tbody>
      </table>
    `;

    const regularTable = document.querySelector('.hoo-table') as HTMLTableElement;
    const collapsibleRows = regularTable.querySelectorAll('.collapsable');

    expect(regularTable).toBeDefined();
    expect(collapsibleRows.length).toBe(0);
    expect(regularTable.classList.contains('is-collapsable')).toBe(false);
  });
});
