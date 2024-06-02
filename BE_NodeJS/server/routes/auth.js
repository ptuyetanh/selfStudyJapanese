var express = require('express');
const authenticateToken = require('./authenticateToken ');
var router = express.Router();

router.get('/',authenticateToken, function(req, res, next) {
  res.json({isauth: true, user: req.user});
});
module.exports = router;
