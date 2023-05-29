// 출결 조회 
async function selectAttend(connection,groupId,scheduleId) {
  const selectAttendListQuery = `
  SELECT JoinGroup.nickname,Attendance.attendanceTime
  FROM Attendance, JoinGroup
  WHERE Attendance.groupId = JoinGroup.groupId AND Attendance.userId = JoinGroup.userId AND JoinGroup.groupId = ? AND Attendance.scheduleId = ?;
                `;
  const [attendRows] = await connection.query(selectAttendListQuery,[groupId,scheduleId]);
  return attendRows;
}


module.exports = {
  selectAttend,
};
