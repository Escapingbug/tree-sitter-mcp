/**
 * Tree-sitter integration - restored working parser functionality
 */
import type { TreeNode, LanguageConfig } from '../types/core.js';
/**
 * Parses a file and extracts its tree structure
 */
export declare function parseFile(filePath: string): Promise<TreeNode>;
/**
 * Parses content string and extracts tree elements
 */
export declare function parseContent(content: string, filePath: string, language?: LanguageConfig): TreeNode;
export declare function getLanguageParser(extension: string): LanguageConfig | undefined;
//# sourceMappingURL=parser.d.ts.map