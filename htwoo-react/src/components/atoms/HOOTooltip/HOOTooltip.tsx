import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";

export enum HOOPosition {
  Top = "top",
  Right = "right"
}

export interface IHOOTooltipProps extends IHOOStandardProps {
  /**
  * Tooltip text
  */
  text: string;
  /**
  * Tooltip position
  */
  position: HOOPosition;
  /**
  * Tooltip is visible
  */
  visible: boolean;
  /**
    * (Optional) HTMLElement attributes that will be applied to the root element of the component.
    * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}

export interface IHOOTooltipState {
}

export class HOOTooltipState implements IHOOTooltipState {
  constructor() { }
}

export default class HOOTooltip extends React.Component<IHOOTooltipProps, IHOOTooltipState> {
  private LOG_SOURCE: string = "💦HOOTooltip";
  private _componentClass: string = "hoo-tooltip";

  constructor(props: IHOOTooltipProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOTooltip";
    this.state = new HOOTooltipState();
    this._componentClass += (props.position === HOOPosition.Right) ? " hoo-tooltip-right" : " hoo-tooltip-top";
    this._componentClass += (props.visible) ? " show" : "";
  }

  public render(): React.ReactElement<IHOOTooltipProps> {
    try {
      const styleBlock = { "will-change": "transform" } as React.CSSProperties;
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div data-component={this.LOG_SOURCE} id="tooltip20619" {...this.props.rootElementAttributes} className={className} style={styleBlock} role="tooltip" x-placement="top">
          <div className="arrow"></div>
          <div className="hoo-tooltip-content">{this.props.text}</div>
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}