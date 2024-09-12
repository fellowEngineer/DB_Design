import Router from "express";
import  { getSignUp, postSignUp } from "../controllers/signup.controller.js"

const SignUp = Router();


SignUp.route("/")
.get(getSignUp)

.post(postSignUp)

.put((req, res) => {
    res.send("SignUp:PUT request IS NOT ALLOWED.");
})

.delete((req, res) => {
    res.send("SignUp:DELETE request IS NOT ALLOWED.");
})

.patch((req, res) => {
    res.send("SignUp:PATCH request IS NOT ALLOWED.");
})

.options((req, res) => {
    res.send("SignUp:OPTIONS request IS NOT ALLOWED.");
})

.head((req, res) => {
    res.send("SignUp:HEAD request IS NOT ALLOWED.");
});

export default SignUp;