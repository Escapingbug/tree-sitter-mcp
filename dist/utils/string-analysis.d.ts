/**
 * String analysis utilities for code content inspection
 */
/**
 * Checks if a position in content is within a comment
 */
export declare function isInComment(content: string, index: number): boolean;
/**
 * Checks if a position in content is within a TypeScript type definition
 */
export declare function isInTypeDefinition(content: string, index: number): boolean;
/**
 * Checks if a position in content is in a context where numbers might be suspicious
 */
export declare function isInSuspiciousContext(content: string, index: number): boolean;
/**
 * Checks if a string is a common/acceptable string that shouldn't be flagged as magic
 */
export declare function isCommonString(str: string): boolean;
/**
 * Escapes special characters in a string for use in regular expressions
 */
export declare function escapeRegExp(string: string): string;
//# sourceMappingURL=string-analysis.d.ts.map