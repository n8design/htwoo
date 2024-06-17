import * as React from "react";
import HOOButton, { HOOButtonType } from "../HOOButton";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import { IHOONavItem } from "../common/IHOONavItem";

export interface IHOOVerticalNavProps extends IHOOStandardProps {
  /**
   * Currently selected navigation item, key must be unique to any element in the navItems higherchy
   */
  selectedKey: string | number;
  /**
   * Hierarchical navigation items
   */
  navItems: IHOONavItem[];
  /**
   * (Optional) On first load navigation items up to and including the level specified are expanded - Default 0
   */
  defaultExpandedLevel?: number;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-nav {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
}

export interface IHOOVerticalNavState {
  expanded: (number | string)[];
}

export default class HOOVerticalNav extends React.PureComponent<IHOOVerticalNavProps, IHOOVerticalNavState> {
  private LOG_SOURCE: string = "💦HOOVerticalNav";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-nav";

  constructor(props: IHOOVerticalNavProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOVerticalNav";
    const expanded = this._defaultExpandedFirstLoad(props.navItems, props.defaultExpandedLevel);
    this.state = { expanded };
  }

  private _defaultExpandedFirstLoad = (navItems: IHOONavItem[], defaultExpandedLevel: number = 0): (number | string)[] => {
    let retVal: (number | string)[] = [];
    try {
      function addExpanded(ni: IHOONavItem[], level: number = 1): void {
        for (let i = 0; i < ni.length; i++) {
          const idx = retVal.findIndex((o) => { return o === ni[i].key });
          if (idx === -1) {
            retVal.push(ni[i].key);
          }
          const nextLevel = level++;
          if (ni[i].childNavItems != null && ni[i].childNavItems.length > 0 && nextLevel <= defaultExpandedLevel) {
            addExpanded(ni[i].childNavItems);
          }
        }
      }
      if (defaultExpandedLevel > 0) {
        addExpanded(navItems);
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_defaultExpandedFirstLoad) - ${err}`);
    }
    return retVal;
  }

  private _expanded = (itemKey: number | string): void => {
    try {
      const expanded = JSON.parse(JSON.stringify(this.state.expanded));
      const idx = expanded.indexOf(itemKey);
      if (idx > -1) {
        expanded.splice(idx, 1);
      } else {
        expanded.push(itemKey);
      }
      this.setState({ expanded });
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_expanded) - ${err}`);
    }
  }

  private _renderNav(navItems: IHOONavItem[]): React.ReactElement<IHOOVerticalNavProps>[] {
    let retVal: React.ReactElement<IHOOVerticalNavProps>[] = (navItems != null) ? [] : null;
    try {
      for (let i = 0; i < navItems.length; i++) {
        const ariaCurrent: React.LiHTMLAttributes<HTMLLIElement> = (navItems[i].key === this.props.selectedKey) ? { "aria-current": "page" } : null;
        const hrefClick: React.AnchorHTMLAttributes<HTMLAnchorElement> = (navItems[i].onItemClick != null) ? { onClick: () => navItems[i].onItemClick(navItems[i].key) } : { href: navItems[i].href || "#", target: navItems[i].target || "_blank" };
        const expanded: boolean = this.state.expanded.indexOf(navItems[i].key) > -1;
        const navItem = <li role="treeitem" data-index={i} className="hoo-navitem" aria-expanded={expanded} {...ariaCurrent}>
          <div className="hoo-navitem-text">
            {navItems[i].childNavItems != null && navItems[i].childNavItems.length > 0 &&
              <HOOButton type={HOOButtonType.Icon} iconName="hoo-icon-arrow-right" onClick={() => { this._expanded(navItems[i].key) }} />
            }
            <a className="hoo-navitem-link" {...hrefClick}>{navItems[i].text}</a>
          </div>
          {navItems[i].childNavItems != null && navItems[i].childNavItems.length > 0 &&
            <menu className="hoo-nav-listsub" role="group">
              {this._renderNav(navItems[i].childNavItems)}
            </menu>
          }
        </li>
        retVal.push(navItem);
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_renderNav) - ${err}`);
    }
    return retVal;
  }

  public render(): React.ReactElement<IHOOVerticalNavProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <nav {...this._rootProps} {...this.props.rootElementAttributes} className={className}>
          <menu role="tree" className="hoo-nav-list">
            {this.props.navItems && this.props.navItems.length > 0 && this._renderNav(this.props.navItems)}
          </menu>
        </nav >
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}