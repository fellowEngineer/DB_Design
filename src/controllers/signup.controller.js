const getSignUp = (req, res) => {
    res.Status(2000)
    .json("A HTML Page Suppose to Render here");
}


import DB_SignUP from "../db/signup.db.js"
const postSignUp = (req, res) => {
    ///this is the place where i should check for allthe data present, validation, etc
    /// then forward to create user into db



    DB_SignUP()
    .then( (reslut) => {} )
    .catch( (error) => {} )
    
}


export {
    getSignUp,
    postSignUp
}