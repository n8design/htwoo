import * as React from "react";
import { IHOOStandardProps } from "../../common/IHOOStandardProps";
import HOOAvatar, { HOOAvatarSize } from "../../atoms/HOOAvatar/HOOAvatar";
import HOOPresence, { HOOPresenceStatus } from "../../atoms/HOOPresence/HOOPresence";


export interface IHOOAvatarPresProps extends IHOOStandardProps {
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
    * (Optional) The size of the avatar - can be controled by container
   */
  size?: HOOAvatarSize;
  /**
   * Change event handler
  */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-avatar-pres {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the HOOAvatar element of the component.
  */
  avatarAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the HOOPresence element of the component.
  */
  presenceAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export interface IHOOAvatarPresState {
}

export class HOOAvatarPresState implements IHOOAvatarPresState {
  constructor() { }
}

export default class HOOAvatarPres extends React.PureComponent<IHOOAvatarPresProps, IHOOAvatarPresState> {
  private LOG_SOURCE: string = "💦HOOAvatarPres";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-avatar-pres";

  constructor(props: IHOOAvatarPresProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOAvatarPres";
    this.state = new HOOAvatarPresState();
    if (props.size != null) {
      this._componentClass += `-${props.size}`;
    }
  }

  public render(): React.ReactElement<IHOOAvatarPresProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : `${this._componentClass}`;
      return (
        <div {...this._rootProps} {...this.props.rootElementAttributes} className={className} onClick={this.props.onClick}>
          <HOOAvatar size={this.props.size} imageSource={this.props.imageSource} imageAlt={this.props.imageAlt} rootElementAttributes={this.props.avatarAttributes} />
          <HOOPresence status={this.props.status} rootElementAttributes={this.props.presenceAttributes} />
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}