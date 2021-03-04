# Liquid UI framework - ReactJS

![license](https://img.shields.io/github/license/n8design/liquid)

## SCSS

All components need to have a matching .scss file that imports the styles for the component from the liquid-core folder. SCSS builds are done using gulp tasks which properly resolves paths in liquid-core folder.

e.g.
```
--MyComponent
    --MyComponent.scss
    --MyComponent.tsx
```

In MyComponent.tsx import the correscponding css file in the folder relative path

`import "./MyComponent.css";`

>TODO: Figure out how to configure webpack to resolve the imports so that they can be done directly in the .tsx files.
