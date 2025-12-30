import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { dbConnection } from "../database/dbConnection.js"
import reservationRouter from "../routes/reservationRoute.js"
import { errorMiddleware } from "../error/error.js"

const app = express()
dotenv.config()

app.use(cors({
    // origin: [process.env.FRONTEND_URL],
    origin: "https://furqanizgenius-mern-stack-restauran.vercel.app",
    methods: ["POST", "GET"],
    credentials: true,
}))

app.get("/", (req, res) => {
    res.status(200).send("Backend running on Vercel");
  });
  

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/v1/reservation', reservationRouter)

dbConnection()

app.use(errorMiddleware)
export default app;
