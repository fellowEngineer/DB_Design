const getSignUp = (req, res) => {
    res.Status(200)
    .json("A HTML Page Suppose to Render here");
}


import DB_SignUP from "../db/signup.db.js"
const postSignUp = (req, res) => {


    ///this is the place where i should check for allthe data present, validation, etc
    /// then forward to create user into db

    const { username, email, mobile_number, password, first_name, last_name, course_enrolled, stream_enrolled } = req.body; 


    /// built something to validete these fields.
    // Validate username (only lowercase letters, numbers, no special characters, and minimum 5 characters long)
    // const usernameRegex = /^[a-z0-9]{5,}$/;
    // if (!username || typeof username !== 'string' || !usernameRegex.test(username)) {
    //     errors.push('Username must be at least 5 characters long, and contain only lowercase letters and numbers.');
    // }



    const UserData = {
        username: username, 
        email: email, 
        mobile_number: mobile_number, 
        password: password, 
        first_name: first_name, 
        last_name: last_name, 
        course_enrolled: course_enrolled, 
        stream_enrolled: stream_enrolled
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