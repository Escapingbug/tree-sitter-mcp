/**
 * Content extraction utilities for various display and analysis contexts
 */
import type { TreeNode } from '../types/core.js';
export interface ContentExtractionOptions {
    maxLines?: number;
    maxCharacters?: number;
    highlightLine?: number;
    contextBefore?: number;
    contextAfter?: number;
    showLineNumbers?: boolean;
    truncationMessage?: string;
}
export interface ExtractedContent {
    content: string;
    truncated: boolean;
    originalLines: number;
    extractedLines: number;
    originalCharacters: number;
    extractedCharacters: number;
}
/**
 * Core content extraction function that handles truncation and formatting
 */
export declare function extractContent(content: string, options?: ContentExtractionOptions): ExtractedContent;
/**
 * Extract content from a TreeNode with node type-specific handling
 */
export declare function extractNodeContent(node: TreeNode, options?: ContentExtractionOptions): ExtractedContent;
/**
 * Usage context wrapper - maintains backward compatibility with findUsage
 */
export declare function getUsageContext(node: TreeNode, highlightLine: number, lines: string[]): string;
//# sourceMappingURL=content-extraction.d.ts.map