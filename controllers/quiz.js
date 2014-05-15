/**
 * GET /
 * Home page.
 */

exports.getQuiz = function(req, res) {
  res.render('quiz/index', {
    title: 'Quiz'
  });
};

exports.getQuizStart = function(req, res) {
  res.render('quiz/start', {
    title: 'Quiz'
  });
};