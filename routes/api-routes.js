//comment
var path = require('path');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('../models/user');
var Employer = require('../models/employer')
var Freelancer = require('../models/freelancer');
var Suggestion = require('../models/suggestion');
var Consultant = require('../models/consultantSuggestion');
var Owner = require('../models/ownerSuggestion');
var User = db.User;

module.exports = function (app) {

    // Login route
    app.post('/login', passport.authenticate('local'), function (req, res) {
        if (req.user) {
            res.json(req.user);
        }
    });

    // Register route
    app.post('/register', function (req, res) {

        db.findOne({
            username: req.body.username
        }, function (err, dbRes) {

            if (err) {
                console.log(err);
            }
            if (!dbRes) {

                db.register(new db({
                    username: req.body.username
                }), req.body.password, function (err, user) {
                    if (err) {
                        console.log(err);
                    }

                    passport.authenticate('local')(req, res, function () {
                        res.json(req.user);
                    });
                });
            } else {
                passport.authenticate('local')(req, res, function () {
                    res.json(req.user);
                });
            }
        });
    });

    // check if userId exists
    app.post('/findId', function (req, res) {
        db.findOne({
            _id: req.body.userId
        }, function (err, dbRes) {
            if (err) console.log(err);
            if (!dbRes) {
                res.json(false);
            } else {
                res.json(dbRes);
            }
        });
    });

    // signup routes
    app.post('/employer', function (req, res) {
        // console.log(req.body);
        // create a new employer profile and pass the req.body to the entry
        var newEmployer = new Employer(req.body);

        // save the new employer in the employers collection
        newEmployer.save(function (err, doc) {
            console.log(err);
            console.log(doc);

            if (err) {
                res.send(err);
            } else {
                // Find one user in our user collection
                // then update it by pushing the object id of the employer 
                db.findOneAndUpdate({
                    '_id': req.body.user
                }, {
                    $push: {
                        'employer': doc._id
                    }
                }, {
                    new: true
                }, function (error, doc) {
                    // log any errors
                    if (err) {
                        console.log(err);
                    } else {
                        // or send the doc to the browser
                        res.json(doc);
                    }
                });

            }

        });
    });

    // suggestion box
    app.post('/suggestion', function (req, res) {
        console.log(req.body);
        var newSuggestion = new Suggestion(req.body);

        // save the new employer in the employers collection
        newSuggestion.save(function (err, doc) {
            if (err) {
                res.send(err);
            } else {
                // Find one user in our user collection
                // then update it by pushing the object id of the employer 
                db.findOneAndUpdate({
                    '_id': req.body.user
                }, {
                    $push: {
                        'suggestion': doc._id
                    }
                }, {
                    new: true
                }, function (error, doc) {
                    // log any errors
                    if (err) {
                        console.log(err);
                    } else {
                        // or send the doc to the browser
                        res.json(doc);
                    }
                });

            }

        });
    });
    app.post('/consultantsuggestion', function (req, res) {
        var newConsultant = new Consultant(req.body);

        // save the new employer in the employers collection
        newConsultant.save(function (err, doc) {
            if (err) {
                res.send(err);
            } else {
                // Find one user in our user collection
                // then update it by pushing the object id of the employer 
                db.findOneAndUpdate({
                    '_id': req.body.user
                }, {
                    $push: {
                        'consultantSuggestion': doc._id
                    }
                }, {
                    new: true
                }, function (error, doc) {
                    // log any errors
                    if (err) {
                        console.log(err);
                    } else {
                        // or send the doc to the browser
                        res.json(doc);
                    }
                });

            }

        });
    });

    // get suggestions from user collections and populate suggestions collections to display on consultant page
    app.get('/userconsultantsuggestion', function (req, res) {
        db.find({}).populate('consultantSuggestion').exec(function (error, doc) {
            if (error) {
                res.send(error);
            } else {
                res.send(doc);
                console.log('this is the doc', doc);

            }
        });
    });
    // freelancer post
    app.post('/freelancer', function (req, res) {
        var newFreelancer = new Freelancer(req.body);
        // save the new freelancer in the freelancers collection
        newFreelancer.save(function (err, doc) {
            if (err) {
                res.send(err);
            } else {
                // Find one user in our user collection
                // then update it by pushing the object id of the employer 
                db.findOneAndUpdate({
                    '_id': req.body.user
                }, {
                    $push: {
                        'freelancer': doc._id
                    }
                }, {
                    new: true
                }, function (error, doc) {
                    // log any errors
                    if (err) {
                        console.log(err);
                    } else {
                        // or send the doc to the browser
                        res.json(doc);
                    }
                });
            }
        });
    });
    // get suggestions from user collections and populate suggestions collections to display on forum page
    app.get('/usersuggestion', function (req, res) {
        db.find({}).populate('suggestion employer freelancer').exec(function (error, doc) {
            if (error) {
                res.send(error);
            } else {
                res.send(doc);
                console.log('this is the document', doc);
                console.log('?');
            }
        });
    });

    // get suggestions from user collections and populate suggestions collections to display on forum page
    app.get('/profilesuggestion', function (req, res) {
        db.find({}).populate('suggestion employer freelancer').exec(function (error, doc) {
            if (error) {
                res.send(error);
            } else {
                res.send(doc);
                console.log('this is the document', doc);
                console.log('?');
            }
        });
    });

    app.get('/employerprofile/:id', function (req, res) {
         console.log('>',req.params.id);
        Employer.find({
            '_id': req.params.id
        }).populate('employer').exec(function (error, doc) {
            if (error) {
                res.send(error);
            } else {
                res.send(doc);
                console.log('employer',doc);
            }
        });
    });


    app.get('/employers', function (req, res) {
        Employer.find({}, function (error, doc) {
            if (error) {
                res.send(error);
            } else {
                res.send(doc);
                // console.log(doc);
            }
        });
    });

    app.post('/ownersuggestion', function (req, res) {
        var newOwner = new Owner(req.body);

        // save the new employer in the employers collection
        newOwner.save(function (err, doc) {
            if (err) {
                res.send(err);
            } else {
                // Find one user in our user collection
                // then update it by pushing the object id of the employer 
                db.findOneAndUpdate({
                    '_id': req.body.user
                }, {
                    $push: {
                        'ownerSuggestion': doc._id
                    }
                }, {
                    new: true
                }, function (error, doc) {
                    // log any errors
                    if (err) {
                        console.log(err);
                    } else {
                        // or send the doc to the browser
                        res.json(doc);
                    }
                });

            }

        });
    });


    // get suggestions from user collections and populate suggestions collections to display on owner profile page
    app.get('/userownersuggestion', function (req, res) {
        db.find({}).populate('ownerSuggestion').exec(function (error, doc) {
            if (error) {
                res.send(error);
            } else {
                res.send(doc);
                console.log('this is the doc', doc);

            }
        });
    });
    // Route to get all the freelancer from the database
    app.get('/freelancers', function (req, res) {
        Freelancer.find({}, function (error, doc) {
            if (error) {
                res.send(error);
            } else {
                res.send(doc);
                // console.log(doc);
            }
        });
    });

    // Route to get all the freelancer from the database
    app.get('/freelancers', function (req, res) {
        Freelancer.find({}, function (error, doc) {
            if (error) {
                res.send(error);
            } else {
                res.send(doc);
                // console.log(doc);
            }
        });
    });
}