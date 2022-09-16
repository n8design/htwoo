import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
import HOOIconOverflow from "../../../HOOIconOverflow";
import { IOverflowResizer, OverflowResizer } from "../../common/OverflowObserver";
import { getRandomString } from "../../common/Common";
import HOOButtonCommand from "../../../HOOButtonCommand";
import { IHOOFlyoutMenuItem } from "../../../HOOFlyoutMenu";

export interface IHOOCommandItem {
  key: number | string;
  text: string;
  flyoutMenuItems: IHOOFlyoutMenuItem[];
}

export interface IHOOCommandBarProps extends IHOOStandardProps {
  /**
   * Key of currently selected Command Item
  */
  selectedKey: number | string;
  /**
   * Menu items to render in Command Bar
  */
  commandItems: IHOOCommandItem[];
  /**
   * Command Item click event handler.
   */
  onClick: (ev: React.MouseEvent<HTMLElement>, commandKey: number | string, flyoutItem: IHOOFlyoutMenuItem) => void;
  /**
   * (Optional) Overflow enabled - default false
   */
  hasOverflow?: boolean;
  /**
   * (Optional) HTMLButtonElement attributes that will be applied to all Command Buttons.
   * Class names will be appended to the end of the default class string - hoo-button-command {rootElementAttributes.class}
  */
  commandButtonAttributes?: React.HTMLAttributes<HTMLDivElement>;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-cmdbar {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

export interface IHOOCommandBarState {
  showOverflow: boolean;
}

export default class HOOCommandBar extends React.PureComponent<IHOOCommandBarProps, IHOOCommandBarState> {
  private LOG_SOURCE: string = "💦HOOCommandBar";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-cmdbar";
  private _overflowResizer: IOverflowResizer;
  private _overflowContainer: React.RefObject<HTMLDivElement>;

  constructor(props: IHOOCommandBarProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOCommandBar";
    props.hasOverflow = props.hasOverflow || false;
    this.state = { showOverflow: false };
    this._overflowResizer = new OverflowResizer(`HOOCommandBarOR_${getRandomString(10)}`);
    this._overflowResizer.OverflowChangedEvent = this._toggleOverflow;
    this._overflowContainer = React.createRef<HTMLDivElement>();
  }

  private _toggleOverflow = (overflow: boolean) => {
    this.setState({ showOverflow: overflow });
  }

  public componentDidMount(): void {
    try {
      if (this.props.hasOverflow && this._overflowResizer != null && this._overflowContainer.current != null) {
        this._overflowResizer.ObserveElement = this._overflowContainer.current;
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (componentDidMount) - ${err}`);
    }
  }

  private _renderCommandItems() {
    let retVal = null;
    try {
      if (this.props.commandItems) {
        retVal = this.props.commandItems.map((pi, index) => {
          const isSelected = (pi.key === this.props.selectedKey);
          return (
            <HOOButtonCommand
              key={pi.key}
              label={pi.text}
              flyoutMenuItems={pi.flyoutMenuItems}
              flyoutMenuItemClicked={(ev, fmi: IHOOFlyoutMenuItem) => { this.props.onClick(ev, pi.key, fmi); }}
              rootElementAttributes={this.props.commandButtonAttributes} />
          );
        });
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_renderCommandItems) - ${err}`);
    }
    return retVal;
  }

  public render(): React.ReactElement<IHOOCommandBarProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      let className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      if (this.props.hasOverflow) {
        className += " has-overflow";
      }
      return (
        <div {...this._rootProps} {...this.props.rootElementAttributes} className={className}>
          {!this.props.hasOverflow &&
            this._renderCommandItems()
          }
          {this.props.hasOverflow &&
            <div ref={this._overflowContainer} className={`hoo-overflow ${(this.state.showOverflow ? "show-flyout" : "")}`}>
              {this._renderCommandItems()}
              <HOOIconOverflow overflow={this.state.showOverflow} />
            </div>
          }
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}
