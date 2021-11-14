define(['exports'], function (exports) { 'use strict';

    let showDialog, closeDialog;

    const evtShowDialog = (event) => {

        let curElement = event.target;

        let modalDialog = curElement.parentElement.querySelector('.hoo-mdldialog-outer');
        modalDialog.classList.remove('is-hidden');
        modalDialog.classList.add('is-visible');

    };

    const evtHideDialog = (event) => {

        let curElement = event.target;

        let modalDialog = curElement.closest('.hoo-mdldialog-outer');

        modalDialog.classList.remove('is-visible');
        modalDialog.classList.add('is-hidden');

    };

    const registerDialog = () => {

        showDialog = document.querySelectorAll('.show-dialog');
        closeDialog = document.querySelectorAll('.hoo-dlgheader-closer');

        if (showDialog) {

            showDialog.forEach(item => {
                item.addEventListener('click', evtShowDialog);
            });

        }

        if (closeDialog) {

            closeDialog.forEach(item => {
                item.addEventListener('click', evtHideDialog);
            });
        }

    };

    exports.registerDialog = registerDialog;

    Object.defineProperty(exports, '__esModule', { value: true });

});
