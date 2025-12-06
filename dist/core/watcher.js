/**
 * File change monitoring - simplified file watcher
 */
import { watch } from 'chokidar';
import { debounce } from '../utils/helpers.js';
import { getLogger } from '../utils/logger.js';
export class FileWatcher {
    directory;
    handler;
    watcher = null;
    changes = [];
    logger = getLogger();
    flushChanges;
    constructor(directory, handler, options = {}) {
        this.directory = directory;
        this.handler = handler;
        const { debounceMs = 300 } = options;
        this.flushChanges = debounce(() => {
            if (this.changes.length > 0) {
                this.handler([...this.changes]);
                this.changes = [];
            }
        }, debounceMs);
    }
    start() {
        if (this.watcher)
            return;
        const options = {
            ignored: [
                '**/node_modules/**',
                '**/.git/**',
                '**/dist/**',
                '**/build/**',
                '**/.cache/**',
            ],
            persistent: true,
            ignoreInitial: true,
        };
        this.watcher = watch(this.directory, options);
        this.watcher
            .on('add', path => this.addChange('created', path))
            .on('change', path => this.addChange('modified', path))
            .on('unlink', path => this.addChange('deleted', path))
            .on('error', error => this.logger.error('File watcher error:', error));
        this.logger.info(`File watcher started for ${this.directory}`);
    }
    stop() {
        if (this.watcher) {
            this.watcher.close();
            this.watcher = null;
            this.logger.info('File watcher stopped');
        }
    }
    addChange(type, path) {
        this.changes.push({
            type,
            path,
            timestamp: Date.now(),
        });
        this.flushChanges();
    }
}
export function createFileWatcher(directory, handler, options) {
    return new FileWatcher(directory, handler, options);
}
//# sourceMappingURL=watcher.js.map