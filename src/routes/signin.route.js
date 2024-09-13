import Router from "express";
import { getSignIn, postSignIn } from "../controllers/signin.controller.js";

const SignIn = Router();

// Define the routes for SignIn
SignIn.route("/")
.get(getSignIn)  
.post(postSignIn) 

// Define responses for other HTTP methods not allowed
.put((req, res) => {
    res.send("SignIn: PUT request IS NOT ALLOWED.");
})

.delete((req, res) => {
    res.send("SignIn: DELETE request IS NOT ALLOWED.");
})

.patch((req, res) => {
    res.send("SignIn: PATCH request IS NOT ALLOWED.");
})

.options((req, res) => {
    res.send("SignIn: OPTIONS request IS NOT ALLOWED.");
})

.head((req, res) => {
    res.send("SignIn: HEAD request IS NOT ALLOWED.");
});

export default SignIn;