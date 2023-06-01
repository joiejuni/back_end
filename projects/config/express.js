const express = require('express');
const nunjucks = require('nunjucks')
const compression = require('compression');
const methodOverride = require('method-override');
const path = require('path');
var cors = require('cors');
const sessionMiddleware = require('./sessionMiddleware');
const bodyParser = require('body-parser');
const ejs = require("ejs");


module.exports = function () {
    const app = express();

    app.use(compression());

    app.use(express.json());

    app.use(express.urlencoded({extended: false}));

    app.use(methodOverride());

    app.use(cors());
    app.use(sessionMiddleware);
    require('../src/app/login/loginRoute')(app);
    app.use(bodyParser.urlencoded({extended:true}));
    app.set("view engine","ejs");
    app.use(express.static('../public'));
    // TODO: 도메인을 추가할 경우 이곳에 Route를 추가하세요.
    require('../src/app/attendance/attendRoute')(app);
    require('../src/app/assignment/assignRoute')(app);
    require('../src/app/group/groupRoute')(app);
    // require('../src/app/Board/boardRoute')(app);

    app.get('/', (req, res) => {
      // EJS 파일 렌더링
      res.render('../views/login/login.ejs');
    });
    return app;
};