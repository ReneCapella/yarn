var express = require('express');
var router = express.Router();
var User = require('../models/users.js');
var bcrypt = require('bcrypt');
var session = require('express-session');

router.get('/new', function(req, res){
    res.render('sessions/new.ejs', {
        currentUser: req.session.currentuser
    });
});


router.post('/', function(req, res){
    console.log("2");
    User.findOne({username: req.body.username}, function(err, foundUser){
        if(!foundUser){
            res.redirect('/users/new');
        }
        else if( bcrypt.compareSync(req.body.password, foundUser.password) ){
            req.session.currentuser = foundUser;
            res.redirect('/users/');
        } else {
            console.log("allo");
        }
    });
});

router.delete('/', function(req, res){
    console.log("1");
    req.session.destroy(function(){
        res.redirect('/');
    });
});
module.exports = router;
