(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.htwoo = global.htwoo || {}, global.htwoo.nav = {})));
})(this, (function (exports) { 'use strict';

    /** MENU ITEM */

    const handleMenuItems = (event) => {

        let curNavItem = event.target;
        let curNavMenu = curNavItem.closest('.hoo-navitem');

        // console.log(curNavMenu);
        // console.log(curNavMenu.getAttribute('aria-expanded'));
        // console.log(typeof curNavMenu.getAttribute('aria-expanded'));

        if (curNavMenu.getAttribute('aria-expanded') === 'false') {

            curNavMenu.setAttribute('aria-expanded', true);

        } else {

            curNavMenu.setAttribute('aria-expanded', false);

        }

    };

    const initMenu = () => {

        let menuItems = document.querySelectorAll('.hoo-navitem[aria-expanded]');

        menuItems.forEach(item => {

            item.addEventListener('click', handleMenuItems);

        });


    };

    exports.initMenu = initMenu;

}));
