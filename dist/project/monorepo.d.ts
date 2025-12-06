/**
 * Monorepo detection and handling - preserves sophisticated detection logic
 */
import type { MonorepoInfo } from '../types/analysis.js';
export declare function detectMonorepo(directory: string): MonorepoInfo;
export declare function findSubProjects(directory: string, maxDepth?: number): string[];
export declare function detectWorkspaces(directory: string): string[];
export declare function findRootProject(directory: string): string;
export declare function isMonorepoRoot(directory: string): boolean;
export declare function getMonorepoStructure(directory: string): {
    root: string;
    subProjects: {
        path: string;
        name: string;
        type: string;
    }[];
    workspaces: string[];
};
//# sourceMappingURL=monorepo.d.ts.map