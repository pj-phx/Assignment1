let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET tickets page. */
router.get('/About', function(req, res, next) {
  res.render('About', { title: 'About'});
});

/* GET clients page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'projects'});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET users page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Support'});
});

module.exports = router;
