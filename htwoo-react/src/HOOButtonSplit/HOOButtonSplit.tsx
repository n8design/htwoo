import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import HOOFlyoutMenu, { IHOOFlyoutMenuItem } from "../HOOFlyoutMenu/HOOFlyoutMenu";
import { symset } from "../SymbolSet";
import HOOIcon from "../HOOIcon/HOOIcon";

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
   * (Optional) icon title
   */
  rightIconTitle?: string;
  /** 
  * (Optional) Flyout menu items click event, returns mouse event and HOOFlyoutMenuItem
  */
  flyoutContextItemsClicked?: (ev: React.MouseEvent<HTMLButtonElement>, ci: IHOOFlyoutMenuItem) => void;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-button {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export interface IHOOButtonSplitState {
  showFlyout: boolean;
}

export default class HOOButtonSplit extends React.PureComponent<IHOOButtonSplitProps, IHOOButtonSplitState> {
  private LOG_SOURCE: string = "💦HOOButtonSplit";
  private _rootProps = { "data-component": this.LOG_SOURCE };
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
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const buttonDisabled = (this.props.flyoutContextItems && this.props.flyoutContextItems.length > 0) ? false : true;
      const showFlyoutClass = this.state.showFlyout ? "show-flyout " : "";
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${showFlyoutClass}${this.props.rootElementAttributes?.className}` : `${this._componentClass} ${showFlyoutClass}`;
      const iconName = `${this.props.rightIconName || "hoo-icon-arrow-down"}`;
      const iconSVG = symset.Icon(iconName, this.props.rightIconTitle || "");
      return (
        <div {...this._rootProps} {...this.props.rootElementAttributes} aria-haspopup="true" className={className}>
          <button className="hoo-buttonsplit-standard" aria-haspopup="true">
            <span className="hoo-button-label">{this.props.label || this.props.children}</span>
          </button>
          <button className="hoo-buttonsplit-carret" onClick={this._buttonClicked} aria-pressed={this.state.showFlyout} disabled={buttonDisabled} aria-disabled={buttonDisabled}>
            <HOOIcon iconSVG={iconSVG} rootElementAttributes={{ className: "hoo-button-label" }} />
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