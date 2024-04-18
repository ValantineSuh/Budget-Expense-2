import { createLogger, transports, format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const logger = createLogger({
    transports: [
        new transports.Console(),
        new DailyRotateFile({
            filename: 'logs/%DATE%-combined.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d'
        })
    ],
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    level: 'info' // Setting up the  log level
});

export default logger;
