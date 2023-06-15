// 그룹 조회 
async function selectGroups(connection,userId) {
    const selectGroupListQuery = `
        SELECT JoinGroup.userId, myGroup.groupName, myGroup.groupType
        FROM myGroup, JoinGroup
        WHERE myGroup.groupId = JoinGroup.groupId AND JoinGroup.userId = ?;
      `;
    const [groupRows] = await connection.query(selectGroupListQuery,userId);
    return groupRows;
  }
  
// 운영진 여부 확인
async function selectGroupLeader(connection,userId,groupId) {
    const selectGroupLeaderQuery = `
        SELECT myGroup.membershipFee
        FROM myGroup, JoinGroup
        WHERE myGroup.groupId = JoinGroup.groupId AND JoinGroup.userId = ? AND JoinGroup.groupId = ?;
      `;
    const [isLeaderRows] = await connection.query(selectGroupLeaderQuery,userId,groupId);
    return isLeaderRows;
  }
  

// 그룹에 가입한 참여자인지 확인 
async function selectGroupmember(connection, userId, groupId) {
    const selectGroupmemQuery = `
        SELECT userId
        FROM joinGroup
        WHERE userId = ? AND groupId = ?;
      `;
    const [memberRows] = await connection.query(selectGroupmemQuery,userId,groupId);
    return memberRows;
  }

// 그룹 코드가 맞는지 확인 
async function selectGroupCode(connection,groupId,groupCode) {
    const selectCodeQuery = `
        SELECT groupCode
        FROM myGroup
        WHERE groupId = ?
      `;
    const [GroupCodeRows] = await connection.query(selectCodeQuery,groupId,groupCode);
    return GroupCodeRows;
  }
  
//그룹 가입
async function insertGroupUser(connection,groupId,userId,nickname) {
    const insertGroupUserQuery = `
        INSERT INTO JoinGroup(groupId,userId,nickname,isManager)
        VALUES(?,?,?,0)
    `;
    const [groupUserRows] = await connection.query(insertGroupUserQuery, [groupId,userId,nickname]);
    return groupUserRows;
}

async function selectGroupInfo(connection,groupId){
  const selectGroupInfoQuery = `
          SELECT groupName
          FROM myGroup
          WHERE groupId = ?;
  `;
  const [groupInfoRows] = await connection.query(selectGroupInfoQuery, [groupId]);
  return groupInfoRows;
}


  module.exports = {
    selectGroups,
    selectGroupLeader,
    selectGroupmember,
    selectGroupCode,
    insertGroupUser,
    selectGroupInfo,
  };
  