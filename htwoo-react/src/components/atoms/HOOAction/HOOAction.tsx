import * as React from "react";
import { IHOOStandardProps } from "../../common/IHOOStandardProps";
import HOOIcon from "../HOOIcon/HOOIcon";
import HOOFlyoutMenu, { IHOOFlyoutMenuItem } from "../HOOFlyoutMenu/HOOFlyoutMenu";

export enum HOOActionType {
  "Action",
  "Command",
  "Context"
}
export interface IHOOActionProps extends IHOOStandardProps {
  /**
   * Type of Action, if omitted, components children will be rendered.
   */
  type: HOOActionType;
  /**
   * Direct interface for button click event handler.
   */
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * (Optional) button label, if omitted, components children will be rendered.
   */
  label?: string;
  /**
   * (Optional) icon name, if omitted, components children will be rendered.
   */
  iconName?: string;
  /**
   * (Optional) icon name, if omitted, components children will be rendered.
   */
  flyoutContextItems?: IHOOFlyoutMenuItem[];
  /**
   * (Optional) HTMLButtonElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-buttonaction {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
  /**
     * (Optional) HTMLSpanElement attributes that will be applied to the label element of the component.
     * Class names will be appended to the end of the default class string - hoo-button-label {rootElementAttributes.class}
    */
  labelElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
}

export interface IHOOActionState {
}

export class HOOActionState implements IHOOActionState {
  constructor() { }
}

export default class HOOAction extends React.PureComponent<IHOOActionProps, IHOOActionState> {
  private LOG_SOURCE: string = "💦HOOAction";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-button";
  private _labelClass: string = "hoo-button-label";

  constructor(props: IHOOActionProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOAction";
    switch (props.type) {
      case HOOActionType.Action:
        this._componentClass = `${this._componentClass}action`;
        break;
      case HOOActionType.Command:
        this._componentClass = `${this._componentClass}cmd`;
        break;
      case HOOActionType.Context:
        this._componentClass = `${this._componentClass}context`;
        break;
    }
    this.state = new HOOActionState();
  }

  public render(): React.ReactElement<IHOOActionProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      const labelClass = (this.props.labelElementAttributes?.className) ? `${this._labelClass} ${this.props.labelElementAttributes?.className}` : this._labelClass;
      return (
        <>
          <button {...this._rootProps} {...this.props.rootElementAttributes as React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>} className={className} onClick={this.props.onClick}>
            {this.props.label &&
              <>
                <span className="hoo-button-icon" aria-hidden="true">
                  <HOOIcon iconName={this.props.iconName} />
                </span>
                <span {...this.props.labelElementAttributes} className={labelClass}>{this.props.label}</span>
                {this.props.type !== HOOActionType.Action && this.props.flyoutContextItems?.length > 0 &&
                  <span className="hoo-button-icon hoo-buttonchevron">
                    <HOOIcon iconName="hoo-icon-arrow-down" />
                  </span>
                }
              </>
            }
            {!this.props.label &&
              this.props.children
            }
          </button>
          {this.props.flyoutContextItems &&
            <HOOFlyoutMenu contextItems={this.props.flyoutContextItems} contextItemClicked={this.props.onClick} />
          }
        </>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}