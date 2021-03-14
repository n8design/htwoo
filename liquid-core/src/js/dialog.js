let showDialog, closeDialog;

const evtShowDialog = (event) => {
    console.log("showDialog");

    let curElement = event.target;
    console.log(curElement.parentElement.querySelector('.lqd-mdldialog-outer'));

    let modalDialog = curElement.parentElement.querySelector('.lqd-mdldialog-outer');
    modalDialog.classList.remove('is-hidden');
    modalDialog.classList.add('is-visible');

};

const evtHideDialog = (event) => {

    console.log("showDialog");

    let curElement = event.target;
    console.log('Current Target:::', curElement.parentElement);

    let modalDialog = curElement.closest('.lqd-mdldialog-outer');
    console.log('Parent Target:::', modalDialog);
    modalDialog.classList.remove('is-visible');
    modalDialog.classList.add('is-hidden');

};

export const registerDialog = () => {

    showDialog = document.querySelectorAll('.show-dialog');
    closeDialog = document.querySelectorAll('.lqd-dlgheader-closer');

    console.log(showDialog);
    console.log(closeDialog);

    showDialog.forEach(item => {
        item.addEventListener('click', evtShowDialog)
    })

    closeDialog.forEach(item => {
        item.addEventListener('click', evtHideDialog)
    })

}

// export const showDialog = () => {

// }