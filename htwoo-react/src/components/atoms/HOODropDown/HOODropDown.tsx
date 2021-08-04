import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import "./HOODropDown.css";
import { IHOOStandardProps } from "../../Common.model";

export interface IHOODropDownItem {
  key: string | number;
  text: string;
  disabled: boolean;
}

export interface IHOODropDownGroup {
  groupName: string;
  groupItems: IHOODropDownItem[];
}

export interface IHOODropDownProps extends IHOOStandardProps {
  /**
   * Options for select drop down
  */
  options: IHOODropDownGroup[];
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}

export interface IHOODropDownState {
}

export class HOODropDownState implements IHOODropDownState {
  constructor() { }
}

export default class HOODropDown extends React.Component<IHOODropDownProps, IHOODropDownState> {
  private LOG_SOURCE: string = "🔶HOODropDown";
  private _componentClass: string = "hoo-select-dropdown ";

  constructor(props: IHOODropDownProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "🔶HOODropDown";
    this.state = new HOODropDownState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOODropDownProps>, nextState: Readonly<IHOODropDownState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOODropDownProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <ul data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.props.options && this.props.options.map((g) => {
            return (
              <li className="hoo-optgroup">
                {g.groupName.length > 0 &&
                  <div className="hoo-optgroup-name">{g.groupName}</div>
                }
                <ul className="hoo-optgroup-items">
                  {g.groupItems && g.groupItems.map((i) => {
                    return (
                      <li data-value={i.key} className={`hoo-option ${i.disabled ? "is-disabled" : ""}`} aria-disabled={i.disabled}>{i.text}</li>
                    );
                  })}
                </ul>
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