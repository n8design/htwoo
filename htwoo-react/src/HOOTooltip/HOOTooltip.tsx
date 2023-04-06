import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";

export enum HOOTipPosition {
  TopLeft="top-left",
  TopCenter="top-center",
  TopRight="top-right",
  RightTop="right-top",
  RightCenter="right-center",
  RightBottom="right-bottom",
  BottomLeft="bottom-left",
  BottomCenter="bottom-center",
  BottomRight="bottom-right",
  LeftTop="left-top",
  LeftCenter="left-center",
  LeftBottom="left-bottom"
}

export interface IHOOTooltipProps extends IHOOStandardProps {
  /**
  * Tooltip position
  */
  position: HOOTipPosition;
  /**
  * (Optional) Tooltip text, if omitted renders children
  */
  text?: string;
  /**
  * Tooltip is visible
  */
  visible?: boolean;
  /**
    * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
    * Class names will be appended to the end of the default class string - hoo-tooltip {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export interface IHOOTooltipState {
}

export class HOOTooltipState implements IHOOTooltipState {
  constructor() { }
}

export default class HOOTooltip extends React.Component<IHOOTooltipProps, IHOOTooltipState> {
  private LOG_SOURCE: string = "💦HOOTooltip";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-tooltip";

  constructor(props: IHOOTooltipProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOTooltip";
    this.state = new HOOTooltipState();
    this._componentClass += this.props.position;
    //this._componentClass += (props.visible) ? " show" : "";
  }

  public render(): React.ReactElement<IHOOTooltipProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const styleBlock = { "will-change": "transform" } as React.CSSProperties;
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div {...this._rootProps} {...this.props.rootElementAttributes} className={className} style={styleBlock} role="tooltip">         
          <div className="hoo-tooltip-content">{this.props.text || this.props.children}</div>
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}