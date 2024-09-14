const getAddQuestion = (req, res) => {
    res.Status(200)
    .json("A HTML Page Suppose to Render here");
}

import DB_AddQuesion from "../db/add-question.admin.db.js"
const postAddQuestion = (req, res) => {
    
    const {u_question, u_options, u_answer_hint, u_answer, u_subject, u_stream} = req.body;

    const question = 'something will be created using above things'

    DB_AddQuesion(question)
    .then((result) => {})
    .catch((error) => {})

}





export {
    getAddQuestion,
    postAddQuestion
}