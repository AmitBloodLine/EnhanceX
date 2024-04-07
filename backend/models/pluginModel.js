const { Schema, model } = require('../connection');

const mySchema = new Schema({
   title: String,
   description: String,
   image: String
});

module.exports = model( 'plugin', mySchema );