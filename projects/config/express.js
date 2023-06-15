const express = require('express');
const compression = require('compression');
const methodOverride = require('method-override');
const sessionMiddleware = require('./sessionMiddleware');
var cors = require('cors');
const path = require('path');
const { pool } = require('./database');


module.exports = function () {
    const app = express();

    app.use(compression());

    app.use(express.json());

    app.use(express.urlencoded({extended: true}));

    app.use(methodOverride());

    app.use(cors());
    app.use(sessionMiddleware);
    require('../src/app/login/loginRoute')(app);
    app.set("view engine","ejs");
    app.set("views","../views");
    app.use(express.static(__dirname + './../public'));
    // app.use(express.static('../public'));
    
    // TODO: 도메인을 추가할 경우 이곳에 Route를 추가하세요.
    require('../src/app/attendance/attendRoute')(app);
    require('../src/app/assignment/assignRoute')(app);
    require('../src/app/group/groupRoute')(app);
    require('../src/app/myPage/mypageRoute')(app);
    require('../src/app/Notice/noticeRoute')(app);

    return app;
};

