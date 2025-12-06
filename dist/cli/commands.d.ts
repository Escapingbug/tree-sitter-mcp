/**
 * Command handlers - extracted from main CLI for better organization
 */
export declare function executeSearch(query: string, options: {
    directory: string;
    type?: string[];
    languages?: string[];
    maxResults: string;
    exact?: boolean;
}): Promise<void>;
export declare function executeAnalysis(directory: string, options: {
    quality: boolean;
    deadcode?: boolean;
    structure?: boolean;
    severity: string;
    output: string;
}): Promise<void>;
export declare function executeFindUsage(identifier: string, options: {
    directory: string;
    languages?: string[];
    caseSensitive?: boolean;
    exact?: boolean;
}): Promise<void>;
//# sourceMappingURL=commands.d.ts.map