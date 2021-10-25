import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import { IHOOStandardProps } from "../../Common.model";
import HOOIcon from "../HOOIcon";

export interface IHOOIconOverflowProps extends IHOOStandardProps {
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}

export interface IHOOIconOverflowState {
}

export class HOOIconOverflowState implements IHOOIconOverflowState {
  constructor() { }
}

export default class HOOIconOverflow extends React.Component<IHOOIconOverflowProps, IHOOIconOverflowState> {
  private LOG_SOURCE: string = "🔶HOOIconOverflow";
  private _componentClass: string = "hoo-buttonicon-overflow";

  constructor(props: IHOOIconOverflowProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "🔶HOOIconOverflow";
    this.state = new HOOIconOverflowState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOIconOverflowProps>, nextState: Readonly<IHOOIconOverflowState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  //TODO: Can this pattern be simplified to no nest a span inside the button so that we can use the atoms already created
  public render(): React.ReactElement<IHOOIconOverflowProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div data-component={this.LOG_SOURCE} aria-haspopup="true" {...this.props.rootElementAttributes} className={className}>
          <button className="hoo-buttonicon-overflow" aria-haspopup="true">
            <span className="hoo-button-icon" aria-hidden="true">
              <HOOIcon iconName="icon-ellipses" />
            </span>
          </button>
          <ul className="hoo-buttonflyout" role="menu">
          </ul>
        </div>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}