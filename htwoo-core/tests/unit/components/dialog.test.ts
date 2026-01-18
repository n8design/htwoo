import { describe, it, expect, vi, beforeEach } from 'vitest';
import { HOODialog, DialogType } from '../../../src/ts/dialog';

describe('HOODialog', () => {
  // Set up the DOM for each test
  beforeEach(() => {
    // Reset the DOM
    document.body.innerHTML = `
      <button id="btn-dialog">Open Dialog</button>
      <button id="btn-modal-dialog">Open Modal Dialog</button>
      <dialog id="myDialog">
        <div>Dialog Content</div>
        <button id="closer-dlg">Close</button>
      </dialog>
      <dialog id="myDialog-1">
        <div>Modal Dialog Content</div>
        <button id="closer-mdl">Close</button>
      </dialog>
    `;
  });

  it('should create a regular dialog instance', () => {
    const dialog = new HOODialog('#btn-dialog', '#myDialog', DialogType.DIALOG, { 
      closer: '#closer-dlg',
      backdropCloser: true,
      escCloser: true
    });
    
    expect(dialog).toBeDefined();
  });

  it('should create a modal dialog instance', () => {
    const dialog = new HOODialog('#btn-modal-dialog', '#myDialog-1', DialogType.MODAL, { 
      closer: '#closer-mdl',
      backdropCloser: true,
      escCloser: true
    });
    
    expect(dialog).toBeDefined();
  });

  it('should throw error if launcher element not found', () => {
    expect(() => {
      new HOODialog('#non-existent-button', '#myDialog', DialogType.DIALOG);
    }).toThrow("Launcher '#non-existent-button' Element cannot be found");
  });

  it('should throw error if dialog element not found', () => {
    expect(() => {
      new HOODialog('#btn-dialog', '#non-existent-dialog', DialogType.DIALOG);
    }).toThrow("Dialog '#non-existent-dialog' Element not found");
  });

  it('should open dialog when launcher is clicked', () => {
    // Get the dialog element directly instead of trying to spy on prototype
    const dialogElement = document.querySelector('#myDialog') as HTMLDialogElement;
    
    // Add a manual open flag to track if it was opened
    let wasDialogOpened = false;
    dialogElement.show = () => {
      wasDialogOpened = true;
      dialogElement.setAttribute('open', '');
    };
    
    const dialog = new HOODialog('#btn-dialog', '#myDialog', DialogType.DIALOG);
    
    // Click the launcher
    document.querySelector('#btn-dialog')?.dispatchEvent(new MouseEvent('click'));
    
    // Check if the dialog has the open attribute
    expect(dialogElement.hasAttribute('open')).toBe(true);
  });

  it('should open modal dialog when launcher is clicked', () => {
    // Get the dialog element directly instead of trying to spy on prototype
    const dialogElement = document.querySelector('#myDialog-1') as HTMLDialogElement;
    
    // Add a manual open flag to track if it was opened
    let wasDialogOpened = false;
    dialogElement.showModal = () => {
      wasDialogOpened = true;
      dialogElement.setAttribute('open', '');
    };
    
    const dialog = new HOODialog('#btn-modal-dialog', '#myDialog-1', DialogType.MODAL);
    
    // Click the launcher
    document.querySelector('#btn-modal-dialog')?.dispatchEvent(new MouseEvent('click'));
    
    // Check if the dialog has the open attribute
    expect(dialogElement.hasAttribute('open')).toBe(true);
  });

  it('should close dialog when closer is clicked', () => {
    // Get the dialog element directly
    const dialogElement = document.querySelector('#myDialog') as HTMLDialogElement;
    
    // Track whether the dialog was closed
    let wasDialogClosed = false;
    dialogElement.show = () => {
      dialogElement.setAttribute('open', '');
    };
    dialogElement.close = () => {
      wasDialogClosed = true;
      dialogElement.removeAttribute('open');
    };
    
    const dialog = new HOODialog('#btn-dialog', '#myDialog', DialogType.DIALOG, {
      closer: '#closer-dlg',
      backdropCloser: true,
      escCloser: true
    });
    
    // Open the dialog first
    document.querySelector('#btn-dialog')?.dispatchEvent(new MouseEvent('click'));
    
    // Ensure it's open
    expect(dialogElement.hasAttribute('open')).toBe(true);
    
    // Then click the close button
    document.querySelector('#closer-dlg')?.dispatchEvent(new MouseEvent('click'));
    
    // Verify it's closed
    expect(wasDialogClosed).toBe(true);
    expect(dialogElement.hasAttribute('open')).toBe(false);
  });
});
