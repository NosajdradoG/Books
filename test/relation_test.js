const assert = require('assert');
const User = require('../src/users');


// Création d'un livre
describe('Test de relation', () => {
	it('Test la taille de la liste de livre dun user', (done) => {
		const user1 = new User({
			name:'Jason',
			books:[{title:'Harry Potter'},{title:'Percy Jackson'}]
		})
		user1.save().then( () => User.findOne({name:'Jason'})
		.then( (user) => {
			assert(user.books.length==2);
			done();
			})
		)
	});
})