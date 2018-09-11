const mongoose = require('mongoose');


// Création d'un schema
const Schema = mongoose.Schema;

const BookSchema = require('./books').schema;

const UserSchema = new Schema({
	name:String,
	books:[BookSchema]
});


// Création du model
const User = mongoose.model('user',UserSchema);


// Export du model
module.exports = User;