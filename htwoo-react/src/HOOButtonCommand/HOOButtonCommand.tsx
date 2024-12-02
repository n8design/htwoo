import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import HOOFlyoutMenu, { IHOOFlyoutMenuItem } from "../HOOFlyoutMenu/HOOFlyoutMenu";
import HOOIcon from "../HOOIcon/HOOIcon";

export enum HOOButtonCommandType {
  "Standard",
  "Hyperlink"
}

export interface IHOOButtonCommandProps extends IHOOStandardProps {
  /**
   * (Optional) button Type, if omitted, assumes standard button vs hyperlink
   */
  type?: HOOButtonCommandType;
  /**
   * (Optional) button label, if omitted, components children will be rendered unless omitted and then leftIconName will only be rendered.
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
   * (Optional) icon name, if omitted, hoo-icon-arrow-down will be used if flyoutMenuItems are included.
   */
  rightIconName?: string;
  /**
  * (Optional) hyperlink, required when HOOButtonCommandType is Hyperlink.
  */
  href?: string;
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
    try {
      event.stopPropagation();
      this.setState({ showFlyout: false });
      if (typeof this.props.flyoutMenuItemClicked == "function") {
        this.props.flyoutMenuItemClicked(event, item);
      }
    } catch (err) {
      console.error(this.LOG_SOURCE, "(_flyoutItemClicked)", err);
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
      console.error(this.LOG_SOURCE, "(_onClick)", err);
    }
  }

  public renderButton(leftIcon: string, rightIcon: string): React.ReactElement {
    try {
      return (
        <button className="hoo-buttoncmd" aria-haspopup="true" title={this.props.label || leftIcon || "Command Button"}>
          {this.props.children == null &&
            <span className="hoo-button-icon" aria-hidden="true">
              <HOOIcon iconName={leftIcon} title={leftIcon} />
            </span>
          }
          {(this.props.label || this.props.children) &&
            <span className="hoo-button-label">{this.props.label || this.props.children}</span>
          }
          {this.props.flyoutMenuItems != null && this.props.flyoutMenuItems.length > 0 &&
            <span className="hoo-button-icon hoo-buttonchevron">
              <HOOIcon iconName={rightIcon} />
            </span>
          }
        </button>
      );
    } catch (err) {
      console.error(this.LOG_SOURCE, "(renderButton)", err);
    }
  }

  public renderHyperlink(leftIcon: string, rightIcon: string): React.ReactElement {
    try {
      return (
        <a href={this.props.href} className="hoo-buttoncmd" aria-haspopup="true">
          {this.props.children == null &&
            <span className="hoo-button-icon" aria-hidden="true">
              <HOOIcon iconName={leftIcon} title={leftIcon} />
            </span>
          }
          {(this.props.label || this.props.children) &&
            <span className="hoo-button-label">{this.props.label || this.props.children}</span>
          }
          {this.props.flyoutMenuItems != null && this.props.flyoutMenuItems.length > 0 &&
            <span className="hoo-button-icon hoo-buttonchevron">
              <HOOIcon iconName={rightIcon} />
            </span>
          }
        </a>
      );
    } catch (err) {
      console.error(this.LOG_SOURCE, "(renderHyperlink)", err);
    }
  }

  public render(): React.ReactElement<IHOOButtonCommandProps> {
    try {
      const type = (this.props.type == null) ? HOOButtonCommandType.Standard : this.props.type;
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
          {type === HOOButtonCommandType.Standard &&
            this.renderButton(leftIcon, rightIcon)
          }
          {type === HOOButtonCommandType.Hyperlink &&
            this.renderHyperlink(leftIcon, rightIcon)
          }
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