module.exports = function(app){
    const attend = require('./attendController');

    // 1. 출결 조회 API
    app.get('/app/members/:groupId/attendance/:date', attend.getAttendance);

};


