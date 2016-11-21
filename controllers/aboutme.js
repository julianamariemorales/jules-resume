/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('aboutme', {
    title: 'About Me'
  });
};
