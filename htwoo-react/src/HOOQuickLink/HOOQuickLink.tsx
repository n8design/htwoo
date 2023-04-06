import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import Button, { HOOButtonType } from "../HOOButton";
import HOOIcon from "../HOOIcon";

export enum HOOQuickLinkType {
  "Link",
  "Compact"
}

export interface IHOOQuickLinkProps extends IHOOStandardProps {
  /**
   * Quick link item's style
  */
  type: HOOQuickLinkType;
  /**
   * Quick link item's title
  */
  title: string;
  /**
   * (Optional) Quick link item's link url
  */
  url?: string;
  /**
   * (Optional) Quick link item's description
  */
  description?: string;
  /**
   * (Optional) Quick link item's icon, specified by source url
  */
  iconSrc?: string;
  /**
   * (Optional) Quick link item's icon, specified by svg
  */
  iconName?: string;
  /**
   * (Optional) Enable quick links menu controls - default False
  */
  editMode?: boolean;
  /**
   * (Optional) Enable Drag/Drop menu option - default False
  */
  enableDragDrop?: boolean;
  /**
   * (Optional) The click event handler for the menu close button. Only use if editMode is true.
  */
  onClickMenuClose?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * (Optional) Grid column span style override when element not hosted in SharePoint page.
  */
  columnSpan?: string;
  /**
   * (Optional) HTMLAnchorElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-qllink {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
  /**
   * (Optional) HTMLButtonElement attributes that will be applied to the edit menu's move button.
   * Use this property to specify drag/drop behavior
  */
  moveElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
}

export interface IHOOQuickLinkState {
}

export default class HOOQuickLink extends React.PureComponent<IHOOQuickLinkProps, IHOOQuickLinkState> {
  private LOG_SOURCE: string = "💦HOOQuickLink";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-qllink";
  private _linkClass: string = "hoo-qllist";

  constructor(props: IHOOQuickLinkProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOQuickLink";
    if(props.type === HOOQuickLinkType.Compact){
      this._linkClass = "hoo-qlcompact";
    }
    this.state = {};
  }

  public render(): React.ReactElement<IHOOQuickLinkProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      let rea = this.props.rootElementAttributes;
      if(this.props.columnSpan != null){
        if(rea == null){
          rea = { style: {}};
        }
        rea.style.gridColumn = this.props.columnSpan;
      }

      return (
        <a data-component={this.LOG_SOURCE} {...rea} className={className} href={this.props.url || ""} >
          <div  className={`${this._linkClass} ${(this.props.editMode) ? "mode-edit" : ""}`}>
            {this.props.iconSrc && this.props.iconSrc.length > 0 &&
              <figure className="hoo-ql-media">
                <img src={this.props.iconSrc} className="hoo-ql-img" alt="" loading="lazy" />
              </figure>
            }
            {this.props.iconName && this.props.iconName.length > 0 &&
              <figure className="hoo-ql-media">
                <HOOIcon iconName={this.props.iconName} rootElementAttributes={{ className: "sh-media-svg" }} />
              </figure>
            }
            <div className="hoo-qlinfo">
              <div className="hoo-qltitle">
                {this.props.title}
              </div>
              {this.props.description &&
                <div className="hoo-qldesc">
                  {this.props.description}
                </div>
              }
            </div>
            {(this.props.editMode === true) &&
              <menu className="hoo-qllink-menu">
                <li className="hoo-qllink-menuitem">
                  <Button type={HOOButtonType.Icon} iconName="hoo-icon-close" onClick={this.props.onClickMenuClose} />
                </li>
                {(this.props.enableDragDrop === true) &&
                  <li className="sh-ql-menuiterm">
                    <Button type={HOOButtonType.Icon} iconName="hoo-icon-move" rootElementAttributes={this.props.moveElementAttributes} />
                  </li>
                }
              </menu>
            }
          </div>
        </a>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}