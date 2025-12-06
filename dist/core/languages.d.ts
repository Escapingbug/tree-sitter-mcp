/**
 * Language parser registry - simplified but functional
 */
import Parser from 'tree-sitter';
import type { LanguageConfig } from '../types/core.js';
export declare const LANGUAGE_CONFIGS: LanguageConfig[];
export declare function initializeParsers(): void;
export declare function getParser(language: string): Parser | undefined;
export declare function getLanguageByExtension(extension: string): LanguageConfig | undefined;
export declare function getLanguageByName(name: string): LanguageConfig | undefined;
//# sourceMappingURL=languages.d.ts.map