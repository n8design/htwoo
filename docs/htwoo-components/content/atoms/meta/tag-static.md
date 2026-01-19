---
title: "Tag (Static)"
description: "A non-interactive tag component for display purposes."
type: "components"
layout: "single"
patternId: "atoms-meta-tag-static"
category: "atoms"
subcategory: "meta"
seoTitle: "Atoms - Meta Tag Static"
seoDescription: "Meta Tag Static Atoms"
weight: 24
hasVariants: false
markup: |
  
---

# Tag (Static)

A non-interactive tag component for display purposes.

## Overview

The static tag is a non-clickable meta component used when the tag is purely informational and doesn't require any interaction.

## Usage

Static tags should be used when:
* The tag is purely informational
* The tag doesn't need to be clickable
* The tag represents a status or state
* The tag is used for visual grouping or categorization

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-mtag` - Base tag class
* `.hoo-mtag-lbl` - Inner text container

## Accessibility

* Since static tags are not interactive, they don't receive focus
* Use appropriate ARIA attributes for tags that convey state information:
  * For status tags: `role="status"` or appropriate ARIA live regions
  * For tags representing important metadata: consider `aria-label` on the container
* Ensure sufficient color contrast for readability

## Customization

Static tags can be customized with additional classes or styles for specific use cases:
* Add custom background colors for status indicators
* Use with icons for enhanced visual meaning
* Apply additional classes for specific styling needs