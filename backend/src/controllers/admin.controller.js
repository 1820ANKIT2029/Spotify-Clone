import { Album } from "../models/album.model.js";
import { Song } from "../models/song.model.js";
import cloudinary from "../utils/cloudinary.js";
import { ErrorFunction } from "../utils/errorFunc.js";


const uploadToClodinary = async (file) => {
    try{
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            resource_type: "auto",
        })

        return result.secure_url;
    }catch(error){
        throw new Error("Error uploading to cloudinary");
    }
};

export const createSong = async (req, res, next) => {
    
    try {
        if(!req.files || !req.files.audioFile || !req.files.imageFile){
            return req.status(400).json({ message: "Please upload all files"});
        }

        const { title, artist, albumId, duration } = req.body;
        const audioFile = req.files.audioFile;
        const imageFile = req.files.imageFile;

        const audioUrl = await uploadToClodinary(audioFile);
        const imageUrl = await uploadToClodinary(imageFile);

        const song = new Song({
            title,
            artist,
            audioUrl,
            imageUrl,
            duration,
            albumId: albumId || null
        })

        await song.save();

        if(albumId){
            await Album.findByIdAndUpdate(albumId, {
                $push: {songs: song._id},
            });
        }

        res.status(201).json(song);

    } catch (error) {
        console.log(error);
        ErrorFunction(req, res, "Creating Song", error);
    }
};

export const deleteSong = async (req, res, next) => {
    try{
        const { id } = req.params;

        const song = await Song.findById(id);

        if(song.albumId){
            await Album.findByIdAndUpdate(song.albumId, {
                $pull: {songs: song._id},
            })
        }

        await Song.findByIdAndDelete(id);

        res.status(200).json({ message: "song deleted successfully" });
    }catch(error){
        ErrorFunction(req, res, "deleting Song", error);
    }
};

export const createAlbum = async (req, res, next) => {
    try{
        const { title, artist, releaseYear } = req.body;
        const { imageFile } = req.files;

        const imageUrl = await uploadToClodinary(imageFile);

        const album = new Album({
            title,
            artist,
            imageUrl,
            releaseYear
        });

        await album.save();

        return res.status(201).json(album);
    }catch(error){
        ErrorFunction(req, res, "create album", error);
    }
};

export const deleteAlbum = async (req, res, next) => {
    try {
        const { id } = req.params;

        await Song.deleteMany({albumId: id});
        await Album.findByIdAndDelete(id);

        return res.status(200).json({ message : "Album delete Successfully" });
    } catch (error) {
        ErrorFunction(req, res, "delete album", error);
    }
};

export const checkAdmin = async (req, res, next) => {
    return res.status(200).json({ admin: true });
};