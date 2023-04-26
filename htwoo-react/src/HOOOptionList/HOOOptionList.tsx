import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import HOOCheckbox from "../HOOCheckbox";
import { getRandomString } from "../common/Common";
import HOORadioButton from "../HOORadioButton";

export enum HOOOptionListType {
  "Checkbox",
  "RadioButton",
}

export enum HOOOptionListDirection {
  "Vertical",
  "Horizontal"
}

export interface IHOOListOption {
  key: number | string;
  text: string;
}

export interface IHOOOptionListProps extends IHOOStandardProps {
  /**
   * Type of option list
   */
  type: HOOOptionListType;
  /**
   * Type of option list
   */
  options: IHOOListOption[];
  /**
   * Option list value. Must be of type Array if type is Checkbox
  */
  value: string | number | string[] | number[];
  /**
   * Change event handler that receives the key and checked status of the option changed
  */
  onChange: (key: string | number, checked: boolean) => void;
  /**
   * (Optional) Is option list disabled
  */
  disabled?: boolean;
  /**
   * (Optional) Direction for child options; defaults to Verticle
  */
  direction?: HOOOptionListDirection;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-button {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export interface IHOOOptionListState {
}

export class HOOOptionListState implements IHOOOptionListState {
  constructor() { }
}

export default class HOOOptionList extends React.Component<IHOOOptionListProps, IHOOOptionListState> {
  private LOG_SOURCE: string = "💦HOOOptionList";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-button";
  private _optionListName: string = "hoo-options-";
  private _direction: HOOOptionListDirection = HOOOptionListDirection.Vertical;
  private _valid: boolean = true;

  constructor(props: IHOOOptionListProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOOptionList";
    this._direction = this.props.direction || HOOOptionListDirection.Vertical;
    this._optionListName += getRandomString(10);
    this._componentClass = (props.type === HOOOptionListType.Checkbox) ? "hoo-checkbox-group" : "hoo-radiobutton-group";
    this._valid = (props.value === null) || ((props.type === HOOOptionListType.Checkbox) ? Array.isArray(props.value) : !Array.isArray(props.value));
    this.state = new HOOOptionListState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOOptionListProps>, nextState: Readonly<IHOOOptionListState>) {
    if (nextProps.value !== this.props.value) {
      this._valid = (nextProps.value === null) || ((nextProps.type === HOOOptionListType.Checkbox) ? Array.isArray(nextProps.value) : !Array.isArray(nextProps.value));
    }
    return true;
  }

  private _onChange = (event, key: string | number) => {
    try {
      const checked = event.target.checked;
      this.props.onChange(key, checked);
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_onChange) - ${err}`);
    }
  }

  private _getOptionTSX = (option: IHOOListOption) => {
    let retVal = null;
    try {
      let checked = false;
      const elementAttributes: any = { name: this._optionListName };
      switch (this.props.type) {
        case HOOOptionListType.Checkbox:
          checked = (this.props.value as Array<string | number>)?.indexOf(option.key) > -1;
          retVal = <HOOCheckbox checked={checked} disabled={this.props.disabled || false} label={option.text} onChange={(e) => { this._onChange(e, option.key); }} rootElementAttributes={elementAttributes} />;
          break;
        case HOOOptionListType.RadioButton:
          checked = this.props.value === option.key;
          retVal = <HOORadioButton checked={checked} disabled={this.props.disabled || false} value={option.key} label={option.text} onChange={(e) => { this._onChange(e, option.key); }} rootElementAttributes={elementAttributes} />
          break;
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_getOptionTSX) - ${err}`);
    }
    return retVal;
  }

  public render(): React.ReactElement<IHOOOptionListProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      if (this.props.type === HOOOptionListType.RadioButton) { this._rootProps["tabindex"] = 0 }
      let className = `${this._componentClass} ${(this._direction === HOOOptionListDirection.Horizontal ? "is-horizontal" : "")}`;
      className = (this.props.rootElementAttributes?.className) ? `${className} ${this.props.rootElementAttributes?.className}` : className;
      return (
        <div {...this._rootProps}
          {...this.props.rootElementAttributes}
          className={className}
          role="radiogroup"
          data-cols="2">
          {this._valid && this.props.options && this.props.options.map((option) => {
            const tabIndexProp = (this.props.type === HOOOptionListType.RadioButton) ? { tabIndex: 0 } : {};
            return (<div key={option.key} {...tabIndexProp}>{this._getOptionTSX(option)}</div>);
          })}
          {!this._valid &&
            "The type of HOOOptionList does not match the type of value"
          }
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}