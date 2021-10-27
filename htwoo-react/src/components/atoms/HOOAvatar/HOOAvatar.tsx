import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import { IHOOStandardProps } from "../../Common.model";

export enum HOOAvatarSize {
  Px16 = "16",
  Px24 = "24",
  Px32 = "32",
  Px40 = "40",
  Px48 = "48"
}

export interface IHOOAvatarProps extends IHOOStandardProps {
  /**
   * The size of the avatar
  */
  size: HOOAvatarSize;
  /**
  * The source of the avatar image
 */
  imageSource: string;
  /**
  * ACCESSIBILITY: The alt text for avatar
 */
  imageAlt: string;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

export interface IHOOAvatarState {
}

export class HOOAvatarState implements IHOOAvatarState {
  constructor() { }
}

export default class HOOAvatar extends React.Component<IHOOAvatarProps, IHOOAvatarState> {
  private LOG_SOURCE: string = "💦HOOAvatar";
  private _componentClass: string = "hoo-avatar-";

  constructor(props: IHOOAvatarProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOAvatar";
    this.state = new HOOAvatarState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOAvatarProps>, nextState: Readonly<IHOOAvatarState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOOAvatarProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass}${this.props.size} ${this.props.rootElementAttributes?.className}` : `${this._componentClass}${this.props.size}`;
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          <img src={this.props.imageSource} alt={this.props.imageAlt} className="hoo-avatar-img" height={this.props.size} width={this.props.size} loading="lazy" />
          {this.props.children}
        </div>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}