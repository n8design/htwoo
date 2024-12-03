import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import { getRandomString } from "../common/Common";
import HOOIcon from "../HOOIcon";

export interface IHOOFileProps extends IHOOStandardProps {
  /**
   * The label for the file upload area.
  */
  uploadLabel: string;
  /**
   * The description for the file upload area.
  */
  uploadDescription: string;
  /**
   * Fired when the selected list of files changes.
  */
  onChanged: (files: File[]) => void;
  /**
   * Icon used for file upload; default to `hoo-icon-arrow-upload-filled`
  */
  fileIcon?: string;
  /**
   * (Optional) HTMLInputElement attributes that will be applied to the file upload input element of the component.
   * Note: Class names will be appended to the end of the default class string.
  */
  inputElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-input-file {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
}

export interface IHOOFileState {
  files: File[];
}

export class HOOFileState implements IHOOFileState {
  constructor(
    public files: File[] = []
  ) { }
}

export default class HOOFile extends React.PureComponent<IHOOFileProps, IHOOFileState> {
  private LOG_SOURCE: string = "💦HOOFile";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-input-file";
  private _fileId: string = "hoo-file-";

  private _fileLabel: React.RefObject<HTMLLabelElement>;

  constructor(props: IHOOFileProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOFile";
    this._fileId = `${this._fileId}${getRandomString(10)}`;
    this.state = new HOOFileState();
    this._fileLabel = React.createRef<HTMLLabelElement>();
  }

  private _dragOver = (event): void => {
    event.preventDefault();
    this._fileLabel?.current?.classList.add('drag-over');
  }

  private _dragLeave = (event): void => {
    event.preventDefault();
    this._fileLabel?.current?.classList.remove('drag-over');
  };

  private _dragDrop = (event): void => {
    event.preventDefault();
    this._fileLabel?.current?.classList.remove('drag-over');

    const files = event.dataTransfer.files;
    if (files.length > 0) {
      console.log('Files dropped:', files);
      this._fileChangedEvent({ target: { files } });
    }
  }

  private _fileChangedEvent = (event): void => {
    try {
      const files: File[] = event.target.files;
      this.setState({ files }, () => {
        this.props.onChanged(files);
      });
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_fileChangedEvent) - ${err}`);
    }
  }

  public render(): React.ReactElement<IHOOFileProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      const inputClassName = (this.props.inputElementAttributes?.className) ? `hoo-infile-context ${this.props.inputElementAttributes?.className}` : "hoo-infile-context";
      const fileIcon = this.props.fileIcon == null?"hoo-icon-arrow-upload-filled":this.props.fileIcon;
      return (
        <section data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          <label ref={this._fileLabel}
            className="hoo-infile-label"
            tabIndex={-1}
            htmlFor={this._fileId}
            draggable="true"
            onDragOver={this._dragOver}
            onDragLeave={this._dragLeave}
            onDrop={this._dragDrop}>
            <div className="hoo-infile-icon">
              <HOOIcon iconName={fileIcon} title="Upload" />
            </div>
            <div>
              {this.props.uploadLabel}
              <p className="hoo-infile-description">{this.props.uploadDescription}
              </p>
            </div>
          </label>
          <input type="file" id={this._fileId} {...this.props.inputElementAttributes} className={inputClassName} multiple aria-describedby={`${this._fileId}-content`} onChange={this._fileChangedEvent} />
          <output className="hoo-infile-output" id={`${this._fileId}-content`} aria-live="polite" title="Current selection">
            {this.state.files && this.state.files.length > 0 &&
              <>
                <div className='hoo-infile-selection'>Files Selected</div>
                <ul className="hoo-infile-list">
                  {this.state.files.map((file) => {
                    return <li>{file.name}</li>
                  })}
                </ul>
              </>
            }
          </output>
        </section>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}