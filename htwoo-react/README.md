# HTWOO ReactJS Components

HTWOO ReactJS is an open source alternative for Microsoft's various implementations of their Fluent UI Web Design system.
This library consists of flexible ReactJS components based on the HTWOO UI library. For a complete listing please see HTWOO Core [Style Guide](https://lab.n8d.studio/htwoo/htwoo-core/?p=all).

Complete documentation of the [HTWOO ReactJS components](https://lab.n8d.studio/htwoo/htwoo-react)

[![100% Fluent Design](https://img.shields.io/badge/Fluent-blue)](https://www.youtube.com/watch?v=cJMwBwFj5nQ) ![DOM manipulation free](https://img.shields.io/badge/100%25-DOM%20manipulation%20free-orange) ![license](https://img.shields.io/github/license/n8design/liquid)

## Getting Help/Giving Feedback

Please feel free to submit your questions, enhancement ideas, and feedback to the GitHub [issues list](https://github.com/n8design/htwoo/issues) so that we can try to address them.

## Getting Started with HTWOO-REACT

This documentation will walk you through getting started with this library. In addition you can review the [video version](https://julieturner.net/post/intro-htwoo-react/) of this solution to see a walk through of the process.

_To get all the details on what has been released when check out our [REACT_CHANGELOG](https://github.com/n8design/htwoo/blob/main/REACT-CHANGELOG.md)._

## Getting Started Walkthrough

### 1. Install package in your solution
  
  _This package has a peer dependency on the correspoinding version of @n8d/htwoo-core so that will be added automatically for you._

  ```cmd
  npm i @n8d/htwoo-react
  ```

### 2. Import htwoo-core styles

  Add a `@use` statement at the top of your solutions root .scss file and then add an `@include` reference to the `htwoo-core.scss` file. Put the `@include` reference inside of the webparts base class so that the styles are scoped to the instance of this webpart:
  
  _Note: The import is wrapped in :global so that the class names will not be modified with a namespace._

  ```scss
  @use 'sass:meta';

  .myWebPartRoot{
    :global {
      @include meta.load-css('node_modules/@n8d/htwoo-core/lib/sass/htwoo-core');
    }
  }
  ```

  then in your root component's top level HTML element add a reference to that base class. This will make sure that when your project builds, the styles will be included. For example:

  ```ts
  public render(): React.ReactElement<IMyComponentProps> {
    try {
      return (
        <div className={styles.myWebPartRoot}>
          Hello World
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
  ```

### 3. Initialze Basic SVG Icons

  To initilize the basic SVG icons, used by some of the more complex components, add the following line to your project starting method. In Microsoft SharePoint Framework (SPFx) that would be in the project's main ts file's onInit method.

  _For more detailed information on using the SymbolSet see the [Advanced/SymbolSet Class](https://lab.n8d.studio/htwoo/htwoo-react/?path=/story/advanced-symbolset-class--page) documentation._
  
  >This example shows initializing in an SPFx project.

  ```ts
  import { symset } from '@n8d/htwoo-react/SymbolSet';

  public async onInit(): Promise<void> {
    // Initialize Icons Symbol Set
    await symset.initSymbols();
  }
  ```
  
#### Add more icons from a custom symbolset file

  Alternatively if you have icons in your own symbolset file**, you can add them by passing the path into the initSymbols method:
  _Note: This will load both the basic SVG icons referenced above as well as whatever icons are in your referenced file, so you only need to do one call._

  **New in hTWOo is the [Icon Tool](https://my.n8d.at/htwoo-icons){:target="_blank"} to create your own symbolset file. This tool allows you to select icons from hoo-icons in regular/filled styles and then download the resulting file to use in your solution.

  Add a typing for svg files to be read as a module (images.d.ts):

  file: images.d.ts

  ```TypeScript
  declare module '*.svg' {
    const content: any;
    export default content;
  }
  ```

  Then import the svg file and pass it to initSymbols method:
  
  >This example shows initializing in an SPFx project.

  ```TypeScript
  import { symset } from '@n8d/htwoo-react/SymbolSet';
  import symbolSetFile from './images/icons.svg';

  public async onInit(): Promise<void> {
    // Initialize Icons Symbol Set with Custom Symbol File
    await symset.initSymbols(symbolSetFile);
  }
  ```

  A SVG symbol file will look similar to the following:

  ```html
  <svg aria-hidden='true' style='position: absolute; width: 0; height: 0; overflow: hidden;' version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    xmlns:xlink='http://www.w3.org/1999/xlink'>
    <defs>
        <symbol id='icon-arrow-left' viewBox='0 0 32 32'>
            <path d='M22.547 31.953l-15.969-15.953 15.969-15.953 1.406 1.406-14.531 14.547 14.531 14.547-1.406 1.406z'></path>
        </symbol>
    </defs>
  </svg>
  ```

#### Add more icons from @n8d/htwoo-icons

  If you are looking to load icons from the `@n8d/htwoo-icons` library you can install the package and then import them by referencing the svg file in the node_modules folder. 

  To register multiple svg files, make additional calls to `symset.initSymbols` passing in additional svg file references.
  
  First, add a typing for svg files to be read as a module (images.d.ts), then import the svg file and pass it to initSymbols method:

  >This example shows initializing in an SPFx project.

  ```ts
  import { symset } from '@n8d/htwoo-react/SymbolSet';
  // Requires typings to be declared in an images.d.ts file
  import fuireg from '@n8d/htwoo-icons/fluent-ui-regular/fluent-ui-regular.svg';

  public async onInit(): Promise<void> {
    // Initialize Icons Symbol Set with HTWOO-Icons
    await symset.initSymbols(fuireg);
  }
  ```

  To use the icons in this file, you will reference them by the individual icon's `id` value, which in the SVG file sample above is `icon-arrow-left`. Here's an example of using an icon in the HOOAction component

  ```jsx
  <HOOAction iconName='icon-arrow-left' label='Action Button' type={HOOActionType.Action}/>
  ```

### 4. Add theme support

#### SPFx projects

  1. Modify your components manifest and add `supportsThemeVariants` which allows any of the hTWOo components to render properly in colored SharePoint section.

  ```json
  { 
    //...
    'supportsThemeVariants': true,
    // ...
  }
  ```

  1. Add the following helper code to your components main ts file's onInit method which initializes the CSS Variables to support themes. Make sure to add the import and the private _spfxThemes variable:
  
  ```ts
  import { ThemeProvider } from '@microsoft/sp-component-base';
  import { SPFxThemes, ISPFxThemes } from '@n8d/htwoo-react/SPFxThemes';
  
  private _spfxThemes: ISPFxThemes = new SPFxThemes();

  public async onInit(): Promise<void> {
    // Consume the new ThemeProvider service
    const microsoftTeams = this.context.sdks?.microsoftTeams;
    const themeProvider = this.context.serviceScope.consume(ThemeProvider.serviceKey);
    this._spfxThemes.initThemeHandler(this.domElement, themeProvider, microsoftTeams);

    // If no ThemeProvider service, do not include property which will use page context
    this._spfxThemes.initThemeHandler(document.body);
  }
  ```
  
  _For more detailed information on using the SPFxThemes see the [Advanced/SPFxThemes Class](https://lab.n8d.studio/htwoo/htwoo-react/?path=/story/advanced-spfxthemes-class--page) documentation._

#### Platform without Microsoft theme support
  
  If you're hosting your solution outside of the Microsoft 365 platform you will need to provide your themes in an alternative manner. The library provides a helper class for applying the theme CSS variables to the root dom element.
  
  First you must define your theme colors. You can do this in a few different ways. The `@n8d/htwoo-core` library which is a dependency, includes some [pre-defined themes](). You can import that theme into your project and then pass it to an instance of the `GenericThemes` class which will then apply that theme to your root DOM element. You can alternatively create your own theme files in `json` or in code and pass them into the `GenericThemes` class.

  For more information and samples see the [Advanced/GenericThemes Class](https://lab.n8d.studio/htwoo/htwoo-react/?path=/story/advanced-genericthemes-class--page) documentation.

### 5. Start using the components

  Import the HTWOO component that you want to use into your own projects components. All components are selectively importable from the root library. 
  
  Please see the table of contents on the left side of the page or the `Find component` function to find the specific components you would like to use and examples of how to use them. 

  #### Example of using the HOOLabel atom component
  
  >Note the use of rootElementAttributes (Acknowledged that this is NOT a real world use) which is a typed interface for all the HTML Attributes of the root dom element for the component. Use this object as a way to overriding and/or adding additoinal accissibility properties to the element.

  ```ts
  import HOOLabel from '@n8d/htwoo-react/HOOLabel';
  
  public render(): React.ReactElement<IMyComponentProps> {
    try {
      const labelREA = {"aria-hidden": true};
      return (
        <div data-component={this.LOG_SOURCE}>
          <HOOLabel label='My Label' rootElementAttributes={labelREA} />
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
  ```

## Engage

Follow us on Twitter [@htwooui](https://twitter.com/htwooui).

**Maintainer:** [Stefan Bauer (N8D)](https://github.com/StfBauer), [Julie Turner](https://github.com/juliemturner)

**Contributor:** You ❤️

[logo]: https://lab.n8d.studio/htwoo/assets/htwoo.jpg "Be like water and adopt fast"
