/**
 * General utility functions
 */
/**
 * Generates a unique identifier
 */
export declare function generateId(): string;
/**
 * Checks if a path points to a file
 */
export declare function isFile(path: string): boolean;
/**
 * Checks if a path points to a directory
 */
export declare function isDirectory(path: string): boolean;
/**
 * Reads file content as string
 */
export declare function readFile(path: string): string;
/**
 * Gets file extension in lowercase
 */
export declare function getFileExtension(path: string): string;
/**
 * Gets filename from path
 */
export declare function getFileName(path: string): string;
/**
 * Gets directory from path
 */
export declare function getDirectory(path: string): string;
/**
 * Resolves multiple path segments
 */
export declare function resolvePath(...paths: string[]): string;
/**
 * Ensures value is an array
 */
export declare function ensureArray<T>(value: T | T[]): T[];
/**
 * Creates a debounced function
 */
export declare function debounce<T extends (...args: never[]) => unknown>(func: T, wait: number): (...args: Parameters<T>) => void;
//# sourceMappingURL=helpers.d.ts.map