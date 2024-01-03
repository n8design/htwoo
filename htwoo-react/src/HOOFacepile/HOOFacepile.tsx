import * as React from "react";
import { getRandomString } from "../common/Common";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import { IOverflowResizer, OverflowResizer } from "../common/OverflowObserver";
import HOOIconOverflow from "../HOOIconOverflow";

export interface IHOOFacepileProps extends IHOOStandardProps {
  /**
   * CURRENTLY NOT IMPLEMENTED IN HTWOO-CORE
   * (Optional) Overflow enabled - default false
   */
  hasOverflow?: boolean;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-facepile {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export interface IHOOFacepileState {
  showOverflow: boolean;
}

export default class HOOFacepile extends React.PureComponent<IHOOFacepileProps, IHOOFacepileState> {
  private LOG_SOURCE: string = "💦HOOFacepile";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-facepile";
  private _overflowResizer: IOverflowResizer;
  private _overflowContainer: React.RefObject<HTMLDivElement>;

  constructor(props: IHOOFacepileProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOFacepile";
    this.state = { showOverflow: false };
    this._overflowResizer = new OverflowResizer(`HOOCommandBarOR_${getRandomString(10)}`);
    this._overflowResizer.OverflowChangedEvent = this._toggleOverflow;
    this._overflowContainer = React.createRef<HTMLDivElement>();
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

  private _toggleOverflow = (overflow: boolean) => {
    this.setState({ showOverflow: overflow });
  }

  public render(): React.ReactElement<IHOOFacepileProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div data-component={this.LOG_SOURCE} ref={this._overflowContainer} {...this.props.rootElementAttributes} className={className}>
          {this.props.children}
          {this.props.hasOverflow &&
            <HOOIconOverflow overflow={this.state.showOverflow}>
              <menu className="hoo-buttonflyout">
              </menu>
            </HOOIconOverflow>
          }
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}