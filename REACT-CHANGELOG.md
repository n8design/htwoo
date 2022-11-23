# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 1.6.0 - 2022-Nov-?

>In support of HTWOO-CORE v1.2.6

### General

- Updated component development version of React to major version 17.x; library version still remains compatible from 16-18.2.
- More speicific typings for rootElementAttributes in IHOOStandardProps from `React.AllHTMLAttributes<HTMLElement>` -> `React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>` and updated all components accordingly
- Added documentation about supporting font's in dialogs by adding `root-40` class to root element
- Fixed accessibility errors for all components

### ATOMS

- Added `inputElementAttributes` to HOOSearch, HOODropDownm, and HOOSelect
- Added required property to HOOLabel, which adds * to indicate associated control is required.
- Updated typing for HOOText `inputType` property to React.HTMLInputTypeAttribute
- _hTWOo Core_: Update `HOOFlyoutMenu` and `HOOIconOverflow` from ul to menu element
- Updated documentation/example for `HOOIconOverflow` and fully implemented children to accept instance of `HOOFlyoutMenu`

### MOLECULES

- HTML/Styling cleanup on HOOOptionList
- Added `HOOVerticalNav` component.

## 1.5.0 - 2022-Oct-25

### General

- Changed typing of rootElementAttributes in IHOOStandardProps from `React.HTMLAttributes<HTMLElement>` -> `React.AllHTMLAttributes<HTMLElement>`
  which had a cascading effect on all components but is backward compatible. This could possibly use further refinement in the future.
- Added new `SearchIconDictionary` method to the SymbolSet class to provide a way to do a contains search on the loaded icons
- Updated interface for SymbolSet class to fix missing references.

### ATOMS

- Added `onSearch` event to HOOSearch that fires when the user presses the `Enter` key.
- Added `disabled` property to HOOSearch that disables the search box.
- Added `inputType` property to adjust input type in HOOText; default is "text".
- Fixed typings for inputElementAttributes on HOONumber, HOOText, and HOOToggle.

## 1.4.0 - 2022-Sept-16

>In support of HTWOO-CORE v1.2.5

### GENERAL

- Added reactKey of type React.Key to IHOOStandardProps and when added injected into the root element for the component.
- Small update to HTWOO-Snippets for new reactKey property

### ATOMS

- HOOCommandButton - Added new menu atom.
- HOOCheckbox - Sets a default id value to "hoo-checkbox-" plus 10 random characters unless id provided in rootElementAttributes; used with labelFor property.
- HOODropdown - Sets a default id value to "hoo-dropdown-" plus 10 random characters unless id provided in rootElementAttributes; used with labelFor property.
- HOOIconOverflow - Updates/Fixes to support addition of overflow features in HOOPivotBar and HOOCommandBar
- HOORadioButton - Sets a default id value to "hoo-radio-" plus 10 random characters unless id provided in rootElementAttributes; used with labelFor property.
- HOOToggle - Sets a default id value to "hoo-toggle-" plus 10 random characters unless id provided in rootElementAttributes; used with labelFor property.

### MOLECULES

- HOOPivotBar - Added hasOverflow property to support enabling menu overflow.
- HOOCommandBar - Added new menu bar molecule.
- HOOOptionList - Sets a default name value to "hoo-options-" plus 10 random characters on each element in the list.

## 1.3.0 - 2022-Aug-25

### GENERAL

- Updated peerDependency to support larger range of React versions: >=16 <=18.2
- Added children explicitly to IHOOStandardProps for support of React 18 typing requirements.
- Documentation with update for adding theme support for solutions outside of SPFx & Teams.
- Updated documentation for ES6 imports for svg files for icons, removing use of `require`.
- Added a type defintion for theme - IHOOTheme.

### SERVICES

- _SPFxThemes_
  - Changed `setCSSVariables` to public so that it could be called independently of `initThemeHandler`, accepts an optional HTML Element to apply the theme.
  - Created public property for root `domElement` so that it can be set independently of `initThemeHandler`
  - Fixed issue with changing the theme in SharePoint and not completely refreshing CSS variables.
  - Added new `domElement` and `currentTheme` (readonly) properties

### MOLECULES

- _HOOOptionList_ - Bug fix for improperly placed key attribute.

## 1.2.2 - 2022-Aug-10

### MOLECULES

- _HOOOptionList_ - Bug fix for null/undefined value throwing indexOf error.

## 1.2.1 - 2022-Aug-1

>In support of HTWOO-CORE v1.2.3

### MOLECULES

- _HOOOptionList_ - Bug fix for missing html/styles on checkbox option group.

## 1.2.0 - 2022-July-15

>In support of HTWOO-CORE v1.2.0

### GENERAL

- Updated peerDependency to support larger range of React versions: >=16 <=17

### ATOMS

- _HOOLabel_ - Adds optional `for` property to specify the id of the form element the label should be bound to.

### MOLECULES

- _HOOOptionList_ - Bug fix `onChange` event was incorrectly surfacing `React.ChangeEventHandler<HTMLInputElement>` - now is a custom event type that returns the key and and checked state.
- _HOOWebPartTitle_ - Bug fix `title` field set as optional.

## 1.1.0 - 2022-June-21

>In support of HTWOO-CORE v1.1.1

Significant reorganization, update, and addition of documentation to more closely match HTWOO-Core doc navigation and to extend the documentation of the controls.

### ATOMS

- _HOOTag_ - New meta tag implementation
- _HOOAvatar_ - Size is now optional parameter to support container sizing, added additional sizes to enum HOOAvatarSize

### MOLECULES

- _HOOTagList_ - New meta tag list implementation
- _HOOPersona_ - New persona implementation
- _HOOAvatarPres_ - Size is now optional parameter to support container sizing

## 1.0.0 - 2022-May-20

>In support of HTWOO-CORE v1.0.0

### FUNCTIONS

- _SPFxThemes_
  - Extended properties for `initThemeHandler` method to include passing in `microsoftTeams` page context to apply Teams theme to CSS Variables, also added a `usePageTheme` optional override that will use the page's theme for those instances when you need the root, unmodified SharePoint theme.
  - Added `isInverted` property to class to retrieve if the theme is in it's inverted state
  - Added `inTeams` property to class to retieve if theme is coming from Microsoft Teams.
  - Added global const `spfxThemes` when a global theme state is required
  - Added global React conext object `SPFxThemesContext` to utilize a theme provider with your React project.

## 0.2.0 - 2022-April-15

>In support of HTWOO-CORE v0.7.0

### ATOMS

- _HOOButton_ - Icon Left and Icon Right to be used with Primary Button type.
- _HOOButton_ - IconName to support Icon button type icon child should be a span not a div.
- _HOODialogIFrame_ - New iFrame styling for child of the HOODialogContent molecule
- _HOODate_ - New date picker implementation
- _HOOTime_ - New time picker implementation

### MOLECULES

- _HOOBreadcrumb_ - New implementation, supporting button and hyperlink breadcrumb component.

### FUNCTIONS

- _SymbolSet_ - IconBase64 method that takes IconName and returns base64 encoded string, added namepaceuri to svg element.

## 0.1.0 - 2022-March-30

Initial GA Release
