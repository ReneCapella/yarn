var mongoose = require('mongoose');

var storySchema = mongoose.Schema({
	title:String,
    draft: String,
    feedback: String,
//characters
    hero: String,
    mentor: String,
    ally: String,
    herald: String,
    trickster: String,
    shapeshifter: String,
    guardian: String,
    shadow: String,
//parts of Hero Journey
    peacefulKingdom: String,
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
