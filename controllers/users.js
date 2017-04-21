var express = require('express');
var router = express.Router();
var User = require('../models/users.js');
var Story = require('../models/stories.js');
var bcrypt = require('bcrypt');
var session = require('express-session');

router.get('/', function(req, res){
	User.find({}, function(err, foundUsers){
		res.render('users/index.ejs', {
			users: foundUsers,
            currentUser: req.session.currentuser
		});
	});
});

router.get('/new', function(req, res){
    res.render('users/new.ejs', {
        currentUser: req.session.currentuser
    });
});

router.get('/:id', function(req, res){
	User.findById(req.params.id, function(err, foundUser){
        // console.log(foundUser);
		res.render('users/show.ejs', {
			user: foundUser,
            currentUser: req.session.currentuser
		});
	});
});

router.get('/:id/edit', function(req, res){
	User.findById(req.params.id, function(err, foundUser){
        if(req.session.currentuser !== undefined){
            res.render('users/edit.ejs', {
    			user: foundUser,
                currentUser: req.session.currentuser
            });
        } else {
            res.redirect('/sessions/new');
		};
	});
});

router.post('/', function(req, res){
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

            var defaultImg = ["http://d2q9kw5vp0we94.cloudfront.net/yarnlistthumb/5420108.jpg","http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/FuAAAOSweW5VRTEH/$_58.JPG","http://d2q9kw5vp0we94.cloudfront.net/regular/5420140.jpg","http://d2q9kw5vp0we94.cloudfront.net/regular/5420179.jpg","http://d2q9kw5vp0we94.cloudfront.net/regular/5420162.jpg","http://www.planet-science.com/umbraco/ImageGen.ashx?image=/media/101174/rocket_91785903.jpg&width=600&constrain=true"];
            if (req.body.img === ""){
                req.body.img = defaultImg[Math.floor(Math.random()*6-1) + 1];
                User.create(req.body, function(err, createdUser){
                    User.findOne({username: req.body.username}, function(err, foundUser){
                        console.log(foundUser);
                        if(!foundUser){
                            res.redirect('/users/new');
                        } else {
                            req.session.currentuser = foundUser;
                            currentUser=req.session.currentuser;
                            res.redirect('/users/');
                        };
                    });

                });
            };


});

router.delete('/:id', function(req, res){
	User.findByIdAndRemove(req.params.id, function(err, foundUser){
        var storyIds = [];
        for(var i = 0; i < foundUser.stories.length; i++){
            storyIds.push(foundUser.stories[i]._id)
        }
        Story.remove(
            {
                _id : {
                    $in: storyIds
                }
            }, function(err, data){
                	res.redirect('/users');
            }
        );
	});
});

router.put('/:id', function(req, res){
	User.findByIdAndUpdate(req.params.id, req.body, function(){
        console.log(req.body.img);
		res.redirect('/users');
	});
});

module.exports = router;
