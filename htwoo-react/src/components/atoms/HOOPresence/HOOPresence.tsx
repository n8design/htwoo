import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";

export enum HOOPresenceStatus {
  Away = "away",
  DoNotDisturb = "dnd",
  Online = "online",
  Invisible = "invisible",
  OutOfOffice = "off"
}

export interface IHOOPresenceProps extends IHOOStandardProps {
  /**
   * Presence Status
  */
  status: HOOPresenceStatus;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

export interface IHOOPresenceState {
}

export class HOOPresenceState implements IHOOPresenceState {
  constructor() { }
}

export default class HOOPresence extends React.PureComponent<IHOOPresenceProps, IHOOPresenceState> {
  private LOG_SOURCE: string = "💦HOOPresence";
  private _componentClass: string = "hoo-presence";

  constructor(props: IHOOPresenceProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOPresence";
    this.state = new HOOPresenceState();
  }

  public render(): React.ReactElement<IHOOPresenceProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} is-${this.props.status} ${this.props.rootElementAttributes?.className}` : `${this._componentClass} is-${this.props.status}`;
      return (
        <div data-component={this.LOG_SOURCE} title={this.props.status} {...this.props.rootElementAttributes} className={className}>
          {this.props.children}
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}