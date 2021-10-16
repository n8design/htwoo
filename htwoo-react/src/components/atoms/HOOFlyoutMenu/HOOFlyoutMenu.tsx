import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";

import "./HOOFlyoutMenu.css";
import { IHOOStandardProps } from "../../Common.model";
import HOOAction from "../HOOAction";

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
   * (Optional) HTMLHeaderElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-buttonflyout {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}

export interface IHOOFlyoutMenuState {
}

export class HOOFlyoutMenuState implements IHOOFlyoutMenuState {
  constructor() { }
}

export default class HOOFlyoutMenu extends React.Component<IHOOFlyoutMenuProps, IHOOFlyoutMenuState> {
  private LOG_SOURCE: string = "🔶HOOFlyoutMenu";
  private _componentClass: string = "hoo-buttonflyout";

  constructor(props: IHOOFlyoutMenuProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "🔶HOOFlyoutMenu";
    this.state = new HOOFlyoutMenuState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOFlyoutMenuProps>, nextState: Readonly<IHOOFlyoutMenuState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOOFlyoutMenuProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <ul role="menu" data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.props.contextItems && this.props.contextItems.map((ci) => {
            return (
              <li className="hoo-buttonflyout-item">
                <HOOAction label={ci.label} iconName={ci.iconName} />
              </li>
            );
          })}
        </ul>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}