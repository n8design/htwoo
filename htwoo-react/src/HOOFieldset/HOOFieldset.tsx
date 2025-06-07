import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import HOOLegend from "../HOOLegend";

export enum HOOFieldsetType {
  "Standard",
  "NoOutline",
  "Raised"
}

export interface IHOOFieldsetProps extends IHOOStandardProps {
  /**
   * (Optional) change the styling of the fieldset component
  */
  type?: HOOFieldsetType;
  /**
   * (Optional) add optional legend
  */
  legendText?: string;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-fieldset {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
}

export interface IHOOFieldsetState {
}

export class HOOFieldsetState implements IHOOFieldsetState {
  constructor() { }
}

export default class HOOFieldset extends React.PureComponent<IHOOFieldsetProps, IHOOFieldsetState> {
  private LOG_SOURCE: string = "💦HOOFieldset";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-fieldset";

  constructor(props: IHOOFieldsetProps) {
    super(props);
    if (props.type === HOOFieldsetType.NoOutline) {
      this._componentClass += " no-outline";
    } else if (props.type === HOOFieldsetType.Raised) {
      this._componentClass += " raised";
    }
    this.LOG_SOURCE = props.dataComponent || "💦HOOFieldset";
    this.state = new HOOFieldsetState();
  }

  public render(): React.ReactElement<IHOOFieldsetProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <fieldset data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.props.legendText &&
            <HOOLegend legendText={this.props.legendText} />
          }
          {this.props.children}
        </fieldset>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}