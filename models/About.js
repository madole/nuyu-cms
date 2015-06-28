var keystone = require('keystone');
var Types = keystone.Field.Types;

var About = new keystone.List('About', { label: 'Nurse'});

About.add({
	name: {type: Types.Text, index: true},
	image: {type: Types.Text},
	description: {type: Types.Textarea}
});

About.register();
