define(['exports'], function (exports) { 'use strict';

    /** MENU ITEM */

    const handleMenuItems = (event) => {

        console.log(event);

        let curNavItem = event.target;
        let curNavMenu = curNavItem.closest('.hoo-navitem');

        console.log(curNavMenu);
        console.log(curNavMenu.getAttribute('aria-expanded'));
        console.log(typeof curNavMenu.getAttribute('aria-expanded'));

        console.log(" LOOMA ::: ",
            curNavMenu.getAttribute('aria-expanded'),
            Boolean(curNavMenu.getAttribute('aria-expanded')),
            Boolean(curNavMenu.getAttribute('aria-expanded')) === true
        );

        if (curNavMenu.getAttribute('aria-expanded') === 'true') {

            curNavMenu.setAttribute('aria-expanded', false);

        } else {

            curNavMenu.setAttribute('aria-expanded', true);

        }

    };

    const initMenu = () => {

        let menuItems = document.querySelectorAll('.hoo-navitem[aria-expanded]');

        menuItems.forEach(item => {

            item.addEventListener('click', handleMenuItems);

        });


    };

    exports.initMenu = initMenu;

    Object.defineProperty(exports, '__esModule', { value: true });

});
