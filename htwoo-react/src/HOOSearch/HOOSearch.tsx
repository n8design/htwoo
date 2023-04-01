import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
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
   * Disables using the search box
   */
  disabled: boolean;
  /**
   * Change event handler
  */
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Fires when user presses the enter key
  */
  onSearch: (newValue: string) => void;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-input-search {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  /**
   * (Optional) HTMLInputElement attributes that will be applied to the input element of the component.
   * Class names will be appended to the end of the default class string - "hoo-input-text {inputElementAttributes.class}"
  */
  inputElementAttributes?: React.InputHTMLAttributes<HTMLInputElement>;
}

export interface IHOOSearchState {
}

export class HOOSearchState implements IHOOSearchState {
  constructor() { }
}

export default class HOOSearch extends React.PureComponent<IHOOSearchProps, IHOOSearchState> {
  private LOG_SOURCE: string = "💦HOOSearch";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-input-search";

  constructor(props: IHOOSearchProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOSearch";
    this.state = new HOOSearchState();
  }

  private _onKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    try {
      if ((event.key === "Enter") && (typeof this.props.onSearch === "function")) {
        this.props.onSearch(this.props.value);
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_onKeyUp) - ${err}`);
    }
  }

  public render(): React.ReactElement<IHOOSearchProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      const inputClassName = (this.props.inputElementAttributes?.className) ? `hoo-input-text ${this.props.inputElementAttributes?.className}` : "hoo-input-text";
      return (
        <div {...this._rootProps} {...this.props.rootElementAttributes} className={className}>
          <HOOIcon iconName="hoo-icon-search" rootElementAttributes={{ className: "icon" }} />
          <input {...this.props.inputElementAttributes}
            className={inputClassName}
            type="search"
            value={this.props.value}
            placeholder={this.props.placeholder}
            disabled={this.props.disabled}
            onChange={this.props.onChange} onKeyUp={this._onKeyUp} />
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}