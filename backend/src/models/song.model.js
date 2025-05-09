import { Schema, model } from "mongoose";

const SongSchema = new Schema({
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
    audioUrl: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    albumId: {
        type: Schema.Types.ObjectId,
        ref: "Album",
        required: false
    }
}, {timestamps: true});

export const Song = model("Song", SongSchema);