var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product', {label: 'Product'});

Product.add({
	name: {type: Types.Text, required: true, index: true},
	image: {type: Types.CloudinaryImage},
	description: {type: Types.Html, wysiwyg: true}
});

Product.register();
