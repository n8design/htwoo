/**
 * Toggle hidden property in markdown file YAML frontmatter
 */

import chalk from 'chalk';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { glob } from 'glob';
import yaml from 'js-yaml';

export interface ToggleHiddenOptions {
    patternsDir: string;
    action: 'toggle' | 'show' | 'hide';
    verbose?: boolean;
    dryRun?: boolean;
}

interface ToggleResult {
    modified: string[];
    unchanged: string[];
    errors: string[];
}

/**
 * Toggle hidden property in all markdown files
 */
export async function toggleHidden(options: ToggleHiddenOptions): Promise<ToggleResult> {
    const result: ToggleResult = {
        modified: [],
        unchanged: [],
        errors: []
    };

    if (options.verbose) {
        console.log(chalk.bold.blue('\n🔄 Toggling hidden property in markdown files\n'));
        console.log(chalk.gray(`Patterns directory: ${options.patternsDir}`));
        console.log(chalk.gray(`Action: ${options.action}`));
        console.log(chalk.gray(`Dry run: ${options.dryRun ? 'Yes' : 'No'}\n`));
    }

    // Find all .md files
    const mdFiles = await glob('**/*.md', {
        cwd: options.patternsDir,
        nodir: true,
        ignore: ['node_modules/**']
    });

    if (options.verbose) {
        console.log(chalk.blue(`Found ${mdFiles.length} markdown files\n`));
    }

    // Process each file
    for (const file of mdFiles) {
        try {
            const filePath = join(options.patternsDir, file);
            const content = await readFile(filePath, 'utf-8');

            const updated = await processMarkdownFile(content, options.action);

            if (updated.changed) {
                result.modified.push(file);

                if (!options.dryRun) {
                    await writeFile(filePath, updated.content, 'utf-8');
                }

                if (options.verbose) {
                    const oldValue = updated.oldValue === undefined ? 'not set' : updated.oldValue;
                    const newValue = updated.newValue;
                    console.log(chalk.green(`${options.dryRun ? '[DRY RUN] Would update' : 'Updated'}: ${file}`));
                    console.log(chalk.gray(`  hidden: ${oldValue} → ${newValue}`));
                }
            } else {
                result.unchanged.push(file);
            }
        } catch (error) {
            result.errors.push(file);
            if (options.verbose) {
                console.error(chalk.red(`Error processing ${file}:`), error);
            }
        }
    }

    return result;
}

/**
 * Process a single markdown file
 */
async function processMarkdownFile(
    content: string,
    action: 'toggle' | 'show' | 'hide'
): Promise<{ content: string; changed: boolean; oldValue?: boolean; newValue?: boolean }> {
    // Match all frontmatter blocks (handles duplicate blocks from previous bugs)
    const yamlBlockRegex = /^---\n([\s\S]*?)\n---\n?/g;
    const matches = [...content.matchAll(yamlBlockRegex)];

    let frontmatter: Record<string, any> = {};
    let bodyContent = content;

    // Parse and merge all frontmatter blocks
    if (matches.length > 0) {
        // Merge all frontmatter blocks (later ones override earlier ones)
        for (const match of matches) {
            try {
                const parsed = yaml.load(match[1]) as Record<string, any>;
                if (parsed) {
                    frontmatter = { ...frontmatter, ...parsed };
                }
            } catch (e) {
                // Skip invalid YAML blocks
            }
        }

        // Remove all frontmatter blocks to get just the body
        bodyContent = content.replace(yamlBlockRegex, '').trimStart();
    }

    const oldValue = frontmatter.hidden;
    let newValue: boolean;

    // Determine new value based on action
    switch (action) {
        case 'toggle':
            // Toggle: undefined/false -> true, true -> false
            newValue = !frontmatter.hidden;
            break;
        case 'show':
            // Show: set to false (or remove if you prefer)
            newValue = false;
            break;
        case 'hide':
            // Hide: set to true
            newValue = true;
            break;
    }

    // Check if value actually changed
    const changed = oldValue !== newValue;

    if (!changed) {
        return { content, changed: false, oldValue, newValue };
    }

    // Update frontmatter
    frontmatter.hidden = newValue;

    // Generate new content
    const yamlContent = yaml.dump(frontmatter, {
        indent: 2,
        lineWidth: -1,
        noRefs: true,
        sortKeys: false
    }).trim();

    const newContent = `---\n${yamlContent}\n---\n${bodyContent}`;

    return {
        content: newContent,
        changed: true,
        oldValue,
        newValue
    };
}

/**
 * Display summary of toggle operation
 */
export function displayToggleSummary(result: ToggleResult, options: ToggleHiddenOptions): void {
    console.log(chalk.bold('\n📊 Summary:'));
    console.log(chalk.blue(`  Total files processed: ${result.modified.length + result.unchanged.length + result.errors.length}`));

    if (result.modified.length > 0) {
        console.log(chalk.green(`  ✓ Modified: ${result.modified.length}`));
    }

    if (result.unchanged.length > 0) {
        console.log(chalk.gray(`  - Unchanged: ${result.unchanged.length}`));
    }

    if (result.errors.length > 0) {
        console.log(chalk.red(`  ✗ Errors: ${result.errors.length}`));
    }

    if (options.dryRun) {
        console.log(chalk.yellow('\n🔍 Dry run mode - no files were actually modified'));
    } else if (result.modified.length > 0) {
        console.log(chalk.green('\n✓ Toggle completed successfully'));
    } else {
        console.log(chalk.green('\n✓ No changes needed'));
    }

    console.log('');
}
