const assert = require('assert');
const Book = require('../src/books');


// Mis a jour de la DB
describe('Test de update', () => {
	let book1;
	let newTitle = 'Game of Thrones';
	beforeEach( (done) => {
		book1 = new Book ({title:'Moby Dick'});
		book1.save().then( () => {
			done();
		})
	})

	// Changement de titre
	function assertTitle(promise,done) {
		promise.then( () => {
			Book.find({}).then( (books) => {
				assert(books[0].title===newTitle);
				done();
			})
		})
	}

	// Par instance
	it('Update depuis une instance', (done) => {
		book1.set('title',newTitle);
		assertTitle(book1.save(),done)
	})

	// Depuis le model
	it('Update depuis le model', (done) => {
		assertTitle(Book.findOneAndUpdate({title:'Moby Dick'},{title:newTitle}),done);
	})

	// Recherche un livre par titre et update
	it('Recherche un livre par son titre et update (findOneAndUpdate)', (done) => {
		assertTitle(Book.findOneAndUpdate({title:'Moby Dick'},{title:newTitle}),done)
	})

	// Recherche un livre par id et update
	it('Recherche un livre par son id et update (findByIdAndUpdate)', (done) => {
		assertTitle(Book.findByIdAndUpdate(book1._id,{title:newTitle}),done);
	})
	// Recherche un livre et inc son nbr de pages
	it('Recherche un livre et incrémente son nbr de pages', (done) => {
		Book.updateOne({title:'Moby Dick'},{$inc : {totalPages: 3}})
		.then( () => Book.findOne({title:'Moby Dick'}))
		.then( (book) => {
			assert(book.totalPages===3);
			done();
		})
	})
})