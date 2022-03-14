import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
import HOOFlyoutMenu, { IHOOFlyoutMenuItem } from "../HOOFlyoutMenu/HOOFlyoutMenu";
import { symset } from "../../../SymbolSet";

export enum HOOButtonSplitType {
  "Icon",
  "Standard",
  "Primary"
}
export interface IHOOButtonSplitProps extends IHOOStandardProps {
  /**
   * HOOButtonType enum -- omit label for "Icon" type and provide HOOIcon child node.
   */
  type: HOOButtonSplitType;
  /**
   * (Optional) For Non-Hyperlink style buttons only, Direct interface for buttons click event handler.
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /**
   * (Optional) button label, if omitted, components children will be rendered.
   */
  label?: string;
  /**
   * (Optional) icon name, if omitted, icon-arrow-down will be used.
   */
  rightIconName?: string;
  /**
   * (Optional) Flyout menu items, if omitted, no flyout will be rendered.
   */
  flyoutContextItems?: IHOOFlyoutMenuItem[];
  /** 
  * (Optional) Flyout menu items click event
  */
  flyoutContextItemsClicked?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

export interface IHOOButtonSplitState {
}

export class HOOButtonSplitState implements IHOOButtonSplitState {
  constructor() { }
}

export default class HOOButtonSplit extends React.PureComponent<IHOOButtonSplitProps, IHOOButtonSplitState> {
  private LOG_SOURCE: string = "💦HOOButtonSplit";
  private _componentClass: string = "hoo-button";

  constructor(props: IHOOButtonSplitProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOButtonSplit";
    switch (props.type) {
      case HOOButtonSplitType.Icon:
        this._componentClass = `${this._componentClass}icon-split`;
        break;
      case HOOButtonSplitType.Primary:
        this._componentClass = `${this._componentClass}split-primary`;
        break;
      case HOOButtonSplitType.Standard:
        this._componentClass = `${this._componentClass}split-standard`;
        break;
    }
    this.state = new HOOButtonSplitState();
  }

  public render(): React.ReactElement<IHOOButtonSplitProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      const iconName = `${this.props.rightIconName || "hoo-icon-arrow-down"}`;
      const iconSVG = symset.Icon(iconName);
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} aria-haspopup="true" className={className} onClick={this.props.onClick}>
          <button className={this._componentClass} aria-haspopup="true">
            <span className="hoo-button-icon" aria-hidden="true">
              <span className="hoo-button-label">{this.props.label || this.props.children}</span>
            </span>
          </button>
          <button className={`${this._componentClass} hoo-buttonicon-flyout`} aria-haspopup="true">
            <span className="hoo-button-icon hoo-buttonchevron">
              <span className="hoo-icon" aria-label={iconName} dangerouslySetInnerHTML={{ __html: iconSVG }}></span>
            </span>
          </button>
          {this.props.flyoutContextItems &&
            <HOOFlyoutMenu contextItems={this.props.flyoutContextItems} contextItemClicked={this.props.flyoutContextItemsClicked} />
          }
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}