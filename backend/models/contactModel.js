const { Schema, model } = require('../connection');

const mySchema = new Schema({
    fname: { type: String, require: true },
    lname: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    avatar: {type : String, default: 'avatar_placeholder.png'},
    message: String,
    number:Number,
    role: { type: String, default: 'user' },
    createdAt: Date,
});

module.exports = model( 'contact', mySchema );