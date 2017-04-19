var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
var methodOverride = require('method-override');

//environment variables
var port = process.env.PORT || 3000;
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/yarn';

//require the models because of the mcAccount page??
// var User = require('models/users.js');
// var Story = require('models/stories.js');

//middleware+++++++++++++++++++++++++++++++++++++
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: "peanutbutterjellytime",
    resave: false,
    saveUninitialized: false
}));
app.use(express.static('public'));

//sessions controller middleware
var sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

//users controller middleware
var usersController = require('./controllers/users.js');
app.use('/users', usersController);

//stories controller middleware
var storiesController = require('./controllers/stories.js');
app.use('/stories', storiesController);

app.get('/', function(req, res){
    res.render('index.ejs', {
        currentUser: req.session.currentuser
    });
});

app.get('/about', function(req, res){
    res.render('about.ejs',{
        currentUser: req.session.currentuser
    });
});
//connections+++++++++++++++++
app.listen(port, function(){
    console.log("listening on port " + port);
});

mongoose.connect(mongoDBURI);

mongoose.connection.once('open', function(){
    console.log('connected to mongo!');
});

// <input type="text" name="userId" value="<%=currentUser.username%>">

// //characters
//     hero: String,
//     mentor: String,
//     ally: String,
//     herald: String,
//     trickster: String,
//     shapeshifter: String,
//     guardian: String,
//     shadow: String,
// //parts of Hero Journey
//     one: String,
//     callToAction: String,
//     superNaturalAide: String,
//     firstThreshold:String,
//     landOfAdventure: String,
//     roadOfTrials: String,
//     nightSeaVoyage: String,
//     finalTemptation: String,
//     apotheosis: String,
//     confrontingBigBad: String,
//     ultimateBoon: String,
//     returnThreshold: String,
//     freedomeToLive: String,
//     celebration: String
