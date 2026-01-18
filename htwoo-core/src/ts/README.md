# HTWOO Core TypeScript Migration

This folder contains TypeScript versions of the JavaScript files found in the `../js/` folder. The TypeScript files provide improved type safety, better IDE support, and better documentation.

## Structure

The TypeScript files mirror the structure of the JavaScript files, with the following improvements:
- Type definitions for all functions and parameters
- Proper interface definitions for objects
- Improved error handling with type checking
- Better code organization

## Usage

These TypeScript files are intended to be compiled to JavaScript using the TypeScript compiler. The compiled JavaScript will be placed in the `../packages/htwoo-core/lib/js/` directory.

To use these files in your project:
1. Import the TypeScript files directly in your TypeScript project
2. Use the compiled JavaScript files in your JavaScript project

## Files

- `main.ts` - Main entry point for the HTWOO Core framework
- `dialog.ts` - Dialog component implementation
- `file.ts` - File upload handler implementation
- `select.ts` - Custom select component implementation
- `table.ts` - Table component implementation
- `pivot.ts` - Pivot component implementation
- `nav.ts` - Navigation component implementation
- `overflow.ts` - Overflow menu implementation
- `_util.ts` - Utility functions and classes

## Building

The TypeScript files can be compiled using the TypeScript compiler. The configuration for the TypeScript compiler is in the `tsconfig.json` file at the root of the project.
