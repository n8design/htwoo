/**
 * File upload handler class
 * Manages file uploads with drag and drop functionality
 */
export class FileUploadHandler {
  private _files: File[] = [];
  private _fileLabel: HTMLElement;
  private _fileControl: HTMLElement;
  private _originalFileControl: HTMLInputElement;
  private _infileOutput: HTMLElement;

  /**
   * Handle the dragover event
   */
  dragOver = (event: DragEvent): void => {
    event.preventDefault();
    this._fileLabel.classList.add('drag-over'); // Visual feedback
  }

  /**
   * Handle the dragleave event
   */
  dragLeave = (event: DragEvent): void => {
    event.preventDefault();
    this._fileLabel.classList.remove('drag-over');
  };

  /**
   * Handle the drop event
   */
  dragDrop = (event: DragEvent): void => {
    event.preventDefault();
    this._fileLabel.classList.remove('drag-over');

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      console.log('Files dropped:', files);
      this.fileChangedEvent({ 
        target: { files } 
      } as unknown as Event);
    }
  }

  /**
   * Handle file selection changes
   */
  fileChangedEvent = (event: Event): void => {
    let files: File[];
    console.debug('FileUploadHandler.fileChanged', event);

    const target = event.target as HTMLInputElement;
    
    if (!target.files || target.files.length === 0) {
      this._infileOutput.innerHTML = "";
      return;
    }

    files = Array.from(target.files);

    const fileOutput = document.createElement('ul');
    fileOutput.classList.add('hoo-infile-list');
    console.debug('FileUploadHandler', files);
    
    files.forEach(file => {
      const fileItem = document.createElement('li');
      fileItem.innerText = file.name;
      fileOutput.appendChild(fileItem);
    });

    this._infileOutput.innerHTML = `<div class='hoo-infile-selection'>${this._infileOutput.title || 'Files Selected'}</div>${fileOutput.outerHTML}`;
  }

  /**
   * Initialize the file upload handler
   * @param htmlElement - The file upload container element
   */
  constructor(htmlElement: HTMLElement) {
    this._fileControl = htmlElement;
    console.debug('FileUploadHandler', this._fileControl);
    
    this._fileLabel = htmlElement.querySelector('.hoo-infile-label') as HTMLElement;
    if (!this._fileLabel) {
      throw new Error('File label element not found (.hoo-infile-label)');
    }
    
    this._fileLabel.addEventListener('dragover', this.dragOver as EventListener);
    this._fileLabel.addEventListener('dragleave', this.dragLeave as EventListener);
    this._fileLabel.addEventListener('drop', this.dragDrop as EventListener);

    this._originalFileControl = this._fileControl.querySelector('.hoo-infile-context') as HTMLInputElement;
    if (!this._originalFileControl) {
      throw new Error('File input element not found (.hoo-infile-context)');
    }
    
    console.debug('FileUploadHandler', this._originalFileControl, this._originalFileControl.getAttribute('aria-describedby'));
    this._originalFileControl.addEventListener('change', this.fileChangedEvent);

    const describedBy = this._originalFileControl.getAttribute('aria-describedby');
    if (!describedBy) {
      throw new Error('File input is missing aria-describedby attribute');
    }
    
    console.debug('FileUploadHandler', describedBy, this._infileOutput, `#${describedBy.trim()}`);

    this._infileOutput = document.querySelector(`#${describedBy.trim()}`) as HTMLElement;
    if (!this._infileOutput) {
      throw new Error(`Element with id "${describedBy.trim()}" not found`);
    }
    
    console.debug('Infile Output:', this._infileOutput);
  }
}
