/** MENU ITEM */

const handleMenuItems = (event) => {

    console.log(event);

    let curNavItem = event.target;
    let curNavMenu = curNavItem.closest('.hoo-nav-item');

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

}

export const initMenu = () => {

    let menuItems = document.querySelectorAll('.hoo-nav-item[aria-expanded]');

    menuItems.forEach(item => {

        item.addEventListener('click', handleMenuItems);

    })


}