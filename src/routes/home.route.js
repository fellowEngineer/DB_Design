import Router from "express";
import { getHome, postHome } from "../controllers/home.controller.js";

const Home = Router();

Home.route('/')
.get(getHome)
.post(postHome)
.put((req, res) => {
    res.send("Home: PUT request IS NOT ALLOWED.");
})

.delete((req, res) => {
    res.send("Home: DELETE request IS NOT ALLOWED.");
})

.patch((req, res) => {
    res.send("Home: PATCH request IS NOT ALLOWED.");
})

.options((req, res) => {
    res.send("Home: OPTIONS request IS NOT ALLOWED.");
})

.head((req, res) => {
    res.send("Home: HEAD request IS NOT ALLOWED.");
});


export default Home;
