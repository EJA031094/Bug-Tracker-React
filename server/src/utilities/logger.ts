import { format, transports, createLogger } from 'winston';

const { printf, combine, colorize, timestamp, errors } = format;

const loggerFormat = printf(({ level, message, timestamp, stack }) => {
    return `${ timestamp } - ${ level }: ${ stack || message }`;
});

export const logger = createLogger({
    format: combine(
        colorize(),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        errors({ stack: true }),
        loggerFormat
    ),
    transports: [
        new transports.Console()
    ]
});