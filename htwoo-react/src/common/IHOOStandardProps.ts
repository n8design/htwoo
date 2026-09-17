import React from "react";

/**
 * Allows arbitrary data-* attributes to be included alongside typed HTML attributes
 * on rootElementAttributes without triggering excess property errors.
 */
export type HOODataAttributes = {
  [dataAttribute: `data-${string}`]: string;
};

/**
 * Allows arbitrary CSS custom properties (e.g. "--hoo-dlg-width") to be set
 * on a React.CSSProperties object without triggering excess property errors.
 */
export type HOOCSSCustomProperties = React.CSSProperties & {
  [customProperty: `--${string}`]: string | number;
};

export interface IHOOStandardProps {
  /**
   * (Optional) React key property, when included added to root element
   */
  reactKey?: React.Key;
  /**
   * (Optional) HTMLHeaderElement attributes that will be applied to the root element of the component.
   */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & HOODataAttributes;
  /**
   * (Optional) data-component decorator string for root HTMLElement.
   */
  dataComponent?: string;
  /**
   * (Optional) explicit typing for React children.
   */
  children?: React.ReactNode;
}
