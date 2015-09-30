var keystone = require('keystone');
var Types = keystone.Field.Types;

var HomeColumnRightHeader = new keystone.List('HomeColumnRightHeader', { label: 'Home Column Right Header'});

HomeColumnRightHeader.add({
	name: {type: Types.Text, default: 'Latest News'}
});

HomeColumnRightHeader.register();
