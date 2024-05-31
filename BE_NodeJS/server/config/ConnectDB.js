const { Pool } = require('pg');
//kết nối db 
const pool = new Pool({
    user: 'postgres',
    password: 'tuyetanh',
    host: 'localhost',
    port: 5432,
    database: 'selfStudyJapanese',
})
module.exports = pool;