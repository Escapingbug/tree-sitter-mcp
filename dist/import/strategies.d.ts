/**
 * All import resolution strategies in one file - eliminates separate strategy classes
 */
import type { ImportContext } from '../types/core.js';
export interface ExtendedImportContext extends ImportContext {
    currentFile?: string;
    projectRoot?: string;
    availableFiles?: string[];
}
export interface ImportStrategy {
    canResolve: (path: string, context?: ExtendedImportContext) => boolean;
    resolve: (path: string, context: ExtendedImportContext) => string | null;
}
/**
 * Resolves relative imports starting with ./ or ../
 */
export declare const RelativeResolver: ImportStrategy;
/**
 * Resolves alias-based imports like @/ and ~/
 */
export declare const AliasResolver: ImportStrategy;
/**
 * Resolves framework-specific imports for Next.js, Nuxt, and Vue
 */
export declare const FrameworkResolver: ImportStrategy;
/**
 * Resolves absolute imports from project root or node_modules
 */
export declare const AbsoluteResolver: ImportStrategy;
//# sourceMappingURL=strategies.d.ts.map