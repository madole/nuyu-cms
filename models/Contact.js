var keystone = require('keystone');
var Types = keystone.Field.Types;

var Contact = new keystone.List('Contact', {label: 'Contact Details'});

Contact.add({
	name: {type: Types.Text, default: 'Contact Details'},
	email: {type: Types.Email},
	telephone: {type: Types.Text}
});

Contact.register();

