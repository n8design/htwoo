import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";

export interface IHOOWebPartTitleProps extends IHOOStandardProps {
  /**
   * Title of the web part.
   */
  title: string;
  /**
   * Is the web part title editable.
   */
  editMode: boolean;
  /**
   * Method to update the data source for the web part's title.
   */
  updateTitle: (title: string) => void;
  /**
   * (Optional) Placeholder to be shown when Title is null.
   */
  placeholder?: string;
  /**
   * (Optional) HTMLHeaderElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-webpart-header {rootElementAttributes.class}
   */
  rootElementAttributes?: React.AllHTMLAttributes<HTMLHeadingElement>;
}

export interface IHOOWebPartTitleState {
}

export class HOOWebPartTitleState implements IHOOWebPartTitleState {
  constructor() { }
}

export default class HOOWebPartTitle extends React.PureComponent<IHOOWebPartTitleProps, IHOOWebPartTitleState> {
  private LOG_SOURCE: string = "💦HOOWebPartTitle";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-webpart-header";

  constructor(props: IHOOWebPartTitleProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOWebPartTitle";
    this.state = new HOOWebPartTitleState();
  }

  private saveTitle = (event: React.FocusEvent<HTMLDivElement>) => {
    event.preventDefault();
    let title = (event.target as HTMLDivElement).innerText;
    this.props.updateTitle(title);
  }

  public render(): React.ReactElement<IHOOWebPartTitleProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <h3 {...this._rootProps} {...this.props.rootElementAttributes} className={className}>
          <div
            role="textbox"
            placeholder={this.props.placeholder || ""}
            aria-placeholder={this.props.placeholder || ""}
            contentEditable={this.props.editMode}
            suppressContentEditableWarning={true}
            onBlur={this.saveTitle}
          >
            {this.props.title || this.props.children}
          </div>
        </h3>
      );
    } catch (err) {
      console.error(`${err} - ${this.LOG_SOURCE} (render)`);
      return null;
    }
  }
}