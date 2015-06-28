var keystone = require('keystone');
var About = keystone.list('About');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	//init locals
	locals.section = 'about';

	//// Get the data from the about model
	//view.on('init', function(next) {
	//	About.model.find().exec(function(err, data) {
	//		console.log(data);
	//		locals.about = data;
	//		return next();
	//	})
	//});
	view.query('nurses', keystone.list('About').model.find());

	view.render('about');
};
