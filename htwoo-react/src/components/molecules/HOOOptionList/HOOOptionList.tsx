import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";

import { IHOOStandardProps } from "../../Common.model";
import HOOCheckbox from "../../../HOOCheckbox";
import { getRandomString } from "../../Common";
import HOORadioButton from "../../../HOORadioButton";

export enum HOOOptionListType {
  "Checkbox",
  "RadioButton",
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
   * Option list value.
  */
  value: string | number;
  /**
   * Change event handler
  */
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}

export interface IHOOOptionListState {
}

export class HOOOptionListState implements IHOOOptionListState {
  constructor() { }
}

export default class HOOOptionList extends React.Component<IHOOOptionListProps, IHOOOptionListState> {
  private LOG_SOURCE: string = "💦HOOOptionList";
  private _optionListName: string = "hoo-options-";

  constructor(props: IHOOOptionListProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOOptionList";
    this._optionListName += getRandomString(10);
    this.state = new HOOOptionListState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOOptionListProps>, nextState: Readonly<IHOOOptionListState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  private _getOptionTSX = (option: IHOOListOption) => {
    let retVal = null;
    const checked = option.key === this.props.value;
    const elementAttributes: any = { name: this._optionListName };
    switch (this.props.type) {
      case HOOOptionListType.Checkbox:
        retVal = <HOOCheckbox checked={checked} label={option.text} onChange={this.props.onChange} rootElementAttributes={elementAttributes} />;
        break;
      case HOOOptionListType.RadioButton:
        retVal = <HOORadioButton checked={checked} value={option.key} label={option.text} onChange={this.props.onChange} rootElementAttributes={elementAttributes} />
        break;
    }
    return retVal;
  }

  public render(): React.ReactElement<IHOOOptionListProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this.props.rootElementAttributes?.className}` : "";
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.props.options && this.props.options.map((option) => {
            return (this._getOptionTSX(option));
          })}
        </div>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}