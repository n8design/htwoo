import * as React from "react";
import { HOODataAttributes, IHOOStandardProps } from "../common/IHOOStandardProps";

export interface IHOODialogActionsProps extends IHOOStandardProps {
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-dlg-actions {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & HOODataAttributes;
}

export interface IHOODialogActionsState {
}

export class HOODialogActionsState implements IHOODialogActionsState {
constructor() {}
}

export default class HOODialogActions extends React.PureComponent<IHOODialogActionsProps, IHOODialogActionsState> {
  private LOG_SOURCE: string = "💦HOODialogActions";
  private _rootProps: { [key: string]: unknown } = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-dlg-actions";

  constructor(props:IHOODialogActionsProps){
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOODialogActions";
    this.state = new HOODialogActionsState();
  }

  public render(): React.ReactElement<IHOODialogActionsProps> | undefined {
    try{
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.props.children}
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return;
    }
  }
}