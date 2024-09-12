import { Schema, Model } from "mongoose";


const QuestionSchema = new Schema({
    
    question: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    options: {
        type: Map,
        of: String,
        required: true
    },

    answer_hint: {
        type: String,
        required: false // Optional field
    },

    answer: {
        type: String,
        required: true,
        enum: ['A', 'B', 'C', 'D'] // Assuming the answer will be one of these options
    },

    marks: {
        type: Number,
        required: true,
        min: 0 // Assuming marks cannot be negative
    },

    subject_reff: {
        type: Schema.Types.ObjectId,
        ref: 'Subject', // Assuming there is a Subject model
        required: true
    },


    /// this one might not needed
    stream_reff: {
        type: Schema.Types.ObjectId,
        ref: 'Stream', // Assuming there is a Stream model
        required: true
    }
},
{
    timestamps: true
});



const Question = new Model("Question", QuestionSchema);


export default Question;