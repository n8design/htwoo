/**
 * File discovery - finds pattern, data, and documentation files
 */
import chalk from 'chalk';
import { existsSync } from 'fs';
import { glob } from 'glob';
/**
 * Discovers all pattern, data, and documentation files
 * @param config - Resolved configuration
 * @returns Discovered files categorized by type
 */
export async function discoverFiles(config) {
    const patterns = [];
    const dataFiles = [];
    const docFiles = [];
    const images = [];
    // Discover pattern files (.hbs and .md in patterns directory)
    if (config.verbose) {
        console.log(chalk.blue('\nDiscovering pattern files (.hbs, .md)...'));
    }
    const hbsFiles = await glob('**/*.hbs', {
        cwd: config.patternsDir,
        nodir: true,
        ignore: ['node_modules/**']
    });
    const mdFiles = await glob('**/*.md', {
        cwd: config.patternsDir,
        nodir: true,
        ignore: ['node_modules/**']
    });
    patterns.push(...hbsFiles, ...mdFiles);
    docFiles.push(...mdFiles);
    if (config.verbose) {
        console.log(chalk.green(`Found ${patterns.length} pattern files (${hbsFiles.length} .hbs, ${mdFiles.length} .md)`));
    }
    // Discover data files (only .json in data directory)
    if (existsSync(config.dataDir)) {
        if (config.verbose) {
            console.log(chalk.blue('\nDiscovering data files (.json)...'));
        }
        const jsonDataFiles = await glob('**/*.json', {
            cwd: config.dataDir,
            nodir: true,
            ignore: ['node_modules/**']
        });
        dataFiles.push(...jsonDataFiles);
        if (config.verbose) {
            console.log(chalk.green(`Found ${dataFiles.length} data files`));
        }
    }
    else if (config.verbose) {
        console.log(chalk.yellow(`Data directory does not exist: ${config.dataDir}`));
    }
    // Discover images (all files in images directory)
    if (config.imagesDir && existsSync(config.imagesDir)) {
        if (config.verbose) {
            console.log(chalk.blue('\nDiscovering image files...'));
        }
        const allImageFiles = await glob('**/*.{png,jpg,jpeg,gif,svg,webp,avif,bmp,ico}', {
            cwd: config.imagesDir,
            nodir: true,
            ignore: ['node_modules/**']
        });
        images.push(...allImageFiles);
        if (config.verbose) {
            console.log(chalk.green(`Found ${images.length} image files`));
        }
    }
    else if (config.verbose && config.imagesDir) {
        console.log(chalk.yellow(`Images directory does not exist: ${config.imagesDir}`));
    }
    return {
        patterns,
        dataFiles,
        docFiles,
        images
    };
}
/**
 * Gets the file type based on extension and location
 * @param filename - File name with extension
 * @param isInPatternsDir - Whether file is in patterns directory
 * @returns File type constant
 */
export function getFileType(filename, isInPatternsDir = true) {
    if (filename.endsWith('.hbs'))
        return 'pattern';
    if (filename.endsWith('.md'))
        return 'doc';
    // JSON in patterns directory should be treated as pattern files, not data files
    if (filename.endsWith('.json') && isInPatternsDir)
        return 'pattern';
    if (filename.endsWith('.json') || filename.endsWith('.yml') || filename.endsWith('.yaml')) {
        return 'data';
    }
    return '';
}
/**
 * Gets the manifest key for a file
 * @param filePath - Relative file path
 * @param fileType - File type
 * @returns Manifest key (with full path prefix: '_patterns/', '_data/', or 'images/')
 */
export function getManifestKey(filePath, fileType) {
    if (fileType === 'data') {
        return `_data/${filePath}`;
    }
    if (fileType === 'image') {
        return `images/${filePath}`;
    }
    if (fileType === 'pattern' || fileType === 'doc') {
        return `_patterns/${filePath}`;
    }
    return filePath;
}
//# sourceMappingURL=file-discovery.js.map