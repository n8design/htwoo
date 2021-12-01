import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import { IHOOStandardProps } from "../../Common.model";

export interface IHOOTeamsSplashCardProps extends IHOOStandardProps {
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-splashcard {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}

export interface IHOOTeamsSplashCardState {
}

export class HOOTeamsSplashCardState implements IHOOTeamsSplashCardState {
  constructor() { }
}

export default class HOOTeamsSplashCard extends React.Component<IHOOTeamsSplashCardProps, IHOOTeamsSplashCardState> {
  private LOG_SOURCE: string = "💦HOOTeamsSplashCard";
  private _componentClass: string = "hoo-splashcard";

  constructor(props: IHOOTeamsSplashCardProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOTeamsSplashCard";
    this.state = new HOOTeamsSplashCardState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOTeamsSplashCardProps>, nextState: Readonly<IHOOTeamsSplashCardState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOOTeamsSplashCardProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <article data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.props.children}
        </article>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}