/**
 * Configuration resolver - handles Pattern Lab config loading and path resolution
 */
import chalk from 'chalk';
import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
import { join, dirname, resolve } from 'path';
/**
 * Resolves configuration from CLI options and patternlab-config.json
 * @param options - CLI options
 * @returns Resolved configuration with all paths
 * @throws Error if required paths cannot be resolved
 */
export async function resolveConfig(options) {
    const currentDir = process.cwd();
    if (options.verbose) {
        console.log(chalk.blue(`Current working directory: ${currentDir}`));
    }
    // Validate required options
    if (!options.output) {
        throw new Error('Output directory (--output) is required');
    }
    // Resolve output directory
    const outputDir = options.output.startsWith('/')
        ? options.output
        : resolve(currentDir, options.output);
    // Try to load Pattern Lab config
    const configPath = join(currentDir, 'patternlab-config.json');
    const configExists = existsSync(configPath);
    if (options.verbose) {
        console.log(chalk.blue(`Looking for config at: ${configPath}`));
        console.log(chalk.blue(`Config exists: ${configExists}`));
    }
    let config = null;
    if (configExists) {
        try {
            const configContent = await readFile(configPath, 'utf-8');
            config = JSON.parse(configContent);
        }
        catch (error) {
            if (error instanceof Error) {
                console.warn(chalk.yellow(`Warning: Could not parse config file: ${error.message}`));
            }
        }
    }
    // Resolve patterns directory
    const patternsDir = resolvePatternDir(options, config, currentDir);
    // Resolve data directory
    const dataDir = resolveDataDir(options, config, currentDir);
    // Resolve images directory (use CLI option if provided, otherwise find sibling)
    const imagesDir = resolveImagesDir(options, patternsDir, currentDir);
    // Set up local output directories
    const localPatternsDir = join(outputDir, '_patterns');
    const localDataDir = join(outputDir, '_data');
    const localImagesDir = join(outputDir, 'images');
    const manifestPath = join(outputDir, 'manifest.json');
    const reportPath = join(outputDir, 'pattern-report.md');
    if (options.verbose) {
        console.log(chalk.blue('Resolved configuration:'));
        console.log(`  Source patterns: ${patternsDir}`);
        console.log(`  Source data: ${dataDir}`);
        console.log(`  Source images: ${imagesDir}`);
        console.log(`  Output directory: ${outputDir}`);
        console.log(`  Local patterns: ${localPatternsDir}`);
        console.log(`  Local data: ${localDataDir}`);
        console.log(`  Local images: ${localImagesDir}`);
    }
    // Validate source directories exist
    if (!existsSync(patternsDir)) {
        throw new Error(`Pattern directory not found: ${patternsDir}`);
    }
    return {
        patternsDir,
        dataDir,
        imagesDir,
        outputDir,
        localPatternsDir,
        localDataDir,
        localImagesDir,
        manifestPath,
        reportPath,
        verbose: options.verbose || false,
        dryRun: options.dryRun || false
    };
}
/**
 * Resolves the patterns directory from options or config
 */
function resolvePatternDir(options, config, currentDir) {
    // CLI option takes precedence
    if (options.source) {
        return resolve(options.source);
    }
    // Try config file
    if (config?.paths?.source?.patterns) {
        const patternPath = config.paths.source.patterns;
        const resolvedPath = patternPath.startsWith('./') || patternPath.startsWith('../')
            ? resolve(currentDir, patternPath)
            : resolve(patternPath);
        if (options.verbose) {
            console.log(chalk.blue(`Using patterns path from config: ${resolvedPath}`));
        }
        return resolvedPath;
    }
    // No source provided
    throw new Error('Could not resolve patterns directory. Provide --source or ensure patternlab-config.json exists');
}
/**
 * Resolves the data directory from options or config
 */
function resolveDataDir(options, config, currentDir) {
    // CLI option takes precedence
    if (options.data) {
        return resolve(options.data);
    }
    // Try config file
    if (config?.paths?.source?.data) {
        const dataPath = config.paths.source.data;
        const resolvedPath = dataPath.startsWith('./') || dataPath.startsWith('../')
            ? resolve(currentDir, dataPath)
            : resolve(dataPath);
        if (options.verbose) {
            console.log(chalk.blue(`Using data path from config: ${resolvedPath}`));
        }
        return resolvedPath;
    }
    // Use default: look for _data as a sibling to the patterns directory
    let defaultDataDir = '';
    let patternsBase = '';
    if (options.source) {
        patternsBase = dirname(resolve(options.source));
    }
    else if (config?.paths?.source?.patterns) {
        patternsBase = dirname(resolve(currentDir, config.paths.source.patterns));
    }
    else {
        patternsBase = join(currentDir, 'src');
    }
    const siblingDataDir = join(patternsBase, '_data');
    if (existsSync(siblingDataDir)) {
        defaultDataDir = siblingDataDir;
    }
    else {
        // fallback to old logic
        const srcDataDir = join(currentDir, 'src', '_data');
        const sourceDataDir = join(currentDir, 'source', '_data');
        if (existsSync(srcDataDir)) {
            defaultDataDir = srcDataDir;
        }
        else if (existsSync(sourceDataDir)) {
            defaultDataDir = sourceDataDir;
        }
        else {
            if (options.verbose) {
                console.log(chalk.red('No _data directory found as sibling to patterns, or in src/ or source/. Data export will be skipped.'));
            }
            defaultDataDir = siblingDataDir; // fallback for consistency
        }
    }
    if (options.verbose) {
        console.log(chalk.yellow(`Using default data path: ${defaultDataDir}`));
    }
    return defaultDataDir;
}
/**
 * Resolves the images directory (custom path, sibling to patterns, or default)
 */
function resolveImagesDir(options, patternsDir, currentDir) {
    // 1. Use CLI option if provided
    if (options.images) {
        const customPath = resolve(currentDir, options.images);
        if (options.verbose) {
            console.log(chalk.blue(`Using custom images path: ${customPath}`));
        }
        return customPath;
    }
    // 2. Look for images as a sibling to the patterns directory
    const patternsBase = dirname(patternsDir);
    const siblingImagesDir = join(patternsBase, 'images');
    if (existsSync(siblingImagesDir)) {
        return siblingImagesDir;
    }
    // 3. Fallback to src/images
    const srcImagesDir = join(currentDir, 'src', 'images');
    if (existsSync(srcImagesDir)) {
        return srcImagesDir;
    }
    // Return the sibling path even if it doesn't exist (will be handled gracefully later)
    return siblingImagesDir;
}
//# sourceMappingURL=config-resolver.js.map