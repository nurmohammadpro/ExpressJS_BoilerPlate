import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import cookieParser from "cookie-parser";
import * as path from 'path';
import router from "./routes/api.js";
import { MONGODB_CONNECTION, PORT, MAX_JSON_SIZE, URL_ECONDED, JWT_SECRRET, JWT_EXPIRATION_TIME, REQUEST_LIMIT_TIME, REQUEST_LIMIT_NUMBERR, WEB_CACHE } from "./app/config/config.js";

const app = express();

//global appalication middlewares
app.use(cors());
app.use(express.json({limit: rateLimit}));
app.use(express.urlencoded({extended: URL_ECONDED}));
app.use(hpp());
app.use(helmet());
app.use(cookieParser());


//Rate Limiter
const rateLimiter = rateLimit({windowMs: REQUEST_LIMIT_TIME, max: REQUEST_LIMIT_NUMBERR});
app.use(rateLimiter);

//Web Caching
app.set('etag', WEB_CACHE);

/*
    MongoDB Connection is pending
*/

//Set API Routes
app.use("/api", router);

//Set application storage
app.use(express.static('storage'));




//Running the Express backend project
app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});
