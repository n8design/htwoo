# SPFx-uifabric-themes - Toolkit

This toolkit improves your development workflow. It enables you to webparts create enhanced web part always matching the theme currently applied on the page.

**Current Version:** 0.8.0 - Teal;

# Installation
Create a new SharePoint Framework Project and add this package to your project.

```bash
npm install --save-dev spfx-uifabric-themes 
```

After this installation this package should be listed as a dev dependency in your SPFX Project.

# Enhanced theme slot selection

You can use it the same way like before but the variable reference will change to.

```scss
@import './node_modules/spfx-uifabric-themes/ouif.theme';
```

This new SASS file will support more that 100 different themes slots such as backgroundColor, textColor.

The variables have been renamed to follow this pattern now:

```scss
.container {
  background-color: $ouif-primaryBackground; // Adds "[theme:primaryBackground, default:#ffffff]";
}
```

# Use TypeDefinitions for `window.__themeState__` object

In your web part code add the following line to your webpart or extension project.

```typescript
import {Theme} from 'spfx-uifabric-themes';
```

After that you should see the following extensions on the window object.

![TypeScript themestate][TypeScript]

# CSS Variable support for SPFx projects

Now native CSS variable can also be used in SPFx project using this project.
Read everything on this in my [blog post](https://wp.me/p2iCnX-14x) or on the dedicated [documentation page](css-variables.md)

# Additional functions
You will find all additional functions in the documentation:

* [Typopgraphy](sass/typography.md)  
Create font-weight, font-styles and general text styles
* [State styles](sass/statestyles.md)  
Creates alert, error, info, server and success styles

# License
MIT License

Copyright (c) 2017 [Stefan Bauer](https://www.twitter.com/stfbauer)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


[TypeScript]: https://raw.githubusercontent.com/n8design/spfx-uifabric-themes/master/docs/assets/typedefiniton-themestate.png
