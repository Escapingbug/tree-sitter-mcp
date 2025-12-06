/**
 * File change monitoring - simplified file watcher
 */
import type { FileChange } from '../types/core.js';
export type FileChangeHandler = (changes: FileChange[]) => void;
export interface WatchOptions {
    ignored?: string[];
    debounceMs?: number;
    persistent?: boolean;
}
export declare class FileWatcher {
    private directory;
    private handler;
    private watcher;
    private changes;
    private logger;
    private flushChanges;
    constructor(directory: string, handler: FileChangeHandler, options?: WatchOptions);
    start(): void;
    stop(): void;
    private addChange;
}
export declare function createFileWatcher(directory: string, handler: FileChangeHandler, options?: WatchOptions): FileWatcher;
//# sourceMappingURL=watcher.d.ts.map