/**
 * Dead code analysis - preserves sophisticated traversal algorithm
 */
import type { Project } from '../types/core.js';
import type { DeadcodeMetrics, Finding } from '../types/analysis.js';
export interface DeadcodeAnalysisResult {
    metrics: DeadcodeMetrics;
    findings: Finding[];
}
export declare function analyzeDeadcode(project: Project): DeadcodeAnalysisResult;
//# sourceMappingURL=deadcode.d.ts.map