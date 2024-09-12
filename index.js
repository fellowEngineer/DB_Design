import express, { urlencoded } from "express";



const App = express();


App.use(express.urlencoded({extended: true}));
App.use(express.json());











const PORT = process.env.PORT;
App.listen(PORT, () => {
    console.log(`Server is Running on${PORT}.`);
    
})