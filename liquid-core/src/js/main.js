import {
    registerDialog
} from './dialog.js';

import {
    ariaSelect
} from './select.js';

import {
    init
} from './table.js';

function splitButtonReg(classSelector, handleWith) {

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

    let eventTarget = event.target;

    console.log("EVENT FIRED :::: ");

    let animationClass = eventTarget.parentElement.dataset.animation;

    // Add class
    eventTarget.classList.add(animationClass);


    let newDomElement = document.importNode(eventTarget, true);
    newDomElement.classList.add(animationClass);

    let computedStyles = window.getComputedStyle(newDomElement);
    let animationDuration = parseFloat(computedStyles.getPropertyValue('animation-duration')) * 1000;


    event.target.parentElement.appendChild(newDomElement);

    newDomElement.addEventListener('click', animateAddAndSlide);

    console.log(
        computedStyles,
        computedStyles.getPropertyValue('animation-duration'),
        animationDuration
        // parseFloat(computedStyles.getPropertyValue('animation-duration')),
        // parseInt("16s")
    );

    setTimeout(
        () => {
            newDomElement.classList.remove('anim-add-slide');
        }, animationDuration
    )

}

const registerAnimation = (classname, handleWith) => {

    let animAtionBlocks = document.querySelectorAll(classname + ' > .sg-anim-block');

    animAtionBlocks.forEach(element => {
        element.addEventListener('click', handleWith);
    })

}

const registerAriaSelect = () => {

    let selects = document.querySelectorAll('.lqd-select');

    // debugger;

    if (selects) {
        selects.forEach((item, idx) => {
            console.log(selects[idx]);
            ariaSelect(item);
        });
    }
}


const afterLoaded = () => {

    splitButtonReg('.lqd-buttonsplit > .lqd-buttonsplit-carret', splitButtonClick);
    splitButtonReg('.lqd-buttonsplit-primary > .lqd-buttonsplit-carret', splitButtonClick);

    splitButtonReg('button.lqd-buttoncmd', buttonClick);
    splitButtonReg('button.lqd-buttoncmdbar', buttonClick);
    splitButtonReg('button.lqd-buttonicon-flyout', buttonClick);
    splitButtonReg('button.lqd-buttoncontext', buttonClick);

    registerAnimation('.anim-deleteNslide', animateDeleteAndSlide);
    registerAnimation('.anim-addNslide', animateAddAndSlide);

    registerDialog();
    registerAriaSelect();


    init();

    setTimeout(() => {
        let tmpHidden = document.querySelectorAll('.tmp-hidden');

        console.log(tmpHidden);

        tmpHidden.forEach(item => {
            tmpHidden.addEventListener("focus", (event) => {

                event.target.classList.remove('.tmp-hidden');

                console.log(tmpHidden);

            })
        })
    }, 1000);


}

window.onload = afterLoaded();