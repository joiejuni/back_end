const { Router } = require('express');

module.exports = function(app){
    const Member = require('../controllers/membersController');

    // 출석 API 
    // 1. 날짜별 출석 현황 조회
    Router.get('/app/members/:groupId/attendance/:date',Member.getAttendance);
}