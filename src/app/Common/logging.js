/* eslint-disable no-console */
// eslint-disable-next-line max-classes-per-file


const DEFAULT_LOGGER_NAME = 'default';
const LOGGED_IN_USER_EMAIL = 'ANONYMOUS';

class ConsoleLogger {
  log = (message) => console.log(message);

  warn = (message) => console.warn(message);

  error = (message) => console.error(message);
}


class RemoteLogger {
  // Ignore normal logging in case of simple logs
  log = () => {
  };

  warn = (message) => {
  };

  error = (message) => {
  };
}

const LOGGERS_MAP = {
  local: new ConsoleLogger(),
  remote: new RemoteLogger(),
};

export default class Logger {
  constructor(name) {
    this.name = name;
    const logging_mode = process.env.NODE_ENV === 'production' ? 'remote' : 'local'
    this.logger = LOGGERS_MAP[logging_mode];
  }

  static createLogger(name) {
    return new Logger(name || DEFAULT_LOGGER_NAME);
  }

  log = (...message) => {
    const logMessage = this.formatLogMessage('DEBUG', message);
    this.logger.log(logMessage);
  };

  warn = (...message) => {
    const logMessage = this.formatLogMessage('WARNING', message);
    this.logger.warn(logMessage);
  };

  error = (...message) => {
    const logMessage = this.formatLogMessage('ERROR', message);
    this.logger.error(logMessage);
  };

  formatLogMessage = (type, message) => {
    const timestamp = new Date().toISOString();
    return `${this.name}:${type}:${timestamp}:${LOGGED_IN_USER_EMAIL}:${JSON.stringify(
      message,
    )}`;
  }
}
