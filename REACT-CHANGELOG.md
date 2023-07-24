# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

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
