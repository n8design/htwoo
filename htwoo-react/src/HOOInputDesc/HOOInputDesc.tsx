import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";

export interface IHOOInputDescProps extends IHOOStandardProps {
  /**
   * The description for the associated input element in the field.
  */
  description: string;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-input-description {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
}

export interface IHOOInputDescState {
}

export default class HOOInputDesc extends React.PureComponent<IHOOInputDescProps, IHOOInputDescState> {
  private LOG_SOURCE: string = "💦HOOHOOInputDesc";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-input-description";

  constructor(props: IHOOInputDescProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOHOOInputDesc";
    this.state = {};
  }

  public render(): React.ReactElement<IHOOInputDescProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <p data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.props.description}
        </p>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}