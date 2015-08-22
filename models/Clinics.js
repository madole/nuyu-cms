var keystone = require('keystone');
var Types = keystone.Field.Types;

var Clinics = new keystone.List('Clinics', { label: 'Next Clinics', map: {name: 'date'}});


Clinics.add({
		date: {type: Types.Date, index: true},
		where: {type: Types.Select, options: "Kates Clinic, Annes Clinic, Tip Top Beauty, Curl up N Dye"}
});

Clinics.register();
