/**
 * Compares a single binary file (e.g., image) using MD5 hashing
 */
async function compareFileBinary(
    sourcePath: string,
    exportPath: string,
    manifest: Record<string, string>,
    manifestKey: string
): Promise<{ isDifferent: boolean; sourceHash: string; exportHash?: string }> {
    let sourceHash = '';
    let exportHash = '';
    let isDifferent = false;

    try {
        const sourceBuffer = await readFile(sourcePath);
        sourceHash = createHash('md5').update(sourceBuffer).digest('hex');
    } catch (e) {
        // Source file missing
        sourceHash = '';
    }

    if (existsSync(exportPath)) {
        try {
            const exportBuffer = await readFile(exportPath);
            exportHash = createHash('md5').update(exportBuffer).digest('hex');
        } catch (e) {
            exportHash = '';
        }
    }

    isDifferent = sourceHash !== exportHash;

    // Always update manifest for this file
    manifest[manifestKey] = sourceHash;

    return { isDifferent, sourceHash, exportHash };
}
/**
 * File comparator - MD5 hash-based file comparison
 */

import chalk from 'chalk';
import { createHash } from 'crypto';
import { existsSync, mkdirSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import yaml from 'js-yaml';
import type { ComparisonResult, DiscoveredFiles, PatternDiff, ResolvedConfig, YamlFrontmatter } from './types.js';
import { getManifestKey } from './file-discovery.js';

/**
 * Compares source files with exported files and generates differences
 * @param files - Discovered files
 * @param config - Resolved configuration
 * @param manifest - Current manifest (file hashes)
 * @returns Comparison results with differences
 */
export async function compareFiles(
    files: DiscoveredFiles,
    config: ResolvedConfig,
    manifest: Record<string, string>
): Promise<ComparisonResult> {
    const differences: PatternDiff[] = [];
    const newPatterns: string[] = [];
    const modifiedPatterns: string[] = [];


    // Compare pattern files (.hbs, .md)
    for (const patternFile of files.patterns) {
        const sourcePath = join(config.patternsDir, patternFile);
        const exportPath = join(config.localPatternsDir, patternFile);
        const patternKey = getManifestKey(patternFile, 'pattern');
        const result = await compareFile(sourcePath, exportPath, manifest, patternKey);
        if (result.isDifferent) {
            differences.push({
                path: patternFile,
                sourceHash: result.sourceHash,
                exportHash: result.exportHash || '',
                sourcePath,
                exportPath,
                type: 'pattern'
            });
            if (!result.exportHash || !existsSync(exportPath)) {
                newPatterns.push(patternKey);
            } else {
                modifiedPatterns.push(patternKey);
            }
        }
    }

    // Compare data files (.json)
    for (const dataFile of files.dataFiles) {
        const sourcePath = join(config.dataDir, dataFile);
        const exportPath = join(config.localDataDir, dataFile);
        const dataKey = getManifestKey(dataFile, 'data');
        const result = await compareFile(sourcePath, exportPath, manifest, dataKey);
        if (result.isDifferent) {
            differences.push({
                path: dataFile,
                sourceHash: result.sourceHash,
                exportHash: result.exportHash || '',
                sourcePath,
                exportPath,
                type: 'data'
            });
            if (!result.exportHash || !existsSync(exportPath)) {
                newPatterns.push(dataKey);
            } else {
                modifiedPatterns.push(dataKey);
            }
        }
    }

    // Compare image files (all files in images directory)
    if (files.images && files.images.length > 0) {
        for (const imageFile of files.images) {
            const sourcePath = join(config.imagesDir, imageFile);
            const exportPath = join(config.localImagesDir, imageFile);
            const imageKey = getManifestKey(imageFile, 'image');

            const result = await compareFileBinary(sourcePath, exportPath, manifest, imageKey);
            if (result.isDifferent) {
                differences.push({
                    path: imageFile,
                    sourceHash: result.sourceHash,
                    exportHash: result.exportHash || '',
                    sourcePath,
                    exportPath,
                    type: 'image'
                });
                if (!result.exportHash || !existsSync(exportPath)) {
                    newPatterns.push(imageKey);
                } else {
                    modifiedPatterns.push(imageKey);
                }
            }
        }
    }

    // Detect removed patterns
    const removedPatterns = detectRemovedFiles(
        files,
        manifest,
        config
    );

    return {
        differences,
        newPatterns,
        modifiedPatterns,
        removedPatterns
    };
}

/**
 * Compares a single file using MD5 hashing
 */
async function compareFile(
    sourcePath: string,
    exportPath: string,
    manifest: Record<string, string>,
    manifestKey: string
): Promise<{ isDifferent: boolean; sourceHash: string; exportHash: string | undefined }> {
    // Get source content and hash
    const sourceContent = await readFile(sourcePath, 'utf-8');
    const sourceHash = createHash('md5').update(sourceContent).digest('hex');

    // Get hash from manifest
    const exportHash = manifest[manifestKey];
    let isDifferent = true;

    try {
        // Check if file exists in destination
        const exportContent = await readFile(exportPath, 'utf-8');
        const actualExportHash = createHash('md5').update(exportContent).digest('hex');

        // Simple comparison: are the hashes different?
        isDifferent = sourceHash !== actualExportHash;
    } catch (error) {
        // File doesn't exist in output
        isDifferent = true;
    }

    return { isDifferent, sourceHash, exportHash };
}

/**
 * Detects files that exist in manifest but not in source
 */
function detectRemovedFiles(
    files: DiscoveredFiles,
    manifest: Record<string, string>,
    config: ResolvedConfig
): string[] {
    const removed: string[] = [];
    const allSourceFiles = new Set([
        ...files.patterns.map(f => getManifestKey(f, 'pattern')),
        ...files.dataFiles.map(f => getManifestKey(f, 'data')),
        ...files.images.map(f => getManifestKey(f, 'image'))
    ]);

    for (const manifestKey of Object.keys(manifest)) {
        // Check if this file still exists in source
        if (!allSourceFiles.has(manifestKey)) {
            removed.push(manifestKey);
            if (config.verbose) {
                console.log(chalk.yellow(`File removed from source: ${manifestKey}`));
            }
        }
    }

    return removed;
}

/**
 * Copies files that have changed or are new
 * @param differences - File differences to copy
 * @param config - Resolved configuration
 * @param manifest - Manifest to update
 */
export async function copyChangedFiles(
    differences: PatternDiff[],
    config: ResolvedConfig,
    manifest: Record<string, string>
): Promise<void> {
    for (const diff of differences) {
        await copyFile(
            diff.sourcePath,
            diff.exportPath,
            diff.sourceHash,
            diff.path,
            diff.type,
            manifest,
            config.dryRun
        );
    }
}

/**
 * Copies a single file and updates manifest
 */
async function copyFile(
    sourcePath: string,
    exportPath: string,
    sourceHash: string,
    relativePath: string,
    fileType: string,
    manifest: Record<string, string>,
    isDryRun: boolean
): Promise<void> {
    // Ensure directory exists
    if (!isDryRun) {
        ensureDirectoryExists(dirname(exportPath));
    }

    let content: string | Buffer;
    let encoding: BufferEncoding | undefined = 'utf-8';
    // For data files, read and write as binary (Buffer)
    if (fileType === 'data' || sourcePath.endsWith('.json')) {
        content = await readFile(sourcePath);
        encoding = undefined;
    } else {
        content = await readFile(sourcePath, 'utf-8');
    }

    // Write the file only if not in dry run mode
    if (!isDryRun) {
        if (encoding) {
            await writeFile(exportPath, content as string, encoding);
        } else {
            await writeFile(exportPath, content as Buffer);
        }
    }

    const manifestKey = getManifestKey(relativePath, fileType);
    const action = existsSync(exportPath) ? 'Updated' : 'Created';

    console.log(chalk.green(`${isDryRun ? '[DRY RUN] Would ' + action.toLowerCase() : action}: ${relativePath}`));

    // Update manifest directly (but not in dry run mode)
    if (!isDryRun) {
        manifest[manifestKey] = sourceHash;
    }
}

/**
 * Ensures a directory exists, creating it if necessary
 */
function ensureDirectoryExists(path: string): void {
    if (!existsSync(path)) {
        mkdirSync(path, { recursive: true });
    }
}

/**
 * Processes markdown content and extracts YAML frontmatter
 */
export async function processMarkdownContent(content: string): Promise<{ frontmatter: YamlFrontmatter; content: string }> {
    const yamlRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = content.match(yamlRegex);

    if (match) {
        const frontmatter = yaml.load(match[1]) as YamlFrontmatter;
        return {
            frontmatter,
            content: match[2]
        };
    }

    return {
        frontmatter: {},
        content
    };
}
