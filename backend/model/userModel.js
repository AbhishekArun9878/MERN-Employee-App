const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    role: { type: String, default: 'user' } 
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;