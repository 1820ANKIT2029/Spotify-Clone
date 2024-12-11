import { User } from "../models/user.model.js";
import { ErrorFunction } from "../utils/errorFunc.js";

export const getAllUsers = async (req, res, next) => {
    try{
        const currentUserId = req.auth.userId;
        const users = await User.find({clerkId: { $ne : currentUserId } });
        return res.status(200).json(users);
    }catch(error){
        ErrorFunction(req, res, "getAllUsers", error);
    }
};