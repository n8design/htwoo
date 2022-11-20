import * as React from "react";
import { IHOOStandardProps } from "../../common/IHOOStandardProps";
import HOOFlyoutMenu, { IHOOFlyoutMenuItem } from "../HOOFlyoutMenu/HOOFlyoutMenu";
import HOOIcon from "../HOOIcon/HOOIcon";

export interface IHOOButtonCommandProps extends IHOOStandardProps {
  /**
   * (Optional) button label, if omitted, components children will be rendered.
   */
  label?: string;
  /**
   * (Optional) Flyout menu items, if omitted, no flyout will be rendered.
   */
  flyoutMenuItems?: IHOOFlyoutMenuItem[];
  /**
   * (Optional) icon name, if omitted, hoo-icon-plus will be used.
   */
  leftIconName?: string;
  /**
   * (Optional) icon name, if omitted, hoo-icon-arrow-down will be used.
   */
  rightIconName?: string;
  /** 
   * (Optional) When no flyout menu items available, returns mouse event for button click
   */
  onClick?: (ev: React.MouseEvent<HTMLElement>) => void;
  /** 
  * (Optional) Flyout menu items click event, returns mouse event and HOOFlyoutMenuItem
  */
  flyoutMenuItemClicked?: (ev: React.MouseEvent<HTMLElement>, ci: IHOOFlyoutMenuItem) => void;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-buttoncmd {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export interface IHOOButtonCommandState {
  showFlyout: boolean;
}

export default class HOOButtonCommand extends React.PureComponent<IHOOButtonCommandProps, IHOOButtonCommandState> {
  private LOG_SOURCE: string = "💦HOOButtonCommand";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-buttoncmd";

  constructor(props: IHOOButtonCommandProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOButtonCommand";
    this.state = { showFlyout: false };
  }

  private _flyoutItemClicked = (event: React.MouseEvent<HTMLButtonElement>, item: IHOOFlyoutMenuItem) => {
    event.stopPropagation();
    this.setState({ showFlyout: false });
    if (typeof this.props.flyoutMenuItemClicked == "function") {
      this.props.flyoutMenuItemClicked(event, item);
    }
  }

  private _onClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    try {
      if (this.props.flyoutMenuItems && this.props.flyoutMenuItems.length > 0) {
        this.setState({ showFlyout: !this.state.showFlyout });
      } else {
        this.props.onClick(ev as React.MouseEvent<HTMLElement>);
      }
    } catch (err) {

    }
  }

  public render(): React.ReactElement<IHOOButtonCommandProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      let className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      if (this.state.showFlyout) {
        className += " show-flyout";
      }
      const leftIcon = `${this.props.leftIconName || "hoo-icon-plus"}`;
      const rightIcon = `${this.props.rightIconName || "hoo-icon-arrow-down"}`;
      const ariaHaspopup = (this.props.flyoutMenuItems != null && this.props.flyoutMenuItems.length > 0) ? { "aria-haspopup": true } : null;
      return (
        <div {...this._rootProps} {...this.props.rootElementAttributes} {...ariaHaspopup} className={className} onClick={this._onClick}>
          <button className="hoo-buttoncmd" aria-haspopup="true">
            <span className="hoo-button-icon" aria-hidden="true">
              <HOOIcon iconName={leftIcon} />
            </span>
            <span className="hoo-button-label">{this.props.label || this.props.children}</span>
            {this.props.flyoutMenuItems != null && this.props.flyoutMenuItems.length > 0 &&
              <span className="hoo-button-icon hoo-buttonchevron">
                <HOOIcon iconName={rightIcon} />
              </span>
            }
          </button>
          {this.props.flyoutMenuItems && this.props.flyoutMenuItems.length > 0 &&
            <HOOFlyoutMenu contextItems={this.props.flyoutMenuItems} contextItemClicked={this._flyoutItemClicked} />
          }
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}