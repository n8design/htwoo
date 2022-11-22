import * as React from "react";
import { IHOOStandardProps } from "../../common/IHOOStandardProps";
import HOOAction, { HOOActionType } from "../HOOAction/HOOAction";

export interface IHOOFlyoutMenuItem {
  iconName: string;
  label: string;
}

export interface IHOOFlyoutMenuProps extends IHOOStandardProps {
  /** 
  * Context Items
  */
  contextItems: IHOOFlyoutMenuItem[];
  /** 
  * Context Items clicked event, returns mouse event and HOOFlyoutMenuItem
  */
  contextItemClicked: (ev: React.MouseEvent<HTMLButtonElement>, ci: IHOOFlyoutMenuItem) => void;
  /**
   * (Optional) MenuHTMLAttributes attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-buttonflyout {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>;
}

export interface IHOOFlyoutMenuState {
}

export class HOOFlyoutMenuState implements IHOOFlyoutMenuState {
  constructor() { }
}

export default class HOOFlyoutMenu extends React.PureComponent<IHOOFlyoutMenuProps, IHOOFlyoutMenuState> {
  private LOG_SOURCE: string = "💦HOOFlyoutMenu";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-buttonflyout";

  constructor(props: IHOOFlyoutMenuProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOFlyoutMenu";
    this.state = new HOOFlyoutMenuState();
  }

  public render(): React.ReactElement<IHOOFlyoutMenuProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <menu {...this._rootProps} {...this.props.rootElementAttributes} className={className}>
          {this.props.contextItems && this.props.contextItems.map((ci) => {
            return (
              <li key={ci.label} className="hoo-buttonflyout-item">
                <HOOAction label={ci.label} iconName={ci.iconName} type={HOOActionType.Action} onClick={(event) => { this.props.contextItemClicked(event, ci) }} />
              </li>
            );
          })}
        </menu>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}