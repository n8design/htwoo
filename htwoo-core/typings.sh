#!/usr/bin/env bash

# Clean up any existing declaration files
find ../packages/htwoo-core/lib/ -name "*.d.ts" -exec rm {} \;

echo "Using direct approach to create TypeScript declarations..."

# Create _util.d.ts
cat > ../packages/htwoo-core/lib/js/_util.d.ts << 'EOT'
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
cat > ../packages/htwoo-core/lib/js/dialog.d.ts << 'EOT'
/**
 * Dialog functionality for HTWOO
 */
export declare function initDialogs(): void;
export declare function openDialog(dialogId: string): void;
export declare function closeDialog(dialogId: string): void;
EOT

# Create file.d.ts
cat > ../packages/htwoo-core/lib/js/file.d.ts << 'EOT'
/**
 * File functionality for HTWOO
 */
export {};
EOT

# Create main.d.ts
cat > ../packages/htwoo-core/lib/js/main.d.ts << 'EOT'
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
cat > ../packages/htwoo-core/lib/js/nav.d.ts << 'EOT'
/**
 * Navigation functionality for HTWOO
 */
export declare function initNav(): void;
EOT

# Create overflow.d.ts
cat > ../packages/htwoo-core/lib/js/overflow.d.ts << 'EOT'
/**
 * Overflow functionality for HTWOO
 */
export declare function initOverflowElements(): void;
EOT

# Create pivot.d.ts
cat > ../packages/htwoo-core/lib/js/pivot.d.ts << 'EOT'
/**
 * Pivot functionality for HTWOO
 */
export declare function initPivotElements(): void;
EOT

# Create pl-icon-finder.d.ts
cat > ../packages/htwoo-core/lib/js/pl-icon-finder.d.ts << 'EOT'
/**
 * Icon finder functionality
 */
export {};
EOT

# Create select.d.ts
cat > ../packages/htwoo-core/lib/js/select.d.ts << 'EOT'
/**
 * Select functionality for HTWOO
 */
export declare function initSelect(): void;
EOT

# Create table.d.ts
cat > ../packages/htwoo-core/lib/js/table.d.ts << 'EOT'
/**
 * Table functionality for HTWOO
 */
export declare function initTable(): void;
EOT

echo "TypeScript declaration files created successfully"

# Add a comment about future automated approach
echo "# TODO: In future phases, implement automatic extraction from JavaScript source files"
echo "# using the tsconfig.json configuration that's already set up."