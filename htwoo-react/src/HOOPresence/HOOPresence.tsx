import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";

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
   * Class names will be appended to the end of the default class string - hoo-presence {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export interface IHOOPresenceState {
}

export class HOOPresenceState implements IHOOPresenceState {
  constructor() { }
}

export default class HOOPresence extends React.PureComponent<IHOOPresenceProps, IHOOPresenceState> {
  private LOG_SOURCE: string = "💦HOOPresence";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-presence";

  constructor(props: IHOOPresenceProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOPresence";
    this.state = new HOOPresenceState();
  }

  public render(): React.ReactElement<IHOOPresenceProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} is-${this.props.status} ${this.props.rootElementAttributes?.className}` : `${this._componentClass} is-${this.props.status}`;
      return (
        <div {...this._rootProps} title={this.props.status} {...this.props.rootElementAttributes} className={className}>
          {this.props.children}
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}