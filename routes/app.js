var express = require('express');
var router = express.Router();
var User = require('../models/user')

router.get('/', function (req, res, next) {
    res.render('index');
});

//commenting below code for now. Need only one single landing route 
//for the app. Angular will handle all rest routes. SPA advantage
/*router.get('/', function (req, res, next) {
    User.findOne({},function(err, doc){
        if(err){
            return res.render('error');
        }
        res.render('node', {email: doc});
    })
});


router.post('/', function(req, res, next){
    var email = req.body.emailInForm;
    var user = new User({
      firstName: "Pushpak",
      lastName: "Choudhary",
      password: "pushpak00187",
      email: email
    });
    user.save(); //It(User.save()) will automatically save to a collection
    // and will create one if not already available (a 's will be added to user .... to
//to find users use db.users.find())
    res.redirect('/');
});*/
module.exports = router;
