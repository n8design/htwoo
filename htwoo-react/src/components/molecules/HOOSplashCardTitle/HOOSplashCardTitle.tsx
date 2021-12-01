import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";

export interface IHOOSplashCardTitleProps extends IHOOStandardProps {
  /**
   * (Optional) Title, if omitted HTML children will be rended
  */
  title?: string;
  /**
   * (Optional) HTMLHeadingElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-splashcard-title {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLHeadingElement>;
}

export interface IHOOSplashCardTitleState {
}

export class HOOSplashCardTitleState implements IHOOSplashCardTitleState {
  constructor() { }
}

export default class HOOSplashCardTitle extends React.PureComponent<IHOOSplashCardTitleProps, IHOOSplashCardTitleState> {
  private LOG_SOURCE: string = "💦HOOSplashCardTitle";
  private _componentClass: string = "hoo-splashcard-title";

  constructor(props: IHOOSplashCardTitleProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOSplashCardTitle";
    this.state = new HOOSplashCardTitleState();
  }

  public render(): React.ReactElement<IHOOSplashCardTitleProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <h1 data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.props.title &&
            this.props.title
          }
          {!this.props.title &&
            this.props.children
          }
        </h1>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}