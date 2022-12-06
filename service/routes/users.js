var express = require('express');
var router = express.Router();

var sampleRepo = require('../repos/sample_repo.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  sampleRepo.postData()
  res.send('respond with a resource');
});

module.exports = router;
