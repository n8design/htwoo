import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import { getRandomString } from "../common/Common";
import HOOIcon from "../HOOIcon";

export interface IHOOFileProps extends IHOOStandardProps {
  label: string;
  description: string;
  fileIcon: string;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-input-file {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
}

export interface IHOOFileState {
}

export class HOOFileState implements IHOOFileState {
  constructor() { }
}

export default class HOOFile extends React.PureComponent<IHOOFileProps, IHOOFileState> {
  private LOG_SOURCE: string = "💦HOOFile";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-input-file";
  private _fileId: string = "hoo-file-";

  constructor(props: IHOOFileProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOFile";
    this._fileId = `${this._fileId}${getRandomString(10)}`;
    this.state = new HOOFileState();
  }

  public render(): React.ReactElement<IHOOFileProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <section data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          <label className="hoo-infile-label" tabIndex={-1} htmlFor={this._fileId} draggable="true">
            <div className="hoo-infile-icon">
              <HOOIcon />
            </div>
            <div>
              {this.props.label}
              <p className="hoo-infile-description">{this.props.description}
              </p>
            </div>
          </label>
          <input type="file" id="{{ getLastId }}" name="{{name}}" className="hoo-infile-context" multiple aria-describedby="{{ getLastId }}-content" />
          <output className="hoo-infile-output" id="{{ getLastNumericId }}-content" aria-live="polite" title="Current selection"></output>
        </section>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}