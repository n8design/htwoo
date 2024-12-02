import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import HOOLabel from "../HOOLabel";
import HOOInputDesc from "../HOOInputDesc";
import HOOValidationMsg from "../HOOValidationMsg";

export interface IHOOFieldProps extends IHOOStandardProps {
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-field {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export interface IHOOFieldState {
  label: React.ReactNode;
  description: React.ReactNode;
  validation: React.ReactNode;
  content: React.ReactNode[];
}

export class HOOFieldState implements IHOOFieldState {
  constructor(
    public label: React.ReactNode = null,
    public description: React.ReactNode = null,
    public validation: React.ReactNode = null,
    public content: React.ReactNode[] = []
  ) { }
}

export default class HOOField extends React.PureComponent<IHOOFieldProps, IHOOFieldState> {
  private LOG_SOURCE: string = "💦HOOField";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-field";


  constructor(props: IHOOFieldProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOField";
    this.state = new HOOFieldState();
  }

  static getDerivedStateFromProps(props, state) {
    try{
      let label: React.ReactNode = null;
      let description: React.ReactNode = null;
      let validation: React.ReactNode = null;
      let content: React.ReactNode[] = [];
      
      (props.children as React.ReactNode[]).forEach((e) => {
        if (React.isValidElement(e)) {
          const element = e as React.ReactElement;
          if (element.type === HOOLabel) {
            label = element;
          } else if (element.type === HOOInputDesc) {
            description = element;
          } else if (element.type === HOOValidationMsg) {
            validation = element
          } else {
            content.push(element);
          }
        }
      });
      return {label, description, validation, content};
    }catch(err){
      console.error("💦HOOField", "(getDerivedStateFromProps)", err);
    }
  }

  public render(): React.ReactElement<IHOOFieldProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.state.label}
          {this.state.description}
          {this.state.content}
          {this.state.validation}
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}