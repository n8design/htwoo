import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";

export enum HOOMetaType {
  Button = "button",
  Link = "link",
  Static = "static"
}

export enum HOOMetaStyle {
  Primary = "primary",
  Standard = "standard"
}

export interface IHOOMetaProps extends IHOOStandardProps {
  /**
    * Tag text
  */
  text: string;
  /**
    * Tag type (HOOTagType)
  */
  metaType: HOOMetaType;
  /**
    * Tag style (HOOTagStyle)
  */
  metaStyle: HOOMetaStyle;
  /**
    * (Optional - Used with HooTagType.Link) The url to link to.
  */
  linkUrl?: string;
  /**
    * (Optional - Used with HooTagType.Link) The target of the HTMLAnchorElement
  */
  linkTarget?: string;
  /**
   * (Optional - Used with HOOTagType.Button) Direct interface for buttons click event handler.
   * Defaults to "_self"
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
    * (Optional) HTMLElement attributes that will be applied to the root element of the component.
    * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}

export interface IHOOMetaState {
}

export class HOOMetaState implements IHOOMetaState {
  constructor() { }
}

export default class HOOMeta extends React.Component<IHOOMetaProps, IHOOMetaState> {
  private LOG_SOURCE: string = "💦HOOMeta";
  private _componentClass: string = "hoo-mtag";

  constructor(props: IHOOMetaProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOMeta";
    this.state = new HOOMetaState();
    this._componentClass += (props.metaStyle === HOOMetaStyle.Primary) ? "-primary" : "";
  }

  private _getElementType = () => {
    let retVal = null;
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      switch (this.props.metaType) {
        case HOOMetaType.Button:
          retVal = <button data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className} onClick={this.props.onClick}>
            <span className="hoo-mtag-lbl">{this.props.text}</span>
          </button>;
          break;
        case HOOMetaType.Link:
          retVal = <a data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className} href={this.props.linkUrl} target={this.props.linkTarget || "_self"}>
            <span className="hoo-mtag-lbl">{this.props.text}</span>
          </a>;
          break;
        default:
          retVal = <span data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
            <span className="hoo-mtag-lbl">{this.props.text}</span>
          </span>;
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (getElementType) - ${err}`);
    } finally {
      return retVal;
    }
  }

  public render(): React.ReactElement<IHOOMetaProps> {
    try {
      return this._getElementType();
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}