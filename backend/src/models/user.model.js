import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    clerkId: {
        type: String,
        required: true,
        unique: true
    },   
}, {timestamps: true});

export const User = model("User", UserSchema);