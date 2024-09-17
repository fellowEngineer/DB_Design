import bcrypt from "bcryptjs"
import User from "../models/user.model.js";

const DB_SignUP = async (inp_Data) => {

    /// here the password should be encrypted using bcrypt library
    const encryptedPassword = await bcrypt.hash(inp_Data.password, 11);

    try {
        const user = await User.create({

            username: inp_Data.username, 
            email:inp_Data.email, 
            mobile_number: inp_Data.mobile_number, 
            password: encryptedPassword, 
            first_name: inp_Data.first_name, 
            last_name: inp_Data.last_name, 
            course_enrolled: inp_Data.course_enrolled, 
            stream_enrolled: inp_Data.stream_enrolled
            
        })

        return user;
        
    } catch (error) {
        console.log("DB:SignUp:ERR ==> ", error);
        process.exit(1);
        /// failed DB operation should exit with 1.
    }

}

export default DB_SignUP;