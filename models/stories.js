var mongoose = require('mongoose');

var storySchema = mongoose.Schema({
	title:String,
	body:String
});

var Story = mongoose.model('Story', storySchema);

module.exports = Story;
