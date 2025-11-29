/**
 * Programmatic API for pattern export tool
 * @module @n8d/htwoo-pattern-export
 */
// Main comparison function
export { comparePatterns } from './compare.js';
// Configuration
export { resolveConfig } from './config-resolver.js';
// File operations
export { discoverFiles, getFileType, getManifestKey } from './file-discovery.js';
export { compareFiles, copyChangedFiles, processMarkdownContent } from './file-comparator.js';
// Manifest operations
export { loadManifest, saveManifest, updateManifest, clearManifest, getManifestStats } from './manifest-manager.js';
// Report generation
export { generateReport, displaySummary } from './report-generator.js';
export { FILE_TYPES } from './types.js';
//# sourceMappingURL=index.js.map