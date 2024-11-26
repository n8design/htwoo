export class FileUploadHandler {


    fileChangedEvent = (event) => {
        
        let files;
        
        console.debug('FileUploadHandler.fileChanged', event);

        if (event.target.files.length > 0) {
            files = Array.from(event.target.files);
        }

        const fileOutput = document.createElement('menu');
        console.debug('FileUploadHandler', files);
        files.forEach(file => {
            const fileItem = document.createElement('li');
            fileItem.innerText = file.name;
            fileOutput.appendChild(fileItem);
        });
        this._infileOutput.appendChild(fileOutput);
    }

    constructor(htmlElement) {
        this._fileControl = htmlElement;
        console.debug('FileUploadHandler', this._fileControl);

        this._originalFileControl = this._fileControl.querySelector('.hoo-infile-context');
        console.debug('FileUploadHandler', this._originalFileControl);
        this._originalFileControl.addEventListener('change', this.fileChangedEvent);

        this._infileOutput = this._fileControl.querySelector('.hoo-infile-output');
        console.debug('FileUploadHandler', this._infileOutput);
    }

}