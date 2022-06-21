import * as React from "react";
import HOOTag, { HOOTagStyle, HOOTagType } from "../../atoms/HOOTag/HOOTag";
import { IHOOStandardProps } from "../../Common.model";

export interface IHOOTag {
  text: string;
  linkUrl?: string;
  linkTarget?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IHOOTagListProps extends IHOOStandardProps {
  /**
    * Array of IHOOTags to render
  */
  tags: IHOOTag[];
  /**
    * Tag type (HOOTagType)
  */
  tagType: HOOTagType;
  /**
    * Tag style (HOOTagStyle)
  */
  tagStyle: HOOTagStyle;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-meta-list {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}

export interface IHOOTagListState {
}

export class HOOTagListState implements IHOOTagListState {
  constructor() { }
}

export default class HOOTagList extends React.Component<IHOOTagListProps, IHOOTagListState> {
  private LOG_SOURCE: string = "💦HOOTagList";
  private _componentClass: string = "hoo-meta-list";

  constructor(props: IHOOTagListProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOTagList";
    this.state = new HOOTagListState();
  }

  private _getTag = (tag: IHOOTag) => {
    try {
      if (this.props.tagType === HOOTagType.Button) {
        return <HOOTag text={tag.text} tagType={this.props.tagType} tagStyle={this.props.tagStyle} onClick={tag.onClick} />
      } else if (this.props.tagType === HOOTagType.Link) {
        return <HOOTag text={tag.text} tagType={this.props.tagType} tagStyle={this.props.tagStyle} linkTarget={tag.linkTarget} linkUrl={tag.linkUrl} />
      } else {
        return <HOOTag text={tag.text} tagType={this.props.tagType} tagStyle={this.props.tagStyle} />
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_getTag) - ${err}`);
      return null;
    }
  }

  public render(): React.ReactElement<IHOOTagListProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.props.tags && this.props.tags.map((tag) => {
            return (
              <li key={tag.text}>{this._getTag(tag)}</li>
            );
          })}
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}