/**
 * Unified analysis interface - single entry point for all analysis types
 */
import type { AnalysisOptions, AnalysisResult } from '../types/analysis.js';
import type { Project } from '../types/core.js';
/**
 * Analyzes a project using the specified analysis options
 */
export declare function analyzeProject(projectPath: string, options: AnalysisOptions): Promise<AnalysisResult>;
/**
 * Analyzes a project instance using the specified analysis options
 */
export declare function analyzeProject(project: Project, options: AnalysisOptions): Promise<AnalysisResult>;
/**
 * Calculates summary statistics from analysis findings
 */
export declare function calculateSummary(findings: AnalysisResult['findings']): AnalysisResult['summary'];
/**
 * Formats analysis results as a markdown report using templates
 */
export declare function formatAnalysisReport(result: AnalysisResult): string;
//# sourceMappingURL=index.d.ts.map