import * as React from "react";
import { symset } from "../SymbolSet";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import HOOIcon from "../HOOIcon/HOOIcon";

export enum HOOButtonType {
  "Icon",
  "Primary",
  "Standard",
  "HyperlinkPrimary",
  "HyperlinkStandard",
  "CompoundPrimary",
  "CompoundStandard"
}

export interface IHOOButtonProps extends IHOOStandardProps {
  /**
   * HOOButtonType enum -- omit label for "Icon" type and provide HOOIcon child node.
   */
  type: HOOButtonType;
  /**
   * (Optional) For Non-Hyperlink style buttons only, Is button disabled.
   */
  disabled?: boolean;
  /**
   * (Optional) For Non-Hyperlink style buttons only, Direct interface for buttons click event handler.
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * (Optional) button label, if omitted, components children will be rendered.
   */
  label?: string;
  /**
   * (Optional) button iconName (alt: iconLeftName), if omitted for HOOButtonType.Icon, components children will be rendered.
   */
  iconName?: string;
  /**
   * (Optional) button icon title
   */
  iconTitle?: string;
  /**
   * (Optional) button iconName for right side.
   */
  iconRight?: string;
  /**
   * (Optional) button icon title for right side.
   */
  iconRightTitle?: string;
  /**
   * (Optional) For Hyperlink style buttons only, link reference.
   */
  href?: string;
  /**
   * (Optional) For Compound style buttons only, second line of label.
   */
  description?: string;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-button-* {rootElementAttributes.class}
   */
  rootElementAttributes?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> | React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
}

export interface IHOOButtonState {
}

export default class HOOButton extends React.PureComponent<IHOOButtonProps, IHOOButtonState> {
  private LOG_SOURCE: string = "💦HOOButton";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-button";
  private _hyperlinkType: boolean = false;
  private _compoundType: boolean = false;

  constructor(props: IHOOButtonProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOButton";
    switch (props.type) {
      case HOOButtonType.Icon:
        this._componentClass = `${this._componentClass}icon`;
        break;
      case HOOButtonType.Primary:
        this._componentClass = `${this._componentClass}-primary`;
        break;
      case HOOButtonType.HyperlinkPrimary:
        this._componentClass = `${this._componentClass}-primary`;
        this._hyperlinkType = true;
        break;
      case HOOButtonType.HyperlinkStandard:
        this._hyperlinkType = true;
        break;
      case HOOButtonType.CompoundPrimary:
        this._componentClass = `${this._componentClass}comp-primary`;
        this._compoundType = true;
        break;
      case HOOButtonType.CompoundStandard:
        this._componentClass = `${this._componentClass}comp`;
        this._compoundType = true;
        break;
    }
    this.state = {};
  }

  public render(): React.ReactElement<IHOOButtonProps> {
    if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
    const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${(this.props.iconRight ? "is-reversed" : "")} ${this.props.rootElementAttributes?.className}` : `${this._componentClass} ${(this.props.iconRight ? "is-reversed" : "")}`;
    const iconSVG = (this.props.iconName) ? symset.Icon(this.props.iconName, this.props.iconTitle || "") : ((this.props.iconRight) ? symset.Icon(this.props.iconRight, this.props.iconRightTitle) : null);
    const iconName = this.props.iconName || this.props.iconRight || null;
    try {
      return (
        <>
          {this._hyperlinkType &&
            <a {...this._rootProps}
              {...this.props.rootElementAttributes as React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>}
              href={this.props.href}
              role="button"
              className={className}>
              {this.props.label &&
                <span className="hoo-button-label">{this.props.label}</span>
              }
              {!this.props.label &&
                this.props.children
              }
            </a>
          }
          {!this._hyperlinkType &&
            <button {...this._rootProps}
              {...this.props.rootElementAttributes as React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>}
              className={className}
              disabled={this.props.disabled || false}
              aria-disabled={this.props.disabled || false}
              onClick={this.props.onClick}>
              {this.props.label &&
                <>
                  {iconSVG &&
                    <HOOIcon iconSVG={iconSVG} />
                  }
                  <span className={`hoo-button${this._compoundType ? "comp" : ""}-label`}>{this.props.label}</span>
                  {this._compoundType &&
                    <span className={`hoo-button${this._compoundType ? "comp" : ""}-desc`}>{this.props.description}</span>
                  }
                </>
              }
              {(this.props.type === HOOButtonType.Icon && iconSVG) &&
                <HOOIcon iconSVG={iconSVG} />
              }
              {(!this.props.label || (this.props.type === HOOButtonType.Icon && !this.props.iconName)) &&
                this.props.children
              }
            </button>
          }
        </>
      );
    } catch (err) {
      console.error(`${err} - ${this.LOG_SOURCE} (render)`);
    }
  }
}