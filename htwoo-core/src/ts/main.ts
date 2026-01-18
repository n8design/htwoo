import { HOODialog, DialogType } from './dialog.js';
import { ariaSelect } from './select.js';
/** Table Helper */
import { initTables } from './table.js';
/** Pivot Helpers */
import { initPivot } from './pivot.js';
/** Menu Helpers */
import { initMenu } from './nav.js';
import { FileUploadHandler } from './file.js';
// import InputMask from './vendor/estelle/input-mask.js';
/** Overflow */
import * as overflow from './overflow.js';

/**
 * Register event handlers for button elements matching a selector
 * @param classSelector - CSS selector for the buttons
 * @param handleWith - Event handler function
 */
const splitButtonReg = (classSelector: string, handleWith: (event: MouseEvent) => void): void => {
  const allSplitButtons = document.querySelectorAll(classSelector);

  allSplitButtons.forEach(element => {
    element.addEventListener('click', ((event: Event) => {
      handleWith(event as MouseEvent);
    }) as EventListener);
  });
}

/**
 * Handle button flyout toggle
 * @param curSplitButton - The button that was clicked
 * @param parentElement - Parent element of the button
 */
const _btnFlyOut = (curSplitButton: HTMLElement, parentElement: HTMLElement): void => {
  // Set aria values
  let ariaPressed = curSplitButton.getAttribute('aria-pressed');
  if (ariaPressed === null) {
    curSplitButton.setAttribute('aria-pressed', 'true');
  } else {
    curSplitButton.setAttribute('aria-pressed', ariaPressed === 'true' ? 'false' : 'true');
  }

  parentElement.classList.toggle('show-flyout');
}

/**
 * Handle button click events
 * @param event - Click event
 */
const buttonClick = (event: MouseEvent): void => {
  const curSplitButton = event.target as HTMLElement;
  const parentElement = curSplitButton.parentElement as HTMLElement;

  _btnFlyOut(curSplitButton, parentElement);
}

/**
 * Handle split button click events
 * @param event - Click event
 */
const splitButtonClick = (event: MouseEvent): void => {
  console.log("\nEVENT: splitButtonClick");
  const curSplitButton = event.target as HTMLElement;
  const parentElement = curSplitButton.parentElement as HTMLElement;

  _btnFlyOut(curSplitButton, parentElement);
}

/**
 * Handle delete and slide animation
 * @param event - Click event
 */
const animateDeleteAndSlide = (event: MouseEvent): void => {
  const eventTarget = event.target as HTMLElement;
  
  if (!eventTarget.parentElement?.dataset.animation) return;
  
  const animationClass = eventTarget.parentElement.dataset.animation;

  // Add class
  eventTarget.classList.add(animationClass);

  const computedStyles = window.getComputedStyle(eventTarget);
  const animationDuration = parseFloat(computedStyles.getPropertyValue('animation-duration')) * 1000;

  console.log(
    computedStyles,
    computedStyles.getPropertyValue('animation-duration'),
    animationDuration
  );

  setTimeout(() => {
    eventTarget.remove();
  }, animationDuration);
}

/**
 * Handle add and slide animation
 * @param event - Click event
 */
const animateAddAndSlide = (event: MouseEvent): void => {
  const eventTarget = event.target as HTMLElement;
  
  if (!eventTarget.parentElement?.dataset.animation) return;
  
  const animationClass = eventTarget.parentElement.dataset.animation;

  // Add class
  eventTarget.classList.add(animationClass);

  const newDomElement = document.importNode(eventTarget, true) as HTMLElement;
  newDomElement.classList.add(animationClass);

  const computedStyles = window.getComputedStyle(newDomElement);
  const animationDuration = parseFloat(computedStyles.getPropertyValue('animation-duration')) * 1000;

  eventTarget.parentElement.appendChild(newDomElement);

  newDomElement.addEventListener('click', animateAddAndSlide);

  console.log(
    computedStyles,
    computedStyles.getPropertyValue('animation-duration'),
    animationDuration
  );

  setTimeout(() => {
    newDomElement.classList.remove('anim-add-slide');
  }, animationDuration);
}

/**
 * Register animation handlers for elements
 * @param classname - CSS class selector
 * @param handleWith - Event handler function
 */
const registerAnimation = (classname: string, handleWith: (event: MouseEvent) => void): void => {
  const animationBlocks = document.querySelectorAll(`${classname} > .sg-anim-block`);

  animationBlocks.forEach(element => {
    element.addEventListener('click', handleWith as EventListener);
  });
}

/**
 * Register file input handlers
 * @param classname - CSS class selector for file inputs
 */
const registerInputHandler = (classname: string): void => {
  const allFileHandlers = document.querySelectorAll(classname);
  allFileHandlers.forEach(fileHandler => {
    new FileUploadHandler(fileHandler as HTMLElement);
  });
}

/**
 * Register ARIA select elements
 */
const registerAriaSelect = (): void => {
  const selects = document.querySelectorAll('.hoo-select');

  console.debug('ALL SELECTED', selects);

  if (selects) {
    selects.forEach((item) => {
      console.debug(item);
      ariaSelect(item as HTMLElement);
    });
  }
}

/**
 * Register dialog elements
 */
const registerDialog = (): void => {
  try {
    const dialog1 = new HOODialog('#btn-dialog', '#myDialog', DialogType.DIALOG, { 
      closer: '#closer-dlg',
      backdropCloser: true,
      escCloser: true
    });
    
    const dialog2 = new HOODialog('#btn-modal-dialog', '#myDialog-1', DialogType.MODAL, { 
      closer: '#closer-mdl',
      backdropCloser: true,
      escCloser: true
    });
  } catch (e) {
    void e; // Suppress errors
  }
}

/**
 * Main initialization function to run after DOM is loaded
 */
const afterLoaded = (): void => {
  registerDialog();

  splitButtonReg('.hoo-buttonsplit > .hoo-buttonsplit-carret', splitButtonClick);
  splitButtonReg('.hoo-buttonsplit-primary > .hoo-buttonsplit-carret', splitButtonClick);
  splitButtonReg('button.hoo-buttonicon-overflow', buttonClick);

  splitButtonReg('button.hoo-buttoncmd', buttonClick);
  splitButtonReg('button.hoo-buttoncmdbar', buttonClick);
  splitButtonReg('button.hoo-buttonicon-flyout', buttonClick);
  splitButtonReg('button.hoo-buttoncontext', buttonClick);

  registerAnimation('.anim-deleteNslide', animateDeleteAndSlide);
  registerAnimation('.anim-addNslide', animateAddAndSlide);
  registerInputHandler('.hoo-input-file');

  registerAriaSelect();

  /** Init Table Helper */
  initTables();
  /** Init Pivot Bars */
  initPivot();
  /** Init Menu Bars */
  initMenu();

  overflow.init();

  // new InputMask();

  setTimeout(() => {
    const tmpHidden = document.querySelectorAll('.tmp-hidden');

    console.log(tmpHidden);

    tmpHidden.forEach(item => {
      item.addEventListener("focus", ((event: Event) => {
        const target = event.target as HTMLElement;
        target.classList.remove('.tmp-hidden');
        console.log(tmpHidden);
      }) as EventListener);
    });
  }, 1000);
}

// Initialize the application when the window loads
window.onload = afterLoaded;
