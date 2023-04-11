import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import { symset } from "../SymbolSet";

export interface IHOOIconProps extends IHOOStandardProps {
  /**
   * Accessibility label for the icon
   */
  iconLabel?: string;
  /**
   * Name of icon to be rendered, if omitted must include iconSVG
   */
  iconName?: string;
  /**
   * SVG string representing an icon that will be injected into containing DIV, if omitted must include iconName
   */
  iconSVG?: string;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
}

export interface IHOOIconState {
}

export class HOOIconState implements IHOOIconState {
  constructor() { }
}

export default class HOOIcon extends React.PureComponent<IHOOIconProps, IHOOIconState> {
  private LOG_SOURCE: string = "💦HOOIcon";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private componentClass: string = "hoo-icon";

  constructor(props: IHOOIconProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOIcon";
    this.state = new HOOIconState();
  }

  public render(): React.ReactElement<IHOOIconProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this.componentClass} ${this.props.rootElementAttributes?.className}` : this.componentClass;
      const iconSVG = this.props.iconSVG || symset.Icon(this.props.iconName);
      return (
        <>
          <span {...this._rootProps}
            {...this.props.rootElementAttributes}
            className={className}
            dangerouslySetInnerHTML={{ __html: iconSVG }}>
          </span >
          <span className="hidden-visually">{this.props.iconLabel || this.props.iconName || "Icon"}</span>
        </>
      );
    } catch (err) {
      console.error(`${err} - ${this.LOG_SOURCE} (render)`);
      return null;
    }
  }
}