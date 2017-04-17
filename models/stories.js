var mongoose = require('mongoose');

var storySchema = mongoose.Schema({
    username:String,
	title:String,
    draft: String,
	characters: {
        hero:{
            name: {type: String, required: true},
            gender: {type: String, required: true}
        },
        mentor:{
            name: {type: String, required: true},
            gender: {type: String, required: true}
        },
        ally:{
            name: {type: String, required: true},
            gender: {type: String, required: true}
        },
        herald: {
            name: {type: String, required: true},
            gender: {type: String, required: true}
        },
        trickster: {
            name: {type: String, required: true},
            gender: {type: String, required: true}
        },
        shapeshifter: {
            name: {type: String, required: true},
            gender: {type: String, required: true}
        },
        guardian: {
            name: {type: String, required: true},
            gender: {type: String, required: true}
        },
        shadow: {
            name: {type: String, required: true},
            gender: {type: String, required: true}
        }
    },
    beginning: {
        peacefulKingdom: {
            name: {type:String, required: true}
        },
    },
    callToAction: String,
    superNaturalAide: {
        description: String
    },
    firstThreshold: {
        challenge: String
    },
    landOfAdventure: {
        name: {type: String, required: true, unique: true},
        description: String
    },
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
