import express, { json } from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors";
import ProjectRoutes from "./routes/Project.routes.js"
dotenv.config()

const port = process.env.PORT
const control = process.env.CONTROL_ROOM

const app = express();

app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}))

app.use("/project", ProjectRoutes)


mongoose.connect(control).then(() => {
    console.log("Connected to ControlRoom")
    app.listen(port, () => {
        console.log(`Listening to port: ${port}`)
    })
}).catch(() => {
    console.log("An error occured while connecting to MongoDB");
})

app.get("/", (req, res) => {
    res.send("API WORKING")
})
