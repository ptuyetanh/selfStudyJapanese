var express = require('express');
const pool = require('../config/ConnectDB');
var router = express.Router();

router.get('/', function(req, res, next) {
    pool.query('SELECT COUNT(*) FROM reviews', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
router.get('/countvocab', function(req, res, next) {
    pool.query('SELECT COUNT(vocab_id) FROM reviews', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
router.get('/countgrammar', function(req, res, next) {
    pool.query('SELECT COUNT(grammar_id) FROM reviews', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
router.get('/learnedwords', function(req, res, next) {
    pool.query('SELECT * FROM reviews ORDER BY review_id ASC', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});

module.exports = router;
