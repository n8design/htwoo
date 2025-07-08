import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import HOOCheckbox from "../HOOCheckbox";
import { getRandomString, isEqual } from "../common/Common";
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
   * (Optional) Is Input Read Only - default false.
  */
  readonly?: boolean;
  /**
   * (Optional) Id attribute for the input element; only valid if set in original component properties.
  */
  forId?: string;
  /**
   * (Optional) Direction for child options; defaults to Vertical
  */
  direction?: HOOOptionListDirection;
  /**
   * (Optional) Number of columns for desktop experience; defaults to 1
  */
  colsDesk?: number;
  /**
   * (Optional) Number of columns for mobile experience; defaults to 1
  */
  colsMobile?: number;
  /**
   * (Optional) HTMLMenuElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-button {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLMenuElement>, HTMLMenuElement>;
}

export interface IHOOOptionListState {
  rea: React.DetailedHTMLProps<React.HTMLAttributes<HTMLMenuElement>, HTMLMenuElement>;
  styleblock: React.CSSProperties;
}

export class HOOOptionListState implements IHOOOptionListState {
  constructor(
    public rea: React.DetailedHTMLProps<React.HTMLAttributes<HTMLMenuElement>, HTMLMenuElement> = undefined,
    public styleblock: React.CSSProperties = {}
  ) { }
}

export default class HOOOptionList extends React.Component<IHOOOptionListProps, IHOOOptionListState> {
  private LOG_SOURCE: string = "💦HOOOptionList";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-button";
  private _optionListName: string = "hoo-options-";
  private _optionListId: string = "hoo-options-";
  private _direction: HOOOptionListDirection = HOOOptionListDirection.Vertical;
  private _valid: boolean = true;
  private _updateStyle: boolean = false;

  constructor(props: IHOOOptionListProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOOptionList";
    this._direction = this.props.direction || HOOOptionListDirection.Vertical;
    this._optionListName += getRandomString(10);
    this._optionListId = props.forId || `${this._optionListId}${getRandomString(10)}`;
    this._componentClass = (props.type === HOOOptionListType.Checkbox) ? "hoo-checkbox-group" : "hoo-radiobutton-group";
    this._valid = (props.value === null) || ((props.type === HOOOptionListType.Checkbox) ? Array.isArray(props.value) : !Array.isArray(props.value));
    let styleblock: React.CSSProperties = undefined;
    if (this.props.rootElementAttributes?.style) {
      styleblock = { ...this.props.rootElementAttributes?.style };
    }
    if ((this.props.colsDesk !== undefined) || (this.props.colsMobile !== undefined)) {
      styleblock = styleblock || {};
      if (this.props.colsDesk !== undefined) { styleblock["--cols-desk"] = this.props.colsDesk; }
      if (this.props.colsMobile !== undefined) { styleblock["--cols-mobile"] = this.props.colsMobile; }
    }
    let rea = undefined;
    if (this.props.rootElementAttributes) {
      rea = JSON.parse(JSON.stringify(this.props.rootElementAttributes));
      if (this.props.reactKey) { rea["key"] = this.props.reactKey } 
      if (this.props.type === HOOOptionListType.RadioButton) { 
        rea["tabindex"] = 0; rea["role"] = "radiogroup"; 
      } else { 
        rea["role"] = "checkbox"; 
      }
      delete rea.style;
    }
    this.state = new HOOOptionListState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOOptionListProps>, nextState: Readonly<IHOOOptionListState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    if (nextProps.value !== this.props.value) {
      this._valid = (nextProps.value === null) || ((nextProps.type === HOOOptionListType.Checkbox) ? Array.isArray(nextProps.value) : !Array.isArray(nextProps.value));
    }
    if (nextProps.type != this.props.type) { this._updateStyle = true; }
    if (nextProps.colsDesk != this.props.colsDesk) { this._updateStyle = true; }
    if (nextProps.colsMobile != this.props.colsMobile) { this._updateStyle = true; }
    if (nextProps.rootElementAttributes != this.props.rootElementAttributes) { this._updateStyle = true; }
    return true;
  }

  public componentDidUpdate(prevProps: Readonly<IHOOOptionListProps>, prevState: Readonly<IHOOOptionListState>, snapshot?: any): void {
    try {
      if (this._updateStyle) {
        this._updateStyle = false;
        let styleblock: React.CSSProperties = undefined;
        if (this.props.rootElementAttributes?.style) {
          styleblock = { ...this.props.rootElementAttributes?.style };
        }
        if ((this.props.colsDesk !== undefined) || (this.props.colsMobile !== undefined)) {
          styleblock = styleblock || {};
          if (this.props.colsDesk !== undefined) { styleblock["--cols-desk"] = this.props.colsDesk; }
          if (this.props.colsMobile !== undefined) { styleblock["--cols-mobile"] = this.props.colsMobile; }
        }
        let rea = undefined;
        if (this.props.rootElementAttributes) {
          rea = JSON.parse(JSON.stringify(this.props.rootElementAttributes));
          if (this.props.reactKey) { rea["key"] = this.props.reactKey } 
          if (this.props.type === HOOOptionListType.RadioButton) { 
            rea["tabindex"] = 0; rea["role"] = "radiogroup"; 
          } else { 
            rea["role"] = "checkbox"; 
          }
          delete rea.style;
        }
        this.setState({ rea, styleblock });
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (componentDidUpdate) - ${err}`);
    }
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
          retVal = <HOOCheckbox checked={checked} disabled={this.props.disabled || false} readonly={this.props.readonly || false} label={option.text} onChange={(e) => { this._onChange(e, option.key); }} rootElementAttributes={elementAttributes} />;
          break;
        case HOOOptionListType.RadioButton:
          checked = this.props.value === option.key;
          retVal = <HOORadioButton checked={checked} disabled={this.props.disabled || false} readonly={this.props.readonly || false} value={option.key} label={option.text} onChange={(e) => { this._onChange(e, option.key); }} rootElementAttributes={elementAttributes} />
          break;
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_getOptionTSX) - ${err}`);
    }
    return retVal;
  }

  public render(): React.ReactElement<IHOOOptionListProps> {
    try {     
      let className = `${this._componentClass} ${(this._direction === HOOOptionListDirection.Horizontal ? "is-horizontal" : "")}`;
      className = (this.props.rootElementAttributes?.className) ? `${className} ${this.props.rootElementAttributes?.className}` : className;
      return (
        <menu {...this._rootProps}
          id={this._optionListId}
          {...this.state.rea}
          className={className}
          style={this.state.styleblock}>
          {this._valid && this.props.options && this.props.options.map((option) => {
            const tabIndexProp = (this.props.type === HOOOptionListType.RadioButton) ? { tabIndex: 0 } : {};
            return (<li key={option.key} {...tabIndexProp}>{this._getOptionTSX(option)}</li>);
          })}
          {!this._valid &&
            "The type of HOOOptionList does not match the type of value"
          }
        </menu>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}