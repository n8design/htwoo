/**
 * Shared TypeScript interfaces and types for the pattern export tool
 */
/**
 * Represents a difference between source and exported patterns
 */
export interface PatternDiff {
    path: string;
    sourceHash: string;
    exportHash: string;
    sourcePath: string;
    exportPath: string;
    type: string;
}
/**
 * Pattern Lab configuration structure
 */
export interface PatternLabConfig {
    paths: {
        source: {
            patterns: string;
            data: string;
        };
    };
}
/**
 * YAML frontmatter structure for markdown files
 */
export interface YamlFrontmatter {
    hidden?: boolean;
    order?: number;
    [key: string]: unknown;
}
/**
 * CLI and comparison options
 */
export interface CompareOptions {
    verbose?: boolean;
    source?: string;
    data?: string;
    images?: string;
    output?: string;
    dryRun?: boolean;
}
/**
 * Resolved configuration after processing CLI options and config file
 */
export interface ResolvedConfig {
    patternsDir: string;
    dataDir: string;
    imagesDir: string;
    outputDir: string;
    localPatternsDir: string;
    localDataDir: string;
    localImagesDir: string;
    manifestPath: string;
    reportPath: string;
    verbose: boolean;
    dryRun: boolean;
}
/**
 * Discovered files categorized by type
 */
export interface DiscoveredFiles {
    patterns: string[];
    dataFiles: string[];
    docFiles: string[];
    images: string[];
}
/**
 * Comparison results
 */
export interface ComparisonResult {
    differences: PatternDiff[];
    newPatterns: string[];
    modifiedPatterns: string[];
    removedPatterns: string[];
}
/**
 * File type constants
 */
export declare const FILE_TYPES: {
    readonly PATTERN: "pattern";
    readonly DATA: "data";
    readonly DOC: "doc";
};
export type FileType = typeof FILE_TYPES[keyof typeof FILE_TYPES];
//# sourceMappingURL=types.d.ts.map