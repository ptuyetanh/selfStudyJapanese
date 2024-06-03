var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.clearCookie('token');
  res.json({message: 'logout'});
});

module.exports = router;
