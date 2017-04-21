var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Story = require('./stories.js');


var userSchema = Schema({
    username: {type: String, required: true, unique: true},
    img: {type:String, default: 'http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/FuAAAOSweW5VRTEH/$_58.JPG'},
    description: String,
    password: {type: String, required: true},
    stories: [Story.schema],

});

var User = mongoose.model('User', userSchema);

module.exports = User;
