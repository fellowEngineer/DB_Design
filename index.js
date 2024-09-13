import express, { urlencoded } from "express";



const App = express();


App.use(express.json());
App.use(express.urlencoded({ extended: true }));


/// SignUp Route
import { SignUp } from "./src/routes/signup.route.js"
App.use("/signup", SignUp);


// /// Login Route
// import { Login } from "./src/routes/login.route.js"
// App.use("/login", Login);





const PORT = process.env.PORT;
App.listen(PORT, () => {
    console.log(`Server is Running on${PORT}.`);
    
})