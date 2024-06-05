var express = require('express');
var router = express.Router();
const pool = require('../config/ConnectDB');

router.get('/vocab', function (req, res, next) {
    pool.query('SELECT levels.level_id, vocabularies.lesson_name FROM levels,vocabularies where levels.level_id = vocabularies.level_id GROUP BY levels.level_id, vocabularies.lesson_name LIMIT 10;', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            console.log(response.rows);
            res.send(response.rows);
        }
    })
});
module.exports = router;