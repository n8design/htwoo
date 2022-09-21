import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
import { getRandomString } from "../../common/Common";
import HOOButton, { HOOButtonType } from "../HOOButton/HOOButton";
import HOOIcon from "../HOOIcon/HOOIcon";

export enum DDState {
  "Initial",
  "Open",
  "Filtered",
  "Closed"
}

export enum Focus {
  "Input",
  "Forward",
  "Back"
}

export interface IHOODropDownItem {
  key: string | number;
  text: string;
  disabled: boolean;
}

export interface IHOODropDownGroup {
  groupName: string;
  groupItems: IHOODropDownItem[];
}

export interface IHOODropDownProps extends IHOOStandardProps {
  /**
   * value
  */
  value: string | number;
  /**
   * Options for select drop down
  */
  options: IHOODropDownGroup[];
  /**
   * Options for select drop down
  */
  containsTypeAhead: boolean;
  /**
   * Change event handler returns the new field value based on the selected items key
  */
  onChange: (fieldValue: string | number) => void;
  /**
   * (Optional) For Non-Hyperlink style buttons only, Is button disabled.
   */
  disabled?: boolean;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-select {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
  /**
   * (Optional) HTMLUListElement attributes that will be applied to the UL element of the component.
   * Class names will be appended to the end of the default class string - hoo-select-dropdown {ulElementAttributes.class}
  */
  ulElementAttributes?: React.HTMLAttributes<HTMLUListElement>;
}

export interface IHOODropDownState {
  currentValue: string | number;
  ddState: DDState;
  open: boolean;
  optionsLength: number;
}

export default class HOODropDown extends React.Component<IHOODropDownProps, IHOODropDownState> {
  private LOG_SOURCE: string = "💦HOODropDown";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-select";
  private _ulClass: string = "hoo-select-dropdown";
  private _dropdownId: string = "hoo-dropdown-";
  private _optionElements = [];
  private _inputElement: React.RefObject<HTMLInputElement>;
  private _valueChanged: boolean = false;

  constructor(props: IHOODropDownProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOODropDown";
    this._dropdownId += getRandomString(10);
    this.state = { currentValue: props.value, optionsLength: props.options.length, ddState: DDState.Initial, open: false };
    this._inputElement = React.createRef<HTMLInputElement>();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOODropDownProps>, nextState: Readonly<IHOODropDownState>) {
    if (this.props.value != nextProps.value) {
      this._valueChanged = true;
    }
    return true;
  }

  public componentDidUpdate() {
    if (this._valueChanged) {
      this._valueChanged = false;
      this.setState({ currentValue: this.props.value, ddState: DDState.Initial }, () => {
        this._doFilter();
      });
    }
  }

  private _getDisplayValue = (): string => {
    let retVal: string = "";
    try {
      this.props.options.some((g) => {
        g.groupItems.some((item) => {
          if (item.key === this.state.currentValue) {
            retVal = item.text;
            return true;
          }
          return false;
        });
        return retVal.length > 0;
      });
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_getDisplayValue) - ${err}`);
    }
    return retVal;
  };

  private _onChange = (newValue: any) => {
    try {
      this.setState({ currentValue: newValue }, () => {
        this.props.onChange(newValue);
      });
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_onChange) - ${err}`);
    }
  }

  private _toggleDropdown = () => {
    try {
      if (this.props.disabled) { return; }
      const focus = document.activeElement;
      let ddState = this.state.ddState;
      let open = this.state.open;
      switch (this.state.ddState) {
        case DDState.Initial:
          open = !open;
          ddState = DDState.Open;
          break;
        case DDState.Open:
          if ((focus == this._inputElement.current) || (focus.tagName == "BUTTON")) {
            open = false;
            ddState = DDState.Initial;
          } else if (focus.tagName == "LI") {
            this.props.onChange((focus as HTMLLIElement).dataset.value);
            open = false;
            ddState = DDState.Closed;
            this._moveFocus(document.activeElement, Focus.Input);
          }
          break;
        case DDState.Filtered:
          if (focus.tagName == "LI") {
            this.props.onChange((focus as HTMLLIElement).dataset.value);
            open = false;
            ddState = DDState.Closed;
            this._moveFocus(document.activeElement, Focus.Input);
          }
          break;
        case DDState.Closed:
          open = true;
          ddState = DDState.Open;
          break;
      }
      this.setState({ open: open, ddState: ddState });
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_toggleDropdown) - ${err}`);
    }
  }

  private _keyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (this.props.disabled) { return; }
    const focus = document.activeElement;
    const key = event.key;
    let ddState = this.state.ddState;
    let open = this.state.open;
    try {
      switch (key) {
        case 'Enter':
          if (this.state.ddState === DDState.Initial) {
            // if state = initial, toggleOpen and set state to opened
            open = true;
            ddState = DDState.Open;
          } else if (this.state.ddState === DDState.Open && focus.tagName === 'LI') {
            // if state = opened and focus on list, makeChoice and set state to closed
            this.props.onChange((focus as HTMLLIElement).dataset.value);
            open = false;
            ddState = DDState.Closed;
            this._moveFocus(document.activeElement, Focus.Input);
          } else if (this.state.ddState === DDState.Open && focus === this._inputElement.current) {
            // if state = opened and focus on input, close it
            open = false;
            ddState = DDState.Closed;
          } else if (this.state.ddState === DDState.Filtered && focus.tagName === 'LI') {
            // if state = filtered and focus on list, makeChoice and set state to closed
            this.props.onChange((focus as HTMLLIElement).dataset.value);
            open = false;
            ddState = DDState.Closed;
            this._moveFocus(document.activeElement, Focus.Input);
          } else if (this.state.ddState === DDState.Filtered && focus === this._inputElement.current) {
            // if state = filtered and focus on input, set state to opened
            open = true;
            ddState = DDState.Open;
          } else { // i.e. csState is closed, or csState is opened/filtered but other focus point?
            // if state = closed, set state to filtered? i.e. open but keep existing input? 
            open = true;
            ddState = DDState.Filtered;
          }
          break;
        case 'Escape':
          // if state = initial, do nothing
          // if state = opened or filtered, set state to initial
          // if state = closed, do nothing
          if (this.state.ddState === DDState.Open || this.state.ddState === DDState.Filtered) {
            open = false;
            ddState = DDState.Initial;
          }
          break;
        case 'ArrowDown':
          if (this.state.ddState === DDState.Initial || this.state.ddState === DDState.Closed) {
            // if state = initial or closed, set state to opened and moveFocus to first
            open = true;
            ddState = DDState.Open;
            this._moveFocus(this._inputElement.current, Focus.Forward);
          } else {
            // if state = opened and focus on input, moveFocus to first
            // if state = opened and focus on list, moveFocus to next/first
            // if state = filtered and focus on input, moveFocus to first
            // if state = filtered and focus on list, moveFocus to next/first
            open = true;
            this._moveFocus(document.activeElement, Focus.Forward);
          }
          break;
        case 'ArrowUp':
          if (this.state.ddState === DDState.Initial || this.state.ddState === DDState.Closed) {
            // if state = initial, set state to opened and moveFocus to last
            // if state = closed, set state to opened and moveFocus to last
            open = true;
            ddState = DDState.Open;
            this._moveFocus(this._inputElement.current, Focus.Back);
          } else {
            // if state = opened and focus on input, moveFocus to last
            // if state = opened and focus on list, moveFocus to prev/last
            // if state = filtered and focus on input, moveFocus to last
            // if state = filtered and focus on list, moveFocus to prev/last
            this._moveFocus(document.activeElement, Focus.Back);
          }
          break;
        default:
          if (this.state.ddState === DDState.Initial) {
            // if state = initial, toggle open, doFilter and set state to filtered
            open = true;
            ddState = DDState.Filtered;
            this._doFilter();
          } else if (this.state.ddState === DDState.Open) {
            // if state = opened, doFilter and set state to filtered
            ddState = DDState.Filtered;
            this._doFilter();
          } else if (this.state.ddState === DDState.Closed) {
            // if state = closed, doFilter and set state to filtered
            ddState = DDState.Filtered;
            this._doFilter();
          } else { // already filtered
            this._doFilter();
          }
          break;
      }
      this.setState({ open: open, ddState: ddState });
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_keyUp) - ${err}`);
    }
  }

  private _doFilter = () => {
    try {
      let optionsLength = this.state.optionsLength;
      let ddState = this.state.ddState;
      const terms = (this.state.currentValue === this.props.value) ? "" : this.state.currentValue as string;
      const aFilteredOptions = this._optionElements.filter((option) => {
        if (this.props.containsTypeAhead) {
          return (option.innerText.toLowerCase().indexOf(terms.toLowerCase()) > -1);
        } else {
          if (option.innerText.toLowerCase().substring(0, terms.length) == (terms.toLowerCase())) {
            return true;
          }
        }
      });
      this._optionElements.forEach(option => option.style.display = "none");
      aFilteredOptions.forEach((option) => {
        option.style.display = "";
      });
      if (aFilteredOptions.length < this._optionElements.length) {
        ddState = DDState.Filtered;
      }
      optionsLength = aFilteredOptions.length;
      this.setState({ ddState: ddState, optionsLength: optionsLength });
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_doFilter) - ${err}`);
    }
  }

  private _moveFocus = (fromHere: Element, toThere: Focus) => {
    try {
      // grab the currently showing options, which might have been filtered
      const aCurrentOptions = this._optionElements.filter((option) => {
        if (option.style.display === '') {
          return true;
        }
      });
      // don't move if all options have been filtered out
      if (aCurrentOptions.length === 0) {
        return;
      }
      if (toThere === Focus.Input) {
        this._inputElement.current.focus();
      }
      // possible start points
      switch (fromHere) {
        case this._inputElement.current:
          if (toThere === Focus.Forward) {
            aCurrentOptions[0].focus();
          } else if (toThere === Focus.Back) {
            aCurrentOptions[aCurrentOptions.length - 1].focus();
          }
          break;
        case this._optionElements[0]:
          if (toThere === Focus.Forward) {
            aCurrentOptions[1].focus();
          } else if (toThere === Focus.Back) {
            this._inputElement.current.focus();
          }
          break;
        case this._optionElements[this._optionElements.length - 1]:
          if (toThere === Focus.Forward) {
            aCurrentOptions[0].focus();
          } else if (toThere === Focus.Back) {
            aCurrentOptions[aCurrentOptions.length - 2].focus();
          }
          break;
        default: // middle list or filtered items 
          const currentItem = document.activeElement;
          const whichOne = aCurrentOptions.findIndex((o) => { return o == (currentItem as HTMLLIElement); });
          //const whichOne = findIndex(aCurrentOptions, (o) => { return o == (currentItem as HTMLLIElement); });
          if (toThere === Focus.Forward) {
            const nextOne = aCurrentOptions[whichOne + 1];
            nextOne.focus();
          } else if (toThere === Focus.Back && whichOne > 0) {
            const previousOne = aCurrentOptions[whichOne - 1];
            previousOne.focus();
          } else { // if whichOne = 0
            this._inputElement.current.focus();
          }
          break;
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_moveFocus) - ${err}`);
    }
  }

  public render(): React.ReactElement<IHOODropDownProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      const ulClassName = (this.props.ulElementAttributes?.className) ? `${this._ulClass} ${(this.state.open) ? "" : "hidden-all"} ${this.props.ulElementAttributes?.className}` : `${this._ulClass} ${(this.state.open) ? "" : "hidden-all"}`;
      const currentDisplay = this._getDisplayValue();
      return (
        <div {...this._rootProps}
          {...this.props.rootElementAttributes}
          role="combobox"
          aria-haspopup="listbox"
          aria-owns={`${this._dropdownId}-list`}
          onClick={this._toggleDropdown}
          onKeyUp={this._keyUp}
          className={className}
        >
          <div id={`${this._dropdownId}-status`} className="hidden-visually" aria-live="polite">
            {this.props.options.length} options available. Arrow down to browse or start typing to filter.
          </div>
          <input ref={this._inputElement}
            disabled={this.props.disabled || false}
            type="text"
            id={`${this._dropdownId}-input`}
            value={currentDisplay}
            className="hoo-select-text"
            aria-autocomplete="both"
            autoComplete="off"
            aria-controls={`${this._dropdownId}-list`}
            onChange={(e) => { this.setState({ currentValue: e.currentTarget.value }); }}
          />
          <HOOButton type={HOOButtonType.Icon} disabled={this.props.disabled || false} >
            <HOOIcon iconName="hoo-icon-arrow-down" />
          </HOOButton>
          <ul role="listbox"
            {...this.props.ulElementAttributes}
            className={ulClassName}>
            {this.props.options && this.props.options.map((g) => {
              return (
                <li className="hoo-optgroup" key={g.groupName}>
                  {g.groupName.length > 0 &&
                    <div className="hoo-optgroup-name">{g.groupName}</div>
                  }
                  <ul className="hoo-optgroup-items">
                    {g.groupItems && g.groupItems.map((i, index) => {
                      return (
                        <li ref={element => this._optionElements[index] = element}
                          key={i.key}
                          data-value={i.key}
                          className={`hoo-option ${i.disabled ? "is-disabled" : ""}`}
                          aria-disabled={i.disabled}
                          tabIndex={-1}
                          onClick={() => { this._onChange(i.key); }}
                        >
                          {i.text}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}