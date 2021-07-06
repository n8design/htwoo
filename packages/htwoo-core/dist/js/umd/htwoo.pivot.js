(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.htwoo = global.htwoo || {}, global.htwoo.pivot = {})));
}(this, (function (exports) { 'use strict';

    const elemPivotBar = '.hoo-pivotbar';
    const elemPivotButton = '.hoo-button-pivot';
    const dropDownPivotButton = '.hoo-navitem-text';
    const stateIsActive = 'is-active';

    const changePivot = (event) => {
        event.preventDefault();

        console.log(event.target);

        let currentButton = event.target.classList.contains(elemPivotButton.substr(1)) ? event.target : event.target.closest(elemPivotButton);
        if (!currentButton) {
            currentButton = event.target.classList.contains(dropDownPivotButton.substr(1)) ? event.target : event.target.closest(dropDownPivotButton);
        }

        const currentPivotBar = event.target.closest(elemPivotBar);

        const allButtons = currentPivotBar.querySelectorAll(elemPivotButton);

        allButtons.forEach(item => {
            item.classList.remove(stateIsActive);
        });

        currentButton.classList.add(stateIsActive);
        
    };


    const initPivot = () => {

        // register event on regular buttons
        const pivotBarsButtons = document.querySelectorAll(`${elemPivotBar} ${elemPivotButton}`);
        pivotBarsButtons.forEach(pivotBarsButton => {
            pivotBarsButton.dataset.ref = pivotBarsButton.textContent.trim();
            pivotBarsButton.addEventListener('click', changePivot);
        });

    };

    exports.initPivot = initPivot;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
