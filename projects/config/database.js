// const mysql = require('mysql2/promise');
// const {logger} = require('./winston');

// // TODO: 본인의 DB 계정 입력
// const pool = mysql.createPool({
//     host: '127.0.0.1',
//     user: 'root',
//     port: '3306',
//     password: 'eunjae0925',
//     database: 'DGDL'
// });

// module.exports = {
//     pool: pool
// };

const mysql = require('mysql2/promise');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: '34.22.77.203',
    user: 'root',
    port: '3306',
    password: 'dongdong9',
    database: 'DGDL'
});

module.exports = {
    pool: pool
};