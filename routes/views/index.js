var keystone = require('keystone');
var moment = require('moment');

var Home = keystone.list('Home');
var Post = keystone.list('Post');
var Surgeries = keystone.list('Surgeries');
var Products = keystone.list('Product');


function getTimeFromNow(date) {
	var then = moment(date);
	var now = moment();
	return then.from(now);
}

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// Get the data from the Home model
	view.on('init', function(next) {
		Home.model.findOne().exec(function (err, homeData) {
			locals.home = homeData;
			return next();
		})
	});

	view.on('init', function(next) {
		Post.model.findOne()
			.where('state', 'published')
			.sort('-publishedDate')
			.exec(function (err, data) {
							locals.news = data;
							locals.news.humanizedTime = getTimeFromNow(data.publishedDate);
							return next();
						});
	});

	view.on('init', function(next) {
		Surgeries.model.find()
			.sort('date')
			.limit(5)
			.exec(function (err, data) {
							if(err) {
								console.log(err);
								return next(err);
							}
							locals.surgeries = data.map(function (surgery) {
								var newSurgery = surgery;
								console.log(JSON.stringify(surgery));
								newSurgery.humanDate = moment(surgery.date).format('dddd DD MMMM YYYY');
								return newSurgery;
							});
							 
							return next();
						});
	});

	view.on('init', function(next) {
		Products.model.find()
			.sort('name')
			.limit(5)
			.exec(function(err, data) {
								if(err) {
									console.log(err);
									return next(err);
								}
								locals.products = data;
								return next();
								});
	});
	
	// Render the view
	view.render('index');

};
