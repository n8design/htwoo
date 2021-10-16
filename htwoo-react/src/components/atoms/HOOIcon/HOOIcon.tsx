import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import "../../../../../htwoo-core/src/images/icons.svg";

import "./HOOIcon.css";
import { IHOOStandardProps } from "../../Common.model";
import { symset } from "../../../SymbolSet";

export interface IHOOIconProps extends IHOOStandardProps {
  /**
   * Default viewbox as square, use svgElementAttributes to override.
   */
  viewBoxSize?: number;
  /**
   * Name of icon to be rendered, if omitted must include iconSVG
   */
  iconName?: string;
  /**
   * SVG string representing an icon, if omitted must include iconName
   */
  iconSVG?: string;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
  /**
   * (Optional) SVGElement attributes that will be applied to the root SVG element of the component.
   */
  svgElementAttributes?: React.HTMLAttributes<SVGElement>;
}

export interface IHOOIconState {
}

export class HOOIconState implements IHOOIconState {
  constructor() { }
}

export default class HOOIcon extends React.Component<IHOOIconProps, IHOOIconState> {
  private LOG_SOURCE: string = "🔶HOOIcon";
  private componentClass: string = "hoo-icon";

  constructor(props: IHOOIconProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "🔶HOOIcon";
    this.state = new HOOIconState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOIconProps>, nextState: Readonly<IHOOIconState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public getIconElement(): any {
    const className = (this.props.rootElementAttributes?.className) ? `${this.componentClass} ${this.props.rootElementAttributes?.className}` : this.componentClass;
    const iconSVG = this.props.iconSVG || symset.Icon(this.props.iconName);

    const div = document.createElement("div");
    div.setAttribute("data-component", this.LOG_SOURCE);
    div.setAttribute("class", className);
    div.setAttribute("aria-label", this.props.iconName);

    //const element = <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className} aria-label={this.props.iconName}/>
    div.appendChild(iconSVG)
  }

  public render(): React.ReactElement<IHOOIconProps> {
    try {
      const viewBox = this.props.viewBoxSize ? `0 0 ${this.props.viewBoxSize} ${this.props.viewBoxSize}` : "0 0 32 32";
      const className = (this.props.rootElementAttributes?.className) ? `${this.componentClass} ${this.props.rootElementAttributes?.className}` : this.componentClass;
      const iconSVG = this.props.iconSVG || symset.Icon(this.props.iconName);
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className} aria-label={this.props.iconName}>
          {iconSVG}
          {/* <svg className="hoo-icon-svg" aria-hidden="true" dangerouslySetInnerHTML={{ __html: iconSVG }} viewBox={viewBox} {...this.props.svgElementAttributes} /> */}
        </div>
      );
    } catch (err) {
      Logger.write(`${err} - ${this.LOG_SOURCE} (render)`, LogLevel.Error);
      return null;
    }
  }
}