var keystone = require('keystone');
var About = keystone.list('About');
var AboutText = keystone.list('AboutText');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	//init locals
	locals.section = 'about';

	view.query('nurses', keystone.list('About').model.find());

	view.on('init', function(next) {
		AboutText.model.findOne().exec(function(err, data) {
			locals.about = data;
			return next();
		});
	});
	
	view.render('about');
};
