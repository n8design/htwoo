import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";

export interface IHOOSplashCardHeaderProps extends IHOOStandardProps {
  /**
   * (Optional) Image source, if omitted HTML children will be rended
  */
  imageSource?: string;
  /**
  * (Optional) ACCESSIBILITY: Image alt, include when using imageSource
 */
  imageAlt?: string;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-splashcard-header {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
}

export interface IHOOSplashCardHeaderState {
}

export class HOOSplashCardHeaderState implements IHOOSplashCardHeaderState {
  constructor() { }
}

export default class HOOSplashCardHeader extends React.PureComponent<IHOOSplashCardHeaderProps, IHOOSplashCardHeaderState> {
  private LOG_SOURCE: string = "💦HOOSplashCardHeader";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-splashcard-header";

  constructor(props: IHOOSplashCardHeaderProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOSplashCardHeader";
    this.state = new HOOSplashCardHeaderState();
  }

  public render(): React.ReactElement<IHOOSplashCardHeaderProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <header {...this._rootProps} {...this.props.rootElementAttributes} className={className} role="presentation">
          {this.props.imageSource &&
            <img src={this.props.imageSource} alt={this.props.imageAlt} className="hoo-splashcard-img" />
          }
          {!this.props.imageSource &&
            this.props.children
          }
        </header>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}