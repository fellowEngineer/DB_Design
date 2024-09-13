import mongoose from "mongoose";


export const onConnection = async () => {
    
    try {
        
        await mongoose.connect(process.env.DB_URI + "DB_Design", {});

        mongoose.connection.on('connected', () => {
            console.log('DB connection open');
        });

        mongoose.connection.on('error', (err) => {
            console.error('DB connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('DB connection disconnected');
        });
        return true;

    } catch (error) {
        console.log("On.Connection Error : \n", error);
        process.exit("ON_CONNECTION_ERR");
        return false;
    }

}