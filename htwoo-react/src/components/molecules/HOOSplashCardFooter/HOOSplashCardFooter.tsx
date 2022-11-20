import * as React from "react";
import { IHOOStandardProps } from "../../common/IHOOStandardProps";

export interface IHOOSplashCardFooterProps extends IHOOStandardProps {
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-splashcard-footer {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
}

export interface IHOOSplashCardFooterState {
}

export class HOOSplashCardFooterState implements IHOOSplashCardFooterState {
  constructor() { }
}

export default class HOOSplashCardFooter extends React.PureComponent<IHOOSplashCardFooterProps, IHOOSplashCardFooterState> {
  private LOG_SOURCE: string = "💦HOOSplashCardFooter";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-splashcard-footer";

  constructor(props: IHOOSplashCardFooterProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOSplashCardFooter";
    this.state = new HOOSplashCardFooterState();
  }

  public render(): React.ReactElement<IHOOSplashCardFooterProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <footer {...this._rootProps} {...this.props.rootElementAttributes} className={className}>
          {this.props.children}
        </footer>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}