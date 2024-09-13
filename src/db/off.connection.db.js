import mongoose from "mongoose";

export const offConncetion = async () => {
    try {
        await mongoose.disconnect();
        console.log("Mongoose connection disconnected\n");
        
    } catch (error) {
        console.log("Off.Connection Error : \n", error);
        process.exit("OFF_CONNECTION_ERR");
    }
}