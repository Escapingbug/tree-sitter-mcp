/**
 * Simplified file walker - replaces complex FileWalker class
 */
export interface WalkOptions {
    maxDepth?: number;
    ignoreDirs?: string[];
    languages?: string[];
    includeHidden?: boolean;
}
export declare function walkDirectory(directory: string, options?: WalkOptions): Promise<string[]>;
export declare function findProjectFiles(directory: string, languages?: string[], ignoreDirs?: string[]): Promise<string[]>;
//# sourceMappingURL=file-walker.d.ts.map