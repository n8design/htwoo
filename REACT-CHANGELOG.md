# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 2.4.0 - 2024-Apr-19

>In support of HTWOO-CORE v2.4.0

- SymbolSet - Adjusted icon method to allow for SVG to have title attribute that is specified by the user. Provides hover experience.
- HOOIcon - Adjusted to provide optional "title" property to be applied to icons loaded with SymbolSet helper class.
- HOOBreadcrumb - Added optional icon title property
- HOOButton - Added optional icon title properties
- HOOButtonSplit - Added optional icon title properties
- HOOIconSplit - Added optional icon title properties

## 2.3.1 - 2024-Feb-13

### Fix

- HOODropdown: Bug fix for grouped options.
- HOOAccordionGroup: ARIA Role incorrect.

## 2.3.0 - 2024-Jan-03

>In support of HTWOO-CORE v2.3.0

### Fix

- HOODropdown: Unable to override Id attribute
- HOOPivotBar: update html; root element is now menu
- HOOCommandBar: update html; root element is not menu
- HOOSelect: Officially deprecate as duplicate of HOODropdown
- HOODialog: Fix bug where dialog doesn't open with initial visible=true property.

### Update

- HOODropdown: Added optional typing for options property, now IHOODropDownGroup[] | IHOODropDownItem[]; Added optional `forId` property to be mapped to input element attribute id
- HOOCheckbox: Added optional `forId` property to be mapped to input element attribute id.
- HOONumber: Added optional `forId` property to be mapped to input element attribute id.
- HOOOptionList: Added optional `forId` property to be mapped to input element attribute id.
- HOORadioButton: Added optional `forId` property to be mapped to input element attribute id.
- HOOSearch: Added optional `forId` property to be mapped to input element attribute id.
- HOOText: Added optional `forId` property to be mapped to input element attribute id.
- HOOTime: Added optional `forId` property to be mapped to input element attribute id.
- HOOToggle: Added optional `forId` property to be mapped to input element attribute id.

### Additions

- HOOFacepile: Prepped for overflow style, not available yet in core.
- HOOQuickLink: Added new grid, button, and tile layout types and supporting properties.
- HOOVideo: Added new Video component that supports various embedded video players.

## 2.2.0 - SKIPPED TO KEEP VERSIONS CONSISTENT

## 2.1.1 - 2023-Dec-01

### Fix

- HOOOptionList: Elevate various component properties to state.
- HOODialog: Added missing 'Center' modal dialog configuration.

## 2.1.0 - 2023-Nov-25

>In support of HTWOO-CORE v2.1.4

### Fix

- HOODropdown: Fixed value assignment, type-ahead visibility.
- HOODialog: Updates for new html dialog implementation and expanded layouts in HTWOO-CORE.

### Additions

- HOODropdown: Added optional placeholder property for dropdowns input to make it easier to set.
- HOOOptionList: Now supports multi-column layouts in desktop and mobile.
- HOODialogActions: Added in support of Message/Status Bars.

## 2.0.2 - 2023-May-15

### Fix

- HOODialog: HTML changed for HTWOO-CORE v2 missing from React component

## 2.0.1 - 2023-May-11

>In support of HTWOO-CORE v2.0.2

### Fix

- SPFxThemes: Optimize loading CSS variables from SPFx theme provider.
- HOOText: Multiline text field had bug setting the value.
- HOOAction: Removed command and context options from HOOActionType because they were not rendering at all and HOOButtonCommand is the 'command' option, therefore it was a duplication. Deprecated type property (optional) since this property can be omitted and will be removed. Context option will be added later.

### Note

- Documentation was updated to Stroybook v7, some features are deprecated and will address those in future releases.

## 2.0.0 - 2023-Apr-1

>In support of HTWOO-CORE v2.0.0

### Additions

- HOOQuickLink: New element that mimics the Microsoft 365 Quick Link list element style
- HOOQuickLinkGrid: New grid element to contain HOOQuickLink items
- HOOAccordion: New detail/summary element to implement accordion element.
- HOOAccordionGroup: Container for a group of HOOAccordion elements.
- HOOCardImage: Added caption property
- GenericThemes: New helper class for adding theme support in non-SPFx solutions.
