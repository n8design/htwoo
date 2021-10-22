# HTWOO ReactJS Components

HTWOO ReactJS is an open source alternative for Microsoft's various implementations of their Fluent UI Web Design system.
This library consists of flexible ReactJS components based on the HTWOO UI library. For a complete listing please see HTWOO Core [Style Guide](https://lab.n8d.studio/htwoo/htwoo-core/?p=all).

[![100% Fluent Design](https://img.shields.io/badge/Fluent-blue)](https://www.youtube.com/watch?v=cJMwBwFj5nQ) ![DOM manipulation free](https://img.shields.io/badge/100%25-DOM%20manipulation%20free-orange) ![license](https://img.shields.io/github/license/n8design/liquid)

## How To Use

>Note: This component library is currently under development and will most likely continue to make improvements that could likely bring about breaking changes.  Please feel free to submit your enhancement ideas and feedback to the issues list so that we can try to address them.

### Initialize library in Microsoft SharePoint Framework (SPFx)

1. Add a reference to the base.css file in your solutions root .scss file:

    ```SCSS
    :global {
      @import 'node_modules/@n8d/htwoo-react/lib/base';
    }
    ```

1. To initilize the basic SVG icons add the following line to your components main ts file's onInit method:

    ```TS
    @override
    public async onInit(): Promise<void> {
      // Initialize Icons Symbol Set
      await symset.initSymbols();
    }
    ```

    Alternately you can load your own icon symbol set by passing the path into the initSymbols method:
  
    ```TS
    @override
    public async onInit(): Promise<void> {
      // Initialize Icons Symbol Set with Custom Symbol File
      const symbolSetFile = require("./images/icons.svg");
      await symset.initSymbols(symbolSetFile);
    }
    ```

    A SVG symbol file will look similar to the following:

    ```HTML
    <svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
          <symbol id="icon-arrow-left" viewBox="0 0 32 32">
              <path d="M22.547 31.953l-15.969-15.953 15.969-15.953 1.406 1.406-14.531 14.547 14.531 14.547-1.406 1.406z"></path>
          </symbol>
      </defs>
    </svg>
    ```

1. (Optional) Add theme support to your SPFx project

    a. Modify your components manifest and add `supportsThemeVariants` which allows any of the hTWOo components to render properly in colored SharePoint section.

      ```JSON
      { 
        //...
        "supportsThemeVariants": true,
        // ...
      }
      ```

    b. Add the following helper code to your components main ts file's onInit method which initializes the CSS Variables to support themes. Make sure to add the import and the private _spfxThemes variable:

    ```TS
    import SPFxThemes, { ISPFxThemes } from '@n8d/htwoo-react';
    private _spfxThemes: ISPFxThemes = new SPFxThemes();

    @override
    public async onInit(): Promise<void> {
      // Consume the new ThemeProvider service
      const themeProvider = this.context.serviceScope.consume(ThemeProvider.serviceKey);
      this._spfxThemes.initThemeHandler(this.domElement, themeProvider);
    }
    ```

1. Import the HTWOO component that you want to use into your own projects components. All components are selectively importable from the /lib/ folder. We will be working on fully documenting all components and their implementation soon.

## HTWOO Base Concept

hTWOo style guide, documentation and building platform is based on [patternlab.io](https://patternlab.io/). To allow the most flexible implementation of designs and design pattern it follows the [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/) coined by Brad Frost around 2012 / 2013.

> We're tasked with making interfaces for more users in more contexts using more browsers on more devices with more screen sizes and more capabilities than ever before. That's a daunting task indeed. Thankfully, design systems are here to help. - [Brad Frost](https://atomicdesign.bradfrost.com/)

## Engage

Follow us on Twitter [@htwooui](https://twitter.com/htwooui).

**Maintainer:** [Stefan Bauer (N8D)](https://github.com/StfBauer), [Julie Turner](https://github.com/juliemturner)

**Contributor:** You ❤️

[logo]: https://lab.n8d.studio/htwoo/assets/htwoo.jpg "Be like water and adopt fast"
