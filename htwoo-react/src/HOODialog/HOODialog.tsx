import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";

export enum HOODialogType {
  "Standard",
  "StandardError",
  "StandardSuccess",
  "StandardWarning",
  "SidebarLeft",
  "SidebarRight"
}

export interface IHOODialogProps extends IHOOStandardProps {
  /**
   * Is dialog visible
  */
  type: HOODialogType;
  /**
   * Is dialog visible
  */
  visible: boolean;
  /**
   * Dialog height (e.g. "30vh" or "30%" or "30px"); required for all HOODialogType Standard
  */
  height?: string;
  /**
   * Dialog height (e.g. "40vw" or "40%" or "40px"); required for all HOODialogType
  */
  width?: string;
  /**
   * (Optional) HTMLDialogElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-mdldialog-outer {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
}

export interface IHOODialogState {
}

export class HOODialogState implements IHOODialogState {
  constructor() { }
}

export default class HOODialog extends React.PureComponent<IHOODialogProps, IHOODialogState> {
  private LOG_SOURCE: string = "💦HOODialog";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-mdldialog-outer";

  constructor(props: IHOODialogProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOODialog";
    switch (props.type) {
      case HOODialogType.StandardError:
        this._componentClass = `${this._componentClass} is-error`;
        break;
      case HOODialogType.StandardSuccess:
        this._componentClass = `${this._componentClass} is-success`;
        break;
      case HOODialogType.StandardWarning:
        this._componentClass = `${this._componentClass} is-warning`;
        break;
      case HOODialogType.SidebarLeft:
        this._componentClass = `${this._componentClass} is-sidebar-left`;
        break;
      case HOODialogType.SidebarRight:
        this._componentClass = `${this._componentClass} is-sidebar-right`;
        break;
    }
    this.state = new HOODialogState();
  }

  public render(): React.ReactElement<IHOODialogProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      let className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      if (this.props.visible) { className += " is-visible"; }
      let styleBlock = {} as React.CSSProperties;
      if (this.props.width !== undefined) { styleBlock["--lqdDialogWidth"] = this.props.width; }
      if (this.props.height !== undefined) { styleBlock["--lqdDialogHeight"] = this.props.height; }
      return (
        <dialog {...this._rootProps} {...this.props.rootElementAttributes} className={className}>
          <div className="hoo-mdldialog" style={styleBlock}>
            {this.props.children}
          </div>
        </dialog>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}