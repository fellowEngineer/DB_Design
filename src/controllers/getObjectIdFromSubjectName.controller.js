import Subject from "../models/subject.model.js";

const getObjectIdFromSubject = async (subjectName) => {
    try {
        
        const subject = await Subject.findOne({subject_name: subjectName})

        if(!subject)
        {
            throw new Error("GOIF_SUBJECT:CONTROLLER:ERR.");
        }

        return subject._id;

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default getObjectIdFromSubject;