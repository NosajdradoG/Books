const assert = require('assert');
const Book = require('../src/books');

// Lit dans la DB
describe('Test de read', () => {
	let book1;
	beforeEach( (done) => {
		book1 = new Book ({title:'Harry Potter'});
		book1.save().then( () => {
			done();
		})
	})

	// Recherche par titre
	it('Recherche de livre par son titre', (done) => {
		Book.find({title:'Harry Potter'}).then( (books) => {
			assert(books[0]._id.equals(book1._id));
			done();
		})
	});

	// Recherche par id
	it('Recherche de livre par son id', (done) => {
		Book.findOne({_id:book1._id}).then( (book) => {
			assert(book.title === book1.title);
			done();
		})
	});
})