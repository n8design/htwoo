import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
import HOOIcon from "../HOOIcon";

export interface IHOOVideoProps extends IHOOStandardProps {
  /**
   * (Optional) Icon used to overlay video; Default icon is "play"
  */
  overlayIcon?: string;
  /**
   * (Optional) Icon used to overlay video; Default icon is "play"
  */
  overlayTime?: string;
  /**
   * (Optional) Image used as a thumbnail for the video, set as src for img element
  */
  thumbnailImageUrl?: string;
  /**
   * (Optional) Alt text used as a thumbnail for the video img element and thumbnail caption.
  */
  thumbnailImageAlt?: string;
  /**
   * (Optional) HTMLDetailsElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-video {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
}

export interface IHOOVideoState {
}

export class HOOVideoState implements IHOOVideoState {
  constructor() { }
}

export default class HOOVideo extends React.PureComponent<IHOOVideoProps, IHOOVideoState> {
  private LOG_SOURCE: string = "💦HOOVideo";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-video";

  constructor(props: IHOOVideoProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOVideo";
    this.state = new HOOVideoState();
  }

  public render(): React.ReactElement<IHOOVideoProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <details data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          <summary className="hoo-thumbnail">
            <div className="hoo-thumbnail-overlay">
              <HOOIcon iconName={this.props.overlayIcon || "hoo-play"} />
              <div className="hoo-video-duration">{this.props.overlayTime}</div>
            </div>
            <figure className="hoo-thumbnail-figure">
              <img src={this.props.thumbnailImageUrl} alt={this.props.thumbnailImageAlt} className="hoo-thumbnail-img" />
              <figcaption className="hoo-thumbnail-cap">{this.props.thumbnailImageAlt}</figcaption>
            </figure>
          </summary>
          <div className="hoo-video-player">
            {this.props.children}
          </div>
        </details>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}