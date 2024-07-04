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
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5 ;
    const offset = (page - 1) * limit;
    const search = req.query.search || '';
    pool.query('SELECT * FROM reviews where name ILIKE $1 OR mean ILIKE $1 ORDER BY review_id ASC limit $2 offset $3',[`%${search}%`,limit,offset], (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});

module.exports = router;
