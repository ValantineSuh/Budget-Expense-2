"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const winston_1 = require("winston");
const express_winston_1 = __importDefault(require("express-winston"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const logger = (0, winston_1.createLogger)({
    transports: [
        new winston_1.transports.Console(),
        new winston_1.transports.File({ filename: 'combined.log' })
    ],
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
    level: 'info' // Set log level
});
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_winston_1.default.logger({
    transports: [
        new winston_1.transports.Console(),
        new winston_1.transports.File({ filename: 'http.log' })
    ],
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
    meta: false,
    msg: 'HTTP {{req.method}} {{req.url}}',
    expressFormat: true,
    colorize: false,
    ignoreRoute: function (req, res) { return false; }
}));
app.get('/', (req, res) => {
    res.send('Express stop . + TypeScript Server');
});
app.get('/info', (req, res) => {
    res.send('This is the info endpoint');
});
app.get('/health', (req, res) => {
    res.json({ "ok": true });
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
