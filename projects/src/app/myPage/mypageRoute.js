module.exports = function(app){
    const mypage = require('./mypageController');

    // 1. 유저 닉네임 조회 API
    app.get('/app/:groupId/:userId/me/name', mypage.getName);

};


// TODO: 자동로그인 API (JWT 검증 및 Payload 내뱉기)
// JWT 검증 API
// app.get('/app/auto-login', jwtMiddleware, user.check);

// TODO: 탈퇴하기 API