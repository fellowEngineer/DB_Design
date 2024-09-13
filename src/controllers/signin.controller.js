const getSignIn = (req, res) => {
    res.Status(2000)
    .json("A HTML Page Suppose to Render here");
}


import DB_SignIn from "../db/signin.db.js"
const postSignIn = (req, res) => {

    const { u_username, u_email, u_password } =  req.body;

    const userData = {
        username: u_username,
        email: u_email,
        password: u_password
    }


    DB_SignIn(userData)
    .then( (user) => {
        console.log("SignIn:SUC: User Logged In.", user);
        

        res.Status(200)
        .json({
            msg: "SignIn:SUC: User Logged In.",
            user
        });
    })
    .catch( (error) => {
        console.log("SignIn:ERR ==> ", error);



        res.Status(502)
        .json({
            msg: "SignIn:ERR",
            error
        });
    })

}





export {
    getSignIn,
    postSignIn
}
