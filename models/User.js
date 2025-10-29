const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nationalCode: {
        type: String,
        unique: true,
        match: /^\d{10}$/,
        sparse: true
    },
    fullName: {
        type: String,
        maxlength: 32
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    birthday: {
        type: Date,
        default: null
    },
    permission: {
        type: String,
        enum: ['user', 'admin', 'teacher'],
        default: 'user'
    },
    lastLogin: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model('User', UserSchema);