import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
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
  flyoutContextItems?: IHOOFlyoutMenuItem[];
  /**
   * (Optional) icon name, if omitted, hoo-icon-plus will be used.
   */
  leftIconName?: string;
  /**
   * (Optional) icon name, if omitted, hoo-icon-arrow-down will be used.
   */
  rightIconName?: string;
  /** 
  * (Optional) Flyout menu items click event, returns mouse event and HOOFlyoutMenuItem
  */
  flyoutContextItemsClicked?: (ev: React.MouseEvent<HTMLButtonElement>, ci: IHOOFlyoutMenuItem) => void;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-buttoncmd {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

export interface IHOOButtonCommandState {
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

  private _flyoutItemClicked = (event, item) => {
    this.setState({ showFlyout: false });
    if (typeof this.props.flyoutContextItemsClicked == "function") {
      this.props.flyoutContextItemsClicked(event, item);
    }
  }

  public render(): React.ReactElement<IHOOButtonCommandProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      const leftIcon = `${this.props.leftIconName || "hoo-icon-plus"}`;
      const rightIcon = `${this.props.rightIconName || "hoo-icon-arrow-down"}`;
      return (
        <div {...this._rootProps} {...this.props.rootElementAttributes} aria-haspopup="true" className={className}>
          <button className="hoo-buttoncmd" aria-haspopup="true">
            <span className="hoo-button-icon" aria-hidden="true">
              <HOOIcon iconName={leftIcon} />
            </span>
            <span className="hoo-button-label">{this.props.label || this.props.children}</span>
            {this.props.flyoutContextItems != null && this.props.flyoutContextItems.length > 0 &&
              <span className="hoo-button-icon hoo-buttonchevron">
                <HOOIcon iconName={rightIcon} />
              </span>
            }
          </button>
          {this.props.flyoutContextItems && this.props.flyoutContextItems.length > 0 &&
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