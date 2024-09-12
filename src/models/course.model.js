import { Schema, Model } from "mongoose"



const CourseSchema = new Schema({

    course_name: {
        type: String,
        trim: true, // Removes leading and trailing whitespace
        required: true, // Ensures this field is always provided
        unique: true
    },

    course_code: {
        type: String,
        trim: true, // Removes leading and trailing whitespace
        required: true, // Ensures this field is always provided
        unique: true // Ensures each subject_code is unique
    },

    enrolled_user_reff:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    } 
    
});


const Course = new Model("Course", CourseSchema);


export default Course;