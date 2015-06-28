var keystone = require('keystone');
var Types = keystone.Field.Types;

var Home = new keystone.List('Home', {
	autokey: {from: 'name', path: 'key', unique: true}
});

Home.add({
	blurb1: {type: Types.Textarea, index: true},
	blurb2: {type: Types.Textarea, index: true},
	blurb3: {type: Types.Textarea, index: true}
});

Home.register();
