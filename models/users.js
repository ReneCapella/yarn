var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Story = require('./stories.js');

var userSchema = Schema({
    username: String,
    password: String
    stories: [Stories.schema]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
