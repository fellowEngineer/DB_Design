const getHome = (req, res) => {
    res.send("Home: GET request is successful.");
};

const postHome = (req, res) => {
    res.send("Home: POST request is successful.");
};



export {
    getHome,
    postHome
}