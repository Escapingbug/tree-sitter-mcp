/**
 * Simplified logger - replaces complex logging system with basic functionality
 */
import chalk from 'chalk';
class SimpleLogger {
    level;
    quiet;
    constructor(level = 'info', quiet = false) {
        this.level = level;
        this.quiet = quiet;
    }
    shouldLog(level) {
        if (this.quiet && level !== 'error')
            return false;
        const levels = ['error', 'warn', 'info', 'debug'];
        return levels.indexOf(level) <= levels.indexOf(this.level);
    }
    error(message, ...args) {
        if (this.shouldLog('error')) {
            console.error(chalk.red('[ERROR]'), message, ...args);
        }
    }
    warn(message, ...args) {
        if (this.shouldLog('warn')) {
            console.warn(chalk.yellow('[WARN]'), message, ...args);
        }
    }
    info(message, ...args) {
        if (this.shouldLog('info')) {
            console.info(chalk.blue('[INFO]'), message, ...args);
        }
    }
    debug(message, ...args) {
        if (this.shouldLog('debug')) {
            console.debug(chalk.gray('[DEBUG]'), message, ...args);
        }
    }
    output(message, ...args) {
        console.log(message, ...args);
    }
}
let logger = new SimpleLogger();
export function getLogger() {
    return logger;
}
export function initializeLogger(level = 'info', quiet = false) {
    logger = new SimpleLogger(level, quiet);
    return logger;
}
//# sourceMappingURL=logger.js.map