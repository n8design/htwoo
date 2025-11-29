#!/usr/bin/env tsx
/**
 * CLI entry point for pattern export tool
 */
import chalk from 'chalk';
import { comparePatterns } from './compare.js';
/**
 * Parses command line arguments
 */
function parseArgs(argv) {
    const options = {};
    let showHelp = false;
    for (let i = 2; i < argv.length; i++) {
        const arg = argv[i];
        switch (arg) {
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
                console.error(chalk.red(`Unknown option: ${arg}`));
                showHelp = true;
        }
    }
    if (showHelp) {
        printHelp();
        process.exit(showHelp && !options.output ? 1 : 0);
    }
    return options;
}
/**
 * Prints help message
 */
function printHelp() {
    console.log(chalk.bold('\nPattern Export Compare Tool\n'));
    console.log('Usage:');
    console.log('  pattern-export [options]\n');
    console.log('Options:');
    console.log('  -s, --source <path>    Source patterns directory');
    console.log('  -d, --data <path>      Source data directory (optional)');
    console.log('  -i, --images <path>    Source images directory (optional)');
    console.log('  -o, --output <path>    Output directory (required)');
    console.log('  -v, --verbose          Enable verbose output');
    console.log('  --dry-run              Show what would change without modifying files');
    console.log('  -h, --help             Show this help message\n');
    console.log('Examples:');
    console.log('  # Export patterns only');
    console.log('  pattern-export --source ./src/_patterns --output ./dist\n');
    console.log('  # Export patterns with data and images');
    console.log('  pattern-export --source ./src/_patterns --data ./src/_data --images ./src/images --output ./dist\n');
    console.log('  # Preview changes without modifying files');
    console.log('  pattern-export --source ./patterns --output ./dist --dry-run --verbose\n');
}
// Main execution
const options = parseArgs(process.argv);
comparePatterns(options);
//# sourceMappingURL=cli.js.map