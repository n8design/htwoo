import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
import HOOFlyoutMenu, { IHOOFlyoutMenuItem } from "../HOOFlyoutMenu/HOOFlyoutMenu";
import { symset } from "../../../SymbolSet";

export enum HOOButtonSplitType {
  "Standard",
  "Primary"
}
export interface IHOOButtonSplitProps extends IHOOStandardProps {
  /**
   * HOOButtonType enum -- omit label for "Icon" type and provide HOOIcon child node.
   */
  type: HOOButtonSplitType;
  /**
   * (Optional) Flyout menu items, if omitted, no flyout will be rendered.
   */
  flyoutContextItems: IHOOFlyoutMenuItem[];
  /**
   * (Optional) button label, if omitted, components children will be rendered.
   */
  label?: string;
  /**
   * (Optional) icon name, if omitted, icon-arrow-down will be used.
   */
  rightIconName?: string;
  /** 
  * (Optional) Flyout menu items click event, returns mouse event and HOOFlyoutMenuItem
  */
  flyoutContextItemsClicked?: (ev: React.MouseEvent<HTMLButtonElement>, ci: IHOOFlyoutMenuItem) => void;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

export interface IHOOButtonSplitState {
  showFlyout: boolean;
}

export default class HOOButtonSplit extends React.PureComponent<IHOOButtonSplitProps, IHOOButtonSplitState> {
  private LOG_SOURCE: string = "💦HOOButtonSplit";
  private _componentClass: string = "hoo-button";

  constructor(props: IHOOButtonSplitProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOButtonSplit";
    switch (props.type) {
      case HOOButtonSplitType.Primary:
        this._componentClass = `${this._componentClass}split-primary`;
        break;
      case HOOButtonSplitType.Standard:
        this._componentClass = `${this._componentClass}split`;
        break;
    }
    this.state = { showFlyout: false };
  }

  private _buttonClicked = () => {
    if (this.props.flyoutContextItems && this.props.flyoutContextItems.length > 0) {
      this.setState({ showFlyout: !this.state.showFlyout });
    }
  }

  private _flyoutItemClicked = (event, item) => {
    this.setState({ showFlyout: false });
    if (typeof this.props.flyoutContextItemsClicked == "function") {
      this.props.flyoutContextItemsClicked(event, item);
    }
  }

  public render(): React.ReactElement<IHOOButtonSplitProps> {
    try {
      const buttonDisabled = (this.props.flyoutContextItems && this.props.flyoutContextItems.length > 0) ? false : true;
      const showFlyoutClass = this.state.showFlyout ? "show-flyout " : "";
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${showFlyoutClass}${this.props.rootElementAttributes?.className}` : `${this._componentClass} ${showFlyoutClass}`;
      const iconName = `${this.props.rightIconName || "hoo-icon-arrow-down"}`;
      const iconSVG = symset.Icon(iconName);
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} aria-haspopup="true" className={className}>
          <button className="hoo-buttonsplit-standard" aria-haspopup="true">
            <span className="hoo-button-label">{this.props.label || this.props.children}</span>
          </button>
          <button className="hoo-buttonsplit-carret" onClick={this._buttonClicked} aria-pressed={this.state.showFlyout} disabled={buttonDisabled} aria-disabled={buttonDisabled}>
            <span className="hoo-button-label">
              <span className="hoo-icon" aria-label={iconName} dangerouslySetInnerHTML={{ __html: iconSVG }}></span>
            </span>
          </button>
          {this.props.flyoutContextItems &&
            <HOOFlyoutMenu contextItems={this.props.flyoutContextItems} contextItemClicked={this._flyoutItemClicked} />
          }
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}