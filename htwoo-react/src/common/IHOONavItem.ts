export interface IHOONavItem {
  /**
   * Navigation item key
   */
  key: string | number;
  /**
   * Navigation item display text
   */
  text: string;
  /**
   * (Optional) Navigation item, link
   */
  href?: string;
  /**
   * (Optional) Navigation item, link target - if ommitted uses "_blank"
   */
  target?: React.HTMLAttributeAnchorTarget;
  /**
   * (Optional) Navigation item, click event
   */
  onItemClick?: (key: string | number) => void;
  /**
   * (Optional) Navigation item's child items 
   */
  childNavItems?: IHOONavItem[];
}