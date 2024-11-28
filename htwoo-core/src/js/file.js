export class FileUploadHandler {
    _files = [];
    _fileLable = null;
    _fileControl = null;
    _originalFileControl = null;
    _infileOutput = null;

    dragOver = (event) => {
        event.preventDefault();
        this._fileLabel.classList.add('drag-over'); // Visual feedback
    }

    dragLeave = (event) => {
        event.preventDefault();
        this._fileLabel.classList.remove('drag-over');
    };

    dragDrop = (event) => {
        event.preventDefault();
        this._fileLabel.classList.remove('drag-over');

        const files = event.dataTransfer.files;
        if (files.length > 0) {
            console.log('Files dropped:', files);
            this.fileChangedEvent({ target: { files } });
        }
    }

    fileChangedEvent = (event) => {
        let files;
        console.debug('FileUploadHandler.fileChanged', event);

        if (event.target.files.length === 0) {
            this._infileOutput.innerHTML = "";
            return;
        }

        files = Array.from(event.target.files);

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

    constructor(htmlElement) {
        this._fileControl = htmlElement;
        console.debug('FileUploadHandler', this._fileControl);
        this._fileLabel = htmlElement.querySelector('.hoo-infile-label');
        this._fileLabel.addEventListener('dragover', this.dragOver);
        this._fileLabel.addEventListener('dragleave', this.dragLeave);
        this._fileLabel.addEventListener('drop', this.dragDrop);

        this._originalFileControl = this._fileControl.querySelector('.hoo-infile-context');
        console.debug('FileUploadHandler', this._originalFileControl, this._originalFileControl.getAttribute('aria-describedby'));
        this._originalFileControl.addEventListener('change', this.fileChangedEvent);

        let describedBy = this._originalFileControl.getAttribute('aria-describedby');
        console.debug('FileUploadHandler', describedBy, this._infileOutput, `#${describedBy.trim()}`);

        this._infileOutput = document.querySelector(`#${describedBy.trim()}`);
        console.debug('Infile Output:', this._infileOutput);
    }
}