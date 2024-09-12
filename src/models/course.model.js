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

    /// Course might not need this field
    // enrolled_user_reff:{
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // } 
    
},
{
    timestamps: true
});

CourseSchema.index({ course_name: 1 })


const Course = new Model("Course", CourseSchema);


export default Course;