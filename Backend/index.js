import express from "express"
import dotevn from "dotenv"
dotevn.config();
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import googleRoute from "./routes/userRoutes.js"
import cors from "cors";

const PORT = process.env.PORT

const app = express();

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.VITE_URI,
    credentials: true,
  })
);

app.get("/", (req, res)=>{
    res.send(`Welcome to the server ${PORT}`)
})


app.use('/api/auth', googleRoute)

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})





















