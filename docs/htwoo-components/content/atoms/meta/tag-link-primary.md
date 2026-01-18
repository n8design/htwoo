---
title: "Tag Primary (Link)"
description: "A clickable tag component with primary theme styling, implemented as a link for navigation."
type: "components"
layout: "single"
patternId: "atoms-meta-tag-link-primary"
category: "atoms"
subcategory: "meta"
seoTitle: "Atoms - Meta Tag Link Primary"
seoDescription: "Meta Tag Link Primary Atoms"
weight: 23
markup: |
  &lt;a href=&quot;?&quot; class=&quot;hoo-mtag-primary&quot;&gt;
      &lt;span class=&quot;hoo-mtag-lbl&quot;&gt;hTWOo&lt;/span&gt;
  &lt;/a&gt;
---

# Tag Primary (Link)

A clickable tag component with primary theme styling, implemented as a link for navigation.

## Overview

The primary link tag is an interactive meta component with enhanced visual emphasis using the primary theme colors. It's used for highlighting important navigational tags.

## Usage

Primary link tags should be used when:
* The tag navigation is of primary importance
* You want to highlight specific navigational tags
* The tag represents a featured category or section
* The link deserves visual emphasis

## States

* **Default** - Primary themed appearance
* **Hover** - Visual feedback when mouse is over the tag
* **Focus** - When the tag receives keyboard focus
* **Active** - When the tag is being clicked
* **Visited** - After the link has been visited (if styled)

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-mtag-primary` - Primary theme tag class
* `.hoo-mtag-lbl` - Inner text container

## Attributes

* `href` - The URL that the link points to
* `target` - Optional target window (e.g., `_blank` for new tab)
* `rel` - Relationship attributes, use `rel="noopener noreferrer"` with `target="_blank"`

## Accessibility

* Link tags have built-in keyboard accessibility
* They can be focused using the Tab key
* They can be activated using the Enter key
* If opening in a new window, consider adding an indicator and appropriate aria attributes
* For external links, consider adding `aria-label` with additional context
* Ensure sufficient color contrast with the primary theme colors