import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
export declare enum HOOPresenceStatus {
    Away = "away",
    DoNotDisturb = "dnd",
    Online = "online",
    Invisible = "invisible",
    OutOfOffice = "off"
}
export interface IHOOPresenceProps extends IHOOStandardProps {
    status: HOOPresenceStatus;
    rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}
export interface IHOOPresenceState {
}
export declare class HOOPresenceState implements IHOOPresenceState {
    constructor();
}
export default class HOOPresence extends React.Component<IHOOPresenceProps, IHOOPresenceState> {
    private LOG_SOURCE;
    private _componentClass;
    constructor(props: IHOOPresenceProps);
    shouldComponentUpdate(nextProps: Readonly<IHOOPresenceProps>, nextState: Readonly<IHOOPresenceState>): boolean;
    render(): React.ReactElement<IHOOPresenceProps>;
}
