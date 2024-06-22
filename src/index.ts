import express, { Request, Response } from "express";
import { AppDataSource } from "./config/database";
import router from "./routes/index.routes";
import cookieParser from 'cookie-parser'
import cors from 'cors'


// import express and make app instance of express
const app = express();

//load config from env file
require('dotenv').config();

const PORT = process.env.PORT ?? 4000;

// middleware 
app.use(express.json());
app.use(cookieParser())

AppDataSource.initialize()
    .then(() => {
        console.log("Database ka connection successfully...")

        app.use(
            cors({
                origin: "http://localhost:5173",
                credentials: true,
            })
        )

        // define routes and mount
        app.use('/api/v1', router)

        // app listining at port
        app.listen(PORT, () => {
            console.log(`Server Started at ${PORT}`)
        })

    })
    .catch((err) => {
        console.log("Error while Connecting Database...", err);
    })



