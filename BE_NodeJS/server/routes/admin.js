var express = require('express');
const pool = require('../config/ConnectDB');
var router = express.Router();
const bcrypt = require('bcrypt');

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
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;
    const search = req.query.search || '';
    pool.query('SELECT * FROM users INNER JOIN roles ON users.role_id = roles.role_id where users.fullname ILIKE $1 OR users.email ILIKE $1 OR roles.role_name LIKE $1 ORDER BY users.user_id ASC limit $2 offset $3', [`%${search}%`, limit, offset], (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
//edit User
router.put('/manageruser/:user_id', function (req, res, next) {
    const { user_id } = req.params;
    const { fullname, email, phonenumber, dateofbirth, password, role_id } = req.body;
    var hash_pass = bcrypt.hashSync(password, 10);
    pool.query('UPDATE users SET fullname = $1, email = $2, phonenumber = $3, dateofbirth = $4, password = $5, role_id = $6 WHERE user_id = $7', [fullname, email, phonenumber, dateofbirth, hash_pass, role_id, user_id], (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
            return res.status(400).json({ message: 'số điện thoại và email đã tồn tại' });
        } else {
            res.send(response.rows[0]);
        }
    })
});
//delete user
router.delete('/manageruser/:user_id',function(req, res) {
    const {user_id} = req.params;
    pool.query('DELETE FROM users WHERE user_id = $1',[user_id],(error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows[0]);
        }
    })
})



module.exports = router;
