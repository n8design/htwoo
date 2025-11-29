/**
 * Manifest manager - CRUD operations for manifest.json (file hash tracking)
 */
import type { ComparisonResult, ResolvedConfig } from './types.js';
/**
 * Loads the manifest file or returns empty object if it doesn't exist
 * @param manifestPath - Path to manifest.json
 * @param verbose - Whether to log verbose output
 * @returns Manifest object mapping file paths to MD5 hashes
 */
export declare function loadManifest(manifestPath: string, verbose?: boolean): Promise<Record<string, string>>;
/**
 * Saves the manifest to disk
 * @param manifestPath - Path to manifest.json
 * @param manifest - Manifest object to save
 * @param dryRun - If true, doesn't actually write the file
 */
export declare function saveManifest(manifestPath: string, manifest: Record<string, string>, dryRun?: boolean): Promise<void>;
/**
 * Updates the manifest with comparison results
 * @param manifest - Current manifest
 * @param results - Comparison results
 * @param config - Resolved configuration
 * @returns Updated manifest
 */
export declare function updateManifest(manifest: Record<string, string>, results: ComparisonResult, config: ResolvedConfig): Promise<Record<string, string>>;
/**
 * Clears all entries from the manifest
 * @param manifest - Manifest to clear
 * @returns Empty manifest
 */
export declare function clearManifest(manifest: Record<string, string>): Record<string, string>;
/**
 * Gets statistics about the manifest
 * @param manifest - Manifest to analyze
 * @returns Statistics object
 */
export declare function getManifestStats(manifest: Record<string, string>): {
    total: number;
    patterns: number;
    dataFiles: number;
    images: number;
};
//# sourceMappingURL=manifest-manager.d.ts.map