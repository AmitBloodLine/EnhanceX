const { Schema, model } = require('../connection');

const mySchema = new Schema({
    username: String,
    email: { type: String, }
    
 });

 module.exports = model( 'manage', mySchema );