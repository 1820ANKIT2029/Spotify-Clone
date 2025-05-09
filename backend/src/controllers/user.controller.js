import { Message } from "../models/message.model.js";
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

export const getMessages = async (req, res, next)=> {
    try {
        const myId = req.auth.userId;
        const {userId} = req.params;

        const messages = await Message.find({
            $or: [
                { senderId: userId, receiverId: myId},
                {senderId: myId, receiverId: userId}
            ]
        }).sort({createdAt: 1 });

        return res.status(200).json(messages);

    } catch (error) {
        ErrorFunction(req, res, "getMessages", error);
    }
};