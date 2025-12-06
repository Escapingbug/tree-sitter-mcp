/**
 * Code search functionality - simplified from complex SearchEngine class
 */
import type { TreeNode, SearchOptions, SearchResult, FindUsageResult } from '../types/core.js';
/**
 * Searches for code elements matching the query with progressive content inclusion
 */
export declare function searchCode(query: string, nodes: TreeNode[], options?: SearchOptions): SearchResult[];
/**
 * Finds usage of an identifier across nodes with enhanced context
 */
export declare function findUsage(identifier: string, nodes: TreeNode[], options?: {
    caseSensitive?: boolean;
    exactMatch?: boolean;
    pathPattern?: string;
}): FindUsageResult[];
//# sourceMappingURL=search.d.ts.map