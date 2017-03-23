var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

// passportLocalMongoose automatically assigns username, hash, salt
var User = new Schema({
    freelancer: {
        type: Schema.Types.ObjectId,
        ref: 'Freelancer'
    },
    employer: {
        type: Schema.Types.ObjectId,
        ref: 'Employer'
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);