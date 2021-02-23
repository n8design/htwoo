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

    // console.log(curSplitButton)
    // set aria values
    let ariaPressed = curSplitButton.getAttribute('aria-pressed');
    if (ariaPressed === undefined) {
        curSplitButton.setAttribute('aria-pressed', true);
    } else {
        curSplitButton.setAttribute('aria-pressed', !ariaPressed);
    }

    parentElement.classList.toggle('show-flyout');

    // console.debug("_btnFlyout::", curSplitButton, parentElement);

}

const buttonClick = (event) => {


    let curSplitButton = event.target;
    let parentElement = curSplitButton.parentElement;

    console.debug("Button Click::::", curSplitButton)
    console.debug("PARENT ELEMENT::", parentElement);
    console.debug("PARENT ELEMENT::", parentElement.parentElement);
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

    splitButtonReg('button.lqd-buttoncmd', buttonClick);
    splitButtonReg('button.lqd-buttoncmdbar', buttonClick);
    splitButtonReg('button.lqd-buttonicon-flyout', buttonClick);
    splitButtonReg('button.lqd-buttoncontext', buttonClick);


}

window.onload = afterLoaded();