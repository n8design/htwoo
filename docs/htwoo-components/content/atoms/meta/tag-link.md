---
title: "Tag (Link)"
description: "A clickable tag component implemented as a link for navigation."
type: "components"
layout: "single"
patternId: "atoms-meta-tag-link"
category: "atoms"
subcategory: "meta"
seoTitle: "Atoms - Meta Tag Link"
seoDescription: "Meta Tag Link Atoms"
weight: 22
hasVariants: false
markup: |
  &lt;a href=&quot;?&quot; class=&quot;hoo-mtag&quot;&gt;&lt;span class=&quot;hoo-mtag-lbl&quot;&gt;hTWOo&lt;/span&gt;&lt;/a&gt;
---

# Tag (Link)

A clickable tag component implemented as a link for navigation.

## Overview

The link tag is an interactive meta component used when the tag needs to navigate to another page, view, or external resource.

## Usage

Link tags should be used when:
* The tag needs to navigate to another page or view
* The tag represents a clickable category or filter that changes page content
* The tag links to a collection of related content
* The tag links to an external resource

## States

* **Default** - Standard appearance
* **Hover** - Visual feedback when mouse is over the tag
* **Focus** - When the tag receives keyboard focus
* **Active** - When the tag is being clicked
* **Visited** - After the link has been visited (if styled)

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-mtag` - Base tag class
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