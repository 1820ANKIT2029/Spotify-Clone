import { connect } from 'mongoose';

export const connectToMongoDB = async ()=>{
    try{
        const conn = await connect(process.env.MONGODB_URI);
		console.log(`Connected to MongoDB ${conn.connection.host}`);

    } catch(error){
        console.log("Error connecting to MongoDB", error.message);
        process.exit(1); // 1 is failure, 0 is success
    }
};