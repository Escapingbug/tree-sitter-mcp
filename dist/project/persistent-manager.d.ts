/**
 * Persistent project manager with dual mapping and collision-safe projectId generation
 */
import { type MemoryManager } from './memory.js';
import type { Project, ProjectConfig } from '../types/core.js';
export interface PersistentProjectManager {
    memory: MemoryManager;
    directoryToProject: Map<string, string>;
    projectToDirectory: Map<string, string>;
    watchers: Map<string, () => void>;
}
export declare function createPersistentManager(maxProjects?: number): PersistentProjectManager;
export declare function getOrCreateProject(manager: PersistentProjectManager, config: ProjectConfig, projectId?: string): Promise<Project>;
export declare function generateProjectId(manager: PersistentProjectManager, directory: string): string;
export declare function sanitizeProjectId(projectId: string): string;
export declare function listProjects(manager: PersistentProjectManager): Array<{
    projectId: string;
    directory: string;
    lastAccessed: number;
    isWatched: boolean;
}>;
export declare function removeProjectFromManager(manager: PersistentProjectManager, projectId: string): void;
export declare function clearAllProjects(manager: PersistentProjectManager): void;
//# sourceMappingURL=persistent-manager.d.ts.map