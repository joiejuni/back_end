module.exports = function(app){
    const login = require('./loginController');

    // 1. 로그인 API
    app.post('/app/login', login.login);
 //   app.get('/form-handler', login.login);
    app.get('/app/sessionId', login.getUserId);

}