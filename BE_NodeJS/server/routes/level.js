var express = require('express');
var router = express.Router();
const pool = require('../config/ConnectDB');

router.get('/', function (req, res, next) {
    pool.query('select * from levels ORDER BY level_id DESC', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
router.get('/lesson', function (req, res, next) {
    pool.query('SELECT levels.level_id, vocabularies.lesson_name FROM levels,vocabularies where levels.level_id = vocabularies.level_id GROUP BY levels.level_id, vocabularies.lesson_name LIMIT 10;', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
module.exports = router;