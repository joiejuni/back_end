const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");
const userDao = require("./userDao");


exports.retrieveUserList = async function (email) {
  if (!email) {
    const connection = await pool.getConnection(async (conn) => conn);
    const userListResult = await userDao.selectUser(connection);
    connection.release();

    return userListResult;

  } else {
    const connection = await pool.getConnection(async (conn) => conn);
    const userListResult = await userDao.selectUserEmail(connection, email);
    connection.release();

    return userListResult;
  }
};

exports.retrieveUser = async function (userId) {
  const connection = await pool.getConnection(async (conn) => conn);
  const userResult = await userDao.selectUserId(connection, userId);

  connection.release();

  return userResult[0];
};

exports.userIdCheck = async function (userId) {
  const connection = await pool.getConnection(async (conn) => conn);
  const userIdCheckResult = await userDao.selectUserId(connection, userId);
  connection.release();

  return userIdCheckResult;
};

exports.emailCheck = async function (email) {
  const connection = await pool.getConnection(async (conn) => conn);
  const emailCheckResult = await userDao.selectUserEmail(connection, email);
  connection.release();

  return emailCheckResult;
};

exports.passwordCheck = async function (selectUserPasswordParams) {
  const connection = await pool.getConnection(async (conn) => conn);
  const passwordCheckResult = await userDao.selectUserPassword(
      connection,
      selectUserPasswordParams
  );
  connection.release();
  return passwordCheckResult[0];
};

exports.accountCheck = async function (email) {
  const connection = await pool.getConnection(async (conn) => conn);
  const userAccountResult = await userDao.selectUserAccount(connection, email);
  connection.release();

  return userAccountResult;
};

//이메일 인증
// exports.sendAuthNumber = async function(email, res) {
//   // 6자리 난수 생성
//   const authNumber = Math.floor(Math.random() * 888888) + 111111;

//   const mailOptions = {
//     from: '동고동락', // 발송 주체
//     to: email, // 인증을 요청한 이메일 주소
//     subject: '[동고동락] 이메일 확인 인증번호 안내', // 이메일 제목
//     text: `아래 인증번호를 확인하여 이메일 주소 인증을 완료해 주세요.\n
//     연락처 이메일 👉 ${email}\n
//     인증번호 6자리 👉 ${authNumber}`, // 이메일 내용
//   };

//   transporter.sendMail(mailOptions, (error, res) => {
//     if (error) {
//       res.status(500).json({
//         message: `Failed to send authentication email to ${email}`,
//       });
//     } else {
//       res.status(200).json({
//         authNumber,
//         message: `Authentication mail is sent to ${email}`,
//       });
//     }
//     smtpTransport.close();
//   });

//   return authNumber;
// };