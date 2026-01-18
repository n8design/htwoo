---
title: "Primary Split Button"
description: "The Primary Split Button combines a primary action button with a dropdown menu trigger, allowing users to access the main action directly or choose from related actions via the dropdown."
type: "components"
layout: "single"
patternId: "atoms-buttons-button-split-primary"
category: "atoms"
subcategory: "buttons"
seoTitle: "Atoms - Buttons Button Split Primary"
seoDescription: "Buttons Button Split Primary Atoms"
weight: 20
hasVariants: true
markup: |
  &lt;div class=&quot;hoo-buttonsplit-primary&quot;&gt;
      &lt;button class=&quot;hoo-buttonsplit-standard&quot;  &gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Standard&lt;/span&gt;
  &lt;/button&gt;
  &lt;button class=&quot;hoo-buttonsplit-carret&quot;  &gt;&lt;span class=&quot;hoo-button-label&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
      &lt;svg class=&quot;hoo-icon-svg icon-arrow-down&quot; aria-hidden=&quot;true&quot;&gt;
          &lt;title&gt;Fluent UI / Fluent Design by hTWOo UI Framework&lt;/title&gt;
          &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-arrow-down&quot;&gt;
          &lt;/use&gt;
      &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;menu class=&quot;hoo-buttonflyout&quot;&gt;
      &lt;li class=&quot;hoo-buttonflyout-item&quot;&gt;
          &lt;button class=&quot;hoo-buttonaction&quot;&gt;&lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
              &lt;svg class=&quot;hoo-icon-svg icon-ninjacat&quot; aria-hidden=&quot;true&quot;&gt;
                  &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-ninjacat&quot;&gt;
                  &lt;/use&gt;
              &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Email message&lt;/span&gt;
  &lt;/button&gt;
  &lt;/li&gt;
  &lt;li class=&quot;hoo-buttonflyout-item&quot;&gt;
      &lt;button class=&quot;hoo-buttonaction&quot;&gt;&lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
          &lt;svg class=&quot;hoo-icon-svg icon-minus&quot; aria-hidden=&quot;true&quot;&gt;
              &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-minus&quot;&gt;
              &lt;/use&gt;
          &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Calendar Event&lt;/span&gt;
  &lt;/button&gt;
  &lt;/li&gt;
  &lt;/menu&gt;
  &lt;/div&gt;
variants:
  - id: "atoms-buttons-button-split-primary-disabled"
    title: "Primary Split Button - disabled"
    variantName: "disabled"
    markup: |
      &lt;div class=&quot;hoo-buttonsplit-primary&quot;&gt;
          &lt;button class=&quot;hoo-buttonsplit-standard&quot; disabled=&quot;true&quot; aria-disabled=&quot;true&quot; &gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Standard&lt;/span&gt;
      &lt;/button&gt;
      &lt;button class=&quot;hoo-buttonsplit-carret&quot; disabled=&quot;true&quot; aria-disabled=&quot;true&quot; &gt;&lt;span class=&quot;hoo-button-label&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
          &lt;svg class=&quot;hoo-icon-svg icon-arrow-down&quot; aria-hidden=&quot;true&quot;&gt;
              &lt;title&gt;Fluent UI / Fluent Design by hTWOo UI Framework&lt;/title&gt;
              &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-arrow-down&quot;&gt;
              &lt;/use&gt;
          &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;
      &lt;/button&gt;
      &lt;menu class=&quot;hoo-buttonflyout&quot;&gt;
          &lt;li class=&quot;hoo-buttonflyout-item&quot;&gt;
              &lt;button class=&quot;hoo-buttonaction&quot;&gt;&lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
                  &lt;svg class=&quot;hoo-icon-svg icon-ninjacat&quot; aria-hidden=&quot;true&quot;&gt;
                      &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-ninjacat&quot;&gt;
                      &lt;/use&gt;
                  &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Email message&lt;/span&gt;
      &lt;/button&gt;
      &lt;/li&gt;
      &lt;li class=&quot;hoo-buttonflyout-item&quot;&gt;
          &lt;button class=&quot;hoo-buttonaction&quot;&gt;&lt;span class=&quot;hoo-button-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
              &lt;svg class=&quot;hoo-icon-svg icon-minus&quot; aria-hidden=&quot;true&quot;&gt;
                  &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-minus&quot;&gt;
                  &lt;/use&gt;
              &lt;/svg&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Calendar Event&lt;/span&gt;
      &lt;/button&gt;
      &lt;/li&gt;
      &lt;/menu&gt;
      &lt;/div&gt;
---

# Primary Split Button

The Primary Split Button combines a primary action button with a dropdown menu trigger, allowing users to access the main action directly or choose from related actions via the dropdown.

## Overview

Split buttons provide dual functionality - immediate access to a primary action while offering additional related options through a dropdown menu. The primary button side triggers the main action, while the dropdown arrow reveals secondary actions.

## Features

- **Primary Action**: Left button for immediate main action
- **Secondary Actions**: Dropdown menu with related options
- **Visual Hierarchy**: Primary styling indicates main action importance
- **Keyboard Accessible**: Full keyboard navigation support
- **ARIA Compliant**: Proper accessibility attributes

## JavaScript Integration

Split buttons require JavaScript for dropdown functionality:

### Automatic Initialization

### Manual Initialization

### Key JavaScript Features

- **Flyout Toggle**: Show/hide dropdown menu
- **ARIA States**: Manages `aria-pressed` and `aria-expanded` attributes
- **Focus Management**: Proper focus handling for accessibility
- **Event Handling**: Click and keyboard interaction support

## SCSS Imports

***