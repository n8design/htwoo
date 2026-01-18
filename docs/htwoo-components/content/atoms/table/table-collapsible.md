---
title: "Collapsible Table"
description: "The Collapsible Table variant provides an interactive table with expandable and collapsible sections, allowing users to show or hide groups of related rows. This is particularly useful for organizing "
type: "components"
layout: "single"
patternId: "atoms-table-table-collapsible"
category: "atoms"
subcategory: "table"
seoTitle: "Atoms - Table Table Collapsible"
seoDescription: "Table Table Collapsible Atoms"
weight: 40
markup: |
  &lt;table class=&quot;hoo-table is-collapsible&quot;&gt;
      &lt;thead&gt;
          &lt;tr class=&quot;collapsible&quot; data-sectionHeader=&quot;all&quot; aria-expanded=&quot;false&quot;&gt;
              &lt;th class=&quot;hoo-table-iconcell&quot; scope=&quot;col&quot;&gt;
                  &lt;button class=&quot;hoo-buttonicon&quot; 
                      aria-label=&quot;Toggle section visibility&quot;
                      role=&quot;button&quot;
                      &gt;
                      &lt;span class=&quot;hoo-icon&quot;&gt;
                          &lt;svg class=&quot;hoo-icon-svg icon-arrow-down&quot; aria-hidden=&quot;true&quot;&gt;
                              
                              &lt;use xlink:href=&quot;../../images/icons.svg#icon-arrow-down&quot;&gt;&lt;/use&gt;
                          &lt;/svg&gt;
                      &lt;/span&gt;&lt;/button&gt;
              &lt;/th&gt;
              &lt;th scope=&quot;col&quot;&gt;Hello&lt;/th&gt;
              &lt;th scope=&quot;col&quot;&gt;World&lt;/th&gt;
              &lt;th scope=&quot;col&quot;&gt;How&lt;/th&gt;
              &lt;th scope=&quot;col&quot;&gt;Goes&lt;/th&gt;
          &lt;/tr&gt;
      &lt;/thead&gt;
      &lt;tbody&gt;
          &lt;tr class=&quot;collapsible&quot; data-sectionHeader=&quot;section1&quot; aria-expanded=&quot;false&quot;&gt;
              &lt;th class=&quot;hoo-table-iconcell&quot;&gt;
                  &lt;button class=&quot;hoo-buttonicon&quot; 
                      aria-label=&quot;Toggle section visibility&quot;
                      role=&quot;button&quot;
                      &gt;
                      &lt;span class=&quot;hoo-icon&quot;&gt;
                          &lt;svg class=&quot;hoo-icon-svg icon-arrow-down&quot; aria-hidden=&quot;true&quot;&gt;
                              
                              &lt;use xlink:href=&quot;../../images/icons.svg#icon-arrow-down&quot;&gt;&lt;/use&gt;
                          &lt;/svg&gt;
                      &lt;/span&gt;&lt;/button&gt;
              &lt;/th&gt;
              &lt;th colspan=&quot;4&quot;&gt;
                  &lt;div class=&quot;hoo-table-subheader&quot;&gt;&lt;span&gt;Lorem, ipsum
                          dolor.&lt;/span&gt;&lt;/div&gt;
              &lt;/th&gt;
          &lt;/tr&gt;
          &lt;tr data-section=&quot;section1&quot; class=&quot;is-hidden&quot; aria-hidden=&quot;true&quot;&gt;
              &lt;td&gt;&lt;/td&gt;
              &lt;td&gt;Lorem, ipsum.&lt;/td&gt;
              &lt;td&gt;Deserunt, ipsa?&lt;/td&gt;
              &lt;td&gt;Velit, blanditiis?&lt;/td&gt;
              &lt;td&gt;Placeat, quidem.&lt;/td&gt;
          &lt;/tr&gt;
          &lt;tr data-section=&quot;section1&quot; class=&quot;is-hidden&quot; aria-hidden=&quot;true&quot;&gt;
              &lt;td&gt;&lt;/td&gt;
              &lt;td&gt;Lorem, ipsum.&lt;/td&gt;
              &lt;td&gt;Deserunt, ipsa?&lt;/td&gt;
              &lt;td&gt;Velit, blanditiis?&lt;/td&gt;
              &lt;td&gt;Placeat, quidem.&lt;/td&gt;
          &lt;/tr&gt;
          &lt;tr data-section=&quot;section1&quot; class=&quot;is-hidden&quot; aria-hidden=&quot;true&quot;&gt;
              &lt;td&gt;&lt;/td&gt;
              &lt;td&gt;Lorem, ipsum.&lt;/td&gt;
              &lt;td&gt;Deserunt, ipsa?&lt;/td&gt;
              &lt;td&gt;Velit, blanditiis?&lt;/td&gt;
              &lt;td&gt;Placeat, quidem.&lt;/td&gt;
          &lt;/tr&gt;
          &lt;tr data-section=&quot;section1&quot; class=&quot;is-hidden&quot; aria-hidden=&quot;true&quot;&gt;
              &lt;td&gt;&lt;/td&gt;
              &lt;td&gt;Lorem, ipsum.&lt;/td&gt;
              &lt;td&gt;Deserunt, ipsa?&lt;/td&gt;
              &lt;td&gt;Velit, blanditiis?&lt;/td&gt;
              &lt;td&gt;Placeat, quidem.&lt;/td&gt;
          &lt;/tr&gt;
          &lt;tr class=&quot;collapsible&quot; data-sectionHeader=&quot;section2&quot; aria-expanded=&quot;false&quot;&gt;
              &lt;th class=&quot;hoo-table-iconcell&quot;&gt;
                  &lt;button class=&quot;hoo-buttonicon&quot; 
                      aria-label=&quot;Toggle section visibility&quot;
                      role=&quot;button&quot;
                      &gt;
                      &lt;span class=&quot;hoo-icon&quot;&gt;
                          &lt;svg class=&quot;hoo-icon-svg icon-arrow-down&quot; aria-hidden=&quot;true&quot;&gt;
                              
                              &lt;use xlink:href=&quot;../../images/icons.svg#icon-arrow-down&quot;&gt;&lt;/use&gt;
                          &lt;/svg&gt;
                      &lt;/span&gt;&lt;/button&gt;
              &lt;/th&gt;
              &lt;th colspan=&quot;4&quot;&gt;
                  &lt;div class=&quot;hoo-table-subheader&quot;&gt;&lt;span&gt;Lorem, ipsum
                          dolor.&lt;/span&gt;&lt;/div&gt;
              &lt;/th&gt;
          &lt;/tr&gt;
          &lt;tr data-section=&quot;section2&quot; class=&quot;is-hidden&quot; aria-hidden=&quot;true&quot;&gt;
              &lt;td&gt;&lt;/td&gt;
              &lt;td&gt;Lorem, ipsum.&lt;/td&gt;
              &lt;td&gt;Deserunt, ipsa?&lt;/td&gt;
              &lt;td&gt;Velit, blanditiis?&lt;/td&gt;
              &lt;td&gt;Placeat, quidem.&lt;/td&gt;
          &lt;/tr&gt;
          &lt;tr data-section=&quot;section2&quot; class=&quot;is-hidden&quot; aria-hidden=&quot;true&quot;&gt;
              &lt;td&gt;&lt;/td&gt;
              &lt;td&gt;Lorem, ipsum.&lt;/td&gt;
              &lt;td&gt;Deserunt, ipsa?&lt;/td&gt;
              &lt;td&gt;Velit, blanditiis?&lt;/td&gt;
              &lt;td&gt;Placeat, quidem.&lt;/td&gt;
          &lt;/tr&gt;
          &lt;tr data-section=&quot;section2&quot; class=&quot;is-hidden&quot; aria-hidden=&quot;true&quot;&gt;
              &lt;td&gt;&lt;/td&gt;
              &lt;td&gt;Lorem, ipsum.&lt;/td&gt;
              &lt;td&gt;Deserunt, ipsa?&lt;/td&gt;
              &lt;td&gt;Velit, blanditiis?&lt;/td&gt;
              &lt;td&gt;Placeat, quidem.&lt;/td&gt;
          &lt;/tr&gt;
          &lt;tr data-section=&quot;section2&quot; class=&quot;is-hidden&quot; aria-hidden=&quot;true&quot;&gt;
              &lt;td&gt;&lt;/td&gt;
              &lt;td&gt;Lorem, ipsum.&lt;/td&gt;
              &lt;td&gt;Deserunt, ipsa?&lt;/td&gt;
              &lt;td&gt;Velit, blanditiis?&lt;/td&gt;
              &lt;td&gt;Placeat, quidem.&lt;/td&gt;
          &lt;/tr&gt;
      &lt;/tbody&gt;
      &lt;tfoot&gt;&lt;/tfoot&gt;
  &lt;/table&gt;
---

## Overview
The Collapsible Table variant provides an interactive table with expandable and collapsible sections, allowing users to show or hide groups of related rows. This is particularly useful for organizing complex datasets into logical sections.

## Features

- Interactive section headers that can be expanded and collapsed
- Visual indicators showing the current state (expanded/collapsed)
- Support for nested sections
- Smooth icon rotation animations for state transitions
- Compatible with both standard and compact table styles

## Data Attributes

- `data-sectionHeader`: Identifies a row as a section header (collapsible trigger)
- `data-section`: Associates content rows with their section header

## JavaScript Integration

The collapsible table functionality requires JavaScript for interactive behavior:

### Required JavaScript

### Key JavaScript Features

- **Section Collapse/Expand**: Click handlers for section headers
- **ARIA State Management**: Automatic `aria-expanded` and `aria-hidden` attributes
- **Nested Section Support**: Handles multiple levels of collapsible sections
- **Keyboard Accessibility**: Maintains focus management for keyboard users

### Manual Initialization

## Accessibility

The collapsible table implementation follows these accessibility guidelines:

* Use `aria-expanded` attributes to indicate the current state
* Ensure keyboard navigation works for expanding/collapsing sections
* Provide clear visual indicators of expandable sections
* Follow proper table structure with appropriate ARIA roles

### Reference Documentation

* [W3C WAI Tables](https://www.w3.org/WAI/tutorials/tables/)
* [W3C WAI Multi-Level Tables](https://www.w3.org/WAI/tutorials/tables/multi-level/)

### SCSS Imports