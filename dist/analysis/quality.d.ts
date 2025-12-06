/**
 * Quality analysis - simplified from complex QualityAnalyzer class
 */
import type { TreeNode } from '../types/core.js';
import type { Finding, QualityMetrics } from '../types/analysis.js';
export interface QualityResult {
    metrics: QualityMetrics;
    findings: Finding[];
}
export declare function analyzeQuality(nodes: TreeNode[]): QualityResult;
//# sourceMappingURL=quality.d.ts.map