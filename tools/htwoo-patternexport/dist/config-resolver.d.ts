/**
 * Configuration resolver - handles Pattern Lab config loading and path resolution
 */
import type { CompareOptions, ResolvedConfig } from './types.js';
/**
 * Resolves configuration from CLI options and patternlab-config.json
 * @param options - CLI options
 * @returns Resolved configuration with all paths
 * @throws Error if required paths cannot be resolved
 */
export declare function resolveConfig(options: CompareOptions): Promise<ResolvedConfig>;
//# sourceMappingURL=config-resolver.d.ts.map