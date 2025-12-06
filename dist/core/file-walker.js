/**
 * Simplified file walker - replaces complex FileWalker class
 */
import { readdir, stat } from 'fs/promises';
import { join, resolve, extname } from 'path';
import { getLanguageByExtension } from './languages.js';
import { getLogger } from '../utils/logger.js';
import { isTestFile, GLOBAL_IGNORE_DIRS } from '../constants/index.js';
export async function walkDirectory(directory, options = {}) {
    const logger = getLogger();
    const { maxDepth = 10, ignoreDirs = [], languages = [], includeHidden = false, } = options;
    const ignoreDirSet = new Set([...GLOBAL_IGNORE_DIRS, ...ignoreDirs]);
    const files = [];
    async function walk(dir, depth) {
        if (depth >= maxDepth)
            return;
        try {
            const entries = await readdir(dir);
            for (const entry of entries) {
                if (!includeHidden && entry.startsWith('.'))
                    continue;
                const fullPath = join(dir, entry);
                const stats = await stat(fullPath);
                if (stats.isDirectory()) {
                    if (!includeHidden && entry.startsWith('.')) {
                        continue;
                    }
                    if (!ignoreDirSet.has(entry)) {
                        await walk(fullPath, depth + 1);
                    }
                }
                else if (stats.isFile()) {
                    if (!includeHidden && entry.startsWith('.')) {
                        continue;
                    }
                    if (isTestFile(entry)) {
                        continue;
                    }
                    const language = getLanguageByExtension(extname(fullPath));
                    if (languages.length === 0 || (language && languages.includes(language.name))) {
                        files.push(resolve(fullPath));
                    }
                }
            }
        }
        catch (error) {
            logger.warn(`Failed to read directory ${dir}:`, error);
        }
    }
    await walk(directory, 0);
    return files;
}
export async function findProjectFiles(directory, languages, ignoreDirs) {
    return walkDirectory(directory, {
        maxDepth: 15,
        languages,
        ignoreDirs: ignoreDirs || [],
        includeHidden: false,
    });
}
//# sourceMappingURL=file-walker.js.map