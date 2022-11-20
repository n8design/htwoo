import * as React from "react";
import { IHOOStandardProps } from "../../common/IHOOStandardProps";

export enum HOOShimmerTheme {
  "None",
  "Neutral",
  "Primary",
  "Fancy"
}

export enum HOOShimmerShape {
  "Container",
  "Circle",
  "Row",
  "Square",
  "Image1:1",
  "Image16:9",
  "Image16:10"
}

export interface IHOOShimmerProps extends IHOOStandardProps {
  /**
   * The type of shimmer effect
  */
  shape: HOOShimmerShape;
  /**
   * (Optional) The type of shimmer theme. Required for shape: Container
  */
  theme?: HOOShimmerTheme;
  /**
   * (Optional) Image width, used only with Image shapes
  */
  imageWidth?: number;
  /**
  * (Optional) Image height, used only with Image shapes
 */
  imageHeight?: number;
  /**
   * (Optional) HTMLImageElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-ph {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
}

export interface IHOOShimmerState {
}

export class HOOShimmerState implements IHOOShimmerState {
  constructor() { }
}

export default class HOOShimmer extends React.PureComponent<IHOOShimmerProps, IHOOShimmerState> {
  private LOG_SOURCE: string = "💦HOOShimmer";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-ph";
  private _imageShape: boolean = false;

  constructor(props: IHOOShimmerProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOShimmer";
    switch (props.shape) {
      case HOOShimmerShape.Row:
        this._componentClass = `${this._componentClass}-row`;
        break;
      case HOOShimmerShape.Circle:
        this._componentClass = `${this._componentClass}-circle`;
        break;
      case HOOShimmerShape.Square:
        this._componentClass = `${this._componentClass}-squared`;
        break;
      case HOOShimmerShape["Image1:1"]:
        this._imageShape = true;
        this._componentClass = `${this._componentClass}-img1x1`;
        break;
      case HOOShimmerShape["Image16:9"]:
        this._imageShape = true;
        this._componentClass = `${this._componentClass}-img16x9`;
        break;
      case HOOShimmerShape["Image16:10"]:
        this._imageShape = true;
        this._componentClass = `${this._componentClass}-img16x10`;
        break;
      case HOOShimmerShape.Container:
        switch (props.theme) {
          case HOOShimmerTheme.None:
            this._componentClass = "";
            break;
          case HOOShimmerTheme.Neutral:
            this._componentClass = `${this._componentClass}-neutral`;
            break;
          case HOOShimmerTheme.Primary:
            this._componentClass = `${this._componentClass}-primary`;
            break;
          case HOOShimmerTheme.Fancy:
            this._componentClass = `${this._componentClass}-fancy`;
            break;
        }
        break;
    }
    this.state = new HOOShimmerState();
  }
  public render(): React.ReactElement<IHOOShimmerProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <>
          {!this._imageShape &&
            <div {...this._rootProps} {...this.props.rootElementAttributes} className={className}>
              {this.props.children}
            </div>
          }
          {this._imageShape &&
            <img {...this._rootProps} {...this.props.rootElementAttributes as React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>}
              className={className}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              width={this.props.imageWidth}
              height={this.props.imageHeight} />
          }
        </>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}