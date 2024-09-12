import { Schema, Model } from "mongoose"



const SubjectSchema = new Schema({

    subject_name: {
        type: String,
        trim: true, // Removes leading and trailing whitespace
        required: true, // Ensures this field is always provided
        unique: true
    },

    subject_code: {
        type: String,
        trim: true, // Removes leading and trailing whitespace
        required: true, // Ensures this field is always provided
        unique: true // Ensures each subject_code is unique
    },

    stream_ref: {
        type: Schema.Types.ObjectId,
        ref: 'Stream', // Reference to the Stream model
        required: true // Ensures this field is always provided
    }
    
});


SubjectSchema.index({ subject_name: 1 });

const Subject = new Model("Subject", SubjectSchema);


export default Subject;