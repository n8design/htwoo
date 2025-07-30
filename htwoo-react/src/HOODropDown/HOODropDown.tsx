import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import { getRandomString } from "../common/Common";
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
  disabled?: boolean;
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
   * Options for select drop down, either a list of groups or a list of items; default is empty array
  */
  options: IHOODropDownGroup[] | IHOODropDownItem[];
  /**
   * Change event handler returns the new field value based on the selected items key
  */
  onChange: (fieldValue: string | number) => void;
  /**
   * (Optional) Type-ahead options for select drop down; default is null which disables typeahead
   *   If true, options are filtered for any items starting with the string in the input box
   *   If false, options are filtered for any items containing the string in the input box
  */
  containsTypeAhead?: boolean;
  /** 
   * (Optional) Text to display if dropdown has been filtered so no options are available or no options are provided.
   * Provide a tuple where the first string is used when the field is empty, the second is when the input field has characters.
   * Default is English "No options" / "No options match input"
   */
  noOptionsText?: [string, string];
  /** 
   * (Optional) Boolean to control if change event is called upon enter key being pressed for text in input field when no match
   * exists in the options list. Requires containsTypeAhead = true.
   * Default is False
   */
  noOptionsChangeEvent?: boolean;
  /**
   * (Optional) Id attribute for the input element; only valid if set in original component properties.
  */
  forId?: string;
  /**
   * (Optional) Placeholder text for the input element
  */
  placeholder?: string;
  /**
   * (Optional) For Non-Hyperlink style buttons only, Is button disabled.
   */
  disabled?: boolean;
  /**
   * (Optional) Is Input Read Only - default false.
  */
  readonly?: boolean;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-select {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  /**
   * (Optional) HTMLUListElement attributes that will be applied to the UL element of the component.
   * Class names will be appended to the end of the default class string - hoo-select-dropdown {ulElementAttributes.class}
  */
  ulElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
  /**
   * (Optional) HTMLInputElement attributes that will be applied to the Input element of the component.
   * Class names will be appended to the end of the default class string - hoo-select-text {inputElementAttributes.class}
  */
  inputElementAttributes?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
}

export interface IHOODropDownState {
  currentValue: string | number;
  ddState: DDState;
  open: boolean;
  optionsLength: number;
  grouped: boolean;
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
    this._dropdownId = props.forId || `${this._dropdownId}${getRandomString(10)}`;
    const grouped = props.options[0]?.hasOwnProperty("groupName") ? true : false;
    this.state = { currentValue: props.value, optionsLength: props.options.length, ddState: DDState.Initial, open: false, grouped };
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

  private _onChange = (newValue: string | number) => {
    try {
      this.props.onChange((/^-?\d+$/.test(newValue as string)) ? parseInt(newValue as string) : newValue);
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_onChange) - ${err}`);
    }
  }

  private _getDisplayValue = (): string => {
    let retVal: string = this.state.currentValue as string || "";
    try {
      if (this.state.grouped) {
        this.props.options.some((g) => {
          g.groupItems.some((item) => {
            if (item.key === this.state.currentValue) {
              retVal = item.text;
              return true;
            }
            return false;
          });
          return (retVal.length > 0);
        });
      } else {
        this.props.options.some((item) => {
          if (item.key === this.state.currentValue) {
            retVal = item.text;
            return true;
          }
          return false;
        });
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_getDisplayValue) - ${err}`);
    }
    return retVal;
  };

  private _onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      let ddState = this.state.ddState;
      let open = this.state.open;
      if (this.state.ddState === DDState.Initial) {
        // if state = initial, toggle open, doFilter and set state to filtered
        open = true;
        ddState = DDState.Filtered;
      } else if (this.state.ddState === DDState.Open) {
        // if state = opened, doFilter and set state to filtered
        ddState = DDState.Filtered;
      } else if (this.state.ddState === DDState.Closed) {
        // if state = closed, doFilter and set state to filtered
        ddState = DDState.Filtered;
      }
      this.setState({ currentValue: e.currentTarget.value, ddState, open }, () => {
        this._doFilter();
      });
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_onChangeInput) - ${err}`);
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
            if (this.props.value != (focus as HTMLLIElement).dataset.value) {
              this._onChange((focus as HTMLLIElement).dataset.value);
            }
            open = false;
            ddState = DDState.Closed;
            this._moveFocus(document.activeElement, Focus.Input);
          }
          break;
        case DDState.Filtered:
          if (focus.tagName == "LI") {
            if (this.props.value != (focus as HTMLLIElement).dataset.value) {
              this._onChange((focus as HTMLLIElement).dataset.value);
            }
            open = false;
            ddState = DDState.Closed;
            this._moveFocus(document.activeElement, Focus.Input);
          } else if (focus.tagName == "BUTTON") {
            open = !open;
            ddState = (open) ? DDState.Filtered : DDState.Closed;
          }
          break;
        case DDState.Closed:
          open = true;
          ddState = DDState.Open;
          break;
      }
      this.setState({ open, ddState });
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_toggleDropdown) - ${err}`);
    }
  }

  private _keyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (this.props.disabled) { return; }
    const focus = document.activeElement;
    const key = event.key;
    let currentValue = this.state.currentValue;
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
            currentValue = (focus as HTMLLIElement).dataset.value;
            // if state = opened and focus on list, makeChoice and set state to closed
            if (this.props.value != (focus as HTMLLIElement).dataset.value) {
              this._onChange((focus as HTMLLIElement).dataset.value);
            }
            open = false;
            ddState = DDState.Closed;
            this._moveFocus(document.activeElement, Focus.Input);
          } else if (this.state.ddState === DDState.Open && focus === this._inputElement.current) {
            // if state = opened and focus on input, close it
            open = false;
            ddState = DDState.Closed;
          } else if (this.state.ddState === DDState.Filtered && focus.tagName === 'LI') {
            currentValue = (focus as HTMLLIElement).dataset.value;
            // if state = filtered and focus on list, makeChoice and set state to closed
            if (this.props.value != (focus as HTMLLIElement).dataset.value) {
              this._onChange((focus as HTMLLIElement).dataset.value);
            }
            open = false;
            ddState = DDState.Closed;
            this._moveFocus(document.activeElement, Focus.Input);
          } else if (this.state.ddState === DDState.Filtered && 
              focus === this._inputElement.current && 
              (this.state.currentValue?.toString().length > 0) && 
              (this.state.optionsLength < 1) && 
              this.props.noOptionsChangeEvent === true) {
            // if state = filtered and focus on input and no options match & the notOptionsChangeEvent is true and current value length > 0
            this.props.onChange(this.state.currentValue);
            open = false;
            ddState = DDState.Closed;
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
            // if state = closed, doFilter and set state to filtered and open
            ddState = DDState.Filtered;
            open = true;
            this._doFilter();
          } else { // already filtered
            open = true;
            this._doFilter();
          }
          break;
      }
      this.setState({ open, ddState, currentValue });
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_keyUp) - ${err}`);
    }
  }

  private _doFilter = () => {
    try {
      if (this.props.containsTypeAhead == null) { return; }
      let optionsLength = this.state.optionsLength;
      let ddState = this.state.ddState;
      const terms = (this.state.currentValue === this.props.value) ? "" : this.state.currentValue as string;
      const aFilteredOptions = this._optionElements.filter((option) => {
        if (this.props.containsTypeAhead === true) {
          return (option?.innerText?.toLowerCase().indexOf(terms.toLowerCase()) > -1);
        } else if (this.props.containsTypeAhead === false) {
          if (option?.innerText?.toLowerCase().substring(0, terms.length) == (terms.toLowerCase())) {
            return true;
          }
        }
      });
      this._optionElements.forEach(option => { if (option?.style) { option.style.display = "none"; } });
      aFilteredOptions.forEach((option) => { if (option?.style) { option.style.display = ""; } });
      if (aFilteredOptions.length < this._optionElements.length) {
        ddState = DDState.Filtered;
      }
      optionsLength = aFilteredOptions.length;
      this.setState({ ddState, optionsLength });
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_doFilter) - ${err}`);
    }
  }

  private _moveFocus = (fromHere: Element, toThere: Focus) => {
    try {
      // grab the currently showing options, which might have been filtered
      const aCurrentOptions = this._optionElements.filter((option) => {
        if (option?.style?.display === '') {
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
            nextOne?.focus();
          } else if (toThere === Focus.Back && whichOne > 0) {
            const previousOne = aCurrentOptions[whichOne - 1];
            previousOne?.focus();
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
      const inputClassName = (this.props.inputElementAttributes?.className) ? `hoo-select-text ${this.props.inputElementAttributes?.className}` : "hoo-select-text";
      const currentDisplay = this._getDisplayValue();
      const expanded = (this.state.ddState === DDState.Open || this.state.ddState === DDState.Filtered);
      const noOptionText: [string, string] = this.props.noOptionsText || ["No options", "No options match input"];
      return (
        <div {...this._rootProps}
          {...this.props.rootElementAttributes}
          id={`${this._dropdownId}-list`}
          role="combobox"
          aria-haspopup="listbox"
          aria-owns={`${this._dropdownId}-list`}
          aria-expanded={expanded}
          onClick={this._toggleDropdown}
          onKeyUp={this._keyUp}
          className={className}
        >
          <div id={`${this._dropdownId}-status`}
            className="hidden-visually"
            aria-live="polite">
            {this.props.options.length} options available. Arrow down to browse or start typing to filter.
          </div>
          <input ref={this._inputElement}
            {...this.props.inputElementAttributes}
            id={`${this._dropdownId}-input`}
            type="text"
            placeholder={this.props.placeholder || null}
            disabled={this.props.disabled || false}
            value={currentDisplay}
            className={inputClassName}
            aria-autocomplete="both"
            autoComplete="off"
            aria-controls={`${this._dropdownId}-list`}
            onChange={this._onChangeInput}
            readOnly={(this.props.containsTypeAhead == null || this.props.readonly) ? true : false}
          />
          <HOOButton type={HOOButtonType.Icon} disabled={this.props.disabled || false} >
            <HOOIcon iconName="hoo-icon-arrow-down" />
          </HOOButton>
          <ul role="listbox"
            {...this.props.ulElementAttributes}
            className={ulClassName}>
            {this.props.options && this.props.options.map((g) => {
              if (this.state.grouped) {
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
                            aria-disabled={i.disabled || false}
                            tabIndex={-1}
                          >
                            {i.text}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <li ref={element => this._optionElements.push(element)}
                    key={g.key}
                    data-value={g.key}
                    className={`hoo-option ${g.disabled ? "is-disabled" : ""}`}
                    aria-disabled={g.disabled || false}
                    tabIndex={-1}
                  >
                    {g.text}
                  </li>
                );
              }
            })}
            {this.state.optionsLength < 1 &&
              <li
                key={-1}
                data-value={-1}
                className="hoo-option is-disabled"
                aria-disabled={true}
                tabIndex={-1}
              >{(this.props.options == null) ? noOptionText[0] : noOptionText[1]}</li>
            }
          </ul>
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}