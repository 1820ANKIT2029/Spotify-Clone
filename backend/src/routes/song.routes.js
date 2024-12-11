import { Router } from "express";
import { 
    getAllSongs, 
    getFeaturedSongs,
    getMadeForYouSongs, 
    getTrendingSongs 
} from "../controllers/song.controller.js";

const SongRouter = Router();

SongRouter.get("/", getAllSongs);
SongRouter.get("/featured", getFeaturedSongs);
SongRouter.get("/made-for-you", getMadeForYouSongs);
SongRouter.get("/trending", getTrendingSongs);

export default SongRouter;