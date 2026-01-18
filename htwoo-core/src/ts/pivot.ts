const elemPivotBar = '.hoo-pivotbar';
const elemPivotButton = '.hoo-button-pivot';
const dropDownPivotButton = '.hoo-navitem-text';
const stateIsActive = 'is-active';

/**
 * Handle pivot button click events
 * @param event - Click event
 */
const changePivot = (event: Event): void => {
  event.preventDefault();

  const target = event.target as HTMLElement;
  console.log(target);

  let currentButton: HTMLElement | null;
  
  if (target.classList.contains(elemPivotButton.substr(1))) {
    currentButton = target;
  } else {
    currentButton = target.closest(elemPivotButton);
  }
  
  if (!currentButton) {
    if (target.classList.contains(dropDownPivotButton.substr(1))) {
      currentButton = target;
    } else {
      currentButton = target.closest(dropDownPivotButton);
    }
  }

  if (!currentButton) return;

  const currentPivotBar = target.closest(elemPivotBar);
  if (!currentPivotBar) return;

  const allButtons = currentPivotBar.querySelectorAll(elemPivotButton);

  allButtons.forEach(item => {
    item.classList.remove(stateIsActive);
  });

  currentButton.classList.add(stateIsActive);
}

/**
 * Clone overflow nodes to the flyout menu
 * @param pivotBar - The pivot bar element
 */
const cloneOverflowNodes = (pivotBar: HTMLElement): void => {
  // Getting flyout in current element
  const flyoutMenu = pivotBar.querySelector('.hoo-buttonflyout');

  console.log(
    flyoutMenu,
    pivotBar.querySelector('.hoo-overflow')
  );

  const overflowCtn = pivotBar.querySelector('.hoo-overflow');

  if (!overflowCtn || !flyoutMenu) return;

  // Check if we have any overflow items
  const overflowCtnItems = overflowCtn.children;
  const childNodesToAppend: HTMLElement[] = [];

  console.log("Overflow Container Items", overflowCtnItems);
  console.log("Flyout MENU ::::::::::::", flyoutMenu);

  for (let i = 0; i < overflowCtnItems.length; i++) {
    const button = overflowCtnItems[i] as HTMLElement;
    const btnClone = button.cloneNode(true) as HTMLElement;
    const listItem = document.createElement('li');

    listItem.appendChild(btnClone);

    // Copy the onclick event
    btnClone.onclick = button.onclick;
    childNodesToAppend.push(listItem);
  }

  // Append all items at once
  childNodesToAppend.forEach(item => {
    flyoutMenu.appendChild(item);
  });
}

/**
 * Initialize pivot bar functionality
 */
export const initPivot = (): void => {
  // register event on regular buttons
  const pivotBarsButtons = document.querySelectorAll(`${elemPivotBar} ${elemPivotButton}`);
  
  pivotBarsButtons.forEach(pivotButton => {
    const button = pivotButton as HTMLElement;
    button.dataset.ref = button.textContent?.trim() || '';
    button.addEventListener('click', changePivot);
  });
}
