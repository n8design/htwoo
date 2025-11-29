/**
 * File discovery - finds pattern, data, and documentation files
 */
import type { DiscoveredFiles, FILE_TYPES, ResolvedConfig } from './types.js';
/**
 * Discovers all pattern, data, and documentation files
 * @param config - Resolved configuration
 * @returns Discovered files categorized by type
 */
export declare function discoverFiles(config: ResolvedConfig): Promise<DiscoveredFiles>;
/**
 * Gets the file type based on extension and location
 * @param filename - File name with extension
 * @param isInPatternsDir - Whether file is in patterns directory
 * @returns File type constant
 */
export declare function getFileType(filename: string, isInPatternsDir?: boolean): typeof FILE_TYPES[keyof typeof FILE_TYPES] | '';
/**
 * Gets the manifest key for a file
 * @param filePath - Relative file path
 * @param fileType - File type
 * @returns Manifest key (with full path prefix: '_patterns/', '_data/', or 'images/')
 */
export declare function getManifestKey(filePath: string, fileType: string): string;
//# sourceMappingURL=file-discovery.d.ts.map