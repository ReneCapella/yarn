var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Story = require('./stories.js');

var userSchema = Schema({
    username: {type: String, required: true, unique: true},
    img: String,
    description: String,
    password: {type: String, required: true},
    stories: [Story.schema]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
