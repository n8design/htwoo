export class HooDialog {

    #launcher;
    #dialog;
    #dialogType;
    #closer;

    /**
     * Enum of available dialog types
     */
    static dialogType = {
        DIALOG: 'dialog',
        MODAL: 'modal'
    }

    /**
     * Open the dialog
     */
    #showDialog = () => {

        console.debug('-> Fired showDialog -- ', this.#dialog);

        if (this.#dialogType === HooDialog.dialogType.DIALOG) {
            
            this.#dialog.show();

        } else if (this.#dialogType === HooDialog.dialogType.MODAL) {
            
            this.#dialog.showModal();
            // Capture click on backdrop
            this.#dialog.addEventListener('click', this.#backdropClick);
        } else {
            throw new Error(`Invalid dialog type specified for ${this.#dialog}`);
        }

        if (this.#closer) {
            this.#closer.addEventListener('click', this.#closeDialog);
        }

        const autofocus = this.#dialog.querySelector('[autofocus]');

        if (autofocus) {
            console.debug('No Autofocus');
            dialogElement.focus();
        }

        // Capture close on ESC click
        this.#dialog.addEventListener('keydown', this.#keyboardClose);

    }

    #backdropClick = (event) => {

        var rect = this.#dialog.getBoundingClientRect();

        var isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX && event.clientX <= rect.left + rect.width);

        if (!isInDialog) {

            this.#dialog.close();

        }

    }

    /**
     * Close the dialog on keyCode ESC
     */
    #keyboardClose = (event) => {

        if (event.keyCode === 27) {
            this.#dialog.close();
        }

    }

    /**
     * Close the dialog used for custom event or close button
     */
    #closeDialog = (event) => {
        console.debug('closing dialog');
        this.#dialog.close();
    }

    constructor(launcher, dialog, dialogType = HooDialog.dialogType.DIALOG, closer = null) {

        console.debug("Register dialog", dialogType);

        // query DOM elements
        const launchElement = document.querySelector(launcher),
            dialogElement = document.querySelector(dialog);


        if (!launchElement) {
            throw new Error(`Launcher '${launcher}' is not registered`);
        }

        this.#launcher = launchElement;

        if (!dialogElement) {
            throw new Error(`Dialog '${dialog}' Element not found`);
        }

        this.#dialog = dialogElement;

        this.#launcher.addEventListener('click', this.#showDialog);

        this.#dialogType = dialogType;

        // in case a close button is defined fo the dialog
        if (closer !== null) {
            const closerElement = dialogElement.querySelector(closer);
            if (closerElement) {
                this.#closer = closerElement;
            }
        }

        console.debug('AFTER LAUNCH ::: ', this.#dialogType, this.#launcher, this.#dialog, this.#closer);

    }

}