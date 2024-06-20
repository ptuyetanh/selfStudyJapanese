var express = require('express');
var router = express.Router();
const multer = require('multer');
const pool = require('../config/ConnectDB');
//Chỉ ra đường dẫn upload và tên file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })

router.get('/', function (req, res, next) {
  res.render('signupmember');
});
router.post('/', upload.single('paymentphoto'), function (req, res, next) {
  const { user_id, timestudy } = req.body;
  const paymentphoto = req.file.path;
  const timesignup = new Date();
  pool.query('SELECT * FROM signupmembers where user_id = $1', [user_id], (error, response) => {
    if (error) {
      console.log("Lỗi" + error);
    } else {
      if (response.rows.length > 0) {
        console.log("Đã tồn tại đơn đăng ký thành viên");
      } else {
        pool.query("insert into signupmembers(timesignup, timestudy, paymentphoto, user_id) values($1,$2,$3,$4) RETURNING *", [timesignup, timestudy, paymentphoto, user_id], (error, response) => {
          if (error) {
            console.log(error);
          } else {
            res.send(user_id + timestudy + paymentphoto + timesignup);
          }
        })
      }
    }
  })
});

module.exports = router;
