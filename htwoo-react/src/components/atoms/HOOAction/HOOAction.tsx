import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import { IHOOStandardProps } from "../../Common.model";
import HOOIcon from "../HOOIcon";

export interface IHOOActionProps extends IHOOStandardProps {
  /**
   * (Optional) button label, if omitted, components children will be rendered.
   */
  label?: string;
  /**
   * (Optional) icon name, if omitted, components children will be rendered.
   */
  iconName?: string;
  /**
   * (Optional) HTMLHeaderElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-buttonaction {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}

export interface IHOOActionState {
}

export class HOOActionState implements IHOOActionState {
  constructor() { }
}

export default class HOOAction extends React.Component<IHOOActionProps, IHOOActionState> {
  private LOG_SOURCE: string = "🔶HOOAction";
  private _componentClass: string = "hoo-buttonaction";

  constructor(props: IHOOActionProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "HOOAction";
    this.state = new HOOActionState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOActionProps>, nextState: Readonly<IHOOActionState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOOActionProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <button data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.props.label &&
            <>
              <span className="hoo-button-icon" aria-hidden="true">
                <HOOIcon iconName={this.props.iconName} />
              </span>
              <span className="hoo-button-label">{this.props.label}</span>
            </>
          }
          {!this.props.label &&
            this.props.children
          }
        </button>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}