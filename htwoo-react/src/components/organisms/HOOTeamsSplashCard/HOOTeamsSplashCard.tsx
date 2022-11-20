import * as React from "react";
import { IHOOStandardProps } from "../../common/IHOOStandardProps";

export interface IHOOTeamsSplashCardProps extends IHOOStandardProps {
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-splashcard {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
}

export interface IHOOTeamsSplashCardState {
}

export class HOOTeamsSplashCardState implements IHOOTeamsSplashCardState {
  constructor() { }
}

export default class HOOTeamsSplashCard extends React.PureComponent<IHOOTeamsSplashCardProps, IHOOTeamsSplashCardState> {
  private LOG_SOURCE: string = "💦HOOTeamsSplashCard";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-splashcard";

  constructor(props: IHOOTeamsSplashCardProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOTeamsSplashCard";
    this.state = new HOOTeamsSplashCardState();
  }

  public render(): React.ReactElement<IHOOTeamsSplashCardProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <article {...this._rootProps} {...this.props.rootElementAttributes} className={className}>
          {this.props.children}
        </article>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}