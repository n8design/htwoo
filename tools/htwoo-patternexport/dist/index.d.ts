/**
 * Programmatic API for pattern export tool
 * @module @n8d/htwoo-pattern-export
 */
export { comparePatterns } from './compare.js';
export { resolveConfig } from './config-resolver.js';
export { discoverFiles, getFileType, getManifestKey } from './file-discovery.js';
export { compareFiles, copyChangedFiles, processMarkdownContent } from './file-comparator.js';
export { loadManifest, saveManifest, updateManifest, clearManifest, getManifestStats } from './manifest-manager.js';
export { generateReport, displaySummary } from './report-generator.js';
export type { CompareOptions, ResolvedConfig, PatternDiff, DiscoveredFiles, ComparisonResult, PatternLabConfig, YamlFrontmatter, FileType } from './types.js';
export { FILE_TYPES } from './types.js';
//# sourceMappingURL=index.d.ts.map