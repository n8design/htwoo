import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";

export enum HOOTableStyle {
  "Normal",
  "Compact"
}

export interface IHOOTableProps extends IHOOStandardProps {
  /**
   * (Optional) Style of HTML Table
   */
  tableStyle: HOOTableStyle;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-table {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableElement>, HTMLTableElement>;
}

export interface IHOOTableState {
}

export default class HOOTable extends React.PureComponent<IHOOTableProps, IHOOTableState> {
  private LOG_SOURCE: string = "💦HOOTable";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-table";

  constructor(props: IHOOTableProps) {
    super(props);
    if (props.tableStyle == null) {
      props.tableStyle = HOOTableStyle.Normal;
    }
    this.LOG_SOURCE = props.dataComponent || "💦HOOTable";
    this.state = {};
  }

  public render(): React.ReactElement<IHOOTableProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      let className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      if (this.props.tableStyle === HOOTableStyle.Compact) {
        className += " compact";
      }
      return (
        <table data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.props.children}
        </table>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}