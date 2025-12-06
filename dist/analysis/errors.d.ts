/**
 * Actionable error detection and analysis using tree-sitter
 */
import type { Project } from '../types/core.js';
export interface ActionableError {
    type: 'missing' | 'parse_error' | 'extra';
    nodeType: string;
    file: string;
    line: number;
    column: number;
    endLine: number;
    endColumn: number;
    text: string;
    context: string;
    suggestion: string;
    parentContext?: string;
}
export interface ErrorAnalysisResult {
    errors: ActionableError[];
    summary: ErrorSummary;
    metrics: ErrorMetrics;
}
export interface ErrorSummary {
    totalErrors: number;
    missingErrors: number;
    parseErrors: number;
    extraErrors: number;
    filesWithErrors: number;
}
export interface ErrorMetrics {
    totalFiles: number;
    totalErrorNodes: number;
    errorsByType: Record<string, number>;
    errorsByFile: Record<string, number>;
}
export declare function analyzeErrors(project: Project): ErrorAnalysisResult;
export declare function countErrorNodes(node: any): number;
//# sourceMappingURL=errors.d.ts.map