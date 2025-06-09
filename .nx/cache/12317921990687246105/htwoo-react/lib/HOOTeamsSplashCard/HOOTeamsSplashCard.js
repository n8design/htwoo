import * as React from "react";
export class HOOTeamsSplashCardState {
    constructor() { }
}
export default class HOOTeamsSplashCard extends React.PureComponent {
    constructor(props) {
        super(props);
        this.LOG_SOURCE = "💦HOOTeamsSplashCard";
        this._rootProps = { "data-component": this.LOG_SOURCE };
        this._componentClass = "hoo-splashcard";
        this.LOG_SOURCE = props.dataComponent || "💦HOOTeamsSplashCard";
        this.state = new HOOTeamsSplashCardState();
    }
    render() {
        try {
            if (this.props.reactKey) {
                this._rootProps["key"] = this.props.reactKey;
            }
            const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
            return (React.createElement("article", { ...this._rootProps, ...this.props.rootElementAttributes, className: className }, this.props.children));
        }
        catch (err) {
            console.error(`${this.LOG_SOURCE} (render) - ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=HOOTeamsSplashCard.js.map
