var express = require('express');
var router = express.Router();
const pool = require('../config/ConnectDB');

router.get('/', function(req, res, next){
    pool.query('select * from levels', (error,response) => {
        if(error){
            console.log('Truy vấn lỗi' + error);
        }else{
            console.log(response.rows);
            res.send(response.rows);
        }
    })
});
module.exports = router;