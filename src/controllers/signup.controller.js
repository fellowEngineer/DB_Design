const getSignUp = (req, res) => {
    res.Status(200)
    .json("A HTML Page Suppose to Render here");
}


import DB_SignUP from "../db/signup.db.js"
const postSignUp = (req, res) => {


    ///this is the place where i should check for allthe data present, validation, etc
    /// then forward to create user into db

    const { u_username, u_email, u_mobile_number, u_password, u_confirm_password, u_first_name, u_last_name, u_course_enrolled, u_stream_enrolled } = req.body; 


    /// built something to validete these fields.
    // Validate username (only lowercase letters, numbers, no special characters, and minimum 5 characters long)
    // const usernameRegex = /^[a-z0-9]{5,}$/;
    // if (!username || typeof username !== 'string' || !usernameRegex.test(username)) {
    //     errors.push('Username must be at least 5 characters long, and contain only lowercase letters and numbers.');
    // }

    if(u_password !== u_confirm_password)
    {
        res.Status(422)
        .json(
            {
                massage: "InvalidArgumentException.",
                u_password
            }
        )
    }



    const UserData = {
        username: u_username, 
        email: u_email, 
        mobile_number: u_mobile_number, 
        password:u_password, 
        first_name: u_first_name, 
        last_name: u_last_name, 
        course_enrolled: u_course_enrolled, 
        stream_enrolled: u_stream_enrolled
    }


    DB_SignUP(UserData)
    .then((result) => {
        console.log("SignUp:SUC: User Registered: ", result);
        

        res.Status(200)
        .json({
            msg: "SignUp:SUC: User Registered.",
            result
        });

    })
    .catch((error) => {
        console.log("SignUp:ERR ==> ", error);



        res.Status(502)
        .json({
            msg: "SignUp:ERR",
            error
        });
    })
    
}


export {
    getSignUp,
    postSignUp
}