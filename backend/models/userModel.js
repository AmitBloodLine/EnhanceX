const { Schema, model } = require('../dbconnection');

const mySchema = new Schema({
    username: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: String,
    role: { type: String, default: 'user' },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});

module.exports = model( 'user', mySchema );