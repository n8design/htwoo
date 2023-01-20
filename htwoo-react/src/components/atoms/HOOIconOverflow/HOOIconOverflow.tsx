import * as React from "react";
import { IHOOStandardProps } from "../../common/IHOOStandardProps";
import HOOButton, { HOOButtonType } from "../HOOButton/HOOButton";

export interface IHOOIconOverflowProps extends IHOOStandardProps {
  /**
   * Overflow is active; show's children which is normally instance of HOOFlyoutMenu
   */
  overflow: boolean;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-buttonicon-overflow {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export interface IHOOIconOverflowState {
  showMenu: boolean;
}

export default class HOOIconOverflow extends React.PureComponent<IHOOIconOverflowProps, IHOOIconOverflowState> {
  private LOG_SOURCE: string = "💦HOOIconOverflow";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-buttonicon-overflow";

  constructor(props: IHOOIconOverflowProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOIconOverflow";
    this.state = { showMenu: false };
  }

  private _showMenu = (): void => {
    try{
      this.setState({showMenu: !this.state.showMenu});
    }catch(err){
      console.error(`${this.LOG_SOURCE} (_showMenu) - ${err}`);
    }
  }

  public render(): React.ReactElement<IHOOIconOverflowProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      let className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      if (this.props.overflow) {
        className += " is-active";
      }
      if(this.state.showMenu) {
        className += " show-flyout";
      }
      return (
        <div {...this._rootProps}
          {...this.props.rootElementAttributes}
          aria-haspopup="true"
          className={className}>
          <HOOButton type={HOOButtonType.Icon}
            iconName="hoo-icon-ellipses"
            onClick={this._showMenu}
            rootElementAttributes={{ className: "hoo-buttonicon-overflow", "aria-haspopup": "true" }} />
          {this.props.children}
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}