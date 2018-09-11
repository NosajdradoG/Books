/*const assert = require('assert');
const Book = require('../src/books');

describe('Test de validation', () => {
	it('Un titre doit etre requis', (done) => {
		const book1 = new Book({title:undefined});
		const validationResult = book1.validateSync();
		const {message} = validationResult.errors.title;
		assert(message==='Un titre est requis');
		done();
		});
	})*/