import { Schema, Model } from "mongoose"


// Define possible user roles
const userRoles = ['default_user', 'premium_user', 'admin_user'];

const UserSchema = new Schema({

    username: {
        type: String, 
        trim: true,
        required: [true, 'Username is required'],
        unique: true,
        minlength: [5, 'Username must be at least 5 characters long']
    },

    email: {
        type: String, 
        trim: true,
        required: [true, 'Email is required'],
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
        verified: {
            type: Boolean,
            default: false
        }
    },

    mobile_number: {
        type: String,
        trim: true,
        required: [true, 'Mobile number is required'],
        unique: true,
        minlength: [10, 'Mobile number must be at least 10 characters long'],
        verified: {
            type: Boolean,
            default: false
        }
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long']
    },

    user_role: {
        type: String,
        enum: userRoles, // Restricts role values to those defined in userRoles
        default: 'default_user', // Default role if none is provided
        required: true
    },

    first_name: {
        type: String,
        trim: true,
        required: [true, 'First name is required'],
    },

    last_name: {
        type: String,
        trim: true,
        required: [true, 'Last name is required']
    },

    course_enrolled: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    }

},
{
    timestamps: true
})

UserSchema.index({ username: 1 });


const User = new Model("User", UserSchema);

export default User;
