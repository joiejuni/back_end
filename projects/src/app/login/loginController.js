const loginService = require("./loginService");
const loginProvider = require("./loginProvider");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");
const { sign } = require("crypto");



/**
 * API No. 1
 * API Name : 로그인 API
 * [POST] /app/login
 * body : email, passsword
 */

exports.login = async function (req, res) {

    const {email,password} = req.body;
    const userId = await loginService.postSignIn(email, password);
    if (userId === baseResponse.SIGNIN_EMAIL_WRONG) {

        // 이메일이 잘못된 경우
        return res.send('<script>alert("잘못된 이메일입니다."); history.back();</script>');
    }
    else if (userId === baseResponse.SIGNIN_EMAIL_WRONG) {
        // 비밀번호가 잘못된 경우
        return res.send('<script>alert("잘못된 비밀번호입니다."); history.back();</script>');
    }
    else{
        req.session.userId = userId;
        res.render('../views/login/loginComplete.ejs');
    }
};

exports.makeLogin = async function(req,res){
    res.render('../views/login/login.ejs');
}