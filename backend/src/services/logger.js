require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});
const log4js = require('log4js');

const level =
  process.env.LOGGING_LEVEL_TEST || process.env.NODE_LOGGING_LEVEL || 'info';
const levelError =
  process.env.LOGGING_LEVEL_TEST ||
  process.env.NODE_LOGGING_LEVEL_ERROR ||
  'error';

// Log - Log4js
log4js.configure({
  appenders: {
    console: { type: 'stdout' },
    // file: {
    //     type: "file",
    //     backups: 5,
    //     maxLogsize: 3072,
    //     filename: "futapp.log"
    // },
    logConsoleFilter: {
      type: 'logLevelFilter',
      level,
      appender: 'console',
    },
    // logFileFilter: {
    //     type: "logLevelFilter",
    //     level: levelError,
    //     appender: "file"
    // }
  },
  categories: {
    default: {
      // appenders: ["logConsoleFilter", "logFileFilter"],
      appenders: ['logConsoleFilter'],
      level,
    },
  },
});

const logger = log4js.getLogger();

module.exports = logger;
