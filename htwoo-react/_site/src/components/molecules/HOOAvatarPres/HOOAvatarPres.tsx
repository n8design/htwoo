import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import { IHOOStandardProps } from "../../Common.model";
import HOOAvatar, { HOOAvatarSize } from "../../atoms/HOOAvatar/HOOAvatar";
import HOOPresence, { HOOPresenceStatus } from "../../atoms/HOOPresence/HOOPresence";


export interface IHOOAvatarPresProps extends IHOOStandardProps {
  /**
    * The size of the avatar
   */
  size: HOOAvatarSize;
  /**
  * The source of the avatar image
 */
  imageSource: string;
  /** 
   * Presence status 
  */
  status: HOOPresenceStatus;
  /**
  * ACCESSIBILITY: The alt text for avatar
 */
  imageAlt: string;
  /**
   * Change event handler
  */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

export interface IHOOAvatarPresState {
}

export class HOOAvatarPresState implements IHOOAvatarPresState {
  constructor() { }
}

export default class HOOAvatarPres extends React.PureComponent<IHOOAvatarPresProps, IHOOAvatarPresState> {
  private LOG_SOURCE: string = "💦HOOAvatarPres";
  private _componentClass: string = "hoo-avatar-pres-";

  constructor(props: IHOOAvatarPresProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOAvatarPres";
    this.state = new HOOAvatarPresState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOAvatarPresProps>, nextState: Readonly<IHOOAvatarPresState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOOAvatarPresProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass}${this.props.size} ${this.props.rootElementAttributes?.className}` : `${this._componentClass}${this.props.size}`;
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className} onClick={this.props.onClick}>
          <HOOAvatar size={this.props.size} imageSource={this.props.imageSource} imageAlt={this.props.imageAlt} />
          <HOOPresence status={this.props.status} />
        </div>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}