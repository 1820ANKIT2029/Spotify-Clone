import { Schema, model } from "mongoose";

const AlbumSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    releaseYear: { 
        type: Number, 
        required: true 
    },
    songs: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song" 
    }],
}, { timestamps: true });

export const Album = model("Album", AlbumSchema);