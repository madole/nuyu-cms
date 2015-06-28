var keystone = require('keystone');
var About = keystone.list('About');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	//init locals
	locals.section = 'about';

	view.query('nurses', keystone.list('About').model.find());

	view.render('about');
};
