
var User = require('../models/User');

/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.getLeaderBoard = function(req, res) {  
  User.find(function(err, users) {
    
    //Create a JSON object that only has what we want to display to prevent security leaks.
    var usersList = [];
    
    for(var i in users) {
        var item = users[i];
        usersList.push({
            "email": item.email,
            "records": item.records
        });
    }
    
    console.log(usersList);
    
    res.render('leaderboard', {
      title: 'Leader Board',
      usersList: users
    });
  });
};