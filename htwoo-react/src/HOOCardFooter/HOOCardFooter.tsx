import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import HOOAvatar, { HOOAvatarSize } from "../HOOAvatar";

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
   * Class names will be appended to the end of the default class string - hoo-cardfooter {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the HOOAvatar element of the component.
  */
  avatarAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export interface IHOOCardFooterState {
}

export class HOOCardFooterState implements IHOOCardFooterState {
  constructor() { }
}

export default class HOOCardFooter extends React.PureComponent<IHOOCardFooterProps, IHOOCardFooterState> {
  private LOG_SOURCE: string = "💦HOOCardFooter";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-cardfooter";

  constructor(props: IHOOCardFooterProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOCardFooter";
    this.state = new HOOCardFooterState();
  }

  public render(): React.ReactElement<IHOOCardFooterProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div {...this._rootProps} {...this.props.rootElementAttributes} className={className}>
          {!this.props.children &&
            <>
              <HOOAvatar imageSource={this.props.avatarImage} imageAlt={this.props.avatarImageAlt} size={this.props.avatarImageSize} rootElementAttributes={this.props.avatarAttributes} />
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