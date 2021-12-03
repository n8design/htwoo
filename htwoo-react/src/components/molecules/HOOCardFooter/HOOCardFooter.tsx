import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
import HOOAvatar, { HOOAvatarSize } from "../../atoms/HOOAvatar/HOOAvatar";

export interface IHOOCardFooterProps extends IHOOStandardProps {
  /**
   * Image source for avatar
  */
  avatarImage: string;
  /**
   * Image alt for avatar
  */
  avatarImageAlt: string;
  /**
   * Image width for avatar
  */
  avatarImageSize: HOOAvatarSize;
  /**
   * Card Footer Name
  */
  name: string;
  /**
  * Card Footer Modified
 */
  modified: string;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

export interface IHOOCardFooterState {
}

export class HOOCardFooterState implements IHOOCardFooterState {
  constructor() { }
}

export default class HOOCardFooter extends React.PureComponent<IHOOCardFooterProps, IHOOCardFooterState> {
  private LOG_SOURCE: string = "💦HOOCardFooter";
  private _componentClass: string = "hoo-cardfooter";

  constructor(props: IHOOCardFooterProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOCardFooter";
    this.state = new HOOCardFooterState();
  }

  public render(): React.ReactElement<IHOOCardFooterProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {!this.props.children &&
            <>
              <HOOAvatar imageSource={this.props.avatarImage} imageAlt={this.props.avatarImageAlt} size={this.props.avatarImageSize} />
              <div className="hoo-cardfooter-data">
                <div className="hoo-cardfooter-name">{this.props.name}</div>
                <div className="hoo-cardfooter-modified">{this.props.modified}</div>
              </div>
            </>
          }
          {this.props.children}
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}