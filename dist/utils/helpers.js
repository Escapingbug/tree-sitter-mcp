/**
 * General utility functions
 */
import { readFileSync, statSync } from 'fs';
import { resolve, extname, basename, dirname } from 'path';
/**
 * Generates a unique identifier
 */
export function generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
/**
 * Checks if a path points to a file
 */
export function isFile(path) {
    try {
        return statSync(path).isFile();
    }
    catch {
        return false;
    }
}
/**
 * Checks if a path points to a directory
 */
export function isDirectory(path) {
    try {
        return statSync(path).isDirectory();
    }
    catch {
        return false;
    }
}
/**
 * Reads file content as string
 */
export function readFile(path) {
    try {
        return readFileSync(path, 'utf-8');
    }
    catch (error) {
        throw new Error(`Failed to read file ${path}: ${error}`);
    }
}
/**
 * Gets file extension in lowercase
 */
export function getFileExtension(path) {
    return extname(path).toLowerCase();
}
/**
 * Gets filename from path
 */
export function getFileName(path) {
    return basename(path);
}
/**
 * Gets directory from path
 */
export function getDirectory(path) {
    return dirname(path);
}
/**
 * Resolves multiple path segments
 */
export function resolvePath(...paths) {
    return resolve(...paths);
}
/**
 * Ensures value is an array
 */
export function ensureArray(value) {
    return Array.isArray(value) ? value : [value];
}
/**
 * Creates a debounced function
 */
export function debounce(func, wait) {
    let timeout = null;
    return (...args) => {
        if (timeout)
            clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}
//# sourceMappingURL=helpers.js.map