import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import HOOButton, { HOOButtonType } from "../HOOButton/HOOButton";
import { IHOOFlyoutMenuItem } from "../HOOFlyoutMenu";
import HOOAction, { HOOActionType } from "../HOOAction";

export interface IHOOButtonMenuProps extends IHOOStandardProps {
  /** 
  * Context Items
  */
  contextItems: IHOOFlyoutMenuItem[];
  /** 
  * Context Items clicked event, returns mouse event and HOOFlyoutMenuItem
  */
  contextItemClicked: (ev: React.MouseEvent<HTMLButtonElement>, ci: IHOOFlyoutMenuItem) => void;
  /**
   * (Optional) button iconName (alt: iconLeftName), if omitted for HOOButtonType.Icon, components children will be rendered.
   */
  iconName?: string;
  /**
   * (Optional) MenuHTMLAttributes attributes that will be applied to the menu element of the component.
   * Class names will be appended to the end of the default class string - hoo-buttonflyout {menuElementAttributes.class}
  */
  menuElementAttributes?: React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLMenuElement>, HTMLMenuElement>;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-buttonicon-overflow {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export interface IHOOButtonMenuState {
  showMenu: boolean;
}

export default class HOOButtonMenu extends React.PureComponent<IHOOButtonMenuProps, IHOOButtonMenuState> {
  private LOG_SOURCE: string = "💦HOOButtonMenu";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-buttonmenu";

  constructor(props: IHOOButtonMenuProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOButtonMenu";
    this.state = { showMenu: false };
  }

  private _showMenu = (): void => {
    try {
      this.setState({ showMenu: !this.state.showMenu });
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_showMenu) - ${err}`);
    }
  }

  private _menuItemClicked = (ev: React.MouseEvent<HTMLButtonElement>, ci: IHOOFlyoutMenuItem): void => {
    try {
      this.props.contextItemClicked(ev, ci);
      this.setState({ showMenu: false });
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_menuItemClicked) - ${err}`);
    }
  }

  public render(): React.ReactElement<IHOOButtonMenuProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      let className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      const buttonREA:React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> = { className: "hoo-buttonicon-flyout", "aria-haspopup": "true" };
      if (this.state.showMenu) {
        className += " show-flyout";
        buttonREA["aria-pressed"] = "true";
      }
      const menuClassName = `hoo-buttonflyout ${(this.props.menuElementAttributes?.className) ? this.props.rootElementAttributes?.className : ""}`;
      return (
        <div {...this._rootProps}
          {...this.props.rootElementAttributes}
          aria-haspopup="true"
          className={className}>
          <HOOButton type={HOOButtonType.Icon}
            iconName={this.props.iconName || "hoo-icon-ellipses"}
            onClick={this._showMenu}
            rootElementAttributes={buttonREA} />
          <menu {...this.props.menuElementAttributes} className={menuClassName}>
            {this.props.contextItems && this.props.contextItems.map((ci, index) => {
              return (
                <li key={ci.label || index} className="hoo-buttonflyout-item">
                  <HOOAction label={ci.label} iconName={ci.iconName} type={HOOActionType.Action} onClick={(event) => { this._menuItemClicked(event, ci) }} />
                </li>
              );
            })}
          </menu>
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}