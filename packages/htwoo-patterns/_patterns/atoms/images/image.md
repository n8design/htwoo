---
title: Base Image Component
order: 0
hidden: true
---

# Base Image

The foundation image component used throughout the HTWOO UI library.

## Overview

The base image component provides the foundational HTML structure for all image components in the HTWOO UI library. It includes support for lazy loading by default to optimize performance.

## Usage

The base image component is typically extended by specific aspect ratio variants or used within other components rather than used directly.

## Accessibility

* Always provide meaningful `alt` text that describes the image content
* For decorative images, use an empty `alt=""` attribute
* The `loading="lazy"` attribute improves performance by deferring off-screen images

## Note

This is the base component for all image variants. For specific use cases, refer to the aspect ratio variants (1:1, 16:9, 16:10) or the components that incorporate images.
