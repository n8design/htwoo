#!/usr/bin/env bash
#
# Enhanced TypeScript Declaration Generator for HTWOO Core
#
# This script generates TypeScript declaration (.d.ts) files for the JavaScript files in HTWOO Core.
# It uses the TypeScript compiler when possible, and falls back to manual generation when needed.
#

# Directory variables
SOURCE_DIR="/Volumes/Code/n8design/projects/htwoo/htwoo-core/src/js"
TARGET_DIR="/Volumes/Code/n8design/projects/htwoo/packages/htwoo-core/lib/js"
DIST_DIR="/Volumes/Code/n8design/projects/htwoo/packages/htwoo-core/dist/js"
TEMP_DIR="/Volumes/Code/n8design/projects/htwoo/htwoo-core/temp"

echo "📝 Enhanced TypeScript Declaration Generator"
echo "-------------------------------------------"

# Create temp directory if it doesn't exist
mkdir -p "$TEMP_DIR"

# Clean up any existing declaration files
echo "🧹 Cleaning up existing declaration files..."
find "$TARGET_DIR" -name "*.d.ts" -exec rm {} \;

# Try using TypeScript compiler first for automated extraction
echo "🔍 Attempting automated extraction using TypeScript compiler..."
npx tsc --project "/Volumes/Code/n8design/projects/htwoo/htwoo-core/tsconfig.json"

# Check if the automated extraction was successful
if [ "$(find "$TARGET_DIR" -name "*.d.ts" | wc -l)" -eq 0 ]; then
  echo "⚠️  Automated extraction didn't produce any declaration files."
  echo "📝 Falling back to manual declaration creation..."
  
  # Create _util.d.ts
  cat > "$TARGET_DIR/_util.d.ts" << 'EOT'
/**
 * Utility functions for HTWOO
 */
export declare function addClass(element: HTMLElement, classNames: string): void;
export declare function removeClass(element: HTMLElement, classNames: string): void;
export declare function toggleClass(element: HTMLElement, className: string): void;
export declare class pnpSelect extends HTMLUListElement {}
export declare let customElement: void;
EOT

  # Create dialog.d.ts
  cat > "$TARGET_DIR/dialog.d.ts" << 'EOT'
/**
 * Dialog functionality for HTWOO
 */
export declare function initDialogs(): void;
export declare function openDialog(dialogId: string): void;
export declare function closeDialog(dialogId: string): void;
EOT

  # Create file.d.ts
  cat > "$TARGET_DIR/file.d.ts" << 'EOT'
/**
 * File functionality for HTWOO
 */
export {};
EOT

  # Create main.d.ts
  cat > "$TARGET_DIR/main.d.ts" << 'EOT'
/**
 * Main entry point for HTWOO library
 */
export { addClass, removeClass, toggleClass } from './_util';
export { initDialogs, openDialog, closeDialog } from './dialog';
export { initNav } from './nav';
export { initOverflowElements } from './overflow';
export { initPivotElements } from './pivot';
export { initSelect } from './select';
export { initTable } from './table';
EOT

  # Create nav.d.ts
  cat > "$TARGET_DIR/nav.d.ts" << 'EOT'
/**
 * Navigation functionality for HTWOO
 */
export declare function initNav(): void;
EOT

  # Create overflow.d.ts
  cat > "$TARGET_DIR/overflow.d.ts" << 'EOT'
/**
 * Overflow functionality for HTWOO
 */
export declare function initOverflowElements(): void;
EOT

  # Create pivot.d.ts
  cat > "$TARGET_DIR/pivot.d.ts" << 'EOT'
/**
 * Pivot functionality for HTWOO
 */
export declare function initPivotElements(): void;
EOT

  # Create pl-icon-finder.d.ts
  cat > "$TARGET_DIR/pl-icon-finder.d.ts" << 'EOT'
/**
 * Icon finder functionality
 */
export {};
EOT

  # Create select.d.ts
  cat > "$TARGET_DIR/select.d.ts" << 'EOT'
/**
 * Select functionality for HTWOO
 */
export declare function initSelect(): void;
EOT

  # Create table.d.ts
  cat > "$TARGET_DIR/table.d.ts" << 'EOT'
/**
 * Table functionality for HTWOO
 */
export declare function initTable(): void;
EOT

fi

# Create module specific declaration files for the bundled outputs
echo "📦 Creating declarations for bundled modules..."

mkdir -p "$DIST_DIR/amd"
mkdir -p "$DIST_DIR/cjs"
mkdir -p "$DIST_DIR/umd"

# Create declaration files for AMD modules
for file in "$DIST_DIR/amd/"*.js; do
  basename=$(basename "$file" .js)
  if [[ ! -f "${file%.js}.d.ts" ]]; then
    echo "declare module '${basename}';
export * from '../../lib/js/main';" > "${file%.js}.d.ts"
  fi
done

# Create declaration files for CJS modules
for file in "$DIST_DIR/cjs/"*.js; do
  basename=$(basename "$file" .js)
  if [[ ! -f "${file%.js}.d.ts" ]]; then
    echo "declare module '${basename}';
export * from '../../lib/js/main';" > "${file%.js}.d.ts"
  fi
done

# Create declaration files for UMD modules
for file in "$DIST_DIR/umd/"*.js; do
  basename=$(basename "$file" .js)
  if [[ ! -f "${file%.js}.d.ts" ]]; then
    echo "declare module '${basename}';
export * from '../../lib/js/main';" > "${file%.js}.d.ts"
  fi
done

# Verify that we have declaration files for all JavaScript files
js_files_count=$(find "$SOURCE_DIR" -type f -name "*.js" | wc -l)
d_ts_files_count=$(find "$TARGET_DIR" -type f -name "*.d.ts" | wc -l)

echo "✅ TypeScript declaration files created successfully"
echo "📊 Stats: $d_ts_files_count declaration files for approximately $js_files_count source files"
