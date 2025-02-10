// application imports
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// config imports
import envInstance from "../config/env.js";
import dbConnection from "../config/db.js";
import AppRoutes from "./app.routes.js";


// main function
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

    app.get('/', (req, res) => {
        res.status(200).send({
            status: 'success',
            message: '[test] is alive!',
        })
    })
    app.use('/api', AppRoutes)
    app.listen(PORT, () => {
        console.log(`App listening on http://localhost:${PORT}`);
    });

}


export default application;