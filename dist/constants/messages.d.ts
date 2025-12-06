/**
 * Console messages and common string constants
 */
export declare const CONSOLE_MESSAGES: {
    readonly CODEBASE_STATS: "[STATS] New codebase statistics:";
    readonly LINES_OF_CODE: "   Lines of code:";
    readonly FILES_COUNT: "   Files:";
    readonly DIRECTORIES_COUNT: "   Directories:";
    readonly COMPLEXITY_STATS: "   Complexity:";
    readonly FUNCTIONS_COUNT: "   Functions:";
    readonly BUILDING: "Building project...";
    readonly BUILD_SUCCESS: "Build completed successfully";
    readonly BUILD_FAILED: "Build failed";
    readonly ANALYZING: "Analyzing project...";
    readonly PARSING_FILES: "Parsing files...";
    readonly ANALYSIS_COMPLETE: "Analysis complete";
    readonly FILE_NOT_FOUND: "File not found";
    readonly PARSE_ERROR: "Failed to parse file";
    readonly INVALID_CONFIG: "Invalid configuration";
};
export declare const QUALITY_MESSAGES: {
    readonly HIGH_COMPLEXITY: "has high cyclomatic complexity";
    readonly LONG_METHOD: "is very long";
    readonly TOO_MANY_PARAMS: "has too many parameters";
    readonly MAGIC_NUMBER: "Magic number found";
    readonly MAGIC_STRING: "Magic string found";
    readonly DEEP_NESTING: "Deep nesting detected";
    readonly UNUSED_FUNCTION: "appears to be unused";
    readonly UNNECESSARY_ABSTRACTION: "is very short and never used";
};
export declare const ANALYSIS_CONTEXTS: {
    readonly BREAK_DOWN_FUNCTION: "Consider breaking down into smaller functions";
    readonly EXTRACT_METHODS: "Consider extracting functionality into separate methods";
    readonly USE_CONSTANTS: "Consider extracting to a named constant or configuration";
    readonly REDUCE_NESTING: "Consider using early returns, guard clauses, or extracting nested logic into separate functions";
    readonly REMOVE_UNUSED: "Consider removing if no longer needed";
    readonly INLINE_FUNCTION: "Consider inlining this function to reduce unnecessary abstraction";
};
export declare const COMMON_PATTERNS: {
    readonly TREE_SITTER_PREFIX: "tree-sitter";
    readonly ANONYMOUS_FUNCTION: "anonymous";
    readonly PARAMETER_PREFIX: "param-";
    readonly FUNCTION_PREFIX: "func-";
    readonly CLASS_PREFIX: "class-";
    readonly FILE_PREFIX: "file-";
};
export declare const MCP_COMMANDS: {
    readonly SEARCH_CODE: "search_code";
    readonly FIND_USAGE: "find_usage";
    readonly ANALYZE_CODE: "analyze_code";
};
export declare const CLI_MESSAGES: {
    readonly HELP_TEXT: "Use --help to see available commands";
    readonly VERSION: "1.0.0";
    readonly DESCRIPTION: "Tree-sitter MCP server for code analysis and search";
    readonly MCP_SETUP_TITLE: "MCP Setup Instructions:";
    readonly RESTART_CLAUDE: "2. Restart Claude Desktop";
    readonly SERVER_AVAILABLE: "3. The server will be available for code analysis and search";
};
//# sourceMappingURL=messages.d.ts.map