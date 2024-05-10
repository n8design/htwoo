import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";

export interface IHOODialogContentProps extends IHOOStandardProps {
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-dlgcontent {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export interface IHOODialogContentState {
}

export class HOODialogContentState implements IHOODialogContentState {
  constructor() { }
}

export default class HOODialogContent extends React.PureComponent<IHOODialogContentProps, IHOODialogContentState> {
  private LOG_SOURCE: string = "💦HOODialogContent";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-dlgcontent";

  constructor(props: IHOODialogContentProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOODialogContent";
    this.state = new HOODialogContentState();
  }

  public render(): React.ReactElement<IHOODialogContentProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div {...this._rootProps} {...this.props.rootElementAttributes} className={className}>
          {this.props.children}
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}