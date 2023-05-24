// 유저 닉네임 조회 
async function selectName(connection) {
    const selectNameListQuery = `
    SELECT JoinGroup.nickname
    FROM JoinGroup, User
    WHERE JoinGroup.userId = User.userId;
                  `;
    const [nameRows] = await connection.query(selectNameListQuery);
    return nameRows;
  }
  
  
  module.exports = {
    selectName,
  };
