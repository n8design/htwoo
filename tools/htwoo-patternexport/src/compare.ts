/**
 * Main comparison orchestration - coordinates all modules
 */

import chalk from 'chalk';
import { resolveConfig } from './config-resolver.js';
import { discoverFiles } from './file-discovery.js';
import { compareFiles, copyChangedFiles } from './file-comparator.js';
import { loadManifest, saveManifest, updateManifest } from './manifest-manager.js';
import { generateReport, displaySummary } from './report-generator.js';
import type { CompareOptions } from './types.js';

/**
 * Main comparison function - orchestrates the entire export/compare process
 * @param options - CLI options
 */
export async function comparePatterns(options: CompareOptions = {}): Promise<void> {
    try {
        console.log(chalk.bold.blue('\n🔍 Pattern Export Tool\n'));

        // 1. Resolve configuration
        const config = await resolveConfig(options);

        // 2. Load existing manifest
        const manifest = await loadManifest(config.manifestPath, config.verbose);

        // 3. Discover files
        if (config.verbose) {
            console.log(chalk.bold('\n📁 Discovering files...'));
        }
        const files = await discoverFiles(config);

        // 4. Compare files
        if (config.verbose) {
            console.log(chalk.bold('\n🔄 Comparing files...'));
        }
        const results = await compareFiles(files, config, manifest);

        // 5. Display what will change
        if (results.differences.length === 0) {
            console.log(chalk.green('✓ No changes detected. All patterns are up to date.'));
        }

        console.log(chalk.yellow(`\n📝 Found ${results.differences.length} file(s) to update`));

        // 6. Copy changed files (unless dry run)
        if (config.verbose) {
            console.log(chalk.bold('\n📦 Copying files...'));
        }
        await copyChangedFiles(results.differences, config, manifest);

        // 7. Copy all data files to output _data directory (only once, after main export)
        if (config.dataDir && config.localDataDir) {
            const { existsSync, mkdirSync, promises: fsp } = await import('fs');
            const { join } = await import('path');

            if (config.verbose) {
                console.log(chalk.bold('\n📋 Copying data files...'));
            }

            try {
                if (existsSync(config.dataDir)) {
                    // Ensure output _data directory exists
                    if (!existsSync(config.localDataDir)) {
                        mkdirSync(config.localDataDir, { recursive: true });
                    }

                    const dataFiles = await fsp.readdir(config.dataDir);
                    let copiedCount = 0;

                    for (const file of dataFiles) {
                        if (file.endsWith('.json')) {
                            const src = join(config.dataDir, file);
                            const dest = join(config.localDataDir, file);

                            if (!config.dryRun) {
                                await fsp.copyFile(src, dest);
                                copiedCount++;
                            }

                            if (config.verbose) {
                                console.log(chalk.green(`${config.dryRun ? '[DRY RUN] Would copy' : 'Copied'} data file: ${file}`));
                            }
                        }
                    }

                    if (copiedCount > 0) {
                        console.log(chalk.green(`✓ Copied ${copiedCount} data file(s) to ${config.localDataDir}`));
                    } else if (config.verbose) {
                        console.log(chalk.yellow('No .json files found in data directory'));
                    }
                } else if (config.verbose) {
                    console.log(chalk.yellow(`Data directory does not exist: ${config.dataDir}`));
                }
            } catch (err) {
                console.error(chalk.red(`Error copying data files: ${err}`));
            }
        }

        // Copy all image files to output images directory (only once, after main export)
        if (config.imagesDir && config.localImagesDir) {
            const { existsSync, mkdirSync, promises: fsp } = await import('fs');
            const { join, dirname } = await import('path');
            const { glob } = await import('glob');

            if (config.verbose) {
                console.log(chalk.bold('\n🖼️  Copying image files...'));
            }

            try {
                if (existsSync(config.imagesDir)) {
                    // Discover all image files
                    const imageFiles = await glob('**/*.{png,jpg,jpeg,gif,svg,webp,avif,bmp,ico}', {
                        cwd: config.imagesDir,
                        nodir: true,
                        ignore: ['node_modules/**']
                    });

                    let copiedCount = 0;

                    for (const file of imageFiles) {
                        const src = join(config.imagesDir, file);
                        const dest = join(config.localImagesDir, file);

                        if (!config.dryRun) {
                            // Ensure subdirectories exist
                            const destDir = dirname(dest);
                            if (!existsSync(destDir)) {
                                mkdirSync(destDir, { recursive: true });
                            }

                            await fsp.copyFile(src, dest);
                            copiedCount++;
                        }

                        if (config.verbose) {
                            console.log(chalk.green(`${config.dryRun ? '[DRY RUN] Would copy' : 'Copied'} image file: ${file}`));
                        }
                    }

                    if (copiedCount > 0) {
                        console.log(chalk.green(`✓ Copied ${copiedCount} image file(s) to ${config.localImagesDir}`));
                    } else if (config.verbose) {
                        console.log(chalk.yellow('No image files found in images directory'));
                    }
                } else if (config.verbose) {
                    console.log(chalk.yellow(`Images directory does not exist: ${config.imagesDir}`));
                }
            } catch (err) {
                console.error(chalk.red(`Error copying image files: ${err}`));
            }
        }

        // 8. Update manifest (unless dry run)
        if (!config.dryRun) {
            if (config.verbose) {
                console.log(chalk.bold('\n📝 Updating manifest...'));
            }
            const updatedManifest = await updateManifest(manifest, results, config);
            await saveManifest(config.manifestPath, updatedManifest, config.dryRun);
        }

        // 9. Generate report
        if (config.verbose) {
            console.log(chalk.bold('\n📄 Generating report...'));
        }
        await generateReport(results, config);

        // 10. Display summary
        displaySummary(results, config);

    } catch (error) {
        if (error instanceof Error) {
            console.error(chalk.red('\n❌ Error:'), error.message);

            if (options.verbose && error.stack) {
                console.error(chalk.gray('\nStack trace:'));
                console.error(chalk.gray(error.stack));
            }
        }

        process.exit(1);
    }
}
