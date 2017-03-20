var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

// passportLocalMongoose automatically assigns username, hash, salt
var User = new Schema({});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);