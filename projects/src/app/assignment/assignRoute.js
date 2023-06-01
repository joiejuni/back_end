module.exports = function(app){
    const assignment = require('./assignController');

    // 1. 출결 조회 API
    app.get('/app/:groupId/assignment', assignment.getAssginment);

};
