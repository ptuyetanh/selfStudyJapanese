var express = require('express');
const pool = require('../config/ConnectDB');
var router = express.Router();

/* alphabet */
router.get('/alphabetButton', function(req, res, next) {
    pool.query('select * from alphabets ORDER BY alphabet_id ASC ', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
router.get('/alphabetFlashcard', function(req, res, next) {
    pool.query('select * from alphabets ORDER BY RANDOM(); ', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});

module.exports = router;
