import * as React from "react";
import { HOODataAttributes, IHOOStandardProps } from "../common/IHOOStandardProps";

export interface IHOOLegendProps extends IHOOStandardProps {
  /**
   * The text to display for the legend
  */
  legendText: string;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-legend {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement> & HOODataAttributes;
}

export interface IHOOLegendState {
}

export class HOOLegendState implements IHOOLegendState {
constructor() {}
}

export default class HOOLegend extends React.PureComponent<IHOOLegendProps, IHOOLegendState> {
  private LOG_SOURCE: string = "💦HOOLegend";
  private _rootProps: { [key: string]: unknown } = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-legend";

  constructor(props:IHOOLegendProps){
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOLegend";
    this.state = new HOOLegendState();
  }

  public render(): React.ReactElement<IHOOLegendProps> | undefined {
    try{
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <legend data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.props.legendText}
        </legend>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return;
    }
  }
}