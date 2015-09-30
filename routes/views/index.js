var keystone = require('keystone');
var moment = require('moment');

var Home = keystone.list('Home');
var Post = keystone.list('Post');
var Clinics = keystone.list('Clinics');
var Products = keystone.list('Product');
var Testimonials = keystone.list('Testimonials');
var Contact = keystone.list('Contact');
var RightHeader = keystone.list('HomeColumnRightHeader');


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
		Clinics.model.find()
			.sort('date')
			.limit(5)
			.exec(function (err, data) {
							if(err) {
								console.log(err);
								return next(err);
							}
								 	
							locals.clinics = data.filter(function(clinic) {
								if(clinic.date >= new Date()) { 
									return true; 
								}
							}).map(function (clinic) {
								var newClinic = clinic;
								newClinic.humanDate = moment(clinic.date).format('dddd DD MMMM YYYY');
								return newClinic;
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


	view.on('init', function(next) {
		Testimonials.model.findOne()
			.limit(-1)
			.exec(function(err, data) {
							if(err) {
								console.log(err);
								return next(err);
							}
							locals.testimonial = data;
							return next();
						});
	});
	
	view.on('init', function(next) {
		Contact.model.findOne()
			.limit(-1)
			.where('name', 'Kate McDowell')
			.exec(function(err, data) {
								 if(err) {
									 console.log(err);
									 return next(err);
								 }
								 locals.contact = data;
								 return next();
								});
	});	

	view.on('init', function(next) {
		RightHeader.model.findOne()
			.limit(-1)
			.exec(
				function(err, data) {
					if(err) {
					 console.log(err);
					 return next(err);
					}

					locals.rightHeader = data ? data.name : 'Latest News';
					return next();
				});
	});
	
	// Render the view
	view.render('index');

};
