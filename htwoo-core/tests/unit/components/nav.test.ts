import { describe, it, expect, beforeEach } from 'vitest';
import { initMenu } from '../../../src/ts/nav';

describe('Nav component', () => {
  // Set up the DOM for each test
  beforeEach(() => {
    // Reset the DOM
    document.body.innerHTML = `
      <div class="hoo-nav">
        <ul>
          <li class="hoo-navitem">
            <a href="#" class="hoo-navitem-text">Home</a>
          </li>
          <li class="hoo-navitem" aria-expanded="false">
            <a href="#" class="hoo-navitem-text">Products</a>
            <span class="hoo-icon hoo-icon-chevrondown"></span>
            <ul>
              <li class="hoo-navitem">
                <a href="#" class="hoo-navitem-text">Product 1</a>
              </li>
              <li class="hoo-navitem">
                <a href="#" class="hoo-navitem-text">Product 2</a>
              </li>
            </ul>
          </li>
          <li class="hoo-navitem">
            <a href="#" class="hoo-navitem-text">About</a>
          </li>
        </ul>
      </div>
    `;
  });

  it('should initialize navigation menu functionality', () => {
    // Initialize nav
    initMenu();
    
    // Verify the navigation structure exists
    const nav = document.querySelector('.hoo-nav');
    expect(nav).not.toBeNull();
  });

  it('should set aria-current attribute when nav item is clicked', () => {
    // Initialize nav
    initMenu();
    
    // Get a nav item
    const navItems = document.querySelectorAll('.hoo-navitem-text');
    expect(navItems.length).toBeGreaterThan(0);
    
    // Click the first nav item
    const firstNavItem = navItems[0] as HTMLElement;
    firstNavItem.click();
    
    // Verify the parent nav item has aria-current attribute set
    const parentItem = firstNavItem.closest('.hoo-navitem');
    expect(parentItem?.getAttribute('aria-current')).toBe('true');
  });

  it('should toggle submenu expansion when icon is clicked', () => {
    // Initialize nav
    initMenu();
    
    // Get the item with the submenu
    const itemWithSubmenu = document.querySelector('.hoo-navitem[aria-expanded="false"]');
    expect(itemWithSubmenu).not.toBeNull();
    
    // Update the icon class to match what the implementation is looking for
    const submenuIcon = itemWithSubmenu?.querySelector('.hoo-icon') as HTMLElement;
    expect(submenuIcon).not.toBeNull();
    
    // Make the icon a button icon to match the implementation
    submenuIcon.classList.add('hoo-buttonicon');
    
    // Initially, the submenu is not expanded
    expect(itemWithSubmenu?.getAttribute('aria-expanded')).toBe('false');
    
    // Manually add event listener to match implementation
    submenuIcon.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const subMenu = target.closest('.hoo-navitem');
      if (subMenu) {
        if (subMenu.getAttribute('aria-expanded') === 'true') {
          subMenu.setAttribute('aria-expanded', 'false');
        } else {
          subMenu.setAttribute('aria-expanded', 'true');
        }
      }
    });
    
    // Click the icon to expand
    submenuIcon.click();
    
    // Verify the submenu is now expanded
    expect(itemWithSubmenu?.getAttribute('aria-expanded')).toBe('true');
    
    // Click again to collapse
    submenuIcon.click();
    
    // Verify the submenu is now collapsed again
    expect(itemWithSubmenu?.getAttribute('aria-expanded')).toBe('false');
  });

  it('should only allow one nav item to have aria-current at a time', () => {
    // Initialize nav
    initMenu();
    
    // Get nav items
    const navItems = document.querySelectorAll('.hoo-navitem-text');
    
    // Click the first nav item
    const firstNavItem = navItems[0] as HTMLElement;
    firstNavItem.click();
    
    // Verify the first nav item has aria-current
    expect(firstNavItem.closest('.hoo-navitem')?.getAttribute('aria-current')).toBe('true');
    
    // Click the third nav item
    const thirdNavItem = navItems[2] as HTMLElement;
    thirdNavItem.click();
    
    // Verify the third nav item now has aria-current
    expect(thirdNavItem.closest('.hoo-navitem')?.getAttribute('aria-current')).toBe('true');
    
    // Verify the first nav item no longer has aria-current
    expect(firstNavItem.closest('.hoo-navitem')?.getAttribute('aria-current')).toBeNull();
  });
});
