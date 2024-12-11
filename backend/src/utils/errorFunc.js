import dotenv from "dotenv";
dotenv.config();

export const ErrorFunction = (req, res, ErrorPlaceName, error) => {
    if(process.env.NODE_ENV == "development"){
        res.status(500).json({ message: `Error occur at ${ErrorPlaceName}`, error });
    }
    else{
        res.status(500).json({ message: `Internal Server Error at ${ErrorPlaceName}`});
    }  
};