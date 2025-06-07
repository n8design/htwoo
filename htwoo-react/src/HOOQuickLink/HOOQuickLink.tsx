import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import Button, { HOOButtonType } from "../HOOButton";
import HOOIcon from "../HOOIcon";

export enum HOOQuickLinkType {
  "Link",
  "Compact",
  "Grid",
  "Button",
  "Tile"
}

export enum HOOQuickLinkStyle{ 
  "Outline"="",
  "Filled"="filled",
  "None"="no-outline"
}

export enum HOOQuickLinkAlignment{
  "Left"="",
  "Center"="center"
}

export enum HOOQuickLinkButtonLines{
  "Normal"="",
  "One"="one-line",
}

export enum HOOQuickLinkImageSize{
  "Small"="",
  "Medium"="img-m",
  "Large"="img-l",
  "XLarge"="img-xl",
  "Fill"="img-fill",
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
   * (Optional) HOOQuickLinkType="Button" style, Outline, Fill, None; default to Outline
  */
  style?: HOOQuickLinkStyle;
  /**
   * (Optional) HOOQuickLinkType="Button" alignment, Center, Left; default to Left
  */
  alignment?: HOOQuickLinkAlignment;
  /**
   * (Optional) HOOQuickLinkType="Button" lines, Normal, One; default to Normal
  */
  buttonLines?: HOOQuickLinkButtonLines;
  /**
   * (Optional) HOOQuickLinkType="Tile" image size, Small, Medium, Large, XLarge, Fill; default Small
  */
  imageSize?: HOOQuickLinkImageSize;
  /**
   * (Optional) Quick link item's link url
  */
  url?: string;
  /**
   * (Optional) HOOQuickLinkType="Link" or HOOQuickLinkType="Button" item's description;
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
    this.state = {};
  }

  private _getLinkClass = (): string => {
    let linkClass = this._linkClass;
    try{
      if(this.props.type === HOOQuickLinkType.Compact){
        linkClass = "hoo-qlcompact";
      }else if(this.props.type === HOOQuickLinkType.Button){
        linkClass = "hoo-qlbtn";
      }else if(this.props.type === HOOQuickLinkType.Tile){
        linkClass = "hoo-qltiles";
      }else if(this.props.type === HOOQuickLinkType.Grid){
        linkClass = "hoo-qlgrid";
      }
      linkClass += ` ${this.props.style || ""} ${this.props.alignment || ""} ${this.props.buttonLines || ""} ${this.props.imageSize || ""} ${this.props.editMode || ""}`;
      linkClass = linkClass.trim();
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_getLinkClass) - ${err}`);
    }
    return linkClass;
  }

  public render(): React.ReactElement<IHOOQuickLinkProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      const linkClassValue = this._getLinkClass();
      let rea = this.props.rootElementAttributes;
      if(this.props.columnSpan != null){
        if(rea == null){
          rea = { style: {}};
        }
        rea.style["gridColumn"] = this.props.columnSpan;
      }

      return (
        <a data-component={this.LOG_SOURCE} {...rea} className={className} href={this.props.url || ""} >
          <article className={linkClassValue}>
            {this.props.iconSrc && this.props.iconSrc.length > 0 &&
              <figure className="hoo-ql-media">
                <img src={this.props.iconSrc} className="hoo-ql-img" alt="" loading="lazy" />
              </figure>
            }
            {this.props.iconName && this.props.iconName.length > 0 &&
              <figure className="hoo-ql-media">
                <HOOIcon iconName={this.props.iconName} rootElementAttributes={{ className: "hoo-media-svg" }} />
              </figure>
            }
            <div className="hoo-qlinfo">
              <div className="hoo-qltitle">
                {this.props.title}
              </div>
              {(this.props.type == HOOQuickLinkType.Button || this.props.type == HOOQuickLinkType.Link) && this.props.description &&
                <div className="hoo-qldesc">
                  {this.props.description}
                </div>
              }
            </div>
            {(this.props.editMode === true) &&
              <menu className="hoo-qlmenu">
                <li>
                  <Button type={HOOButtonType.Icon} iconName="hoo-icon-close" onClick={this.props.onClickMenuClose} />
                </li>
                {(this.props.enableDragDrop === true) &&
                  <li>
                    <Button type={HOOButtonType.Icon} iconName="hoo-icon-move" rootElementAttributes={this.props.moveElementAttributes} />
                  </li>
                }
              </menu>
            }
          </article>
        </a>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}