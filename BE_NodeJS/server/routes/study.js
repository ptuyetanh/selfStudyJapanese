var express = require('express');
const pool = require('../config/ConnectDB');
var router = express.Router();

/* alphabet */
router.get('/alphabetButton', function (req, res, next) {
    pool.query('select * from alphabets ORDER BY alphabet_id ASC ', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
router.get('/alphabetFlashcard', function (req, res, next) {
    pool.query('select * from alphabets ORDER BY RANDOM(); ', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
// comunication
router.get('/communication', function (req, res, next) {
    pool.query('select * from communications ORDER BY communication_id ASC', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
//vocabulary
router.get('/vocabulary', function (req, res, next) {
    pool.query('SELECT * FROM vocabularies ORDER BY vocab_id ASC', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
router.post('/savevocab', function (req, res, next) {
    var { studyVocab } = req.body;
    console.log(studyVocab);
    for (let vocab of studyVocab) {
        const { vocab_id, name, mean, user_id } = vocab;
        pool.query('SELECT * FROM reviews where vocab_id = $1', [vocab_id], (error, response) => {
            if (error) {
                console.log('Truy vấn lỗi' + error);
            } else {
                if (response.rows.length > 0) {
                    console.log("Từ vựng đã tồn tại");
                } else {
                    try {
                        pool.query('insert into reviews(vocab_id,name,mean,user_id) values($1,$2,$3,$4)', [vocab_id, name, mean, user_id])
                        return res.status(200).send('Nhận dữ liệu' + vocab_id + name + mean + user_id)
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
        })
    }
});
//grammar
router.get('/grammar', function (req, res, next) {
    pool.query('SELECT * FROM grammars ORDER BY grammar_id ASC', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
router.post('/savegrammar', function (req, res, next) {
    var { studyGrammar } = req.body;
    console.log(studyGrammar);
    for (let grammar of studyGrammar) {
        const { grammar_id, name, mean, user_id } = grammar;
        pool.query('SELECT * FROM reviews where grammar_id = $1', [grammar_id], (error, response) => {
            if (error) {
                console.log('Truy vấn lỗi' + error);
            } else {
                if (response.rows.length > 0) {
                    console.log("Ngữ pháp đã tồn tại");
                } else {
                    try {
                        pool.query('insert into reviews(grammar_id,name,mean,user_id) values($1,$2,$3,$4)', [grammar_id, name, mean, user_id])
                        return res.status(200).send('Nhận dữ liệu' + grammar_id + name + mean + user_id)
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
        })
    }
});

module.exports = router;
