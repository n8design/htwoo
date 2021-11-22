export interface IHOOStandardProps {
  /**
   * (Optional) HTMLHeaderElement attributes that will be applied to the root element of the component.
   */
  rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
  /**
   * (Optional) data-component decorator string for root HTMLElement.
   */
  dataComponent?: string;
}