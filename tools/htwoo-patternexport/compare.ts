import chalk from 'chalk';
import { createHash } from 'crypto';
import { existsSync, mkdirSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import { glob } from 'glob';
import yaml from 'js-yaml';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// File type definitions
const PATTERN_FILE = 'pattern';  // .hbs files
const DATA_FILE = 'data';        // .json, .yml, .yaml files
const DOC_FILE = 'doc';          // .md files

interface PatternDiff {
    path: string;
    sourceHash: string;
    exportHash: string;
    sourcePath: string;
    exportPath: string;
    type: string;  // Added file type
}

interface PatternLabConfig {
    paths: {
        source: {
            patterns: string;
            data: string;
        };
    };
}

interface YamlFrontmatter {
    hidden?: boolean;
    order?: number;
    [key: string]: unknown;
}

interface CompareOptions {
    verbose?: boolean;
    source?: string;
    data?: string;
    output?: string;
    dryRun?: boolean; // Add dry run option
}

// Helper function to ensure directory exists
function ensureDirectoryExists(path: string): void {
    if (!existsSync(path)) {
        console.log(chalk.yellow(`Creating directory: ${path}`));
        mkdirSync(path, { recursive: true });
    }
}

// Update the getFileType function to differentiate between pattern JSON and data JSON
function getFileType(filename: string, isInPatternsDir: boolean = true): string {
    if (filename.endsWith('.hbs')) return PATTERN_FILE;
    if (filename.endsWith('.md')) return DOC_FILE;
    
    // JSON in patterns directory should be treated as pattern files, not data files
    if (filename.endsWith('.json') && isInPatternsDir) return PATTERN_FILE;
    if (filename.endsWith('.json') || filename.endsWith('.yml') || filename.endsWith('.yaml')) return DATA_FILE;
    
    return '';
}

// Helper function to get manifest key
function getManifestKey(filePath: string, fileType: string): string {
    if (fileType === DATA_FILE) {
        return `data/${filePath}`;
    }
    return filePath;
}

async function processMarkdownContent(content: string): Promise<{ frontmatter: YamlFrontmatter; content: string }> {
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

// Helper function to compare two files - simplified to just use MD5 hashing
async function compareFile(
    sourcePath: string, 
    exportPath: string, 
    manifest: Record<string, string>,
    relativePath: string
): Promise<{ isDifferent: boolean; sourceHash: string; exportHash: string | undefined }> {
    // Get source content and hash
    const sourceContent = await readFile(sourcePath, 'utf-8');
    const sourceHash = createHash('md5').update(sourceContent).digest('hex');
    
    // Get hash from manifest
    const exportHash = manifest[relativePath];
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

// Helper function to copy a file and update manifest
async function copyFile(
    sourcePath: string, 
    exportPath: string,
    sourceHash: string,
    relativePath: string,
    manifest: Record<string, string>,
    newPatterns: string[],
    isDryRun: boolean = false
): Promise<void> {
    // Ensure directory exists
    if (!isDryRun) {
        ensureDirectoryExists(dirname(exportPath));
    }
    
    // Read the file
    const content = await readFile(sourcePath, 'utf-8');
    
    // Write the file only if not in dry run mode
    if (!isDryRun) {
        await writeFile(exportPath, content);
    }
    
    // Add to newPatterns list
    newPatterns.push(relativePath);
    console.log(chalk.green(`${isDryRun ? '[DRY RUN] Would create' : 'Created'} new file: ${relativePath}`));
    
    // Update manifest directly with simple key (but not in dry run mode)
    if (!isDryRun) {
        manifest[relativePath] = sourceHash;
    }
}

async function comparePatterns(options: CompareOptions = {}) {
    try {
        const CURRENT_DIR = process.cwd();
        console.log(chalk.blue(`Current working directory: ${CURRENT_DIR}`));
        
        // Config path setup and validation
        const configPath = join(CURRENT_DIR, 'patternlab-config.json');
        console.log(chalk.blue(`Looking for config at: ${configPath}`));
        const configExists = existsSync(configPath);
        console.log(chalk.blue(`Config exists: ${configExists}`));
        
        // Options validation
        if (!options.output) {
            console.error(chalk.red('Error: Output directory (--output) is required'));
            showHelp();
            process.exit(1);
        }
        
        // Path setup
        const OUTPUT_DIR = options.output.startsWith('/') 
            ? options.output 
            : resolve(CURRENT_DIR, options.output);
        
        // Setup source pattern directory
        let PATTERNS_DIR: string;
        if (options.source) {
            PATTERNS_DIR = resolve(options.source);
        } else if (configExists) {
            try {
                const configContent = await readFile(configPath, 'utf-8');
                const config = JSON.parse(configContent);
                
                if (config.paths?.source?.patterns) {
                    const patternPath = config.paths.source.patterns;
                    PATTERNS_DIR = patternPath.startsWith('./') || patternPath.startsWith('../') 
                        ? resolve(CURRENT_DIR, patternPath)
                        : resolve(patternPath);
                    console.log(chalk.blue(`Using patterns path from config: ${PATTERNS_DIR}`));
                } else {
                    throw new Error("Pattern path not found in config");
                }
            } catch (error) {
                console.error(chalk.red(`Error reading patternlab-config.json: ${error.message}`));
                process.exit(1);
            }
        } else {
            console.error(chalk.red('Error: Could not find patternlab-config.json and no --source provided'));
            showHelp();
            process.exit(1);
        }
        
        // Setup source data directory
        let DATA_DIR: string;
        if (options.data) {
            DATA_DIR = resolve(options.data);
        } else if (configExists) {
            try {
                const configContent = await readFile(configPath, 'utf-8');
                const config = JSON.parse(configContent);
                
                if (config.paths?.source?.data) {
                    const dataPath = config.paths.source.data;
                    DATA_DIR = dataPath.startsWith('./') || dataPath.startsWith('../') 
                        ? resolve(CURRENT_DIR, dataPath)
                        : resolve(dataPath);
                    console.log(chalk.blue(`Using data path from config: ${DATA_DIR}`));
                } else {
                    DATA_DIR = join(CURRENT_DIR, 'source', '_data');
                    console.log(chalk.yellow(`Data path not found in config, using default: ${DATA_DIR}`));
                }
            } catch (error) {
                DATA_DIR = join(CURRENT_DIR, 'source', '_data');
                console.log(chalk.yellow(`Error reading config, using default data path: ${DATA_DIR}`));
            }
        } else {
            DATA_DIR = join(CURRENT_DIR, 'source', '_data');
            console.log(chalk.yellow(`No config found, using default data path: ${DATA_DIR}`));
        }
        
        // Set up output directories
        const LOCAL_PATTERNS_DIR = join(OUTPUT_DIR, '_patterns');
        const LOCAL_DATA_DIR = join(OUTPUT_DIR, '_data');
        
        console.log(chalk.blue('Pattern and Data locations:'));
        console.log(`Source patterns: ${PATTERNS_DIR}`);
        console.log(`Local patterns: ${LOCAL_PATTERNS_DIR}`);
        console.log(`Source data: ${DATA_DIR}`);
        console.log(`Local data: ${LOCAL_DATA_DIR}`);
        
        // Validate source directories
        if (!existsSync(PATTERNS_DIR)) {
            console.error(chalk.red(`Error: Source patterns directory does not exist: ${PATTERNS_DIR}`));
            process.exit(1);
        }
        
        if (!existsSync(DATA_DIR)) {
            console.error(chalk.red(`Error: Source data directory does not exist: ${DATA_DIR}`));
            process.exit(1);
        }
        
        // Create output directories
        ensureDirectoryExists(OUTPUT_DIR);
        ensureDirectoryExists(LOCAL_PATTERNS_DIR);
        ensureDirectoryExists(LOCAL_DATA_DIR);
        
        // Manifest setup
        const manifestPath = join(OUTPUT_DIR, 'manifest.json');
        console.log(`Manifest: ${manifestPath}\n`);
        
        let manifest: Record<string, string> = {};
        try {
            const manifestContent = await readFile(manifestPath, 'utf-8');
            manifest = JSON.parse(manifestContent);
        } catch (error) {
            console.log(chalk.yellow(`Manifest file not found, creating a new one at ${manifestPath}`));
            await writeFile(manifestPath, JSON.stringify({}, null, 2), 'utf-8');
        }
        
        // Get source files
        const patterns = await glob('**/*.{hbs,json,md}', { cwd: PATTERNS_DIR });
        const dataFiles = await glob('**/*.{json,yml,yaml}', { cwd: DATA_DIR });

        // Tracking changes
        const differences: PatternDiff[] = [];
        const newPatterns: string[] = [];
        const removedPatterns: string[] = [];

        // Prepare updatedManifest for consistent keys
        const updatedManifest: Record<string, string> = {};

        // Process pattern files
        for (const pattern of patterns) {
            const sourcePath = join(PATTERNS_DIR, pattern);
            const exportPath = join(LOCAL_PATTERNS_DIR, pattern);
            
            // Compare files - simplified
            const { isDifferent, sourceHash, exportHash } = await compareFile(
                sourcePath, exportPath, manifest, pattern
            );
            
            if (isDifferent) {
                try {
                    // Check if file exists in destination
                    await readFile(exportPath, 'utf-8');
                    
                    // File exists but is different
                    differences.push({
                        path: pattern,
                        sourceHash,
                        exportHash,
                        sourcePath,
                        exportPath,
                        type: '' // Type is no longer needed
                    });
                    
                    // Update manifest directly - but not in dry run mode
                    if (!options.dryRun) {
                        manifest[pattern] = sourceHash;
                    }
                } catch (error) {
                    // File doesn't exist, copy it (respecting dry run flag)
                    await copyFile(
                        sourcePath, exportPath, sourceHash, pattern, manifest, newPatterns, options.dryRun
                    );
                }
            }
        }

        // Process data files - same approach
        for (const dataFile of dataFiles) {
            const sourcePath = join(DATA_DIR, dataFile);
            const exportPath = join(LOCAL_DATA_DIR, dataFile);
            const dataKey = `data/${dataFile}`;
            
            // Compare files - simplified
            const { isDifferent, sourceHash, exportHash } = await compareFile(
                sourcePath, exportPath, manifest, dataKey
            );
            
            if (isDifferent) {
                try {
                    // Check if file exists in destination
                    await readFile(exportPath, 'utf-8');
                    
                    // File exists but is different
                    differences.push({
                        path: dataKey,
                        sourceHash,
                        exportHash,
                        sourcePath,
                        exportPath,
                        type: '' // Type is no longer needed
                    });
                    
                    // Update manifest directly
                    if (!options.dryRun) {
                        manifest[dataKey] = sourceHash;
                    }
                } catch (error) {
                    // File doesn't exist, copy it
                    await copyFile(
                        sourcePath, exportPath, sourceHash, dataKey, manifest, newPatterns, options.dryRun
                    );
                }
            }
        }

        // Create missing documentation files for patterns, but only if they don't exist in the target already
        const hbsFiles = patterns.filter(p => p.endsWith('.hbs'));
        const mdFiles = patterns.filter(p => p.endsWith('.md'));
        const createdMdFiles: string[] = []; // Track separately what we actually create

        for (const hbsFile of hbsFiles) {
            const basePath = hbsFile.substring(0, hbsFile.lastIndexOf('.'));
            const expectedMdFile = basePath + '.md';
            
            // Check if the file already exists in the source
            if (!mdFiles.includes(expectedMdFile)) {
                const mdPath = join(LOCAL_PATTERNS_DIR, expectedMdFile);
                
                // Also check if the file already exists in the manifest
                if (manifest[expectedMdFile]) {
                    // File exists in manifest, don't create it again
                    if (options.verbose) {
                        console.log(chalk.blue(`Documentation file exists in manifest for: ${basePath}`));
                    }
                    continue;
                }
                
                // Check if the file already exists in the output directory
                try {
                    await readFile(mdPath, 'utf-8');
                    // File exists physically but not in manifest, just update the manifest
                    if (options.verbose) {
                        console.log(chalk.blue(`Documentation file already exists for: ${basePath}`));
                    }
                    
                    // Read the existing file to get its hash
                    const existingContent = await readFile(mdPath, 'utf-8');
                    const mdHash = createHash('md5').update(existingContent).digest('hex');
                    manifest[expectedMdFile] = mdHash;
                    updatedManifest[expectedMdFile] = mdHash;
                } catch (error) {
                    // File doesn't exist, create it
                    console.log(chalk.yellow(`${options.dryRun ? '[DRY RUN] Would create' : 'Creating'} missing documentation file for: ${basePath}`));
                    
                    // Ensure directory exists
                    if (!options.dryRun) {
                        ensureDirectoryExists(dirname(mdPath));
                    }
                    
                    const mdContent = `---
hidden: true
---
`;
                    
                    // Create the file
                    if (!options.dryRun) {
                        await writeFile(mdPath, mdContent);
                    }
                    
                    // Only add to newPatterns if we actually created the file
                    newPatterns.push(expectedMdFile);
                    createdMdFiles.push(expectedMdFile);
                    
                    // Update manifest - use the exact same key format as other files
                    const mdHash = createHash('md5').update(mdContent).digest('hex');
                    if (!options.dryRun) {
                        manifest[expectedMdFile] = mdHash;
                        updatedManifest[expectedMdFile] = mdHash;
                    }
                }
            }
        }

        // Clear updatedManifest and rebuild it from scratch
        Object.keys(updatedManifest).forEach(key => delete updatedManifest[key]);

        // First copy all existing values from the manifest
        // This ensures we keep the MD5 hashes for files that don't exist in source
        // but were created by us (like the markdown files)
        Object.keys(manifest).forEach(key => {
            // Skip data files - we'll handle those separately
            if (!key.startsWith('data/')) {
                updatedManifest[key] = manifest[key];
            }
        });

        // Then update pattern files that exist in the source
        for (const pattern of patterns) {
            const sourcePath = join(PATTERNS_DIR, pattern);
            const content = await readFile(sourcePath, 'utf-8');
            const hash = createHash('md5').update(content).digest('hex');
            updatedManifest[pattern] = hash;
        }

        // Add data files to manifest with simple keys
        for (const dataFile of dataFiles) {
            const sourcePath = join(DATA_DIR, dataFile);
            const content = await readFile(sourcePath, 'utf-8');
            const hash = createHash('md5').update(content).digest('hex');
            updatedManifest[`data/${dataFile}`] = hash;
        }

        // Check for removed files
        const allSourceFiles = [
            ...patterns,
            ...dataFiles.map(d => `data/${d}`)
        ];

        // Previously, we cleared updatedManifest and rebuilt it from scratch, 
        // but this can cause files to be incorrectly marked as "removed"
        // when they actually still exist in the output directory.
        // 
        // Let's check which files actually exist in the output directory
        for (const key in manifest) {
            // Skip files that are already in our source files list
            if (allSourceFiles.includes(key)) {
                continue;
            }
            
            // Check if the file still exists in the output directory
            let exists = false;
            try {
                let checkPath;
                if (key.startsWith('data/')) {
                    // It's a data file
                    const relativePath = key.substring(5); // Remove 'data/' prefix
                    checkPath = join(LOCAL_DATA_DIR, relativePath);
                } else {
                    // It's a pattern file
                    checkPath = join(LOCAL_PATTERNS_DIR, key);
                }
                
                // If the file exists, we shouldn't mark it as removed
                await readFile(checkPath, 'utf-8');
                exists = true;
                
                // If it's a markdown file but not in our source patterns,
                // it's likely one we created previously - keep it in the manifest
                if (key.endsWith('.md')) {
                    updatedManifest[key] = manifest[key];
                }
            } catch (error) {
                // File doesn't exist in output directory
                exists = false;
            }
            
            // Only mark as removed if it doesn't exist in the filesystem
            if (!exists) {
                removedPatterns.push(key);
            }
        }

        // Replace old manifest with consistent version
        manifest = updatedManifest;

        // Output results
        if (differences.length === 0 && newPatterns.length === 0 && removedPatterns.length === 0) {
            console.log(chalk.green('✓ All patterns are in sync'));
            if (!options.dryRun) {
                await writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
            }
            return;
        }

        // Display changes
        console.log(chalk.yellow('\nPattern differences found:\n'));

        if (differences.length > 0) {
            console.log(chalk.white.bold('\nModified patterns:'));
            for (const diff of differences) {
                console.log(chalk.yellow(`\n${diff.path}`));
                
                const sourceContent = await readFile(diff.sourcePath, 'utf-8');
                const exportContent = await readFile(diff.exportPath, 'utf-8');
                
                console.log(chalk.red('\nSource content:'));
                console.log(sourceContent.trim());
                console.log(chalk.green('\nExport content:'));
                console.log(exportContent.trim());
                console.log('\nHashes:');
                console.log(`  Source: ${diff.sourceHash}`);
                console.log(`  Export: ${diff.exportHash}`);
                console.log('----------------------------------------');
            }
        }

        if (newPatterns.length > 0) {
            console.log(chalk.white.bold('\nNew patterns:'));
            newPatterns.forEach(pattern => {
                console.log(chalk.green(`  + ${pattern}`));
            });
        }

        if (removedPatterns.length > 0) {
            console.log(chalk.white.bold('\nRemoved patterns:'));
            removedPatterns.forEach(pattern => {
                console.log(chalk.red(`  - ${pattern}`));
            });
        }

        // Generate report and update manifest
        if (differences.length > 0 || newPatterns.length > 0 || removedPatterns.length > 0) {
            await generateReport(differences, newPatterns, removedPatterns);
        }

        // Skip manifest update in dry run mode
        if (options.dryRun) {
            console.log(chalk.blue('\n[DRY RUN] No files were modified'));
            console.log(chalk.blue('[DRY RUN] Statistics:'));
            console.log(chalk.blue(`  Files that would be modified: ${differences.length}`));
            console.log(chalk.blue(`  Files that would be created: ${newPatterns.length}`));
            console.log(chalk.blue(`  Files that would be removed: ${removedPatterns.length}`));
            return;
        } else {
            await writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
        }

        process.exit(differences.length > 0 ? 1 : 0);
    } catch (error) {
        if (error instanceof Error) {
            console.error(chalk.red('\nError:'), error.message);
            console.error(chalk.yellow('\nDiagnostic information:'));
            console.error(`Current working directory: ${process.cwd()}`);
            console.error(`Project root: ${resolve(process.cwd(), '..')}`);
            console.error('\nExpected structure:');
            console.error(`
multiproject/
├── test-core/                 <- Should contain Pattern Lab files
│   ├── patternlab-config.json <- Config file we're looking for
│   └── source/
│       └── _patterns/         <- Pattern source files
└── pattern-exports/           <- You are here
    ├── patterns/             <- Exported patterns
    ├── compare.ts            <- This script
    └── manifest.json         <- Pattern manifest
`);
        } else {
            console.error(chalk.red('\nUnexpected error:'), error);
        }
        process.exit(1);
    }
}

async function generateReport(differences: PatternDiff[], newPatterns: string[], removedPatterns: string[]) {
    const timestamp = new Date().toISOString();
    const report = await createMarkdownReport(differences, newPatterns, removedPatterns, timestamp);
    
    await writeFile(join(process.cwd(), '../pattern-report.md'), report);
    console.log(chalk.green('\nReport generated: ../pattern-report.md'));
}

async function createMarkdownReport(differences: PatternDiff[], newPatterns: string[], removedPatterns: string[], timestamp: string) {
    let report = `# Pattern Comparison Report\nGenerated: ${timestamp}\n\n`;

    if (differences.length > 0) {
        report += '## Modified Patterns\n\n';
        for (const diff of differences) {
            const sourceContent = await readFile(diff.sourcePath, 'utf-8');
            const exportContent = await readFile(diff.exportPath, 'utf-8');
            
            report += `### ${diff.path}\n`;
            report += '```diff\n';
            report += `- ${sourceContent.trim()}\n`;
            report += `+ ${exportContent.trim()}\n`;
            report += '```\n\n';
        }
    }

    // ...rest of report generation...
    return report;
}

// Parse command line arguments
function parseArgs() {
    const args = process.argv.slice(2);
    const options: CompareOptions = {};
    
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        
        switch (arg) {
            case '--verbose':
            case '-v':
                options.verbose = true;
                break;
                
            case '--source':
            case '-s':
                options.source = args[++i];
                break;
                
            case '--data':
            case '-d':
                options.data = args[++i];
                break;
                
            case '--output':
            case '-o':
                options.output = args[++i];
                break;
                
            case '--dry-run':
                options.dryRun = true;
                break;

            case '--help':
            case '-h':
                showHelp();
                process.exit(0);
                
            default:
                if (arg.startsWith('-')) {
                    console.error(chalk.red(`Unknown option: ${arg}`));
                    showHelp();
                    process.exit(1);
                }
        }
    }
    
    return options;
}

function showHelp() {
    console.log(`
Pattern Export Compare Tool

Usage: 
  pattern-export [options]
  
Options:
  -s, --source <path>    Source patterns directory
  -d, --data <path>      Source data directory
  -o, --output <path>    Output patterns directory
  -v, --verbose          Enable verbose output
  --dry-run              Show what would change without modifying files
  -h, --help             Show this help message
  
Examples:
  pattern-export --source ../my-project/patterns --output ./exported-patterns
  pattern-export --dry-run --output ../test-pl
  pattern-export --verbose
`);
}

// Run the compare function with parsed arguments
const options = parseArgs();
comparePatterns(options);