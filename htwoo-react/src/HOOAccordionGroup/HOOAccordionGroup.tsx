import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";

export interface IHOOAccordionGroupProps extends IHOOStandardProps {
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-accordion-group {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
}

export interface IHOOAccordionGroupState {
}

export class HOOAccordionGroupState implements IHOOAccordionGroupState {
constructor() {}
}

export default class HOOAccordionGroup extends React.PureComponent<IHOOAccordionGroupProps, IHOOAccordionGroupState> {
  private LOG_SOURCE: string = "💦HOOAccordionGroup";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-accordion-group";

  constructor(props:IHOOAccordionGroupProps){
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOAccordionGroup";
    this.state = new HOOAccordionGroupState();
  }

  public render(): React.ReactElement<IHOOAccordionGroupProps> {
    try{
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <section data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className} role="accordion">
          {this.props.children}
        </section >
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}