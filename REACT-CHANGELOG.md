# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 2.8.1 - 2025-Jul-30

- HOODialog - fix issue where changing type property doesn't update style
- HOODropdown - added new noOptionsChangeEvent boolean property that in combination with containsTypeAhead = true, allows the user to add custom values to the input and have the change event fire when they press enter.

## 2.8.0 - 2025-Jul-7

- HOOCommandBar - flyoutMenuItems is now optional on IHOOCommandItem
- Input controls that support input html element now support root readonly property.
- HOONumber - added support for input prefix and input suffix, similar to HOOText

## 2.7.3 - 2025-May-16

- Teams Themes: Updated the teams themes to align with htwoo-core and fix dark more theme bugs.

## 2.7.2 - 2025-Apr-28

- HOOAccordion - Add open property to force state for accordion

## 2.7.1 - 2025-Mar-05

- SPFxThemes/TeamsThemes - Added new css variable to trigger theme settings to optimize for Microsoft Teams

## 2.7.0 - 2025-Feb-19

- HOODate - new optional boolean property `supportTime`, when set to tru will make type of input `datetime-local` instead of `date`. If unset, value is false.
- SPFxThemes - Support for TeamsJS SDK v2+ reference to Microsoft Teams theme.

## 2.6.0 - 2024-Dec-03

>In support of HTWOO-CORE v2.7.0

- HOOButtonCommand - Added optional Hyperlink button type.
- HOOInputDesc - Added new atom for field types, used to add a description for an input element.
- HOOValidationMsg - Added new atom for field types, used to add validation text to input element.
- HOOField - Added new molecule to collect individual atom's into a form field.
- HOOFieldset - Added new molecule to collect HOOFields into a field set.
- HOOCommandBar - Reverted change in component so root element is now `div` not `menu` element.
- HOOPivotBar - Reverted change in component so root element is now `div` not `menu` element.
- HOOProgressBar - Added new atom for progress bar, used to show progress to completion.
- HOOProgressStep - Added as a component of the HOOProgressStepBar, to show markers for steps in progress.
- HOOProgressStepBar - Added a new molecule for a progress bar broken into steps of various sizes based on number of HOOProgressStep components included as children.
- HOOFile - Added new file upload molecule for handling drag/drop file uploads.

## 2.5.12 - 2024-Nov-01

- HOOLabel - Make 'label' property optional and allow for children
- HOODropdown - Updated IHOODropdownItem to make disabled be optional, defaults to false.

## 2.5.11 - 2024-July-21

- OverflowObserver - Modify overflow function to pass improved logic for showing overflow button.

## 2.5.10 - 2024-July-2

- OverflowObserver - Add debouncing method, limit to only clientWidth > 0, adjust for overflow button width.
- HOOButton - If iconTitle is supplied also add it as title property of root element.

## 2.5.9 - 2024-June-26

- HOOPivotBar - Bug fix for class name.

## 2.5.8 - 2024-June-21

- HOODialog/HOODialogContent - Bug fix for shouldComponentUpdate methods which need to always return true to pass through updates to contents of Dialog.

## 2.5.7 - 2024-June-20

- HOODropdown - Fix bug when key is a guid.

## 2.5.6 - 2024-June-19

- HOODropdown - Click event on LI elements was causing double update and was unneeded because change event was handled by keyUp event.

## 2.5.5 - 2024-June-18

- HOODropdown - Bug where numeric keys are getting returned as strings.
- HOODropdown - containsTypeahead is now optional, and not setting value will disable typeahead feature.

## 2.5.4 - 2024-June-18

- HOODropdown - Bug where change event was firing multiple times; tightend up UX bugs with drop down showing.

## 2.5.3 - 2024-June-18

- HOODropdown - Tighten up filtering for typeahead in input. Added optional "noOptionsText" tuple for better UX.

## 2.5.2 - 2024-June-17

- Documentation Fixes
- HOOButtonMenu - Updates for new class names and html attributes in htwoo-core
- HOOVerticalNav - Updates for new class names and html attributes in htwoo-core

## 2.5.1 - 2024-June-04

>In support of HTWOO-CORE v2.5.0

- Documentation Fixes
- HOODropDown - throws errors when null option is included
- SPFx Themes - added semanticColors import for SPFx theme support.
- HOOToggle - labelOn/labelOff attributes are optional but now default to "On"/"Off", children are displayed instead, if they are available.
- HOOVerticalNav - added optional parameter that allows navigation items up to and including specified level expanded by default on first load.
- HOOButtonMenu - added new component that is a renamed and integrated version of HOOIconOverflow that uses a button to show a menu and then displays a flyout menu when clicked and closes when an item in the flyout is selected.

## 2.5.0 - 2024-May-24

- Missing HOONumber import in root index.
- Common - Fix issue with isEqual method testing "functions", also limited to test 3 levels deep
- HOOIcon - fix issue when no icon is passed in, render null instead of error
- SymbolSet - fix issue with null icon throwing error. Added better error trapping.
- HOOCommandButton - Update to support icon only mode and to properly render when children elements are provided.
- HOOCommandBar - Update to IHOOCommandItem to add iconName optional parameter, and make text optional to support Icon HOOCommandButton.
- HOOFlyoutMenu - Update to support label not present in flyout menu items.

## 2.4.0 - 2024-Apr-12

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
