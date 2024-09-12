import { User } from "../models/user.model.js";


const DB_SignUP = async (inp_Data) => {

    try {
        const newUser = new User(inp_Data);

        const savedUser = newUser.save();

        return savedUser;
        
    } catch (error) {
        
    }

}

export default DB_SignUP;