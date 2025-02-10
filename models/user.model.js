import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user',
    },
    isLoggedIn: {
        type: Boolean,
        default: false
    },
})


const UserModel = model('User', userSchema);

export default UserModel;