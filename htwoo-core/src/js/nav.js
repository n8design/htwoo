"use strict";
/** MENU ITEM */

const handleMenuItems = (event) => {

    let curNavItem = event.target;
    let curNavMenu = curNavItem.closest('.hoo-navitem');
    let curNavMenuAll = curNavMenu.parentNode.querySelectorAll('.hoo-navitem');

    if (curNavMenu.getAttribute('aria-expanded') === 'false') {

        curNavMenu.setAttribute('aria-expanded', true);
        curNavMenu.setAttribute('aria-selected', true);
        curNavMenu.setAttribute('aria-current', true);

    } else {

        curNavMenu.setAttribute('aria-expanded', false);
        curNavMenu.setAttribute('aria-selected', false);
        curNavMenu.setAttribute('aria-current', false);

    }

}

const resetAria = (items) => {
    console.debug('All Items', items);
    items.forEach((item) => {
        item.removeAttribute('aria-current');
    });
}

const handleNavItemClick = (event) => {

    let curClickItem = event.target;

    if (curClickItem.classList.contains('hoo-navitem-link')) {

        let curNavItem = curClickItem.closest('.hoo-navitem');

        let curNavMenuItems = curClickItem.closest('.hoo-nav').querySelectorAll('* .hoo-navitem');
        
        resetAria(curNavMenuItems);

        curNavItem.setAttribute('aria-current', true);

    } else if (curClickItem.classList.contains('hoo-icon')) {

        let curNavItem = curClickItem.closest('.hoo-navitem');
        
        if (curNavItem.getAttribute('aria-expanded') === 'true') {
            curNavItem.setAttribute('aria-expanded', false);
        } else {
            curNavItem.setAttribute('aria-expanded', true);
        }

    }

}

export const initMenu = () => {

    let navMenus = document.querySelectorAll('.hoo-nav');

    navMenus.forEach(nav => {

        let navItems = nav.querySelectorAll('.hoo-navitem');
        navItems.forEach(navItem => {

            navItem.addEventListener('click', handleNavItemClick, {});

        })

    })

    // let menuItems = document.querySelectorAll('.hoo-navitem[aria-expanded]');

    // menuItems.forEach(item => {

    //     item.addEventListener('click', handleMenuItems);

    // })


}