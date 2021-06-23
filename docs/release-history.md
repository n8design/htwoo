---
layout: page
title: Release History
---

## v0.4.0 - beta 2
- New component scss file that encapsulate all previous components
```tsx
@import 'node_modules/@n8d/htwoo-core/lib/components/all'
```
- Add new shimmer image placeholders for various ratios - [squared](https://lab.n8d.studio/htwoo/htwoo-core/?p=atoms-shimmer-squared), [16:9](https://lab.n8d.studio/htwoo/htwoo-core/?p=atoms-shimmer-img-16x9), [16:10](https://lab.n8d.studio/htwoo/htwoo-core/?p=atoms-shimmer-img-16x10) images
- Microsoft Teams [Toolbar](https://lab.n8d.studio/htwoo/htwoo-core/?p=molecules-teams-toolbar) and first draft of Microsoft Teams [Dashboard](https://lab.n8d.studio/htwoo/htwoo-core/?p=templates-teams-dashboard)
- Adjustment of image borders
- **EXPERIMENTAL:** JavaScript supports now AMD, CommonJS and UMD in `dist`folder of package. untransformed JavaScript still replains in the `lib` folder.

## v0.3.0
- Adds [placeholder loading animation](https://lab.n8d.studio/htwoo/htwoo-core/?p=viewall-atoms-loading) aka Shimmer effects
- Adds [card layouts](https://lab.n8d.studio/htwoo/htwoo-core/?p=organism-teams-splash-card) for Microsoft Teams
- Adds based on card layouts the Micorosoft Teams [splash screens template](https://lab.n8d.studio/htwoo/htwoo-core/?p=templates-teams-splash-screen-multi) and [splash screens layouts](https://lab.n8d.studio/htwoo/htwoo-core/?p=viewall-pages-teams)

## v0.2.0
- Adds overflow control to [pivotbar](https://lab.n8d.studio/htwoo/htwoo-core/?p=molecules-pivotbar-overflow) and [Command Bars](https://lab.n8d.studio/htwoo/htwoo-core/?p=molecules-cmdbar-overflow) - Feature Request [#11](https://github.com/n8design/htwoo/issues/11)
- Documentation update
- Fixies on color handling especially on dark theme

## v0.1.0

Initial release