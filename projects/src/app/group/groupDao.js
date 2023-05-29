// 그룹 조회 
async function selectGroups(connection,userId) {
    const selectGroupListQuery = `
        SELECT userId, groupName, groupType
        FROM myGroup
        WHERE userId = ?;
      `;
    const [groupRows] = await connection.query(selectGroupListQuery,userId);
    return groupRows;
  }
  
  
  module.exports = {
    selectGroups,
  };
  