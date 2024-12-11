import { User } from "../models/user.model.js";
import { ErrorFunction } from "../utils/errorFunc.js";

export const AuthCallback = async (req, res, next) => {
    const { id, firstName, lastName, imageUrl } = req.body;

    try{
        const user = await User.findOne({clerkId: id});

        if(!user){
            await User.create({
                clerkId: id,
                fullName: `${firstName} ${lastName}`,
                imageUrl: imageUrl
            });
        }

        res.status(200).json({ success: true});

    }catch (error){
        ErrorFunction(req, res, "callback auth", error);
    }
};