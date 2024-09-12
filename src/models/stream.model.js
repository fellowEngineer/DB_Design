import { Schema, Model } from "mongoose"



const StreamtSchema = new Schema({

    stream_name: {
        type: String,
        trim: true, // Removes leading and trailing whitespace
        required: true // Ensures this field is always provided
    },

    stream_code: {
        type: String,
        trim: true, // Removes leading and trailing whitespace
        required: true, // Ensures this field is always provided
        unique: true // Ensures each subject_code is unique
    },

    course_ref: {
        type: Schema.Types.ObjectId,
        ref: 'Course', // Reference to the Stream model
        required: true // Ensures this field is always provided
    }
    
});


const Stream = new Model("Stream", StreamtSchema);


export default Stream;