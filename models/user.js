var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    freelancer: [{
        type: Schema.Types.ObjectId,
        ref: 'Freelancer'
    }],
    employer: [{
        type: Schema.Types.ObjectId,
        ref: 'Employer'
    }]
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);