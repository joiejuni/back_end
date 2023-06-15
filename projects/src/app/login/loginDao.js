//const mysql = require("mysql2");

// 패스워드 체크
async function selectUserPassword(connection, email) {
    const selectUserPasswordQuery = `
          SELECT password
          FROM User
          WHERE email = ?;`;
    const [selectUserPasswordRow] = await connection.query(
        selectUserPasswordQuery,
        email
    );
  
    return selectUserPasswordRow;
  }

// 이메일로 회원 조회
async function selectUserEmail(connection, email) {
    const selectUserEmailQuery = `
                  SELECT userId, email
                  FROM User
                  WHERE email = ?;
              `;
    const [emailRows] = await connection.query(selectUserEmailQuery, email);
    return emailRows;
  }

  async function selectUserAccount(connection, email) {
    const selectUserAccountQuery = `
          SELECT userId
          FROM User 
          WHERE email = ?;`;
    const selectUserAccountRow = await connection.query(
        selectUserAccountQuery,
        email
    );
    return selectUserAccountRow[0];
  }



  module.exports={
    selectUserPassword,
    selectUserEmail,
    selectUserAccount,
  }