/**
 * Quality metrics calculation utilities
 */
import type { TreeNode } from '../types/core.js';
import type { Finding } from '../types/analysis.js';
/**
 * Calculates cyclomatic complexity of a function node
 */
export declare function calculateComplexity(node: TreeNode): number;
/**
 * Calculates the length of a method in lines
 */
export declare function calculateMethodLength(node: TreeNode): number;
/**
 * Gets the parameter count for a function node
 */
export declare function getParameterCount(node: TreeNode): number;
/**
 * Calculates the average of an array of numbers, rounded to 2 decimal places
 */
export declare function calculateAverage(values: number[]): number;
/**
 * Calculates a base quality score from average metrics
 */
export declare function calculateQualityScore(avgComplexity: number, avgMethodLength: number, avgParameters: number): number;
/**
 * Adjusts the base quality score based on analysis findings and issue density
 */
export declare function adjustScoreForIssues(baseScore: number, findings: Finding[], totalMethods: number, testMethods: number): number;
//# sourceMappingURL=quality-metrics.d.ts.map