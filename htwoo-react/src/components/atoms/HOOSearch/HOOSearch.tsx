import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import "./HOOSearch.css";
import { IHOOStandardProps } from "../../Common.model";
import HOOIcon from "../HOOIcon";

export interface IHOOSearchProps extends IHOOStandardProps {
  /**
   * Search input box placeholder
  */
  placeholder: string;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}

export interface IHOOSearchState {
}

export class HOOSearchState implements IHOOSearchState {
  constructor() { }
}

export default class HOOSearch extends React.Component<IHOOSearchProps, IHOOSearchState> {
  private LOG_SOURCE: string = "🔶HOOSearch";
  private _componentClass: string = "hoo-input-search";

  constructor(props: IHOOSearchProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "🔶HOOSearch";
    this.state = new HOOSearchState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOSearchProps>, nextState: Readonly<IHOOSearchState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOOSearchProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          <HOOIcon iconName="Search" />
          <input className="hoo-input-text" type="search" placeholder={this.props.placeholder} />
        </div>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}