const { group } = require('console');
const pool = require('../conf/db');


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

// 3. 멤버별 개인 출석

exports.createAttendance = async function (){
    const insertAttendParams = [groupId,userId,date,attendTimestamp];
    const connection = await pool.getConnection(async (conn) => conn);
    const createPostResult = await insertAttendance(connection, insertAttendParams);
    return createPostResult;
}

async function insertAttendance(connection,groupId,userId,attendTimestamp,date) {
    const selectMemberAttendQuery = `쿼리문
                  `;
    const [myAttendRows] = await connection.query(selectMemberAttendQuery, groupId,userId,attendTimestamp,date);
    return myAttendRows;
    }

//4. 날짜별 출석 사용자 조회

exports.showAttendanceType = async function (groupId,date) {
    const connection = await pool.getConnection(async (conn) => conn);
    const attendResult = await selectAttendType(connection, groupId,date);
  
    connection.release();
    return attendResult[0];
  };

  
  async function selectAttendType(connection, groupId, date) {
    const selectAttendTypeQuery = `쿼리문
                  `;
    const [attendTypeRows] = await connection.query(selectAttendTypeQuery, groupId,date);
    return attendTypeRows;
    }

 
//5. 날짜별 결석 사용자 조회

exports.showAbsense = async function (groupId,date) {
    const connection = await pool.getConnection(async (conn) => conn);
    const absenseResult = await selectAbsense(connection, groupId,date);
  
    connection.release();
    return absenseResult[0];
  };

  
  async function selectAbsense(connection, groupId, date) {
    const selectAbsenseQuery = `쿼리문
                  `;
    const [absenseRows] = await connection.query(selectAbsenseQuery, groupId,date);
    return absenseRows;
    }   

//6. 날짜별 지각 사용자 조회

exports.showLate = async function (groupId,date) {
    const connection = await pool.getConnection(async (conn) => conn);
    const lateResult = await selectLate(connection, groupId,date);
  
    connection.release();
    return lateResult[0];
  };

  
  async function selectLate(connection, groupId, date) {
    const selectLateQuery = `쿼리문
                  `;
    const [lateRows] = await connection.query(selectLateQuery, groupId,date);
    return lateRows;
    }   
