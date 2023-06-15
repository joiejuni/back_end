const user = require('./userController');
const path = require('path');
const express = require('../../../config/express');
// const bodyParser = require('body-parser');

module.exports = function(app){

    // 1. 유저 생성 (회원가입) API
    app.get('/app/users/signupPage', (req, res) => {
        res.render('../views/sign/signup.ejs');
    });

    app.post('/app/users/signup', user.postUsers);


    // 2. 유저 조회 API (+ 검색)
    app.get('/app/users',user.getUsers); 

};