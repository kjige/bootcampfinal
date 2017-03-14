var path = require("path");
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('../models');
var account = db.account;
var User = db.User;

module.exports = function (app) {
    app.get("/login", function (req, res) {
        //this is a duplicate route - we should change it
        res.sendFile(path.join(__dirname + "/../public/login.html"));
    });

    // Login route
    app.post('/login',
        passport.authenticate('local'),
        function (req, res) {
            res.json(req.user);
        }
    );

    app.post('/register', function (req, res) {
        var newUsername = req.body.username;

        findUsername(newUsername);

        function findUsername(newUsername) {
            account.findOne({
                where: {
                    username: newUsername
                }
            }).then(function (resDB) {
                console.log("SEQ RES " + resDB);
                if (!resDB) {
                    User.create({
                        username: req.body.username,
                        email: req.body.email,
                        location: req.body.location,
                        interests: req.body.interests
                    });

                    account.register(req.body.username, req.body.password, function (err, account) {
                        if (err) {
                            console.log(err);
                            res.json(err);
                        }
                        req.login(account, function (err) {
                            if (err) {
                                res.json(err);
                            }
                            res.json(req.user);
                        });
                    });
                } else {
                    res.json(false);
                }
            });
        }
    });

};