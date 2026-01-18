---
title: "Search Box"
description: "A specialized text input designed specifically for search functionality."
type: "components"
layout: "single"
patternId: "atoms-input-searchbox"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Searchbox"
seoDescription: "Input Searchbox Atoms"
weight: 40
markup: |
  &lt;div class=&quot;hoo-input-search&quot;&gt;
      &lt;svg class=&quot;hoo-icon icon-search&quot;&gt;
          &lt;use xlink:href=&quot;../../images/icons.svg#icon-search&quot;&gt;&lt;/use&gt;
      &lt;/svg&gt;&lt;input class=&quot;hoo-input-text&quot; type=&quot;search&quot; placeholder=&quot;Search&quot; &gt;
  &lt;/div&gt;
  
---

# Search Box

A specialized text input designed specifically for search functionality.

## Overview

The search box is a text input field optimized for search functionality. It typically includes a search icon and may include additional features like clear button, autocomplete, and search suggestions.

## Usage

Search boxes should be used when:
* Users need to find specific content within a site or application
* Full-text search functionality is available
* Quick access to search is important

## States

* **Default** - Normal state
* **Focus** - When the search box has keyboard focus
* **Active** - When searching is in progress
* **Disabled** - When the search functionality is not available

## SCSS

**Component Import**

**SCSS Partial Location**

## CSS Classes

* `.hoo-searchbox` - Container for the search input and button
* `.hoo-search-input` - The search input field
* `.hoo-search-button` - The search submit button

## Accessibility

* Always provide appropriate labels or aria-labels
* If using icons, ensure they have appropriate text alternatives
* Ensure keyboard navigation works correctly, especially for autocomplete
* Indicate search status for screen readers (loading, results found, etc.)