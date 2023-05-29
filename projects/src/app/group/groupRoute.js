module.exports = function(app){
    const group = require('./groupController');

    // 1. ddd

    //2. 그룹 조회 API
    app.get('/app/groups', group.getGroups);

};


