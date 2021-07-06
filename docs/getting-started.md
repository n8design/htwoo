---
layout: page
title: Getting Started
description: The getting started page should provide information for how to get up and running with the design system.
---

hTWOo can be used in two ways.

* npm install
* via CDN

## NPM Install

First install the package.

```bash
npm install --save-dev @n8d/htwoo-core
```

Once installed you can import the SASS files from your node_modules folder.

### How to use

* [Use hTWOo in SPFx no-framework web part](./how-to/how-to-spfx-html)
* [Use hTWOo in SPFx ReactJS web part](./how-to/how-to-spfx-react)
* [Use hTWOo in SPFx Angular Elements web part](./how-to/how-to-spfx-angular-elements)

### CDN Support

To use hTWOo from CDN use the following URLs. The CDN version only offer limited capabilities but contain all styling.

**For CSS**

```html
<link rel="stylesheet" href="https://unpkg.com/browse/@n8d/htwoo-core@<version>/dist/css/htwoo.min.css">
```

**For JavaScript**

```html
<script src="https://unpkg.com/browse/@n8d/htwoo-core@<version>/dist/js/"></script>
```

Check out the package on [unpkg](https://unpkg.com/browse/@n8d/htwoo-core@0.4.0-beta2/).

## File Structure of npm package

```
htwoo-core/
.
├── LICENSE
├── README.md
├── dist                  <- For use From CDN
│   ├── css
│   │   └── htwoo.min.css <- Pre-compiled css
│   └── js                <- Additional JavaScripts
│       ├── amd
│       ├── cjs
│       └── umd
│
├── lib
│   ├── components
│   │   ├── _all.scss
│   │   ├── _avatar.scss
│   │   ├── _base.scss
│   │   ├── _button.scss
│   │   ├── _cards.scss
│   │   ├── _dialogs.scss
│   │   ├── _forms.scss
│   │   ├── _icon.scss
│   │   ├── _loading.scss
│   │   ├── _menus.scss
│   │   ├── _table.scss
│   │   ├── _typography.scss
│   │   ├── _webpart-title.scss
│   │   └── _webparts.scss
│   ├── js               <- Pure JavaScripts
│   └── sass             <- Contains the implementation of hTWOOo

```
