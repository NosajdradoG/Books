const mongoose = require('mongoose');


// Création d'un schema
const Schema = mongoose.Schema;

const BookSchema = new Schema({
	title:{type:String, required:[true,'Un titre est requis']},
	totalPages:{type:Number,default:0}
});


// Création du model
const Book = mongoose.model('book',BookSchema);


// Export du model
module.exports = Book;