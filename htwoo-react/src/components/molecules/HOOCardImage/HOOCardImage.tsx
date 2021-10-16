import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import "./HOOCardImage.css";
import { IHOOStandardProps } from "../../Common.model";

export interface IHOOCardImageProps extends IHOOStandardProps {
  /**
   * (Optional) Image source, if omitted HTML children will be rended
  */
  imageSource?: string;
  /**
  * (Optional) ACCESSIBILITY: Image alt, include when using imageSource
 */
  imageAlt?: string;
  /**
   * (Optional) Image width, include when using imageSource or defaults to 320
  */
  width?: number;
  /**
   * (Optional) Image height, include when using imageSource or defaults to 180
  */
  height?: number;
  /**
  * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
  * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
 */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

export interface IHOOCardImageState {
}

export class HOOCardImageState implements IHOOCardImageState {
  constructor() { }
}

export default class HOOCardImage extends React.Component<IHOOCardImageProps, IHOOCardImageState> {
  private LOG_SOURCE: string = "🔶HOOCardImage";
  private _componentClass: string = "hoo-cardimage";

  constructor(props: IHOOCardImageProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "🔶HOOCardImage";
    if (props.imageSource) {
      this._componentClass += "-html";
    }
    this.state = new HOOCardImageState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOCardImageProps>, nextState: Readonly<IHOOCardImageState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOOCardImageProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.props.imageSource &&
            <img src={this.props.imageSource} width={this.props.width || 320} height={this.props.height || 180} alt={this.props.imageAlt} />
          }
          {!this.props.imageSource &&
            this.props.children
          }
        </div>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}