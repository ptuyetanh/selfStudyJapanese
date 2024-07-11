var express = require('express');
const pool = require('../config/ConnectDB');
var router = express.Router();
const cron = require('node-cron');
const multer = require('multer');
const csv = require('csv-parser')
const fs = require('fs');
const path = require('path');

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
    pool.query('UPDATE users SET fullname = $1, email = $2, phonenumber = $3, dateofbirth = $4, password = $5, role_id = $6 WHERE user_id = $7', [fullname, email, phonenumber, dateofbirth, password, role_id, user_id], (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
            return res.status(400).json({ message: 'số điện thoại và email đã tồn tại' });
        } else {
            res.send(response.rows[0]);
        }
    })
});
//delete user
router.delete('/manageruser/:user_id', function (req, res) {
    const { user_id } = req.params;
    pool.query('DELETE FROM users WHERE user_id = $1', [user_id], (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows[0]);
        }
    })
})
//active member
router.get('/activemember', function (req, res, next) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 4;
    const offset = (page - 1) * limit;
    pool.query('SELECT * FROM signupmembers, users where users.user_id = signupmembers.user_id ORDER BY signupmember_id ASC limit $1 offset $2', [limit, offset], (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
//saveactivemember
router.put('/saveactivemember/:user_id', function (req, res, next) {
    const { user_id } = req.params;
    const { start_day, expiration_date, role_id, signupmember_id } = req.body;
    pool.query('UPDATE users SET start_day = $1, expiration_date = $2,role_id = $3 WHERE user_id = $4', [start_day, expiration_date, role_id, user_id], (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows[0]);
            pool.query('DELETE FROM signupmembers WHERE signupmember_id = $1', [signupmember_id], (errors, responses) => {
                if (errors) {
                    console.log('Truy vấn lỗi' + error);
                } else {
                    res.send(responses.rows[0]);
                }
            })
        }
    })
});
//Cron job activemember
cron.schedule('0 0 * * *', function () {
    pool.query(`UPDATE users SET role_id = '1' WHERE expiration_date < NOW()`, (error) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            console.log("Role_id đã tự động cập nhập về 1");
        }
    })
});
// refuse activemember
router.delete('/refuseactivemember/:signupmember_id', function (req, res) {
    const { signupmember_id } = req.params;
    pool.query('DELETE FROM signupmembers WHERE signupmember_id = $1', [signupmember_id], (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows[0]);
        }
    })
})
//manager alphabet
router.get('/manageralphabet', function (req, res, next) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;
    pool.query('SELECT * FROM alphabetlessons,alphabets where alphabetlessons.lesson_id = alphabets.lesson_id ORDER BY alphabet_id ASC limit $1 offset $2', [limit, offset], (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});

//addCourseAlphabet
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/sound')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })
const copyMp3 = (sourcePath, filename) => {
    return new Promise((resolve, reject) => {
        const destinationPath = path.join(__dirname, '../public/sound', filename);
        console.log(destinationPath + sourcePath);
        fs.copyFile(sourcePath, destinationPath, (err) => {
            if (err) reject(err);
            else resolve(destinationPath);
        });
    });
};
router.post('/addcoursealphabet', upload.single('file_csv'), function (req, res, next) {
    const fileCsvPath = req.file.path;
    // console.log(fileCsvPath);
    const results = [];
    fs.createReadStream(fileCsvPath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            console.log(results);
            fs.unlinkSync(fileCsvPath)
            for (const row of results) {
                const name = row['name'];
                const pronunciation = row['pronunciation'];
                const example = row['example'];
                const type = row['type'];
                const lesson_id = row['lesson_id']
                const sound = row['sound']; // D:\\ĐATN_TuyetAnh\\database\\alphabetHiragana\\あ.mp3'
                const sound_name = path.basename(sound, path.extname(sound));//あ
                const sound_filename = sound_name + path.extname(sound); // 'あ.mp3'
                try {
                    const localPath = await copyMp3(sound, sound_filename);
                    await pool.query('INSERT INTO alphabets (name,pronunciation,example,sound,type,lesson_id) VALUES ($1, $2, $3, $4, $5, $6)', [name, pronunciation, example, sound_filename, type, lesson_id]);
                    res.send(response.rows)
                } catch (err) {
                    console.error('Error saving to database', err);
                }
            }
        });
});
//deleteAlphabet
router.delete('/deletealphabet/:alphabet_id', function (req, res) {
    const { alphabet_id } = req.params;
    pool.query('DELETE FROM alphabets WHERE alphabet_id = $1', [alphabet_id], (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows[0]);
        }
    })
})
//manager vocab
router.get('/managervocab', function (req, res, next) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;
    pool.query('SELECT * FROM vocabularies,levels where vocabularies.level_id = levels.level_id ORDER BY vocab_id ASC limit $1 offset $2', [limit, offset], (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
//addCourseVocab
router.post('/addcoursevocab', upload.single('file_csv'), function (req, res, next) {
    const fileCsvPath = req.file.path;
    const results = [];
    fs.createReadStream(fileCsvPath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            console.log(results);
            fs.unlinkSync(fileCsvPath)
            for (const row of results) {
                const name = row['name'];
                const mean = row['mean'];
                const example = row['example'];
                const sino_vietnamese_sound = row['sino_vietnamese_sound'];
                const pronunciation = row['pronunciation']
                const example_mean = row['example_mean']
                const lesson_name = row['lesson_name']
                const level_id = row['level_id']
                const sound = row['sound']; // D:\\ĐATN_TuyetAnh\\database\\alphabetHiragana\\あ.mp3'
                const sound_name = path.basename(sound, path.extname(sound));//あ
                const sound_filename = sound_name + path.extname(sound); // 'あ.mp3'
                try {
                    const localPath = await copyMp3(sound, sound_filename);
                    await pool.query('INSERT INTO vocabularies (name,mean,example,sino_vietnamese_sound,sound,pronunciation,example_mean,lesson_name,level_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [name, mean, example, sino_vietnamese_sound, sound_filename, pronunciation, example_mean, lesson_name, level_id]);
                    res.send(response.rows)
                } catch (err) {
                    console.error('Error saving to database', err);
                }
            }
        });
});
//deleteVocab
router.delete('/deletevocab/:vocab_id', function (req, res) {
    const { vocab_id } = req.params;
    pool.query('DELETE FROM vocabularies WHERE vocab_id = $1', [vocab_id], (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows[0]);
        }
    })
})
//manager grammar
router.get('/managergrammar', function (req, res, next) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;
    pool.query('SELECT * FROM grammars,levels where grammars.level_id = levels.level_id ORDER BY grammar_id ASC limit $1 offset $2', [limit, offset], (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
//addCourseGrammar
router.post('/addcoursegrammar', upload.single('file_csv'), function (req, res, next) {
    const fileCsvPath = req.file.path;
    const results = [];
    fs.createReadStream(fileCsvPath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            console.log(results);
            fs.unlinkSync(fileCsvPath)
            for (const row of results) {
                const name = row['name'];
                const mean = row['mean'];
                const example = row['example'];
                const mean_example = row['mean_example'];
                const explain = row['explain']
                const lesson_name = row['lesson_name']
                const level_id = row['level_id']
                const sound = row['sound']; // D:\\ĐATN_TuyetAnh\\database\\alphabetHiragana\\あ.mp3'
                const sound_name = path.basename(sound, path.extname(sound));//あ
                const sound_filename = sound_name + path.extname(sound); // 'あ.mp3'
                try {
                    const localPath = await copyMp3(sound, sound_filename);
                    await pool.query('INSERT INTO grammars (name,mean,example,mean_example,sound,explain,lesson_name,level_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [name, mean, example, mean_example, sound_filename, explain, lesson_name, level_id]);
                    res.send(response.rows)
                } catch (err) {
                    console.error('Error saving to database', err);
                }
            }
        });
});
//deleteGrammar
router.delete('/deletegrammar/:grammar_id', function (req, res) {
    const { grammar_id } = req.params;
    pool.query('DELETE FROM grammars WHERE grammar_id = $1', [grammar_id], (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows[0]);
        }
    })
})
//manager communication
router.get('/managercommunication', function (req, res, next) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;
    pool.query('SELECT * FROM communications ORDER BY communication_id ASC limit $1 offset $2', [limit, offset], (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows);
        }
    })
});
//addCourseCommunication
router.post('/addcoursecommunication', upload.single('file_csv'), function (req, res, next) {
    const fileCsvPath = req.file.path;
    const results = [];
    fs.createReadStream(fileCsvPath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            console.log(results);
            fs.unlinkSync(fileCsvPath)
            for (const row of results) {
                const lesson_name = row['lesson_name'];
                const one_a = row['one_a'];
                const one_b = row['one_b'];
                const two_a = row['two_a'];
                const two_b = row['two_b'];
                const three_a = row['three_a'];
                const three_b = row['three_b'];
                const four_a = row['four_a'];
                const four_b = row['four_b'];
                const five_a = row['five_a'];
                const five_b = row['five_b'];
                const mean_shadowing = row['mean_shadowing'];
                const sound = row['sound_shadowing']; // D:\\ĐATN_TuyetAnh\\database\\alphabetHiragana\\あ.mp3'
                const sound_name = path.basename(sound, path.extname(sound));//あ
                const sound_filename = sound_name + path.extname(sound); // 'あ.mp3'
                try {
                    const localPath = await copyMp3(sound, sound_filename);
                    await pool.query('INSERT INTO communications (lesson_name,one_a,one_b,two_a,two_b,three_a,three_b,four_a,four_b,five_a,five_b,mean_shadowing,sound_shadowing) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)', [lesson_name,one_a,one_b,two_a,two_b,three_a,three_b,four_a,four_b,five_a,five_b,mean_shadowing,sound_filename]);
                    res.send(response.rows)
                } catch (err) {
                    console.error('Error saving to database', err);
                }
            }
        });
});
//deleteCommunication
router.delete('/deletecommunication/:communication_id', function (req, res) {
    const { communication_id } = req.params;
    pool.query('DELETE FROM communications WHERE communication_id = $1', [communication_id], (error, response) => {
        if (error) {
            console.log('Truy vấn lỗi' + error);
        } else {
            res.send(response.rows[0]);
        }
    })
})
module.exports = router;
