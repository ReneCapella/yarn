var mongoose = require('mongoose');

var storySchema = mongoose.Schema({
    username:String,
	title:String,
    draft: String,
    feedback: String,


//parts of Hero Journey
    ordinaryWorld: String,
    callToAction: String,
    refusal: String,
    mentorHelper: String,
    crossingThreshold:String,
    landOfAdventure: String,
    roadOfTrials: String,
    approach: String,
    ordeal: String,
    reward: String,
    roadBack: String,
    atonement: String,
    return: String
});

var Story = mongoose.model('Story', storySchema);

module.exports = Story;
