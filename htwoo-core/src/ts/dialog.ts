/**
 * Dialog type options
 */
export enum DialogType {
  DIALOG = 'dialog',
  MODAL = 'modal'
}

/**
 * Dialog options interface
 */
export interface DialogOptions {
  closer: string | null;
  backdropCloser: boolean;
  escCloser: boolean;
}

/**
 * HOODialog Class - Handles accessible dialog functionality
 */
export class HOODialog {
  // Private properties
  #launcher: HTMLElement;
  #dialog: HTMLDialogElement;
  #dialogType: DialogType;
  #closer: HTMLElement | null;
  #options: DialogOptions = {
    closer: null,
    backdropCloser: true,
    escCloser: true
  };

  /** Default options for modal dialog */
  static options: DialogOptions = {
    closer: null,
    backdropCloser: true,
    escCloser: true
  }

  /**
   * Enum of available dialog types
   */
  static dialogType = DialogType;

  /**
   * Open the dialog
   */
  #showDialog = (): void => {
    console.debug('-> Fired showDialog -- ', this.#dialog);

    if (this.#dialogType === DialogType.DIALOG) {
      this.#dialog.show();
    } else if (this.#dialogType === DialogType.MODAL) {
      this.#dialog.showModal();
      // FIX: Make backdrop click optional
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
      this.#dialog.focus();
    }

    // Capture close on ESC click
    this.#dialog.addEventListener('keydown', this.#keyboardClose);
  }

  /**
   * Handle clicks on the dialog backdrop
   */
  #backdropClick = (event: MouseEvent): void => {
    const rect = this.#dialog.getBoundingClientRect();
    const isInDialog = (
      rect.top <= event.clientY && 
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX && 
      event.clientX <= rect.left + rect.width
    );
    
    if (!isInDialog && event.target === this.#dialog) {
      this.#dialog.close();
    }
  }

  /**
   * Close the dialog on keyCode ESC
   */
  #keyboardClose = (event: KeyboardEvent): void => {
    if (event.keyCode === 27) {
      this.#dialog.close();
    }
  }

  /**
   * Close the dialog used for custom event or close button
   */
  #closeDialog = (event: Event): void => {
    console.debug('closing dialog');
    this.#dialog.close();
  }

  /**
   * Constructor for HOODialog
   * @param launcher - CSS selector for the element that opens the dialog
   * @param dialog - CSS selector for the dialog element
   * @param dialogType - Type of dialog (DIALOG or MODAL)
   * @param options - Configuration options
   */
  constructor(
    launcher: string, 
    dialog: string, 
    dialogType: DialogType = DialogType.DIALOG,
    options: DialogOptions = HOODialog.options
  ) {
    console.debug("Register dialog", dialogType);

    // query DOM elements
    const launchElement = document.querySelector(launcher) as HTMLElement;
    const dialogElement = document.querySelector(dialog) as HTMLDialogElement;

    if (!launchElement) {
      throw new Error(`Launcher '${launcher}' Element cannot be found`);
    }

    this.#launcher = launchElement;

    if (!dialogElement) {
      throw new Error(`Dialog '${dialog}' Element not found`);
    }

    this.#dialog = dialogElement;
    this.#launcher.addEventListener('click', this.#showDialog);
    this.#dialogType = dialogType;

    // Handle options with proper defaults
    this.#options = {
      closer: options.closer === undefined ? null : options.closer,
      backdropCloser: options.backdropCloser === undefined ? true : options.backdropCloser,
      escCloser: options.escCloser === undefined ? true : options.escCloser
    };

    // in case a close button is defined for the dialog
    if (options.closer !== null) {
      const closerElement = dialogElement.querySelector(options.closer) as HTMLElement;
      
      this.#options.closer = options.closer;

      if (closerElement) {
        this.#closer = closerElement;
      }
    }

    console.debug('AFTER LAUNCH ::: ', this.#dialogType, this.#launcher, this.#dialog, this.#closer);
  }
}
