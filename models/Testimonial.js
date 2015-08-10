var keystone = require('keystone');
var Types = keystone.Field.Types;

var Testimonials = new keystone.List('Testimonials', {label: 'Testimonials'});

Testimonials.add({
	text: {type: Types.Textarea, index: true}
});

Testimonials.register();

