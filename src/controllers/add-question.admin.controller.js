const getAddQuestion = (req, res) => {
    res.Status(200)
    .json("A HTML Page Suppose to Render here");
}

import DB_AddQuesion from "../db/add-question.admin.db.js"
const postAddQuestion = (req, res) => {
    
    const {u_question, u_options_A, u_options_B, u_options_C, u_options_D, u_answer_hint, u_answer, u_subject, u_stream} = req.body;

    const question = {
        question: u_question,
        options: new Map([
            ['A', u_options_A],
            ['B', u_options_B],
            ['C', u_options_C],
            ['D', u_options_D]
        ]),
        answer_hint: u_answer_hint,
        answer: u_answer,
        subject_reff: u_subject,
        stream_reff: u_stream
    }

    DB_AddQuesion(question)
    .then((result) => {
        console.log(result);

    })
    .catch((error) => {

        console.log(error);
    })

}





export {
    getAddQuestion,
    postAddQuestion
}