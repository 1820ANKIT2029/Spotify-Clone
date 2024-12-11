import { Router } from "express";
import { getAlbumById, getAllAlbums } from "../controllers/album.controller.js";

const AlbumRouter = Router();

AlbumRouter.get("/", getAllAlbums);
AlbumRouter.get("/:albumId", getAlbumById);

export default AlbumRouter;