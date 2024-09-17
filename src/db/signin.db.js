import bcrypt from "bcryptjs";
import User from "../models/user.model.js"

const DB_SignIn = async (userData) => {

    try {

        const user = await User.findOne({
            username: userData.username
        })
        
        if (!user) {
            throw new Error('User not found.');
        }



        const isPasswordMatched = await bcrypt.compare(userData.password, user.password)
        
        return isPasswordMatched ? user : null;
            
    } catch (error) {
        console.log("DB:SignIn:ERR ==> ", error);
        process.exit(1);
        /// failed DB operation should exit with 1.
    }    
}



export default DB_SignIn;