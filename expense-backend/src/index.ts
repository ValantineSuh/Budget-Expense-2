// Importing necessary modules
import express from 'express';

// Creating an instance of Express
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express, { Express, Request, Response } from "express";
import { createLogger, transports, format } from 'winston';
import expressWinston from 'express-winston';
import dotenv from 'dotenv';
import DailyRotateFile = require("winston-daily-rotate-file");
import logger from './logger';
import helmet from 'helmet'



dotenv.config();

const port = process.env.PORT || 3000;

const app: Express = express();


app.use(helmet());
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



// Define a route handler for the root endpoint '/'
app.get('/', (req: Request, res: Response ) => {
    logger.info('Accessed the root endpoint');
    res.send('Express stops . + TypeScript Server.');
});

app.get('/info', (req: Request, res: Response ) => {
    logger.info('Accessed the info endpoint');
    res.send('This is the info endpoints');
});

app.get('/health', (req: Request, res: Response ) => {
    logger.info('Accessed the health endpoint');
    res.json({"ok": true});
});

app.listen(port, () => {
    logger.info(`Server is running at http://localhost:${port}`);
});
