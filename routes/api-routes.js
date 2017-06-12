const path = require('path');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const db = require('../models/user');
const Employer = require('../models/employer')
const Freelancer = require('../models/freelancer');
const Suggestion = require('../models/suggestion');
const Consultant = require('../models/consultantSuggestion');
const ProfileSuggestion = require('../models/profileSuggestion');
const User = db.User;

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

        // create a new employer profile and pass the req.body to the entry
        var newEmployer = new Employer(req.body);

        // save the new employer in the employers collection
        newEmployer.save(function (err, doc) {

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
    // app.get('/consultantprofile', function (req, res) {
    //     db.find({}).populate('consultantSuggestion').exec(function (error, doc) {
    //         if (error) {
    //             res.send(error);
    //         } else {
    //             res.send(doc);
    //             console.log('this is the doc', doc);

    //         }
    //     });
    // });
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
            }
        }); 
    });

    app.get('/employerprofile/:id', function (req, res) {
         
        Employer.find({
            '_id': req.params.id
        }).populate('ProfileSuggestion').exec(function (error, doc) {
            if (error) {
                res.send(error);
            } else {
                res.send(doc);
            }
        });
    });

    app.get('/employers', function (req, res) {
        Employer.find({}, function (error, doc) {
            if (error) {
                res.send(error);
            } else {
                res.send(doc);
            }
        });
    });

    app.post('/profilesuggestionowner', function (req, res) {
        var newProfileSuggestion = new ProfileSuggestion(req.body);

        // save the new employer in the employers collection
        newProfileSuggestion.save(function (err, doc) {
            // console.log('emp doc', doc);
            if (err) {
                res.send(err);
            } else {
                // Find one user in our user collection
                // then update it by pushing the object id of the employer 
                Employer.findOneAndUpdate({
                    '_id': req.body.profile[0]._id
                }, {
                    $push: {
                        'ProfileSuggestion': doc._id
                        
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

    app.get('/consultantprofile/:id', function (req, res) {
         
        Freelancer.find({
            '_id': req.params.id
        }).populate('ProfileSuggestion').exec(function (error, doc) {
            if (error) {
                res.send(error);
            } else {
                res.send(doc);
                console.log('consultant',doc);
            }
        });
    });

    app.post('/profilesuggestionconsultant', function (req, res) {
        var newProfileSuggestion = new ProfileSuggestion(req.body);
        
        // save the new employer in the employers collection
        newProfileSuggestion.save(function (err, doc) {
            // console.log('emp doc', doc);
            if (err) {
                res.send(err);
            } else {
                // Find one user in our user collection
                // then update it by pushing the object id of the employer 
                Freelancer.findOneAndUpdate({
                    '_id': req.body.profile[0]._id
                }, {
                    $push: {
                        'ProfileSuggestion': doc._id
                        
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

    app.post('/users', function(req,res){
        db.find({'_id':req.body}, function(err,dbRes){
            console.log('DBRESUSERNAME',dbRes[0].username);
            res.json(dbRes);
        });
    });

}