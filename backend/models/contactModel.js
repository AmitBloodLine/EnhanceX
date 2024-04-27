const { Schema, model } = require('../dbconnection');

const mySchema = new Schema({
    fname: { type: String, require: true },
    lname: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    message: String,
    number:Number,
    role: { type: String, default: 'user' },
    createdAt: Date,
});

module.exports = model( 'contact', mySchema );