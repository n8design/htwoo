import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
import { HOOAvatarSize } from "../../atoms/HOOAvatar/HOOAvatar";

export interface IHOOPersonaProps extends IHOOStandardProps {
  /**
   * Include the avatarSize by repeating the HOOAvatarSize property from the Avatar child
  */
  avatarSize: HOOAvatarSize;
  /**
   * (Optional) The persona name (line 1)
  */
  personaName?: string;
  /**
   * (Optional) The persona function (line 2)
  */
  personaFunction?: string;
  /**
   * (Optional) The persona status text (line 3)
  */
  personaStatusText?: string;
  /**
   * (Optional) The persona availability (line 4)
  */
  personaAvailable?: string;
  /**
   * (Optional) Click event handler
  */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-persona {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

export interface IHOOPersonaState {
}

export class HOOPersonaState implements IHOOPersonaState {
  constructor() { }
}

export default class HOOPersona extends React.PureComponent<IHOOPersonaProps, IHOOPersonaState> {
  private LOG_SOURCE: string = "💦HOOPersona";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-persona-";
  private _showData: boolean = true;

  constructor(props: IHOOPersonaProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOPersona";
    this.state = new HOOPersonaState();
    this._componentClass += props.avatarSize;
    if (!props.personaName && !props.personaFunction && !props.personaStatusText && !props.personaAvailable) {
      this._showData = false;
    }
  }

  public render(): React.ReactElement<IHOOPersonaProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div {...this._rootProps} {...this.props.rootElementAttributes} className={className} onClick={this.props.onClick}>
          {this.props.children}
          {this._showData &&
            <div className="hoo-persona-data">
              <div className="hoo-persona-name">{this.props.personaName}</div>
              <div className="hoo-persona-function"><span>{this.props.personaFunction}</span></div>
              <div className="hoo-persona-statustext"><span>{this.props.personaStatusText}</span></div>
              <div className="hoo-persona-available"><span>{this.props.personaAvailable}</span></div>
            </div>
          }
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}