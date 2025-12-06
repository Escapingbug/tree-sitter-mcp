/**
 * Quality pattern detection utilities
 */
import type { TreeNode } from '../types/core.js';
import type { Finding } from '../types/analysis.js';
/**
 * Detects magic numbers and strings in function content
 */
export declare function detectMagicValues(node: TreeNode): Finding[];
/**
 * Detects excessive nesting in function content with loop tolerance
 */
export declare function detectDeepNesting(node: TreeNode): Finding[];
/**
 * Detects God class anti-pattern by counting functions per file
 */
export declare function detectGodClasses(functionNodes: TreeNode[]): Finding[];
/**
 * Analyzes function usage patterns to detect thin wrappers and micro-functions
 */
export declare function analyzeFunctionUsage(functionNodes: TreeNode[]): Map<string, number>;
/**
 * Detects excessive micro-function patterns that may indicate over-abstraction
 */
export declare function analyzeMicroFunctionPatterns(functionUsage: Map<string, number>, functionNodes: TreeNode[]): Finding[];
//# sourceMappingURL=quality-patterns.d.ts.map