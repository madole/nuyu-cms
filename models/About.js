var keystone = require('keystone');
var Types = keystone.Field.Types;

var About = new keystone.List('About', { label: 'Nurse'});

About.add({
	name: {type: Types.Text, index: true},
	image: {type: Types.Text}
});

About.register();

var AboutText = new keystone.List('AboutText', {label: 'About Text'});

AboutText.add({
	name: {type: Types.Text, default: 'About Text'},
	aboutNuYu: {type: Types.Html, wysiwyg: true},
	aboutNurses: {type: Types.Html, wysiwyg: true}
});

AboutText.register();
