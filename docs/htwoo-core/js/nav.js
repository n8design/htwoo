"use strict";
/** MENU ITEM */

const resetCurrentPage = (allNavItems) => {

    allNavItems.forEach((item) => {

        item.removeAttribute('aria-current');

    });

}

const handleNavItemClick = (event) => {

    let curClickItem = event.target;

    if (!curClickItem.classList.contains('hoo-buttonitem') && !curClickItem.classList.contains('hoo-icon')) {
        let curNavItem = curClickItem.closest('.hoo-navitem');

        if (curNavItem) {

            let curNav = curClickItem.closest('.hoo-nav');
            let allNavItems = curNav.querySelectorAll('* .hoo-navitem');

            resetCurrentPage(allNavItems);

            curNavItem.setAttribute('aria-current', true);

        }
    }

}

const handleIconClick = (event) => {

    let curIcon = event.target;
    let subMenu = curIcon.closest('.hoo-navitem');

    if (subMenu.getAttribute('aria-expanded') === 'true') {
        subMenu.setAttribute('aria-expanded', false);
    } else {
        subMenu.setAttribute('aria-expanded', true);
    }



}

export const initMenu = () => {

    let navMenus = document.querySelectorAll('.hoo-nav');

    navMenus.forEach(nav => {

        let navItems = nav.querySelectorAll('.hoo-navitem');
        navItems.forEach(navItem => {

            navItem.addEventListener('click', handleNavItemClick);

        })

        let navIcons = nav.querySelectorAll('.hoo-buttonicon');
        navIcons.forEach(navIcon => {
            navIcon.addEventListener('click', handleIconClick);
        })

    })

}