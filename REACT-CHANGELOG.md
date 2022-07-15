# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 1.2.0 - 2022-July-15

>In support of HTWOO-CORE v1.2.0

### GENERAL

- Updated peerDependency to support larger range of React versions: >=16.13.1 <=17.0.2

### ATOMS

- *HOOLabel* - Adds optional `for` property to specify the id of the form element the label should be bound to.

### MOLECULES

- *HOOOptionList* - Bug fix `onChange` event was incorrectly surfacing `React.ChangeEventHandler<HTMLInputElement>` - now is a custom event type that returns the key and and checked state.
- *HOOWebPartTitle* - Bug fix `title` field set as optional.

## 1.1.0 - 2022-June-21

>In support of HTWOO-CORE v1.1.1

Significant reorganization, update, and addition of documentation to more closely match HTWOO-Core doc navigation and to extend the documentation of the controls.

### ATOMS

- *HOOTag* - New meta tag implementation
- *HOOAvatar* - Size is now optional parameter to support container sizing, added additional sizes to enum HOOAvatarSize

### MOLECULES

- *HOOTagList* - New meta tag list implementation
- *HOOPersona* - New persona implementation
- *HOOAvatarPres* - Size is now optional parameter to support container sizing

## 1.0.0 - 2022-May-20

>In support of HTWOO-CORE v1.0.0

### FUNCTIONS

- *SPFxThemes*
  - Extended properties for `initThemeHandler` method to include passing in `microsoftTeams` page context to apply Teams theme to CSS Variables, also added a `usePageTheme` optional override that will use the page's theme for those instances when you need the root, unmodified SharePoint theme.
  - Added `isInverted` property to class to retrieve if the theme is in it's inverted state
  - Added `inTeams` property to class to retieve if theme is coming from Microsoft Teams.
  - Added global const `spfxThemes` when a global theme state is required
  - Added global React conext object `SPFxThemesContext` to utilize a theme provider with your React project.

## 0.2.0 - 2022-April-15

>In support of HTWOO-CORE v0.7.0

### ATOMS

- *HOOButton* - Icon Left and Icon Right to be used with Primary Button type.
- *HOOButton* - IconName to support Icon button type icon child should be a span not a div.
- *HOODialogIFrame* - New iFrame styling for child of the HOODialogContent molecule
- *HOODate* - New date picker implementation
- *HOOTime* - New time picker implementation

### MOLECULES

- *HOOBreadcrumb* - New implementation, supporting button and hyperlink breadcrumb component.

### FUNCTIONS

- *SymbolSet* - IconBase64 method that takes IconName and returns base64 encoded string, added namepaceuri to svg element.

## 0.1.0 - 2022-March-30

Initial GA Release
