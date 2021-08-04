import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";

import "./HOOWebPartTitle.css";
import { IHOOStandardProps } from "../../Common.model";

export interface IHOOWebPartTitleProps extends IHOOStandardProps {
  /**
   * (Optional) HTMLHeaderElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-webpart-header {rootElementAttributes.class}
   */
  rootElementAttributes?: React.HTMLAttributes<HTMLHeadingElement>;
  /**
   * (Optional) Title of the web part.
   */
  title?: string;
  /**
   * (Optional) Placeholder to be shown when Title is null.
   */
  placeholder?: string;
  /**
   * Is the web part title editable.
   */
  editMode: boolean;
  /**
   * Method to update the data source for the web part's title.
   */
  updateTitle: (title: string) => void;
}

export interface IHOOWebPartTitleState {
}

export class HOOWebPartTitleState implements IHOOWebPartTitleState {
  constructor() { }
}

export default class HOOWebPartTitle extends React.Component<IHOOWebPartTitleProps, IHOOWebPartTitleState> {
  private LOG_SOURCE: string = "🔶HOOWebPartTitle";
  private _componentClass: string = "hoo-webpart-header";

  constructor(props: IHOOWebPartTitleProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "🔶HOOWebPartTitle";
    this.state = new HOOWebPartTitleState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOWebPartTitleProps>, nextState: Readonly<IHOOWebPartTitleState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  private saveTitle = (event: React.FocusEvent<HTMLDivElement>) => {
    event.preventDefault();
    let title = (event.target as HTMLDivElement).innerText;
    this.props.updateTitle(title);
  }

  public render(): React.ReactElement<IHOOWebPartTitleProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <h3 data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
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
      Logger.write(`${err} - ${this.LOG_SOURCE} (render)`, LogLevel.Error);
      return null;
    }
  }
}