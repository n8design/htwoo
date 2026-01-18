---
title: "Tooltip with Form Element"
description: "This example demonstrates a practical implementation of a tooltip associated with a form input. The tooltip appears when the user hovers over or focuses on the password field, providing guidance on pa"
type: "components"
layout: "single"
patternId: "atoms-tooltip-tooltip-tryout"
category: "atoms"
subcategory: "tooltip"
seoTitle: "Atoms - Tooltip Tooltip Tryout"
seoDescription: "Tooltip Tooltip Tryout Atoms"
weight: 20
markup: |
  &lt;style&gt;
  
    [role=&quot;tooltip&quot;],
    .hidetooltip.hidetooltip.hidetooltip+[role=&quot;tooltip&quot;] {
      visibility: hidden;
      position: absolute;
      top: 2rem;
      left: 5rem;
    }
  
    [aria-describedby]:hover,
    [aria-describedby]:focus {
      position: relative;
    }
  
    [aria-describedby]:hover+[role=&quot;tooltip&quot;],
    [aria-describedby]:focus+[role=&quot;tooltip&quot;] {
      visibility: visible;
    }
  &lt;/style&gt;
  &lt;div class=&quot;tester&quot;&gt;
    &lt;label class=&quot;hoo-label&quot; for=&quot;password&quot;&gt;Password:&lt;/label&gt;
    &lt;input class=&quot;hoo-input-text&quot; aria-describedby=&quot;passwordrules&quot; id=&quot;password&quot; type=&quot;password&quot; /&gt;
    &lt;div class=&quot;hoo-tooltip top-left&quot; role=&quot;tooltip&quot;&gt;
        &lt;div class=&quot;hoo-tooltip-content&quot;&gt;&lt;p&gt;Password Rules:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;Minimum of 8 characters&lt;/li&gt;&lt;li&gt;Include at least one lowercase letter, one uppercase letter, one number and one special character&lt;/li&gt;&lt;li&gt;Unique to this website&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
---

## Overview
This example demonstrates a practical implementation of a tooltip associated with a form input. The tooltip appears when the user hovers over or focuses on the password field, providing guidance on password requirements.

## Usage

This pattern is particularly useful for:
- Providing password requirements or validation rules
- Explaining input format requirements
- Offering help text for complex form fields
- Providing contextual guidance without cluttering the form

## Accessibility

This implementation follows accessibility best practices by:
- Using `aria-describedby` to associate the tooltip with its input
- Making the tooltip visible on both hover AND focus states
- Using proper positioning to ensure the tooltip doesn't obscure other form elements
- Using the `role="tooltip"` attribute