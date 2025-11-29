import type { ComparisonResult, DiscoveredFiles, PatternDiff, ResolvedConfig, YamlFrontmatter } from './types.js';
/**
 * Compares source files with exported files and generates differences
 * @param files - Discovered files
 * @param config - Resolved configuration
 * @param manifest - Current manifest (file hashes)
 * @returns Comparison results with differences
 */
export declare function compareFiles(files: DiscoveredFiles, config: ResolvedConfig, manifest: Record<string, string>): Promise<ComparisonResult>;
/**
 * Copies files that have changed or are new
 * @param differences - File differences to copy
 * @param config - Resolved configuration
 * @param manifest - Manifest to update
 */
export declare function copyChangedFiles(differences: PatternDiff[], config: ResolvedConfig, manifest: Record<string, string>): Promise<void>;
/**
 * Processes markdown content and extracts YAML frontmatter
 */
export declare function processMarkdownContent(content: string): Promise<{
    frontmatter: YamlFrontmatter;
    content: string;
}>;
//# sourceMappingURL=file-comparator.d.ts.map