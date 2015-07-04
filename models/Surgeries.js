var keystone = require('keystone');
var Types = keystone.Field.Types;

var Surgeries = new keystone.List('Surgeries', { label: 'Next Surgeries', map: {name: 'date'}});


Surgeries.add({
		date: {type: Types.Date, index: true},
		where: {type: Types.Select, options: "Kates Surgery, Annes Surgery, Tip Top Beauty, Curl up N Dye"}
});

//PostCategory.relationship({ ref: 'Post', path: 'categories' });
Surgeries.register();
