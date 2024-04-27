const { Schema, model } = require('../dbconnection');

const mySchema = new Schema({
   username: String,
    email: { type: String, require: true, unique: true },
    avatar: {type : String, default: 'avatar_placeholder.png'},
    message: String,
    
createdAt: Date,
});

module.exports = model( 'feedback', mySchema );