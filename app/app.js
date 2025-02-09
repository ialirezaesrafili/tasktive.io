import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import envInstance from "../config/env.js";
import dbConnection from "../config/db.js";


async function application() {
    const app = express();
    const PORT = envInstance.port;
    const mongoDB = envInstance.mongoDev;

    try {
        await dbConnection(mongoDB);
    } catch (err) {
        console.error(`[APP] Failed to connect to MongoDB: ${err.message}`);
        process.exit(1);
    }

    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
    app.use(cors());
    app.use(bodyParser.json());
    app.use(cookieParser());

    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });

}


export default application;