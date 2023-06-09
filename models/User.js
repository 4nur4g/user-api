const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'Please provide first name'],
        trim: true,
        minlength: 3,
        maxlength: 50,
    },
    last_name: {
        type: String,
        required: [true, 'Please provide last name'],
        minlength: 3,
        trim: true,
        maxlength: 50,},
    email: {
        type: String,
        required: [true, 'Please provide email'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],
        unique: true,
    },
    __v: { type: Number, select: false}
});

module.exports = mongoose.model('User', UserSchema);
