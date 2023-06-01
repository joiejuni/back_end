const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
const secret_config = require("../../../config/secret");
const loginProvider = require("./loginProvider");
const loginDao = require("./loginDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");
const session = require('express-session');
const crypto = require("crypto");
const {connect} = require("http2");

exports.postSignIn = async function (email, password) {
    try {
        // 이메일 여부 확인
        const emailRows = await loginProvider.emailCheck(email);
        if (emailRows.length < 1) return errResponse(baseResponse.SIGNIN_EMAIL_WRONG);
      //  const selectEmail = emailRows[0].email;
        // 비밀번호 확인

        /*
      const hashedPassword = await crypto
            .createHash("sha512")
            .update(password)
            .digest("hex");

    */
       const passwordRows = await loginProvider.passwordCheck(email);
      /*  if (passwordRows[0].password !== hashedPassword) {
            return errResponse(baseResponse.SIGNIN_PASSWORD_WRONG);
        }
*/
    if (passwordRows[0].password !== password) {
        return errResponse(baseResponse.SIGNIN_PASSWORD_WRONG);
     }
       const userInfoRows = await loginProvider.accountCheck(email);
       const userId = userInfoRows[0].userId;
       return userId;

    } catch (err) {
        logger.error(`App - postSignIn Service error\n: ${err.message} \n${JSON.stringify(err)}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};

