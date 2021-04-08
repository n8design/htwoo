const elemPivotBar = '.lqd-pivotbar';
const elemPivotButton = '.lqd-button-pivot';
const stateIsActive = 'is-active';

const changePivot = (event) => {
    event.preventDefault();
    console.log(elemPivotButton.substr(1));

    console.log('EVENT: Change Pivot');
    console.log(event);
    console.log(event.target);
    console.log(event.target.classList);

    const currentButton = event.target.classList.contains(elemPivotButton.substr(1)) ? event.target : event.target.closest(elemPivotButton)
    const currentPivotBar = event.target.closest(elemPivotBar);
    console.log('Pivot Bar', currentPivotBar);

    const allButtons = currentPivotBar.querySelectorAll(elemPivotButton);
    console.log(allButtons);

    allButtons.forEach(item => {
        item.classList.remove(stateIsActive);
    });
    
    currentButton.classList.add(stateIsActive);

}


export const initPivot = () =>{

    const pivotBars = document.querySelectorAll(`${elemPivotBar} > ${elemPivotButton}`);

    pivotBars.forEach(item => {
        item.addEventListener('click', changePivot);
    });

}