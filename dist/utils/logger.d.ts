/**
 * Simplified logger - replaces complex logging system with basic functionality
 */
export type LogLevel = 'error' | 'warn' | 'info' | 'debug';
export interface Logger {
    error(message: string, ...args: unknown[]): void;
    warn(message: string, ...args: unknown[]): void;
    info(message: string, ...args: unknown[]): void;
    debug(message: string, ...args: unknown[]): void;
    output(message: string, ...args: unknown[]): void;
}
export declare function getLogger(): Logger;
export declare function initializeLogger(level?: LogLevel, quiet?: boolean): Logger;
//# sourceMappingURL=logger.d.ts.map