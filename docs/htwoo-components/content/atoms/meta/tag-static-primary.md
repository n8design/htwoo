---
title: "Tag Primary (Static)"
description: "A non-interactive tag component with primary theme styling for display purposes."
type: "components"
layout: "single"
patternId: "atoms-meta-tag-static-primary"
category: "atoms"
subcategory: "meta"
seoTitle: "Atoms - Meta Tag Static Primary"
seoDescription: "Meta Tag Static Primary Atoms"
weight: 25
hasVariants: false
markup: |
  
---

# Tag Primary (Static)

A non-interactive tag component with primary theme styling for display purposes.

## Overview

The primary static tag is a non-clickable meta component with enhanced visual emphasis using the primary theme colors. It's used for highlighting important information or statuses.

## Usage

Primary static tags should be used when:
* The tag information is of primary importance
* You want to highlight specific metadata
* The tag represents a featured or important status
* The information deserves visual emphasis

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-mtag-primary` - Primary theme tag class
* `.hoo-mtag-lbl` - Inner text container

## Accessibility

* Since static tags are not interactive, they don't receive focus
* Use appropriate ARIA attributes for tags that convey state information:
  * For status tags: `role="status"` or appropriate ARIA live regions
  * For tags representing important metadata: consider `aria-label` on the container
* Ensure sufficient color contrast for readability with the primary theme colors

## Customization

Primary static tags maintain the primary theme color but can be customized with:
* Additional classes for specific styling needs
* Combined with icons for enhanced visual meaning
* Custom padding or sizing for specific layout requirements