const getAdmin = (req, res) => {
    res.Status(200)
    .json("A HTML Page Suppose to Render here");
}


const postAdmin = (req, res) => {
    /// here based on response 
    /// admin will redirect to add-question, add-stream, add-subject or add course etc
    
}




export {
    getAdmin,
    postAdmin
}