/**
 * Persistence and caching constants
 */
export declare const PERSISTENCE_CONFIG: {
    readonly MAX_PROJECTS: 10;
    readonly PROJECT_ID_HASH_LENGTH: 8;
    readonly DEFAULT_WATCH_DEBOUNCE_MS: 300;
    readonly LRU_CLEANUP_THRESHOLD: 0.8;
};
export declare const PROJECT_ID_PATTERNS: {
    readonly INVALID_CHARS: RegExp;
    readonly COLLISION_SEPARATOR: "-";
    readonly MAX_LENGTH: 64;
};
export declare const WATCH_CONFIG: {
    readonly IGNORED_PATTERNS: readonly ["**/node_modules/**", "**/.git/**", "**/dist/**", "**/build/**", "**/.cache/**", "**/.next/**", "**/coverage/**", "**/.nyc_output/**"];
    readonly DEBOUNCE_MS: 300;
    readonly PERSISTENT: true;
    readonly IGNORE_INITIAL: true;
};
export declare const MEMORY_LIMITS: {
    readonly MAX_FILE_SIZE_BYTES: number;
    readonly MAX_NODES_PER_FILE: 50000;
    readonly ESTIMATED_BYTES_PER_NODE: 100;
    readonly ESTIMATED_BYTES_PER_FILE: 1000;
};
//# sourceMappingURL=persistence.d.ts.map