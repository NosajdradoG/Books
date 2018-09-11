const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


// Connexion
before( (done) => {
mongoose.connect('mongodb://localhost/books_test',{
	useNewUrlParser: true
});

mongoose.connection
	.once('open',() => 
	{
	console.log('Connexion établie'); done()
	})
	.on('error',(error) => {
		console.warn('Erreur durant la connexion',error)
	});
})


// Clear la DB
beforeEach ('Supprime les anciens livres', (done) => {
	const {books} = mongoose.connection.collections;
	books.drop( () => {
		done();
	})
})