# Work It

Work It is a platform to connect startups and professionals from different industries.

# Screenshots
  
![Alt text] (/screenshots/screenshot1.png?raw=true)

# Technology Used
* Node
* Express
* React.js
* Passport
* Mongoose
* Bootstrap
* MongoDb

# Getting Started

Clone copy of app locally and run node server.js to get app up and running.

### Prerequisites

npm install the following packages:
```
npm install body-parser --save
npm install express --save
```
# Built With
* Bootstrap
* Passport
* HTML
* JS
* CSS
* Node
* Express
* React.js
* React-flip.js
* Body-parser
* MVC

# Walk Through Of Some Interesting Code

Creation of the user code using Passport
```
db.Users.register(req.body.email.toLowerCase(), req.body.password, function(err, user) {
        if (err) {
            return res.json(err);
        } else {
            passport.authenticate('local')(req, res, function() {
                res.redirect('/renter');
            });
        }
    });
```


# Authors
* Poornima Sewak
* Terence Ro
* Chris Leong
