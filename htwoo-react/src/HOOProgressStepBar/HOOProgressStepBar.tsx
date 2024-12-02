import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import HOOProgressBar from "../HOOProgressBar";
import HOOProgressStep from "../HOOProgressStep/HOOProgressStep";

export interface IHOOProgressStepBarProps extends IHOOStandardProps {
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-progress-stepbar {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export interface IHOOProgressStepBarState {
  progressBar: React.ReactNode;
  progressStep: React.ReactNode[];
}

export class HOOProgressStepBarState implements IHOOProgressStepBarState {
  constructor(
    public progressBar: React.ReactNode = null,
    public progressStep: React.ReactNode[] = []
  ) { }
}

export default class HOOProgressStepBar extends React.PureComponent<IHOOProgressStepBarProps, IHOOProgressStepBarState> {
  private LOG_SOURCE: string = "💦HOOProgressStepBar";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-progress-stepbar";

  constructor(props: IHOOProgressStepBarProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOProgressStepBar";
    this.state = new HOOProgressStepBarState();
  }

  static getDerivedStateFromProps(props, state) {
    try {
      let progressBar: React.ReactNode = null;
      let progressStep: React.ReactNode[] = [];

      (props.children as React.ReactNode[]).forEach((e) => {
        if (React.isValidElement(e)) {
          const element = e as React.ReactElement;
          if (element.type === HOOProgressBar) {
            progressBar = element;
          } else if (element.type === HOOProgressStep) {
            progressStep.push(element);
          }
        }
      });
      return { progressBar, progressStep };
    } catch (err) {
      console.error("💦HOOField", "(getDerivedStateFromProps)", err);
    }
  }

  public render(): React.ReactElement<IHOOProgressStepBarProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.state.progressBar}
          {this.state.progressStep}
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}