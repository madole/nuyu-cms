var keystone = require('keystone');
var Types = keystone.Field.Types;

var Home = new keystone.List('Home', { label: 'Home Page'});

Home.add({
	name: {type: Types.Text, default: 'Home page'},
	blurb1: {type: Types.Textarea, index: true},
	blurb2: {type: Types.Textarea, index: true},
	blurb3: {type: Types.Textarea, index: true}
});

Home.register();
