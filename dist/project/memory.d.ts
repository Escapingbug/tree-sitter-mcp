/**
 * Simple memory management with LRU eviction - simplified from complex ProjectMemoryManager
 */
import type { Project } from '../types/core.js';
export interface MemoryManager {
    projects: Map<string, Project>;
    maxProjects: number;
    lastAccessed: Map<string, number>;
}
export declare function createMemoryManager(maxProjects?: number): MemoryManager;
export declare function addProject(manager: MemoryManager, project: Project): void;
export declare function getProject(manager: MemoryManager, projectId: string): Project | null;
export declare function removeProject(manager: MemoryManager, projectId: string): void;
export declare function findLRUProject(manager: MemoryManager): string | null;
export declare function getMemoryStats(manager: MemoryManager): {
    totalProjects: number;
    maxProjects: number;
    memoryUsage: number;
    oldestProject?: string;
    newestProject?: string;
};
export declare function clearMemory(manager: MemoryManager): void;
//# sourceMappingURL=memory.d.ts.map