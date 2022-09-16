import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
import HOOButton, { HOOButtonType } from "../HOOButton/HOOButton";
import HOOIcon from "../HOOIcon/HOOIcon";

export enum HOOSelectStatus {
  "Initial",
  "Open",
  "Filtered",
  "Closed"
}

export enum HOOSelectFocus {
  "Input",
  "Forward",
  "Back"
}

export interface IHOOSelectOption {
  key: string | number;
  text: string;
}

export interface IHOOSelectProps extends IHOOStandardProps {
  /**
   * Options for select drop down
  */
  options: IHOOSelectOption[];
  /**
   * ID for control
  */
  id: string;
  /**
   * Current Value
  */
  value: string | number;
  /**
   * Starting value for filter
  */
  containsTypeAhead: boolean;
  /**
   * onChange Function
  */
  onChange: (fieldValue: string, fieldName: string) => void;
  /**
   * (Optional) message string for filter box, use {0} for placement of current options length. Omit will yield default message
  */
  optionsLengthMessage?: string;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-select {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

export interface IHOOSelectState {
  currentValue: string | number;
  selectStatus: HOOSelectStatus;
  open: boolean;
  optionsLength: number;
}

export default class HOOSelect extends React.Component<IHOOSelectProps, IHOOSelectState> {
  private LOG_SOURCE: string = "💦HOOSelect";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-select";
  private _optionElements = [];
  private _inputElement: React.RefObject<HTMLInputElement>;
  private _valueChanged: boolean = false;

  constructor(props: IHOOSelectProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOSelect";
    this.state = { currentValue: props.value || undefined, selectStatus: HOOSelectStatus.Initial, open: false, optionsLength: 0 };
    this._inputElement = React.createRef<HTMLInputElement>();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOSelectProps>, nextState: Readonly<IHOOSelectState>) {
    if (this.props.value != nextProps.value) {
      this._valueChanged = true;
    }
    return true;
  }

  public componentDidUpdate() {
    if (this._valueChanged) {
      this._valueChanged = false;
      this.setState({ currentValue: this.props.value, selectStatus: HOOSelectStatus.Initial }, () => {
        this._doFilter();
      });
    }
  }

  private _getDisplayValue = (): string => {
    let retVal: string = "";
    try {
      this.props.options.some((item) => {
        if (item.key === this.state.currentValue) {
          retVal = item.text;
          return true;
        }
        return false;
      });
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_getDisplayValue) - ${err}`);
    }
    return retVal;
  };

  private _onChange = (newValue: any, fieldName: string) => {
    try {
      this.setState({ currentValue: newValue }, () => {
        this.props.onChange(newValue, fieldName);
      });
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_onChange) - ${err}`);
    }
  }

  private _toggleDropdown = () => {
    try {
      const focus = document.activeElement;
      let selectStatus = this.state.selectStatus;
      let open = this.state.open;
      switch (this.state.selectStatus) {
        case HOOSelectStatus.Initial:
          open = !open;
          selectStatus = HOOSelectStatus.Open;
          break;
        case HOOSelectStatus.Open:
          if ((focus == this._inputElement.current) || (focus.tagName == "BUTTON")) {
            open = false;
            selectStatus = HOOSelectStatus.Initial;
          } else if (focus.tagName == "LI") {
            this.props.onChange((focus as HTMLLIElement).dataset.value, this.props.id);
            open = false;
            selectStatus = HOOSelectStatus.Closed;
            this._moveFocus(document.activeElement, HOOSelectFocus.Input);
          }
          break;
        case HOOSelectStatus.Filtered:
          if (focus.tagName == "LI") {
            this.props.onChange((focus as HTMLLIElement).dataset.value, this.props.id);
            open = false;
            selectStatus = HOOSelectStatus.Closed;
            this._moveFocus(document.activeElement, HOOSelectFocus.Input);
          }
          break;
        case HOOSelectStatus.Closed:
          open = true;
          selectStatus = HOOSelectStatus.Open;
          break;
      }
      this.setState({ open: open, selectStatus: selectStatus });
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_toggleDropdown) - ${err}`);
    }
  }

  private _keyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const focus = document.activeElement;
    const key = event.key;
    let selectStatus = this.state.selectStatus;
    let open = this.state.open;
    try {
      switch (key) {
        case 'Enter':
          if (this.state.selectStatus === HOOSelectStatus.Initial) {
            // if state = initial, toggleOpen and set state to opened
            open = true;
            selectStatus = HOOSelectStatus.Open;
          } else if (this.state.selectStatus === HOOSelectStatus.Open && focus.tagName === 'LI') {
            // if state = opened and focus on list, makeChoice and set state to closed
            this.props.onChange((focus as HTMLLIElement).dataset.value, this.props.id);
            open = false;
            selectStatus = HOOSelectStatus.Closed;
            this._moveFocus(document.activeElement, HOOSelectFocus.Input);
          } else if (this.state.selectStatus === HOOSelectStatus.Open && focus === this._inputElement.current) {
            // if state = opened and focus on input, close it
            open = false;
            selectStatus = HOOSelectStatus.Closed;
          } else if (this.state.selectStatus === HOOSelectStatus.Filtered && focus.tagName === 'LI') {
            // if state = filtered and focus on list, makeChoice and set state to closed
            this.props.onChange((focus as HTMLLIElement).dataset.value, this.props.id);
            open = false;
            selectStatus = HOOSelectStatus.Closed;
            this._moveFocus(document.activeElement, HOOSelectFocus.Input);
          } else if (this.state.selectStatus === HOOSelectStatus.Filtered && focus === this._inputElement.current) {
            // if state = filtered and focus on input, set state to opened
            open = true;
            selectStatus = HOOSelectStatus.Open;
          } else { // i.e. csState is closed, or csState is opened/filtered but other focus point?
            // if state = closed, set state to filtered? i.e. open but keep existing input? 
            open = true;
            selectStatus = HOOSelectStatus.Filtered;
          }
          break;
        case 'Escape':
          // if state = initial, do nothing
          // if state = opened or filtered, set state to initial
          // if state = closed, do nothing
          if (this.state.selectStatus === HOOSelectStatus.Open || this.state.selectStatus === HOOSelectStatus.Filtered) {
            open = false;
            selectStatus = HOOSelectStatus.Initial;
          }
          break;
        case 'ArrowDown':
          if (this.state.selectStatus === HOOSelectStatus.Initial || this.state.selectStatus === HOOSelectStatus.Closed) {
            // if state = initial or closed, set state to opened and moveFocus to first
            open = true;
            selectStatus = HOOSelectStatus.Open;
            this._moveFocus(this._inputElement.current, HOOSelectFocus.Forward);
          } else {
            // if state = opened and focus on input, moveFocus to first
            // if state = opened and focus on list, moveFocus to next/first
            // if state = filtered and focus on input, moveFocus to first
            // if state = filtered and focus on list, moveFocus to next/first
            open = true;
            this._moveFocus(document.activeElement, HOOSelectFocus.Forward);
          }
          break;
        case 'ArrowUp':
          if (this.state.selectStatus === HOOSelectStatus.Initial || this.state.selectStatus === HOOSelectStatus.Closed) {
            // if state = initial, set state to opened and moveFocus to last
            // if state = closed, set state to opened and moveFocus to last
            open = true;
            selectStatus = HOOSelectStatus.Open;
            this._moveFocus(this._inputElement.current, HOOSelectFocus.Back);
          } else {
            // if state = opened and focus on input, moveFocus to last
            // if state = opened and focus on list, moveFocus to prev/last
            // if state = filtered and focus on input, moveFocus to last
            // if state = filtered and focus on list, moveFocus to prev/last
            this._moveFocus(document.activeElement, HOOSelectFocus.Back);
          }
          break;
        default:
          if (this.state.selectStatus === HOOSelectStatus.Initial) {
            // if state = initial, toggle open, doFilter and set state to filtered
            open = true;
            selectStatus = HOOSelectStatus.Filtered;
            this._doFilter();
          } else if (this.state.selectStatus === HOOSelectStatus.Open) {
            // if state = opened, doFilter and set state to filtered
            selectStatus = HOOSelectStatus.Filtered;
            this._doFilter();
          } else if (this.state.selectStatus === HOOSelectStatus.Closed) {
            // if state = closed, doFilter and set state to filtered
            selectStatus = HOOSelectStatus.Filtered;
            this._doFilter();
          } else { // already filtered
            this._doFilter();
          }
          break;
      }
      this.setState({ open: open, selectStatus: selectStatus });
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_keyUp) - ${err}`);
    }
  }

  private _doFilter = () => {
    try {
      let optionsLength = this.state.optionsLength;
      let selectStatus = this.state.selectStatus;
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
        selectStatus = HOOSelectStatus.Filtered;
      }
      optionsLength = aFilteredOptions.length;
      this.setState({ selectStatus: selectStatus, optionsLength: optionsLength });
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_doFilter) - ${err}`);
    }
  }

  private _moveFocus = (fromHere: Element, toThere: HOOSelectFocus) => {
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
      if (toThere === HOOSelectFocus.Input) {
        this._inputElement.current.focus();
      }
      // possible start points
      switch (fromHere) {
        case this._inputElement.current:
          if (toThere === HOOSelectFocus.Forward) {
            aCurrentOptions[0].focus();
          } else if (toThere === HOOSelectFocus.Back) {
            aCurrentOptions[aCurrentOptions.length - 1].focus();
          }
          break;
        case this._optionElements[0]:
          if (toThere === HOOSelectFocus.Forward) {
            aCurrentOptions[1].focus();
          } else if (toThere === HOOSelectFocus.Back) {
            this._inputElement.current.focus();
          }
          break;
        case this._optionElements[this._optionElements.length - 1]:
          if (toThere === HOOSelectFocus.Forward) {
            aCurrentOptions[0].focus();
          } else if (toThere === HOOSelectFocus.Back) {
            aCurrentOptions[aCurrentOptions.length - 2].focus();
          }
          break;
        default: // middle list or filtered items 
          const currentItem = document.activeElement;
          const whichOne = aCurrentOptions.findIndex((o) => { return o == (currentItem as HTMLLIElement); });
          if (toThere === HOOSelectFocus.Forward) {
            const nextOne = aCurrentOptions[whichOne + 1];
            nextOne.focus();
          } else if (toThere === HOOSelectFocus.Back && whichOne > 0) {
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

  public render(): React.ReactElement<IHOOSelectProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      const currentDisplay = this._getDisplayValue();
      let optionLengthMessageString = `${this.state.optionsLength} options available. Arrow down to browse or start typing to filter.`;
      if (this.props.optionsLengthMessage) {
        const indexLengthPlaceholder = this.props.optionsLengthMessage.indexOf("{0}") || -1;
        optionLengthMessageString = (indexLengthPlaceholder > -1) ? this.props.optionsLengthMessage.replace("{0}", this.state.optionsLength.toString()) : `${this.state.optionsLength} ${this.props.optionsLengthMessage}`;
      }
      return (
        <div {...this._rootProps} {...this.props.rootElementAttributes} className={className} role="combobox" aria-haspopup="listbox" aria-owns={`${this.props.id}-list`} onClick={this._toggleDropdown} onKeyUp={this._keyUp}>
          <div id={`${this.props.id}-status`} className="hidden-visually" aria-live="polite">
            {optionLengthMessageString}
          </div>
          <input ref={this._inputElement}
            className="hoo-select-text"
            type="text"
            id={`${this.props.id}-input`}
            value={currentDisplay}
            aria-autocomplete="both"
            autoComplete="off"
            aria-controls={`${this.props.id}-list`}
            onChange={(e) => { this.setState({ currentValue: e.currentTarget.value }); }} />
          <HOOButton type={HOOButtonType.Icon}>
            <HOOIcon iconName="hoo-icon-arrow-down" />
          </HOOButton>
          <ul
            role="listbox"
            className={`hoo-select-dropdown ${(this.state.open) ? "" : "hidden-all"}`}>
            {this.props.options.map((o, index) => {
              return (
                <li ref={element => this._optionElements[index] = element}
                  key={o.key}
                  className="hoo-option"
                  role="option"
                  data-value={o.key}
                  tabIndex={-1}
                  onClick={() => { this._onChange(o.key, this.props.id); }}
                >{o.text}</li>
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