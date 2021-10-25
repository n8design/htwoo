import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import { IHOOStandardProps } from "../../Common.model";
import HOOIcon, { IHOOIconProps } from "../../atoms/HOOIcon";
import HOOButton, { HOOButtonType } from "../../atoms/HOOButton";

export interface IHOODialogHeaderProps extends IHOOStandardProps {
  /**
   * Title for Dialog
   */
  title: string;
  /**
   * Close button disabled
  */
  closeDisabled: boolean;
  /**
   * Close button click event
  */
  closeOnClick: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Name of close icon to be rendered, if omitted will use closeIconSVG
   */
  closeIconName?: string;
  /**
   * SVG string representing an icon that will be injected into containing DIV, if omitted must include closeIconName
   */
  closeIconSVG?: string;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}

export interface IHOODialogHeaderState {
}

export class HOODialogHeaderState implements IHOODialogHeaderState {
  constructor() { }
}

export default class HOODialogHeader extends React.Component<IHOODialogHeaderProps, IHOODialogHeaderState> {
  private LOG_SOURCE: string = "🔶HOODialogHeader";
  private _componentClass: string = "hoo-dlgheader";

  constructor(props: IHOODialogHeaderProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "🔶HOODialogHeader";
    this.state = new HOODialogHeaderState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOODialogHeaderProps>, nextState: Readonly<IHOODialogHeaderState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOODialogHeaderProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      const iconProp: IHOOIconProps = (this.props.closeIconName) ? { iconName: this.props.closeIconName } : { iconSVG: this.props.closeIconSVG };
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {!this.props.children &&
            <>
              <div className="hoo-dlgheader-title"><h2>{this.props.title}</h2></div>
              <div className="hoo-dlgheader-closer">
                <HOOButton type={HOOButtonType.Icon} onClick={this.props.closeOnClick} disabled={this.props.closeDisabled}>
                  <HOOIcon {...iconProp} />
                </HOOButton>
              </div>
            </>
          }
          {this.props.children}
        </div>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}