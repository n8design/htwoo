"use strict";

/**
 * Reset the current page indicator for all nav items
 * @param allNavItems - Collection of navigation items
 */
const resetCurrentPage = (allNavItems: NodeListOf<Element>): void => {
  allNavItems.forEach((item) => {
    item.removeAttribute('aria-current');
  });
}

/**
 * Handle navigation item click events
 * @param event - Click event
 */
const handleNavItemClick = (event: Event): void => {
  const target = event.target as HTMLElement;
  let curClickItem = target;

  // Skip handling for button and icon clicks
  if (!curClickItem.classList.contains('hoo-buttonitem') && !curClickItem.classList.contains('hoo-icon')) {
    const curNavItem = curClickItem.closest('.hoo-navitem');

    if (curNavItem) {
      const curNav = curClickItem.closest('.hoo-nav');
      if (!curNav) return;
      
      const allNavItems = curNav.querySelectorAll('* .hoo-navitem');
      resetCurrentPage(allNavItems);

      curNavItem.setAttribute('aria-current', 'true');
    }
  }
}

/**
 * Handle icon click events for expanding/collapsing submenus
 * @param event - Click event
 */
const handleIconClick = (event: Event): void => {
  const target = event.target as HTMLElement;
  const curIcon = target;
  const subMenu = curIcon.closest('.hoo-navitem');

  if (!subMenu) return;

  if (subMenu.getAttribute('aria-expanded') === 'true') {
    subMenu.setAttribute('aria-expanded', 'false');
  } else {
    subMenu.setAttribute('aria-expanded', 'true');
  }
}

/**
 * Initialize menu functionality
 */
export const initMenu = (): void => {
  const navMenus = document.querySelectorAll('.hoo-nav');

  navMenus.forEach(nav => {
    // Add click handlers to navigation items
    const navItems = nav.querySelectorAll('.hoo-navitem');
    navItems.forEach(navItem => {
      navItem.addEventListener('click', handleNavItemClick);
    });

    // Add click handlers to navigation icons
    const navIcons = nav.querySelectorAll('.hoo-buttonicon');
    navIcons.forEach(navIcon => {
      navIcon.addEventListener('click', handleIconClick);
    });
  });
}
