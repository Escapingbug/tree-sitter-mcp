/**
 * Simple memory management with LRU eviction - simplified from complex ProjectMemoryManager
 */
import { getLogger } from '../utils/logger.js';
export function createMemoryManager(maxProjects = 10) {
    return {
        projects: new Map(),
        maxProjects,
        lastAccessed: new Map(),
    };
}
export function addProject(manager, project) {
    // Eviction is handled by the persistent manager to properly clean up all mappings
    manager.projects.set(project.id, project);
    manager.lastAccessed.set(project.id, Date.now());
}
export function getProject(manager, projectId) {
    const project = manager.projects.get(projectId);
    if (project) {
        manager.lastAccessed.set(projectId, Date.now());
    }
    return project || null;
}
export function removeProject(manager, projectId) {
    manager.projects.delete(projectId);
    manager.lastAccessed.delete(projectId);
    const logger = getLogger();
    logger.debug(`Removed project from memory: ${projectId}`);
}
export function findLRUProject(manager) {
    let oldestTime = Date.now();
    let oldestProject = null;
    for (const [projectId, lastAccess] of manager.lastAccessed) {
        if (lastAccess < oldestTime) {
            oldestTime = lastAccess;
            oldestProject = projectId;
        }
    }
    return oldestProject;
}
export function getMemoryStats(manager) {
    let oldestTime = Date.now();
    let newestTime = 0;
    let oldestProject;
    let newestProject;
    for (const [projectId, lastAccess] of manager.lastAccessed) {
        if (lastAccess < oldestTime) {
            oldestTime = lastAccess;
            oldestProject = projectId;
        }
        if (lastAccess > newestTime) {
            newestTime = lastAccess;
            newestProject = projectId;
        }
    }
    let memoryUsage = 0;
    for (const project of manager.projects.values()) {
        memoryUsage += project.files.size * 1000; // Rough estimate: 1KB per file
        memoryUsage += Array.from(project.nodes.values()).reduce((sum, nodes) => sum + nodes.length, 0) * 100; // 100 bytes per node
    }
    return {
        totalProjects: manager.projects.size,
        maxProjects: manager.maxProjects,
        memoryUsage,
        oldestProject,
        newestProject,
    };
}
export function clearMemory(manager) {
    const logger = getLogger();
    const projectCount = manager.projects.size;
    manager.projects.clear();
    manager.lastAccessed.clear();
    logger.info(`Cleared ${projectCount} projects from memory`);
}
//# sourceMappingURL=memory.js.map