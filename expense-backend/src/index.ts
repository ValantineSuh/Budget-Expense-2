// Importing 'express' module and 'dotenv' module
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv"

dotenv.config();

const port = process.env.PORT || 3000;

const app: Express = express();

// Define a route handler for the root endpoint '/'
app.get('/', (req: Request, res: Response ) => {
    res.send('Express stop + TypeScript Server');
});

// Define a route handler for a new endpoint '/info'
app.get('/info', (req: Request, res: Response ) => {
    res.send('This is the info endpoint');
});

// endpoint respond for json 
app.get('/health', (req: Request, res: Response ) => {
    res.json({"ok": true});
});

// Start the Express server and listen on the defined port
app.listen(port, () => { 
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
