import express, { Express, Request, Response } from "express";
import { createLogger, transports, format } from 'winston';
import expressWinston from 'express-winston';
import dotenv from 'dotenv';
import logger from './logger'; // Import the logger from the separate module

dotenv.config();

const port = process.env.PORT || 3000;

const app: Express = express();

app.use(expressWinston.logger({
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'logs/http.log' })
    ],
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    meta: false,
    msg: 'HTTP {{req.method}} {{req.url}}',
    expressFormat: true,
    colorize: false,
    ignoreRoute: function (req, res) { return false; }
}));

app.get('/', (req: Request, res: Response ) => {
    logger.info('Accessed the root endpoint');
    res.send('Express stop . + TypeScript Server.');
});

app.get('/info', (req: Request, res: Response ) => {
    logger.info('Accessed the info endpoint');
    res.send('This is the info endpoint');
});

app.get('/health', (req: Request, res: Response ) => {
    logger.info('Accessed the health endpoint');
    res.json({"ok": true});
});

app.listen(port, () => {
    logger.info(`Server is running at http://localhost:${port}`);
});
