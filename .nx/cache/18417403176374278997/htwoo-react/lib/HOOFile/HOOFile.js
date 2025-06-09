import * as React from "react";
import { getRandomString } from "../common/Common";
import HOOIcon from "../HOOIcon";
export class HOOFileState {
    constructor(files = []) {
        this.files = files;
    }
}
export default class HOOFile extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOFile";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-input-file";
        this._fileId = "hoo-file-";
        this._dragOver = (event) => {
            event.preventDefault();
            this._fileLabel?.current?.classList.add('drag-over');
        };
        this._dragLeave = (event) => {
            event.preventDefault();
            this._fileLabel?.current?.classList.remove('drag-over');
        };
        this._dragDrop = (event) => {
            event.preventDefault();
            this._fileLabel?.current?.classList.remove('drag-over');
            const files = event.dataTransfer.files;
            if (files.length > 0) {
                console.log('Files dropped:', files);
                this._fileChangedEvent({ target: { files } });
            }
        };
        this._fileChangedEvent = (event) => {
            try {
                const files = event.target.files;
                this.setState({ files }, () => {
                    this.props.onChanged(files);
                });
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_fileChangedEvent) - ${err}`);
            }
        };
        this.LOG_SOURCE = props.dataComponent || "💦HOOFile";
        this._fileId = `${this._fileId}${getRandomString(10)}`;
        this.state = new HOOFileState();
        this._fileLabel = React.createRef();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            const inputClassName = (this.props.inputElementAttributes?.className) ? `hoo-infile-context ${this.props.inputElementAttributes?.className}` : "hoo-infile-context";
            const fileIcon = this.props.fileIcon == null ? "hoo-icon-arrow-upload-filled" : this.props.fileIcon;
            return (React.createElement("section", { "data-component": this.LOG_SOURCE, ...this.props.rootElementAttributes, className: className },
                React.createElement("label", { ref: this._fileLabel, className: "hoo-infile-label", tabIndex: -1, htmlFor: this._fileId, draggable: "true", onDragOver: this._dragOver, onDragLeave: this._dragLeave, onDrop: this._dragDrop },
                    React.createElement("div", { className: "hoo-infile-icon" },
                        React.createElement(HOOIcon, { iconName: fileIcon, title: "Upload" })),
                    React.createElement("div", null,
                        this.props.uploadLabel,
                        React.createElement("p", { className: "hoo-infile-description" }, this.props.uploadDescription))),
                React.createElement("input", { type: "file", id: this._fileId, ...this.props.inputElementAttributes, className: inputClassName, multiple: true, "aria-describedby": `${this._fileId}-content`, onChange: this._fileChangedEvent }),
                React.createElement("output", { className: "hoo-infile-output", id: `${this._fileId}-content`, "aria-live": "polite", title: "Current selection" }, this.state.files && this.state.files.length > 0 &&
                    React.createElement(React.Fragment, null,
                        React.createElement("div", { className: 'hoo-infile-selection' }, "Files Selected"),
                        React.createElement("ul", { className: "hoo-infile-list" }, this.state.files.map((file) => {
                            return React.createElement("li", null, file.name);
                        }))))));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOFile.js.map
