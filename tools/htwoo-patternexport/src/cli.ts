#!/usr/bin/env node
/**
 * CLI entry point for pattern export tool
 */

import chalk from 'chalk';
import { comparePatterns } from './compare.js';
import { toggleHidden, displayToggleSummary } from './toggle-hidden.js';
import { resolve } from 'path';
import type { CompareOptions } from './types.js';

/**
 * Parses command line arguments
 */
function parseArgs(argv: string[]): { mode: 'export' | 'toggle'; options: any } {
    const options: any = {};
    let showHelp = false;
    let mode: 'export' | 'toggle' = 'export';

    for (let i = 2; i < argv.length; i++) {
        const arg = argv[i];

        switch (arg) {
            case 'toggle-hidden':
            case '--toggle-hidden':
                mode = 'toggle';
                options.action = 'toggle';
                break;
            case 'show-all':
            case '--show-all':
                mode = 'toggle';
                options.action = 'show';
                break;
            case 'hide-all':
            case '--hide-all':
                mode = 'toggle';
                options.action = 'hide';
                break;
            case '-s':
            case '--source':
                options.source = argv[++i];
                break;
            case '-d':
            case '--data':
                options.data = argv[++i];
                break;
            case '-i':
            case '--images':
                options.images = argv[++i];
                break;
            case '-o':
            case '--output':
                options.output = argv[++i];
                break;
            case '-v':
            case '--verbose':
                options.verbose = true;
                break;
            case '--dry-run':
                options.dryRun = true;
                break;
            case '-h':
            case '--help':
                showHelp = true;
                break;
            default:
                if (!arg.startsWith('-')) {
                    // Might be a path argument
                    if (!options.source && mode === 'toggle') {
                        options.source = arg;
                    }
                } else {
                    console.error(chalk.red(`Unknown option: ${arg}`));
                    showHelp = true;
                }
        }
    }

    if (showHelp) {
        printHelp();
        process.exit(showHelp && !options.output && mode === 'export' ? 1 : 0);
    }

    return { mode, options };
}

/**
 * Prints help message
 */
function printHelp(): void {
    console.log(chalk.bold('\nPattern Export Tool\n'));
    console.log('Usage:');
    console.log('  pattern-export [command] [options]\n');

    console.log(chalk.bold('Commands:\n'));
    console.log('  [default]              Export and compare patterns (default mode)');
    console.log('  toggle-hidden          Toggle hidden property in all .md files');
    console.log('  show-all               Set hidden=false in all .md files');
    console.log('  hide-all               Set hidden=true in all .md files\n');

    console.log(chalk.bold('Export Options:\n'));
    console.log('  -s, --source <path>    Source patterns directory');
    console.log('  -d, --data <path>      Source data directory (optional)');
    console.log('  -i, --images <path>    Source images directory (optional)');
    console.log('  -o, --output <path>    Output directory (required)');
    console.log('  -v, --verbose          Enable verbose output');
    console.log('  --dry-run              Show what would change without modifying files');
    console.log('  -h, --help             Show this help message\n');

    console.log(chalk.bold('Toggle Options:\n'));
    console.log('  -s, --source <path>    Patterns directory (required)');
    console.log('  -v, --verbose          Enable verbose output');
    console.log('  --dry-run              Show what would change without modifying files\n');

    console.log(chalk.bold('Examples:\n'));
    console.log('  # Export patterns');
    console.log('  pattern-export --source ./src/_patterns --output ./dist\n');
    console.log('  # Export with data and images');
    console.log('  pattern-export --source ./src/_patterns --data ./src/_data --images ./src/images --output ./dist\n');
    console.log('  # Toggle hidden property in all .md files');
    console.log('  pattern-export toggle-hidden --source ./src/_patterns\n');
    console.log('  # Hide all patterns');
    console.log('  pattern-export hide-all --source ./src/_patterns --dry-run\n');
    console.log('  # Show all patterns');
    console.log('  pattern-export show-all --source ./src/_patterns\n');
}

// Main execution
async function main() {
    const { mode, options } = parseArgs(process.argv);

    if (mode === 'toggle') {
        // Toggle hidden mode
        if (!options.source) {
            console.error(chalk.red('Error: --source <path> is required for toggle commands'));
            process.exit(1);
        }

        const patternsDir = resolve(process.cwd(), options.source);
        const result = await toggleHidden({
            patternsDir,
            action: options.action || 'toggle',
            verbose: options.verbose,
            dryRun: options.dryRun
        });

        displayToggleSummary(result, {
            patternsDir,
            action: options.action || 'toggle',
            verbose: options.verbose,
            dryRun: options.dryRun
        });
    } else {
        // Export/compare mode
        await comparePatterns(options as CompareOptions);
    }
}

main().catch(error => {
    console.error(chalk.red('Fatal error:'), error);
    process.exit(1);
});
