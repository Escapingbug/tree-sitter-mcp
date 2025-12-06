/**
 * Simplified error handling - replaces 873 lines of error handling bloat
 */
import type { JsonObject } from '../types/core.js';
export declare class TreeSitterError extends Error {
    code: string;
    context?: JsonObject | undefined;
    constructor(message: string, code: string, context?: JsonObject | undefined);
}
export declare function handleError(error: unknown, context?: string): TreeSitterError;
export declare const ERROR_CODES: {
    readonly PARSE_ERROR: "PARSE_ERROR";
    readonly FILE_ERROR: "FILE_ERROR";
    readonly SEARCH_ERROR: "SEARCH_ERROR";
};
export type ErrorCode = typeof ERROR_CODES[keyof typeof ERROR_CODES];
export declare function createError(code: ErrorCode, message: string, context?: JsonObject): TreeSitterError;
export declare function isTreeSitterError(error: unknown): error is TreeSitterError;
export declare function withErrorHandling<T>(operation: () => Promise<T>, context: string): Promise<T>;
//# sourceMappingURL=errors.d.ts.map