var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require('method-override');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');
var db;

mongoose.Promise = require('bluebird');
// heroku_9l5s2lr9:13eioldtva9du8smb6801hqpr3@ds137760.mlab.com:37760/heroku_9l5s2lr9
mongoose.connect("mongodb://localhost/", function (err) {
    
    if (err) { console.log("Connection Failed!", err); } 
    
    else {
        console.log("Connection Successful!");
        db = mongoose.connection;
        db.on('error', console.error.bind(console, 'DB connection error:'));
        db.once('open', function () {
            console.log("DB connected.");
        });
        init();
    }
});

function init() {

    var app = express();
    const PORT = process.env.PORT || 3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: "application/vnd.api+json" }));

    app.use(methodOverride('_method'));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(express.static("./public"));

    require('./routes/api-routes.js')(app);
    
    app.listen(PORT, function() { 
        console.log("App listening on PORT: " + PORT); 
    });

    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
}