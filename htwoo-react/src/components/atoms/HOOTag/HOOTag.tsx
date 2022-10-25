import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";

export enum HOOTagType {
  Button = "button",
  Link = "link",
  Static = "static"
}

export enum HOOTagStyle {
  Primary = "primary",
  Standard = "standard"
}

export interface IHOOTagProps extends IHOOStandardProps {
  /**
    * Tag text
  */
  text: string;
  /**
    * Tag type (HOOTagType)
  */
  tagType: HOOTagType;
  /**
    * Tag style (HOOTagStyle)
  */
  tagStyle: HOOTagStyle;
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
    * Class names will be appended to the end of the default class string - hoo-mtag {rootElementAttributes.class}
  */
  rootElementAttributes?: React.AllHTMLAttributes<HTMLElement>;
}

export interface IHOOTagState {
}

export class HOOTagState implements IHOOTagState {
  constructor() { }
}

export default class HOOTag extends React.PureComponent<IHOOTagProps, IHOOTagState> {
  private LOG_SOURCE: string = "💦HOOTag";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-mtag";

  constructor(props: IHOOTagProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOTag";
    this.state = new HOOTagState();
    this._componentClass += (props.tagStyle === HOOTagStyle.Primary) ? "-primary" : "";
  }

  public render(): React.ReactElement<IHOOTagProps> {
    try {
      let retVal = null;
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      switch (this.props.tagType) {
        case HOOTagType.Button:
          retVal = <button {...this._rootProps} {...this.props.rootElementAttributes as React.HTMLAttributes<HTMLElement>} className={className} onClick={this.props.onClick}>
            <span className="hoo-mtag-lbl">{this.props.text}</span>
          </button>;
          break;
        case HOOTagType.Link:
          retVal = <a {...this._rootProps} {...this.props.rootElementAttributes} className={className} href={this.props.linkUrl} target={this.props.linkTarget || "_self"}>
            <span className="hoo-mtag-lbl">{this.props.text}</span>
          </a>;
          break;
        default:
          retVal = <span {...this._rootProps} {...this.props.rootElementAttributes} className={className}>
            <span className="hoo-mtag-lbl">{this.props.text}</span>
          </span>;
      }
      return retVal;
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}