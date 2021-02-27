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

const animateDeleteAndSlide = (event) => {


    let eventTarget = event.target;
    let animationClass = eventTarget.parentElement.dataset.animation;

    // Add class
    eventTarget.classList.add(animationClass);

    let computedStyles = window.getComputedStyle(eventTarget);
    let animationDuration = parseFloat(computedStyles.getPropertyValue('animation-duration')) * 1000;


    console.log(
        computedStyles,
        computedStyles.getPropertyValue('animation-duration'),
        animationDuration
        // parseFloat(computedStyles.getPropertyValue('animation-duration')),
        // parseInt("16s")
    );

    setTimeout(
        () => {
            eventTarget.remove();
        }, animationDuration
    )

}

const animateAddAndSlide = (event) => {


    let eventTarget = event.srcElement.clone(true);
    let animationClass = eventTarget.parentElement.dataset.animation;

    // Add class
    eventTarget.classList.add(animationClass);

    let computedStyles = window.getComputedStyle(eventTarget);
    let animationDuration = parseFloat(computedStyles.getPropertyValue('animation-duration')) * 1000;

    let clonedElement = eventTarget.clone(true);
    clonedElement.classList.add(animationClass);

    event.target.parentElement.appendChild(clonedElement);

    console.log(
        computedStyles,
        computedStyles.getPropertyValue('animation-duration'),
        animationDuration
        // parseFloat(computedStyles.getPropertyValue('animation-duration')),
        // parseInt("16s")
    );

}

const registerAnimation = (classname, handleWith) => {

    let animAtionBlocks = document.querySelectorAll(classname + ' .sg-anim-block');

    animAtionBlocks.forEach(element => {
        element.addEventListener('click', handleWith);
    })



}


const afterLoaded = () => {

    splitButtonReg('.lqd-buttonsplit > .lqd-buttonsplit-carret', splitButtonClick);
    splitButtonReg('.lqd-buttonsplit-primary > .lqd-buttonsplit-carret', splitButtonClick);

    splitButtonReg('button.lqd-buttoncmd', buttonClick);
    splitButtonReg('button.lqd-buttoncmdbar', buttonClick);
    splitButtonReg('button.lqd-buttonicon-flyout', buttonClick);
    splitButtonReg('button.lqd-buttoncontext', buttonClick);

    registerAnimation('.anim-deleteNslide', animateDeleteAndSlide)
    registerAnimation('.anim-addNslide', animateAddAndSlide)


}

window.onload = afterLoaded();