import { Song } from "../models/song.model.js"
import { ErrorFunction } from "../utils/errorFunc.js";

export const getAllSongs = async (req, res, next) => {
    try{
        const songs = await Song.find().sort({ createdAt: -1});

        return res.status(200).json({ songs });

    }catch(error){
        ErrorFunction(req, res, "getAllSongs", error);
    }
};

export const getFeaturedSongs = async (req, res, next) => {
    try {
		const songs = await Song.aggregate([
			{
				$sample: { size: 6 },
			},
			{
				$project: {
					_id: 1,
					title: 1,
					artist: 1,
					imageUrl: 1,
					audioUrl: 1,
				},
			},
		]);

		res.json(songs);
	} catch (error) {
		ErrorFunction(req, res, "getFeaturedSongs", error);
	}
};

export const getMadeForYouSongs = async (req, res, next) => {
    try {
		const songs = await Song.aggregate([
			{
				$sample: { size: 4 },
			},
			{
				$project: {
					_id: 1,
					title: 1,
					artist: 1,
					imageUrl: 1,
					audioUrl: 1,
				},
			},
		]);

		res.json(songs);
	} catch (error) {
		ErrorFunction(req, res, "getMadeForYouSongs", error);
	}
};

export const getTrendingSongs = async (req, res, next) => {
    try {
		const songs = await Song.aggregate([
			{
				$sample: { size: 4 },
			},
			{
				$project: {
					_id: 1,
					title: 1,
					artist: 1,
					imageUrl: 1,
					audioUrl: 1,
				},
			},
		]);

		res.json(songs);
	} catch (error) {
		ErrorFunction(req, res, "getTrendingSongs", error);
	}
};