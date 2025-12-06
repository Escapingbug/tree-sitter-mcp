/**
 * Structure analysis - analyzes dependencies, coupling, and HTML nesting
 */
import type { TreeNode } from '../types/core.js';
import type { Finding, StructureMetrics } from '../types/analysis.js';
export interface StructureAnalysisResult {
    metrics: StructureMetrics;
    findings: Finding[];
}
export declare function analyzeStructure(nodes: TreeNode[]): StructureAnalysisResult;
//# sourceMappingURL=structure.d.ts.map