var express = require('express');
var router = express.Router();
const pool = require('../config/ConnectDB');

router.get('/vocab', function (req, res, next) {
    pool.query('SELECT levels.level_id, vocabularies.lesson_name FROM levels,vocabularies where levels.level_id = vocabularies.level_id GROUP BY levels.level_id, vocabularies.lesson_name ORDER BY vocabularies.lesson_name ASC', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
router.get('/grammar', function (req, res, next) {
    pool.query('select levels.level_id, grammars.lesson_name from grammars,levels where grammars.level_id = levels.level_id GROUP BY levels.level_id, grammars.lesson_name ORDER BY grammars.lesson_name ASC', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
router.get('/communication', function (req, res, next) {
    pool.query('SELECT communication_id,lesson_name FROM communications ORDER BY communication_id ASC ', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
router.get('/alphabet', function (req, res, next) {
    pool.query('select * from alphabetlessons ', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
router.get('/alphabet/lessonContent', function (req, res, next) {
    pool.query('SELECT alphabetlessons.lesson_id, alphabets.type FROM alphabetlessons,alphabets where alphabetlessons.lesson_id = alphabets.lesson_id GROUP BY alphabetlessons.lesson_id, alphabets.type ORDER BY alphabets.type ASC', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
router.get('/vocab/lessonContent', function (req, res, next) {
    pool.query('SELECT * FROM vocabularies ORDER BY vocab_id ASC', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
router.get('/grammar/lessonContent', function (req, res, next) {
    pool.query('SELECT * FROM grammars ORDER BY grammar_id ASC', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
module.exports = router;