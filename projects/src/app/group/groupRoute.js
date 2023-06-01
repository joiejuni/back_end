module.exports = function(app){
  const group = require('./groupController');

  // 1. 그룹 생성 API
  app.post('/app/group', group.createGroup);
};