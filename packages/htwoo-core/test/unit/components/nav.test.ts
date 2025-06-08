import { describe, test, expect, beforeEach } from 'vitest';

/**
 * Interface representing a navigation component with submenu
 */
interface NavigationComponent {
  element: HTMLElement;
  submenuToggles: NodeListOf<HTMLElement>;
  activeItems: NodeListOf<HTMLElement>;
  submenuItems: NodeListOf<HTMLElement>;
  initialize(): void;
  handleToggleClick(toggle: HTMLElement): void;
  expandSubmenu(item: HTMLElement): void;
  collapseSubmenu(item: HTMLElement): void;
  destroy(): void;
}

describe('Navigation component', () => {
  /**
   * Mock implementation of the navigation initialization
   * @returns NavigationComponent instance
   */
  function createNavigationMock(): NavigationComponent {
    // Find all submenu toggles
    const submenuToggles = document.querySelectorAll<HTMLElement>('.hoo-nav-submenu-toggle');
    const element = document.querySelector<HTMLElement>('.hoo-nav') as HTMLElement;
    const activeItems = document.querySelectorAll<HTMLElement>('.hoo-nav-item.hoo-nav-active');
    const submenuItems = document.querySelectorAll<HTMLElement>('.hoo-nav-has-submenu');
    
    const navComponent: NavigationComponent = {
      element,
      submenuToggles,
      activeItems,
      submenuItems,
      
      /**
       * Initialize the navigation component
       */
      initialize(): void {
        // Attach click event handlers
        this.submenuToggles.forEach(toggle => {
          toggle.addEventListener('click', () => this.handleToggleClick(toggle));
        });
      },
      
      /**
       * Handle toggle click event
       * @param toggle The toggle element that was clicked
       */
      handleToggleClick(toggle: HTMLElement): void {
        const parent = toggle.closest('.hoo-nav-has-submenu') as HTMLElement | null;
        if (parent) {
          if (parent.classList.contains('hoo-nav-expanded')) {
            this.collapseSubmenu(parent);
          } else {
            this.expandSubmenu(parent);
          }
        }
      },
      
      /**
       * Expand a submenu
       * @param item The menu item to expand
       */
      expandSubmenu(item: HTMLElement): void {
        item.classList.add('hoo-nav-expanded');
        
        // Find the submenu element
        const submenu = item.querySelector('.hoo-nav-submenu') as HTMLElement | null;
        if (submenu) {
          submenu.setAttribute('aria-expanded', 'true');
        }
      },
      
      /**
       * Collapse a submenu
       * @param item The menu item to collapse
       */
      collapseSubmenu(item: HTMLElement): void {
        item.classList.remove('hoo-nav-expanded');
        
        // Find the submenu element
        const submenu = item.querySelector('.hoo-nav-submenu') as HTMLElement | null;
        if (submenu) {
          submenu.setAttribute('aria-expanded', 'false');
        }
      },
      
      /**
       * Clean up event listeners
       */
      destroy(): void {
        this.submenuToggles.forEach(toggle => {
          toggle.removeEventListener('click', () => this.handleToggleClick(toggle));
        });
      }
    };
    
    return navComponent;
  }

  let navComponent: NavigationComponent;

  beforeEach(() => {
    document.body.innerHTML = `
      <nav class="hoo-nav">
        <ul>
          <li class="hoo-nav-item">
            <a href="#" class="hoo-nav-link">Item 1</a>
          </li>
          <li class="hoo-nav-item hoo-nav-has-submenu">
            <a href="#" class="hoo-nav-link">Item 2</a>
            <button class="hoo-nav-submenu-toggle">
              <span class="hoo-icon-chevron-down"></span>
            </button>
            <ul class="hoo-nav-submenu" aria-expanded="false">
              <li class="hoo-nav-item">
                <a href="#" class="hoo-nav-link">Submenu Item 1</a>
              </li>
              <li class="hoo-nav-item">
                <a href="#" class="hoo-nav-link">Submenu Item 2</a>
              </li>
            </ul>
          </li>
          <li class="hoo-nav-item">
            <a href="#" class="hoo-nav-link">Item 3</a>
          </li>
        </ul>
      </nav>
    `;
    
    navComponent = createNavigationMock();
    navComponent.initialize();
  });

  test('should initialize without expanded submenus', () => {
    const submenuItem = document.querySelector('.hoo-nav-has-submenu') as HTMLElement;
    expect(submenuItem.classList.contains('hoo-nav-expanded')).toBe(false);
  });
  
  test('should expand submenu when toggle is clicked', () => {
    const toggle = document.querySelector('.hoo-nav-submenu-toggle') as HTMLElement;
    const submenuItem = document.querySelector('.hoo-nav-has-submenu') as HTMLElement;
    
    toggle.click();
    
    expect(submenuItem.classList.contains('hoo-nav-expanded')).toBe(true);
  });
  
  test('should collapse expanded submenu when toggle is clicked again', () => {
    const toggle = document.querySelector('.hoo-nav-submenu-toggle') as HTMLElement;
    const submenuItem = document.querySelector('.hoo-nav-has-submenu') as HTMLElement;
    
    // First click to expand
    toggle.click();
    expect(submenuItem.classList.contains('hoo-nav-expanded')).toBe(true);
    
    // Second click to collapse
    toggle.click();
    expect(submenuItem.classList.contains('hoo-nav-expanded')).toBe(false);
  });
  
  test('should update aria-expanded attribute when submenu is toggled', () => {
    const toggle = document.querySelector('.hoo-nav-submenu-toggle') as HTMLElement;
    const submenu = document.querySelector('.hoo-nav-submenu') as HTMLElement;
    
    expect(submenu.getAttribute('aria-expanded')).toBe('false');
    
    // Click to expand
    toggle.click();
    expect(submenu.getAttribute('aria-expanded')).toBe('true');
    
    // Click to collapse
    toggle.click();
    expect(submenu.getAttribute('aria-expanded')).toBe('false');
  });
});
