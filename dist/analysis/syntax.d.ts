/**
 * Syntax error analysis using tree-sitter error nodes
 */
import type { Project } from '../types/core.js';
import type { Finding, SyntaxMetrics } from '../types/analysis.js';
export interface SyntaxError {
    file: string;
    line: number;
    column: number;
    endLine: number;
    endColumn: number;
    message: string;
    errorType: string;
    context: string;
}
/**
 * Analyzes syntax errors using tree-sitter error nodes
 */
export declare function analyzeSyntaxErrors(project: Project): {
    findings: Finding[];
    metrics: SyntaxMetrics;
};
//# sourceMappingURL=syntax.d.ts.map