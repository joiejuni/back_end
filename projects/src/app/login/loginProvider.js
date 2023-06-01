const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const loginDao = require("./loginDao");

exports.emailCheck = async function (email) {
    const connection = await pool.getConnection(async (conn) => conn);
    const emailCheckResult = await loginDao.selectUserEmail(connection, email);
    connection.release();
  
    return emailCheckResult;
  };
  
exports.passwordCheck = async function (email) {
    const connection = await pool.getConnection(async (conn) => conn);
    const passwordCheckResult = await loginDao.selectUserPassword(
        connection,
        email
    );
    connection.release();
    return passwordCheckResult;
  }; 

exports.accountCheck = async function (email) {
    const connection = await pool.getConnection(async (conn) => conn);
    const userAccountResult = await loginDao.selectUserAccount(connection, email);
    connection.release();
  
    return userAccountResult;
  };

exports.returnUserId = async function (sessionId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const userIdResult = await loginDao.selectUserId(connection, sessionId);
    connection.release();
  
    return userIdResult;
  };