import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash/isEqual";

export interface ILQDWebPartTitleProps {
  dataComponent?: string;
  rootElementAttributes?: React.ButtonHTMLAttributes<HTMLDivElement>;
  editMode: boolean;
  title: string;
  updateTitle: (title: string) => void;
}

export interface ILQDWebPartTitleState {
}

export class LQDWebPartTitleState implements ILQDWebPartTitleState {
  constructor() { }
}

export default class LQDWebPartTitle extends React.Component<ILQDWebPartTitleProps, ILQDWebPartTitleState> {
  private LOG_SOURCE: string = "LQDWebPartTitle";

  constructor(props: ILQDWebPartTitleProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "LQDWebPartTitle";
    this.state = new LQDWebPartTitleState();
  }

  public shouldComponentUpdate(nextProps: Readonly<ILQDWebPartTitleProps>, nextState: Readonly<ILQDWebPartTitleState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  private saveTitle = (event: React.FocusEvent<HTMLDivElement>) => {
    event.preventDefault();
    let title = (event.target as HTMLDivElement).innerText;
    this.props.updateTitle(title);
  }

  public render(): React.ReactElement<ILQDWebPartTitleProps> {
    try {
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes}>
          <h3 role="heading" data-component={this.LOG_SOURCE} className="lqd-webppartheader">
            <div
              contentEditable={this.props.editMode}
              suppressContentEditableWarning={true}
              onBlur={this.saveTitle}
              dangerouslySetInnerHTML={{ __html: this.props.title }}
            />
          </h3>
        </div>
      );
    } catch (err) {
      Logger.write(`${err} - ${this.LOG_SOURCE} (render)`, LogLevel.Error);
      return null;
    }
  }
}