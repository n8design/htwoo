const splitButtonReg = (classSelector) => {

    let allSplitButtons = document.querySelectorAll(classSelector);

    allSplitButtons.forEach(element => {
        console.log(element);
        element.addEventListener('click', (event) => {
            splitButtonClick(event);
        });
    });

}

const splitButtonClick = (event) => {

    let curSplitButton = event.target;
    let parentElement = curSplitButton.parentNode;

    // set aria values
    let ariaPressed = curSplitButton.getAttribute('aria-pressed');
    if (ariaPressed === undefined) {
        curSplitButton.setAttribute('aria-pressed', true);
    } else {
        curSplitButton.setAttribute('aria-pressed', !ariaPressed);
    }

    console.log(parentElement.classList.toggle('show-flyout'));

    console.debug(event, curSplitButton, parentElement);


}

const afterLoaded = () => {

    splitButtonReg('.lqd-buttonsplit > .lqd-buttonsplit-carret');
    splitButtonReg('.lqd-buttonsplit-primary > .lqd-buttonsplit-carret');
    splitButtonReg('.lqd-button-cmd > .lqd-button-carret');


}

window.onload = afterLoaded();