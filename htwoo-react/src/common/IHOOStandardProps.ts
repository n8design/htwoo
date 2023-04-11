import React from "react";

export interface IHOOStandardProps {
  /**
   * (Optional) React key property, when included added to root element
   */
  reactKey?: React.Key;
  /**
   * (Optional) HTMLHeaderElement attributes that will be applied to the root element of the component.
   */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  /**
   * (Optional) data-component decorator string for root HTMLElement.
   */
  dataComponent?: string;
  /**
   * (Optional) explicit typing for React children.
   */
  children?: React.ReactNode;
}
