import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import { IHOOStandardProps } from "../../Common.model";

export interface IHOODialogContentProps extends IHOOStandardProps {
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

export interface IHOODialogContentState {
}

export class HOODialogContentState implements IHOODialogContentState {
  constructor() { }
}

export default class HOODialogContent extends React.Component<IHOODialogContentProps, IHOODialogContentState> {
  private LOG_SOURCE: string = "💦HOODialogContent";
  private _componentClass: string = "hoo-dlgcontent";

  constructor(props: IHOODialogContentProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOODialogContent";
    this.state = new HOODialogContentState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOODialogContentProps>, nextState: Readonly<IHOODialogContentState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOODialogContentProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.props.children}
        </div>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}