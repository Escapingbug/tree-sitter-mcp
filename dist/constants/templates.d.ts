/**
 * Output templates for different formats
 */
import type { JsonObject } from '../types/core.js';
export interface AnalysisData {
    totalFindings: number;
    critical: number;
    warnings: number;
    info: number;
    qualityScore: number;
    avgComplexity: number;
    avgMethodLength: number;
    totalMethods: number;
    analyzedFiles: number;
    unusedFiles?: number;
    unusedFunctions?: number;
    circularDependencies?: number;
    filesWithErrors?: number;
    totalSyntaxErrors?: number;
    criticalIssues?: string;
    warningIssues?: string;
    statusMessage?: string;
}
export interface BuildData {
    lines: number;
    files: number;
    directories: number;
    originalLines?: number;
    originalFiles?: number;
    originalDirectories?: number;
}
export declare const SETUP_TEMPLATE = "MCP Setup Instructions:\n\nFor Claude Code (Recommended):\n\nRun this command to add the MCP server:\n  claude mcp add tree-sitter-mcp -s user -- npx -y @nendo/tree-sitter-mcp --mcp\n\nIf already installed, check with:\n  claude mcp list\n\nFor Claude Desktop:\n\nAdd to your config (~/.config/claude-desktop/claude_desktop_config.json):\n  {\n    \"mcpServers\": {\n      \"tree-sitter-mcp\": {\n        \"command\": \"npx\",\n        \"args\": [\"@nendo/tree-sitter-mcp\", \"--mcp\"],\n        \"cwd\": \"/path/to/your/project\"\n      }\n    }\n  }\n\nFor Other MCP Clients:\n\nThe server can be started with:\n  npx @nendo/tree-sitter-mcp --mcp\n\nOr globally installed:\n  npm install -g @nendo/tree-sitter-mcp\n  tree-sitter-mcp --mcp\n\nServer will communicate via stdio using the MCP protocol.";
export declare const SETUP_AUTO_SUCCESS_TEMPLATE = "SUCCESS: Successfully installed tree-sitter-mcp!\n\nThe MCP server is now available in Claude Code.\nUse /mcp to see available tools or start using the analysis functions.";
export declare const SETUP_AUTO_EXISTS_TEMPLATE = "INFO: tree-sitter-mcp is already installed!\n\nThe MCP server is available in Claude Code.\nUse /mcp to see available tools or start using the analysis functions.";
export declare const SETUP_AUTO_FAILED_TEMPLATE = "Automatic setup failed: {error}\n\nFalling back to manual instructions:\n\n{manualInstructions}";
export declare const SETUP_CLAUDE_NOT_FOUND_TEMPLATE = "Claude Code CLI not found\n\nPlease install Claude Code first to use automatic setup.\nYou can download it from: https://claude.ai/download\n\nFalling back to manual instructions:\n\n{manualInstructions}";
/**
 * Create console output using template literals with conditional sections
 */
export declare function createConsoleOutput(data: AnalysisData): string;
export declare const BUILD_TEMPLATES: {
    readonly CONSOLE: "New codebase statistics:\n   Lines of code: {lines}\n   Files: {files}\n   Directories: {directories}\n\nReduction achieved:\n   From {originalLines} lines -> {lines} lines\n   From {originalFiles} files -> {files} files\n   From {originalDirectories} directories -> {directories} directories";
    readonly JSON: "{\n  \"statistics\": {\n    \"lines\": {lines},\n    \"files\": {files},\n    \"directories\": {directories}\n  },\n  \"reduction\": {\n    \"fromLines\": {originalLines},\n    \"toLines\": {lines},\n    \"fromFiles\": {originalFiles},\n    \"toFiles\": {files},\n    \"fromDirectories\": {originalDirectories},\n    \"toDirectories\": {directories}\n  }\n}";
};
/**
 * Populate template with data
 */
/**
 * Template data for build templates
 */
export type TemplateData = JsonObject;
/**
 * Populate template with data using safe typing
 */
export declare function populateTemplate(template: string, data: TemplateData): string;
/**
 * Render analysis results
 */
export declare function renderAnalysis(data: AnalysisData, format?: 'console' | 'json'): string | object;
export declare const ANALYSIS_TEMPLATES: {
    readonly MARKDOWN: "# Analysis Report\n\n## Summary\n- Total findings: {totalFindings}\n- Critical: {criticalFindings}\n- Warnings: {warningFindings}\n- Info: {infoFindings}\n\n{qualitySection}{deadcodeSection}{structureSection}{syntaxSection}{criticalIssuesSection}{warningsSection}";
    readonly QUALITY_SECTION: "## Quality Metrics\n- Code Quality Score: {codeQualityScore}/10\n- Average Complexity: {avgComplexity}\n- Average Method Length: {avgMethodLength} lines\n- Average Parameters: {avgParameters}\n- Total Methods: {totalMethods}\n\n";
    readonly DEADCODE_SECTION: "## Dead Code Metrics\n- Total Files: {totalFiles}\n- Unused Files: {unusedFiles}\n- Unused Functions: {unusedFunctions}\n- Unused Variables: {unusedVariables}\n\n";
    readonly STRUCTURE_SECTION: "## Structure Metrics\n- Files Analyzed: {analyzedFiles}\n- Circular Dependencies: {circularDependencies}\n- High Coupling Files: {highCouplingFiles}\n- Max Nesting Depth: {maxNestingDepth}\n\n";
    readonly SYNTAX_SECTION: "## Syntax Errors\n- Total Files: {totalFiles}\n- Files with Errors: {filesWithErrors}\n- Total Syntax Errors: {totalSyntaxErrors}\n- Error Types: {errorTypes}\n\n";
    readonly CRITICAL_ISSUES_SECTION: "## Critical Issues\n{criticalIssuesList}\n\n";
    readonly WARNINGS_SECTION: "## Warnings\n{warningsList}{moreWarningsText}\n\n";
};
/**
 * Enhanced template population with conditional sections
 */
export declare function populateTemplateWithSections(template: string, data: TemplateData, sections?: TemplateData): string;
/**
 * Build quality section if metrics exist
 */
export declare function buildQualitySection(metrics?: any): string;
/**
 * Build deadcode section if metrics exist
 */
export declare function buildDeadcodeSection(metrics?: any): string;
/**
 * Build structure section if metrics exist
 */
export declare function buildStructureSection(metrics?: any): string;
/**
 * Build critical issues section
 */
export declare function buildCriticalIssuesSection(findings: any[], count: number): string;
/**
 * Build warnings section
 */
export declare function buildWarningsSection(findings: any[], count: number): string;
/**
 * Build syntax section
 */
export declare function buildSyntaxSection(syntaxMetrics: any): string;
/**
 * Render build results
 */
export declare function renderBuild(data: BuildData, format?: 'console' | 'json'): string;
//# sourceMappingURL=templates.d.ts.map