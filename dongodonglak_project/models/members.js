const pool = require('../config/database');


// 출석

// 1. 날짜별 출석 조회

exports.showAttendance = async function (groupId,date) {
    const connection = await pool.getConnection(async (conn) => conn);
    const attendResult = await selectAttendance(connection, groupId,date);
  
    connection.release();
    return attendResult[0];
  };

  
  async function selectAttendance(connection, groupId, date) {
    const selectAttendanceQuery = `쿼리문
                  `;
    const [attendanceRows] = await connection.query(selectAttendanceQuery, groupId,date);
    return attendanceRows;
    }

// 2. 멤버이름, 날짜별 출석현황조회 

exports.memberAttendance = async function (groupId,date,membername) {
    const connection = await pool.getConnection(async (conn) => conn);
    const attendResult = await selectMemberAttend(connection, groupId,date,membername);
  
    connection.release();
    return attendResult[0];
  };

  
  async function selectMemberAttend(connection, groupId, date,membername) {
    const selectMemberAttendQuery = `쿼리문
                  `;
    const [memberAttendRows] = await connection.query(selectMemberAttendQuery, groupId,date,membername);
    return memberAttendRows;
    }