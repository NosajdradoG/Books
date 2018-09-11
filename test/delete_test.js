const assert = require('assert');
const Book = require('../src/books');


// Delete
describe('Test de delete', () => {
	let book1;
	beforeEach( (done) => {
		book1 = new Book ({title:'Odysée'});
		book1.save().then( () => {
			done();
		})
	})
	function assertDelete(promise,done){
		promise.then( () => {
			Book.findOne({title:'Odysée'}).then( (book) => {
				assert(book===null);
				done();
			})
		})
	}

	// Par instance
	it('Suppression de livre par instance', (done) => {
		assertDelete(book1.delete({title:'Odysée'}),done);
	});

	// Par model
	it('Suppression de livre par model', (done) => {
		assertDelete(Book.deleteOne({title:'Odysée'}),done);
	});

	// Recherche par titre et delete
	it('Recherche un livre par son titre et delete (findOneAndRemove)', (done) => {
		assertDelete(Book.findOneAndDelete({title:'Odysée'}),done);
	});

	// Recherche par id et delete
	it('Recherche un livre par son id et delete (findByIdAndRemove)', (done) => {
		assertDelete(Book.findByIdAndDelete(book1._id),done);
	});

	// Recherche par totalPages et delete
	it('Recherche un livre par son totalPages et delete (findAndRemove)', (done) => {
		assertDelete(Book.findOneAndDelete(book1.totalPages===3),done);
	});
	
})