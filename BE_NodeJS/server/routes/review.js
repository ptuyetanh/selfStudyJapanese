var express = require('express');
const pool = require('../config/ConnectDB');
var router = express.Router();
const cron = require('node-cron');
const moment = require('moment-timezone');

router.get('/', function(req, res, next) {
    pool.query('SELECT user_id,COUNT(vocab_id) as countvocab,COUNT(grammar_id) as countgrammar FROM reviews where review_next <= NOW() GROUP BY user_id', (error, response) => {
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
//tính ôn tập lại trong 2 ngày
function calculateReviewNext(){
    const nowInVietnam = moment().tz('Asia/Ho_Chi_Minh');
    const nextReview = nowInVietnam.add(2, 'day');
  // Trả về thời điểm ôn tập tiếp theo dưới dạng đối tượng Date
    return nextReview.toDate();
}
//Cron job reviewVocabGrammar
cron.schedule('0 0 * * *', function () {
    pool.query('SELECT * FROM reviews Where review_next <= NOW()', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            // res.send(response.rows);
            const vocabOrGrammar = response.rows;
            for(let word of vocabOrGrammar) {
                const {review_id} = word;
                pool.query(`UPDATE reviews SET review_last=$1, review_next=$2 WHERE review_id = $3`,[new Date(),calculateReviewNext(),review_id], (error) => {
                    if (error) {
                        console.log('Truy vấn lỗi' + error);
                    } else {
                        console.log("review_next đã tự động cập nhập về thời gian ôn tập tiếp theo");
                    }
                })
            }
        }
    })
},{
    timezone: 'Asia/Ho_Chi_Minh'
});
//reviewVocab 
router.get('/reviewvocab', function(req, res, next) {
    pool.query('SELECT * FROM reviews,vocabularies where reviews.vocab_id = vocabularies.vocab_id and reviews.grammar_id IS NULL and reviews.review_next <= NOW() ORDER BY RANDOM()', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
//reviewGrammar 
router.get('/reviewgrammar', function(req, res, next) {
    pool.query('SELECT * FROM reviews,grammars where reviews.grammar_id = grammars.grammar_id and reviews.vocab_id IS NULL and reviews.review_next <= NOW() ORDER BY RANDOM()', (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
//updateReviewVocab
function calculateReviewDayNext(){
    const nowInVietnam = moment().tz('Asia/Ho_Chi_Minh');
    // Thêm 1 tiếng
    const nextReview = nowInVietnam.add(1, 'hours');
    // Trả về thời điểm ôn tập tiếp theo dưới dạng đối tượng Date
    return nextReview.toDate();
}
//cập nhập thời gian ôn tập tiếp theo
router.put('/updatereview', function(req, res, next) {
    var { reviews } = req.body;
    console.log(reviews);
    const review_next = calculateReviewDayNext();
    for (let review of reviews) {
        const {review_id} = review;
        pool.query('UPDATE reviews SET review_next=$1 WHERE review_id = $2',[review_next,review_id],(error, response) => {
            if (error) {
                console.log('Truy vấn lỗi' + error);
            } else {
                console.log("update thành công");
            }
        })
    }
});
module.exports = router;
