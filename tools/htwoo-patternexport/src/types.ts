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
    patterns: string[];      // .hbs and .md files in patterns directory
    dataFiles: string[];     // .json files in data directory
    docFiles: string[];      // .md files in patterns directory (for legacy)
    images: string[];        // all files in images directory
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
export const FILE_TYPES = {
    PATTERN: 'pattern',  // .hbs files
    DATA: 'data',        // .json, .yml, .yaml files
    DOC: 'doc'           // .md files
} as const;

export type FileType = typeof FILE_TYPES[keyof typeof FILE_TYPES];
