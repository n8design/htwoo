import * as React from "react";
import { IHOOStandardProps } from "../../common/IHOOStandardProps";

export enum HOOAvatarSize {
  Px16 = "16",
  Px24 = "24",
  Px32 = "32",
  Px40 = "40",
  Px48 = "48",
  Px64 = "64",
  Px72 = "72",
  Px96 = "96",
}

export interface IHOOAvatarProps extends IHOOStandardProps {
  /**
  * The source of the avatar image
 */
  imageSource: string;
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
   * Class names will be appended to the end of the default class string - hoo-avatar {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export interface IHOOAvatarState {
}

export class HOOAvatarState implements IHOOAvatarState {
  constructor() { }
}

export default class HOOAvatar extends React.PureComponent<IHOOAvatarProps, IHOOAvatarState> {
  private LOG_SOURCE: string = "💦HOOAvatar";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-avatar";

  constructor(props: IHOOAvatarProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOAvatar";
    this.state = new HOOAvatarState();
    if (props.size != null) {
      this._componentClass += ` ${this._componentClass}-${props.size}`;
    }
  }

  public render(): React.ReactElement<IHOOAvatarProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : `${this._componentClass}`;
      return (
        <div {...this._rootProps} {...this.props.rootElementAttributes} className={className} onClick={this.props.onClick}>
          <img src={this.props.imageSource} alt={this.props.imageAlt} className="hoo-avatar-img" height={this.props.size} width={this.props.size} loading="lazy" />
          {this.props.children}
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}