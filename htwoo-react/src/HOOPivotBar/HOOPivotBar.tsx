import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import HOOPivotButton from "../HOOPivotButton";
import HOOIconOverflow from "../HOOIconOverflow";
import { IOverflowResizer, OverflowResizer } from "../common/OverflowObserver";
import { getRandomString } from "../common/Common";

export interface IHOOPivotItem {
  key: number | string;
  text: string;
}

export interface IHOOPivotBarProps extends IHOOStandardProps {
  /**
   * Key of currently selected Pivot Item
  */
  selectedKey: number | string;
  /**
   * Menu items to render in Pivot Bar
  */
  pivotItems: IHOOPivotItem[];
  /**
   * Pivot Item click event handler.
   */
  onClick: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>, key: number | string) => void;
  /**
   * (Optional) Overflow enabled - default false
   */
  hasOverflow?: boolean;
  /**
  * (Optional) HTMLButtonElement attributes that will be applied to all Pivot Buttons.
  * Class names will be appended to the end of the default class string - hoo-button-pivot {rootElementAttributes.class}
 */
  pivotButtonAttributes?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
  /**
   * (Optional) HTMLMenuElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-pivotbar {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLMenuElement>, HTMLMenuElement>;
}

export interface IHOOPivotBarState {
  showOverflow: boolean;
}

export default class HOOPivotBar extends React.PureComponent<IHOOPivotBarProps, IHOOPivotBarState> {
  private LOG_SOURCE: string = "💦HOOPivotBar";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-pivotbar";
  private _overflowResizer: IOverflowResizer;
  private _overflowContainer: React.RefObject<HTMLDivElement>;

  constructor(props: IHOOPivotBarProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOPivotBar";
    this.state = { showOverflow: false };
    this._overflowResizer = new OverflowResizer(`HOOPivotBarOR_${getRandomString(10)}`);
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

  private _renderPivotItems() {
    let retVal = null;
    const pivotButtonAttributes = { ...this.props.pivotButtonAttributes, role: "menuitem" };
    try {
      if (this.props.pivotItems) {
        retVal = this.props.pivotItems.map((pi, index) => {
          const isSelected = (pi.key === this.props.selectedKey);
          return (
            <HOOPivotButton
              key={pi.key}
              label={pi.text}
              isActive={isSelected}
              onClick={(ev) => { this.props.onClick(ev, pi.key); }}
              rootElementAttributes={pivotButtonAttributes} />
          );
        });
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_renderPivotItems) - ${err}`);
    }
    return retVal;
  }

  public render(): React.ReactElement<IHOOPivotBarProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      let className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      if (this.props.hasOverflow) {
        className += " has-overflow";
      }
      return (
        <menu {...this._rootProps} {...this.props.rootElementAttributes} className={className} role="menubar">
          {!this.props.hasOverflow &&
            this._renderPivotItems()
          }
          {this.props.hasOverflow &&
            <div ref={this._overflowContainer} className={`${this.props.hasOverflow ? "hoo-overflow" : ""}`}>
              {this._renderPivotItems()}
              <HOOIconOverflow overflow={this.state.showOverflow} rootElementAttributes={{ role: "menuitem" }}>
                <menu className="hoo-buttonflyout">
                </menu>
              </HOOIconOverflow>
            </div>
          }
        </menu>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}
