var path = require('path');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('../models/user');
var User = db.User;

module.exports = function (app) {

    // Login route
    app.post('/login', passport.authenticate('local'), function (req, res) {
        console.log(req.user);
        if (req.user){
            res.json(req.user);
        }
    });

    // Register route
    app.post('/register', function (req, res) {

        db.findOne({username:req.body.username}, function(err, dbRes){

            if (err) { console.log(err); }
            if (!dbRes) {

                db.register(new db({ username : req.body.username }), req.body.password, function(err, user) {
                    if (err) { console.log(err); }

                    passport.authenticate('local')(req, res, function () {
                        res.json(req.user);
                    });
                });
            }
            else {
                passport.authenticate('local')(req, res, function () {
                        res.json(req.user);
                });
            }
        });
    });
}