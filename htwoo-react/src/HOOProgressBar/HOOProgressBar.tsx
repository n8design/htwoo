import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";

export interface IHOOProgressBarProps extends IHOOStandardProps {
  /**
   * Progress bar value, in percent of 100 (e.g. 20)
  */
  value: string;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-progress-bar {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
}

export interface IHOOProgressBarState {
}

export class HOOProgressBarState implements IHOOProgressBarState {
constructor() {}
}

export default class HOOProgressBar extends React.PureComponent<IHOOProgressBarProps, IHOOProgressBarState> {
  private LOG_SOURCE: string = "💦HOOProgressBar";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-progress-bar";

  constructor(props:IHOOProgressBarProps){
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOProgressBar";
    this.state = new HOOProgressBarState();
  }

  public render(): React.ReactElement<IHOOProgressBarProps> {
    try{
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <progress data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className} value={this.props.value} max="100">{this.props.value}%
        </progress>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}