var express = require('express');
var router = express.Router();
const pool = require('../config/ConnectDB');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('login', {});
});
router.post('/', function (req, res, next) {
    var { email, password } = req.body;
    pool.query("select * from users where email = $1", [email], (error, response) => {
        if (error) {
            console.log(error);
        } else {
            const user = response.rows[0];
            if (user && bcrypt.compareSync(password, response.rows[0].password)) {
                console.log("dăng nhập thành công");
                const token = jwt.sign({ id: user.id, email: user.email, role_id: user.role_id }, 'secret', { expiresIn: '1h' });
                res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
                return res.json({ message: "Đăng nhập thành công", role_id: user.role_id });  //lấy ra token role
                // res.redirect('/users');
            } else {
                res.status(400).json({ message: "Email không tồn tại hoặc sai mật khẩu" })
            }
        }
    })
})

module.exports = router;
