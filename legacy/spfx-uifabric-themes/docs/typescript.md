# TypeScript integration

Since version 0.7.0 - AliceBlue this package has support for TypeDefinition used in the global `__themeState__` object. In case the TypeScript code need to reference to this object somwhere.

To make use add the following import statement in your code.

In your web part code add the following line to your webpart or extension project.

```typescript
import uiFabricCSS from 'spfx-uifabric-themes';
```

After that you should see the following extensions on the window object.

![TypeScript themestate][TypeScript]
[TypeScript]: ./assets/typedefiniton-themestate.png
