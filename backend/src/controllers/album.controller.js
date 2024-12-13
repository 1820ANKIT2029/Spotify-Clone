import { Album } from "../models/album.model.js";
import { ErrorFunction } from "../utils/errorFunc.js";

export const getAllAlbums = async (req, res, next) => {
    try{
        const albums = await Album.find();
        return res.status(200).json(albums);
    }catch(error){
        ErrorFunction(req, res, "getAllAlbums", error);
    }
};

export const getAlbumById = async (req, res, next) => {
    try{
        const { albumId } = req.params;
        const album = await Album.findById(albumId).populate("songs");

        if(!album){
            return res.status(404).json({ message: "Album Not Found"});
        }
        return res.status(200).json(album);
    }catch(error){
        ErrorFunction(req, res, "getAlbumById", error);
    }
};