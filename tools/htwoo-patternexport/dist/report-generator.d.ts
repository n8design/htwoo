/**
 * Report generator - creates markdown reports of pattern changes
 */
import type { ComparisonResult, ResolvedConfig } from './types.js';
/**
 * Generates and saves a markdown report of changes
 * @param results - Comparison results
 * @param config - Resolved configuration
 */
export declare function generateReport(results: ComparisonResult, config: ResolvedConfig): Promise<void>;
/**
 * Displays a summary of changes to the console
 * @param results - Comparison results
 * @param config - Resolved configuration
 */
export declare function displaySummary(results: ComparisonResult, config: ResolvedConfig): void;
//# sourceMappingURL=report-generator.d.ts.map