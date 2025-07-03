# WCAG Accessibility Specifications in HTWOO Core

This document provides a comprehensive reference for all Web Content Accessibility Guidelines (WCAG) specifications tested in HTWOO Core, including links to the official specifications.

## Table of Contents

1. [Overview](#overview)
2. [WCAG 2.0/2.1 Level A](#wcag-201-level-a)
3. [WCAG 2.0/2.1 Level AA](#wcag-201-level-aa)
4. [WCAG 2.1 Level AA Specific](#wcag-21-level-aa-specific)
5. [WCAG 2.2 New Success Criteria](#wcag-22-new-success-criteria)
6. [WCAG 2.1 Level AAA (Selected)](#wcag-21-level-aaa-selected)
7. [Additional Best Practices](#additional-best-practices)
8. [Disabled Rules for Component Testing](#disabled-rules-for-component-testing)
9. [Testing Resources](#testing-resources)

## Overview

HTWOO Core implements comprehensive accessibility testing covering 80+ axe-core rules across multiple WCAG guidelines including WCAG 2.0, 2.1, and 2.2. The tests are organized by WCAG levels (A, AA, and selected AAA) and rule categories, ensuring thorough coverage of accessibility requirements for modern web applications and component libraries.

This document includes:

- **WCAG 2.0/2.1 Level A**: Core accessibility requirements (48+ rules)
  - Images & Alternative Text (6 rules)
  - Form Controls (5 rules)
  - ARIA (18 rules)
  - Document Structure (6 rules)
  - Keyboard & Focus (4 rules)
  - Links & Navigation (2 rules)
  - Tables (3 rules)
  - Media & Motion (6 rules)
  - Additional Level A Rules (8 rules)

- **WCAG 2.0/2.1 Level AA**: Enhanced accessibility requirements (10 rules)
  - Enhanced Visual Requirements (7 rules)
  - Modern Web Requirements (3 rules)

- **WCAG 2.2 Success Criteria**: Latest accessibility standards (8 rules)
- **Selected WCAG AAA Criteria**: Advanced accessibility features (9 rules)
- **Best Practices**: Additional accessibility enhancements beyond WCAG

The testing is implemented through axe-core with custom configurations optimized for component library testing.

## WCAG 2.0/2.1 Level A

### Images & Alternative Text

| Rule ID | Description | WCAG Specification Link |
|---------|-------------|-------------------------|
| `image-alt` | Images must have alt text | [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html) |
| `input-image-alt` | Image inputs must have alt text | [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html) |
| `area-alt` | Area elements must have alt text | [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html) |
| `object-alt` | Object elements must have alt text | [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html) |
| `role-img-alt` | Elements with img role must have alt text | [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html) |
| `svg-img-alt` | SVG images must have alt text | [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html) |

### Form Controls

| Rule ID | Description | WCAG Specification Link |
|---------|-------------|-------------------------|
| `label` | Form controls must have labels | [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html), [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |
| `button-name` | Buttons must have accessible names | [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |
| `input-button-name` | Input buttons must have accessible names | [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |
| `select-name` | Select elements must have accessible names | [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |
| `form-field-multiple-labels` | Form fields must not have multiple labels | [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html) |

### ARIA

| Rule ID | Description | WCAG Specification Link |
|---------|-------------|-------------------------|
| `aria-allowed-attr` | ARIA attributes must be allowed | [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |
| `aria-required-attr` | Required ARIA attributes must be present | [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |
| `aria-valid-attr` | ARIA attributes must be valid | [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |
| `aria-valid-attr-value` | ARIA attribute values must be valid | [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |
| `aria-roles` | ARIA roles must be valid | [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |
| `aria-hidden-focus` | Focusable elements must not be aria-hidden | [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |
| `aria-input-field-name` | ARIA input fields must have accessible names | [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |
| `aria-toggle-field-name` | ARIA toggle fields must have accessible names | [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |
| `aria-dialog-name` | ARIA dialog and alertdialog must have accessible names | [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |
| `aria-tooltip-name` | ARIA tooltip must have accessible name | [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |
| `aria-treeitem-name` | ARIA treeitem must have accessible name | [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |
| `aria-command-name` | ARIA commands must have accessible names | [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |
| `aria-conditional-attr` | ARIA attributes must be used with proper roles | [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |
| `aria-prohibited-attr` | Elements must not use prohibited ARIA attributes | [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |
| `aria-required-children` | Elements with ARIA roles must have required children | [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) |
| `aria-required-parent` | Elements with ARIA roles must have required parent | [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) |

### Document Structure

| Rule ID | Description | WCAG Specification Link |
|---------|-------------|-------------------------|
| `html-has-lang` | HTML must have lang attribute | [3.1.1 Language of Page](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html) |
| `html-lang-valid` | HTML lang attribute must be valid | [3.1.1 Language of Page](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html) |
| `document-title` | Documents must have titles | [2.4.2 Page Titled](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html) |
| `list` | Lists must be structured correctly | [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) |
| `listitem` | List items must be in lists | [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) |
| `definition-list` | Definition lists must be structured correctly | [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) |

### Keyboard & Focus

| Rule ID | Description | WCAG Specification Link |
|---------|-------------|-------------------------|
| `bypass` | Skip navigation must be provided | [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html) |
| `nested-interactive` | Interactive elements must not be nested | [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |
| `scrollable-region-focusable` | Scrollable regions must be focusable | [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html) |
| `frame-focusable-content` | Frames with focusable content must be accessible | [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html) |

### Links & Navigation

| Rule ID | Description | WCAG Specification Link |
|---------|-------------|-------------------------|
| `link-name` | Links must have accessible names | [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html), [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |
| `link-in-text-block` | Links in text must be distinguishable | [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html) |

### Tables

| Rule ID | Description | WCAG Specification Link |
|---------|-------------|-------------------------|
| `td-has-header` | Table cells must have headers | [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) |
| `td-headers-attr` | Table headers attributes must be valid | [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) |
| `th-has-data-cells` | Table headers must have data cells | [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) |

### Media & Motion

| Rule ID | Description | WCAG Specification Link |
|---------|-------------|-------------------------|
| `video-caption` | Videos must have captions | [1.2.2 Captions (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html) |
| `audio-caption` | Audio must have captions (deprecated) | [1.2.2 Captions (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html) |
| `no-autoplay-audio` | Audio must not autoplay | [1.4.2 Audio Control](https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html) |
| `blink` | Content must not blink | [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html) |
| `marquee` | Content must not use marquee | [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html) |
| `meta-refresh` | Pages must not auto-refresh | [2.2.1 Timing Adjustable](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html) |

### Additional Level A Rules

| Rule ID | Description | WCAG Specification Link |
|---------|-------------|-------------------------|
| `accesskeys` | Accesskey values must be unique | [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html) |
| `duplicate-id-active` | Active elements must not have duplicate IDs | [4.1.1 Parsing](https://www.w3.org/WAI/WCAG21/Understanding/parsing.html) |
| `duplicate-id-aria` | ARIA IDs must be unique | [4.1.1 Parsing](https://www.w3.org/WAI/WCAG21/Understanding/parsing.html) |
| `duplicate-id` | IDs must be unique | [4.1.1 Parsing](https://www.w3.org/WAI/WCAG21/Understanding/parsing.html) |
| `dlitem` | Definition list items must be in definition lists | [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) |
| `frame-title` | Frames must have title attribute | [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html) |
| `image-redundant-alt` | Image alternative text should not be redundant | [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html) |
| `scope-attr-valid` | Scope attribute must be used correctly | [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) |

## WCAG 2.0/2.1 Level AA

### Enhanced Visual Requirements

| Rule ID | Description | WCAG Specification Link |
|---------|-------------|-------------------------|
| `color-contrast` | Text must have 4.5:1 contrast ratio | [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) |
| `valid-lang` | Language attributes must be valid | [3.1.2 Language of Parts](https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html) |
| `meta-viewport` | Viewport must support zoom to 200% | [1.4.4 Resize Text](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html) |
| `page-has-title` | Page must have a title | [2.4.2 Page Titled](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html) |
| `duplicate-id-active` | IDs of active elements must be unique | [4.1.1 Parsing](https://www.w3.org/WAI/WCAG21/Understanding/parsing.html) |
| `frame-title-unique` | Frame titles must be unique | [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |

## WCAG 2.1 Level AA Specific

### Modern Web Requirements

| Rule ID | Description | WCAG Specification Link |
|---------|-------------|-------------------------|
| `autocomplete-valid` | Autocomplete attributes must be valid | [1.3.5 Identify Input Purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html) |
| `avoid-inline-spacing` | Content must not prevent text spacing | [1.4.12 Text Spacing](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html) |
| `css-orientation-lock` | Content must not lock orientation | [1.3.4 Orientation](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html) |

## WCAG 2.2 New Success Criteria

WCAG 2.2 introduces new success criteria that can be tested automatically. These are included in HTWOO Core's comprehensive testing:

| Rule ID | Description | WCAG Specification Link |
|---------|-------------|-------------------------|
| `focus-order-semantics` | Focus order must follow a logical sequence | [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html) |
| `dragging-movements` | All functionality operable by dragging must have non-dragging alternative | [2.5.7 Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) |
| `target-size` | Target size for pointer inputs should be at least 24x24px | [2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) |
| `consistent-help` | Help mechanisms should be consistent across the site | [3.2.6 Consistent Help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help) |
| `redundant-entry` | Users should not need to re-enter information already provided | [3.3.7 Redundant Entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry) |
| `accessible-authentication` | Authentication must be possible without cognitive tests | [3.3.8 Accessible Authentication](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication) |
| `focus-appearance` | Focus indicators must have sufficient contrast | [2.4.11 Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance) |
| `focus-not-obscured` | Focus must not be hidden by other content | [2.4.12 Focus Not Obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) |

## WCAG 2.1 Level AAA (Selected)

While WCAG Level AAA criteria are not required for conformance, HTWOO Core tests some Level AAA criteria that represent emerging best practices:

| Rule ID | Description | WCAG Specification Link |
|---------|-------------|-------------------------|
| `color-contrast-enhanced` | Text should have enhanced contrast ratio of 7:1 | [1.4.6 Contrast (Enhanced)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html) |
| `presentation-content-consistent` | Content is presented in consistent ways | [3.2.4 Consistent Identification](https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification.html) |
| `aria-allowed-role` | ARIA role must be appropriate for the element | [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) |
| `animation-from-interactions` | Animation triggered by interaction can be disabled | [2.3.3 Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html) |
| `character-key-shortcuts` | Keyboard shortcuts should be configurable | [2.1.4 Character Key Shortcuts](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html) |
| `empty-heading` | Headings should not be empty | [2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html) |
| `heading-order` | Heading levels should increase by only one level | [2.4.10 Section Headings](https://www.w3.org/WAI/WCAG21/Understanding/section-headings.html) |
| `p-as-heading` | Paragraphs should not be styled as headings | [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) |
| `label-content-name-mismatch` | Visual label must match accessible name | [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html) |

## Additional Best Practices

Beyond the standard WCAG requirements, HTWOO Core also implements additional best practices for enhanced accessibility:

### Semantic HTML & ARIA

| Best Practice | Description | Why It Matters |
|--------------|-------------|----------------|
| **Semantic structure validation** | Ensuring proper use of HTML5 semantic elements | Improves screen reader interpretation and SEO |
| **Advanced ARIA patterns** | Following latest WAI-ARIA Authoring Practices | Ensures complex components meet accessibility standards |
| **ARIA role conformance** | Roles match their expected child/parent relationships | Prevents accessibility API conflicts |
| **ARIA attribute validation** | Attributes conform to their expected usage patterns | Prevents confusing or contradictory accessibility information |

### Visual & UX Considerations

| Best Practice | Description | Why It Matters |
|--------------|-------------|----------------|
| **Color accessibility beyond requirements** | Going beyond the 4.5:1 ratio when possible | Ensures better readability for more users |
| **Enhanced keyboard navigation** | Ensuring logical tab order and focus states | Improves usability for keyboard-only users |
| **Touch target size enhancement** | Targets larger than minimum requirements | Improves usability for users with motor control limitations |
| **Focus indicator visibility** | Focus styles stand out beyond minimum contrast | Helps users track their position when navigating by keyboard |

### Content & Language

| Best Practice | Description | Why It Matters |
|--------------|-------------|----------------|
| **Plain language principles** | Using clear, simple language in UI elements | Makes interfaces more usable for people with cognitive disabilities |
| **Proper reading sequence** | DOM order matches visual reading order | Ensures logical experience for screen reader users |
| **Descriptive element naming** | Names clearly describe purpose and content | Improves understanding for screen reader users |

## Disabled Rules for Component Testing

Since HTWOO Core is a component library rather than full pages, the following page-level rules are disabled in testing:

| Rule ID | Description | WCAG Specification Link |
|---------|-------------|-------------------------|
| `landmark-one-main` | Page must have one main landmark | [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html) |
| `page-has-heading-one` | Page must have at least one level-one heading | [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) |
| `region` | All content should be contained in landmarks | [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html) |

These rules are disabled because they apply to full pages, not individual components.

## Testing Resources

For more information on accessibility testing in HTWOO Core, refer to:

### HTWOO Core Documentation

- [ACCESSIBILITY_TESTING.md](../htwoo-core/ACCESSIBILITY_TESTING.md) - Quick reference guide for daily accessibility testing workflows
- [ACCESSIBILITY_TESTING_COMPREHENSIVE.md](../htwoo-core/ACCESSIBILITY_TESTING_COMPREHENSIVE.md) - Complete implementation guide covering all aspects of the accessibility testing framework

### Official WCAG Documentation

- [WCAG 2.0 Documentation](https://www.w3.org/TR/WCAG20/) - Original Web Content Accessibility Guidelines 2.0
- [WCAG 2.1 Documentation](https://www.w3.org/WAI/WCAG21/Understanding/) - Complete WCAG 2.1 guidelines and success criteria
- [WCAG 2.2 Documentation](https://www.w3.org/WAI/WCAG22/Understanding/) - Latest WCAG 2.2 guidelines with new success criteria
- [WCAG to Success Criteria Map](https://www.w3.org/WAI/WCAG21/Understanding/techniques/) - Mapping between guidelines and success criteria

### Testing Tools & Resources

- [axe-core Rules](https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md) - Documentation for the axe-core rules used in testing
- [axe-core API Documentation](https://github.com/dequelabs/axe-core/tree/master/doc) - Technical reference for the axe-core API
- [Playwright Accessibility Testing](https://playwright.dev/docs/accessibility-testing) - Playwright's accessibility testing capabilities
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) - Design patterns for accessible components

### Additional Resources

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Tool to verify color contrast ratios
- [A11y Project Checklist](https://www.a11yproject.com/checklist/) - Comprehensive accessibility checklist
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility) - Mozilla's accessibility documentation

---

**Last updated:** July 3, 2025
