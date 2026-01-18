---
title: Legacy Dialog Components
order: 90
---

# Legacy Dialog Components

Legacy dialog components provide backward compatibility for existing implementations while maintaining support for older browser environments. These components use traditional DOM manipulation and positioning techniques instead of the modern HTML5 `<dialog>` element.

## Overview

The legacy dialog collection includes components that were built before the widespread adoption of the HTML5 `<dialog>` element. While the modern dialog implementations are recommended for new projects, these legacy components ensure compatibility with existing applications and older browser environments.

## Components

### Modal Dialogs
- **[Modal Dialog](./modal-dialog)**: Standard modal dialog with backdrop overlay
- **[Modal Dialog Error](./modal-dialog-error)**: Error state modal with red styling and error icon
- **[Modal Dialog Success](./modal-dialog-success)**: Success state modal with green styling and success icon
- **[Modal Dialog Warning](./modal-dialog-warning)**: Warning state modal with yellow styling and warning icon
- **[Modal Dialog IFrame](./modal-dialog-iframe)**: Modal dialog optimized for iframe content

### Sidebar Dialogs  
- **[Sidebar Left](./sidebar-left)**: Left-aligned panel dialog
- **[Sidebar Right](./sidebar-right)**: Right-aligned panel dialog

### Test Components
- **[Tester Dialog](./tester-dialog)**: Development and testing dialog component
- **[Tester Sidebar](./tester-sidebar)**: Development and testing sidebar component

## Key Differences from Modern Dialogs

### Browser Support
- **Wider Compatibility**: Works in browsers that don't support HTML5 `<dialog>`
- **IE Support**: Compatible with Internet Explorer 11 and other legacy browsers
- **Polyfill-Free**: No requirement for dialog element polyfills

### CSS Structure
- **Additional Classes**: More complex class structure for state management
- **JavaScript Dependencies**: Requires JavaScript for basic functionality
- **Backdrop Elements**: Separate DOM elements for backdrop functionality

## Migration Path

### From Legacy to Modern
When migrating from legacy to modern dialog components:

1. **Replace Dialog Containers**
   ```html
   <!-- Legacy -->
   <div class="hoo-modal-dialog">
   
   <!-- Modern -->
   <dialog class="hoo-dlg">
   ```

2. **Update JavaScript Implementation**
   

3. **Simplify CSS Structure**
   - Remove backdrop DOM elements
   - Use native `::backdrop` pseudo-element
   - Simplify class hierarchy

### Compatibility Considerations
- **Browser Testing**: Test thoroughly in target browser environments
- **Polyfill Options**: Consider HTML5 dialog polyfills for transition period
- **Feature Detection**: Use feature detection for progressive enhancement

## Best Practices

### When to Use Legacy Components
- **Browser Requirements**: When supporting browsers without HTML5 dialog
- **Existing Codebases**: When maintaining existing applications
- **Gradual Migration**: During transition periods to modern implementations

### When to Use Modern Components
- **New Projects**: Always prefer modern dialog implementations
- **Modern Browsers**: When browser support allows
- **Better Accessibility**: For improved accessibility features
- **Simpler Maintenance**: For reduced complexity and better performance

### Development Guidelines
- **Avoid New Legacy**: Don't create new features with legacy components
- **Document Dependencies**: Clearly document JavaScript requirements
- **Test Coverage**: Maintain comprehensive testing for legacy implementations
- **Migration Planning**: Plan migration paths for future updates

## JavaScript Integration

### Legacy Dialog Pattern

### Modern Equivalent

## SCSS Import

