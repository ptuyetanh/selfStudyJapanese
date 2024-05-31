var express = require('express');
var router = express.Router();
const pool = require('../config/ConnectDB');
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");

//sendmail
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "yukiainnstudy@gmail.com",
        pass: "satx jflu jbfu jnii",
    },
});

sendEmailSignUp = (email) => {
    const url = 'http://localhost:3000/login';
    transporter.sendMail({
        from: '"Yuki study Japanese" <yukiainnstudy@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Đăng ký thành công", // Subject line
        text: "Hello world?", // plain text body
        html: `<p>Chúc mừng bạn đăng ký thành công hãy <a href="${url}">Đăng nhập </a> để học thử và đăng ký thành viên để có trải nghiệm tốt nhất</p>
               <footer>Hãy liên lạc vào mail nếu có bất kỳ câu hỏi hay vấn đề nào xảy ra</footer>
               `
    });
}
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('signup', {});
});
router.post('/', function (req, res, next) {
    var { fullname, email, phonenumber, dateofbirth, password } = req.body;
    //kiểm tra email và sđt tồn tại
    pool.query("select * from users where email = $1 or phonenumber= $2", [email, phonenumber], (error, resp) => {
        if (error) {
            console.log(error);
        } else {
            if (resp.rows.length > 0) {
                console.log("số điện thoại và email đã tồn tại");
                return res.status(400).json({ message: 'số điện thoại và email đã tồn tại' });
            }else {
                var hash_pass = bcrypt.hashSync(password, 10);
                pool.query("INSERT INTO  users (fullname, email, phonenumber, dateofbirth, password) VALUES ($1,$2,$3,$4,$5)", [fullname, email, phonenumber, dateofbirth, hash_pass], (error, response) => {
                    if (error) {
                        res.send(error);
                    } else {
                        res.send('Nhận dữ liệu rồi' + fullname + email + phonenumber + dateofbirth + password + hash_pass);
                        sendEmailSignUp(email);
                    }
                })
            }
        }
    })
});
module.exports = router;
