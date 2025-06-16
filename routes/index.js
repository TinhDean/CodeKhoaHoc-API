var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('ABC 1234');
  res.render('index', { title: 'Express' });
});

router.get('/dashboard', function(req, res, next) {
  console.log('ABC 123');
  res.render('pages/dashboard/index', { title: 'dashboard page' });
});

module.exports = router;



