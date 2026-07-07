import * as React from "react";
import { HOODataAttributes, IHOOStandardProps } from "../common/IHOOStandardProps";

export interface IHOODocumentCardProps extends IHOOStandardProps {
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-splashcard {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & HOODataAttributes;
}

export interface IHOODocumentCardState {
}

export class HOODocumentCardState implements IHOODocumentCardState {
  constructor() { }
}

export default class HOODocumentCard extends React.PureComponent<IHOODocumentCardProps, IHOODocumentCardState> {
  private LOG_SOURCE: string = "💦HOODocumentCard";
  private _rootProps: { [key: string]: unknown } = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-doccard";

  constructor(props: IHOODocumentCardProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOODocumentCard";
    this.state = new HOODocumentCardState();
  }

  public render(): React.ReactElement<IHOODocumentCardProps> | undefined {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <article {...this._rootProps} {...this.props.rootElementAttributes} className={className}>
          {this.props.children}
        </article>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return;
    }
  }
}