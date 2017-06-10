const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require('method-override');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');
const db;

mongoose.Promise = require('bluebird');

mongoose.connect("mongodb://localhost/workit_db", function (err) {
// mongodb://heroku_9l5s2lr9:13eioldtva9du8smb6801hqpr3@ds137760.mlab.com:37760/heroku_9l5s2lr9"
    
    
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

    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
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

