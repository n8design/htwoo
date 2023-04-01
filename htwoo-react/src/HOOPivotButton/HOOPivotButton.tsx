import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";

export interface IHOOPivotButtonProps extends IHOOStandardProps {
  /**
   * Pivot Button label
  */
  label: string;
  /**
   * Is Pivot Button active
  */
  isActive: boolean;
  /**
   * (Optional) For Non-Hyperlink style buttons only, Direct interface for buttons click event handler.
   */
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * (Optional) HTMLButtonElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-button-pivot {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
}

export interface IHOOPivotButtonState {
}

export class HOOPivotButtonState implements IHOOPivotButtonState {
  constructor() { }
}

export default class HOOPivotButton extends React.PureComponent<IHOOPivotButtonProps, IHOOPivotButtonState> {
  private LOG_SOURCE: string = "💦HOOPivotButton";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-button-pivot";

  constructor(props: IHOOPivotButtonProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOPivotButton";
    this.state = new HOOPivotButtonState();
  }

  public render(): React.ReactElement<IHOOPivotButtonProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey.toString() }
      let className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      if (this.props.isActive) {
        className += " is-active";
      }
      return (
        <button {...this._rootProps} {...this.props.rootElementAttributes as React.HTMLAttributes<HTMLElement>} className={className} onClick={this.props.onClick}>
          <span className="hoo-pivot-inner" title={this.props.label}>
            {this.props.label}
          </span>
        </button>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}