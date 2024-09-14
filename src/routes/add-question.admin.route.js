import Router from "express";
import { getAddQuestion, postAddQuestion } from "../controllers/add-question.admin.controller.js"

const AddQuestion = Router();

AddQuestion.route('/')
.get(getAddQuestion)

.post(postAddQuestion)

.put((req, res) => {
    res.send("Admin/add-question: PUT request IS NOT ALLOWED.");
})

.delete((req, res) => {
        res.send("Admin/add-question: DELETE request IS NOT ALLOWED.");
})

.patch((req, res) => {
res.send("Admin/add-question: PATCH request IS NOT ALLOWED.");
})

.options((req, res) => {
    res.send("Admin/add-question: OPTIONS request IS NOT ALLOWED.");
})

.head((req, res) => {
    res.send("Admin/add-question: HEAD request IS NOT ALLOWED.");
});


export default AddQuestion;