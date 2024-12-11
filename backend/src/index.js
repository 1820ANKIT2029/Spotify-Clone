import express from "express";
import dotenv from "dotenv";
import { connectToMongoDB } from "./utils/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;


app.listen(PORT, ()=>{
    console.log(`server is listening at port ${PORT}`)
    connectToMongoDB();
})