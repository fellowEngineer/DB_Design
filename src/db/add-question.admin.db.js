import Question from "../models/question.model.js";
import getObjectIdFromSubjectName from "../controllers/getObjectIdFromSubjectName.controller.js";
import getObjectIdFromStreamName from "../controllers/getObjectIdFromStreamName.controller.js";

const DB_AddQuesion = async (questionData) =>  {

    try {

        const subject_id = await getObjectIdFromSubjectName(questionData.subject_name);
        const stream_id = await getObjectIdFromStreamName(questionData.stream_name);


        const question = {
            question: questionData.question,
            options: new Map([
                ['A', 'Paris'],
                ['B', 'London'],
                ['C', 'Berlin'],
                ['D', 'Madrid']
            ]),
            answer_hint: questionData.answer_hint,
            answer: questionData.answer,
            subject_reff: subject_id,
            stream_reff: stream_id
        }

        const newQuestion = await Question.create(question);


        return newQuestion
        
    } catch (error) {
        
    }
}



export default DB_AddQuesion;