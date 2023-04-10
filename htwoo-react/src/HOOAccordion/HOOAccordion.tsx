import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import HOOIcon from "../HOOIcon";

export interface IHOOAccordionProps extends IHOOStandardProps {
  /**
   * Accordion item header text.
  */
  header: string;
  /**
   * (Optional) Icon Name for the icon to be rendered in the header
  */
  iconName?: string;
  /**
   * (Optional) Accordion item content as a string of text. If omitted child elements will be rendered.
  */
  content?: string;
  /**
   * (Optional) HTMLDetailsElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-accordion {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
}

export interface IHOOAccordionState {
}

export class HOOAccordionState implements IHOOAccordionState {
  constructor() { }
}

export default class HOOAccordion extends React.PureComponent<IHOOAccordionProps, IHOOAccordionState> {
  private LOG_SOURCE: string = "💦HOOAccordion";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-accordion";

  constructor(props: IHOOAccordionProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOAccordion";
    this.state = new HOOAccordionState();
  }

  public render(): React.ReactElement<IHOOAccordionProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <details data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          <summary className="hoo-accordion-header">
            <div className="hoo-accordion-summary">
              {this.props.iconName &&
                <HOOIcon iconName={this.props.iconName} />
              }
              <h3>{this.props.header}</h3>
            </div>
          </summary>
          <div className="hoo-accordion-content">
            {this.props.content &&
              this.props.content
            }
            {!this.props.content &&
              this.props.children
            }
          </div>
        </details>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}