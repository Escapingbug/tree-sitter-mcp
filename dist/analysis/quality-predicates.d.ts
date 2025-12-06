/**
 * Quality analysis predicates and classification utilities
 */
import type { TreeNode } from '../types/core.js';
import type { Finding } from '../types/analysis.js';
/**
 * Quality thresholds interface
 */
export interface QualityThresholds {
    complexityWarning: number;
    complexityCritical: number;
    lengthWarning: number;
    lengthCritical: number;
    parameterWarning: number;
    parameterCritical: number;
}
/**
 * Determines if a function node should be checked for unnecessary abstraction
 */
export declare function shouldCheckForUnnecessaryAbstraction(node: TreeNode, length: number): boolean;
/**
 * Creates a finding for unnecessary abstraction issues
 */
export declare function createAbstractionFinding(node: TreeNode, length: number, usageCount: number): Finding;
/**
 * Gets quality thresholds based on file type (test vs production)
 */
export declare function getQualityThresholds(filePath: string): QualityThresholds;
/**
 * Checks if a function node represents an anonymous function
 */
export declare function isAnonymousFunction(node: TreeNode): boolean;
/**
 * Checks if a function node represents a special function that should be excluded from certain checks
 */
export declare function isSpecialFunction(node: TreeNode): boolean;
//# sourceMappingURL=quality-predicates.d.ts.map