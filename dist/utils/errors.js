/**
 * Simplified error handling - replaces 873 lines of error handling bloat
 */
export class TreeSitterError extends Error {
    code;
    context;
    constructor(message, code, context) {
        super(message);
        this.code = code;
        this.context = context;
        this.name = 'TreeSitterError';
    }
}
export function handleError(error, context) {
    if (error instanceof TreeSitterError)
        return error;
    const message = error instanceof Error ? error.message : String(error);
    return new TreeSitterError(context ? `${context}: ${message}` : message, 'UNKNOWN_ERROR', { originalError: String(error) });
}
export const ERROR_CODES = {
    PARSE_ERROR: 'PARSE_ERROR',
    FILE_ERROR: 'FILE_ERROR',
    SEARCH_ERROR: 'SEARCH_ERROR',
};
export function createError(code, message, context) {
    return new TreeSitterError(message, code, context);
}
export function isTreeSitterError(error) {
    return error instanceof TreeSitterError;
}
export async function withErrorHandling(operation, context) {
    try {
        return await operation();
    }
    catch (error) {
        throw handleError(error, context);
    }
}
//# sourceMappingURL=errors.js.map