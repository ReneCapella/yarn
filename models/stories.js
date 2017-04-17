var mongoose = require('mongoose');

var storySchema = mongoose.Schema({
    username:String,
	title:String,
    draft: String,

    hero:{type: String, required: true},
    mentor:{type: String, required: true},
    ally:{type: String, required: true},
    herald: {type: String, required: true},
    trickster: {type: String, required: true},
    shapeshifter: {type: String, required: true},
    guardian: {type: String, required: true},
    shadow: {type: String, required: true},
    peacefulKingdom: {type:String, required: true},
    callToAction: String,
    superNaturalAide: String,
    firstThreshold:String,
    landOfAdventure: String,
    roadOfTrials: String,
    nightSeaVoyage: String,
    finalTemptation: String,
    apotheosis: String,
    confrontingBigBad: String,
    ultimateBoon: String,
    returnThreshold: String,
    freedomeToLive: String,
    celebration: String
});

var Story = mongoose.model('Story', storySchema);

module.exports = Story;
