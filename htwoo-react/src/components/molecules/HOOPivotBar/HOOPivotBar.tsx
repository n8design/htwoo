import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
import HOOPivotButton from "../../../components/atoms/HOOPivotButton/HOOPivotButton";

export interface IHOOPivotItem {
  key: number | string;
  text: string;
}
//TODO: Add Overflow Option
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
   * (Optional) HTMLButtonElement attributes that will be applied to all Pivot Buttons.
   * Class names will be appended to the end of the default class string - hoo-button-pivot {rootElementAttributes.class}
  */
  pivotButtonAttributes?: React.HTMLAttributes<HTMLButtonElement>;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-pivotbar {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

export interface IHOOPivotBarState {

}

export class HOOPivotBarState implements IHOOPivotBarState {
  constructor() { }
}

export default class HOOPivotBar extends React.PureComponent<IHOOPivotBarProps, IHOOPivotBarState> {
  private LOG_SOURCE: string = "💦HOOPivotBar";
  private _componentClass: string = "hoo-pivotbar";

  constructor(props: IHOOPivotBarProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOPivotBar";
    this.state = new HOOPivotBarState();
  }

  public render(): React.ReactElement<IHOOPivotBarProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.props.pivotItems && this.props.pivotItems.map((pi) => {
            const isSelected = (pi.key === this.props.selectedKey);
            return (
              <HOOPivotButton label={pi.text} isActive={isSelected} onClick={(ev) => { this.props.onClick(ev, pi.key); }} rootElementAttributes={this.props.pivotButtonAttributes} />
            );
          })}
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}