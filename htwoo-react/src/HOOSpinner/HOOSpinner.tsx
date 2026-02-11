import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";

export enum HOOSpinnerSize {
  "Standard" = "",
  "XSmall" = "xsmall",
  "Small" = "small",
  "Large" = "large"
}

export interface IHOOSpinnerProps extends IHOOStandardProps {
  /**
   * Size of spinner; Defaults to "Standard" which is ""
  */
  size: HOOSpinnerSize;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-spinner {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export interface IHOOSpinnerState {
}

export class HOOSpinnerState implements IHOOSpinnerState {
  constructor() { }
}

export default class HOOSpinner extends React.PureComponent<IHOOSpinnerProps, IHOOSpinnerState> {
  private LOG_SOURCE: string = "💦HOOSpinner";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-spinner";

  constructor(props: IHOOSpinnerProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOSpinner";
    this._componentClass = (props.size == HOOSpinnerSize.Standard) ? this._componentClass : `${this._componentClass} ${props.size}`;
    this.state = new HOOSpinnerState();
  }

  public render(): React.ReactElement<IHOOSpinnerProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div {...this._rootProps}
          {...this.props.rootElementAttributes}
          className={className}>
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}