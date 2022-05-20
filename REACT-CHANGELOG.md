# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

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
