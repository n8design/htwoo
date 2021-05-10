const elemPivotBar = '.hoo-pivotbar';
const elemPivotButton = '.hoo-button-pivot';
const dropDownPivotButton = '.hoo-navitem-text';
const stateIsActive = 'is-active';

const changePivot = (event) => {
    event.preventDefault();
    console.log(elemPivotButton.substr(1));

    console.log('EVENT: Change Pivot');
    console.log(event);
    console.log(event.target);
    console.log(event.target.classList);

    let currentButton = event.target.classList.contains(elemPivotButton.substr(1)) ? event.target : event.target.closest(elemPivotButton);
    if(!currentButton){
        currentButton = event.target.classList.contains(dropDownPivotButton.substr(1)) ? event.target : event.target.closest(dropDownPivotButton);
    }

    const currentPivotBar = event.target.closest(elemPivotBar);


    const allButtons = currentPivotBar.querySelectorAll(elemPivotButton);

    allButtons.forEach(item => {
        item.classList.remove(stateIsActive);
        let refItems = currentPivotBar.querySelectorAll(`[data-ref="${item.textContent.trim()}"]`);
        refItems.forEach(refItem => refItem.classList.remove(stateIsActive));
    });

    console.log(currentButton);

    let refItems = currentPivotBar.querySelectorAll(`[data-ref="${currentButton.textContent.trim()}"]`);
    console.log("refItems", refItems)
    refItems.forEach(
        refItem => refItem.classList.add(stateIsActive)
    );


}

const cloneOverflowNodes = (pivotBar) => {

    // Getting flyout in current element
    let flyoutMenu = pivotBar.querySelector('.hoo-buttonflyout');

    if (flyoutMenu) {

        let childNodesToAppend = [];

        pivotBar.querySelectorAll('button.hoo-button-pivot').forEach(button => {

            if (!button.classList.contains('hoo-buttonicon-overflow')) {

                const btnClone = button.cloneNode(true);
                const listItem = document.createElement('li');

                listItem.appendChild(btnClone);

                btnClone.onclick = button.onclick;
                childNodesToAppend.push(listItem);

            }

            flyoutMenu.append(...childNodesToAppend);

        });

    };
}


export const initPivot = () => {

    const pivotBars = document.querySelectorAll(`${elemPivotBar}`);

    console.log("Pivot bars ::: >>>>", pivotBars);

    pivotBars.forEach(pivotBar => {

        if (pivotBar.classList.contains('has-overflow')) {

            cloneOverflowNodes(pivotBar);

        }

    })

    // register event on regular buttons
    const pivotBarsButtons = document.querySelectorAll(`${elemPivotBar} ${elemPivotButton}`);
    pivotBarsButtons.forEach(pivotBarsButton => {
        pivotBarsButton.dataset.ref = pivotBarsButton.textContent.trim();
        pivotBarsButton.addEventListener('click', changePivot);

    });

    // register event on drop down items
    const flyoutItems = document.querySelectorAll(`${elemPivotBar} .hoo-navitem-text`);
    flyoutItems.forEach(pivotBarsButton => {

        pivotBarsButton.dataset.ref = pivotBarsButton.textContent.trim();
        pivotBarsButton.addEventListener('click', changePivot);

    });

}