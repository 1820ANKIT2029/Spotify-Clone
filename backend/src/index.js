import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express'
import fileUpload from "express-fileupload";
import path from "path";
import cron from "node-cron";
import fs from "fs";

import { createServer } from "http";
import { initializeSocket } from "./utils/socket.js";

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

const httpServer = createServer(app);
initializeSocket(httpServer);

app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true,
    }
));

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

// cron jobs
const tempDir = path.join(process.cwd(), "tmp");
cron.schedule("0 * * * *", () => {
	if (fs.existsSync(tempDir)) {
		fs.readdir(tempDir, (err, files) => {
			if (err) {
				console.log("error", err);
				return;
			}
			for (const file of files) {
				fs.unlink(path.join(tempDir, file), (err) => {});
			}
		});
	}
});

app.use("/api/users", UserRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/songs", SongRouter);
app.use("/api/admin", AdminRouter);
app.use("/api/albums", AlbumRouter);
app.use("/api/stats", StatsRouter);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
	});
}

httpServer.listen(PORT, ()=>{
    console.log(`server is listening at port ${PORT}`)
    connectToMongoDB();
})