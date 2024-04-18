"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const winston_1 = require("winston");
const express_winston_1 = __importDefault(require("express-winston"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("./logger")); // Import the logger from the separate module
dotenv_1.default.config();
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_winston_1.default.logger({
    transports: [
        new winston_1.transports.Console(),
        new winston_1.transports.File({ filename: 'logs/http.log' })
    ],
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
    meta: false,
    msg: 'HTTP {{req.method}} {{req.url}}',
    expressFormat: true,
    colorize: false,
    ignoreRoute: function (req, res) { return false; }
}));
app.get('/', (req, res) => {
    logger_1.default.info('Accessed the root endpoint');
    res.send('Express stop . + TypeScript Server');
});
app.get('/info', (req, res) => {
    logger_1.default.info('Accessed the info endpoint');
    res.send('This is the info endpoint');
});
app.get('/health', (req, res) => {
    logger_1.default.info('Accessed the health endpoint');
    res.json({ "ok": true });
});
app.listen(port, () => {
    logger_1.default.info(`Server is running at http://localhost:${port}`);
});
