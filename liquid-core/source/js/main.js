const splitButtonReg = (classSelector, handleWith) => {

    let allSplitButtons = document.querySelectorAll(classSelector);

    allSplitButtons.forEach(element => {
        console.log(element);
        element.addEventListener('click', (event) => {
            handleWith(event);
        });
    });

}

const _btnFlyOut = (curSplitButton, parentElement) => {

    console.log(curSplitButton)
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

const buttonClick = (event) => {


    let curSplitButton = event.target;
    let parentElement = curSplitButton;

    _btnFlyOut(curSplitButton, parentElement);


}

const splitButtonClick = (event) => {

    let curSplitButton = event.target;
    let parentElement = curSplitButton.parentElement;

    _btnFlyOut(curSplitButton, parentElement);

}

const afterLoaded = () => {

    splitButtonReg('.lqd-buttonsplit > .lqd-buttonsplit-carret', splitButtonClick);
    splitButtonReg('.lqd-buttonsplit-primary > .lqd-buttonsplit-carret', splitButtonClick);

    splitButtonReg('.lqd-buttoncmd', buttonClick);


}

window.onload = afterLoaded();