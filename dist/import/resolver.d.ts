/**
 * Unified import resolution - preserves sophisticated logic but eliminates class overhead
 */
import type { ImportContext, ResolutionResult } from '../types/core.js';
/**
 * Resolves an import path using multiple resolution strategies
 */
export declare function resolveImport(importPath: string, currentFile: string, context: ImportContext): ResolutionResult;
/**
 * Attempts to resolve relative imports (./ and ../)
 */
export declare function tryRelativeResolution(importPath: string, currentFile: string): ResolutionResult | null;
/**
 * Attempts to resolve alias-based imports using provided aliases
 */
export declare function tryAliasResolution(importPath: string, aliases?: Record<string, string>): ResolutionResult | null;
/**
 * Attempts to resolve imports using framework-specific resolution rules
 */
export declare function tryFrameworkResolution(importPath: string, framework?: string): ResolutionResult | null;
/**
 * Attempts to resolve absolute imports from a base path
 */
export declare function tryAbsoluteResolution(importPath: string, basePath?: string): ResolutionResult | null;
/**
 * Extracts all import paths from file content
 */
export declare function extractImports(content: string): string[];
//# sourceMappingURL=resolver.d.ts.map