import * as React from "react";
import HOOButton, { HOOButtonType } from "../HOOButton";
export default class HOOVerticalNav extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOVerticalNav";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-nav";
        this._defaultExpandedFirstLoad = (navItems, defaultExpandedLevel = 0) => {
            let retVal = [];
            try {
                function addExpanded(ni, level = 1) {
                    for (let i = 0; i < ni.length; i++) {
                        const idx = retVal.findIndex((o) => { return o === ni[i].key; });
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
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_defaultExpandedFirstLoad) - ${err}`);
            }
            return retVal;
        };
        this._expanded = (itemKey) => {
            try {
                const expanded = JSON.parse(JSON.stringify(this.state.expanded));
                const idx = expanded.indexOf(itemKey);
                if (idx > -1) {
                    expanded.splice(idx, 1);
                }
                else {
                    expanded.push(itemKey);
                }
                this.setState({ expanded });
            }
            catch (err) {
                console.error(`${this.LOG_SOURCE} (_expanded) - ${err}`);
            }
        };
        this.LOG_SOURCE = props.dataComponent || "💦HOOVerticalNav";
        const expanded = this._defaultExpandedFirstLoad(props.navItems, props.defaultExpandedLevel);
        this.state = { expanded };
    }
    _renderNav(navItems) {
        let retVal = (navItems != null) ? [] : null;
        try {
            for (let i = 0; i < navItems.length; i++) {
                const ariaCurrent = (navItems[i].key === this.props.selectedKey) ? { "aria-current": "true" } : null;
                const hrefClick = (navItems[i].onItemClick != null) ? { onClick: () => navItems[i].onItemClick(navItems[i].key) } : { href: navItems[i].href || "#", target: navItems[i].target || "_blank" };
                const expanded = this.state.expanded.indexOf(navItems[i].key) > -1;
                const navItem = React.createElement("li", { key: navItems[i].key, role: "treeitem", "data-index": i, className: "hoo-navitem", "aria-expanded": expanded, ...ariaCurrent },
                    React.createElement("div", { className: "hoo-navitem-text" },
                        navItems[i].childNavItems != null && navItems[i].childNavItems.length > 0 &&
                            React.createElement(HOOButton, { type: HOOButtonType.Icon, iconName: "hoo-icon-arrow-right", onClick: () => { this._expanded(navItems[i].key); } }),
                        React.createElement("a", { className: "hoo-navitem-link", ...hrefClick }, navItems[i].text)),
                    navItems[i].childNavItems != null && navItems[i].childNavItems.length > 0 &&
                        React.createElement("menu", { key: `child${navItems[i].key}`, className: "hoo-nav-listsub", role: "group" }, this._renderNav(navItems[i].childNavItems)));
                retVal.push(navItem);
            }
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (_renderNav) - ${err}`);
        }
        return retVal;
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("nav", { ...this._rootProps, ...this.props.rootElementAttributes, className: className },
                React.createElement("menu", { role: "tree", className: "hoo-nav-list" }, this.props.navItems && this.props.navItems.length > 0 && this._renderNav(this.props.navItems))));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOVerticalNav.js.map
