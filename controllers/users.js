var express = require('express');
var router = express.Router();
var User = require('../models/users.js');
var Story = require('../models/stories.js');
var bcrypt = require('bcrypt');

router.get('/', function(req, res){
	User.find({}, function(err, foundUsers){
		res.render('users/index.ejs', {
			users: foundUsers
		});
	});
});

router.get('/new', function(req, res){
    res.render('users/new.ejs');
});

router.get('/:id', function(req, res){
	User.findById(req.params.id, function(err, foundUser){
		res.render('users/show.ejs', {
			user: foundUser
		});
	});
});

router.get('/:id/edit', function(req, res){
	User.findById(req.params.id, function(err, foundUser){
		res.render('users/edit.ejs', {
			user: foundUser
		});
	});
});

router.post('/', function(req, res){
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, function(err, createdUser){
        res.redirect('/');
    });
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
		res.redirect('/users');
	});
});

module.exports = router;
