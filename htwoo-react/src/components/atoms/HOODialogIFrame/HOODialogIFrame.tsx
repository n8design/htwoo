import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";

export enum HOOIFrameRatio {
  "3by4" = "3by4",
  "squared" = "squared",
  "16by9" = "16by9"
}

export interface IHOODialogIFrameProps extends IHOOStandardProps {
  /**
   * Source for iFrame
  */
  src: string;
  /**
   * Ratio of iFrame
  */
  ratio?: HOOIFrameRatio;
  /**
   * (Optional) React Ref element
  */
  iFrameRef?: React.RefObject<HTMLIFrameElement>;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}

export interface IHOODialogIFrameState {
}

export class HOODialogIFrameState implements IHOODialogIFrameState {
  constructor() { }
}

export default class HOODialogIFrame extends React.PureComponent<IHOODialogIFrameProps, IHOODialogIFrameState> {
  private LOG_SOURCE: string = "💦HOODialogIFrame";
  private _componentClass: string = "hoo-dlg-iframe";

  constructor(props: IHOODialogIFrameProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOODialogIFrame";
    this.state = new HOODialogIFrameState();
  }

  public render(): React.ReactElement<IHOODialogIFrameProps> {
    try {
      const ratio = (this.props.ratio) ? `ratio-${this.props.ratio}` : "";
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${ratio} ${this.props.rootElementAttributes?.className}` : `${this._componentClass} ${ratio}`;
      return (
        <iframe data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className} ref={this.props.iFrameRef} src={this.props.src}>
        </iframe>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}