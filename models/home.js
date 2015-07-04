var keystone = require('keystone');
var Types = keystone.Field.Types;

var Home = new keystone.List('Home', { label: 'Home Page'});

Home.add({
	name: {type: Types.Text, default: 'Home page'},
	mainBlurb: {type: Types.Html, wysiwyg:true}
});

Home.register();
