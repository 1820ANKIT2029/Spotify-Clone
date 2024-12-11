import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express'
import fileUpload from "express-fileupload";
import path from "path";

import { connectToMongoDB } from "./utils/db.js";

import AuthRouter from "./routes/auth.route.js";
import AdminRouter from "./routes/admin.route.js";
import AlbumRouter from "./routes/album.route.js";
import SongRouter from "./routes/song.routes.js";
import UserRouter from "./routes/user.route.js";
import StatsRouter from "./routes/stats.route.js";

dotenv.config();

const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // to parse req.body
app.use(clerkMiddleware()); // add auth object to req ==> req.auth
app.use(fileUpload({
        useTempFiles: true,
        tempFileDir: path.join(__dirname, "tmp"),
        createParentPath: true,
        limits: {
            fileSize: 10*1024*1024  // 10MB file size
        }
    })
);

app.use("/api/user", UserRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/song", SongRouter);
app.use("/api/admin", AdminRouter);
app.use("/api/album", AlbumRouter);
app.use("/api/stats", StatsRouter);

app.listen(PORT, ()=>{
    console.log(`server is listening at port ${PORT}`)
    connectToMongoDB();
})