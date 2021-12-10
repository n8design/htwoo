import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
import HOOIcon from "../HOOIcon/HOOIcon";

export interface IHOOSearchProps extends IHOOStandardProps {
  /**
   * Search input box placeholder
  */
  placeholder: string;
  /**
   * value
  */
  value: string;
  /**
   * Change event handler
  */
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

export interface IHOOSearchState {
}

export class HOOSearchState implements IHOOSearchState {
  constructor() { }
}

export default class HOOSearch extends React.PureComponent<IHOOSearchProps, IHOOSearchState> {
  private LOG_SOURCE: string = "💦HOOSearch";
  private _componentClass: string = "hoo-input-search";

  constructor(props: IHOOSearchProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOSearch";
    this.state = new HOOSearchState();
  }

  public render(): React.ReactElement<IHOOSearchProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          <HOOIcon iconName="hoo-icon-search" rootElementAttributes={{ className: "icon" }} />
          <input className="hoo-input-text" type="search" value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.onChange} />
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}