---
title: "Person Select Dropdown"
description: "A specialized dropdown component designed specifically for selecting people, featuring avatars and user information."
type: "components"
layout: "single"
patternId: "atoms-input-select-drop-down-person"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Select Drop Down Person"
seoDescription: "Input Select Drop Down Person Atoms"
weight: 31.2
hasVariants: false
markup: |
  &lt;ul class=&quot;hoo-select-dropdown hoo-show&quot;&gt;
      &lt;li class=&quot;hoo-optgroup&quot;&gt;
          &lt;div class=&quot;hoo-optgroup-name&quot;&gt;Team Alpha&lt;/div&gt;
          &lt;ul class=&quot;hoo-optgroup-items&quot;&gt;
              &lt;li data-value=&quot;john_doe&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;John Doe&lt;/li&gt;
              &lt;li data-value=&quot;jane_smith&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;Jane Smith&lt;/li&gt;
              &lt;li data-value=&quot;alex_johnson&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;Alex Johnson&lt;/li&gt;
          &lt;/ul&gt;
      &lt;/li&gt;
      &lt;li class=&quot;hoo-optgroup&quot;&gt;
          &lt;div class=&quot;hoo-optgroup-name&quot;&gt;Team Beta&lt;/div&gt;
          &lt;ul class=&quot;hoo-optgroup-items&quot;&gt;
              &lt;li data-value=&quot;sarah_wilson&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;Sarah Wilson&lt;/li&gt;
              &lt;li data-value=&quot;mike_brown&quot; class=&quot;hoo-option hoo-disabled&quot; aria-disabled=&quot;true&quot;&gt;Mike Brown&lt;/li&gt;
              &lt;li data-value=&quot;lisa_garcia&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;Lisa Garcia&lt;/li&gt;
          &lt;/ul&gt;
      &lt;/li&gt;
      &lt;li data-value=&quot;guest_user&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;Guest User&lt;/li&gt;
  &lt;/ul&gt;
---

# Person Select Dropdown

A specialized dropdown component designed specifically for selecting people, featuring avatars and user information.

## Overview

The person select dropdown extends the custom select dropdown with visual elements tailored for person selection. It includes avatars, names, and potentially additional user information like roles or departments.

## Usage

Person select dropdowns should be used when:
* Users need to select a person from a list
* Visual identification through avatars is helpful
* Additional person information assists in selection
* The dropdown is part of assignment, mention, or people-focused functionality

## States

* **Default** - Normal closed state
* **Open** - When the dropdown menu is expanded
* **Focus** - When the component has keyboard focus
* **Disabled** - When the dropdown cannot be interacted with

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-select-dropdown` - Base container for the dropdown
* `.hoo-select-dropdown-person` - Modifier for person selection styling
* `.hoo-select-dropdown-button` - The button that triggers the dropdown
* `.hoo-select-dropdown-text` - The selected option text
* `.hoo-select-dropdown-icon` - The dropdown indicator icon
* `.hoo-select-dropdown-menu` - The dropdown menu container
* `.hoo-select-dropdown-option` - Individual option in the dropdown
* `.hoo-avatar` - Avatar component within the option
* `.hoo-person-info` - Container for person text information
* `.hoo-person-name` - Person's name
* `.hoo-person-details` - Additional person details

## Accessibility

* Use appropriate ARIA roles and attributes
* Ensure keyboard navigation works for all options
* Implement proper focus management
* Support screen readers with appropriate person information
* When disabled, include `aria-disabled="true"`
* Ensure avatars have appropriate alt text or are marked as decorative