import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
import HOOFlyoutMenu, { IHOOFlyoutMenuItem } from "../HOOFlyoutMenu/HOOFlyoutMenu";
import { symset } from "../../../SymbolSet";

export interface IHOOIconSplitProps extends IHOOStandardProps {
  /**
   * Left Icon name
   */
  leftIconName: string;
  /**
   * Flyout menu items, if omitted, no flyout will be rendered.
   */
  flyoutContextItems: IHOOFlyoutMenuItem[];
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
   * Class names will be appended to the end of the default class string - hoo-buttonicon-split {rootElementAttributes.class}
  */
  rootElementAttributes?: React.AllHTMLAttributes<HTMLDivElement>;
}

export interface IHOOIconSplitState {
  showFlyout: boolean;
}

export default class HOOIconSplit extends React.PureComponent<IHOOIconSplitProps, IHOOIconSplitState> {
  private LOG_SOURCE: string = "💦HOOIconSplit";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-buttonicon-split";

  constructor(props: IHOOIconSplitProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOIconSplit";
    this.state = { showFlyout: false };
  }

  private _buttonClicked = () => {
    if (this.props.flyoutContextItems) {
      this.setState({ showFlyout: !this.state.showFlyout });
    }
  }

  private _flyoutItemClicked = (event, item) => {
    this.setState({ showFlyout: false });
    if (typeof this.props.flyoutContextItemsClicked == "function") {
      this.props.flyoutContextItemsClicked(event, item);
    }
  }

  public render(): React.ReactElement<IHOOIconSplitProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const buttonDisabled = (this.props.flyoutContextItems && this.props.flyoutContextItems.length > 0) ? false : true;
      const showFlyoutClass = this.state.showFlyout ? "show-flyout " : "";
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${showFlyoutClass}${this.props.rootElementAttributes?.className}` : `${this._componentClass} ${showFlyoutClass}`;
      const iconName = `${this.props.rightIconName || "hoo-icon-arrow-down"}`;
      const iconSVG = symset.Icon(iconName);
      const leftIconSVG = symset.Icon(this.props.leftIconName);
      return (
        <div {...this._rootProps} {...this.props.rootElementAttributes} aria-haspopup="true" className={className}>
          <button className={this._componentClass} aria-haspopup="true">
            <span className="hoo-button-icon" aria-hidden="true">
              <span className="hoo-icon" aria-label={iconName} dangerouslySetInnerHTML={{ __html: leftIconSVG }}></span>
            </span>
          </button>
          <button className="hoo-buttonicon-split hoo-buttonicon-flyout" onClick={this._buttonClicked} aria-pressed={this.state.showFlyout} disabled={buttonDisabled} aria-disabled={buttonDisabled}>
            <span className="hoo-button-icon hoo-buttonchevron">
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