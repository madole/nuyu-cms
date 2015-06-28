var keystone = require('keystone');
var Home  = keystone.list('Home');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	
	// Get the data from the Home model
	view.on('init', function(next) {
		Home.model.findOne().exec(function(err, homeData) {
			locals.home = homeData;
			return next();
		})
	});
	
	// Render the view
	view.render('index');
	
};
