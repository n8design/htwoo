import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";

export interface IHOOSplashCardDescProps extends IHOOStandardProps {
  /**
   * (Optional) Description, if omitted HTML children will be rended
  */
  description?: string;
  /**
   * (Optional) HTMLParagraphElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-splashcard-desc {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
}

export interface IHOOSplashCardDescState {
}

export class HOOSplashCardDescState implements IHOOSplashCardDescState {
  constructor() { }
}

export default class HOOSplashCardDesc extends React.PureComponent<IHOOSplashCardDescProps, IHOOSplashCardDescState> {
  private LOG_SOURCE: string = "💦HOOSplashCardDesc";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-splashcard-desc";

  constructor(props: IHOOSplashCardDescProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOSplashCardDesc";
    this.state = new HOOSplashCardDescState();
  }

  public render(): React.ReactElement<IHOOSplashCardDescProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <p {...this._rootProps} {...this.props.rootElementAttributes} className={className}>
          {this.props.description &&
            this.props.description
          }
          {!this.props.description &&
            this.props.children
          }
        </p>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}