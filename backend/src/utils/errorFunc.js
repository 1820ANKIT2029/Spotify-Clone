import dotenv from "dotenv";
dotenv.config();

export const ErrorFunction = (req, res, ErrorPlaceName, error) => {
    if(process.env.NODE_ENV == "development"){
        return res.status(500).json({ message: `Error occur at ${ErrorPlaceName}`, error });
    }
    else{
        return res.status(500).json({ message: `Internal Server Error at ${ErrorPlaceName}`});
    }  
};