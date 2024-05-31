var express = require('express');
const authenticateToken = require('./authenticateToken ');
var router = express.Router();

/* GET users listing. */
router.get('/',authenticateToken, function(req, res, next) {
  res.json({message:'Vào trang user',user: req.user});
});
module.exports = router;
