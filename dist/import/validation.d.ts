/**
 * Path validation utilities for import resolution
 */
export declare function isValidPath(path: string): boolean;
export declare function isExternalModule(importPath: string): boolean;
export declare function normalizePath(path: string): string;
export declare function validateImportPath(importPath: string, currentFile: string): {
    isValid: boolean;
    reason?: string;
};
export declare function resolveAndValidate(importPath: string, basePath: string): string | null;
export declare function getImportType(importPath: string): 'relative' | 'absolute' | 'alias' | 'external';
//# sourceMappingURL=validation.d.ts.map