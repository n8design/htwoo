import * as React from "react";
import { symset } from "../SymbolSet";
import { IHOOStandardProps } from "../common/IHOOStandardProps";

export enum HOOBreadcrumbType {
  "Hyperlink",
  "Button"
}

export interface IHOOBreadcrumbItem {
  key: string | number;
  text: string;
  href?: string;
}

export interface IHOOBreadcrumbProps extends IHOOStandardProps {
  /**
   * Type of element to render breadcrumb items
   */
  type: HOOBreadcrumbType;
  /**
   * Breadcrumb items to show
   */
  breadcrumbItems: IHOOBreadcrumbItem[];
  /**
   * (Optional) Breadcrumb click event, required for HOOBreadcrumbType.Button
   */
  onBreadcrumbClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, key: string | number) => void;
  /**
   * (Optional) Seperator Icon Name
   */
  seperatorIconName?: string;
  /**
   * (Optional) Seperator Icon Title
   */
  seperatorIconTitle?: string;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-breadcrumb {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
}

export interface IHOOBreadcrumbState {
}

export class HOOBreadcrumbState implements IHOOBreadcrumbState {
  constructor() { }
}

export default class HOOBreadcrumb extends React.PureComponent<IHOOBreadcrumbProps, IHOOBreadcrumbState> {
  private LOG_SOURCE: string = "💦HOOBreadcrumb";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-breadcrumb";

  constructor(props: IHOOBreadcrumbProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOBreadcrumb";
    this.state = new HOOBreadcrumbState();
  }

  public render(): React.ReactElement<IHOOBreadcrumbProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      const iconSVG = (this.props.seperatorIconName) ? symset.Icon(this.props.seperatorIconName, this.props.seperatorIconTitle || "") : null;
      return (
        <nav {...this._rootProps} {...this.props.rootElementAttributes} className={className}>
          <ol>
            {this.props.breadcrumbItems && this.props.breadcrumbItems.map((i, idx) => {
              const last: React.HTMLAttributes<HTMLElement> = (idx === this.props.breadcrumbItems.length - 1) ? { "aria-current": "location" } : null;
              return (
                <li key={i.key} className="hoo-breadcrumb-item">
                  {this.props.type === HOOBreadcrumbType.Hyperlink &&
                    <a href={i.href} className="hoo-breadcrumb-link" {...last}>
                      {i.text}
                    </a>
                  }
                  {this.props.type === HOOBreadcrumbType.Button &&
                    <button className="hoo-breadcrumb-link" {...last} onClick={(event) => { this.props.onBreadcrumbClick(event, i.key); }}>
                      {i.text}
                    </button>
                  }
                  {iconSVG && !last &&
                    <span className="hoo-breadcrumb-separator" dangerouslySetInnerHTML={{ __html: iconSVG }}></span>
                  }
                </li>
              );
            })}
          </ol>
        </nav>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}