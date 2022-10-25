import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
import HOOButton, { HOOButtonType } from "../HOOButton/HOOButton";

export interface IHOOIconOverflowProps extends IHOOStandardProps {
  /**
   * Overflow is active
   */
  overflow: boolean;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-buttonicon-overflow {rootElementAttributes.class}
  */
  rootElementAttributes?: React.AllHTMLAttributes<HTMLDivElement>;
}

export interface IHOOIconOverflowState {
  showOverflow: boolean;
}

export default class HOOIconOverflow extends React.PureComponent<IHOOIconOverflowProps, IHOOIconOverflowState> {
  private LOG_SOURCE: string = "💦HOOIconOverflow";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-buttonicon-overflow";

  constructor(props: IHOOIconOverflowProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOIconOverflow";
    this.state = { showOverflow: false };
  }

  public render(): React.ReactElement<IHOOIconOverflowProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      let className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      if (this.props.overflow) {
        className += " is-active";
      }
      if (this.state.showOverflow) {
        className += " show-flyout";
      }
      return (
        <div {...this._rootProps} {...this.props.rootElementAttributes} aria-haspopup="true" className={className}>
          <HOOButton type={HOOButtonType.Icon} iconName="hoo-icon-ellipses" onClick={() => { this.setState({ showOverflow: !this.state.showOverflow }); }} rootElementAttributes={{ className: "hoo-buttonicon-overflow", "aria-haspopup": "true" }} />
          <ul className="hoo-buttonflyout" role="menu">
          </ul>
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}