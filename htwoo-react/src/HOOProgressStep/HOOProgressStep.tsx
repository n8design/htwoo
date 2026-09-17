import * as React from "react";
import { HOOCSSCustomProperties, HOODataAttributes, IHOOStandardProps } from "../common/IHOOStandardProps";

export interface IHOOProgressStepProps extends IHOOStandardProps {
  /**
   * Label for progress bar step.
  */
  label: string;
  /**
   * The step offset in a percent of 100%. e.g. "20"
  */
  offsetPercent: string;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-progress-step {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & HOODataAttributes;
}

export interface IHOOProgressStepState {
}

export class HOOProgressStepState implements IHOOProgressStepState {
  constructor() { }
}

export default class HOOProgressStep extends React.PureComponent<IHOOProgressStepProps, IHOOProgressStepState> {
  private LOG_SOURCE: string = "💦HOOProgressStep";
  private _rootProps: { [key: string]: unknown } = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-progress-step";

  constructor(props: IHOOProgressStepProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOProgressStep";
    this.state = new HOOProgressStepState();
  }

  public render(): React.ReactElement<IHOOProgressStepProps> | undefined {
    try {
      let styleblock: HOOCSSCustomProperties = {};
      styleblock["--step-offset"] = `${this.props.offsetPercent}%`;
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className} style={styleblock}>
          <div className="inner">
            <div className="hoo-progress-step-indicator">
            </div>
            <div className="hoo-progress-step-label">
              {this.props.label}
            </div>
          </div>
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return;
    }
  }
}