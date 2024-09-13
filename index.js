import express, { urlencoded } from "express";



const App = express();


App.use(express.json());
App.use(express.urlencoded({ extended: true }));


/// SignUp Route
import { SignUp } from "./src/routes/signup.route.js"
App.use("/signup", SignUp);


/// SignIn Route
import { SignIn } from "./src/routes/signin.route.js"
App.use("/signin", SignIn);

/// Admin Route
import { Admin } from "./src/routes/admin.route.js"
App.use("/admin", Admin);



const PORT = process.env.PORT;
App.listen(PORT, () => {
    console.log(`Server is Running on${PORT}.`);
    
})