import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from 'lodash-es/isEqual';

import "./HOOButton.css";
import { IHOOStandardProps } from "../../Common.model";

export enum HOOButtonType {
  "Icon",
  "Primary",
  "Standard",
  "HyperlinkPrimary",
  "HyperlinkStandard"
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
   * (Optional) HTMLHeaderElement attributes that will be applied to the root element of the component.
   */
  rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
  /**
   * (Optional) button label, if omitted, components children will be rendered.
   * Class names will be appended to the end of the default class string - hoo-button-* {rootElementAttributes.class}
   */
  label?: string;
  /**
   * (Optional) For Hyperlink style buttons only, link reference.
   */
  href?: string;
}

export interface IHOOButtonState {
}

export class HOOButtonState implements IHOOButtonState {
  constructor() { }
}

export default class HOOButton extends React.Component<IHOOButtonProps, IHOOButtonState> {
  private LOG_SOURCE: string = "HOOButton";

  private _componentClass: string = "hoo-button";
  private _hyperlinkType: boolean = false;

  constructor(props: IHOOButtonProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "HOOButton";
    switch (props.type) {
      case HOOButtonType.Icon:
        this._componentClass = `${this._componentClass}-icon`;
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
    }
    this.state = new HOOButtonState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOButtonProps>, nextState: Readonly<IHOOButtonState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOOButtonProps> {
    const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
    try {
      return (
        <>
          {this._hyperlinkType &&
            <a href={this.props.href} role="button" data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
              {this.props.label &&
                <div className="hoo-button-label">{this.props.label}</div>
              }
              {!this.props.label &&
                this.props.children
              }
            </a>
          }
          {!this._hyperlinkType &&
            <button data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className} disabled={this.props.disabled} aria-disabled={this.props.disabled} onClick={this.props.onClick}>
              {this.props.label &&
                <div className="hoo-button-label">{this.props.label}</div>
              }
              {!this.props.label &&
                this.props.children
              }
            </button>
          }
        </>
      );
    } catch (err) {
      Logger.write(`${err} - ${this.LOG_SOURCE} (render)`, LogLevel.Error);
    }
  }
}