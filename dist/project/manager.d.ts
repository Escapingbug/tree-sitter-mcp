/**
 * Simplified project management - streamlined from complex TreeManager class
 */
import type { Project, ProjectConfig, TreeNode, FileChange } from '../types/core.js';
export declare function createProject(config: ProjectConfig, isSubProject?: boolean): Project;
export declare function parseProject(project: Project): Promise<Project>;
export declare function updateProject(project: Project, changes: FileChange[]): Promise<void>;
export declare function watchProject(project: Project, onUpdate?: (changes: FileChange[]) => void): () => void;
export declare function getAllNodes(project: Project): TreeNode[];
export declare function getProjectStats(project: Project): {
    totalFiles: number;
    totalNodes: number;
    languages: string[];
    directories: string[];
};
//# sourceMappingURL=manager.d.ts.map