/**
 * Manifest manager - CRUD operations for manifest.json (file hash tracking)
 */
import chalk from 'chalk';
import { existsSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import { getManifestKey } from './file-discovery.js';
/**
 * Loads the manifest file or returns empty object if it doesn't exist
 * @param manifestPath - Path to manifest.json
 * @param verbose - Whether to log verbose output
 * @returns Manifest object mapping file paths to MD5 hashes
 */
export async function loadManifest(manifestPath, verbose = false) {
    if (!existsSync(manifestPath)) {
        if (verbose) {
            console.log(chalk.yellow(`Manifest not found, creating new one: ${manifestPath}`));
        }
        return {};
    }
    try {
        const content = await readFile(manifestPath, 'utf-8');
        const manifest = JSON.parse(content);
        if (verbose) {
            console.log(chalk.blue(`Loaded manifest with ${Object.keys(manifest).length} entries`));
        }
        return manifest;
    }
    catch (error) {
        if (error instanceof Error) {
            console.warn(chalk.yellow(`Warning: Could not parse manifest, starting fresh: ${error.message}`));
        }
        return {};
    }
}
/**
 * Saves the manifest to disk
 * @param manifestPath - Path to manifest.json
 * @param manifest - Manifest object to save
 * @param dryRun - If true, doesn't actually write the file
 */
export async function saveManifest(manifestPath, manifest, dryRun = false) {
    if (dryRun) {
        console.log(chalk.yellow(`[DRY RUN] Would save manifest with ${Object.keys(manifest).length} entries`));
        return;
    }
    try {
        const content = JSON.stringify(manifest, null, 2);
        await writeFile(manifestPath, content, 'utf-8');
        console.log(chalk.green(`Manifest saved with ${Object.keys(manifest).length} entries`));
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(chalk.red(`Error saving manifest: ${error.message}`));
            throw error;
        }
    }
}
/**
 * Updates the manifest with comparison results
 * @param manifest - Current manifest
 * @param results - Comparison results
 * @param config - Resolved configuration
 * @returns Updated manifest
 */
export async function updateManifest(manifest, results, config) {
    const updatedManifest = { ...manifest };
    // Update with new and modified files
    for (const diff of results.differences) {
        const manifestKey = getManifestKey(diff.path, diff.type);
        updatedManifest[manifestKey] = diff.sourceHash;
        if (config.verbose) {
            const action = results.newPatterns.includes(manifestKey) ? 'Added' : 'Updated';
            console.log(chalk.blue(`${action} in manifest: ${manifestKey}`));
        }
    }
    // Remove deleted files from manifest
    for (const removedFile of results.removedPatterns) {
        delete updatedManifest[removedFile];
        if (config.verbose) {
            console.log(chalk.yellow(`Removed from manifest: ${removedFile}`));
        }
    }
    return updatedManifest;
}
/**
 * Clears all entries from the manifest
 * @param manifest - Manifest to clear
 * @returns Empty manifest
 */
export function clearManifest(manifest) {
    return {};
}
/**
 * Gets statistics about the manifest
 * @param manifest - Manifest to analyze
 * @returns Statistics object
 */
export function getManifestStats(manifest) {
    const keys = Object.keys(manifest);
    const dataFiles = keys.filter(k => k.startsWith('_data/')).length;
    const images = keys.filter(k => k.startsWith('images/')).length;
    const patterns = keys.filter(k => k.startsWith('_patterns/')).length;
    return {
        total: keys.length,
        patterns,
        dataFiles,
        images
    };
}
//# sourceMappingURL=manifest-manager.js.map