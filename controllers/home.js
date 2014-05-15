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
  res.render('leaderboard', {
    title: 'Leader Board'
  });
};