var express = require('express');
const pool = require('../config/ConnectDB');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {});
});
//count
router.get('/countuser', function (req, res, next) {
    pool.query('SELECT COUNT(user_id) FROM users', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
router.get('/countMember', function (req, res, next) {
    pool.query('SELECT COUNT(role_id) FROM users where role_id = 2', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
router.get('/countvocab', function (req, res, next) {
    pool.query('SELECT COUNT(vocab_id) FROM vocabularies', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
router.get('/countgrammar', function (req, res, next) {
    pool.query('SELECT COUNT(grammar_id) FROM grammars', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
router.get('/countalphabet', function (req, res, next) {
    pool.query('SELECT COUNT(alphabet_id) FROM alphabets', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
router.get('/countcommunication', function (req, res, next) {
    pool.query('SELECT COUNT(communication_id) FROM communications', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
//new user
router.get('/newuser', function (req, res, next) {
    pool.query('SELECT * FROM users ORDER BY user_id DESC limit 5', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
//newsignupmember
router.get('/newsignupmember', function (req, res, next) {
    pool.query('SELECT * FROM signupmembers,users where signupmembers.user_id = users.user_id ORDER BY signupmember_id DESC limit 5', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
//manageruser
router.get('/manageruser', function (req, res, next) {
    pool.query('SELECT * FROM users ORDER BY user_id ASC limit 5', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});

module.exports = router;
